import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalLessonForExam,
  verifiedPartialAssociations,
  unresolvedPartialCandidates,
  reviewedPartialAssociations,
  provaoSourcedPartialReferences,
  canonicalRegistryAudit
} from './canonical-lesson-reuse.ts';

/** Partial evidence is advisory: a deep source does not certify a broader target. */
test('resolved partial sources keep historical IDs and never grant full ENEM coverage', () => {
  const verified = verifiedPartialAssociations();
  const official = provaoSourcedPartialReferences();
  const unresolved = unresolvedPartialCandidates();
  const audit = canonicalRegistryAudit();
  assert.equal(audit.persistentDuplicatesDeleted, 0);
  for (const ref of [...verified, ...official]) {
    assert.notEqual(ref.targetTopicId, ref.canonicalId);
    assert.equal(ref.lesson.id, ref.canonicalId);
    const target = curriculumTopics.find(topic => topic.id === ref.targetTopicId);
    assert.ok(target);
    for (const exam of Object.keys(examBlueprints) as ExamId[]) {
      if (!examBlueprints[exam].subjects[target.subject]?.includes(target.topic)) continue;
      const resolved = canonicalLessonForExam(exam, target);
      assert.notEqual(resolved?.id, ref.canonicalId,
        'Advisory partial source must not be promoted to full coverage: ' + exam + '/' + target.topic);
    }
  }
  for (const candidate of unresolved) {
    assert.equal(candidate.eligibleForFullAlias, false);
    assert.ok(candidate.blockers.length > 0);
    assert.ok(candidate.missingScope.length > 0);
  }
  assert.ok(reviewedPartialAssociations.every(ref => ref.coveredScope.length > 0 && ref.missingScope.length > 0));
});
