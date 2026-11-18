import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {
  canonicalExamTopicMappings, semanticReviewQueue,
  reviewedSemanticAliases, reviewedPartialAssociations,
} from './canonical-lesson-reuse.ts';

/** ENEM editorial integrity gate: this does not certify Inep competencies. */
test('ENEM-first full and partial provenance remains explicit and non-inflating', () => {
  const topics = curriculumTopics.filter(topic => topic.exams.includes('enem'));
  const allowed = new Set(topics.map(topic => topic.id));
  const links = canonicalExamTopicMappings().filter(link => link.exam === 'enem');
  const partials = semanticReviewQueue().filter(row => row.exam === 'enem');
  const fullKeys = new Set<string>();
  for (const link of links) {
    assert.ok(allowed.has(link.examTopicId), 'Full ENEM link must target a registered topic');
    assert.ok(!fullKeys.has(link.examTopicId), 'A topic cannot have two full canonical lessons');
    fullKeys.add(link.examTopicId);
    assert.equal(link.lesson.id, link.canonicalId);
    assert.ok(examBlueprints.enem.subjects[link.subject]?.includes(link.topicTitle));
  }
  for (const partial of partials) {
    assert.ok(allowed.has(partial.targetTopicId));
    assert.equal(partial.eligibleForFullAlias, false);
    assert.ok(partial.coveredScope.trim().length > 0);
    assert.ok(partial.missingScope.trim().length > 0);
    assert.ok(!links.some(link =>
      link.examTopicId === partial.targetTopicId &&
      link.canonicalId === partial.sourceCanonicalId &&
      link.mappingKind === 'reviewed-semantic'
    ), 'An advisory source cannot be promoted to full coverage');
  }
  for (const alias of reviewedSemanticAliases.filter(alias => alias.exams.includes('enem'))) {
    assert.ok(alias.rationale.trim(), 'Semantic aliases need an explicit scope rationale');
    assert.ok(allowed.has(alias.targetTopicId), 'Alias target must be registered for ENEM');
    assert.ok(links.some(link =>
      link.examTopicId === alias.targetTopicId &&
      link.canonicalId === alias.sourceTopicId &&
      link.mappingKind === 'reviewed-semantic'
    ), 'Reviewed ENEM alias must resolve to its declared canonical source');
  }
  assert.equal(topics.length, fullKeys.size + topics.filter(t => !fullKeys.has(t.id)).length);
  process.stdout.write('KOGNOS_ENEM_PROVENANCE_GATE ' + JSON.stringify({
    origin: 'Kognos editorial curriculum, not official Inep skills',
    entries: topics.length,
    exactTitles: new Set(topics.map(t => t.topic)).size,
    fullLinks: links.length,
    uniqueDeepCanonicalIds: new Set(links.map(link => link.canonicalId)).size,
    reviewedFullSemanticAliases: links.filter(link => link.mappingKind === 'reviewed-semantic').length,
    partialReviewItems: partials.length,
    documentedPartialCandidates: reviewedPartialAssociations.length,
    gaps: topics.length - fullKeys.size,
  }) + '\n');
});
