import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('onboarding icons have uniform centered geometry and helpful missing-schema feedback',()=>{
 const css=read('apps/web/src/app/onboarding-polish.css');
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(css,/choice-check svg/);assert.match(css,/justify-content:center/);
 assert.match(app,/explainProfileDatabaseError/);
 assert.match(app,/0001_core_schema.sql/);
 assert.match(app,/onLogin=\{\(\)=>setAuthOpen\(true\)\}/);
});
test('demo result is compact and never mislabels lifetime accuracy as a session score',()=>{
 const space=read('apps/web/src/components/PracticeSpace.tsx');
 assert.match(space,/compact-practice-result/);
 assert.match(space,/sessionSummary\.accuracy/);
 assert.match(space,/Acervo demonstrativo · 20 questões fixas/);
 assert.match(space,/onClick=\{\(\)=>switchSource\('ai'\)\}/);
});
test('server paginates authenticated AI questions without shipping the answer key',()=>{
 const route=read('apps/web/src/app/api/ai-questions/route.ts');
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(route,/parseAIQuestionListQuery/);assert.match(route,/\.eq\('user_id',userId\)/);
 assert.match(route,/\.range\(filters\.offset/);
 assert.doesNotMatch(route,/select\([^\n]*correct_index/);
 assert.match(studio,/Carregar mais questões/);
 assert.match(studio,/generateApprovedBatches/);
 const batch=read('apps/web/src/lib/ai-generation-batches.ts');
 assert.match(batch,/splitGenerationBatches/);
 assert.match(batch,/MAX_CONCURRENT_GENERATION_BATCHES=1/);
});