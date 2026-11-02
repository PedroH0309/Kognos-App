import {DEFAULT_NVIDIA_MODEL,nvidiaInferenceOptions} from './nvidia-request-config.ts';

export type AIJob='generate'|'review'|'tutor';
export type AIProvider='groq'|'gemini'|'nvidia'|'openai';
type ProviderConfig={provider:AIProvider;model:string;key:string;base:string};
const endpoints={
 groq:'https://api.groq.com/openai/v1',
 gemini:'https://generativelanguage.googleapis.com/v1beta/openai',
 nvidia:'https://integrate.api.nvidia.com/v1',
 openai:'https://api.openai.com/v1',
} as const;

const preferences:Record<AIJob,{provider:AIProvider;model:string}>={
 generate:{provider:'groq',model:'openai/gpt-oss-120b'},
 review:{provider:'gemini',model:'gemini-3.1-flash-lite'},
 tutor:{provider:'gemini',model:'gemini-3.1-flash-lite'},
};

export function resolveAIProvider(job:AIJob,env:Record<string,string|undefined>=process.env):ProviderConfig|null {
 const prefix='AI_'+job.toUpperCase();
 const preferred=env[prefix+'_PROVIDER']?.trim().toLowerCase();
 const provider:AIProvider=preferred==='groq'||preferred==='gemini'||preferred==='nvidia'||preferred==='openai'?preferred:preferences[job].provider;
 const secrets={groq:env.GROQ_API_KEY,gemini:env.GEMINI_API_KEY,nvidia:env.NVIDIA_API_KEY,openai:env.OPENAI_API_KEY};
 const selected=secrets[provider]?.trim();
 // Backward-compatible fallback is allowed only when a new provider was not explicitly configured.
 const effective:AIProvider=selected?provider:preferred?provider:'nvidia';
 const key=secrets[effective]?.trim();
 if(!key)return null;
 const defaultModel=effective==='nvidia'?(env.NVIDIA_MODEL||DEFAULT_NVIDIA_MODEL):effective==='openai'?'gpt-6-luna':effective===preferences[job].provider?preferences[job].model:effective==='groq'?'openai/gpt-oss-120b':'gemini-3.1-flash-lite';
 // A model override belongs to the selected provider, never to the NVIDIA fallback.
 // E.g. AI_GENERATE_MODEL=openai/gpt-oss-120b is invalid at NVIDIA's endpoint.
 const fallingBack=effective!==provider;
 const model=(!fallingBack?env[prefix+'_MODEL']?.trim():undefined)||defaultModel;
 const base=effective==='nvidia'?(env.NVIDIA_API_BASE_URL||endpoints.nvidia):endpoints[effective];
 return {provider:effective,model,key,base:base.replace(/\/$/,'')};
}

export function isAIJobConfigured(job:AIJob,env:Record<string,string|undefined>=process.env):boolean{
 return resolveAIProvider(job,env)!==null;
}

/** Groq GPT-OSS consumes reasoning tokens from the completion budget.
 * Use low effort and JSON mode only for question creation/review.
 * Provider- and model-specific settings must never leak to Gemini or NVIDIA.
 */
export function educationalCompletionPayload(
 provider:AIProvider, model:string, job:AIJob,
 messages:{role:'system'|'user'|'assistant';content:string}[],
 maxTokens:number,temperature:number
):Record<string,unknown>{
 if(provider==='groq'&&job!=='tutor'&&/^openai\\/gpt-oss-(?:20b|120b)$/.test(model)){
  return {model,messages,max_completion_tokens:maxTokens,temperature,stream:false,
   reasoning_effort:'low',include_reasoning:false,response_format:{type:'json_object'}};
 }
 if(provider==='openai'){
  return {model,messages,max_completion_tokens:maxTokens,reasoning_effort:'none',stream:false};
 }
 return {model,messages,max_tokens:maxTokens,temperature,stream:false,
   ...(provider==='nvidia'?nvidiaInferenceOptions(model):{})};
}

