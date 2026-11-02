import {learningLessons,lessonsForSubject,type LearningLesson} from './learning-catalog.ts';
import {type QuestionAttempt} from './demo-questions.ts';
import {evidenceForLesson,recommendedNextLesson,type LessonEvidence} from './learning-progress.ts';

export type TrailStep = {lesson:LearningLesson;number:number;evidence:LessonEvidence;prerequisites:LearningLesson[]};
export type TrailSnapshot = {
 subject:string;total:number;practiced:number;correctSamples:number;needsReview:number;
 estimatedUnpracticedMinutes:number;next:LearningLesson|null;steps:TrailStep[];
};

/** Introductory demo evidence: attempts are not proof that lessons were read or mastered. */
export function trailSnapshot(subject:string,attempts:readonly QuestionAttempt[]):TrailSnapshot {
 const lessons=lessonsForSubject(subject);
 const steps=lessons.map((lesson,index)=>({
  lesson,number:index+1,evidence:evidenceForLesson(lesson,attempts),
  prerequisites:lesson.prerequisites.map(id=>learningLessons.find(item=>item.id===id)).filter((item):item is LearningLesson=>Boolean(item)),
 }));
 const practiced=steps.filter(step=>step.evidence!=='not-started').length;
 return {
  subject,total:steps.length,practiced,
  correctSamples:steps.filter(step=>step.evidence==='correct-sample').length,
  needsReview:steps.filter(step=>step.evidence==='review').length,
  estimatedUnpracticedMinutes:steps.filter(step=>step.evidence==='not-started').reduce((n,step)=>n+step.lesson.minutes,0),
  next:recommendedNextLesson(subject,attempts),steps,
 };
}

export function catalogRoadmap(attempts:readonly QuestionAttempt[]) {
 const steps=learningLessons.map(lesson=>({lesson,evidence:evidenceForLesson(lesson,attempts)}));
 return {
  total:steps.length,
  practiced:steps.filter(step=>step.evidence!=='not-started').length,
  correctSamples:steps.filter(step=>step.evidence==='correct-sample').length,
  needsReview:steps.filter(step=>step.evidence==='review').length,
 };
}

/** Can move to the next lesson without inferring completion or unlocking content based on one answer. */
export function adjacentLesson(subject:string,lessonId:string,direction:1|-1):LearningLesson|null {
 const items=lessonsForSubject(subject);
 const index=items.findIndex(item=>item.id===lessonId);
 return index<0?null:items[index+direction]??null;
}