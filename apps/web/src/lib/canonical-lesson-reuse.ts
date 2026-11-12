/** Verified exact-scope cross-exam canonical lesson registry.
 * Exam blueprints are editorial orientations, not official equivalence certificates.
 * This registry never infers equivalence from shared tokens or a broad subject.
 * Historical topic IDs and persisted progress remain untouched.
 */
import {curriculumTopics, type CurriculumTopic} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {provaoTopics} from './provao-paulista.ts';
import {courseId} from './curriculum-id.ts';

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
}[] = [{
  subject:'Português',
  targetTitle:'Coesão, coerência e progressão temática',
  sourceTitle:'Estratégias de articulação do texto: mecanismos de coesão (coesão lexical, referencial e…',
  targetTopicId:courseId('Português','Coesão, coerência e progressão temática'),
  sourceTopicId:courseId('Português','Estratégias de articulação do texto: mecanismos de coesão (coesão lexical, referencial e…'),
  exams:['enem','fuvest','vunesp'],
  rationale:'Escopo integral revisado: a aula oficial 4.2 do Provão abrange coesão referencial, lexical, sequencial, coerência global e progressão temática. As três partes didáticas aprofundadas tratam desses objetivos, com exemplos e itens específicos. Este alias não estende automaticamente o conteúdo a temas como argumentação geral, interpretação ou gêneros textuais.'
}];
 
/** Explicitly reviewed *partial* overlap, never a full-coverage alias.
 * Citologia includes membrane transport, organelles, cell division and other
 * objectives; cellular organization alone cannot satisfy that syllabus.
 * These references are advisory only and never enter canonicalLessonForExam.
 */
export const reviewedPartialAssociations = [{
  subject:'Biologia',
  targetTitle:'Citologia',
  sourceTitle:'Organização celular dos seres vivos',
  /** Exact Provão syllabus leaf; short editorial sourceTitle is not a registered topic. */
  officialSourceTitle:'Organização celular dos seres vivos (célula procariota e células eucariotas vegetal e animal)',
  coveredScope:'Organização celular, distinção procarionte/eucarionte e níveis de organização.',
  missingScope:'Membranas e transportes, organelas, metabolismo e divisão celular exigem aulas próprias.'
},{
  subject:'Biologia',
  targetTitle:'Células, organelas e membranas',
  sourceTitle:'Organização celular dos seres vivos',
  /** Exact Provão syllabus leaf; short editorial sourceTitle is not a registered topic. */
  officialSourceTitle:'Organização celular dos seres vivos (célula procariota e células eucariotas vegetal e animal)',
  coveredScope:'Organização celular e distinção entre células procariontes e eucariontes.',
  missingScope:'Membranas e transportes, estrutura e funções das organelas exigem aprofundamento específico.'
},{
  // ETEC historical track: cellular organization overlaps, but the health
  // component of this broad title is not taught by the canonical source.
  subject:'Biologia',
  targetTitle:'Célula e saúde',
  sourceTitle:'Organização celular dos seres vivos',
  /** Exact Provão syllabus leaf; short editorial sourceTitle is not a registered topic. */
  officialSourceTitle:'Organização celular dos seres vivos (célula procariota e células eucariotas vegetal e animal)',
  coveredScope:'Organização celular e diferenças entre células procariontes e eucariontes.',
  missingScope:'Saúde, prevenção de doenças, relações entre células e funcionamento do organismo exigem conteúdos próprios.'
}] as const;

/** One immutable-in-practice authored source across repeated advisory snapshots.
 * Cache only successful, ID-checked resolutions; never cache missing lessons.
 * This maps static authored content, not tenant-owned or persisted user state.
 */
const sharedOfficialProvaoLessons=new Map<string,NonNullable<ReturnType<typeof deepProvaoLesson>>>();
function sharedOfficialProvaoLesson(source:CurriculumTopic){
 const cached=sharedOfficialProvaoLessons.get(source.id);
 if(cached)return cached;
 const lesson=deepProvaoLesson(source);
 if(!lesson||lesson.id!==source.id)return null;
 sharedOfficialProvaoLessons.set(source.id,lesson);
 return lesson;
}