/** Never expose raw upstream responses or keys. Shared OpenAI-compatible REST protocol. */
async function requestSingleProvider(c:ProviderConfig,job:AIJob,messages:{role:'system'|'user'|'assistant';content:string}[],maxTokens:number,temperature:number):Promise<string>{
 const t=Date.now();
 let response:Response;
 try{
  response=await fetch(c.base+'/chat/completions',{
   method:'POST',
   headers:{Authorization:'Bearer '+c.key,'Content-Type':'application/json'},
   body:JSON.stringify(educationalCompletionPayload(c.provider,c.model,job,messages,maxTokens,temperature)),
   cache:'no-store',signal:AbortSignal.timeout(job==='tutor'?35000:30000),
  });
 }catch(cause){
  console.warn('[KOGNOS][AI]',job,c.provider,'network/timeout',Date.now()-t);
  if(cause instanceof Error&&(cause.name==='TimeoutError'||cause.name==='AbortError'))throw new Error('NVIDIA_TIMEOUT');
  throw new Error('NVIDIA_NETWORK');
 }
 console.info('[KOGNOS][AI]',job,c.provider,'HTTP',response.status,Date.now()-t,'ms');
 if(!response.ok){
  if(response.status===401||response.status===403)throw new Error('NVIDIA_AUTH');
  if(response.status===429)throw new Error('NVIDIA_RATE_LIMIT');
  if(response.status===404)throw new Error('NVIDIA_MODEL_UNAVAILABLE');
  if(response.status===400||response.status===422)throw new Error('NVIDIA_BAD_REQUEST');
  if(response.status===408||response.status===504)throw new Error('NVIDIA_TIMEOUT');
  throw new Error('NVIDIA_UNAVAILABLE');
 }
 let body:any;
 try{body=await response.json();}catch{throw new Error('NVIDIA_BAD_RESPONSE');}
 const choice=body?.choices?.[0];
 if(choice?.finish_reason==='length'){
  // Record only diagnostic counts, never prompt, answer or API credentials.
  const completionTokens=typeof body?.usage?.completion_tokens==='number'?body.usage.completion_tokens:'unknown';
  console.warn('[KOGNOS][AI]',job,c.provider,'TRUNCATED','budget',maxTokens,'completionTokens',completionTokens);
  throw new Error('NVIDIA_TRUNCATED');
 }
 const answer=choice?.message?.content;
 if(typeof answer!=='string'||!answer.trim())throw new Error('NVIDIA_EMPTY');
 return answer;
}

/**
 * Reuse already-generated questions if Gemini review is unavailable.
 * A single Groq fallback performs a fresh independent pedagogical review;
 * do not silently approve any question or retry unboundedly.
 * The generator already sends study context to Groq. No new third-party
 * provider receives the content during fallback.
 */
export async function requestAI(job:AIJob,messages:{role:'system'|'user'|'assistant';content:string}[],maxTokens:number,temperature:number):Promise<string>{
 const primary=resolveAIProvider(job);
 if(!primary)throw new Error('AI_PROVIDER_NOT_CONFIGURED');
 try{
  return await requestSingleProvider(primary,job,messages,maxTokens,temperature);
 }catch(cause){
  // A truncated GPT-OSS output is incomplete JSON. Retry the same generation
  // at most once with more completion budget; never parse/publish partial items.
  if(job==='generate'&&primary.provider==='groq'
   &&/^openai\\/gpt-oss-(?:20b|120b)$/.test(primary.model)
   &&cause instanceof Error&&cause.message==='NVIDIA_TRUNCATED'){
    const higherBudget=Math.min(14000,Math.ceil(maxTokens*1.4));
    if(higherBudget>maxTokens){
     console.warn('[KOGNOS][AI]',job,primary.provider,'retrying truncated output once with larger budget');
     return requestSingleProvider(primary,job,messages,higherBudget,temperature);
    }
  }
  const fallbackDisabled=process.env.AI_REVIEW_FALLBACK_PROVIDER?.trim().toLowerCase()==='none';
  const eligible=job==='review'&&primary.provider==='gemini'&&!fallbackDisabled
   &&cause instanceof Error&&cause.message==='NVIDIA_UNAVAILABLE';
  if(!eligible)throw cause;
  const key=process.env.GROQ_API_KEY?.trim();
  if(!key)throw cause;
  const model=process.env.AI_REVIEW_FALLBACK_MODEL?.trim()||'openai/gpt-oss-20b';
  // Keep the fallback model independent from the 120B generation model.
  const fallback:ProviderConfig={provider:'groq',key,model,base:endpoints.groq};
  console.info('[KOGNOS][AI]',job,'Gemini unavailable; trying Groq fallback');
  return requestSingleProvider(fallback,job,messages,maxTokens,temperature);
 }
}
