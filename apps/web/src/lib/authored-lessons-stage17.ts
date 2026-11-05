/** Etapa 17 — 32 aulas autorais estáticas, agrupadas em arquivos para revisão por área.
 * Conteúdo redigido pelo assistente, sem homologação docente e sem geração ao abrir.
 * Situações cotidianas ilustrativas não são dados observacionais.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseLevel,CourseSection,CourseTask} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {stage17Batch1} from './authored-stage17-batch1.ts';
import {stage17Batch2} from './authored-stage17-batch2.ts';
import {stage17Batch3} from './authored-stage17-batch3.ts';
import {stage17Batch4} from './authored-stage17-batch4.ts';
import {stage17Batch5} from './authored-stage17-batch5.ts';
import {stage17Batch6} from './authored-stage17-batch6.ts';
import {stage17Batch7} from './authored-stage17-batch7.ts';
import {stage17Batch8} from './authored-stage17-batch8.ts';
import {stage17Batch9} from './authored-stage17-batch9.ts';
export type Stage17Chapter={title:string;explanation:string;example:string;pitfall:string;steps:[string,string]};
export type Stage17Practice={level:CourseLevel;prompt:string;hint:string;solution:string};
export type Stage17Spec={subject:string;topic:string;objective:string;sections:[Stage17Chapter,Stage17Chapter,Stage17Chapter];tasks:[Stage17Practice,Stage17Practice,Stage17Practice,Stage17Practice,Stage17Practice,Stage17Practice];everyday:Pick<EverydayContext,'context'|'question'|'answer'|'connections'>};
const specs:Stage17Spec[]=[...stage17Batch1,...stage17Batch2,...stage17Batch3,...stage17Batch4,...stage17Batch5,...stage17Batch6,...stage17Batch7,...stage17Batch8,...stage17Batch9];
const lookup=new Map(specs.map(s=>[s.subject+'\0'+s.topic,s]));
export const stage17Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage17EverydayContexts:readonly EverydayContext[]=specs.map(s=>({subject:s.subject,topic:s.topic,...s.everyday}));
export function stage17Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=lookup.get(topic.subject+'\0'+topic.topic);
 if(!data)return null;
 const levels:CourseLevel[]=['basic','intermediate','advanced'];
 const sections:CourseSection[]=data.sections.map((section,i)=>({
  ...section,level:levels[i],
  explanation:(i===0?'Aula específica do Kognos; revisão docente pendente.\n\n':'')+section.explanation
 }));
 const sourceUrls=[...new Set(topic.exams.map(e=>examBlueprints[e]?.sourceUrl).filter((u):u is string=>Boolean(u?.startsWith('https://'))))];
 const tasks:CourseTask[]=data.tasks.map(t=>({...t}));
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:data.objective,prerequisites:[],sections,tasks,videos:[],
  authorship:'Kognos — aula autoral específica; sem homologação docente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'
 };
}
