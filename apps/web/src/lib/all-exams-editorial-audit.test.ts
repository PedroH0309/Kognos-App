import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam, semanticReviewQueue} from './canonical-lesson-reuse.ts';

/**
 * Reproducible cross-exam inventory, ENEM first. Counts are editorial
 * memberships, not official Inep competencies or verified skill coverage.
 * Partial sources never become full mappings.
 */
test('audit every registered exam without counting partial references as coverage', () => {
  const exams = (Object.keys(examBlueprints) as ExamId[]).sort((a, b) =>
    Number(b === 'enem') - Number(a === 'enem') || a.localeCompare(b));
  const mappings = canonicalExamTopicMappings();
  const partials = semanticReviewQueue();
  const knownIds = new Set(curriculumTopics.map(topic => topic.id));
  assert.equal(knownIds.size, curriculumTopics.length, 'duplicate historical topic IDs');
  const inventory = exams.map(exam => {
    const topics = curriculumTopics.filter(topic => topic.exams.includes(exam));
    const full = mappings.filter(row => row.exam === exam);
    const advisory = partials.filter(row => row.exam === exam);
    const ids = new Set(topics.map(topic => topic.id));
    const fullIds = new Set(full.map(row => row.examTopicId));
    assert.equal(fullIds.size, full.length, exam + ': duplicate full mappings');
    for (const row of full) {
      assert.ok(ids.has(row.examTopicId), exam + ': orphan full mapping');
      assert.ok(knownIds.has(row.canonicalId), exam + ': orphan canonical source');
      assert.equal(row.lesson.id, row.canonicalId, exam + ': wrong authored object');
    }
    for (const row of advisory) {
      assert.ok(ids.has(row.targetTopicId), exam + ': orphan partial target');
      assert.equal(row.eligibleForFullAlias, false);
      assert.ok(row.coveredScope.trim() && row.missingScope.trim());
    }
    const missing = topics.filter(topic => !fullIds.has(topic.id));
    const canonicalIds = new Set(full.map(row => row.canonicalId));
    const sharedCanonicalIds = new Set(full.filter(row =>
      mappings.some(other => other.exam !== exam && other.canonicalId === row.canonicalId)
    ).map(row => row.canonicalId));
    const fullMappingsReusingOtherExam = full.filter(row => sharedCanonicalIds.has(row.canonicalId)).length;
    assert.ok(fullMappingsReusingOtherExam <= full.length);
    assert.ok(sharedCanonicalIds.size <= canonicalIds.size);
    const bySubject = [...new Set(topics.map(topic => topic.subject))].sort()
      .map(subject => {
        const entries = topics.filter(topic => topic.subject === subject);
        const deep = entries.filter(topic => fullIds.has(topic.id)).length;
        return {subject, entries: entries.length,
          distinctExactTitles: new Set(entries.map(topic => topic.topic)).size,
          fullLinks: deep,
          uniqueDeepCanonicalLessons: new Set(full.filter(row => row.subject === subject).map(row => row.canonicalId)).size,
          reviewedSemanticLinks: full.filter(row => row.subject === subject && row.mappingKind === 'reviewed-semantic').length,
          gaps: entries.length - deep};
      });
    assert.equal(bySubject.reduce((n, row) => n + row.entries, 0), topics.length);
    assert.equal(bySubject.reduce((n, row) => n + row.fullLinks, 0), full.length);
    assert.equal(bySubject.reduce((n, row) => n + row.reviewedSemanticLinks, 0),
      full.filter(row => row.mappingKind === 'reviewed-semantic').length);
    return {exam, entries: topics.length,
      distinctExactTitles: new Set(topics.map(topic => topic.topic)).size,
      uniqueDeepCanonicalLessons: canonicalIds.size,
      canonicalLessonsSharedAcrossExams: sharedCanonicalIds.size,
      fullMappingsReusingOtherExam,
      fullLinks: full.length, gaps: missing.length,
      advisoryPartialReferences: advisory.length,
      partialOnlyTopics: new Set(advisory.filter(row => !fullIds.has(row.targetTopicId))
        .map(row => row.targetTopicId)).size,
      bySubject};
  });
  assert.equal(inventory[0]?.exam, 'enem');
  process.stdout.write('KOGNOS_ALL_EXAMS_EDITORIAL_AUDIT ' + JSON.stringify({
    officialSkillCertification: false, exams: inventory
  }) + '\n');
});

/** All registered exams must resolve the same authored instance for a canonical ID.
 * Negative cases guard against leaking an unrelated exam's lesson via a shared ID.
 */
test('cross-exam full mappings preserve canonical object identity and exam isolation', () => {
  const mappings = canonicalExamTopicMappings();
  const topicsById = new Map(curriculumTopics.map(topic => [topic.id, topic]));
  const byCanonical = new Map<string, (typeof mappings)[number]>();
  const approved = new Set(mappings.map(row => row.exam + '\\0' + row.examTopicId));
  const exams = Object.keys(examBlueprints) as ExamId[];
  let shared = 0;
  for (const row of mappings) {
    const topic = topicsById.get(row.examTopicId);
    assert.ok(topic, row.exam + ': mapping points to missing historical topic');
    assert.ok(topic.exams.includes(row.exam), row.exam + ': unregistered exam membership');
    assert.strictEqual(canonicalLessonForExam(row.exam, topic), row.lesson);
    const first = byCanonical.get(row.canonicalId);
    if (first) {
      assert.strictEqual(first.lesson, row.lesson, 'canonical content was cloned');
      if (first.exam !== row.exam) shared++;
    } else byCanonical.set(row.canonicalId, row);
  }
  assert.ok(shared > 0, 'expected a real cross-exam canonical reuse');
  for (const topic of curriculumTopics) {
    for (const exam of exams) {
      if (approved.has(exam + '\\0' + topic.id)) continue;
      assert.equal(canonicalLessonForExam(exam, topic), null,
        exam + ': non-approved exam-topic unexpectedly inherited a full lesson');
    }
  }
});
