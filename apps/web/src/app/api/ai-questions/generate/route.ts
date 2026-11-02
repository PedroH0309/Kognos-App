import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {createAndReviewQuestions} from '@/lib/nvidia-question-engine';
import {examBlueprints,validateGenerationRequest} from '@/lib/exam-blueprints';
import {publicGeneratedQuestion} from '@/lib/ai-question-validation';
import {safeOfficialUrl} from '@/lib/syllabus-sources';
import {validLessonAIReference} from '@/lib/lesson-ai-links';
import type {VerifiedSyllabusReference} from '@/lib/nvidia-question-engine';

export const runtime='nodejs';
export const maxDuration=180;
const error=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
const handler=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return error('Entre na sua conta para gerar questões.',401);
 let body:unknown;
 try{const raw=await request.text();if(raw.length>2500)return error('Configuração muito grande.',413);body=JSON.parse(raw);}catch{return error('Dados de geração inválidos.',400);}
 const generation=validateGenerationRequest(body);
 if(!generation)return error('Escolha uma instituição, disciplina, assunto e dificuldade válidos (até cinco questões).',400);
 if(generation.lessonId&&!validLessonAIReference(generation.lessonId,generation.institution,generation.subject,generation.topic))return error('A aula não corresponde ao assunto selecionado. Escolha um tema válido para esta trilha.',400);
 try{
  // Never accept unverified source metadata from the browser. Match an approved topic + source in private tables.
  let verified:VerifiedSyllabusReference|null=null;
  let sourceTopicId:string|null=null;
  if(generation.sourceTopicId){
   const {data:topic,error:topicError}=await ctx.supabaseAdmin.from('kognos_exam_topics')
     .select('id,source_id,subject,topic,evidence_excerpt,review_status').eq('id',generation.sourceTopicId).maybeSingle();
   if(topicError)return error('Catálogo de fontes indisponível. Execute a migração 0006.',503);
   if(!topic||topic.review_status!=='approved'||topic.subject!==generation.subject||topic.topic!==generation.topic)return error('O tema informado não está aprovado nessa matriz.',400);
   const {data:source,error:sourceError}=await ctx.supabaseAdmin.from('kognos_exam_sources')
     .select('institution,edition,source_title,source_url,review_status').eq('id',topic.source_id).maybeSingle();
   if(sourceError)return error('Catálogo de fontes indisponível.',503);
   if(!source||source.review_status!=='approved'||source.institution!==generation.institution||!safeOfficialUrl(source.source_url))return error('A referência oficial não está disponível ou foi retirada.',400);
   verified={edition:source.edition,sourceTitle:source.source_title,sourceUrl:source.source_url,evidence:topic.evidence_excerpt};
   sourceTopicId=topic.id;
  }
  // Validate approved source provenance BEFORE consuming the student's daily AI quota.
  const limit=Math.max(1,Math.min(100,Number(process.env.AI_DAILY_REQUEST_LIMIT||'20')||20));
  const {data:reserved,error:quotaError}=await ctx.supabaseAdmin.rpc('reserve_ai_quota',{p_user_id:userId,p_daily_limit:limit});
  if(quotaError)return error('Configure as migrações do Supabase, incluindo 0002 e 0005.',503);
  if(reserved!==true)return error(`Você atingiu o limite compartilhado de ${limit} solicitações à IA hoje.`,429);
  const approved=await createAndReviewQuestions(generation,verified||undefined);
  if(!approved.length)return error('A revisão automática não aprovou as questões geradas. Nenhuma foi salva; tente outro tema.',422);
  const blueprint=examBlueprints[generation.institution];
  const rows=approved.map(q=>({
   user_id:userId,institution:generation.institution,edition:verified?.edition||blueprint.edition,source_title:verified?.sourceTitle||blueprint.sourceTitle,
   source_url:verified?.sourceUrl||blueprint.sourceUrl,source_topic_id:sourceTopicId,lesson_id:generation.lessonId||null,subject:generation.subject,topic:generation.topic,difficulty:generation.difficulty,
   prompt:q.prompt,options:q.options,correct_index:q.correct_index,explanation:q.explanation,review_status:'auto_reviewed'
  }));
  const {data, error:insertError}=await ctx.supabaseAdmin.from('kognos_ai_questions').insert(rows)
    .select('id,institution,edition,source_title,source_url,source_topic_id,lesson_id,subject,topic,difficulty,prompt,options,created_at,review_status');
  if(insertError||!data)return error('Falha ao salvar questões. Confira as migrações 0005 e 0007 e tente novamente.',503);
  return NextResponse.json({questions:data.map(r=>publicGeneratedQuestion(r as Record<string,unknown>)),approved:data.length,rejected:generation.count-data.length},{headers:{'Cache-Control':'no-store'}});
 }catch(e){
  if(e instanceof Error){if(e.message==='NVIDIA_AUTH')return error('Chave NVIDIA inválida ou modelo não autorizado.',502);if(e.message==='NVIDIA_RATE_LIMIT')return error('Limite temporário da NVIDIA atingido.',429);if(e.message==='NVIDIA_NOT_CONFIGURED')return error('Configure NVIDIA_API_KEY no servidor.',503);if(e.message.includes('JSON')||e.message.includes('validação'))return error('A IA retornou um formato inválido. Nenhuma questão foi publicada.',422);}
  return error('Não foi possível gerar e revisar as questões agora.',503);
 }
});
export async function POST(request:Request){
 if(!process.env.NVIDIA_API_KEY)return error('Configure NVIDIA_API_KEY no servidor.',503);
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase não configurado no servidor.',503);
 return handler(request);
}