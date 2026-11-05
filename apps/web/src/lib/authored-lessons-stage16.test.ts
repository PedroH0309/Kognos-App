import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {stage16Lesson,stage16Topics,stage16EverydayContexts} from './authored-lessons-stage16.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Topics} from './authored-lessons-stage14.ts';
import {stage15Topics} from './authored-lessons-stage15.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContextFor,everydayContexts} from './everyday-lesson-contexts.ts';

test('Stage 16 adds 16 original, syllabus-matched deep lessons across all established subjects',()=>{
 assert.equal(stage16Topics.length,16);
 assert.equal(new Set(stage16Topics.map(x=>x.subject)).size,16);
 assert.equal(stage16EverydayContexts.length,16);
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>'Matemática'+'\0'+topic),
  ...deepCrossSubjectTopics.map(x=>x.subject+'\0'+x.topic),
  ...stage13Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage14Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage15Topics.map(x=>x.subject+'\0'+x.topic)
 ]);
 assert.equal(previous.size,85);
 const all=new Set([...previous,...stage16Topics.map(x=>x.subject+'\0'+x.topic)]);
 assert.equal(all.size,101,'New subjects/topics must not duplicate existing authored lessons');
 for(const {subject,topic:topicName} of stage16Topics){
  const key=subject+'\0'+topicName;
  assert.ok(!previous.has(key),'Previous deep lesson was overwritten: '+key);
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic===topicName);
  assert.ok(topic,'Expected a canonical syllabus topic: '+key);
  const lesson=stage16Lesson(topic);
  assert.ok(lesson,'Missing lesson: '+key);
  assert.deepEqual(starterLesson(topic),lesson,'Deep lesson must override generic fallback');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Lesson must validate against the course schema: '+key);
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.equal(lesson.review,'introductory','Cannot claim unperformed teacher approval');
  assert.ok(lesson.objective.length>=80,'Objective must identify a learning goal');
  assert.deepEqual(lesson.sections.map(x=>x.level),['basic','intermediate','advanced']);
  const distinctSteps=new Set();
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=500,'Chapter is insufficiently developed: '+key);
   assert.ok(section.example.length>=120,'Chapter requires a substantial concrete example: '+key);
   assert.ok(section.pitfall.length>=60,'Chapter must address a specific misunderstanding: '+key);
   assert.equal(section.steps.length,2);
   for(const step of section.steps){
    assert.ok(step.length>=35);
    assert.ok(!distinctSteps.has(step),'Steps should not be repeated throughout the lesson: '+key);
    distinctSteps.add(step);
   }
  }
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(x=>x.prompt)).size,6);
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(x=>x.level===level).length,2);
  }
  for(const task of lesson.tasks){
   assert.ok(task.prompt.length>=35,'Specific question required: '+key);
   assert.ok(task.hint.length>=20,'Helpful hint required: '+key);
   assert.ok(task.solution.length>=75,'Detailed rationale required: '+key);
  }
  const scenario=stage16EverydayContexts.find(x=>x.subject===subject&&x.topic===topicName);
  assert.ok(scenario,'Missing everyday problem: '+key);
  assert.equal(everydayContextFor(lesson),everydayContexts.find(x=>x.subject===subject&&x.topic===topicName));
  assert.ok(scenario.context.length>=110);
  assert.ok(scenario.question.length>=45);
  assert.ok(scenario.answer.length>=75);
  assert.equal(scenario.connections.length,2);
  const connections=new Set();
  for(const ref of scenario.connections){
   const target=ref.subject+'\0'+ref.topic;
   assert.ok(all.has(target),'Cross-subject link must lead to a prepared deep course: '+target);
   assert.notEqual(target,key);
   assert.ok(!connections.has(target));
   assert.ok(ref.reason.length>50,'Connection needs a conceptual explanation');
   connections.add(target);
  }
 }
 assert.ok(everydayContexts.length>=101,'The original 101 scenarios remain available as the repertoire expands');
});
test('Stage 16 lookup does not affect other topics or IDs',()=>{
 const authored=new Set(stage16Topics.map(x=>x.subject+'\0'+x.topic));
 for(const topic of curriculumTopics){
  if(!authored.has(topic.subject+'\0'+topic.topic))assert.equal(stage16Lesson(topic),null);
 }
});
