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
    const bySubject = [...new Set(topics.map(topic => topic.subject))].sort().map(subject => {
      const subjectTopics = topics.filter(topic => topic.subject === subject);
      const subjectRows = rows.filter(row => subjectTopics.some(topic => topic.id === row.examTopicId));
      const subjectReferences = references.filter(ref =>
        subjectTopics.some(topic => topic.id === ref.targetTopicId)
      );
      const fullyCoveredIds = new Set(subjectRows.map(row => row.examTopicId));
      const partialOnlyIds = new Set(subjectReferences
        .filter(ref => !fullyCoveredIds.has(ref.targetTopicId))
        .map(ref => ref.targetTopicId));
      return {
        subject,
        entries: subjectTopics.length,
        distinctExactTitles: new Set(subjectTopics.map(topic => topic.topic)).size,
        deep: subjectRows.length,
        uniqueDeepCanonicalLessons: new Set(subjectRows.map(row => row.canonicalId)).size,
        reviewedSemanticLinks: subjectRows.filter(row => row.mappingKind === 'reviewed-semantic').length,
        advisoryLinks: subjectReferences.length,
        partialOnlyTopics: partialOnlyIds.size,
        missing: subjectTopics.length - subjectRows.length
      };
    });
    assert.equal(bySubject.reduce((sum, row) => sum + row.entries, 0), topics.length,
      exam + ': subject entry inventory mismatch');
    assert.equal(bySubject.reduce((sum, row) => sum + row.deep, 0), rows.length,
      exam + ': subject deep inventory mismatch');
    assert.equal(bySubject.reduce((sum, row) => sum + row.advisoryLinks, 0), references.length,
      exam + ': subject advisory inventory mismatch');
    assert.equal(bySubject.reduce((sum, row) => sum + row.missing, 0), topics.length - rows.length,
      exam + ': subject missing inventory mismatch');
    return {
      exam,
      bySubject,
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
  // ENEM-first lossless partition: each registered historical topic must be
  // either fully mapped or still present in the actionable missing queue.
  // Advisory sources are not coverage and must never remove a missing topic.
  const enemTopics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const fullIds = new Set(audit.fullCanonicalMappings.map(row => row.examTopicId));
  const pendingIds = new Set(audit.priorityQueue.map(row => row.topicId));
  assert.equal(fullIds.size, audit.deep, 'ENEM full coverage contains repeated historical IDs');
  assert.equal(pendingIds.size, audit.missing, 'ENEM queue contains repeated missing IDs');
  assert.equal(fullIds.size + pendingIds.size, enemTopics.length,
    'ENEM topic inventory is not fully partitioned');
  for (const topic of enemTopics) {
    assert.equal(Number(fullIds.has(topic.id)) + Number(pendingIds.has(topic.id)), 1,
      'ENEM topic must appear in exactly one coverage partition: ' + topic.id);
  }
  for (const pending of audit.priorityQueue) {
    assert.ok(enemTopics.some(topic => topic.id === pending.topicId),
      'ENEM queue contains unregistered topic: ' + pending.topicId);
    for (const advisory of pending.advisorySources) {
      assert.equal(advisory.fullyCovered, false,
        'Partial advisory must not be promoted to full coverage');
      assert.ok(advisory.coveredScope.trim().length > 0);
      assert.ok(advisory.missingScope.trim().length > 20);
      assert.ok(!fullIds.has(pending.topicId),
        'Partial advisory must remain in the missing queue');
    }
  }
  assert.equal(audit.priorityQueue.filter(row => row.advisorySources.length > 0).length,
    audit.partialOnlyTopics, 'Partial-only ENEM topic count diverges from the queue');
  for (const subject of audit.subjects) {
    const inventory: (typeof byExam)[number]['bySubject'][number] | undefined =
      enem.bySubject.find(row => row.subject === subject.subject);
    assert.ok(inventory, 'Missing ENEM subject audit: ' + subject.subject);
    assert.equal(inventory.entries, subject.total);
    assert.equal(inventory.deep, subject.deep);
    assert.equal(inventory.missing, subject.missing);
    assert.equal(inventory.uniqueDeepCanonicalLessons, subject.uniqueDeepCanonicalLessons);
    assert.equal(inventory.reviewedSemanticLinks, subject.approvedSemanticLinks);
    assert.equal(inventory.partialOnlyTopics, subject.partialOnly);
  }

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
  // Cross-exam reuse must preserve object identity, not merely matching IDs.
  // An exam absent from the registered topic memberships must not inherit it.
  const canonicalObjects = new Map<string, (typeof mappings)[number]['lesson']>();
  for (const row of mappings) {
    const existing = canonicalObjects.get(row.canonicalId);
    if (existing) {
      assert.strictEqual(row.lesson, existing,
        'Canonical lesson cloned across exams: ' + row.canonicalId);
    } else {
      canonicalObjects.set(row.canonicalId, row.lesson);
    }
    const topic = curriculumTopics.find(item => item.id === row.examTopicId);
    assert.ok(topic);
    for (const unrelatedExam of exams.filter(exam => !topic.exams.includes(exam))) {
      assert.equal(canonicalLessonForExam(unrelatedExam, topic), null,
        'Unrelated exam inherited canonical lesson: ' + unrelatedExam + '/' + topic.id);
    }
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
import {canonicalExamTopicMappings, canonicalLessonForExam, semanticReviewQueue} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

/** Editorial ENEM inventory. It does not certify official Inep competencies. */
test('ENEM-first cross-exam inventory partitions full, partial and missing topics', () => {
  const mappings = canonicalExamTopicMappings();
  const advisories = semanticReviewQueue();
  // Every approved full reference to a canonical ID must resolve to the
  // identical authored object, even when several exams use that lesson.
  const canonicalObjects = new Map<string, (typeof mappings)[number]['lesson']>();
  for (const row of mappings) {
    const previous = canonicalObjects.get(row.canonicalId);
    if (previous) {
      assert.strictEqual(row.lesson, previous,
        'Canonical lesson duplicated across exams: ' + row.canonicalId);
    } else {
      canonicalObjects.set(row.canonicalId, row.lesson);
    }
  }
  const examRows = (Object.keys(examBlueprints) as ExamId[]).map(exam => {
    const topics = curriculumTopics.filter(topic => topic.exams.includes(exam));
    const rows = mappings.filter(row => row.exam === exam);
    const references = advisories.filter(row => row.exam === exam);
    const topicIds = new Set(topics.map(topic => topic.id));
    const fullIds = new Set<string>();
    for (const row of rows) {
      assert.ok(topicIds.has(row.examTopicId), 'mapping outside registered exam: ' + exam);
      assert.ok(!fullIds.has(row.examTopicId), 'duplicate full mapping: ' + exam);
      fullIds.add(row.examTopicId);
      const topic = topics.find(item => item.id === row.examTopicId)!;
      assert.strictEqual(canonicalLessonForExam(exam, topic), row.lesson);
      assert.equal(row.canonicalId, row.lesson.id);
    }
    const partialOnly = new Set<string>();
    for (const ref of references) {
      assert.ok(topicIds.has(ref.targetTopicId), 'advisory outside registered exam: ' + exam);
      assert.equal(ref.eligibleForFullAlias, false);
      assert.ok(ref.missingScope.trim().length > 20, 'missing explicit complement');
      if (!fullIds.has(ref.targetTopicId)) partialOnly.add(ref.targetTopicId);
    }
    const bySubject = [...new Set(topics.map(topic => topic.subject))].sort().map(subject => {
      const subjectTopics = topics.filter(topic => topic.subject === subject);
      const subjectIds = new Set(subjectTopics.map(topic => topic.id));
      const subjectMappings = rows.filter(row => subjectIds.has(row.examTopicId));
      return {
        subject, entries: subjectTopics.length,
        distinctExactTitles: new Set(subjectTopics.map(topic => topic.topic)).size,
        fullLinks: subjectMappings.length,
        uniqueCanonical: new Set(subjectMappings.map(row => row.canonicalId)).size,
        approvedSemantic: subjectMappings.filter(row => row.mappingKind === 'reviewed-semantic').length,
        partialOnly: [...partialOnly].filter(id => subjectIds.has(id)).length,
        missing: subjectTopics.length - subjectMappings.length
      };
    });
    assert.equal(bySubject.reduce((sum, row) => sum + row.entries, 0), topics.length);
    assert.equal(bySubject.reduce((sum, row) => sum + row.fullLinks, 0), rows.length);
    assert.equal(bySubject.reduce((sum, row) => sum + row.missing, 0),
      topics.length - fullIds.size, 'subject missing totals must reconcile: ' + exam);
    assert.equal(bySubject.reduce((sum, row) => sum + row.partialOnly, 0),
      partialOnly.size, 'subject partial-only totals must reconcile: ' + exam);
    for (const row of rows) {
      const topic = topics.find(item => item.id === row.examTopicId)!;
      for (const unrelated of (Object.keys(examBlueprints) as ExamId[])
        .filter(other => !topic.exams.includes(other))) {
        assert.equal(canonicalLessonForExam(unrelated, topic), null,
          'Unrelated exam inherited lesson: ' + unrelated + '/' + topic.id);
      }
    }
    return {
      exam, entries: topics.length,
      distinctExactTitles: new Set(topics.map(topic => topic.topic)).size,
      fullLinks: rows.length,
      uniqueCanonical: new Set(rows.map(row => row.canonicalId)).size,
      approvedSemantic: rows.filter(row => row.mappingKind === 'reviewed-semantic').length,
      advisoryLinks: references.length,
      partialOnly: partialOnly.size,
      missing: topics.length - fullIds.size,
      bySubject
    };
  });
  const enem = examRows.find(row => row.exam === 'enem');
  assert.ok(enem);
  const audit = enemCanonicalPriorityAudit();
  assert.equal(enem.entries, audit.topics);
  assert.equal(enem.distinctExactTitles, audit.distinctExactTitles);
  assert.equal(enem.fullLinks, audit.deep);
  assert.equal(enem.uniqueCanonical, audit.uniqueDeepCanonicalLessons);
  assert.equal(enem.approvedSemantic, audit.approvedSemanticLinks);
  assert.equal(enem.advisoryLinks, audit.partialAdvisoryLinks);
  assert.equal(enem.partialOnly, audit.partialOnlyTopics);
  assert.equal(enem.missing, audit.missing);
  assert.equal(audit.persistedDuplicatesDeleted, 0);
  assert.equal(new Set(audit.priorityQueue.map(row => row.topicId)).size, audit.missing);
  const full = new Set(audit.fullCanonicalMappings.map(row => row.examTopicId));
  const pending = new Set(audit.priorityQueue.map(row => row.topicId));
  for (const topic of curriculumTopics.filter(topic => topic.exams.includes('enem'))) {
    assert.equal(Number(full.has(topic.id)) + Number(pending.has(topic.id)), 1);
  }
  console.log('KOGNOS_CROSS_EXAM_AUDIT=' + JSON.stringify({
    provenance: 'Kognos editorial catalogs, not official Inep skills',
    persistedDuplicatesDeleted: 0,
    exams: examRows
  }));
});
