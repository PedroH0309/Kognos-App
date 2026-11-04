import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const modules={
 PhysicsLabs:['MotionLab','WavesLab','CircuitsLab','ThermalLab'],
 ChemistryLabs:['AtomLab','StoichiometryLab','SolutionsLab','PhLab'],
 BiologyLabs:['GeneticsLab','PopulationLab','TrophicLab','CellCycleLab']
};
test('Each of 12 science experiments is a real stateful component with lazy routing',()=>{
 const registry=read('apps/web/src/components/science/ScienceLabPanel.tsx');
 const model=read('apps/web/src/lib/science-labs.ts');
 for(const [file,names] of Object.entries(modules)){
  const code=read('apps/web/src/components/science/'+file+'.tsx');
  for(const name of names){
   assert.match(code,new RegExp('export function '+name+'\\('));
   assert.ok(registry.includes("m=>m."+name),'Missing lazy import '+name);
  }
  assert.match(code,/useState/);
  assert.match(code,/ScienceSlider/);
  assert.match(code,/ScienceStage/);
  assert.doesNotMatch(code,/fetch\(|contentRequest\(|localStorage\.setItem\(|\/api\/ai-questions/);
 }
 assert.match(model,/if\(group==='fisica'\)/);
 assert.match(model,/if\(group==='quimica'\)/);
 assert.match(model,/if\(group==='biologia'\)/);
 assert.doesNotMatch(registry,/fetch\(|localStorage\.setItem\(/);
});
test('All science laboratories are mounted in curriculum and legacy trails without replacing guided study',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 for(const contents of [room,trails]){
  assert.match(contents,/resolveScienceLab/);
  assert.match(contents,/<ScienceLabPanel/);
  assert.match(contents,/<StudyExplorationPanel/);
  assert.match(contents,/SkillEvolutionPanel/);
  assert.match(contents,/<MathLabPanel/);
 }
 assert.match(room,/readerTab==='explore'/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
 assert.match(trails,/onGenerateAI\(lesson\.id,true\)/);
});
test('Science labs distinguish illustrative models from authentic practical experiments and scored progress',()=>{
 const common=read('apps/web/src/components/science/ScienceLabCommon.tsx');
 const physics=read('apps/web/src/components/science/PhysicsLabs.tsx');
 const chemistry=read('apps/web/src/components/science/ChemistryLabs.tsx');
 const biology=read('apps/web/src/components/science/BiologyLabs.tsx');
 assert.match(common,/não experimento físico/);
 assert.match(common,/não registra nota/);
 assert.match(physics,/modelo ideal|Modelo ideal/);
 assert.match(chemistry,/Não tente executar a reação/);
 assert.match(chemistry,/25 °C/);
 assert.match(biology,/probabilidades teóricas/);
 assert.match(biology,/regra dos 10%/i);
 assert.match(biology,/não representa meiose/i);
});
test('Styles are imported last and implement mobile breakpoints and keyboard focus',()=>{
 const css=read('apps/web/src/app/kognos-science-labs.css');
 const layout=read('apps/web/src/app/layout.tsx');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css, /focus-visible/);
 assert.match(css,/k-science-controls/);
 assert.match(css,/k-science-grid/);
 assert.match(layout,/kognos-science-labs\.css/);
});
