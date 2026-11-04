import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const kog=read('apps/web/src/components/KogAssistant.tsx');
const style=read('apps/web/src/app/kognos-tutor-page.css');
const layout=read('apps/web/src/app/layout.tsx');

test('menu and contextual entry points navigate to the Kog workspace instead of opening an overlay',()=>{
 assert.match(app,/function openAssistant\(\)\{[^}]*setView\('tutor'\)/);
 assert.match(app,/className="kognos-tutor-workspace" hidden=\{view!=='tutor'\}/);
 assert.doesNotMatch(app,/kog-launcher/);
 assert.match(kog,/return <section className=\{`kog-page/);
 assert.doesNotMatch(kog,/position:fixed|kog-drawer-scrim|kog-launcher|aria-modal/);
 assert.ok(!style.includes('position:fixed')&&!style.includes('position: fixed'));
});
test('initial chat is centered with four actionable prompts and a true message composer',()=>{
 for(const prompt of ['Explique sobre','Criar resumo','Gerar questão','Dicas de estudo'])assert.ok(kog.includes(prompt),prompt);
 assert.match(kog,/kog-page-actions/);
 assert.match(kog,/onSubmit=\{send\}/);
 assert.match(kog,/onKeyDown=\{e=>/);
 assert.match(kog,/disabled=\{!draft.trim\(\)\|\|pending\}/);
 assert.match(style,/grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
});
test('conversation persists across view switches and only the active workspace is displayed',()=>{
 assert.match(app,/assistantInitialized\|\|view==='tutor'/);
 assert.match(kog,/active:boolean/);
 assert.match(kog,/currentUserRef/);
 assert.match(kog,/setMessages\(\[\]\)/);
 assert.match(style,/\.kognos-tutor-workspace\[hidden\] \{display:none!important;\}/);
});
test('contextual replies preserve the existing authorization and provider flow',()=>{
 assert.match(kog,/tutorScopeReply\(draft.trim\(\)\)/);
 assert.match(kog,/getSupabase\(\)/);
 assert.match(kog,/fetch\('\/api\/tutor'/);
 assert.match(kog,/history=messages.slice\(-8\)/);
 assert.match(kog,/studyContext/);
 assert.match(kog,/providerName/);
});
test('page stylesheet loads after existing rules and remains responsive',()=>{
 assert.ok(layout.indexOf('import "./kognos-tutor-page.css"')>layout.indexOf('import "./kognos-curriculum-flow-stage9.css"'));
 assert.match(style,/@media\(max-width:920px\)/);
 assert.match(style,/@media\(max-width:560px\)/);
 assert.match(style,/prefers-reduced-motion/);
 assert.match(style,/var\(--page-bg\)/);
 assert.match(style,/var\(--box-bg\)/);
});
