import {studyPriorities} from './adaptive-week-plan.ts';
import type {StudentProfile} from './profile.ts';
import type {StudyTask} from './cloud-study-model.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import type {AIStudyProgress} from './ai-study-progress.ts';
import {learningLessons} from './learning-catalog.ts';
import {demoQuestions} from './demo-questions.ts';
import {civilToday,shiftCivilDate} from './calendar-model.ts';
import {activeSyllabi,mergedSyllabus} from './exam-syllabus.ts';
/** Topic evidence is computed from reserved, server-graded weekly attempts. */
export type WeeklyExamWeakTopic={subject:string;topic:string;attempts:number;incorrect:number;lastWrong:boolean};

/** Evidence is linked to an ORIGINAL answer key, never a caller-supplied
 * "correct" flag. One answer is a study suggestion, not a diagnosis. */
export function missedTopics(attempts:readonly QuestionAttempt[]){
 const byTopic=new Map<string,{subject:string;topic:string;errors:number;answered:number;lastWrong:boolean}>();
 // Use the latest verified answer for the decision to revisit a topic.
 for(const a of [...attempts].sort((x,y)=>x.createdAt.localeCompare(y.createdAt))){
  const q=demoQuestions.find(item=>item.id===a.questionId);
  if(!q||!Number.isInteger(a.answerIndex)||a.answerIndex<0||a.answerIndex>=q.options.length)continue;
  const key=q.subject+'|'+q.topic;
  const previous=byTopic.get(key)||{subject:q.subject,topic:q.topic,errors:0,answered:0,lastWrong:false};
  previous.answered++;
  if(a.answerIndex!==q.correct)previous.errors++;
  previous.lastWrong=a.answerIndex!==q.correct;
  byTopic.set(key,previous);
 }
 return [...byTopic.values()].filter(x=>x.lastWrong)
  .sort((a,b)=>b.errors-a.errors||a.subject.localeCompare(b.subject,'pt-BR'));
}
export function studyMethod(profile:StudentProfile):string[]{
 const focused=profile.adaptations.includes('short_blocks')||profile.adaptations.includes('reduced_distractions');
 const reading=profile.adaptations.includes('plain_language')||profile.adaptations.includes('extra_spacing');
 const steps=[
  focused?'Comece com um objetivo e use um bloco curto, com uma pausa opcional.':'Leia o objetivo e revise o conceito com calma.',
  reading?'Use frases curtas, exemplos concretos e releia o enunciado por partes.':'Resolva um exemplo guiado e explique cada etapa.',
  'Pratique de 2 a 3 questões do assunto sem consultar o gabarito.',
  'Revise os erros e explique com suas palavras o que mudou.'
 ];
 if(profile.adaptations.includes('frequent_checks'))steps.splice(2,0,'Faça uma checagem de compreensão antes de prosseguir.');
 return steps;
}
/** Search link to *results*, not an unverified individual video. */
export function youtubeStudySearch(subject:string,topic:string):string{
 return 'https://www.youtube.com/results?search_query='+encodeURIComponent([subject,topic,'aula explicação exercícios vestibular'].join(' '));
}
function dayKey(base:Date,offset:number){
 return shiftCivilDate(civilToday(base),offset);
}
function durationPlan(profile:StudentProfile,remaining:number):number{
 const cap=profile.adaptations.includes('short_blocks')?Math.min(profile.sessionMinutes,25):profile.sessionMinutes;
 return Math.min(cap,remaining);
}

/** Plan at most 7 civil days, splitting each day's free budget into 1–3
 * teach/practice sessions across distinct disciplines. Manual tasks are
 * never overwritten. Existing automatic dates aren't duplicated.
 * Times remain null until the student chooses a real starting time.
 */
