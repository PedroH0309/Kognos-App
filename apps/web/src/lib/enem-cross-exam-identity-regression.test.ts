import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings,
  canonicalLessonForExam,
  reviewedSemanticAliases,
  semanticReviewQueue
} from './canonical-lesson-reuse.ts';

/**
 * ENEM-first cross-exam identity contract.
 * Editorial memberships are not official Inep competency mappings.
 * One canonical authored object must be reused, never cloned.
 */
test('ENEM canonical lessons share object identity only with registered full-scope exams', () => {
  const mappings = canonicalExamTopicMappings();
  const enem = mappings.filter(row => row.exam === 'enem');
  const exams = Object.keys(examBlueprints) as ExamId[];
  const byCanonical = new Map<string, typeof mappings>();
  for (const row of mappings) {
    const group = byCanonical.get(row.canonicalId) ?? [];
    group.push(row);
    byCanonical.set(row.canonicalId, group);
  }
  let shared = 0;
  for (const row of enem) {
    const topic = curriculumTopics.find(item => item.id === row.examTopicId);
    assert.ok(topic, 'ENEM mapping must retain a registered historical ID');
    assert.strictEqual(canonicalLessonForExam('enem', topic), row.lesson);
    assert.equal(row.lesson.id, row.canonicalId);
    const group = byCanonical.get(row.canonicalId) ?? [];
    for (const sibling of group) {
      assert.strictEqual(sibling.lesson, row.lesson,
        'cross-exam canonical source must be the identical authored object');
    }
    if (group.some(sibling => sibling.exam !== 'enem')) shared++;
    for (const exam of exams) {
      if (examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)) continue;
      assert.equal(canonicalLessonForExam(exam, topic), null,
        'unregistered exam must not inherit an ENEM lesson');
    }
  }
  assert.ok(shared > 0, 'expected actual shared ENEM lessons, not a vacuous check');
});

test('ENEM partial references never grant full aliases or leak into unrelated exams', () => {
  const mappings = canonicalExamTopicMappings();
  const full = new Set(mappings.filter(row => row.exam === 'enem').map(row => row.examTopicId));
  const references = semanticReviewQueue().filter(row => row.exam === 'enem');
  assert.ok(references.length > 0, 'expected actionable partial ENEM references');
  for (const ref of references) {
    assert.equal(ref.eligibleForFullAlias, false);
    assert.ok(ref.coveredScope.trim());
    assert.ok(ref.missingScope.trim());
    if (!full.has(ref.targetTopicId)) {
      assert.ok(!mappings.some(row =>
        row.exam === 'enem' && row.examTopicId === ref.targetTopicId));
    }
  }
  for (const alias of reviewedSemanticAliases) {
    for (const exam of alias.exams) {
      assert.ok(examBlueprints[exam].subjects[alias.subject]?.includes(alias.targetTitle),
        'reviewed alias cannot authorize an exam lacking the editorial topic');
    }
  }
});
