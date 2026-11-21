import test from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {canonicalExamTopicMappings, semanticReviewQueue, unresolvedPartialCandidates} from './canonical-lesson-reuse.ts';

/** A Provão-authored advisory source is not an ENEM integral lesson. */
test('ENEM advisory source provenance and unresolved blockers remain explicit', () => {
  const links = canonicalExamTopicMappings();
  const advisory = semanticReviewQueue();
  const unresolved = unresolvedPartialCandidates();
  const keys = new Set<string>();
  for (const ref of advisory) {
    const key = [ref.exam, ref.targetTopicId, ref.sourceCanonicalId].join('\0');
    assert.ok(!keys.has(key), 'Duplicate advisory reference: ' + key);
    keys.add(key);
    assert.equal(ref.eligibleForFullAlias, false);
    assert.notEqual(ref.targetTopicId, ref.sourceCanonicalId);
    assert.ok(ref.coveredScope.trim());
    assert.ok(ref.missingScope.trim());
    assert.ok(ref.sourceOrigin === 'blueprint' || ref.sourceOrigin === 'provao');
    const topic = curriculumTopics.find(t => t.id === ref.targetTopicId);
    assert.ok(topic);
    assert.equal(topic.subject, ref.subject);
    assert.ok(examBlueprints[ref.exam].subjects[topic.subject]?.includes(topic.topic));
    assert.ok(!links.some(link => link.exam === ref.exam &&
      link.examTopicId === ref.targetTopicId &&
      link.canonicalId === ref.sourceCanonicalId &&
      link.mappingKind === 'reviewed-semantic'),
      'Partial advisory source was promoted to full semantic equivalence');
  }
  for (const item of unresolved) {
    assert.equal(item.eligibleForFullAlias, false);
    assert.ok(item.missingScope.trim());
    assert.ok(item.blockers.length > 0, 'Unresolved candidate must explain its blocker');
  }
  const enem = advisory.filter(ref => ref.exam === 'enem');
  const other = advisory.filter(ref => ref.exam !== 'enem');
  if (enem.length && other.length) {
    assert.ok(advisory.indexOf(enem[0]) < advisory.indexOf(other[0]),
      'ENEM review references must be scheduled before other exams');
  }
  process.stdout.write('KOGNOS_ENEM_PARTIAL_PROVENANCE ' + JSON.stringify({
    editorialNotOfficialInep: true,
    enemAdvisoryReferences: enem.length,
    distinctEnemAdvisoryTargets: new Set(enem.map(ref => ref.targetTopicId)).size,
    enemProvaoSources: enem.filter(ref => ref.sourceOrigin === 'provao').length,
    unresolvedCandidates: unresolved.length,
    fullAliasesGrantedByThisTest: 0,
  }) + '\n');
});
