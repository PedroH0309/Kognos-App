import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[
 {subject:'Geografia',prefix:'A cartografia como recurso para a compreensão espacial dos fenômenos geográficos',answers:[2,0,3]},
 {subject:'Filosofia',prefix:'Questões éticas contemporâneas',answers:[3,1,0]}
] as const;
test('batch 10 cartography and ethics preserve exact topic IDs, three levels and correct A-D keys',()=>{
 for(const item of cases){
  const topic=curriculumTopics.find(t=>t.subject===item.subject&&t.topic.startsWith(item.prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official syllabus topic: '+item.subject);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing registered deep lesson');
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],question:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750&&section.example.length>=180&&section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(question.options?.length,4);
   assert.equal(new Set(question.options).size,4);
   assert.equal(question.correctIndex,item.answers[i]);
   assert.ok(question.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,question).source,'editorial');
  }
 }
});
