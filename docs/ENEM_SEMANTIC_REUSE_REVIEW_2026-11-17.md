# ENEM-first semantic reuse: review ledger (17 November 2026)

This document is a **review queue**, not a certification of curricular equivalence. The Kognos editorial ENEM topic names are **not** official Inep competency or skill identifiers. Do not assign official competence/skill codes without verifying the official matrix and the specific scope of each lesson.

## Verified implementation boundaries

- `canonicalExamTopicMappings()` resolves a single canonical authored lesson object for each approved exam-topic reference.
- `reviewedSemanticAliases` contains an explicitly exam-scoped, differently titled Portuguese link for *Coesão, coerência e progressão temática*; its rationale must remain subject to pedagogical review.
- `reviewedPartialAssociations` is advisory only. Its entries must **never** increment integral coverage.
- `officialProvaoCanonicalGradeMappings()` is grade-scoped and distinct from the broad editorial SARESP blueprint. Do not infer official Provão coverage from SARESP membership.
- `canonicalReuseAudit().actualPersistedDuplicatesRemoved` is zero. Reusing object references does not mean historical database records were deleted.

## ENEM-first complementary teaching queue

The following **partial** source/target comparisons are recorded in `canonical-lesson-reuse.ts`. They do not authorize full aliases.

| ENEM editorial target | Existing source overlap | Required complement before full coverage |
| --- | --- | --- |
| Porcentagem e razão | Porcentagem, taxas e índices | General ratios, proportionality and distinct models |
| Probabilidade e estatística | Eventos e probabilidade simples | Statistical measures, sampling, distributions, conditional probability |
| Ecologia e impactos ambientais | Conceitos básicos de Ecologia | Human impacts, pollution, conservation and biogeochemical cycles |
| Intertextualidade e argumentação | Intertextualidade e interdiscursividade | Thesis, evidence, argumentative structure and evaluation |
| Urbanização e globalização | Questão urbana no Brasil e no mundo | Global flows, division of labor, globalization and geopolitics |
| Variação linguística e norma-padrão | Distinção entre variedades linguísticas | Prescriptive standard and normative adequacy |
| Morfologia e classes de palavras | Classes de palavras | Word formation, morphology and inflection |
| Concordância, regência e crase | Concordância nominal e verbal | Nominal/verbal government and crasis |
| Semântica e figuras de linguagem | Níveis de significação do texto | Figures of speech and further semantic relations |
| Gêneros textuais e tipos de discurso | Modos de organização do texto | Genre conventions and discourse types |
| Citologia | Organização celular dos seres vivos | Membranes, transport, organelles, metabolism, cell division |
| Células, organelas e membranas | Organização celular dos seres vivos | Organelles, membrane structure and transport |

**Caution:** This table is a review ledger of editorial overlap, not a claim that every target is an ENEM entry or currently lacks a deep lesson. Verify each target's `exams` membership and canonical coverage at runtime before scheduling or reporting it as a gap. *Célula e saúde* is also registered as a partial association but may belong to a different exam; do not count it as ENEM without checking.

## Required next execution gate

1. Execute `enem-gap-worklist.test.ts` and archive its `KOGNOS_ENEM_GAP_WORKLIST` JSON. Record total entries, distinct exact titles, unique canonical deep IDs, full links, partial-only targets and missing, by subject.
2. Cross-check `main`, open PR branches, official Provão leaves and all authored deep sources. Approve only scope-complete links after reviewing chapters, examples, questions and learning objectives. Record partial references otherwise.
3. Author five specific missing ENEM lessons where feasible, each with three progressive substantial chapters, three worked examples, three distinct A–D questions, correct answers and detailed explanations. Keep original/unofficial/unreviewed status.
4. Run curriculum regression, two-user security, design, TypeScript and build; report only confirmed results. Do not merge or deploy without review.

No new coverage, alias, lesson, or duplication reduction is asserted by this documentation-only change.
