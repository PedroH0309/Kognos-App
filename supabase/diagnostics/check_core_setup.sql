-- Kognos setup diagnostics (read-only) — run in your project's Supabase SQL Editor.
-- If public.profiles = MISSING, apply 0001_core_schema.sql (on a fresh project),
-- followed by 0002, 0003, 0004, 0005, 0006 and 0007 IN ORDER.
-- Do not blindly rerun 0001 on a partially migrated project: policies may already exist.
with dependencies(name,sql_object,required_migration) as (
 values
 ('User profiles','public.profiles','0001_core_schema.sql'),
 ('User roles','public.user_roles','0001_core_schema.sql'),
 ('Daily AI quota','public.ai_daily_quota','0002_kognos_onboarding_ai.sql'),
 ('Demo practice','public.kognos_demo_attempts','0004_demo_cloud_sync.sql'),
 ('AI question bank','public.kognos_ai_questions','0005_ai_question_bank.sql'),
 ('AI question attempts','public.kognos_ai_attempts','0005_ai_question_bank.sql'),
 ('Official source catalog','public.kognos_exam_sources','0006_exam_source_catalog.sql'),
 ('Official topics','public.kognos_exam_topics','0006_exam_source_catalog.sql')
)
select name, case when to_regclass(sql_object) is null then 'MISSING' else 'OK' end as status,
  required_migration from dependencies order by required_migration, name;

select column_name from information_schema.columns
where table_schema='public' and table_name='profiles'
  and column_name in ('id','display_name','education_stage','preferences','username','biography','avatar_path')
order by column_name;
-- Run after fixing the missing objects if PostgREST still shows a stale cache:
-- notify pgrst, 'reload schema';