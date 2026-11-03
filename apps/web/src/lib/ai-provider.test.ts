import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolveAIProvider,isAIJobConfigured} from './ai-provider.ts';
test('routes three jobs to independent providers when keys exist',()=>{
 const env={GROQ_API_KEY:'groq-test',GEMINI_API_KEY:'gemini-test',NVIDIA_API_KEY:'nvidia-test'} as any;
 assert.equal(resolveAIProvider('generate',env)?.provider,'groq');
 assert.equal(resolveAIProvider('review',env)?.provider,'gemini');
 assert.equal(resolveAIProvider('tutor',env)?.model,'gemini-3.1-flash-lite');
 assert.equal(resolveAIProvider('generate',env)?.base,'https://api.groq.com/openai/v1');
});
test('NVIDIA backwards compatibility when new providers are not configured',()=>{
 const env={AI_FREE_ONLY:'false',NVIDIA_API_KEY:'nvidia-test'} as any;
 for(const job of ['generate','review','tutor'] as const)assert.equal(resolveAIProvider(job,env)?.provider,'nvidia');
});
test('explicit provider never silently reroutes to another provider',()=>{
 const env={AI_GENERATE_PROVIDER:'groq',NVIDIA_API_KEY:'nvidia-test'} as any;
 assert.equal(resolveAIProvider('generate',env),null);
 assert.equal(isAIJobConfigured('generate',env),false);
});
test('independent model overrides are applied and keys are not public',()=>{
 const env={AI_REVIEW_PROVIDER:'gemini',AI_REVIEW_MODEL:'gemini-3.1-flash-lite',GEMINI_API_KEY:'private-test'} as any;
 const v=resolveAIProvider('review',env);
 assert.equal(v?.model,'gemini-3.1-flash-lite');
 assert.equal(v?.provider,'gemini');
});

test('NVIDIA fallback never receives Groq or Gemini model overrides',()=>{
 const env={
  NVIDIA_API_KEY:'nvidia-private-test',AI_FREE_ONLY:'false',
  AI_GENERATE_MODEL:'llama-3.3-70b-versatile',
  AI_REVIEW_MODEL:'gemini-3.1-flash-lite',
  AI_TUTOR_MODEL:'gemini-3.1-flash-lite',
  NVIDIA_MODEL:'z-ai/glm-5.3-flash',
 } as any;
 for(const job of ['generate','review','tutor'] as const){
  const selected=resolveAIProvider(job,env);
  assert.equal(selected?.provider,'nvidia');
  assert.equal(selected?.model,'z-ai/glm-5.3-flash');
 }
});

test('new Groq generation default avoids the retired Llama 3.3 model',()=>{
 const config=resolveAIProvider('generate',{GROQ_API_KEY:'test-groq'} as any);
 assert.equal(config?.provider,'groq');
 assert.equal(config?.model,'openai/gpt-oss-120b');
});

test('review and tutor use accessible Gemini 3.1 Flash-Lite defaults',()=>{
 const env={GEMINI_API_KEY:'test-gemini'} as any;
 assert.equal(resolveAIProvider('review',env)?.model,'gemini-3.1-flash-lite');
 assert.equal(resolveAIProvider('tutor',env)?.model,'gemini-3.1-flash-lite');
});

test('OpenAI tutor uses independent credentials and current fast model',()=>{
 const env={
  AI_FREE_ONLY:'false',AI_TUTOR_PROVIDER:'openai',
  AI_TUTOR_MODEL:'gpt-6-luna',
  OPENAI_API_KEY:'test-openai-only',
  GROQ_API_KEY:'test-groq-only',
  GEMINI_API_KEY:'test-gemini-only',
 } as any;
 const tutor=resolveAIProvider('tutor',env);
 assert.equal(tutor?.provider,'openai');
 assert.equal(tutor?.model,'gpt-6-luna');
 assert.equal(tutor?.base,'https://api.openai.com/v1');
 assert.equal(tutor?.key,'test-openai-only');
 assert.equal(resolveAIProvider('generate',env)?.provider,'groq');
 assert.equal(resolveAIProvider('review',env)?.provider,'gemini');
});

test('explicit OpenAI tutor does not reroute to another provider when key is missing',()=>{
 const env={AI_FREE_ONLY:'false',AI_TUTOR_PROVIDER:'openai',GEMINI_API_KEY:'test-gemini-only',NVIDIA_API_KEY:'test-nvidia-only'} as any;
 assert.equal(resolveAIProvider('tutor',env),null);
 assert.equal(isAIJobConfigured('tutor',env),false);
});

test('free-only is ON by default and refuses paid OpenAI/NVIDIA even with valid keys',()=>{
 const env={
  OPENAI_API_KEY:'paid-openai-key',
  NVIDIA_API_KEY:'paid-nvidia-key',
  AI_TUTOR_PROVIDER:'openai',AI_TUTOR_MODEL:'gpt-6-luna',
  AI_GENERATE_PROVIDER:'nvidia',AI_GENERATE_MODEL:'z-ai/glm-5.3-flash',
  GROQ_API_KEY:'free-groq-key',GEMINI_API_KEY:'free-gemini-key'
 } as any;
 assert.equal(resolveAIProvider('tutor',env)?.provider,'gemini');
 assert.equal(resolveAIProvider('tutor',env)?.model,'gemini-3.1-flash-lite');
 assert.equal(resolveAIProvider('generate',env)?.provider,'groq');
 assert.equal(resolveAIProvider('review',env)?.provider,'gemini');
 for(const job of ['tutor','generate','review'] as const){
  const config=resolveAIProvider(job,env)!;
  assert.ok(!config.base.includes('api.openai.com'));
  assert.ok(!config.base.includes('nvidia.com'));
 }
});
test('free-only needs a free provider key and cannot fall back to paid providers',()=>{
 const env={OPENAI_API_KEY:'paid-openai',NVIDIA_API_KEY:'paid-nvidia'} as any;
 for(const job of ['generate','review','tutor'] as const){
  assert.equal(resolveAIProvider(job,env),null);
  assert.equal(isAIJobConfigured(job,env),false);
 }
});
test('Groq-only development uses separate supported free-tier models for generation, review and tutor',()=>{
 const env={GROQ_API_KEY:'free-groq'} as any;
 assert.equal(resolveAIProvider('generate',env)?.model,'openai/gpt-oss-120b');
 assert.equal(resolveAIProvider('review',env)?.model,'openai/gpt-oss-20b');
 assert.equal(resolveAIProvider('tutor',env)?.model,'llama-3.1-8b-instant');
});
test('Gemini-only development stays on free-tier-eligible models',()=>{
 const env={GEMINI_API_KEY:'free-gemini'} as any;
 assert.equal(resolveAIProvider('generate',env)?.model,'gemini-2.5-flash');
 assert.equal(resolveAIProvider('review',env)?.model,'gemini-3.1-flash-lite');
 assert.equal(resolveAIProvider('tutor',env)?.model,'gemini-3.1-flash-lite');
});
test('unsafe model override is ignored in free-only mode',()=>{
 const env={GROQ_API_KEY:'free-groq',AI_GENERATE_PROVIDER:'groq',AI_GENERATE_MODEL:'paid-model-id'} as any;
 assert.equal(resolveAIProvider('generate',env)?.model,'openai/gpt-oss-120b');
});
