# Kognos v1.4 — Compact Guided Learning Journeys

## Problem addressed

The v1.3 Learning Paths screen used a full-width guest-mode notice and a large generic progress card before showing its learning content. The seven tall subject cards then pushed the lesson sequence far below the fold. The screenshot also showed a discouraging 0% before any study could start.

## Delivered screen hierarchy

1. Compact heading with a restrained authorial-content label.
2. Small and honest **journey strip**: answered-topic coverage, with a useful empty state instead of a giant 0% score. Guest storage information is now a quiet footer note.
3. Wrapping responsive subject chips with authentic per-subject answer coverage; no duplicated large discipline cards.
4. Current subject synopsis with stages, observed coverage and a **next recommended topic** action.
5. An ordered, keyboard-accessible lesson timeline alongside the actual selected lesson. Each timeline step has status based on canonical demonstration-question attempts, a reading-time estimate and prerequisite hints.
6. Lesson navigation: previous/next within the chosen subject, clickable prerequisites, direct practice and contextual Kog assistance.

## Functional improvements

- Added a pure and tested `learning-roadmap.ts` projection for catalog counts, topic status, requirements and adjacency. Attempts' untrusted correctness flag is **not** used to infer coverage quality.
- A scoped browser-only preference `kognos_last_lesson_v1_<Supabase User ID or guest>` stores the last opened original lesson. A specific user-selected lesson arriving from the diagnostic, review screen or subject dashboard overrides it. This is not a new cloud table or verified completion record.
- Mobile interactions scroll to the lesson when a timeline item is selected so the learner can see the content change.
- The Learn page remains lesson-first; Learning Paths remains a route-first experience. Both use a shared content/learning engine, not separate fabricated datasets.
- Focus, reduced-motion, narrow screens, and light/dark design tokens are included in the CSS.

## Quality and limits

- Unit tests validate empty, incorrect and corrected practice evidence, canonical answer indices, topic prerequisites, navigation boundaries, and the 20 original items.
- Design tests check that the bulky visitor card/tall subject-card layout is gone, and that all practice and Kog callbacks remain wired.
- The 20 samples are authorial **demonstration** items. Per-topic answer counts are neither course-completion, exam-grade nor reliable mastery measures. Generated NVIDIA questions and mock results are not yet folded into this original introductory trail's counters.
- No Supabase migration, new env setting, or server permission change is needed.