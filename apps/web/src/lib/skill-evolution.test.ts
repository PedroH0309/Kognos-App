import {test} from 'node:test';
import assert from 'node:assert/strict';
import {inferSkillEvolution,recommendNextSkillStep,type VerifiedSkillAttempt} from './skill-evolution.ts';

const sequence=():('basic'|'intermediate'|'advanced')[]=>
 [...Array(3).fill('basic'),...Array(4).fill('intermediate'),...Array(3).fill('advanced')];
function run(day:number,wrongIndexes:number[],prefix:string):VerifiedSkillAttempt[]{
 const base=Date.parse(`2026-11-${String(day).padStart(2,'0')}T13:00:00Z`);
 return sequence().map((difficulty,i)=>({
  questionId:`${prefix}-${i}`,difficulty,correct:!wrongIndexes.includes(i),
  createdAt:new Date(base+i*120000).toISOString()
 }));
}
test('compares two complete 10-question sessions with the same difficulty distribution',()=>{
 const first=run(1,[3,4,7,8],'a');
 const second=run(3,[8,9],'b');
 const result=inferSkillEvolution('math-percentages',[...second,...first]);
 assert.equal(result.blocks.length,2);
 assert.equal(result.comparableBlocks,2);
 assert.equal(result.changePoints,20);
 assert.equal(result.direction,'higher');
 assert.deepEqual(result.blocks.map(b=>[b.answered,b.correct,b.complete]),[[10,6,true],[10,8,true]]);
 assert.deepEqual(result.blocks[1].difficulty,{basic:{answered:3,correct:3},intermediate:{answered:4,correct:4},advanced:{answered:3,correct:1}});
 assert.match(result.recommendation,/desafios avançados/);
});
test('one session or a partial practice is not evidence of evolution or mastery',()=>{
 const partial=inferSkillEvolution('bio-cells',run(1,[],'a').slice(0,5));
 assert.equal(partial.blocks[0].complete,false);
 assert.equal(partial.changePoints,null);
 assert.equal(partial.direction,'insufficient');
 assert.match(partial.recommendation,/Conclua a sequência/);
 const one=inferSkillEvolution('math-percentages',run(1,[],'a'));
 assert.equal(one.comparableBlocks,1);
 assert.equal(one.changePoints,null);
});
test('separates rapid consecutive ten-item sequences and distant attempts',()=>{
 const sameDay=run(1,[1],'a').concat(run(1,[0,1,2],'b').map((a,i)=>({
  ...a,createdAt:new Date(Date.parse(a.createdAt)+45*60000).toISOString()
 })));
 const result=inferSkillEvolution('math-percentages',sameDay);
 assert.deepEqual(result.blocks.map(b=>b.answered),[10,10]);
 assert.equal(result.direction,'lower');
 const gap=inferSkillEvolution('math-percentages',[
  {...run(1,[],'a')[0],createdAt:'2026-11-01T10:00:00Z'},
  {...run(1,[],'a')[1],createdAt:'2026-11-01T13:00:00Z'}
 ]);
 assert.deepEqual(gap.blocks.map(b=>b.answered),[1,1]);
});
test('invalid rows are ignored and historical display is bounded',()=>{
 const lots=Array.from({length:8},(_,i)=>run(i+1,[],'run'+i)).flat();
 const result=inferSkillEvolution('math-percentages',[...lots,
  {questionId:'broken',difficulty:'basic',correct:true,createdAt:'not-a-date'}]);
 assert.equal(result.blocks.length,6);
 assert.equal(result.comparableBlocks,8);
 assert.equal(result.changePoints,0);
 assert.equal(result.direction,'same');
});
test('suggests foundations before advanced material when basic answers fail',()=>{
 const weak=inferSkillEvolution('math-percentages',run(1,[0,1,2],'x'));
 assert.match(weak.recommendation,/fundamentos/);
 assert.match(recommendNextSkillStep(null),/sequência completa/);
});
