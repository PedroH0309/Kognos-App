import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings,canonicalLessonForExam,canonicalCoverageByExam} from './canonical-lesson-reuse.ts';

/** Regression: real cross-exam memberships reuse one authored object, while
 * missing and unrelated memberships never acquire a deep-coverage claim.
 * Original Kognos QA; not official or pedagogically homologated.
 */
test('all registered exact cross-exam mappings retain one source and isolated memberships',()=>{
 const mappings=canonicalExamTopicMappings();
 const byCanonical=new Map<string,typeof mappings>();
 for(const mapping of mappings){
  const group=byCanonical.get(mapping.canonicalId)??[];
  group.push(mapping);
  byCanonical.set(mapping.canonicalId,group);
 }
 const shared=[...byCanonical.values()].filter(group=>
  new Set(group.map(item=>item.exam)).size>1);
 assert.ok(shared.length>0,'Expected at least one real cross-exam authored source');
 const coverage=canonicalCoverageByExam();
 for(const group of shared){
  const first=group[0];
  for(const mapping of group){
   assert.strictEqual(mapping.lesson.sections,first.lesson.sections);
   assert.strictEqual(mapping.lesson.tasks,first.lesson.tasks);
   assert.equal(mapping.lesson.id,first.canonicalId);
   assert.ok(!coverage[mapping.exam].missingTopicIds.includes(mapping.examTopicId));
   const topic=curriculumTopics.find(item=>item.id===mapping.examTopicId);
   assert.ok(topic);
   assert.strictEqual(canonicalLessonForExam(mapping.exam,topic)?.sections,first.lesson.sections);
  }
 }
 for(const topic of curriculumTopics){
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const member=Boolean(examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
   if(!member){
    assert.equal(canonicalLessonForExam(exam,topic),null);
    assert.equal(mappings.some(item=>item.exam===exam&&item.examTopicId===topic.id),false);
   }
  }
 }
});
