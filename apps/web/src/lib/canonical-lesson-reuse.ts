/** Verified exact-scope cross-exam canonical lesson registry.
 * Exam blueprints are editorial orientations, not official equivalence certificates.
 * This registry never infers equivalence from shared tokens or a broad subject.
 * Historical topic IDs and persisted progress remain untouched.
 */
import {curriculumTopics, type CurriculumTopic} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';

export type CanonicalLessonLink={
  canonicalId:string;
  subject:string;
  title:string;
  exams:readonly ExamId[];
  topicIds:readonly string[];
  /** Stable exam-specific references; a shared canonical ID is not an exam-topic ID. */
  examTopicRefs:readonly {exam:ExamId;topicId:string}[];
  /** Multiple exam-topic references point to one authored lesson, not cloned lessons. */
  lesson:NonNullable<ReturnType<typeof deepProvaoLesson>>;
};

/** Only identical subject + full syllabus title can be automatically shared.
 * Semantically similar but differently scoped labels require an explicit human-reviewed alias.
 */
export function verifiedCanonicalLessonLinks():CanonicalLessonLink[]{
  const links:CanonicalLessonLink[]=[];
  for(const topic of curriculumTopics){
    const exams=(Object.keys(examBlueprints) as ExamId[]).filter(
      exam=>examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)
    );
    if(exams.length<2)continue;
    const lesson=deepProvaoLesson(topic);
    if(!lesson)continue;
    links.push({
      canonicalId:topic.id,subject:topic.subject,title:topic.topic,
      exams,topicIds:[topic.id],
      examTopicRefs:exams.map(exam=>({exam,topicId:topic.id})),lesson
    });
  }
  return links;
}


/** No non-exact semantic alias is approved until BOTH real catalog entries,
 * their deep source and equivalent curricular scope have been verified.
 * The earlier rationalism/empiricism alias referenced a nonexistent target.
 */
export const reviewedSemanticAliases: readonly {
  subject:string;targetTitle:string;sourceTitle:string;rationale:string;
  /** Explicit historical IDs prevent accidental remapping when titles change. */
  targetTopicId:string;sourceTopicId:string;
  /** Approval is exam-scoped: a new exam never inherits an alias implicitly. */
  exams:readonly ExamId[];
}[] = [];

/** Explicitly reviewed *partial* overlap, never a full-coverage alias.
 * Citologia includes membrane transport, organelles, cell division and other
 * objectives; cellular organization alone cannot satisfy that syllabus.
 * These references are advisory only and never enter canonicalLessonForExam.
 */
export const reviewedPartialAssociations = [{
  subject:'Biologia',
  targetTitle:'Citologia',
  sourceTitle:'Organização celular dos seres vivos',
  coveredScope:'Organização celular, distinção procarionte/eucarionte e níveis de organização.',
  missingScope:'Membranas e transportes, organelas, metabolismo e divisão celular exigem aulas próprias.'
},{
  subject:'Biologia',
  targetTitle:'Células, organelas e membranas',
  sourceTitle:'Organização celular dos seres vivos',
  coveredScope:'Organização celular e distinção entre células procariontes e eucariontes.',
  missingScope:'Membranas e transportes, estrutura e funções das organelas exigem aprofundamento específico.'
},{
  // ETEC historical track: cellular organization overlaps, but the health
  // component of this broad title is not taught by the canonical source.
  subject:'Biologia',
  targetTitle:'Célula e saúde',
  sourceTitle:'Organização celular dos seres vivos',
  coveredScope:'Organização celular e diferenças entre células procariontes e eucariontes.',
  missingScope:'Saúde, prevenção de doenças, relações entre células e funcionamento do organismo exigem conteúdos próprios.'
}] as const;

export function verifiedPartialAssociations(){
  return reviewedPartialAssociations.flatMap(entry=>{
    const target=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.targetTitle);
    const source=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.sourceTitle);
    if(!target||!source||target.id===source.id)return [];
    const lesson=deepProvaoLesson(source);
    if(!lesson)return [];
    return [{...entry,targetTopicId:target.id,canonicalId:source.id,lesson}];
  });
}

/** Advisory cross-exam partial links: never count toward deep coverage.
 * Each reference is anchored to a real registered exam-topic membership.
 * The canonical source is a single authored lesson; the broader target
 * retains its historical ID and remains missing until fully covered.
 */
