import {studyPriorities} from './adaptive-week-plan.ts';
import type {AIStudyProgress} from './ai-study-progress.ts';
import type {StudyTask} from './cloud-study-model.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import type {StudentProfile} from './profile.ts';

function dayKey(day:Date):string {
 return `${day.getFullYear()}-${String(day.getMonth()+1).padStart(2,'0')}-${String(day.getDate()).padStart(2,'0')}`;
}

/** Student-controlled plan, not a proven mastery score or a medical assessment.
 * Keep manual work intact and avoid duplicate suggestions when rerun.
 */
export function createStructuredWeekPlan(
 profile:StudentProfile,existing:readonly StudyTask[],attempts:readonly QuestionAttempt[],
 ai:AIStudyProgress|null,base=new Date(),newId=()=>crypto.randomUUID()
):StudyTask[]{
 const output=[...existing];
 const days=Array.from({length:7},(_,i)=>new Date(base.getFullYear(),base.getMonth(),base.getDate()+i,12))
  .filter(day=>profile.weeklyDays.includes(day.getDay()));
 const ranked=studyPriorities(attempts,ai);
 const counts=new Map<string,number>();
 for(const task of existing)if(!task.done)counts.set(task.subject,(counts.get(task.subject)||0)+1);
 const observed=attempts.length>0||Boolean(ai?.totalAttempts);
 const checkpoint=observed&&days.length?dayKey(days[days.length-1]):null;
 const blockMinutes=profile.adaptations.includes('short_blocks')?Math.min(profile.sessionMinutes,15):profile.sessionMinutes;
 let previous='';
 for(const day of days){
  const date=dayKey(day);
  if(existing.some(t=>t.date===date&&t.kind==='suggested'))continue;
  const used=existing.filter(t=>t.date===date).reduce((sum,t)=>sum+Math.max(0,t.minutes),0);
  let available=Math.max(0,profile.dailyMinutes-used);
  const reviewMinutes=date===checkpoint&&available>=25?Math.min(25,available):0;
  available-=reviewMinutes;
  const sameDay=new Set<string>();
  for(let slot=0;slot<4&&available>=15;slot++){
   const [subject]=[...ranked].sort((a,b)=>{
    const weight=(p:typeof a)=>p.priority-105*(counts.get(p.subject)||0)-170*Number(sameDay.has(p.subject))-35*Number(p.subject===previous);
    return weight(b)-weight(a)||a.subject.localeCompare(b.subject,'pt-BR');
   });
   if(!subject)break;
   const minutes=Math.min(available,blockMinutes);
   if(minutes<15)break;
   output.push({id:newId(),date,subject:subject.subject,minutes,done:false,kind:'suggested',
    title:subject.needsReview?`Revisar ${subject.subject}: ${subject.topic} e resolver questões`:`Estudar ${subject.subject}: ${subject.topic} e praticar`});
   available-=minutes;
   sameDay.add(subject.subject);
   counts.set(subject.subject,(counts.get(subject.subject)||0)+1);
   previous=subject.subject;
  }
  if(reviewMinutes)output.push({id:newId(),date,subject:'Reavaliação',minutes:reviewMinutes,done:false,kind:'suggested',
   title:'Reavaliação semanal: responder 20 questões e revisar os erros'});
 }
 return output.sort((a,b)=>a.date.localeCompare(b.date)||a.title.localeCompare(b.title,'pt-BR'));
}
