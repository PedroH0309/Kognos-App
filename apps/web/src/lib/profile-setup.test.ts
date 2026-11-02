import {test} from 'node:test';
import assert from 'node:assert/strict';
import {profileSetupIssue,explainProfileDatabaseError} from './profile-setup.ts';
test('missing public.profiles gets the correct first migration and no fake success',()=>{
 const db={code:'PGRST205',message:"Could not find the table 'public.profiles' in the schema cache"};
 assert.equal(profileSetupIssue(db),'core');
 assert.match(explainProfileDatabaseError(db),/0001_core_schema/);
});
test('missing profile account columns points to 0003, not destructive table creation',()=>{
 const e={code:'PGRST204',message:"Could not find the 'username' column of 'profiles'"};
 assert.equal(profileSetupIssue(e),'account');
 assert.match(explainProfileDatabaseError(e),/0003_account_and_avatars/);
});
test('generic errors do not get misdiagnosed as missing schema',()=>{
 assert.equal(profileSetupIssue({code:'23505',message:'duplicate value'}),null);
 assert.match(explainProfileDatabaseError({code:'42501',message:'permission denied'}),/RLS/);
});