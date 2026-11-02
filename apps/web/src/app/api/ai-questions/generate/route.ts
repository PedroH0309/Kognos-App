import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {createAndReviewQuestions} from '@/lib/nvidia-question-engine';
import {examBlueprints,validateGenerationRequest} from '@/lib/exam-blueprints';
import {publicGeneratedQuestion,excludePreviouslyGenerated} from '@/lib/ai-question-validation';
import {safeOfficialUrl} from '@/lib/syllabus-sources';
import {validLessonAIReference} from '@/lib/lesson-ai-links';
import type {VerifiedSyllabusReference} from '@/lib/nvidia-question-engine';
import {describeGenerationError} from '@/lib/ai-generation-errors';
import {shouldRefundAIQuota,refundAIQuota} from '@/lib/ai-quota';

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
 let quotaDay:string|null=null;
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
  quotaDay=new Date().toISOString().slice(0,10);
  const {data:reserved,error:quotaError}=await ctx.supabaseAdmin.rpc('reserve_ai_quota',{p_user_id:userId,p_daily_limit:limit});
  if(quotaError)return error('Configure as migrações do Supabase, incluindo 0002 e 0005.',503);
  if(reserved!==true)return error(`Cota diária esgotada: até ${limit} usos e ${limit*2} tentativas de IA, compartilhadas com o tutor. Reinicia às 00:00 UTC.`,429);
  const approved=await createAndReviewQuestions(generation,verified||undefined);
  if(!approved.length)return error('A revisão automática não aprovou as questões geradas. Nenhuma foi salva; tente outro tema.',422);
  const {data:prior,error:priorError}=await ctx.supabaseAdmin.from('kognos_ai_questions')
    .select('prompt').eq('user_id',userId).eq('institution',generation.institution)
    .eq('subject',generation.subject).eq('topic',generation.topic).order('created_at',{ascending:false}).limit(500);
  if(priorError)return error('Não foi possível conferir duplicidades no banco pessoal.',503);
  const unique=excludePreviouslyGenerated(approved,(prior||[]).map(row=>row.prompt));
  if(!unique.length)return error('As questões propostas já existem no seu banco. Tente outro nível ou conteúdo.',409);
  const blueprint=examBlueprints[generation.institution];
  const rows=unique.map(q=>({
   user_id:userId,institution:generation.institution,edition:verified?.edition||blueprint.edition,source_title:verified?.sourceTitle||blueprint.sourceTitle,
   source_url:verified?.sourceUrl||blueprint.sourceUrl,source_topic_id:sourceTopicId,lesson_id:generation.lessonId||null,subject:generation.subject,topic:generation.topic,difficulty:generation.difficulty,
   prompt:q.prompt,options:q.options,correct_index:q.correct_index,explanation:q.explanation,review_status:'auto_reviewed'
  }));
  const {data, error:insertError}=await ctx.supabaseAdmin.from('kognos_ai_questions').insert(rows)
    .select('id,institution,edition,source_title,source_url,source_topic_id,lesson_id,subject,topic,difficulty,prompt,options,created_at,review_status');
  if(insertError||!data)return error('Falha ao salvar questões. Confira as migrações 0005 e 0007 e tente novamente.',503);
  return NextResponse.json({questions:data.map(r=>publicGeneratedQuestion(r as Record<string,unknown>)),approved:data.length,rejected:generation.count-data.length},{headers:{'Cache-Control':'no-store'}});
 }catch(e){
  const failure=describeGenerationError(e);
  // Never log raw exceptions: providers may include request content in error payloads.
  console.error('[KOGNOS][AI_GENERATION]',failure.code);
  if(quotaDay&&shouldRefundAIQuota(failure.code))await refundAIQuota(ctx.supabaseAdmin,userId,quotaDay);
  return NextResponse.json({error:failure.message,code:failure.code},{
   status:failure.status,headers:{'Cache-Control':'no-store'}
  });
 }
});
export async function POST(request:Request){
 if(!process.env.NVIDIA_API_KEY)return error('Configure NVIDIA_API_KEY no servidor.',503);
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase não configurado no servidor.',503);
 return handler(request);
}