import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings,
  semanticReviewQueue,
  unresolvedPartialCandidates,
  canonicalLessonForExam
} from './canonical-lesson-reuse.ts';

/**
 * An unresolved overlap must never be silently promoted to a full alias.
 * This is a conservative editorial gate, not certification of Inep skills.
 */
test('unresolved partial candidates retain explicit blockers and no inferred full coverage', () => {
  const topicsById = new Map(curriculumTopics.map(topic => [topic.id, topic]));
  const full = new Set(canonicalExamTopicMappings().map(row => row.exam + ':' + row.examTopicId));
  const exams = Object.keys(examBlueprints) as ExamId[];
  for (const candidate of unresolvedPartialCandidates()) {
    assert.ok(candidate.missingScope.trim(), 'missing pedagogical complement');
    assert.ok(candidate.blockers.length > 0, 'unresolved candidate without blocker');
    assert.equal(candidate.eligibleForFullAlias, false);
    if (!candidate.targetTopicId) continue;
    const target = topicsById.get(candidate.targetTopicId);
    assert.ok(target, 'candidate target ID is not registered');
    for (const exam of exams) {
      if (!target.exams.includes(exam) || full.has(exam + ':' + target.id)) continue;
      assert.equal(canonicalLessonForExam(exam, target), null,
        exam + ': unresolved partial candidate became a full lesson');
    }
  }
});

test('all advisory references retain scope complements and cannot imply a new full link', () => {
  const topicsById = new Map(curriculumTopics.map(topic => [topic.id, topic]));
  const mappings = canonicalExamTopicMappings();
  const full = new Set(mappings.map(row => row.exam + ':' + row.examTopicId));
  for (const reference of semanticReviewQueue()) {
    const target = topicsById.get(reference.targetTopicId);
    assert.ok(target, 'advisory target must be a registered editorial topic');
    assert.ok(target.exams.includes(reference.exam), 'advisory exam membership must exist');
    assert.equal(reference.eligibleForFullAlias, false);
    assert.ok(reference.coveredScope.trim(), 'advisory must explain covered scope');
    assert.ok(reference.missingScope.trim(), 'advisory must explain missing scope');
    if (!full.has(reference.exam + ':' + reference.targetTopicId)) {
      assert.equal(canonicalLessonForExam(reference.exam, target), null,
        'advisory reference incorrectly grants full coverage');
    }
  }
});
