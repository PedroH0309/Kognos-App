import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('AI generator is gated by real server readiness, with one compact setup notice',()=>{
 const src=read('apps/web/src/components/AiQuestionStudio.tsx');
 const notice=read('apps/web/src/components/IntegrationSetupNotice.tsx');
 const hook=read('apps/web/src/lib/use-server-readiness.ts');
 assert.match(src,/const canGenerate=readiness\.status\?\.questionGenerationConfigured===true/);
 assert.match(src,/disabled=\{generating\|\|loading\|\|!canGenerate\}/);
 assert.match(src,/<IntegrationSetupNotice readiness=\{readiness\}/);
 assert.match(hook,/fetch\('\/api\/ai-status',\{cache:'no-store'\}\)/);
 assert.match(notice,/Como configurar no VS Code/);
 assert.match(notice,/Verificar novamente/);
 assert.doesNotMatch(notice,/process\.env/);
});
test('missing server bank cannot show a misleading zero saved items',()=>{
 const src=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(src,/hasServerBank\?\(loading\?'…':totalQuestions\):'—'/);
 assert.match(src,/hasServerBank&&!!bank\.length/);
 assert.match(src,/!hasServerBank&&<div className="k-bank-connection"/);
 assert.match(src,/hasServerBank&&!loading&&!bank\.length/);
});
test('lesson/source screens keep demo data while reporting AI sync issues discreetly',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const subjects=read('apps/web/src/components/SubjectDashboard.tsx');
 const hint=read('apps/web/src/components/StudySyncNotice.tsx');
 assert.match(trails,/<StudySyncNotice error=\{aiError\}/);
 assert.match(subjects,/<StudySyncNotice error=\{aiError\}/);
 assert.match(hint,/studySyncNotice\(error\)/);
 assert.match(trails,/connectedCatalogProgress\(attempts,aiProgress\)/);
});
test('responsive selectors, collapsible source reference and progress bar are wired',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 const css=read('apps/web/src/app/design-system.css');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(studio,/<details className="ai-source-note ai-source-reference">/);
 assert.match(css,/\.ai-generator-grid>\.kg-form-field:nth-child\(-n\+3\)/);
 assert.match(css,/\.k-integration-notice/);
 assert.match(css,/@media\(max-width:560px\)/);
 assert.match(trails,/learning-journey-subject-status/);
 const readme=read('README.md');
 assert.match(readme,/What's new in v1\.9/);
});