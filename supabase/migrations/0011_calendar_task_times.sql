-- Kognos 0011 — calendar timeline support.
-- Optional start time for manually scheduled tasks. Tasks without an explicit
-- time remain unscheduled; the application must never fabricate time slots.
-- Run in the SAME Supabase project used by the Kognos web app.
-- This operation is idempotent and preserves all existing tasks and policies.
alter table public.kognos_demo_tasks
 add column if not exists start_time time without time zone;

comment on column public.kognos_demo_tasks.start_time is
 'Optional student-selected local wall-clock time (HH:mm); NULL means no assigned hour.';

-- Verify; 1 row is expected after migration:
select column_name, data_type, is_nullable
from information_schema.columns
where table_schema='public'
 and table_name='kognos_demo_tasks'
 and column_name='start_time';
