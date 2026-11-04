import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoTopics,provaoSubjects,type ProvaoGrade} from './provao-paulista.ts';
import {learningCatalogForExam,linkedExamTopic,validLessonAIReference} from './lesson-ai-links.ts';
import {examForStudent} from './exam-syllabus.ts';
import {validateGenerationRequest} from './exam-blueprints.ts';
import {aggregateAIStudyProgress} from './ai-study-progress.ts';

test('2026 programme preserves the three grade-specific inventories and all four writing criteria',()=>{
 assert.deepEqual([1,2,3].map(g=>provaoTopics.filter(t=>t.grade===g).length),[192,187,364]);
 const first=provaoSubjects(1),second=provaoSubjects(2),third=provaoSubjects(3);
 assert.ok(first.Filosofia&&!first.Sociologia);
 assert.ok(second.Sociologia&&!second.Filosofia);
 assert.ok(third.Filosofia&&third.Sociologia&&third.Redação.length===4);
 for(const subjects of [first,second,third])for(const name of ['Física','Química','Biologia','História','Geografia','Inglês'])assert.ok(subjects[name]?.length,name);
 assert.ok(!second.Ciências);
});

test('all official entries are reachable and generate valid linked AI practice in their grade',()=>{
 for(const grade of [1,2,3] as ProvaoGrade[]){
  const catalog=learningCatalogForExam('saresp',grade);
  for(const row of provaoTopics.filter(t=>t.grade===grade)){
   const lesson=catalog.find(l=>l.subject===row.subject&&l.topic===row.topic);
   assert.ok(lesson,`${grade} ${row.subject} ${row.code}`);
   assert.ok(row.description.length>=row.topic.replace(/….*$/,'').length);
   const topic=linkedExamTopic(lesson.id,'saresp');assert.ok(topic);
   assert.ok(validLessonAIReference(lesson.id,'saresp',row.subject,topic));
   assert.ok(validateGenerationRequest({institution:'saresp',subject:row.subject,topic,lessonId:lesson.id,difficulty:'basic',count:3}));
  }
  assert.ok(!catalog.some(l=>l.subject==='Ciências'));
 }
});

test('previous SARESP history stays valid while the student scope becomes high-school preparation',()=>{
 assert.ok(linkedExamTopic('science-earth','saresp'));
 assert.equal(examForStudent({goal:'vestibular',targetName:'Provão Paulista',examFocus:null}),'saresp');
 const l=learningCatalogForExam('saresp',2).find(l=>l.subject==='Biologia')!;
 const progress=aggregateAIStudyProgress([{id:'new',institution:'saresp',subject:l.subject,topic:l.topic,lesson_id:l.id,correct_index:1}],[{question_id:'new',answer_index:1,mode:'practice',created_at:'2026-11-03T23:00:00Z'}]);
 assert.equal(progress.lessons[0]?.lessonId,l.id);assert.equal(progress.lessons[0]?.correct,1);
});
