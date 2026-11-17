import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints} from './exam-blueprints.ts';
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
  const uniqueCanonicalIds = new Set(full.map(row => row.canonicalId));
  const reviewedSemanticLinks = full.filter(row => row.mappingKind === 'reviewed-semantic');
  for (const link of full) {
    assert.equal(link.lesson.id, link.canonicalId, 'A full mapping must resolve its actual canonical authored lesson');
  }
  assert.equal(fullIds.size, full.length, 'Each ENEM topic must have at most one integral canonical link');
  const editorialIds = new Set(topics.map(topic => topic.id));
  assert.equal(editorialIds.size, topics.length, 'Historical ENEM topic IDs must be unique');
  for (const link of full) {
    assert.ok(editorialIds.has(link.examTopicId), 'Integral link must target an existing ENEM topic');
  }
  const partials = semanticReviewQueue().filter(row => row.exam === 'enem');
  const partialById = new Map<string, typeof partials>();
  for (const partial of partials) {
    const entries = partialById.get(partial.targetTopicId) ?? [];
    entries.push(partial);
    partialById.set(partial.targetTopicId, entries);
  }
  for (const partial of partials) {
    assert.ok(editorialIds.has(partial.targetTopicId), 'Partial reference must target an existing ENEM topic');
    // Advisory overlaps may coexist with an independently verified integral link.
    // They must not be counted as unresolved gaps or additional full coverage.
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
      uniqueCanonicalDeepLessons: new Set(full.filter(link => link.subject === subject).map(link => link.canonicalId)).size,
      reviewedSemanticLinks: reviewedSemanticLinks.filter(link => link.subject === subject).length,
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
  assert.ok(uniqueCanonicalIds.size <= full.length);
  assert.equal(bySubject.reduce((sum, row) => sum + row.reviewedSemanticLinks, 0), reviewedSemanticLinks.length);
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
    distinctExactTitles: new Set(topics.map(topic => topic.topic)).size,
    fullLinks: full.length,
    uniqueCanonicalDeepLessons: uniqueCanonicalIds.size,
    reviewedSemanticLinks: reviewedSemanticLinks.length,
    canonicalLinks: full.map(link => ({examTopicId: link.examTopicId, canonicalId: link.canonicalId, mappingKind: link.mappingKind})),
    partialReferences: partials.length,
    partialTargets: partialById.size,
    partialTargetsAlreadyFullyCovered: [...partialById.keys()].filter(id => fullIds.has(id)).length,
    partialOnlyTargets: [...partialById.keys()].filter(id => !fullIds.has(id)).length,
    missing: gaps.length,
    bySubject,
    prioritizedGaps,
  }) + '\n');
});

/** Guard actual cross-exam reuse, not merely counts in an editorial report. */
test('ENEM canonical mappings share authored objects only with registered exams', () => {
  const all = canonicalExamTopicMappings();
  const enem = all.filter(link => link.exam === 'enem');
  const byCanonical = new Map<string, typeof all>();
  for (const link of all) {
    const group = byCanonical.get(link.canonicalId) ?? [];
    group.push(link);
    byCanonical.set(link.canonicalId, group);
  }
  for (const link of enem) {
    const group = byCanonical.get(link.canonicalId) ?? [];
    assert.ok(group.some(other => other.exam === 'enem' && other.examTopicId === link.examTopicId));
    for (const other of group) {
      assert.strictEqual(other.lesson, link.lesson,
        'Shared canonical ID must resolve to the identical authored object');
      assert.strictEqual(other.lesson.sections, link.lesson.sections);
      assert.strictEqual(other.lesson.tasks, link.lesson.tasks);
    }
    assert.equal(link.lesson.id, link.canonicalId);
  }
  // Validate against the independent exam blueprint, rather than checking a
  // mapping against the very same mapping list (which is tautological).
  for (const link of all) {
    const topic = curriculumTopics.find(item => item.id === link.examTopicId);
    assert.ok(topic, 'Canonical mapping references a real historical topic');
    assert.equal(link.subject, topic.subject);
    assert.equal(link.topicTitle, topic.topic);
    assert.ok(examBlueprints[link.exam].subjects[topic.subject]?.includes(topic.topic),
      'A canonical mapping must never leak into an unrelated exam');
  }
  // A historical topic may belong to several exams, but its mapping must be
  // unique *within* each exam. Advisory overlaps never grant full coverage.
  const mappingKeys = all.map(link => link.exam + '\\0' + link.examTopicId);
  assert.equal(new Set(mappingKeys).size, mappingKeys.length,
    'Duplicate exam-topic mappings would inflate cross-exam coverage');
  const advisory = semanticReviewQueue();
  for (const reference of advisory) {
    assert.equal(reference.eligibleForFullAlias, false);
    assert.ok(reference.coveredScope.trim());
    assert.ok(reference.missingScope.trim());
    const topic = curriculumTopics.find(item => item.id === reference.targetTopicId);
    assert.ok(topic?.exams.includes(reference.exam),
      'Advisory references must belong to their registered exam');
    assert.ok(!all.some(link => link.exam === reference.exam &&
      link.examTopicId === reference.targetTopicId &&
      link.canonicalId === reference.sourceCanonicalId &&
      link.mappingKind === 'reviewed-semantic'),
      'An explicitly partial source cannot silently become an integral semantic alias');
  }
  for (const link of enem) {
    const topic = curriculumTopics.find(item => item.id === link.examTopicId)!;
    for (const exam of Object.keys(examBlueprints) as Array<keyof typeof examBlueprints>) {
      if (!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)) {
        assert.ok(!all.some(other => other.exam === exam &&
          other.examTopicId === topic.id),
          'An exam outside the blueprint inherited ENEM coverage');
      }
    }
  }
});
