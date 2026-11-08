import type {CourseLesson,CourseTask} from './course-content.ts';
import type {LearningLesson} from './learning-catalog.ts';
import {learningLessons,questionForLesson} from './learning-catalog.ts';

/** Local formative choice activity. Never persisted as an official examination attempt. */
export type LessonChoice={
 prompt:string;
 instruction:string;
 options:[string,string,string,string];
 correctIndex:number;
 explanation:string;
 hint?:string;
 source:'editorial'|'resolution_matching'|'demo'|'example_matching';
};
const clean=(value:string)=>value.replace(/\s+/g,' ').trim();
const excerpt=(value:string,max=260)=>{
 const text=clean(value);
 if(text.length<=max)return text;
 const cut=text.lastIndexOf(' ',max);
 return text.slice(0,cut>max/2?cut:max).trimEnd()+'…';
};
function arrange(correct:string,distractors:string[],seed:string):{options:[string,string,string,string];correctIndex:number}{
 const filtered=[...new Set(distractors.map(v=>excerpt(v)).filter(v=>v&&v!==correct))];
 const alternatives=[correct,...filtered.slice(0,3)];
 // Generic incorrect strategies are fallback distractors only, never invented subject-specific facts.
 const fallbacks=[
  'Repetir o enunciado sem usar o conceito necessário para justificar a conclusão.',
  'Escolher uma resposta sem verificar as informações ou as condições do problema.',
  'Aplicar uma regra automaticamente, sem conferir se ela se aplica à situação.'
 ];
 for(const value of fallbacks)if(alternatives.length<4&&!alternatives.includes(value))alternatives.push(value);
 const offset=Array.from(seed).reduce((sum,char)=>sum+char.charCodeAt(0),0)%4;
 const correctIndex=offset;
 const result=[...alternatives.slice(1)];
 result.splice(correctIndex,0,correct);
 return {options:result as [string,string,string,string],correctIndex};
}
export function lessonTaskChoice(lesson:CourseLesson,task:CourseTask):LessonChoice{
 if(task.options&&task.options.length===4&&typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4&&new Set(task.options).size===4)
  return {prompt:task.prompt,instruction:'Selecione a alternativa correta.',options:task.options as [string,string,string,string],
   correctIndex:task.correctIndex,explanation:task.solution,hint:task.hint,source:'editorial'};
 const correct=excerpt(task.solution);
 const alternatives=[
  ...lesson.tasks.filter(other=>other!==task).map(other=>other.solution),
  ...lesson.sections.map(section=>section.example),
  ...lesson.sections.map(section=>section.pitfall)
 ];
 return {prompt:task.prompt,
  instruction:'Qual alternativa inicia a resolução de referência correspondente a este exercício?',
  ...arrange(correct,alternatives,task.prompt),
  explanation:task.solution,hint:task.hint,source:'resolution_matching'};
}
export function introductoryChoice(lesson:LearningLesson):LessonChoice|null{
 const question=questionForLesson(lesson);
 if(question&&question.options.length===4&&question.correct>=0&&question.correct<4)
  return {prompt:question.prompt,instruction:'Selecione a alternativa correta.',
   options:question.options,correctIndex:question.correct,explanation:question.explanation,source:'demo'};
 if(!lesson.workedExample.trim()||!lesson.explanation.trim())return null;
 const correct=excerpt(lesson.workedExample);
 const alternatives=learningLessons.filter(other=>other.id!==lesson.id&&other.workedExample.trim()&&other.subject===lesson.subject)
  .map(other=>other.workedExample);
 return {prompt:'Qual alternativa corresponde ao exemplo resolvido apresentado nesta aula de '+lesson.topic+'?',
  instruction:'Reconheça o exemplo estudado. Esta atividade não verifica, sozinha, o domínio do conteúdo.',
  ...arrange(correct,alternatives,lesson.id),explanation:lesson.workedExample,source:'example_matching'};
}
