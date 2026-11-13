import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoTopics} from './provao-paulista.ts';
import {
  canonicalExamTopicMappings,
  canonicalLessonForExam,
  provaoSourcedPartialReferences,
  reviewedPartialAssociations
} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

test('ENEM priority audit reconciles the entire registered catalog without inflating full coverage', () => {
  const audit = enemCanonicalPriorityAudit();
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const mapped = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  console.log('ENEM_CANONICAL_AUDIT ' + JSON.stringify({
    total: audit.topics,
    distinctTitles: audit.distinctExactTitles,
    deep: audit.deep,
    missing: audit.missing,
    uniqueCanonical: audit.uniqueDeepCanonicalLessons,
    approvedSemanticLinks: audit.approvedSemanticLinks,
    sharedFullLinks: audit.fullLinksSharedWithOtherExams,
    partialAdvisoryLinks: audit.partialAdvisoryLinks,
    partialOnlyTopics: audit.partialOnlyTopics,
    unresolvedPartialCandidates: audit.unresolvedPartialCandidates,
    subjects: audit.subjects
  }));
  assert.equal(audit.topics, topics.length);
  assert.equal(audit.deep, mapped.length);
  assert.equal(audit.missing, topics.length - mapped.length);
  assert.equal(audit.uniqueDeepCanonicalLessons, new Set(mapped.map(row => row.canonicalId)).size);
  assert.equal(audit.approvedSemanticLinks, mapped.filter(row => row.mappingKind === 'reviewed-semantic').length);
  assert.equal(audit.persistedDuplicatesDeleted, 0);
  assert.equal(audit.subjects.reduce((sum, group) => sum + group.total, 0), audit.topics);
  assert.equal(audit.subjects.reduce((sum, group) => sum + group.deep, 0), audit.deep);
  assert.equal(audit.subjects.reduce((sum, group) => sum + group.missing, 0), audit.missing);
  assert.equal(audit.priorityQueue.length, audit.missing);
  assert.deepEqual(
    [...new Set(audit.priorityQueue.map(row => row.topicId))].sort(),
    [...audit.priorityQueue.map(row => row.topicId)].sort()
  );
});

test('every counted ENEM full link resolves the same authored lesson object, never an advisory clone', () => {
  const topics = new Map(curriculumTopics.map(topic => [topic.id, topic] as const));
  for (const mapping of canonicalExamTopicMappings().filter(row => row.exam === 'enem')) {
    const topic = topics.get(mapping.examTopicId);
    assert.ok(topic && topic.exams.includes('enem'));
    assert.equal(mapping.canonicalId, mapping.lesson.id);
    assert.strictEqual(canonicalLessonForExam('enem', topic), mapping.lesson);
  }
  const audit = enemCanonicalPriorityAudit();
  for (const row of audit.priorityQueue) {
    const topic = topics.get(row.topicId);
    assert.ok(topic);
    assert.equal(canonicalLessonForExam('enem', topic), null);
    for (const ref of row.advisorySources) {
      assert.equal(ref.fullyCovered, false);
      assert.ok(ref.missingScope.trim().length > 20);
      assert.notEqual(ref.canonicalId, row.topicId);
    }
  }
});

test('five new ENEM-first cross-title assessments retain official source scope and remain partial', () => {
  const cases = [
    ['Matemática', 'Porcentagem e razão'],
    ['Matemática', 'Probabilidade e estatística'],
    ['Biologia', 'Ecologia e impactos ambientais'],
    ['Português', 'Intertextualidade e argumentação'],
    ['Geografia', 'Urbanização e globalização']
  ] as const;
  const refs = provaoSourcedPartialReferences();
  for (const [subject, title] of cases) {
    const entry = reviewedPartialAssociations.find(item =>
      item.subject === subject && item.targetTitle === title);
    assert.ok(entry, subject + ' / ' + title);
    assert.ok(curriculumTopics.some(topic => topic.subject === subject &&
      topic.topic === title && topic.exams.includes('enem')));
    assert.ok(provaoTopics.some(topic =>
      topic.subject === subject && topic.topic === entry.officialSourceTitle));
    assert.ok(entry.coveredScope.trim().length > 40);
    assert.ok(entry.missingScope.trim().length > 50);
    // A partial source becomes advisory only if an authored deep source exists;
    // an unresolved candidate must not inflate deep mappings or coverage.
    for (const ref of refs.filter(ref => ref.subject === subject && ref.targetTitle === title)) {
      assert.equal(ref.fullyCovered, false);
      assert.equal(ref.lesson.id, ref.canonicalId);
      assert.notEqual(ref.targetTopicId, ref.canonicalId);
    }
  }
});
