import {findCurriculumTopic,type CurriculumTopic} from './curriculum-catalog.ts';
import {canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {parseCourseDocument,type CourseLesson} from './course-content.ts';
import {starterLesson} from './starter-lessons.ts';

export type LessonPublication={published:unknown;published_revision:number|null;archived:boolean};
type Resolution={status:'available';topic:CurriculumTopic|null;lesson:CourseLesson;revision:number|null;published:boolean}
 |{status:'missing'}|{status:'withdrawn'}|{status:'invalid'};

function publication(row:LessonPublication|null,id:string,topic:CurriculumTopic|null){
 // No editorial row means no override of the labelled built-in lesson.
 // An existing row without a publication means withdrawal, not absence.
 if(!row)return {status:'absent'} as const;
 if(row.archived||!row.published)return {status:'withdrawn'} as const;
 const lesson=parseCourseDocument(row.published);
 if(lesson?.kind!=='lesson'||lesson.id!==id||
  (topic&&(lesson.subject!==topic.subject||lesson.topic!==topic.topic)))return {status:'invalid'} as const;
 return {status:'published',lesson,revision:row.published_revision} as const;
}

/** A reviewed alias reuses its source, including editorial publication/withdrawal.
 * A publication belonging to the requested topic remains authoritative.
 * Read errors propagate to the route; they must never unlock an offline fallback.
 */
export async function resolveContentLesson(
 id:string,loadPublication:(id:string)=>Promise<LessonPublication|null>=async()=>null
):Promise<Resolution>{
 const topic=findCurriculumTopic(id);
 const own=publication(await loadPublication(id),id,topic);
 if(own.status==='withdrawn'||own.status==='invalid')return {status:own.status};
 if(own.status==='published')return {status:'available',topic,lesson:own.lesson,revision:own.revision,published:true};
 if(!topic)return {status:'missing'};
 const canonical=topic.exams.map(exam=>canonicalLessonForExam(exam,topic)).find(lesson=>lesson!==null);
 if(canonical&&canonical.id!==id){
  const sourceTopic=findCurriculumTopic(canonical.id);
  const source=publication(await loadPublication(canonical.id),canonical.id,sourceTopic);
  if(source.status==='withdrawn'||source.status==='invalid')return {status:source.status};
  if(source.status==='published')return {status:'available',topic,lesson:source.lesson,revision:source.revision,published:true};
 }
 return {status:'available',topic,lesson:canonical??starterLesson(topic),revision:null,published:false};
}
