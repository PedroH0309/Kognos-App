import {test} from 'node:test';
import assert from 'node:assert/strict';
import {generateApprovedBatches,MAX_ATTEMPTS_PER_BATCH} from './ai-generation-batches.ts';

test('requesting ten actually requests two five-question batches',async()=>{
 const calls:number[]=[];
 const result=await generateApprovedBatches(10,async count=>{calls.push(count);return {approved:count,rejected:0};});
 assert.deepEqual(calls,[5,5]);
 assert.deepEqual(result,{requested:10,saved:10,rejected:0,missing:0,error:''});
});
test('partial approved batches request only the remaining questions',async()=>{
 const calls:number[]=[];
 const result=await generateApprovedBatches(5,async count=>{
  calls.push(count);
  return {approved:count===5?1:count,rejected:count===5?4:0};
 });
 assert.deepEqual(calls,[5,4]);assert.equal(result.saved,5);assert.equal(result.missing,0);
});
test('bounded retries never invent approvals when review rejects everything',async()=>{
 let calls=0;
 const result=await generateApprovedBatches(3,async()=>{calls++;return {approved:0,rejected:3};});
 assert.equal(calls,MAX_ATTEMPTS_PER_BATCH);assert.equal(result.saved,0);assert.equal(result.missing,3);
});
test('a fatal provider error preserves saved counts and stops calls',async()=>{
 let calls=0;
 const result=await generateApprovedBatches(10,async count=>{
  calls++;
  if(calls===1)return {approved:2,rejected:3};
  throw new Error('API rate limit');
 });
 assert.equal(calls,2);assert.equal(result.saved,2);assert.equal(result.missing,8);
 assert.equal(result.error,'API rate limit');
});
test('malformed server counts cannot inflate score or question totals',async()=>{
 const result=await generateApprovedBatches(5,async()=>({approved:20}));
 assert.equal(result.saved,0);assert.match(result.error,/quantidade inválida/);
});
