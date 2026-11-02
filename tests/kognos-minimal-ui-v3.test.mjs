import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=(file)=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const layer=read('apps/web/src/app/kognos-e-study.css');
const layout=read('apps/web/src/app/layout.tsx');
const asset=read('apps/web/public/brand/kognos-login-friends.svg');

test('sidebar no longer uses AI-violet or a purple promotional card',()=>{
 assert.match(layer,/\.app-layout \.app-sidebar[\s\S]*?background:#FFFFFF/);
 assert.match(layer,/\.app-layout \.app-sidebar \.side-nav-item\.active[\s\S]*?background:#E7EEF9/);
 assert.match(layer,/\.app-layout \.app-sidebar \.side-nav-item\.active::before/);
 assert.match(layer,/background:#38CDE5/);
 assert.match(layer,/\.app-layout \.app-sidebar \.side-promo \{display:none!important;\}/);
 assert.match(layer,/\.app-layout \.mobile-bottom-nav button\.active/);
 assert.ok(!layer.match(/\.app-layout \.app-sidebar \.side-nav-item\.active[^}]*#5B4DE3/i));
});

test('all sixteen Kognos destinations remain reachable in compact navigation',()=>{
 const slices=['NAV_PRIMARY:View[]','NAV_SECONDARY:View[]','NAV_MORE:View[]'];
 const groups=slices.map(label=>{
  const begin=app.indexOf('const '+label);
  assert.ok(begin>=0,label);
  const close=app.indexOf(';',begin);
  return app.slice(begin,close);
 });
 const items=groups.flatMap(v=>[...v.matchAll(/'([a-z]+)'/g)].map(m=>m[1]));
 const expected=['dashboard','tutor','learn','subjects','questions','simulados',
  'plans','reviews','achievements','settings','trails','diagnostic',
  'sources','calendar','performance','profile'];
 assert.deepEqual(items.sort(),expected.sort());
 assert.equal(new Set(items).size,expected.length);
 assert.match(app,/SideNavigationItem key=\{key\}/);
 assert.match(app,/setMobileMenu\(false\)/);
 assert.match(app,/aria-controls="kognos-more-navigation"/);
});

test('new login is an original dark hero above a white form on all screen sizes',()=>{
 assert.match(app,/className="k-auth-gateway k-auth-v2"/);
 assert.match(app,/kognos-login-friends\.svg/);
 assert.match(app,/className="k-auth-form-shell"/);
 assert.match(layer,/radial-gradient\(ellipse at 50% 14%/);
 assert.match(layer,/background:#FFFFFF;color:#101B33/);
 assert.match(layer,/@media\(max-width:600px\)/);
 assert.match(layer,/min-height:100dvh/);
 assert.match(layer,/\.k-auth-mode-tabs button\.selected/);
 assert.match(layer,/\.auth-card \.field-stack input:focus-visible/);
 assert.match(asset,/<svg xmlns=/);
 assert.match(asset,/<circle cx="214" cy="135"/);
 assert.match(asset,/>Kog<\/text>/);
 assert.ok(!asset.includes('Dei'));
});

test('visual layer is last so it overrides previous themes without touching backend',()=>{
 assert.ok(layout.indexOf('import "./kognos-e-study.css"')>layout.indexOf('import "./kognos-clean-ui.css"'));
 for(const color of ['#101B33','#273A61','#38CDE5','#F7F9FC','#EDF1F7','#202633']){
  assert.ok(layer.includes(color),color);
 }
 assert.ok(!app.includes('NAV_GROUPS.map'));
 assert.match(app,/getCloudAttempts/);
 assert.match(app,/getSupabase\(\)/);
});
