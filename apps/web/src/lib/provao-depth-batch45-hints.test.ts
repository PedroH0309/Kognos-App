import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch45Physics} from './provao-depth-batch45-physics.ts';

test('batch 45 physics hints are specific, distinct and preserve objective assessment',()=>{
 assert.equal(provaoDepthBatch45Physics.length,5);
 const hints=new Set<string>();
 for(const lesson of provaoDepthBatch45Physics){
  assert.equal(lesson.sections.length,3,lesson.topicStart);
  assert.equal(lesson.tasks.length,3,lesson.topicStart);
  for(const task of lesson.tasks){
   assert.equal(typeof task.hint,'string',lesson.topicStart);
   const hint=task.hint!.trim();
   assert.ok(hint.length>=75,'Hint too brief: '+lesson.topicStart);
   assert.ok(!hint.includes('Identifique a grandeza solicitada'),'Generic hint: '+lesson.topicStart);
   assert.ok(!hints.has(hint),'Duplicate hint: '+lesson.topicStart);
   hints.add(hint);
   assert.equal(task.options?.length,4,lesson.topicStart);
   assert.equal(new Set(task.options!.map(x=>x.trim().toLocaleLowerCase('pt-BR'))).size,4,lesson.topicStart);
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex!>=0&&task.correctIndex!<4,lesson.topicStart);
   assert.ok((task.solution?.trim().length??0)>=80,lesson.topicStart);
  }
 }
 assert.equal(hints.size,15);
});
