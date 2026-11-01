# Sprint 04 — Supabase Cloud Sync + API JWT verification

Status: code complete, external credentials and deployed database remain **unverified**.

## Project environment

The public Supabase project URL and publishable key were supplied for this project and added to `apps/web/.env.example`.
Both may be exposed to browser code when RLS is enabled. `SUPABASE_SECRET_KEY` was only shown as a **masked** value and has **NOT** been stored anywhere. Add it directly to the ignored `apps/web/.env.local` on your machine.

## Server SDK choice

- `@supabase/supabase-js`: browser auth with localStorage sessions (existing frontend, unchanged).
- `@supabase/server`: protects Next.js `/api/tutor` route, which receives a **Bearer JWT** on Authorization, and validates it against Supabase JWKS. The client includes the public `apikey` header.
- `@supabase/ssr`: can replace localStorage sessions with cookie-based SSR in a later migration. It is not necessary for this stateless API design.

The protected tutor only runs when `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `SUPABASE_JWKS_URL`, and `NVIDIA_API_KEY` are all set. Rate-limiting is performed with the existing `reserve_ai_quota` RPC; it uses `ctx.supabaseAdmin` in the handler and cannot be directly invoked by normal users. `ctx.supabase` reads personal preferences with Row Level Security.

## Cloud sync

Apply `0004_demo_cloud_sync.sql` AFTER migrations 0001–0003. The new `kognos_demo_tasks` and `kognos_demo_attempts` tables are both scoped by `auth.uid()` with RLS. Connected accounts now load and save their pilot task/attempt records in Supabase. Guests continue using localStorage only. Existing **guest records are not automatically uploaded**: this prevents confusing data and cross-account merging.

The demonstrated questions are embedded in the client and graded there. This is NOT exam security; no one should use the demo results as official grades. A real question bank / scoring service needs server-only answer keys and trusted assessment session writes as anticipated by migration 0001.

The initial cloud view is limited to 500 tasks and 2,000 attempts per user; pagination and retention policies are a later production requirement. Concurrent editing on multiple devices is not yet conflict-resolved; last successful cloud save wins for task completion. More advanced collaborative or offline editing requires revision control/outbox sync.

## Run

From the repo root:

```sh
npm install
npm test
npm run dev
```

The frontend is at `http://localhost:3000`.

Before trying sign-up, configure Supabase Auth Email provider, correct Site URL and Redirect URLs, and run migrations `0001` through `0004` sequentially in SQL Editor. The seed is optional. A project with no migrations applied will not have the required `profiles`, `reserve_ai_quota`, `kognos_demo_tasks`, `kognos_demo_attempts` tables.

To use Kog, copy a new NVIDIA API key to local server environment. Never embed any private key in React source, screenshots, Git commits, or a distributed ZIP.

## Validation / limitations

- Unit tests for adapter mapping (task/attempt row data) added; core tests retained.
- JavaScript syntax checked via Node tests; TypeScript compilation and `next build` require dependencies installed.
- No real connection/login/registration, JWKS fetch, admin quota, NVIDIA completion or SQL migration was executed in this environment because npm registry access failed and the secret key is unavailable. Do not treat the implementation as production-validated.
- Before public launch: abuse prevention, email delivery, password recovery flow, logging & privacy review, minors' data treatment, integration tests for RLS with two test users, and full build checks.
