import {examBlueprints,type ExamId} from '@/lib/exam-blueprints';
import {contentConfigured,contentDb,contentJson} from '@/lib/content-server';
import {curriculumTopics,findCurriculumTopic} from '@/lib/curriculum-catalog';
import {findLearningLesson} from '@/lib/learning-catalog';
import {parseCourseDocument,publicQuestion} from '@/lib/course-content';
import {starterCoverage} from '@/lib/starter-lessons';
import {resolveContentLesson} from '@/lib/content-lesson-resolution';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(request:Request){
 const id=new URL(request.url).searchParams.get('id');
 const db=contentConfigured()?contentDb():null;
 if(id){
  let resolved;
  try{resolved=await resolveContentLesson(id,db?async documentId=>{
   const result=await db.from('kognos_content_documents').select('id,published,published_revision,archived').eq('id',documentId).eq('kind','lesson').maybeSingle();
   if(result.error)throw new Error('Publication unavailable');
   return result.data;
  }:undefined);}catch{return contentJson({error:'Conteúdo publicado indisponível. Confira a migração 0015.'},503);}
  if(resolved.status==='withdrawn')return contentJson({error:'Esta aula está em revisão ou foi retirada.'},404);
  if(resolved.status==='invalid')return contentJson({error:'A publicação desta aula precisa de revisão editorial.'},503);
  if(resolved.status==='missing')return contentJson({error:'Aula não encontrada.'},404);
  const {topic,lesson}=resolved;
  const legacy=topic?.legacyLessonId?findLearningLesson(topic.legacyLessonId):null;
  let questions:ReturnType<typeof publicQuestion>[]=[];
  if(db){const result=await db.from('kognos_content_documents').select('published,published_revision').eq('kind','question').eq('archived',false).eq('published->>courseId',lesson.id).not('published','is',null).limit(100);if(result.error)return contentJson({error:'Não foi possível consultar os exercícios publicados.'},503);
   questions=(result.data||[]).flatMap(r=>{const q=parseCourseDocument(r.published);return q?.kind==='question'?[publicQuestion(q,r.published_revision)]:[];});}
  return contentJson({topic:topic??{id:lesson.id,subject:lesson.subject,topic:lesson.topic,exams:lesson.exams},lesson,revision:resolved.revision,introduction:resolved.published?null:legacy,videos:lesson.videos,questions,configured:Boolean(db)});
 }
 const starterStatus=(t:(typeof curriculumTopics)[number])=>starterCoverage(t)==='guided'?'guided':'starter';
 if(!db)return contentJson({topics:curriculumTopics.map(t=>({...t,status:starterStatus(t)})),configured:false});
 const {data,error}=await db.from('kognos_content_documents').select('id,kind,archived,published_revision,subject:published->>subject,topic:published->>topic,exams:published->exams,review:published->>review').eq('kind','lesson').range(0,999);
 if(error)return contentJson({topics:curriculumTopics.map(t=>({...t,status:starterStatus(t)})),configured:false,notice:'Banco editorial indisponível; aulas-base offline acessíveis. Configure a migração 0015 para publicar aulas revisadas.'});
 const rows=new Map((data||[]).map(r=>[r.id,r]));
 const topics=curriculumTopics.map(t=>{const r=rows.get(t.id);return {...t,status:r?r.archived?'archived':r.published_revision?'published':'draft':starterStatus(t),review:r?.review};}).filter(t=>t.status!=='archived');
 for(const row of data||[])if(!findCurriculumTopic(row.id)&&!row.archived&&row.published_revision)topics.push({id:row.id,subject:String(row.subject),topic:String(row.topic),exams:Array.isArray(row.exams)?row.exams.filter((e):e is ExamId=>typeof e==='string'&&Object.hasOwn(examBlueprints,e)):[],status:'published',review:row.review});
 return contentJson({topics,configured:true});
}
