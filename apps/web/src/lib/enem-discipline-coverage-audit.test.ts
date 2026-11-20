import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings, canonicalCoverageByExam,
  semanticReviewQueue, canonicalAuthoringBacklog,
} from './canonical-lesson-reuse.ts';

/**
 * Reproducible Kognos editorial inventory, NOT an Inep skills matrix.
 * Only approved, resolved full-scope mappings count as deep coverage.
 * Partial references are reported separately, even if the source is deep.
 */
test('ENEM-first discipline inventory reconciles every exam without promoting partials', () => {
  const exams = Object.keys(examBlueprints) as ExamId[];
  const mappings = canonicalExamTopicMappings();
  const coverage = canonicalCoverageByExam();
  const advisory = semanticReviewQueue();
  const backlog = canonicalAuthoringBacklog();
  const report = exams.map(exam => {
    const rows = Object.entries(examBlueprints[exam].subjects).map(([subject, titles]) => {
      const entries = titles.map(title => {
        const matches = curriculumTopics.filter(t => t.subject === subject && t.topic === title);
        assert.equal(matches.length, 1, 'Unregistered or duplicated editorial topic: ' + exam + '/' + subject + '/' + title);
        return matches[0];
      });
      const ids = new Set(entries.map(t => t.id));
      const full = mappings.filter(m => m.exam === exam && ids.has(m.examTopicId));
      const partial = advisory.filter(a => a.exam === exam && ids.has(a.targetTopicId));
      const fullIds = new Set(full.map(m => m.examTopicId));
      assert.equal(fullIds.size, full.length, 'Multiple full mappings for one exam-topic');
      for (const m of full) {
        assert.equal(m.lesson.id, m.canonicalId);
        assert.ok(ids.has(m.examTopicId));
      }
      for (const p of partial) {
        assert.equal(p.eligibleForFullAlias, false);
        assert.ok(p.missingScope.trim());
        assert.notEqual(p.targetTopicId, p.sourceCanonicalId);
      }
      return {
        subject, entries: entries.length, exactTitles: new Set(titles).size,
        fullLinks: full.length, uniqueCanonicalDeep: new Set(full.map(m => m.canonicalId)).size,
        reviewedSemanticLinks: full.filter(m => m.mappingKind === 'reviewed-semantic').length,
        advisoryReferences: partial.length,
        partialOnlyTargets: new Set(partial.filter(p => !fullIds.has(p.targetTopicId)).map(p => p.targetTopicId)).size,
        missing: entries.length - full.length,
      };
    });
    const total = rows.reduce((n, r) => n + r.entries, 0);
    const exactTitles = new Set(Object.values(examBlueprints[exam].subjects).flat()).size;
    const partialTargets = new Set(advisory.filter(a => a.exam === exam).map(a => a.targetTopicId));
    const fullTargets = new Set(mappings.filter(m => m.exam === exam).map(m => m.examTopicId));
    const partialOnlyTargets = [...partialTargets].filter(id => !fullTargets.has(id)).length;
    assert.ok(partialOnlyTargets <= total - fullTargets.size,
      'Advisory-only targets cannot exceed uncovered exam entries');
    const deep = rows.reduce((n, r) => n + r.fullLinks, 0);
    assert.equal(total, coverage[exam].total);
    assert.equal(deep, coverage[exam].deep);
    assert.equal(total - deep, coverage[exam].missing);
    assert.equal(deep, mappings.filter(m => m.exam === exam).length);
    return {exam, entries: total, exactTitles, distinctExamTopicIds: total,
      advisoryReferences: advisory.filter(a => a.exam === exam).length,
      partialTargets: partialTargets.size, partialOnlyTargets, fullLinks: deep,
      uniqueCanonicalDeep: new Set(mappings.filter(m => m.exam === exam).map(m => m.canonicalId)).size,
      missing: total - deep, disciplines: rows};
  });
  const enem = report.find(r => r.exam === 'enem');
  assert.ok(enem, 'ENEM blueprint missing');
  assert.equal(enem.entries, enem.disciplines.reduce((n, r) => n + r.entries, 0));
  const backlogEnem = new Set(backlog.filter(row => row.missingExams.includes('enem')).map(row => row.topicId));
  assert.equal(backlogEnem.size, enem.missing, 'ENEM backlog does not match missing editorial entries');
  assert.equal(report.reduce((n, r) => n + r.fullLinks, 0), mappings.length);
  assert.equal(report.reduce((n, r) => n + r.advisoryReferences, 0), advisory.length);
  assert.equal(new Set(mappings.map(m => m.canonicalId)).size <= mappings.length, true);
  for (const item of report) {
    assert.ok(item.exactTitles <= item.entries);
    assert.equal(item.missing + item.fullLinks, item.entries);
  }
  // Count proven cross-exam reuse separately from the number of links. A shared
  // canonical ID is authored once, regardless of how many exam references use it.
  const examsByCanonical = new Map<string, Set<ExamId>>();
  for (const mapping of mappings) {
    const examsForLesson = examsByCanonical.get(mapping.canonicalId) ?? new Set<ExamId>();
    examsForLesson.add(mapping.exam);
    examsByCanonical.set(mapping.canonicalId, examsForLesson);
  }
  const crossExamCanonicalIds = [...examsByCanonical.entries()]
    .filter(([, linkedExams]) => linkedExams.size > 1)
    .map(([canonicalId]) => canonicalId);
  const sharedExamTopicLinks = mappings.filter(m => crossExamCanonicalIds.includes(m.canonicalId)).length;
  assert.ok(sharedExamTopicLinks >= crossExamCanonicalIds.length * 2);
  assert.equal(examsByCanonical.size, new Set(mappings.map(m => m.canonicalId)).size);
  // Logical link reuse is not evidence that physical database rows were removed.
  const logicalDuplicateAuthorshipAvoided = mappings.length - examsByCanonical.size;
  assert.ok(logicalDuplicateAuthorshipAvoided >= 0);
  process.stdout.write('KOGNOS_EDITORIAL_DISCIPLINE_AUDIT ' + JSON.stringify({
    provenance: 'Kognos editorial exam blueprints; NOT official Inep competencies/skills',
    order: 'ENEM first, then other registered exam blueprints',
    exams: [enem, ...report.filter(r => r.exam !== 'enem')],
    globalUniqueCanonicalDeep: new Set(mappings.map(m => m.canonicalId)).size,
    globalExamTopicLinks: mappings.length,
    crossExamCanonicalLessons: crossExamCanonicalIds.length,
    sharedExamTopicLinks,
    logicalDuplicateAuthorshipAvoided,
    physicalDatabaseRowsDeleted: 0,
    officialInepSkillMappingsVerifiedHere: 0,
  }) + '\n');
});
