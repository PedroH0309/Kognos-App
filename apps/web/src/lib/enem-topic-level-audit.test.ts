import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings, semanticReviewQueue,
  canonicalCoverageByExam,
} from './canonical-lesson-reuse.ts';

/**
 * Machine-readable ENEM-first editorial inventory at historical topic-ID level.
 * Titles in examBlueprints are Kognos editorial labels, NOT official Inep skills.
 * No competency/habilidade code is assigned without an independently verified source.
 */
test('ENEM topic-by-topic audit retains partial gaps and exact provenance', () => {
  const exam = 'enem' as const;
  const mappings = canonicalExamTopicMappings().filter(row => row.exam === exam);
  const mappingById = new Map(mappings.map(row => [row.examTopicId, row]));
  assert.equal(mappingById.size, mappings.length, 'Duplicate ENEM full mapping');
  const advisory = semanticReviewQueue().filter(row => row.exam === exam);
  const advisoryById = new Map<string, typeof advisory>();
  for (const ref of advisory) {
    assert.equal(ref.eligibleForFullAlias, false);
    assert.ok(ref.coveredScope.trim() && ref.missingScope.trim());
    const current = advisoryById.get(ref.targetTopicId) ?? [];
    current.push(ref);
    advisoryById.set(ref.targetTopicId, current);
  }

  const entries = Object.entries(examBlueprints[exam].subjects).flatMap(([subject, titles]) =>
    titles.map(title => {
      const matches = curriculumTopics.filter(t => t.subject === subject && t.topic === title);
      assert.equal(matches.length, 1, 'Missing or ambiguous registered ENEM title: ' + subject + '/' + title);
      const topic = matches[0];
      const full = mappingById.get(topic.id);
      const partials = advisoryById.get(topic.id) ?? [];
      for (const partial of partials) {
        assert.equal(partial.targetTitle, title);
        assert.equal(partial.subject, subject);
        assert.notEqual(partial.sourceCanonicalId, topic.id);
      }
      return {
        subject, editorialTitle: title, historicalTopicId: topic.id,
        status: full ? 'deep' as const : 'missing' as const,
        canonicalId: full?.canonicalId ?? null,
        mappingKind: full?.mappingKind ?? null,
        advisorySources: partials.map(p => ({
          canonicalId: p.sourceCanonicalId, title: p.sourceTitle,
          coveredScope: p.coveredScope, missingScope: p.missingScope,
          sourceOrigin: p.sourceOrigin,
        })),
        officialInepCompetency: null,
        officialInepSkill: null,
        officialAlignmentStatus: 'not-verified' as const,
      };
    })
  );
  // A consultative source never upgrades a missing target to a full mapping.
  // Audit the partition at topic level, not merely the aggregate totals.
  for (const row of entries) {
    assert.equal(row.status === 'deep', row.canonicalId !== null);
    assert.equal(row.status === 'deep', row.mappingKind !== null);
    if (row.mappingKind === 'exact') assert.equal(row.canonicalId, row.historicalTopicId);
    if (row.mappingKind === 'reviewed-semantic') assert.notEqual(row.canonicalId, row.historicalTopicId);
    assert.equal(row.officialInepCompetency, null);
    assert.equal(row.officialInepSkill, null);
    for (const source of row.advisorySources) {
      assert.ok(source.coveredScope.trim() && source.missingScope.trim());
      assert.notEqual(source.canonicalId, row.historicalTopicId);
    }
  }
  const ids = new Set(entries.map(row => row.historicalTopicId));
  assert.equal(ids.size, entries.length);
  assert.equal(entries.filter(row => row.status === 'deep').length, mappings.length);
  const coverage = canonicalCoverageByExam()[exam];
  assert.equal(entries.length, coverage.total);
  assert.equal(entries.filter(row => row.status === 'deep').length +
    entries.filter(row => row.status === 'missing').length, entries.length);
  assert.equal(new Set(entries.map(row => row.subject + '\\0' + row.editorialTitle)).size,
    entries.length, 'Duplicate subject/title in ENEM blueprint');
  assert.equal(entries.filter(row => row.status === 'missing').length, coverage.missing);
  for (const ref of advisory) {
    assert.ok(ids.has(ref.targetTopicId), 'Advisory target outside ENEM');
  }
  // Distinguish uncovered targets with useful advisory sources from uncovered
  // targets with no verified reference. References are not full coverage.
  const missingWithAdvisory = entries.filter(row => row.status === 'missing' && row.advisorySources.length > 0);
  const missingWithoutAdvisory = entries.filter(row => row.status === 'missing' && row.advisorySources.length === 0);
  assert.equal(missingWithAdvisory.length + missingWithoutAdvisory.length, coverage.missing);
  assert.equal(entries.reduce((sum, row) => sum + row.advisorySources.length, 0), advisory.length);
  for (const row of missingWithAdvisory) {
    assert.equal(row.canonicalId, null, 'Advisory-only ENEM topic incorrectly promoted');
    assert.equal(row.mappingKind, null);
  }
  const deepIds = new Set(entries.filter(row => row.status === 'deep').map(row => row.canonicalId));
  assert.equal(deepIds.size, coverage.canonicalIds.length);
  process.stdout.write('KOGNOS_ENEM_TOPIC_LEVEL_AUDIT ' + JSON.stringify({
    provenance: 'Kognos editorial blueprints; official Inep competency/skill alignment not verified',
    entries: entries.length, distinctHistoricalIds: ids.size,
    fullLinks: mappings.length, uniqueCanonicalDeep: deepIds.size,
    advisoryReferences: advisory.length, missing: coverage.missing,
    missingWithAdvisory: missingWithAdvisory.length,
    missingWithoutAdvisory: missingWithoutAdvisory.length,
    bySubject: Object.fromEntries([...new Set(entries.map(row => row.subject))].sort().map(subject => {
      const rows = entries.filter(row => row.subject === subject);
      return [subject, {
        entries: rows.length,
        distinctTitles: new Set(rows.map(row => row.editorialTitle)).size,
        fullLinks: rows.filter(row => row.status === 'deep').length,
        uniqueCanonicalDeep: new Set(rows.filter(row => row.status === 'deep').map(row => row.canonicalId)).size,
        partialTargets: rows.filter(row => row.advisorySources.length > 0).length,
        advisoryReferences: rows.reduce((sum, row) => sum + row.advisorySources.length, 0),
        missingWithAdvisory: rows.filter(row => row.status === 'missing' && row.advisorySources.length > 0).length,
        missingWithoutAdvisory: rows.filter(row => row.status === 'missing' && row.advisorySources.length === 0).length,
        missing: rows.filter(row => row.status === 'missing').length,
      }];
    })),
    topics: entries,
  }) + '\n');
});

