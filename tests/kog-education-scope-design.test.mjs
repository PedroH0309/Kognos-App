import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('education-only filtering runs in authenticated tutor route before external model invocation',()=>{
 const route=read('apps/web/src/app/api/tutor/route.ts');
 assert.match(route,/withSupabase/);
 assert.match(route,/auth: 'user'/);
 const guard=route.indexOf('const scopeResponse=tutorScopeReply(body.message as string)');
 const call=route.indexOf("requestAI('tutor'");
 assert.ok(guard>=0&&call>guard,'guard must run before calling the provider');
 assert.match(route,/enforcePedagogicalTutorAnswer\(answer\)/);
 assert.match(route,/reserve_ai_quota/);
 assert.ok(route.indexOf("rpc('reserve_ai_quota'")>guard,'Only allowed educational requests may consume tutor quota');
 assert.ok(route.indexOf("rpc('reserve_ai_quota'")<call,'Quota must be reserved before the provider call');
});
test('tutor UI uses the same educational guard and no code response is displayed',()=>{
 const ui=read('apps/web/src/components/KogAssistant.tsx');
 assert.match(ui,/tutorScopeReply\(draft.trim\(\)\)/);
 assert.match(ui,/enforcePedagogicalTutorAnswer\(message.content\)/);
 assert.match(ui,/Não gero código nem trabalhos prontos/);
});
test('system prompt strictly limits replies to teaching rather than software generation',()=>{
 const tutor=read('apps/web/src/lib/tutor.ts');
 assert.match(tutor,/ESCOPO OBRIGATÓRIO/);
 assert.match(tutor,/NUNCA produzir códigos-fonte/);
 assert.match(tutor,/Se a solicitação não for de aprendizagem/);
});

test('public question generation enforces shared per-account quota before external provider calls',()=>{
 const route=read('apps/web/src/app/api/ai-questions/generate/route.ts');
 assert.match(route,/withSupabase/);
 assert.match(route,/auth:'user'/);
 assert.match(route,/validateGenerationRequest/);
 const reserved=route.indexOf("rpc('reserve_ai_quota'");
 const provider=route.indexOf('await createAndReviewQuestionBatch(');
 assert.ok(reserved>route.indexOf('validateGenerationRequest('),'Only validated requests may consume quota');
 assert.ok(provider>reserved,'Quota must be reserved before the provider is called');
 assert.match(route,/tutorDailyRequestLimit\(\)/);
 assert.match(route,/if\(!reserved\)return error\([^\n]+429\)/);
});
