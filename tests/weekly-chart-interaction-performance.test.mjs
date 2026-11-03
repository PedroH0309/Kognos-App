import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('weekly chart supports mouse, touch and keyboard with accurate values',()=>{
 const chart=read('apps/web/src/components/WeeklyProgressChart.tsx');
 const css=read('apps/web/src/app/kognos-clean-ui.css');
 assert.match(chart,/points\.length===7/);
 assert.match(chart,/point\.count/);
 assert.match(chart,/onPointerEnter=/);
 assert.match(chart,/event\.pointerType!=='touch'/);
 assert.match(chart,/onPointerLeave=/);
 assert.match(chart,/onFocus=/);
 assert.match(chart,/onBlur=/);
 assert.match(chart,/onClick=/);
 assert.match(chart,/aria-pressed=/);
 assert.match(chart,/event\.key==='Escape'/);
 assert.match(chart,/role="status" aria-live="polite"/);
 assert.match(chart,/countLabel\(active\.count\)/);
 assert.match(chart,/shortDate\(active\.date\)/);
 assert.match(css,/\.k-weekly-hit-area/);
 assert.match(css,/\.k-weekly-tooltip/);
 assert.match(css,/\.k-weekly-tooltip\.is-high/);
 assert.doesNotMatch(chart,/Math\.random\(/);
});

test('startup does not statically import heavy study workspaces or load the tutor until use',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 const screens=['PracticeSpace','AchievementSpace','DiagnosticSpace','WeeklyExamSpace',
  'ReviewSpace','LearningTrails','SubjectDashboard','StudyPlanner','StudyCalendar','ExamSources'];
 for(const screen of screens){
  assert.ok(app.includes(`const ${screen}=dynamic(()=>import('./${screen}'),workspaceLoading);`),screen);
  assert.ok(!app.includes(`import ${screen} from './${screen}';`),screen);
 }
 assert.match(app,/const KogAssistant=dynamic\(\(\)=>import\('\.\/KogAssistant'\)/);
 assert.match(app,/assistantInitialized\?<KogAssistant open=\{assistantOpen\}/);
 assert.match(app,/function openAssistant\(\)\{setAssistantInitialized\(true\);setAssistantOpen\(true\);\}/);
 assert.match(app,/k-kog-lightweight-launcher/);
 assert.match(app,/WorkspaceLoading/);
 assert.match(read('apps/web/src/app/kognos-clean-ui.css'),/prefers-reduced-motion/);
});
