import {learningSubjects} from './learning-catalog.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import type {AIStudyProgress} from './ai-study-progress.ts';
import {connectedSubjectProgress} from './connected-learning.ts';
import type {StudentProfile} from './profile.ts';
import type {StudyTask} from './cloud-study-model.ts';

export type SubjectPlanPriority={subject:string;topic:string;needsReview:boolean;reviewItems:number;practiced:number;total:number;aiAttempts:number;priority:number};

/** Transparent suggestions from recorded attempts, not an inferred mastery score. */
export function studyPriorities(attempts:readonly QuestionAttempt[],ai:AIStudyProgress|null):SubjectPlanPriority[]{
 return learningSubjects.map((subject,index)=>{
  const progress=connectedSubjectProgress(subject,attempts,ai);
  return {subject,topic:progress.next?.topic||'Revisão de fundamentos',needsReview:progress.review>0,reviewItems:progress.review,
   practiced:progress.practiced,total:progress.total,aiAttempts:progress.aiAttempts,
   priority:progress.review>0?200+progress.review*10:(progress.practiced===0?100:70)+Math.max(0,progress.total-progress.practiced)*3-index/100};
 }).sort((a,b)=>b.priority-a.priority||a.subject.localeCompare(b.subject,'pt-BR'));
}
function dateKey(d:Date){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}

/** Respect the user's study days and daily minute budget; do not overwrite manual tasks. */
export function createAdaptiveWeekPlan(profile:StudentProfile,existing:readonly StudyTask[],attempts:readonly QuestionAttempt[],ai:AIStudyProgress|null,base=new Date(),idFactory=()=>crypto.randomUUID()):StudyTask[]{
 const result=[...existing];
 const subjects=studyPriorities(attempts,ai);
 const picks=new Map<string,number>();
 for(const task of existing)picks.set(task.subject,(picks.get(task.subject)||0)+Number(!task.done));
 let previous='';
 for(let offset=0;offset<7;offset++){
  const date=new Date(base.getFullYear(),base.getMonth(),base.getDate()+offset,12);
  if(!profile.weeklyDays.includes(date.getDay()))continue;
  const key=dateKey(date);
  if(existing.some(t=>t.date===key&&t.kind==='suggested'))continue;
  const allocated=existing.filter(t=>t.date===key).reduce((sum,t)=>sum+Math.max(0,t.minutes),0);
  const free=Math.max(0,profile.dailyMinutes-allocated);
  if(free<10)continue;
  const minutes=Math.min(free,profile.sessionMinutes);
  const ranked=[...subjects].sort((a,b)=>{
   const score=(x:SubjectPlanPriority)=>x.priority-110*(picks.get(x.subject)||0)-35*Number(x.subject===previous);
   return score(b)-score(a)||a.subject.localeCompare(b.subject,'pt-BR');
  });
  const item=ranked[0];if(!item)continue;
  result.push({id:idFactory(),date:key,subject:item.subject,minutes,done:false,kind:'suggested',
   title:item.needsReview?`Revisar ${item.subject}: ${item.topic}`:`Estudar ${item.subject}: ${item.topic} e praticar`});
  picks.set(item.subject,(picks.get(item.subject)||0)+1);previous=item.subject;
 }
 return result.sort((a,b)=>a.date.localeCompare(b.date));
}