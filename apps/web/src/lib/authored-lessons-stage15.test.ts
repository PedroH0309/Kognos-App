import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {stage15Lesson,stage15Topics,stage15EverydayContexts} from './authored-lessons-stage15.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Topics} from './authored-lessons-stage14.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContextFor,everydayContexts} from './everyday-lesson-contexts.ts';

test('Stage 15 contains sixteen distinct deep lessons in all sixteen established subjects',()=>{
 assert.equal(stage15Topics.length,16);
 assert.equal(new Set(stage15Topics.map(x=>x.subject)).size,16);
 assert.equal(stage15EverydayContexts.length,16);
 const existing=new Set([
  ...deepMathTopicNames.map(topic=>'Matemática'+'\0'+topic),
  ...deepCrossSubjectTopics.map(x=>x.subject+'\0'+x.topic),
  ...stage13Topics.map(x=>x.subject+'\0'+x.topic),
  ...stage14Topics.map(x=>x.subject+'\0'+x.topic)
 ]);
 assert.equal(existing.size,69);
 const authored=new Set([...existing,...stage15Topics.map(x=>x.subject+'\0'+x.topic)]);
 assert.equal(authored.size,85,'There must be no duplicate deep subject/topic');
 for(const {subject,topic:topicName} of stage15Topics){
  const key=subject+'\0'+topicName;
  assert.ok(!existing.has(key),'Do not overwrite previous deep lessons: '+key);
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic===topicName);
  assert.ok(topic,'Exact topic must be available in the catalog: '+key);
  const lesson=stage15Lesson(topic);
  assert.ok(lesson,'Missing stage 15 course: '+key);
  assert.deepEqual(starterLesson(topic),lesson,'Specific material must override the introductory template');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Invalid course schema: '+key);
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.equal(lesson.review,'introductory','No false human review claims');
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  const allSteps=new Set();
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=500,'Section too short: '+key);
   assert.ok(section.example.length>=120,'Example too short: '+key);
   assert.ok(section.pitfall.length>=60,'Pitfall too vague: '+key);
   assert.equal(section.steps.length,2,'Each section has two actionable, authored steps');
   for(const step of section.steps){
    assert.ok(step.length>=35,'Step lacks specificity: '+key);
    assert.ok(!allSteps.has(step),'Do not repeat generic steps: '+key);
    allSteps.add(step);
   }
  }
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6);
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(t=>t.level===level).length,2,'Two tasks per level: '+key);
  }
  for(const task of lesson.tasks){
   assert.ok(task.prompt.length>=35,'Question too vague: '+key);
   assert.ok(task.hint.length>=20,'Hint should help without giving entire answer: '+key);
   assert.ok(task.solution.length>=75,'Solution must explain the reason: '+key);
  }
  const situation=stage15EverydayContexts.find(x=>x.subject===subject&&x.topic===topicName);
  assert.ok(situation,'Missing contextual problem: '+key);
  assert.equal(everydayContextFor(lesson),everydayContexts.find(x=>x.subject===subject&&x.topic===topicName));
  assert.ok(situation.context.length>=110);
  assert.ok(situation.question.length>=45);
  assert.ok(situation.answer.length>=75);
  assert.equal(situation.connections.length,2);
  const links=new Set();
  for(const ref of situation.connections){
   const target=ref.subject+'\0'+ref.topic;
   assert.ok(authored.has(target),'Related link points to an unprepared course: '+target);
   assert.notEqual(target,key,'No self-link');
   assert.ok(!links.has(target),'No duplicate link: '+key);
   assert.ok(ref.reason.length>50,'Explain why related topic matters: '+key);
   links.add(target);
  }
 }
 assert.equal(everydayContexts.length,85);
});
test('Stage 15 lookup never supplies unrelated course IDs',()=>{
 const names=new Set(stage15Topics.map(t=>t.subject+'\0'+t.topic));
 for(const topic of curriculumTopics){
  if(!names.has(topic.subject+'\0'+topic.topic))assert.equal(stage15Lesson(topic),null);
 }
});
