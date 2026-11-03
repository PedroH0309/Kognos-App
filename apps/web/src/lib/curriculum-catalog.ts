import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {learningLessons} from './learning-catalog.ts';
import {linkedExamTopic} from './lesson-ai-links.ts';
export type CurriculumTopic={id:string;subject:string;topic:string;exams:ExamId[];legacyLessonId?:string};
// Topic identity is content-derived and stable when the syllabus is reordered.
export function courseId(subject:string,topic:string){
 let hash=2166136261;for(const c of `${subject}\0${topic}`){hash^=c.codePointAt(0)!;hash=Math.imul(hash,16777619);}
 return `course-${(hash>>>0).toString(16).padStart(8,'0')}`;
}
const map=new Map<string,CurriculumTopic>();
for(const exam of Object.keys(examBlueprints) as ExamId[]){
 for(const [subject,topics] of Object.entries(examBlueprints[exam].subjects))for(const topic of topics){
  const key=`${subject}\0${topic}`;
  const prior=map.get(key);if(prior){prior.exams.push(exam);continue;}
  const legacy=learningLessons.find(l=>l.subject===subject&&(l.topic===topic||linkedExamTopic(l.id,exam)===topic));
  map.set(key,{id:courseId(subject,topic),subject,topic,exams:[exam],...(legacy?{legacyLessonId:legacy.id}:{})});
 }
}
export const curriculumTopics:readonly CurriculumTopic[]=[...map.values()];
export const findCurriculumTopic=(id:string)=>curriculumTopics.find(t=>t.id===id)??null;
export const topicForLegacyLesson=(id:string)=>curriculumTopics.find(t=>t.legacyLessonId===id)??null;
