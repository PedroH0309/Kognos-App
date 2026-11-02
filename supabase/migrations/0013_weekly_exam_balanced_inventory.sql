-- 0013: safer weekly distribution and reliable inventory for authenticated students.
-- Apply AFTER 0012. This does not reset any previous exam or reservation.
-- Functions are callable only with the server-side service role.
create or replace function public.kognos_weekly_exam_inventory(
 p_user_id uuid, p_institution text
) returns jsonb
language sql stable security definer set search_path=''
as $$
 with eligible as (
  select q.subject from public.kognos_ai_questions q
  where q.user_id=p_user_id and q.institution=p_institution
   and q.review_status in ('auto_reviewed','editor_approved')
   and q.completed_at is null
   and not exists (
    select 1 from public.kognos_weekly_exam_items used
    where used.user_id=p_user_id and used.question_id=q.id
   )
 ), grouped as (
  select subject, count(*)::integer as available
  from eligible group by subject
 )
 select pg_catalog.jsonb_build_object(
  'available',coalesce(sum(available),0)::integer,
  'subjects',coalesce(pg_catalog.jsonb_agg(
    pg_catalog.jsonb_build_object('subject',subject,'available',available)
    order by subject
  ),'[]'::jsonb)
 ) from grouped;
$$;
revoke all on function public.kognos_weekly_exam_inventory(uuid,text) from public,anon,authenticated;
grant execute on function public.kognos_weekly_exam_inventory(uuid,text) to service_role;

-- A round-robin by subject spreads selection across all available subjects.
-- This still respects availability (it does not invent a topic or force a quota
-- for a subject with no unused approved questions).
create or replace function public.reserve_kognos_weekly_exam(
 p_user_id uuid,p_institution text,p_week_start date,p_count integer
) returns uuid
language plpgsql security definer set search_path=''
as $$
declare
 v_exam uuid;
 v_count integer;
 v_inserted integer;
begin
 if p_user_id is null or p_institution not in ('enem','etec','fuvest','saresp','vunesp')
    or p_week_start is null or p_count is null or p_count not between 20 and 90 then
  raise exception 'INVALID_WEEKLY_EXAM';
 end if;
 -- Shared with earlier revisions of the function: serialize same-user sessions.
 perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_user_id::text,0));
 select e.id into v_exam from public.kognos_weekly_exams e
 where e.user_id=p_user_id and e.institution=p_institution and e.week_start=p_week_start;
 if v_exam is not null then return v_exam; end if;

 select count(*) into v_count from (
  select q.id from public.kognos_ai_questions q
  where q.user_id=p_user_id and q.institution=p_institution
   and q.review_status in ('auto_reviewed','editor_approved')
   and q.completed_at is null
   and not exists (
    select 1 from public.kognos_weekly_exam_items i
    where i.user_id=p_user_id and i.question_id=q.id
   )
  limit p_count
 ) eligible;
 if v_count<p_count then raise exception 'INSUFFICIENT_APPROVED_QUESTIONS'; end if;

 insert into public.kognos_weekly_exams(user_id,institution,week_start,question_count)
 values(p_user_id,p_institution,p_week_start,p_count)
 returning id into v_exam;

 with eligible as (
  select q.id,q.subject,q.topic,
   pg_catalog.row_number() over(partition by q.subject order by pg_catalog.random()) as subject_rank,
   pg_catalog.row_number() over(partition by q.subject,q.topic order by pg_catalog.random()) as topic_rank
  from public.kognos_ai_questions q
  where q.user_id=p_user_id and q.institution=p_institution
   and q.review_status in ('auto_reviewed','editor_approved')
   and q.completed_at is null
   and not exists (
    select 1 from public.kognos_weekly_exam_items i
    where i.user_id=p_user_id and i.question_id=q.id
   )
 ), chosen as (
  select id from eligible
  order by subject_rank,topic_rank,pg_catalog.random()
  limit p_count
 )
 insert into public.kognos_weekly_exam_items(exam_id,user_id,question_id,position)
 select v_exam,p_user_id,id,
  pg_catalog.row_number() over(order by pg_catalog.random())::integer
 from chosen;

 get diagnostics v_inserted = row_count;
 if v_inserted<>p_count then raise exception 'INSUFFICIENT_APPROVED_QUESTIONS'; end if;
 return v_exam;
