# Adaptive study cycle and calendar integration

## Scope delivered

- The existing **20 authored demonstration questions** are used for the initial diagnostic and optional weekly reassessments. Questions are spread across the seven currently covered subjects. Previous incorrect answers appear earlier within each subject; the app uses the canonical question key rather than trusting browser-supplied correctness.
- The planner combines available recorded demonstration attempts and server-graded AI attempt summaries to prioritize areas for review. It distributes up to four study blocks across each eligible day, respects existing manual entries and the student's daily minute budget, and uses shorter blocks when that accessibility preference is enabled.
- When there is recorded evidence, the last available day receives a weekly diagnostic reminder, which opens the diagnostic interface. It does not run without user interaction, nor does it claim to measure durable mastery.
- Students can export saved study tasks from the calendar as a portable **.ics** file for manual import into a compatible iPhone, Android, desktop or Google Calendar workflow. Tasks without a specific start time export as all-day events. This is a one-time snapshot, not OAuth integration or bidirectional synchronization.
- The Kog pedagogical prompt more explicitly encourages one-step-at-a-time teaching, short sentences where helpful, optional pauses and feedback-driven adaptations. These are educational preferences, not clinical assessments.
- Planner actions, cards, month grid and phone-size touch targets have improved spacing.

## Reused foundations

The existing Supabase authentication/profile, RLS-protected task storage, AI attempt summaries, client-side demonstration question bank, Kog server tutor and accessible onboarding stay in place. No new environment variables, dependencies or SQL migrations are needed for these incremental features.

## Important limitations

1. The 20 original questions are **not** past ENEM, VUNESP, SARESP or other official exam questions. They include both basic and intermediate difficulties. Repeated exposure to the same items may inflate accuracy without establishing knowledge transfer. Verified and licensed official exam banks must have source, year, institution and provenance metadata before being described as official.
2. Weekly reassessments are reminders and user-initiated sessions, not scheduled background executions. Recording separate diagnostic session identifiers and longitudinal comparisons would require dedicated server-side event storage.
3. The provider-powered Kog requires valid server configuration and quota; its local authored library is a transparent fallback, not an interchangeable generative model.
4. iCalendar export is not a live connection. Future changes in Kognos require a fresh export. Native/Google calendar OAuth with secure revocation and per-user sync remains a separate feature.
5. Prefer multi-item, longitudinal, separately verified learning evidence over a single assessment for claims about strengths, deficits or mastery. Accessibility preferences must remain optional and editable.

## Verification

Run from repository root:

    npm install
    npm test
    npm run test:design
    npm run typecheck
    npm run build

Use mobile Safari and Android browsers to manually confirm layout and .ics download behavior; CI alone cannot validate platform-specific file import. Check guest and signed-in sessions separately, including Supabase RLS and the existing calendar time-column migration (0011).
