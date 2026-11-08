import type {ExamId} from './exam-blueprints.ts';
export type CourseLevel='basic'|'intermediate'|'advanced';
export type CourseSection={level:CourseLevel;title:string;explanation:string;steps:string[];example:string;pitfall:string};
export type CourseTask={level:CourseLevel;prompt:string;hint:string;solution:string;options?:string[];correctIndex?:number};
export type CourseVideo={title:string;author:string;videoId:string;start:number;end?:number;evidenceUrl:string;verification:'chapter_index'|'manually_checked';checkedOn:string};
export type CourseLesson={kind:'lesson';id:string;subject:string;topic:string;exams:ExamId[];objective:string;prerequisites:string[];sections:CourseSection[];tasks:CourseTask[];videos:CourseVideo[];authorship:string;license:string;sourceUrls:string[];review:'editor'|'ai_reviewed'|'introductory';supportTopic?:string;syllabusScope?:string};
export type CourseQuestion={kind:'question';id:string;courseId:string;prompt:string;options:string[];correctIndex:number;explanation:string;authorship:string;license:string;sourceUrls:string[]};
export type CourseDocument=CourseLesson|CourseQuestion;
export type ContentRow={id:string;kind:'lesson'|'question';draft:CourseDocument;published:CourseDocument|null;revision:number;published_revision:number|null;archived:boolean;updated_at:string};
export const levels:Record<CourseLevel,string>={basic:'1. Fundamentos',intermediate:'2. Aplicação',advanced:'3. Aprofundamento'};
const ids=/^[a-z][a-z0-9-]{2,90}$/;
const exams=['enem','fuvest','vunesp','etec','saresp'];
const isText=(v:unknown,min=1,max=12000):v is string=>typeof v==='string'&&v.trim().length>=min&&v.length<=max;
const strings=(v:unknown,min=0,max=30)=>Array.isArray(v)&&v.length>=min&&v.length<=max&&v.every(x=>isText(x,1,1000));
export function safeSourceUrl(value:unknown):value is string{
 if(!isText(value,8,1000))return false;
 try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password&&!u.port;}catch{return false;}
}
export function parseVideo(v:unknown):CourseVideo|null{
 if(!v||typeof v!=='object'||Array.isArray(v))return null;
 const x=v as Record<string,unknown>;
 if(!isText(x.title,3,200)||!isText(x.author,2,120)||typeof x.videoId!=='string'||!/^[-_a-zA-Z0-9]{11}$/.test(x.videoId))return null;
 if(!Number.isInteger(x.start)||Number(x.start)<0||Number(x.start)>86400)return null;
 if(x.end!==undefined&&(!Number.isInteger(x.end)||Number(x.end)<=Number(x.start)||Number(x.end)>86400))return null;
 if(!safeSourceUrl(x.evidenceUrl)||!['chapter_index','manually_checked'].includes(String(x.verification))||!isText(x.checkedOn,10,10)||!/^\d{4}-\d{2}-\d{2}$/.test(x.checkedOn))return null;
 return {title:x.title,author:x.author,videoId:x.videoId,start:Number(x.start),...(x.end===undefined?{}:{end:Number(x.end)}),evidenceUrl:x.evidenceUrl,verification:x.verification as CourseVideo['verification'],checkedOn:x.checkedOn};
}
export function videoLink(video:CourseVideo){return `https://www.youtube.com/watch?v=${video.videoId}&t=${video.start}s`;}
export function videoEmbed(video:CourseVideo){return `https://www.youtube-nocookie.com/embed/${video.videoId}?start=${video.start}${video.end?`&end=${video.end}`:''}`;}
export function formatVideoTime(seconds:number){const h=Math.floor(seconds/3600),m=Math.floor(seconds%3600/60),s=seconds%60;return `${h?`${h}:`:''}${h?String(m).padStart(2,'0'):m}:${String(s).padStart(2,'0')}`;}
export function parseCourseDocument(raw:unknown,complete=true):CourseDocument|null{
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return null;
 const v=raw as Record<string,unknown>;
 const bodyText=(value:unknown,min:number,max:number)=>isText(value,complete?min:0,max);
 if(typeof v.id!=='string'||!ids.test(v.id)||!isText(v.authorship,3,200)||!isText(v.license,3,200)||!Array.isArray(v.sourceUrls)||v.sourceUrls.length>12||!v.sourceUrls.every(safeSourceUrl))return null;
 const common={id:v.id,authorship:v.authorship,license:v.license,sourceUrls:v.sourceUrls as string[]};
 if(v.kind==='question'){
  if(typeof v.courseId!=='string'||!ids.test(v.courseId)||!bodyText(v.prompt,15,5000)||!Array.isArray(v.options)||v.options.length<2||v.options.length>5||!v.options.every(o=>isText(o,complete?1:0,1000))||(complete&&new Set(v.options as string[]).size!==(v.options as string[]).length)||!Number.isInteger(v.correctIndex)||Number(v.correctIndex)<0||Number(v.correctIndex)>=(v.options as string[]).length||!bodyText(v.explanation,20,8000))return null;
  return {...common,kind:'question',courseId:v.courseId,prompt:v.prompt,options:v.options as string[],correctIndex:Number(v.correctIndex),explanation:v.explanation};
 }
 if(v.kind!=='lesson'||!isText(v.subject,2,80)||!isText(v.topic,3,200)||!strings(v.exams,1,5)||!(v.exams as string[]).every(e=>exams.includes(e))||!bodyText(v.objective,15,1200)||!strings(v.prerequisites,0,20))return null;
 if(!Array.isArray(v.sections)||v.sections.length!==3||!Array.isArray(v.tasks)||v.tasks.length<3||v.tasks.length>15||!Array.isArray(v.videos)||v.videos.length>12||!['editor','ai_reviewed','introductory'].includes(String(v.review)))return null;
 const sections:CourseSection[]=[];
 for(const [i,s] of v.sections.entries()){
  if(!s||typeof s!=='object'||s.level!==(['basic','intermediate','advanced'][i])||!bodyText(s.title,3,180)||!bodyText(s.explanation,80,16000)||!strings(s.steps,complete?2:0,12)||!bodyText(s.example,40,10000)||!bodyText(s.pitfall,10,1500))return null;
  sections.push({level:s.level,title:s.title,explanation:s.explanation,steps:s.steps,example:s.example,pitfall:s.pitfall});
 }
 const tasks:CourseTask[]=[];
 for(const t of v.tasks){
  if(!t||typeof t!=='object'||!Object.hasOwn(levels,t.level)||!bodyText(t.prompt,15,4000)||!bodyText(t.hint,10,2000)||!bodyText(t.solution,20,8000))return null;
  const hasChoices=t.options!==undefined||t.correctIndex!==undefined;
  if(hasChoices&&(!Array.isArray(t.options)||t.options.length!==4||
   !t.options.every(option=>isText(option,complete?1:0,1000))||
   (complete&&new Set(t.options).size!==4)||
   !Number.isInteger(t.correctIndex)||Number(t.correctIndex)<0||Number(t.correctIndex)>3))return null;
  tasks.push({level:t.level,prompt:t.prompt,hint:t.hint,solution:t.solution,
   ...(hasChoices?{options:t.options as string[],correctIndex:Number(t.correctIndex)}:{})});
 }
 if(!Object.keys(levels).every(l=>tasks.some(t=>t.level===l)))return null;
 const videos=v.videos.map(parseVideo);if(videos.some(x=>!x))return null;
 return {...common,kind:'lesson',subject:v.subject,topic:v.topic,exams:v.exams as ExamId[],objective:v.objective,prerequisites:v.prerequisites as string[],sections,tasks,videos:videos as CourseVideo[],review:v.review as CourseLesson['review']};
}
export function publicQuestion(q:CourseQuestion,revision:number){return {id:q.id,courseId:q.courseId,prompt:q.prompt,options:q.options,authorship:q.authorship,license:q.license,sourceUrls:q.sourceUrls,revision};}
export type PublicCourseQuestion=ReturnType<typeof publicQuestion>;
export function gradeQuestion(q:CourseQuestion,index:unknown){if(!Number.isInteger(index)||Number(index)<0||Number(index)>=q.options.length)return null;return {correct:Number(index)===q.correctIndex,correctIndex:q.correctIndex,explanation:q.explanation};}
