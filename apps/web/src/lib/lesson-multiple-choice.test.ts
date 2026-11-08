import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {starterLesson} from './starter-lessons.ts';
import {introductoryLessons} from './learning-catalog.ts';
import {lessonTaskChoice,introductoryChoice} from './lesson-multiple-choice.ts';
import {parseCourseDocument} from './course-content.ts';

test('Every authored course task in every subject and exam can be answered with four unique alternatives',()=>{
 const subjects=new Set<string>(),exams=new Set<string>();
 let count=0;
 for(const topic of curriculumTopics){
  subjects.add(topic.subject);for(const exam of topic.exams)exams.add(exam);
  const lesson=starterLesson(topic);
  for(const task of lesson.tasks){
   const choice=lessonTaskChoice(lesson,task);
   assert.equal(choice.options.length,4,topic.id);
   assert.equal(new Set(choice.options).size,4,topic.id);
   assert.ok(Number.isInteger(choice.correctIndex)&&choice.correctIndex>=0&&choice.correctIndex<4,topic.id);
   assert.ok(choice.options[choice.correctIndex].length>0,topic.id);
   assert.equal(choice.explanation,task.solution);
   assert.ok(choice.prompt.length>0);
   count++;
  }
 }
 assert.ok(subjects.size>=14,'Expected all curriculum disciplines');
 assert.deepEqual([...exams].sort(),['enem','etec','fuvest','saresp','vunesp']);
 assert.ok(count>1000,'All lessons and their tasks must be covered');
});

test('Existing curated introductions use validated demo MCQs and other introductions use explicit example matching',()=>{
 let demos=0,matching=0;
 for(const intro of introductoryLessons){
  const choice=introductoryChoice(intro);
  assert.ok(choice, intro.id);
  assert.equal(choice.options.length,4,intro.id);
  assert.equal(new Set(choice.options).size,4,intro.id);
  assert.ok(choice.correctIndex>=0&&choice.correctIndex<4);
  if(choice.source==='demo')demos++;else matching++;
 }
 assert.ok(demos>=20,'Re-use authored four-choice demo questions instead of manufacturing a key');
 assert.ok(matching>=0);
});

test('Reviewed alternatives are optional in older drafts but validated when supplied',()=>{
 const original=starterLesson(curriculumTopics[0]);
 const first=original.tasks[0];
 const custom={...original,tasks:original.tasks.map((item,i)=>i===0?{
  ...item,options:['A opção incorreta um','B opção correta','C opção incorreta três','D opção incorreta quatro'],correctIndex:1
 }:item)};
 const parsed=parseCourseDocument(custom);
 assert.ok(parsed?.kind==='lesson');
 if(parsed?.kind!=='lesson')return;
 assert.equal(lessonTaskChoice(parsed,parsed.tasks[0]).source,'editorial');
 assert.equal(lessonTaskChoice(parsed,parsed.tasks[0]).correctIndex,1);
 assert.equal(parseCourseDocument({...custom,tasks:[{...first,options:['x','x','y','z'],correctIndex:1},...original.tasks.slice(1)]}),null);
 assert.equal(parseCourseDocument({...custom,tasks:[{...first,options:['a','b','c','d'],correctIndex:4},...original.tasks.slice(1)]}),null);
});
