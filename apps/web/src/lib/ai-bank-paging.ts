import {examBlueprints,difficulties, type ExamId, type Difficulty} from './exam-blueprints.ts';

export const AI_BANK_PAGE_SIZE=40;
/** All filters are applied by the server BEFORE pagination; owner scope is mandatory. */
export type AIQuestionListFilter={institution:ExamId|null;subject:string|null;topic:string|null;difficulty:Difficulty|null;offset:number;limit:number};
export function parseAIQuestionListQuery(url:string):AIQuestionListFilter|null {
 let values:URLSearchParams;
 try{values=new URL(url).searchParams;}catch{return null;}
 const inst=values.get('institution'),difficulty=values.get('difficulty');
 const subject=values.get('subject'),topic=values.get('topic');
 const rawOffset=values.get('offset')??'0';
 if(!/^\d{1,6}$/.test(rawOffset))return null;
 const offset=Number(rawOffset);
 if(offset>100000||offset%AI_BANK_PAGE_SIZE!==0)return null;
 if(inst!==null&&!Object.hasOwn(examBlueprints,inst))return null;
 if(difficulty!==null&&!Object.hasOwn(difficulties,difficulty))return null;
 if(subject!==null&&(!subject.trim()||subject.length>80))return null;
 if(topic!==null&&(!topic.trim()||topic.length>120||subject===null))return null;
 return {institution:inst as ExamId|null,difficulty:difficulty as Difficulty|null,subject,topic,offset,limit:AI_BANK_PAGE_SIZE};
}
/**
 * Smaller batches reduce incomplete AI review arrays. Two independent
 * batches can run concurrently, keeping perceived latency near one request
 * while still using the same server-validated 1..5 request contract.
 */
export function splitGenerationBatches(quantity:number):number[]{
 if(!Number.isInteger(quantity)||quantity<1||quantity>10)throw new Error('Escolha entre 1 e 10 questões.');
 const batches:number[]=[];
 for(let rest=quantity;rest>0;){
  const chunk=Math.min(5,rest);
  if(chunk>3)batches.push(3,chunk-3);
  else batches.push(chunk);
  rest-=chunk;
 }
 return batches;
}