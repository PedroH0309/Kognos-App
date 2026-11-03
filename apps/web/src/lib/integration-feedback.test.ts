import {test} from 'node:test';
import assert from 'node:assert/strict';
import {integrationState,integrationTitle,studySyncNotice,bankSyncNotice} from './integration-feedback.ts';
import {publicAIReadiness} from './ai-readiness.ts';

const supabase={
 SUPABASE_URL:'https://example.supabase.co',
 SUPABASE_PUBLISHABLE_KEY:'pub-test',
 SUPABASE_SECRET_KEY:'secret-very-private',
 SUPABASE_JWKS_URL:'https://example.supabase.co/auth/v1/.well-known/jwks.json',
};

test('readiness distinguishes missing database from missing free provider without requiring NVIDIA',()=>{
 const both=publicAIReadiness({AI_FREE_ONLY:'true'});
 assert.equal(integrationState(both),'missing-both');
 assert.match(integrationTitle('missing-both'),/banco de dados/);
 assert.equal(integrationState(publicAIReadiness({...supabase})),'missing-ai');
 assert.equal(integrationState(publicAIReadiness({GROQ_API_KEY:'private-groq'})),'missing-supabase');
 const groq=publicAIReadiness({...supabase,GROQ_API_KEY:'private-groq'});
 const gemini=publicAIReadiness({...supabase,GEMINI_API_KEY:'private-gemini'});
 assert.equal(integrationState(groq),'ready');
 assert.equal(integrationState(gemini),'ready');
 assert.equal(groq.questionGenerationConfigured,true);
 assert.equal(gemini.questionGenerationConfigured,true);
 assert.equal(groq.nvidiaKeyConfigured,false);
 assert.equal(integrationState(publicAIReadiness({...supabase,NVIDIA_API_KEY:'nv-only'})),'missing-ai');
 assert.ok(!JSON.stringify(groq).includes('private-groq'));
 assert.ok(!JSON.stringify(gemini).includes('private-gemini'));
 assert.ok(!JSON.stringify(groq).includes('secret-very-private'));
});
test('sync fallback never invents zero progress or exposes raw server exceptions',()=>{
 const text=studySyncNotice('Supabase ainda não configurado no servidor.');
 assert.match(text,/questões salvas não foram apagadas/);
 assert.doesNotMatch(text,/0 questão|0\/4/);
 assert.doesNotMatch(studySyncNotice('internal DB error with credentials'),/credentials/);
});
test('bank load errors remain actionable but never reflect unsafe upstream content',()=>{
 assert.match(bankSyncNotice('Sua sessão expirou.'),/sessão/);
 assert.match(bankSyncNotice('Execute a migração 0009'),/migrações/);
 assert.match(bankSyncNotice('Database error with secret-token'),/tente outra vez/);
 assert.doesNotMatch(bankSyncNotice('Database error with secret-token'),/secret-token/);
});
