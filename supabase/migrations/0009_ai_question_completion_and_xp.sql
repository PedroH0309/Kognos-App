-- Kognos 0009: one-time completion of generated AI questions.
-- Apply after 0005, 0007 and 0008; preserves all existing questions and attempts.
-- No public answer keys and no direct client-side grading.

alter table public.kognos_ai_questions
  add column if not exists completed_at timestamptz;

-- Preserve previous work: any question answered before 0009 is completed.
-- Existing historical attempts are retained (including any repeated attempts).
update public.kognos_ai_questions q
   set completed_at = old.first_attempt
  from (
    select question_id, min(created_at) as first_attempt
      from public.kognos_ai_attempts
     group by question_id
  ) old
 where q.id = old.question_id
   and q.completed_at is null;

create index if not exists kognos_ai_pending_user_created
  on public.kognos_ai_questions (user_id, created_at desc)
  where completed_at is null and review_status <> 'withdrawn';

-- An authenticated server route invokes this function with the trusted
-- owner ID (never accepted from the browser).
-- SELECT FOR UPDATE serializes concurrent submissions of the same question.
-- An insert failure rolls back the whole transaction, including completion.
create or replace function public.submit_kognos_ai_answer_once(
  p_user_id uuid,
  p_question_id uuid,
  p_answer_index integer,
  p_mode text
) returns jsonb
language plpgsql security definer
set search_path = ''
as $$
declare
  v_correct_index integer;
  v_explanation text;
  v_completed timestamptz;
  v_correct boolean;
begin
  if p_user_id is null or p_question_id is null
     or p_answer_index is null or p_answer_index not between 0 and 4
     or p_mode is null or p_mode not in ('practice','mock') then
    return jsonb_build_object('status','invalid');
  end if;

  select q.correct_index,q.explanation,q.completed_at
    into v_correct_index,v_explanation,v_completed
    from public.kognos_ai_questions q
   where q.id=p_question_id
     and q.user_id=p_user_id
     and q.review_status <> 'withdrawn'
   for update;

  if not found then
    return jsonb_build_object('status','not_found');
  end if;

  -- Also handles historical completions that predate the migration.
  if v_completed is not null or exists(
    select 1 from public.kognos_ai_attempts a
     where a.question_id=p_question_id and a.user_id=p_user_id
  ) then
    update public.kognos_ai_questions
       set completed_at=coalesce(completed_at,now())
     where id=p_question_id and user_id=p_user_id and completed_at is null;
    return jsonb_build_object('status','already_answered');
  end if;

  v_correct := v_correct_index=p_answer_index;

  insert into public.kognos_ai_attempts
    (user_id,question_id,answer_index,correct,mode)
  values (p_user_id,p_question_id,p_answer_index,v_correct,p_mode);

  update public.kognos_ai_questions
     set completed_at=now()
   where id=p_question_id and user_id=p_user_id;

  return jsonb_build_object(
    'status','recorded',
    'correct',v_correct,
    'correctIndex',v_correct_index,
    'explanation',v_explanation,
    'xpEarned',case when v_correct then 10 else 2 end
  );
end;
$$;

-- Only a trusted service-role server can call the grading RPC.
revoke all on function public.submit_kognos_ai_answer_once(uuid,uuid,integer,text)
  from public,anon,authenticated;
grant execute on function public.submit_kognos_ai_answer_once(uuid,uuid,integer,text)
  to service_role;

-- PostgREST sometimes needs this after new columns and functions.
notify pgrst, 'reload schema';
