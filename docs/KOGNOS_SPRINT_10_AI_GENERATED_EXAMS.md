# Kognos v1.0 — AI-Generated Questions & Personal Mock Exams

## Scope delivered

1. **Institution-aware generation.** Signed-in learners choose ENEM, Vestibulinho ETEC or FUVEST, a subject, a curated topic, an educational difficulty and 1–5 items per request. The server prompts the configured NVIDIA model to produce original multiple-choice items in Portuguese.
2. **Second-pass review.** A separate model request re-solves and screens the items. Only unique, structurally valid questions with 5 distinct choices and an agreed answer index are stored. This is **automated review**, not human editorial verification or psychometric calibration.
3. **Private bank and mocks.** Auto-reviewed questions go straight into their creator's personal bank and can be practiced individually or included in a timed-elapsed mock session. Mocks show feedback at the end; practice shows it after submitting each answer.
4. **Server-side grading.** Both correct answer and explanation are stored in a private table with RLS enabled and no browser-user grants or policies. The authenticated submission endpoint resolves ownership and computes correctness server-side; the GET and generation responses expose only prompts, options and metadata.
5. **Kog context.** The floating tutor receives only a question UUID. The server fetches an owner-scoped question; before any recorded attempt, Kog receives no key; after a recorded practice attempt it can receive canonical feedback.
6. **Cited institution entry points.** A versioned editorial blueprint provides source-page links and a starter topical map; it **does not automatically scrape, download, interpret or monitor exam PDFs**. Topic mappings are illustrations, not formal claims about what an exam will contain.

## Database deployment

Run **`supabase/migrations/0005_ai_question_bank.sql`** in Supabase SQL Editor after earlier migrations. The private tables:

- `public.kognos_ai_questions`: generated private questions, including hidden answer and reference explanation. `review_status = auto_reviewed` unless a future editorial workflow approves them.
- `public.kognos_ai_attempts`: append-only private answer history, graded in the server route.

RLS is enabled with **no client policies**, and grants to `anon` and `authenticated` are revoked. Only the service-role backend can access these tables. Never allow client-side `supabase.from('kognos_ai_questions')` queries.

Existing `reserve_ai_quota` in migration `0002` is shared between the tutor and generation; each generation uses one daily slot, but makes **two** external NVIDIA requests, which can increase costs. Rate limits and paid-provider billing must be monitored before public scaling.

## Configuration

Continue using server-only `NVIDIA_API_KEY`, `NVIDIA_MODEL`, optional `NVIDIA_API_BASE_URL`, and Supabase's URL, publishable key, server secret and JWKS URL. No new environment variable is required. The original public-facing key does not authorize direct database access to the private tables.

## Supported official entry points (checked 2026-11-01)

- **ENEM:** INEP, *Matrizes de Referência do ENEM* (2026), https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem
- **ETEC:** Vestibulinho Etec, *Dúvidas Frequentes / Exame*, https://vestibulinho.etec.sp.gov.br/duvidas-frequentes/ (different selection types may have different requirements)
- **FUVEST:** FUVEST, *Programa do Vestibular 2027*, https://www.fuvest.br/

The blueprint topic lists were authored as **examples for generation**, not imported from the full official PDFs. Do not describe them as verified verbatim official matrices. A future editorial ingestion system should support PDF snapshots, rights checks, passage citations, versions/effective dates, and explicit approval before such evidence grounds new generation prompts.

## Testing and limitations

- Unit tests validate allowlisted choices, bounds, valid JSON, duplicate distractor rejection, review agreement and public answer-key omission.
- A generated question can still be wrong even if two calls agree. Neither source inclusion nor model agreement proves equivalence to a real exam.
- The mock timer shows elapsed time; it is **not yet a regulated exam proctor or enforced time limit**.
- Generated items are personal and do not flow to a shared public pool until an explicit future editor approval workflow exists.
- One generation = up to 5 items, and the bank endpoint returns the latest 100. A larger bank needs pagination, search and deduplication.
- There is currently no continuous crawl/monitor of institutional documents and no training of NVIDIA model weights. The model conditions on controlled prompts and a versioned educational blueprint.
- The AI-generated assessment history is separate from the historical 20 authorial demonstration questions; it is not yet merged into the adaptive-review scheduler.