/** Regression: a reported ENEM full link must resolve to the same authored
 * canonical object, while an unrelated exam cannot inherit its lesson.
 * Historical IDs stay attached to the exam-topic entry, not the source.
 */
test('ENEM full-link audit resolves real canonical lessons with exam isolation', () => {
  const mappings = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  const examIds = Object.keys(examBlueprints) as (keyof typeof examBlueprints)[];
  for (const mapping of mappings) {
    const target = curriculumTopics.find(topic => topic.id === mapping.examTopicId);
    assert.ok(target, 'ENEM mapping has no registered historical topic: ' + mapping.examTopicId);
    assert.ok(examBlueprints.enem.subjects[target.subject]?.includes(target.topic),
      'ENEM mapping points outside its blueprint: ' + mapping.examTopicId);
    const lesson = canonicalLessonForExam('enem', target);
    assert.ok(lesson, 'ENEM mapping lacks authored source: ' + mapping.examTopicId);
    assert.equal(lesson.id, mapping.canonicalId);
    for (const exam of examIds) {
      if (examBlueprints[exam].subjects[target.subject]?.includes(target.topic)) continue;
      assert.equal(canonicalLessonForExam(exam, target), null,
        'Unrelated exam inherited ENEM canonical lesson: ' + exam + '/' + mapping.examTopicId);
    }
  }
});

/** Cross-exam reuse must preserve object identity, not merely equal lesson text.
 * A shared canonical ID is one source of truth across exam projections.
 * Advisory overlaps are explicitly excluded from this invariant.
 */
test('ENEM shared canonical sources retain object identity across registered exams', () => {
  const all = canonicalExamTopicMappings();
  const enem = all.filter(row => row.exam === 'enem');
  const byCanonical = new Map<string, typeof all>();
  for (const row of all) {
    const group = byCanonical.get(row.canonicalId) ?? [];
    group.push(row);
    byCanonical.set(row.canonicalId, group);
  }
  let shared = 0;
  for (const row of enem) {
    const group = byCanonical.get(row.canonicalId) ?? [];
    for (const other of group) {
      assert.strictEqual(other.lesson, row.lesson,
        'Canonical content was cloned between exams: ' + row.canonicalId);
      const historical = curriculumTopics.find(topic => topic.id === other.examTopicId);
      assert.ok(historical);
      assert.strictEqual(canonicalLessonForExam(other.exam, historical), row.lesson,
        'Exam resolver did not reuse the same canonical object');
      if (other.exam !== 'enem') shared++;
    }
  }
  const partial = semanticReviewQueue().filter(row => row.exam === 'enem');
  const fullTargets = new Set(enem.map(row => row.examTopicId));
  for (const ref of partial) {
    assert.equal(ref.eligibleForFullAlias, false);
    assert.ok(ref.missingScope.trim().length > 0);
    if (!fullTargets.has(ref.targetTopicId)) {
      const target = curriculumTopics.find(topic => topic.id === ref.targetTopicId);
      assert.ok(target);
      assert.equal(canonicalLessonForExam('enem', target), null,
        'Partial-only ENEM reference incorrectly grants full coverage');
    }
  }
  process.stdout.write('KOGNOS_ENEM_SHARED_IDENTITY ' + JSON.stringify({
    examinedFullLinks: enem.length,
    crossExamPairsChecked: shared,
    advisoryReferencesChecked: partial.length,
    physicallyDeletedDuplicates: 0,
  }) + '\n');
});
