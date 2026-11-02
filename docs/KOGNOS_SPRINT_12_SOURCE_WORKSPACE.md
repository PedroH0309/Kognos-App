# Kognos v1.2 — Source workspace UX and editorial access

## Problem evidence

The Matrices & Notices page showed a large passive "Sign in" panel with no action button, plus "0 approved topics" even though an unauthenticated guest had never requested the protected catalog. That made missing authorization indistinguishable from a truly empty approved bank, and a user who had configured the editor UUID could not discover how to sign in from that screen.

## Delivered changes

1. A visually compact, functional account CTA opens the shared login dialog from the Matrices & Notices page. A successful sign-in preserves the current source page (unless the user must first complete onboarding).
2. The component handles five explicit presentation states: **guest**, **loading**, **error**, **authenticated reader**, and **authenticated editor**. Only a successful authorized fetch can show catalog counts. Failed catalog fetches retain a visible retry button and accurate guidance about migration 0006 and Supabase configuration.
3. A small authenticated catalog summary shows counts of reviewed topics and institutions. Editors also see imported source and pending-review counts from the authorized API response.
4. Editors receive a dedicated workspace with Import Document and Review Candidates tabs, documentary verification guidance, a pending review count, an institution filter, and quick search.
5. Responsive CSS uses the existing theme tokens. Forms, status updates, source references, session messages and their keyboard controls stay visible on narrow layouts.

## Permission boundaries

- The browser **cannot grant itself** an editor role. The display only respects `editor: true` returned by the authenticated server API.
- The `/api/exam-sources` ingestion and moderation routes continue to check the server-only UUID allowlist independently. Client-side tabs, filters and banners do not affect authorization.
- Guest visitors may read the static links to institutional sources but do not receive the protected catalog, private reviewer information or fake counts.
- No new migration, network dependency, secret, editor ID, or key is committed. The repository remains public with proprietary licensing.

## Manual QA

- With a guest profile, visit Matrices & Notices and click the visible sign-in button; sign in and ensure the source page is preserved.
- With a regular authenticated student, check that catalog is read-only and editor tools remain hidden.
- With a server-allowlisted editor, check both editor tabs, the institution filter, topic search, moderation, and import. Validate each approval against the linked official document.
- Drop the 0006 tables temporarily **only in a disposable test environment** and confirm the page shows an error/retry, never "0 approved topics".
- Test light/dark mode and 320px, 390px, 768px and desktop widths, keyboard navigation, and reduced-motion settings.

Automated tests cover pure access-state selection, catalog metrics, component wiring, and source-page structure. TypeScript and production-build checks run in GitHub CI. Browser-level authentication and live Supabase/NVIDIA integration require a configured test environment.