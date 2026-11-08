import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseSection,CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {starterLesson} from './starter-lessons.ts';
import {provaoDepthBatch32Core} from './provao-depth-batch32-core.ts';

const expected=[
 ['Química','Macromoléculas naturais e sintéticas',[1,2,0]],
 ['Física','Geradores elétricos. Força eletromotriz e resistência interna. Equação e curva característica…',[1,2,0]],
 ['Física','Receptores elétricos. Força contraeletromotriz e resistência interna. Equação e curva…',[2,1,0]],
 ['Biologia','Teorias da origem da vida na Terra e hipóteses sobre a evolução do metabolismo energético',[3,0,1]],
 ['História','A Declaração Universal dos Direitos Humanos de 1948: seus princípios e trajetória histórica',[0,1,2]]
] as const;

test('batch 32 covers five distinct official topics with substantial original content and exact answer keys',()=>{
 assert.equal(provaoDepthBatch32Core.length,5);
 assert.equal(new Set(provaoDepthBatch32Core.map(s=>s.subject+'\0'+s.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,
   'Duplicate subject+topicStart registrations');
 for(const [subject,label,keys] of expected){
  const official=curriculumTopics.filter(t=>t.subject===subject&&t.topic===label&&t.exams.includes('saresp'));
  assert.equal(official.length,1,'Missing exact official syllabus item '+subject+' / '+label);
  const topic=official[0],spec=provaoDepthBatch32Core.find(s=>s.subject===subject&&s.topicStart===label);
  assert.ok(spec,'No original topic-specific lesson registered '+label);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'No resolved authored lesson '+label);
  assert.equal(lesson.id,topic.id,'Preserve canonical curriculum IDs');
  assert.equal(lesson.topic,topic.topic);
  assert.equal(lesson.objective,spec.objective,'Resolve by exact label rather than generic prefix');
  assert.deepEqual(starterLesson(topic),lesson,'Editorial fallback must use specific lesson');
  assert.ok(lesson.authorship.includes('aula autoral aprofundada e específica'));
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.equal(section.title,spec.sections[i].title,'Unexpected chapter override');
   assert.ok(section.explanation.length>=750,label+' chapter '+i+' explanation too short');
   assert.ok(section.example.length>=180,label+' worked example '+i+' too short');
   assert.ok(section.pitfall.length>=50,label+' error and limits '+i+' too short');
   assert.ok(section.steps.length>=3,label+' lacks procedural reasoning');
   assert.equal(task.options?.length,4,'Objective question needs exactly four answers');
   assert.equal(new Set(task.options).size,4,'All four A-D alternatives must differ');
   assert.equal(task.correctIndex,keys[i],'Verify authored answer '+label+' stage '+i);
   assert.ok(task.solution.length>=140,'Correction must explain why answer is right');
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
