import {contentAdmin,contentJson,smallJson} from '@/lib/content-server';
import {parseCourseDocument} from '@/lib/course-content';
import {findCurriculumTopic} from '@/lib/curriculum-catalog';
export const runtime='nodejs';
export async function GET(request:Request){
 const auth=await contentAdmin(request);if('response' in auth)return auth.response;
 const url=new URL(request.url),history=url.searchParams.get('history');
 if(history){
  const {data,error}=await auth.db.from('kognos_content_history').select('revision,snapshot,created_at').eq('document_id',history).order('revision',{ascending:false}).limit(30);
  return error?contentJson({error:'Não foi possível ler o histórico.'},503):contentJson({history:data});
 }
 const {data,error}=await auth.db.from('kognos_content_documents').select('*').order('updated_at',{ascending:false}).range(0,999);
 return error?contentJson({error:'Catálogo indisponível. Execute a migração 0015.'},503):contentJson({documents:data,userId:auth.user.id});
}
export async function POST(request:Request){
 const auth=await contentAdmin(request);if('response' in auth)return auth.response;
 let raw;try{raw=await smallJson(request);}catch{return contentJson({error:'Conteúdo inválido ou acima de 160 KB.'},400);}
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return contentJson({error:'Dados inválidos.'},400);
 const v=raw as Record<string,unknown>;
 if(typeof v.id!=='string'||!/^[a-z][a-z0-9-]{2,90}$/.test(v.id)||!Number.isInteger(v.expectedRevision)||Number(v.expectedRevision)<0||!['save','publish','unpublish','archive','restore'].includes(String(v.action)))return contentJson({error:'Identificador, versão ou operação inválidos.'},400);
 const document=v.action==='save'?parseCourseDocument(v.document,false):null;
 if(v.action==='save'&&(!document||document.id!==v.id))return contentJson({error:'Preencha todos os níveis, tarefas e campos obrigatórios. Confira links, vídeos e alternativas.'},400);
 if(document?.kind==='lesson'){
  const topic=findCurriculumTopic(document.id);
  if(topic&&(topic.subject!==document.subject||topic.topic!==document.topic||document.exams.some(e=>!topic.exams.includes(e))))return contentJson({error:'A identidade de um tema curricular existente não pode ser alterada. Crie uma aula adicional.'},400);
 }
 if(document?.kind==='question'&&!findCurriculumTopic(document.courseId)){
  const {data}=await auth.db.from('kognos_content_documents').select('id').eq('id',document.courseId).eq('kind','lesson').maybeSingle();
  if(!data)return contentJson({error:'Vincule a questão a uma aula existente.'},400);
 }
 if(v.action==='publish'){
  const {data}=await auth.db.from('kognos_content_documents').select('draft').eq('id',v.id).maybeSingle();
  if(!parseCourseDocument(data?.draft))return contentJson({error:'O rascunho precisa de conteúdo válido antes de publicar.'},422);
 }
 const {data,error}=await auth.db.rpc('kognos_save_content',{p_actor:auth.user.id,p_id:v.id,p_expected:v.expectedRevision,p_action:v.action,p_document:document});
 if(error){
  if(error.message.includes('REVISION_CONFLICT'))return contentJson({error:'Outra edição alterou este item. Recarregue antes de salvar; seu texto foi mantido no formulário.'},409);
  return contentJson({error:'Não foi possível salvar. Confira sua permissão e a migração 0015.'},503);
 }
 return contentJson({document:data});
}
