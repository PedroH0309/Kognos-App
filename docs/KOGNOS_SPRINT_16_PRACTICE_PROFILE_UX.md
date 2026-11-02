# Sprint 16 — Onboarding recovery and growing AI question bank

## Bug reports addressed

- Supabase onboarding fails with PostgREST `PGRST205` when `public.profiles` is missing. Provide an accurate first migration and installation diagnostic rather than silently claiming to have saved.
- The selection icons in the onboarding learning-style and accessibility chips were visually offset. Use the same Lucide Check/Plus icons and centered, fixed-size flex boxes in the last-loaded onboarding stylesheet.
- Demonstration practice results show cumulative metrics in an oversized panel, even after a single original sample item. Use compact per-session grading and clearly distinguish a fixed 20-item demo from the private generated bank.
- Generated AI questions were only fetched from the last 100 records and only 20 were displayed; no pagination surfaced the remaining bank. Replace with owner-scoped server pagination, total count, and load more.

## Data and security

- There are no new SQL migrations. `0001_core_schema.sql` includes the profile table, trigger, owner-scoped RLS policies, and permissions; `0003_account_and_avatars.sql` adds account fields. The read-only diagnostic checks prerequisite tables without changing them.
- `GET /api/ai-questions` applies institution, topic and difficulty filters **before** range pagination, and always scopes the query to authenticated `user_id`. Its JSON projection excludes `correct_index` and `explanation`.
- Up to 10 questions are generated as two consecutive existing server-authorized requests (max 5 each). A partial failure preserves successful earlier batches. Each request continues to enforce authentication, daily quota, model review, and server-owned answer keys.
- Duplicate question prompts are compared against the last 500 questions in the same student/institution/subject/topic before insertion. No unsupported claim of semantic deduplication.
- A generated question remains unendorsed original content, not an official past exam item. AI/NVIDIA calls cannot run until configured. No background infinite generation.

## QA checklist

- Confirm error message and SQL diagnostic when `public.profiles` is missing; do not paste secret keys.
- Visually check five onboarding steps at 320px, 768px and desktop, and both themes; selected Check and Plus symbols must be centered in equal squares.
- Guest: complete one demo, inspect compact single-session result and switch to AI login; sign in and stay on the Question Bank route.
- Generate 5, then 10 AI questions; verify partial batch failures and repeated prompts. Switch institution/topic, paginate past 40, and check total count and mock pool.
- Verify PostgREST generated item list does not return `correct_index`; wrong answer grading still stays on the server.