import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[["Química","Potenciais-padrão de redução",[2,1,3]],["Física","Resistores. Primeira Lei de Ohm.",[2,1,3]],["Biologia","Organização celular dos seres vivos",[2,1,3]],["História","Expansão marítima e constituição do espaço atlântico",[1,0,3]],["Química","As principais interações intermoleculares:",[2,1,3]]] as const;
test('batch 14 five original STEM/history lessons match official syllabus and maintain objective editorial contracts',()=>{
 for(const [subject,prefix,answers] of cases){
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official topic '+subject+' / '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing registered deep lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],question:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Insufficient explanation: '+prefix+' / '+i);
   assert.ok(section.example.length>=180,'Insufficient worked example: '+prefix+' / '+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(question.options?.length,4);
   assert.equal(new Set(question.options).size,4);
   assert.equal(question.correctIndex,answers[i]);
   assert.ok(question.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,question).source,'editorial');
  }
 }
});
