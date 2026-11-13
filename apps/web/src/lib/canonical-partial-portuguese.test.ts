import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoPartialReferencesByExam, reviewedPartialAssociations, reviewedSemanticAliases} from './canonical-lesson-reuse.ts';

test('semantic and text-mode references are advisory and never full aliases',()=>{
 const expected=['Semântica e figuras de linguagem','Gêneros textuais e tipos de discurso'];
 const projections=provaoPartialReferencesByExam();
 for(const title of expected){
  const partial=reviewedPartialAssociations.find(p=>p.targetTitle===title&&p.subject==='Português');
  assert.ok(partial,'missing reviewed partial: '+title);
  const target=curriculumTopics.find(t=>t.subject==='Português'&&t.topic===title);
  assert.ok(target,'target is not registered: '+title);
  assert.ok(!reviewedSemanticAliases.some(a=>a.targetTopicId===target.id),'partial promoted to full alias');
  const links=Object.values(projections).flat().filter(ref=>ref.examTopicId===target.id);
  assert.ok(links.length>0,'no real advisory link for '+title);
  for(const link of links){
   assert.equal(link.fullyCovered,false);
   assert.ok(link.missingScope.length>20);
   assert.ok(link.lesson);
  }
 }
});

test('advisory references are scoped only to actual exam memberships',()=>{
 const projections=provaoPartialReferencesByExam();
 for(const [exam,links] of Object.entries(projections)){
  for(const link of links){
   const target=curriculumTopics.find(t=>t.id===link.examTopicId);
   assert.ok(target);
   assert.ok(target.exams.includes(exam as typeof target.exams[number]),'leaked into unrelated exam');
  }
 }
});
