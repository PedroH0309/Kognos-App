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

/** Each of the five revised lessons must guide reasoning with distinct, disciplinary hints. */
test('batch 41 offers fifteen non-generic, non-repeated objective hints',()=>{
 const seen=new Set<string>();
 for(const lesson of provaoDepthBatch41Core){
  for(const task of lesson.tasks){
   const hint=(task.hint??'').trim();
   assert.ok(hint.length>=65,lesson.topicStart+' has a vague hint');
   assert.ok(!/consulte o mecanismo|exemplo resolvido desta etapa/i.test(hint),lesson.topicStart+' retains a placeholder hint');
   assert.ok(!seen.has(hint.toLocaleLowerCase('pt-BR')),lesson.topicStart+' repeats a hint');
   seen.add(hint.toLocaleLowerCase('pt-BR'));
  }
 }
 assert.equal(seen.size,15);
});
