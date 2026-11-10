import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch41Core} from './provao-depth-batch41-core.ts';

/** Regression: every chapter must expose the steps field, not an anonymous array. */
test('batch 41 has five specific lessons with three valid worked examples each',()=>{
 assert.equal(provaoDepthBatch41Core.length,5);
 for(const lesson of provaoDepthBatch41Core){
  assert.equal(lesson.sections.length,3,lesson.topicStart);
  assert.equal(lesson.tasks.length,3,lesson.topicStart);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=750,lesson.topicStart+' / '+section.level);
   assert.ok(section.example.length>100,lesson.topicStart+' / '+section.level);
   assert.ok(Array.isArray(section.steps),lesson.topicStart+' / '+section.level);
   assert.equal(section.steps?.length,3,lesson.topicStart+' / '+section.level);
   for(const step of section.steps??[])assert.ok(step.trim().length>30);
  }
  for(const task of lesson.tasks){
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options?.map(x=>x.trim().toLowerCase())).size,4);
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex!>=0&&task.correctIndex!<=3);
   assert.ok((task.solution??'').length>80);
  }
 }
});
