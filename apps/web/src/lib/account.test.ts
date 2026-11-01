import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeUsername,validateUsername,validateDisplayName,validateNewPassword,validateAvatar } from './account.ts';
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
