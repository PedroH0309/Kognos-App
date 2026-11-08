import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoDepthBatch25Core} from './provao-depth-batch25-core.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

const cases=[
 ['Propriedade de substâncias moleculares, iônicas e metálicas',[1,2,3]],
 ['Propriedades físicas dos compostos orgânicos',[1,2,3]],
 ['Principais radicais funcionais e funções orgânicas',[1,2,3]],
 ['Solubilidade e temperatura de ebulição',[1,2,3]],
 ['Noção de monômeros e polímeros',[0,2,3]]
] as const;

test('batch 25: five unique exact chemistry syllabus lessons, worked examples and verified objective answers',()=>{
 assert.equal(provaoDepthBatch25Core.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'Duplicate deep registrations');
 for(const [prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject==='Química'&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official topic '+prefix);
  const topic=matches[0];
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,prefix+' explanation '+i);
   assert.ok(section.example.length>=180,prefix+' worked example '+i);
   assert.ok(section.steps.length>=3&&section.pitfall.length>=50);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,keys[i],prefix+' wrong answer '+i);
   assert.ok(task.solution.length>=140,prefix+' correction '+i);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
