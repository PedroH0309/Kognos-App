import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const flow=read('apps/web/src/components/CurriculumStudyFlow.tsx');
const css=read('apps/web/src/app/kognos-curriculum-flow-stage9.css');
const layout=read('apps/web/src/app/layout.tsx');

test('topic search is one row, without visible sr-only label or nested form label',()=>{
 assert.match(flow,/<div className="k-curriculum-topic-search" role="search">/);
 assert.match(flow,/<Search className="k-curriculum-search-icon" size=\{18\} aria-hidden="true"\/>/);
 assert.match(flow,/<input type="search" aria-label="Buscar assunto" value=\{search\}/);
 assert.match(flow,/onChange=\{e=>setSearch\(e.target.value\)\}/);
 assert.doesNotMatch(flow,/<label className="k-curriculum-topic-search">/);
 assert.doesNotMatch(flow,/<span className="sr-only">Buscar assunto<\/span>/);
});
test('topic search aligns icon and input across themes and on mobile',()=>{
 assert.match(css,/\.k-curriculum-flow \.k-curriculum-topic-search\s*\{[^}]*display:grid;grid-template-columns:20px minmax\(0,1fr\);align-items:center/);
 assert.match(css,/\.k-curriculum-flow \.k-curriculum-search-icon\s*\{[^}]*justify-self:center/);
 assert.match(css,/\.k-curriculum-flow \.k-curriculum-topic-search input\[type="search"\]\s*\{[^}]*display:block;width:100%;height:100%/);
 assert.match(css,/\.k-curriculum-topic-search:focus-within/);
 assert.match(css,/@media\(max-width:480px\)/);
 assert.match(css,/background:var\(--flow-paper\)/);
 assert.match(css,/color:var\(--flow-ink\)/);
 assert.ok(layout.includes('import "./kognos-curriculum-flow-stage9.css";'));
});
