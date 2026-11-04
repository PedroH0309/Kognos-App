import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseLesson} from './course-content.ts';
import type {LearningLesson} from './learning-catalog.ts';
import {provaoTopics} from './provao-paulista.ts';
import {
 contentMaturity,explorerChallenge,explorerSourceLabel,referenceCards,
 studyMethodForSubject,supportedExplorerSubjects
} from './study-exploration.ts';

test('Every Provão Paulista subject, including writing, receives a specific guided study method',()=>{
 const subjects=[...new Set(provaoTopics.map(row=>row.subject))];
 assert.ok(subjects.length>=11,'Expected all core exam and writing disciplines');
 for(const subject of subjects){
  assert.ok(supportedExplorerSubjects.includes(subject),subject+' is missing a subject method');
  const strategy=studyMethodForSubject(subject);
  assert.equal(strategy.questions.length,3);
  assert.equal(strategy.promptLabels.length,3);
  assert.ok(strategy.questions.every(text=>text.length>30));
 }
 assert.notEqual(studyMethodForSubject('História').title,studyMethodForSubject('Física').title);
 assert.notEqual(studyMethodForSubject('Química').title,studyMethodForSubject('Português').title);
});

test('The official program supplies real subject-specific reference excerpts, not fabricated lessons',()=>{
 for(const row of provaoTopics){
  const input={subject:row.subject,topic:row.topic,unit:row.unit,description:row.description};
  const excerpts=referenceCards(input);
  assert.ok(excerpts.length>=1,row.subject+' '+row.code);
  assert.equal(excerpts[0],row.unit);
  assert.equal(contentMaturity(input),'outline');
  assert.equal(explorerChallenge(input).hasVerifiedSolution,false);
  assert.equal(explorerChallenge(input).answerReference,null);
  assert.equal(explorerSourceLabel(input),'Descrição curricular registrada');
 }
});

test('Already developed course lessons expose their actual activities, hints and solutions',()=>{
 const lesson={
  kind:'lesson',id:'course-test',subject:'Biologia',topic:'Processos celulares',
  objective:'Descrever etapas de processos celulares',prerequisites:[],exams:['saresp'],
  sections:[
   {level:'basic',title:'Fundamento',explanation:'Conceito',steps:['Um','Dois'],example:'Exemplo',pitfall:'Atenção'},
   {level:'intermediate',title:'Aplicação',explanation:'Conceito',steps:['Um','Dois'],example:'Exemplo',pitfall:'Atenção'},
   {level:'advanced',title:'Ampliação',explanation:'Conceito',steps:['Um','Dois'],example:'Exemplo',pitfall:'Atenção'}
  ],
  tasks:[{level:'basic',prompt:'Descreva o processo',hint:'Considere a função',solution:'Resolução do conteúdo'}],
  videos:[],authorship:'Kognos',license:'Conteúdo autoral',sourceUrls:[],review:'editor'
 } as CourseLesson;
 const input={subject:lesson.subject,topic:lesson.topic,lesson};
 assert.equal(contentMaturity(input),'published');
 assert.deepEqual(explorerChallenge(input),{
  prompt:'Descreva o processo',hint:'Considere a função',
  answerReference:'Resolução do conteúdo',hasVerifiedSolution:true
 });
});

test('Introduction examples are not mislabeled as a solution to a different question',()=>{
 const introduction={
  id:'pt-test',subject:'Português',topic:'Leitura crítica',objective:'Analisar contextos',
  explanation:'Uma explicação',workedExample:'Um exemplo introdutório',
  commonMistake:'Um erro comum',check:'Qual o sentido desse trecho?',
  prerequisites:[],minutes:12,questionId:'test'
 } as LearningLesson;
 const input={subject:introduction.subject,topic:introduction.topic,introduction};
 assert.equal(contentMaturity(input),'introduction');
 assert.equal(explorerChallenge(input).prompt,introduction.check);
 assert.equal(explorerChallenge(input).answerReference,introduction.workedExample);
 assert.equal(explorerChallenge(input).hasVerifiedSolution,false);
});

test('Extra institution subjects fall back to an honest method without impersonating a specific lesson',()=>{
 const method=studyMethodForSubject('Ciências');
 assert.equal(method.promptLabels.length,3);
 assert.equal(contentMaturity({subject:'Ciências',topic:'Experimento'}),'outline');
 assert.equal(referenceCards({subject:'Ciências',topic:'Experimento'})[0],'Experimento');
});
