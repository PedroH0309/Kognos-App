import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {crossExamCanonicalAudit} from './cross-exam-canonical-audit.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

test('every registered exam and subject reconciles against real canonical mappings',()=>{
 const audit=crossExamCanonicalAudit();
 const mappings=canonicalExamTopicMappings();
 assert.equal(audit.exams.length,Object.keys(examBlueprints).length);
 assert.equal(audit.verifiedFullExamLinks,mappings.length);
 assert.equal(audit.uniqueDeepCanonicalLessons,new Set(mappings.map(row=>row.canonicalId)).size);
 assert.equal(audit.persistedDuplicatesDeleted,0);
 for(const exam of audit.exams){
   const topics=curriculumTopics.filter(topic=>topic.exams.includes(exam.exam));
   const full=mappings.filter(row=>row.exam===exam.exam);
   assert.equal(exam.entries,topics.length);
   assert.equal(exam.deepLinks,full.length);
   assert.equal(exam.missing,topics.length-new Set(full.map(row=>row.examTopicId)).size);
   assert.equal(exam.subjects.reduce((sum,row)=>sum+row.entries,0),exam.entries);
   assert.equal(exam.subjects.reduce((sum,row)=>sum+row.deepLinks,0),exam.deepLinks);
   assert.equal(exam.subjects.reduce((sum,row)=>sum+row.missing,0),exam.missing);
   for(const row of full){
     const topic=topics.find(topic=>topic.id===row.examTopicId);
     assert.ok(topic);
     assert.equal(row.lesson.id,row.canonicalId);
     assert.strictEqual(canonicalLessonForExam(exam.exam,topic),row.lesson);
   }
 }
 console.log('CROSS_EXAM_CANONICAL_AUDIT '+JSON.stringify(audit));
});

test('ENEM-first audit remains exactly aligned with the cross-exam summary',()=>{
 const all=crossExamCanonicalAudit();
 const enem=all.exams.find(row=>row.exam==='enem');
 const priority=enemCanonicalPriorityAudit();
 assert.ok(enem);
 assert.equal(enem.entries,priority.topics);
 assert.equal(enem.distinctExactTitles,priority.distinctExactTitles);
 assert.equal(enem.deepLinks,priority.deep);
 assert.equal(enem.uniqueDeepCanonicalLessons,priority.uniqueDeepCanonicalLessons);
 assert.equal(enem.missing,priority.missing);
 assert.equal(enem.partialAdvisoryLinks,priority.partialAdvisoryLinks);
 assert.equal(enem.partialOnlyTopics,priority.partialOnlyTopics);
 assert.equal(enem.approvedSemanticLinks,priority.approvedSemanticLinks);
 assert.equal(enem.unresolvedPartialCandidates,priority.unresolvedPartialCandidates);
});
