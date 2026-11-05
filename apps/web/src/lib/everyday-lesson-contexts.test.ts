import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Topics} from './authored-lessons-stage14.ts';
import {stage15Topics} from './authored-lessons-stage15.ts';
import {stage16Topics} from './authored-lessons-stage16.ts';
import {stage17Topics} from './authored-lessons-stage17.ts';
import {stage18Topics} from './authored-lessons-stage18.ts';
import {stage19Topics} from './authored-lessons-stage19.ts';
import {everydayContexts,everydayContextFor} from './everyday-lesson-contexts.ts';
import {starterLesson} from './starter-lessons.ts';

test('Every authored lesson starts with a distinct concrete situation and a solved problem',()=>{
 const authored=[
  ...deepMathTopicNames.map(topic=>({subject:'Matemática',topic})),
  ...deepCrossSubjectTopics,
  ...stage13Topics,
  ...stage14Topics,
  ...stage15Topics,
  ...stage16Topics,
  ...stage17Topics,
  ...stage18Topics,
  ...stage19Topics
 ];
 assert.equal(authored.length,261);
 assert.equal(everydayContexts.length,authored.length);
 const expected=new Set(authored.map(x=>x.subject+'\0'+x.topic));
 const seen=new Set();
 for(const caseStudy of everydayContexts){
  const key=caseStudy.subject+'\0'+caseStudy.topic;
  assert.ok(expected.has(key),'Not an authored lesson: '+key);
  assert.ok(!seen.has(key),'Duplicated scenario: '+key);seen.add(key);
  assert.ok(caseStudy.context.length>=110,'Scenario too vague: '+key);
  assert.ok(caseStudy.question.length>=45,'Problem not explicit: '+key);
  assert.ok(caseStudy.answer.length>=75,'Needs a worked answer: '+key);
  const topic=curriculumTopics.find(x=>x.subject===caseStudy.subject&&x.topic===caseStudy.topic);
  assert.ok(topic,'Missing curriculum id: '+key);
  const lesson=starterLesson(topic);
  assert.equal(everydayContextFor(lesson),caseStudy,'Scenario must belong to its lesson');
  assert.equal(caseStudy.connections.length,2,'Exactly two focused cross-topic connections: '+key);
  const references=new Set();
  for(const ref of caseStudy.connections){
   const refKey=ref.subject+'\0'+ref.topic;
   assert.ok(expected.has(refKey),'Link points to unprepared material: '+refKey);
   assert.ok(refKey!==key,'Self-link: '+key);
   assert.ok(!references.has(refKey),'Repeated connection: '+key);
   assert.ok(ref.reason.length>50,'Connection needs a specific conceptual explanation: '+key);
   references.add(refKey);
  }
 }
 assert.equal(seen.size,261);
});
test('Published editorial materials do not receive an unrelated starter situation',()=>{
 const original=everydayContexts[0];
 assert.equal(everydayContextFor(null),null);
 assert.equal(everydayContextFor({subject:original.subject,topic:original.topic,authorship:'Equipe editorial'} as never),null);
 assert.equal(everydayContextFor({subject:'Outra disciplina',topic:original.topic,authorship:'Kognos — aula autoral aprofundada'} as never),null);
});
