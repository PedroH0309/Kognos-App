import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  verifiedCanonicalLessonLinks, canonicalLessonForExam,
  canonicalExamTopicMappings, canonicalCoverageByExam,
  provaoPartialReferencesByExam
} from './canonical-lesson-reuse.ts';

/** Runtime evidence: shared editorial entries point to one authored object. */
test('every exact-scope shared group resolves the identical canonical lesson across all listed exams',()=>{
  const mappings=canonicalExamTopicMappings();
  for(const group of verifiedCanonicalLessonLinks()){
    assert.ok(group.exams.length>=2);
    const topic=curriculumTopics.find(item=>item.id===group.canonicalId);
    assert.ok(topic);
    assert.equal(group.lesson.id,topic.id);
    assert.equal(group.examTopicRefs.length,group.exams.length);
    for(const exam of group.exams){
      assert.ok(examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
      const runtime=canonicalLessonForExam(exam,topic);
      assert.strictEqual(runtime,group.lesson);
      const mapping: (typeof mappings)[number] | undefined = mappings.find(row=>row.exam===exam&&row.examTopicId===topic.id);
      assert.ok(mapping);
      assert.strictEqual(mapping.lesson,group.lesson);
      assert.equal(mapping.mappingKind,'exact');
      assert.equal(mapping.canonicalId,topic.id);
    }
    for(const exam of Object.keys(examBlueprints) as ExamId[]){
      if(group.exams.includes(exam))continue;
      assert.equal(canonicalLessonForExam(exam,topic),null,
        'a non-member exam must never inherit a shared lesson');
    }
  }
});

test('partial references never grant full coverage or rewrite historical topic IDs',()=>{
  const partials=provaoPartialReferencesByExam();
  const mappings=canonicalExamTopicMappings();
  const coverage=canonicalCoverageByExam();
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
    for(const ref of partials[exam]){
      assert.equal(ref.fullyCovered,false);
      assert.notEqual(ref.examTopicId,ref.canonicalId);
      assert.equal(ref.lesson.id,ref.canonicalId);
      const target=curriculumTopics.find(topic=>topic.id===ref.examTopicId);
      assert.ok(target);
      assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
      const resolved=canonicalLessonForExam(exam,target);
      // An independent complete lesson may exist, but this advisory reference
      // must never be used as the reason for counting the broader target.
      assert.notEqual(mappings.find(row=>row.exam===exam&&
        row.examTopicId===target.id)?.canonicalId,ref.canonicalId);
      assert.equal(coverage[exam].missingTopicIds.includes(target.id),!resolved);
    }
  }
});
