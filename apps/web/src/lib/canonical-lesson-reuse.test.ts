import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics,type CurriculumTopic} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {courseId} from './curriculum-id.ts';
import {provaoTopics} from './provao-paulista.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam,canonicalReuseAudit,canonicalCoverageByExam,verifiedCanonicalLessonLinks,reviewedCanonicalAliasForExam,verifiedPartialAssociations,reviewedPartialAssociations,partialCoverageByExam,canonicalExamTopicMappings,semanticReviewQueue,unresolvedPartialCandidates,canonicalAuthoringBacklog,provaoSourcedPartialReferences,provaoPartialReferencesByExam,officialProvaoGradeCoverage} from './canonical-lesson-reuse.ts';

test('cross-exam links reuse the same canonical authored lesson data',()=>{
 const links=verifiedCanonicalLessonLinks();
 assert.ok(links.length>0,'Expected at least one exact-title cross-exam deep lesson');
 for(const link of links){
  const topic=curriculumTopics.find(item=>item.id===link.canonicalId);
  assert.ok(topic);
  for(const exam of link.exams){
   const lesson=canonicalLessonForExam(exam,topic);
   assert.ok(lesson);
   assert.equal(lesson.id,link.canonicalId);
   assert.strictEqual(lesson.sections,link.lesson.sections);
   assert.strictEqual(lesson.tasks,link.lesson.tasks);
  }
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   if(!link.exams.includes(exam))
    assert.equal(canonicalLessonForExam(exam,topic),null,'Unrelated exam inherited '+link.title);
  }
 }
});
test('cross-exam audit counts links without claiming semantic matches',()=>{
 const audit=canonicalReuseAudit();
 assert.equal(audit.verifiedExactScopeGroups,verifiedCanonicalLessonLinks().length);
 assert.ok(audit.verifiedExamLessonLinks>=audit.verifiedExactScopeGroups*2);
 assert.equal(audit.avoidedDeepLessonCopies,audit.verifiedExamLessonLinks-audit.crossExamSharedCanonicalLessons);
 assert.ok(audit.reviewedNonExactAliases>=0);
});
test('broad or unrelated syllabus labels never inherit a partial deep lesson',()=>{
 const candidate=curriculumTopics.find(t=>t.subject==='Biologia'&&t.topic==='Citologia');
 if(candidate)assert.equal(canonicalLessonForExam('etec',candidate),null);
});

test('unverified differently named epistemology topics never receive fabricated aliases',()=>{
 const target=curriculumTopics.find(t=>t.subject==='Filosofia'&&t.topic==='Racionalismo e empirismo');
 const source=curriculumTopics.find(t=>t.subject==='Filosofia'&&t.topic==='As abordagens racionalistas e empiristas do conhecimento');
 assert.ok(!target || !source, 'Reassess scope and enable a reviewed alias only after both titles exist');
 if(target){
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
  }
 }
 const unrelated=curriculumTopics.find(t=>t.subject==='Biologia'&&t.topic==='Citologia');
 if(unrelated)assert.equal(reviewedCanonicalAliasForExam('enem',unrelated),null);
});

test('audit distinguishes reference reuse from actual persisted duplicate removal',()=>{
 const audit=canonicalReuseAudit();
 assert.equal(audit.actualPersistedDuplicatesRemoved,0);
 assert.equal(audit.potentialCopiesAvoidedByReference,audit.avoidedDeepLessonCopies);
 assert.equal(audit.deepCurriculumTopics+audit.missingDeepCurriculumTopics,curriculumTopics.length);
 assert.equal(audit.approvedPartialAssociations,verifiedPartialAssociations().length);
 assert.equal(audit.unresolvedSemanticCandidates,reviewedPartialAssociations.length-verifiedPartialAssociations().length);
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const entries=Object.entries(examBlueprints[exam].subjects)
   .flatMap(([subject,titles])=>titles.map(title=>subject+'\\0'+title));
  assert.equal(audit.uniqueExactTitlesByExam[exam],new Set(entries).size);
  assert.equal(audit.verifiedLinksByExam[exam],verifiedCanonicalLessonLinks().filter(link=>link.exams.includes(exam)).length);
  assert.ok(audit.verifiedLinksByExam[exam]<=audit.examEntries[exam]);
 }
});

test('per-exam deep coverage reconciles every registered topic without fuzzy matches',()=>{
 const coverage=canonicalCoverageByExam();
 const audit=canonicalReuseAudit();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const expected=curriculumTopics.filter(topic=>examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
  const item=coverage[exam];
  assert.equal(item.total,expected.length);
  assert.equal(item.total,item.deep+item.missing);
  assert.equal(item.missingTopicIds.length,item.missing);
  assert.equal(item.canonicalIds.length,new Set(item.canonicalIds).size);
  assert.equal(audit.coverageByExam[exam].deep,item.deep);
  for(const topic of expected){
   const lesson=canonicalLessonForExam(exam,topic);
   assert.equal(item.missingTopicIds.includes(topic.id),!lesson,
    'Misclassified '+exam+' / '+topic.subject+' / '+topic.topic);
   if(lesson)assert.ok(item.canonicalIds.includes(lesson.id));
  }
 }
 assert.equal(audit.allUniqueDeepCanonicalIds,
  new Set(curriculumTopics.map(topic=>Object.values(coverage).flatMap(item=>item.canonicalIds).includes(topic.id)?topic.id:null).filter(Boolean)).size);
});

