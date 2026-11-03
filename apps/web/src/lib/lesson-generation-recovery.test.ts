import {test} from 'node:test';
import assert from 'node:assert/strict';
import {recoverableLessonGenerationError,nextLessonReviewBatchSize,
 lessonGenerationFailureMessage,LESSON_REVIEW_MAX_ATTEMPTS,
 LESSON_REVIEW_MAX_CONSECUTIVE_EMPTY} from './lesson-generation-recovery.ts';

const fault=(code:string)=>Object.assign(new Error('Server-controlled safe message'),{code});
test('review rejection and duplicate generation are recoverable but rate, credentials and Supabase failures are not',()=>{
 for(const code of ['AI_REVIEW_NO_APPROVAL','AI_DUPLICATE_OUTPUT','AI_INVALID_OUTPUT']){
  assert.equal(recoverableLessonGenerationError(fault(code)),true,code);
 }
 for(const code of ['NVIDIA_RATE_LIMIT','NVIDIA_AUTH','AI_GENERATION_UNEXPECTED','NVIDIA_TIMEOUT']){
  assert.equal(recoverableLessonGenerationError(fault(code)),false,code);
 }
 assert.equal(recoverableLessonGenerationError(new Error('A revisão automática não aprovou')),false);
 assert.equal(recoverableLessonGenerationError(null),false);
});
test('no-approval batches shrink in a bounded sequence, without exceeding the five-item API limit',()=>{
 assert.equal(nextLessonReviewBatchSize(4,0),4);
 assert.equal(nextLessonReviewBatchSize(4,1),2);
 assert.equal(nextLessonReviewBatchSize(4,2),1);
 assert.equal(nextLessonReviewBatchSize(2,0),2);
 assert.equal(nextLessonReviewBatchSize(1,1),1);
 assert.equal(nextLessonReviewBatchSize(0,0),0);
 assert.equal(LESSON_REVIEW_MAX_ATTEMPTS,6);
 assert.equal(LESSON_REVIEW_MAX_CONSECUTIVE_EMPTY,3);
});
test('terminal failure warns about reviewed shortfall, not falsely completed practice',()=>{
 assert.match(lessonGenerationFailureMessage(0),/nenhum item passou/);
 assert.match(lessonGenerationFailureMessage(4),/4 de 10/);
 assert.match(lessonGenerationFailureMessage(4),/continuam no seu banco/);
});
