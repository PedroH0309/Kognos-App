import {test} from 'node:test';
import assert from 'node:assert/strict';
import {requestAI} from './ai-provider.ts';

const messages=[{role:'user' as const,content:'Revise uma questão de porcentagem'}];
const envKeys=['GROQ_API_KEY','GEMINI_API_KEY','AI_REVIEW_PROVIDER','AI_REVIEW_MODEL','AI_REVIEW_FALLBACK_PROVIDER','AI_REVIEW_FALLBACK_MODEL'];

function envForReview(){
 const old=Object.fromEntries(envKeys.map(k=>[k,process.env[k]]));
 process.env.GROQ_API_KEY='test-groq-only';
 process.env.GEMINI_API_KEY='test-gemini-only';
 process.env.AI_REVIEW_PROVIDER='gemini';
 process.env.AI_REVIEW_MODEL='gemini-3.1-flash-lite';
 delete process.env.AI_REVIEW_FALLBACK_PROVIDER;
 delete process.env.AI_REVIEW_FALLBACK_MODEL;
 return ()=>{for(const k of envKeys){if(old[k]===undefined)delete process.env[k];else process.env[k]=old[k];}};
}

test('a Gemini 503 triggers exactly one independent Groq review using 20B',async()=>{
 const restore=envForReview(),oldFetch=globalThis.fetch;
 const calls:{url:string;model:string;authorization:string}[]=[];
 globalThis.fetch=async (input,init)=>{
  const data=JSON.parse(String(init?.body));
  calls.push({url:String(input),model:data.model,authorization:new Headers(init?.headers).get('Authorization')??''});
  return new Response(calls.length===1?'unavailable':JSON.stringify({choices:[{message:{content:'{"reviews":[{"index":0,"approved":true,"correct_index":2,"reason":"ok"}]}'}}]}),
    {status:calls.length===1?503:200,headers:{'Content-Type':'application/json'}});
 };
 try{
  const result=await requestAI('review',messages,500,0.1);
  assert.match(result,/reviews/);
  assert.equal(calls.length,2);
  assert.match(calls[0].url,/generativelanguage.googleapis.com/);
  assert.equal(calls[0].model,'gemini-3.1-flash-lite');
  assert.match(calls[1].url,/api.groq.com/);
  assert.equal(calls[1].model,'openai/gpt-oss-20b');
  assert.equal(calls[1].authorization,'Bearer test-groq-only');
 }finally{globalThis.fetch=oldFetch;restore();}
});
test('a Gemini 401 does not trigger fallback',async()=>{
 const restore=envForReview(),oldFetch=globalThis.fetch;let calls=0;
 globalThis.fetch=async()=>{calls++;return new Response('{}',{status:401});};
 try{
  await assert.rejects(requestAI('review',messages,300,0.1),/NVIDIA_AUTH/);
  assert.equal(calls,1);
 }finally{globalThis.fetch=oldFetch;restore();}
});
test('fallback can be explicitly disabled even when Gemini is overloaded',async()=>{
 const restore=envForReview(),oldFetch=globalThis.fetch;let calls=0;
 process.env.AI_REVIEW_FALLBACK_PROVIDER='none';
 globalThis.fetch=async()=>{calls++;return new Response('{}',{status:503});};
 try{
  await assert.rejects(requestAI('review',messages,300,0.1),/NVIDIA_UNAVAILABLE/);
  assert.equal(calls,1);
 }finally{globalThis.fetch=oldFetch;restore();}
});
test('generation does not reroute to another API on provider failure',async()=>{
 const restore=envForReview(),oldFetch=globalThis.fetch;let calls=0;
 process.env.AI_GENERATE_PROVIDER='groq';
 const oldGen=process.env.AI_GENERATE_PROVIDER;
 globalThis.fetch=async()=>{calls++;return new Response('{}',{status:503});};
 try{
  await assert.rejects(requestAI('generate',messages,300,0.1),/NVIDIA_UNAVAILABLE/);
  assert.equal(calls,1);
 }finally{globalThis.fetch=oldFetch;restore();if(oldGen===undefined)delete process.env.AI_GENERATE_PROVIDER;else process.env.AI_GENERATE_PROVIDER=oldGen;}
});
