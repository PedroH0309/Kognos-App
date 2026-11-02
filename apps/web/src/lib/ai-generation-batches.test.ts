import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 generateApprovedBatches,MAX_ATTEMPTS_PER_BATCH,MAX_CONCURRENT_GENERATION_BATCHES
} from './ai-generation-batches.ts';

test('ten approved questions use two five-item batches, without inventing extra results',async()=>{
 const requested:number[]=[];
 const progress:number[]=[];
 const result=await generateApprovedBatches(10,async count=>{
  requested.push(count);
  return {approved:count,rejected:0};
 },undefined,approved=>progress.push(approved));
 assert.deepEqual(requested,[5,5]);
 assert.equal(result.requested,10);
 assert.equal(result.saved,10);
 assert.equal(result.missing,0);
 assert.equal(result.error,'');
 assert.equal(progress.at(-1),10);
});

test('free-tier batches never start simultaneous API calls',async()=>{
 let active=0,maxActive=0;
 const result=await generateApprovedBatches(10,async count=>{
  active++;maxActive=Math.max(maxActive,active);
  await new Promise(resolve=>setTimeout(resolve,12));
  active--;
  return {approved:count};
 });
 assert.equal(result.saved,10);
 assert.equal(maxActive,MAX_CONCURRENT_GENERATION_BATCHES);
 assert.equal(maxActive,1);
});

test('partial batch replenishes only missing approved questions',async()=>{
 const counts:number[]=[];
 const result=await generateApprovedBatches(5,async count=>{
  counts.push(count);
  return {approved:count===5?1:count,rejected:count===5?4:0};
 });
 assert.deepEqual(counts,[5,4]);
 assert.equal(result.saved,5);
 assert.equal(result.missing,0);
});
test('limited retries never approve content that the independent review rejected',async()=>{
 let calls=0;
 const result=await generateApprovedBatches(3,async()=>{
  calls++;return {approved:0,rejected:3};
 });
 assert.equal(calls,MAX_ATTEMPTS_PER_BATCH);
 assert.equal(result.saved,0);assert.equal(result.missing,3);
});

test('a recoverable no-approval error retries only within the fixed budget',async()=>{
 let calls=0;
 const result=await generateApprovedBatches(3,async count=>{
  calls++;
  if(calls===1)throw new Error('A revisão automática não aprovou as questões geradas.');
  return {approved:count};
 });
 assert.equal(calls,2);assert.equal(result.saved,3);assert.equal(result.error,'');
});

test('a fatal provider error stops queuing free-tier requests',async()=>{
 let started=0;
 const result=await generateApprovedBatches(10,async count=>{
  started++;
  if(count===2)throw new Error('API rate limit');
  await new Promise(resolve=>setTimeout(resolve,3));
  return {approved:count};
 });
 assert.equal(result.error,'API rate limit');
 assert.equal(started,1,'no subsequent batch calls after a fatal error');
 assert.ok(result.saved>=0&&result.saved<=10);
 assert.equal(result.missing,10-result.saved);
});

test('invalid provider approval counts cannot inflate the student question bank',async()=>{
 const result=await generateApprovedBatches(5,async()=>({approved:20}));
 assert.equal(result.saved,0);
 assert.match(result.error,/quantidade inválida/);
});

test('review counters report omissions, answer disagreements and duplicates separately',async()=>{
 const result=await generateApprovedBatches(3,async()=>({
  approved:3,
  diagnostics:{generated:3,missingReview:1,answerDisagreements:2,duplicates:0}
 }));
 assert.equal(result.saved,3);
 assert.equal(result.diagnostics.generated,3);
 assert.equal(result.diagnostics.missingReview,1);
 assert.equal(result.diagnostics.answerDisagreements,2);
});