/** Reuse an authored Provão source as an advisory reference even when its
 * official leaf is not included in the exam-blueprint-derived curriculum.
 * This never creates an exam membership, full alias or persisted topic.
 * The canonical source ID is content-derived from its actual official title.
 */
export function provaoSourcedPartialReferences(){
  return reviewedPartialAssociations.flatMap(entry=>{
    const target=curriculumTopics.find(topic=>
      topic.subject===entry.subject&&topic.topic===entry.targetTitle);
    if(!target)return [];
    const source=provaoTopics.find(topic=>
      topic.subject===entry.subject&&topic.topic===entry.officialSourceTitle);
    if(!source)return [];
    const canonicalId=courseId(source.subject,source.topic);
    if(canonicalId===target.id)return [];
    const registeredSource=curriculumTopics.find(topic=>topic.id===canonicalId);
    const sourceTopic:CurriculumTopic=registeredSource??{
      id:canonicalId,subject:source.subject,topic:source.topic,exams:['saresp']
    };
    const lesson=sharedOfficialProvaoLesson(sourceTopic);
    if(!lesson)return [];
    return [{
      ...entry,targetTopicId:target.id,canonicalId,
      sourceGrade:source.grade,sourceCode:source.code,lesson,
      fullyCovered:false as const
    }];
  });
}

/** Exam-scoped advisory projections. A Provão source is not automatically a
 * registered lesson for the target exam, and does not affect deep coverage.
 */
export function provaoPartialReferencesByExam(){
  const references=provaoSourcedPartialReferences();
  return Object.fromEntries((Object.keys(examBlueprints) as ExamId[]).map(exam=>[
    exam,references.filter(ref=>{
      const target=curriculumTopics.find(topic=>topic.id===ref.targetTopicId);
      return Boolean(target&&examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
    }).map(ref=>({
      exam,examTopicId:ref.targetTopicId,canonicalId:ref.canonicalId,
      coveredScope:ref.coveredScope,missingScope:ref.missingScope,
      sourceGrade:ref.sourceGrade,sourceCode:ref.sourceCode,
      /** Shared authored object; advisory only, never a full-coverage alias. */
      lesson:ref.lesson,fullyCovered:false as const
    }))
  ])) as Record<ExamId,{
    exam:ExamId;examTopicId:string;canonicalId:string;coveredScope:string;
    missingScope:string;sourceGrade:number;sourceCode:string;
    lesson:NonNullable<ReturnType<typeof deepProvaoLesson>>;fullyCovered:false
  }[]>;
}

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

/** Unresolved editorial candidates, with explicit blockers instead of silent omissions.
 * These are not canonical mappings and never grant coverage to any exam.
 */
export function unresolvedPartialCandidates(){
 // Build the official source lookup once. A Provão source may be authored
 // without being present in the broad exam-blueprint-derived catalog.
 const officialSources=new Map<string,(typeof provaoTopics)[number]>(provaoTopics.map(topic=>[
  topic.subject+'\\0'+topic.topic,topic
 ] as const));
 const resolvedOfficial=new Set(provaoSourcedPartialReferences().map(ref=>
  ref.subject+'\\0'+ref.targetTitle+'\\0'+ref.sourceTitle));
 return reviewedPartialAssociations.flatMap(entry=>{
  const target=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.targetTitle);
  const source=curriculumTopics.find(t=>t.subject===entry.subject&&t.topic===entry.sourceTitle);
  const official=officialSources.get(entry.subject+'\\0'+entry.officialSourceTitle);
  const officialId=official?courseId(official.subject,official.topic):null;
  const sourceId=source?.id??officialId;
  const sourceTopic:CurriculumTopic|undefined=source??(official&&officialId?{
   id:officialId,subject:official.subject,topic:official.topic,exams:['saresp']
  }:undefined);
  const sourceLesson=sourceTopic?deepProvaoLesson(sourceTopic):null;
  const key=entry.subject+'\\0'+entry.targetTitle+'\\0'+entry.sourceTitle;
  if(target&&sourceId&&target.id!==sourceId&&
   (sourceLesson||resolvedOfficial.has(key)))return [];
  return [{
   subject:entry.subject,targetTitle:entry.targetTitle,sourceTitle:entry.sourceTitle,
   targetTopicId:target?.id??null,sourceTopicId:sourceId??null,
   blockers:[
    ...(!target?['target-not-registered' as const]:[]),
    ...(!sourceTopic?['source-not-registered' as const]:[]),
    ...(sourceTopic&&!sourceLesson?['source-not-deep' as const]:[]),
    ...(target&&sourceId&&target.id===sourceId?['same-topic-id' as const]:[])
   ],
   missingScope:entry.missingScope,eligibleForFullAlias:false as const
  }];
 });
}

