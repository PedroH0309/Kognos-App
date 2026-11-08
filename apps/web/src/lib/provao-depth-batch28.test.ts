import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseSection,CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch28Thermochemistry} from './provao-depth-batch28-thermochemistry.ts';
import {provaoDepthBatch28HeatEngines} from './provao-depth-batch28-heat-engines.ts';
import {provaoDepthBatch28Conservation} from './provao-depth-batch28-conservation.ts';
import {provaoDepthBatch28Nationalism} from './provao-depth-batch28-nationalism.ts';
import {provaoDepthBatch28Labour} from './provao-depth-batch28-labour.ts';

const specs=[
 ...provaoDepthBatch28Thermochemistry,
 ...provaoDepthBatch28HeatEngines,
 ...provaoDepthBatch28Conservation,
 ...provaoDepthBatch28Nationalism,
 ...provaoDepthBatch28Labour
];
const cases=[
 ['Química','Equações termoquímicas',[2,1,3]],
 ['Física','Máquinas térmicas e máquinas frigoríficas. O ciclo de Carnot',[2,1,3]],
 ['Biologia','Conservação biológica (unidades de conservação)',[2,1,0]],
 ['História','Nações e nacionalismos no século XIX',[1,2,0]],
 ['História','A classe operária e a luta por direitos',[1,2,0]]
] as const;

test('batch 28: five unique Provão topics, deep explanations, original worked examples and A–D objective answers',()=>{
 assert.equal(specs.length,5);
 assert.equal(new Set(specs.map(s=>s.subject+'\0'+s.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,
  'Deep topic keys must be unique');
 for(const [subject,topicName,keys] of cases){
  const official=curriculumTopics.filter(topic=>topic.subject===subject&&topic.topic===topicName&&topic.exams.includes('saresp'));
  assert.equal(official.length,1,'Missing exact Provão official topic '+subject+' / '+topicName);
  const topic=official[0];
  const spec=specs.find(item=>item.subject===subject&&item.topicStart===topicName);
  assert.ok(spec,'Missing specific editorial topic '+topicName);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'No resolved depth lesson for '+topicName);
  assert.equal(lesson.id,topic.id,'Must preserve existing stable curriculum IDs');
  assert.equal(lesson.topic,topic.topic);
  assert.deepEqual(starterLesson(topic),lesson,'Must preserve starter editorial fallback');
  assert.ok(lesson.authorship.includes('aula autoral aprofundada e específica'));
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(task=>task.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i];
   const task:CourseTask=lesson.tasks[i];
   assert.equal(section.title,spec.sections[i].title,'Specific authored chapter must resolve');
   assert.ok(section.explanation.length>=750,topicName+' chapter '+i+' needs original in-depth exposition');
   assert.ok(section.example.length>=180,topicName+' chapter '+i+' needs a worked example');
   assert.ok(section.pitfall.length>=50,topicName+' chapter '+i+' needs misconceptions and limits');
   assert.ok(section.steps.length>=3,topicName+' chapter '+i+' needs progression steps');
   assert.equal(task.options?.length,4,topicName+' question '+i+' must be A–D only');
   assert.equal(new Set(task.options).size,4,topicName+' answer options must differ');
   assert.equal(task.correctIndex,keys[i],topicName+' question '+i+' correct answer');
   assert.equal(task.correctIndex,spec.tasks[i].correctIndex,topicName+' spec key');
   assert.ok(task.solution.length>=140,topicName+' question '+i+' needs commented correction');
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
