import {test} from 'node:test';
import assert from 'node:assert/strict';
import {requestAI,AIProviderRateLimitError,isFreeOnlyAI} from './ai-provider.ts';
import {publicAIReadiness} from './ai-readiness.ts';

const keys=['AI_FREE_ONLY','AI_TUTOR_PROVIDER','AI_TUTOR_MODEL','OPENAI_API_KEY',
 'NVIDIA_API_KEY','AI_GENERATE_PROVIDER','AI_GENERATE_MODEL','AI_REVIEW_PROVIDER',
 'AI_REVIEW_MODEL','GROQ_API_KEY','GEMINI_API_KEY'];
const prompt=[{role:'user' as const,content:'Explique porcentagem'}];
function setup(){
 const before=Object.fromEntries(keys.map(key=>[key,process.env[key]]));
 process.env.AI_FREE_ONLY='true';
 process.env.OPENAI_API_KEY='sk-paid-should-not-be-used';
 process.env.NVIDIA_API_KEY='nv-paid-should-not-be-used';
 process.env.AI_TUTOR_PROVIDER='openai';
 process.env.AI_TUTOR_MODEL='gpt-6-luna';
 process.env.AI_GENERATE_PROVIDER='groq';
 process.env.AI_GENERATE_MODEL='openai/gpt-oss-120b';
 process.env.AI_REVIEW_PROVIDER='gemini';
 process.env.AI_REVIEW_MODEL='gemini-3.1-flash-lite';
 process.env.GROQ_API_KEY='free-groq-key';
 process.env.GEMINI_API_KEY='free-gemini-key';
 return()=>{for(const key of keys){
  const old=before[key];if(old===undefined)delete process.env[key];else process.env[key]=old;
 }};
}
const output=(content='Resposta didática')=>new Response(JSON.stringify({choices:[
 {message:{content},finish_reason:'stop'}
]}),{status:200,headers:{'content-type':'application/json'}});
const limited=(retryAfter='3')=>new Response(JSON.stringify({error:{message:'rate limit reached'}}),
 {status:429,headers:{'retry-after':retryAfter,'content-type':'application/json'}});

test('free-only is enabled by default',()=>{
 assert.equal(isFreeOnlyAI({}),true);
 assert.equal(isFreeOnlyAI({AI_FREE_ONLY:'true'}),true);
 assert.equal(isFreeOnlyAI({AI_FREE_ONLY:'false'}),false);
});
test('Kog ignores old paid OpenAI tutor config and calls only Gemini free-tier model',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 let captured:any;
 globalThis.fetch=async(url,options)=>{
  captured={url:String(url),body:JSON.parse(String(options?.body)),
   key:new Headers(options?.headers).get('Authorization')};
  return output();
 };
 try{
  assert.equal(await requestAI('tutor',prompt,600,0.55),'Resposta didática');
  assert.match(captured.url,/generativelanguage.googleapis.com/);
  assert.equal(captured.body.model,'gemini-3.1-flash-lite');
  assert.equal(captured.key,'Bearer free-gemini-key');
  assert.ok(!captured.url.includes('openai.com'));
 }finally{globalThis.fetch=oldFetch;restore();}
});

test('a Groq 429 on generation uses Gemini free-tier alternative exactly once',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 const calls:{url:string;model:string}[]=[];
 globalThis.fetch=async(url,options)=>{
  const body=JSON.parse(String(options?.body));
  calls.push({url:String(url),model:body.model});
  return calls.length===1?limited('5'):output('{"questions":[]}');
 };
 try{
  assert.equal(await requestAI('generate',prompt,4700,0.55),'{"questions":[]}');
  assert.equal(calls.length,2);
  assert.match(calls[0].url,/api.groq.com/);
  assert.equal(calls[0].model,'openai/gpt-oss-120b');
  assert.match(calls[1].url,/generativelanguage.googleapis.com/);
  assert.equal(calls[1].model,'gemini-2.5-flash');
 }finally{globalThis.fetch=oldFetch;restore();}
});

test('a Gemini review 429 tries one Groq 20B independent alternative',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 const calls:{url:string;model:string}[]=[];
 globalThis.fetch=async(url,options)=>{
  const body=JSON.parse(String(options?.body));
  calls.push({url:String(url),model:body.model});
  return calls.length===1?limited('2'):output('{"reviews":[]}');
 };
 try{
  assert.equal(await requestAI('review',prompt,800,0.1),'{"reviews":[]}');
  assert.equal(calls.length,2);
  assert.equal(calls[1].model,'openai/gpt-oss-20b');
  assert.match(calls[1].url,/api.groq.com/);
 }finally{globalThis.fetch=oldFetch;restore();}
});

test('a free-tier Gemini tutor 429 can switch to Groq Llama instead of paid OpenAI',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 const calls:{url:string;model:string}[]=[];
 globalThis.fetch=async(url,options)=>{
  const body=JSON.parse(String(options?.body));
  calls.push({url:String(url),model:body.model});
  return calls.length===1?limited('2'):output('A variável representa um valor.');
 };
 try{
  assert.equal(await requestAI('tutor',prompt,500,0.2),'A variável representa um valor.');
  assert.equal(calls.length,2);
  assert.equal(calls[1].model,'llama-3.1-8b-instant');
  assert.match(calls[1].url,/api.groq.com/);
 }finally{globalThis.fetch=oldFetch;restore();}
});

test('if both providers are limited, retry-after remains safe and no third attempt is made',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;let attempts=0;
 globalThis.fetch=async()=>{attempts++;return limited('12');};
 try{
  await assert.rejects(requestAI('generate',prompt,4200,0.4),error=>{
   assert.ok(error instanceof AIProviderRateLimitError);
   assert.equal(error.message,'NVIDIA_RATE_LIMIT');
   assert.equal(error.provider,'gemini');
   assert.equal(error.retryAfterSeconds,12);
   assert.ok(!JSON.stringify(error).includes('paid-should-not-be-used'));
   return true;
  });
  assert.equal(attempts,2);
 }finally{globalThis.fetch=oldFetch;restore();}
});

test('readiness reveals free mode and selected providers but not any API credential',()=>{
 const env={
  AI_FREE_ONLY:'true',OPENAI_API_KEY:'secret-openai',
  NVIDIA_API_KEY:'secret-nvidia',GROQ_API_KEY:'secret-groq',
  GEMINI_API_KEY:'secret-gemini',AI_TUTOR_PROVIDER:'openai',
  SUPABASE_URL:'https://example.supabase.co',SUPABASE_PUBLISHABLE_KEY:'test',
  SUPABASE_SECRET_KEY:'very-private',SUPABASE_JWKS_URL:'https://example.supabase.co/jwks'
 };
 const ready=publicAIReadiness(env);
 assert.equal(ready.freeOnlyMode,true);
 assert.equal(ready.tutorProvider,'gemini');
 assert.equal(ready.generatorProvider,'groq');
 assert.equal(ready.reviewerProvider,'gemini');
 assert.equal(ready.tutorConfigured,true);
 for(const secret of ['secret-openai','secret-nvidia','secret-groq','secret-gemini','very-private'])
  assert.ok(!JSON.stringify(ready).includes(secret));
});
