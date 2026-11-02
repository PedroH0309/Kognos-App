import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('education-only filtering runs in the authenticated tutor route before quota reservation',()=>{
 const route=read('apps/web/src/app/api/tutor/route.ts');
 assert.match(route,/withSupabase/);
 assert.match(route,/auth: 'user'/);
 const guard=route.indexOf('const scopeResponse=tutorScopeReply(body.message as string)');
 const quota=route.indexOf("'reserve_ai_quota'");
 assert.ok(guard>=0&&quota>guard,'guard must run before quota charge');
 assert.match(route,/enforcePedagogicalTutorAnswer\(answer\)/);
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
