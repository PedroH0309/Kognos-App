import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const read=path=>readFileSync(new URL(path,root),'utf8');
test('AI-generated question linkage is server-authorized and versioned',()=>{
 const generate=read('apps/web/src/app/api/ai-questions/generate/route.ts');
 assert.match(generate,/validLessonAIReference\(generation\.lessonId/);
 assert.match(generate,/lesson_id:generation\.lessonId\|\|null/);
 const migration=read('supabase/migrations/0007_ai_lesson_links.sql');
 assert.match(migration,/add column if not exists lesson_id/);
 assert.match(migration,/user_id,lesson_id/);
});
test('learning progress is server-owned and never returns raw answer keys to browser',()=>{
 const route=read('apps/web/src/app/api/ai-study-progress/route.ts');
 assert.match(route,/withSupabase\(\{auth:'user'/);
 assert.match(route,/\.eq\('user_id',userId\)/);
 assert.match(route,/aggregateAIStudyProgress/);
 assert.doesNotMatch(route,/return NextResponse\.json\(\{.*correct_index/);
});
test('learning paths, subjects and question bank share an explicit lesson focus',()=>{
 const routes=read('apps/web/src/components/KognosApp.tsx');
 assert.match(routes,/generateForLesson/);
 assert.match(routes,/aiFocusLessonId/);
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(studio,/focusLessonId/);
 assert.match(studio,/activeLessonLink/);
 assert.match(read('apps/web/src/components/LearningTrails.tsx'),/onGenerateAI\(lesson.id\)/);
 assert.match(read('apps/web/src/components/SubjectDashboard.tsx'),/onGenerateAI\(next.id\)/);
});