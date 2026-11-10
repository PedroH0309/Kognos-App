import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {starterLesson} from './starter-lessons.ts';
import {introductoryLessons} from './learning-catalog.ts';
import {lessonTaskChoice,introductoryChoice} from './lesson-multiple-choice.ts';
import {parseCourseDocument} from './course-content.ts';

test('Every offline curriculum question is either an authored four-option MCQ or explicitly unavailable',()=>{
 const subjects=new Set<string>(),exams=new Set<string>();
 let assessed=0,pending=0;
 for(const topic of curriculumTopics){
  subjects.add(topic.subject);
  for(const exam of topic.exams)exams.add(exam);
  const lesson=starterLesson(topic);
  const authoredPrompts=new Set<string>();
  for(const task of lesson.tasks){
   const choice=lessonTaskChoice(lesson,task);
   if(choice.source==='unavailable'){
    assert.equal(choice.correctIndex,-1,topic.id);
    assert.ok(choice.options.every(option=>option===''),topic.id);
    pending++;
    continue;
   }
   assert.equal(choice.source,'editorial',topic.id);
   assert.equal(choice.options.length,4,topic.id);
   assert.equal(new Set(choice.options.map(o=>o.trim().toLowerCase())).size,4,topic.id);
   assert.ok(Number.isInteger(choice.correctIndex)&&choice.correctIndex>=0&&choice.correctIndex<4,topic.id);
   assert.ok(choice.options[choice.correctIndex].length>0,topic.id);
   assert.equal(choice.explanation,task.solution);
   assert.ok(choice.prompt.length>0);
   assert.ok(!authoredPrompts.has(choice.prompt),'Duplicate MCQ prompt in '+topic.id);
   authoredPrompts.add(choice.prompt);
   assessed++;
  }
 }
 assert.ok(subjects.size>=14,'All curricular subjects must be assessed');
 assert.deepEqual([...exams].sort(),['enem','etec','fuvest','saresp','vunesp']);
 assert.ok(assessed>=400,'Existing editorial MCQs remain in use');
 assert.ok(pending>0,'Introductory scaffolds are not falsely presented as reviewed questions');
});

test('Thermodynamics cannot inherit mechanics answers or a fictitious resolution matching exercise',()=>{
 const topic=curriculumTopics.find(t=>t.subject==='Física'&&t.topic.includes('Energia térmica, temperatura e termômetros'));
 assert.ok(topic,'Expected Provão thermal-energy syllabus topic');
 const lesson=starterLesson(topic);
 for(const task of lesson.tasks){
  const choice=lessonTaskChoice(lesson,task);
  assert.ok(choice.source==='editorial'||choice.source==='unavailable');
  if(choice.source==='editorial'){
   assert.doesNotMatch(choice.options.join(' '),/força resultante|diagrama de corpo livre|12 N.*3 kg/i);
   assert.notEqual(choice.instruction,'Qual alternativa inicia a resolução de referência correspondente a este exercício?');
  }
 }
});

test('Introductions display only original explicitly keyed demonstration questions',()=>{
 let demos=0,unavailable=0;
 for(const intro of introductoryLessons){
  const choice=introductoryChoice(intro);
  if(!choice){unavailable++;continue;}
  assert.equal(choice.source,'demo');
  assert.equal(choice.options.length,4,intro.id);
  assert.equal(new Set(choice.options).size,4,intro.id);
  assert.ok(choice.correctIndex>=0&&choice.correctIndex<4);
  demos++;
 }
 assert.ok(demos>=20);
 assert.ok(unavailable>=0);
});

test('Older unkeyed drafts remain readable, but cannot create fake alternatives',()=>{
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