test('cell biology partial reuse never masquerades as full Citologia coverage',()=>{
 const partials=verifiedPartialAssociations();
 for(const association of partials){
  assert.equal(association.subject,'Biologia');
  assert.notEqual(association.targetTopicId,association.canonicalId);
  assert.ok(association.missingScope.includes(association.targetTitle==='Célula e saúde'?'Saúde':'Membranas'));
  const target=curriculumTopics.find(t=>t.id===association.targetTopicId);
  const source=curriculumTopics.find(t=>t.id===association.canonicalId);
  assert.ok(target&&source);
  assert.equal(source.subject,target.subject);
  assert.strictEqual(association.lesson.sections,
   verifiedPartialAssociations().find(item=>item.canonicalId===association.canonicalId)?.lesson.sections);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null,
    'Partial overlap must never be promoted to full alias for '+exam);
  }
 }
});

test('canonical identity is unique while exam-topic references remain stable and isolated',()=>{
 const links=verifiedCanonicalLessonLinks();
 const allRefs=links.flatMap(link=>link.examTopicRefs.map(ref=>ref.exam+'\\0'+ref.topicId));
 assert.equal(new Set(allRefs).size,allRefs.length,'Duplicate exam-topic association');
 for(const link of links){
  assert.deepEqual(link.topicIds,[link.canonicalId]);
  assert.equal(link.examTopicRefs.length,link.exams.length);
  for(const ref of link.examTopicRefs){
   assert.ok(link.exams.includes(ref.exam));
   assert.equal(ref.topicId,link.canonicalId);
   const topic=curriculumTopics.find(item=>item.id===ref.topicId);
   assert.ok(topic);
   assert.ok(examBlueprints[ref.exam].subjects[topic.subject]?.includes(topic.topic));
   assert.strictEqual(canonicalLessonForExam(ref.exam,topic)?.sections,link.lesson.sections);
  }
 }
 assert.equal(canonicalReuseAudit().uniqueExamTopicReferences,allRefs.length);
});


test('cross-exam reuse rejects forged historical IDs and altered syllabus scope',()=>{
 const link=verifiedCanonicalLessonLinks()[0];
 assert.ok(link,'Need a real shared lesson for the isolation regression');
 const topic=curriculumTopics.find(item=>item.id===link.canonicalId);
 assert.ok(topic);
 const exam=link.exams[0];
 assert.ok(canonicalLessonForExam(exam,topic));
 assert.equal(canonicalLessonForExam(exam,{...topic,id:topic.id+'-forged'}),null);
 assert.equal(canonicalLessonForExam(exam,{...topic,topic:topic.topic+' (escopo ampliado)'}),null);
 assert.equal(canonicalLessonForExam(exam,{...topic,subject:'Disciplina não cadastrada'}),null);
 for(const unrelated of Object.keys(examBlueprints) as ExamId[]){
  if(!link.exams.includes(unrelated))assert.equal(canonicalLessonForExam(unrelated,topic),null);
 }
});

test('partial cross-exam references preserve target IDs and never grant deep coverage',()=>{
 const byExam=partialCoverageByExam();
 const audit=canonicalReuseAudit();
 assert.deepEqual(audit.partialCoverageByExam,byExam);
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const seen=new Set<string>();
  for(const ref of byExam[exam]){
   assert.equal(ref.exam,exam);
   assert.equal(ref.fullyCovered,false);
   assert.ok(ref.coveredScope.length>0&&ref.missingScope.length>0);
   assert.ok(!seen.has(ref.examTopicId),'Duplicate partial target within exam');
   seen.add(ref.examTopicId);
   const target=curriculumTopics.find(t=>t.id===ref.examTopicId);
   const source=curriculumTopics.find(t=>t.id===ref.canonicalId);
   assert.ok(target&&source);
   assert.equal(target.subject,source.subject);
   assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
   assert.ok(verifiedPartialAssociations().some(p=>
    p.targetTopicId===target.id&&p.canonicalId===source.id));
   // Partial content must not be returned through the reviewed full-alias path.
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
  }
 }
});

test('reviewed alias entry point rejects forged identity even before an alias is approved',()=>{
 const topic=curriculumTopics.find(t=>t.subject==='Biologia'&&t.topic==='Citologia')??curriculumTopics[0];
 assert.ok(topic);
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  assert.equal(reviewedCanonicalAliasForExam(exam,{...topic,id:topic.id+'-forged'}),null);
  assert.equal(reviewedCanonicalAliasForExam(exam,{...topic,subject:'Disciplina inexistente'}),null);
  assert.equal(reviewedCanonicalAliasForExam(exam,{...topic,topic:topic.topic+' - ampliado'}),null);
 }
});


