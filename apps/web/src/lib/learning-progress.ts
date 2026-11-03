import {learningLessons, type LearningLesson} from './learning-catalog.ts';
import {demoQuestions, type QuestionAttempt} from './demo-questions.ts';

/** Demonstration evidence only: one correct response never proves durable mastery. */
export type LessonEvidence = 'not-started'|'review'|'correct-sample';
export function evidenceForLesson(lesson:LearningLesson,attempts:readonly QuestionAttempt[]):LessonEvidence {
 const last=attempts.filter(a=>a.questionId===lesson.questionId)
   .sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt))[0];
 if(!last)return 'not-started';
 const question=demoQuestions.find(q=>q.id===lesson.questionId);
 if(!question || !Number.isInteger(last.answerIndex))return 'review';
 return last.answerIndex===question.correct?'correct-sample':'review';
}
export function subjectProgress(subject:string,attempts:readonly QuestionAttempt[],catalog:readonly LearningLesson[]=learningLessons){
 const lessons=catalog.filter(l=>l.subject===subject);
 const practiced=lessons.filter(l=>evidenceForLesson(l,attempts)!=='not-started').length;
 const correct=lessons.filter(l=>evidenceForLesson(l,attempts)==='correct-sample').length;
 return {total:lessons.length,practiced,correct,review:practiced-correct,coverage:lessons.length?Math.round(100*practiced/lessons.length):0};
}
export function recommendedNextLesson(subject:string,attempts:readonly QuestionAttempt[],catalog:readonly LearningLesson[]=learningLessons):LearningLesson|null {
 const lessons=catalog.filter(l=>l.subject===subject);
 return lessons.find(l=>evidenceForLesson(l,attempts)==='review')??
 lessons.find(l=>evidenceForLesson(l,attempts)==='not-started' && l.prerequisites.every(req=>{
   const prerequisite=learningLessons.find(p=>p.id===req);
   return prerequisite ? evidenceForLesson(prerequisite,attempts)==='correct-sample' : true;
 }))??lessons.find(l=>evidenceForLesson(l,attempts)==='not-started')??null;
}
