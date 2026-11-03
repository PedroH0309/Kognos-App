# Sprint 17 — Login-first navigation and persistent student profiles

## User experience

1. **App first open, no saved Supabase Auth session**: show the sign-in/create account screen.
2. **New signup with email confirmation**: show a confirmation notice, then sign in after email verification.
3. **Authenticated student without completed study profile**: start five-step onboarding; save to `public.profiles.preferences` under their Supabase Auth UID.
4. **Existing student with saved study profile**: open the dashboard directly, even after a browser refresh or browser restart while the Supabase Auth session is valid.
5. **Editing study preferences**: launch the existing onboarding flow with saved values; no re-registration.
6. **Sign out**: clear in-memory student state and return to sign-in.
7. **Cloud configuration/profile query error**: display actionable troubleshooting/retry, do not silently start onboarding or grant guest access.

## Technical changes

- Continue using Supabase Auth `persistSession:true` and `autoRefreshToken:true` from the singleton web client.
- Bootstrap with `getSession()` and subscribe to `SIGNED_IN`, `SIGNED_OUT`, `PASSWORD_RECOVERY`. Ignore stale async responses using monotonic request IDs.
- `readStoredStudentProfile` determines whether saved preferences are complete or substantively populated by an older version. Empty or malformed rows cannot bypass onboarding.
- An older schema missing only the optional `avatar_path` column is read with a reduced projection, allowing established accounts to sign in. Restore the complete 0003 migration separately for avatar features.
- Guard the main app with an authenticated user and successfully loaded study profile. Failed profile queries are not treated as new users.
- Route the same responsive auth component as a standalone landing page, with optional modal usage for compatibility.

## Limitations and manual QA

- Existing Auth accounts that never saved onboarding preferences still need personalization once; signup alone is not a completed learning profile.
- A permanently expired or revoked session requires new login. Supabase project and Auth redirect URLs must be configured correctly.
- Test signup and email confirmation, sign in, reload, sign out, two user accounts, missing profile, missing `avatar_path`/migration setup, and account recovery with the real Supabase project.
- Do not expose service-role keys in browser/client code, and do not try to reconstruct passwords from local data.