# Kognos v1.3 — Distinct Subjects, Trails and Learn experiences

## Reason for the change

In v1.2 the sidebar contained three seemingly different destinations (**Learn**, **Learning Paths**, and **My Subjects**) but routed all three to the same `LearningTrails` component and displayed almost the same layout. This confused the purpose of each screen.

## Product responsibilities

| Destination | Question it answers | Primary function |
| --- | --- | --- |
| **My Subjects** | Which subjects have I practiced, and what should I revisit? | Overview dashboard with selected subject, evidence-based indicators, next suggested topic, and actionable topic list |
| **Learning Paths** | In what sequence can I learn these introductory topics? | Subject track, ordered steps, prerequisite hints and lesson detail |
| **Learn** | What do I study right now? | Lesson-first reading and explanation with rapid topic switch and practice/Kog help |

## Implementation

- `components/SubjectDashboard.tsx` is a separate client component. It reads the current user's demo attempts through the existing RLS-protected Supabase client function or uses the guest browser storage key. It never claims that sample coverage is a validated proficiency score.
- `lib/subject-dashboard.ts` derives progress only from canonical original question IDs, bounded answer indices and valid attempt timestamps. The client-supplied `correct` and `subject` flags are not accepted for computing these indicators.
- `components/LearningTrails.tsx` now serves only **Learn** and **Learning Paths**. The Learn view puts the actual lesson first, while Trails emphasizes the sequence and practice-coverage map.
- `components/KognosApp.tsx` routes `subjects` independently and preserves existing typed focus navigation into the lesson page or targeted question bank. The same Kog floating tutor receives a validated lesson context when the user requests guidance.
- CSS respects existing dark/light design tokens, mobile widths down to 320px, and keyboard focus styles. Both account and guest behavior are preserved. No migrations or new secrets.

## Evidence and limitations

Indicators are restricted to 20 original demo questions across seven subjects. A correct sample is not evidence of permanent mastery. Repeating the same item does not validate a full course, institution-specific skill, examination grade, or predicted performance. AI-generated personal bank questions remain accessible via Question Bank and Simulados, but are not mixed into these demo-only subject coverage percentages.

## Verification

- `npm test` checks engine and per-subject evidence calculations, including tampering and invalid-attempt handling.
- `npm run test:design` checks distinct route renderings, working action wiring and mobile styling.
- GitHub CI runs both test suites plus TypeScript and the Next.js production build.