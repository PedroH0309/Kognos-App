import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {authoredCurriculumBatch15} from './authored-curriculum-batch15.ts';
import {authoredCurriculumSpecs, deepAuthoredCurriculumLesson} from './authored-curriculum-lessons.ts';
import {canonicalLessonForExam} from './canonical-lesson-reuse.ts';

test('batch 15 draft does not replace an existing canonical authored lesson', () => {
  const draft = authoredCurriculumBatch15.find(spec =>
    spec.subject === 'Matemática' && spec.topic === 'Porcentagem e razão');
  assert.ok(draft);
  const registered = authoredCurriculumSpecs.filter(spec =>
    spec.subject === draft.subject && spec.topic === draft.topic);
  assert.equal(registered.length, 1, 'one canonical source, never two competing drafts');
  assert.notStrictEqual(registered[0], draft, 'preserve the preexisting reviewed-source fingerprint');
  const topic = curriculumTopics.find(item =>
    item.subject === draft.subject && item.topic === draft.topic && item.exams.includes('enem'));
  assert.ok(topic);
  const lesson = deepAuthoredCurriculumLesson(topic);
  assert.ok(lesson);
  assert.equal(lesson.id, topic.id);
  assert.strictEqual(lesson.sections, registered[0].sections);
  assert.strictEqual(lesson.tasks, registered[0].tasks);
  for (const exam of ['fuvest', 'vunesp', 'etec', 'saresp'] as const) {
    if (!topic.exams.includes(exam)) {
      assert.equal(canonicalLessonForExam(exam, topic), null);
    }
  }
});
