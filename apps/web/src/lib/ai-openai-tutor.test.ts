import {test} from 'node:test';
import assert from 'node:assert/strict';
import {requestAI} from './ai-provider.ts';
import {publicAIReadiness} from './ai-readiness.ts';

const keys=['AI_TUTOR_PROVIDER','AI_TUTOR_MODEL','OPENAI_API_KEY','AI_FREE_ONLY'];
function setup(){
 const previous=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
 process.env.AI_FREE_ONLY='false';
 process.env.AI_TUTOR_PROVIDER='openai';
 process.env.AI_TUTOR_MODEL='gpt-6-luna';
 process.env.OPENAI_API_KEY='sk-local-test-only';
 return ()=>{for(const k of keys){
  const old=previous[k];
  if(old===undefined)delete process.env[k];else process.env[k]=old;
 }};
}

test('OpenAI tutor sends a compatible request only from the server',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 let captured:{url:string;body:any;auth:string}|undefined;
 globalThis.fetch=async(url,options)=>{
  captured={
   url:String(url),
   body:JSON.parse(String(options?.body)),
   auth:new Headers(options?.headers).get('Authorization')??'',
  };
  return new Response(JSON.stringify({choices:[{message:{content:'Olá, estudante!'}}]}),
   {status:200,headers:{'Content-Type':'application/json'}});
 };
 try{
  const answer=await requestAI('tutor',[{role:'system',content:'Seja um tutor de matemática.'},{role:'user',content:'Explique razões.'}],1250,0.55);
  assert.equal(answer,'Olá, estudante!');
  assert.equal(captured?.url,'https://api.openai.com/v1/chat/completions');
  assert.equal(captured?.auth,'Bearer sk-local-test-only');
  assert.equal(captured?.body.model,'gpt-6-luna');
  assert.equal(captured?.body.max_completion_tokens,1250);
  assert.equal(captured?.body.reasoning_effort,'none');
  assert.equal(captured?.body.temperature,undefined);
  assert.equal(captured?.body.max_tokens,undefined);
  assert.equal(captured?.body.messages.length,2);
 }finally{globalThis.fetch=oldFetch;restore();}
});

test('OpenAI errors remain server-side and never echo API key',async()=>{
 const restore=setup(),oldFetch=globalThis.fetch;
 globalThis.fetch=async()=>new Response(JSON.stringify({error:{message:'invalid sk-local-test-only'}}),{status:401});
 try{await assert.rejects(requestAI('tutor',[{role:'user',content:'Olá'}],1250,0.55),e=>{
  assert.ok(e instanceof Error);
  assert.equal(e.message,'NVIDIA_AUTH');
  assert.ok(!e.message.includes('sk-local-test-only'));
  return true;
 });}finally{globalThis.fetch=oldFetch;restore();}
});

test('readiness can identify OpenAI without returning the API key',()=>{
 const ready=publicAIReadiness({
  AI_FREE_ONLY:'false',AI_TUTOR_PROVIDER:'openai',OPENAI_API_KEY:'sk-private-test',
  SUPABASE_URL:'ok',SUPABASE_PUBLISHABLE_KEY:'ok',
  SUPABASE_SECRET_KEY:'ok',SUPABASE_JWKS_URL:'ok',
 });
 assert.equal(ready.tutorConfigured,true);
 assert.equal(ready.tutorProvider,'openai');
 assert.ok(!JSON.stringify(ready).includes('sk-private-test'));
});
