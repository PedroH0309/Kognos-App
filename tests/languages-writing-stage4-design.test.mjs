import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

const labs={
 PortugueseLabs:['PortugueseReadingLab','PortugueseGrammarLab','PortugueseCohesionLab'],
 EnglishLabs:['EnglishReadingLab','EnglishModalLab','EnglishReferenceLab'],
 WritingLabs:['EssayThemeLab','EssayStructureLab','EssayCohesionLab','EssayInterventionLab']
};
test('Each of ten language workshops has distinct authored interactive behavior and lazy loading',()=>{
 const registry=read('apps/web/src/components/languages/LanguageLabPanel.tsx');
 for(const [file,names] of Object.entries(labs)){
  const code=read('apps/web/src/components/languages/'+file+'.tsx');
  for(const name of names){
   assert.ok(code.includes('export function '+name+'('),'Missing component '+name);
   assert.ok(registry.includes('m=>m.'+name),'Missing lazy registration '+name);
  }
  assert.match(code,/useState/);
  assert.match(code,/LanguageStage/);
  assert.doesNotMatch(code,/contentRequest\(|localStorage\.setItem\(|fetch\(|\/api\/ai-questions/);
 }
});
test('The official curriculum and legacy introductions both render matching workshop and generic explorer',()=>{
 const curriculum=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 for(const content of [curriculum,trails]){
  assert.match(content,/resolveLanguageLab/);
  assert.match(content,/<LanguageLabPanel/);
  assert.match(content,/<StudyExplorationPanel/);
  assert.match(content,/<MathLabPanel/);
  assert.match(content,/<ScienceLabPanel/);
  assert.match(content,/SkillEvolutionPanel/);
 }
 assert.match(curriculum,/readerTab==='explore'/);
 assert.match(curriculum,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
 assert.match(trails,/onGenerateAI\(lesson\.id,true\)/);
});
test('Exercises rely on original texts, evidence and do not fake scoring of written responses',()=>{
 const core=read('apps/web/src/lib/language-labs.ts');
 const common=read('apps/web/src/components/languages/LanguageLabCommon.tsx');
 const writing=read('apps/web/src/components/languages/WritingLabs.tsx');
 assert.match(core,/All excerpts, questions and feedback are original Kognos material/);
 assert.match(core,/validateChoice/);
 assert.match(common,/Conferir com evidência/);
 assert.match(common,/não alteram a evolução da habilidade/);
 assert.match(writing,/não há nota automática/);
 assert.match(writing,/não avaliam pertinência ao tema/i);
 assert.match(writing,/direitos humanos/);
 assert.doesNotMatch(common,/score\s*\+|recordAttempt\(|fetch\(|contentRequest\(/);
});
test('Writing tools distinguish an editorial drafting checklist from official evaluation',()=>{
 const core=read('apps/web/src/lib/language-labs.ts');
 assert.match(core,/grade:null/);
 assert.match(core,/sem correção oficial/);
 const writing=read('apps/web/src/components/languages/WritingLabs.tsx');
 for(const label of ['Tese','Argumento','Evidência','Conclusão','agente','ação','meio','finalidade']){
  assert.ok(writing.toLowerCase().includes(label.toLowerCase()),label);
 }
});
test('Mobile language and writing styles preserve theme variables and keyboard accessibility',()=>{
 const style=read('apps/web/src/app/kognos-languages-writing.css');
 assert.match(style,/@media\(max-width:760px\)/);
 assert.match(style,/focus-visible/);
 assert.match(style,/prefers-reduced-motion/);
 assert.match(style,/k-language-writing-field/);
 assert.match(style,/k-language-exercise-nav/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-languages-writing\.css/);
});
