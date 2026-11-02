import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const sql=read('supabase/migrations/0010_restore_private_avatars.sql');
const css=read('apps/web/src/app/kognos-profile-planner-fixes.css');
const layout=read('apps/web/src/app/layout.tsx');
const planner=read('apps/web/src/components/StudyPlanner.tsx');
const account=read('apps/web/src/components/AccountSettings.tsx');

test('repair migration is repeatable, private, capped at 3 MB and owner-only',()=>{
 assert.match(sql,/add column if not exists avatar_path text/);
 assert.match(sql,/insert into storage.buckets/);
 assert.match(sql,/on conflict \(id\) do update/);
 assert.match(sql,/'kognos-avatars','kognos-avatars',false,3145728/);
 for(const mime of ['image/jpeg','image/png','image/webp'])assert.ok(sql.includes(mime));
 for(const operation of ['select','insert','update','delete'])assert.match(sql,new RegExp('for '+operation+' to authenticated'));
 assert.equal((sql.match(/bucket_id='kognos-avatars'/g)||[]).length,5);
 assert.match(sql,/pg_policies/);
 assert.match(sql,/\(storage\.foldername\(name\)\)\[1\]=\(select auth\.uid\(\)\)::text/);
 assert.ok(!sql.includes('to anon'));
 assert.ok(!sql.includes('public=true'));
});

test('private avatar upload must sign before publishing DB pointer and explain bucket failure',()=>{
 const uploadStart=account.indexOf("const {error:uploadError}=await bucket.upload");
 const signedStart=account.indexOf("const {data:signed,error:signError}=await bucket.createSignedUrl");
 const pointerStart=account.indexOf("const {error:dbError}=await sb.from('profiles').update({avatar_path:path})");
 assert.ok(uploadStart>=0&&signedStart>uploadStart&&pointerStart>signedStart);
 assert.match(account,/saved=true/);
 assert.match(account,/if\(!saved\)/);
 assert.match(account,/avatarStorageErrorMessage\(e\)/);
 assert.match(account,/previous\.avatar_path\.startsWith/);
 assert.match(account,/accept="image\/png,image\/jpeg,image\/webp"/);
});

test('planner date CSS fixes inherited form margin, flex alignment and mobile column width',()=>{
 assert.match(planner,/className="two-cols planner-form-grid"/);
 assert.match(planner,/<KognosDateField label="Data"/);
 assert.match(css,/\.planner-form-grid \.kg-date-box > input \{/);
 assert.match(css,/margin:0;/);
 assert.match(css,/align-items:center/);
 assert.match(css,/\.kg-date-icon-button\.calendar/);
 assert.match(css,/@media\(max-width:700px\)/);
 assert.match(css,/grid-template-columns:minmax\(0,1fr\)/);
 assert.match(css,/position:relative/);
 assert.ok(layout.indexOf('import "./kognos-profile-planner-fixes.css";')>layout.indexOf('import "./kognos-motion-theme.css";'));
});
