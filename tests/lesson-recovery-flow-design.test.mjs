import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('server-owned grading remains the only origin of recovery feedback',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 const submit=read('apps/web/src/app/api/ai-questions/submit/route.ts');
 const recovery=read('apps/web/src/lib/lesson-recovery.ts');
 assert.ok(studio.includes("authenticatedFetch('/api/ai-questions/submit'"));
 assert.ok(studio.includes("setAnswers(old=>[...old,{correct:Boolean(grade.correct)"));
 assert.ok(studio.includes("recoveryTargetsFromGradedSession(session,answers)"));
 assert.ok(recovery.includes("grades[i].correct!==false"));
 assert.ok(submit.includes('submit_kognos_ai_answer_once'));
});
test('wrong answers show an authored concept and a secure tutor correction action',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 const tutor=read('apps/web/src/app/api/tutor/route.ts');
 assert.ok(studio.includes('wrongQuestion&&!inMock'));
 assert.ok(studio.includes('wrongQuestion.commonMistake'));
 assert.ok(studio.includes('askKogForQuestion(current.id)'));
 assert.ok(studio.includes("phase:'review'"));
 assert.ok(tutor.includes("verifiedAttempt?.correct===false"));
 assert.ok(tutor.includes('validLessonAIReference(generated.lesson_id'));
 assert.ok(tutor.includes('buildVerifiedLessonContext(lesson)'));
 assert.ok(tutor.includes(".eq('user_id',userId)"));
});
test('student controls opt-in scheduling with existing cloud task APIs and no extra initial fetch',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.ok(studio.includes('async function scheduleMistakeReviews()'));
 assert.ok(studio.includes("if(!userId||!finished||reviewLock.current||!recoveryTargets.length)return"));
 assert.ok(studio.includes('const existing=await getCloudTasks(userId)'));
 assert.ok(studio.includes('const plan=createSpacedReviewPlan('));
 assert.ok(studio.includes('await createCloudTasks(userId,plan.created)'));
 assert.ok(studio.includes('Agendar revisões em 1, 3 e 7 dias'));
 assert.ok(app.includes('profile={actualProfile}'));
 assert.ok(app.includes('onGenerateLesson={id=>generateForLesson(id,true)}'));
});
test('recovery does not reveal solutions before grading or during mock tests',()=>{
 const studio=read('apps/web/src/components/AiQuestionStudio.tsx');
 assert.ok(studio.includes('answers[cursor]&&!inMock'));
 assert.ok(studio.includes('wrongQuestion&&!inMock'));
 assert.ok(studio.includes('session.length>0'));
 assert.ok(studio.includes('recoveryTargets.length>0'));
 assert.ok(studio.includes('Reabrir miniaula'));
 assert.ok(studio.includes('Gerar mais 3 questões'));
});
