# Kognos — Intelligent Learning Platform

> **PROPRIETARY SOFTWARE — ALL RIGHTS RESERVED.** Kognos is **not open source**. Unauthorized reuse or commercialization of its source code is prohibited, subject to GitHub's terms and applicable legal exceptions. See [LICENSE](LICENSE).
>
> **Want to contribute?** Open an issue or submit a pull request following [CONTRIBUTING.md](CONTRIBUTING.md). Because this repository is private, ask the maintainer for collaborator access first.

**Version 0.5.0** — A visual redesign of the existing screens, unified official color palette, custom scrollbars, collapsible sidebar, and secure local NVIDIA API configuration.

Kognos evolved from the FOCO prototype. The earlier prototypes were retained in the original v0.5 distribution; legacy ZIP archives were omitted from this GitHub package to avoid unnecessary redistribution. The main application uses **Next.js 16 (App Router), React 19, TypeScript, Supabase, and a secure NVIDIA NIM AI gateway**.

## Features available in this version

- **Original branding:** Kognos K logo and illustrations in `apps/web/public/brand/`.
- **Five-step onboarding:** preferred name, exam or learning goal, proficiency level, study schedule, learning methods, accessibility options, and review.
- **Accessibility preferences:** ADHD/dyslexia-related adaptations are optional. The selected focus and reading accommodations can be applied without storing or sending a diagnosis to the AI.
- **Local demo mode:** onboarding and preferences persist in the browser's `localStorage`. No credentials are needed to explore the interface.
- **Supabase multiuser mode:** email/password registration and login, email verification according to project settings, and independent PostgreSQL profiles protected by row-level security (RLS).
- **NVIDIA-powered tutor:** authenticated `/api/tutor` endpoint, atomic per-user daily request limits, transparent notice of third-party processing, and a personalized teaching prompt.
- **Profile and account management:** profile photo (local visitor image or private Supabase storage), display name, unique username, bio, email/password changes, password recovery, and password visibility for newly typed values only.
- **Appearance:** light and dark themes, official design tokens, custom-styled controls, scrollbars, collapsible sidebar, module search, and mobile bottom navigation.
- **Kog:** an original vector tutor mascot with a balanced, teacher-like personality.
- **Working demo exercises:** 20 original questions, subject-specific quizzes, explained answers, recorded attempts, and performance summaries.
- **Weekly planning:** local or cloud-synced tasks, an initial study-plan suggestion, completion, and deletion.
- **Multiple learning goals:** including school exams, university entrance exams, competitions, and self-directed learning.
- **Reusable learning engine:** preserved in `packages/education-engine`.
- **Automated tests:** for learning logic, tutor rules, and interface configuration.

**Not yet implemented:** full official past-paper simulations, online question-bank CRUD, essay grading, skill-mastery integration with synced exercises, and fully server-graded official assessments. In v0.4, only tasks and demo attempts were synchronized. The dashboard displays available user data rather than fabricated statistics. Unfinished features are presented as upcoming.

## Getting started on Windows — demo mode

1. Install Node.js 22 LTS or another release compatible with Next.js 16 (minimum Node.js 20.9).
2. Clone this repository, or download and extract its source files to a folder.
3. Open the project root in VS Code and run:

```powershell
npm install
npm run dev
```

4. Open **http://localhost:3000**. You can complete onboarding and explore the demo without configuring Supabase. The remote AI tutor requires an authenticated account and the setup described below.
5. Run `npm test` for the local logic checks and `npm run test:design` for design/configuration checks.

**Validation note:** In the original build environment, dependency installation failed because `registry.npmjs.org` returned `EAI_AGAIN`. Dependency-free Node.js tests completed, but a full Next.js production build was not verified there.

## Configure Supabase authentication and NVIDIA AI

### 1. Prepare Supabase

