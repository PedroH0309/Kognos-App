import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam,canonicalReuseAudit,canonicalCoverageByExam,verifiedCanonicalLessonLinks,reviewedCanonicalAliasForExam,verifiedPartialAssociations,reviewedPartialAssociations,partialCoverageByExam,canonicalExamTopicMappings,semanticReviewQueue} from './canonical-lesson-reuse.ts';

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


test('semantic review queue is exam-scoped and never grants complete coverage',()=>{
 const queue=semanticReviewQueue();
 const partials=partialCoverageByExam();
 assert.equal(queue.length,Object.values(partials).reduce((n,refs)=>n+refs.length,0));
 assert.equal(new Set(queue.map(item=>item.exam+'\\0'+item.targetTopicId)).size,queue.length);
 for(const item of queue){
  assert.equal(item.eligibleForFullAlias,false);
  assert.ok(item.coveredScope&&item.missingScope);
  const target=curriculumTopics.find(topic=>topic.id===item.targetTopicId);
  const source=curriculumTopics.find(topic=>topic.id===item.sourceCanonicalId);
  assert.ok(target&&source);
  assert.equal(target.subject,item.subject);
  assert.equal(source.subject,item.subject);
  assert.equal(target.topic,item.targetTitle);
  assert.equal(source.topic,item.sourceTitle);
  assert.ok(examBlueprints[item.exam].subjects[target.subject]?.includes(target.topic));
  assert.ok(partials[item.exam].some(ref=>ref.examTopicId===target.id&&ref.canonicalId===source.id));
  assert.equal(reviewedCanonicalAliasForExam(item.exam,target),null);
 }
});
