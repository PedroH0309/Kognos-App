import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeUsername,validateUsername,validateDisplayName,validateNewPassword,validateAvatar,avatarStorageErrorMessage } from './account.ts';
test('normalização e regras de username',()=>{
 assert.equal(normalizeUsername(' @Maria_23 '),'maria_23');
 assert.equal(validateUsername('@Maria_23'),null);
 assert.ok(validateUsername('2pedro'));
 assert.ok(validateUsername('ab'));
 assert.ok(validateUsername('nome com espaço'));
});
test('nome de exibição',()=>{assert.equal(validateDisplayName('  Ana '),null);assert.ok(validateDisplayName(''));});
test('senha nunca pode ter menos de 12 caracteres',()=>{assert.ok(validateNewPassword('12345678'));assert.equal(validateNewPassword('frase longa segura 2026'),null);});
test('avatar rejeita formato perigoso e arquivo grande',()=>{
 assert.equal(validateAvatar({type:'image/png',size:20000}),null);
 assert.ok(validateAvatar({type:'image/svg+xml',size:40}));
 assert.ok(validateAvatar({type:'image/png',size:4000000}));
});

test('missing private avatar bucket gives a migration instruction instead of raw error',()=>{
 for(const err of [
  new Error('Bucket not found'),
  {statusCode:'404',code:'BucketNotFound',message:'Bucket not found'},
  {code:'NoSuchBucket',message:'The bucket does not exist'}
 ]){
  const result=avatarStorageErrorMessage(err);
  assert.match(result,/0010_restore_private_avatars\.sql/);
  assert.match(result,/Supabase/);
 }
});
test('avatar upload permission and profile schema failures have actionable messages',()=>{
 assert.match(avatarStorageErrorMessage(new Error('new row violates row-level security policy')),/políticas privadas/);
 assert.match(avatarStorageErrorMessage(new Error('column profiles.avatar_path does not exist')),/0010_restore_private_avatars/);
 assert.match(avatarStorageErrorMessage(new Error('Payload too large')),/3 MB/);
 assert.equal(avatarStorageErrorMessage(null),'Não foi possível guardar a foto. Confira a configuração do Supabase e tente novamente.');
});