test('audit distinguishes literal titles from subject-qualified historical topic identities',()=>{
 const audit=canonicalReuseAudit();
 assert.equal(audit.distinctCurriculumTitles,new Set(curriculumTopics.map(topic=>topic.topic)).size);
 assert.equal(audit.distinctSubjectTitlePairs,new Set(curriculumTopics.map(topic=>topic.subject+'\\0'+topic.topic)).size);
 assert.equal(audit.distinctSubjectTitlePairs,curriculumTopics.length);
 assert.ok(audit.distinctCurriculumTitles<=audit.distinctSubjectTitlePairs);
});

test('audit counts all authored deep lessons separately from shared cross-exam groups',()=>{
 const audit=canonicalReuseAudit();
 const coverage=canonicalCoverageByExam();
 const uniqueDeep=new Set(curriculumTopics.flatMap(topic=>{
  const exams=(Object.keys(examBlueprints) as ExamId[]).filter(exam=>
   examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
  return exams.flatMap(exam=>canonicalLessonForExam(exam,topic)?.id?[canonicalLessonForExam(exam,topic)!.id]:[]);
 }));
 assert.equal(audit.canonicalDeepLessons,uniqueDeep.size);
 assert.equal(audit.crossExamSharedCanonicalLessons,verifiedCanonicalLessonLinks().length);
 assert.ok(audit.canonicalDeepLessons>=audit.crossExamSharedCanonicalLessons);
 assert.equal(audit.totalDeepExamTopicReferences,
  Object.values(coverage).reduce((sum,exam)=>sum+exam.deep,0));
 assert.equal(audit.crossExamReferenceReuse,audit.avoidedDeepLessonCopies);
 assert.equal(audit.actualPersistedDuplicatesRemoved,0);
});


test('two different broad cell-biology titles share only a verified partial source',()=>{
 const reviewed=reviewedPartialAssociations.filter(item=>item.sourceTitle==='Organização celular dos seres vivos');
 assert.deepEqual(reviewed.map(item=>item.targetTitle).sort(),[
  'Citologia','Célula e saúde','Células, organelas e membranas'
 ].sort());
 assert.equal(new Set(reviewed.map(item=>item.targetTitle)).size,3);
 for(const partial of verifiedPartialAssociations().filter(item=>
  item.sourceTitle==='Organização celular dos seres vivos')){
  const target=curriculumTopics.find(topic=>topic.id===partial.targetTopicId);
  assert.ok(target);
  assert.ok(partial.missingScope.includes(partial.targetTitle==='Célula e saúde'?'Saúde':'Membranas'));
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const refs: ReturnType<typeof partialCoverageByExam>[ExamId] = partialCoverageByExam()[exam].filter(ref=>ref.examTopicId===target.id);
   assert.equal(refs.length,examBlueprints[exam].subjects[target.subject]?.includes(target.topic)?1:0);
   for(const ref of refs){
    assert.equal(ref.canonicalId,partial.canonicalId);
    assert.equal(ref.fullyCovered,false);
   }
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
  }
 }
});

test('partial-only counts exclude targets with independently complete deep lessons',()=>{
 const audit=canonicalReuseAudit();
 const partials=partialCoverageByExam();
 const coverage=canonicalCoverageByExam();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const missing=new Set(coverage[exam].missingTopicIds);
  const expected=partials[exam].filter(ref=>missing.has(ref.examTopicId)).length;
  assert.equal(audit.partialOnlyMissingByExam[exam],expected);
  assert.ok(expected<=partials[exam].length);
  assert.equal(coverage[exam].total,coverage[exam].deep+coverage[exam].missing);
 }
});

test('partial backlog IDs are registered, missing and isolated per exam',()=>{
 const audit=canonicalReuseAudit();
 const partials=partialCoverageByExam();
 const coverage=canonicalCoverageByExam();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const ids=audit.partialMissingTopicIdsByExam[exam];
  assert.equal(new Set(ids).size,ids.length);
  const expected=[...new Set(partials[exam].filter(ref=>
   coverage[exam].missingTopicIds.includes(ref.examTopicId)).map(ref=>ref.examTopicId))];
  assert.deepEqual(ids,expected);
  for(const id of ids){
   const topic=curriculumTopics.find(item=>item.id===id);
   assert.ok(topic);
   assert.ok(examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
   assert.equal(canonicalLessonForExam(exam,topic),null);
  }
 }
});

