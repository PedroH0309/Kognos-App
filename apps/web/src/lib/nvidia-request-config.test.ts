import {test} from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_NVIDIA_MODEL,nvidiaInferenceOptions} from './nvidia-request-config.ts';

test('default provider model is the available NVIDIA GLM Flash endpoint',()=>{
 assert.equal(DEFAULT_NVIDIA_MODEL,'z-ai/glm-5.3-flash');
});
test('GLM Flash uses low reasoning and clears previous thinking',()=>{
 assert.deepEqual(nvidiaInferenceOptions('z-ai/glm-5.3-flash'),{
  reasoning_effort:'low',chat_template_kwargs:{clear_thinking:true}
 });
});
test('does not forward GLM-only options to unrelated models',()=>{
 assert.deepEqual(nvidiaInferenceOptions('another/compatible-model'),{});
});
