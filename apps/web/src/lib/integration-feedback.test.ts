import {test} from 'node:test';
import assert from 'node:assert/strict';
import {integrationState,integrationTitle,studySyncNotice} from './integration-feedback.ts';

test('integration state distinguishes both missing providers and standalone gaps',()=>{
 const both=integrationState({supabaseServerConfigured:false,nvidiaKeyConfigured:false});
 assert.equal(both,'missing-both');
 assert.equal(integrationState({supabaseServerConfigured:true,nvidiaKeyConfigured:false}),'missing-nvidia');
 assert.equal(integrationState({supabaseServerConfigured:false,nvidiaKeyConfigured:true}),'missing-supabase');
 assert.equal(integrationState({supabaseServerConfigured:true,nvidiaKeyConfigured:true}),'ready');
 assert.match(integrationTitle(both),/NVIDIA.*Supabase/);
});
test('sync fallback never invents zero progress or exposes raw server exception',()=>{
 const text=studySyncNotice('Supabase ainda não configurado no servidor.');
 assert.match(text,/questões salvas não foram apagadas/);
 assert.doesNotMatch(text,/0 questão|0\/4/);
 assert.doesNotMatch(studySyncNotice('internal DB error with credentials'),/credentials/);
});