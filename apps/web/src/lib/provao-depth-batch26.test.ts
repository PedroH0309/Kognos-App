import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoDepthBatch26Core} from './provao-depth-batch26-core.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

const cases=[
 ['Química','Fórmulas químicas: fórmula mínima, fórmula centesimal, fórmula molecular',[0,2,1]],
 ['Química','Constantes de equilíbrio e cálculos simples de equilíbrio',[1,2,3]],
 ['Biologia','Fatores que regulam o tamanho das populações',[1,2,2]],
 ['História','Período macedônico e cultura helenística',[1,2,3]],
 ['História','Do artesanato à fábrica: transformações no mundo do trabalho',[1,0,2]],
 ['Química','Transformações nucleares',[1,2,0]]
] as const;

test('batch 26: six unique syllabus lessons, specific worked examples and correct objective keys',()=>{
 assert.equal(provaoDepthBatch26Core.length,6);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'Duplicate deep syllabus registrations');
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official topic '+subject+' / '+prefix);
  const topic=matches[0];
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing deep lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i];
   const task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,prefix+' explanation '+i);
   assert.ok(section.example.length>=180,prefix+' worked example '+i);
   assert.ok(section.steps.length>=3&&section.pitfall.length>=50);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,keys[i],prefix+' answer '+i);
   assert.ok(task.solution.length>=140,prefix+' correction '+i);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
