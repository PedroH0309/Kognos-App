import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam, reviewedCanonicalAliasForExam, reviewedSemanticAliases} from './canonical-lesson-reuse.ts';

test('reviewed semantic aliases reuse a single authored object across registered exams',()=>{
  assert.ok(reviewedSemanticAliases.length>0,'No approved alias registered');
  for(const alias of reviewedSemanticAliases){
    const target=curriculumTopics.find(t=>t.id===alias.targetTopicId);
    const source=curriculumTopics.find(t=>t.id===alias.sourceTopicId);
    assert.ok(target&&source,'Alias must reference real registered source and target');
    assert.equal(target.subject,source.subject);
    const linked=alias.exams.map(exam=>{
      const resolved=reviewedCanonicalAliasForExam(exam,target);
      assert.ok(resolved,'Approved alias did not resolve for '+exam);
      assert.equal(resolved.canonicalId,source.id);
      assert.equal(resolved.examTopicId,target.id);
      assert.strictEqual(canonicalLessonForExam(exam,target),resolved.lesson);
      return resolved.lesson;
    });
    for(const lesson of linked)assert.strictEqual(lesson,linked[0],
      'Cross-exam aliases must share the same lesson object');
    for(const exam of Object.keys(examBlueprints) as ExamId[]){
      if(alias.exams.includes(exam))continue;
      assert.equal(reviewedCanonicalAliasForExam(exam,target),null,
        'Unapproved exam inherited semantic alias: '+exam);
    }
    assert.equal(reviewedCanonicalAliasForExam(alias.exams[0],{
      ...target,id:source.id
    }),null,'Forged target ID must not resolve');
  }
});

test('exact multi-exam membership shares a single authored lesson instance',()=>{
  const shared=curriculumTopics.filter(topic=>topic.exams.length>1);
  let verified=0;
  for(const topic of shared){
    const results=topic.exams.map(exam=>canonicalLessonForExam(exam,topic));
    if(!results[0]||results.some(result=>!result))continue;
    verified++;
    for(const result of results)assert.strictEqual(result,results[0],
      'Exact memberships must not allocate duplicate lesson objects');
  }
  assert.ok(verified>0,'Expected at least one authored multi-exam topic');
});
