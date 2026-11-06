import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument,type CourseTask} from './course-content.ts';
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
import {stage22Seeds,stage22Topics,stage22Lesson,stage22EverydayContexts} from './authored-lessons-stage22.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContexts,everydayContextFor} from './everyday-lesson-contexts.ts';

const key=(x:{subject:string;topic:string})=>x.subject+'\0'+x.topic;

test('Stage 22 adds 56 new, independently researched topics without replacing 369 authored lessons',()=>{
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>key({subject:'Matemática',topic})),
  ...[...deepCrossSubjectTopics,...stage13Topics,...stage14Topics,...stage15Topics,...stage16Topics,...stage17Topics,...stage18Topics,...stage19Topics,...stage20Topics,...stage21Topics].map(key)
 ]);
 assert.equal(previous.size,369,'Previous deep-authored baseline must remain unchanged');
 assert.equal(stage22Seeds.length,56);
 assert.equal(stage22Topics.length,56);
 assert.equal(stage22EverydayContexts.length,56);
 const newKeys=stage22Topics.map(key);
 assert.equal(new Set(newKeys).size,56,'No repeated identity inside stage 22');
 assert.deepEqual(newKeys.filter(k=>previous.has(k)),[],'Previously authored courses cannot be reauthored');
 const available=new Set([...previous,...newKeys]);
 assert.equal(available.size,425,'All 56 must add previously unprepared topics');
 assert.equal(everydayContexts.length,425);

 const allExamples=new Set<string>();
 const brokenLinks:string[]=[];
 const subjects=new Map<string,number>();
 for(const seed of stage22Seeds){
  const id=key(seed);
  subjects.set(seed.subject,(subjects.get(seed.subject)??0)+1);
  const topic=curriculumTopics.find(t=>key(t)===id);
  assert.ok(topic,'Canonical syllabus does not recognize topic: '+id);
  assert.ok(seed.objective.length>=45,'Precise objective is required: '+id);
  assert.equal(seed.chapters.length,3);
  for(const [index,chapter] of seed.chapters.entries()){
   assert.equal(chapter.length,8,'All eight fields expected in seed chapter: '+id+':'+index);
   const minLengths=[20,140,40,38,15,10,45,50];
   chapter.forEach((value,i)=>assert.ok(value.length>=minLengths[i],
    'More depth required in '+id+', chapter '+index+', field '+i+' ('+value.length+' chars)'));
   const k=seed.subject+'\0'+chapter[2];
   assert.ok(!allExamples.has(k),'Do not reuse worked examples across lessons: '+id);
   allExamples.add(k);
  }
  const lesson=stage22Lesson(topic);
  assert.ok(lesson,'Stage 22 must yield a static lesson: '+id);
  assert.equal(lesson.id,topic.id,'Must preserve topic IDs and student progress: '+id);
  assert.deepEqual(starterLesson(topic),lesson,'Lesson route must resolve to new content: '+id);
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Invalid course document schema: '+id);
  assert.equal(lesson.review,'introductory','No teacher certification implied');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.equal(lesson.tasks.length,6,'Two exercises per level');
  assert.equal(new Set(lesson.tasks.map(t=>t.prompt)).size,6,'Exercises must not repeat');
  for(const level of ['basic','intermediate','advanced']){
   const tasks:CourseTask[]=lesson.tasks.filter((t:CourseTask)=>t.level===level);
   assert.equal(tasks.length,2,'Two exercises in '+level+' for '+id);
   assert.equal(tasks.filter(t=>t.prompt.startsWith('Analise a afirmação')).length,1);
  }
  const caseStudy=stage22EverydayContexts.find(x=>key(x)===id);
  assert.ok(caseStudy,'A genuine daily-life problem must be present: '+id);
  assert.equal(everydayContextFor(lesson),caseStudy);
  assert.ok(caseStudy.context.length>=110,'Context must be detailed: '+id);
  assert.ok(caseStudy.question.length>=45,'Context must contain a clear question: '+id);
  assert.ok(caseStudy.answer.length>=75,'Answer must explain resolution: '+id);
  assert.equal(caseStudy.connections.length,2);
  const targets=new Set<string>();
  for(const link of caseStudy.connections){
   const destination=key(link);
   if(!available.has(destination))brokenLinks.push(id+' -> '+destination);
   assert.notEqual(destination,id,'Self-links do not teach a new connection: '+id);
   assert.ok(!targets.has(destination),'Links must target two distinct concepts: '+id);
   assert.ok(link.reason.length>50,'Connection needs a concrete rationale: '+id);
   targets.add(destination);
  }
 }
 assert.deepEqual(brokenLinks,[],'Connections must target previously authored or new lessons');
 assert.equal(subjects.size,14);
 assert.equal(subjects.get('Matemática'),8);
 assert.equal(subjects.get('Física'),6);
 assert.equal(subjects.get('Química'),6);
 assert.equal(subjects.get('Biologia'),6);
});

test('Stage 22 does not shadow earlier routes or alter unselected syllabus topics',()=>{
 const selected=new Set(stage22Topics.map(key));
 for(const topic of curriculumTopics)if(!selected.has(key(topic)))assert.equal(stage22Lesson(topic),null);
});
