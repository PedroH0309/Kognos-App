import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam,canonicalReuseAudit,verifiedCanonicalLessonLinks,reviewedCanonicalAliasForExam} from './canonical-lesson-reuse.ts';

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

test('reviewed epistemology alias shares authored lesson but preserves historical exam topic identity',()=>{
 const target=curriculumTopics.find(t=>t.subject==='Filosofia'&&t.topic==='Racionalismo e empirismo');
 const source=curriculumTopics.find(t=>t.subject==='Filosofia'&&t.topic==='As abordagens racionalistas e empiristas do conhecimento');
 assert.ok(target&&source,'Both exact syllabus labels must exist before enabling this alias');
 const exams=(Object.keys(examBlueprints) as ExamId[]).filter(e=>examBlueprints[e].subjects.Filosofia?.includes(target.topic));
 assert.ok(exams.length>0);
 for(const exam of exams){
  const alias=reviewedCanonicalAliasForExam(exam,target);
  assert.ok(alias,'Explicitly reviewed alias must resolve a real deep source');
  assert.equal(alias.canonicalId,source.id);
  assert.equal(alias.examTopicId,target.id);
  assert.notEqual(alias.canonicalId,alias.examTopicId);
  assert.strictEqual(canonicalLessonForExam(exam,target)?.sections,alias.lesson.sections);
  assert.strictEqual(canonicalLessonForExam(exam,target)?.tasks,alias.lesson.tasks);
 }
 const unrelated=curriculumTopics.find(t=>t.subject==='Biologia'&&t.topic==='Citologia');
 if(unrelated)assert.equal(reviewedCanonicalAliasForExam('enem',unrelated),null);
});
