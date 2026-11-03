# Kognos v1.1 — Institution Source Catalog and Editorial Review

## Product scope

The previous AI question generator used **illustrative editorial subject maps**. The new source catalog provides a separate, explicitly reviewed stream of topics grounded in short verbatim evidence from a specified edition of a source document. Both remain visible, but editorial guesses are not mislabeled as confirmed official curriculum.

## Import and moderation workflow

1. An authenticated editor whose Supabase Auth UUID is in the private server environment variable `KOGNOS_EDITOR_USER_IDS` opens **Matrices & Notices**.
2. The editor selects ENEM, ETEC or FUVEST, enters the edition/title, and either retrieves an official **HTML** source via restricted HTTPS GET or pastes curricular text extracted from a PDF. Ingestion disallows redirects, arbitrary hostnames, unsupported MIME types, and responses larger than 500 KB.
3. The server computes the SHA-256 fingerprint of the consulted text; a second import with the same institution, edition, URL and fingerprint is rejected. It reserves a daily AI request against the existing user quota.
4. NVIDIA AI proposes up to 20 distinct subjects/topics, each citing a **literal substring** of the source text. Structural validation rejects unknown subjects, absent evidence, duplicates, malformed JSON and invalid lengths.
5. Proposals are saved **pending**. No proposed topic becomes available automatically. A server-authorized editor checks the linked source and explicitly accepts or rejects each proposed topic. The source becomes active when at least one associated topic has been approved.
6. The authenticated student's generator retrieves only approved catalog records. It submits the approved **topic ID** (not arbitrary document text), and the server verifies both the topic and source before including the excerpt in the generation context. New questions retain a `source_topic_id` relationship in the private question bank.

**Critical distinction:** HTML retrieved directly is still not guaranteed to represent the authoritative programme for the claimed edition. Manual transcripts cannot be cryptographically verified against the linked PDF. A human reviewer must verify both the edition and the excerpt. Approved means *approved by the Kognos editorial team*, **not endorsed or homologated by the exam institution**.

## Official entry points

- ENEM / INEP reference matrices: https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem
- ETEC Vestibulinho official portal: https://vestibulinho.etec.sp.gov.br/
- FUVEST 2027 programme index: https://www.fuvest.br/

The site entry points are for verification, not guarantees that every linked page contains importable syllabus text. PDF programme content is supported via **manual text entry only** in this sprint.

## Security and deployment

Run `supabase/migrations/0006_exam_source_catalog.sql` after migrations 0001–0005. The two new tables have **RLS enabled, no anon/authenticated table grants or client policies**, and are only accessed via server-side service-role operations after authenticated route checks. Existing generated question keys remain private.

In `apps/web/.env.local` set:

```dotenv
KOGNOS_EDITOR_USER_IDS=YOUR_SUPABASE_AUTH_UUID
```

Multiple UUIDs may be comma-separated. Do not commit this file or use the `NEXT_PUBLIC_` prefix for this setting. The NVIDIA and Supabase configuration from earlier sprints is still required. There is no editor by default, so an unconfigured public instance is read-only.

## Limits and next tasks

- No PDF parser, automatic scheduled monitoring, full historical-diff viewer, or frequency-weight predictions.
- Edits to a source programme produce a new fingerprinted source record; **previous versions are retained**.
- Extracted topics are evidence-backed proposals, but source passages may contain misleading or malicious text. The model is instructed to treat this as data; human review remains necessary.
- No change to Kog's answer-key protection or the public question bank publication policy.
- Before production: browser/device QA, rate-limit audit, pagination of large catalogs, editorial audit log and source snapshot verification.