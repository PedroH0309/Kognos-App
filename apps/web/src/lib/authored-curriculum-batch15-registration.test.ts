import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {authoredCurriculumBatch15} from './authored-curriculum-batch15.ts';
import {authoredCurriculumSpecs, deepAuthoredCurriculumLesson} from './authored-curriculum-lessons.ts';
import {canonicalLessonForExam} from './canonical-lesson-reuse.ts';

test('batch 15 is registered exactly once and resolves from the ENEM editorial topic', () => {
  const source = authoredCurriculumBatch15.find(spec =>
    spec.subject === 'Matemática' && spec.topic === 'Porcentagem e razão');
  assert.ok(source);
  assert.equal(authoredCurriculumSpecs.filter(spec =>
    spec.subject === source.subject && spec.topic === source.topic).length, 1);
  const topic = curriculumTopics.find(item =>
    item.subject === source.subject && item.topic === source.topic && item.exams.includes('enem'));
  assert.ok(topic);
  const lesson = deepAuthoredCurriculumLesson(topic);
  assert.ok(lesson, 'authored lesson must be reachable through the registered resolver');
  assert.equal(lesson.id, topic.id);
  assert.strictEqual(lesson.sections, source.sections);
  assert.strictEqual(lesson.tasks, source.tasks);
  assert.equal(lesson.sections.length, 3);
  assert.equal(lesson.tasks.length, 3);
  for (const task of lesson.tasks) {
    assert.equal(task.options?.length, 4);
    assert.ok(Number.isInteger(task.correctIndex));
    assert.ok(task.correctIndex! >= 0 && task.correctIndex! < 4);
  }
  // A registered authored lesson is not proof of a new reviewed semantic alias.
  // No unrelated exam can inherit this topic merely from its authored registration.
  for (const exam of ['fuvest', 'vunesp', 'etec', 'saresp'] as const) {
    if (!topic.exams.includes(exam)) {
      assert.equal(canonicalLessonForExam(exam, topic), null);
    }
  }
});
