import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {courseId} from './curriculum-id.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {parseCourseDocument} from './course-content.ts';
import {authoredEnemDeepBatch01,deepEnemLesson} from './enem-depth-batch01.ts';
import {canonicalCoverageByExam,canonicalLessonForExam,canonicalExamTopicMappings} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

test('batch 01 has five distinct authored ENEM topics, 3 long chapters and 3 non-repeating objective questions each',()=>{
 assert.equal(authoredEnemDeepBatch01.length,5);
 const seen=new Set<string>();
 for(const spec of authoredEnemDeepBatch01){
  const key=spec.subject+'\u0000'+spec.topic;
  assert.ok(!seen.has(key),'no duplicate authoring for '+key);
  seen.add(key);
  const topic=curriculumTopics.find(row=>row.subject===spec.subject&&row.topic===spec.topic);
  assert.ok(topic&&topic.exams.includes('enem'),'exact registered ENEM topic');
  assert.equal(topic.id,courseId(spec.subject,spec.topic));
  const lesson=deepEnemLesson(topic);
  assert.ok(lesson&&lesson.id===topic.id);
  assert.ok(parseCourseDocument(lesson)!==null,'must pass original CourseLesson safety schema');
  assert.match(lesson.authorship,/autoral|original/i);
  assert.match(lesson.license,/não oficial/i);
  assert.match(lesson.authorship,/revisão pedagógica/i);
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(section=>section.level),['basic','intermediate','advanced']);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=750,spec.topic+': deep section length');
   assert.ok(section.steps.length>=3,'explicit method');
   assert.ok(section.example.length>=40,'resolved example');
   assert.ok(section.pitfall.length>=20,'specific pitfall');
  }
  assert.equal(lesson.tasks.length,3);
  assert.deepEqual(lesson.tasks.map(task=>task.level),['basic','intermediate','advanced']);
  const allChoices=new Set<string>();
  const allPrompts=new Set<string>();
  for(const task of lesson.tasks){
   assert.ok(task.options&&task.options.length===4,'A-D alternatives required');
   assert.equal(new Set(task.options).size,4);
   assert.equal(typeof task.correctIndex,'number');
   assert.ok(task.correctIndex>=0&&task.correctIndex<=3);
   assert.ok(!allPrompts.has(task.prompt));
   allPrompts.add(task.prompt);
   assert.ok(task.solution.length>=60&&task.hint.length>=30,'specific explanations');
   for(const choice of task.options){
    assert.ok(!allChoices.has(choice),'do not recycle a choice across the three problems');
    allChoices.add(choice);
   }
  }
 }
});

test('all matching exam topics share the same object; non-member exams and forged identities remain excluded',()=>{
 const mappings=canonicalExamTopicMappings();
 for(const spec of authoredEnemDeepBatch01){
  const topic=curriculumTopics.find(row=>row.subject===spec.subject&&row.topic===spec.topic);
  assert.ok(topic);
  const lesson=canonicalLessonForExam('enem',topic);
  assert.ok(lesson);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const registered=Boolean(examBlueprints[exam].subjects[spec.subject]?.includes(spec.topic));
   const other=canonicalLessonForExam(exam,topic);
   if(registered){
    assert.strictEqual(other,lesson,'same lesson object across matching exams');
    const mapping=mappings.find(row=>row.exam===exam&&row.examTopicId===topic.id);
    assert.ok(mapping);
    assert.equal(mapping.canonicalId,topic.id);
    assert.equal(mapping.mappingKind,'exact');
    assert.strictEqual(mapping.lesson,lesson);
   }else{
    assert.equal(other,null,'unrelated exam must not inherit deep lesson');
   }
  }
  assert.equal(canonicalLessonForExam('enem',{...topic,id:topic.id+'-fake'}),null);
  assert.equal(canonicalLessonForExam('enem',{...topic,topic:topic.topic+' avançado'}),null);
 }
});

test('ENEM editorial coverage and canonical audit increase only for authored full lessons',()=>{
 const audit=enemCanonicalPriorityAudit();
 const coverage=canonicalCoverageByExam().enem;
 assert.equal(coverage.deep,audit.deep);
 assert.equal(coverage.missing,audit.missing);
 assert.equal(coverage.total,audit.topics);
 for(const spec of authoredEnemDeepBatch01){
  const topic=curriculumTopics.find(row=>row.subject===spec.subject&&row.topic===spec.topic);
  assert.ok(topic);
  assert.ok(!coverage.missingTopicIds.includes(topic.id));
  assert.ok(coverage.canonicalIds.includes(topic.id));
  assert.ok(!audit.priorityQueue.some(row=>row.topicId===topic.id));
 }
 assert.equal(audit.persistedDuplicatesDeleted,0);
 console.log('ENEM_DEEP_BATCH01_AUDIT '+JSON.stringify({
  editorialEntries:audit.topics,deepLinks:audit.deep,missing:audit.missing,
  uniqueCanonical:audit.uniqueDeepCanonicalLessons,
  newlyAuthoredTopics:authoredEnemDeepBatch01.map(spec=>spec.subject+' — '+spec.topic),
  exactScopeSharedLinks:audit.fullLinksSharedWithOtherExams,
  persistedDuplicatesDeleted:audit.persistedDuplicatesDeleted
 }));
});
