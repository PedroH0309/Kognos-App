import {test} from 'node:test';
import type {CourseSection,CourseTask} from './course-content.ts';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
const cases=[
 ['Química','Operações envolvendo soluções (diluições e misturas de soluções',[1,2,0]],
 ['Química','Desintegração radioativa: meia-vida, datação e uso de radioisótopos',[2,1,3]],
 ['Física','Trabalho realizado por forças conservativas e não conservativas',[0,3,1]],
 ['Biologia','Construção e análise de árvores filogenéticas',[3,1,0]],
 ['História','Feudalismo e mundo feudal',[1,2,0]]
] as const;
test('batch 13 contains five exact official topics and 15 substantive objective questions',()=>{
 for(const [subject,prefix,answers] of cases){
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official syllabus topic '+subject+' '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing registered deep lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  assert.equal(new Set(lesson.sections.map(s=>s.example)).size,3);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Theory too short '+prefix);
   assert.ok(section.example.length>=180,'Worked example too short '+prefix);
   assert.ok(section.pitfall.length>=50);
   assert.ok(section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,answers[i]);
   assert.ok(task.solution.length>=140,'Insufficient answer rationale '+prefix);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
