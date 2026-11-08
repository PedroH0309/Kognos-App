import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

const syllabus=[
 {subject:'Química',prefix:'Geometria molecular',answers:[1,2,0]},
 {subject:'Biologia',prefix:'Metabolismo energético: energia para a vida',answers:[0,2,1]},
 {subject:'Física',prefix:'Calor como forma de energia em trânsito.',answers:[2,0,3]},
 {subject:'Matemática',prefix:'Probabilidade da união e da intersecção de dois ou mais eventos',answers:[1,0,2]},
 {subject:'História',prefix:'Revolução Industrial',answers:[2,1,3]}
] as const;

test('batch 07 deep lessons are exactly grounded in syllabus, with fully multiple-choice learning',()=>{
 for(const item of syllabus){
  const topic=curriculumTopics.find(t=>t.subject===item.subject&&t.topic.startsWith(item.prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,item.subject+' must match an official specific topic');
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Topic was not wired to the common lesson reader');
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory','Teacher sign-off is still pending');
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i],question=lesson.tasks[i];
   assert.ok(section.explanation.length>=750&&section.example.length>=180&&section.steps.length>=3&&section.pitfall.length>=50,'Must explain and demonstrate actual subject content');
   assert.equal(question.options?.length,4);
   assert.equal(new Set(question.options).size,4);
   assert.equal(question.correctIndex,item.answers[i],'Do not introduce an incorrect answer key');
   assert.ok(question.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,question).source,'editorial');
  }
 }
});
