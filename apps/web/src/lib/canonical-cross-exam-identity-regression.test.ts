import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings, canonicalLessonForExam, semanticReviewQueue,
} from './canonical-lesson-reuse.ts';

/** Regression: one authored object per canonical source, without cross-exam leakage.
 * Editorial exam membership is not an official Inep skills equivalence.
 */
test('shared canonical lessons retain object identity and never leak to unrelated exams', () => {
  const mappings = canonicalExamTopicMappings();
  const byCanonical = new Map<string, typeof mappings>();
  for (const mapping of mappings) {
    const group = byCanonical.get(mapping.canonicalId) ?? [];
    group.push(mapping);
    byCanonical.set(mapping.canonicalId, group);
    assert.equal(mapping.lesson.id, mapping.canonicalId);
  }
  let crossExamGroups = 0;
  for (const group of byCanonical.values()) {
    const exams = new Set(group.map(row => row.exam));
    if (exams.size > 1) crossExamGroups++;
    for (const row of group) {
      assert.strictEqual(row.lesson, group[0].lesson,
        'A canonical source must be one shared authored object');
    }
  }
  assert.ok(crossExamGroups > 0, 'Expected existing cross-exam reuse');
  const allExams = Object.keys(examBlueprints) as ExamId[];
  for (const topic of curriculumTopics) {
    for (const exam of allExams) {
      if (examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)) continue;
      assert.equal(canonicalLessonForExam(exam, topic), null,
        'An unrelated exam must not inherit an authored lesson');
    }
  }
});

test('partial ENEM references remain advisory unless independently covered', () => {
  const mappings = canonicalExamTopicMappings();
  const full = new Set(mappings.map(row => row.exam + '\\0' + row.examTopicId));
  const partials = semanticReviewQueue().filter(row => row.exam === 'enem');
  assert.ok(partials.length > 0, 'Expected ENEM advisory references');
  for (const row of partials) {
    assert.equal(row.eligibleForFullAlias, false);
    assert.ok(row.missingScope.trim().length > 0);
    assert.notEqual(row.targetTopicId, row.sourceCanonicalId);
    // If the target has a full mapping, it must be independently approved,
    // never inferred from the advisory source.
    const targetFull = mappings.find(mapping =>
      mapping.exam === row.exam && mapping.examTopicId === row.targetTopicId);
    if (full.has(row.exam + '\\0' + row.targetTopicId)) {
      assert.ok(targetFull);
      assert.notEqual(targetFull?.mappingKind, undefined);
    }
  }
});
