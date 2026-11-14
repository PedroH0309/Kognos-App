import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings,
  canonicalLessonForExam,
  canonicalCoverageByExam,
  semanticReviewQueue
} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

/**
 * Reproducible, current-source inventory. This is Kognos editorial coverage,
 * not a transcription of Inep's official competency/skill matrix.
 */
test('ENEM-first inventory reconciles all registered exams and protects partial scope', () => {
  const audit = enemCanonicalPriorityAudit();
  const coverage = canonicalCoverageByExam();
  const mappings = canonicalExamTopicMappings();
  const advisories = semanticReviewQueue();
  const ids = new Set(curriculumTopics.map(topic => topic.id));
  const exams = Object.keys(examBlueprints) as ExamId[];

  const byExam = exams.map(exam => {
    const topics = curriculumTopics.filter(topic => topic.exams.includes(exam));
    const rows = mappings.filter(row => row.exam === exam);
    const references = advisories.filter(row => row.exam === exam);
    assert.equal(coverage[exam].total, topics.length, exam + ': catalog membership mismatch');
    assert.equal(coverage[exam].deep, rows.length, exam + ': full mapping mismatch');
    assert.equal(coverage[exam].missing, topics.length - rows.length, exam + ': missing mismatch');
    assert.equal(new Set(rows.map(row => row.examTopicId)).size, rows.length, exam + ': duplicated full mapping');
    for (const row of rows) {
      assert.ok(ids.has(row.examTopicId), exam + ': unknown historical topic');
      const topic = topics.find(item => item.id === row.examTopicId);
      assert.ok(topic, exam + ': mapping inherited by unrelated exam');
      assert.strictEqual(canonicalLessonForExam(exam, topic), row.lesson);
      assert.equal(row.lesson.id, row.canonicalId);
    }
    for (const ref of references) {
      assert.equal(ref.eligibleForFullAlias, false);
      assert.ok(ref.missingScope.trim().length > 20, exam + ': missing scope must be documented');
      assert.ok(topics.some(topic => topic.id === ref.targetTopicId), exam + ': advisory outside exam');
    }
    return {
      exam,
      entries: topics.length,
      distinctExactTitles: new Set(topics.map(topic => topic.topic)).size,
      deep: rows.length,
      uniqueDeepCanonicalLessons: new Set(rows.map(row => row.canonicalId)).size,
      reviewedSemanticLinks: rows.filter(row => row.mappingKind === 'reviewed-semantic').length,
      advisoryLinks: references.length,
      partialOnlyTopics: new Set(references.filter(ref =>
        !rows.some(row => row.examTopicId === ref.targetTopicId)
      ).map(ref => ref.targetTopicId)).size,
      missing: topics.length - rows.length
    };
  });

  const enem = byExam.find(row => row.exam === 'enem');
  assert.ok(enem);
  assert.equal(audit.topics, enem.entries);
  assert.equal(audit.distinctExactTitles, enem.distinctExactTitles);
  assert.equal(audit.deep, enem.deep);
  assert.equal(audit.missing, enem.missing);
  assert.equal(audit.uniqueDeepCanonicalLessons, enem.uniqueDeepCanonicalLessons);
  assert.equal(audit.approvedSemanticLinks, enem.reviewedSemanticLinks);
  assert.equal(audit.partialAdvisoryLinks, enem.advisoryLinks);
  assert.equal(audit.partialOnlyTopics, enem.partialOnlyTopics);

  console.log('KOGNOS_CROSS_EXAM_AUDIT ' + JSON.stringify({
    source: 'runtime editorial catalog and canonical registry',
    officialInepSkillCoverageClaimed: false,
    persistedDuplicatesDeleted: 0,
    enem: {
      ...enem,
      bySubject: audit.subjects,
      fullLinksSharedWithOtherExams: audit.fullLinksSharedWithOtherExams,
      unresolvedPartialCandidates: audit.unresolvedPartialCandidates
    },
    otherExams: byExam.filter(row => row.exam !== 'enem')
  }));
});
