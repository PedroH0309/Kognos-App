-- KOGNOS v0.2 — onboarding uses profiles.preferences from 0001.
-- We do NOT persist optional self-declared diagnoses. Only study adaptations are saved.
-- An atomic per-user/day quota prevents an authenticated account from overusing the server-side key.
create table if not exists public.ai_daily_quota (
  user_id uuid not null references auth.users(id) on delete cascade,
  quota_day date not null,
  used integer not null default 0 check (used >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id,quota_day)
);

alter table public.ai_daily_quota enable row level security;
-- No anon/authenticated INSERT, UPDATE or DELETE policies: only service_role can reserve quotas.
create policy "ai_daily_quota_owner_read" on public.ai_daily_quota
for select to authenticated using (user_id=(select auth.uid()));
grant select on public.ai_daily_quota to authenticated;
grant all on public.ai_daily_quota to service_role;

create or replace function public.reserve_ai_quota(p_user_id uuid, p_daily_limit integer)
returns boolean language plpgsql security definer set search_path = '' as $$
declare
  today_utc date := (now() at time zone 'UTC')::date;
  cap integer := least(greatest(coalesce(p_daily_limit,20),1),100);
  new_count integer;
begin
  if p_user_id is null then return false; end if;
  insert into public.ai_daily_quota(user_id,quota_day,used)
  values (p_user_id,today_utc,1)
  on conflict(user_id,quota_day) do update
    set used=public.ai_daily_quota.used+1,updated_at=now()
  where public.ai_daily_quota.used < cap
  returning used into new_count;
  return new_count is not null;
end;
$$;
revoke all on function public.reserve_ai_quota(uuid,integer) from public, anon, authenticated;
grant execute on function public.reserve_ai_quota(uuid,integer) to service_role;
