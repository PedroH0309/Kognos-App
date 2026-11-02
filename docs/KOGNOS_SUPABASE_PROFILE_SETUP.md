# Restore Supabase profiles and onboarding

The error `Could not find the table 'public.profiles' in the schema cache` is **not** a CSS or login error. It means PostgREST cannot resolve the `public.profiles` table in the Supabase project configured in `apps/web/.env.local`.

1. Check the project URL shown in Supabase against `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_URL` in the local **private** environment file. Do not publish private keys.
2. Run `supabase/diagnostics/check_core_setup.sql` in **Supabase → SQL Editor**. It is read-only.
3. If this is a **fresh** project with no initial schema, execute the numbered migration files in order, starting with **`0001_core_schema.sql`**. Migration `0003_account_and_avatars.sql` supplies the additional onboarding profile columns; `0002` must run before it. To use the AI bank and learning links, run through `0007` in order.
4. If some migrations were applied and the project is **partially migrated**, inspect which objects and policies exist before replaying `0001`. Some original migrations create RLS policies without `IF NOT EXISTS`, so blindly rerunning them may fail; reconcile the already-existing objects first rather than dropping tables or wiping users.
5. If `public.profiles` exists but PostgREST reports an old schema cache, run `notify pgrst, 'reload schema';` in the SQL Editor and try again.
6. Ensure your authenticated user is connected, restart `npm run dev` after any `.env.local` changes, and retry the onboarding save. If the problem persists, inspect **Network** or Supabase logs for the exact database error code.

The app does not create missing database tables itself and will not pretend a profile was saved if the write fails. The private `.env.local` must never be committed to the public repository.