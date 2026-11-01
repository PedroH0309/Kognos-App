# Kognos v0.8 — Introductory learning paths and searchable practice

## Product scope

Kognos now has functioning **Learn**, **Learning Paths**, and **My Subjects** navigation. The initial authored catalog provides 20 compact lessons across seven subjects, each linked to one existing original demonstration question. It is not an official examination bank or a comprehensive curriculum.

- Curated concept explanation, worked example, common error, understanding check, and prerequisites for each lesson.
- Seven subject cards, compact path index, lesson details, and progress coverage indicators.
- Practice evidence derived from the user's recorded answers to the corresponding demonstration items.
- A question bank with subject/topic/difficulty filters, text search, individual-question practice, and filtered batch practice.
- Direct lesson-to-question navigation preserving subject and topic filters.
- Kog contextual tutoring for the selected lesson. The server resolves allowlisted lesson IDs from its own catalog and never treats browser-supplied lesson text as trusted instructions.

## Evidence vs. mastery

- No activity: **Not yet practiced**.
- Last attempt incorrect: **Review result**.
- Last attempt correct: **Recorded correct answer**.

A single practice answer does **not** demonstrate lasting mastery. Coverage refers only to the percentage of this small catalog with at least one recorded attempt; it is not academic proficiency, an ENEM score, or spaced-repetition retention.

Cloud users read their own recorded demonstration attempts through Supabase RLS. Guests use the original browser-local demonstration attempt history. The system recalculates correct answers from the canonical demonstration bank rather than trusting the stored `correct` flag.

## Context and security

A client may send `{kind:'lesson', lessonId:'bio-cells'}`. The server validates the shape and loads the lesson from the catalog; arbitrary lesson prose or answers from the browser are ignored. Other Kog contexts retain the prior authenticated verification flow.

The NVIDIA key remains server-only. This feature adds no new secret or database migration. The source repository remains public, with the existing proprietary copyright terms.

## Testing and next steps

The catalog integrity tests verify all lesson-to-question references and prerequisite links, evidence semantics, and recommendation ordering. Context tests verify sanitized lesson identifiers and canonical server context. Design tests ensure the three learning sections and filter controls are wired to the app.

Manual QA: navigate across all seven subjects, search and select lessons, return from a focused exercise, reload local/cloud results, open Kog from a lesson, test on mobile and with keyboard focus. Build and integration tests are automated in GitHub CI; use a configured local environment for real NVIDIA/Supabase functionality.

Next: administratively managed content with attribution and revisions; richer multi-question skill assessments; server-side official exam correction; durable review scheduling; richer student learning history.