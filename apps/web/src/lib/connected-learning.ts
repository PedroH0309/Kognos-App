import {learningLessons,lessonsForSubject,type LearningLesson} from './learning-catalog.ts';
import {evidenceForLesson,recommendedNextLesson} from './learning-progress.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import {aiLessonStats,type AIStudyProgress} from './ai-study-progress.ts';

/** Union of observed attempts, NOT a mastery score or official exam prediction. */
export function connectedLessonEvidence(lesson:LearningLesson,demoAttempts:readonly QuestionAttempt[],ai:AIStudyProgress|null){
 const demo=evidenceForLesson(lesson,demoAttempts);
 const generated=aiLessonStats(ai,lesson.id);
 const practiced=demo!=='not-started'||Boolean(generated?.attempts);
 const review=generated?.lastCorrect===false||(demo==='review'&&!generated?.lastCorrect);
 return {demo,generated,practiced,review,hasAI:Boolean(generated?.attempts)};
}

export function connectedSubjectProgress(subject:string,demoAttempts:readonly QuestionAttempt[],ai:AIStudyProgress|null,catalog:readonly LearningLesson[]=learningLessons){
 const lessons=catalog.filter(l=>l.subject===subject);
 const steps=lessons.map(lesson=>({lesson,...connectedLessonEvidence(lesson,demoAttempts,ai)}));
 const practiced=steps.filter(s=>s.practiced).length;
 const review=steps.filter(s=>s.review).length;
 const aiAttempts=steps.reduce((sum,s)=>sum+(s.generated?.attempts??0),0);
 const aiCorrect=steps.reduce((sum,s)=>sum+(s.generated?.correct??0),0);
 const aiQuestions=steps.reduce((sum,s)=>sum+(s.generated?.distinctQuestions??0),0);
 const firstAIError=steps.find(s=>s.generated?.lastCorrect===false)?.lesson;
 const demoRecommended=recommendedNextLesson(subject,demoAttempts,catalog);
 const next=firstAIError||steps.find(s=>s.review)?.lesson||steps.find(s=>!s.practiced)?.lesson||demoRecommended;
 return {subject,total:lessons.length,practiced,review,aiAttempts,aiCorrect,aiQuestions,next:next??null,steps};
}

export function connectedCatalogProgress(demoAttempts:readonly QuestionAttempt[],ai:AIStudyProgress|null,catalog:readonly LearningLesson[]=learningLessons){
 const all=catalog.map(lesson=>connectedLessonEvidence(lesson,demoAttempts,ai));
 return {total:all.length,practiced:all.filter(x=>x.practiced).length,review:all.filter(x=>x.review).length,
  aiAttempts:all.reduce((n,x)=>n+(x.generated?.attempts??0),0),aiCorrect:all.reduce((n,x)=>n+(x.generated?.correct??0),0)};
}
