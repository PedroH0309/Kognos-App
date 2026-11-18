import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalAuthoringBacklog, canonicalExamTopicMappings,
  canonicalLessonForExam, semanticReviewQueue
} from './canonical-lesson-reuse.ts';

/** Editorial prioritization is not an Inep competency/skill equivalence. */
test('ENEM-first backlog is complete, unique and ordered by cross-exam impact', () => {
  const mappings = canonicalExamTopicMappings();
  const mapped = new Set(mappings.map(m => JSON.stringify([m.exam, m.examTopicId])));
  const backlog = canonicalAuthoringBacklog();
  const topicById = new Map(curriculumTopics.map(t => [t.id, t]));
  assert.equal(new Set(backlog.map(t => t.topicId)).size, backlog.length);
  let reachedOtherExams = false;
  let previousImpact = Infinity;
  for (const item of backlog) {
    const topic = topicById.get(item.topicId);
    assert.ok(topic, 'Backlog must retain a real historical topic ID');
    assert.equal(item.subject, topic.subject);
    assert.equal(item.title, topic.topic);
    assert.equal(item.examCount, item.missingExams.length);
    assert.ok(item.examCount > 0);
    const isEnem = item.missingExams.includes('enem');
    if (!isEnem) reachedOtherExams = true;
    assert.ok(!(reachedOtherExams && isEnem), 'ENEM gaps must precede other exams');
    if (isEnem) {
      assert.ok(item.examCount <= previousImpact, 'Within ENEM, prioritize cross-exam impact');
      previousImpact = item.examCount;
    }
    for (const exam of item.missingExams) {
      assert.ok(examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
      assert.ok(!mapped.has(JSON.stringify([exam, item.topicId])));
      assert.equal(canonicalLessonForExam(exam, topic), null);
    }
    assert.equal(item.hasPartialReference, item.advisorySourceIds.length > 0);
  }
  const expected = curriculumTopics.filter(topic =>
    (Object.keys(examBlueprints) as ExamId[]).some(exam =>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic) &&
      !mapped.has(JSON.stringify([exam, topic.id]))));
  assert.deepEqual(new Set(backlog.map(t => t.topicId)), new Set(expected.map(t => t.id)));
  const partials = semanticReviewQueue();
  for (const partial of partials) {
    assert.equal(partial.eligibleForFullAlias, false);
    if (!mapped.has(JSON.stringify([partial.exam, partial.targetTopicId]))) {
      assert.ok(backlog.some(row => row.topicId === partial.targetTopicId));
    }
  }
  process.stdout.write('KOGNOS_ENEM_FIRST_BACKLOG ' + JSON.stringify({
    provenance: 'Kognos editorial blueprints; no official Inep skill mapping inferred',
    pendingUniqueTopicIds: backlog.length,
    enemPendingUniqueTopicIds: backlog.filter(t => t.missingExams.includes('enem')).length,
    otherPendingUniqueTopicIds: backlog.filter(t => !t.missingExams.includes('enem')).length,
    enemCrossExamCandidates: backlog.filter(t => t.missingExams.includes('enem') && t.examCount > 1).length,
    enemPartialComplementCandidates: backlog.filter(t => t.missingExams.includes('enem') && t.hasPartialReference).length,
    topEnemCandidates: backlog.filter(t => t.missingExams.includes('enem')).slice(0, 20).map(t => ({
      topicId: t.topicId, subject: t.subject, title: t.title,
      missingExams: t.missingExams, advisorySourceIds: t.advisorySourceIds
    }))
  }) + '\n');
});
