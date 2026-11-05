import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {stage13Lesson,stage13Topics,stage13EverydayContexts} from './authored-lessons-stage13.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';

test('Stage 13 authors exactly fifteen distinct curriculum lessons across fifteen subjects',()=>{
 assert.equal(stage13Topics.length,15);
 assert.equal(new Set(stage13Topics.map(x=>x.subject)).size,15);
 assert.equal(stage13EverydayContexts.length,15);
 const expected=new Set();
 for(const item of stage13Topics){
  const key=item.subject+'\0'+item.topic;
  assert.ok(!expected.has(key),'Duplicate topic: '+key);expected.add(key);
  const topic=curriculumTopics.find(x=>x.subject===item.subject&&x.topic===item.topic);
  assert.ok(topic,'Expected a real catalog title: '+key);
  const lesson=stage13Lesson(topic);
  assert.ok(lesson,'Missing authored course: '+key);
  assert.deepEqual(starterLesson(topic),lesson,'Must override generic starter text');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Malformed chapter or tasks: '+key);
  assert.equal(lesson.review,'introductory','No human review implied');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.ok(lesson.objective.length>85,'Need a real learning objective: '+key);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=500,'Conceptual explanation too short: '+key);
   assert.ok(section.example.length>=120,'Case example too short: '+key);
   assert.ok(section.pitfall.length>60,'Common misconception too vague: '+key);
   assert.ok(section.steps.length>=2);
  }
  assert.equal(lesson.tasks.length,6,'Two activities for each level');
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(t=>t.level===level).length,2);
  }
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6);
  assert.ok(lesson.tasks.every(x=>x.solution.length>=70),'All solutions need explanations');
  const everyday=stage13EverydayContexts.find(x=>x.subject===item.subject&&x.topic===item.topic);
  assert.ok(everyday,'Missing real-life problem: '+key);
  assert.equal(everyday.connections.length,2);
 }
});
test('Stage 13 only changes precisely authored topic IDs',()=>{
 const authored=new Set(stage13Topics.map(x=>x.subject+'\0'+x.topic));
 for(const topic of curriculumTopics){
  if(!authored.has(topic.subject+'\0'+topic.topic))assert.equal(stage13Lesson(topic),null);
 }
});
