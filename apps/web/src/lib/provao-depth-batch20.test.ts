import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {provaoDepthBatch20Core} from './provao-depth-batch20-core.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
const cases=[
 ['Química','Atmosfera terrestre: composição e características',[2,0,3]],
 ['Química','Interações da água com outras substâncias',[1,2,0]],
 ['Física','Sistemas geocêntrico e heliocêntrico. Leis de Kepler',[0,1,3]],
 ['História','Aspectos políticos e socioculturais do Antigo Regime',[2,0,3]]
] as const;
test('batch 20: unique exact curricular items and three verified objective stages each',()=>{
 assert.equal(provaoDepthBatch20Core.length,4);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length);
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official topic '+prefix);
  const topic=matches[0];
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i];
   const task: (typeof lesson.tasks)[number]=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,prefix+' chapter '+i);
   assert.ok(section.example.length>=180,prefix+' worked example '+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,keys[i]);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
