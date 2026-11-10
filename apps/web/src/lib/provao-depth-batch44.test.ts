import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch44Core} from './provao-depth-batch44-core.ts';
import {provaoTopics} from './provao-paulista.ts';
import {deepProvaoTopicKeys} from './provao-depth-lessons.ts';

test('batch 44: five exact distinct official syllabus registrations',()=>{
 assert.equal(provaoDepthBatch44Core.length,5);
 assert.equal(new Set(provaoDepthBatch44Core.map(x=>x.subject+' · '+x.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No cross-batch duplicates');
 for(const spec of provaoDepthBatch44Core){
  assert.ok(provaoTopics.some(t=>t.subject===spec.subject&&t.topic===spec.topicStart),'Missing exact official label '+spec.topicStart);
  assert.ok(deepProvaoTopicKeys.includes(spec.subject+' · '+spec.topicStart));
  assert.equal(spec.sections.length,3);
  assert.equal(spec.tasks.length,3);
  assert.ok(spec.prerequisites.length>=2);
  const alternatives=new Set<string>();
  for(let i=0;i<3;i++){
   const section=spec.sections[i],task=spec.tasks[i];
   assert.equal(section.level,['basic','intermediate','advanced'][i]);
   assert.equal(task.level,section.level);
   assert.ok(section.explanation.length>=750,spec.topicStart+' / '+section.level);
   assert.ok(section.example.length>=100);
   assert.ok(section.pitfall.length>=35);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4);
   assert.ok(task.solution.length>=140);
   assert.ok(task.prompt.length>=35);
   assert.ok(!/resolution_matching|example_matching/i.test(JSON.stringify(task)));
   const signature=task.options.join('|');
   assert.ok(!alternatives.has(signature),'Repeated distractor set');
   alternatives.add(signature);
  }
 }
});
