import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {deepCrossSubjectLesson,deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {starterCoverage,starterLesson} from './starter-lessons.ts';

test('Every subject beyond mathematics receives an individually authored foundation lesson',()=>{
 const all=new Set(deepCrossSubjectTopics.map(item=>item.subject));
 assert.equal(deepCrossSubjectTopics.length,30,'Expected 30 authored cross-disciplinary lessons, not generic templates');
 assert.equal(all.size,15,'Coverage includes the other fifteen subject areas');
 for(const entry of deepCrossSubjectTopics){
  const topic=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.topic);
  assert.ok(topic,'Missing real curriculum topic: '+entry.subject+' / '+entry.topic);
  const lesson=deepCrossSubjectLesson(topic);
  assert.ok(lesson);
  assert.deepEqual(starterLesson(topic),lesson,'The lesson should override generic templates');
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Malformed authored chapter '+entry.topic);
  assert.equal(lesson.review,'introductory','Human editorial review is not implied');
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.ok(lesson.sections.every(s=>s.explanation.length>=500));
  assert.equal(lesson.tasks.length,6);
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(t=>t.level===level).length,2);
  }
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6);
  assert.ok(lesson.tasks.every(t=>t.solution.length>60),'All answers must explain their reasoning');
 }
});
test('No authored lesson is attached to unrelated subjects or titles',()=>{
 const names=new Set(deepCrossSubjectTopics.map(x=>x.subject+'\0'+x.topic));
 for(const topic of curriculumTopics.filter(x=>!names.has(x.subject+'\0'+x.topic)).slice(0,100)){
  assert.equal(deepCrossSubjectLesson(topic),null);
 }
});