test('complete canonical mapping preserves historical exam IDs and shares one authored object',()=>{
 const mappings=canonicalExamTopicMappings();
 const coverage=canonicalCoverageByExam();
 assert.equal(mappings.length,Object.values(coverage).reduce((sum,item)=>sum+item.deep,0));
 assert.equal(new Set(mappings.map(m=>m.exam+'\\0'+m.examTopicId)).size,mappings.length);
 for(const mapping of mappings){
  const topic=curriculumTopics.find(t=>t.id===mapping.examTopicId);
  assert.ok(topic);
  assert.equal(mapping.subject,topic.subject);
  assert.equal(mapping.topicTitle,topic.topic);
  assert.ok(examBlueprints[mapping.exam].subjects[topic.subject]?.includes(topic.topic));
  const resolved=canonicalLessonForExam(mapping.exam,topic);
  assert.ok(resolved);
  assert.equal(resolved.id,mapping.canonicalId);
  assert.strictEqual(resolved.sections,mapping.lesson.sections);
  assert.strictEqual(resolved.tasks,mapping.lesson.tasks);
  assert.equal(mapping.mappingKind,mapping.canonicalId===topic.id?'exact':'reviewed-semantic');
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   if(!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic)){
    assert.equal(mappings.some(m=>m.exam===exam&&m.examTopicId===topic.id),false);
   }
  }
 }
});


test('semantic alias registry requires explicit exam approval and immutable historical IDs',()=>{
 // Empty until a full curricular scope review; never infer from similar labels.
 const candidates=curriculumTopics.filter(t=>t.subject==='Biologia'&&
  ['Citologia','Células, organelas e membranas'].includes(t.topic));
 for(const topic of candidates){
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   assert.equal(reviewedCanonicalAliasForExam(exam,topic),null);
   assert.equal(reviewedCanonicalAliasForExam(exam,{...topic,id:topic.id+'-renamed'}),null);
  }
 }
 assert.equal(canonicalReuseAudit().reviewedNonExactAliases,0);
});

test('ETEC cell-and-health candidate is advisory even without a registered canonical source',()=>{
 const candidate=reviewedPartialAssociations.find(item=>
  item.subject==='Biologia'&&item.targetTitle==='Célula e saúde'&&
  item.sourceTitle==='Organização celular dos seres vivos');
 assert.ok(candidate,'The explicitly reviewed partial candidate must stay documented');
 assert.ok(examBlueprints.etec.subjects.Biologia?.includes(candidate.targetTitle),
  'The ETEC study blueprint should retain its historical cell-and-health title');
 const target=curriculumTopics.find(t=>t.subject===candidate.subject&&t.topic===candidate.targetTitle);
 assert.ok(target,'The ETEC target must resolve to a real registered curriculum topic');
 // A ProVão depth title does not automatically become an exam-blueprint topic.
 // An unregistered (or not deeply authored) source cannot produce a verified link.
 const source=curriculumTopics.find(t=>t.subject===candidate.subject&&t.topic===candidate.sourceTitle);
 const partial=verifiedPartialAssociations().find(p=>p.targetTopicId===target.id&&
  p.sourceTitle===candidate.sourceTitle);
 if(partial){
  assert.ok(source,'A verified partial link must have a registered source topic');
  assert.equal(partial.canonicalId,source.id);
  assert.match(partial.missingScope,/Saúde/);
 }else{
  assert.ok(canonicalReuseAudit().unresolvedSemanticCandidates>=1,
   'Unverified candidate must be counted as unresolved, not as full coverage');
 }
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const refs: ReturnType<typeof partialCoverageByExam>[ExamId] = partialCoverageByExam()[exam].filter(ref=>ref.examTopicId===target.id);
  const registered: boolean = Boolean(examBlueprints[exam].subjects.Biologia?.includes(target.topic));
  assert.equal(refs.length,partial&&registered?1:0,
   'Never project an unresolved or unrelated ETEC candidate to '+exam);
  assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
  for(const ref of refs){
   assert.equal(ref.fullyCovered,false);
   assert.equal(ref.canonicalId,partial?.canonicalId);
  }
 }
});

test('audit canonical mappings reconcile by exam and never promote partial links',()=>{
 const audit=canonicalReuseAudit();
 const mappings=canonicalExamTopicMappings();
 const partials=partialCoverageByExam();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const examMappings=mappings.filter(mapping=>mapping.exam===exam);
  assert.equal(audit.canonicalMappingsByExam[exam],examMappings.length);
  assert.equal(audit.canonicalMappingsByExam[exam],audit.coverageByExam[exam].deep);
  assert.equal(audit.semanticMappingsByExam[exam],
   examMappings.filter(mapping=>mapping.mappingKind==='reviewed-semantic').length);
  assert.ok(audit.semanticMappingsByExam[exam]<=audit.canonicalMappingsByExam[exam]);
  for(const partial of partials[exam]){
   if(audit.coverageByExam[exam].missingTopicIds.includes(partial.examTopicId)){
    assert.ok(!examMappings.some(mapping=>mapping.examTopicId===partial.examTopicId),
     'Partial-only topic was promoted to full coverage: '+exam+'/'+partial.examTopicId);
   }
  }
 }
});

