import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
test('guest receives a functional sign-in button opening the shared auth dialog',()=>{
 const page=read('apps/web/src/components/ExamSources.tsx');
 const shell=read('apps/web/src/components/KognosApp.tsx');
 assert.match(page,/onLogin:\(\)=>void/);
 assert.match(page,/onClick=\{onLogin\}/);
 assert.match(shell,/view==='sources'\?<ExamSources[^\n]*onLogin=\{\(\)=>setAuthOpen\(true\)\}/);
 assert.match(shell,/if\(!\['sources','questions','simulados'\]\.includes\(view\)\)setView\('dashboard'\)/);
});
test('guest and server failures do not falsely display zero approved topics',()=>{
 const page=read('apps/web/src/components/ExamSources.tsx');
 assert.match(page,/access==='guest'/);
 assert.match(page,/access==='error'/);
 assert.match(page,/loaded&&!loading&&<p className="k-syllabus-caption"/);
 assert.match(page,/Catálogo temporariamente indisponível/);
});
test('server permission exclusively determines editorial mode and moderation endpoints stay protected',()=>{
 const page=read('apps/web/src/components/ExamSources.tsx');
 const route=read('apps/web/src/app/api/exam-sources/route.ts');
 assert.match(page,/setEditor\(data\.editor===true\)/);
 assert.match(page,/editor&&<section className="dark-panel k-syllabus-editor"/);
 assert.match(route,/if\(!editor\(userId\)\)return error\(/);
});
test('editor has import and searchable review panels, with responsive layouts',()=>{
 const page=read('apps/web/src/components/ExamSources.tsx');
 const styles=read('apps/web/src/app/design-system.css');
 assert.match(page,/aria-label="Ferramentas editoriais"/);
 assert.match(page,/reviewSearch/);
 assert.match(page,/sourceWorkspaceMetrics/);
 assert.match(styles,/@media\(max-width:690px\).*k-source-access/);
 assert.match(styles,/prefers-reduced-motion:reduce.*k-source-spin/);
});