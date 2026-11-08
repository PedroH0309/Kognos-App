import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[
 ['Química','Número atômico e de massa. Semelhanças entre átomos',[1,0,2]],
 ['Física','Energia mecânica: energia cinética',[2,1,3]],
 ['Biologia','Envoltórios celulares; membrana plasmática',[0,2,1]],
 ['História','Renascimento Cultural',[1,0,3]],
 ['Química','Propriedades coligativas: conceitos',[2,0,3]]
] as const;
test('batch 15 five distinct original lessons preserve IDs, progressive depth and objective keys',()=>{
 for(const [subject,prefix,answers] of cases){
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official topic '+subject+' / '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing authored lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],question:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Insufficient explanation '+prefix+'/'+i);
   assert.ok(section.example.length>=180,'Insufficient example '+prefix+'/'+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(question.options?.length,4);
   assert.equal(new Set(question.options).size,4);
   assert.equal(question.correctIndex,answers[i]);
   assert.ok(question.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,question).source,'editorial');
  }
 }
});
