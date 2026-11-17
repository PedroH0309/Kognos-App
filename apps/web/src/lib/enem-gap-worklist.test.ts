import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {canonicalExamTopicMappings, semanticReviewQueue} from './canonical-lesson-reuse.ts';

/**
 * Actionable ENEM-first authoring queue, derived from the live editorial catalog.
 * No candidate is marked covered by title similarity or advisory references.
 * This is NOT an official Inep skill inventory.
 */
test('emit reproducible ENEM gap worklist with partial complements', () => {
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const full = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  const fullIds = new Set(full.map(row => row.examTopicId));
  const partials = semanticReviewQueue().filter(row => row.exam === 'enem');
  const partialById = new Map<string, typeof partials>();
  for (const partial of partials) {
    const entries = partialById.get(partial.targetTopicId) ?? [];
    entries.push(partial);
    partialById.set(partial.targetTopicId, entries);
  }
  const gaps = topics.filter(topic => !fullIds.has(topic.id)).map(topic => ({
    id: topic.id,
    subject: topic.subject,
    editorialTitle: topic.topic,
    status: partialById.has(topic.id) ? 'partial-needs-complement' : 'uncovered',
    partialSources: (partialById.get(topic.id) ?? []).map(ref => ({
      canonicalId: ref.sourceCanonicalId,
      coveredScope: ref.coveredScope,
      missingScope: ref.missingScope,
    })),
  })).sort((a, b) => a.subject.localeCompare(b.subject) ||
    a.editorialTitle.localeCompare(b.editorialTitle) || a.id.localeCompare(b.id));

  // Prioritize verified partial complements without counting them as full coverage.
  const bySubject = [...new Set(topics.map(topic => topic.subject))].sort().map(subject => {
    const entries = topics.filter(topic => topic.subject === subject);
    const pending = gaps.filter(gap => gap.subject === subject);
    return {
      subject,
      entries: entries.length,
      distinctExactTitles: new Set(entries.map(topic => topic.topic)).size,
      fullLinks: entries.length - pending.length,
      gaps: pending.length,
      partialComplementTargets: pending.filter(gap => gap.partialSources.length > 0).length,
    };
  });
  const prioritizedGaps = [...gaps].sort((a, b) =>
    Number(b.partialSources.length > 0) - Number(a.partialSources.length > 0) ||
    a.subject.localeCompare(b.subject) || a.editorialTitle.localeCompare(b.editorialTitle) ||
    a.id.localeCompare(b.id));
  assert.equal(bySubject.reduce((sum, row) => sum + row.entries, 0), topics.length);
  assert.equal(bySubject.reduce((sum, row) => sum + row.fullLinks, 0), full.length);
  assert.equal(bySubject.reduce((sum, row) => sum + row.gaps, 0), gaps.length);
  assert.deepEqual(new Set(prioritizedGaps.map(row => row.id)), new Set(gaps.map(row => row.id)));
  assert.equal(gaps.length + full.length, topics.length);
  assert.equal(new Set(gaps.map(row => row.id)).size, gaps.length);
  for (const gap of gaps) {
    assert.ok(gap.editorialTitle.trim());
    assert.ok(!fullIds.has(gap.id));
    for (const source of gap.partialSources) {
      assert.ok(source.canonicalId.trim());
      assert.ok(source.coveredScope.trim());
      assert.ok(source.missingScope.trim());
    }
  }
  process.stdout.write('KOGNOS_ENEM_GAP_WORKLIST ' + JSON.stringify({
    provenance: 'Kognos editorial catalog; not an official Inep skill mapping',
    totalEntries: topics.length,
    fullLinks: full.length,
    missing: gaps.length,
    bySubject,
    prioritizedGaps,
  }) + '\n');
});
