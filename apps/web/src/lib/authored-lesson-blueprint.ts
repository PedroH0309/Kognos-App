/** Padrão autoral estático reutilizável; a estrutura é compartilhada, NÃO os fatos.
 * Cada assunto fornece explicações, exemplos, problemas e correções específicos.
 * Textos redigidos durante desenvolvimento; nenhuma API de geração é chamada ao ler.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLevel,CourseLesson,CourseSection,CourseTask} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {examBlueprints} from './exam-blueprints.ts';

export type BlueprintChapter=readonly [
 title:string,
 explanation:string,
 workedExample:string,
 falseBelief:string,
 learningAction:string,
 checkpointPrompt:string,
 checkpointHint:string,
 checkpointSolution:string,
 errorCorrection:string
];
export type BlueprintLink=readonly [subject:string,topic:string,reason:string];
export type LessonBlueprint={
 subject:string;
 topic:string;
 objective:string;
 chapters:readonly [BlueprintChapter,BlueprintChapter,BlueprintChapter];
 situation:readonly [context:string,question:string,answer:string];
 links:readonly [BlueprintLink,BlueprintLink];
};

const levels:readonly CourseLevel[]=['basic','intermediate','advanced'];

/** All lessons follow the same progression while maintaining unique authored information. */
export function renderAuthoredBlueprint(topic:CurriculumTopic,data:LessonBlueprint):CourseLesson{
 const sections:CourseSection[]=data.chapters.map((entry,i)=>({
  level:levels[i],title:entry[0],explanation:(i===0?'Aula específica do Kognos; revisão docente pendente.\n\n':'')+entry[1],
  example:entry[2],pitfall:'Evite este equívoco: '+entry[3],
  steps:[
   entry[4],
   'Ao finalizar esta etapa, confira se sua explicação distingue a ideia correta da afirmação equivocada: '+entry[3]
  ]
 }));
 const tasks:CourseTask[]=data.chapters.flatMap((chapter,i)=>[
  {level:levels[i],prompt:chapter[5],hint:chapter[6],solution:chapter[7]},
  {level:levels[i],prompt:'Analise a afirmação sobre '+data.topic+': “'+chapter[3]+'”. Por que ela precisa ser corrigida?',hint:chapter[4],solution:chapter[8]}
 ]);
 const sourceUrls=[...new Set(topic.exams.map(e=>examBlueprints[e]?.sourceUrl).filter((url):url is string=>Boolean(url?.startsWith('https://'))))];
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:data.objective,prerequisites:[],sections,tasks,videos:[],
  authorship:'Kognos — aula autoral específica com estrutura padronizada; sem homologação docente',
  license:'Material autoral preparatório Kognos; não é prova nem conteúdo oficial',
  sourceUrls,review:'introductory'
 };
}
export function renderAuthoredSituation(data:LessonBlueprint):EverydayContext{
 return {
  subject:data.subject,topic:data.topic,context:data.situation[0],
  question:data.situation[1],answer:data.situation[2],
  connections:data.links.map(([subject,topic,reason])=>({subject,topic,reason}))
 };
}
