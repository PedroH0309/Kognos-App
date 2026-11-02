import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const planner=read('apps/web/src/components/StudyPlanner.tsx');
const app=read('apps/web/src/components/KognosApp.tsx');
const diagnostic=read('apps/web/src/components/DiagnosticSpace.tsx');
const calendar=read('apps/web/src/components/StudyCalendar.tsx');
const tutor=read('apps/web/src/lib/tutor.ts');
const blueprints=read('apps/web/src/lib/exam-blueprints.ts');
const layout=read('apps/web/src/app/layout.tsx');
const styles=read('apps/web/src/app/kognos-study-cycle.css');

test('planner uses personalized, error-aware multi-subject routine, not static schedule',()=>{
 assert.match(planner,/createPersonalizedStudyWeek\(profile,tasks,history,aiEvidence\)/);
 assert.match(planner,/weekLearningSummary\(tasks\)/);
 assert.match(planner,/missedTopics\(history\)/);
 assert.match(planner,/studyMethod\(profile\)/);
 assert.match(planner,/onWeeklyReview/);
 assert.match(planner,/onLearn/);
 assert.match(planner,/youtubeStudySearch\(/);
 assert.match(planner,/onDiagnostic/);
});
test('initial and weekly tests are connected with correct routing and honesty',()=>{
 assert.match(diagnostic,/cycle='baseline'/);
 assert.match(diagnostic,/selectWeeklyCheckpoint\(attempts,10\)/);
 assert.match(diagnostic,/selectBaselineQuestions\(\)/);
 assert.match(diagnostic,/cycle==='weekly'\?'mock':'practice'/);
 assert.match(diagnostic,/Não é uma prova oficial/);
 assert.match(app,/function openWeeklyReview\(\)/);
 assert.match(app,/onWeeklyReview=\{openWeeklyReview\}/);
 assert.match(app,/onPlan=\{\(\)=>navigate\('plans'\)\}/);
});
test('calendar exports real task snapshot, not claimed live Apple/Google sync',()=>{
 assert.match(calendar,/downloadStudyCalendar\(tasks\)/);
 assert.match(calendar,/\.ics/);
 assert.match(calendar,/não uma sincronização automática bidirecional/);
 assert.ok(!calendar.includes('CALENDAR_PRIVATE_KEY'));
});
test('teaching remains education-only and adaptive, not diagnostic or medical',()=>{
 assert.match(tutor,/ROTINA ADAPTATIVA/);
 assert.match(tutor,/Não solicite laudos nem diagnósticos/);
 assert.match(tutor,/não conclua que existe um déficit clínico/i);
 assert.match(tutor,/sem Markdown/);
 assert.match(tutor,/QUESTÃO EM ANDAMENTO/);
});
test('official external references distinguish VUNESP organizer from SARESP evaluation',()=>{
 assert.match(blueprints,/saresp:\{/);
 assert.match(blueprints,/vunesp:\{/);
 assert.match(blueprints,/https:\/\/www\.vunesp\.com\.br\//);
 assert.match(blueprints,/SARESP é avaliação de rendimento escolar/);
 assert.match(blueprints,/NÃO são cadernos oficiais/);
 assert.match(blueprints,/sourceCheckedOn:'2026-11-02'/);
});
test('visuals adapt to dark/light and mobile while respecting reduced motion',()=>{
 assert.match(styles,/k-cycle-review/);
 assert.match(styles,/k-cycle-methods/);
 assert.match(styles,/k-cycle-progress/);
 assert.match(styles,/@media\(max-width:530px\)/);
 assert.match(styles,/prefers-reduced-motion:reduce/);
 assert.match(styles,/theme-dark/);
 assert.ok(layout.indexOf('import "./kognos-study-cycle.css"')>layout.indexOf('import "./kognos-calendar.css"'));
});
