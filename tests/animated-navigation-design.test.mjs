import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const mobile=read('apps/web/src/components/MobileBottomNavigation.tsx');
const room=read('apps/web/src/components/CurriculumRoom.tsx');
const tabs=read('apps/web/src/components/LessonAnimatedTabs.tsx');
const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
const css=read('apps/web/src/app/kognos-animated-navigation.css');
const layout=read('apps/web/src/app/layout.tsx');

test('mobile keeps all five original destinations and accessible current-page selection',()=>{
 for(const destination of ['dashboard','learn','questions','calendar','profile']){
  assert.match(mobile,new RegExp("view:'"+destination+"'"));
 }
 assert.match(app,/<MobileBottomNavigation view=\{view\} onNavigate=\{navigate\} disableAnimations=\{disableAnimations\}\/>/);
 assert.match(mobile,/onClick=\{\(\)=>onNavigate\(destination\)\}/);
 assert.match(mobile,/aria-current=\{selected\?'page':undefined\}/);
 assert.match(mobile,/aria-label=\{label\}/);
 assert.match(mobile,/layoutId="kognos-mobile-bottom-highlight"/);
});
test('mobile scroll minimizes labels but not navigation options or buttons',()=>{
 assert.match(mobile,/const \[minimized,setMinimized\]=useState\(false\)/);
 assert.match(mobile,/setMinimized\(value>130&&delta>0\)/);
 assert.match(mobile,/addEventListener\('scroll',onScroll/);
 assert.match(mobile,/removeEventListener\('scroll',onScroll/);
 assert.match(css,/\[data-minimized=true\] \.k-mobile-nav-label\s*\{\s*display:none/);
 assert.match(css,/pointer-events:auto/);
 assert.match(css,/env\(safe-area-inset-bottom\)/);
 assert.match(mobile,/useReducedMotion\(\)/);
 assert.match(mobile,/disableAnimations/);
});
test('five existing lesson panes keep their state and are highlighted by layout animation',()=>{
 for(const label of ['Aula em texto','Atividades','Explicações','Materiais','Evolução']){
  assert.ok(tabs.includes(label),label);
 }
 assert.match(tabs,/aria-pressed=\{active\}/);
 assert.match(tabs,/onClick=\{\(\)=>onChange\(tab.id\)\}/);
 assert.match(tabs,/layoutId=\{'kognos-lesson-highlight-'\+uid\}/);
 assert.match(room,/<LessonAnimatedTabs value=\{readerTab\} onChange=\{setReaderTab\}/);
 assert.match(room,/hidden=\{readerTab!==pane\}/);
 assert.match(room,/setReaderTab\('lesson'\)/);
});
test('numbered teaching stages retain real anchor links with animated current section',()=>{
 assert.match(reader,/function LessonContentsNav/);
 assert.match(reader,/className="k-universal-lesson-nav k-animated-stage-nav"/);
 assert.match(reader,/href=\{'#'\+item.id\}/);
 assert.match(reader,/aria-current=\{active===item.id\?'location':undefined\}/);
 assert.match(reader,/onClick=\{\(\)=>setActive\(item.id\)\}/);
 assert.match(reader,/new IntersectionObserver/);
 assert.match(reader,/observer.disconnect\(\)/);
 assert.match(reader,/layoutId=\{'kognos-stage-highlight-'\+uid\}/);
});
test('responsive styling and reduced motion are loaded after legacy nav styles',()=>{
 assert.ok(layout.includes('import "./kognos-animated-navigation.css"'));
 assert.ok(layout.indexOf('kognos-animated-navigation.css')>layout.indexOf('kognos-universal-lessons.css'));
 for(const cls of ['k-animated-mobile-nav','k-mobile-nav-highlight','k-animated-lesson-highlight','k-animated-stage-highlight']){
  assert.ok(css.includes(cls),cls);
 }
 assert.match(css,/@media\(max-width:920px\)/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
 assert.match(css,/:focus-visible/);
 assert.ok(!mobile.includes('fetch('));
 assert.ok(!tabs.includes('fetch('));
});
