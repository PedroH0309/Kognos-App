import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const css=read('apps/web/src/app/kognos-clean-ui.css');
const chart=read('apps/web/src/components/WeeklyProgressChart.tsx');
const app=read('apps/web/src/components/KognosApp.tsx');

function rule(selector){
 const where=css.lastIndexOf(selector+'{');
 assert.ok(where>=0,'Missing CSS selector '+selector);
 const end=css.indexOf('}',where);
 return css.slice(where,end+1);
}

test('light theme gives weekly progress chart a light background and readable text',()=>{
 const box=rule('.app-layout.theme-light .k-weekly-chart');
 assert.match(box,/background:linear-gradient\(180deg,#FFFFFF 0%,#F8FAFF 100%\)/);
 assert.match(box,/color:#17233B/);
 assert.match(box,/border-color:#DCE4F0/);
 assert.match(rule('.app-layout.theme-light .k-weekly-axis'),/color:#53647E/);
 assert.match(rule('.app-layout.theme-light .k-weekly-caption'),/color:#17233B/);
 assert.match(rule('.app-layout.theme-light .k-weekly-caption small'),/color:#52627D/);
 assert.match(rule('.app-layout.theme-light .k-weekly-interaction-hint'),/color:#53647E/);
});
test('light theme updates SVG grid, markers, tooltip and focused point',()=>{
 assert.match(rule('.app-layout.theme-light .k-weekly-gridline'),/stroke:rgba\(77,94,131,\.20\)/);
 assert.match(rule('.app-layout.theme-light .k-weekly-dot'),/fill:#FFFFFF/);
 assert.match(rule('.app-layout.theme-light .k-weekly-dot-core'),/fill:#594CEB/);
 assert.match(rule('.app-layout.theme-light .k-weekly-tooltip'),/background:#FFFFFF/);
 assert.match(rule('.app-layout.theme-light .k-weekly-tooltip'),/color:#17233B/);
 assert.match(rule('.app-layout.theme-light .k-weekly-svg linearGradient stop:first-child'),/stop-opacity:\.20/);
 assert.match(rule('.app-layout.theme-light .k-weekly-hit-area:focus-visible'),/outline:2px solid #4338CA/);
});
test('dark reference styling stays in place, and existing theme toggle drives chart',()=>{
 const start=css.indexOf('/* 2026-11-08: reference-matched dark violet area chart');
 const light=css.indexOf('/* Weekly progress: light mode must follow');
 assert.ok(start>=0&&light>start,'Light overrides must come after dark reference rules');
 assert.match(rule('.app-layout .k-weekly-chart'),/background:linear-gradient\(180deg,#17171A 0%,#151519 100%\)/);
 assert.match(rule('.app-layout .k-weekly-dot'),/fill:#17171A/);
 assert.match(app,/app-layout theme-\$\{theme\}/);
 assert.ok(app.includes("kognos_theme_v1"));
});
test('chart still uses real weekly answer totals and accessible interactions',()=>{
 assert.match(chart,/const data=points.length===7\?points:\[\]/);
 assert.match(chart,/const total=values.reduce/);
 assert.match(chart,/const paths=weeklyAreaPaths\(/);
 assert.match(chart,/aria-pressed=\{selected===i\}/);
 assert.match(chart,/onPointerEnter/);
 assert.match(chart,/onFocus/);
 assert.match(chart,/onClick=/);
 assert.ok(!chart.includes('Math.random('));
});
