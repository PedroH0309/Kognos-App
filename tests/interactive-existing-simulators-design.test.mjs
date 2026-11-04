import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('Official third-party simulations load on demand only with local permission and noncommercial mode',()=>{
 const panel=read('apps/web/src/components/PhETSimulationPanel.tsx');
 const models=read('apps/web/src/lib/third-party-simulations.ts');
 assert.match(panel,/allowNonCommercialPhET/);
 assert.match(panel,/NEXT_PUBLIC_PHET_MODE/);
 assert.match(panel,/approved&&|!approved\?/);
 assert.match(panel,/onClick=\{\(\)=>setApproved\(true\)\}/);
 assert.match(panel,/<iframe/);
 assert.match(panel,/referrerPolicy="no-referrer"/);
 assert.match(panel,/allowFullScreen/);
 assert.match(panel,/phet\.colorado\.edu/);
 assert.match(panel,/CC BY-NC 4\.0/);
 assert.match(models,/noncommercial-confirmed/);
 assert.doesNotMatch(panel,/fetch\(|contentRequest\(|localStorage\.setItem/);
});
test('Embedded simulations work in both learning experiences while keeping first-party study labs',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 for(const code of [room,trails]){
  assert.match(code,/import PhETSimulationPanel/);
  assert.match(code,/<PhETSimulationPanel/);
  assert.match(code,/<MathLabPanel/);
  assert.match(code,/<ScienceLabPanel/);
  assert.match(code,/<StudyExplorationPanel/);
  assert.match(code,/SkillEvolutionPanel/);
 }
 assert.match(room,/readerTab==='explore'/);
});
test('A full Three.js molecule scene has touch rotation, zoom, atom inspection and cleanup',()=>{
 const viewer=read('apps/web/src/components/science/Molecule3DLab.tsx');
 const router=read('apps/web/src/components/science/ScienceLabPanel.tsx');
 assert.match(viewer,/from 'three'/);
 assert.match(viewer,/OrbitControls/);
 assert.match(viewer,/new THREE\.WebGLRenderer/);
 assert.match(viewer,/raycaster\.intersectObjects/);
 assert.match(viewer,/setSelectedAtom/);
 assert.match(viewer,/controls\.enableZoom=true/);
 assert.match(viewer,/controls\.enableRotate=true/);
 assert.match(viewer,/renderer\.dispose\(\)/);
 assert.match(viewer,/controls\.dispose\(\)/);
 assert.match(viewer,/ResizeObserver/);
 assert.match(router,/molecules-3d/);
});
test('Geometry workbench is directly draggable and retains numerical inputs',()=>{
 const canvas=read('apps/web/src/components/math/DraggableGeometryCanvas.tsx');
 const workbook=read('apps/web/src/components/math/GeometryWorkbench.tsx');
 assert.match(canvas,/onPointerDown/);
 assert.match(canvas,/onPointerMove/);
 assert.match(canvas,/setPointerCapture/);
 assert.match(canvas,/getScreenCTM/);
 assert.match(canvas,/shapeFromPointer/);
 assert.match(canvas,/Math\.min\(12/);
 assert.match(workbook,/<DraggableGeometryCanvas/);
 assert.match(workbook,/MathRange/);
 assert.match(workbook,/geometryMetrics/);
});
test('Styles are responsive, focus-visible and do not hide provider attribution',()=>{
 const css=read('apps/web/src/app/kognos-external-and-3d-labs.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/focus-visible/);
 assert.match(css,/k-external-iframe/);
 assert.match(css,/k-molecule-3d-canvas/);
 assert.match(css,/k-drag-geometry-handle/);
 assert.match(css,/:fullscreen/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-external-and-3d-labs\.css/);
 assert.match(read('apps/web/.env.example'),/NEXT_PUBLIC_PHET_MODE=noncommercial-confirmed/);
});
