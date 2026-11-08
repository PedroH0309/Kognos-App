import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const switchUi=read('apps/web/src/components/ThemeSwitch.tsx');
const css=read('apps/web/src/app/kognos-theme-switch.css');
const layout=read('apps/web/src/app/layout.tsx');
const account=read('apps/web/src/components/AccountSettings.tsx');

test('sun and moon control is a real accessible theme switch, not decoration',()=>{
 assert.match(switchUi,/role="switch"/);
 assert.match(switchUi,/aria-label="Modo escuro"/);
 assert.match(switchUi,/aria-checked=\{dark\}/);
 assert.match(switchUi,/onClick=\{\(\)=>onChange\(dark\?'light':'dark'\)\}/);
 assert.match(switchUi,/type="button"/);
 assert.match(switchUi,/k-theme-switch-sun/);
 assert.match(switchUi,/k-theme-switch-moon/);
 assert.match(switchUi,/k-theme-switch-thumb/);
});

test('theme switch is shown in app header and on signed-out login',()=>{
 assert.ok(app.includes('<ThemeSwitch theme={theme} onChange={changeTheme}/>'));
 assert.ok(app.includes('<AuthModal standalone theme={theme} onThemeChange={changeTheme}'));
 assert.ok(app.includes('<div className="k-auth-theme-control"><ThemeSwitch theme={theme} onChange={onThemeChange}/></div>'));
 assert.ok(!app.includes('aria-label="Alternar tema"'));
});

test('theme state is shared with settings and stored in the existing preference key',()=>{
 assert.match(app,/const \[avatarUrl,setAvatarUrl\].*?const \[theme,setTheme\]=useState<'dark'\|'light'>\('light'\)/);
 assert.ok(app.includes("window.localStorage.getItem('kognos_theme_v1')"));
 assert.ok(app.includes("window.localStorage.setItem('kognos_theme_v1',v)"));
 assert.ok(app.includes('onThemeChange={changeTheme}'));
 assert.ok(account.includes("onThemeChange('dark')"));
 assert.ok(account.includes("onThemeChange('light')"));
});

test('visuals match the supplied reference while respecting keyboard and reduced motion',()=>{
 assert.match(css,/background:#73C0FC/);
 assert.match(css,/background:#183153/);
 assert.match(css,/background:#e8e8e8/);
 assert.match(css,/transform:translateX\(30px\)/);
 assert.match(css,/@keyframes k-theme-sun-spin/);
 assert.match(css,/@keyframes k-theme-moon-tilt/);
 assert.match(css,/:focus-visible/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/\.k-auth-gateway \.k-auth-theme-control/);
 assert.ok(layout.includes('import "./kognos-theme-switch.css"'));
 assert.ok(layout.lastIndexOf('kognos-theme-switch.css')>layout.lastIndexOf('kognos-auth-motion.css'));
});
