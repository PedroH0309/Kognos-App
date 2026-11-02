-- Kognos v1.5: explicitly link generated AI questions to authored introductory lessons.
-- Run AFTER 0005_ai_question_bank.sql (and 0006 for official-source catalogs).
-- This metadata is written through an authenticated server route, not directly by clients.
-- Existing AI questions are preserved and retain a NULL lesson_id; the application maps
-- legacy rows only when a subject/institution/topic bridge is unambiguous.
alter table public.kognos_ai_questions
  add column if not exists lesson_id text;

alter table public.kognos_ai_questions
  drop constraint if exists kognos_ai_questions_lesson_id_format;
alter table public.kognos_ai_questions
  add constraint kognos_ai_questions_lesson_id_format
  check(lesson_id is null or (char_length(lesson_id) between 5 and 80 and lesson_id ~ '^[a-z]+-[a-z0-9-]+$'));

create index if not exists kognos_ai_questions_user_lesson
  on public.kognos_ai_questions(user_id,lesson_id) where lesson_id is not null;

-- The existing 0005 RLS + revoked client grants remain unchanged.