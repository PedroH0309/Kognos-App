import {test} from 'node:test';
import assert from 'node:assert/strict';
import {canFinishLesson,curriculumSubjects,curriculumSubjectTopics,nextCurriculumTopic,scopedCurriculum} from './curriculum-navigation.ts';
import type {CurriculumListTopic} from './curriculum-navigation.ts';
const input:CurriculumListTopic[]=[
 {id:'ma-1',subject:'Matemática',topic:'Funções quadráticas',exams:['enem'],status:'published'},
 {id:'pt-1',subject:'Português',topic:'Interpretação de textos',exams:['enem'],status:'introduction'},
 {id:'ma-2',subject:'Matemática',topic:'Probabilidade',exams:['enem','fuvest'],status:'outline'},
 {id:'ma-3',subject:'Matemática',topic:'Porcentagem',exams:['etec'],status:'published'},
 {id:'hi-1',subject:'História',topic:'Brasil colonial',exams:['enem'],status:'outline'}
];
test('Subject landing view groups instead of displaying hundreds of topics',()=>{
 const rows=curriculumSubjects(scopedCurriculum(input,'enem',null));
 assert.deepEqual(rows.map(r=>[r.name,r.total,r.developed,r.introduced]),[
  ['História',1,0,0],['Matemática',2,1,0],['Português',1,0,1]
 ]);
});
test('Topic list retains editorial order and never includes another discipline',()=>{
 const topics=curriculumSubjectTopics(scopedCurriculum(input,'enem',null),'Matemática');
 assert.deepEqual(topics.map(t=>t.id),['ma-1','ma-2']);
 assert.equal(nextCurriculumTopic(topics,'ma-1')?.id,'ma-2');
 assert.equal(nextCurriculumTopic(topics,'ma-2'),null);
 assert.equal(nextCurriculumTopic(topics,'missing'),null);
});
test('Changing the curriculum changes available subjects and next lessons',()=>{
 const etec=curriculumSubjectTopics(scopedCurriculum(input,'etec',null),'Matemática');
 assert.deepEqual(etec.map(t=>t.id),['ma-3']);
 assert.equal(nextCurriculumTopic(etec,'ma-3'),null);
});
test('Continuing a written lesson requires explicit reading and completed exercises',()=>{
 assert.equal(canFinishLesson(true,true,true,true),true);
 assert.equal(canFinishLesson(true,false,true,true),false);
 assert.equal(canFinishLesson(true,true,false,true),false);
 assert.equal(canFinishLesson(true,true,true,false),false);
 assert.equal(canFinishLesson(false,true,true,true),false);
});
