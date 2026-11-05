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
import {stage21Seeds,stage21Topics,stage21Lesson,stage21EverydayContexts} from './authored-lessons-stage21.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {everydayContexts,everydayContextFor} from './everyday-lesson-contexts.ts';

const key=(x:{subject:string;topic:string})=>x.subject+'\0'+x.topic;

test('Stage 21 adds 64 new deep subject-specific lessons, without overwriting earlier 305 topics',()=>{
 const previous=new Set([
  ...deepMathTopicNames.map(topic=>key({subject:'Matemática',topic})),
  ...[...deepCrossSubjectTopics,...stage13Topics,...stage14Topics,...stage15Topics,...stage16Topics,...stage17Topics,...stage18Topics,...stage19Topics,...stage20Topics].map(key)
 ]);
 assert.equal(previous.size,305,'Baseline from stages 11–20 must remain intact');
 assert.equal(stage21Seeds.length,64);
 assert.equal(stage21Topics.length,64);
 assert.equal(stage21EverydayContexts.length,64);
 assert.equal(new Set(stage21Topics.map(key)).size,64,'New lessons must have distinct subject/topic identities');
 const all=new Set([...previous,...stage21Topics.map(key)]);
 assert.equal(all.size,369,'Every added lesson must cover a previously unprepared topic');
 assert.ok(everydayContexts.length>=369,'Future authored stages retain the first 369 contexts');

 const subjects=new Map<string,number>();
 const examples=new Set<string>();
 const missingReferences:string[]=[];
 for(const data of stage21Seeds){
  const id=key(data);
  assert.ok(!previous.has(id),'Stage 21 cannot overwrite a previously authored lesson: '+id);
  subjects.set(data.subject,(subjects.get(data.subject)??0)+1);
  const topic=curriculumTopics.find(t=>key(t)===id);
  assert.ok(topic,'Lesson must match canonical curriculum topic exactly: '+id);
  assert.ok(data.objective.length>=45,'Subject-specific objective required: '+id);
  assert.equal(data.chapters.length,3,'Three distinct instructional chapters: '+id);
  for(const [index,chapter] of data.chapters.entries()){
   assert.equal(chapter.length,8,'All eight authored fields in chapter: '+id+':'+index);
   assert.ok(chapter[1].length>=140,'Substantial subject-specific teaching theory: '+id+':'+index);
   assert.ok(chapter[2].length>=40,'Original worked example: '+id+':'+index);
   assert.ok(chapter[3].length>=38,'Specific misconception: '+id+':'+index);
   assert.ok(chapter[4].length>=15,'Distinct concept question: '+id+':'+index);
   assert.ok(chapter[5].length>=10,'Hint required: '+id+':'+index);
   assert.ok(chapter[6].length>=45,'Worked solution required: '+id+':'+index);
   assert.ok(chapter[7].length>=50,'Conceptual correction required: '+id+':'+index);
   const exampleKey=data.subject+'\0'+chapter[2];
   assert.ok(!examples.has(exampleKey),'Examples must not be copied across lessons: '+id);
   examples.add(exampleKey);
  }
  const lesson=stage21Lesson(topic);
  assert.ok(lesson,'Static lesson exists: '+id);
  assert.equal(lesson.id,topic.id,'Preserve canonical IDs and stored progress');
  assert.deepEqual(starterLesson(topic),lesson,'Authenticated routing uses new authored lesson: '+id);
  assert.equal(starterCoverage(topic),'thematic');
  assert.ok(parseCourseDocument(lesson),'Course schema validation: '+id);
  assert.equal(lesson.review,'introductory','Never claim teacher-reviewed status');
  assert.match(lesson.authorship,/aula autoral.*sem homologação docente/);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.equal(lesson.tasks.length,6,'Two graded tasks per chapter');
  assert.equal(new Set(lesson.tasks.map(q=>q.prompt)).size,6,'Practice prompts must vary');
  for(const level of ['basic','intermediate','advanced']){
   const levelTasks:CourseTask[]=lesson.tasks.filter((q:CourseTask)=>q.level===level);
   assert.equal(levelTasks.length,2,'Expected two exercises for '+level+': '+id);
   assert.equal(levelTasks.filter((q:CourseTask)=>q.prompt.startsWith('Analise a afirmação')).length,1);
  }
  const caseStudy=stage21EverydayContexts.find(x=>key(x)===id);
  assert.ok(caseStudy,'Original everyday scenario: '+id);
  assert.equal(everydayContextFor(lesson),caseStudy);
  assert.ok(caseStudy.context.length>=110,'Detailed everyday scenario: '+id);
  assert.ok(caseStudy.question.length>=45,'Concrete question for everyday problem: '+id);
  assert.ok(caseStudy.answer.length>=75,'Explained everyday solution: '+id);
  assert.equal(caseStudy.connections.length,2);
  const withinLesson=new Set<string>();
  for(const link of caseStudy.connections){
   const dest=key(link);
   if(!all.has(dest))missingReferences.push(id+' -> '+dest);
   assert.notEqual(dest,id,'No trivial self-connection');
   assert.ok(!withinLesson.has(dest),'Links must be distinct: '+id);
   assert.ok(link.reason.length>50,'Must explain connection specifically: '+id+' -> '+dest);
   withinLesson.add(dest);
  }
 }
 assert.deepEqual(missingReferences,[],'Link targets must resolve to fully authored lessons');
 assert.equal(subjects.size,14,'No repeated Spanish or PE syllabus topics');
 assert.equal(subjects.get('Matemática'),8);
 assert.equal(subjects.get('Inglês'),5,'Add a distinct English topic without duplicating the completed Spanish syllabus');
 assert.equal(subjects.has('Espanhol'),false,'Do not reauthor Spanish courses already present');
 assert.equal(subjects.get('Física'),7);
 assert.equal(subjects.get('Química'),6);
});

test('Stage 21 maps only selected syllabus topics, with no changes to fallback content',()=>{
 const selected=new Set(stage21Topics.map(key));
 for(const topic of curriculumTopics)if(!selected.has(key(topic)))assert.equal(stage21Lesson(topic),null);
});
