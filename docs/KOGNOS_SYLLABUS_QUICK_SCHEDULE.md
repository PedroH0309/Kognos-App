# Kognos — syllabus-to-calendar quick scheduling

## What was added

The student's searchable examination syllabus now includes an **Add to calendar** action for each listed topic. A topic previously answered incorrectly in a weekly assessment is labeled **Schedule review** instead. Clicking schedules one **manual** study task in the Kognos internal calendar, stores it through the existing authenticated cloud task service, or stores it locally for a guest.

The scheduler:
- Uses the **next allowed study weekday** with enough free capacity.
- Honors `dailyMinutes`, `sessionMinutes` and the 25-minute cap for short-block accessibility preferences.
- Searches up to 14 calendar days, includes already scheduled or completed activity minutes in daily capacity, and does not create an item past a valid `targetDate`.
- Does not duplicate an unfinished future task for the same subject and topic.
- Preserves all existing manually created or suggested work and never removes tasks.
- Continues to work offline for a guest when browser local storage is available.
- Saves a topic once; the calendar remains internal (no .ics export).

## Accuracy correction

Earlier topic matching used the first 30 characters of long titles. This was unsafe for required books such as FUVEST 2027, since several titles share a common prefix. Now it compares the **actual complete topic** within `Estudar/Revisar DISCIPLINA: TÓPICO`, and only accepts a long topic-specific prefix if the original task title was truncated at exactly 120 characters. A completed task covering one required book no longer marks all the other required books as studied.

This remains an **activity-completion** indicator, not an assessment of mastery.

## Deployment

- Based on latest `main` including merged PRs #44, #45 and #46.
- No Supabase migration required for this change. It uses the same cloud tasks, profile preferences and calendar already in the app.
- Merge the PR after passing unit, design, TypeScript and production build checks, then deploy the website.
- Manually test on iPhone Safari and desktop Chrome with a signed-in account and as a guest: one-click schedule, page reload, current weekly calendar, topic state, book-specific progress, rest days, daily budget, exam cutoff and duplicate prevention.
- This work does not claim full institution-by-institution official syllabus coverage. Editorial-only topics remain labeled separately from editor-approved institutional evidence.

## Further roadmap

Edition-specific curricular scope and quality-controlled question generation require continued source-by-source evaluation. The quick-schedule action makes the existing syllabus useful even while this institutional coverage work continues.
