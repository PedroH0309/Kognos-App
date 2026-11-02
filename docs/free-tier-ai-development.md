# Kognos: free-tier AI mode for development

**Default: `AI_FREE_ONLY=true`**, including if the variable is absent.

This ensures Kognos routes all tutor, question generator and independent question
review calls to free-tier-eligible **Groq** and/or **Google Gemini** models.
The server refuses to select the OpenAI or NVIDIA endpoints in this mode,
even if previous `AI_TUTOR_PROVIDER=openai` and `OPENAI_API_KEY` values remain.

## Recommended local configuration

Edit `apps/web/.env.local` (do not commit this file):

```dotenv
AI_FREE_ONLY=true

# Use API keys from accounts/projects on the providers' FREE plans.
GROQ_API_KEY=YOUR_PRIVATE_GROQ_KEY
GEMINI_API_KEY=YOUR_PRIVATE_GEMINI_KEY

AI_GENERATE_PROVIDER=groq
AI_GENERATE_MODEL=openai/gpt-oss-120b

AI_REVIEW_PROVIDER=gemini
AI_REVIEW_MODEL=gemini-3.1-flash-lite

AI_TUTOR_PROVIDER=gemini
AI_TUTOR_MODEL=gemini-3.1-flash-lite
```

Groq key: https://console.groq.com/keys  
Gemini key: https://aistudio.google.com/api-keys  
Groq rate limits: https://console.groq.com/docs/rate-limits  
Gemini prices/free tier: https://ai.google.dev/gemini-api/docs/pricing

**You do not need `OPENAI_API_KEY` or `NVIDIA_API_KEY`.** Remove their
old values from your local configuration if you are not using them elsewhere.
Do not expose private keys with `NEXT_PUBLIC_` or include them in screenshots.

To apply the code change:

```powershell
cd D:\Kognos\Kognos-App
git pull origin main
# Stop any previous Next.js server with Ctrl+C.
npm run dev
```

Open `/api/ai-status` and confirm `freeOnlyMode: true`,
`generatorProvider: "groq"`, `reviewerProvider: "gemini"`,
and `tutorProvider: "gemini"`. These are configuration checks, not live
availability/usage checks.

## Fallbacks

| Purpose | Main free provider | On HTTP 429 from main provider |
| --- | --- | --- |
| Generate | Groq GPT-OSS 120B | Gemini 2.5 Flash (one attempt) |
| Independently review | Gemini 3.1 Flash-Lite | Groq GPT-OSS 20B (one attempt) |
| Tutor Kog | Gemini 3.1 Flash-Lite | Groq Llama 3.1 8B Instant (one attempt) |

One request batch runs at a time. Five questions are requested in one batch
rather than generating multiple parallel batches. Incomplete independent
reviews still receive targeted re-review; actual pedagogical rejections must
be regenerated, not silently approved.

429 responses include a sanitized provider label and `Retry-After` seconds
when supplied. There is no uncontrolled retry loop. If both providers'
quotas have been exhausted, new requests will fail until the quotas reset.

## What "free-only" guarantees, and what it does not

The mode guarantees that the **application code does not invoke OpenAI or
NVIDIA APIs** and restricts Groq and Gemini to documented
free-tier-eligible model IDs. Groq's GPT-OSS models have an `openai/`
prefix but are **hosted and served by Groq**, not by the paid OpenAI API.

**It does not guarantee unlimited use or zero billing on a paid provider
account.** Tokens and requests on Gemini paid-tier projects can be billed
even for models available on a free tier, and a paid Groq plan may also incur
charges. Create/use free-plan projects, inspect billing on both provider
dashboards, and enable provider-side spend caps where available.

For future SaaS rollout, paid integrations can be explicitly enabled by
`AI_FREE_ONLY=false`, with separate billing setup, server-side quotas,
authentication and abuse controls. Do not switch that setting until you
intend to pay. This mode does not eliminate hosting or Supabase costs.

## Testing

- Authenticate and open Kog; ask a conceptual Mathematics question.
- Generate one question and verify independent review and Supabase storage.
- Generate 5 questions; Kognos must not start multiple simultaneous provider
  requests in free mode.
- Check server logs for `[KOGNOS][AI]` phase and provider.
  With free mode, no log line may indicate `tutor openai` or `nvidia`.
- On a 429, the system may switch once to the other free provider. If that
  provider also returns 429, the interface should provide a rate-limit message
  rather than retry indefinitely.

No Supabase SQL migration is necessary.
