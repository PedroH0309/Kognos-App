-- Kognos v0.4: pilot cloud sync for ORIGINAL demonstration questions and planner tasks.
-- Apply after 0001, 0002 and 0003. These demo records are not official assessment scores.
-- Do not treat a client-provided "correct" boolean as a trustworthy graded assessment;
-- official exams must be graded only in server-side endpoints with hidden answer keys.

create table if not exists public.kognos_demo_attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null check (char_length(question_id) between 1 and 60),
  subject text not null check (char_length(subject) between 1 and 80),
  answer_index smallint not null check (answer_index between 0 and 11),
  correct boolean not null,
  mode text not null check (mode in ('practice', 'mock')),
  created_at timestamptz not null default now()
);

create index if not exists kognos_demo_attempts_user_date
  on public.kognos_demo_attempts(user_id, created_at desc);

create table if not exists public.kognos_demo_tasks (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  task_date date not null,
  title text not null check (char_length(title) between 1 and 120),
  subject text not null check (char_length(subject) between 1 and 80),
  duration_minutes smallint not null check (duration_minutes between 5 and 240),
  done boolean not null default false,
  kind text not null check (kind in ('manual', 'suggested')),
  created_at timestamptz not null default now()
);

create index if not exists kognos_demo_tasks_user_date
  on public.kognos_demo_tasks(user_id, task_date);

alter table public.kognos_demo_attempts enable row level security;
alter table public.kognos_demo_tasks enable row level security;

create policy "kognos_attempts_select_own" on public.kognos_demo_attempts
  for select to authenticated using (user_id = (select auth.uid()));
create policy "kognos_attempts_insert_own" on public.kognos_demo_attempts
  for insert to authenticated with check (user_id = (select auth.uid()));
-- Intentionally no UPDATE/DELETE: demo attempts form an append-only history.

create policy "kognos_tasks_select_own" on public.kognos_demo_tasks
  for select to authenticated using (user_id = (select auth.uid()));
create policy "kognos_tasks_insert_own" on public.kognos_demo_tasks
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy "kognos_tasks_update_own" on public.kognos_demo_tasks
  for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "kognos_tasks_delete_own" on public.kognos_demo_tasks
  for delete to authenticated using (user_id = (select auth.uid()));

grant select, insert on public.kognos_demo_attempts to authenticated;
grant select, insert, update, delete on public.kognos_demo_tasks to authenticated;
