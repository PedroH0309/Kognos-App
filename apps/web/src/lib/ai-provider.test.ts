import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolveAIProvider,isAIJobConfigured} from './ai-provider.ts';
test('routes three jobs to independent providers when keys exist',()=>{
 const env={GROQ_API_KEY:'groq-test',GEMINI_API_KEY:'gemini-test',NVIDIA_API_KEY:'nvidia-test'} as any;
 assert.equal(resolveAIProvider('generate',env)?.provider,'groq');
 assert.equal(resolveAIProvider('review',env)?.provider,'gemini');
 assert.equal(resolveAIProvider('tutor',env)?.model,'gemini-2.5-flash');
 assert.equal(resolveAIProvider('generate',env)?.base,'https://api.groq.com/openai/v1');
});
test('NVIDIA backwards compatibility when new providers are not configured',()=>{
 const env={NVIDIA_API_KEY:'nvidia-test'} as any;
 for(const job of ['generate','review','tutor'] as const)assert.equal(resolveAIProvider(job,env)?.provider,'nvidia');
});
test('explicit provider never silently reroutes to another provider',()=>{
 const env={AI_GENERATE_PROVIDER:'groq',NVIDIA_API_KEY:'nvidia-test'} as any;
 assert.equal(resolveAIProvider('generate',env),null);
 assert.equal(isAIJobConfigured('generate',env),false);
});
test('independent model overrides are applied and keys are not public',()=>{
 const env={AI_REVIEW_PROVIDER:'gemini',AI_REVIEW_MODEL:'gemini-2.5-flash-lite',GEMINI_API_KEY:'private-test'} as any;
 const v=resolveAIProvider('review',env);
 assert.equal(v?.model,'gemini-2.5-flash-lite');
 assert.equal(v?.provider,'gemini');
});
