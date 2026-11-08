import {examBlueprints,publicExamIds,type ExamId} from './exam-blueprints.ts';
import {learningLessons} from './learning-catalog.ts';
import {linkedExamTopic} from './lesson-ai-links.ts';
export type CurriculumTopic={id:string;subject:string;topic:string;exams:ExamId[];legacyLessonId?:string};
import {courseId} from './curriculum-id.ts';
export {courseId} from './curriculum-id.ts';
const map=new Map<string,CurriculumTopic>();
for(const exam of publicExamIds){
 for(const [subject,topics] of Object.entries(examBlueprints[exam].subjects))for(const topic of topics){
  const key=`${subject}\0${topic}`;
  const prior=map.get(key);if(prior){prior.exams.push(exam);continue;}
  const legacy=learningLessons.find(l=>!l.curriculumId&&l.subject===subject&&(l.topic===topic||linkedExamTopic(l.id,exam)===topic));
  map.set(key,{id:courseId(subject,topic),subject,topic,exams:[exam],...(legacy?{legacyLessonId:legacy.id}:{})});
 }
}
export const curriculumTopics:readonly CurriculumTopic[]=[...map.values()];
export const findCurriculumTopic=(id:string)=>curriculumTopics.find(t=>t.id===id)??null;
export const topicForLegacyLesson=(id:string)=>findCurriculumTopic(id)??curriculumTopics.find(t=>t.legacyLessonId===id)??null;

