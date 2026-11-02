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
 assert.match(planner,/StudySyllabus profile=\{profile\} tasks=\{tasks\} weakTopics=\{weeklyTopics\}/);
 assert.match(planner,/rebuildSuggestions/);
 assert.doesNotMatch(calendar,/downloadStudyCalendar|Exportar agenda|\.ics/);
});

test('versioned upgrade balances subjects and exposes private inventory, history, and weak topics',()=>{
 const sql=read('supabase/migrations/0013_weekly_exam_balanced_inventory.sql');
 const api=read('apps/web/src/app/api/weekly-exam/route.ts');
 const ui=read('apps/web/src/components/WeeklyExamSpace.tsx');
 assert.match(sql,/partition by q.subject/);
 assert.match(sql,/kognos_weekly_exam_inventory/);
 assert.match(sql,/kognos_weekly_exam_history/);
 assert.match(sql,/kognos_weekly_exam_weak_topics/);
 assert.match(sql,/to service_role/);
 assert.match(api,/subjectScores/);
 assert.match(api,/weakTopics/);
 assert.match(ui,/questões inéditas disponíveis/);
 assert.match(ui,/Seu histórico semanal/);
 assert.match(ui,/Seu resultado por disciplina/);
});
test('planner includes evidence from verified weekly question attempts',()=>{
 const planner=read('apps/web/src/components/StudyPlanner.tsx');
 const adapt=read('apps/web/src/lib/personalized-study-cycle.ts');
 assert.match(planner,/setWeeklyTopics/);
 assert.match(planner,/weeklyTopics\)/);
 assert.match(adapt,/weeklyWrong/);
 assert.match(adapt,/weeklyBoost/);
});

test('curriculum checklist shows task-backed evidence without a mastery claim',()=>{
 const ui=read('apps/web/src/components/StudySyllabus.tsx');
 const lib=read('apps/web/src/lib/syllabus-progress.ts');
 assert.match(ui,/syllabusProgress\(catalog,tasks,weakTopics\)/);
 assert.match(ui,/Não representa nota, proficiência ou domínio do conteúdo/);
 assert.match(ui,/statusFilter/);
 assert.match(lib,/lastWrong/);
});

test('manual task subjects include the complete selected exam rather than fixed seven',()=>{
 const planner=read('apps/web/src/components/StudyPlanner.tsx');
 assert.match(planner,/Object\.keys\(syllabusWithVerifiedTopics\(completeExamTopicCatalog\(examScope\),examScope,officialTopics\)\)/);
 assert.match(planner,/permittedSubjects=examSubjects\.length\?examSubjects:subjects/);
 assert.match(planner,/StudySyllabus profile=\{profile\} tasks=\{tasks\} weakTopics=\{weeklyTopics\}/);
});

test('database schema upgrades old institution checks without dropping user questions',()=>{
 const migration=read('supabase/migrations/0014_expand_supported_exam_institutions.sql');
 assert.match(migration,/alter table public\.kognos_ai_questions/);
 assert.match(migration,/alter table public\.kognos_exam_sources/);
 assert.match(migration,/institution in \('enem','etec','fuvest','saresp','vunesp'\)/);
 assert.doesNotMatch(migration,/drop table|truncate|delete from/i);
 const importSources=read('apps/web/src/lib/syllabus-sources.ts');
 assert.match(importSources,/www\.vunesp\.com\.br/);
 assert.match(importSources,/atendimento\.educacao\.sp\.gov\.br/);
});
test('weekly planner respects legacy question topics already used by the AI bank',()=>{
 const planner=read('apps/web/src/lib/personalized-study-cycle.ts');
 assert.match(planner,/completeExamTopicCatalog\(activeSyllabi\(profile\)\)/);
 assert.match(planner,/weeklyWrong/);
});
