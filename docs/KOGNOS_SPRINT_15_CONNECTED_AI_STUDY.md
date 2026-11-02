# Sprint 15 — AI-Generated Practice Connected to Learning Paths

## What changes

The AI personal bank and mock examinations introduced in v1.0 now connect to the original introductory learning paths. Students can open **Learning Paths → choose a lesson → Questions with AI** and arrive at a filtered AI practice bank with a generation preset for the specific lesson. New questions are saved with an explicit `lesson_id`; the backend validates the lesson/institution/subject/topic tuple. The same action is offered in **My Subjects** for the suggested next lesson.

The client never controls answer keys, computed correctness, or topic identifiers in the persistent database. Server grading is retained in the existing `/api/ai-questions/submit` route. Newly aggregated progress comes from `GET /api/ai-study-progress`, which performs owner-filtered service-role queries, recomputes correctness from private `correct_index` and `answer_index`, and exposes *summary counts only*. Response headers prevent caching. The API does not expose question text, alternative choices, answer indices, keys or any other student's data.

The UI distinguishes demonstration evidence from AI-generated question practice, includes AI attempts and distinct AI items, and makes a recently missed lesson an earlier recommendation. One successful answer does not imply mastery. These are observational indicators for a 20-lesson introductory catalog, not institutional exam scores.

## Required migration

Run `supabase/migrations/0007_ai_lesson_links.sql` after `0005_ai_question_bank.sql`; the existing `0006_exam_source_catalog.sql` should already be installed for the institution-linked source catalog. The migration adds a **nullable** `lesson_id`, a formatting check and an owner-plus-lesson index. Existing records and previous client grants/RLS policies are preserved; new reads and writes of AI lesson metadata remain on authenticated server routes.

## Backward compatibility

Existing AI questions have `lesson_id = NULL`. **Only exact, unique historical topic-name matches** can be inferred without an explicit link. In particular, broad old labels such as “Movimento e forças” are not silently classified as “Cinemática” or “Força.” Earlier AI responses that are not confidently linked remain intact in the personal question bank and mocks, but are excluded from the 20-lesson coverage indicators. The API explicitly counts such unlinked attempts for transparency.

## Technical safeguards

- Only a recognized authorial lesson ID and an exact editorial blueprint subject/institution/topic combination can be attached to a new question; arbitrary client `lessonId` inputs are rejected.
- Private tables still have revoked `anon`/`authenticated` grants and use service-role access only via authenticated routes.
- AI correctness is recalculated in a pure function using server-side private keys. Untrusted database `correct` flags are not used.
- Queries bound the calculation to the 500 newest active AI questions and 1500 newest attempts for them; `sampleLimited` alerts consumers when the window is truncated. It is not a comprehensive lifetime history if these limits are reached.
- AI provider output passes the existing structural and independent-model review; this does not guarantee scientific correctness, and publication to a public official bank still requires human review.
- The page gracefully falls back to demo-only indicators when the private progress endpoint is unavailable; it shows a warning instead of reporting a false verified zero.

## Validation and manual QA

Run `npm test`, `npm run test:design`, `npm run typecheck`, and `npm run build`. Manual integration checks are still required with a configured Supabase instance and NVIDIA key: generate from a Biology lesson, answer two different items, return to the trail, verify counts; revisit the filtered bank from My Subjects; verify unrelated AI items are unlinked and not counted; check guest mode and unauthorized API access; test mobile layouts, retry states and database migration errors.