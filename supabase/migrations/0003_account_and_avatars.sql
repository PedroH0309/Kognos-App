-- Kognos v0.3: profile account fields and private user-owned avatars.
-- Apply AFTER 0001 and 0002. Auth passwords live only in Supabase Auth.
alter table public.profiles
 add column if not exists username text,
 add column if not exists avatar_path text,
 add column if not exists biography text not null default '';

alter table public.profiles drop constraint if exists profiles_username_format;
alter table public.profiles add constraint profiles_username_format
 check (username is null or username ~ '^[a-z][a-z0-9_]{2,23}$');
alter table public.profiles drop constraint if exists profiles_biography_length;
alter table public.profiles add constraint profiles_biography_length
 check (char_length(biography) <= 240);

create unique index if not exists profiles_username_unique on public.profiles (username)
 where username is not null;

-- Not public: photos are delivered only via short-lived signed URLs to the owner.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('kognos-avatars','kognos-avatars',false,3145728,ARRAY['image/jpeg','image/png','image/webp'])
on conflict(id) do update set public=false,file_size_limit=3145728,
 allowed_mime_types=ARRAY['image/jpeg','image/png','image/webp'];

create policy "avatar_owner_read_v03" on storage.objects
 for select to authenticated
 using (bucket_id='kognos-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);

create policy "avatar_owner_insert_v03" on storage.objects
 for insert to authenticated
 with check (bucket_id='kognos-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);

create policy "avatar_owner_update_v03" on storage.objects
 for update to authenticated
 using (bucket_id='kognos-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text)
 with check (bucket_id='kognos-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);

create policy "avatar_owner_delete_v03" on storage.objects
 for delete to authenticated
 using (bucket_id='kognos-avatars' and (storage.foldername(name))[1]=(select auth.uid())::text);

-- policies already defined for public.profiles in migration 0001. Do NOT grant public reads.
