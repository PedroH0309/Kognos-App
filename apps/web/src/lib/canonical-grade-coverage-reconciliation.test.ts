import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoTopics} from './provao-paulista.ts';
import {
 officialProvaoCanonicalGradeMappings,
 officialProvaoGradeCoverage
} from './canonical-lesson-reuse.ts';

test('official grade coverage is derived from the same canonical reader mappings',()=>{
 const mappings=officialProvaoCanonicalGradeMappings();
 const coverage=officialProvaoGradeCoverage();
 const identities=new Set<string>();
 for(const mapping of mappings){
  const key=JSON.stringify([mapping.grade,mapping.subject,mapping.officialCode,mapping.officialTitle]);
  assert.ok(!identities.has(key),'Duplicate official grade mapping: '+key);
  identities.add(key);
  assert.equal(mapping.lesson.id,mapping.canonicalId);
  assert.ok(provaoTopics.some(row=>row.grade===mapping.grade&&row.subject===mapping.subject&&
    row.code===mapping.officialCode&&row.topic===mapping.officialTitle));
 }
 for(const row of coverage){
  const expected=mappings.filter(mapping=>mapping.grade===row.grade);
  assert.equal(row.totalEntries,provaoTopics.filter(topic=>topic.grade===row.grade).length);
  assert.equal(row.deepEntries,expected.length);
  assert.equal(row.missingEntries,row.totalEntries-expected.length);
  assert.deepEqual(new Set(row.uniqueCanonicalDeepIds),
   new Set(expected.map(mapping=>mapping.canonicalId)));
 }
});

test('repeated official leaves share one lesson while preserving grade provenance',()=>{
 const mappings=officialProvaoCanonicalGradeMappings();
 const byId=new Map<string,typeof mappings>();
 for(const mapping of mappings){
  const group=byId.get(mapping.canonicalId)??[];
  group.push(mapping);
  byId.set(mapping.canonicalId,group);
 }
 for(const group of byId.values()){
  for(const mapping of group){
   assert.strictEqual(mapping.lesson,group[0].lesson);
   assert.equal(mapping.lesson.id,mapping.canonicalId);
  }
 }
});
