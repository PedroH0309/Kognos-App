-- Kognos v1.10 - safely refund failed provider requests without allowing unlimited retries.
-- Apply AFTER 0002. Existing quota records and consumed uses are preserved.
-- All mutations remain service_role-only; browser clients cannot change usage.
alter table public.ai_daily_quota
  add column if not exists total_attempts integer not null default 0
  check (total_attempts >= 0);

-- Backfill old records: each previously charged use counts as one attempted call.
update public.ai_daily_quota
  set total_attempts = greatest(total_attempts, used)
  where total_attempts < used;

-- Preserve the existing API signature used by both AI routes.
create or replace function public.reserve_ai_quota(p_user_id uuid, p_daily_limit integer)
returns boolean language plpgsql security definer set search_path = '' as $$
declare
  today_utc date := (now() at time zone 'UTC')::date;
  cap integer := least(greatest(coalesce(p_daily_limit,20),1),100);
  attempts_cap integer := least(least(greatest(coalesce(p_daily_limit,20),1),100)*2,200);
  new_count integer;
begin
  if p_user_id is null then return false; end if;
  insert into public.ai_daily_quota(user_id,quota_day,used,total_attempts)
  values (p_user_id,today_utc,1,1)
  on conflict(user_id,quota_day) do update
    set used=public.ai_daily_quota.used+1,
        total_attempts=public.ai_daily_quota.total_attempts+1,
        updated_at=now()
  where public.ai_daily_quota.used < cap
    and public.ai_daily_quota.total_attempts < attempts_cap
  returning used into new_count;
  return new_count is not null;
end;
$$;

-- Only the trusted server can refund a single reserved slot for provider failures.
-- A reservation crossing UTC midnight is refunded to the original UTC quota day.
create or replace function public.refund_ai_quota(p_user_id uuid, p_quota_day date)
returns boolean language plpgsql security definer set search_path = '' as $$
declare new_count integer;
begin
  if p_user_id is null or p_quota_day is null then return false; end if;
  update public.ai_daily_quota
    set used=used-1,updated_at=now()
    where user_id=p_user_id and quota_day=p_quota_day and used>0
    returning used into new_count;
  return found;
end;
$$;

revoke all on function public.reserve_ai_quota(uuid,integer) from public,anon,authenticated;
grant execute on function public.reserve_ai_quota(uuid,integer) to service_role;
revoke all on function public.refund_ai_quota(uuid,date) from public,anon,authenticated;
grant execute on function public.refund_ai_quota(uuid,date) to service_role;

-- Optional after applying this migration in Supabase SQL Editor:
-- notify pgrst, 'reload schema';
