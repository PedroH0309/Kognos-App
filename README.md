# Kognos — Intelligent Learning Platform

> **Proprietary software — All rights reserved.** This repository is not licensed for unrestricted use or redistribution. See [LICENSE](LICENSE) and [CONTRIBUTING.md](CONTRIBUTING.md) for permission and contributor guidance.

Kognos is an adaptive educational web application built with **Next.js 16, React 19, TypeScript, Supabase and NVIDIA AI**. It targets school subjects, ENEM, entrance exams, ETEC, competitions and self-directed learning. The original brand uses Deep Navy, Intelligence Violet, and Progress Cyan. The UI language is Brazilian Portuguese; project documentation is in English.

## What's new in v1.0 — AI question generation and institution-aware personal mocks

- **NVIDIA-backed question generator:** authenticated learners select ENEM, ETEC or FUVEST, a subject, a topic, a difficulty, and up to five questions per request.
- **Two-pass automated screening:** deterministic structural validation plus independent AI review of key consistency. Accepted questions are added automatically to the student's private question bank and mock simulator; they are **AI-generated, not official questions or human-approved materials**.
- **Secure answers:** prompts/options appear in the browser, but the reference answer and explanation remain in a service-role-only Supabase table until server-graded submission. The mock interface releases feedback at the end.
- **Kog integration:** the contextual tutor receives a verified private question ID, with no answer key during the solving phase.
- **Versioned official source entry points:** the INEP 2026 reference matrix, official ETEC FAQ, and FUVEST 2027 programme are linked for verification. Current topic menus are an **illustrative editorial mapping**, not automated extraction from official exam documents.
- **Required migration:** apply `supabase/migrations/0005_ai_question_bank.sql` after the existing migrations. The NVIDIA API key remains server-only. Generation shares the existing daily AI quota and makes two provider requests per generation.

See [Sprint 1.0 notes](docs/KOGNOS_SPRINT_10_AI_GENERATED_EXAMS.md) for architecture, source limitations, safety, and deployment.

## What's new in v0.9 — exploratory diagnostic and adaptive review

- **Exploratory diagnostic:** seven original questions across seven subjects, scored only after completion, with references to follow-up lessons. This is a learning starting point, **not** a calibrated assessment or official exam score.
- **Adaptive review (beta):** schedules revisits of demonstration topics after incorrect responses or at 1/3/7/14-day intervals following consecutive correct attempts on different days. Repeated attempts on the same item do not establish mastery.
- **Dashboard integration:** launch the diagnostic or review queue from the homepage and sidebar, and view pending review counts from recorded attempts.
- **Existing storage:** reuses browser-local practice records or the RLS-protected Supabase demonstration attempt table. No migration or new permissions are needed for this release.

See [Sprint 0.9 notes](docs/KOGNOS_SPRINT_09_DIAGNOSTICS_REVIEWS.md) for methodology and limitations.

## What's new in v0.8 — introductory lessons and question-bank discovery

- **Learn / Learning Paths / My Subjects** are usable, with 20 original introductory mini-lessons grouped into seven subject tracks. Each lesson has a goal, explanation, worked example, frequent misconception, comprehension check, and a linked demonstration exercise.
- Practice coverage is based on actual recorded demonstration attempts; it never claims mastery from a single correct answer.
- **Question Bank** now supports filters by subject, topic and difficulty, text search, individual-question sessions, and filtered batches.
- **Kog** recognizes the selected lesson using a validated, server-resolved lesson identifier. No answers or API credentials are taken from user-controlled context strings.
- This small demonstration catalog is **not** a complete course, official exam archive, or verified measure of ENEM proficiency.

See [Sprint 0.8 notes](docs/KOGNOS_SPRINT_08_LEARNING_PATHS.md).

## What's new in v0.7 — truly contextual Kog

- Kog uses the **actual current demo question**, not merely the page name. In-progress prompts contain the question and visible alternatives but **not** the answer key.
- After a submitted attempt is recorded in the student's Supabase account, Kog can provide corrective feedback with the canonical answer and an explanation.
- In Study Planner, Kog can analyze pending tasks or focus on a selected activity. In Performance, it reads the student's real demo attempts and offers targeted practice suggestions.
- The official tutor persona has been expanded with progressive instruction, prerequisite checks, concrete analogies, error analysis, frustration-sensitive language, and the student's selected accessibility preferences.
- Context is derived and verified server-side from allowlisted identifiers and RLS-scoped account data. No private API keys are sent to the browser.
- Demo practice remains demo practice: this is **not** official ENEM grading or a production-ready exam system.

See [Sprint 0.7 notes](docs/KOGNOS_SPRINT_07_CONTEXTUAL_TUTOR.md).

## What's new in v0.6.1 — polished onboarding

- Refined all five onboarding steps using the official restrained Kognos design system.
- Replaced native dropdowns in onboarding with accessible keyboard-operable custom selects.
- Added a localized calendar, date input validation, and a custom branded study-time slider.
- Updated responsive layouts, selected states, spacing, and contrast for desktop and mobile.
- Retained all existing student profile fields, privacy defaults, and account persistence.

