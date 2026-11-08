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


test('latest mobile reference uses dark dock and expands only the active blue navigation pill',()=>{
 for(const mapping of ["view:'dashboard',label:'Início',Icon:House",
   "view:'learn',label:'Estudar',Icon:Search",
   "view:'questions',label:'Questões',Icon:PieChart",
   "view:'calendar',label:'Calendário',Icon:Clock3",
   "view:'profile',label:'Perfil',Icon:UserRound"]){
  assert.ok(mobile.includes(mapping),mapping);
 }
 assert.match(css,/Navigation reference update/);
 assert.match(css,/background:#1D1F24/);
 assert.match(css,/background:#2D4D75/);
 assert.match(css,/color:#59A9FF/);
 assert.match(css,/flex-grow:2\.15/);
 assert.match(css,/\.k-mobile-nav-button\.active \.k-mobile-nav-label/);
 assert.match(css,/\[data-minimized=true\] \.k-mobile-nav-button \.k-mobile-nav-label/);
});

test('desktop sidebar follows expanded and compact light/dark references without losing routes',()=>{
 assert.match(app,/className=\{.app-layout theme-\$\{theme\} \$\{sidebarCollapsed/);
 assert.match(app,/kognos_sidebar_collapsed_v1/);
 assert.match(app,/className="sidebar-collapse-btn"/);
 assert.match(app,/k-sidebar-mode/);
 assert.match(app,/k-sidebar-signout/);
 assert.match(app,/onClick=\{\(\)=>void signout\(\)\}/);
 assert.match(app,/role="switch" aria-label="Modo escuro" aria-checked=\{theme==='dark'\}/);
 assert.match(app,/onClick=\{\(\)=>changeTheme\(theme==='dark'\?'light':'dark'\)\}/);
 assert.match(css,/\.app-layout\.theme-dark \.app-sidebar/);
 assert.match(css,/background:#052033/);
 assert.match(css,/background:#FFFFFF/);
 assert.match(css,/background:#E5F3FC/);
 assert.match(css,/background:#647F92/);
 assert.match(css,/\.app-layout\.sidebar-collapsed \.app-sidebar \.k-sidebar-utility-label/);
 assert.match(css,/\.app-layout\.sidebar-collapsed \.app-sidebar \.side-nav-item \.k-side-label/);
 assert.match(css,/@media\(min-width:921px\)/);
 assert.match(css,/@media\(max-width:920px\)/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});
