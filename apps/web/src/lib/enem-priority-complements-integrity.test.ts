import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {canonicalExamTopicMappings, reviewedPartialAssociations, semanticReviewQueue} from './canonical-lesson-reuse.ts';

/** Editorial ENEM complement queue; no official Inep skill IDs are inferred. */
test('ENEM complement priorities reconcile with actual full coverage and partial sources', () => {
  const priorityTitles = [
    ['Matemática', 'Porcentagem e razão'],
    ['Matemática', 'Probabilidade e estatística'],
    ['Biologia', 'Ecologia e impactos ambientais'],
    ['Português', 'Concordância, regência e crase'],
    ['Biologia', 'Citologia'],
  ] as const;
  const full = canonicalExamTopicMappings().filter(link => link.exam === 'enem');
  const partials = semanticReviewQueue().filter(link => link.exam === 'enem');
  const report = priorityTitles.map(([subject, title]) => {
    const topic = curriculumTopics.find(item =>
      item.subject === subject && item.topic === title && item.exams.includes('enem'));
    const documented = reviewedPartialAssociations.find(item =>
      item.subject === subject && item.targetTitle === title);
    assert.ok(documented, 'Priority must have a documented scope comparison: ' + title);
    assert.ok(documented.coveredScope.trim() && documented.missingScope.trim());
    if (!topic) return {subject, title, status: 'not-an-enem-editorial-entry' as const};
    const integral = full.find(link => link.examTopicId === topic.id);
    const advisory = partials.filter(link => link.targetTopicId === topic.id);
    for (const ref of advisory) {
      assert.equal(ref.eligibleForFullAlias, false);
      assert.notEqual(ref.sourceCanonicalId, topic.id);
      assert.ok(ref.missingScope.trim());
    }
    if (integral) {
      assert.equal(integral.lesson.id, integral.canonicalId);
      return {subject, title, topicId: topic.id, status: 'integrally-covered' as const,
        canonicalId: integral.canonicalId, advisoryReferences: advisory.length};
    }
    return {subject, title, topicId: topic.id,
      status: advisory.length ? 'partial-complement-required' as const : 'uncovered-source-unresolved' as const,
      advisoryReferences: advisory.length, missingScope: documented.missingScope};
  });
  assert.equal(report.length, priorityTitles.length);
  assert.equal(new Set(report.map(row => row.subject + '\\0' + row.title)).size, report.length);
  process.stdout.write('KOGNOS_ENEM_PRIORITY_COMPLEMENTS ' + JSON.stringify({
    provenance: 'Kognos editorial inventory, not official Inep competence or skill',
    priorities: report,
  }) + '\n');
});
