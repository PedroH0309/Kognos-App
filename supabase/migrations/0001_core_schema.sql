-- FOCO | Migration 0001: core multi-user schema
-- Apply to a fresh Supabase project. Review changes before re-applying to an existing DB.

create extension if not exists pgcrypto;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to service_role;

-- ---------------------------------------------------------------------------
-- Roles and helpers
-- ---------------------------------------------------------------------------
create table if not exists public.user_roles (
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('student', 'content_editor', 'admin')),
  created_at timestamptz not null default now(),
  primary key (user_id, role)
);

create or replace function public.has_role(_role text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.user_roles ur
    where ur.user_id = (select auth.uid())
      and ur.role = _role
  );
$$;

revoke all on function public.has_role(text) from public;
grant execute on function public.has_role(text) to authenticated;

create or replace function public.is_content_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.has_role('admin') or public.has_role('content_editor');
$$;

revoke all on function public.is_content_staff() from public;
grant execute on function public.is_content_staff() to anon, authenticated;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
revoke all on function public.touch_updated_at() from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- User profile and onboarding
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (char_length(display_name) <= 60),
  education_stage text check (education_stage in ('fundamental_2', 'medio', 'tecnico', 'superior', 'adulto', 'other')),
  timezone text not null default 'America/Sao_Paulo',
  locale text not null default 'pt-BR',
  preferences jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    nullif(left(coalesce(new.raw_user_meta_data ->> 'display_name', ''), 60), '')
  )
  on conflict (id) do nothing;

  insert into public.user_roles (user_id, role)
  values (new.id, 'student')
  on conflict (user_id, role) do nothing;

  return new;
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Exam profiles and reusable knowledge taxonomy
-- ---------------------------------------------------------------------------
create table if not exists public.exam_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null check (category in ('school', 'enem', 'vestibular', 'technical', 'civil_service', 'olympiad', 'custom')),
  description text not null default '',
  configuration jsonb not null default '{}'::jsonb,
  version integer not null default 1 check (version > 0),
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  area text not null default 'Geral',
  education_stages text[] not null default '{}',
  description text not null default '',
  is_active boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects(id) on delete restrict,
  parent_id uuid references public.topics(id) on delete set null,
  slug text not null,
  name text not null,
  description text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  unique (subject_id, slug)
);

create table if not exists public.learning_objectives (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete restrict,
  code text,
  description text not null,
  cognitive_level text check (cognitive_level in ('remember', 'understand', 'apply', 'analyze', 'evaluate', 'create')),
  is_active boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_topics_subject_parent on public.topics(subject_id, parent_id);
create index if not exists idx_learning_objectives_topic on public.learning_objectives(topic_id);

-- ---------------------------------------------------------------------------
-- User targets and study planning
-- ---------------------------------------------------------------------------
create table if not exists public.user_exam_targets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_profile_id uuid not null references public.exam_profiles(id) on delete restrict,
  target_date date,
  priority smallint not null default 3 check (priority between 1 and 5),
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (id, user_id)
);

create index if not exists idx_user_exam_targets_user on public.user_exam_targets(user_id, priority desc);

create table if not exists public.study_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  target_id uuid,
  title text not null default 'Meu plano de estudos',
  status text not null default 'active' check (status in ('active', 'paused', 'completed', 'archived')),
  starts_on date not null default current_date,
  ends_on date,
  engine_version text not null default 'rules-v1',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (id, user_id),
  foreign key (target_id, user_id) references public.user_exam_targets(id, user_id) on delete restrict,
  check (ends_on is null or ends_on >= starts_on)
);

create index if not exists idx_study_plans_user_status on public.study_plans(user_id, status);

create table if not exists public.study_tasks (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  task_type text not null default 'practice' check (task_type in ('lesson', 'practice', 'review', 'mock_exam', 'essay', 'break', 'custom')),
  title text not null,
  subject_id uuid references public.subjects(id) on delete set null,
  topic_id uuid references public.topics(id) on delete set null,
  objective_id uuid references public.learning_objectives(id) on delete set null,
  planned_for timestamptz not null,
  duration_minutes integer not null default 25 check (duration_minutes between 5 and 360),
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'completed', 'skipped', 'rescheduled')),
  origin text not null default 'engine' check (origin in ('engine', 'manual')),
  recommendation_reason text not null default '',
  idempotency_key text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, idempotency_key),
  foreign key (plan_id, user_id) references public.study_plans(id, user_id) on delete cascade
);

