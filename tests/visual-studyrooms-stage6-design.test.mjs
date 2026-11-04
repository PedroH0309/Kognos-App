import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('Every curriculum topic opens a visual map rather than a default three-textarea questionnaire',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const explorer=read('apps/web/src/components/StudyExplorationPanel.tsx');
 const studio=read('apps/web/src/components/TopicVisualStudio.tsx');
 assert.match(room,/readerTab==='explore'/);
 assert.match(room,/Abrir experiência visual deste tema/);
 assert.match(room,/<StudyExplorationPanel/);
 assert.match(explorer,/<TopicVisualStudio \{\.\.\.input\}\/>/);
 assert.match(explorer,/Escrever observações \(opcional\)/);
 assert.match(explorer,/<details className="k-study-notes-details">/);
 assert.match(studio,/k-visual-concept-map/);
 assert.match(studio,/k-visual-lenses/);
 assert.match(studio,/k-visual-flow-card/);
 assert.match(studio,/setOrder/);
 assert.match(studio,/aria-pressed/);
});
test('Interactive cellular model contains genuine SVG elements, clickable anatomy and zoom',()=>{
 const cell=read('apps/web/src/components/science/CellAnatomyLab.tsx');
 const science=read('apps/web/src/components/science/ScienceLabPanel.tsx');
 assert.match(cell,/<svg viewBox=/);
 assert.match(cell,/cellKinds\.find/);
 assert.match(cell,/cellKinds\.map/);
 assert.match(cell,/setZoom/);
 assert.match(cell,/role="button"/);
 assert.match(cell,/onKeyDown/);
 assert.match(cell,/cellParts\[type\]/);
 assert.match(cell,/parts\[active\]\.function/);
 assert.match(science,/import\('\.\/CellAnatomyLab'\)/);
 assert.match(read('apps/web/src/lib/science-labs.ts'),/isCellStructureTopic/);
});
test('The screenshot topic intertextuality has a dedicated manipulable text-comparison lab',()=>{
 const lab=read('apps/web/src/components/languages/IntertextualityLab.tsx');
 const panel=read('apps/web/src/components/languages/LanguageLabPanel.tsx');
 assert.match(lab,/Intertextualidade/);
 assert.match(lab,/Interdiscursividade/);
 assert.match(lab,/k-intertext-diagram/);
 assert.match(lab,/setRelation/);
 assert.match(lab,/setVoice/);
 assert.match(lab,/setHighlight/);
 assert.match(lab,/markShared/);
 assert.match(panel,/import\('\.\/IntertextualityLab'\)/);
});
test('Mathematics preserves seventeen specialist labs and adds graphical sandbox to unmatched topics',()=>{
 const router=read('apps/web/src/components/math/MathLabPanel.tsx');
 const sandbox=read('apps/web/src/components/math/MathVisualPlayground.tsx');
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.equal([...router.matchAll(/dynamic\(\(\)=>import\('\.\/[^']+'\)\)/g)].length,17);
 assert.match(sandbox,/<svg viewBox=/);
 assert.match(sandbox,/setSlope/);
 assert.match(sandbox,/setIntercept/);
 assert.match(sandbox,/setX/);
 assert.match(sandbox,/não deve ser confundido com um simulador específico/);
 assert.match(room,/detail\.topic\.subject==='Matemática'&&!mathLab&&<MathVisualPlayground/);
 assert.match(trails,/lesson\.subject==='Matemática'&&!mathLab&&<MathVisualPlayground/);
 assert.match(room,/<ScienceLabPanel/);
 assert.match(room,/<LanguageLabPanel/);
 assert.match(room,/<HumanitiesLabPanel/);
 assert.match(trails,/<StudyExplorationPanel/);
});
test('New visual interactions do not write graded attempts, call AI or store user data',()=>{
 const paths=[
 'apps/web/src/components/TopicVisualStudio.tsx',
 'apps/web/src/components/science/CellAnatomyLab.tsx',
 'apps/web/src/components/languages/IntertextualityLab.tsx',
 'apps/web/src/components/math/MathVisualPlayground.tsx'
 ];
 for(const path of paths){
  const content=read(path);
  assert.doesNotMatch(content,/fetch\(|localStorage\.setItem|contentRequest\(|recordAttempt\(|\/api\/ai-questions\//);
 }
 assert.match(read('apps/web/src/components/CurriculumRoom.tsx'),/SkillEvolutionPanel/);
 assert.match(read('apps/web/src/components/LearningTrails.tsx'),/SkillEvolutionPanel/);
});
test('Responsive and accessible layout covers diagrams, text comparisons and phones',()=>{
 const css=read('apps/web/src/app/kognos-visual-studios.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/focus-visible/);
 assert.match(css,/k-intertext-diagram/);
 assert.match(css,/k-cell-canvas/);
 assert.match(css,/k-visual-concept-map/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-visual-studios\.css/);
});
