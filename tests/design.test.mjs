import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read = p => readFileSync(new URL(p, import.meta.url), 'utf8');
const design=read('../apps/web/src/app/design-system.css');
const app=read('../apps/web/src/components/KognosApp.tsx');
const tutor=read('../apps/web/src/app/api/tutor/route.ts');
const providers=read('../apps/web/src/lib/ai-provider.ts');
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
  const motion=read('../apps/web/src/components/KognosMotion.tsx');
  assert.match(motion,/mobile-sidebar-scrim/);
  assert.match(app,/AnimatedSidebarScrim/);
  assert.match(app,/sidebarCollapsed/);
});

test('NVIDIA configurável somente no servidor, sem segredo publicado no bundle',()=>{
  assert.ok(existsSync(new URL('../CONFIGURAR_API_NVIDIA.bat',import.meta.url)));
  assert.ok(existsSync(new URL('../scripts/configurar-nvidia.ps1',import.meta.url)));
  assert.match(providers,/env\.NVIDIA_API_KEY/);
  assert.match(tutor,/requestAI\('tutor'/);
  assert.doesNotMatch(app,/NEXT_PUBLIC_NVIDIA/);
  assert.doesNotMatch(app,/nvapi-[A-Za-z0-9_-]{24,}/);
  assert.doesNotMatch(design,/nvapi-[A-Za-z0-9_-]{24,}/);
});

test('chat informa processamento externo sem interromper a cada mensagem',()=>{
  assert.match(assistant,/kog-ai-notice/);
  assert.match(assistant,/providerName/);
  assert.match(assistant,/openai.com\/policies\/privacy-policy/);
  assert.doesNotMatch(app,/Marque a autorização antes de enviar/);
  assert.doesNotMatch(tutor,/body\.consent/);
});


test('Kog opens as a dedicated page and keeps the chat mounted between navigation changes',()=>{
  assert.match(app, /<KogAssistant key=\{user.id\} active=\{view==='tutor'\}/);
  assert.match(app, /className="kognos-tutor-workspace" hidden=\{view!=='tutor'\}/);
  assert.match(app, /if\(v==='tutor'\)\{openAssistant\(\)/);
  assert.match(app, /setTutorReturnView\(view\)/);
  assert.doesNotMatch(app, /kog-launcher|assistantOpen/);
  assert.match(assistant, /className=\{`kog-page/);
  assert.doesNotMatch(assistant, /kog-launcher|kog-drawer-scrim|role="dialog"/);
  assert.match(assistant, /quickPromptForView/);
  assert.match(assistant, /currentUserRef/);
  const style=read('../apps/web/src/app/kognos-tutor-page.css');
  assert.match(style, /\.kognos-tutor-workspace\[hidden\]/);
  assert.match(style, /\.kog-page-empty/);
  assert.match(style, /@media\(max-width:560px\)/);
});

test('mascot uses genuine Three.js 3D meshes and respects reduced motion',()=>{
  assert.match(model,/import\('three'\)/);
  assert.match(model,/THREE.WebGLRenderer/);
  assert.match(model,/SphereGeometry/);
  assert.match(model,/TubeGeometry/);
  assert.match(model,/prefers-reduced-motion/);
  assert.match(model,/setFallback\(true\)/);
});