# ENEM-first: CI-extracted coverage snapshot — 2026-11-16

## Provenance and interpretation

Extracted from the untruncated `KOGNOS_ENEM_FIRST_AUDIT` line in GitHub Actions run [43899834816](https://github.com/PedroH0309/Kognos-App/actions/runs/43899834816), job `tests` (133413129414), for PR #120 head `0e5959a7e8846541865f4410c06c331a24cebce8`. Source: `exam-blueprints.ts / exam-syllabus.ts (editorial)`; **not an Inep-official competency/skill certification**. These are computed counts from that checked-out code, not claims of pedagogical homologation.

| Metric | Historical pre-#118 | CI-extracted head #120 | Delta |
|---|---:|---:|---:|
| ENEM editorial entries | 896 | 896 | 0 |
| Exact distinct titles | not reported | 896 | n/a |
| Unique deep canonical lessons | not reported | 192 | n/a |
| Full exam-topic links | 166 | 192 | +26 |
| Missing exam-topic links | 730 | 704 | -26 |
| Advisory partial references | 9 | 9 | 0 |
| Partial-only topics | 2 | 1 | -1 |
| Reviewed semantic links | not reported | 1 | n/a |
| Full links sharing canonical lessons with other exams | not reported | 174 | n/a |
| Unresolved partial candidates | not reported | 3 | n/a |
| Persisted duplicates deleted | not reported | 0 | n/a |

The +26 full-link difference is **not attributable to this PR** and must not be represented as newly authored or newly approved equivalences in this run. A full link shared with another exam is not necessarily a newly approved semantic alias. The CI report does not certify official ENEM skills. Partial references never count as full coverage.

## Subject reconciliation

| Editorial subject | Entries / distinct exact titles | Full links | Missing |
|---|---:|---:|---:|
| Arte | 28 | 11 | 17 |
| Biologia | 105 | 13 | 92 |
| Educação Física | 21 | 11 | 10 |
| Espanhol | 19 | 12 | 7 |
| Filosofia | 42 | 11 | 31 |
| Física | 97 | 12 | 85 |
| Geografia | 75 | 12 | 63 |
| História | 85 | 15 | 70 |
| Inglês | 34 | 12 | 22 |
| Literatura | 49 | 12 | 37 |
| Matemática | 107 | 19 | 88 |
| Português | 70 | 15 | 55 |
| Química | 91 | 14 | 77 |
| Redação | 31 | 12 | 19 |
| Sociologia | 42 | 11 | 31 |
| **Total** | **896** | **192** | **704** |

Português has 1 reviewed semantic link and 1 partial-only topic; other subject-level reviewed semantic links and partial-only topics are zero in this snapshot.

## Next required evidence

1. Compare the 192 full mappings against actual canonical lesson content, scope, grade, and exam objectives; do not equate name similarity with full coverage.
2. Audit the 704 remaining editorial gaps, starting with reusable authored content across all exams and integrated PRs #93, #99, #118; distinguish true full equivalences from partial complements.
3. Record official Inep competence/skill only with verifiable official mapping, separate from editorial subject names.
4. Publish verified alias batches and at least five deep original lessons per viable batch with objective-question quality gates; re-run tests, security, TypeScript, build, and CI. Keep PR draft and do not merge/deploy without authorization.

No new canonical links, authored lessons, or persisted duplicate deletions were produced by the act of extracting this snapshot.
