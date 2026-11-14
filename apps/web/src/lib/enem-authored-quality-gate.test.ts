import test from 'node:test';
import assert from 'node:assert/strict';
import {authoredEnemDeepBatch01, deepEnemLesson} from './enem-depth-batch01.ts';
import {curriculumTopics} from './curriculum-catalog.ts';

/** Editorial quality gate, not an Inep competency or teacher homologation. */
test('ENEM authored batch 01 has five distinct deep lessons with valid objective items', () => {
  assert.equal(authoredEnemDeepBatch01.length, 5);
  const keys = new Set<string>();
  for (const spec of authoredEnemDeepBatch01) {
    const key = spec.subject + '\u0000' + spec.topic;
    assert.ok(!keys.has(key), 'Repeated authoring: ' + key);
    keys.add(key);
    assert.ok(spec.objective.trim().length > 50);
    assert.ok(spec.prerequisites.length > 0);
    assert.equal(spec.sections.length, 3, spec.topic);
    assert.deepEqual(spec.sections.map(s => s.level), ['basic', 'intermediate', 'advanced']);
    for (const section of spec.sections) {
      assert.ok(section.explanation.length >= 750, 'Short chapter: ' + spec.topic + '/' + section.level);
      assert.ok(section.example.trim().length > 40);
      assert.ok(section.pitfall.trim().length > 30);
      assert.ok(section.steps.length >= 3);
    }
    assert.ok(spec.tasks.length >= 3);
    assert.equal(new Set(spec.tasks.map(t => t.prompt.trim())).size, spec.tasks.length);
    for (const task of spec.tasks) {
      assert.equal(task.options.length, 4);
      assert.equal(new Set(task.options.map(o => o.trim().toLowerCase())).size, 4);
      assert.ok(Number.isInteger(task.correctIndex) && task.correctIndex >= 0 && task.correctIndex < 4);
      assert.ok(task.hint.trim().length > 20);
      assert.ok(task.solution.trim().length > 35);
    }
    const topic = curriculumTopics.find(t => t.subject === spec.subject && t.topic === spec.topic && t.exams.includes('enem'));
    assert.ok(topic, 'Authored lesson missing exact ENEM catalog entry: ' + key);
    const lesson = deepEnemLesson(topic);
    assert.ok(lesson);
    assert.equal(lesson.id, topic.id);
    assert.match(lesson.authorship, /autoral/);
    assert.match(lesson.license, /não oficial/);
  }
});

test('ENEM authored lesson cannot leak to a non-ENEM historical topic', () => {
  const spec = authoredEnemDeepBatch01[0];
  const topic = curriculumTopics.find(t => t.subject === spec.subject && t.topic === spec.topic && t.exams.includes('enem'));
  assert.ok(topic);
  assert.equal(deepEnemLesson({...topic, exams: topic.exams.filter(e => e !== 'enem')}), null);
});