export function createPersonalizedStudyWeek(
 profile:StudentProfile,existing:readonly StudyTask[],
 demo:readonly QuestionAttempt[],ai:AIStudyProgress|null,
 base=new Date(),makeId=()=>crypto.randomUUID(),
 weeklyTopics:readonly WeeklyExamWeakTopic[]=[]
):StudyTask[]{
 const tasks=[...existing];
 const syllabus=mergedSyllabus(activeSyllabi(profile));
 const weeklyBoost=(subject:string)=>Math.min(500,weeklyTopics.filter(t=>t.subject===subject&&t.lastWrong)
  .reduce((total,t)=>total+Math.max(0,t.incorrect)*90,0));
 const original=studyPriorities(demo,ai).map(p=>({...p,priority:p.priority+weeklyBoost(p.subject)}));
 const priorities=[...original.filter(p=>!Object.keys(syllabus).length||Boolean(syllabus[p.subject])),
  ...Object.entries(syllabus).filter(([subject])=>!original.some(p=>p.subject===subject)).map(([subject,topics])=>({subject,topic:topics[0]||'Introdução',needsReview:false,reviewItems:0,practiced:0,total:topics.length,aiAttempts:0,priority:102+weeklyBoost(subject)}))];
 const mistakes=missedTopics(demo);
 const useCount=new Map<string,number>();
 for(const task of existing)useCount.set(task.subject,(useCount.get(task.subject)||0)+1);
 for(let index=0;index<7;index++){
  const date=dayKey(base,index);
  const day=new Date(date+'T12:00:00');
  if(!profile.weeklyDays.includes(day.getDay()))continue;
  const entries=tasks.filter(t=>t.date===date);
  if(entries.some(t=>t.kind==='suggested'))continue; // idempotence
  let remaining=Math.max(0,profile.dailyMinutes-entries.reduce((sum,t)=>sum+t.minutes,0));
  if(remaining<15)continue;
  const usedToday=new Set(entries.map(t=>t.subject));
  const slots=Math.min(3,Math.max(1,Math.floor(remaining/15)),priorities.length);
  for(let slot=0;slot<slots;slot++){
   const ranked=priorities.filter(p=>!usedToday.has(p.subject)).sort((a,b)=>{
    const penalty=(p:typeof a)=>30*(useCount.get(p.subject)||0);
    return (b.priority-penalty(b))-(a.priority-penalty(a))||a.subject.localeCompare(b.subject,'pt-BR');
   });
   const chosen=ranked[0];
   if(!chosen)break;
   const minAfter=(slots-slot-1)*15;
   const minutes=Math.min(durationPlan(profile,remaining),remaining-minAfter);
   if(minutes<15)break;
   const weak=mistakes.find(x=>x.subject===chosen.subject);
   const availableTopics=syllabus[chosen.subject]||[];
   // Work through the whole exam checklist before rotating any non-priority
   // topic; completed historical tasks remain evidence of prior coverage.
   const unplanned=availableTopics.find(item=>!tasks.some(task=>task.subject===chosen.subject&&task.title.toLocaleLowerCase('pt-BR').includes(item.toLocaleLowerCase('pt-BR'))));
   const weeklyWrong=weeklyTopics.find(item=>item.subject===chosen.subject&&item.lastWrong&&availableTopics.includes(item.topic));
   const topic=weeklyWrong?.topic||weak?.topic||(chosen.needsReview?chosen.topic:null)||unplanned||availableTopics[0]||chosen.topic;
   const goal=chosen.needsReview||Boolean(weak)||Boolean(weeklyWrong)?'Revisar':'Estudar';
   const style=slot===slots-1?'questões e checagem':'conceito e exemplo';
   tasks.push({
    id:makeId(),date,minutes,kind:'suggested',done:false,
    subject:chosen.subject,title:`${goal} ${chosen.subject}: ${topic} · ${style}`.slice(0,120)
   });
   usedToday.add(chosen.subject);
   useCount.set(chosen.subject,(useCount.get(chosen.subject)||0)+1);
   remaining-=minutes;
  }
 }
 return tasks.sort((a,b)=>a.date.localeCompare(b.date)||a.title.localeCompare(b.title,'pt-BR'));
}
/** Real weekly progress: completion count of the selected week's tasks.
 * Not equivalent to mastery, exam readiness, or minutes actually studied.
 */
export function weekLearningSummary(tasks:readonly StudyTask[],base=new Date()){
 const monday=new Date(base.getFullYear(),base.getMonth(),base.getDate(),12);
 monday.setDate(monday.getDate()-(monday.getDay()+6)%7);
 const from=civilToday(monday),until=shiftCivilDate(from,6);
 const week=tasks.filter(t=>t.date>=from&&t.date<=until);
 const done=week.filter(t=>t.done);
 return {from,until,total:week.length,completed:done.length,
  subjects:[...new Set(week.map(x=>x.subject))],
  plannedMinutes:week.reduce((a,t)=>a+t.minutes,0),
  finishedPlannedMinutes:done.reduce((a,t)=>a+t.minutes,0),
  reviewReady:week.length>0&&week.every(x=>x.done)};
}
export function lessonForStudyTask(task:StudyTask){
 const byTopic=learningLessons.find(l=>l.subject===task.subject&&task.title.toLowerCase().includes(l.topic.toLowerCase()));
 return byTopic||learningLessons.find(l=>l.subject===task.subject)||null;
}
