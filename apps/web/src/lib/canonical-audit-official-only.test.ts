import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canonicalReuseAudit,
  canonicalExamTopicMappings,
  officialProvaoCanonicalGradeMappings
} from './canonical-lesson-reuse.ts';

/** An official-only Provão lesson is authored even when the editorial exam
 * blueprint does not register its historical topic. Do not lose it in totals. */
test('canonical lesson total reconciles blueprint and official grade sources', () => {
  const audit=canonicalReuseAudit();
  const ids=new Set([
    ...canonicalExamTopicMappings().map(row=>row.canonicalId),
    ...officialProvaoCanonicalGradeMappings().map(row=>row.canonicalId)
  ]);
  assert.equal(audit.canonicalDeepLessons,ids.size);
  assert.equal(audit.canonicalDeepLessons,audit.allUniqueDeepCanonicalIds);
});

test('repeated Provão grades never inflate unique authored lessons', () => {
  const mappings=officialProvaoCanonicalGradeMappings();
  const unique=new Set(mappings.map(row=>row.canonicalId));
  assert.ok(unique.size<=mappings.length);
  assert.ok(canonicalReuseAudit().canonicalDeepLessons>=unique.size);
});
