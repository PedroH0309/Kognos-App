import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam,canonicalReuseAudit,canonicalCoverageByExam,verifiedCanonicalLessonLinks,reviewedCanonicalAliasForExam,verifiedPartialAssociations,reviewedPartialAssociations,partialCoverageByExam} from './canonical-lesson-reuse.ts';

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
 assert.equal(audit.avoidedDeepLessonCopies,audit.verifiedExamLessonLinks-audit.canonicalDeepLessons);
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
  assert.ok(association.missingScope.includes('Membranas'));
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
