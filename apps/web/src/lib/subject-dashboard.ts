import {demoQuestions, type QuestionAttempt} from './demo-questions.ts';
import {learningLessons,learningSubjects,lessonsForSubject,type LearningLesson} from './learning-catalog.ts';
import {recommendedNextLesson,subjectProgress} from './learning-progress.ts';
import {reviewItems, type ReviewItem} from './adaptive-review.ts';

/**
 * Indicators describe only Kognos's original introductory sample bank.
 * Never use them to infer exam scores or the student's overall mastery.
 */
export type SubjectSnapshot={
 subject:string;
 total:number;
 practiced:number;
 correctSamples:number;
 needsReview:number;
 notPracticed:number;
 coverage:number;
 attempts:number;
 dueReviews:number;
 lastAttemptAt:string|null;
 recommended:LearningLesson|null;
 status:'not-started'|'needs-review'|'in-progress'|'sample-covered';
};

export function subjectSnapshots(attempts:readonly QuestionAttempt[],today=new Date(),catalog:readonly LearningLesson[]=learningLessons):SubjectSnapshot[]{
 const valid=attempts.filter(a=>{
  const q=demoQuestions.find(q=>q.id===a.questionId);
  return Boolean(q&&Number.isInteger(a.answerIndex)&&a.answerIndex>=0&&a.answerIndex<q!.options.length&&Number.isFinite(Date.parse(a.createdAt)));
 });
 const scheduled=reviewItems(valid,today);
 return [...new Set(catalog.map(l=>l.subject))].map(subject=>{
  const stats=subjectProgress(subject,valid,catalog);
  const ids=new Set(catalog.filter(l=>l.subject===subject).map(l=>l.questionId));
  const related=valid.filter(a=>ids.has(a.questionId));
  const last=related.reduce<string|null>((latest,a)=>!latest||Date.parse(a.createdAt)>Date.parse(latest)?a.createdAt:latest,null);
  const dueReviews=scheduled.filter((item:ReviewItem)=>item.lesson.subject===subject&&item.status==='due').length;
  const status=stats.practiced===0?'not-started':stats.review>0?'needs-review':stats.practiced<stats.total?'in-progress':'sample-covered';
  return {
   subject,total:stats.total,practiced:stats.practiced,correctSamples:stats.correct,
   needsReview:stats.review,notPracticed:stats.total-stats.practiced,coverage:stats.coverage,
   attempts:related.length,dueReviews,lastAttemptAt:last,
   recommended:recommendedNextLesson(subject,valid,catalog),status,
  };
 });
}

export function subjectDashboardTotals(snapshots:readonly SubjectSnapshot[]){
 return {
  subjects:snapshots.length,
  active:snapshots.filter(s=>s.practiced>0).length,
  practiced:snapshots.reduce((total,s)=>total+s.practiced,0),
  total:snapshots.reduce((total,s)=>total+s.total,0),
  due:snapshots.reduce((total,s)=>total+s.dueReviews,0),
 };
}
