# Kognos — Question completion, XP and achievements

## Upgrade (required for question completion and achievements)

1. Update the app via `git pull origin main` after PR is merged.
2. In the same Supabase project used by Kognos, run:
   `supabase/migrations/0009_ai_question_completion_and_xp.sql`
   in the **Supabase SQL Editor**, after migrations 0005/0007/0008.
3. The migration preserves all existing questions and attempts and backfills
   `completed_at` for questions with prior answers. It creates a server-only,
   transactional `submit_kognos_ai_answer_once` RPC.
4. Restart `npm run dev`, refresh your browser and sign in.
5. Generate one question, answer it and return to the pending question bank.
   The completed question must no longer be offered as unanswered.
6. Open Conquistas; the answer should have contributed 10 XP for a correct first
   answer or 2 XP for a wrong first answer. Repeated attempts give no more XP.

**Security:** Correct answer keys remain on the server. The RPC locks the owned
question row, atomically records the first attempt and marks it completed. Later
submissions return HTTP 409 and do not write another attempt or credit XP.
There are no public grants to the function and no client-side scoring.

## Generating up to 10 items

Generation is still limited to 5 items per backend request. A choice of 10
produces two batches of 5. If validation or independent AI review approves only
part of a batch, the UI requests only the missing count, up to **three attempts
per batch**. It reports the *actual number saved*. A request for 10 is a target,
not a promise that unreviewed/incorrect questions will be published. More
retries consume provider resources and may use additional shared daily quota.

## Score and achievements

The account's Conquistas page derives its XP and badges from Supabase first
attempts per unique question. The initial set includes:
- First completed question and first correct answer
- 5 questions, 10 correct, 25 questions
- 3 subjects and 3 separate study days
- 3-day active streak and first mock-answer
- 100 XP

XP formula: **10 for a correct first response, 2 for an incorrect first
response**. AI answers are graded server-side; demo-answer correctness is
recomputed from the built-in authored question bank on the server, not a
client-submitted `correct` flag. No badges or points are simulated.
A response during an active training session remains visible for feedback,
but completed questions are filtered from the bank and never offered for another
scored attempt. Previous historical duplicate attempts are counted once, using
the earliest recorded answer.

## Kog message formatting

The Kog system prompt requests plain Portuguese without Markdown markers.
The server also removes formatting markers from prose and keeps code blocks
and inline code intact. Existing chat responses are normalized on display,
so old `**bold**` text will no longer show raw asterisks.

## Limits

Achievements are derived from bounded history queries (max 5,000 AI attempts,
5,000 completed AI question metadata rows and 2,000 demonstration attempts).
The interface explicitly identifies partial histories. This is not an official
exam result or ENEM TRI score.

No new third-party service or provider key is necessary for these features.
