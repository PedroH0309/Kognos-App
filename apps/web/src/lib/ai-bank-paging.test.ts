import {test} from 'node:test';
import assert from 'node:assert/strict';
import {AI_BANK_PAGE_SIZE,parseAIQuestionListQuery,splitGenerationBatches} from './ai-bank-paging.ts';
test('question listing has validated filters and bounded aligned pages',()=>{
 const q=parseAIQuestionListQuery('https://kognos.test/api/ai-questions?institution=enem&subject=Biologia&topic=Gen%C3%A9tica&offset=40');
 assert.equal(q?.institution,'enem');assert.equal(q?.subject,'Biologia');assert.equal(q?.topic,'Genética');
 assert.equal(q?.limit,AI_BANK_PAGE_SIZE);assert.equal(q?.offset,40);
 assert.equal(parseAIQuestionListQuery('https://kognos.test/api/ai-questions?offset=41'),null);
 assert.equal(parseAIQuestionListQuery('https://kognos.test/api/ai-questions?institution=other'),null);
 assert.equal(parseAIQuestionListQuery('https://kognos.test/api/ai-questions?topic=abc'),null);
});
test('10 requested questions use two existing five-item server operations',()=>{
 assert.deepEqual(splitGenerationBatches(10),[5,5]);
 assert.deepEqual(splitGenerationBatches(6),[5,1]);
 assert.deepEqual(splitGenerationBatches(3),[3]);
 assert.throws(()=>splitGenerationBatches(11));
});