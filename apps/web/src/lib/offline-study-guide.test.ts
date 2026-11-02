import {test} from 'node:test';
import assert from 'node:assert/strict';
import {localStudyGuide} from './offline-study-guide.ts';
import {publicAIReadiness} from './ai-readiness.ts';

test('AI readiness exposes only booleans and does not claim provider connectivity',()=>{
 const env={SUPABASE_URL:'u',SUPABASE_PUBLISHABLE_KEY:'p',SUPABASE_SECRET_KEY:'secret123',SUPABASE_JWKS_URL:'j',NVIDIA_API_KEY:'nvapi-SUPERSECRET'};
 const result=publicAIReadiness(env);
 assert.equal(result.tutorConfigured,true);
 assert.equal(JSON.stringify(result).includes('SUPERSECRET'),false);
 assert.deepEqual(publicAIReadiness({}),{tutorConfigured:false,nvidiaKeyConfigured:false,questionGenerationConfigured:false,supabaseServerConfigured:false,offlineGuidesAvailable:true});
 assert.equal(publicAIReadiness({...env,NVIDIA_API_KEY:'  '}).tutorConfigured,false);
});
test('Pythagoras has a correct original non-AI worked example and a mini exercise',()=>{
 const text=localStudyGuide('me explique teorema de pitágoras');
 assert.equal(text?.topic,'Teorema de Pitágoras');
 assert.match(text?.content||'',/3² \+ 4²/);
 assert.match(text?.content||'',/sem IA/);
});
test('local guide uses authored lesson and never leaks answers while item is in progress',()=>{
 assert.match(localStudyGuide('explique esta aula',{kind:'lesson',lessonId:'math-percentages'})?.content||'',/Porcentagem/);
 assert.equal(localStudyGuide('me explique teorema de pitagoras',{kind:'question',phase:'solving'}),null);
 assert.equal(localStudyGuide('me dê o gabarito',null),null);
 assert.equal(localStudyGuide('me fale sobre criptografia quântica'),null);
 assert.equal(localStudyGuide('teorema de pitagoras'.repeat(200)),null);
});