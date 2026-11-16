import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

/** ENEM editorial coverage invariants; these are not official Inep skills. */
test('ENEM audit subject totals reconcile with registered topic IDs and unique canonical lessons', () => {
  const audit = enemCanonicalPriorityAudit();
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const byId = new Map(topics.map(topic => [topic.id, topic]));
  assert.equal(byId.size, topics.length, 'duplicate ENEM editorial topic IDs');
  assert.deepEqual(new Set(audit.registeredExamTopicIds), new Set(byId.keys()));
  assert.equal(audit.topics, topics.length);
  assert.equal(audit.distinctExactTitles, new Set(topics.map(topic => topic.topic)).size);
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.total, 0), audit.topics);
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.deep, 0), audit.deep);
  assert.equal(audit.subjects.reduce((sum, row) => sum + row.missing, 0), audit.missing);
  assert.equal(audit.deep + audit.missing, audit.topics);
  assert.equal(audit.uniqueDeepCanonicalLessons,
    new Set(audit.fullCanonicalMappings.map(row => row.canonicalId)).size);
  assert.equal(audit.approvedSemanticLinks,
    audit.fullCanonicalMappings.filter(row => row.mappingKind === 'reviewed-semantic').length);
  assert.equal(audit.persistedDuplicatesDeleted, 0);
  for (const row of audit.subjects) {
    const subset = topics.filter(topic => topic.subject === row.subject);
    assert.equal(row.total, subset.length, row.subject);
    assert.equal(row.distinctExactTitles, new Set(subset.map(topic => topic.topic)).size, row.subject);
    assert.equal(row.deep + row.missing, row.total, row.subject);
  }
});

test('every ENEM full mapping resolves to the registered authored lesson, without cross-exam leakage', () => {
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const byId = new Map(topics.map(topic => [topic.id, topic]));
  const mappings = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  const audit = enemCanonicalPriorityAudit();
  const seen = new Set<string>();
  for (const row of mappings) {
    assert.ok(!seen.has(row.examTopicId), 'duplicate full ENEM mapping: ' + row.examTopicId);
    seen.add(row.examTopicId);
    const topic = byId.get(row.examTopicId);
    assert.ok(topic, 'orphan ENEM mapping: ' + row.examTopicId);
    const lesson = canonicalLessonForExam('enem', topic);
    assert.ok(lesson, 'missing authored lesson: ' + row.examTopicId);
    assert.equal(lesson.id, row.canonicalId);
    for (const exam of Object.keys(examBlueprints) as ExamId[]) {
      if (exam === 'enem') continue;
      if (!topic.exams.includes(exam)) {
        assert.equal(canonicalLessonForExam(exam, topic), null,
          'unregistered exam inherited ENEM lesson: ' + exam + '/' + topic.id);
      }
    }
  }
  assert.equal(seen.size, audit.deep);
  for (const gap of audit.priorityQueue) {
    assert.ok(byId.has(gap.topicId));
    assert.ok(!seen.has(gap.topicId), 'gap counted as full: ' + gap.topicId);
    for (const advisory of gap.advisorySources) {
      assert.equal(advisory.fullyCovered, false);
      assert.ok(advisory.missingScope.trim(), 'partial missing explicit complement');
    }
  }
});
