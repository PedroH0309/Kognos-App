import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings,
  canonicalLessonForExam,
  canonicalCoverageByExam,
  semanticReviewQueue,
  canonicalRegistryAudit,
  officialProvaoCanonicalGradeMappings,
  officialProvaoGradeCoverage
} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';
import {provaoTopics} from './provao-paulista.ts';

/**
 * Reproducible, current-source inventory. This is Kognos editorial coverage,
 * not a transcription of Inep's official competency/skill matrix.
 */
test('ENEM-first inventory reconciles all registered exams and protects partial scope', () => {
  const audit = enemCanonicalPriorityAudit();
  const coverage = canonicalCoverageByExam();
  const mappings = canonicalExamTopicMappings();
  const advisories = semanticReviewQueue();
  const registry = canonicalRegistryAudit();
  const officialGrades = officialProvaoGradeCoverage();
  const gradeMappings = officialProvaoCanonicalGradeMappings();
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

  assert.equal(registry.examToLessonLinks, mappings.length);
  assert.equal(registry.persistentDuplicatesDeleted, 0);
  assert.equal(officialGrades.length, 3);
  for (const grade of officialGrades) {
    const leaves = provaoTopics.filter(row => row.grade === grade.grade);
    const deepLeaves = gradeMappings.filter(row => row.grade === grade.grade);
    assert.equal(grade.totalEntries, leaves.length, 'Provão grade inventory mismatch');
    assert.equal(grade.deepEntries, deepLeaves.length, 'Provão deep leaf mismatch');
    assert.equal(grade.missingEntries, leaves.length - deepLeaves.length);
    for (const row of deepLeaves) {
      assert.ok(leaves.some(leaf => leaf.subject === row.subject && leaf.code === row.officialCode && leaf.topic === row.officialTitle), 'Unregistered Provão grade leaf');
      assert.strictEqual(row.lesson.id, row.canonicalId);
    }
  }
  // Independent grade/subject matrix: a broad SARESP editorial membership is
  // not an official Provão leaf, and a grade without the leaf never inherits it.
  const gradeSubjectInventory = ([1, 2, 3] as const).flatMap(grade =>
    [...new Set(provaoTopics.filter(row => row.grade === grade).map(row => row.subject))]
      .sort().map(subject => {
        const leaves = provaoTopics.filter(row => row.grade === grade && row.subject === subject);
        const deepLeaves = gradeMappings.filter(row => row.grade === grade && row.subject === subject);
        const leafKeys = new Set(leaves.map(row => JSON.stringify([row.code, row.topic])));
        assert.equal(leafKeys.size, leaves.length, 'Duplicate official leaf identity in grade/subject');
        for (const row of deepLeaves) {
          assert.ok(leafKeys.has(JSON.stringify([row.officialCode, row.officialTitle])),
            'Deep lesson inherited by an unrelated grade/subject');
        }
        assert.equal(new Set(deepLeaves.map(row => JSON.stringify([row.officialCode, row.officialTitle]))).size,
          deepLeaves.length, 'Duplicate grade-specific canonical mapping');
        return {
          grade, subject, entries: leaves.length,
          distinctExactTitles: new Set(leaves.map(row => row.topic)).size,
          deep: deepLeaves.length,
          uniqueCanonicalDeepLessons: new Set(deepLeaves.map(row => row.canonicalId)).size,
          missing: leaves.length - deepLeaves.length
        };
      })
  );
  for (const grade of officialGrades) {
    const scoped = gradeSubjectInventory.filter(row => row.grade === grade.grade);
    assert.equal(scoped.reduce((sum, row) => sum + row.entries, 0), grade.totalEntries);
    assert.equal(scoped.reduce((sum, row) => sum + row.deep, 0), grade.deepEntries);
    assert.equal(scoped.reduce((sum, row) => sum + row.missing, 0), grade.missingEntries);
  }
  const sharedCanonical = new Map<string, Set<string>>();
  for (const row of mappings) {
    const historicalIds = sharedCanonical.get(row.canonicalId) ?? new Set<string>();
    historicalIds.add(row.examTopicId);
    sharedCanonical.set(row.canonicalId, historicalIds);
  }
  const crossTitleGroups = [...sharedCanonical.values()].filter(ids => ids.size > 1);
  const crossTitleReferencesReused = crossTitleGroups.reduce((sum, ids) => sum + ids.size - 1, 0);
  assert.equal(registry.persistentDuplicatesDeleted, 0,
    'Shared references must never be presented as removed persisted rows');

  // A repeated official leaf shares authored content, not an invented extra lesson.
  const gradeSources = new Map<string, (typeof gradeMappings)[number]['lesson']>();
  for (const row of gradeMappings) {
    const prior = gradeSources.get(row.canonicalId);
    if (prior) assert.strictEqual(row.lesson, prior, 'Grade-specific duplicate lesson object');
    gradeSources.set(row.canonicalId, row.lesson);
  }

  console.log('KOGNOS_CROSS_EXAM_AUDIT ' + JSON.stringify({
    source: 'runtime editorial catalog and canonical registry',
    officialInepSkillCoverageClaimed: false,
    persistedDuplicatesDeleted: registry.persistentDuplicatesDeleted,
    historicalCatalogEntries: registry.catalogEntries,
    distinctExactSubjectTitles: registry.distinctExactSubjectTitles,
    uniqueCanonicalLessonsAcrossCatalogAndOfficialGrades: registry.canonicalUniqueLessons,
    officialProvaoByGrade: officialGrades.map(row => ({grade: row.grade, entries: row.totalEntries, deep: row.deepEntries, missing: row.missingEntries, uniqueDeepCanonicalLessons: row.uniqueCanonicalDeepIds.length})),
    officialProvaoByGradeAndSubject: gradeSubjectInventory,
    crossTitleCanonicalGroups: crossTitleGroups.length,
    crossTitleReferencesReused,
    enem: {
      ...enem,
      bySubject: audit.subjects,
      fullLinksSharedWithOtherExams: audit.fullLinksSharedWithOtherExams,
      unresolvedPartialCandidates: audit.unresolvedPartialCandidates
    },
    otherExams: byExam.filter(row => row.exam !== 'enem')
  }));
});
