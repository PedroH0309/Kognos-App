import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';

const cases=[
 {subject:'Filosofia',prefix:'As abordagens racionalistas e empiristas do conhecimento',answers:[0,2,1]},
 {subject:'Sociologia',prefix:'Preconceitos, estereótipos e outras formas de discriminação social',answers:[3,1,0]}
] as const;
test('batch 09 humanities lessons preserve curriculum identity and original multiple-choice keys',()=>{
 for(const item of cases){
  const topic=curriculumTopics.find(t=>t.subject===item.subject&&t.topic.startsWith(item.prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official topic '+item.subject);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing deep lesson '+item.subject);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],question:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750&&section.example.length>=180&&section.pitfall.length>=50&&section.steps.length>=3,'Missing substantial original explanation');
   assert.equal(question.options?.length,4);
   assert.equal(new Set(question.options).size,4);
   assert.equal(question.correctIndex,item.answers[i]);
   assert.ok(question.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,question).source,'editorial');
  }
 }
});
