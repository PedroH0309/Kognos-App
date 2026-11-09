import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {provaoTopics} from './provao-paulista.ts';

/**
 * Offline editorial inventory only. A resolved lesson is not teacher-approved,
 * and published Supabase content is not inspected by this audit.
 */
test('every exam has an actionable exact-ID depth inventory without double counting',()=>{
 const exams=['enem','etec','fuvest','saresp','vunesp'] as const;
 const seen=new Set<string>();
 const byExam=Object.fromEntries(exams.map(exam=>[exam,{total:0,deep:0,pending:0}]));
 const pending:Record<string,Array<{id:string;subject:string;topic:string}>>=
  Object.fromEntries(exams.map(exam=>[exam,[]]));
 for(const topic of curriculumTopics){
  assert.ok(!seen.has(topic.id),'Duplicate curricular ID: '+topic.id);
  seen.add(topic.id);
  const deep=Boolean(deepProvaoLesson(topic));
  for(const exam of topic.exams){
   const row=byExam[exam];
   assert.ok(row,'Unknown exam: '+exam);
   row.total++;
   if(deep)row.deep++;
   else{
    row.pending++;
    pending[exam].push({id:topic.id,subject:topic.subject,topic:topic.topic});
   }
  }
 }
 for(const exam of exams){
  const row=byExam[exam];
  assert.ok(row.total>0,'Empty exam: '+exam);
  assert.equal(row.total,row.deep+row.pending,'Non-reconciled exam: '+exam);
  assert.equal(pending[exam].length,row.pending);
  pending[exam].sort((a,b)=>{
   const priority=['Química','Física','Biologia','História'];
   const ai=priority.indexOf(a.subject),bi=priority.indexOf(b.subject);
   return (ai<0?99:ai)-(bi<0?99:bi)||a.subject.localeCompare(b.subject,'pt-BR')||a.topic.localeCompare(b.topic,'pt-BR');
  });
 }
 const provaoKeys=new Set(provaoTopics.map(t=>t.subject+'\\0'+t.topic));
 assert.equal(provaoKeys.size,364);
 assert.equal(byExam.saresp.total,provaoKeys.size,'Provão catalogue drift');
 console.log('ALL_EXAMS_PENDING_EXACT_INVENTORY '+JSON.stringify({
  totalUniqueCurriculumIds:seen.size,byExam,
  nextCandidates:Object.fromEntries(exams.map(exam=>[exam,pending[exam].slice(0,25)]))
 }));
});
