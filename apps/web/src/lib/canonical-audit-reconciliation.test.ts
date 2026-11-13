import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalReuseAudit, canonicalCoverageByExam, reviewedSemanticAliases, semanticReviewQueue} from './canonical-lesson-reuse.ts';

/** Independently reconcile the audit against the registered curriculum.
 * These are structural checks, not claims of pedagogical homologation.
 */
test('cross-exam audit reconciles exact registered entries, titles and canonical mappings', () => {
  const audit=canonicalReuseAudit();
  const coverage=canonicalCoverageByExam();
  const mappings=canonicalExamTopicMappings();
  const exams=Object.keys(examBlueprints) as ExamId[];
  assert.equal(audit.distinctCurriculumTitles,new Set(curriculumTopics.map(t=>t.topic)).size);
  assert.equal(audit.distinctSubjectTitlePairs,
    new Set(curriculumTopics.map(t=>t.subject+'\u0000'+t.topic)).size);
  assert.equal(audit.totalDeepExamTopicReferences,mappings.length);
  for(const exam of exams){
    const registered=curriculumTopics.filter(topic=>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
    const blueprintEntries=Object.values(examBlueprints[exam].subjects)
      .reduce((total,titles)=>total+titles.length,0);
    const rows=mappings.filter(row=>row.exam===exam);
    assert.equal(audit.examEntries[exam],blueprintEntries,exam);
    assert.equal(coverage[exam].total,registered.length,exam);
    assert.equal(coverage[exam].deep,rows.length,exam);
    assert.equal(coverage[exam].missing,registered.length-rows.length,exam);
    assert.equal(audit.canonicalMappingsByExam[exam],rows.length,exam);
    assert.equal(audit.semanticMappingsByExam[exam],
      rows.filter(row=>row.mappingKind==='reviewed-semantic').length,exam);
    assert.equal(new Set(rows.map(row=>row.examTopicId)).size,rows.length,exam);
    assert.equal(new Set(coverage[exam].missingTopicIds).size,coverage[exam].missing,exam);
    assert.ok(rows.every(row=>!coverage[exam].missingTopicIds.includes(row.examTopicId)),exam);
  }
});

test('semantic groups are counted by distinct historical targets, never by repeated exams',()=>{
  const audit=canonicalReuseAudit();
  const mappings=canonicalExamTopicMappings();
  const grouped=new Map<string,Set<string>>();
  for(const mapping of mappings){
    const targets=grouped.get(mapping.canonicalId)??new Set<string>();
    targets.add(mapping.examTopicId);
    grouped.set(mapping.canonicalId,targets);
  }
  assert.equal(audit.crossTopicCanonicalGroups,
    [...grouped.values()].filter(ids=>ids.size>1).length);
  assert.equal(audit.crossTopicReferencesReused,
    [...grouped.values()].reduce((n,ids)=>n+Math.max(0,ids.size-1),0));
  assert.equal(audit.reviewedNonExactAliases,reviewedSemanticAliases.length);
  assert.equal(audit.actualPersistedDuplicatesRemoved,0);
});

test('advisory review queue cannot masquerade as completed canonical coverage',()=>{
  const mappings=canonicalExamTopicMappings();
  for(const candidate of semanticReviewQueue()){
    assert.equal(candidate.eligibleForFullAlias,false);
    assert.ok(candidate.coveredScope.trim().length>0);
    assert.ok(candidate.missingScope.trim().length>0);
    assert.ok(!mappings.some(row=>row.exam===candidate.exam&&
      row.examTopicId===candidate.targetTopicId&&
      row.canonicalId===candidate.sourceCanonicalId&&
      row.mappingKind==='reviewed-semantic'),
      'Partial association incorrectly promoted: '+candidate.exam+'/'+candidate.targetTopicId);
  }
});
