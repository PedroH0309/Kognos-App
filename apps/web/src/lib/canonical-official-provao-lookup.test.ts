import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoTopics} from './provao-paulista.ts';
import {officialProvaoCanonicalGradeMappings} from './canonical-lesson-reuse.ts';
import {canonicalOfficialProvaoLesson} from './canonical-official-provao-lookup.ts';

test('official grade and code lookup reuses exact canonical lesson, without invented memberships',()=>{
 const mappings=officialProvaoCanonicalGradeMappings();
 assert.ok(mappings.length>0);
 for(const mapping of mappings){
  const resolved=canonicalOfficialProvaoLesson(mapping.grade as 1|2|3,mapping.subject,mapping.officialCode,mapping.officialTitle);
  assert.ok(resolved);
  assert.strictEqual(resolved.lesson,mapping.lesson);
  assert.equal(resolved.canonicalId,mapping.canonicalId);
  assert.equal(canonicalOfficialProvaoLesson(mapping.grade as 1|2|3,mapping.subject,mapping.officialCode,mapping.officialTitle+' (ampliado)'),null);
  assert.equal(canonicalOfficialProvaoLesson(mapping.grade as 1|2|3,mapping.subject,mapping.officialCode+'-forged',mapping.officialTitle),null);
  for(const grade of [1,2,3] as const){
   if(provaoTopics.some(row=>row.grade===grade&&row.subject===mapping.subject&&row.code===mapping.officialCode&&row.topic===mapping.officialTitle))continue;
   assert.equal(canonicalOfficialProvaoLesson(grade,mapping.subject,mapping.officialCode,mapping.officialTitle),null);
  }
 }
});
