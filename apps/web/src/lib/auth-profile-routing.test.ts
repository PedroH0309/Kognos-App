import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readStoredStudentProfile} from './auth-profile-routing.ts';
import {initialProfile} from './profile.ts';

test('a signed-up account without saved preferences needs onboarding',()=>{
 assert.equal(readStoredStudentProfile(null),null);
 assert.equal(readStoredStudentProfile({preferences:{}}),null);
 assert.equal(readStoredStudentProfile({display_name:'Teste',preferences:{}}),null);
});
test('completed profile opens dashboard and uses database metadata',()=>{
 const actual=readStoredStudentProfile({display_name:'Lia',username:'lia_01',biography:'Olá',preferences:{...initialProfile,nickname:'Antigo',completedAt:'2026-10-01T09:00:00Z'}});
 assert.equal(actual?.nickname,'Lia');assert.equal(actual?.username,'lia_01');assert.equal(actual?.biography,'Olá');
});
test('recognizes saved legacy profiles without completedAt',()=>{
 const legacy=readStoredStudentProfile({display_name:'Lia',preferences:{...initialProfile,completedAt:''}});
 assert.equal(legacy?.completedAt,'legacy-profile');
});
test('rejects a name alone or a malformed row as a finished profile',()=>{
 assert.equal(readStoredStudentProfile({display_name:'Lia',preferences:{goals:[],styles:[],weeklyDays:[]}}),null);
 assert.equal(readStoredStudentProfile({preferences:'untrusted'}),null);
});