# Kognos Sprint 06 — Global Kog Assistant and 3D Mascot

## Scope

This sprint replaces the isolated tutor conversation UI with a floating assistant available throughout the authenticated and guest learning areas of the application. The assistant is persistent while switching between dashboard modules and uses the existing authenticated NVIDIA backend.

### User experience

- Desktop: floating Kog launcher in the bottom-right corner, which opens a right-side assistant drawer. The drawer can expand, minimize, and close.
- Mobile: single-touch floating launcher, full-width bottom sheet with backdrop and body-scroll locking.
- Accessibility: keyboard-operable controls, visible focus, `Escape` to close, semantic conversation log, reduced-motion support, readable feedback for errors, and a static SVG fallback when WebGL is not available.
- Contextual prompts: question practice, mock exams, study planning, and dashboards receive different example questions. The context describes only the current page, not private account data.
- Conversation state: held only in the mounted React component. It remains available when navigating pages but is cleared when the authenticated user changes. The conversation is **not** persisted across reloads.
- Privacy: the existing NVIDIA processing notice remains visible without a per-message checkbox. Messages must not include private information.
- Quotas, authentication, and API key handling remain server-side in `/api/tutor`.

### The 3D mascot

`apps/web/src/components/KogMascot3D.tsx` creates an original realtime 3D character with Three.js using geometric meshes and lights. This is **real WebGL geometry**, not a static render or CSS perspective effect. Features include a metallic helmet, curved illuminated eyes, an animated floating body, ear accessories, a chest emblem, and pointer-driven rotation. Rendering respects reduced motion, reduces resolution on high-DPI screens, and stops drawing when the canvas is not visible. The static SVG remains the fallback.

An optional reusable GLB asset, `apps/web/public/brand/kog-3d.glb`, is supplied for use in external editors. It is generated from original shapes by `scripts/generate-kog-glb.py` (requires Python packages `trimesh` and `numpy`). The browser currently draws its own programmatic version rather than reading the GLB asset.

### Dependencies and setup

- Added `three` and `@types/three` to the web application.
- Run `npm install` from the monorepo root, followed by `npm run dev`.
- Local AI configuration remains in `apps/web/.env.local` only; no API key is committed.
- Full NVIDIA and Supabase connectivity still requires valid external credentials and database migrations.

### Testing status

- The Node.js educational, profile, cloud-data and prompt tests pass.
- The design tests now verify the global assistant, contextual prompts, privacy notice, and 3D component.
- TypeScript sources have been checked syntactically with the TypeScript compiler parser.
- **Not yet verified** in this environment: production build, browser WebGL rendering, actual phone layout and live NVIDIA responses, because npm package downloads are unavailable in the container.

## Follow-up work

1. Verify actual 3D performance in iPhone Safari, Android Chrome, and desktop browsers.
2. Add a full-screen immersive tutor mode and better mathematical rendering.
3. Add optional user-controlled chat history sync (do not silently store sensitive conversations).
4. Deep-link Kog to the currently active lesson or question once those server-side modules are implemented.
5. Add controls to disable 3D animations on low-power devices.