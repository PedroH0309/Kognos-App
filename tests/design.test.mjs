import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read = p => readFileSync(new URL(p, import.meta.url), 'utf8');
const design=read('../apps/web/src/app/design-system.css');
const app=read('../apps/web/src/components/KognosApp.tsx');
const tutor=read('../apps/web/src/app/api/tutor/route.ts');
const assistant=read('../apps/web/src/components/KogAssistant.tsx');
const model=read('../apps/web/src/components/KogMascot3D.tsx');

test('paleta oficial presente e utilizada pelos temas claro/escuro',()=>{
  for(const hex of ['#101B33','#273A61','#5B4DE3','#38CDE5','#F7F9FC','#EDF1F7','#202633','#111722','#18B78A','#F0AD4E','#E46D75','#1D2638','#778398','#E0E6EF']){
    assert.ok(design.includes(hex),`cor oficial ausente: ${hex}`);
  }
  assert.match(design,/\.app-layout\.theme-light/);
  assert.match(design,/\.app-layout\.theme-dark/);
});

test('scrollbar customizada e acessível e navegação móvel',()=>{
  assert.match(design,/scrollbar-color:/);
  assert.match(design,/::-webkit-scrollbar-thumb/);
  assert.match(design,/prefers-reduced-motion/);
  assert.match(app,/mobile-sidebar-scrim/);
  assert.match(app,/sidebarCollapsed/);
});

test('NVIDIA configurável somente no servidor, sem segredo publicado no bundle',()=>{
  assert.ok(existsSync(new URL('../CONFIGURAR_API_NVIDIA.bat',import.meta.url)));
  assert.ok(existsSync(new URL('../scripts/configurar-nvidia.ps1',import.meta.url)));
  assert.match(tutor,/process\.env\.NVIDIA_API_KEY/);
  assert.doesNotMatch(app,/NEXT_PUBLIC_NVIDIA/);
  assert.doesNotMatch(app,/nvapi-[A-Za-z0-9_-]{24,}/);
  assert.doesNotMatch(design,/nvapi-[A-Za-z0-9_-]{24,}/);
});

test('chat informa processamento externo sem interromper a cada mensagem',()=>{
  assert.match(assistant,/kog-ai-notice/);
  assert.match(assistant,/NVIDIA/);
  assert.doesNotMatch(app,/Marque a autorização antes de enviar/);
  assert.doesNotMatch(tutor,/body\.consent/);
});


test('Kog floats globally, keeps chat state mounted, and opens from navigation',()=>{
  assert.match(app,/<KogAssistant open=\{assistantOpen\}/);
  assert.match(app,/function navigate\(v:View\)/);
  assert.match(app,/if\(v==='tutor'\)\{setAssistantOpen\(true\)/);
  assert.match(assistant,/kog-launcher/);
  assert.match(assistant,/kog-drawer/);
  assert.match(assistant,/Escape/);
  assert.match(assistant,/quickPromptForView/);
  assert.match(assistant,/currentUserRef/);
  assert.match(design,/@media\(max-width:700px\)/);
});

test('mascot uses genuine Three.js 3D meshes and respects reduced motion',()=>{
  assert.match(model,/import\('three'\)/);
  assert.match(model,/THREE.WebGLRenderer/);
  assert.match(model,/SphereGeometry/);
  assert.match(model,/TubeGeometry/);
  assert.match(model,/prefers-reduced-motion/);
  assert.match(model,/setFallback\(true\)/);
});