test('audit never confuses repeated exam references with distinct historical topic reuse',()=>{
 const audit=canonicalReuseAudit();
 const byCanonical=new Map<string,Set<string>>();
 for(const mapping of canonicalExamTopicMappings()){
  const ids=byCanonical.get(mapping.canonicalId)??new Set<string>();
  ids.add(mapping.examTopicId);
  byCanonical.set(mapping.canonicalId,ids);
 }
 const groups=[...byCanonical.values()];
 assert.equal(audit.crossTopicCanonicalGroups,groups.filter(ids=>ids.size>1).length);
 assert.equal(audit.crossTopicReferencesReused,
  groups.reduce((sum,ids)=>sum+Math.max(0,ids.size-1),0));
 assert.ok(audit.crossTopicReferencesReused<=audit.totalDeepExamTopicReferences);
 assert.equal(audit.actualPersistedDuplicatesRemoved,0);
});

test('single-snapshot audit reconciles canonical references and partial backlog',()=>{
 const audit=canonicalReuseAudit();
 const mappings=canonicalExamTopicMappings();
 const partials=partialCoverageByExam();
 const uniqueHistoricalIds=new Map<string,Set<string>>();
 for(const mapping of mappings){
  const ids=uniqueHistoricalIds.get(mapping.canonicalId)??new Set<string>();
  ids.add(mapping.examTopicId);
  uniqueHistoricalIds.set(mapping.canonicalId,ids);
 }
 assert.equal(audit.crossTopicCanonicalGroups,
  [...uniqueHistoricalIds.values()].filter(ids=>ids.size>1).length);
 assert.equal(audit.crossTopicReferencesReused,
  [...uniqueHistoricalIds.values()].reduce((sum,ids)=>sum+Math.max(0,ids.size-1),0));
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  assert.equal(audit.canonicalMappingsByExam[exam],
   mappings.filter(mapping=>mapping.exam===exam).length);
  assert.deepEqual(audit.partialCoverageByExam[exam],partials[exam]);
  const missing=new Set(audit.coverageByExam[exam].missingTopicIds);
  assert.deepEqual(audit.partialMissingTopicIdsByExam[exam],
   [...new Set(partials[exam].filter(ref=>missing.has(ref.examTopicId)).map(ref=>ref.examTopicId))]);
 }
});

test('partial projection is deterministic across repeated audits and never leaks into unregistered exams',()=>{
 const first=partialCoverageByExam();
 const second=partialCoverageByExam();
 assert.deepEqual(first,second);
 const reviewed=verifiedPartialAssociations();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const expected=reviewed.filter(partial=>{
   const target=curriculumTopics.find(topic=>topic.id===partial.targetTopicId);
   return Boolean(target&&examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
  });
  assert.equal(first[exam].length,expected.length);
  for(const ref of first[exam]){
   assert.equal(ref.fullyCovered,false);
   assert.ok(expected.some(item=>item.targetTopicId===ref.examTopicId&&item.canonicalId===ref.canonicalId));
  }
 }
});


test('semantic review queue reconciles both source catalogs without granting full coverage',()=>{
 const queue=semanticReviewQueue();
 const partials=partialCoverageByExam();
 const provao=provaoPartialReferencesByExam();
 const expected=new Set<string>();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  for(const ref of [...partials[exam],...provao[exam]]){
   expected.add(exam+'\\0'+ref.examTopicId+'\\0'+ref.canonicalId);
  }
 }
 assert.equal(queue.length,expected.size);
 assert.equal(new Set(queue.map(item=>item.exam+'\\0'+item.targetTopicId+'\\0'+item.sourceCanonicalId)).size,queue.length);
 for(const item of queue){
  assert.equal(item.eligibleForFullAlias,false);
  assert.ok(item.coveredScope&&item.missingScope);
  const target=curriculumTopics.find(topic=>topic.id===item.targetTopicId);
  assert.ok(target);
  assert.equal(target.subject,item.subject);
  assert.equal(target.topic,item.targetTitle);
  assert.ok(examBlueprints[item.exam].subjects[target.subject]?.includes(target.topic));
  const source=curriculumTopics.find(topic=>topic.id===item.sourceCanonicalId);
  if(item.sourceOrigin==='blueprint'){
   assert.ok(source);
   assert.equal(source.subject,item.subject);
   assert.equal(source.topic,item.sourceTitle);
   assert.ok(partials[item.exam].some(ref=>ref.examTopicId===target.id&&ref.canonicalId===source.id));
  }else{
   assert.ok(provao[item.exam].some(ref=>
    ref.examTopicId===target.id&&ref.canonicalId===item.sourceCanonicalId));
  }
  assert.equal(reviewedCanonicalAliasForExam(item.exam,target),null);
 }
});

