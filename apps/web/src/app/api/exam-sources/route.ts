import {NextResponse} from 'next/server';
import {withSupabase} from '@supabase/server';
import {editorAuthorized,isUuid,parseImportSubmission,retrieveSourceText,sourceFingerprint} from '@/lib/syllabus-sources';
import {suggestSourceTopics} from '@/lib/syllabus-extractor';
import {visibleCatalog,type DbSyllabusSource,type DbSyllabusTopic} from '@/lib/syllabus-catalog';

export const runtime='nodejs';
export const maxDuration=120;
const json=(body:object,status=200)=>NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}});
const error=(message:string,status:number)=>json({error:message},status);
const configReady=()=>Boolean(process.env.SUPABASE_URL&&process.env.SUPABASE_PUBLISHABLE_KEY&&process.env.SUPABASE_SECRET_KEY&&process.env.SUPABASE_JWKS_URL);
const guard=()=>!configReady()?error('Configure o Supabase no servidor antes de consultar as matrizes.',503):null;
const editor=(id:string|undefined)=>editorAuthorized(id,process.env.KOGNOS_EDITOR_USER_IDS);

const list=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!userId)return error('Entre na sua conta para consultar as fontes.',401);
 const editorMode=editor(userId);
 const [{data:sources,error:sourceError},{data:topics,error:topicError}]=await Promise.all([
  ctx.supabaseAdmin.from('kognos_exam_sources').select('id,institution,edition,source_title,source_url,source_method,review_status,created_at').order('created_at',{ascending:false}).limit(100),
  ctx.supabaseAdmin.from('kognos_exam_topics').select('id,source_id,subject,topic,evidence_excerpt,review_status').order('created_at',{ascending:false}).limit(400),
 ]);
 if(sourceError||topicError)return error('O catálogo não está disponível. Aplique a migração 0006 no Supabase.',503);
 const src=(sources||[]) as DbSyllabusSource[],rows=(topics||[]) as DbSyllabusTopic[];
 const approved=visibleCatalog(src,rows);
 if(!editorMode)return json({topics:approved,editor:false});
 const reviewTopics=rows.filter(t=>t.review_status==='pending');
 return json({topics:approved,editor:true,reviewTopics,reviewSources:src});
});

