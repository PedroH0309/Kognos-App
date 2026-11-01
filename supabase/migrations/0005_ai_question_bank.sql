-- Kognos v1.0: private AI question bank and SERVER-GRADED attempts.
-- Apply after 0001..0004. No SELECT/INSERT grants or RLS policies to authenticated/anon.
-- All operations must use authenticated server routes and their service-role client.
-- AI-generated items are user-private and NOT officially reviewed/published exams.

create table if not exists public.kognos_ai_questions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  institution text not null check(institution in ('enem','etec','fuvest')),
  edition text not null check(char_length(edition) between 1 and 120),
  source_title text not null check(char_length(source_title) between 1 and 180),
  source_url text not null check(char_length(source_url) between 10 and 400),
  subject text not null check(char_length(subject) between 1 and 80),
  topic text not null check(char_length(topic) between 1 and 120),
  difficulty text not null check(difficulty in ('basic','intermediate','advanced')),
  prompt text not null check(char_length(prompt) between 30 and 1200),
  options jsonb not null check(jsonb_typeof(options)='array' and jsonb_array_length(options)=5),
  correct_index smallint not null check(correct_index between 0 and 4),
  explanation text not null check(char_length(explanation) between 35 and 1600),
  review_status text not null default 'auto_reviewed' check(review_status in ('auto_reviewed','editor_approved','withdrawn')),
  created_at timestamptz not null default now()
);
create index if not exists kognos_ai_questions_user_created on public.kognos_ai_questions(user_id,created_at desc);

create table if not exists public.kognos_ai_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.kognos_ai_questions(id) on delete cascade,
  answer_index smallint not null check(answer_index between 0 and 4),
  correct boolean not null,
  mode text not null check(mode in ('practice','mock')),
  created_at timestamptz not null default now()
);
create index if not exists kognos_ai_attempts_user_created on public.kognos_ai_attempts(user_id,created_at desc);

alter table public.kognos_ai_questions enable row level security;
alter table public.kognos_ai_attempts enable row level security;
-- No policies means users cannot query answer keys, alter grading, or inspect others' generated items.
revoke all on public.kognos_ai_questions from anon,authenticated;
revoke all on public.kognos_ai_attempts from anon,authenticated;
grant all on public.kognos_ai_questions to service_role;
grant all on public.kognos_ai_attempts to service_role;