See [Sprint 0.6.1 onboarding notes](docs/KOGNOS_SPRINT_061_ONBOARDING.md).

## What's new in v0.6

- A persistent floating **Kog assistant** is available on any page.
- Desktop: expandable side drawer. Mobile: responsive bottom sheet.
- A real-time interactive **3D Kog mascot** is rendered with Three.js, with a static fallback and reduced-motion support.
- An optional 3D model asset is available in `apps/web/public/brand/kog-3d.glb`.
- Contextual tutor suggestions for exercises, mock exams, study plans and dashboard performance.
- Navigation to the tutor no longer destroys the current lesson or loses the chat while switching pages.
- AI messages are still sent only through the authenticated server route with private NVIDIA credentials.

See [Sprint 06 details](docs/KOGNOS_SPRINT_06_KOG_ASSISTANT.md).

## Current features

- Five-step onboarding with goals, study schedules, accessibility preferences, and teaching styles.
- Local guest experience with browser persistence.
- Supabase-based account, profile, avatar, password management and guarded multiuser data when configured.
- Demonstration question bank with 20 original questions and recorded attempts.
- A simple weekly study planner and basic performance statistics.
- Light/dark mode, custom scrollbars, mobile navigation and unified design tokens.
- Kog tutor with NVIDIA backend, personalized teaching prompt and per-user request limits.

**Not yet production-ready:** official exam question banks, official exam grading, full adaptive learning pathways, essay correction, integrated mastery map, and full cloud persistence. The app does not claim these functions are complete.

## Quick start

Requirements: Node.js 22 LTS recommended (Next.js 16 requires Node.js 20.9 or higher).

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). The basic interface works without cloud credentials; AI conversations require a configured Supabase login and NVIDIA key.

### Private configuration

Copy `apps/web/.env.example` to `apps/web/.env.local` and set your project-specific values:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY
SUPABASE_SECRET_KEY=YOUR_SERVER_ONLY_SECRET
SUPABASE_JWKS_URL=https://YOUR-PROJECT.supabase.co/auth/v1/.well-known/jwks.json
NVIDIA_API_KEY=YOUR_NEW_PRIVATE_NVIDIA_KEY
NVIDIA_MODEL=meta/llama-3.3-70b-instruct
NVIDIA_API_BASE_URL=https://integrate.api.nvidia.com/v1
AI_DAILY_REQUEST_LIMIT=20
```

On Windows you may also use `CONFIGURAR_KOGNOS.bat` and `CONFIGURAR_API_NVIDIA.bat` to populate the local configuration. Never commit `.env.local` or any secret. Any previously exposed credentials should be rotated.

Run the following files in the Supabase SQL Editor, in order, to enable account storage and demo synchronization:

1. `supabase/migrations/0001_core_schema.sql`
2. `supabase/migrations/0002_kognos_onboarding_ai.sql`
3. `supabase/migrations/0003_account_and_avatars.sql`
4. `supabase/migrations/0004_demo_cloud_sync.sql`

Optionally run `supabase/seed/seed.sql` for demonstration content. Set authentication Site URL and allowed redirect URLs in the Supabase dashboard. Configure your authentication and email providers before public release.

## Local validation

```bash
npm test
npm run test:design
npm run build
```

The automated Node tests and syntax checks run locally. The production Next.js build and live service integration must be verified on a computer that can install npm packages and access Supabase/NVIDIA.

## Project map

| Directory | Purpose |
| --- | --- |
| `apps/web/src/components/` | Application, floating Kog assistant, real-time 3D mascot, and account UI |
| `apps/web/src/app/api/tutor/` | Authenticated server-only NVIDIA API gateway |
| `apps/web/src/lib/` | Student profiles, contextual assistance, cloud storage and learning logic |
| `apps/web/public/brand/` | Brand artwork and exportable Kog 3D asset |
| `packages/education-engine/` | Adaptive learning rules and tests |
| `supabase/migrations/` | Database migrations, RLS policies and quota enforcement |
| `docs/` | Product specifications, design system, migration notes and development history |

## Security and privacy

- Kog does **not** require a per-message consent checkbox, but displays notice that NVIDIA processes questions and educational context.
- Avoid putting private or sensitive details in AI conversations.
- Chat messages remain in browser memory only during the current session; they are not currently saved to the database.
- Guest data is browser-local and not automatically synchronized.
- The tutor API requires a valid user identity and enforces a daily quota.
- Accessibility preferences are not medical diagnoses, and the app does not require disclosure of ADHD or dyslexia.
- Public deployment requires further security, RLS, accessibility, privacy and mobile testing, particularly for underage users.

## Contributing

Issues and pull requests are welcome from authorized contributors. See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md). Contributions do not automatically make the proprietary source code open source.

**© 2026 PedroH0309. All rights reserved.**