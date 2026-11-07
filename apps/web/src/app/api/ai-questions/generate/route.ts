import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {createAndReviewQuestionBatch} from '@/lib/nvidia-question-engine';
import {examBlueprints,validateGenerationRequest} from '@/lib/exam-blueprints';
import {publicGeneratedQuestion,excludePreviouslyGenerated} from '@/lib/ai-question-validation';
import {safeOfficialUrl} from '@/lib/syllabus-sources';
import {validLessonAIReference} from '@/lib/lesson-ai-links';
import type {VerifiedSyllabusReference} from '@/lib/nvidia-question-engine';
import {describeGenerationError} from '@/lib/ai-generation-errors';
import {isAIJobConfigured,AIProviderRequestError,AIProviderRateLimitError} from '@/lib/ai-provider';
import {tutorDailyRequestLimit} from '@/lib/tutor-usage-policy';

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
  // A public beta must not expose the shared provider keys to unlimited requests.
  // Reserve atomically in PostgreSQL, sharing the same per-account UTC daily quota as Kog.
  // If migration 0002 is missing, fail closed rather than calling the provider.
  const {data:reserved,error:quotaError}=await ctx.supabaseAdmin.rpc('reserve_ai_quota',{
   p_user_id:userId,p_daily_limit:tutorDailyRequestLimit()
  });
  if(quotaError)return error('Controle diário de IA indisponível. Confira a migração 0002.',503);
  if(!reserved)return error('Limite diário compartilhado de ações com IA atingido. Tente novamente após a renovação.',429);
  const batch=await createAndReviewQuestionBatch(generation,verified||undefined);
  const approved=batch.approved;
  if(!approved.length){
   // One rejected batch must not abort the entire ten-question lesson.
   // Return only coarse, server-computed counts (never the draft, keys or
   // reviewer rationale) so the client can retry a SMALLER batch safely.
   console.warn('[KOGNOS][AI] no independently approved items',batch.diagnostics);
   return NextResponse.json({
    code:'AI_REVIEW_NO_APPROVAL',
    error:'A revisão independente não aprovou este lote. O Kognos pode tentar outra abordagem com menos questões, sem reutilizar itens antigos.',
    diagnostics:batch.diagnostics
   },{status:422,headers:{'Cache-Control':'no-store'}});
  }
  const {data:prior,error:priorError}=await ctx.supabaseAdmin.from('kognos_ai_questions')
    .select('prompt').eq('user_id',userId).eq('institution',generation.institution)
    // Check across disciplines and topics to catch repeated wording that was
    // saved under a different topic. Bounded to the latest 1,000 records.
    .order('created_at',{ascending:false}).limit(1000);
  if(priorError)return error('Não foi possível conferir duplicidades no banco pessoal.',503);
  const unique=excludePreviouslyGenerated(approved,(prior||[]).map(row=>row.prompt));
  if(!unique.length)return NextResponse.json({
   code:'AI_DUPLICATE_OUTPUT',
   error:'As questões aprovadas repetem itens existentes. O Kognos pode solicitar outros exemplos.'
  },{status:409,headers:{'Cache-Control':'no-store'}});
  const blueprint=examBlueprints[generation.institution];
  const rows=unique.map(q=>({
   user_id:userId,institution:generation.institution,edition:verified?.edition||blueprint.edition,source_title:verified?.sourceTitle||blueprint.sourceTitle,
   source_url:verified?.sourceUrl||blueprint.sourceUrl,source_topic_id:sourceTopicId,lesson_id:generation.lessonId||null,subject:generation.subject,topic:generation.topic,difficulty:generation.difficulty,
   prompt:q.prompt,options:q.options,correct_index:q.correct_index,explanation:q.explanation,review_status:'auto_reviewed'
  }));
  const {data, error:insertError}=await ctx.supabaseAdmin.from('kognos_ai_questions').insert(rows)
    .select('id,institution,edition,source_title,source_url,source_topic_id,lesson_id,subject,topic,difficulty,prompt,options,created_at,review_status');
  if(insertError?.code==='23514')return error('Este vestibular ainda não foi liberado no banco de questões. Execute a migração 0014 e tente novamente.',503);
  if(insertError||!data)return error('Falha ao salvar questões. Confira as migrações 0005, 0007 e 0014 e tente novamente.',503);
  return NextResponse.json({
   questions:data.map(r=>publicGeneratedQuestion(r as Record<string,unknown>)),
   approved:data.length,rejected:generation.count-data.length,
   diagnostics:{...batch.diagnostics,duplicates:approved.length-unique.length}
  },{headers:{'Cache-Control':'no-store'}});
 }catch(e){
  const failure=describeGenerationError(e);
  // Report only controlled diagnostic metadata, never upstream response text.
  const rejected=e instanceof AIProviderRequestError?e:null;
  const limited=e instanceof AIProviderRateLimitError?e:null;
  const stage=rejected?.phase==='generate'?'geração':rejected?.phase==='review'?'revisão':null;
  const categoryLabel=rejected?.category==='structured_json'?'formatação JSON':
   rejected?.category==='invalid_parameter'?'parâmetro incompatível':
   rejected?.category==='token_budget'?'orçamento de tokens':'solicitação recusada';
  console.error('[KOGNOS][AI_GENERATION]',failure.code,
   ...(rejected?[rejected.phase,rejected.provider,rejected.category]:[]));
  const detail=rejected&&stage?` Etapa: ${stage} (${rejected.provider}); diagnóstico: ${categoryLabel}.`:
   limited?` A cota gratuita do provedor ${limited.provider} está temporariamente esgotada.${limited.retryAfterSeconds?` Tente novamente após aproximadamente ${limited.retryAfterSeconds} segundos.`:' Aguarde a renovação dos limites da conta.'}`:'';
  const headers:Record<string,string>={'Cache-Control':'no-store'};
  if(limited?.retryAfterSeconds)headers['Retry-After']=String(limited.retryAfterSeconds);
  return NextResponse.json({
   error:failure.message+detail,code:failure.code,
   ...(rejected?{provider:rejected.provider,phase:rejected.phase,category:rejected.category}:{})
  },{status:failure.status,headers});
 }
});
export async function POST(request:Request){
 if(!isAIJobConfigured('generate')||!isAIJobConfigured('review'))return error('Configure GROQ_API_KEY e/ou GEMINI_API_KEY no servidor para ativar a geração gratuita.',503);
 if(!process.env.SUPABASE_URL||!process.env.SUPABASE_PUBLISHABLE_KEY||!process.env.SUPABASE_SECRET_KEY||!process.env.SUPABASE_JWKS_URL)return error('Supabase não configurado no servidor.',503);
 return handler(request);
}