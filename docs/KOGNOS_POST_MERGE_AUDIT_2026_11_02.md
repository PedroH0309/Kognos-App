# Kognos — post-merge audit and follow-up fixes (2026-11-02)

## Baseline verified in GitHub

The previous feature PR #45 was merged into `main` at `a7cecd71323c25adaf991a67f6ce8039a1edbd54`; the push workflow passed the existing unit, UI, typecheck and build steps. That proves the repository builds, **not** that the deployed application or every Supabase function was tested with a real account.

## Defects found and fixed in this follow-up

1. **Institution constraints were out of sync.** Migrations 0005 and 0006 restrict `kognos_ai_questions` and `kognos_exam_sources` to ENEM/ETEC/FUVEST, even though the UI and 0012/0013 weekly exam support SARESP and VUNESP. New migration **0014** safely updates the two check constraints without deleting rows or changing RLS. This is required for SARESP/VUNESP generation and editorial imports.
2. **Institutional import allowlist excluded VUNESP and SARESP.** Added the official Fundação VUNESP and São Paulo education domains. HTTPS, exact-host, no credentials and no redirects remain required.
3. **The older question generator topics were absent from the new study catalog.** Every topic from the exam blueprints is now included in the planner and curriculum, so previous weak-topic results can be revisited.
4. **The AI source-extraction route required a NVIDIA key even though the model router supports configured Groq/Gemini.** It now uses the existing configured generation provider; editor permissions and editorial review remain mandatory.
5. **Trivially rephrased generated prompts could re-enter the bank.** Added a conservative text similarity filter, checking a bounded window of 1,000 recent personal questions across subjects. This is not an embedding-based semantic uniqueness guarantee and cannot catch every paraphrase.
6. **Approved sources were not feeding the student study cycle.** The authenticated planner can now load the already editor-approved catalogue from the protected existing route, add reviewed topics to the study list, display their official evidence, and prioritize new reviewed topics when constructing study sessions. Guests and unavailable sources retain the editorial curriculum without claiming verification.

## Required database action

After this PR is merged and the application redeployed, apply `supabase/migrations/0014_expand_supported_exam_institutions.sql` in the Supabase SQL Editor. It is additive with respect to supported exam identifiers and does not erase questions, users, previously reserved weekly exams, or source data. No need to rerun 0012 or 0013.

Verify the check constraints with:

```sql
select t.relname as table_name,c.conname as constraint_name,
 pg_get_constraintdef(c.oid) as definition
from pg_constraint c
join pg_class t on t.oid=c.conrelid
join pg_namespace n on n.oid=t.relnamespace
where n.nspname='public' and t.relname in ('kognos_ai_questions','kognos_exam_sources')
 and c.conname in ('kognos_ai_questions_institution_check','kognos_exam_sources_institution_check');
```

Both definitions should include the five currently supported identifiers. The SQL Editor success message alone cannot prove an authenticated end-to-end experience.

## Operational verification after deployment

1. Log in with a test account, select ENEM, create an assessment of 20 approved items and confirm a second attempt does not reuse stored question IDs.
2. Switch to SARESP or VUNESP and generate a small reviewed batch after 0014. Confirm successful persistence and the correct institutional scope.
3. For an editor configured in `KOGNOS_EDITOR_USER_IDS`, import an official source, review a proposed topic, confirm that **before** approval it is absent from student plans, then confirm that **after** approval the topic and linked evidence appear.
4. Confirm a completed weekly exam produces graded subject feedback and topic priorities, while manual tasks and original data remain intact.
5. Test 20 and 90 item flows on mobile; verify that limited provider quota is reported without inventing or repeating questions.
6. Verify the published site has the latest deployment. Code checks do not test real server credentials, the AI provider's quota, RLS configuration or live school portal updates.

## Source/data limitations

Institutional pages and edition-specific PDFs are references for editorial approval. The generic preparatory tracks are not a legally or pedagogically certified verbatim reproduction of every active exam program. VUNESP is an exam organizer, and the SARESP curriculum is school-grade-specific. A grade-/edition-aware verified source importer is still needed for exhaustive coverage.
