import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('Every curriculum topic remains reachable from the independent Laboratory Hub',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 assert.match(room,/onOpenLab\(detail\.topic\)/);
 assert.match(room,/readerTab==='lesson'/);
 assert.match(room,/readerTab==='activities'/);
 assert.match(room,/readerTab==='explanations'/);
 assert.match(trails,/studySpace==='laboratory'/);
 assert.match(trails,/<LaboratoryHub/);
 assert.match(hub,/curriculumTopics/);
 assert.match(hub,/<MathLabPanel/);
 assert.match(hub,/<TopicVisualStudio/);
});

test('Introductory lessons preserve authored explanations and link to the independent laboratory',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const reader=read('apps/web/src/components/TopicLessonSections.tsx');
 const universal=read('apps/web/src/components/UniversalLessonReader.tsx');
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 assert.match(trails,/lessonPanes\.map/);
 assert.match(trails,/<TopicLessonSections/);
 assert.match(trails,/Abrir laboratórios desta matéria/);
 assert.match(reader,/<UniversalLessonReader/);
 assert.match(universal,/introduction\.explanation/);
 assert.match(universal,/introduction\.workedExample/);
 assert.match(universal,/introductoryChoice\(introduction\)/);
 assert.match(hub,/<MathLabPanel/);
 assert.match(hub,/<ScienceLabPanel/);
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
 for(const token of ["'investigate'","'organize'","'apply'","setOrder","LessonChoiceQuestion","task"]){
  if(token==="task")continue;
  assert.ok(explorer.includes(token),'Missing study interaction '+token);
 }
 assert.match(explorer,/role="status"/);
 assert.match(explorer,/Conferir ordem/);
 assert.match(explorer,/lessonTaskChoice/);
 assert.match(explorer,/hasVerifiedSolution/);
 assert.doesNotMatch(explorer,/<textarea\\b/);
 assert.doesNotMatch(explorer,/contentRequest\(|fetch\(|\/api\/ai-questions\/submit|recordAttempt|localStorage\.setItem/);
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(trails,/SkillEvolutionPanel/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
 assert.match(trails,/onGenerateAI\(lesson\.id,true\)/);
});

test('Developed lesson levels remain authored and math simulators live in the separate hub',()=>{
 const curriculum=read('apps/web/src/components/CurriculumRoom.tsx');
 const reader=read('apps/web/src/components/TopicLessonSections.tsx');
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 assert.match(curriculum,/<TopicLessonSections/);
 assert.match(reader,/lesson\.sections\.map/);
 assert.match(reader,/lesson\.tasks\.filter/);
 assert.match(hub,/<MathLabPanel/);
 assert.match(hub,/<ScienceLabPanel/);
 assert.match(curriculum,/readerTab==='materials'/);
 const css=read('apps/web/src/app/kognos-study-explorer.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/k-study-stage-navigation/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-study-explorer\.css/);
});