export function partialCoverageByExam(){
  return Object.fromEntries((Object.keys(examBlueprints) as ExamId[]).map(exam=>[
    exam,verifiedPartialAssociations().flatMap(partial=>{
      const target=curriculumTopics.find(topic=>topic.id===partial.targetTopicId);
      if(!target||!examBlueprints[exam].subjects[target.subject]?.includes(target.topic))return [];
      return [{
        exam,examTopicId:target.id,canonicalId:partial.canonicalId,
        coveredScope:partial.coveredScope,missingScope:partial.missingScope,
        fullyCovered:false as const
      }];
    })
  ])) as Record<ExamId,{
    exam:ExamId;examTopicId:string;canonicalId:string;
    coveredScope:string;missingScope:string;fullyCovered:false
  }[]>;
}

export function reviewedCanonicalAliasForExam(exam:ExamId,topic:CurriculumTopic){
  // An alias must never bypass the same historical-ID and registered-scope
  // checks as canonicalLessonForExam, including when called directly.
  const registered=curriculumTopics.find(item=>item.id===topic.id);
  if(!registered||registered.subject!==topic.subject||registered.topic!==topic.topic)return null;
  if(!examBlueprints[exam]?.subjects[registered.subject]?.includes(registered.topic))return null;
  const alias=reviewedSemanticAliases.find(item=>
    item.subject===registered.subject&&item.targetTitle===registered.topic&&
    item.targetTopicId===registered.id&&item.exams.includes(exam));
  if(!alias)return null;
  const source=curriculumTopics.find(item=>item.id===alias.sourceTopicId);
  if(!source||source.id===registered.id||source.subject!==alias.subject||source.topic!==alias.sourceTitle)return null;
  const lesson=deepProvaoLesson(source);
  if(!lesson)return null;
  return {canonicalId:source.id,examTopicId:registered.id,lesson,scope:alias.rationale};
}

/** Preserve the historical curriculum topic ID and lesson content object.
 * Non-exact aliases are deliberately not guessed here.
 */
export function canonicalLessonForExam(exam:ExamId,topic:CurriculumTopic){
  // Never accept a fabricated or stale exam-topic identity solely because its
  // title resembles a registered topic. Historical IDs remain authoritative.
  const registered=curriculumTopics.find(item=>item.id===topic.id);
  if(!registered||registered.subject!==topic.subject||registered.topic!==topic.topic)return null;
  if(!examBlueprints[exam]?.subjects[registered.subject]?.includes(registered.topic))return null;
  return deepProvaoLesson(registered)??reviewedCanonicalAliasForExam(exam,registered)?.lesson??null;
}

/** Stable, explicit mappings for EVERY verified deep exam-topic membership.
 * Unlike shared-group reports, this also includes single-exam lessons and
 * future reviewed non-exact aliases. A mapping never rewrites a historical ID.
 */
export function canonicalExamTopicMappings(){
  return (Object.keys(examBlueprints) as ExamId[]).flatMap(exam=>
    curriculumTopics.flatMap(topic=>{
      if(!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic))return [];
      const lesson=canonicalLessonForExam(exam,topic);
      if(!lesson)return [];
      return [{
        exam,examTopicId:topic.id,canonicalId:lesson.id,
        subject:topic.subject,topicTitle:topic.topic,
        mappingKind:(lesson.id===topic.id?'exact':'reviewed-semantic') as 'exact'|'reviewed-semantic',
        lesson
      }];
    })
  );
}

/** Exact per-exam coverage is measured against the actual registered blueprint.
 * One canonical topic may be counted in several exams, but is authored once.
 * No fuzzy/partial association is promoted to a completed deep lesson.
 */
export function canonicalCoverageByExam(){
  return Object.fromEntries((Object.keys(examBlueprints) as ExamId[]).map(exam=>{
    const topics=curriculumTopics.filter(topic=>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)
    );
    const deep=topics.filter(topic=>Boolean(canonicalLessonForExam(exam,topic)));
    const missing=topics.filter(topic=>!canonicalLessonForExam(exam,topic));
    return [exam,{
      total:topics.length,
      deep:deep.length,
      missing:missing.length,
      canonicalIds:[...new Set(deep.map(topic=>canonicalLessonForExam(exam,topic)!.id))],
      missingTopicIds:missing.map(topic=>topic.id)
    }];
  })) as Record<ExamId,{
    total:number;deep:number;missing:number;
    canonicalIds:string[];missingTopicIds:string[];
  }>;
}

