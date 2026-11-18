import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, semanticReviewQueue} from './canonical-lesson-reuse.ts';

/** ENEM editorial coverage partition; this is NOT the official Inep skills matrix.
 * Count targets rather than advisory source rows: several partial sources can
 * describe one missing topic, but none creates an integral lesson.
 */
test('ENEM partial references cannot inflate deep coverage or missing-topic counts', () => {
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const topicById = new Map(topics.map(topic => [topic.id, topic]));
  assert.equal(topicById.size, topics.length);
  const full = canonicalExamTopicMappings().filter(link => link.exam === 'enem');
  const fullIds = new Set(full.map(link => link.examTopicId));
  assert.equal(fullIds.size, full.length);
  const partial = semanticReviewQueue().filter(ref => ref.exam === 'enem');
  const partialTargets = new Set(partial.map(ref => ref.targetTopicId));
  const missing = topics.filter(topic => !fullIds.has(topic.id));
  const partialOnly = new Set([...partialTargets].filter(id => !fullIds.has(id)));
  const uncoveredWithoutPartial = missing.filter(topic => !partialOnly.has(topic.id));
  assert.equal(full.length + missing.length, topics.length);
  assert.equal(partialOnly.size + uncoveredWithoutPartial.length, missing.length);
  assert.ok(partialOnly.size <= partial.length);
  for (const ref of partial) {
    const target = topicById.get(ref.targetTopicId);
    assert.ok(target, 'Advisory target must exist in the ENEM editorial catalog');
    assert.ok(examBlueprints.enem.subjects[target.subject]?.includes(target.topic));
    assert.equal(ref.eligibleForFullAlias, false);
    assert.ok(ref.coveredScope.trim());
    assert.ok(ref.missingScope.trim());
    assert.notEqual(ref.targetTopicId, ref.sourceCanonicalId,
      'A partial reference must not refer to itself');
  }
  const bySubject = [...new Set(topics.map(t => t.subject))].sort().map(subject => {
    const entries = topics.filter(t => t.subject === subject);
    const covered = full.filter(link => link.subject === subject);
    const gaps = entries.filter(t => !fullIds.has(t.id));
    const partialGaps = gaps.filter(t => partialOnly.has(t.id));
    assert.equal(covered.length + gaps.length, entries.length);
    return {subject, entries: entries.length, fullLinks: covered.length,
      partialOnlyTargets: partialGaps.length, gaps: gaps.length};
  });
  assert.equal(bySubject.reduce((n, row) => n + row.entries, 0), topics.length);
  assert.equal(bySubject.reduce((n, row) => n + row.partialOnlyTargets, 0), partialOnly.size);
  process.stdout.write('KOGNOS_ENEM_PARTITION ' + JSON.stringify({
    provenance: 'Kognos editorial topics; no official Inep competency IDs inferred',
    entries: topics.length,
    exactDistinctTitles: new Set(topics.map(t => t.topic)).size,
    fullLinks: full.length,
    uniqueCanonicalDeepLessons: new Set(full.map(link => link.canonicalId)).size,
    partialReferenceRows: partial.length,
    partialOnlyTargets: partialOnly.size,
    gaps: missing.length,
    gapsWithoutPartialReference: uncoveredWithoutPartial.length,
    bySubject
  }) + '\n');
});
