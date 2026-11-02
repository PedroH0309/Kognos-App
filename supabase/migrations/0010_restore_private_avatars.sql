-- Kognos 0010: repair private profile-photo storage for installations
-- that skipped migration 0003. Can be executed more than once.
-- Run in the Supabase SQL Editor for the SAME project used by the app.
-- Never make student profile photos public.
alter table public.profiles
  add column if not exists avatar_path text;

insert into storage.buckets (
  id, name, public, file_size_limit, allowed_mime_types
) values (
  'kognos-avatars','kognos-avatars',false,3145728,
  array['image/jpeg','image/png','image/webp']::text[]
)
on conflict (id) do update
  set public=false,
      file_size_limit=3145728,
      allowed_mime_types=array['image/jpeg','image/png','image/webp']::text[];

-- The original v03 policies are kept when they already exist. On older
-- installations with no avatar policies, install owner-only access rules.
do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname='storage'
      and tablename='objects' and policyname='avatar_owner_read_v03'
  ) then
    create policy "avatar_owner_read_v03" on storage.objects
      for select to authenticated
      using (
        bucket_id='kognos-avatars'
        and (storage.foldername(name))[1]=(select auth.uid())::text
      );
  end if;
  if not exists (
    select 1 from pg_policies where schemaname='storage'
      and tablename='objects' and policyname='avatar_owner_insert_v03'
  ) then
    create policy "avatar_owner_insert_v03" on storage.objects
      for insert to authenticated
      with check (
        bucket_id='kognos-avatars'
        and (storage.foldername(name))[1]=(select auth.uid())::text
      );
  end if;
  if not exists (
    select 1 from pg_policies where schemaname='storage'
      and tablename='objects' and policyname='avatar_owner_update_v03'
  ) then
    create policy "avatar_owner_update_v03" on storage.objects
      for update to authenticated
      using (
        bucket_id='kognos-avatars'
        and (storage.foldername(name))[1]=(select auth.uid())::text
      )
      with check (
        bucket_id='kognos-avatars'
        and (storage.foldername(name))[1]=(select auth.uid())::text
      );
  end if;
  if not exists (
    select 1 from pg_policies where schemaname='storage'
      and tablename='objects' and policyname='avatar_owner_delete_v03'
  ) then
    create policy "avatar_owner_delete_v03" on storage.objects
      for delete to authenticated
      using (
        bucket_id='kognos-avatars'
        and (storage.foldername(name))[1]=(select auth.uid())::text
      );
  end if;
end $$;

-- This query should return one row with public=false and 3145728 bytes.
select id, public, file_size_limit, allowed_mime_types
from storage.buckets where id='kognos-avatars';
