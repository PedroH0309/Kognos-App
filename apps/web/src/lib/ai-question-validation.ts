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
function goodText(s:unknown,min:number,max:number){
 // Comparisons like x < 3, 5 > 2 are legitimate in Maths/Physics.
 // React escapes displayed text; still reject HTML-like tags in generated items.
 return typeof s==='string'&&s.trim().length>=min&&s.trim().length<=max
   &&!/<\/?[a-z][^>]{0,200}>/i.test(s);
}
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
export type ReviewAssessment={
 approved:ValidatedQuestion[];
 missingIndexes:number[];
 rejectedIndexes:number[];
 disputedIndexes:number[];
};
/** A missing/invalid review is NOT a rejection of the underlying question:
 * try reviewing those candidates again before paying to generate replacements.
 * Neither missing reviews nor answer disagreements are ever approved.
 */
export function assessIndependentReview(raw:string,items:ValidatedQuestion[]):ReviewAssessment{
 if(raw.length>16000)throw new Error('Revisão acima do limite.');
 const parsed=cleanJson(raw);
 const entries=(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))
   ?(parsed as Record<string,unknown>).reviews:parsed;
 if(!Array.isArray(entries))throw new Error('A revisão automática não retornou o formato esperado.');
 const byIndex=new Map<number,ModelReview>();
 for(const v of entries){
  if(!v||typeof v!=='object'||Array.isArray(v))continue;
  const r=v as Record<string,unknown>;
  if(!Number.isInteger(r.index)||Number(r.index)<0||Number(r.index)>=items.length||
     typeof r.approved!=='boolean'||!Number.isInteger(r.correct_index)||
     Number(r.correct_index)<0||Number(r.correct_index)>4)continue;
  if(byIndex.has(Number(r.index)))continue;
  byIndex.set(Number(r.index),{
   index:Number(r.index),approved:r.approved,correct_index:Number(r.correct_index),
   reason:typeof r.reason==='string'?r.reason.slice(0,500):''
  });
 }
 const approved:ValidatedQuestion[]=[],missingIndexes:number[]=[],rejectedIndexes:number[]=[],disputedIndexes:number[]=[];
 for(let i=0;i<items.length;i++){
  const response=byIndex.get(i);
  if(!response){missingIndexes.push(i);continue;}
  if(!response.approved){rejectedIndexes.push(i);continue;}
  if(response.correct_index!==items[i].correct_index){disputedIndexes.push(i);continue;}
  approved.push(items[i]);
 }
 return {approved,missingIndexes,rejectedIndexes,disputedIndexes};
}
export function filterByIndependentReview(raw:string,items:ValidatedQuestion[]):ValidatedQuestion[]{
 return assessIndependentReview(raw,items).approved;
}
/** Conservative text-similarity check: catches trivial rewordings, not general
 * semantic equivalents. Never claim all model-generated questions are conceptually
 * unique, and never use this in place of the per-user SQL reservation constraint.
 */
export function stronglySimilarQuestion(a:string,b:string):boolean{
 const left=normalize(a),right=normalize(b);
 if(left===right)return true;
 if(Math.min(left.length,right.length)<55||Math.min(left.length,right.length)/Math.max(left.length,right.length)<0.82)return false;
 // Preserve digits and maths operators: changing "2+5" to "2-5" is material.
 const words=(text:string)=>text.match(/[\p{L}\p{N}]+|[+*/=<>&-]/gu)||[];
 const A=words(left),B=words(right);
 if(A.length<10||B.length<10)return false;
 const common=new Set(A),uniqueB=new Set(B);
 const intersection=[...common].filter(x=>uniqueB.has(x)).length;
 const jaccard=intersection/(new Set([...common,...uniqueB]).size||1);
 if(jaccard<0.86)return false;
 const shingles=(text:string)=>{
  const values=new Set<string>();
  for(let i=0;i+2<text.length;i++)values.add(text.slice(i,i+3));
  return values;
 };
 const x=shingles(left),y=shingles(right);
 const shared=[...x].filter(v=>y.has(v)).length;
 const dice=(2*shared)/(x.size+y.size||1);
 return dice>=0.90;
}

/** Removes exact and highly similar wording from new approved questions.
 * Read windows are bounded to avoid expensive full-account history scans.
 */
export function excludePreviouslyGenerated(items:readonly ValidatedQuestion[],existingPrompts:readonly string[]):ValidatedQuestion[]{
 const seen=new Set(existingPrompts.map(normalize));
 const accepted:string[]=[...existingPrompts];
 return items.filter(q=>{
  const key=normalize(q.prompt);
  if(seen.has(key)||accepted.some(previous=>stronglySimilarQuestion(previous,q.prompt)))return false;
  seen.add(key);accepted.push(q.prompt);return true;
 });
}
export function publicGeneratedQuestion(row:Record<string,unknown>){
 return {id:row.id,lesson_id:row.lesson_id??null,institution:row.institution,source_title:row.source_title,source_url:row.source_url,source_kind:row.source_topic_id?'editor_approved_source':'editorial',edition:row.edition,subject:row.subject,topic:row.topic,difficulty:row.difficulty,prompt:row.prompt,options:row.options,created_at:row.created_at,review_status:'auto_reviewed' as const};
}