const ingest=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!editor(userId))return error('A importação de matrizes exige permissão editorial.',403);
 if(!process.env.NVIDIA_API_KEY)return error('Configure a API NVIDIA no servidor.',503);
 let raw:unknown;
 try{const body=await request.text();if(body.length>30000)return error('Documento excede o limite de texto.',413);raw=JSON.parse(body);}catch{return error('Dados inválidos.',400);}
 const submission=parseImportSubmission(raw);
 if(!submission)return error('Revise instituição, edição, título, link HTTPS oficial e conteúdo mínimo do documento.',400);
 let text:string;
 try{text=await retrieveSourceText(submission);}catch(e){
  const msg=e instanceof Error?e.message:'';
  if(msg==='SOURCE_UNSUPPORTED_TYPE')return error('PDF não é lido diretamente nesta versão. Cole o texto extraído e selecione transcrição.',415);
  if(msg==='SOURCE_TOO_LARGE')return error('Página oficial grande demais para esta importação.',413);
  if(msg==='SOURCE_NOT_ENOUGH_TEXT')return error('A página não contém texto suficiente para extrair conteúdos.',422);
  return error('Não foi possível consultar essa página. Verifique o link; URLs redirecionadas ou bloqueadas exigem transcrição manual.',422);
 }
 const hash=sourceFingerprint(text);
 const {data:prior,error:priorError}=await ctx.supabaseAdmin.from('kognos_exam_sources')
  .select('id').eq('institution',submission.institution).eq('edition',submission.edition).eq('source_url',submission.sourceUrl).eq('content_sha256',hash).limit(1).maybeSingle();
 if(priorError)return error('Catálogo indisponível. Execute a migração 0006.',503);
 if(prior)return error('Esta versão do documento já foi importada.',409);
 const dailyLimit=Math.max(1,Math.min(100,Number(process.env.AI_DAILY_REQUEST_LIMIT||'20')||20));
 const {data:reserved,error:quotaError}=await ctx.supabaseAdmin.rpc('reserve_ai_quota',{p_user_id:userId,p_daily_limit:dailyLimit});
 if(quotaError)return error('Controle de cota indisponível. Aplique a migração 0002.',503);
 if(reserved!==true)return error('Cota diária compartilhada de IA esgotada.',429);
 let extracted;
 try{extracted=await suggestSourceTopics({text,institution:submission.institution,edition:submission.edition});}
 catch{return error('A extração automática falhou. Verifique o documento e a NVIDIA.',502);}
 if(extracted.length===0)return error('Nenhum tópico com evidência literal foi extraído. Esse documento pode não conter uma matriz curricular explícita.',422);
 const {data:created,error:insertError}=await ctx.supabaseAdmin.from('kognos_exam_sources').insert({
  institution:submission.institution,edition:submission.edition,source_title:submission.sourceTitle,source_url:submission.sourceUrl,
  source_method:submission.method,content_sha256:hash,imported_by:userId,review_status:'pending'
 }).select('id').single();
 if(insertError||!created)return error('Não foi possível registrar a fonte. Confira migração 0006 e duplicidades.',503);
 const {error:topicInsertError}=await ctx.supabaseAdmin.from('kognos_exam_topics').insert(extracted.map(item=>({
  source_id:created.id,subject:item.subject,topic:item.topic,evidence_excerpt:item.evidence,review_status:'pending'
 })));
 if(topicInsertError){await ctx.supabaseAdmin.from('kognos_exam_sources').delete().eq('id',created.id);return error('Não foi possível salvar as propostas extraídas.',503);}
 return json({sourceId:created.id,proposed:extracted.length,notice:'As propostas aguardam análise editorial. Nenhuma foi publicada automaticamente.'},201);
});

const moderate=withSupabase({auth:'user',audience:'authenticated',issuer:'https://ktjdlvojnunjntwyodot.supabase.co/auth/v1'},async(request,ctx)=>{
 const userId=ctx.userClaims?.id;
 if(!editor(userId))return error('É necessária permissão editorial para revisar a matriz.',403);
 let body:unknown;
 try{const raw=await request.text();if(raw.length>1000)return error('Revisão muito grande.',413);body=JSON.parse(raw);}catch{return error('Dados de revisão inválidos.',400);}
 if(!body||typeof body!=='object'||Array.isArray(body))return error('Dados de revisão inválidos.',400);
 const v=body as Record<string,unknown>;
 if(!isUuid(v.topicId)||(v.decision!=='approved'&&v.decision!=='rejected'))return error('Tópico ou decisão inválidos.',400);
 const {data:topic,error:findError}=await ctx.supabaseAdmin.from('kognos_exam_topics').select('id,source_id').eq('id',v.topicId).maybeSingle();
 if(findError)return error('Banco de fontes indisponível.',503);
 if(!topic)return error('Tópico não encontrado.',404);
 const {error:updateError}=await ctx.supabaseAdmin.from('kognos_exam_topics').update({review_status:v.decision,reviewed_by:userId,reviewed_at:new Date().toISOString()}).eq('id',topic.id);
 if(updateError)return error('Não foi possível concluir a revisão.',503);
 if(v.decision==='approved'){
  const {error:sourceError}=await ctx.supabaseAdmin.from('kognos_exam_sources').update({review_status:'approved'}).eq('id',topic.source_id);
  if(sourceError)return error('A revisão do tópico foi registrada, mas a ativação da fonte falhou.',503);
 }
 return json({ok:true,topicId:topic.id,decision:v.decision});
});

export async function GET(request:Request){return guard()||list(request);}
export async function POST(request:Request){return guard()||ingest(request);}
export async function PATCH(request:Request){return guard()||moderate(request);}