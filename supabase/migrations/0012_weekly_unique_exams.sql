-- Kognos weekly exams: private, server-only and transactionally reserved unique questions.
-- Apply after 0009. No policies are granted for reading private answer/session state.
create table if not exists public.kognos_weekly_exams(
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 institution text not null check(institution in ('enem','etec','fuvest','saresp','vunesp')),
 week_start date not null,
 question_count integer not null check(question_count between 20 and 90),
 created_at timestamptz not null default now(),
 unique(user_id,institution,week_start)
);
create table if not exists public.kognos_weekly_exam_items(
 exam_id uuid not null references public.kognos_weekly_exams(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 question_id uuid not null references public.kognos_ai_questions(id),
 position integer not null check(position between 1 and 90),
 primary key(exam_id,question_id),
 unique(user_id,question_id),
 unique(exam_id,position)
);
create index if not exists weekly_exams_owner_idx
 on public.kognos_weekly_exams(user_id,week_start desc);
create index if not exists weekly_exam_items_owner_idx
 on public.kognos_weekly_exam_items(user_id,question_id);
alter table public.kognos_weekly_exams enable row level security;
alter table public.kognos_weekly_exam_items enable row level security;
revoke all on public.kognos_weekly_exams from anon,authenticated;
revoke all on public.kognos_weekly_exam_items from anon,authenticated;

-- The entire reservation runs in one SQL transaction: no overlapping ID can
-- leak into a second exam, even with simultaneous requests.
create or replace function public.reserve_kognos_weekly_exam(
 p_user_id uuid,p_institution text,p_week_start date,p_count integer
) returns uuid
language plpgsql security definer set search_path=''
as $$
declare
 v_exam uuid;
 v_count integer;
begin
 if p_user_id is null or p_institution not in ('enem','etec','fuvest','saresp','vunesp')
    or p_week_start is null or p_count not between 20 and 90 then
  raise exception 'INVALID_WEEKLY_EXAM';
 end if;
 perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_user_id::text,0));
 select id into v_exam from public.kognos_weekly_exams
 where user_id=p_user_id and institution=p_institution and week_start=p_week_start;
 if v_exam is not null then return v_exam; end if;

 select count(*) into v_count from (
  select q.id from public.kognos_ai_questions q
  where q.user_id=p_user_id and q.institution=p_institution
   and q.review_status='auto_reviewed' and q.completed_at is null
   and not exists(select 1 from public.kognos_weekly_exam_items i where i.user_id=p_user_id and i.question_id=q.id)
  limit p_count
 ) available;
 if v_count<p_count then raise exception 'INSUFFICIENT_APPROVED_QUESTIONS'; end if;

 insert into public.kognos_weekly_exams(user_id,institution,week_start,question_count)
 values(p_user_id,p_institution,p_week_start,p_count) returning id into v_exam;
 insert into public.kognos_weekly_exam_items(exam_id,user_id,question_id,position)
 select v_exam,p_user_id,selected.id,
  pg_catalog.row_number() over(order by pg_catalog.random())::integer from (
  select q.id
  from public.kognos_ai_questions q
  where q.user_id=p_user_id and q.institution=p_institution
   and q.review_status='auto_reviewed' and q.completed_at is null
   and not exists(select 1 from public.kognos_weekly_exam_items i where i.user_id=p_user_id and i.question_id=q.id)
  order by pg_catalog.random()
  limit p_count
 ) selected;
 -- NOTE: only genuinely approved, eligible questions can ever be reserved.
 return v_exam;
end;$$;
revoke all on function public.reserve_kognos_weekly_exam(uuid,text,date,integer) from public,anon,authenticated;
grant execute on function public.reserve_kognos_weekly_exam(uuid,text,date,integer) to service_role;
