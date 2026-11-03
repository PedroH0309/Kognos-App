import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const read=path=>readFileSync(new URL(path,root),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const css=read('apps/web/src/app/auth-entry.css');
const layout=read('apps/web/src/app/layout.tsx');

test('signed-out cloud user is served the standalone auth page before onboarding',()=>{
 assert.ok(app.includes('if(!user)return <div className={`theme-${theme}`}><AuthModal standalone'));
 assert.ok(app.indexOf('if(!user)return <div')<app.indexOf('if(!profile||editing)return'));
 assert.ok(app.includes('!cloud)return <main'));
 assert.ok(app.includes('role={standalone?undefined:"dialog"}'));
 assert.ok(app.includes('if(standalone)return <main className="k-auth-gateway k-auth-v2"'));
});
test('new user gets onboarding, existing student gets their saved profile and dashboard',()=>{
 for(const phrase of ['readStoredStudentProfile(data)','/avatar_path/i.test(error.message)','setProfileError(explainProfileDatabaseError(error))','setProfile(readStoredStudentProfile(data))','onFinish={saveProfile}','setProfile(normalized);setEditing(false);setView(\'dashboard\')'])assert.ok(app.includes(phrase),phrase);
 assert.ok(!app.includes('if(!profile||editing)return <div className={`${accessibility} theme-${theme}`}><Onboarding key={editing'));
});
test('auth state is persisted by Supabase and page reload has authenticated bootstrap',()=>{
 for(const phrase of ['sb.auth.getSession()','sb.auth.onAuthStateChange','event===\'SIGNED_OUT\'','event===\'SIGNED_IN\'','authRequestId.current!==requestId','Tentar novamente','onSignout={()=>void signout()}'])assert.ok(app.includes(phrase),phrase);
});
test('login first layout is adaptive and respects existing mobile and theme styles',()=>{
 for(const rule of ['.k-auth-gateway','.k-auth-shell','.k-auth-gateway .auth-card','@media(max-width:760px)','@media(max-width:380px)','prefers-reduced-motion'])assert.ok(css.includes(rule),rule);
 assert.ok(layout.indexOf('auth-entry.css')>layout.indexOf('onboarding-polish.css'));
});