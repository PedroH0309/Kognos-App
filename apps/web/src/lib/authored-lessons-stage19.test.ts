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
import {stage18Topics} from './authored-lessons-stage18.ts';
import {stage19Lesson,stage19Topics,stage19EverydayContexts} from './authored-lessons-stage19.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContextFor,everydayContexts} from './everyday-lesson-contexts.ts';

test('Stage 19 provides sixty-four new topic-specific lessons through the shared blueprint',()=>{
 assert.equal(stage19Topics.length,64);
 assert.equal(stage19EverydayContexts.length,64);
 const subjectCounts=new Map<string,number>();
 for(const item of stage19Topics)subjectCounts.set(item.subject,(subjectCounts.get(item.subject)??0)+1);
 assert.equal(subjectCounts.size,16);
 for(const [subject,count] of subjectCounts){
  const expected=subject==='Matemática'?5:subject==='Espanhol'?3:4;
  assert.equal(count,expected,'Only genuinely missing canonical topics may be counted: '+subject);
 }
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>'Matemática'+'\0'+topic),
  ...deepCrossSubjectTopics.map(x=>x.subject+'\0'+x.topic),
  ...stage13Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage14Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage15Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage16Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage17Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage18Topics.map(x=>x.subject+'\0'+x.topic)
 ]);
 assert.equal(previous.size,197);
 const all=new Set([...previous,...stage19Topics.map(x=>x.subject+'\0'+x.topic)]);
 assert.equal(all.size,261,'Never overwrite an existing authored course');
 const examples=new Set<string>();
 for(const item of stage19Topics){
  const key=item.subject+'\0'+item.topic;
  assert.ok(!previous.has(key),'The course already existed: '+key);
  const topic=curriculumTopics.find(x=>x.subject===item.subject&&x.topic===item.topic);
  assert.ok(topic,'Missing canonical topic: '+key);
  const lesson=stage19Lesson(topic);
  assert.ok(lesson,'Missing authored lesson: '+key);
  assert.equal(lesson.id,topic.id,'Original IDs must remain stable');
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Lesson must validate against content schema: '+key);
  assert.equal(lesson.review,'introductory','Do not claim teacher review');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.ok(lesson.objective.length>=80);
  assert.deepEqual(lesson.sections.map(x=>x.level),['basic','intermediate','advanced']);
  assert.equal(lesson.sections.length,3);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=260,'Chapter must teach a concrete concept: '+key);
   assert.ok(section.example.length>=65,'Chapter must include a topic-specific example: '+key);
   assert.ok(section.pitfall.length>=40,'Chapter should address common confusion: '+key);
   assert.equal(section.steps.length,2);
   assert.ok(section.steps.every(x=>x.length>=35));
   const exampleKey=item.subject+'\0'+section.example;
   assert.ok(!examples.has(exampleKey),'Chapter repeats another example in subject: '+key);
   examples.add(exampleKey);
  }
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(x=>x.prompt)).size,6);
  for(const level of ['basic','intermediate','advanced']){
   const subset:CourseTask[]=lesson.tasks.filter((task:CourseTask)=>task.level===level);
   assert.equal(subset.length,2);
   assert.ok(subset.some((task:CourseTask)=>task.prompt.startsWith('Analise a afirmação')),'Each level contains a misconception diagnostic');
  }
  for(const task of lesson.tasks){
   assert.ok(task.prompt.length>=20,'Exercise prompt required');
   assert.ok(task.hint.length>=12,'Exercise hint required');
   assert.ok(task.solution.length>=50,'Explanation, not just answer, required: '+key);
  }
  const scenario=stage19EverydayContexts.find(x=>x.subject===item.subject&&x.topic===item.topic);
  assert.ok(scenario,'Every topic needs a solved everyday context: '+key);
  assert.equal(everydayContextFor(lesson),scenario);
  assert.ok(scenario.context.length>=110);
  assert.ok(scenario.question.length>=45);
  assert.ok(scenario.answer.length>=70);
  assert.equal(scenario.connections.length,2);
  const refs=new Set<string>();
  for(const link of scenario.connections){
   const target=link.subject+'\0'+link.topic;
   assert.ok(all.has(target),'Cross-reference must lead to a deep lesson: '+key+' -> '+target);
   assert.notEqual(target,key);
   assert.ok(!refs.has(target),'Two links must lead to distinct courses');
   assert.ok(link.reason.length>=50);
   refs.add(target);
  }
 }
 assert.equal(everydayContexts.length,261);
});

test('Stage 19 exact lookup preserves all other curricular topics',()=>{
 const authored=new Set(stage19Topics.map(x=>x.subject+'\0'+x.topic));
 for(const topic of curriculumTopics){
  if(!authored.has(topic.subject+'\0'+topic.topic))assert.equal(stage19Lesson(topic),null);
 }
});
