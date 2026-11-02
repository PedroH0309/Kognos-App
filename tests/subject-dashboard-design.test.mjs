import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const app=readFileSync('apps/web/src/components/KognosApp.tsx','utf8');
const dashboard=readFileSync('apps/web/src/components/SubjectDashboard.tsx','utf8');
const learn=readFileSync('apps/web/src/components/LearningTrails.tsx','utf8');
const css=readFileSync('apps/web/src/app/design-system.css','utf8');

test('My Subjects is an independent panel, not a copy of Learning Trails',()=>{
 assert.match(app,/import SubjectDashboard from '.\/SubjectDashboard'/);
 assert.match(app,/view==='subjects'\?<SubjectDashboard/);
 assert.match(app,/onOpenTrail=\{openFocusedLesson\}/);
 assert.match(dashboard,/PAINEL DE MATÉRIAS/);
 assert.match(dashboard,/Cobertura da amostra/);
 assert.match(dashboard,/subjectSnapshots\(attempts\)/);
 assert.doesNotMatch(dashboard,/Entenda o conceito/);
});
test('Learn is lesson-first while Trails presents sequenced steps',()=>{
 assert.match(learn,/mode==='learn'\?'is-learning-first'/);
 assert.match(learn,/mode==='trails'&&<section className="learning-overview"/);
 assert.match(learn,/Ver sequência completa/);
 assert.match(learn,/Etapas da trilha/);
 assert.match(learn,/learning-quick-subjects/);
});
test('Subjects actions reach the existing learning flow, tutor and practice',()=>{
 assert.match(dashboard,/onOpenTrail\(\{subject:lesson.subject,lessonId:lesson.id\}\)/);
 assert.match(dashboard,/onPractice\(\{subject:lesson.subject,topic:lesson.topic,questionId:lesson.questionId\}\)/);
 assert.match(dashboard,/onContextChange\(\{kind:'lesson',lessonId:next.id\}\)/);
 assert.match(dashboard,/onTutor\(\)/);
});
test('Distinct subject UI respects existing theming and mobile layouts',()=>{
 assert.match(css,/\.app-layout \.subject-workspace-grid/);
 assert.match(css,/\.app-layout \.subject-kpi-grid/);
 assert.match(css,/\.app-layout \.learning-body-grid\.is-learning-first/);
 assert.match(css,/@media\(max-width:520px\)/);
 assert.match(dashboard,/aria-pressed=\{entry.subject===selected\}/);
});