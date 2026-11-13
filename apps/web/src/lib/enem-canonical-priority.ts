/**
 * ENEM-first curriculum reconciliation, based on actual registered editorial
 * topics and resolved authored lessons. Not a substitute for Inep competencies
 * or official exam skills. No fuzzy aliases or partial-to-full promotion.
 */
import {curriculumTopics} from './curriculum-catalog.ts';
import {
  canonicalExamTopicMappings,
  semanticReviewQueue,
  unresolvedPartialCandidates
} from './canonical-lesson-reuse.ts';

export function enemCanonicalPriorityAudit() {
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const allMappings = canonicalExamTopicMappings();
  const fullMappings = allMappings.filter(row => row.exam === 'enem');
  const fullByTopic = new Map(fullMappings.map(row => [row.examTopicId, row] as const));
  const allReferences = semanticReviewQueue().filter(row => row.exam === 'enem');
  const advisoryByTopic = new Map<string, typeof allReferences>();
  for (const row of allReferences) {
    const existing = advisoryByTopic.get(row.targetTopicId) ?? [];
    existing.push(row);
    advisoryByTopic.set(row.targetTopicId, existing);
  }

  const examsForCanonical = new Map<string, Set<string>>();
  for (const row of allMappings) {
    const exams = examsForCanonical.get(row.canonicalId) ?? new Set<string>();
    exams.add(row.exam);
    examsForCanonical.set(row.canonicalId, exams);
  }
  const missing = topics.filter(topic => !fullByTopic.has(topic.id));
  const priorityQueue = missing.map(topic => ({
    topicId: topic.id,
    subject: topic.subject,
    title: topic.topic,
    otherRegisteredExams: topic.exams.filter(exam => exam !== 'enem'),
    advisorySources: (advisoryByTopic.get(topic.id) ?? []).map(ref => ({
      canonicalId: ref.sourceCanonicalId,
      sourceTitle: ref.sourceTitle,
      coveredScope: ref.coveredScope,
      missingScope: ref.missingScope,
      fullyCovered: false as const
    }))
  })).sort((a, b) =>
    Number(b.advisorySources.length > 0) - Number(a.advisorySources.length > 0) ||
    b.otherRegisteredExams.length - a.otherRegisteredExams.length ||
    a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title)
  );

  const subjects = [...new Set(topics.map(topic => topic.subject))].sort().map(subject => {
    const subjectTopics = topics.filter(topic => topic.subject === subject);
    const deep = subjectTopics.filter(topic => fullByTopic.has(topic.id)).length;
    return {
      subject,
      total: subjectTopics.length,
      distinctExactTitles: new Set(subjectTopics.map(topic => topic.topic)).size,
      uniqueDeepCanonicalLessons: new Set(subjectTopics.filter(topic => fullByTopic.has(topic.id)).map(topic => fullByTopic.get(topic.id)!.canonicalId)).size,
      approvedSemanticLinks: subjectTopics.filter(topic => fullByTopic.get(topic.id)?.mappingKind === 'reviewed-semantic').length,
      deep,
      missing: subjectTopics.length - deep,
      partialOnly: subjectTopics.filter(topic =>
        !fullByTopic.has(topic.id) && advisoryByTopic.has(topic.id)
      ).length
    };
  });
  const unresolved = unresolvedPartialCandidates().filter(candidate =>
    topics.some(topic => topic.id === candidate.targetTopicId)
  );
  const deepCanonicalIds = [...new Set(fullMappings.map(row => row.canonicalId))];
  return {
    exam: 'enem' as const,
    /** These are editorial titles in Kognos, not 180 official ENEM skills. */
    source: 'exam-blueprints.ts / exam-syllabus.ts (editorial)',
    topics: topics.length,
    distinctExactTitles: new Set(topics.map(topic => topic.topic)).size,
    subjects,
    /** Explicitly catalogued editorial memberships, never inferred official skills. */
    registeredExamTopicIds: topics.map(topic => topic.id),
    /** One canonical ID may serve multiple exams; these are verified full links only. */
    fullCanonicalMappings: fullMappings.map(row => ({
      examTopicId: row.examTopicId, canonicalId: row.canonicalId, mappingKind: row.mappingKind
    })),
    deep: fullMappings.length,
    missing: missing.length,
    uniqueDeepCanonicalLessons: deepCanonicalIds.length,
    approvedSemanticLinks: fullMappings.filter(row => row.mappingKind === 'reviewed-semantic').length,
    fullLinksSharedWithOtherExams: fullMappings.filter(row =>
      [...(examsForCanonical.get(row.canonicalId) ?? [])].some(exam => exam !== 'enem')
    ).length,
    partialAdvisoryLinks: allReferences.length,
    partialOnlyTopics: priorityQueue.filter(row => row.advisorySources.length > 0).length,
    unresolvedPartialCandidates: unresolved.length,
    /** Reuse means shared references; never actual deletion of persisted data. */
    persistedDuplicatesDeleted: 0,
    priorityQueue
  };
}
