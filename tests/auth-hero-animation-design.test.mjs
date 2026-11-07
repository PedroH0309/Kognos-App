import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('login hero uses the existing original illustration and an animation-only stylesheet',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 const layout=read('apps/web/src/app/layout.tsx');
 assert.match(app,/kognos-login-friends\.svg/);
 assert.match(app,/k-auth-story-main/);
 assert.match(app,/AuthModal standalone/);
 assert.match(layout,/import "\.\/kognos-auth-motion\.css";/);
 assert.ok(layout.lastIndexOf('kognos-auth-motion.css')>layout.indexOf('kognos-tutor-page.css'));
});

test('three SVG avatars move independently without adding JS or changing portrait content',()=>{
 const svg=read('apps/web/public/brand/kognos-login-friends.svg');
 for(const name of ['left','right','front'])assert.ok(svg.includes('kognos-portrait-'+name),name);
 assert.match(svg,/@keyframes kognos-avatar-hover/);
 assert.match(svg,/@media\(prefers-reduced-motion:reduce\)/);
 assert.match(svg,/>Kog<\/text>/);
 assert.equal((svg.match(/<g\s/g)||[]).length,(svg.match(/<\/g>/g)||[]).length);
});

test('animated panel does not move controls and honors reduced-motion preference',()=>{
 const css=read('apps/web/src/app/kognos-auth-motion.css');
 for(const selector of ['.k-auth-portrait-scene img','.k-auth-stage-brand','.k-auth-story h1',
 '.k-auth-story-main>p','.k-auth-form-shell','.k-auth-story-bubble'])
  assert.ok(css.includes(selector),selector);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
 assert.match(css,/animation:none!important/);
 assert.ok(!css.includes('pointer-events:none!important'));
});
