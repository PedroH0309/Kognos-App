# Canonical advisory reuse across authored libraries — 2026-11-13

## Scope

The existing verified partial-reference resolver previously called `deepProvaoLesson(source)` directly. This excluded an authored source that exists only in the ENEM deep library. The resolver now uses the same ID-checked, shared authored source lookup as full canonical mappings, which consults both the Provão and ENEM deep libraries. The unresolved-candidate audit uses that lookup too.

This is a **resolver consistency correction**, not a newly approved semantic equivalence. A partial reference remains advisory, retains the target's historical ID, documents missing scope, and never enters `canonicalLessonForExam` as full coverage. The new regression test checks source identity and guards against a partial reference granting a full alias.

## Accounting and validation

New authored lessons: **0**. Newly approved full aliases: **0**. Persisted records deleted: **0**. No changes to schema, Auth, RLS, progress, answers or deployment. The ENEM baseline in `docs/enem-semantic-reuse-audit-2026-11-13.md` remains historical until the updated checkout is measured by CI. Do not claim coverage increases from this change alone.

Run `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck`, `npm run lint`, and `npm run build` on the PR branch; verify the GitHub Actions conclusion for the final commit. This documentation does not assert those commands have passed.

Next: prioritize audited full-scope ENEM aliases, then author five deep lessons when viable. Official Inep skills must be verified independently of editorial Kognos topic titles. No merge or deployment without review.