test('unresolved partial candidates expose blockers without granting exam coverage',()=>{
 const unresolved=unresolvedPartialCandidates();
 const audit=canonicalReuseAudit();
 assert.equal(audit.unresolvedSemanticCandidates,unresolved.length);
 assert.deepEqual(audit.unresolvedPartialCandidateDetails,unresolved);
 assert.equal(new Set(unresolved.map(item=>item.subject+'\\0'+item.targetTitle+'\\0'+item.sourceTitle)).size,unresolved.length);
 for(const candidate of unresolved){
  assert.ok(candidate.blockers.length>0);
  assert.equal(candidate.eligibleForFullAlias,false);
  assert.ok(candidate.missingScope.length>0);
  const target=curriculumTopics.find(t=>t.id===candidate.targetTopicId);
  const source=curriculumTopics.find(t=>t.id===candidate.sourceTopicId);
  if(candidate.blockers.includes('target-not-registered'))assert.equal(target,undefined);
  if(candidate.blockers.includes('source-not-registered'))assert.equal(source,undefined);
  if(target){
   for(const exam of Object.keys(examBlueprints) as ExamId[]){
    assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
    assert.ok(!partialCoverageByExam()[exam].some(ref=>
     ref.examTopicId===target.id&&ref.canonicalId===candidate.sourceTopicId));
   }
  }
 }
});

test('cross-exam authoring backlog deduplicates historical topics and excludes completed lessons',()=>{
 const backlog=canonicalAuthoringBacklog();
 const coverage=canonicalCoverageByExam();
 const partials=partialCoverageByExam();
 const provaoPartials=provaoPartialReferencesByExam();
 assert.deepEqual(canonicalReuseAudit().authoringBacklog,backlog);
 assert.equal(new Set(backlog.map(item=>item.topicId)).size,backlog.length);
 assert.equal(backlog.reduce((sum,item)=>sum+item.examCount,0),
  Object.values(coverage).reduce((sum,item)=>sum+item.missing,0));
 for(let i=1;i<backlog.length;i++){
  assert.ok(backlog[i-1].examCount>=backlog[i].examCount);
 }
 for(const item of backlog){
  const topic=curriculumTopics.find(t=>t.id===item.topicId);
  assert.ok(topic);
  assert.equal(item.subject,topic.subject);
  assert.equal(item.title,topic.topic);
  assert.equal(item.examCount,item.missingExams.length);
  assert.ok(item.examCount>0);
  assert.equal(new Set(item.missingExams).size,item.missingExams.length);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const missing=coverage[exam].missingTopicIds.includes(topic.id);
   assert.equal(item.missingExams.includes(exam),missing);
   if(missing)assert.equal(canonicalLessonForExam(exam,topic),null);
  }
  const expected=[...new Set(item.missingExams.flatMap(exam=>[
   ...partials[exam].filter(ref=>ref.examTopicId===topic.id).map(ref=>ref.canonicalId),
   ...provaoPartials[exam].filter(ref=>ref.examTopicId===topic.id).map(ref=>ref.canonicalId)
  ]))];
  assert.deepEqual(item.advisorySourceIds,expected);
  assert.equal(item.hasPartialReference,expected.length>0);
 }
});

test('authoring backlog includes only verified Provão sources for still-missing exam topics',()=>{
 const backlog=canonicalAuthoringBacklog();
 const byExam=provaoPartialReferencesByExam();
 const coverage=canonicalCoverageByExam();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  for(const ref of byExam[exam]){
   const item=backlog.find(entry=>entry.topicId===ref.examTopicId);
   const missing=coverage[exam].missingTopicIds.includes(ref.examTopicId);
   if(missing){
    assert.ok(item,'Missing target must remain in authoring backlog');
    assert.ok(item.missingExams.includes(exam));
    assert.ok(item.advisorySourceIds.includes(ref.canonicalId));
    assert.equal(item.hasPartialReference,true);
   }else{
    assert.ok(!item?.missingExams.includes(exam),'Completed exam must not be in backlog');
   }
   const target=curriculumTopics.find(topic=>topic.id===ref.examTopicId);
   assert.ok(target);
   assert.equal(ref.fullyCovered,false);
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
  }
 }
});

test('official Provão authored partial sources remain advisory and exam-isolated',()=>{
 const refs=provaoSourcedPartialReferences();
 const byExam=provaoPartialReferencesByExam();
 assert.deepEqual(canonicalReuseAudit().provaoPartialReferencesByExam,byExam);
 for(const ref of refs){
  const target=curriculumTopics.find(t=>t.id===ref.targetTopicId);
  assert.ok(target);
  assert.notEqual(ref.canonicalId,ref.targetTopicId);
  assert.equal(ref.lesson.id,ref.canonicalId);
  assert.equal(ref.fullyCovered,false);
  assert.ok(ref.sourceCode&&ref.sourceGrade>=1&&ref.sourceGrade<=3);
  assert.ok(ref.coveredScope.length>0&&ref.missingScope.length>0);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const actual: ReturnType<typeof provaoPartialReferencesByExam>[ExamId]=byExam[exam].filter(item=>item.examTopicId===target.id&&item.canonicalId===ref.canonicalId);
   const registered: boolean=Boolean(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
   assert.equal(actual.length,registered?1:0);
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
   for(const item of actual)assert.equal(item.fullyCovered,false);
  }
 }
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  for(const ref of byExam[exam]){
   const target=curriculumTopics.find(t=>t.id===ref.examTopicId);
   assert.ok(target);
   assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
   assert.ok(refs.some(item=>item.targetTopicId===ref.examTopicId&&item.canonicalId===ref.canonicalId));
  }
 }
});

