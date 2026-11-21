import test from 'node:test';
import assert from 'node:assert/strict';
import {enemCanonicalPriorityAudit} from './enem-canonical-priority.ts';
import {canonicalExamTopicMappings} from './canonical-lesson-reuse.ts';

/** Every ENEM advisory reference is incomplete until an explicit full mapping exists. */
test('ENEM partial sources remain actionable gaps with explicit complements', () => {
  const audit = enemCanonicalPriorityAudit();
  const full = new Set(audit.fullCanonicalMappings.map(row => row.examTopicId));
  const registered = new Set(audit.registeredExamTopicIds);
  const mappings = canonicalExamTopicMappings();

  for (const mapping of audit.fullCanonicalMappings) {
    assert.ok(registered.has(mapping.examTopicId), 'unregistered ENEM full mapping');
    assert.ok(mappings.some(row =>
      row.exam === 'enem' &&
      row.examTopicId === mapping.examTopicId &&
      row.canonicalId === mapping.canonicalId
    ), 'full mapping missing from canonical registry');
  }

  for (const gap of audit.priorityQueue) {
    assert.ok(registered.has(gap.topicId), 'gap not registered for ENEM');
    assert.ok(!full.has(gap.topicId), 'partial or missing topic promoted to full');
    const seen = new Set<string>();
    for (const advisory of gap.advisorySources) {
      assert.equal(advisory.fullyCovered, false);
      assert.ok(advisory.canonicalId.trim(), 'advisory source without canonical ID');
      assert.ok(advisory.coveredScope.trim(), 'advisory source without covered scope');
      assert.ok(advisory.missingScope.trim(), 'advisory source without required complement');
      assert.ok(!seen.has(advisory.canonicalId), 'duplicate advisory canonical reference');
      seen.add(advisory.canonicalId);
    }
  }
  assert.equal(audit.priorityQueue.length + full.size, registered.size);
  assert.equal(audit.partialOnlyTopics,
    audit.priorityQueue.filter(row => row.advisorySources.length > 0).length);
});
