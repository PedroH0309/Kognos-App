import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');

test('onboarding icons have uniform centered geometry and helpful missing-schema feedback', () => {
  const css = read('apps/web/src/app/onboarding-polish.css');
  const onboarding = read('apps/web/src/components/OnboardingV2.tsx');
  assert.match(css, /choice-check svg/);
  assert.match(css, /justify-content:center/);
  assert.match(onboarding, /explainProfileDatabaseError/);
  assert.match(onboarding, /0001_core_schema\.sql/);
  assert.match(onboarding, /onSignout/);
});

test('demo result is compact and never mislabels lifetime accuracy as a session score', () => {
  const space = read('apps/web/src/components/PracticeSpace.tsx');
  assert.match(space, /compact-practice-result/);
  assert.match(space, /sessionSummary\.accuracy/);
  assert.doesNotMatch(space, /ai-source-tabs|practice-demo-note/);
  assert.match(space, /onClick=\{\(\)=>switchSource\('ai'\)\}/);
});

test('server paginates authenticated AI questions without shipping the answer key', () => {
  const route = read('apps/web/src/app/api/ai-questions/route.ts');
  const studio = read('apps/web/src/components/AiQuestionStudio.tsx');
  assert.match(route, /parseAIQuestionListQuery/);
  assert.match(route, /\.eq\('user_id',userId\)/);
  assert.match(route, /\.range\(filters\.offset/);
  assert.doesNotMatch(route, /select\([^\n]*correct_index/);
  assert.match(studio, /Carregar mais questões/);
  assert.match(studio, /generateApprovedBatches/);
  const batch = read('apps/web/src/lib/ai-generation-batches.ts');
  assert.match(batch, /splitGenerationBatches/);
  assert.match(batch, /MAX_CONCURRENT_GENERATION_BATCHES=1/);
});

test('practice defaults to AI for all entry points without a demo selector', () => {
  const space = read('apps/web/src/components/PracticeSpace.tsx');
  assert.ok(space.includes("useState<'ai'|'demo'>('ai')"));
  assert.doesNotMatch(space, /switchSource\('demo'\)/);
  assert.match(space, /<AiQuestionStudio/);
  assert.doesNotMatch(space, /&&\s*\}/);
});