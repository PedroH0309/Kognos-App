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
      const mapping: (typeof mappings)[number] | undefined = mappings.find(row => row.exam === exam && row.examTopicId === target.id);
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


test('broad ENEM topics with only partial evidence never inherit a full canonical lesson', async () => {
  const {reviewedPartialAssociations} = await import('./canonical-lesson-reuse.ts');
  const broadCases = [
    ['Matemática', 'Porcentagem e razão'],
    ['Matemática', 'Probabilidade e estatística'],
    ['Biologia', 'Ecologia e impactos ambientais'],
    ['Biologia', 'Citologia'],
    ['Português', 'Intertextualidade e argumentação'],
  ] as const;
  for (const [subject, title] of broadCases) {
    const partial = reviewedPartialAssociations.find(row =>
      row.subject === subject && row.targetTitle === title);
    assert.ok(partial, 'Partial evidence must remain explicit for ' + title);
    assert.ok(partial.coveredScope.trim().length > 20);
    assert.ok(partial.missingScope.trim().length > 20);
    const topic = curriculumTopics.find(row => row.subject === subject && row.topic === title);
    assert.ok(topic, 'Historical editorial topic must exist: ' + title);
    // A separate, independently verified deep lesson may legitimately cover the
    // broad topic later; only forbid promotion through a reviewed partial source.
    for (const mapping of canonicalExamTopicMappings().filter(row =>
      row.exam === 'enem' && row.examTopicId === topic.id)) {
      assert.notEqual(mapping.canonicalId, partial.sourceTitle,
        'A partial source title is not evidence of full-scope equivalence');
    }
  }
});
