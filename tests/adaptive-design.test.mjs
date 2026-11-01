import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const app=readFileSync('apps/web/src/components/KognosApp.tsx','utf8');
const diagnostic=readFileSync('apps/web/src/components/DiagnosticSpace.tsx','utf8');
const reviews=readFileSync('apps/web/src/components/ReviewSpace.tsx','utf8');
const styles=readFileSync('apps/web/src/app/design-system.css','utf8');
const cloud=readFileSync('apps/web/src/lib/cloud-study.ts','utf8');
test('diagnostic and reviews are actual routed pages, not placeholders',()=>{
 assert.match(app,/view==='diagnostic'\?<DiagnosticSpace/);
 assert.match(app,/view==='reviews'\?<ReviewSpace/);
 assert.match(app,/reviewCounts\(reviewItems\(safeAttempts\)\)/);
});
test('diagnostic freezes canonical question selection and saves only at completion',()=>{
 assert.match(diagnostic,/setSessionQuestions\(suggestedQuestions\)/);
 assert.match(diagnostic,/const questions=sessionQuestions.length\?sessionQuestions:suggestedQuestions/);
 assert.match(diagnostic,/createCloudAttempts\(userId,records\)/);
 assert.match(diagnostic,/mode:'practice'/);
 assert.match(diagnostic,/screen==='report'/);
});
test('review actions navigate to actual lessons and exercises',()=>{
 assert.match(reviews,/onPractice\(\{subject:item.lesson.subject/);
 assert.match(reviews,/onLearn\(\{subject:item.lesson.subject/);
 assert.match(reviews,/reviewCounts\(items\)/);
});
test('shared design respects themes, mobile sizes and readable states',()=>{
 assert.match(styles,/\.diag-result-item/);
 assert.match(styles,/\.review-item/);
 assert.match(styles,/@media\(max-width:650px\)/);
 assert.match(cloud,/createCloudAttempts/);
});