import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const screens=[
 'NumberSetsLab','ProportionalityLab','SequenceLab','ExponentialLogLab',
 'CombinatoricsLab','LinearSystemsLab','SolidGeometryLab','UnitConversionLab','PeriodicWaveLab'
];
test('Stage 2 contains nine lazy-loaded specialized math lab screens',()=>{
 const registry=read('apps/web/src/components/math/MathLabPanel.tsx');
 for(const screen of screens){
  assert.ok(registry.includes("import('./"+screen+"')"),'Missing lazy import '+screen);
  const component=read('apps/web/src/components/math/'+screen+'.tsx');
  assert.ok(component.includes('MathStage'),'Missing standalone stage '+screen);
  assert.ok(component.includes('useState'),'Missing interactive state '+screen);
  assert.doesNotMatch(component,/contentRequest\(|\/api\/ai-questions\/submit|recordAttempt\(|localStorage\.setItem|fetch\(/);
 }
});
test('Existing eight math labs are preserved in the independent hub and grading remains isolated',()=>{
 const registry=read('apps/web/src/components/math/MathLabPanel.tsx');
 for(const name of ['ScientificNotationLab','PercentageExplorer','EquationWorkbench',
  'FunctionGraphLab','GeometryWorkbench','ProbabilityLab','StatisticsLab','TrigonometryLab'])
   assert.ok(registry.includes(name),name+' was removed');
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 assert.match(hub,/<MathLabPanel/);
 assert.match(trails,/<LaboratoryHub/);
 assert.match(room,/<TopicLessonSections/);
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(trails,/SkillEvolutionPanel/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
});

test('Extra math interfaces retain accessible controls and mobile-first styling',()=>{
 const css=read('apps/web/src/app/kognos-math-stage2.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/k-math-sequence-list/);
 assert.match(css,/k-math-unit-pair/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-math-stage2\.css/);
 const source=read('apps/web/src/components/math/PeriodicWaveLab.tsx');
 assert.match(source,/role="img"/);
 assert.match(source,/aria-label=/);
});
