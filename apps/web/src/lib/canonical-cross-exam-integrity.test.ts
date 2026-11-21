import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings, canonicalCoverageByExam,
  reviewedSemanticAliases, semanticReviewQueue
} from './canonical-lesson-reuse.ts';

/** Audit all registered exams, not just ENEM, without guessing semantic equivalence. */
test('all exam-topic links are unique, registered, and share their canonical source object', () => {
  const mappings = canonicalExamTopicMappings();
  const seen = new Set<string>();
  const canonicalObjects = new Map<string, unknown>();
  for (const link of mappings) {
    const key = link.exam + '\\0' + link.examTopicId;
    assert.ok(!seen.has(key), 'Duplicate exam-topic link: ' + key);
    seen.add(key);
    const topic = curriculumTopics.find(t => t.id === link.examTopicId);
    assert.ok(topic, 'Unknown historical topic: ' + key);
    assert.ok(examBlueprints[link.exam].subjects[topic.subject]?.includes(topic.topic),
      'Exam inherited an unregistered topic: ' + key);
    assert.equal(link.lesson.id, link.canonicalId);
    if (canonicalObjects.has(link.canonicalId)) {
      assert.strictEqual(link.lesson, canonicalObjects.get(link.canonicalId),
        'Canonical source was cloned across exams: ' + link.canonicalId);
    } else {
      canonicalObjects.set(link.canonicalId, link.lesson);
    }
  }
  const coverage = canonicalCoverageByExam();
  for (const exam of Object.keys(examBlueprints) as ExamId[]) {
    const count = mappings.filter(m => m.exam === exam).length;
    assert.equal(count, coverage[exam].deep, 'Deep coverage disagrees with links: ' + exam);
    assert.equal(coverage[exam].total, coverage[exam].deep + coverage[exam].missing);
  }
});

test('semantic approvals are unique and partial advisories never become approved aliases', () => {
  const approved = new Set<string>();
  for (const alias of reviewedSemanticAliases) {
    for (const exam of alias.exams) {
      const key = exam + '\\0' + alias.targetTopicId;
      assert.ok(!approved.has(key), 'Conflicting semantic approval: ' + key);
      approved.add(key);
    }
  }
  for (const partial of semanticReviewQueue()) {
    assert.equal(partial.eligibleForFullAlias, false);
    assert.ok(partial.coveredScope.trim());
    assert.ok(partial.missingScope.trim());
  }
});
