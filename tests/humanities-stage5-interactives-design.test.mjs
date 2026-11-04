import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

const groups={
 HistoryLabs:['HistoryTimelineLab','HistorySourcesLab','HistoryCausalityLab'],
 GeographyLabs:['GeographyCartographyLab','GeographyLandscapeLab','GeographyIndicatorsLab'],
 PhilosophyLabs:['PhilosophyLogicLab','PhilosophyKnowledgeLab','PhilosophyEthicsLab'],
 SociologyLabs:['SociologyWorkLab','SociologyCultureLab','SociologyCitizenshipLab']
};

test('Stage 5 implements twelve separate stateful and lazy-loaded humanities labs',()=>{
 const router=read('apps/web/src/components/humanities/HumanitiesLabPanel.tsx');
 for(const [file,names] of Object.entries(groups)){
  const code=read('apps/web/src/components/humanities/'+file+'.tsx');
  assert.match(code,/useState/);
  assert.match(code,/HumanitiesStage/);
  for(const name of names){
   assert.ok(code.includes('export function '+name+'('),name+' missing');
   assert.ok(router.includes('m=>m.'+name),name+' not registered');
  }
  assert.doesNotMatch(code,/contentRequest\(|localStorage\.setItem\(|fetch\(|\/api\/ai-questions/);
 }
 assert.doesNotMatch(router,/localStorage\.setItem\(|contentRequest\(|fetch\(/);
});

test('Humanities labs remain selectable by subject and topic while study and progress stay independent',()=>{
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const catalog=read('apps/web/src/lib/laboratory-catalog.ts');
 assert.match(catalog,/resolveHumanitiesLab/);
 assert.match(hub,/<HumanitiesLabPanel/);
 assert.match(hub,/<MathLabPanel/);
 assert.match(hub,/<ScienceLabPanel/);
 assert.match(hub,/<LanguageLabPanel/);
 assert.match(hub,/<TopicVisualStudio/);
 assert.match(room,/<TopicLessonSections/);
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(trails,/SkillEvolutionPanel/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
 assert.match(trails,/onGenerateAI\(lesson\.id,true\)/);
});

test('Historical timelines, source stories, geographic maps and social surveys disclose provenance',()=>{
 const history=read('apps/web/src/components/humanities/HistoryLabs.tsx');
 const geography=read('apps/web/src/components/humanities/GeographyLabs.tsx');
 const sociology=read('apps/web/src/components/humanities/SociologyLabs.tsx');
 const model=read('apps/web/src/lib/humanities-labs.ts');
 assert.match(history,/não são documentos primários autênticos/);
 assert.match(history,/duração real entre acontecimentos/);
 assert.match(geography,/não corresponde a municípios reais/);
 assert.match(geography,/não representam relevo, cobertura vegetal ou infraestrutura/);
 assert.match(geography,/bairro HIPOTÉTICO/);
 assert.match(sociology,/Dados inteiramente fictícios/);
 assert.match(model,/NÃO é documento histórico/);
 assert.match(model,/simulados|simulada|simulado/);
});
test('Philosophical ethics and social inquiry do not assert automatic moral or political outcomes',()=>{
 const philosophy=read('apps/web/src/components/humanities/PhilosophyLabs.tsx');
 const sociology=read('apps/web/src/components/humanities/SociologyLabs.tsx');
 const common=read('apps/web/src/components/humanities/HumanitiesLabCommon.tsx');
 assert.match(philosophy,/não confunda argumento válido com premissas verdadeiras/);
 assert.match(philosophy,/sem declarar uma única resposta moral automática/);
 assert.match(sociology,/não recomenda posicionamento partidário/);
 assert.match(common,/sem nota ou correção oficial/);
 assert.match(common,/não são salvas nem alteram o mapa de domínio/);
});
test('Humanities use responsive styles, focus indicators and distinct context labels',()=>{
 const css=read('apps/web/src/app/kognos-humanities-labs.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/focus-visible/);
 assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/k-humanities-map-grid/);
 assert.match(css,/k-humanities-timeline/);
 assert.match(css,/k-humanities-context/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-humanities-labs\.css/);
 const router=read('apps/web/src/components/humanities/HumanitiesLabPanel.tsx');
 assert.match(router,/Tema selecionado/);
 assert.match(router,/não substitui a aula completa/);
});
