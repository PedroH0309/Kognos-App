import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('signed-in legacy practice shortcuts generate the specific lesson instead of the fixed demo bank',()=>{
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(app,/const lesson=user\?lessonForPracticeFocus\(focus\):null/);
 assert.match(app,/if\(lesson\)\{generateForLesson\(lesson\.id,true\);return;\}/);
 assert.match(app,/lessonPracticeRequestId=\{lessonPracticeRequestId\}/);
 assert.match(app,/lessonPracticeRequestId\}\x60\} mode="questions"/);
});
test('explicit lesson requests select AI even if a cached bank workspace was in demo mode',()=>{
 const practice=read('apps/web/src/components/PracticeSpace.tsx');
 assert.match(practice,/aiFocusLessonId\?'ai':userId\?'ai':'demo'/);
 assert.match(practice,/if\(aiFocusLessonId\)setQuestionSource\('ai'\)/);
 assert.match(practice,/\[aiFocusLessonId,lessonPracticeRequestId\]/);
});
test('dev Strict Mode effect replay does not cancel the only generation while the request guard is set',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(studio,/handledLessonPractice\.current===requestKey/);
 assert.match(studio,/const stillCurrent=\(\)=>handledLessonPractice\.current===requestKey/);
 assert.doesNotMatch(studio,/return\(\)=>\{cancelled=true;\}/);
 assert.match(studio,/if\(!stillCurrent\(\)\)return/);
 assert.match(studio,/start\(fresh\)/);
});