test('official Provão deep sources resolve partial blocker audit without granting full aliases',()=>{
 const official=provaoSourcedPartialReferences();
 const unresolved=unresolvedPartialCandidates();
 const audit=canonicalReuseAudit();
 assert.equal(audit.unresolvedSemanticCandidates,unresolved.length);
 for(const ref of official){
  assert.ok(!unresolved.some(item=>item.subject===ref.subject&&
   item.targetTitle===ref.targetTitle&&item.sourceTitle===ref.sourceTitle),
   'An authored official Provão partial source must not remain marked unavailable');
  const target=curriculumTopics.find(topic=>topic.id===ref.targetTopicId);
  assert.ok(target);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const registered: boolean=Boolean(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
   const projected: ReturnType<typeof provaoPartialReferencesByExam>[ExamId]=provaoPartialReferencesByExam()[exam].filter(item=>
    item.examTopicId===target.id&&item.canonicalId===ref.canonicalId);
   assert.equal(projected.length,registered?1:0);
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
   for(const item of projected)assert.equal(item.fullyCovered,false);
  }
 }
});

test('unresolved official Provão candidates distinguish missing registration from missing authored depth',()=>{
 const unresolved=unresolvedPartialCandidates();
 for(const item of unresolved){
  const official=provaoTopics.find(topic=>
   topic.subject===item.subject&&topic.topic===item.sourceTitle);
  const registered=curriculumTopics.find(topic=>
   topic.subject===item.subject&&topic.topic===item.sourceTitle);
  if(official&&!registered){
   assert.ok(item.sourceTopicId,
    'Official source must retain its derived canonical identity');
   assert.ok(!item.blockers.includes('source-not-registered'),
    'Official Provão source must not be misclassified as absent');
   assert.ok(item.blockers.includes('source-not-deep')||
    item.blockers.includes('target-not-registered')||
    item.blockers.includes('same-topic-id'),
    'Unresolved official source requires a genuine remaining blocker');
  }
  if(!official&&!registered){
   assert.equal(item.sourceTopicId,null);
   assert.ok(item.blockers.includes('source-not-registered'));
  }
  assert.equal(item.eligibleForFullAlias,false);
 }
 assert.equal(canonicalReuseAudit().unresolvedSemanticCandidates,unresolved.length);
});

test('cell-organization advisory sources resolve the exact official Provão leaf',()=>{
 const officialTitle='Organização celular dos seres vivos (célula procariota e células eucariotas vegetal e animal)';
 const reviewed=reviewedPartialAssociations.filter(item=>item.sourceTitle==='Organização celular dos seres vivos');
 assert.equal(reviewed.length,3);
 for(const entry of reviewed){
  assert.equal(('officialSourceTitle' in entry)?entry.officialSourceTitle:null,officialTitle);
 }
 assert.ok(provaoTopics.some(topic=>topic.subject==='Biologia'&&topic.topic===officialTitle));
 const refs=provaoSourcedPartialReferences().filter(item=>
  item.sourceTitle==='Organização celular dos seres vivos');
 assert.ok(refs.length>0,'At least one cell-organization advisory reference must resolve');
 for(const ref of refs){
  assert.equal(ref.fullyCovered,false);
  assert.ok(ref.missingScope.length>0);
  assert.equal(ref.lesson.id,ref.canonicalId);
  const target=curriculumTopics.find(topic=>topic.id===ref.targetTopicId);
  assert.ok(target);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   assert.equal(reviewedCanonicalAliasForExam(exam,target),null);
   const examRefs=provaoPartialReferencesByExam()[exam].filter(item=>item.examTopicId===target.id&&item.canonicalId===ref.canonicalId);
   assert.equal(examRefs.length,examBlueprints[exam].subjects[target.subject]?.includes(target.topic)?1:0);
  }
 }
});


test('audit includes unique deep lessons from official Provão leaves outside editorial catalog',()=>{
 const {allUniqueDeepCanonicalIds}=canonicalReuseAudit();
 const canonicalIds=new Set<string>();
 for(const topic of curriculumTopics){
  const lesson=deepProvaoLesson(topic);
  if(lesson)canonicalIds.add(lesson.id);
 }
 for(const topic of provaoTopics){
  const id=courseId(topic.subject,topic.topic);
  const registered=curriculumTopics.find(item=>item.id===id);
  const source:CurriculumTopic=registered??{id,subject:topic.subject,topic:topic.topic,exams:['saresp']};
  const lesson=deepProvaoLesson(source);
  if(lesson)canonicalIds.add(lesson.id);
 }
 assert.equal(allUniqueDeepCanonicalIds,canonicalIds.size);
});

