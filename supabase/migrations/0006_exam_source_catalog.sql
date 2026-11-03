-- Kognos v1.1: human-approved, versioned official syllabus evidence.
-- Apply AFTER 0005. Data lives in private service-role-only tables.
-- Never expose transcript, generated candidate, or editorial write access to ordinary users.
create table if not exists public.kognos_exam_sources (
  id uuid primary key default gen_random_uuid(),
  institution text not null check (institution in ('enem','etec','fuvest')),
  edition text not null check (char_length(edition) between 4 and 90),
  source_title text not null check (char_length(source_title) between 8 and 140),
  source_url text not null check (char_length(source_url) between 12 and 600),
  source_method text not null check (source_method in ('official_html','manual_transcript')),
  content_sha256 text not null check (content_sha256 ~ '^[0-9a-f]{64}$'),
  review_status text not null default 'pending' check (review_status in ('pending','approved','rejected')),
  imported_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  unique (institution, edition, source_url, content_sha256)
);
create index if not exists kognos_exam_sources_institution on public.kognos_exam_sources(institution, created_at desc);

create table if not exists public.kognos_exam_topics (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.kognos_exam_sources(id) on delete cascade,
  subject text not null check (char_length(subject) between 3 and 60),
  topic text not null check (char_length(topic) between 4 and 110),
  evidence_excerpt text not null check (char_length(evidence_excerpt) between 16 and 160),
  review_status text not null default 'pending' check (review_status in ('pending','approved','rejected')),
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (source_id,subject,topic)
);
create index if not exists kognos_exam_topics_source_status on public.kognos_exam_topics(source_id,review_status);

alter table public.kognos_ai_questions
  add column if not exists source_topic_id uuid references public.kognos_exam_topics(id) on delete set null;
create index if not exists kognos_ai_questions_source_topic on public.kognos_ai_questions(source_topic_id);

alter table public.kognos_exam_sources enable row level security;
alter table public.kognos_exam_topics enable row level security;
-- NO direct client policies; GET listings and editorial actions go through server-authenticated routes.
revoke all on public.kognos_exam_sources from anon, authenticated;
revoke all on public.kognos_exam_topics from anon, authenticated;
grant all on public.kognos_exam_sources to service_role;
grant all on public.kognos_exam_topics to service_role;