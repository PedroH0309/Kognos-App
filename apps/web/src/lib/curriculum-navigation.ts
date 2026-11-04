import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {ExamId} from './exam-blueprints.ts';
import {isProvaoTopic,type ProvaoGrade} from './provao-paulista.ts';

/** Pure selection flow used by the standalone curriculum library.
 * Keep original editorial order, do not label a mapped topic as a full lesson.
 */
export type CurriculumListTopic=CurriculumTopic&{status:string};
export type CurriculumStep='subjects'|'topics'|'lesson';
export function scopedCurriculum<T extends CurriculumListTopic>(
 topics:readonly T[],exam:ExamId|'all',grade:ProvaoGrade|null
):T[]{
 return topics.filter(t=>(exam==='all'||t.exams.includes(exam))&&
  (exam!=='saresp'||isProvaoTopic(t.subject,t.topic,grade)));
}
export function curriculumSubjects<T extends CurriculumListTopic>(topics:readonly T[]):Array<{name:string;total:number;developed:number;introduced:number}>{
 const result=new Map<string,{name:string;total:number;developed:number;introduced:number}>();
 for(const t of topics){
  const row=result.get(t.subject)??{name:t.subject,total:0,developed:0,introduced:0};
  row.total++;
  if(t.status==='published')row.developed++;
  if(t.status==='introduction')row.introduced++;
  result.set(t.subject,row);
 }
 return [...result.values()].sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
}
export function curriculumSubjectTopics<T extends CurriculumListTopic>(topics:readonly T[],subject:string):T[]{
 return topics.filter(t=>t.subject===subject);
}
export function nextCurriculumTopic<T extends CurriculumListTopic>(topics:readonly T[],selectedId:string):T|null{
 const i=topics.findIndex(t=>t.id===selectedId);
 return i<0||i+1>=topics.length?null:topics[i+1];
}
export function canFinishLesson(hasWrittenLesson:boolean,readingConfirmed:boolean,activitiesAnswered:boolean,gradedAnswered:boolean):boolean{
 return hasWrittenLesson&&readingConfirmed&&activitiesAnswered&&gradedAnswered;
}
