import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch44Core} from './provao-depth-batch44-core.ts';

/** Original, non-official Kognos editorial material; teacher review remains pending. */
test('batch 44 has distinct topic-specific reasoning steps in all 15 chapters',()=>{
 assert.equal(provaoDepthBatch44Core.length,5);
 const forbidden=/Identifique as hipóteses e os dados do caso|Resolva usando o mecanismo físico-químico apropriado|Verifique unidades, limites do modelo e conclusão/;
 const seen=new Set<string>();
 for(const spec of provaoDepthBatch44Core){
  assert.equal(spec.sections.length,3,spec.topicStart);
  assert.equal(spec.tasks.length,3,spec.topicStart);
  for(const section of spec.sections){
   assert.ok(section.explanation.length>=750,spec.topicStart+' / '+section.title);
   assert.equal(section.steps?.length,3,spec.topicStart+' / '+section.title);
   for(const step of section.steps??[]){
    assert.ok(step.length>=45,spec.topicStart+' / '+section.title+' / '+step);
    assert.doesNotMatch(step,forbidden);
    assert.ok(!seen.has(step),'Repeated step: '+step);
    seen.add(step);
   }
  }
  for(const task of spec.tasks){
   assert.equal(task.options?.length,4,spec.topicStart);
   assert.equal(new Set(task.options).size,4,spec.topicStart);
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4);
   assert.ok(task.solution.length>=35,spec.topicStart);
  }
 }
 assert.equal(seen.size,45);
});
