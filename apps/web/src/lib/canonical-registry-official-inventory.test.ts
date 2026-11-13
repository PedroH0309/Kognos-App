import {test} from 'node:test';
import assert from 'node:assert/strict';
import {canonicalRegistryAudit,canonicalExamTopicMappings,officialProvaoCanonicalGradeMappings} from './canonical-lesson-reuse.ts';

test('registry audit includes official-only authored Provão lessons without inflating blueprint links',()=>{
 const audit=canonicalRegistryAudit();
 const blueprintIds=new Set(canonicalExamTopicMappings().map(row=>row.canonicalId));
 const officialIds=new Set(officialProvaoCanonicalGradeMappings().map(row=>row.canonicalId));
 const allIds=new Set([...blueprintIds,...officialIds]);
 assert.equal(audit.canonicalUniqueLessons,allIds.size);
 assert.equal(audit.officialProvaoCanonicalLessons,officialIds.size);
 assert.equal(audit.officialOnlyCanonicalLessons,[...officialIds].filter(id=>!blueprintIds.has(id)).length);
 assert.equal(audit.examToLessonLinks,canonicalExamTopicMappings().length);
 assert.equal(audit.persistentDuplicatesDeleted,0);
});
