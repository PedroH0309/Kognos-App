import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const choice = read('apps/web/src/components/LessonChoiceQuestion.tsx');
const studio = read('apps/web/src/components/AiQuestionStudio.tsx');
const room = read('apps/web/src/components/CurriculumRoom.tsx');
const completion = read('apps/web/src/components/CurriculumStudyFlow.tsx');
const notice = read('apps/web/src/components/IntegrationSetupNotice.tsx');
const css = read('apps/web/src/app/kognos-practice-polish.css');
const layout = read('apps/web/src/app/layout.tsx');

test('all lesson multiple-choice alternatives have a fixed letter and flexible text column', () => {
  assert.match(choice, /className="k-lesson-mcq-letter"/);
  assert.match(choice, /className="k-lesson-mcq-option-text"/);
  assert.match(css, /\.k-lesson-mcq-options \.k-lesson-mcq-option\s*\{[^}]*grid-template-columns:30px minmax\(0,1fr\)/);
  assert.match(css, /\.k-lesson-mcq-option \.k-lesson-mcq-option-text\s*\{[^}]*text-align:left/);
  assert.match(css, /\.k-lesson-mcq-options\s*\{[^}]*grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css, /@media\(max-width:640px\)/);
  assert.match(choice, /aria-pressed=\{selected===index\}/);
  assert.match(choice, /onClick=\{\(\)=>choose\(index\)\}/);
});

test('generated reviewed questions start automatically as a single graded session, never as separate cards', () => {
  assert.match(studio, /const generated:UserAIQuestion\[\]=\[\]/);
  assert.match(studio, /for\(const q of response.questions\)/);
  assert.match(studio, /if\(generated.length\)\{\s*start\(generated\)/);
  assert.match(studio, /className="ai-bank-session-start"/);
  assert.match(studio, /onClick=\{\(\)=>start\(bank.slice\(0,Math.min\(20,bank.length\)\)\)\}/);
  assert.doesNotMatch(studio, /bank\.map\(q=><article/);
  assert.doesNotMatch(studio, /onClick=\{\(\)=>start\(\[q\]\)\}/);
  assert.match(studio, /className="k-ai-unified-session-progress"/);
  assert.match(studio, /Questão \{cursor\+1\} de \{session.length\}/);
  assert.match(studio, /authenticatedFetch\('\/api\/ai-questions\/submit'/);
  assert.match(studio, /setSession\(\[\.\.\.list\]\)/);
});

test('the curriculum fallback generator displays one visible question at a time without resetting previous answers', () => {
  assert.match(room, /className="k-course-unified-session"/);
  assert.match(room, /hidden=\{position!==i\}/);
  assert.match(room, /setGraded\(old=>\(\{\.\.\.old,\[q.id\]:correct\}\)\)/);
  assert.match(room, /disabled=\{graded\[questions\[position\]\.id\]===undefined\}/);
  assert.match(room, /onGraded\?\.\(Boolean\(graded.correct\)\)/);
  assert.match(room, /setCompleted\(true\)/);
  assert.match(room, /source="ai" question=\{q\}/);
  assert.match(css, /\.k-course-session-item\[hidden\]\{display:none!important;\}/);
});

test('lesson completion preserves gating but aligns reading and activity confirmation', () => {
  assert.ok(completion.includes('Concluí a leitura de toda a aula'));
  assert.ok(completion.includes('disabled={hasLesson&&!ready}'));
  assert.match(css, /\.\k-curriculum-progress-items \.k-curriculum-check,[^\{]+\{[^}]*grid-template-columns:22px minmax\(0,1fr\)/);
  assert.match(css, /\.\k-curriculum-next:disabled\s*\{[^}]*cursor:not-allowed/);
});

test('AI setup warning and session actions are responsive and accessible', () => {
  assert.match(notice, /className="k-integration-summary"/);
  assert.match(notice, /className="k-integration-copy"/);
  assert.match(notice, /className="ks-button ks-button-secondary ks-button-sm"/);
  assert.match(notice, /aria-label="Configuração de IA e banco de dados"/);
  assert.match(css, /\.k-integration-summary\s*\{[^}]*grid-template-columns:32px minmax\(0,1fr\) auto/);
  assert.match(css, /\.k-integration-retry\s*\{[^}]*grid-column:1\/-1/);
  assert.match(studio, /className="practice-actions k-ai-session-actions"/);
  assert.match(css, /\.k-ai-session-exit\{margin-right:auto;\}/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
});

test('new layout rules load after previous classroom and responsive styles', () => {
  assert.ok(layout.includes('import "./kognos-practice-polish.css";'));
  assert.ok(layout.indexOf('kognos-practice-polish.css') > layout.indexOf('kognos-universal-lessons.css'));
  assert.ok(layout.indexOf('kognos-practice-polish.css') > layout.indexOf('kognos-curriculum-flow-stage9.css'));
});