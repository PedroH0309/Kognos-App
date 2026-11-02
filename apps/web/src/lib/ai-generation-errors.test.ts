import {test} from 'node:test';
import assert from 'node:assert/strict';
import {describeGenerationError} from './ai-generation-errors.ts';

test('provider failures have distinct and actionable messages',()=>{
  for(const [code,status] of [['NVIDIA_TIMEOUT',504],['NVIDIA_NETWORK',502],['NVIDIA_RATE_LIMIT',429],['NVIDIA_BAD_REQUEST',502],['NVIDIA_TRUNCATED',422]] as const){
    const result=describeGenerationError(new Error(code));
    assert.equal(result.code,code);
    assert.equal(result.status,status);
    assert.ok(result.message.length>25);
  }
});
test('model validation failures are recognizable without exposing raw outputs',()=>{
  for(const text of ['Nenhuma questão passou pela validação estrutural.','O provedor não retornou JSON válido.','A IA não retornou a quantidade solicitada de questões.']){
    const result=describeGenerationError(new Error(text));
    assert.equal(result.code,'AI_INVALID_OUTPUT');
    assert.equal(result.status,422);
    assert.ok(!result.message.includes(text));
  }
});
test('unknown errors never reflect credentials or model responses to the browser',()=>{
  const secret='nvapi-exemplo-nao-expor';
  const failure=describeGenerationError(new Error(`upstream request: ${secret}`));
  assert.equal(failure.code,'AI_GENERATION_UNEXPECTED');
  assert.ok(!failure.message.includes(secret));
  assert.equal(describeGenerationError(null).status,503);
});
