# Kog Tutor — OpenAI API

The Kog tutor can use OpenAI's Chat Completions API without changing the Groq
question generator or Gemini/Groq question review. All requests are made by the
authenticated **server**, never directly from the browser.

## Setup on Windows (Kognos local development)

Create an OpenAI API project/key in https://platform.openai.com/api-keys and
activate API billing/credits at https://platform.openai.com/settings/organization/billing/overview
if necessary. A ChatGPT subscription does **not** automatically pay for API use.

Add or update only these values in `apps/web/.env.local`:

```dotenv
OPENAI_API_KEY=YOUR_PRIVATE_OPENAI_API_KEY
AI_TUTOR_PROVIDER=openai
AI_TUTOR_MODEL=gpt-6-luna
```

Preserve existing Supabase and Groq/Gemini variables. Keep `.env.local`
out of Git and never prefix private keys with `NEXT_PUBLIC_`.

From the **Git repository root**, stop the existing development server and run:

```powershell
git pull origin main
npm run dev
```

Open Kog and send a short question, e.g. “Explique porcentagem com um exemplo.”
The server console should show a line like:

```text
[KOGNOS][AI] tutor openai HTTP 200 ... ms
```

The Kog footer should identify OpenAI as the processor after server readiness
has been fetched. Responses are subject to the shared Kognos daily quota and
the separate OpenAI project billing limits.

## Architecture

- Generation: `AI_GENERATE_PROVIDER=groq`, `AI_GENERATE_MODEL=openai/gpt-oss-120b`
- Review: `AI_REVIEW_PROVIDER=gemini`, with the existing Groq fallback
- Kog: `AI_TUTOR_PROVIDER=openai`, `AI_TUTOR_MODEL=gpt-6-luna`

For low-latency Kog tutoring, GPT-6 Luna Chat Completions is called with
`reasoning_effort: none` and `max_completion_tokens`, not `max_tokens` or
`temperature`. Existing login, profile preferences, study-context checks,
chat history sanitization and Supabase daily quota remain in place.

## Troubleshooting

- **Tutor not configured:** confirm the exact 3 OpenAI env vars, save the file
  and restart the Node.js process (and set the same env vars on any hosting).
- **HTTP 401/403:** check whether the API key is active and authorized for the
  intended API project.
- **HTTP 404:** confirm `AI_TUTOR_MODEL=gpt-6-luna` and account model availability.
- **HTTP 429:** inspect the OpenAI project's credits, spending and rate limits,
  as well as Kognos's own shared quota.
- **HTTP 200 but no response:** inspect sanitized server logs and the API
  response shape; no provider credentials or question answers are logged.

No database migration is needed.
