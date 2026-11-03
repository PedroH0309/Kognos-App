import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const screen=readFileSync('apps/web/src/components/LearningTrails.tsx','utf8');
const css=readFileSync('apps/web/src/app/design-system.css','utf8');

test('Learning Paths has a compact summary and a visible journey selector instead of a giant visitor banner',()=>{
 assert.match(screen,/learning-journey-summary/);
 assert.match(screen,/learning-journey-subject-pills/);
 assert.match(screen,/learning-journey-subject-overview/);
 assert.doesNotMatch(screen,/<div className="message neutral" role="note">/);
 assert.doesNotMatch(screen,/learning-subject-card/);
});
test('Roadmap steps, recommendation and lesson navigation use real callbacks',()=>{
 assert.match(screen,/trailSnapshot\(subject,attempts\)/);
 assert.match(screen,/connectedCatalogProgress\(attempts,aiProgress\)/);
 assert.match(screen,/chooseLesson\(highlight\)/);
 assert.match(screen,/chooseLesson\(following\)/);
 assert.match(screen,/chooseLesson\(previous\)/);
 assert.match(screen,/onClick=\{\(\)=>onGenerateAI\(lesson\.id,true\)\}/);
 assert.match(screen,/onSeeTrails\(\{subject:lesson.subject/);
});
test('Context and guest storage remain scoped, progress uses actual attempts',()=>{
 assert.match(screen,/kognos_demo_attempts_v1_guest/);
 assert.match(screen,/kognos_last_lesson_v1_\$\{userId\|\|'guest'\}/);
 assert.match(screen,/evidenceForLesson\(lesson,attempts\)/);
 assert.match(screen,/visibleContext\(\{kind:'lesson',lessonId:item.id\}\)/);
 assert.match(screen,/if\(!active\)return/);
});
test('Journeys have keyboard focus, compact responsive layout and reduced motion support',()=>{
 assert.match(css,/learning-journey-subject-pill:focus-visible/);
 assert.match(css,/@media\(max-width:720px\)/);
 assert.match(css,/learning-journey-workspace\.is-learning-first/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});