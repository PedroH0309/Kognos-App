import {civilToday,dateAtNoon,shiftCivilDate} from './calendar-model.ts';
import {nextSyllabusTopicSlot} from './syllabus-quick-schedule.ts';
import {normalizedStudyText,taskCoversSyllabusTopic,type TopicWeakEvidence} from './syllabus-progress.ts';
import type {StudentProfile} from './profile.ts';
import type {StudyTask} from './cloud-study-model.ts';

export type ReviewSpacing=1|3|7;
export const REVIEW_INTERVALS:readonly ReviewSpacing[]=[1,3,7];
export type ReviewPlanResult={created:StudyTask[];covered:number;skipped:number;topics:number};

/** Turn only *recorded*, most recently incorrect weekly topics into short
 * D+1 / D+3 / D+7 active-recall sessions. This is a scheduling heuristic,
 * not a claim of scientifically validated optimal intervals or mastery.
 *
 * No calendar writes happen here. The caller persists the generated tasks
 * with the existing authenticated cloud/local storage flow.
 */
export function createSpacedReviewPlan(
 profile:Pick<StudentProfile,'weeklyDays'|'dailyMinutes'|'sessionMinutes'|'adaptations'|'targetDate'>,
 existing:readonly StudyTask[],
 mistakes:readonly TopicWeakEvidence[],
 base=new Date(),
 makeId=()=>crypto.randomUUID(),
 maxTopics=3
):ReviewPlanResult {
 const start=civilToday(base);
 const accepted=new Map<string,TopicWeakEvidence>();
 for(const item of mistakes){
  if(!item.lastWrong||!Number.isFinite(item.incorrect)||item.incorrect<=0)continue;
  if(!item.subject.trim()||!item.topic.trim())continue;
  const key=normalizedStudyText(item.subject)+'|'+normalizedStudyText(item.topic);
  const old=accepted.get(key);
  if(!old||item.incorrect>old.incorrect)accepted.set(key,item);
 }
 const topics=[...accepted.values()]
  .sort((a,b)=>b.incorrect-a.incorrect||a.subject.localeCompare(b.subject,'pt-BR')||a.topic.localeCompare(b.topic,'pt-BR'))
  .slice(0,Math.max(0,Math.min(5,maxTopics)));
 const created:StudyTask[]=[];
 let covered=0,skipped=0;
 for(const item of topics){
  for(const interval of REVIEW_INTERVALS){
   const target=shiftCivilDate(start,interval);
   const lastDate=shiftCivilDate(target,2);
   const already=[...existing,...created].some(task=>!task.done&&task.date>=target&&task.date<=lastDate
    &&taskCoversSyllabusTopic(task,item.subject,item.topic));
   if(already){covered++;continue;}
   const slot=nextSyllabusTopicSlot(profile,[...existing,...created],dateAtNoon(target),3);
   if(!slot){skipped++;continue;}
   // A review is deliberately short; daily availability is already checked.
   const minutes=Math.min(20,slot.minutes);
   if(minutes<15){skipped++;continue;}
   const task:StudyTask={
    id:makeId(),date:slot.date,subject:item.subject,minutes,done:false,kind:'manual',
    title:(`Revisar ${item.subject}: ${item.topic} · revisão espaçada D+${interval}`).slice(0,120)
   };
   created.push(task);
  }
 }
 return {created,covered,skipped,topics:topics.length};
}
