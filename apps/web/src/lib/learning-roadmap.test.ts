import {test} from 'node:test';
import assert from 'node:assert/strict';
import {adjacentLesson,catalogRoadmap,trailSnapshot} from './learning-roadmap.ts';
import type {QuestionAttempt} from './demo-questions.ts';
const attempt=(questionId:string,answerIndex:number,createdAt='2026-11-01T12:00:00Z'):QuestionAttempt=>({questionId,answerIndex,subject:'Química',correct:false,createdAt,mode:'practice'});

test('fresh subject has sequential steps and zero practice evidence',()=>{
 const item=trailSnapshot('Matemática',[]);
 assert.equal(item.total,4);assert.equal(item.practiced,0);
 assert.equal(item.correctSamples,0);assert.equal(item.needsReview,0);
 assert.equal(item.steps[0].number,1);assert.equal(item.next?.id,'math-percentages');
 assert.equal(item.estimatedUnpracticedMinutes,item.steps.reduce((sum,s)=>sum+s.lesson.minutes,0));
});

test('coverage recalculates from canonical question answer, not spoofed flags',()=>{
 const wrong=attempt('q01',0),right=attempt('q01',2,'2026-11-02T12:00:00Z');
 const before=trailSnapshot('Matemática',[wrong]);
 assert.equal(before.practiced,1);assert.equal(before.needsReview,1);assert.equal(before.correctSamples,0);
 assert.equal(before.next?.id,'math-percentages');
 const after=trailSnapshot('Matemática',[wrong,right]);
 assert.equal(after.practiced,1);assert.equal(after.correctSamples,1);assert.equal(after.needsReview,0);
 assert.equal(after.estimatedUnpracticedMinutes,before.estimatedUnpracticedMinutes);
 assert.deepEqual(catalogRoadmap([]),{total:20,practiced:0,correctSamples:0,needsReview:0});
});

test('prerequisites and next/previous lesson are stable and subject-bound',()=>{
 const snapshot=trailSnapshot('Matemática',[]);
 const functions=snapshot.steps.find(step=>step.lesson.id==='math-functions');
 assert.deepEqual(functions?.prerequisites.map(x=>x.id),['math-equations']);
 assert.equal(adjacentLesson('Matemática','math-percentages',1)?.id,'math-equations');
 assert.equal(adjacentLesson('Matemática','math-percentages',-1),null);
 assert.equal(adjacentLesson('Matemática','math-functions',1)?.id,'math-probability');
 assert.equal(adjacentLesson('Física','math-percentages',1),null);
 assert.equal(trailSnapshot('Inexistente',[]).total,0);
});