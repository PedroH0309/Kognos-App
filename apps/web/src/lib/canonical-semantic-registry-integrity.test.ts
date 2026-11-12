import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings,canonicalLessonForExam,reviewedSemanticAliases,reviewedPartialAssociations} from './canonical-lesson-reuse.ts';

test('reviewed semantic aliases have unique historical targets and verified exam memberships',()=>{
 const seen=new Set<string>();
 for(const alias of reviewedSemanticAliases){
  assert.notEqual(alias.sourceTopicId,alias.targetTopicId);
  const source=curriculumTopics.find(t=>t.id===alias.sourceTopicId);
  const target=curriculumTopics.find(t=>t.id===alias.targetTopicId);
  assert.ok(source,'Unregistered canonical source: '+alias.sourceTitle);
  assert.ok(target,'Unregistered historical target: '+alias.targetTitle);
  assert.equal(source.subject,alias.subject);
  assert.equal(source.topic,alias.sourceTitle);
  assert.equal(target.subject,alias.subject);
  assert.equal(target.topic,alias.targetTitle);
  assert.ok(alias.rationale.trim().length>60,'Scope justification required');
  assert.ok(alias.exams.length>0);
  for(const exam of alias.exams){
   const key=exam+'\0'+target.id;
   assert.ok(!seen.has(key),'Conflicting semantic aliases for '+key);
   seen.add(key);
   assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic),
    'Alias grants unregistered exam membership: '+key);
   const resolved=canonicalLessonForExam(exam,target);
   assert.ok(resolved,'Approved alias has no deep lesson: '+key);
   assert.equal(resolved.id,source.id);
  }
 }
});

test('canonical mappings never grant scope outside the blueprint or create conflicting source IDs',()=>{
 const mappings=canonicalExamTopicMappings();
 const seen=new Set<string>();
 for(const row of mappings){
  const key=row.exam+'\0'+row.examTopicId;
  assert.ok(!seen.has(key),'Duplicate exam-topic mapping: '+key);
  seen.add(key);
  const target=curriculumTopics.find(t=>t.id===row.examTopicId);
  assert.ok(target);
  assert.ok(examBlueprints[row.exam].subjects[target.subject]?.includes(target.topic));
  assert.equal(row.lesson.id,row.canonicalId);
  assert.strictEqual(canonicalLessonForExam(row.exam,target),row.lesson);
 }
 for(const alias of reviewedSemanticAliases){
  const target=curriculumTopics.find(t=>t.id===alias.targetTopicId)!;
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   if(alias.exams.includes(exam))continue;
   assert.ok(!mappings.some(row=>row.exam===exam&&row.examTopicId===target.id&&
    row.mappingKind==='reviewed-semantic'&&row.canonicalId===alias.sourceTopicId),
    'Alias leaked to unapproved exam: '+exam);
  }
 }
});

test('partial associations remain explicitly incomplete, never promoted by this registry',()=>{
 for(const partial of reviewedPartialAssociations){
  assert.ok(partial.coveredScope.trim());
  assert.ok(partial.missingScope.trim());
  assert.notEqual(partial.coveredScope,partial.missingScope);
  assert.ok(!reviewedSemanticAliases.some(alias=>
   alias.subject===partial.subject&&alias.targetTitle===partial.targetTitle&&
   alias.sourceTitle===partial.sourceTitle),
   'Partial overlap was incorrectly approved as full semantic equivalence');
 }
});
