import test from 'node:test';
import assert from 'node:assert/strict';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalRegistryAudit,canonicalCoverageByExam,partialCoverageByExam,provaoPartialReferencesByExam} from './canonical-lesson-reuse.ts';

test('registry audit reconciles blueprint and official Provão advisory references without double counting',()=>{
 const audit=canonicalRegistryAudit();
 const blueprint=partialCoverageByExam();
 const official=provaoPartialReferencesByExam();
 const coverage=canonicalCoverageByExam();
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const rows=[...blueprint[exam],...official[exam]];
  const unique=new Set(rows.map(row=>JSON.stringify([row.examTopicId,row.canonicalId])));
  const missing=new Set(rows.filter(row=>coverage[exam].missingTopicIds.includes(row.examTopicId)).map(row=>row.examTopicId));
  const reported=audit.exams.find(row=>row.exam===exam);
  assert.ok(reported);
  assert.equal(reported.partialAdvisories,unique.size);
  assert.equal(reported.partialMissingTopics,missing.size);
  assert.ok(reported.partialMissingTopics<=reported.missing);
 }
 assert.equal(audit.partialAdvisories,audit.exams.reduce((sum,row)=>sum+row.partialAdvisories,0));
 assert.equal(audit.partialMissingTopics,audit.exams.reduce((sum,row)=>sum+row.partialMissingTopics,0));
});

test('advisory links never count as completed canonical exam-topic mappings',()=>{
 const audit=canonicalRegistryAudit();
 for(const row of audit.exams){
  assert.equal(row.entries,row.deep+row.missing);
  assert.equal(row.links,row.deep);
 }
 assert.equal(audit.persistentDuplicatesDeleted,0);
});
