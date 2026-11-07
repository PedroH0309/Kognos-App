import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('The Learn area exposes distinct lesson and laboratory workspaces, not nested lab cards',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const hub=read('apps/web/src/components/LaboratoryHub.tsx');
 assert.match(trails,/Aulas por matéria/);
 assert.match(trails,/Laboratório interativo/);
 assert.match(trails,/studySpace==='laboratory'/);
 assert.match(trails,/<LaboratoryHub/);
 assert.match(trails,/initialTopicId=\{labTarget\?\.id\}/);
 assert.match(trails,/onOpenLab=\{topic=>/);
 assert.match(hub,/curriculumTopics/);
 assert.match(hub,/k-lab-subjects/);
 assert.match(hub,/k-lab-topic-list/);
 assert.match(hub,/<MathLabPanel/);
 assert.match(hub,/<ScienceLabPanel/);
 assert.match(hub,/<LanguageLabPanel/);
 assert.match(hub,/<HumanitiesLabPanel/);
 assert.match(hub,/<PhETSimulationPanel/);
 assert.match(hub,/<TopicVisualStudio/);
});
test('Every curriculum lesson has its own reading text, practice and explanatory tabs',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const reading=read('apps/web/src/components/TopicLessonSections.tsx');
 const universal=read('apps/web/src/components/UniversalLessonReader.tsx');
 for(const word of ['Aula em texto','Atividades','Explicações','Materiais','Evolução'])
  assert.ok(room.includes(word),word);
 assert.match(room,/readerTab==='activities'/);
 assert.match(room,/readerTab==='explanations'/);
 assert.match(room,/<TopicLessonSections/);
 assert.match(trails,/lessonPanes\.map/);
 assert.match(trails,/<TopicLessonSections/);
 assert.match(reading,/lesson\.sections\.map/);
 assert.match(reading,/lesson\.tasks\.filter/);
 assert.match(universal,/section\.explanation/);
 assert.match(reading,/task\.prompt/);
 assert.match(reading,/task\.solution/);
 assert.match(universal,/section\.pitfall/);
 assert.match(universal,/introduction\.workedExample/);
 assert.match(universal,/introduction\.commonMistake/);
});
test('Lessons without authored content keep an honest maturity status without AI-generated lectures',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const reading=read('apps/web/src/components/TopicLessonSections.tsx');
 assert.match(room,/Aprofundamento editorial ainda em elaboração/);
 assert.doesNotMatch(room,/Desenvolver aula completa com o Kog|Autorizo desenvolver este assunto com IA/);
 assert.match(reading,/SEM AULA EDITORIAL/);
 assert.match(reading,/Não apresentamos textos gerados automaticamente como se fossem uma aula validada/);
 assert.match(reading,/Estas são orientações gerais de estudo, não exercícios específicos/);
});
test('No new lab or reading component directly scores, persists attempts or sends AI requests',()=>{
 for(const path of ['apps/web/src/components/LaboratoryHub.tsx','apps/web/src/components/TopicLessonSections.tsx']){
  const content=read(path);
  assert.doesNotMatch(content,/fetch\(|contentRequest\(|recordAttempt\(|localStorage\.setItem\(|supabase/);
 }
 assert.match(read('apps/web/src/components/LearningTrails.tsx'),/SkillEvolutionPanel/);
 assert.match(read('apps/web/src/components/CurriculumRoom.tsx'),/SkillEvolutionPanel/);
});
test('The new responsive stylesheet removes nested fixed-height lesson cards and horizontal topic tab wrapping',()=>{
 const css=read('apps/web/src/app/kognos-study-rooms-stage8.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/scroll-margin-top/);
 assert.match(css,/overflow:visible!important/);
 assert.match(css,/max-height:none!important/);
 assert.match(css,/k-study-space-tabs/);
 assert.match(css,/k-lab-subjects/);
 assert.match(css,/k-lesson-pane-tabs/);
 assert.match(css,/focus-visible/);
 assert.match(css,/prefers-reduced-motion/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-study-rooms-stage8\.css/);
});
