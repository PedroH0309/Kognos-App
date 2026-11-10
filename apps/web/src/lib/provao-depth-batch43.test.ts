import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoDepthBatch43Core} from './provao-depth-batch43-core.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthAudit} from './provao-depth-coverage.test.ts';

test('batch 43 retains only its genuinely new Doppler topic without duplicated registrations',()=>{
 assert.equal(provaoDepthBatch43Core.length,1);
 assert.equal(provaoDepthBatch43Core[0].topicStart,'Nível sonoro. Decibel. Efeito Doppler');
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicated registration');
 const report=provaoDepthAudit();
 for(const spec of provaoDepthBatch43Core){
  const matches=curriculumTopics.filter(t=>t.subject===spec.subject&&t.topic===spec.topicStart&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Official exact topic missing: '+spec.topicStart);
  const lesson=deepProvaoLesson(matches[0]);
  assert.ok(lesson,'Lesson missing: '+spec.topicStart);
  assert.equal(lesson.id,matches[0].id);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  const prompts=new Set<string>(),signatures=new Set<string>();
  for(let i=0;i<3;i++){
   const section=lesson.sections[i],task=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Explanation too short: '+spec.topicStart);
   assert.ok(section.example.length>=180,'Example too short: '+spec.topicStart);
   assert.ok(section.pitfall.length>=50,'Pitfall too short: '+spec.topicStart);
   assert.ok(section.steps.length>=3);
   assert.ok(!prompts.has(task.prompt));prompts.add(task.prompt);
   const choice=lessonTaskChoice(lesson,task);
   assert.equal(choice.source,'editorial','No generated fallbacks');
   assert.equal(choice.options.length,4);
   assert.equal(new Set(choice.options.map(o=>o.trim().toLocaleLowerCase('pt-BR'))).size,4);
   assert.ok(!signatures.has(choice.options.join('|')));signatures.add(choice.options.join('|'));
   assert.ok(Number.isInteger(choice.correctIndex)&&choice.correctIndex>=0&&choice.correctIndex<=3);
   assert.ok(choice.explanation.length>=100,'Solution too short');
  }
  assert.ok(!report.pending.some(p=>p.subject===spec.subject&&p.topic===spec.topicStart),'Not deep in audit: '+spec.topicStart);
 }
 assert.ok(report.coverage.deep_specific>=196,'Expected at least 196 unique Provão topics after deduplication');
});
