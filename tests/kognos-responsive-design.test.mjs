import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('design refresh is imported last and uses exact Kognos brand palette',()=>{
 const layout=read('apps/web/src/app/layout.tsx');
 const css=read('apps/web/src/app/kognos-clean-ui.css');
 assert.match(layout,/import "\.\/kognos-clean-ui\.css";/);
 assert.ok(layout.indexOf('import "./kognos-clean-ui.css";')>layout.indexOf('import "./auth-entry.css";'));
 for(const color of ['#101B33','#273A61','#5B4DE3','#38CDE5','#F7F9FC','#EDF1F7','#202633','#18B78A']){
  assert.ok(css.includes(color),`missing palette color ${color}`);
 }
});
test('responsive design covers desktop, mobile, light and dark without removing accessibility',()=>{
 const css=read('apps/web/src/app/kognos-clean-ui.css');
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(css,/\.app-layout\.theme-light/);
 assert.match(css,/\.app-layout\.theme-dark/);
 assert.match(css,/@media\(max-width:920px\)/);
 assert.match(css,/@media\(max-width:660px\)/);
 assert.match(css,/env\(safe-area-inset-bottom\)/);
 assert.match(css,/:focus-visible/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(app,/useState<'dark'\|'light'>\('light'\)/);
 assert.match(app,/kognos_theme_v1/);
 assert.doesNotMatch(app,/<MobileBottomNavigation/);
 assert.match(app,/mobile-menu-btn/);
 const motion=read('apps/web/src/components/KognosMotion.tsx');
 assert.match(motion,/mobile-sidebar-scrim/);
 assert.match(app,/AnimatedSidebarScrim/);
 assert.match(app,/sidebarCollapsed/);
});
test('new dashboard routes to real existing modules and never invents study data',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 const weekly=read('apps/web/src/components/WeeklyProgressChart.tsx');
 const counts=read('apps/web/src/lib/dashboard-weekly-activity.ts');
 assert.match(app,/k-dashboard/);
 assert.match(app,/WeeklyProgressChart points=\{weekly\}/);
 assert.match(app,/setWeekly\(weeklyStudyActivity\(safeAttempts\)\)/);
 for(const page of ['learn','questions','simulados','plans','reviews','achievements','tutor']){
  assert.ok(app.includes(`onGo('${page}')`),`dashboard missing action: ${page}`);
 }
 assert.match(app,/getCloudAttempts/);
 assert.match(weekly,/total===0\?'Nenhuma resposta registrada nesta semana'/);
 assert.match(counts,/for\(const row of attempts\)/);
 assert.ok(!weekly.includes('Math.random('));
});
test('login and navigation have independent responsive styling',()=>{
 const css=read('apps/web/src/app/kognos-clean-ui.css');
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(css,/\.k-auth-gateway/);
 assert.match(css,/\.app-layout \.k-nav-group/);
 assert.match(css,/\.app-layout \.mobile-bottom-nav/);
 assert.match(app,/NAV_PRIMARY\.map/);
 assert.match(app,/NAV_SECONDARY\.map/);
 assert.match(app,/NAV_MORE\.map/);
 const finalStyle=read('apps/web/src/app/kognos-e-study.css');
 const layout=read('apps/web/src/app/layout.tsx');
 assert.match(layout,/import "\.\/kognos-e-study\.css";/);
 assert.match(finalStyle,/\.app-layout \.app-sidebar/);
 assert.match(finalStyle,/\.k-auth-v2\.k-auth-gateway/);
 assert.match(app,/AuthModal standalone/);
 assert.match(app,/onClick=\{\(\)=>setMobileMenu\(!mobileMenu\)\}/);
});
