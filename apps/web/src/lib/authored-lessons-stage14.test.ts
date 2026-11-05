import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {stage14Lesson,stage14Topics,stage14EverydayContexts} from './authored-lessons-stage14.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {everydayContextFor,everydayContexts} from './everyday-lesson-contexts.ts';

test('Stage 14 delivers sixteen individual courses, each in a different registered discipline',()=>{
 assert.equal(stage14Topics.length,16);
 assert.equal(new Set(stage14Topics.map(t=>t.subject)).size,16);
 assert.equal(stage14EverydayContexts.length,16);
 const existing=new Set([
  ...deepMathTopicNames.map(topic=>'Matemática'+'\0'+topic),
  ...deepCrossSubjectTopics.map(t=>t.subject+'\0'+t.topic),
  ...stage13Topics.map(t=>t.subject+'\0'+t.topic)
 ]);
 assert.equal(existing.size,53);
 const visited=new Set();
 const allAuthored=new Set([...existing,...stage14Topics.map(x=>x.subject+'\0'+x.topic)]);
 for(const entry of stage14Topics){
  const key=entry.subject+'\0'+entry.topic;
  assert.ok(!existing.has(key),'Stage 14 must not overwrite an older deep course: '+key);
  assert.ok(!visited.has(key),'Duplicated new course: '+key);visited.add(key);
  const topic=curriculumTopics.find(x=>x.subject===entry.subject&&x.topic===entry.topic);
  assert.ok(topic,'Invalid curriculum name: '+key);
  const lesson=stage14Lesson(topic);
  assert.ok(lesson,'Missing deep lesson: '+key);
  assert.deepEqual(starterLesson(topic),lesson,'Authored course should take priority over generic starters');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Course schema must be valid: '+key);
  assert.equal(lesson.review,'introductory','Do not imply human editorial validation');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.ok(lesson.objective.length>=95);
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=500,'Specific lesson too short: '+key);
   assert.ok(section.example.length>=120,'Worked example too short: '+key);
   assert.ok(section.pitfall.length>60,'Pitfall too vague: '+key);
  }
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6);
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(t=>t.level===level).length,2);
  }
  for(const task of lesson.tasks){
   assert.ok(task.solution.length>=70,'Task requires developed solution: '+key);
   assert.ok(task.hint.length>=20,'Task needs useful hint: '+key);
  }
  const situation=stage14EverydayContexts.find(x=>x.subject===entry.subject&&x.topic===entry.topic);
  assert.ok(situation,'Missing everyday introductory situation: '+key);
  assert.equal(everydayContextFor(lesson),everydayContexts.find(x=>x.subject===entry.subject&&x.topic===entry.topic));
  assert.ok(situation.context.length>=110);
  assert.ok(situation.question.length>=45);
  assert.ok(situation.answer.length>=75);
  assert.equal(situation.connections.length,2);
  for(const next of situation.connections){
   assert.ok(allAuthored.has(next.subject+'\0'+next.topic),'Related course is not authored: '+key);
   assert.notEqual(next.subject+'\0'+next.topic,key,'Avoid self references');
   assert.ok(next.reason.length>50,'Connection needs a meaningful reason');
  }
 }
 assert.equal(visited.size,16);
 assert.ok(everydayContexts.length>=69,'The previous 69 authored scenarios must remain available as new stages expand');
});
test('Stage 14 lookup is exact and does not alter unrelated curriculum records',()=>{
 const keys=new Set(stage14Topics.map(t=>t.subject+'\0'+t.topic));
 for(const topic of curriculumTopics){
  if(!keys.has(topic.subject+'\0'+topic.topic))assert.equal(stage14Lesson(topic),null);
 }
});
