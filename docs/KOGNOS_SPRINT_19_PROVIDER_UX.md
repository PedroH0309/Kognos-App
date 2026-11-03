# Sprint 19 — Provider integration readiness and study interface

## Problem and diagnosis

The public `/api/ai-status` endpoint returned false for `nvidiaKeyConfigured`, `supabaseServerConfigured`, `tutorConfigured`, and `questionGenerationConfigured`. Frontend Supabase authentication may still work with `NEXT_PUBLIC_*` browser variables, while server-only AI endpoints need four distinct `SUPABASE_*` variables and `NVIDIA_API_KEY`.

The missing backend connection used to display multiple full-width warning banners and empty counters (including zero saved questions), which incorrectly suggested there was no user data.

## Changes

1. A shared readiness hook checks `/api/ai-status` without caching and validates boolean values. The check reports whether env values are **present**, not whether credentials are valid or a model is online.
2. A compact setup notice names missing server environment variables and provides a deliberate retry; it never requests, reads, sends, logs or exposes the values of secrets.
3. An AI generator is disabled when prerequisites are missing. An existing private question bank remains accessible if the NVIDIA key alone is absent.
4. Missing Supabase server configuration shows an **unavailable** bank count, not zero. The UI does not claim records have been removed.
5. Learning Paths and My Subjects show a low-emphasis progress sync warning and continue using genuine demonstration attempts until AI metrics are available.
6. AI generator filters fill the available grid; editorial reference text is expandable; the selected-trail overview uses balanced spacing at responsive widths.

## Required local configuration

Use `apps/web/.env.example` as the model for `apps/web/.env.local`. Server variables:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`
- `SUPABASE_JWKS_URL`
- `NVIDIA_API_KEY`

The existing `NEXT_PUBLIC_SUPABASE_*` variables remain for Supabase browser authentication; they do not replace the server variables. Never commit private credentials. Restart the Next.js process after changes. A positive presence check does not prove a real NVIDIA API request will succeed.

## Safety and validation

The server retains ownership checks and original grading protections. The new UI presents only configuration booleans and public variable **names**. No migrations or secret values are involved. Tests cover classification of missing integrations, non-fabricated progress and UI wiring. GitHub CI validates typechecking, design tests and production build before merging.