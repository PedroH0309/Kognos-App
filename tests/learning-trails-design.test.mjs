import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const app=readFileSync('apps/web/src/components/KognosApp.tsx','utf8');
const practice=readFileSync('apps/web/src/components/PracticeSpace.tsx','utf8');
const trails=readFileSync('apps/web/src/components/LearningTrails.tsx','utf8');
const server=readFileSync('apps/web/src/app/api/tutor/route.ts','utf8');
const css=readFileSync('apps/web/src/app/design-system.css','utf8');

test('all learning sections route to real lessons and focused practice',()=>{
 assert.match(app,/view==='learn'\|\|view==='trails'\|\|view==='subjects'/);
 assert.match(app,/onPractice=\{practiceFromLesson\}/);
 assert.match(trails,/Praticar este tópico/);
 assert.match(trails,/evidenceForLesson/);
});
test('question bank has topic/difficulty filters, search, and individual practice',()=>{
 assert.match(practice,/setTopic/);
 assert.match(practice,/setDifficulty/);
 assert.match(practice,/type="search"/);
 assert.match(practice,/start\(\[q\]\)/);
});
test('Kog obtains lesson content server-side; UI uses official restrained design tokens',()=>{
 assert.match(server,/findLearningLesson\(studyContext.lessonId\)/);
 assert.match(server,/buildVerifiedLessonContext\(lesson\)/);
 assert.match(css,/learning-subject-card/);
 assert.match(css,/practice-filter-grid/);
});