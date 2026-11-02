import {type GenerationRequest} from './exam-blueprints.ts';

export type ValidatedQuestion={prompt:string;options:[string,string,string,string,string];correct_index:number;explanation:string};
export type ModelReview={index:number;approved:boolean;correct_index:number;reason:string};

function cleanJson(raw:string):unknown {
 const trimmed=raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'');
 try{return JSON.parse(trimmed);}catch{
  const i=trimmed.indexOf('{'),j=trimmed.lastIndexOf('}');
  if(i<0||j<=i)throw new Error('O provedor não retornou JSON válido.');
  try{return JSON.parse(trimmed.slice(i,j+1));}catch{throw new Error('O provedor não retornou JSON válido.');}
 }
}
function goodText(s:unknown,min:number,max:number){return typeof s==='string'&&s.trim().length>=min&&s.trim().length<=max&&!/[<>]/.test(s);}
function normalize(s:string){return s.normalize('NFKD').toLowerCase().replace(/\p{M}/gu,'').replace(/\s+/g,' ').trim();}

/** Structural checks reject malformed/duplicate alternatives; not a proof of factual correctness. */
export function validateModelQuestions(raw:string,request:GenerationRequest):ValidatedQuestion[]{
 if(raw.length>30000)throw new Error('Resposta de geração acima do limite.');
 const parsed=cleanJson(raw);
 const src=(parsed && typeof parsed==='object' && !Array.isArray(parsed))?(parsed as Record<string,unknown>).questions:parsed;
 if(!Array.isArray(src)||src.length<1||src.length>request.count)throw new Error('A IA não retornou a quantidade solicitada de questões.');
 const seen=new Set<string>(),out:ValidatedQuestion[]=[];
 for(const entry of src){
  if(!entry||typeof entry!=='object'||Array.isArray(entry))continue;
  const q=entry as Record<string,unknown>;
  if(!goodText(q.prompt,30,1200)||!Array.isArray(q.options)||q.options.length!==5||!q.options.every(x=>goodText(x,2,260))||!Number.isInteger(q.correct_index)||Number(q.correct_index)<0||Number(q.correct_index)>4||!goodText(q.explanation,35,1600))continue;
  const prompt=String(q.prompt).trim(),options=q.options.map(x=>String(x).trim()) as [string,string,string,string,string];
  if(new Set(options.map(normalize)).size!==5||seen.has(normalize(prompt)))continue;
  if(options.some(x=>/^(?:todas as anteriores|nenhuma das anteriores)$/i.test(x)))continue;
  seen.add(normalize(prompt));
  out.push({prompt,options,correct_index:Number(q.correct_index),explanation:String(q.explanation).trim()});
 }
 if(!out.length)throw new Error('Nenhuma questão passou pela validação estrutural.');
 return out;
}
export function filterByIndependentReview(raw:string,items:ValidatedQuestion[]):ValidatedQuestion[]{
 if(raw.length>16000)throw new Error('Revisão acima do limite.');
 const parsed=cleanJson(raw);
 const entries=(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))?(parsed as Record<string,unknown>).reviews:parsed;
 if(!Array.isArray(entries))throw new Error('A revisão automática não retornou o formato esperado.');
 const byIndex=new Map<number,ModelReview>();
 for(const v of entries){
  if(!v||typeof v!=='object'||Array.isArray(v))continue;
  const r=v as Record<string,unknown>;
  if(!Number.isInteger(r.index)||Number(r.index)<0||Number(r.index)>=items.length||typeof r.approved!=='boolean'||!Number.isInteger(r.correct_index)||Number(r.correct_index)<0||Number(r.correct_index)>4)continue;
  if(byIndex.has(Number(r.index)))continue;
  byIndex.set(Number(r.index),{index:Number(r.index),approved:r.approved,correct_index:Number(r.correct_index),reason:typeof r.reason==='string'?r.reason.slice(0,500):''});
 }
 return items.filter((q,i)=>byIndex.get(i)?.approved===true&&byIndex.get(i)?.correct_index===q.correct_index);
}
export function publicGeneratedQuestion(row:Record<string,unknown>){
 return {id:row.id,lesson_id:row.lesson_id??null,institution:row.institution,source_title:row.source_title,source_url:row.source_url,source_kind:row.source_topic_id?'editor_approved_source':'editorial',edition:row.edition,subject:row.subject,topic:row.topic,difficulty:row.difficulty,prompt:row.prompt,options:row.options,created_at:row.created_at,review_status:'auto_reviewed' as const};
}