end;
$$;
revoke all on function public.reserve_kognos_weekly_exam(uuid,text,date,integer)
 from public,anon,authenticated;
grant execute on function public.reserve_kognos_weekly_exam(uuid,text,date,integer)
 to service_role;
-- A bounded longitudinal summary, derived from server-graded attempts only.
create or replace function public.kognos_weekly_exam_history(
 p_user_id uuid,p_institution text
) returns jsonb
language sql stable security definer set search_path=''
as $sql$
 with recent as (
  select e.id,e.week_start,e.question_count
  from public.kognos_weekly_exams e
  where e.user_id=p_user_id and e.institution=p_institution
  order by e.week_start desc limit 12
 ), scored as (
  select e.week_start,e.question_count,
   count(a.question_id)::integer as answered,
   count(a.question_id) filter (where a.correct)::integer as correct
  from recent e
  left join public.kognos_weekly_exam_items i on i.exam_id=e.id and i.user_id=p_user_id
  left join lateral (
   select attempt.question_id,attempt.correct
   from public.kognos_ai_attempts attempt
   where attempt.question_id=i.question_id and attempt.user_id=p_user_id
   order by attempt.created_at desc limit 1
  ) a on true
  group by e.id,e.week_start,e.question_count
 )
 select coalesce(pg_catalog.jsonb_agg(pg_catalog.jsonb_build_object(
  'weekStart',week_start,'total',question_count,'answered',answered,'correct',correct
 ) order by week_start desc),'[]'::jsonb) from scored;
$sql$;
revoke all on function public.kognos_weekly_exam_history(uuid,text) from public,anon,authenticated;
grant execute on function public.kognos_weekly_exam_history(uuid,text) to service_role;

-- Verified topic-level performance from actual reserved exam questions only.
-- No question content, answer index, user ID, or raw attempt leaves this function.
create or replace function public.kognos_weekly_exam_weak_topics(
 p_user_id uuid,p_institution text
) returns jsonb
language sql stable security definer set search_path=''
as $sql$
 with attempts as (
  select q.subject,q.topic,a.correct,a.created_at,
   pg_catalog.row_number() over (
    partition by q.subject,q.topic order by a.created_at desc
   ) as recency
  from public.kognos_weekly_exam_items item
  join public.kognos_ai_questions q on q.id=item.question_id
   and q.user_id=p_user_id and q.institution=p_institution
  join public.kognos_ai_attempts a on a.question_id=item.question_id
   and a.user_id=p_user_id
  where item.user_id=p_user_id
 ), grouped as (
  select subject,topic,
   count(*)::integer as attempts,
   count(*) filter (where not correct)::integer as incorrect,
   pg_catalog.bool_or(recency=1 and not correct) as last_wrong
  from attempts group by subject,topic
 ), selected as (
  select * from grouped where incorrect>0
  order by last_wrong desc, incorrect desc, subject,topic limit 60
 )
 select coalesce(pg_catalog.jsonb_agg(pg_catalog.jsonb_build_object(
  'subject',subject,'topic',topic,'attempts',attempts,
  'incorrect',incorrect,'lastWrong',last_wrong
 ) order by last_wrong desc,incorrect desc,subject,topic),'[]'::jsonb)
 from selected;
$sql$;
revoke all on function public.kognos_weekly_exam_weak_topics(uuid,text) from public,anon,authenticated;
grant execute on function public.kognos_weekly_exam_weak_topics(uuid,text) to service_role;

notify pgrst, 'reload schema';