test('partial-only missing audit reconciles official Provão sources without double counting',()=>{
 const audit=canonicalReuseAudit();
 const official=provaoPartialReferencesByExam();
 const blueprint=partialCoverageByExam();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const missing=new Set(audit.coverageByExam[exam].missingTopicIds);
  const expected=new Set([...official[exam],...blueprint[exam]]
   .filter(ref=>missing.has(ref.examTopicId))
   .map(ref=>ref.examTopicId+'\\0'+ref.canonicalId));
  assert.equal(audit.partialOnlyMissingByExam[exam],expected.size);
  for(const ref of official[exam]){
   assert.equal(ref.fullyCovered,false);
   if(!missing.has(ref.examTopicId))continue;
   assert.ok(expected.has(ref.examTopicId+'\\0'+ref.canonicalId));
  }
 }
});


test('official Provão grade coverage reconciles exact deep leaves without inflating full aliases',()=>{
 const grades=officialProvaoGradeCoverage();
 assert.deepEqual(grades.map(item=>item.grade),[1,2,3]);
 for(const report of grades){
  const rows=provaoTopics.filter(row=>row.grade===report.grade);
  assert.equal(report.totalEntries,rows.length);
  assert.equal(report.deepEntries+report.missingEntries,rows.length);
  const resolved=rows.filter(row=>Boolean(deepProvaoLesson({
   id:courseId(row.subject,row.topic),subject:row.subject,topic:row.topic,exams:['saresp']
  })));
  assert.equal(report.deepEntries,resolved.length);
  assert.deepEqual(new Set(report.uniqueCanonicalDeepIds),new Set(resolved.map(row=>courseId(row.subject,row.topic))));
  assert.equal(report.missingOfficialCodes.length,report.missingEntries);
 }
 // Grade counts are an independent official-leaf inventory, not new cross-exam aliases.
 assert.equal(canonicalReuseAudit().reviewedNonExactAliases,0);
});

test('every mapped exact cross-exam reference resolves the identical authored lesson and excludes unrelated exams',()=>{
 const mappings=canonicalExamTopicMappings();
 const byId=new Map<string,typeof mappings>();
 for(const mapping of mappings){
  const group=byId.get(mapping.canonicalId)??[];
  group.push(mapping);
  byId.set(mapping.canonicalId,group);
 }
 for(const [canonicalId,group] of byId){
  if(group.length<2)continue;
  const source=group[0].lesson;
  for(const mapping of group){
   const historical=curriculumTopics.find(topic=>topic.id===mapping.examTopicId);
   assert.ok(historical);
   const resolved=canonicalLessonForExam(mapping.exam,historical);
   assert.ok(resolved);
   assert.equal(resolved.id,canonicalId);
   assert.strictEqual(resolved.sections,source.sections);
   assert.strictEqual(resolved.tasks,source.tasks);
   assert.equal(mapping.mappingKind,'exact');
  }
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   for(const mapping of group){
    if(group.some(item=>item.exam===exam&&item.examTopicId===mapping.examTopicId))continue;
    const topic=curriculumTopics.find(item=>item.id===mapping.examTopicId);
    assert.ok(topic);
    assert.equal(canonicalLessonForExam(exam,topic),null,
     'Unrelated exam inherited canonical lesson '+canonicalId);
   }
  }
 }
});

test('official Provão advisory source shares one lesson object across eligible exam projections',()=>{
 const sources=provaoSourcedPartialReferences();
 const projected=provaoPartialReferencesByExam();
 for(const source of sources){
  const matches=(Object.keys(examBlueprints) as ExamId[])
   .flatMap(exam=>projected[exam].filter(ref=>
    ref.examTopicId===source.targetTopicId&&ref.canonicalId===source.canonicalId));
  for(const match of matches){
   assert.strictEqual(match.lesson,source.lesson);
   assert.strictEqual(match.lesson.sections,source.lesson.sections);
   assert.strictEqual(match.lesson.tasks,source.lesson.tasks);
   assert.equal(match.fullyCovered,false);
   const target=curriculumTopics.find(topic=>topic.id===match.examTopicId);
   assert.ok(target);
   assert.equal(canonicalLessonForExam(match.exam,target),null);
  }
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const target=curriculumTopics.find(topic=>topic.id===source.targetTopicId);
   assert.ok(target);
   if(examBlueprints[exam].subjects[target.subject]?.includes(target.topic))continue;
   assert.equal(projected[exam].some(ref=>ref.examTopicId===target.id&&ref.canonicalId===source.canonicalId),false);
  }
 }
});
