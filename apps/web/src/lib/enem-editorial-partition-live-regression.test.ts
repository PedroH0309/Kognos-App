import test from 'node:test';
import assert from 'node:assert/strict';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';
import {canonicalExamTopicMappings} from './canonical-lesson-reuse.ts';
import {curriculumTopics} from './curriculum-catalog.ts';

/** Derived invariants only: never hard-code historical CI counts as live coverage. */
test('ENEM editorial partition and canonical reuse agree without promoting partials', () => {
  const audit = enemCanonicalPriorityAudit();
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const ids = new Set(topics.map(topic => topic.id));
  const mappings = canonicalExamTopicMappings();
  const enemMappings = mappings.filter(mapping => mapping.exam === 'enem');
  const mappedIds = new Set(enemMappings.map(mapping => mapping.examTopicId));
  const canonicalIds = new Set(enemMappings.map(mapping => mapping.canonicalId));

  assert.equal(ids.size, topics.length, 'ENEM editorial IDs must be unique');
  assert.equal(audit.topics, topics.length);
  assert.equal(audit.distinctExactTitles, new Set(topics.map(topic => topic.topic)).size);
  assert.equal(audit.deep, enemMappings.length);
  assert.equal(audit.missing, topics.length - mappedIds.size);
  assert.equal(mappedIds.size, enemMappings.length, 'No exam topic can resolve twice');
  assert.equal(audit.uniqueDeepCanonicalLessons, canonicalIds.size);
  assert.equal(audit.scopeReviewPending, enemMappings.length);
  assert.equal(audit.pedagogicallyVerifiedFullLinks, null);
  assert.equal(audit.persistedDuplicatesDeleted, 0);

  for (const mapping of enemMappings) {
    assert.ok(ids.has(mapping.examTopicId), 'No inherited mapping from another exam');
  }
  assert.equal(audit.priorityQueue.length, audit.missing);
  assert.equal(new Set(audit.priorityQueue.map(row => row.topicId)).size, audit.missing);
  for (const row of audit.priorityQueue) {
    assert.ok(ids.has(row.topicId));
    assert.ok(!mappedIds.has(row.topicId), 'Partial advice must not count as full coverage');
    for (const source of row.advisorySources) {
      assert.equal(source.fullyCovered, false);
      assert.ok(source.missingScope.trim().length > 0);
    }
  }
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.total, 0), audit.topics);
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.deep, 0), audit.deep);
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.missing, 0), audit.missing);
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.scopeReviewPending, 0), audit.scopeReviewPending);

  const shared = enemMappings.filter(row => mappings.some(other =>
    other.exam !== 'enem' && other.canonicalId === row.canonicalId));
  assert.equal(audit.fullLinksSharedWithOtherExams, shared.length);
});
