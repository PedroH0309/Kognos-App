import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints, type ExamId} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, canonicalLessonForExam, canonicalRegistryAudit, reviewedSemanticAliases, reviewedCanonicalAliasForExam} from './canonical-lesson-reuse.ts';

/** Audit the real approved semantic aliases rather than counting title similarity. */
test('approved semantic aliases resolve to one authored lesson in every authorized exam', () => {
  assert.ok(reviewedSemanticAliases.length > 0, 'At least one reviewed alias must exist');
  const mappings = canonicalExamTopicMappings();
  const audit = canonicalRegistryAudit();
  let approvedReferences = 0;
  for (const alias of reviewedSemanticAliases) {
    const source = curriculumTopics.find(topic => topic.id === alias.sourceTopicId);
    const target = curriculumTopics.find(topic => topic.id === alias.targetTopicId);
    assert.ok(source && target, 'Both source and destination must exist in the historical catalog');
    assert.equal(source.subject, target.subject);
    assert.notEqual(source.id, target.id);
    assert.equal(alias.sourceTitle, source.topic);
    assert.equal(alias.targetTitle, target.topic);
    assert.ok(alias.rationale.length > 80);
    for (const exam of alias.exams) {
      assert.ok(examBlueprints[exam].subjects[target.subject]?.includes(target.topic));
      const reviewed = reviewedCanonicalAliasForExam(exam, target);
      assert.ok(reviewed, 'Approved destination must resolve: ' + exam);
      const resolved = canonicalLessonForExam(exam, target);
      assert.ok(resolved);
      assert.equal(reviewed.canonicalId, source.id);
      assert.equal(reviewed.examTopicId, target.id);
      assert.strictEqual(reviewed.lesson, resolved, 'No lesson clone for an alias');
      const mapping = mappings.find(row => row.exam === exam && row.examTopicId === target.id);
      assert.ok(mapping);
      assert.equal(mapping.mappingKind, 'reviewed-semantic');
      assert.strictEqual(mapping.lesson, resolved);
      approvedReferences++;
    }
    for (const exam of Object.keys(examBlueprints) as ExamId[]) {
      if (alias.exams.includes(exam)) continue;
      assert.equal(reviewedCanonicalAliasForExam(exam, target), null,
        'Non-approved exam must not receive the alias: ' + exam);
    }
    assert.equal(reviewedCanonicalAliasForExam(alias.exams[0], {...target, id: target.id + '-forged'}), null);
    assert.equal(reviewedCanonicalAliasForExam(alias.exams[0], {...target, topic: target.topic + ' ampliado'}), null);
  }
  assert.equal(mappings.filter(row => row.mappingKind === 'reviewed-semantic').length, approvedReferences);
  assert.equal(audit.reviewedSemanticAliases, reviewedSemanticAliases.length);
  assert.equal(audit.persistentDuplicatesDeleted, 0);
});

test('approved alias sources do not rewrite persisted historical topic identities', () => {
  for (const alias of reviewedSemanticAliases) {
    const source = curriculumTopics.find(topic => topic.id === alias.sourceTopicId);
    const target = curriculumTopics.find(topic => topic.id === alias.targetTopicId);
    assert.ok(source && target);
    assert.equal(source.id, alias.sourceTopicId);
    assert.equal(target.id, alias.targetTopicId);
    assert.ok(!alias.exams.some(exam => !examBlueprints[exam].subjects[target.subject]?.includes(target.topic)));
  }
});
