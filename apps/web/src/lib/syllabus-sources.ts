import {createHash} from 'node:crypto';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

/** Server-side, allowlisted provenance. These hosts are not a substitute for editorial source review. */
export const officialHosts=new Set([
 'www.gov.br','download.inep.gov.br','www.inep.gov.br',
 'www.fuvest.br','fuvest.br','vestibulinho.etec.sp.gov.br','www.cps.sp.gov.br','cps.sp.gov.br',
 'www.vunesp.com.br','vunesp.com.br',
 'atendimento.educacao.sp.gov.br','www.educacao.sp.gov.br','educacao.sp.gov.br'
]);
export type ImportMethod='official_html'|'manual_transcript';
export type ImportSubmission={institution:ExamId;edition:string;sourceTitle:string;sourceUrl:string;method:ImportMethod;transcript?:string};
export type SyllabusTopicCandidate={subject:string;topic:string;evidence:string};
export type ApprovedSyllabusTopic={id:string;institution:ExamId;edition:string;sourceTitle:string;sourceUrl:string;sourceMethod:ImportMethod;subject:string;topic:string;evidence:string;sourceId:string};
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export function isUuid(v:unknown):v is string{return typeof v==='string'&&uuid.test(v);}
export function safeOfficialUrl(value:unknown):string|null {
 if(typeof value!=='string'||value.length>600)return null;
 try{
  const url=new URL(value);
  if(url.protocol!=='https:'||url.username||url.password||url.port||!officialHosts.has(url.hostname.toLowerCase()))return null;
  if(url.pathname.length>300||url.search.length>200)return null;
  url.hash='';return url.toString();
 }catch{return null;}
}
export function parseImportSubmission(raw:unknown):ImportSubmission|null {
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return null;
 const x=raw as Record<string,unknown>;
 if(typeof x.institution!=='string'||!Object.hasOwn(examBlueprints,x.institution))return null;
 const institution=x.institution as ExamId;
 if(typeof x.edition!=='string'||!/^[\p{L}\p{N} .,/()–—-]{4,90}$/u.test(x.edition.trim()))return null;
 if(typeof x.sourceTitle!=='string'||x.sourceTitle.trim().length<8||x.sourceTitle.length>140)return null;
 const sourceUrl=safeOfficialUrl(x.sourceUrl);
 if(!sourceUrl||(x.method!=='official_html'&&x.method!=='manual_transcript'))return null;
 if(x.method==='manual_transcript'&&(typeof x.transcript!=='string'||x.transcript.trim().length<350||x.transcript.length>26000))return null;
 return {institution,edition:x.edition.trim(),sourceTitle:x.sourceTitle.trim(),sourceUrl,method:x.method,transcript:x.method==='manual_transcript'?String(x.transcript).trim():undefined};
}
export function compactWhitespace(text:string):string{return text.replace(/[\r\n\t\u00a0]+/g,' ').replace(/\s+/g,' ').trim();}
function stripHtml(source:string):string{
 const main=source.match(/<(?:main|article)\b[^>]*>([\s\S]*?)<\/(?:main|article)>/i)?.[1]||source;
 const stripped=main.replace(/<(?:script|style|svg|noscript|template|nav|footer)\b[^>]*>[\s\S]*?<\/\s*(?:script|style|svg|noscript|template|nav|footer)\s*>/gi,' ')
 .replace(/<!--[^]*?-->/g,' ').replace(/<[^>]+>/g,' ')
 .replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'")
 .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Math.min(1114111,Number(n))))
 .replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(Math.min(1114111,parseInt(n,16))));
 return compactWhitespace(stripped);
}
/** GET only HTTPS official HTML, no redirects, no arbitrary destinations; PDFs require a manually reviewed transcript. */
export async function retrieveSourceText(source:ImportSubmission):Promise<string>{
 if(source.method==='manual_transcript')return compactWhitespace(source.transcript||'').slice(0,25000);
 const checked=safeOfficialUrl(source.sourceUrl);if(!checked)throw new Error('SOURCE_URL_REJECTED');
 const response=await fetch(checked,{redirect:'error',cache:'no-store',signal:AbortSignal.timeout(12000),headers:{Accept:'text/html, text/plain;q=0.8'}});
 if(!response.ok)throw new Error('SOURCE_HTTP_ERROR');
 const contentType=(response.headers.get('content-type')||'').toLowerCase();
 if(!/text\/html|text\/plain/.test(contentType))throw new Error('SOURCE_UNSUPPORTED_TYPE');
 const headerSize=Number(response.headers.get('content-length')||0);if(headerSize>500_000)throw new Error('SOURCE_TOO_LARGE');
 const reader=response.body?.getReader();if(!reader)throw new Error('SOURCE_EMPTY');
 const chunks:Uint8Array[]=[];let size=0;
 try{
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>500_000)throw new Error('SOURCE_TOO_LARGE');chunks.push(value);}
 }finally{await reader.cancel().catch(()=>{});}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
 const decoded=new TextDecoder('utf-8',{fatal:false}).decode(bytes);
 const text=contentType.includes('text/plain')?compactWhitespace(decoded):stripHtml(decoded);
 if(text.length<350)throw new Error('SOURCE_NOT_ENOUGH_TEXT');
 return text.slice(0,25000);
}
export function sourceFingerprint(text:string){return createHash('sha256').update(compactWhitespace(text),'utf8').digest('hex');}
function trimmedString(value:unknown,min:number,max:number):string|null{
 if(typeof value!=='string')return null;const text=compactWhitespace(value);
 if(text.length<min||text.length>max||/[<>\u0000-\u001f]/.test(text))return null;
 return text;
}
/** Extracted evidence must appear verbatim in the content reviewed by the model. */
export function validateExtractedTopics(raw:string,sourceText:string,institution:ExamId):SyllabusTopicCandidate[]{
 if(raw.length>30000)throw new Error('SYLLABUS_RESPONSE_TOO_LARGE');
 const text=raw.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'');
 let parsed:unknown;
 try{parsed=JSON.parse(text);}catch{throw new Error('SYLLABUS_INVALID_JSON');}
 const rows=parsed&&typeof parsed==='object'&&!Array.isArray(parsed)?(parsed as Record<string,unknown>).topics:null;
 if(!Array.isArray(rows)||rows.length>30)throw new Error('SYLLABUS_INVALID_TOPICS');
 const allowed=new Set(Object.keys(examBlueprints[institution].subjects));
 const evidenceText=compactWhitespace(sourceText).toLocaleLowerCase('pt-BR');
 const results:SyllabusTopicCandidate[]=[];const seen=new Set<string>();
 for(const row of rows){
  if(!row||typeof row!=='object'||Array.isArray(row))continue;
  const r=row as Record<string,unknown>;
  const subject=trimmedString(r.subject,3,60),topic=trimmedString(r.topic,4,110),evidence=trimmedString(r.evidence,16,160);
  if(!subject||!topic||!evidence||!allowed.has(subject)||!evidenceText.includes(evidence.toLocaleLowerCase('pt-BR')))continue;
  const identity=subject.toLocaleLowerCase('pt-BR')+'|'+topic.toLocaleLowerCase('pt-BR');if(seen.has(identity))continue;
  seen.add(identity);results.push({subject,topic,evidence});
 }
 return results.slice(0,20);
}
export function editorAuthorized(userId:string|null|undefined,settings:string|undefined):boolean{
 return Boolean(userId&&isUuid(userId)&&settings&&settings.split(',').map(x=>x.trim()).filter(isUuid).includes(userId));
}
export function matchApprovedTopic(topics:ApprovedSyllabusTopic[],raw:{id:string;institution:string;subject:string;topic:string}):ApprovedSyllabusTopic|null{
 return topics.find(x=>x.id===raw.id&&x.institution===raw.institution&&x.subject===raw.subject&&x.topic===raw.topic)||null;
}