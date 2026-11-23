import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {
  reviewedPartialAssociations, semanticReviewQueue,
  canonicalExamTopicMappings, unresolvedPartialCandidates
} from './canonical-lesson-reuse.ts';

/** Editorial overlap descriptions are not official Inep skill mappings. */
test('partial overlap register remains unique, explicit and non-promotional', () => {
  const keys = reviewedPartialAssociations.map(row =>
    JSON.stringify([row.subject, row.targetTitle, row.officialSourceTitle]));
  assert.equal(new Set(keys).size, keys.length,
    'Duplicate descriptions distort triage counts');
  for (const row of reviewedPartialAssociations) {
    assert.ok(row.subject.trim() && row.targetTitle.trim());
    assert.ok(row.sourceTitle.trim() && row.officialSourceTitle.trim());
    assert.ok(row.coveredScope.trim() && row.missingScope.trim());
    assert.notEqual(row.coveredScope.trim(), row.missingScope.trim());
  }
  const queue = semanticReviewQueue();
  const mapping = canonicalExamTopicMappings();
  const topics = new Map(curriculumTopics.map(topic => [topic.id, topic]));
  const queueKeys = queue.map(row =>
    JSON.stringify([row.exam, row.targetTopicId, row.sourceCanonicalId]));
  assert.equal(new Set(queueKeys).size, queue.length,
    'The same advisory source cannot be counted twice for one exam-topic');
  for (const row of queue) {
    const topic = topics.get(row.targetTopicId);
    assert.ok(topic);
    assert.equal(row.subject, topic.subject);
    assert.equal(row.targetTitle, topic.topic);
    assert.ok(examBlueprints[row.exam].subjects[topic.subject]?.includes(topic.topic));
    assert.equal(row.eligibleForFullAlias, false);
    assert.notEqual(row.sourceCanonicalId, row.targetTopicId);
    assert.ok(row.coveredScope.trim() && row.missingScope.trim());
    assert.ok(!mapping.some(full =>
      full.exam === row.exam && full.examTopicId === row.targetTopicId &&
      full.canonicalId === row.sourceCanonicalId &&
      full.mappingKind === 'reviewed-semantic'),
      'An advisory source cannot silently become a full semantic alias');
  }
  for (const row of unresolvedPartialCandidates()) {
    assert.equal(row.eligibleForFullAlias, false);
    assert.ok(row.blockers.length > 0,
      'Unresolved partial candidates must expose a specific blocker');
    assert.ok(row.missingScope.trim());
  }
  process.stdout.write('KOGNOS_PARTIAL_TRIAGE_INTEGRITY ' + JSON.stringify({
    provenance: 'Kognos editorial register, not official Inep equivalence',
    descriptions: reviewedPartialAssociations.length,
    resolvedExamAdvisories: queue.length,
    unresolvedDescriptions: unresolvedPartialCandidates().length,
    newlyApprovedFullAliases: 0
  }) + '\n');
});
