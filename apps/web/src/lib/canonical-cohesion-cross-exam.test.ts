import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics,courseId} from './curriculum-catalog.ts';
import {canonicalLessonForExam,canonicalExamTopicMappings,canonicalReuseAudit,reviewedCanonicalAliasForExam} from './canonical-lesson-reuse.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {provaoTopics} from './provao-paulista.ts';

const subject='Português';
const targetTitle='Coesão, coerência e progressão temática';
const sourceTitle='Estratégias de articulação do texto: mecanismos de coesão (coesão lexical, referencial e…';
const targetId=courseId(subject,targetTitle);
const sourceId=courseId(subject,sourceTitle);
const exams=['enem','fuvest','vunesp'] as const;

test('reviewed cohesion equivalence shares one authored object across three distinct exam-topic identities',()=>{
 const source=curriculumTopics.find(topic=>topic.id===sourceId);
 const target=curriculumTopics.find(topic=>topic.id===targetId);
 assert.ok(source,'Official source must be registered');
 assert.ok(target,'Historical editorial target must be registered');
 assert.notEqual(source.id,target.id);
 const official=provaoTopics.filter(topic=>topic.subject===subject&&topic.topic===sourceTitle);
 assert.deepEqual(official.map(topic=>topic.grade),[1,2,3]);
 assert.ok(official.every(topic=>topic.code==='4.2'));
 const deep=deepProvaoLesson(source);
 assert.ok(deep);
 assert.equal(deep.sections.length,3);
 assert.equal(deep.tasks.length,3);
 const mapping=canonicalExamTopicMappings();
 for(const exam of exams){
  assert.ok(target.exams.includes(exam));
  const alias=reviewedCanonicalAliasForExam(exam,target);
  assert.ok(alias,'Missing explicit exam-scoped alias '+exam);
  assert.equal(alias.canonicalId,sourceId);
  assert.equal(alias.examTopicId,targetId);
  const lesson=canonicalLessonForExam(exam,target);
  assert.ok(lesson,'Canonical lesson must resolve');
  assert.strictEqual(lesson.sections,deep.sections);
  assert.strictEqual(lesson.tasks,deep.tasks);
  const entry: (typeof mapping)[number] | undefined=mapping.find(row=>row.exam===exam&&row.examTopicId===targetId);
  assert.ok(entry);
  assert.equal(entry.canonicalId,sourceId);
  assert.equal(entry.mappingKind,'reviewed-semantic');
  assert.strictEqual(entry.lesson.sections,deep.sections);
  assert.strictEqual(entry.lesson.tasks,deep.tasks);
 }
 const audit=canonicalReuseAudit();
 for(const exam of exams)assert.ok(audit.semanticMappingsByExam[exam]>=1);
 assert.ok(audit.crossTopicCanonicalGroups>=1);
 assert.ok(audit.crossTopicReferencesReused>=1);
 assert.equal(audit.actualPersistedDuplicatesRemoved,0);
});

test('cohesion alias does not promote partial overlaps or forged IDs to full coverage',()=>{
 const target=curriculumTopics.find(topic=>topic.id===targetId);
 assert.ok(target);
 assert.equal(reviewedCanonicalAliasForExam('etec',target),null);
 assert.equal(reviewedCanonicalAliasForExam('saresp',target),null);
 const forged={...target,id:sourceId};
 assert.equal(reviewedCanonicalAliasForExam('enem',forged),null);
 assert.equal(canonicalLessonForExam('enem',forged),null);
 const unrelated=curriculumTopics.find(topic=>topic.subject==='Português'&&topic.topic==='Leitura, inferência e interpretação textual');
 assert.ok(unrelated);
 assert.equal(reviewedCanonicalAliasForExam('enem',unrelated),null);
 assert.ok(!canonicalExamTopicMappings().some(row=>row.examTopicId===unrelated.id&&row.canonicalId===sourceId));
});
