import {test} from 'node:test';
import type {CourseSection,CourseTask} from './course-content.ts';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
const cases=[
 ['Química','Cálculos estequiométricos: massa, volume, quantidade de matéria',[1,2,3]],
 ['Física','Movimentos uniformes e uniformemente variados. Suas funções horárias',[0,1,2]],
 ['Biologia','A 1ª e 2ª Lei de Gregor Mendel',[3,0,1]],
 ['História','Getúlio Vargas: do governo provisório ao Estado Novo',[2,3,0]],
 ['Química','Solubilidade e concentrações (porcentagem, ppm, g/L, mol/L',[1,2,3]]
] as const;
test('batch 12 contains five distinct official topics with original progressive objective lessons',()=>{
 for(const [subject,prefix,answers] of cases){
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Official topic not found: '+subject+' '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Unregistered deep topic: '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  assert.equal(new Set(lesson.sections.map(s=>s.example)).size,3,'Worked examples must be distinct');
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750);
   assert.ok(section.example.length>=180);
   assert.ok(section.pitfall.length>=50);
   assert.ok(section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,answers[i]);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
