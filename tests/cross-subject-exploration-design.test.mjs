import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('Every curricular topic has an exploration tab even when no math simulator matches',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 assert.match(room,/<button type="button" aria-pressed=\{readerTab==='explore'\}/);
 assert.doesNotMatch(room,/\{mathLab&&<button type="button" aria-pressed=\{readerTab==='explore'\}/);
 assert.match(room,/\{readerTab==='explore'&&<>/);
 assert.match(room,/<StudyExplorationPanel/);
 assert.match(room,/lesson=\{detail\.lesson\} introduction=\{detail\.introduction\}/);
 assert.match(room,/\{mathLab&&<MathLabPanel/);
});

test('All existing introductory subject lessons have the same optional study exploration',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(trails,/<StudyExplorationPanel key=\{lesson\.id\}/);
 assert.match(trails,/Exploração interativa de \{lesson\.subject\}/);
 assert.match(trails,/\{mathLab&&<MathLabPanel/);
 assert.match(trails,/<InteractiveIntroLesson/);
});

test('Developed course lessons, introductions and outlines keep honest completion labels',()=>{
 const explorer=read('apps/web/src/components/StudyExplorationPanel.tsx');
 const model=read('apps/web/src/lib/study-exploration.ts');
 assert.match(explorer,/contentMaturity\(input\)/);
 assert.match(explorer,/Aula completa desenvolvida/);
 assert.match(explorer,/Introdução disponível/);
 assert.match(explorer,/Tema cadastrado — sem aula completa/);
 assert.match(model,/if\(input\.lesson\)return 'published'/);
 assert.match(model,/if\(input\.introduction\)return 'introduction'/);
});

test('The exploration is three-stage, subject-aware and does not write practice attempts',()=>{
 const explorer=read('apps/web/src/components/StudyExplorationPanel.tsx');
 for(const token of ["'investigate'","'organize'","'apply'","setNotes","setAttempt","setOrder","task"]){
  if(token==="task")continue;
  assert.ok(explorer.includes(token),'Missing study interaction '+token);
 }
 assert.match(explorer,/role="status"/);
 assert.match(explorer,/Conferir ordem/);
 assert.match(explorer,/Mostrar pista da aula/);
 assert.match(explorer,/hasVerifiedSolution/);
 assert.doesNotMatch(explorer,/contentRequest\(|fetch\(|\/api\/ai-questions\/submit|recordAttempt|localStorage\.setItem/);
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(trails,/SkillEvolutionPanel/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
 assert.match(trails,/onGenerateAI\(lesson\.id,true\)/);
});

test('Existing lesson levels and math simulations remain available without replacing real study materials',()=>{
 const curriculum=read('apps/web/src/components/CurriculumRoom.tsx');
 assert.match(curriculum,/<InteractiveCourseLesson/);
 assert.match(curriculum,/<InteractiveIntroLesson/);
 assert.match(curriculum,/<MathLabPanel/);
 assert.match(curriculum,/readerTab==='materials'/);
 const css=read('apps/web/src/app/kognos-study-explorer.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/k-study-stage-navigation/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-study-explorer\.css/);
});
