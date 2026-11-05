import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Topics} from './authored-lessons-stage14.ts';
import {stage15Topics} from './authored-lessons-stage15.ts';
import {stage16Topics} from './authored-lessons-stage16.ts';
import {stage17Lesson,stage17Topics,stage17EverydayContexts} from './authored-lessons-stage17.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContexts,everydayContextFor} from './everyday-lesson-contexts.ts';

test('Stage 17 provides 32 individually written lessons in all sixteen disciplines',()=>{
 assert.equal(stage17Topics.length,32);
 assert.equal(new Set(stage17Topics.map(x=>x.subject)).size,16);
 assert.equal(stage17EverydayContexts.length,32);
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>'Matemática'+'\0'+topic),
  ...deepCrossSubjectTopics.map(x=>x.subject+'\0'+x.topic),
  ...stage13Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage14Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage15Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage16Topics.map(x=>x.subject+'\0'+x.topic)
 ]);
 assert.equal(previous.size,101);
 const all=new Set([...previous,...stage17Topics.map(x=>x.subject+'\0'+x.topic)]);
 assert.equal(all.size,133,'Do not double-count previously authored subjects');
 for(const entry of stage17Topics){
  const key=entry.subject+'\0'+entry.topic;
  assert.ok(!previous.has(key),'No previously authored lesson may be overwritten: '+key);
  const topic=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.topic);
  assert.ok(topic,'Stage 17 uses canonical curriculum titles: '+key);
  const lesson=stage17Lesson(topic);
  assert.ok(lesson,'Lesson missing: '+key);
  assert.deepEqual(starterLesson(topic),lesson,'Stage 17 must override generic introductory template');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Lesson schema must be valid');
  assert.equal(lesson.review,'introductory');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.ok(lesson.objective.length>=75);
  assert.deepEqual(lesson.sections.map(x=>x.level),['basic','intermediate','advanced']);
  const steps=new Set();
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=440,'Chapter explanation must be developed: '+key);
   assert.ok(section.example.length>=95,'Chapter must include a concrete example: '+key);
   assert.ok(section.pitfall.length>=50,'Chapter must explain a specific mistake: '+key);
   assert.equal(section.steps.length,2);
   for(const step of section.steps){
    assert.ok(step.length>=25,'Study steps must be specific');
    assert.ok(!steps.has(step),'Do not repeat study steps within a course');
    steps.add(step);
   }
  }
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(x=>x.prompt)).size,6);
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(x=>x.level===level).length,2);
  }
  for(const task of lesson.tasks){
   assert.ok(task.prompt.length>=24);
   assert.ok(task.hint.length>=15);
   assert.ok(task.solution.length>=55,'Solutions must explain results');
  }
  const caseStudy=stage17EverydayContexts.find(x=>x.subject===entry.subject&&x.topic===entry.topic);
  assert.ok(caseStudy,'Every course needs a realistic opening scenario');
  assert.deepEqual(everydayContextFor(lesson),caseStudy);
  assert.ok(caseStudy.context.length>=85);
  assert.ok(caseStudy.question.length>=38);
  assert.ok(caseStudy.answer.length>=65);
  assert.equal(caseStudy.connections.length,2);
  const links=new Set();
  for(const connection of caseStudy.connections){
   const target=connection.subject+'\0'+connection.topic;
   assert.ok(all.has(target),'Only authored courses may be recommended: '+target);
   assert.notEqual(target,key);
   assert.ok(!links.has(target));
   assert.ok(connection.reason.length>=45,'Each cross-reference must explain its relevance');
   links.add(target);
  }
 }
 assert.equal(everydayContexts.length,133);
});
test('Stage 17 lookup is exact and does not change unrelated lessons or identifiers',()=>{
 const selected=new Set(stage17Topics.map(x=>x.subject+'\0'+x.topic));
 for(const topic of curriculumTopics){
  if(!selected.has(topic.subject+'\0'+topic.topic))assert.equal(stage17Lesson(topic),null);
 }
});
