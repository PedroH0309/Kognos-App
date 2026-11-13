import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalRegistryAudit, canonicalExamTopicMappings, canonicalCoverageByExam} from './canonical-lesson-reuse.ts';

test('audit reconciles every exam membership without inventing coverage',()=>{
  const audit=canonicalRegistryAudit();
  const mappings=canonicalExamTopicMappings();
  const coverage=canonicalCoverageByExam();
  assert.equal(audit.catalogEntries,curriculumTopics.length);
  assert.equal(audit.examToLessonLinks,mappings.length);
  assert.equal(audit.canonicalUniqueLessons,new Set(mappings.map(row=>row.canonicalId)).size);
  assert.equal(audit.referenceReuse,audit.examToLessonLinks-audit.canonicalUniqueLessons);
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
