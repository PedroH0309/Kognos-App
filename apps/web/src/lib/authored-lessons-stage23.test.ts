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
import {stage20Topics} from './authored-lessons-stage20.ts';
import {stage21Topics} from './authored-lessons-stage21.ts';
import {stage22Topics} from './authored-lessons-stage22.ts';
import {stage23Seeds,stage23Topics,stage23Lesson,stage23EverydayContexts} from './authored-lessons-stage23.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContexts,everydayContextFor} from './everyday-lesson-contexts.ts';
const key=(x:{subject:string;topic:string})=>x.subject+'\0'+x.topic;
test('Stage23 adds six new science/physics authored lessons, never shadowing prior 425',()=>{
 const previous=new Set([...deepMathTopicNames.map(topic=>key({subject:'Matemática',topic})),...[...deepCrossSubjectTopics,...stage13Topics,...stage14Topics,...stage15Topics,...stage16Topics,...stage17Topics,...stage18Topics,...stage19Topics,...stage20Topics,...stage21Topics,...stage22Topics].map(key)]);
 assert.equal(previous.size,425);
 assert.equal(stage23Seeds.length,6);
 assert.equal(stage23Topics.length,6);
 assert.equal(stage23EverydayContexts.length,6);
 const newKeys=stage23Topics.map(key);
 assert.equal(new Set(newKeys).size,6);
 assert.deepEqual(newKeys.filter(x=>previous.has(x)),[],'New lessons cannot overwrite previous topics');
 assert.ok(everydayContexts.length>=431,'Future authored stages must retain all 431 contexts');
 const available=new Set([...previous,...newKeys]);
 const brokenLinks:string[]=[];
 for(const seed of stage23Seeds){
  const id=key(seed);
  const catalog=curriculumTopics.find(t=>key(t)===id);
  assert.ok(catalog,'Unknown canonical topic '+id);
  assert.ok(seed.objective.length>=45);
  assert.equal(seed.chapters.length,3);
  for(const chapter of seed.chapters){
   assert.equal(chapter.length,8);
   const min=[20,140,40,38,15,10,45,50];
   chapter.forEach((field,i)=>assert.ok(field.length>=min[i],id+' chapter field '+i+' only '+field.length));
  }
  const lesson=stage23Lesson(catalog);
  assert.ok(lesson);
  assert.equal(lesson.id,catalog.id);
  assert.deepEqual(starterLesson(catalog),lesson);
  assert.equal(starterCoverage(catalog),'thematic');
  assert.ok(parseCourseDocument(lesson));
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6);
  const ctx=stage23EverydayContexts.find(x=>key(x)===id);
  assert.ok(ctx);
  assert.equal(everydayContextFor(lesson),ctx);
  assert.ok(ctx.context.length>=110);
  assert.ok(ctx.question.length>=45);
  assert.ok(ctx.answer.length>=75);
  assert.equal(ctx.connections.length,2);
  const links=new Set<string>();
  for(const link of ctx.connections){
   const target=key(link);
   if(!available.has(target))brokenLinks.push(id+' -> '+target);
   assert.notEqual(target,id);
   assert.ok(!links.has(target));
   assert.ok(link.reason.length>50);
   links.add(target);
  }
 }
 assert.deepEqual(brokenLinks,[],'Links must lead to already deep-authored material');
});
test('Stage23 leaves all unselected lesson routes unchanged',()=>{
 const selected=new Set(stage23Topics.map(key));
 for(const topic of curriculumTopics)if(!selected.has(key(topic)))assert.equal(stage23Lesson(topic),null);
});