create index if not exists idx_study_tasks_user_date on public.study_tasks(user_id, planned_for);
create index if not exists idx_study_tasks_plan_status on public.study_tasks(plan_id, status);

-- ---------------------------------------------------------------------------
-- Question bank: public item data, private answer keys
-- ---------------------------------------------------------------------------
create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  exam_profile_id uuid references public.exam_profiles(id) on delete set null,
  subject_id uuid not null references public.subjects(id) on delete restrict,
  topic_id uuid references public.topics(id) on delete set null,
  objective_id uuid references public.learning_objectives(id) on delete set null,
  prompt text not null,
  question_type text not null default 'single_choice' check (question_type in ('single_choice', 'multiple_select', 'numeric', 'short_text', 'essay')),
  difficulty smallint not null default 2 check (difficulty between 1 and 5),
  status text not null default 'draft' check (status in ('draft', 'review', 'published', 'archived')),
  provenance_type text not null check (provenance_type in ('original', 'public_domain', 'licensed', 'user_submitted', 'reference_only')),
  source_title text not null default '',
  source_url text not null default '',
  rights_basis text not null default '',
  source_verified_at timestamptz,
  version integer not null default 1 check (version > 0),
  created_by uuid references auth.users(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (status <> 'published' or provenance_type <> 'reference_only'),
  check (provenance_type not in ('public_domain', 'licensed') or rights_basis <> ''),
  check (status <> 'published' or provenance_type = 'original' or (source_verified_at is not null and rights_basis <> ''))
);

create table if not exists public.question_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  position smallint not null check (position between 1 and 12),
  content text not null,
  unique (question_id, position)
);

create table if not exists private.question_answer_keys (
  question_id uuid primary key references public.questions(id) on delete cascade,
  answer jsonb not null,
  explanation text not null default '',
  updated_at timestamptz not null default now()
);

revoke all on table private.question_answer_keys from public, anon, authenticated;
grant all on table private.question_answer_keys to service_role;

create index if not exists idx_questions_topic on public.questions(topic_id, status);
create index if not exists idx_questions_subject on public.questions(subject_id, status);
create index if not exists idx_questions_exam on public.questions(exam_profile_id, status);

-- ---------------------------------------------------------------------------
-- Assessments and student evidence
-- ---------------------------------------------------------------------------
create table if not exists public.assessment_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_profile_id uuid references public.exam_profiles(id) on delete set null,
  mode text not null check (mode in ('diagnostic', 'practice', 'full_mock', 'topic_drill')),
  status text not null default 'in_progress' check (status in ('in_progress', 'submitted', 'abandoned')),
  question_count integer not null default 0 check (question_count >= 0),
  score_raw numeric(8,2),
  score_percent numeric(5,2) check (score_percent is null or score_percent between 0 and 100),
  score_method text not null default 'raw_percent',
  score_metadata jsonb not null default '{}'::jsonb,
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  unique (id, user_id)
);

create table if not exists public.assessment_session_items (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete restrict,
  position integer not null check (position > 0),
  max_points numeric(8,2) not null default 1 check (max_points > 0),
  content_snapshot jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (session_id, position),
  unique (session_id, question_id),
  foreign key (session_id, user_id) references public.assessment_sessions(id, user_id) on delete cascade
);

create table if not exists public.assessment_responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete restrict,
  response jsonb not null,
  is_correct boolean,
  duration_seconds integer not null default 0 check (duration_seconds >= 0),
  answered_at timestamptz not null default now(),
  unique (session_id, question_id),
  foreign key (session_id, user_id) references public.assessment_sessions(id, user_id) on delete cascade
);

create index if not exists idx_assessment_sessions_user_date on public.assessment_sessions(user_id, started_at desc);
create index if not exists idx_assessment_responses_user on public.assessment_responses(user_id, answered_at desc);

create table if not exists public.student_skill_mastery (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  objective_id uuid not null references public.learning_objectives(id) on delete cascade,
  estimated_mastery numeric(5,4) not null default 0 check (estimated_mastery between 0 and 1),
  confidence numeric(5,4) not null default 0 check (confidence between 0 and 1),
  evidence_count integer not null default 0 check (evidence_count >= 0),
  engine_version text not null default 'rules-v1',
  updated_at timestamptz not null default now(),
  unique (user_id, objective_id)
);

