import test from 'node:test';
import assert from 'node:assert/strict';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

/**
 * Machine-readable ENEM-first snapshot from the actual checked-out commit.
 * Editorial topic IDs are not Inep skill IDs. This test reports evidence,
 * never promotes advisory references to full coverage.
 */
test('emit reproducible ENEM-first audit with subject-level reconciliation', () => {
  const audit = enemCanonicalPriorityAudit();
  const fullIds = new Set(audit.fullCanonicalMappings.map(row => row.examTopicId));
  const missingIds = new Set(audit.priorityQueue.map(row => row.topicId));
  assert.equal(fullIds.size, audit.deep, 'duplicate full exam-topic links');
  assert.equal(missingIds.size, audit.missing, 'duplicate gap IDs');
  for (const id of fullIds) assert.ok(!missingIds.has(id), 'full link also marked missing: ' + id);
  assert.equal(audit.deep + audit.missing, audit.topics);
  assert.equal(audit.subjects.reduce((n, row) => n + row.total, 0), audit.topics);
  assert.equal(audit.subjects.reduce((n, row) => n + row.deep, 0), audit.deep);
  assert.equal(audit.subjects.reduce((n, row) => n + row.missing, 0), audit.missing);
  assert.equal(audit.partialOnlyTopics,
    audit.priorityQueue.filter(row => row.advisorySources.length > 0).length);
  assert.ok(audit.fullLinksSharedWithOtherExams <= audit.deep);
  assert.ok(audit.approvedSemanticLinks <= audit.deep);

  const report = {
    source: audit.source,
    officialInepSkillsCertified: false,
    entries: audit.topics,
    distinctExactTitles: audit.distinctExactTitles,
    uniqueDeepCanonicalLessons: audit.uniqueDeepCanonicalLessons,
    fullLinks: audit.deep,
    reviewedSemanticLinks: audit.approvedSemanticLinks,
    fullLinksSharedWithOtherExams: audit.fullLinksSharedWithOtherExams,
    partialAdvisoryLinks: audit.partialAdvisoryLinks,
    partialOnlyTopics: audit.partialOnlyTopics,
    unresolvedPartialCandidates: audit.unresolvedPartialCandidates,
    missing: audit.missing,
    persistedDuplicatesDeleted: audit.persistedDuplicatesDeleted,
    bySubject: audit.subjects,
    fullCanonicalMappings: audit.fullCanonicalMappings,
    priorityQueue: audit.priorityQueue
  };
  // Keep output untruncated: the run log is the auditable snapshot for this SHA.
  process.stdout.write('KOGNOS_ENEM_FIRST_AUDIT ' + JSON.stringify(report) + '\n');
});
