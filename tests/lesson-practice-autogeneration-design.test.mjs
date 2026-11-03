import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('signed-in lesson and subject actions request fresh AI questions, not saved demo questions',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const subjects=read('apps/web/src/components/SubjectDashboard.tsx');
 const app=read('apps/web/src/components/KognosApp.tsx');
 const practice=read('apps/web/src/components/PracticeSpace.tsx');
 assert.match(trails,/\{userId&&<SkillEvolutionPanel/);
 assert.doesNotMatch(trails,/Praticar com 10 questões de IA/);
 assert.match(trails,/onPractice=\{\(\)=>onGenerateAI\(lesson\.id,true\)\}/);
 assert.match(subjects,/if\(userId\)onGenerateAI\(lesson\.id,true\)/);
 assert.match(app,/function generateForLesson\(lessonId:string,generateNew=false\)/);
 assert.match(app,/lessonPracticeRequestId=\{lessonPracticeRequestId\}/);
 assert.match(practice,/lessonPracticeRequestId=\{lessonPracticeRequestId\}/);
 assert.match(practice,/\[aiFocusLessonId,lessonPracticeRequestId\]/);
 assert.doesNotMatch(trails,/onClick=[^\n]*onPractice\(/); // All new lesson practice uses reviewed AI questions.
});
test('one-click lesson practice uses reviewed API batches and opens exactly ten graded questions',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 const engine=read('apps/web/src/lib/nvidia-question-engine.ts');
 const backend=read('apps/web/src/app/api/ai-questions/generate/route.ts');
 assert.match(studio,/lessonPracticeRequestId>0&&Boolean\(focusLessonId\)/);
 assert.match(studio,/handledLessonPractice\.current===requestKey/);
 assert.match(studio,/lessonPracticeGenerationRequest\(focusLessonId/);
 assert.match(studio,/const approved=newQuestionsForSelectedLesson\(data,request\)/);
 assert.match(studio,/start\(fresh\)/);
 assert.match(studio,/!lessonAutostart\)void refresh\(\)/);
 assert.match(studio,/!hasServerBank\|\|lessonAutostart/);
 assert.match(studio,/Nenhuma questão antiga será usada como substituta/);
 assert.match(engine,/const lesson=request\.lessonId\?findLearningLesson/);
 assert.match(engine,/learningObjective:lesson\.objective/);
 assert.match(engine,/commonMistake:lesson\.commonMistake/);
 assert.match(backend,/validLessonAIReference\(generation\.lessonId/);
 assert.match(backend,/\.insert\(rows\)/);
 assert.match(backend,/publicGeneratedQuestion/);
});
test('generation errors show retry and never silently fall back to old question IDs',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.match(studio,/setLessonPracticeError\(e instanceof Error/);
 assert.match(studio,/setLessonPracticeRetry\(value=>value\+1\)/);
 assert.match(studio,/setManualBankForRequest\(lessonPracticeRequestId\)/);
 assert.match(studio,/manualBankForRequest!==lessonPracticeRequestId/);
 assert.match(studio,/lessonPracticeLoading/);
 assert.match(studio,/aria-live="polite"/);
});
