import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('server returns typed recoverable 422 only after independent review denies all generated items',()=>{
 const route=read('apps/web/src/app/api/ai-questions/generate/route.ts');
 assert.match(route,/const batch=await createAndReviewQuestionBatch/);
 assert.match(route,/if\(!approved\.length\)/);
 assert.match(route,/code:'AI_REVIEW_NO_APPROVAL'/);
 assert.match(route,/diagnostics:batch\.diagnostics/);
 assert.match(route,/status:422/);
 assert.match(route,/\.insert\(rows\)/);
 assert.match(route,/review_status:'auto_reviewed'/);
});
test('lesson auto-start retries no-approval and duplicates with a bounded smaller batch, never old questions',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(studio,/failure\.code=result\.code/);
 assert.match(studio,/if\(!recoverableLessonGenerationError\(error\)\)throw error/);
 assert.match(studio,/nextLessonReviewBatchSize\(remaining,consecutiveEmpty\)/);
 assert.match(studio,/retry<LESSON_REVIEW_MAX_ATTEMPTS/);
 assert.match(studio,/consecutiveEmpty>=LESSON_REVIEW_MAX_CONSECUTIVE_EMPTY/);
 assert.match(studio,/newQuestionsForSelectedLesson\(data,request\)/);
 assert.match(studio,/fresh\.length!==10/);
 assert.match(studio,/start\(fresh\)/);
});
test('generator checks for all required givens and independent reviewer must still solve the item',()=>{
 const generator=read('apps/web/src/lib/nvidia-question-engine.ts');
 assert.match(generator,/Nunca pergunte o preço final de um desconto sem declarar o preço original/);
 assert.match(generator,/correct_index deve apontar exatamente/);
 assert.match(generator,/Revise exatamente/);
 assert.match(generator,/correct_index:q\.correct_index/);
 assert.match(generator,/assessIndependentReview/);
});
