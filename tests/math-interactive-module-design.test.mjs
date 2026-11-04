import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const modules=['ScientificNotationLab','PercentageExplorer','EquationWorkbench','FunctionGraphLab',
 'GeometryWorkbench','ProbabilityLab','StatisticsLab','TrigonometryLab'];

test('Mathematics has eight separately lazy-loaded interactive modules',()=>{
 const registry=read('apps/web/src/components/math/MathLabPanel.tsx');
 for(const module of modules){
  assert.match(registry,new RegExp("import\\('./"+module+"'\\)"));
  const body=read('apps/web/src/components/math/'+module+'.tsx');
  assert.match(body,/MathStage/);
  assert.doesNotMatch(body,/\/api\/ai-questions|\/api\/content\/answer|contentRequest\(/);
 }
});
test('Interactive Math is independently accessible by subject without changing lesson practice',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 assert.match(hub,/<MathLabPanel/);
 assert.match(hub,/<MathVisualPlayground/);
 assert.match(hub,/resolveMathLab/);
 assert.match(room,/<TopicLessonSections/);
 assert.match(room,/onOpenLab\(detail\.topic\)/);
 assert.match(trails,/<LaboratoryHub/);
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(trails,/SkillEvolutionPanel/);
 assert.match(trails,/onGenerateAI\(lesson\.id,true\)/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
});

test('Study controls remain independent of account progress and support mobile sizes',()=>{
 const core=read('apps/web/src/lib/math-labs.ts');
 const css=read('apps/web/src/app/kognos-math-labs.css');
 assert.match(core,/if\(fold\(subject\).trim\(\)!=='matematica'\)return null/);
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/k-math-controls/);
 assert.match(css,/k-curriculum-tabs/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-math-labs\.css/);
});
