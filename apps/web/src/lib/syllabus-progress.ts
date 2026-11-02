import type {StudyTask} from './cloud-study-model.ts';

/** Topic progress reflects actual calendar task records, not proven mastery. */
export type SyllabusTopicState='not_started'|'planned'|'studied'|'review';
export type TopicWeakEvidence={subject:string;topic:string;lastWrong:boolean;incorrect:number};
export type SyllabusTopicProgress={
 topic:string;state:SyllabusTopicState;scheduled:number;completed:number;recordedErrors:number
};
export type SyllabusSubjectProgress={
 subject:string;topics:SyllabusTopicProgress[];total:number;planned:number;studied:number;review:number
};
export type SyllabusProgress={
 subjects:SyllabusSubjectProgress[];total:number;planned:number;studied:number;review:number;
};

/** Compare on punctuation-insensitive, accent-normalized terms.
 * Generated study titles include the exact source topic after the colon.
 */
export function normalizedStudyText(value:string):string{
 return value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
  .toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}
export function taskCoversSyllabusTopic(task:Pick<StudyTask,'subject'|'title'>,subject:string,topic:string):boolean{
 if(normalizedStudyText(task.subject)!==normalizedStudyText(subject))return false;
 const title=normalizedStudyText(task.title);
 const normalizedTopic=normalizedStudyText(topic);
 if(normalizedTopic.length<5)return false;
 // Prefix matching recognizes a long auto-generated task truncated to 120
 // characters; require at least 30 characters to avoid broad false matches.
 const match=normalizedTopic.length>30?normalizedTopic.slice(0,30).trimEnd():normalizedTopic;
 return title.includes(match);
}
export function syllabusProgress(
 catalog:Record<string,readonly string[]>,
 tasks:readonly StudyTask[],
 mistakes:readonly TopicWeakEvidence[]=[]
):SyllabusProgress{
 const subjects=Object.entries(catalog).map(([subject,topics])=>{
  const result=topics.map(topic=>{
   const relevant=tasks.filter(task=>taskCoversSyllabusTopic(task,subject,topic));
   const completed=relevant.filter(task=>task.done).length;
   const needsReview=mistakes.filter(item=>item.lastWrong&&item.incorrect>0
    &&normalizedStudyText(item.subject)===normalizedStudyText(subject)
    &&normalizedStudyText(item.topic)===normalizedStudyText(topic))
    .reduce((sum,item)=>sum+item.incorrect,0);
   const state:SyllabusTopicState=needsReview>0?'review':
    completed>0?'studied':relevant.length>0?'planned':'not_started';
   return {topic,state,scheduled:relevant.length,completed,recordedErrors:needsReview};
  });
  return {subject,topics:result,total:result.length,planned:result.filter(x=>x.state==='planned').length,
   studied:result.filter(x=>x.state==='studied').length,review:result.filter(x=>x.state==='review').length};
 });
 return {subjects,total:subjects.reduce((n,x)=>n+x.total,0),
  planned:subjects.reduce((n,x)=>n+x.planned,0),
  studied:subjects.reduce((n,x)=>n+x.studied,0),
  review:subjects.reduce((n,x)=>n+x.review,0)};
}
