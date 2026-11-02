import {test} from 'node:test';
import assert from 'node:assert/strict';
import {expandExamSubjects,examForStudent,activeSyllabi,mergedSyllabus,officialSyllabusSources} from './exam-syllabus.ts';
import {initialProfile} from './profile.ts';

test('broad curated tracks cover central and additional high-school subjects',()=>{
 const exam=expandExamSubjects('enem',{Matemática:['Porcentagem e razão']});
 assert.ok(Object.keys(exam).length>=13);
 assert.ok(Object.values(exam).reduce((sum,topics)=>sum+topics.length,0)>=175);
 assert.ok(exam.Matemática.includes('Porcentagem e razão'));
 assert.ok(exam.Literatura.some(topic=>topic.includes('Modernismo')));
 assert.ok(exam.Física.some(topic=>topic.includes('Eletrostática')));
});
test('ETEC and SARESP are treated as their own grade-dependent tracks',()=>{
 const etec=expandExamSubjects('etec',{});
 const saresp=expandExamSubjects('saresp',{});
 assert.ok(etec.Matemática.some(topic=>topic.includes('Pitágoras')));
 assert.ok(saresp.Ciências.some(topic=>topic.includes('Ecologia')));
 assert.ok(!saresp.Filosofia);
});
test('changing primary examination can replace or combine study scopes',()=>{
 const p={...initialProfile,goal:'vestibular' as const,targetName:'UNESP 2027',examFocus:null};
 assert.equal(examForStudent(p),'vunesp');
 assert.deepEqual(activeSyllabi({...p,examFocus:'fuvest',syllabusExams:['vunesp','fuvest']}),['vunesp','fuvest']);
 assert.deepEqual(activeSyllabi({...p,examFocus:'fuvest',syllabusExams:['fuvest']}),['fuvest']);
 const combined=mergedSyllabus(['etec','fuvest']);
 assert.ok(combined.Matemática.length>=20);
 assert.equal(examForStudent({...p,examFocus:'enem'}),'enem');
});
test('each integrated edition points to an institutional website',()=>{
 for(const item of Object.values(officialSyllabusSources)){
  const uri=new URL(item.url);
  assert.equal(uri.protocol,'https:');
  assert.ok(['www.gov.br','www.fuvest.br','www.vunesp.com.br','vestibulinho.etec.sp.gov.br','atendimento.educacao.sp.gov.br'].includes(uri.host));
 }
});
