import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import type {CourseTask} from './course-content.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Topics} from './authored-lessons-stage14.ts';
import {stage15Topics} from './authored-lessons-stage15.ts';
import {stage16Topics} from './authored-lessons-stage16.ts';
import {stage17Topics} from './authored-lessons-stage17.ts';
import {stage18Lesson,stage18Topics,stage18EverydayContexts} from './authored-lessons-stage18.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContextFor,everydayContexts} from './everyday-lesson-contexts.ts';

test('Stage 18 adds 64 topic-specific courses via a reusable editorial template, four per subject',()=>{
 assert.equal(stage18Topics.length,64);
 assert.equal(stage18EverydayContexts.length,64);
 const counts=new Map<string,number>();
 for(const item of stage18Topics)counts.set(item.subject,(counts.get(item.subject)??0)+1);
 assert.equal(counts.size,16);
 for(const count of counts.values())assert.equal(count,4);
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>'Matemática'+'\0'+topic),
  ...deepCrossSubjectTopics.map(x=>x.subject+'\0'+x.topic),
  ...stage13Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage14Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage15Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage16Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage17Topics.map(x=>x.subject+'\0'+x.topic)
 ]);
 assert.equal(previous.size,133);
 const all=new Set([...previous,...stage18Topics.map(x=>x.subject+'\0'+x.topic)]);
 assert.equal(all.size,197,'No course may replace another authored lesson');
 const examples=new Set<string>();
 for(const entry of stage18Topics){
  const key=entry.subject+'\0'+entry.topic;
  assert.ok(!previous.has(key),'Previously authored course must not be overwritten: '+key);
  const topic=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.topic);
  assert.ok(topic,'Every course requires a canonical curriculum record: '+key);
  const lesson=stage18Lesson(topic);
  assert.ok(lesson,'Missing authored course: '+key);
  assert.equal(lesson.id,topic.id,'Do not change curriculum IDs');
  assert.deepEqual(starterLesson(topic),lesson,'Template lesson takes precedence over introductory fallback');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Course must satisfy the document schema');
  assert.equal(lesson.review,'introductory','No false teacher review');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.ok(lesson.objective.length>=55);
  assert.deepEqual(lesson.sections.map(x=>x.level),['basic','intermediate','advanced']);
  assert.equal(lesson.sections.length,3);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=260,'Specific instructional prose is required: '+key);
   assert.ok(section.example.length>=45,'Worked case must be specific: '+key);
   assert.ok(section.pitfall.length>=30,'A common misconception must be discussed: '+key);
   assert.equal(section.steps.length,2);
   assert.ok(section.steps[0].length>=35);
   const exampleKey=entry.subject+'\0'+section.example;
   assert.ok(!examples.has(exampleKey),'The model must not repeat an example verbatim between topics: '+key);
   examples.add(exampleKey);
  }
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6,'No repeated question within an authored course');
  for(const level of ['basic','intermediate','advanced']){
   const questions:CourseTask[]=lesson.tasks.filter((task:CourseTask)=>task.level===level);
   assert.equal(questions.length,2);
   assert.ok(questions.some((task:CourseTask)=>task.prompt.startsWith('Analise a afirmação')),'Each level needs an error-diagnosis problem');
  }
  for(const task of lesson.tasks){
   assert.ok(task.prompt.length>=25);
   assert.ok(task.hint.length>=12);
   assert.ok(task.solution.length>=56,'Worked answer must explain reasoning');
  }
  const scenario=stage18EverydayContexts.find(x=>x.subject===entry.subject&&x.topic===entry.topic);
  assert.ok(scenario,'A distinct everyday introduction is required: '+key);
  assert.equal(everydayContextFor(lesson),scenario);
  assert.ok(scenario.context.length>=110);
  assert.ok(scenario.question.length>=45);
  assert.ok(scenario.answer.length>=75);
  assert.equal(scenario.connections.length,2);
  const connected=new Set<string>();
  for(const link of scenario.connections){
   const target=link.subject+'\0'+link.topic;
   assert.ok(all.has(target),'Related lesson is not authored: '+target);
   assert.notEqual(target,key,'Avoid self-connections');
   assert.ok(!connected.has(target),'Each related topic must be distinct');
   assert.ok(link.reason.length>50,'Explain conceptual relationship');
   connected.add(target);
  }
 }
 assert.equal(everydayContexts.length,197);
});
test('Reusable stage 18 renderer does not affect unrelated catalog entries',()=>{
 const authored=new Set(stage18Topics.map(x=>x.subject+'\0'+x.topic));
 for(const topic of curriculumTopics){
  if(!authored.has(topic.subject+'\0'+topic.topic))assert.equal(stage18Lesson(topic),null);
 }
});