1. Open [Supabase Dashboard](https://supabase.com/dashboard) and select your project.
2. Run these SQL files in the **SQL Editor**, in the following order:
   - `supabase/migrations/0001_core_schema.sql`
   - `supabase/migrations/0002_kognos_onboarding_ai.sql`
   - `supabase/migrations/0003_account_and_avatars.sql` (required for usernames, bios, and profile photos)
   - `supabase/migrations/0004_demo_cloud_sync.sql` (demo activity synchronization)
   - `supabase/seed/seed.sql` (optional initial demonstration catalog)
3. In **Authentication → URL Configuration**, set the development Site URL to `http://localhost:3000` and configure the permitted redirect URLs.
4. Configure **Authentication → Providers → Email**, including your email confirmation rules. Validate email verification and privacy flows before a public release.

### 2. Create `apps/web/.env.local`

On Windows, run **`CONFIGURAR_KOGNOS.bat`** to create and open the private environment file. Alternatively, copy `apps/web/.env.example` to `apps/web/.env.local` and fill in the values:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
SUPABASE_SECRET_KEY=YOUR_SERVER_SECRET_KEY
SUPABASE_JWKS_URL=https://YOUR-PROJECT.supabase.co/auth/v1/.well-known/jwks.json
NVIDIA_API_KEY=YOUR_NEW_NVIDIA_KEY
NVIDIA_MODEL=meta/llama-3.3-70b-instruct
NVIDIA_API_BASE_URL=https://integrate.api.nvidia.com/v1
AI_DAILY_REQUEST_LIMIT=20
```

The project's Supabase URL and publishable key are already included in `apps/web/.env.example`. The complete secret key is **not** included.

**Security:** Rotate any NVIDIA API keys previously exposed in a chat or elsewhere. Never publish or commit `apps/web/.env.local`. Never use `NEXT_PUBLIC_` for `SUPABASE_SECRET_KEY` or `NVIDIA_API_KEY`; only non-secret browser configuration should have that prefix.

The NVIDIA model is configurable. If the default model is not available to your account, select an authorized model at [NVIDIA Build](https://build.nvidia.com/).

### 3. Start the application

```powershell
npm run dev
```

Sign up, verify your email if required, complete onboarding, and open **Kog · AI Tutor**. The interface displays a privacy notice: relevant messages and educational context are processed by NVIDIA, without a repeated checkbox on every message. The backend verifies the session, enforces usage limits, and forwards the request to the configured provider.

## Security, privacy, and operating limits

- Server-side API keys must never be returned to the browser or embedded in client bundles.
- AI conversations are not persisted in the database in this version. Chat history exists temporarily in the current browser tab. **Messages sent to the tutor are processed by NVIDIA's AI infrastructure.**
- Providers and models may impose limits and usage charges. Monitor provider billing before allowing public access.
- Usage quotas apply **per authenticated user**, not per IP address. Additional signup-abuse protections, monitoring, moderation, and security reviews are required before launch.
- Services intended for minors require appropriate privacy policies, safeguards, and legal review.
- ADHD/dyslexia accommodations are optional interface preferences, not medical diagnosis or clinical assessment.
- Kog is an original teaching persona informed by sound educational practices, not an imitation of a real instructor.
- This repository is **a development beta, not a production-certified public service**.

## Project structure

```text
apps/web/
  public/brand/           Original logo, icons, and illustration
  src/app/                Application routes, layouts, styles, and protected AI API
  src/components/         App UI, authentication, onboarding, dashboard, and tutor
  src/lib/                Student profiles, Supabase, and AI prompt
packages/education-engine/  Reusable learning engine
supabase/migrations/        Database schema, access policies, and AI quota
docs/                      Specifications and architectural decisions
legacy/                    Preserved FOCO prototypes (where included)
```

## Visual design and accessibility

Kognos uses a restrained premium educational style rather than excessive neon or glass effects.

| Design token | Hex | Usage |
| --- | --- | --- |
| Deep Navy | `#101B33` | Sidebar and brand surfaces |
| Slate Navy | `#273A61` | Secondary elements |
| Intelligence Violet | `#5B4DE3` | Primary actions and AI features |
| Progress Cyan | `#38CDE5` | Progress indicators and highlights |
| Soft White | `#F7F9FC` | Light background |
| Cloud Gray | `#EDF1F7` | Secondary light surfaces |
| Graphite | `#202633` | Dark-mode cards |
| Midnight | `#111722` | Dark background |
| Emerald | `#18B78A` | Success |
| Amber | `#F0AD4E` | Warnings |
| Coral | `#E46D75` | Errors |
| Ink | `#1D2638` | Primary light-theme text |
| Slate | `#778398` | Muted text |
| Mist | `#E0E6EF` | Borders |

`apps/web/src/app/design-system.css` defines tokens and light/dark variants for cards, inputs, buttons, forms, profile pages, exercises, and tutor screens. It is imported after older styles to reduce regressions; the legacy CSS can be consolidated as the remaining modules mature.

The application includes customized Firefox and WebKit scrollbars, keyboard navigation, mobile navigation, and a collapsible desktop sidebar. The collapsed state is saved locally in the browser. Accessibility preferences can be changed later.

See `docs/KOGNOS_DESIGN_SYSTEM_V05.md` and `docs/KOGNOS_VISUAL_SPEC_USER.md`.

## Profile, account, and security settings

Open **My Profile** from the sidebar or header avatar to edit the profile picture, display name, username, and bio. Under **Settings → Account & Security**, change your email or password, or request password recovery.

Existing passwords **cannot be displayed** because the authentication system does not store them in a recoverable form. Visibility controls only reveal a password currently being typed.

Cloud profile photos require migration `0003`. Visitor photos and some demo exercise results are browser-local and do not synchronize across devices. See `docs/ACCOUNT_SECURITY.md`.

## NVIDIA tutor configuration

Kog uses the protected route `apps/web/src/app/api/tutor/route.ts`; only the server reads `process.env.NVIDIA_API_KEY`. The default endpoint is:

```text
https://integrate.api.nvidia.com/v1/chat/completions
```

Model availability depends on your NVIDIA account.

**Windows:** run `CONFIGURAR_API_NVIDIA.bat` from the project root. Enter a **new** `nvapi-...` key in the concealed PowerShell prompt and optionally set the model. It writes to the Git-ignored `apps/web/.env.local`. Restart `npm run dev` after changes.

**Linux/macOS:** copy `apps/web/.env.example` to `apps/web/.env.local` and add `NVIDIA_API_KEY=...` directly to that private file.

The tutor requires a valid Supabase session, a configured database with the necessary migrations, and an authorized NVIDIA API key. The tutor presents a notice about external processing without requiring a consent checkbox for each message. This does **not** remove the need for appropriate privacy disclosures or safeguards, especially for minors.

## Testing

Run:

```powershell
npm test
npm run test:design
```

The local tests cover educational logic, profiles, storage behavior, design tokens, scrollbars, secret handling, and removal of the repeated consent checkbox. A complete production build and live Supabase/NVIDIA integration require separately configured services.

## Roadmap

- Safeguards and appropriately designed account flows for minors.
- Full adaptive scheduling with persistent progress using `education-engine`.
- A question bank with verified sources and permitted content licenses.
- Server-graded mock examinations and securely recorded results.
- Skill mastery based on actual exercise and review performance.
- Integration tests for authentication and RLS between separate accounts.
- Additional accessibility, security, and deployment validation.

See `docs/KOGNOS_SPRINT_02.md`, `docs/KOGNOS_AI_EDUCATION.md`, and `docs/KOGNOS_SPRINT_04_SUPABASE.md`.

## Copyright and contributions

**© 2026 PedroH0309. All rights reserved.**

Kognos is proprietary software. Collaboration is welcome through issues and pull requests under the project contribution rules. These permissions do not make the code open source. See [LICENSE](LICENSE), [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and `docs/PROTECAO_E_COLABORACAO_GITHUB.md`.
