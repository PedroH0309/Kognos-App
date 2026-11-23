import test from 'node:test';
import assert from 'node:assert/strict';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';
import {canonicalExamTopicMappings} from './canonical-lesson-reuse.ts';
import {curriculumTopics} from './curriculum-catalog.ts';

/** Review queue integrity: editorial technical links are not pedagogical approvals. */
test('ENEM scope queue is a bijection with technical mappings, with exam isolation', () => {
  const audit = enemCanonicalPriorityAudit();
  const links = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  const topics = new Map(curriculumTopics.filter(row => row.exams.includes('enem')).map(row => [row.id, row]));
  const byId = new Map(links.map(row => [row.examTopicId, row]));
  const allMappings = canonicalExamTopicMappings();
  const examCanonicalPairs = new Set(allMappings.map(row => `${row.exam}\u0000${row.canonicalId}`));
  assert.equal(audit.scopeReviewQueue.length, links.length);
  assert.equal(new Set(audit.scopeReviewQueue.map(row => row.examTopicId)).size, links.length);
  assert.equal(audit.scopeReviewPending, audit.scopeReviewQueue.length);
  for (const row of audit.scopeReviewQueue) {
    const link = byId.get(row.examTopicId);
    const topic = topics.get(row.examTopicId);
    assert.ok(link, 'Review queue must not inherit another exam mapping');
    assert.ok(topic, 'Review queue must reference a registered ENEM topic');
    assert.equal(row.canonicalId, link.canonicalId);
    assert.equal(row.mappingKind, link.mappingKind);
    assert.equal(row.subject, topic.subject);
    assert.equal(row.editorialTitle, topic.topic);
    assert.equal(row.status, 'pending-objective-evidence');
    assert.ok(!row.sharedWithExams.includes('enem'));
    assert.equal(new Set(row.sharedWithExams).size, row.sharedWithExams.length);
    for (const exam of row.sharedWithExams) {
      assert.ok(examCanonicalPairs.has(`${exam}\u0000${row.canonicalId}`),
        'Shared exam must really resolve the same canonical source');
    }
  }
  for (const subject of audit.subjects) {
    const entries = audit.scopeReviewQueue.filter(row => row.subject === subject.subject);
    assert.equal(subject.scopeReviewPending, entries.length);
    assert.equal(subject.fullLinksSharedWithOtherExams,
      entries.filter(row => row.sharedWithExams.length > 0).length);
  }
  // A shared canonical source does not prove identical curricular objectives.
  // No technical mapping may be silently promoted into a pedagogical approval.
  assert.equal(audit.pedagogicallyVerifiedFullLinks, null);
  assert.equal(audit.pedagogicalVerificationStatus, 'not-audited');
  assert.ok(audit.scopeReviewQueue.every(row => row.status === 'pending-objective-evidence'));
});
