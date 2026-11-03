import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const app=readFileSync('apps/web/src/components/KognosApp.tsx','utf8');
const practice=readFileSync('apps/web/src/components/PracticeSpace.tsx','utf8');
const trails=readFileSync('apps/web/src/components/LearningTrails.tsx','utf8');
const server=readFileSync('apps/web/src/app/api/tutor/route.ts','utf8');
const css=readFileSync('apps/web/src/app/design-system.css','utf8');

test('learn, trails and subjects route to distinct learning experiences',()=>{
 assert.match(app,/retainedViews.includes\('learn'\)/);
 assert.match(app,/retainedViews.includes\('trails'\)/);
 assert.match(app,/<CurriculumRoom[^>]*active=\{view==='learn'\}/);
 assert.match(app,/mode="trails" active=\{view==='trails'\}/);
 assert.match(app,/view==='subjects'\?<SubjectDashboard/);
 assert.match(app,/onPractice=\{practiceFromLesson\}/);
 assert.doesNotMatch(trails,/onClick=[^\n]*onPractice\(/);
 assert.doesNotMatch(trails,/Praticar com 10 questões de IA/);
 assert.match(trails,/onPractice=\{\(\)=>onGenerateAI\(lesson\.id,true\)\}/);
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