create index if not exists idx_student_skill_mastery_user on public.student_skill_mastery(user_id, updated_at desc);

-- ---------------------------------------------------------------------------
-- Spaced review, gamification and AI usage accounting
-- ---------------------------------------------------------------------------
create table if not exists public.review_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid references public.questions(id) on delete cascade,
  objective_id uuid references public.learning_objectives(id) on delete cascade,
  due_at timestamptz not null,
  interval_days numeric(7,2) not null default 1 check (interval_days > 0),
  repetitions integer not null default 0 check (repetitions >= 0),
  last_grade smallint check (last_grade is null or last_grade between 0 and 5),
  last_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  check ((question_id is not null) <> (objective_id is not null))
);

create index if not exists idx_review_items_due on public.review_items(user_id, due_at);

create table if not exists public.xp_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  event_type text not null,
  amount integer not null check (amount > 0),
  source_id uuid,
  idempotency_key text not null,
  created_at timestamptz not null default now(),
  unique (user_id, idempotency_key)
);

create index if not exists idx_xp_events_user_date on public.xp_events(user_id, created_at desc);

create table if not exists public.ai_usage_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  feature text not null check (feature in ('tutor', 'explanation', 'essay_feedback', 'flashcard_generation', 'question_draft', 'plan_summary')),
  provider text not null,
  model text not null,
  input_tokens integer not null default 0 check (input_tokens >= 0),
  output_tokens integer not null default 0 check (output_tokens >= 0),
  estimated_cost numeric(12,6),
  created_at timestamptz not null default now()
);

create index if not exists idx_ai_usage_user_date on public.ai_usage_records(user_id, created_at desc);

