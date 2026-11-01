# Kognos v0.7 — Contextual Kog Tutor

## Goal

Make Kog an instructional assistant linked to the actual study activity, rather than a generic chatbot reacting only to the open page. Preserve its floating drawer, 3D mascot, NVIDIA server-side integration, authentication, usage quotas, and student preference accommodations.

## Educational behavior

The tutor now uses the Kognos teaching principles supplied by the product owner: teach progressively, check prerequisites, provide relevant analogies, explain mistakes, verify understanding using one focused question, and encourage reflection and independent practice. The tutor should be approachable and teacher-like without pretending to be a specific educator or diagnosing the student.

Study preferences (short blocks, extra spacing, plain language, concrete examples, practice-first) influence answer presentation. Context from the app is presented as data, not commands.

## Context sources and trust boundaries

| Context | From the browser | Looked up by the authenticated server | Tutor behavior |
| --- | --- | --- | --- |
| Question in progress | Demo question ID + `solving` | Canonical question statement, options, topic | Give gradual hints. Do not provide the correct answer or key in the server prompt. |
| Review of a question | Demo question ID + `review` | Canonical question plus the signed-in user's recorded answer, recomputing correctness on the server | Explain why the answer was right/wrong. If no recorded attempt exists, treat it as unsolved. |
| Planning | `planner`, optionally an owned task UUID | The student's own Supabase demonstration tasks using the user-scoped client and RLS | Analyze available workload and suggest realistic changes. Do not claim to edit tasks. |
| Performance | `performance` | Last 100 demo attempts belonging to the student; recompute correctness from canonical question keys | Identify patterns cautiously. No fabricated ENEM score or competency claims. |

The browser **never submits a correct answer or an answer explanation** as trusted context. The request parser discards unrecognized properties and rejects malformed activity IDs. User-supplied task titles are bounded, cleaned, and treated as untrusted data. No account password, avatar, user email, clinical label, or hidden API credential is sent to the AI provider.

The source question bank is currently a **demonstration** with 20 original items and browser-side exercise controls, not a protected real examination system. Future official test flows must use server-side grading and distinct security rules.

## User flow

- Start a demo quiz: select **Ask Kog for a hint** while answering. Kog knows the topic and the current problem, and suggests a first step without receiving the answer key.
- Submit an answer: select **Understand with Kog**. The server checks a recorded attempt in the signed-in account and, when present, adds the correct key and explanation to the prompt.
- Open **Study Planner**: Kog can analyze pending tasks, or discuss a selected task via the per-task Kog action. Advice remains advisory.
- Open **Performance**: Kog offers practice suggestions from the student's most recent demonstration answers.
- Switch pages: the active study context is refreshed, while the current browser-tab conversation remains available. Account switches clear the conversation.

## Data protection and operating limits

- A valid Supabase session is required for NVIDIA requests. Authentication, usage quotas and RLS are unchanged.
- Only a compact allowlisted context identifier is sent from the UI. The backend reads account-specific data through RLS-scoped queries.
- Data transmitted to NVIDIA is limited to the student's current message, recent conversation history, selected pedagogical preferences and any relevant contextual question/task/attempt details.
- An informational notice remains in the Kog interface; a new consent checkbox is not requested for each message. Privacy and legal compliance for minors still requires review before public launch.
- Prompt instructions alone cannot **guarantee** that a model will never solve an in-progress question, even without receiving the canonical answer key. A real high-stakes testing flow needs stronger, separate controls.

## Verification

Run at the repository root:

```bash
npm test
npm run test:design
npm run typecheck
npm run build
```

Local Node tests cover contextual payload validation, non-disclosure of answer keys in the in-progress context, correction after an existing attempt, basic performance analysis, and prompt behavior. GitHub CI runs the production build and TypeScript checks.

## Next steps

1. Move the demo question bank and official exam grading entirely to the backend.
2. Add richer, structured mastery signals by learning skill, with confidence bounds.
3. Add student feedback on how helpful an explanation was, with accessible corrections.
4. Integrate tutoring with actual learning trails and lesson prerequisites.
5. Test prompt behavior with multilingual, low-literacy, high-frustration, and accessibility-specific scenarios. Consider independent pedagogy evaluation.