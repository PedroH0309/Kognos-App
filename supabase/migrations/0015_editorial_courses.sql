-- Editorial CMS. Bootstrap admins only through the SQL Editor/service_role.
-- No account can self-promote, including through user_metadata.
create table if not exists public.kognos_content_admins (
 user_id uuid primary key references auth.users(id) on delete cascade,
 created_at timestamptz not null default now()
);
create table if not exists public.kognos_content_documents (
 id text primary key check(id ~ '^[a-z][a-z0-9-]{2,90}$'),
 kind text not null check(kind in ('lesson','question')),
 draft jsonb not null,
 published jsonb,
 revision integer not null default 1 check(revision > 0),
 published_revision integer,
 archived boolean not null default false,
 updated_by uuid references auth.users(id) on delete set null,
 updated_at timestamptz not null default now(),
 check(draft->>'id'=id and draft->>'kind'=kind),
 check(published is null or (published->>'id'=id and published->>'kind'=kind))
);
create table if not exists public.kognos_content_history (
 event_id bigint generated always as identity primary key,
 document_id text not null references public.kognos_content_documents(id),
 revision integer not null,
 snapshot jsonb not null,
 actor_id uuid references auth.users(id) on delete set null,
 created_at timestamptz not null default now(),
 unique(document_id,revision)
);
create table if not exists public.kognos_content_attempts (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 question_id text not null references public.kognos_content_documents(id),
 question_revision integer not null,
 answer_index integer not null,
 correct boolean not null,
 created_at timestamptz not null default now()
);
create index if not exists content_attempts_user_date on public.kognos_content_attempts(user_id,created_at desc);
create table if not exists public.kognos_course_generation_locks (
 course_id text primary key,
 actor_id uuid not null references auth.users(id) on delete cascade,
 token uuid not null,
 expires_at timestamptz not null
);
alter table public.kognos_content_admins enable row level security;
alter table public.kognos_content_documents enable row level security;
alter table public.kognos_content_history enable row level security;
alter table public.kognos_content_attempts enable row level security;
alter table public.kognos_course_generation_locks enable row level security;
-- Answer keys, drafts and history never have anonymous or student SELECT policies.
revoke all on public.kognos_content_admins,public.kognos_content_documents,public.kognos_content_history,public.kognos_content_attempts,public.kognos_course_generation_locks from anon,authenticated;
grant select on public.kognos_content_admins,public.kognos_content_attempts to authenticated;
grant all on public.kognos_content_admins,public.kognos_content_documents,public.kognos_content_history,public.kognos_content_attempts,public.kognos_course_generation_locks to service_role;
grant usage,select on sequence public.kognos_content_history_event_id_seq to service_role;
drop policy if exists content_admin_self on public.kognos_content_admins;
create policy content_admin_self on public.kognos_content_admins for select to authenticated using(user_id=(select auth.uid()));
drop policy if exists content_attempt_self on public.kognos_content_attempts;
create policy content_attempt_self on public.kognos_content_attempts for select to authenticated using(user_id=(select auth.uid()));

create or replace function public.kognos_audit_content() returns trigger language plpgsql security definer set search_path=public,pg_temp as $$
begin
 insert into public.kognos_content_history(document_id,revision,snapshot,actor_id)
 values(new.id,new.revision,to_jsonb(new),new.updated_by);
 return new;
end;$$;
drop trigger if exists kognos_content_audit on public.kognos_content_documents;
create trigger kognos_content_audit after insert or update on public.kognos_content_documents for each row execute function public.kognos_audit_content();

