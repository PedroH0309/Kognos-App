# Kognos

**An AI-assisted learning platform for structured study, original lessons, exam preparation, and evidence-based practice.**

Kognos combines curriculum-based study paths, authored educational content, objective practice questions, a contextual tutor called **Kog**, and student-owned learning records. It targets Brazilian secondary education and examination tracks, with **ENEM-first editorial prioritization**. Topic labels in the editorial catalog are not, by themselves, verified official exam competencies.

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-lightgrey)](LICENSE)
![Version](https://img.shields.io/badge/version-1.9.0-6f42c1)
![Status](https://img.shields.io/badge/status-active%20development-orange)
![Stack](https://img.shields.io/badge/Next.js-16-black)
![Language](https://img.shields.io/badge/language-TypeScript-blue)

> **Repository status:** The software is proprietary and not licensed for unrestricted redistribution. The curriculum is under active expansion; authored lessons and AI-generated practice are **not official exam materials** and have **not been certified by teachers or exam boards**. See [LICENSE](LICENSE) and [CONTRIBUTING.md](CONTRIBUTING.md).

## Project status

The web application uses Next.js, React, TypeScript, Supabase/PostgreSQL, and a server-side NVIDIA integration for supported AI flows. The original interface uses Deep Navy, Intelligence Violet, and Progress Cyan. The interface language is Brazilian Portuguese.

| Capability | Status |
|---|---|
| Responsive web interface, student onboarding and learning navigation | Implemented |
| Supabase sign-in, accounts and protected per-user data | Implemented when configured |
| Original starter lessons and demonstration question bank | Implemented; limited scope |
| Curriculum tracks for ENEM, FUVEST, Provão Paulista and VUNESP | Registered as editorial orientations; not official equivalence certificates |
| Historical ETEC curriculum references | Retained for compatibility; not a public active track |
| Authored deep lessons and canonical cross-exam references | Implemented in part; continuing editorial development |
| Semantic associations with explicit full/partial coverage | Implemented in part; coverage is audited, not assumed |
| AI question generation and personal question bank | Implemented conditionally; requires Supabase Auth, server configuration and quota |
| Contextual Kog tutor and study planner | Implemented conditionally; service availability is not guaranteed |
| Official source ingestion and editorial review workflow | Restricted editor functionality; human approval required |
| Fully reviewed ENEM and vestibular curricula | In progress; **not complete** |
| Official exam grading, certified mastery prediction, full essay correction | Not claimed or not implemented as complete products |

This table describes the codebase, not an assertion that external services or production deployment are currently functioning.

## Features

- **Exam-oriented study paths:** Browse registered subjects and topics without equating editorial titles with official exam skill codes.
- **Original lessons:** Progressive explanations, worked examples and objective A–D exercises in the authored deep library; content still requires pedagogical review.
- **Canonical lesson reuse:** A single authored lesson can serve more than one exam where scope and objectives are sufficiently aligned; historical topic IDs and navigation remain distinct.
- **Partial-coverage evidence:** Broader topics can link to useful supporting lessons while explicitly recording missing scope instead of claiming completion.
- **Practice and mock exams:** Demonstration exercises and, when configured, private AI-generated questions subject to server-side validation.
- **Kog learning assistant:** Contextual educational guidance through an authenticated server route, with a labeled fallback when full AI assistance is unavailable.
- **Study planning:** Scheduling and review suggestions based on recorded attempts rather than invented proficiency.
- **Protected student records:** Owner-scoped access to account data and graded AI practice, with answer keys protected by server-side controls.
- **Source review:** Restricted editor workflows for proposed exam references, provenance and approval.

## Curriculum model and current limitations

**ENEM first:** compare each registered ENEM topic with deep lessons from every exam before authoring a duplicate. An alias may be considered **full** only after verifying scope, learning objectives, expected depth and source evidence. A **partial** link is advisory and must list missing objectives. Matching keywords or titles alone do not certify equivalence.

The catalog and deep-lesson coverage change with every accepted development batch. For reproducible counts, use the source-defined audits and their tests, not historic README statistics:

- `apps/web/src/lib/curriculum-catalog.ts`
- `apps/web/src/lib/exam-blueprints.ts`
- `apps/web/src/lib/exam-syllabus.ts`
- `apps/web/src/lib/provao-paulista.ts`
- `apps/web/src/lib/canonical-lesson-reuse.ts`
- `apps/web/src/lib/enem-canonical-priority.ts`

The corresponding audit documentation, when present, explains measured coverage and unresolved semantic associations. An editorial ENEM topic count is **not** the number of official Inep competencies or skills.

## Technology stack

| Layer | Implementation |
|---|---|
| Web app | Next.js 16, React 19, TypeScript |
| UI | CSS, Lucide icons, Motion, Three.js for Kog visual elements |
| Authentication and storage | Supabase Auth and PostgreSQL |
| Education logic | `packages/education-engine/` and `apps/web/src/lib/` |
| AI services | NVIDIA NIM through protected server routes, when configured |
| Local development | Node.js and npm workspaces |
| Testing | Node.js test runner, TypeScript, design tests and PostgreSQL security tests |
| CI | GitHub Actions |
| Source catalog | Versioned editorial references; institutional evidence reviewed separately |

## Requirements

- **Node.js 22 LTS** recommended (Next.js 16 requires Node.js 20.9 or later).
- npm and Git.
- Browser with current JavaScript support.
- A Supabase project for authenticated cloud features, with the repository's migrations applied in order.
- Server-side NVIDIA credentials only if AI features are needed.

The user interface can be developed locally, but authenticated services and AI features cannot be considered operational until configured and tested.

## Run locally

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/PedroH0309/Kognos-App.git
   cd Kognos-App
   npm install
   ```

2. For features requiring Supabase or NVIDIA, copy `apps/web/.env.example` to `apps/web/.env.local` and configure the appropriate values **locally**. Never commit this file.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

See [existing development notes](#development-history-and-detailed-setup) for migration ordering, editor configuration and integration details. Do not apply schema changes to production without review.

## Run tests

From the repository root:

```bash
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run lint
npm run build
```

Run these checks against the exact commit being reviewed. GitHub Actions is the authoritative record for a CI run; a successful earlier commit does not certify subsequent changes. Content security tests are designed to exercise PostgreSQL ownership and two-user isolation.

## Study workflow

1. Sign in when cloud features are configured.
2. Select an exam, subject and registered topic.
3. Study the related lesson and its prerequisites.
4. Complete objective exercises or authorized AI practice.
5. Review feedback and revisit weak topics based on actual attempt history.
6. Continue along the study path while preserving your own progress.

An exam may show the same underlying canonical lesson as another exam, but its curriculum reference and user-specific study state remain distinct.

## Security boundaries

- API keys and service secrets belong only in server-side environment variables; never in frontend bundles, logs or commits.
- Supabase Auth, Row Level Security and server authorization protect private student records.
- Answer keys for authenticated AI practice are not exposed while the student is answering.
- Restricted editorial changes require server-confirmed editor permissions.
- External AI processing requires the configured authentication, quota and user-facing disclosure.
- Demo progress is not a certified prediction of ENEM performance, and accessibility preferences are not medical diagnoses.
- Schema changes require versioned migrations, RLS review and isolation tests for at least two users.

See [SECURITY.md](SECURITY.md) to report security vulnerabilities.

## Known limitations

- The curriculum is **incomplete**; an existing title does not imply a complete, reviewed lesson.
- Semantic overlap is not necessarily full equivalence. Partial references do not count as full coverage.
- AI generation depends on external provider availability, configuration and quotas.
- Generated questions are original machine-produced items, not official, human-certified examination questions.
- Demonstration content and user progress do not establish mastered competencies.
- Official exam source ingestion requires restricted editorial review and does not automatically validate every linked source.
- Production readiness still requires privacy, accessibility, mobile and service-level validation.

## Project structure

```text
.
├── .github/
│   └── workflows/            # CI verification
├── apps/
│   └── web/
│       ├── public/           # Static assets and brand resources
│       └── src/
│           ├── app/          # Next.js routes and API handlers
│           ├── components/   # Interface and Kog assistant
│           └── lib/          # Curriculum, canonical lessons and services
├── packages/
│   └── education-engine/     # Education logic and tests
├── supabase/
│   └── migrations/           # Versioned database changes and RLS
├── tests/                    # Design and security regression tests
├── docs/                     # Technical and editorial documentation
├── legacy/                   # Preserved FOCO base
├── AGENTS.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Contributing

Review [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request. The source remains proprietary; a public GitHub repository is not equivalent to an open-source license.

## License

**Proprietary — all rights reserved.** See [LICENSE](LICENSE).

---

## Development history and detailed setup

The sections below preserve the earlier release notes and detailed setup instructions. Historical feature claims refer to the versions in which they were written; the project status above is the current high-level summary.

> **Proprietary software — All rights reserved.** This repository is not licensed for unrestricted use or redistribution. See [LICENSE](LICENSE) and [CONTRIBUTING.md](CONTRIBUTING.md) for permission and contributor guidance.

Kognos is an adaptive educational web application built with **Next.js 16, React 19, TypeScript, Supabase and NVIDIA AI**. It targets school subjects, ENEM, entrance exams, ETEC, competitions and self-directed learning. The original brand uses Deep Navy, Intelligence Violet, and Progress Cyan. The UI language is Brazilian Portuguese; project documentation is in English.

## What's new in v1.8 — Kog readiness and evidence-based study planner

- Added a no-store `GET /api/ai-status` endpoint which exposes **only configuration presence**, never provider secrets or a claim that an upstream request succeeded.
- Kog now detects missing NVIDIA server configuration before sending a prompt. Its clearly labeled **Local Library — No AI** mode provides an original Pythagoras explanation and guides from the 20 authored lessons. Unsupported questions are acknowledged without fake generated answers.
- The planner combines the student's real demo attempt history and authenticated, server-graded AI practice **summary** to prioritize review topics. It respects scheduled weekdays, daily minutes and existing tasks, without inferring mastery or predicted exam results.
- No new Supabase migration or third-party dependency is needed. Full conversational AI still requires a private `NVIDIA_API_KEY` in the server's `apps/web/.env.local` or the hosting platform's secret settings.

See [Sprint 18 and NVIDIA setup](docs/KOGNOS_SPRINT_18_KOG_PLANNER.md). A presence-only readiness flag does not confirm that the provider or model is reachable.

## What's new in v1.5 — AI practice linked to learning paths

- Connected NVIDIA-generated questions to the **20 authored starter lessons**, with explicit, server-validated lesson-to-exam-topic mappings; generation from a lesson now opens the personal AI bank with the correct institution, subject and topic preselected.
- Added a private authenticated `GET /api/ai-study-progress` endpoint. The server recomputes correctness using protected answer keys and only sends per-lesson counts, distinct question coverage and most recent outcome to the client — **never the key or chosen answer**.
- **Learning Paths**, **Learn**, and **My Subjects** now display demonstration practice and linked AI practice separately. Recommendations prioritize lessons with a recent incorrect AI answer, without claiming exam readiness or long-term mastery.
- Existing AI questions without explicit lesson metadata are mapped only when the old topic name **exactly** and uniquely matches a curated lesson. Broad/multidisciplinary institution labels are deliberately not assigned to narrow lessons.
- Added migration [`0007_ai_lesson_links.sql`](supabase/migrations/0007_ai_lesson_links.sql), which stores a nullable validated `lesson_id` for new questions while retaining old bank records. **Apply it after 0005/0006 before using the v1.5 AI flow**. No new environment variables are required.
- The public repository and English developer documentation are preserved. Full details: [`docs/KOGNOS_SPRINT_15_CONNECTED_AI_STUDY.md`](docs/KOGNOS_SPRINT_15_CONNECTED_AI_STUDY.md).

## What's new in v1.4 — compact guided Learning Paths

- **Visual redesign:** replaces the oversized visitor banner, large global percentage card and repeated tall subject cards with a compact progress strip, responsive subject chips, a focused subject overview and a clear ordered journey. The first lesson becomes visible sooner.
- **Real guided navigation:** stages have numbered markers, prerequisite links, practice evidence states, a recommended next lesson and previous/next controls. On narrow screens selecting a step scrolls to its lesson, instead of silently updating content out of view.
- **Resume last opened lesson:** optional user-scoped browser storage remembers the most recently opened original lesson. Explicit navigation from diagnostic results, reviews or Subjects takes precedence over the stored preference; this is not cloud progress synchronization.
- **Honest progress states:** only saved demonstration attempts count toward practice coverage. Guest, loading, and failed-history states are clearly distinct; reading alone is not treated as an answered question or demonstrated mastery.
- **Preserved integrations:** Subjects, Learn, Kog's lesson context, demo question practice, keyboard focus, dark/light mode and reduced-motion preferences still work. No migration, new API permission or environment variable is required.

See [Sprint 1.4 notes](docs/KOGNOS_SPRINT_14_GUIDED_JOURNEYS.md). The current catalog remains **20 introductory authorial lessons**, not a complete school curriculum or an official exam archive.

## What's new in v1.3 — distinct Subjects, Trails and Learn experiences

- **My Subjects is now a dedicated dashboard**, not a second rendering of the trail/lesson screen. Students see seven subject cards, per-subject evidence-based practice coverage, pending review items, dates of recorded practice, a recommended next topic, and topic-level status. Every card links to its real lessons, practice sessions or contextual Kog help.
- **Learning Paths is a sequenced curriculum navigator**, showing the catalog's stages, prerequisite hints, an introductory 20-topic practice-coverage map, and a lesson detail panel.
- **Learn is lesson-first**, displaying the current mini-lesson prominently with compact subject switching, quick access to other lessons, and a link to the corresponding learning path.
- All three areas reuse the **same verified demonstration attempts** in browser-local guest mode or the existing Supabase demo table when signed in; no new score, fabricated proficiency estimate, or account permission is introduced.
- No new database migration or new environment variable is needed. This still covers only **20 introductory authorial lessons** and should not be confused with a complete school curriculum.

See [Sprint 1.3 notes](docs/KOGNOS_SPRINT_13_SUBJECTS_TRAILS.md) for screen responsibilities, implementation details and limitations.

## What's new in v1.2 — source workspace UI and reliable access states

- **Guest-friendly source page:** replaces the large passive sign-in banner with a compact account status card and working **Sign in to my account** button using the existing Kognos authentication modal. Successful sign-in from this page keeps the user on **Matrices & Notices**, rather than unexpectedly redirecting to the dashboard.
- **Accurate data states:** a guest, loading session, failed Supabase read, authenticated reader, and server-authorized editor are distinct. Guests and failures **never claim that zero topics were approved**; totals appear only after a successful authenticated catalog load.
- **Editorial workspace:** adds compact catalog metrics, a clearer official-sources panel, and **Import document** / **Review candidates** tabs, including an institution filter and local search for pending proposals.
- **Responsive layout:** improves narrow desktop and mobile stacking, keyboard focus, loading indicators, and reduced-motion behavior while preserving the Kognos color system.
- **Same server-side permissions:** `KOGNOS_EDITOR_USER_IDS` is only read by the protected API; it is not a sign-in method or browser permission toggle. The application must recognize a valid Supabase account before checking editor eligibility. There are no schema migrations for v1.2.

**Local editor setup:** Create `apps/web/.env.local` if missing (copy `apps/web/.env.example`), preserve your existing Supabase/NVIDIA settings and add `KOGNOS_EDITOR_USER_IDS=<UUID from Supabase Authentication > Users>`. Keep `.env.local` out of source control. Apply migration `0006` if not already applied, restart the Next.js server, then **sign in to the Kognos app with that exact Supabase user**. Navigate to **Matrices & Notices**. A server-confirmed editor will see the restricted editorial workspace. If the page says *guest*, use its sign-in button; if it says *read only*, compare the authenticated account's User UID with the server's allowlist.

See [Sprint 1.2 notes](docs/KOGNOS_SPRINT_12_SOURCE_WORKSPACE.md). Authentication and editorial permissions have not been bypassed or relaxed.

## What's new in v1.1 — source-backed exam preparation with editorial review

- **Matrices & Notices page:** view human-approved, versioned topic references and the relevant institution's official source URL, edition, and short supporting excerpt.
- **Restricted source ingestion:** Kognos editors can fetch HTML from a narrowly allowlisted official HTTPS domain or paste extracted PDF text. Raw PDF downloading/parsing is **not** implemented yet. Redirects, arbitrary network hosts, oversized pages, and unsupported MIME types are blocked.
- **AI-assisted extraction, not automatic publication:** the NVIDIA model proposes up to 20 curriculum topics with verbatim supporting excerpts. The server rejects any proposed quote that does not appear in the submitted text. Editors must approve each topic before it becomes available in the verified source catalog. Pasted transcripts still require checking against the linked original document.
- **Versioned provenance:** stores institution, edition, source link, SHA-256 of consulted text, editorial status, reviewer and review date. Document text is not stored in the database; only short evidence snippets are retained.
- **Question generation integration:** students can choose a human-approved topic in the existing AI generator. The server verifies topic/source approval again before building the prompt, and links resulting private questions to the approved topic. If no topic is approved, the existing **editorial** suggestions are still available and are labeled accordingly.
- **New migration:** apply `supabase/migrations/0006_exam_source_catalog.sql` after 0005. A server-side `KOGNOS_EDITOR_USER_IDS` allowlist is required to import or moderate sources. Never set this list via a browser-exposed environment variable.

See [Sprint 1.1 notes](docs/KOGNOS_SPRINT_11_SOURCE_MATRICES.md). **No automatic polling of institutional websites, PDF parser, official exam-frequency prediction, or official publisher endorsement is claimed.**

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


## What's new in v1.7 — Login-first experience and reliable profile restoration

- A standalone, responsive **sign-in/create-account screen is the entry point** when Supabase is configured. No anonymous onboarding before authentication.
- Returning users with a saved onboarding profile are sent straight to their personal dashboard after Supabase restores the persisted session. New authenticated users without saved study preferences see the five-step personalization flow once.
- Previously saved legacy profiles missing the newer `completedAt` marker are recognized when substantive preferences already exist; a missing profile or an empty record still requires onboarding.
- Failed Supabase profile queries now show an **explicit retry/configuration error**, never a misleading fresh onboarding flow.
- The session is persisted by Supabase Auth and sign-out returns to the login page. Onboarding settings remain editable from inside the app without creating a second account.
- When cloud configuration is absent, the app displays setup guidance rather than creating a misleading local account.
- No SQL migrations or additional secrets are required for v1.7; the existing `public.profiles` schema must be functional. See `docs/KOGNOS_SPRINT_17_AUTH_ROUTING.md`.

## What's new in v1.6 — Onboarding recovery and a scalable AI bank

- Correctly centered iconography in onboarding preference and accessibility chips (keyboard and screen-reader labels retained).
- Actionable feedback for the Supabase `public.profiles` schema-cache error. **This is a database migration issue**: install `0001` before `0003`, and run all other numbered migrations in order. See [`docs/KOGNOS_SUPABASE_PROFILE_SETUP.md`](docs/KOGNOS_SUPABASE_PROFILE_SETUP.md) and the read-only `supabase/diagnostics/check_core_setup.sql`.
- The original **20-item demonstration bank** is now explicitly labeled. The small single-item practice result is compact, shows **current-session** accuracy, and allows returning, retrying or switching to AI.
- Anonymous visitors can open the existing sign-in dialog directly from AI or demonstration practice; signing in preserves the Question Bank or Mock Exams route.
- The **private AI question bank** now uses authenticated owner-scoped server filtering and **40-question paginated results**, with an explicit total and a **Load more** action. This replaces the former 100-row API cap and 20-row visual preview.
- Generation allows requesting **up to 10 original questions** via two sequential, quota-controlled, five-question NVIDIA calls. Each batch is server-reviewed, saved privately, and available in the mock pool. Duplicate prompts within the same student's topic are not added twice.

### Scope and setup

The app does **not** silently generate an unlimited public question catalog: the student must sign in, initiate generation, have valid Supabase and NVIDIA server configuration, and have remaining AI quota. Generated items are personal, original and automatically reviewed, **not certified official questions**. Server-side pagination does not alter answer-key access controls. Existing Supabase migrations through `0007` remain required; v1.6 introduces **no new database migration**.

## What's new in v1.9 — clearer provider setup and compact AI study screens

- Added a read-only, client-facing provider readiness check for the AI question generator. Missing server-side Supabase/NVIDIA configuration is displayed once in a compact, accessible panel with a setup guide and a retry action; no environment variable values are returned to the browser.
- Generation is disabled when the server reports that required credentials are not present, but existing question-bank browsing remains available when only NVIDIA is missing.
- The private AI question bank no longer displays a misleading count of zero when the server cannot access Supabase. It shows an unavailable state without suggesting that saved records were deleted.
- Replaced lengthy infrastructure error banners in Learning Paths and My Subjects with small non-destructive sync notices, preserving demonstration progress.
- Rebalanced the generator filters and made editorial source details collapsible; refined the selected trail's progress and next-lesson layout for desktop, tablet and mobile.
- No database migration, new third-party dependency or changes to the private keys are required. Set credentials in `apps/web/.env.local` locally or in the hosting provider's server-side environment, and restart/redeploy. See `apps/web/.env.example`.