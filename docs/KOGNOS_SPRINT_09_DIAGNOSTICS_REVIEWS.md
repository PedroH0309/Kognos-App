# Kognos v0.9 — Exploratory diagnostic and adaptive review (beta)

## Summary

This incremental release adds two functional sections to the existing public Kognos application. It does **not** introduce new credentials, permissions, Supabase tables, migrations, or imported third-party teaching content.

### Exploratory diagnostic

- Students can take a seven-question introductory sondagem, sampling one original item from each currently supported subject.
- The selection favors questions with the fewest recorded attempts, not perceived student ability.
- Questions are shown one at a time without revealing correctness before the report.
- Answers are recorded as ordinary **demonstration practice** attempts in existing browser/Supabase storage, because there is no separate diagnostic-session table or official grading system yet.
- After all answers are saved, the student sees their results, reference explanations and direct links to relevant introductory lessons.
- This is **not a psychometric diagnostic**, official exam estimate, or valid measurement of subject proficiency. One item per subject is far too little for such claims.
- A partially completed session exists only in memory; leaving the page discards its unsaved answers. This limitation is deliberate in the beta.

### Adaptive reviews

- Review items are derived from the **canonical** answer key and dates in recorded demonstration attempts, never from a client-provided `correct` flag.
- The initial schedule is conservative: wrong latest answer = due immediately; correct latest answer = due after 1, 3, 7 or 14 days depending on consecutive correct attempts on *distinct dates*.
- Multiple repeats on the same day count as one date of correct practice and do not accelerate intervals.
- A new wrong response resets the interval; unattempted material remains separate from reviews due.
- The app distinguishes due, scheduled and not-started items, and links directly to the original mini-lesson or question.
- The same questions are reused: spacing recommendations in this beta are **not validated spaced-repetition outcomes** and cannot establish durable memory or mastery.

## Student experience

- Dashboard and sidebar expose **Diagnóstico inicial** and **Revisões inteligentes**.
- Desktop and mobile reuse the premium Deep Navy, Violet and Cyan design system.
- The Kog assistant is available globally. After a completed diagnostic, the account-scoped performance context can be used for a tutor explanation. No correct answers are sent to Kog from an in-progress diagnostic.
- Logged-in students require their existing Supabase `0004_demo_cloud_sync.sql` migration for attempt storage. Visitors use the local browser.

## Engineering and security

- `apps/web/src/lib/adaptive-review.ts` provides deterministic, pure selection, schedule, summary and date calculation utilities with tests.
- `DiagnosticSpace.tsx` saves a seven-record demonstration batch atomically as one Supabase insert; there is no cross-table transaction required.
- `ReviewSpace.tsx` reads the existing RLS-protected attempt history.
- No new secrets are committed, and the repository remains public with the existing proprietary copyright terms.

## Testing / remaining work

1. Automated unit tests validate calendar boundaries, canonical grading, streak resets, and seven-subject selection.
2. CI validates type checking and production build.
3. Browser QA should cover date boundaries, browser refresh during diagnosis, logout/account switching, keyboard and 320px screens, and cloud insert failures.
4. Future releases: larger licensed question pools, server-side diagnostic grading, persisted diagnostic sessions, calibrated per-skill mastery with confidence bounds, and review scheduling from multiple independently authored items.