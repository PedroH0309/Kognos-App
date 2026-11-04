import {examBlueprints,type ExamId} from '@/lib/exam-blueprints';
import {contentConfigured,contentDb,contentJson} from '@/lib/content-server';
import {curriculumTopics,findCurriculumTopic} from '@/lib/curriculum-catalog';
import {findLearningLesson} from '@/lib/learning-catalog';
import {videosForTopic} from '@/lib/course-videos';
import {parseCourseDocument,publicQuestion} from '@/lib/course-content';
import {starterCoverage,starterLesson} from '@/lib/starter-lessons';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(request:Request){
 const id=new URL(request.url).searchParams.get('id');
 const db=contentConfigured()?contentDb():null;
 if(id){
  const topic=findCurriculumTopic(id);let row=null;
  if(db){const result=await db.from('kognos_content_documents').select('id,published,published_revision,archived').eq('id',id).eq('kind','lesson').maybeSingle();if(result.error)return contentJson({error:'Conteúdo publicado indisponível. Confira a migração 0015.'},503);row=result.data;}
  // An archived or withdrawn override must never resurrect a built-in lesson.
  if(row&&(row.archived||!row.published))return contentJson({error:'Esta aula está em revisão ou foi retirada.'},404);
  const published=row?parseCourseDocument(row.published):null;
  // Database publications take priority. The fallback is an explicitly labelled
  // introductory offline module, NOT a published/editor-reviewed course.
  const lesson=published?.kind==='lesson'?published:topic?starterLesson(topic):null;
  if(!topic&&!lesson)return contentJson({error:'Aula não encontrada.'},404);
  const legacy=topic?.legacyLessonId?findLearningLesson(topic.legacyLessonId):null;
  let questions:ReturnType<typeof publicQuestion>[]=[];
  if(db){const result=await db.from('kognos_content_documents').select('published,published_revision').eq('kind','question').eq('archived',false).eq('published->>courseId',id).not('published','is',null).limit(100);if(result.error)return contentJson({error:'Não foi possível consultar os exercícios publicados.'},503);
   questions=(result.data||[]).flatMap(r=>{const q=parseCourseDocument(r.published);return q?.kind==='question'?[publicQuestion(q,r.published_revision)]:[];});}
  return contentJson({topic:topic??{id:lesson!.id,subject:lesson!.kind==='lesson'?lesson!.subject:'',topic:lesson!.kind==='lesson'?lesson!.topic:'',exams:lesson!.kind==='lesson'?lesson!.exams:[]},lesson,revision:row?.published_revision??null,introduction:published?null:legacy,videos:lesson?.kind==='lesson'?lesson.videos:topic?videosForTopic(topic.subject,topic.topic):[],questions,configured:Boolean(db)});
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
