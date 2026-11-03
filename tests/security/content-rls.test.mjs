import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
const admin='11111111-1111-4111-8111-111111111111';
const student='22222222-2222-4222-8222-222222222222';
const token='33333333-3333-4333-8333-333333333333';
const migration=await readFile(new URL('../../supabase/migrations/0015_editorial_courses.sql',import.meta.url),'utf8');
test('real PostgreSQL: two identities, RLS, private answers, revisions, audit and AI overwrite protection',async t=>{
 const db=new PGlite();
 try{
  await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
   create schema auth; create table auth.users(id uuid primary key);
   create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
   grant usage on schema public,auth to anon,authenticated,service_role;
   insert into auth.users values('${admin}'),('${student}');`);
  await db.exec(migration);await db.exec(migration);
  await db.exec(`insert into public.kognos_content_admins(user_id) values('${admin}');`);
  const as=async(role,id)=>{await db.exec(`reset role; set role ${role}; select set_config('request.jwt.claim.sub','${id}',false);`);};
  const save=async(actor,id,revision,action,doc=null)=>(await db.query('select public.kognos_save_content($1,$2,$3,$4,$5::jsonb) as doc',[actor,id,revision,action,doc?JSON.stringify(doc):null])).rows[0].doc;
  await t.test('anonymous and students cannot read keys/history or claim admin',async()=>{
   for(const role of ['anon','authenticated']){
    await as(role,student);
    for(const table of ['kognos_content_documents','kognos_content_history','kognos_course_generation_locks'])await assert.rejects(db.query(`select * from public.${table}`),/permission denied/);
    await assert.rejects(db.query(`insert into public.kognos_content_admins(user_id) values('${student}')`),/permission denied/);
    await assert.rejects(save(admin,'course-example',0,'save',{id:'course-example',kind:'lesson'}),/permission denied/);
    await assert.rejects(db.query('select public.kognos_claim_course($1,$2,$3)',[admin,'course-example',token]),/permission denied/);
    await assert.rejects(db.query('select public.kognos_finish_course($1,$2,$3,$4::jsonb)',[admin,'course-example',token,'{}']),/permission denied/);
   }
   await as('authenticated',student);assert.equal((await db.query('select * from public.kognos_content_admins')).rows.length,0);
   await as('authenticated',admin);assert.equal((await db.query('select * from public.kognos_content_admins')).rows.length,1);
  });
  await t.test('server still rejects non-admin actor and stale edits, publishes snapshots only',async()=>{
   await as('service_role',admin);
   const doc={id:'question-example',kind:'question',correctIndex:2,prompt:'Original'};
   await assert.rejects(save(student,doc.id,0,'save',doc),/FORBIDDEN/);
   const r1=await save(admin,doc.id,0,'save',doc);assert.equal(r1.published,null);assert.equal(r1.revision,1);
   const r2=await save(admin,doc.id,1,'publish');assert.equal(r2.published.correctIndex,2);assert.equal(r2.published_revision,2);
   await assert.rejects(save(admin,doc.id,1,'save',doc),/REVISION_CONFLICT/);
   const r3=await save(admin,doc.id,2,'save',{...doc,correctIndex:1});assert.equal(r3.draft.correctIndex,1);assert.equal(r3.published.correctIndex,2);
   const r4=await save(admin,doc.id,3,'archive');assert.equal(r4.archived,true);
   const r5=await save(admin,doc.id,4,'restore');assert.equal(r5.archived,false);
   const r6=await save(admin,doc.id,5,'unpublish');assert.equal(r6.published,null);
   assert.equal((await db.query('select * from public.kognos_content_history where document_id=$1',[doc.id])).rows.length,6);
  });
  await t.test('students can read only their attempts, neither can forge results',async()=>{
   await as('service_role',admin);
   await db.query("insert into public.kognos_content_attempts(user_id,question_id,question_revision,answer_index,correct) values($1,'question-example',2,2,true),($2,'question-example',2,0,false)",[admin,student]);
   for(const id of [admin,student]){
    await as('authenticated',id);const rows=(await db.query('select * from public.kognos_content_attempts')).rows;assert.equal(rows.length,1);assert.equal(rows[0].user_id,id);
    await assert.rejects(db.query('update public.kognos_content_attempts set correct=true'),/permission denied/);
   }
  });
  await t.test('AI leases deduplicate generation and cannot overwrite editor content',async()=>{
   await as('service_role',admin);
   const claim=async id=>(await db.query('select public.kognos_claim_course($1,$2,$3) as ok',[student,id,token])).rows[0].ok;
   const finish=async(id,lease=token)=>(await db.query('select public.kognos_finish_course($1,$2,$3,$4::jsonb) as ok',[student,id,lease,JSON.stringify({id,kind:'lesson',review:'ai_reviewed'})])).rows[0].ok;
   assert.equal(await claim('course-generated'),true);assert.equal(await claim('course-generated'),false);
   assert.equal(await finish('course-generated',admin),false);assert.equal(await finish('course-generated'),true);
   assert.equal(await finish('course-generated'),false);
   await save(admin,'course-protected',0,'save',{id:'course-protected',kind:'lesson',objective:'Editor draft'});
   assert.equal(await claim('course-protected'),true);assert.equal(await finish('course-protected'),false);
   assert.equal((await db.query("select draft->>'objective' as value from public.kognos_content_documents where id='course-protected'")).rows[0].value,'Editor draft');
  });
 }finally{await db.close();}
});
