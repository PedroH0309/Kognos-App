import {civilToday,dateAtNoon,shiftCivilDate,validCivilDate} from './calendar-model.ts';
import {taskCoversSyllabusTopic} from './syllabus-progress.ts';
import type {StudyTask} from './cloud-study-model.ts';
import type {StudentProfile} from './profile.ts';

export type TopicSchedule={date:string;minutes:number;title:string};

/** A topic is already on the future calendar if an unfinished task refers to
 * that exact topic. Avoid adding accidental duplicates on rapid user clicks.
 */
export function pendingTopicTask(
 tasks:readonly StudyTask[],subject:string,topic:string,today=civilToday()
):StudyTask|null{
 return tasks.find(task=>!task.done&&task.date>=today&&taskCoversSyllabusTopic(task,subject,topic))??null;
}

/** Suggest the earliest study day with enough unallocated minutes.
 * No user-specific data is sent anywhere; persistence remains in StudyPlanner.
 * Respect enabled study days, daily budget and short-block accessibility.
 */
export function nextSyllabusTopicSlot(
 profile:Pick<StudentProfile,'weeklyDays'|'dailyMinutes'|'sessionMinutes'|'adaptations'|'targetDate'>,
 tasks:readonly StudyTask[],base=new Date(),horizon=14
):{date:string;minutes:number}|null{
 const start=civilToday(base);
 const weekdays=new Set(profile.weeklyDays);
 if(!weekdays.size||profile.dailyMinutes<15)return null;
 const cap=profile.adaptations.includes('short_blocks')
  ?Math.min(25,profile.sessionMinutes):profile.sessionMinutes;
 for(let i=0;i<Math.min(28,Math.max(0,horizon));i++){
  const date=shiftCivilDate(start,i);
  // Avoid scheduling new study sessions after a valid scheduled exam date.
  if(validCivilDate(profile.targetDate)&&date>profile.targetDate)break;
  if(!weekdays.has(dateAtNoon(date).getDay()))continue;
  const used=tasks.filter(task=>task.date===date)
   .reduce((sum,task)=>sum+Math.max(0,task.minutes),0);
  const available=Math.max(0,profile.dailyMinutes-used);
  const minutes=Math.min(cap,available);
  if(minutes>=15)return {date,minutes};
 }
 return null;
}

export function suggestSyllabusTopicSchedule(
 profile:Pick<StudentProfile,'weeklyDays'|'dailyMinutes'|'sessionMinutes'|'adaptations'|'targetDate'>,
 tasks:readonly StudyTask[],subject:string,topic:string,
 base=new Date(),review=false
):TopicSchedule|null{
 const today=civilToday(base);
 if(pendingTopicTask(tasks,subject,topic,today))return null;
 const slot=nextSyllabusTopicSlot(profile,tasks,base);
 if(!slot)return null;
 const title=(review?'Revisar ':'Estudar ')+subject+': '+topic+' · prática guiada';
 return {...slot,title:title.slice(0,120)};
}
