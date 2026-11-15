import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam, canonicalCoverageByExam, semanticReviewQueue, provaoPartialReferencesByExam} from './canonical-lesson-reuse.ts';
import {deepAuthoredCurriculumLesson, authoredCurriculumSpecs} from './authored-curriculum-lessons.ts';

/** Regression for cross-exam reuse of the authored batches introduced in PR #117.
 * A shared source is one object, never a cloned lesson or inferred official skill.
 */
test('authored ENEM batches share exact-scope canonical objects only with registered exams', () => {
  const mappings = canonicalExamTopicMappings();
  const coverage = canonicalCoverageByExam();
  const exams = Object.keys(examBlueprints) as ExamId[];
  const authoredKeys = new Set(authoredCurriculumSpecs.map(spec => JSON.stringify([spec.subject, spec.topic])));
  const authoredRows = mappings.filter(row => {
    const topic = curriculumTopics.find(topic => topic.id === row.examTopicId);
    return topic && authoredKeys.has(JSON.stringify([topic.subject, topic.topic]));
  });
  assert.ok(authoredRows.length > 0, 'authored batches must enter the canonical mapping');
  const byCanonical = new Map<string, (typeof authoredRows)[number]['lesson']>();
  for (const row of authoredRows) {
    const topic = curriculumTopics.find(topic => topic.id === row.examTopicId);
    assert.ok(topic, 'canonical mapping must refer to a registered historical topic');
    assert.equal(row.canonicalId, topic.id, 'unreviewed cross-title alias must not be inferred');
    const authored = deepAuthoredCurriculumLesson(topic);
    assert.ok(authored, 'authored batch must resolve for its exact registered topic');
    assert.equal(authored.id, row.canonicalId);
    const prior = byCanonical.get(row.canonicalId);
    if (prior) assert.strictEqual(row.lesson, prior, 'shared lesson was cloned between exams');
    else byCanonical.set(row.canonicalId, row.lesson);
    assert.strictEqual(canonicalLessonForExam(row.exam, topic), row.lesson);
    for (const unrelated of exams.filter(exam => !topic.exams.includes(exam))) {
      assert.equal(canonicalLessonForExam(unrelated, topic), null, 'unrelated exam inherited authored lesson');
    }
  }
  for (const exam of exams) {
    const registered = curriculumTopics.filter(topic => topic.exams.includes(exam));
    const linked = mappings.filter(row => row.exam === exam);
    assert.equal(coverage[exam].total, registered.length);
    assert.equal(coverage[exam].deep, linked.length);
    assert.equal(coverage[exam].missing, registered.length - linked.length);
  }
});


test('partial semantic overlaps remain advisory across every registered exam', () => {
  const exams = Object.keys(examBlueprints) as ExamId[];
  const mappings = canonicalExamTopicMappings();
  const mapped = new Set(mappings.map(row => JSON.stringify([row.exam, row.examTopicId, row.canonicalId])));
  const queue = semanticReviewQueue();
  const official = provaoPartialReferencesByExam();
  for (const ref of queue) {
    assert.equal(ref.eligibleForFullAlias, false);
    assert.ok(ref.coveredScope.trim().length > 0);
    assert.ok(ref.missingScope.trim().length > 0, 'partial link must specify missing learning objectives');
    const topic = curriculumTopics.find(topic => topic.id === ref.targetTopicId);
    assert.ok(topic, 'partial target must be registered');
    assert.ok(topic.exams.includes(ref.exam), 'partial target must belong to the exam');
    assert.notEqual(ref.targetTopicId, ref.sourceCanonicalId);
    assert.equal(mapped.has(JSON.stringify([ref.exam, ref.targetTopicId, ref.sourceCanonicalId])), false,
      'a partial source was silently promoted to full canonical coverage');
  }
  for (const exam of exams) {
    for (const ref of official[exam]) {
      assert.equal(ref.fullyCovered, false);
      assert.strictEqual(ref.lesson.id, ref.canonicalId);
      assert.equal(mapped.has(JSON.stringify([exam, ref.examTopicId, ref.canonicalId])), false,
        'an official Provão advisory source was promoted to full coverage');
    }
  }
});
