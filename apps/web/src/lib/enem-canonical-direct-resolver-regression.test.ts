import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalLessonForExam, canonicalExamTopicMappings,
  reviewedCanonicalAliasForExam, semanticReviewQueue,
} from './canonical-lesson-reuse.ts';

/** Regression: a public resolver must not grant deep content from a forged
 * historical ID, a renamed title, or a topic outside the requested exam.
 * These checks cover direct calls, not just pre-filtered audit snapshots.
 */
test('direct canonical resolver rejects forged and out-of-exam topics', () => {
  const exams = Object.keys(examBlueprints) as ExamId[];
  const mappings = canonicalExamTopicMappings();
  assert.ok(mappings.length > 0, 'Expected at least one authored canonical mapping');
  for (const mapping of mappings) {
    const topic = curriculumTopics.find(item => item.id === mapping.examTopicId);
    assert.ok(topic);
    const original = canonicalLessonForExam(mapping.exam, topic);
    assert.ok(original);
    assert.strictEqual(original, mapping.lesson);
    assert.strictEqual(canonicalLessonForExam(mapping.exam, topic), original,
      'Repeated resolutions must return the same authored object');
    assert.equal(canonicalLessonForExam(mapping.exam, {...topic, id: topic.id + '-forged'}), null);
    assert.equal(canonicalLessonForExam(mapping.exam, {...topic, topic: topic.topic + ' (alterado)'}), null);
    for (const exam of exams) {
      if (!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)) {
        assert.equal(canonicalLessonForExam(exam, topic), null,
          'An unrelated exam must not inherit a deep lesson');
        assert.equal(reviewedCanonicalAliasForExam(exam, topic), null,
          'An unrelated exam must not inherit a semantic alias');
      }
    }
  }
});

test('partial ENEM sources remain advisory and cannot change integral coverage', () => {
  const before = canonicalExamTopicMappings().filter(link => link.exam === 'enem');
  const signature = before.map(link => [link.examTopicId, link.canonicalId, link.mappingKind]);
  const partials = semanticReviewQueue().filter(row => row.exam === 'enem');
  for (const partial of partials) {
    assert.equal(partial.eligibleForFullAlias, false);
    assert.ok(partial.coveredScope.trim());
    assert.ok(partial.missingScope.trim());
    const target = curriculumTopics.find(topic => topic.id === partial.targetTopicId);
    assert.ok(target?.exams.includes('enem'));
    const sourceIsOnlyAdvisory = !before.some(link =>
      link.examTopicId === partial.targetTopicId &&
      link.canonicalId === partial.sourceCanonicalId &&
      link.mappingKind === 'reviewed-semantic');
    assert.ok(sourceIsOnlyAdvisory, 'Partial overlap must not be a reviewed integral alias');
  }
  assert.deepEqual(
    canonicalExamTopicMappings().filter(link => link.exam === 'enem')
      .map(link => [link.examTopicId, link.canonicalId, link.mappingKind]),
    signature,
    'Reading partial references must not mutate integral coverage',
  );
});
