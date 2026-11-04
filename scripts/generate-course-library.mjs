#!/usr/bin/env node
/**
 * Offline curriculum authoring batch.
 * Never sends personal student data. Never runs at app request-time.
 * Providers may have rate limits or non-free usage; use your free entitlement only.
 *
 * Examples:
 * node --experimental-strip-types scripts/generate-course-library.mjs --audit
 * node --experimental-strip-types scripts/generate-course-library.mjs --provider gemini --subject "Biologia" --limit 10
 * node --experimental-strip-types scripts/generate-course-library.mjs --provider groq --all
 * node --experimental-strip-types scripts/generate-course-library.mjs --rebuild
 */
import {readFile,readdir,mkdir,writeFile,rename} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {curriculumTopics} from '../apps/web/src/lib/curriculum-catalog.ts';
import {findProvaoTopic} from '../apps/web/src/lib/provao-paulista.ts';
import {examBlueprints} from '../apps/web/src/lib/exam-blueprints.ts';
import {deepMathTopicNames} from '../apps/web/src/lib/deep-math-lessons.ts';
import {deepCrossSubjectTopics} from '../apps/web/src/lib/deep-cross-subject-lessons.ts';
import {buildRegistryModule,fingerprint,lessonPrompt,parseResponse,responseText,validateGenerated} from './content-generation-core.mjs';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const outputDirectory=join(root,'content','generated-lessons');
const registryPath=join(root,'apps','web','src','lib','generated-deep-lessons.ts');
const args=process.argv.slice(2);
const flag=(name)=>args.includes('--'+name);
const opt=(name,fallback)=>{
 const i=args.indexOf('--'+name);
 return i<0?fallback:args[i+1];
};
const provider=opt('provider','gemini');
const subject=opt('subject','');
const all=flag('all');
const audit=flag('audit');
const rebuild=flag('rebuild');
const limit=all?Number.MAX_SAFE_INTEGER:Number(opt('limit','10'));
const retries=Number(opt('retries','3'));
const pauseMs=Number(opt('pause-ms','1000'));
const model=opt('model',provider==='groq'?'openai/gpt-oss-120b':'gemini-2.5-flash');
if(!Number.isInteger(limit)||limit<1||limit>Number.MAX_SAFE_INTEGER)throw Error('Limit must be a positive integer');
if(!Number.isInteger(retries)||retries<1||retries>6)throw Error('retries must be 1..6');
if(!Number.isFinite(pauseMs)||pauseMs<0||pauseMs>600000)throw Error('pause-ms must be 0..600000');
if(!['gemini','groq'].includes(provider))throw Error('Provider must be gemini or groq');
const key=provider==='gemini'?process.env.GEMINI_API_KEY:process.env.GROQ_API_KEY;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const authored=new Set([...deepMathTopicNames.map(name=>'Matemática\0'+name),...deepCrossSubjectTopics.map(item=>item.subject+'\0'+item.topic)]);
const isAuthored=topic=>authored.has(topic.subject+'\0'+topic.topic);
const safeId=id=>/^[a-z][a-z0-9-]{2,90}$/.test(id);
const persistedPath=id=>{if(!safeId(id))throw Error('Invalid curriculum id');return join(outputDirectory,id+'.json');};
async function listSaved(){
 if(!existsSync(outputDirectory))return new Map();
 const records=new Map();
 for(const filename of await readdir(outputDirectory)){
  if(!/^[a-z][a-z0-9-]{2,90}\.json$/.test(filename))continue;
  const p=join(outputDirectory,filename);
  const lesson=JSON.parse(await readFile(p,'utf8'));
  const topic=curriculumTopics.find(t=>t.id===lesson.id);
  if(!topic||topic.subject!==lesson.subject||topic.topic!==lesson.topic)throw Error('Invalid saved lesson: '+filename);
  if(lesson.review!=='introductory'||!Array.isArray(lesson.sections)||lesson.sections.length!==3||
    !Array.isArray(lesson.tasks)||lesson.tasks.length!==6)throw Error('Invalid generated schema: '+filename);
  const original={
   objective:lesson.objective,prerequisites:lesson.prerequisites,
   sections:lesson.sections,tasks:lesson.tasks
  };
  const parsed=validateGenerated(topic,original,lesson.sourceUrls);
  if(!parsed.ok)throw Error('Invalid saved generated content in '+filename+': '+parsed.issues.join(','));
  records.set(lesson.id,parsed.lesson);
 }
 return records;
}
async function saveLesson(lesson){
 await mkdir(outputDirectory,{recursive:true});
 const p=persistedPath(lesson.id);
 const staging=p+'.tmp';
 await writeFile(staging,JSON.stringify(lesson,null,2)+'\n','utf8');
 await rename(staging,p);
}
async function buildRegistry(records){
 const values=[...records.values()].sort((a,b)=>a.id.localeCompare(b.id));
 const staticText=buildRegistryModule(values);
 await writeFile(registryPath,staticText,'utf8');
 console.log('Compiled '+values.length+' offline lessons into generated-deep-lessons.ts');
}
async function generateRemote(prompt){
 const controller=new AbortController();
 const timer=setTimeout(()=>controller.abort(),90000);
 try{
  let url,headers,body;
  if(provider==='gemini'){
   url='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent';
   headers={'x-goog-api-key':key,'Content-Type':'application/json'};
   body={contents:[{role:'user',parts:[{text:prompt}]}],
    generationConfig:{temperature:0.25,responseMimeType:'application/json',maxOutputTokens:11000}};
  }else{
   url='https://api.groq.com/openai/v1/chat/completions';
   headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'};
   body={model,messages:[{role:'system',content:'Produza APENAS um objeto JSON válido de aula autoral.'},
    {role:'user',content:prompt}],temperature:0.25,max_completion_tokens:10000,
    response_format:{type:'json_object'}};
  }
  const response=await fetch(url,{method:'POST',headers,body:JSON.stringify(body),signal:controller.signal});
  if(!response.ok){
   const err=new Error('Provider returned HTTP '+response.status);
   err.httpStatus=response.status;
   throw err;
  }
  const json=await response.json();
  return parseResponse(responseText(json,provider));
 }finally{clearTimeout(timer);}
}
async function main(){
 const topics=subject?curriculumTopics.filter(t=>t.subject.toLocaleLowerCase('pt-BR')===subject.toLocaleLowerCase('pt-BR')):curriculumTopics;
 if(!topics.length)throw Error('No curriculum topics for the selected subject');
 const records=await listSaved();
 const alreadyAuthored=topics.filter(isAuthored).length;
 const alreadyGenerated=topics.filter(t=>records.has(t.id)).length;
 const pending=topics.filter(t=>!isAuthored(t)&&!records.has(t.id));
 console.log(JSON.stringify({
  allCatalogCount:curriculumTopics.length,selected:topics.length,
  authoredDeep:alreadyAuthored,generatedOffline:alreadyGenerated,
  pendingToDeepen:pending.length,provider:model,subject:subject||'all'
 },null,2));
 if(audit)return;
 if(rebuild){await buildRegistry(records);return;}
 if(!key)throw Error('Missing '+(provider==='gemini'?'GEMINI_API_KEY':'GROQ_API_KEY')+
  '. Configure it locally. No remote request was made.');
 let succeeded=0,failed=0;
 const hashes=new Set([...records.values()].map(fingerprint));
 for(const topic of pending.slice(0,limit)){
  const ref=findProvaoTopic(topic.subject,topic.topic);
  const description=ref?.description??topic.topic;
  const urls=[...new Set(topic.exams.map(exam=>examBlueprints[exam]?.sourceUrl).filter(x=>typeof x==='string'&&x.startsWith('https://')))];
  let success=false;
  for(let attempt=1;attempt<=retries;attempt++){
   try{
    const draft=await generateRemote(lessonPrompt(topic,{description,unit:ref?.unit??''}));
    const checked=validateGenerated(topic,draft,urls);
    if(!checked.ok)throw Error('Quality gate: '+checked.issues.join(', '));
    const hash=fingerprint(checked.lesson);
    if(hashes.has(hash))throw Error('Duplicated teaching content: '+topic.id);
    await saveLesson(checked.lesson);
    records.set(topic.id,checked.lesson);hashes.add(hash);
    succeeded++;success=true;
    console.log('OK '+(succeeded+failed)+' '+topic.subject+' / '+topic.topic);
    break;
   }catch(error){
    const status=error?.httpStatus;
    console.error('FAIL '+topic.id+' ['+attempt+'/'+retries+'] '+
     (status?'HTTP '+status:'generation or quality failure'));
    if(status===401||status===403||status===402)throw Error('Provider authentication or billing restriction: HTTP '+status);
    if(attempt<retries)await sleep(Math.min(30000,pauseMs*(2**attempt)));
   }
  }
  if(!success)failed++;
  if(pauseMs>0)await sleep(pauseMs);
 }
 await buildRegistry(records);
 console.log(JSON.stringify({generatedThisRun:succeeded,failedThisRun:failed,
  totalPrebuilt:records.size,pending:pending.length-succeeded},null,2));
 if(failed)process.exitCode=1;
}
main().catch(e=>{console.error(String(e?.message||e));process.exitCode=1;});
