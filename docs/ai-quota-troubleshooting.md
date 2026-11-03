# AI quota troubleshooting (Kognos)

The Kog tutor and AI question generator share the same authenticated-user daily quota.
The default is **20 reserved uses per UTC day**, configured on the **server** by
`AI_DAILY_REQUEST_LIMIT` (clamped from 1 to 100). Each question-generator batch
counts as one use, not each question or individual NVIDIA model call.

## Why failed requests used to consume the quota
Previous versions called `reserve_ai_quota` before contacting NVIDIA and did not
release the use after provider errors. The quota could run out even without a saved
question or tutor answer.

## Apply migration 0008
In your Supabase project SQL Editor run:
`supabase/migrations/0008_ai_quota_failed_provider_refunds.sql`

The migration is designed to preserve all existing usage records. It adds
`total_attempts`, caps attempted calls at **2 × the daily use limit**, and
grants a server-only `refund_ai_quota` function. Run once, then:
```sql
notify pgrst, 'reload schema';
```

New server handlers refund the reserved use when the NVIDIA provider rejects a
request before a usable response (including 401, 403, 429, and 5xx except timeout).
Provider timeouts, successfully generated but pedagogically rejected questions,
duplicate questions and provider responses failing local validation **remain charged**
because inference may have been performed. This protects server API budgets.

Both counters reset at **00:00 UTC**. In São Paulo this is **21:00**.

### Inspect your personal usage (SQL Editor)
Use your authenticated account UUID from Supabase Auth → Users, without pasting
tokens or secret keys in chats or code:

```sql
select quota_day, used, total_attempts, updated_at
from public.ai_daily_quota
where user_id = 'PASTE_ACCOUNT_UUID_HERE'
order by quota_day desc limit 7;
```

### Increase the limit for local development (optional)
In `apps/web/.env.local`, set `AI_DAILY_REQUEST_LIMIT=40` (maximum 100)
and restart the Next.js server. Set server-side environment variables on your host
for public deployments; changing `.env.local` does not change a hosted site.
This does **not** increase your NVIDIA provider credits, prevent NVIDIA 429 errors
or undo prior failed attempts. Higher quotas can incur higher API usage.

Never remove authentication, row-level security, or quota limits to solve a
temporary provider error.
