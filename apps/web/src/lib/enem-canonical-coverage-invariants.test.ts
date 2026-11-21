import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalCoverageByExam, canonicalExamTopicMappings,
  canonicalLessonForExam, partialCoverageByExam,
  provaoPartialReferencesByExam, reviewedSemanticAliases,
  semanticReviewQueue,
} from './canonical-lesson-reuse.ts';

/** ENEM-first coverage guard. Editorial topics are NOT official Inep skills. */
test('ENEM discipline inventory reconciles full, missing and canonical links', () => {
  const exam:ExamId = 'enem';
  const topics = curriculumTopics.filter(topic =>
    examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
  const mappings = canonicalExamTopicMappings().filter(row => row.exam === exam);
  const coverage = canonicalCoverageByExam()[exam];
  assert.equal(coverage.total, topics.length);
  assert.equal(coverage.deep + coverage.missing, coverage.total);
  assert.equal(mappings.length, coverage.deep);
  assert.equal(new Set(topics.map(topic => topic.id)).size, topics.length);
  assert.equal(new Set(mappings.map(row => row.examTopicId)).size, mappings.length);
  assert.equal(new Set(mappings.map(row => row.canonicalId)).size, coverage.canonicalIds.length);
  const mapped = new Set(mappings.map(row => row.examTopicId));
  const missing = new Set(coverage.missingTopicIds);
  assert.equal(missing.size, coverage.missing);
  for (const topic of topics) {
    assert.notEqual(mapped.has(topic.id), missing.has(topic.id),
      'Each registered ENEM topic must be either deep or missing, never both');
    assert.equal(Boolean(canonicalLessonForExam(exam, topic)), mapped.has(topic.id));
  }
  for (const subject of Object.keys(examBlueprints[exam].subjects)) {
    const subjectTopics = topics.filter(topic => topic.subject === subject);
    const deep = subjectTopics.filter(topic => mapped.has(topic.id)).length;
    const gaps = subjectTopics.filter(topic => missing.has(topic.id)).length;
    assert.equal(deep + gaps, subjectTopics.length, 'Discipline totals must reconcile');
  }
});

test('advisory overlaps never become implicit full aliases', () => {
  const exam:ExamId = 'enem';
  const advisory = [
    ...partialCoverageByExam()[exam],
    ...provaoPartialReferencesByExam()[exam],
  ];
  const queue = semanticReviewQueue().filter(item => item.exam === exam);
  const reviewed = reviewedSemanticAliases.filter(alias => alias.exams.includes(exam));
  for (const item of advisory) {
    assert.equal(item.fullyCovered, false);
    assert.ok(item.coveredScope.trim());
    assert.ok(item.missingScope.trim());
    assert.notEqual(item.examTopicId, item.canonicalId);
    const topic = curriculumTopics.find(row => row.id === item.examTopicId);
    assert.ok(topic, 'Advisory target must be a registered topic');
    const full = topic && canonicalLessonForExam(exam, topic);
    if (full) {
      assert.notEqual(full.id, item.canonicalId,
        'An advisory source cannot silently become the target full lesson');
    }
  }
  for (const item of queue) {
    assert.equal(item.eligibleForFullAlias, false);
    assert.ok(item.missingScope.trim());
  }
  for (const alias of reviewed) {
    assert.ok(alias.rationale.trim());
    assert.ok(alias.exams.length > 0);
  }
});
