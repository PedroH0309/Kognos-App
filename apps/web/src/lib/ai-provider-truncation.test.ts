import {test} from 'node:test';
import assert from 'node:assert/strict';
import {educationalCompletionPayload,requestAI} from './ai-provider.ts';

const messages=[{role:'system' as const,content:'Responda somente JSON.'},{role:'user' as const,content:'Gere uma questão de Matemática em JSON.'}];
const keys=[
 'AI_GENERATE_PROVIDER','AI_GENERATE_MODEL','GROQ_API_KEY',
 'AI_REVIEW_PROVIDER','AI_REVIEW_MODEL','GEMINI_API_KEY',
 'AI_REVIEW_FALLBACK_PROVIDER','AI_REVIEW_FALLBACK_MODEL',
];
function setup(){
 const old=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
 process.env.AI_GENERATE_PROVIDER='groq';
 process.env.AI_GENERATE_MODEL='openai/gpt-oss-120b';
 process.env.GROQ_API_KEY='private-groq-test';
 process.env.AI_REVIEW_PROVIDER='gemini';
 process.env.AI_REVIEW_MODEL='gemini-3.1-flash-lite';
 process.env.GEMINI_API_KEY='private-gemini-test';
 delete process.env.AI_REVIEW_FALLBACK_PROVIDER;
 delete process.env.AI_REVIEW_FALLBACK_MODEL;
 return()=>{for(const k of keys){if(old[k]===undefined)delete process.env[k];else process.env[k]=old[k];}};
}
const ok=(content='{"questions":[]}')=>new Response(JSON.stringify({
 choices:[{finish_reason:'stop',message:{content}}],
 usage:{completion_tokens:600}
}),{status:200,headers:{'Content-Type':'application/json'}});
const length=()=>new Response(JSON.stringify({
 choices:[{finish_reason:'length',message:{content:'{"questions":['}}],
 usage:{completion_tokens:2100}
}),{status:200,headers:{'Content-Type':'application/json'}});

test('Groq GPT-OSS educational jobs use lower reasoning effort, JSON mode and completion token budgets',()=>{
 for(const model of ['openai/gpt-oss-20b','openai/gpt-oss-120b']){
  const payload=educationalCompletionPayload('groq',model,'generate',messages,8500,0.55);
  assert.equal(payload.model,model);
  assert.equal(payload.max_completion_tokens,8500);
  assert.equal(payload.reasoning_effort,'low');
  assert.equal(payload.include_reasoning,false);
  assert.deepEqual(payload.response_format,{type:'json_object'});
  assert.equal(payload.max_tokens,undefined);
 }
});
test('Gemini and NVIDIA requests do not receive Groq-specific reasoning or JSON parameters',()=>{
 for(const model of ['gemini-3.1-flash-lite','meta/llama-3.3-70b-instruct']){
  const provider=model.startsWith('gemini')?'gemini':'nvidia';
  const payload=educationalCompletionPayload(provider,model,'review',messages,2500,0.12);
  assert.equal(payload.max_tokens,2500);
  assert.equal(payload.reasoning_effort,undefined);
  assert.equal(payload.response_format,undefined);
 }
});
test('OpenAI Kog tutor keeps its separate request format and is not affected',()=>{
 const payload=educationalCompletionPayload('openai','gpt-6-luna','tutor',messages,1250,0.5);
 assert.equal(payload.max_completion_tokens,1250);
 assert.equal(payload.reasoning_effort,'none');
 assert.equal(payload.temperature,undefined);
});

test('a truncated Groq generation is retried once with larger token budget',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 const payloads:any[]=[];
 globalThis.fetch=async(_input,init)=>{
  payloads.push(JSON.parse(String(init?.body)));
  return payloads.length===1?length():ok();
 };
 try{
  const response=await requestAI('generate',messages,4200,0.55);
  assert.equal(response,'{"questions":[]}');
  assert.equal(payloads.length,2);
  assert.equal(payloads[0].max_completion_tokens,4200);
  assert.equal(payloads[1].max_completion_tokens,5880);
  assert.equal(payloads[1].reasoning_effort,'low');
 }finally{globalThis.fetch=oldFetch;restore();}
});
test('repeated truncation fails after only one bounded retry',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;let calls=0;
 globalThis.fetch=async()=>{calls++;return length();};
 try{
  await assert.rejects(requestAI('generate',messages,4200,0.55),/NVIDIA_TRUNCATED/);
  assert.equal(calls,2);
 }finally{globalThis.fetch=oldFetch;restore();}
});
test('a truncated Gemini review receives a single independent Groq 20B fallback',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;const urls:string[]=[];const payloads:any[]=[];
 globalThis.fetch=async(input,init)=>{
  urls.push(String(input));payloads.push(JSON.parse(String(init?.body)));
  return urls.length===1?length():ok('{"reviews":[{"index":0,"approved":true,"correct_index":0}]}');
 };
 try{
  const result=await requestAI('review',messages,2500,0.12);
  assert.match(result,/"reviews"/);
  assert.equal(urls.length,2);
  assert.match(urls[0],/generativelanguage.googleapis.com/);
  assert.match(urls[1],/api.groq.com/);
  assert.equal(payloads[1].model,'openai/gpt-oss-20b');
  assert.equal(payloads[1].reasoning_effort,'low');
 }finally{globalThis.fetch=oldFetch;restore();}
});
