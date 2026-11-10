import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoDepthBatch45Physics} from './provao-depth-batch45-physics.ts';
import {provaoTopics} from './provao-paulista.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
test('lote 45: cinco temas oficiais únicos e três capítulos densos por tema',()=>{
 assert.equal(provaoDepthBatch45Physics.length,5);
 const keys=new Set<string>();
 for(const spec of provaoDepthBatch45Physics){
  const key=spec.subject+' · '+spec.topicStart;
  assert.ok(!keys.has(key),key);keys.add(key);
  assert.ok(provaoTopics.some(t=>t.subject===spec.subject&&t.topic===spec.topicStart),key+' não consta do edital');
  const topic=curriculumTopics.find(t=>t.subject===spec.subject&&t.topic===spec.topicStart);
  assert.ok(topic,key+' ausente do catálogo');
  const resolved=deepProvaoLesson(topic!);
  assert.equal(resolved?.objective,spec.objective,key+' não venceu no resolvedor');
  assert.equal(spec.sections.length,3);
  assert.equal(spec.tasks.length,3);
  assert.ok(spec.objective.length>=100,key+' objetivo insuficiente');
  assert.ok(spec.prerequisites.length>=3);
  const seenPrompts=new Set<string>();const seenOptions=new Set<string>();
  for(let i=0;i<3;i++){
   const section=spec.sections[i],task=spec.tasks[i];
   assert.equal(section.level,['basic','intermediate','advanced'][i]);
   assert.equal(task.level,section.level);
   assert.ok(section.explanation.length>=750,key+' explicação curta '+i);
   assert.ok(section.example.length>=100,key+' exemplo curto '+i);
   assert.ok(section.pitfall.length>=50,key+' erro frequente curto '+i);
   assert.equal(section.steps?.length,3);
   assert.ok(section.steps?.every(step=>step.length>=45));
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex!>=0&&task.correctIndex!<4);
   assert.ok(task.solution.length>=140);
   assert.ok(!seenPrompts.has(task.prompt));seenPrompts.add(task.prompt);
   const optionsKey=JSON.stringify(task.options);
   assert.ok(!seenOptions.has(optionsKey));seenOptions.add(optionsKey);
   assert.doesNotMatch(JSON.stringify(task),/resolution_matching|example_matching/);
  }
 }
 for(const key of keys)assert.equal(deepProvaoTopicKeys.filter(k=>k===key).length,1,key+' duplicado');
});
