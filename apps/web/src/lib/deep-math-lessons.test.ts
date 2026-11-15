import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {deepMathLesson,deepMathTopicNames} from './deep-math-lessons.ts';
import {deepAuthoredCurriculumLesson} from './authored-curriculum-lessons.ts';
import {starterCoverage,starterLesson} from './starter-lessons.ts';

test('All eight original mathematics lessons remain valid and reviewed curriculum replacements take priority',()=>{
 assert.equal(deepMathTopicNames.length,8);
 for(const name of deepMathTopicNames){
  const topic=curriculumTopics.find(item=>item.subject==='Matemática'&&item.topic===name);
  assert.ok(topic,'Missing curriculum topic: '+name);
  const direct=deepMathLesson(topic);
  assert.ok(direct);
  const active=starterLesson(topic);
  const replacement=deepAuthoredCurriculumLesson(topic);
  assert.deepEqual(active,replacement??direct,'Prefer the reviewed curriculum replacement, retaining the original fallback');
  assert.ok(parseCourseDocument(active),'Malformed active lesson: '+name);
  // Preserve all six exercises and the original lesson contract even when a
  // newer curriculum lesson is served. Replacement quality is checked in
  // authored-curriculum-lessons.test.ts, including hashes and answer calculations.
  const lesson=direct;
  assert.ok(parseCourseDocument(lesson),'Malformed CourseLesson: '+name);
  assert.equal(starterCoverage(topic),'thematic');
  assert.equal(lesson.review,'introductory','Teacher review must not be invented');
  assert.match(lesson.authorship,/sem homologação docente/);
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.equal(lesson.tasks.length,6,'Two questions per difficulty');
  for(const level of ['basic','intermediate','advanced']){
   assert.equal(lesson.tasks.filter(task=>task.level===level).length,2);
  }
  assert.ok(lesson.sections.reduce((n,s)=>n+s.explanation.length,0)>1200,
   'The subject needs explanatory depth instead of a generic short scaffold: '+name);
  assert.ok(new Set(lesson.tasks.map(t=>t.prompt)).size===6,'Repeated exercises: '+name);
  assert.ok(lesson.tasks.every(t=>t.solution.length>65),'Provide worked solutions, not answer-only keys: '+name);
  assert.ok(lesson.sourceUrls.every(url=>url.startsWith('https://')));
  assert.equal(lesson.id,topic.id);
 }
});
test('The new course is not incorrectly applied to unrelated mathematical topics or other subjects',()=>{
 const other=curriculumTopics.find(item=>item.subject==='Matemática'&&!deepMathTopicNames.includes(item.topic));
 assert.ok(other);
 assert.equal(deepMathLesson(other),null);
 const nonmath=curriculumTopics.find(item=>item.subject==='Física');
 assert.ok(nonmath);
 assert.equal(deepMathLesson(nonmath),null);
});
test('Mathematics problems include original computations, explicit verification and difficult cases',()=>{
 const text=deepMathTopicNames.flatMap(name=>{
  const topic=curriculumTopics.find(t=>t.subject==='Matemática'&&t.topic===name);
  assert.ok(topic);
  const l=starterLesson(topic);
  return [...l.sections.flatMap(s=>[s.explanation,s.example,s.pitfall]),...l.tasks.map(t=>t.solution)];
 }).join(' ');
 for(const needle of ['MDC','MMC','proporcionalidade','juros simples','juros compostos','√','inequação','sistema','notação científica']){
  assert.ok(text.toLocaleLowerCase('pt-BR').includes(needle.toLocaleLowerCase('pt-BR')),needle);
 }
});
