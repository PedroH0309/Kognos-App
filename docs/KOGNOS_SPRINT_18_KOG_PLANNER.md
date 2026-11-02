# Sprint 18 — Kog readiness, authored fallback and adaptive weekly plans

## Motivation

A student asked Kog about Pythagoras and saw a NVIDIA configuration error. The weekly planner also selected subjects by calendar position rather than observed errors or incomplete introductory practice.

## Changes

- `GET /api/ai-status` returns only presence-based server configuration booleans, with `Cache-Control: no-store`. It never discloses any credentials or calls NVIDIA, and a positive result does **not** prove that a key is valid.
- Kog detects missing server configuration before a prompt is submitted and explicitly identifies **Local Library (No AI)**. It can display an original Pythagoras walkthrough or a prewritten mini-lesson. Unsupported questions remain unsupported; there is no fabricated live model answer.
- An in-progress exam question cannot receive an answer through the local guide. The authenticated NVIDIA route still protects exam context and returns the same real model answers when configured.
- The planner combines signed-in demonstration attempts and the already server-graded AI attempt **summary** to prioritize subjects with recorded incorrect answers. Sessions respect saved weekdays, remaining daily minutes, and previously scheduled tasks. A partial or failed evidence load is clearly indicated.
- All logic functions have focused Node tests. No migration or new dependency is required.

## NVIDIA setup for full conversational AI

1. Obtain an **Endpoints / Build API key** from the official [NVIDIA API Catalog](https://build.nvidia.com/). This may differ from credentials for pulling NGC container images.
2. In the existing private `apps/web/.env.local`, set `NVIDIA_API_KEY=<your private key>`, `NVIDIA_MODEL=meta/llama-3.3-70b-instruct` (or another available model) and `NVIDIA_API_BASE_URL=https://integrate.api.nvidia.com/v1`.
3. Keep the server-side Supabase variables configured (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `SUPABASE_JWKS_URL`). Never use `NEXT_PUBLIC_` for NVIDIA or Supabase service credentials. Never put private keys in a GitHub commit or chat message.
4. Restart `npm run dev`. `/api/ai-status` checks **presence only**. Send an authenticated question to validate actual access, permissions and quota.
5. If hosted publicly, set secret environment variables on the host; the private file on a local Windows PC does not configure a remote deployment.

## Limits

- The offline teaching library contains only Pythagoras and the 20 authored introductory lessons. It does not generate new language, grade official exams or replace the remote AI.
- The planner's priorities are advisory **question-level observations**, not proven mastery, exam predictions or medical assessments. Better recommendations require more validated questions per subject and richer review histories.
- Existing tasks are preserved. Suggested activities are subject to available time and do not imply that a student has completed a lesson.