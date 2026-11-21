import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {
  canonicalLessonForExam, canonicalCoverageByExam,
  canonicalExamTopicMappings, semanticReviewQueue
} from './canonical-lesson-reuse.ts';

/** Editorial coverage is not a mapping to official Inep competencies or skills. */
test('ENEM subject inventory reconciles deep, missing and partial advisory entries', () => {
  const subjects = examBlueprints.enem.subjects;
  const coverage = canonicalCoverageByExam().enem;
  const mappings = canonicalExamTopicMappings().filter(m => m.exam === 'enem');
  const partials = semanticReviewQueue().filter(p => p.exam === 'enem');
  const rows = Object.entries(subjects).map(([subject, titles]) => {
    const entries = titles.map(title => {
      const topic = curriculumTopics.find(t => t.subject === subject && t.topic === title);
      assert.ok(topic, 'Missing historical ENEM topic: ' + subject + ' / ' + title);
      const lesson = canonicalLessonForExam('enem', topic);
      const mapped = mappings.filter(m => m.examTopicId === topic.id);
      assert.equal(mapped.length, lesson ? 1 : 0, 'Mapping mismatch: ' + topic.id);
      if (lesson) assert.equal(mapped[0].canonicalId, lesson.id);
      const advisory = partials.filter(p => p.targetTopicId === topic.id);
      for (const row of advisory) {
        assert.equal(row.eligibleForFullAlias, false);
        assert.ok(row.missingScope.trim());
      }
      return {topicId: topic.id, title, canonicalId: lesson?.id ?? null,
        partialSources: [...new Set(advisory.map(p => p.sourceCanonicalId))]};
    });
    assert.equal(new Set(entries.map(e => e.topicId)).size, entries.length,
      'Duplicate topic ID within ENEM subject: ' + subject);
    return {subject, total: entries.length,
      distinctTitles: new Set(titles).size,
      deep: entries.filter(e => e.canonicalId !== null).length,
      missing: entries.filter(e => e.canonicalId === null).length,
      partial: entries.filter(e => e.partialSources.length > 0).length,
      entries};
  });
  const total = rows.reduce((n, r) => n + r.total, 0);
  const deep = rows.reduce((n, r) => n + r.deep, 0);
  const missing = rows.reduce((n, r) => n + r.missing, 0);
  assert.equal(total, coverage.total);
  assert.equal(deep, coverage.deep);
  assert.equal(missing, coverage.missing);
  assert.equal(total, deep + missing);
  assert.equal(new Set(rows.flatMap(r => r.entries.map(e => e.topicId))).size, total);
  assert.equal(mappings.length, deep);
  const canonicalIds = new Set(rows.flatMap(r => r.entries.map(e => e.canonicalId)).filter(Boolean));
  assert.equal(canonicalIds.size, coverage.canonicalIds.length);
  for (const row of partials) {
    assert.ok(rows.some(r => r.entries.some(e => e.topicId === row.targetTopicId)));
  }
  process.stdout.write('KOGNOS_ENEM_SUBJECT_INVENTORY ' + JSON.stringify({
    provenance: 'Kognos editorial exam blueprint; NOT official Inep competency/skill IDs',
    officialInepSkillsVerified: null,
    total, distinctTitles: rows.reduce((n, r) => n + r.distinctTitles, 0),
    deep, uniqueDeepCanonicalIds: canonicalIds.size, missing,
    resolvedPartialExamAdvisories: partials.length,
    subjects: rows.map(({entries, ...summary}) => summary),
    unresolvedTopics: rows.flatMap(r => r.entries.filter(e => !e.canonicalId)
      .map(e => ({subject: r.subject, ...e})))
  }) + '\n');
});
