import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {authoredCurriculumSpecs, deepAuthoredCurriculumLesson} from './authored-curriculum-lessons.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {courseId} from './curriculum-id.ts';

/** Completeness guard: mapping-only tests cannot detect omitted authored lessons.
 * These are Kognos editorial topics, not official ENEM skill identifiers.
 */
test('every registered authored batch topic resolves across all and only its registered exams', () => {
  const exams = Object.keys(examBlueprints) as ExamId[];
  const topics = new Map(curriculumTopics.map(topic => [topic.id, topic]));
  const mappings = canonicalExamTopicMappings();
  const seen = new Set<string>();
  let checked = 0;
  for (const spec of authoredCurriculumSpecs) {
    const id = courseId(spec.subject, spec.topic);
    assert.equal(seen.has(id), false, 'duplicate authored source: ' + id);
    seen.add(id);
    const topic = topics.get(id);
    assert.ok(topic, 'authored topic absent from the registered curriculum: ' + id);
    assert.equal(topic.subject, spec.subject);
    assert.equal(topic.topic, spec.topic);
    const lesson = deepAuthoredCurriculumLesson(topic);
    assert.ok(lesson, 'authored source is not resolvable: ' + id);
    assert.equal(lesson.id, id);
    const memberships = exams.filter(exam =>
      examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic));
    assert.ok(memberships.length > 0, 'orphan authored topic: ' + id);
    for (const exam of exams) {
      const mapped = mappings.filter(row => row.exam === exam && row.examTopicId === id);
      const resolved = canonicalLessonForExam(exam, topic);
      if (memberships.includes(exam)) {
        assert.equal(mapped.length, 1, 'missing or duplicated mapping: ' + exam + '/' + id);
        assert.strictEqual(resolved, mapped[0].lesson);
        assert.equal(mapped[0].canonicalId, id);
      } else {
        assert.equal(mapped.length, 0, 'unrelated exam inherited a mapping');
        assert.equal(resolved, null, 'unrelated exam inherited a lesson');
      }
    }
    checked++;
  }
  assert.equal(checked, authoredCurriculumSpecs.length);
  assert.ok(checked > 0, 'expected authored lessons to audit');
});
