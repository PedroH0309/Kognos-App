import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument,type CourseTask} from './course-content.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

const expected=[
 ['Biologia','Pirâmides ecológicas'],
 ['Química','Equações químicas e balanceamento'],
 ['Física','Escalas termométricas. As escalas Celsius'],
 ['Matemática','Porcentagem, taxas e índices'],
 ['História','Iluminismo e Liberalismo'],
 ['Geografia','Os espaços supranacionais'],
 ['Português','Concordância nominal e concordância verbal'],
 ['Inglês','Localização de informação específica'],
 ['Filosofia','O contratualismo clássico'],
 ['Sociologia','Pluralismo cultural:']
] as const;

test('ten subject-specific Provão Paulista lessons are substantive, progressive and verifiable',()=>{
 assert.equal(deepProvaoTopicKeys.length,10);
 for(const [subject,prefix] of expected){
  const topic=curriculumTopics.find(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official syllabus match for '+subject+' / '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,subject+' must have a dedicated lesson, not just a broad study method');
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.topic,topic.topic);
  assert.equal(lesson.review,'introductory','No false teacher approval');
  assert.equal(lesson.sections.length,3);
  assert.ok(lesson.objective.length>=75);
  assert.ok(lesson.sections.every(s=>s.explanation.length>=750&&s.example.length>=180&&s.steps.length>=3&&s.pitfall.length>=50),subject+' needs substantive explanation, examples and caveats at each stage');
  assert.ok(lesson.tasks.length>=3);
  for(const level of ['basic','intermediate','advanced'] as const){
   const section=lesson.sections.find(s=>s.level===level);
   assert.ok(section&&section.explanation.length>=750);
   const tasks:CourseTask[]=lesson.tasks.filter((item:CourseTask)=>item.level===level);
   assert.ok(tasks.length>=1,subject+' / '+level);
   for(const task of tasks){
    assert.equal(task.options?.length,4,subject+' / '+level+' requires authored distractors');
    assert.equal(new Set(task.options).size,4);
    assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4);
    assert.ok(task.solution.length>=140);
    const converted=lessonTaskChoice(lesson,task);
    assert.equal(converted.source,'editorial');
    assert.equal(converted.correctIndex,task.correctIndex);
   }
  }
  assert.ok(parseCourseDocument(lesson),'Invalid catalog lesson '+subject);
  assert.deepEqual(starterLesson(topic),lesson,'Central reader should select deeper authored content');
  assert.equal(starterCoverage(topic),'thematic');
 }
});
test('unmatched topics keep existing explicit maturity without fabricated content or changed IDs',()=>{
 const topic=curriculumTopics.find(t=>t.subject==='Geografia'&&t.topic.startsWith('Os países e as regiões geográficas'));
 assert.ok(topic);
 assert.equal(deepProvaoLesson(topic),null);
 const backup=starterLesson(topic);
 assert.equal(backup.id,topic.id);
 assert.ok(parseCourseDocument(backup));
});
