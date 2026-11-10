import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch44Core} from './provao-depth-batch44-core.ts';

/** Original, non-official Kognos editorial material; teacher review remains pending. */
test('batch 44 has distinct topic-specific reasoning steps in all 15 chapters',()=>{
 assert.equal(provaoDepthBatch44Core.length,5);
 const forbidden=/Identifique as hipóteses e os dados do caso|Resolva usando o mecanismo físico-químico apropriado|Verifique unidades, limites do modelo e conclusão/;
 const seen=new Set<string>();
 const questionPrompts=new Set<string>();
 const answerSets=new Set<string>();
 const verifiedKeys:Record<string,readonly number[]>={
  'Interações do tipo íon-dipolo':[0,2,1],
  'Solubilidade e temperatura de ebulição':[1,2,0],
  'Interações da água com outras substâncias':[2,1,3],
  'Soluções aquosas: conceito e classificação':[1,2,0],
  'A eletrosfera e o diagrama de Linus Pauling':[0,3,1]
 };
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
  assert.ok(verifiedKeys[spec.topicStart], 'Unexpected or unreviewed topic: '+spec.topicStart);
  for(const [index,task] of spec.tasks.entries()){
   assert.equal(task.correctIndex,verifiedKeys[spec.topicStart][index],spec.topicStart+' answer key drift at '+index);
   assert.ok(!questionPrompts.has(task.prompt),'Repeated question: '+task.prompt);
   questionPrompts.add(task.prompt);
   const fingerprint=JSON.stringify(task.options?.map(option=>option.trim().toLocaleLowerCase('pt-BR')).sort());
   assert.ok(!answerSets.has(fingerprint),'Reused four-option set: '+spec.topicStart);
   answerSets.add(fingerprint);
   assert.equal(task.options?.length,4,spec.topicStart);
   assert.equal(new Set(task.options).size,4,spec.topicStart);
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4);
   assert.ok(task.solution.length>=140,spec.topicStart+' needs a substantive commented correction');
   assert.ok(task.prompt.length>=25,spec.topicStart+' needs a specific question');
   assert.doesNotMatch(task.prompt+' '+task.solution,/resolution_matching|example_matching/i);
  }
 }
 assert.equal(seen.size,45);
 assert.equal(questionPrompts.size,15);
 assert.equal(answerSets.size,15);
});