/** Advisory cross-exam partial links: never count toward deep coverage.
 * Each reference is anchored to a real registered exam-topic membership.
 * The canonical source is a single authored lesson; the broader target
 * retains its historical ID and remains missing until fully covered.
 */
export function partialCoverageByExam(){
  // Resolve authored sources once, then project only onto registered exam topics.
  // This keeps all exam snapshots consistent without treating partial links as deep coverage.
  const verified=verifiedPartialAssociations();
  return Object.fromEntries((Object.keys(examBlueprints) as ExamId[]).map(exam=>[
    exam,verified.flatMap(partial=>{
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

/** Actionable review queue derived from real registered exam-topic memberships.
 * Partial overlaps are NOT eligible for automatic full aliases. Reviewers must
 * close every missing objective before adding a reviewedSemanticAliases entry.
 */
export function semanticReviewQueue(){
  // Include both blueprint-registered and official Provão-authored deep sources.
  // A source outside the blueprint remains advisory; no full alias is created.
  const partials=partialCoverageByExam();
  const provaoPartials=provaoPartialReferencesByExam();
  return (Object.keys(examBlueprints) as ExamId[]).flatMap(exam=>{
    const seen=new Set<string>();
    const references=[
      ...partials[exam].map(ref=>({...ref,sourceOrigin:'blueprint' as const})),
      ...provaoPartials[exam].map(ref=>({...ref,sourceOrigin:'provao' as const}))
    ];
    return references.flatMap(ref=>{
      const key=ref.examTopicId+'\\0'+ref.canonicalId;
      if(seen.has(key))return [];
      seen.add(key);
      const target=curriculumTopics.find(topic=>topic.id===ref.examTopicId);
      if(!target)return [];
      const registeredSource=curriculumTopics.find(topic=>topic.id===ref.canonicalId);
      const officialSource=provaoTopics.find(topic=>
        courseId(topic.subject,topic.topic)===ref.canonicalId);
      const sourceTitle=registeredSource?.topic??officialSource?.topic;
      const sourceSubject=registeredSource?.subject??officialSource?.subject;
      if(!sourceTitle||sourceSubject!==target.subject)return [];
      return [{
        exam,targetTopicId:target.id,targetTitle:target.topic,
        sourceCanonicalId:ref.canonicalId,sourceTitle,
        sourceOrigin:ref.sourceOrigin,subject:target.subject,
        coveredScope:ref.coveredScope,missingScope:ref.missingScope,
        eligibleForFullAlias:false as const
      }];
    });
  });
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

/** Deterministic authoring backlog. Repeated exam memberships are grouped by
 * historical topic ID, so one new deep lesson is prioritized once, not once
 * per exam. Advisory partial links never count as completed coverage.
 */
export function canonicalAuthoringBacklog(){
  const coverage=canonicalCoverageByExam();
  const partials=partialCoverageByExam();
  const provaoPartials=provaoPartialReferencesByExam();
  return curriculumTopics.flatMap(topic=>{
    const exams=(Object.keys(examBlueprints) as ExamId[]).filter(exam=>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
    const missingExams=exams.filter(exam=>coverage[exam].missingTopicIds.includes(topic.id));
    if(!missingExams.length)return [];
    // Include authored official Provão sources even when their leaf titles are
    // absent from the broad exam-blueprint catalog. Both kinds stay advisory.
    const advisorySources=[...new Set(missingExams.flatMap(exam=>[
      ...partials[exam].filter(ref=>ref.examTopicId===topic.id).map(ref=>ref.canonicalId),
      ...provaoPartials[exam].filter(ref=>ref.examTopicId===topic.id).map(ref=>ref.canonicalId)
    ]))];
    return [{
      topicId:topic.id,subject:topic.subject,title:topic.topic,
      missingExams,examCount:missingExams.length,
      advisorySourceIds:advisorySources,
      hasPartialReference:advisorySources.length>0
    }];
  }).sort((a,b)=>b.examCount-a.examCount||
    Number(b.hasPartialReference)-Number(a.hasPartialReference)||
    a.subject.localeCompare(b.subject)||a.title.localeCompare(b.title)||
    a.topicId.localeCompare(b.topicId));
}

/** Grade-scoped official Provão inventory, independent of the broad editorial
 * SARESP blueprint. A leaf is counted only when its exact official syllabus
 * identity resolves to an authored deep lesson. Repeated grade memberships
 * share one canonical lesson ID without changing historical progress keys.
 */
/** Runtime-grade mappings for official Provão leaves. These do not claim that
 * editorial SARESP blueprint membership covers an official grade. A repeated
 * leaf across grades resolves to the same authored lesson object, while its
 * grade/code provenance remains explicit and stable.
 */
export function officialProvaoCanonicalGradeMappings(){
  return provaoTopics.flatMap(row=>{
    const canonicalId=courseId(row.subject,row.topic);
    const registered=curriculumTopics.find(topic=>topic.id===canonicalId);
    const source:CurriculumTopic=registered??{
      id:canonicalId,subject:row.subject,topic:row.topic,exams:['saresp']
    };
    const lesson=sharedOfficialProvaoLesson(source);
    if(!lesson||lesson.id!==canonicalId)return [];
    return [{
      grade:row.grade,officialCode:row.code,subject:row.subject,
      officialTitle:row.topic,canonicalId,lesson
    }];
  });
}

export function officialProvaoGradeCoverage(){
  return ([1,2,3] as const).map(grade=>{
    const entries=provaoTopics.filter(row=>row.grade===grade);
    const mapped=entries.map(row=>{
      const canonicalId=courseId(row.subject,row.topic);
      const topic:CurriculumTopic={id:canonicalId,subject:row.subject,topic:row.topic,exams:['saresp']};
      return {row,canonicalId,deep:Boolean(deepProvaoLesson(topic))};
    });
    const deep=mapped.filter(item=>item.deep);
    return {
      grade,totalEntries:entries.length,deepEntries:deep.length,
      missingEntries:entries.length-deep.length,
      uniqueCanonicalDeepIds:[...new Set(deep.map(item=>item.canonicalId))],
      missingOfficialCodes:mapped.filter(item=>!item.deep).map(item=>item.row.subject+':'+item.row.code)
    };
  });
}

export function canonicalReuseAudit(){
  const links=verifiedCanonicalLessonLinks();
  const coverageByExam=canonicalCoverageByExam();
  // Resolve each exam-topic reference once per audit; repeated resolution is
  // expensive and could make independently computed counters diverge.
  const mappings=canonicalExamTopicMappings();
  const partials=partialCoverageByExam();
  const officialPartials=provaoPartialReferencesByExam();
  const examEntries=Object.fromEntries(
    (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
      exam,Object.values(examBlueprints[exam].subjects).reduce((sum,topics)=>sum+topics.length,0)
    ])
  );
  return {
    examEntries,
    /** Independently reconciled from the actual runtime exam-topic mappings. */
    canonicalMappingsByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,mappings.filter(mapping=>mapping.exam===exam).length
      ])
    ) as Record<ExamId,number>,
    /** Reviewed, differently titled full aliases only; partial overlaps excluded. */
    semanticMappingsByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,mappings.filter(mapping=>
          mapping.exam===exam&&mapping.mappingKind==='reviewed-semantic').length
      ])
    ) as Record<ExamId,number>,
    coverageByExam,
    /** Prioritized unique missing historical topics, never duplicated per exam. */
    authoringBacklog:canonicalAuthoringBacklog(),
    /** Provão-authored advisory references, not full exam coverage. */
    provaoPartialReferencesByExam:officialPartials,
    /** Canonical IDs referenced by distinct historical topic IDs across exams.
     * Exact-title reuse shares one historical ID and is NOT semantic deduplication. */
    crossTopicCanonicalGroups:(()=>{
      const groups=new Map<string,Set<string>>();
      for(const mapping of mappings){
        const ids=groups.get(mapping.canonicalId)??new Set<string>();
        ids.add(mapping.examTopicId);
        groups.set(mapping.canonicalId,ids);
      }
      return [...groups.values()].filter(ids=>ids.size>1).length;
    })(),
    /** Extra historical topic identities sharing a canonical lesson, not database rows removed. */
    crossTopicReferencesReused:(()=>{
      const groups=new Map<string,Set<string>>();
      for(const mapping of mappings){
        const ids=groups.get(mapping.canonicalId)??new Set<string>();
        ids.add(mapping.examTopicId);
        groups.set(mapping.canonicalId,ids);
      }
      return [...groups.values()].reduce((sum,ids)=>sum+Math.max(0,ids.size-1),0);
    })(),
    partialCoverageByExam:partials,
    /** Partial references are advisory; distinguish still-missing targets from
     * targets independently covered by their own complete deep lesson. */
    partialOnlyMissingByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,new Set([
          ...partials[exam],
          ...officialPartials[exam]
        ].filter(ref=>coverageByExam[exam].missingTopicIds.includes(ref.examTopicId))
         .map(ref=>ref.examTopicId+'\\0'+ref.canonicalId)).size
      ])
    ) as Record<ExamId,number>,
    /** Actionable backlog: partial associations whose target is still missing a full lesson.
     * Do not count these references as deep coverage or as approved full aliases. */
    partialMissingTopicIdsByExam:Object.fromEntries(
      (Object.keys(examBlueprints) as ExamId[]).map(exam=>[
        exam,[...new Set([
          ...partials[exam],
          ...officialPartials[exam]
        ].filter(ref=>coverageByExam[exam].missingTopicIds.includes(ref.examTopicId))
         .map(ref=>ref.examTopicId))]
      ])
    ) as Record<ExamId,string[]>,
    allUniqueDeepCanonicalIds:[...new Set([
      ...curriculumTopics.map(topic=>deepProvaoLesson(topic)?.id),
      // Official Provão leaves can have authored depth without being listed
      // in the editorial multi-exam blueprint. Count the authored lesson once.
      ...provaoTopics.map(topic=>{
        const id=courseId(topic.subject,topic.topic);
        const registered=curriculumTopics.find(item=>item.id===id);
        const source:CurriculumTopic=registered??{
          id,subject:topic.subject,topic:topic.topic,exams:['saresp']
        };
        return deepProvaoLesson(source)?.id;
      })
    ].filter((id):id is string=>Boolean(id)))].length,
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
    unresolvedSemanticCandidates:unresolvedPartialCandidates().length,
    unresolvedPartialCandidateDetails:unresolvedPartialCandidates(),
    /** Explicit editorial cross-title aliases only; count registered approved rows, not per-exam links. */
    reviewedNonExactAliases:reviewedSemanticAliases.filter(alias=>curriculumTopics.some(t=>t.id===alias.targetTopicId&&t.subject===alias.subject&&t.topic===alias.targetTitle)&&curriculumTopics.some(t=>t.id===alias.sourceTopicId&&t.subject===alias.subject&&t.topic===alias.sourceTitle&&deepProvaoLesson(t))&&alias.exams.some(exam=>examBlueprints[exam]?.subjects[alias.subject]?.includes(alias.targetTitle))).length
  };
}