-- One transaction checks permissions, rejects stale browser edits and records history.
create or replace function public.kognos_save_content(p_actor uuid,p_id text,p_expected integer,p_action text,p_document jsonb default null)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare row public.kognos_content_documents; exists_row boolean;
begin
 if not exists(select 1 from public.kognos_content_admins where user_id=p_actor) then raise exception 'FORBIDDEN'; end if;
 if p_action not in ('save','publish','unpublish','archive','restore') then raise exception 'INVALID_ACTION'; end if;
 perform pg_advisory_xact_lock(hashtext(p_id));
 select * into row from public.kognos_content_documents where id=p_id for update;
 exists_row:=found;
 if coalesce(row.revision,0)<>p_expected then raise exception 'REVISION_CONFLICT'; end if;
 if not exists_row and p_action<>'save' then raise exception 'NOT_FOUND'; end if;
 if p_action='save' then
  if p_document is null or p_document->>'id' is distinct from p_id or p_document->>'kind' not in ('lesson','question') then raise exception 'INVALID_DOCUMENT'; end if;
  if exists_row and row.kind<>p_document->>'kind' then raise exception 'KIND_CONFLICT'; end if;
  insert into public.kognos_content_documents(id,kind,draft,updated_by)
  values(p_id,p_document->>'kind',p_document,p_actor)
  on conflict(id) do update set draft=excluded.draft,revision=kognos_content_documents.revision+1,updated_by=p_actor,updated_at=now();
 else
  update public.kognos_content_documents set
   published=case when p_action='publish' then draft when p_action='unpublish' then null else published end,
   published_revision=case when p_action='publish' then revision+1 when p_action='unpublish' then null else published_revision end,
   archived=case when p_action='archive' then true when p_action in ('restore','publish') then false else archived end,
   revision=revision+1,updated_by=p_actor,updated_at=now() where id=p_id;
 end if;
 select * into row from public.kognos_content_documents where id=p_id;
 return to_jsonb(row);
end;$$;
revoke all on function public.kognos_save_content(uuid,text,integer,text,jsonb) from public,anon,authenticated;
grant execute on function public.kognos_save_content(uuid,text,integer,text,jsonb) to service_role;

create or replace function public.kognos_claim_course(p_actor uuid,p_id text,p_token uuid)
returns boolean language plpgsql security definer set search_path=public,pg_temp as $$
declare affected integer;
begin
 insert into public.kognos_course_generation_locks(course_id,actor_id,token,expires_at)
 values(p_id,p_actor,p_token,now()+interval '5 minutes')
 on conflict(course_id) do update set actor_id=p_actor,token=p_token,expires_at=now()+interval '5 minutes'
 where kognos_course_generation_locks.expires_at<now();
 get diagnostics affected=row_count;return affected=1;
end;$$;
revoke all on function public.kognos_claim_course(uuid,text,uuid) from public,anon,authenticated;
grant execute on function public.kognos_claim_course(uuid,text,uuid) to service_role;

-- Auto-reviewed generation can only INSERT. It can never overwrite an editor's
-- draft, published version, withdrawal or archive. No client can call this RPC.
create or replace function public.kognos_finish_course(p_actor uuid,p_id text,p_token uuid,p_document jsonb)
returns boolean language plpgsql security definer set search_path=public,pg_temp as $$
declare affected integer;
begin
 if not exists(select 1 from public.kognos_course_generation_locks where course_id=p_id and actor_id=p_actor and token=p_token and expires_at>now()) then return false; end if;
 if p_document->>'id' is distinct from p_id or p_document->>'kind' is distinct from 'lesson' or p_document->>'review' is distinct from 'ai_reviewed' then raise exception 'INVALID_DOCUMENT'; end if;
 insert into public.kognos_content_documents(id,kind,draft,published,published_revision,updated_by)
 values(p_id,'lesson',p_document,p_document,1,p_actor) on conflict(id) do nothing;
 get diagnostics affected=row_count;
 delete from public.kognos_course_generation_locks where course_id=p_id and token=p_token;
 return affected=1;
end;$$;
revoke all on function public.kognos_finish_course(uuid,text,uuid,jsonb) from public,anon,authenticated;
grant execute on function public.kognos_finish_course(uuid,text,uuid,jsonb) to service_role;
