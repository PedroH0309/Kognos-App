import {test} from 'node:test';
import assert from 'node:assert/strict';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {
 canonicalLessonForExam,canonicalCoverageByExam,
 provaoPartialReferencesByExam,semanticReviewQueue,
 canonicalExamTopicMappings
} from './canonical-lesson-reuse.ts';

/** Advisory overlap cannot silently become an approved full-coverage alias. */
test('every official-source partial projection is exam-scoped and non-credit-bearing',()=>{
 const projections=provaoPartialReferencesByExam();
 const coverage=canonicalCoverageByExam();
 const mappings=canonicalExamTopicMappings();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  for(const ref of projections[exam]){
   const target=curriculumTopics.find(t=>t.id===ref.examTopicId);
   assert.ok(target,'Advisory target must be a registered historical topic');
   assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
   assert.equal(ref.fullyCovered,false);
   assert.ok(ref.coveredScope.trim().length>0);
   assert.ok(ref.missingScope.trim().length>0);
   assert.equal(ref.lesson.id,ref.canonicalId);
   const direct=canonicalLessonForExam(exam,target);
   if(!direct){
    assert.ok(coverage[exam].missingTopicIds.includes(target.id));
    assert.ok(!mappings.some(m=>m.exam===exam&&m.examTopicId===target.id&&m.canonicalId===ref.canonicalId));
   }
   for(const other of Object.keys(examBlueprints) as ExamId[]){
    if(other===exam)continue;
    if(!examBlueprints[other].subjects[target.subject]?.includes(target.topic)){
     assert.ok(!projections[other].some(r=>r.examTopicId===target.id),
      'Unrelated exam must not inherit an advisory reference');
    }
   }
  }
 }
});

test('semantic review queue preserves explicit missing scope for every partial',()=>{
 const queue=semanticReviewQueue();
 for(const item of queue){
  assert.equal(item.eligibleForFullAlias,false);
  assert.ok(item.missingScope.trim().length>0);
  assert.ok(item.coveredScope.trim().length>0);
  assert.notEqual(item.targetTopicId,item.sourceCanonicalId);
 }
});
