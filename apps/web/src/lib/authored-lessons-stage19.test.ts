import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseTask} from './course-content.ts';
import {parseCourseDocument} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Topics} from './authored-lessons-stage14.ts';
import {stage15Topics} from './authored-lessons-stage15.ts';
import {stage16Topics} from './authored-lessons-stage16.ts';
import {stage17Topics} from './authored-lessons-stage17.ts';
import {stage18Topics} from './authored-lessons-stage18.ts';
import {stage19Topics,stage19Lesson,stage19EverydayContexts} from './authored-lessons-stage19.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContexts,everydayContextFor} from './everyday-lesson-contexts.ts';
import {stage19Math} from './authored-stage19-math.ts';
import {stage19Physics} from './authored-stage19-physics.ts';
import {stage19Chemistry} from './authored-stage19-chemistry.ts';
import {stage19Biology} from './authored-stage19-biology.ts';
import {stage19History} from './authored-stage19-history.ts';
import {stage19Geography} from './authored-stage19-geography.ts';
import {stage19Portuguese} from './authored-stage19-portuguese.ts';
import {stage19Literature} from './authored-stage19-literature.ts';
import {stage19Writing} from './authored-stage19-writing.ts';
import {stage19English} from './authored-stage19-english.ts';
import {stage19Spanish} from './authored-stage19-spanish.ts';
import {stage19Philosophy} from './authored-stage19-philosophy.ts';
import {stage19Sociology} from './authored-stage19-sociology.ts';
import {stage19Art} from './authored-stage19-art.ts';
import {stage19PE} from './authored-stage19-pe.ts';
import {stage19Science} from './authored-stage19-science.ts';

const authoredSeeds=[
 ...stage19Math,...stage19Physics,...stage19Chemistry,...stage19Biology,
 ...stage19History,...stage19Geography,...stage19Portuguese,...stage19Literature,
 ...stage19Writing,...stage19English,...stage19Spanish,...stage19Philosophy,
 ...stage19Sociology,...stage19Art,...stage19PE,...stage19Science
];
const key=(x:{subject:string;topic:string})=>x.subject+'\0'+x.topic;
test('Stage 19 contains 64 new lessons and 192 chapters with distinct editorial content',()=>{
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>key({subject:'Matemática',topic})),
  ...[...deepCrossSubjectTopics,...stage13Topics,...stage14Topics,...stage15Topics,...stage16Topics,...stage17Topics,...stage18Topics].map(key)
 ]);
 assert.equal(previous.size,197);
 assert.equal(stage19Topics.length,64);
 assert.equal(authoredSeeds.length,64);
 assert.equal(stage19EverydayContexts.length,64);
 assert.equal(new Set(stage19Topics.map(key)).size,64);
 const all=new Set([...previous,...stage19Topics.map(key)]);
 assert.equal(all.size,261,'Every stage must add genuinely new syllabus topics');
 const counts=new Map<string,number>();
 for(const topic of stage19Topics)counts.set(topic.subject,(counts.get(topic.subject)??0)+1);
 assert.equal(counts.size,16);
 assert.equal(counts.get('Matemática'),5);
 assert.equal(counts.get('Espanhol'),3,'The Spanish 15-topic detailed syllabus is already covered');
 for(const [subject,count] of counts)if(!['Matemática','Espanhol'].includes(subject))assert.equal(count,4);
 const seenExamples=new Set<string>();
 for(const seed of authoredSeeds){
  const id=key(seed);
  const topic=curriculumTopics.find(t=>key(t)===id);
  assert.ok(topic,'Must match canonical curriculum: '+id);
  assert.ok(!previous.has(id),'Cannot count pre-existing course again: '+id);
  assert.equal(seed.chapters.length,3);
  assert.equal(seed.situation.length,3);
  assert.equal(seed.links.length,2);
  assert.ok(seed.objective.length>=44);
  for(const chapter of seed.chapters){
   assert.equal(chapter.length,8,'All chapter entries must map to the proper semantic field: '+id);
   assert.ok(chapter[1].length>=175,'Each chapter needs substantial subject-specific theory: '+id);
   assert.ok(chapter[2].length>=42,'Concrete example needed: '+id);
   assert.ok(chapter[3].length>=40,'Specific misconception needed: '+id);
   assert.ok(chapter[4].length>=10,'Direct question needed: '+id);
   assert.ok(chapter[5].length>=10,'Hint needed: '+id);
   assert.ok(chapter[6].length>=28,'An authored worked solution is needed: '+id);
   assert.ok(chapter[7].length>=45,'An authored misconception correction is needed: '+id);
   const ex=seed.subject+'\0'+chapter[2];
   assert.ok(!seenExamples.has(ex),'Avoid repeated worked examples between different topics: '+id);
   seenExamples.add(ex);
  }
  assert.ok(seed.situation[0].length>=95,'Specific situation needed: '+id);
  assert.ok(seed.situation[1].length>=40,'Situation should pose explicit problem: '+id);
  assert.ok(seed.situation[2].length>=50,'Scenario must have a reasoned resolution: '+id);
  const lesson=stage19Lesson(topic);
  assert.ok(lesson);
  assert.equal(lesson.id,topic.id,'Existing student progress identifiers must not change');
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Lesson must validate document schema: '+id);
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.equal(lesson.tasks.length,6);
  assert.equal(new Set(lesson.tasks.map(task=>task.prompt)).size,6);
  for(const level of ['basic','intermediate','advanced']){
   const subset:CourseTask[]=lesson.tasks.filter((task:CourseTask)=>task.level===level);
   assert.equal(subset.length,2);
   assert.equal(subset.filter(task=>task.prompt.startsWith('Analise a afirmação')).length,1);
  }
  const caseStudy=stage19EverydayContexts.find(x=>key(x)===id);
  assert.ok(caseStudy);
  assert.equal(everydayContextFor(lesson),caseStudy);
  assert.equal(caseStudy.connections.length,2);
  const links=new Set<string>();
  for(const link of caseStudy.connections){
   const target=key(link);
   assert.ok(all.has(target),'Only deep, authored lessons should be recommended: '+id+' -> '+target);
   assert.notEqual(target,id,'No self-link in curriculum');
   assert.ok(!links.has(target),'Two links must be different');
   assert.ok(link.reason.length>=55,'Links need conceptual justification');
   links.add(target);
  }
 }
 assert.equal(everydayContexts.length,261);
});
test('Stage 19 lookup does not modify other syllabus lessons or IDs',()=>{
 const selected=new Set(stage19Topics.map(key));
 for(const topic of curriculumTopics)if(!selected.has(key(topic)))assert.equal(stage19Lesson(topic),null);
});
