import {randomUUID} from 'node:crypto';
import {contentIdentity,contentJson,smallJson} from '@/lib/content-server';
import {findCurriculumTopic} from '@/lib/curriculum-catalog';
import {developCourse} from '@/lib/course-generator';
import {isAIJobConfigured} from '@/lib/ai-provider';
export const runtime='nodejs';export const maxDuration=120;
export async function POST(request:Request){
 const auth=await contentIdentity(request);if('response' in auth)return auth.response;
 let raw;try{raw=await smallJson(request,2000);}catch{return contentJson({error:'Solicitação inválida.'},400);}
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return contentJson({error:'Solicitação inválida.'},400);
 const v=raw as {id?:unknown;consent?:unknown};
 const topic=typeof v.id==='string'?findCurriculumTopic(v.id):null;
 if(!topic||v.consent!==true)return contentJson({error:'Escolha um assunto do currículo e confirme o uso da IA.'},400);
 if(!isAIJobConfigured('generate')||!isAIJobConfigured('review'))return contentJson({error:'Configure os provedores de geração e revisão no servidor.'},503);
 const {data:existing,error:findError}=await auth.db.from('kognos_content_documents').select('published,archived').eq('id',topic.id).maybeSingle();
 if(findError)return contentJson({error:'Execute a migração 0015 antes de desenvolver aulas.'},503);
 if(existing)return existing.published&&!existing.archived?contentJson({lesson:existing.published,cached:true}):contentJson({error:'Este tema está sob edição ou foi retirado. Somente o administrador pode republicá-lo.'},409);
 const token=randomUUID();const {data:lock,error:lockError}=await auth.db.rpc('kognos_claim_course',{p_actor:auth.user.id,p_id:topic.id,p_token:token});
 if(lockError)return contentJson({error:'Não foi possível reservar a geração.'},503);
 if(!lock)return contentJson({error:'Esta aula já está sendo desenvolvida. Atualize em alguns instantes.'},409);
 try{
  const cap=Math.max(1,Math.min(100,Number(process.env.COURSE_DAILY_REQUEST_LIMIT)||20));
  const {data:reserved,error:quotaError}=await auth.db.rpc('reserve_ai_quota',{p_user_id:auth.user.id,p_daily_limit:cap});
  if(quotaError)return contentJson({error:'Controle de uso indisponível. Confira a migração 0002.'},503);
  if(!reserved)return contentJson({error:'Limite diário de desenvolvimento de aulas atingido. Continue após a renovação.'},429);
  const lesson=await developCourse(topic);
  const {data:inserted,error:saveError}=await auth.db.rpc('kognos_finish_course',{p_actor:auth.user.id,p_id:topic.id,p_token:token,p_document:lesson});
  if(saveError)return contentJson({error:'A aula não pôde ser salva. Nenhuma publicação foi confirmada.'},503);
  if(!inserted)return contentJson({error:'O tema mudou durante a geração. Atualize para ver a versão atual; nenhuma edição foi sobrescrita.'},409);
  return contentJson({lesson,cached:false},201);
 }catch(e){
  const code=e instanceof Error?e.message:'';
  return contentJson({error:code==='COURSE_REVIEW_REJECTED'?'A revisão rejeitou esta aula. Nenhum conteúdo foi publicado. Tente novamente ou peça revisão editorial.':/RATE_LIMIT/.test(code)?'O provedor atingiu sua cota. Aguarde antes de tentar novamente.':'Não foi possível desenvolver e revisar uma aula completa. Nenhum conteúdo parcial foi publicado.'},/RATE_LIMIT/.test(code)?429:502);
 }finally{await auth.db.from('kognos_course_generation_locks').delete().eq('course_id',topic.id).eq('token',token);}
}
