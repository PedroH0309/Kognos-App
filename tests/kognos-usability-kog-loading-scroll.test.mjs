import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const app = read('apps/web/src/components/KognosApp.tsx');
const flow = read('apps/web/src/components/CurriculumStudyFlow.tsx');
const room = read('apps/web/src/components/CurriculumRoom.tsx');
const sections = read('apps/web/src/components/TopicLessonSections.tsx');
const kog = read('apps/web/src/components/KogAssistant.tsx');
const guide = read('apps/web/src/lib/offline-study-guide.ts');
const calendar = read('apps/web/src/components/StudyCalendar.tsx');
const css = read('apps/web/src/app/kognos-usability-motion.css');
const overlay = read('apps/web/src/components/KognosLoadingOverlay.tsx');
const layout = read('apps/web/src/app/layout.tsx');

test('Trilhas is not shown in sidebar or dashboard; old lesson links still open Estudos', () => {
  assert.match(app, /const NAV_MORE:View\[\]=\['diagnostic'/);
  assert.doesNotMatch(app, /NAV_MORE:View\[\]=\['trails'/);
  assert.doesNotMatch(app, /onGo\('trails'\)/);
  assert.match(app, /function openFocusedLesson\([^)]*\)\{[^}]*setView\('learn'\)/);
  assert.match(app, /if\(v==='trails'\)v='learn'/);
  assert.match(app, /saved==='trails'\?'learn':saved/);
  assert.match(app, /retainedViews\.includes\('learn'\)/);
});

test('the text pane confirms reading at its actual end, never bypassing activity completion', () => {
  assert.match(flow, /renderLesson\(current,setActivitiesAnswered,openRelatedTopic,\(\)=>setReadingConfirmed\(true\)\)/);
  assert.match(room, /onReadingEnd=\{pane==='lesson'\?onReadingEnd:undefined\}/);
  assert.match(sections, /readingEndRef=useRef<HTMLDivElement\|null>\(null\)/);
  assert.match(sections, /const observer=new IntersectionObserver/);
  assert.match(sections, /entry\.intersectionRatio>=0\.65/);
  assert.match(sections, /observer\.observe\(target\)/);
  assert.match(sections, /observer\.disconnect\(\)/);
  assert.match(sections, /view==='content'&&<div ref=\{readingEndRef\}/);
  assert.match(flow, /canFinishLesson\(hasLesson,readingConfirmed,activitiesAnswered,true\)/);
  assert.match(flow, /onChange=\{e=>setReadingConfirmed\(e.target.checked\)\}/);
  assert.match(flow, /disabled=\{hasLesson&&!ready\}/);
});

test('the Kog explanation button appears once for each visible lesson tab', () => {
  assert.match(sections, /onTutor&&<button type="button" onClick=\{onTutor\}>Explicar com o Kog/);
  assert.doesNotMatch(sections, /<UniversalLessonReader[^\n]*onTutor=\{onTutor\}/);
  assert.match(room, /\(readerTab==='materials'\|\|readerTab==='evolution'\)&&onTutor&&<button/);
  assert.doesNotMatch(room, /\{onTutor&&<button type="button" className="btn outline" onClick=\{onTutor\}>Explicar com o Kog\}/);
});

test('loading uses a skeleton indicator without visible "Carregando" banners', () => {
  assert.match(overlay, /role="status"/);
  assert.match(overlay, /aria-live="polite"/);
  assert.match(overlay, /aria-label=\{label\}/);
  assert.match(overlay, /ks-skeleton ks-skeleton-card/);
  assert.match(overlay, /ks-skeleton ks-skeleton-circle ks-w-12 ks-h-12 ks-animate-spin/);
  assert.match(overlay, /ks-skeleton ks-skeleton-text ks-w-48 ks-h-5/);
  assert.match(overlay, /ks-sr-only/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(app, /<KognosLoadingOverlay label="Preparando Ã¡rea de estudos"/);
  assert.match(kog, /<KognosLoadingOverlay inline label=\{pending\?/);
  assert.match(room, /<KognosLoadingOverlay inline label="Carregando o assunto"/);
  assert.match(flow, /<KognosLoadingOverlay inline label="Carregando matérias"/);
  assert.ok(layout.indexOf('kognos-usability-motion.css') > layout.indexOf('kognos-practice-polish.css'));
});

test('Kog handles missing server credentials honestly with retry and local authored fallback', () => {
  assert.match(kog, /GEMINI_API_KEY/);
  assert.match(kog, /GROQ_API_KEY/);
  assert.match(kog, /retryTutorConnection/);
  assert.match(kog, /fetch\('\/api\/ai-status',\{cache:'no-store'\}\)/);
  assert.match(kog, /readiness\?\.tutorConfigured/);
  assert.match(kog, /guia local/);
  assert.match(kog, /localStudyGuide\(prompt,studyContext\)/);
  assert.match(guide, /matches\.length===1\?fromLesson\(matches\[0\]\):null/);
  assert.match(guide, /context\.phase==='solving'/);
  assert.doesNotMatch(kog, /setItem\('GEMINI_API_KEY'/);
});

test('calendar summary avoids 0\/0 and works with compact responsive metrics', () => {
  assert.match(calendar, /selectedData\.all\.length\?\x60\$\{selectedData\.completed\}\/\$\{selectedData\.all\.length\}\x60:'0'/);
  assert.match(calendar, /selectedData\.all\.length\?'concluídas':'sem atividades'/);
  assert.match(css, /\.\app-layout \.k-cal-summary-body\{display:grid/);
  assert.match(css, /\.\app-layout\.theme-dark \.k-cal-ring/);
  assert.match(css, /@media\(max-width:480px\)/);
});

test('new navigation and actions animate without ignoring reduced-motion settings', () => {
  for (const part of ['.side-nav-item', '.k-shortcut-card', '.k-curriculum-next', '.k-next-item', '.kog-page-actions button'])
    assert.ok(css.includes(part), part);
  assert.match(css, /\.\app-layout\.less-motion/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});