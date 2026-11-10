import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('every curriculum lesson uses one centralized pedagogical reader rather than a monolithic text tab',()=>{
 const reader=read('apps/web/src/components/TopicLessonSections.tsx');
 const universal=read('apps/web/src/components/UniversalLessonReader.tsx');
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 assert.match(reader,/view==='content'&&<UniversalLessonReader/);
 assert.match(room,/<TopicLessonSections/);
 assert.match(universal,/lesson\.sections\.map/);
 assert.match(universal,/lesson\.tasks\.find/);
 assert.ok(!universal.includes('Math.random('));
});

test('universal model has objectives, context, concept development, visualization, examples, comparison, interaction, checks and consolidation',()=>{
 const s=read('apps/web/src/components/UniversalLessonReader.tsx');
 for(const phrase of ['Objetivo de aprendizagem','Por que estudar isto?',
  'Conceito e fundamentos','Desenvolvimento e aplicação',
  'Visualize a sequência de aprendizagem',
  'Exemplo aplicado e resolvido',
  'Regras, diferenças e erros frequentes',
  'Explore visualmente e teste hipóteses',
  'Teste rápido','Consolidação e folha de revisão']){
  assert.ok(s.includes(phrase),phrase);
 }
 assert.match(s,/lessonReadingBlocks\(section\.explanation\)/);
 assert.match(s,/section\.steps\.map/);
 assert.match(s,/lesson\.sections\.map/);
 assert.match(s,/everydayContextFor\(lesson\)/);
 assert.match(s,/studyMethodForSubject\(subject\)/);
});

test('visual components respect discipline matching; no generic simulation is claimed to represent content',()=>{
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 for(const symbol of ['resolveMathLab','resolveScienceLab','resolveLanguageLab','resolveHumanitiesLab'])
  assert.ok(reader.includes(symbol),symbol);
 assert.match(reader,/if\(resolveMathLab\(match\)\)/);
 assert.match(reader,/if\(resolveScienceLab\(match\)\)/);
 assert.match(reader,/if\(resolveLanguageLab\(match\)\)/);
 assert.match(reader,/if\(resolveHumanitiesLab\(match\)\)/);
 assert.match(reader,/if\(!lesson&&!introduction\)/);
 assert.match(reader,/Material introdutório/);
});

test('formative check never masquerades as auto grading or mastery; existing graded practice stays intact',()=>{
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 const old=read('apps/web/src/components/TopicLessonSections.tsx');
 assert.match(reader,/LessonChoiceQuestion/);
 assert.match(reader,/review'\)/);
 assert.match(reader,/understood'\s*:\s*'review'/);
 assert.match(reader,/atividade é formativa e não vale nota/);
 assert.match(reader,/A autoavaliação não é nota/i);
 assert.match(old,/exerciseIds\.every\(key=>Object\.hasOwn\(next,key\)\)/);
 assert.match(old,/view==='activities'/);
 assert.match(old,/view==='explanations'/);
});

test('curriculum unit selection includes verified thematic blocks, review sheet and existing mock exam entry',()=>{
 const flow=read('apps/web/src/components/CurriculumStudyFlow.tsx');
 const block=read('apps/web/src/lib/curriculum-learning-blocks.ts');
 const app=read('apps/web/src/components/KognosApp.tsx');
 assert.match(flow,/groupLearningBlocks\(visibleTopics,subject\)/);
 assert.match(flow,/step==='review'/);
 assert.match(flow,/Revisão do bloco/);
 assert.match(flow,/reviewNotes\.map/);
 assert.match(flow,/Abrir simulados do Kognos/);
 assert.match(app,/onOpenSimulados=\{\(\)=>navigate\('simulados'\)\}/);
 assert.match(block,/findProvaoTopic/);
 assert.match(block,/preserve/i);
});
test('mobile readability, focus visibility and reduced motion are built in',()=>{
 const css=read('apps/web/src/app/kognos-universal-lessons.css');
 const layout=read('apps/web/src/app/layout.tsx');
 for(const s of ['.k-universal-prose','.k-universal-chapter','.k-universal-concept-flow',
  '.k-universal-diagnostic','.k-curriculum-review-card',
  '@media(max-width:700px)','prefers-reduced-motion:reduce',':focus-visible'])assert.ok(css.includes(s),s);
 assert.ok(layout.includes('kognos-universal-lessons.css'));
});
