import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
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
  const deepIds = new Set(entries.filter(row => row.status === 'deep').map(row => row.canonicalId));
  assert.equal(deepIds.size, coverage.canonicalIds.length);
  process.stdout.write('KOGNOS_ENEM_TOPIC_LEVEL_AUDIT ' + JSON.stringify({
    provenance: 'Kognos editorial blueprints; official Inep competency/skill alignment not verified',
    entries: entries.length, distinctHistoricalIds: ids.size,
    fullLinks: mappings.length, uniqueCanonicalDeep: deepIds.size,
    advisoryReferences: advisory.length, missing: coverage.missing,
    bySubject: Object.fromEntries([...new Set(entries.map(row => row.subject))].sort().map(subject => {
      const rows = entries.filter(row => row.subject === subject);
      return [subject, {
        entries: rows.length,
        distinctTitles: new Set(rows.map(row => row.editorialTitle)).size,
        fullLinks: rows.filter(row => row.status === 'deep').length,
        uniqueCanonicalDeep: new Set(rows.filter(row => row.status === 'deep').map(row => row.canonicalId)).size,
        partialTargets: rows.filter(row => row.advisorySources.length > 0).length,
        missing: rows.filter(row => row.status === 'missing').length,
      }];
    })),
    topics: entries,
  }) + '\n');
});
