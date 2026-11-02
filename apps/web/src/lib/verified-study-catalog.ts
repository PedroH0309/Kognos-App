import type {ExamId} from './exam-blueprints.ts';
import type {ApprovedSyllabusTopic} from './syllabus-sources.ts';

export type VerifiedStudyTopic=Pick<ApprovedSyllabusTopic,
 'id'|'institution'|'subject'|'topic'|'edition'|'sourceTitle'|'sourceUrl'|'evidence'>;

/** Keep editorial coverage available while adding topics that actually have
 * an approved source/excerpt. No model proposal or unapproved row is accepted.
 * The server /api/exam-sources filters source AND topic review states first.
 */
export function syllabusWithVerifiedTopics(
 editorial:Record<string,readonly string[]>,
 exams:readonly ExamId[],
 approved:readonly VerifiedStudyTopic[]
):Record<string,readonly string[]>{
 const merged:Record<string,string[]>={};
 for(const [subject,topics] of Object.entries(editorial))merged[subject]=[...new Set(topics)];
 const active=new Set(exams);
 for(const item of approved){
  if(!active.has(item.institution)||!item.subject?.trim()||!item.topic?.trim())continue;
  if(!Array.isArray(merged[item.subject]))merged[item.subject]=[];
  if(!merged[item.subject].includes(item.topic))merged[item.subject].push(item.topic);
 }
 return merged;
}
/** A topic is explicitly sourced only if an approved catalogue record for the
 * currently selected examination matches the exact subject and topic.
 */
export function confirmedTopic(
 approved:readonly VerifiedStudyTopic[],
 exams:readonly ExamId[],
 subject:string,
 topic:string
):VerifiedStudyTopic|null{
 const active=new Set(exams);
 return approved.find(item=>active.has(item.institution)&&item.subject===subject&&item.topic===topic)??null;
}
