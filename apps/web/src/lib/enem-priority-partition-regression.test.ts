import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';

/**
 * Dynamic regression: no fixed historical totals, fuzzy matching or inferred
 * Inep skills. Counts describe Kognos editorial catalog membership only.
 */
test('ENEM priority queue partitions every registered editorial topic exactly once', () => {
  const audit = enemCanonicalPriorityAudit();
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const full = canonicalExamTopicMappings().filter(row => row.exam === 'enem');
  const covered = new Set(full.map(row => row.examTopicId));
  const missing = new Set(audit.priorityQueue.map(row => row.topicId));
  assert.equal(covered.size, full.length, 'duplicate full links');
  assert.equal(missing.size, audit.priorityQueue.length, 'duplicate missing topics');
  assert.equal(covered.size + missing.size, topics.length);
  for (const topic of topics) {
    assert.notEqual(covered.has(topic.id), missing.has(topic.id), topic.id);
  }
  for (const row of audit.priorityQueue) {
    for (const advisory of row.advisorySources) {
      assert.equal(advisory.fullyCovered, false);
      assert.ok(advisory.coveredScope.trim().length > 0);
      assert.ok(advisory.missingScope.trim().length > 20);
    }
  }
});

test('ENEM full links share the identical authored instance only with explicitly registered exams', () => {
  const exams = Object.keys(examBlueprints) as ExamId[];
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const mappings = canonicalExamTopicMappings();
  for (const topic of topics) {
    const enemLesson = canonicalLessonForExam('enem', topic);
    for (const exam of exams.filter(exam => exam !== 'enem')) {
      const foreignLesson = canonicalLessonForExam(exam, topic);
      const registered = topic.exams.includes(exam);
      const foreignMapping = mappings.find(row => row.exam === exam && row.examTopicId === topic.id);
      if (!registered) {
        assert.equal(foreignMapping, undefined, exam + ': unexpected full mapping ' + topic.id);
        assert.equal(foreignLesson, null, exam + ': inherited unrelated lesson ' + topic.id);
      } else if (enemLesson && foreignMapping && foreignMapping.canonicalId === enemLesson.id) {
        assert.strictEqual(foreignLesson, enemLesson, exam + ': cloned canonical lesson ' + topic.id);
      }
    }
  }
});
