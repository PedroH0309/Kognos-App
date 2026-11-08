import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';

const cases=[
 {subject:'Português',prefix:'Coordenação e subordinação. Conectivos',answers:[2,0,3]},
 {subject:'Inglês',prefix:'Compreensão crítica de textos: discriminação entre fato e opinião',answers:[2,3,1]}
] as const;
test('batch 08 language lessons match the official syllabus and use objective original quizzes',()=>{
 for(const item of cases){
  const topic=curriculumTopics.find(t=>t.subject===item.subject&&t.topic.startsWith(item.prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'No exact official topic: '+item.subject);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Deep lesson not registered for '+item.subject);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],question:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Insufficient language theory');
   assert.ok(section.example.length>=180,'Worked language example missing');
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3,'Reasoning scaffold missing');
   assert.equal(question.options?.length,4);
   assert.equal(new Set(question.options).size,4);
   assert.equal(question.correctIndex,item.answers[i]);
   assert.ok(question.solution.length>=140,'Detailed MCQ feedback missing');
   assert.equal(lessonTaskChoice(lesson,question).source,'editorial');
  }
 }
});