create table if not exists public.consent_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  purpose text not null,
  policy_version text not null,
  decision text not null check (decision in ('accepted', 'rejected', 'withdrawn', 'acknowledged')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_consent_events_user_date on public.consent_events(user_id, created_at desc);

-- Keep modification timestamps consistent across server-side and dashboard writes.
do $$
declare
  target_table text;
begin
  foreach target_table in array array[
    'profiles', 'exam_profiles', 'topics', 'user_exam_targets',
    'study_plans', 'questions'
  ] loop
    execute format('drop trigger if exists set_updated_at on public.%I', target_table);
    execute format(
      'create trigger set_updated_at before update on public.%I for each row execute function public.touch_updated_at()',
      target_table
    );
  end loop;
end;
$$;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.exam_profiles enable row level security;
alter table public.subjects enable row level security;
alter table public.topics enable row level security;
alter table public.learning_objectives enable row level security;
alter table public.user_exam_targets enable row level security;
alter table public.study_plans enable row level security;
alter table public.study_tasks enable row level security;
alter table public.questions enable row level security;
alter table public.question_options enable row level security;
alter table private.question_answer_keys enable row level security;
alter table public.assessment_sessions enable row level security;
alter table public.assessment_session_items enable row level security;
alter table public.assessment_responses enable row level security;
alter table public.student_skill_mastery enable row level security;
alter table public.review_items enable row level security;
alter table public.xp_events enable row level security;
alter table public.ai_usage_records enable row level security;
alter table public.consent_events enable row level security;

-- Profile and roles
create policy "profiles_select_own" on public.profiles
for select to authenticated using (id = (select auth.uid()) or public.has_role('admin'));
create policy "profiles_insert_own" on public.profiles
for insert to authenticated with check (id = (select auth.uid()));
create policy "profiles_update_own" on public.profiles
for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "user_roles_select_own_or_admin" on public.user_roles
for select to authenticated using (user_id = (select auth.uid()) or public.has_role('admin'));
create policy "user_roles_admin_manage" on public.user_roles
for all to authenticated using (public.has_role('admin')) with check (public.has_role('admin'));

-- Published content can be read; editors/admins manage the catalog.
create policy "exam_profiles_read_active" on public.exam_profiles
for select to anon, authenticated using (is_active or public.is_content_staff());
create policy "exam_profiles_staff_manage" on public.exam_profiles
for all to authenticated using (public.is_content_staff()) with check (public.is_content_staff());

create policy "subjects_read_active" on public.subjects
for select to anon, authenticated using (is_active or public.is_content_staff());
create policy "subjects_staff_manage" on public.subjects
for all to authenticated using (public.is_content_staff()) with check (public.is_content_staff());

create policy "topics_read_active" on public.topics
for select to anon, authenticated using (is_active or public.is_content_staff());
create policy "topics_staff_manage" on public.topics
for all to authenticated using (public.is_content_staff()) with check (public.is_content_staff());

create policy "learning_objectives_read_active" on public.learning_objectives
for select to anon, authenticated using (is_active or public.is_content_staff());
create policy "learning_objectives_staff_manage" on public.learning_objectives
for all to authenticated using (public.is_content_staff()) with check (public.is_content_staff());

create policy "questions_read_published" on public.questions
for select to anon, authenticated using (status = 'published' or public.is_content_staff());
create policy "questions_staff_manage" on public.questions
for all to authenticated using (public.is_content_staff()) with check (public.is_content_staff());

create policy "question_options_read_published_parent" on public.question_options
for select to anon, authenticated using (
  exists (
    select 1 from public.questions q
    where q.id = question_id
      and (q.status = 'published' or public.is_content_staff())
  )
);
create policy "question_options_staff_manage" on public.question_options
for all to authenticated using (public.is_content_staff()) with check (public.is_content_staff());

-- Private answer keys are deliberately not granted to anon/authenticated.
create policy "answer_keys_service_role_only" on private.question_answer_keys
for all to service_role using (true) with check (true);

-- User-owned records
create policy "targets_owner_all" on public.user_exam_targets
for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "plans_owner_all" on public.study_plans
for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "tasks_owner_all" on public.study_tasks
for all to authenticated using (
  user_id = (select auth.uid()) and exists (
    select 1 from public.study_plans p where p.id = plan_id and p.user_id = (select auth.uid())
  )
) with check (
  user_id = (select auth.uid()) and exists (
    select 1 from public.study_plans p where p.id = plan_id and p.user_id = (select auth.uid())
  )
);

create policy "assessment_sessions_owner_read" on public.assessment_sessions
for select to authenticated using (user_id = (select auth.uid()));
-- Session creation, submission and score updates are performed by trusted server routes.

create policy "assessment_session_items_owner_read" on public.assessment_session_items
for select to authenticated using (user_id = (select auth.uid()));
-- Session item creation and snapshots are generated by trusted server routes.

create policy "assessment_responses_owner_read" on public.assessment_responses
for select to authenticated using (
  user_id = (select auth.uid()) and exists (
    select 1 from public.assessment_sessions s where s.id = session_id and s.user_id = (select auth.uid())
  )
);
-- No direct INSERT/UPDATE policy for assessment_responses: trusted server routes write them.

create policy "student_skill_mastery_owner_read" on public.student_skill_mastery
for select to authenticated using (user_id = (select auth.uid()));
-- Mastery estimates are recomputed by the deterministic server-side learning engine.

create policy "review_items_owner_all" on public.review_items
for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "xp_events_owner_read" on public.xp_events
for select to authenticated using (user_id = (select auth.uid()));
-- XP events are inserted by server-side trusted code only.

create policy "ai_usage_owner_read" on public.ai_usage_records
for select to authenticated using (user_id = (select auth.uid()));
-- Usage rows are inserted by the server-side AI gateway only.

create policy "consent_events_owner_read" on public.consent_events
for select to authenticated using (user_id = (select auth.uid()));
-- Consent events are append-only and inserted by trusted server-side flows.

-- ---------------------------------------------------------------------------
-- Grants. RLS remains the row-level boundary.
-- ---------------------------------------------------------------------------
grant select, insert, update on public.profiles to authenticated;
grant select, insert, update, delete on public.user_roles to authenticated;
grant select on public.exam_profiles, public.subjects, public.topics, public.learning_objectives to anon, authenticated;
grant select on public.questions, public.question_options to anon, authenticated;
grant insert, update, delete on public.exam_profiles, public.subjects, public.topics, public.learning_objectives, public.questions, public.question_options to authenticated;
grant select, insert, update, delete on public.user_exam_targets, public.study_plans, public.study_tasks to authenticated;
grant select on public.assessment_sessions to authenticated;
grant select on public.assessment_session_items, public.assessment_responses to authenticated;
grant select on public.student_skill_mastery to authenticated;
grant select, insert, update, delete on public.review_items to authenticated;
grant select on public.xp_events, public.ai_usage_records, public.consent_events to authenticated;

-- Server-side service role access for protected writes and grading.
grant all on all tables in schema public to service_role;
grant all on all tables in schema private to service_role;
