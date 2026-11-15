import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
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
