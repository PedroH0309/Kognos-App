import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalRegistryAudit, canonicalExamTopicMappings, canonicalCoverageByExam, officialProvaoCanonicalGradeMappings} from './canonical-lesson-reuse.ts';

test('audit reconciles every exam membership without inventing coverage',()=>{
  const audit=canonicalRegistryAudit();
  const mappings=canonicalExamTopicMappings();
  const coverage=canonicalCoverageByExam();
  assert.equal(audit.catalogEntries,curriculumTopics.length);
  assert.equal(audit.examToLessonLinks,mappings.length);
  const official=officialProvaoCanonicalGradeMappings();
  const mappedIds=new Set(mappings.map(row=>row.canonicalId));
  const officialIds=new Set(official.map(row=>row.canonicalId));
  const allAuthoredIds=new Set([...mappedIds,...officialIds]);
  assert.equal(audit.canonicalUniqueLessons,allAuthoredIds.size);
  assert.equal(audit.officialProvaoCanonicalLessons,officialIds.size);
  assert.equal(audit.officialOnlyCanonicalLessons,
    [...officialIds].filter(id=>!mappedIds.has(id)).length);
  // The reuse denominator is the editorial mapping registry, not the
  // broader official grade inventory (which includes grade-only lessons).
  assert.equal(audit.referenceReuse,audit.examToLessonLinks-mappedIds.size);
  assert.equal(audit.persistentDuplicatesDeleted,0);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
    const row=audit.exams.find(item=>item.exam===exam);
    assert.ok(row);
    assert.equal(row.entries,row.deep+row.missing);
    assert.equal(row.deep,coverage[exam].deep);
    assert.equal(row.links,mappings.filter(item=>item.exam===exam).length);
  }
});

test('audit counts exact subject/title pairs without treating them as semantic groups',()=>{
  const audit=canonicalRegistryAudit();
  const exact=new Set(curriculumTopics.map(topic=>JSON.stringify([topic.subject,topic.topic])));
  assert.equal(audit.distinctExactSubjectTitles,exact.size);
  assert.ok(audit.verifiedCrossExamGroups<=audit.examToLessonLinks);
  assert.ok(audit.partialAdvisories>=0);
});


test('official Provão grade mappings preserve canonical lesson identity and grade provenance',()=>{
  const official=officialProvaoCanonicalGradeMappings();
  for(const row of official){
    assert.equal(row.lesson.id,row.canonicalId);
    assert.ok([1,2,3].includes(row.grade));
    assert.ok(row.officialCode.length>0);
    assert.ok(row.officialTitle.length>0);
  }
  const audit=canonicalRegistryAudit();
  assert.equal(audit.canonicalUniqueLessons,
    new Set([...canonicalExamTopicMappings().map(row=>row.canonicalId),
      ...official.map(row=>row.canonicalId)]).size);
  assert.equal(audit.persistentDuplicatesDeleted,0);
});
