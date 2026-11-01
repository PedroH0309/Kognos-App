# Kognos v0.6.1 — Onboarding UI/UX refinement

## Scope

This release focuses exclusively on the five-step student onboarding. It does not add new educational domains or change the NVIDIA/Supabase integration. All existing profile fields and persistence semantics are preserved.

## Changes

1. **Visual system:** replaced inconsistent browser-default form controls with brand-aligned reusable, accessible components. Each onboarding step uses the official Kognos palette and consistent spacing, typography and action states.
2. **Custom select:** keyboard-accessible, single-choice combobox/listbox for education stage and current proficiency. Arrow keys, Home, End, Enter/Space, Escape, outside-click dismissal and clear selected state are supported. Menus flip above their triggers near the viewport edge, and flow within the document on mobile.
3. **Date picker:** manually enter a Brazilian date in `dd/mm/yyyy` or use the inline calendar. Invalid dates (including non-leap-year February 29) are rejected. Unset dates are allowed. Date values continue to be stored in ISO format.
4. **Study-time control:** custom branded range input, keyboard interaction, plus/minus buttons, filled progress track, labeled minimum/maximum and a weekly-hours estimate.
5. **Choice cards:** selected states are indicated with accessible `aria-pressed` semantics for goals, study days, session lengths, teaching style, tone, and accommodations.
6. **Accessibility:** keyboard focus, responsive grids, readable labels, reduced-motion support, high-contrast focus and no forced disclosure of ADHD/dyslexia diagnoses.
7. **Responsive layout:** improved alignment at desktop, tablet and compact phone widths; the illustration is hidden on compact screens to prioritize the form.

## Data retention and privacy

- No new personal fields are collected.
- The voluntary ADHD/dyslexia question is transient; only selected interface adaptations are stored.
- The onboarding continues to save through the existing `onFinish` callback to guest storage or the authenticated Supabase profile.
- The AI integration and secret handling are unchanged.

## Verification

- `npm test` validates prior learning/account logic plus date parsing and study-hour helpers.
- `npm run test:design` validates brand tokens and onboarding component integration.
- `npm run typecheck` and `npm run build` are included in GitHub CI.

## Manual QA checklist

1. Desktop 1440px, laptop 1024px, tablet 768px, iPhone-width 390px, compact mobile 320px.
2. Complete all five steps; verify that `Back` preserves previous answers.
3. Open both selects by keyboard and pointer; test Escape, Home/End, selection and scroll.
4. Test calendar selection, manual entry, clearing, leap days and invalid entry.
5. Test slider with mouse, touch, keyboard and +/- buttons.
6. Verify light/dark appearance and no horizontal scrolling.
7. Verify optional accessibility options and profile-saving behavior with and without Supabase.

The project is a beta; automated checks are not a substitute for manual browser/device QA.