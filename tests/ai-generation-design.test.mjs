import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
test('AI-generated questions are listed/graded via server-only authenticated endpoints',()=>{
 for(const path of ['apps/web/src/app/api/ai-questions/route.ts','apps/web/src/app/api/ai-questions/submit/route.ts','apps/web/src/app/api/ai-questions/generate/route.ts']){
  assert.match(read(path),/withSupabase/);assert.match(read(path),/auth:'user'/);
 }
 assert.match(read('apps/web/src/app/api/ai-questions/submit/route.ts'),/correct_index/);
 assert.doesNotMatch(read('apps/web/src/components/AiQuestionStudio.tsx'),/correct_index/);
});
test('migration locks down generated answer keys and keeps generated items personal',()=>{
 const schema=read('supabase/migrations/0005_ai_question_bank.sql');
 assert.match(schema,/enable row level security/g);assert.match(schema,/revoke all .* from anon,authenticated/i);
 assert.match(schema,/user_id uuid not null references auth.users/);
});
test('AI bank and simulations use the same private pool',()=>{
 const code=read('apps/web/src/components/PracticeSpace.tsx');const panel=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(code,/AiQuestionStudio/);assert.match(panel,/inMock/);assert.match(panel,/\/api\/ai-questions\/generate/);
 assert.match(panel,/\/api\/ai-questions\/submit/);
});
test('versioned institutional sources link to official entry points',()=>{
 const b=read('apps/web/src/lib/exam-blueprints.ts');
 for(const part of ['gov.br/inep','vestibulinho.etec.sp.gov.br','fuvest.br'])assert.ok(b.includes(part));
 assert.match(b,/editorial/);
});