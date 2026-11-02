import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('weekly UI chooses any 20–90 questions and grades via existing verified endpoint',()=>{
 const ui=read('apps/web/src/components/WeeklyExamSpace.tsx');
 assert.match(ui,/min=\{20\} max=\{90\}/);
 assert.match(ui,/\/api\/weekly-exam/);
 assert.match(ui,/\/api\/ai-questions\/submit/);
 assert.match(ui,/\/api\/ai-questions\/generate/);
 assert.match(ui,/session\.answeredIds/);
});
test('weekly exam reservation is private, atomic and globally unique per student question',()=>{
 const sql=read('supabase/migrations/0012_weekly_unique_exams.sql');
 assert.match(sql,/unique\(user_id,question_id\)/);
 assert.match(sql,/unique\(user_id,institution,week_start\)/);
 assert.match(sql,/pg_advisory_xact_lock/);
 assert.match(sql,/enable row level security/);
 assert.match(sql,/revoke all on function public\.reserve_kognos_weekly_exam/);
 assert.match(sql,/grant execute on function public\.reserve_kognos_weekly_exam[\s\S]*?to service_role/);
 assert.match(sql,/INSUFFICIENT_APPROVED_QUESTIONS/);
 assert.match(sql,/p_count not between 20 and 90/);
});
test('weekly API never sends the private correct index before the student submits',()=>{
 const route=read('apps/web/src/app/api/weekly-exam/route.ts');
 assert.match(route,/reserve_kognos_weekly_exam/);
 assert.match(route,/ctx\.supabaseAdmin/);
 assert.match(route,/const questions:PublicQuestion\[\]/);
 assert.match(route,/correct_index/);
 assert.match(route,/return \{id:q\.id,subject:q\.subject,topic:q\.topic,prompt:q\.prompt,options:q\.options\}/);
});
test('student plan is grounded in the selected exam and no longer exports ICS',()=>{
 const planner=read('apps/web/src/components/StudyPlanner.tsx');
 const calendar=read('apps/web/src/components/StudyCalendar.tsx');
 assert.match(planner,/StudySyllabus profile=\{profile\}/);
 assert.match(planner,/rebuildSuggestions/);
 assert.doesNotMatch(calendar,/downloadStudyCalendar|Exportar agenda|\.ics/);
});
