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
import {stage17Topics} from './authored-lessons-stage17.ts';
import {stage18Topics} from './authored-lessons-stage18.ts';
import {stage19Topics} from './authored-lessons-stage19.ts';
import {stage20Seeds,stage20Topics,stage20Lesson,stage20EverydayContexts} from './authored-lessons-stage20.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContextFor,everydayContexts} from './everyday-lesson-contexts.ts';

const key=(x:{subject:string;topic:string})=>x.subject+'\0'+x.topic;
test('Stage 20 adds 16 independently written lessons without altering previous 289',()=>{
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>key({subject:'Matemática',topic})),
  ...[...deepCrossSubjectTopics,...stage13Topics,...stage14Topics,...stage15Topics,...stage16Topics,...stage17Topics,...stage18Topics,...stage19Topics].map(key)
 ]);
 assert.equal(previous.size,289);
 assert.equal(stage20Seeds.length,16);
 assert.equal(stage20Topics.length,16);
 assert.equal(stage20EverydayContexts.length,16);
 const all=new Set([...previous,...stage20Topics.map(key)]);
 assert.equal(all.size,305,'New topics must not replace authored courses');
 assert.ok(everydayContexts.length>=305,'Future stages preserve all 305 previous scenarios');
 for(const seed of stage20Seeds){
  const k=key(seed);
  const catalog=curriculumTopics.find(t=>key(t)===k);
  assert.ok(catalog,'Topic must exist in canonical syllabus: '+k);
  assert.ok(!previous.has(k),'Repeated previous lesson: '+k);
  assert.equal(seed.chapters.length,3);
  assert.ok(seed.objective.length>=50,'Specific learning objective: '+k);
  for(const chapter of seed.chapters){
   assert.equal(chapter.length,8,'Required semantic entries: '+k);
   assert.ok(chapter[1].length>=140,'Theory paragraph too short: '+k);
   assert.ok(chapter[2].length>=50,'Worked example missing: '+k);
   assert.ok(chapter[3].length>=45,'Topic-specific misconception missing: '+k);
   assert.ok(chapter[4].length>=15,'Direct question missing: '+k);
   assert.ok(chapter[6].length>=40,'Worked solution missing: '+k);
   assert.ok(chapter[7].length>=55,'Misconception correction missing: '+k);
  }
  const lesson=stage20Lesson(catalog);
  assert.ok(lesson);
  assert.equal(lesson.id,catalog.id);
  assert.deepEqual(starterLesson(catalog),lesson,'Student learning route must resolve authored lesson: '+k);
  assert.equal(starterCoverage(catalog),'thematic');
  assert.ok(parseCourseDocument(lesson),'Lesson schema invalid: '+k);
  assert.equal(lesson.review,'introductory','Cannot claim teacher certification');
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(q=>q.prompt)).size,6,'Questions must be distinct: '+k);
  const scenario=stage20EverydayContexts.find(x=>key(x)===k);
  assert.ok(scenario);
  assert.equal(everydayContextFor(lesson),scenario);
  assert.ok(scenario.context.length>=110);
  assert.ok(scenario.question.length>=40);
  assert.ok(scenario.answer.length>=75);
  assert.equal(scenario.connections.length,2);
  for(const link of scenario.connections){
   assert.ok(all.has(key(link)), 'Connection target must have full authored lesson: '+k+' -> '+key(link));
   assert.notEqual(key(link),k);
   assert.ok(link.reason.length>=65);
  }
 }
});
test('Stage 20 lookup returns null for unrelated curriculum topics',()=>{
 const selected=new Set(stage20Topics.map(key));
 for(const topic of curriculumTopics)if(!selected.has(key(topic)))assert.equal(stage20Lesson(topic),null);
});
