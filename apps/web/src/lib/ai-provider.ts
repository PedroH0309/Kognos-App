import {DEFAULT_NVIDIA_MODEL,nvidiaInferenceOptions} from './nvidia-request-config.ts';

export type AIJob='generate'|'review'|'tutor';
export type AIProvider='groq'|'gemini'|'nvidia';
type ProviderConfig={provider:AIProvider;model:string;key:string;base:string};
const endpoints={
 groq:'https://api.groq.com/openai/v1',
 gemini:'https://generativelanguage.googleapis.com/v1beta/openai',
 nvidia:'https://integrate.api.nvidia.com/v1',
} as const;

const preferences:Record<AIJob,{provider:AIProvider;model:string}>={
 generate:{provider:'groq',model:'openai/gpt-oss-120b'},
 review:{provider:'gemini',model:'gemini-3.1-flash-lite'},
 tutor:{provider:'gemini',model:'gemini-3.1-flash-lite'},
};

export function resolveAIProvider(job:AIJob,env:Record<string,string|undefined>=process.env):ProviderConfig|null {
 const prefix='AI_'+job.toUpperCase();
 const preferred=env[prefix+'_PROVIDER']?.trim().toLowerCase();
 const provider:AIProvider=preferred==='groq'||preferred==='gemini'||preferred==='nvidia'?preferred:preferences[job].provider;
 const secrets={groq:env.GROQ_API_KEY,gemini:env.GEMINI_API_KEY,nvidia:env.NVIDIA_API_KEY};
 const selected=secrets[provider]?.trim();
 // Backward-compatible fallback is allowed only when a new provider was not explicitly configured.
 const effective:AIProvider=selected?provider:preferred?provider:'nvidia';
 const key=secrets[effective]?.trim();
 if(!key)return null;
 const defaultModel=effective==='nvidia'?(env.NVIDIA_MODEL||DEFAULT_NVIDIA_MODEL):effective===preferences[job].provider?preferences[job].model:effective==='groq'?'openai/gpt-oss-120b':'gemini-3.1-flash-lite';
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

/** Never expose raw upstream responses or keys. Shared OpenAI-compatible REST protocol. */
export async function requestAI(job:AIJob,messages:{role:'system'|'user'|'assistant';content:string}[],maxTokens:number,temperature:number):Promise<string>{
 const c=resolveAIProvider(job);
 if(!c)throw new Error('AI_PROVIDER_NOT_CONFIGURED');
 const t=Date.now();
 let response:Response;
 try{
  response=await fetch(c.base+'/chat/completions',{
   method:'POST',
   headers:{Authorization:'Bearer '+c.key,'Content-Type':'application/json'},
   body:JSON.stringify({model:c.model,messages,max_tokens:maxTokens,temperature,stream:false,...(c.provider==='nvidia'?nvidiaInferenceOptions(c.model):{})}),
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
 if(choice?.finish_reason==='length')throw new Error('NVIDIA_TRUNCATED');
 const answer=choice?.message?.content;
 if(typeof answer!=='string'||!answer.trim())throw new Error('NVIDIA_EMPTY');
 return answer;
}
