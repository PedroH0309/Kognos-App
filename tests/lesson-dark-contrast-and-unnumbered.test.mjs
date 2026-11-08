import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const universal=read('apps/web/src/components/UniversalLessonReader.tsx');
const panes=read('apps/web/src/components/TopicLessonSections.tsx');
const room=read('apps/web/src/components/CurriculumRoom.tsx');
const sharedCss=read('apps/web/src/app/course-library.css');
const universalCss=read('apps/web/src/app/kognos-universal-lessons.css');
const darkCss=read('apps/web/src/app/kognos-lesson-dark-contrast.css');
const layout=read('apps/web/src/app/layout.tsx');

test('universal lesson stage titles and navigation have NO decorative 01–10 labels',()=>{
 assert.doesNotMatch(universal,/\b(?:0[1-9]|10) · /);
 assert.doesNotMatch(universal,/number:'(?:0[1-9]|10)'/);
 assert.doesNotMatch(universal,/k-universal-number/);
 assert.doesNotMatch(universal,/padStart\(2,'0'\)/);
 assert.doesNotMatch(universal,/item\.number/);
 for(const label of ['Objetivos','Contexto','Conceitos','Desenvolvimento','Visualização','Exemplos','Comparações','Interatividade','Teste rápido','Consolidação']){
  assert.ok(universal.includes("label:'"+label+"'"),label);
 }
 // Decorative labels disappear, but semantic anchors preserve progress, scroll and tests.
 for(const id of ['k-lesson-objectives','k-lesson-context','k-lesson-concept',
  'k-lesson-development','k-lesson-visual','k-lesson-examples','k-lesson-comparisons',
  'k-lesson-check','k-lesson-summary'])assert.ok(universal.includes(id),id);
 assert.match(universal,/layoutId=\{'kognos-stage-highlight-'\+uid\}/);
 assert.match(universal,/LessonChoiceQuestion/);
});

test('activity and explanation panes do not render numbered chapter badges',()=>{
 assert.doesNotMatch(panes,/sectionNumber/);
 assert.doesNotMatch(panes,/k-lesson-chapter-heading"><span>/);
 assert.match(panes,/k-lesson-chapter-heading"><div><small>\{levels\[section\.level\]\}/);
 assert.match(panes,/exerciseIds\.every\(key=>Object\.hasOwn\(next,key\)\)/);
 assert.match(panes,/LessonChoiceQuestion/);
 assert.match(room,/<TopicLessonSections/);
});

test('course materials use existing theme colors instead of fixed light-only ink',()=>{
 assert.match(sharedCss,/--course-ink:var\(--txt,#101b33\)/);
 assert.match(sharedCss,/--course-muted:var\(--sub,#536780\)/);
 assert.match(sharedCss,/--course-surface:var\(--box-bg,#fff\)/);
 assert.match(sharedCss,/background:var\(--page-bg,#f7f9fc\)/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.course-room\{/);
 assert.match(darkCss,/--course-ink:var\(--txt,#F7F9FC\)/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.course-room \.course-reader \.course-reference/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.course-room \.course-reader \.course-videos>p/);
 assert.match(darkCss,/color:#8FD9FF/);
});

test('all universal lesson fallbacks, disclosure text and chapters contrast on dark surfaces',()=>{
 assert.match(universalCss,/--k-ul-ink:var\(--flow-ink,var\(--course-ink,var\(--txt,#101B33\)\)\)/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.k-universal-lesson\{/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.k-universal-lesson \.k-universal-context/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.k-universal-lesson \.k-universal-prose p/);
 assert.match(darkCss,/\.app-layout\.theme-dark \.k-universal-lesson \.k-universal-caution/);
 assert.match(darkCss,/color:#C5BBFF/);
 assert.ok(layout.indexOf('kognos-lesson-dark-contrast.css')>layout.indexOf('kognos-practice-polish.css'));
 assert.ok(layout.indexOf('kognos-lesson-dark-contrast.css')>layout.indexOf('kognos-universal-lessons.css'));
});
