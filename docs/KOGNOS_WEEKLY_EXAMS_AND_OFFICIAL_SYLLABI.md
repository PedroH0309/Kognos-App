# Kognos — Curriculum scope and never-reused weekly exams

## Delivered
- The onboarding lets students select a named exam. When an existing learner switches exams, the UI asks whether to keep old topics alongside the new syllabus or replace the scope. Past answers and manually scheduled work are preserved.
- The planner displays a searchable preparatory checklist across disciplines, and links to authoritative official sources. Its scheduled suggestions prioritize observed errors and topics not previously assigned.
- A separate weekly exam screen accepts any integer from 20 through 90. The server creates a fixed selection for the current week and reopens it on later visits.
- Session questions are allocated by a service-role-only SQL function in one transaction. A unique (user_id,question_id) reservation blocks the same question record from being used in later weeks. Grading is through the existing protected one-attempt RPC.
- Students can explicitly generate fresh authored questions via the existing independently reviewed AI batches. If too few new approved items exist, the weekly exam cannot start; no repeats or invented filler are used.
- The .ics export option and its unused utility are removed. The Kognos calendar remains internal.

## Deployment
Apply supabase/migrations/0012_weekly_unique_exams.sql after migrations 0001–0011 in the Supabase SQL Editor. Ensure migrations 0005/0009 and protected server credentials are configured. AI generation still requires a working provider for generation and independent review.

## Official source portals
- ENEM: https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem
- FUVEST (Programa 2027): https://www.fuvest.br/
- UNESP/VUNESP 2027: https://www.vunesp.com.br/VNSP2514
- ETEC manual: https://vestibulinho.etec.sp.gov.br/documentos/
- SARESP official guidance: https://atendimento.educacao.sp.gov.br/knowledgebase/article/SED-08378/pt-br

## Limitations
The catalog is a broad editorial study outline, not a fully transcribed, independently verified edition-specific syllabus. Mandatory readings, skills by grade, and precise exam modalities must be checked against their original documents. Generated questions are original authored items, not historical official questions. Reservation prevents reuse of a question ID, but does not guarantee different wording or concepts across newly generated prompts. The exam is created on demand; no background timer or automatic cron exists. Model quotas and pedagogical review may restrict available quantity.

## Verification
Run npm test, npm run test:design, npm run typecheck and npm run build; then manually validate mobile, RLS, 20-question and 90-question cases across consecutive weeks.
