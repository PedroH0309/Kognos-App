import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const theme=read('apps/web/src/app/kognos-motion-theme.css');
const layout=read('apps/web/src/app/layout.tsx');
const app=read('apps/web/src/components/KognosApp.tsx');
const animations=read('apps/web/src/components/KognosMotion.tsx');
const pkg=JSON.parse(read('apps/web/package.json'));

test('dark sidebar and mobile bottom bar override the last white navigation stylesheet',()=>{
 assert.ok(layout.indexOf('import "./kognos-motion-theme.css"')>layout.indexOf('import "./kognos-e-study.css"'));
 assert.match(theme,/\.app-layout\.theme-dark \.app-sidebar,/);
 assert.match(theme,/\.app-layout\.theme-dark\.sidebar-collapsed \.app-sidebar/);
 assert.match(theme,/\.app-layout\.theme-dark \.mobile-bottom-nav \{/);
 assert.match(theme,/\.app-layout\.theme-dark \.mobile-bottom-nav button\.active/);
 assert.match(theme,/@media\(max-width:920px\)/);
 assert.match(theme,/\.app-layout\.theme-dark \.app-sidebar,\s*\.app-layout\.theme-dark\.sidebar-collapsed \.app-sidebar \{[\s\S]*?background:#202633/);
 assert.match(theme,/\.app-layout\.theme-dark \.mobile-bottom-nav \{\s*background:#202633/);
 assert.match(theme,/\.app-layout\.theme-dark \.mobile-bottom-nav button\.active,[\s\S]*?background:#273A61/);
 assert.match(theme,/border-top:1px solid #39455A/);
 assert.match(theme,/stroke:#6CE1F3/);
});

test('light navbar remains white and dark topbar retains readable contrast',()=>{
 const previous=read('apps/web/src/app/kognos-e-study.css');
 assert.match(previous,/\.app-layout \.app-sidebar,[\s\S]*?background:#FFFFFF/);
 assert.match(theme,/\.app-layout\.theme-dark \.app-topbar \.icon-top-btn/);
 assert.match(theme,/color:#DFEBFA/);
 assert.match(theme,/\.app-layout\.theme-dark \.app-sidebar \.side-user strong/);
 assert.match(theme,/\.app-layout\.theme-dark \.app-sidebar \.side-nav-item\.active/);
 assert.match(theme,/\.app-layout\.theme-dark \.app-sidebar \.side-logo \.logo-word strong/);
 assert.match(theme,/\.app-layout\.theme-dark \.mobile-bottom-nav button:focus-visible/);
});

test('Motion for React provides page, drawer and mobile selection animations',()=>{
 assert.equal(pkg.dependencies.motion,'14.8.0');
 assert.match(animations,/from 'motion\/react'/);
 assert.match(animations,/export function AnimatedPage/);
 assert.match(animations,/export function AnimatedSidebarScrim/);
 assert.match(animations,/export function MobileTabIndicator/);
 assert.match(animations,/AnimatePresence initial=\{false\}/);
 assert.match(animations,/layoutId="kognos-mobile-active-tab"/);
 assert.match(app,/import \{AnimatedPage,AnimatedSidebarScrim\}/);
 assert.match(app,/import MobileBottomNavigation from '\.\/MobileBottomNavigation'/);
 assert.match(app,/<AnimatedPage page=\{view\} disabled=\{disableAnimations\}>/);
 assert.match(app,/<AnimatedSidebarScrim open=\{mobileMenu\} disabled=\{disableAnimations\}/);
 assert.match(app,/<MobileBottomNavigation view=\{view\} onNavigate=\{navigate\} disableAnimations=\{disableAnimations\}/);
});

test('motion can be disabled both by system and Kognos focus adaptation',()=>{
 assert.match(animations,/useReducedMotion\(\)/);
 assert.match(animations,/disabled\|\|Boolean\(prefersReducedMotion\)/);
 assert.match(app,/disableAnimations=actualProfile\.adaptations\.includes\('reduced_distractions'\)/);
 assert.match(theme,/@media\(prefers-reduced-motion:reduce\)/);
 assert.match(theme,/\.app-layout\.less-motion/);
 assert.match(theme,/@media\(hover:none\)/);
 assert.ok(!animations.includes('setInterval('));
});

test('no data or AI logic is changed by navigation animation',()=>{
 for(const snippet of ['getCloudAttempts','getSupabase','<MobileBottomNavigation view={view} onNavigate={navigate}','<KogAssistant','<AuthModal standalone','kognos_theme_v1'])
  assert.ok(app.includes(snippet),snippet);
 assert.ok(!animations.includes('fetch('));
 assert.ok(!theme.includes('background:#5B4DE3'));
});
