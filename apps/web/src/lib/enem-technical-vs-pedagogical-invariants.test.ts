import test from 'node:test';
import assert from 'node:assert/strict';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';
import {canonicalExamTopicMappings} from './canonical-lesson-reuse.ts';
import {curriculumTopics} from './curriculum-catalog.ts';

/** Technical resolution is not a pedagogical scope certificate. */
test('ENEM-first audit reconciles all subjects without promoting technical links', () => {
  const audit = enemCanonicalPriorityAudit();
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const mappings = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  assert.equal(audit.topics, topics.length);
  assert.equal(audit.deep, mappings.length);
  assert.equal(audit.deep + audit.missing, audit.topics);
  assert.equal(audit.scopeReviewPending, audit.deep);
  assert.equal(audit.pedagogicallyVerifiedFullLinks, null);
  assert.equal(audit.pedagogicalVerificationStatus, 'not-audited');
  assert.equal(audit.persistedDuplicatesDeleted, 0);
  assert.equal(audit.subjects.reduce((sum, subject) => sum + subject.total, 0), audit.topics);
  assert.equal(audit.subjects.reduce((sum, subject) => sum + subject.deep, 0), audit.deep);
  assert.equal(audit.subjects.reduce((sum, subject) => sum + subject.missing, 0), audit.missing);
  assert.equal(new Set(audit.registeredExamTopicIds).size, audit.topics);
  assert.equal(new Set(audit.fullCanonicalMappings.map(row => row.examTopicId)).size, audit.deep);
  assert.equal(new Set(audit.fullCanonicalMappings.map(row => row.canonicalId)).size, audit.uniqueDeepCanonicalLessons);
  const fullIds = new Set(audit.fullCanonicalMappings.map(row => row.examTopicId));
  assert.equal(audit.priorityQueue.length, audit.missing);
  for (const item of audit.priorityQueue) {
    assert.ok(!fullIds.has(item.topicId), 'An unresolved topic cannot be marked fully mapped');
    for (const advisory of item.advisorySources) {
      assert.equal(advisory.fullyCovered, false);
      assert.ok(advisory.coveredScope.trim());
      assert.ok(advisory.missingScope.trim());
    }
  }
  for (const subject of audit.subjects) {
    assert.equal(subject.deep + subject.missing, subject.total);
    assert.ok(subject.uniqueDeepCanonicalLessons <= subject.deep);
    assert.ok(subject.approvedSemanticLinks <= subject.deep);
  }
});
