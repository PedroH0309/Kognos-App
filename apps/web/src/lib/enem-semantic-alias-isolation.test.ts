import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalLessonForExam, canonicalExamTopicMappings,
  reviewedSemanticAliases, reviewedCanonicalAliasForExam,
  semanticReviewQueue
} from './canonical-lesson-reuse.ts';

/** Regression: explicit semantic approvals are exam-scoped and reuse one authored object. */
test('reviewed ENEM semantic aliases resolve the same canonical object without exam leakage', () => {
  const mappings = canonicalExamTopicMappings();
  for (const alias of reviewedSemanticAliases) {
    const target = curriculumTopics.find(topic => topic.id === alias.targetTopicId);
    const source = curriculumTopics.find(topic => topic.id === alias.sourceTopicId);
    assert.ok(target && source, 'Alias must reference two real historical topics');
    assert.notEqual(target.id, source.id);
    assert.equal(target.subject, source.subject);
    for (const exam of Object.keys(examBlueprints) as ExamId[]) {
      const registered = Boolean(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
      const approved = alias.exams.includes(exam);
      const resolved = reviewedCanonicalAliasForExam(exam, target);
      if (!registered || !approved) {
        assert.equal(resolved, null, 'Unapproved exam inherited semantic alias: ' + exam);
        continue;
      }
      assert.ok(resolved, 'Approved semantic alias failed: ' + exam);
      assert.equal(resolved.canonicalId, source.id);
      assert.equal(resolved.examTopicId, target.id);
      assert.strictEqual(resolved.lesson, canonicalLessonForExam(exam, source) ??
        mappings.find(link => link.canonicalId === source.id)?.lesson,
        'Alias must share the authored canonical source object');
      const full = mappings.find(link => link.exam === exam && link.examTopicId === target.id);
      assert.ok(full);
      assert.equal(full.canonicalId, source.id);
      assert.strictEqual(full.lesson, resolved.lesson);
    }
  }
});

test('ENEM partial references never create full aliases from their advisory sources', () => {
  const mappings = canonicalExamTopicMappings().filter(link => link.exam === 'enem');
  const advisory = semanticReviewQueue().filter(ref => ref.exam === 'enem');
  for (const ref of advisory) {
    assert.equal(ref.eligibleForFullAlias, false);
    assert.ok(ref.coveredScope.trim() && ref.missingScope.trim());
    assert.ok(!mappings.some(link =>
      link.examTopicId === ref.targetTopicId &&
      link.canonicalId === ref.sourceCanonicalId &&
      link.mappingKind === 'reviewed-semantic'),
      'Partial reference was silently promoted to a full semantic link');
  }
});
