import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoDepthBatch42Chemistry} from './provao-depth-batch42-chemistry.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthAudit} from './provao-depth-coverage.test.ts';

test('batch 42 has five distinct exact official chemistry topics and no duplicate registrations',()=>{
 assert.equal(provaoDepthBatch42Chemistry.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length);
 const audit=provaoDepthAudit();
 for(const spec of provaoDepthBatch42Chemistry){
  const matches=curriculumTopics.filter(t=>t.subject===spec.subject&&t.topic===spec.topicStart&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing exact official topic: '+spec.topicStart);
  const lesson=deepProvaoLesson(matches[0]);
  assert.ok(lesson,'No resolved lesson: '+spec.topicStart);
  assert.equal(lesson.id,matches[0].id);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  const prompts=new Set<string>();
  const signatures=new Set<string>();
  for(let i=0;i<3;i++){
   const section=lesson.sections[i],task=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Short explanation: '+spec.topicStart);
   assert.ok(section.example.length>=180,'Short worked example: '+spec.topicStart);
   assert.ok(section.pitfall.length>=50);
   assert.ok(section.steps.length>=3);
   assert.ok(!prompts.has(task.prompt));prompts.add(task.prompt);
   const choice=lessonTaskChoice(lesson,task);
   assert.equal(choice.source,'editorial');
   assert.equal(choice.options.length,4);
   assert.equal(new Set(choice.options.map(x=>x.trim().toLowerCase())).size,4);
   assert.ok(!signatures.has(choice.options.join('|')));signatures.add(choice.options.join('|'));
   assert.ok(Number.isInteger(choice.correctIndex)&&choice.correctIndex>=0&&choice.correctIndex<4);
   assert.ok(choice.explanation.length>=140);
   assert.ok(!/resolution_matching|example_matching/i.test(choice.source));
  }
  assert.ok(!audit.pending.some(p=>p.subject===spec.subject&&p.topic===spec.topicStart));
 }
 assert.ok(audit.coverage.deep_specific>=200,'Expected batch 42 to raise 195 to at least 200');
});
