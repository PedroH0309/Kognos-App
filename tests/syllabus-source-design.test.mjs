import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(p)=>readFileSync(new URL(`../${p}`,import.meta.url),'utf8');
test('catalog is visible but moderation always checks explicit server-side editor allowlist',()=>{
 const route=read('apps/web/src/app/api/exam-sources/route.ts');
 assert.match(route,/withSupabase/);assert.match(route,/KOGNOS_EDITOR_USER_IDS/);
 assert.match(route,/if\(!editor\(userId\)\)return error\(/);
 assert.match(route,/review_status:'pending'/);
 assert.match(route,/reserve_ai_quota/);
});
test('catalog tables are protected from direct anonymous and user access',()=>{
 const sql=read('supabase/migrations/0006_exam_source_catalog.sql');
 assert.match(sql,/enable row level security/g);
 assert.match(sql,/revoke all on public\.kognos_exam_sources from anon, authenticated/);
 assert.match(sql,/revoke all on public\.kognos_exam_topics from anon, authenticated/);
 assert.match(sql,/source_topic_id uuid references/);
});
test('source evidence remains only an extraction proposal until reviewed',()=>{
 const source=read('apps/web/src/lib/syllabus-sources.ts');
 assert.match(source,/redirect:'error'/);
 assert.match(source,/SOURCE_UNSUPPORTED_TYPE/);
 assert.match(source,/evidenceText\.includes/);
 const route=read('apps/web/src/app/api/ai-questions/generate/route.ts');
 assert.match(route,/topic\.review_status!=='approved'/);
 assert.match(route,/source\.review_status!=='approved'/);
 assert.match(route,/source_topic_id:sourceTopicId/);
});
test('students and editors receive separate interfaces and sources are English-documented',()=>{
 assert.match(read('apps/web/src/components/KognosApp.tsx'),/view==='sources'\?<ExamSources/);
 assert.match(read('apps/web/src/components/AiQuestionStudio.tsx'),/sourceTopicId:verifiedTopic\.id/);
 assert.match(read('README.md'),/What's new in v1\.1/);
 assert.match(read('docs/KOGNOS_SPRINT_11_SOURCE_MATRICES.md'),/editorial review/i);
});