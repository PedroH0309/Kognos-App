import {curriculumTopics,type CurriculumTopic} from './curriculum-catalog.ts';
import {indexedCanonicalTopicId} from './canonical-lesson-index.ts';
import type {ExamId} from './exam-blueprints.ts';
import {learningLessons,type LearningLesson} from './learning-catalog.ts';

export type StudyContentStatus='authored'|'introductory'|'planned';
export const studyContentLabels:Record<StudyContentStatus,string>={
 authored:'Aula aprofundada',introductory:'Guia introdutório',planned:'Em desenvolvimento'
};
const registeredById=new Map(curriculumTopics.map(topic=>[topic.id,topic]));
const registeredByTitle=new Map(curriculumTopics.map(topic=>[topic.subject+'\0'+topic.topic,topic]));
const historicalLessons=new Map(learningLessons.map(lesson=>[lesson.id,lesson]));

function authoredTopic(lesson:LearningLesson,exam:ExamId|null):CurriculumTopic|null{
 let topic=registeredById.get(lesson.curriculumId??lesson.id);
 if(!topic&&!lesson.curriculumId){
  const historical=historicalLessons.get(lesson.id);
  if(historical?.subject===lesson.subject&&historical.topic===lesson.topic)
   topic=registeredByTitle.get(lesson.subject+'\0'+lesson.topic);
 }
 if(!topic||topic.subject!==lesson.subject||topic.topic!==lesson.topic)return null;
 const exams=exam?[exam]:topic.exams;
 for(const member of exams){
  const sourceId=indexedCanonicalTopicId(member,topic);
  if(sourceId)return registeredById.get(sourceId)??null;
 }
 return null;
}

/** Curriculum metadata, introductory guides and deep authored lessons are distinct.
 * Neither a related title nor a practice history certifies lesson availability.
 */
export function studyContentStatus(lesson:LearningLesson,exam:ExamId|null):StudyContentStatus{
 if(authoredTopic(lesson,exam))return 'authored';
 if(!lesson.curriculumId&&lesson.explanation.trim()&&lesson.workedExample.trim()&&lesson.check.trim())return 'introductory';
 return 'planned';
}

export function studyContentInventory(catalog:readonly LearningLesson[],exam:ExamId|null){
 const byId=new Map<string,StudyContentStatus>();
 const authoredTopicById=new Map<string,CurriculumTopic>();
 let authored=0,introductory=0,planned=0;
 for(const lesson of catalog){
  const topic=authoredTopic(lesson,exam);
  const status=topic?'authored':studyContentStatus(lesson,exam);byId.set(lesson.id,status);
  if(topic)authoredTopicById.set(lesson.id,topic);
  if(status==='authored')authored++;
  else if(status==='introductory')introductory++;
  else planned++;
 }
 return {total:catalog.length,authored,introductory,planned,byId,authoredTopicById};
}
