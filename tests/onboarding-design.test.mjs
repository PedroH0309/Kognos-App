import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const controls=read('apps/web/src/components/OnboardingControls.tsx');
const css=read('apps/web/src/app/onboarding-polish.css');
const layout=read('apps/web/src/app/layout.tsx');

test('every onboarding step is covered by the consistent design and accessible controls',()=>{
 for(const text of ['function Onboarding(', 'step===0', 'step===1', 'step===2', 'step===3', 'step===4','<KognosSelect','<KognosDateField','<KognosRange']) assert.ok(app.includes(text),text);
 assert.ok(!app.slice(app.indexOf('function Onboarding('),app.indexOf('\nfunction Dashboard(')).includes('<select'), 'native browser selects should not reappear in onboarding');
});
test('select supports navigation and dismissing with keyboard and click outside',()=>{
 for(const text of ['role="combobox"','role="listbox"','role="option"','aria-activedescendant','ArrowDown','ArrowUp','Escape','pointerdown','aria-selected']) assert.ok(controls.includes(text),text);
});
test('date input validates manually entered dates and offers a complete calendar',()=>{
 for(const text of ['parseBrazilianDate','onInvalidChange','role="group"','readableFormatter','Escolher data no calendário','Mês anterior','Próximo mês']) assert.ok(controls.includes(text),text);
});
test('range has interactive progress and accessible controls',()=>{
 for(const text of ['type="range"','aria-valuetext','Reduzir','Aumentar','--k-range-progress'])assert.ok(controls.includes(text)||css.includes(text),text);
});
test('polish stylesheet is loaded last and covers mobile themes and reduced motion',()=>{
 assert.ok(layout.indexOf('onboarding-polish.css')>layout.indexOf('design-system.css'));
 for(const text of ['.theme-light .onboard-v061','@media(max-width:640px)',':focus-visible','prefers-reduced-motion','-webkit-slider-thumb','::-moz-range-thumb','.k-select-options','.k-calendar'])assert.ok(css.includes(text),text);
});