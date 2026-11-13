import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam, canonicalExamTopicMappings, reviewedSemanticAliases, canonicalCoverageByExam} from './canonical-lesson-reuse.ts';

/** Regression of real, explicitly approved cross-title reuse; never a fuzzy match. */
test('approved cross-title aliases reuse the same authored object and preserve historical IDs', () => {
  const mappings = canonicalExamTopicMappings();
  for (const alias of reviewedSemanticAliases) {
    const source = curriculumTopics.find(t => t.id === alias.sourceTopicId);
    const target = curriculumTopics.find(t => t.id === alias.targetTopicId);
    assert.ok(source && target, 'approved alias must resolve two historical topics');
    assert.notEqual(source.id, target.id);
    assert.equal(source.subject, target.subject);
    assert.ok(alias.rationale.trim().length > 40, 'document reviewed scope');
    for (const exam of alias.exams) {
      assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
      const lesson = canonicalLessonForExam(exam, target);
      assert.ok(lesson, `approved alias must resolve: ${exam} / ${target.topic}`);
      assert.equal(lesson.id, source.id, 'canonical ID belongs to authored source');
      const row: (typeof mappings)[number] | undefined = mappings.find(m => m.exam === exam && m.examTopicId === target.id);
      assert.ok(row);
      assert.equal(row.mappingKind, 'reviewed-semantic');
      assert.strictEqual(row.lesson, lesson, 'same object, not a clone');
      assert.equal(row.canonicalId, source.id);
    }
    for (const exam of Object.keys(examBlueprints) as ExamId[]) {
      if (alias.exams.includes(exam)) continue;
      const row: (typeof mappings)[number] | undefined = mappings.find(m => m.exam === exam && m.examTopicId === target.id);
      assert.notEqual(row?.mappingKind, 'reviewed-semantic',
        'non-approved exams must not inherit semantic alias');
    }
  }
});

test('coverage is counted by distinct exam-topic memberships, not aliases or shared object count', () => {
  const rows = canonicalExamTopicMappings();
  const coverage = canonicalCoverageByExam();
  for (const exam of Object.keys(examBlueprints) as ExamId[]) {
    const examRows = rows.filter(row => row.exam === exam);
    assert.equal(coverage[exam].deep, examRows.length);
    assert.equal(new Set(examRows.map(row => row.examTopicId)).size, examRows.length);
    assert.equal(coverage[exam].total, coverage[exam].deep + coverage[exam].missing);
    assert.equal(coverage[exam].missingTopicIds.length, coverage[exam].missing);
  }
});
