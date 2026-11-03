import {contentIdentity,contentJson,smallJson} from '@/lib/content-server';
import {parseCourseDocument,gradeQuestion} from '@/lib/course-content';
export const runtime='nodejs';
export async function POST(request:Request){
 const auth=await contentIdentity(request);if('response' in auth)return auth.response;
 let raw;try{raw=await smallJson(request,2000);}catch{return contentJson({error:'Resposta inválida.'},400);}
 if(!raw||typeof raw!=='object')return contentJson({error:'Resposta inválida.'},400);
 const v=raw as {id?:unknown;revision?:unknown;answerIndex?:unknown};if(typeof v.id!=='string')return contentJson({error:'Questão inválida.'},400);
 const {data,error}=await auth.db.from('kognos_content_documents').select('published,published_revision,archived').eq('id',v.id).eq('kind','question').maybeSingle();
 if(error)return contentJson({error:'Banco indisponível.'},503);
 if(!data||data.archived||!data.published)return contentJson({error:'Questão retirada ou indisponível.'},404);
 if(data.published_revision!==v.revision)return contentJson({error:'A questão foi atualizada. Recarregue antes de responder.'},409);
 const q=parseCourseDocument(data.published);if(!q||q.kind!=='question')return contentJson({error:'Questão indisponível.'},503);
 const grade=gradeQuestion(q,v.answerIndex);if(!grade)return contentJson({error:'Escolha uma alternativa válida.'},400);
 const {error:saveError}=await auth.db.from('kognos_content_attempts').insert({user_id:auth.user.id,question_id:q.id,question_revision:data.published_revision,answer_index:v.answerIndex,correct:grade.correct});
 if(saveError)return contentJson({error:'Não foi possível registrar sua resposta.'},503);
 return contentJson(grade);
}