export function canonicalReuseAudit(){
  const links=verifiedCanonicalLessonLinks();
  const coverageByExam=canonicalCoverageByExam();
  const examEntries=Object.fromEntries(
    (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
      exam,Object.values(examBlueprints[exam].subjects).reduce((sum,topics)=>sum+topics.length,0)
    ])
  );
  return {
    examEntries,
    coverageByExam,
    partialCoverageByExam:partialCoverageByExam(),
    /** Partial references are advisory; distinguish still-missing targets from
     * targets independently covered by their own complete deep lesson. */
    partialOnlyMissingByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,partialCoverageByExam()[exam].filter(ref=>
          coverageByExam[exam].missingTopicIds.includes(ref.examTopicId)).length
      ])
    ) as Record<ExamId,number>,
    /** Actionable backlog: partial associations whose target is still missing a full lesson.
     * Do not count these references as deep coverage or as approved full aliases. */
    partialMissingTopicIdsByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,[...new Set(partialCoverageByExam()[exam]
          .filter(ref=>coverageByExam[exam].missingTopicIds.includes(ref.examTopicId))
          .map(ref=>ref.examTopicId))]
      ])
    ) as Record<ExamId,string[]>,
    allUniqueDeepCanonicalIds:[...new Set(curriculumTopics.map(topic=>deepProvaoLesson(topic)?.id).filter((id):id is string=>Boolean(id)))].length,
    /** Distinct literal titles, independent of discipline; do not confuse with topic IDs. */
    distinctCurriculumTitles:new Set(curriculumTopics.map(topic=>topic.topic)).size,
    /** Distinct subject + title pairs are the historical curriculum identities. */
    distinctSubjectTitlePairs:new Set(curriculumTopics.map(topic=>topic.subject+'\u0000'+topic.topic)).size,
    verifiedExactScopeGroups:links.length,
    /** All distinct deep lessons in the curriculum, including single-exam lessons. */
    canonicalDeepLessons:new Set(curriculumTopics.map(topic=>deepProvaoLesson(topic)?.id).filter(Boolean)).size,
    /** Exact-title shared groups are a subset, not the full authored catalog. */
    crossExamSharedCanonicalLessons:links.length,
    /** Total deep exam-topic references, including single-exam topics. */
    totalDeepExamTopicReferences:Object.values(coverageByExam).reduce((sum,coverage)=>sum+coverage.deep,0),
    /** Full shared-reference savings are hypothetical; no persisted records were deleted. */
    crossExamReferenceReuse:links.reduce((sum,link)=>sum+link.exams.length-1,0),
    verifiedExamLessonLinks:links.reduce((sum,link)=>sum+link.examTopicRefs.length,0),
    /** One canonical lesson can be referenced by several exam-specific identities. */
    uniqueExamTopicReferences:new Set(links.flatMap(link=>link.examTopicRefs.map(ref=>ref.exam+'\\0'+ref.topicId))).size,
    avoidedDeepLessonCopies:links.reduce((sum,link)=>sum+link.exams.length-1,0),
    /** Counts represent shared references, not deleted or migrated database rows. */
    actualPersistedDuplicatesRemoved:0,
    potentialCopiesAvoidedByReference:links.reduce((sum,link)=>sum+link.exams.length-1,0),
    uniqueExactTitlesByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,new Set(Object.entries(examBlueprints[exam].subjects)
          .flatMap(([subject,titles])=>titles.map(title=>subject+'\\0'+title))).size
      ])
    ),
    verifiedLinksByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,links.filter(link=>link.exams.includes(exam)).length
      ])
    ),
    /** Counts only confirmed deep-lesson references; no introductory outlines. */
    deepCurriculumTopics:curriculumTopics.filter(topic=>Boolean(deepProvaoLesson(topic))).length,
    missingDeepCurriculumTopics:curriculumTopics.filter(topic=>!deepProvaoLesson(topic)).length,
    /** Unreviewed semantic overlaps must not be reported as full coverage. */
    approvedPartialAssociations:verifiedPartialAssociations().length,
    /** No automated fuzzy matching is accepted as pedagogical equivalence. */
    unresolvedSemanticCandidates:reviewedPartialAssociations.length-verifiedPartialAssociations().length,
    /** No differently titled semantic aliases have yet been certified. */
    reviewedNonExactAliases:reviewedSemanticAliases.filter(alias=>curriculumTopics.some(t=>t.id===alias.targetTopicId&&t.subject===alias.subject&&t.topic===alias.targetTitle)&&curriculumTopics.some(t=>t.id===alias.sourceTopicId&&t.subject===alias.subject&&t.topic===alias.sourceTitle&&deepProvaoLesson(t))&&alias.exams.some(exam=>examBlueprints[exam]?.subjects[alias.subject]?.includes(alias.targetTitle))).length
  };
}
