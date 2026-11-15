/** Structural checks are necessary, never proof of pedagogical correctness. */
import type {CourseSection,CourseTask} from './course-content.ts';
export type AuthoredLessonSpec={subject:string;topic:string;objective:string;prerequisites:string[];sections:CourseSection[];tasks:CourseTask[]};
export const authoredLessonMetrics={explanation:900,steps:3,example:80,pitfall:30,hint:40,solution:130} as const;
const levels=['basic','intermediate','advanced'];
const record=(value:unknown):Record<string,unknown>|null=>value!==null&&typeof value==='object'&&!Array.isArray(value)?value as Record<string,unknown>:null;
const normalized=(value:string)=>value.normalize('NFKC').trim().replace(/\s+/g,' ').toLocaleLowerCase('pt-BR');
const unfinished=/conteúdo em desenvolvimento|exemplo a escrever|inserir (?:conteúdo|exemplo|questão)|lorem ipsum/i;
// Catches corrupted words such as "설득ção", without banning isolated quotations.
const mixedWord=/(?:\p{Script=Latin}[\p{Script=Han}\p{Script=Hangul}]|[\p{Script=Han}\p{Script=Hangul}]\p{Script=Latin})/u;

export function authoredLessonQualityIssues(value:unknown):string[]{
 const issues:string[]=[],lesson=record(value);
 if(!lesson)return ['lesson: objeto obrigatório'];
 const checkWord=(field:unknown,path:string)=>{
  if(typeof field==='string'&&mixedWord.test(field))issues.push(path+': mistura de alfabetos dentro de palavra');
 };
 const text=(field:unknown,path:string,min:number,max=16000)=>{
  if(typeof field!=='string'||field.trim().length<min||field.length>max){issues.push(path+': texto insuficiente ou inválido');return false;}
  if(unfinished.test(field))issues.push(path+': rascunho incompleto');
  checkWord(field,path);
  return true;
 };
 text(lesson.subject,'subject',2,80);text(lesson.topic,'topic',3,200);text(lesson.objective,'objective',30,1200);
 if(!Array.isArray(lesson.prerequisites)||lesson.prerequisites.length<1||lesson.prerequisites.length>20||!lesson.prerequisites.every(item=>typeof item==='string'&&item.trim().length>=3&&item.length<=1000))issues.push('prerequisites: lista específica obrigatória');
 if(Array.isArray(lesson.prerequisites))lesson.prerequisites.forEach((item,index)=>checkWord(item,'prerequisites.'+index));
 for(const group of ['sections','tasks'] as const){
  const items=lesson[group];
  if(!Array.isArray(items)||items.length!==3){issues.push(group+': exatamente três níveis obrigatórios');continue;}
  const contents=new Set<string>(),choices=new Set<string>();
  items.forEach((item,index)=>{
   const path=group+'.'+index,entry=record(item);
   if(!entry){issues.push(path+': objeto obrigatório');return;}
   if(entry.level!==levels[index])issues.push(path+'.level: ordem basic/intermediate/advanced obrigatória');
   const body=group==='sections'?'explanation':'prompt';
   if(typeof entry[body]==='string'){
    const key=normalized(entry[body]);
    if(contents.has(key))issues.push(path+'.'+body+': texto repetido');
    contents.add(key);
   }
   if(group==='sections'){
    text(entry.title,path+'.title',5,180);
    text(entry.explanation,path+'.explanation',authoredLessonMetrics.explanation);
    text(entry.example,path+'.example',authoredLessonMetrics.example,10000);
    text(entry.pitfall,path+'.pitfall',authoredLessonMetrics.pitfall,1500);
    if(!Array.isArray(entry.steps)||entry.steps.length<authoredLessonMetrics.steps||entry.steps.length>12||!entry.steps.every(step=>typeof step==='string'&&step.trim().length>=10&&step.length<=1000))issues.push(path+'.steps: pelo menos três passos textuais');
    if(Array.isArray(entry.steps))entry.steps.forEach((step,index)=>checkWord(step,path+'.steps.'+index));
   }else{
    text(entry.prompt,path+'.prompt',25,4000);text(entry.hint,path+'.hint',authoredLessonMetrics.hint,2000);text(entry.solution,path+'.solution',authoredLessonMetrics.solution,8000);
    if(typeof entry.prompt==='string'&&/(?:na|observe a|veja a) figura|imagem abaixo|gráfico abaixo/i.test(entry.prompt))issues.push(path+'.prompt: referência visual sem recurso fornecido');
    if(!Array.isArray(entry.options)||entry.options.length!==4||!entry.options.every(option=>typeof option==='string'&&option.trim().length>0&&option.length<=1000))issues.push(path+'.options: quatro alternativas textuais obrigatórias');
    else for(const option of entry.options as string[]){
     checkWord(option,path+'.options');
     const key=normalized(option);
     if(choices.has(key))issues.push(path+'.options: alternativa repetida');
     choices.add(key);
    }
    if(!Number.isInteger(entry.correctIndex)||Number(entry.correctIndex)<0||Number(entry.correctIndex)>3)issues.push(path+'.correctIndex: índice entre zero e três obrigatório');
   }
  });
 }
 return issues;
}
