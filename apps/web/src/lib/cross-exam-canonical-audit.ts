/** Cross-exam editorial coverage audit. No official-syllabus equivalence is inferred. */
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, semanticReviewQueue, unresolvedPartialCandidates} from './canonical-lesson-reuse.ts';

export function crossExamCanonicalAudit() {
  const mappings=canonicalExamTopicMappings();
  const partials=semanticReviewQueue();
  const unresolved=unresolvedPartialCandidates();
  const exams=(Object.keys(examBlueprints) as ExamId[]).map(exam=>{
    const topics=curriculumTopics.filter(topic=>topic.exams.includes(exam));
    const topicIds=new Set(topics.map(topic=>topic.id));
    const full=mappings.filter(row=>row.exam===exam&&topicIds.has(row.examTopicId));
    const fullIds=new Set(full.map(row=>row.examTopicId));
    const partial=partials.filter(row=>row.exam===exam&&topicIds.has(row.targetTopicId));
    const partialOnly=new Set(partial.filter(row=>!fullIds.has(row.targetTopicId)).map(row=>row.targetTopicId));
    const bySubject=[...new Set(topics.map(topic=>topic.subject))].sort().map(subject=>{
      const entries=topics.filter(topic=>topic.subject===subject);
      const ids=new Set(entries.map(topic=>topic.id));
      const covered=full.filter(row=>ids.has(row.examTopicId));
      return {
        subject,entries:entries.length,distinctExactTitles:new Set(entries.map(topic=>topic.topic)).size,
        deepLinks:covered.length,uniqueDeepCanonicalLessons:new Set(covered.map(row=>row.canonicalId)).size,
        missing:entries.length-new Set(covered.map(row=>row.examTopicId)).size
      };
    });
    return {
      exam,entries:topics.length,distinctExactTitles:new Set(topics.map(topic=>topic.topic)).size,
      deepLinks:full.length,uniqueDeepCanonicalLessons:new Set(full.map(row=>row.canonicalId)).size,
      missing:topics.length-fullIds.size,
      approvedSemanticLinks:full.filter(row=>row.mappingKind==='reviewed-semantic').length,
      partialAdvisoryLinks:partial.length,partialOnlyTopics:partialOnly.size,
      unresolvedPartialCandidates:unresolved.filter(row=>row.targetTopicId!==null&&topicIds.has(row.targetTopicId)).length,
      subjects:bySubject
    };
  });
  const canonicalGroups=new Map<string,Set<ExamId>>();
  for(const row of mappings){
    const group=canonicalGroups.get(row.canonicalId)??new Set<ExamId>();
    group.add(row.exam);canonicalGroups.set(row.canonicalId,group);
  }
  return {
    source:'Kognos editorial exam blueprints, not official skill coverage' as const,
    exams,uniqueDeepCanonicalLessons:canonicalGroups.size,
    crossExamCanonicalGroups:[...canonicalGroups.values()].filter(exams=>exams.size>1).length,
    verifiedFullExamLinks:mappings.length,
    /** No persisted row is deleted by shared references. */
    persistedDuplicatesDeleted:0 as const
  };
}
