import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 generateApprovedBatches,MAX_ATTEMPTS_PER_BATCH,MAX_CONCURRENT_GENERATION_BATCHES
} from './ai-generation-batches.ts';

test('ten approved questions use four small batches, without inventing extra results',async()=>{
 const requested:number[]=[];
 const progress:number[]=[];
 const result=await generateApprovedBatches(10,async count=>{
  requested.push(count);
  return {approved:count,rejected:0};
 },undefined,approved=>progress.push(approved));
 assert.deepEqual(requested,[3,2,3,2]);
 assert.equal(result.requested,10);
 assert.equal(result.saved,10);
 assert.equal(result.missing,0);
 assert.equal(result.error,'');
 assert.equal(progress.at(-1),10);
});

test('a 5-question request starts 3+2 concurrently instead of waiting for each AI review',async()=>{
 let active=0,maxActive=0;
 const result=await generateApprovedBatches(5,async count=>{
  active++;maxActive=Math.max(maxActive,active);
  await new Promise(resolve=>setTimeout(resolve,12));
  active--;
  return {approved:count};
 });
 assert.equal(result.saved,5);
 assert.equal(maxActive,MAX_CONCURRENT_GENERATION_BATCHES);
 assert.equal(maxActive,2);
});

test('partial approved microbatches replenish only their unapproved slots',async()=>{
 const counts:number[]=[];
 const result=await generateApprovedBatches(5,async count=>{
  counts.push(count);
  return {approved:count===3?1:count,rejected:count===3?2:0};
 });
 assert.deepEqual(counts,[3,2,2]);
 assert.equal(result.saved,5);assert.equal(result.missing,0);
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

test('a fatal provider error stops queuing extra work without discarding other in-flight approvals',async()=>{
 let started=0;
 const result=await generateApprovedBatches(10,async count=>{
  started++;
  if(count===2)throw new Error('API rate limit');
  await new Promise(resolve=>setTimeout(resolve,3));
  return {approved:count};
 });
 assert.equal(result.error,'API rate limit');
 assert.ok(started<=3,'no unbounded retries after a fatal error');
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
