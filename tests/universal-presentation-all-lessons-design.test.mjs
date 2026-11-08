import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {curriculumTopics} from '../apps/web/src/lib/curriculum-catalog.ts';
import {starterLesson} from '../apps/web/src/lib/starter-lessons.ts';
import {parseCourseDocument} from '../apps/web/src/lib/course-content.ts';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('All active course routes share one universal lesson presentation',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const courses=read('apps/web/src/app/cursos/page.tsx');
 const sections=read('apps/web/src/components/TopicLessonSections.tsx');
 assert.match(courses,/<CurriculumRoom/);
 assert.match(room,/<TopicLessonSections/);
 assert.match(trails,/<TopicLessonSections/);
 assert.match(sections,/view==='content'&&<UniversalLessonReader/);
});

test('Every authored lesson moves through concepts, development, visualisation, examples, comparisons, relevant labs, checks and consolidation in that order',()=>{
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 const authored=reader.slice(reader.indexOf('  {lesson?isGenericStarter'),reader.indexOf('  </>:introduction&&'));
 assert.ok(authored.startsWith('  {lesson?isGenericStarter'));
 const checkpoints=[
  'id="k-lesson-concept"',
  'id="k-lesson-development"',
  'id="k-lesson-visual"',
  '<LessonExamples lesson={lesson}/>',
  '<LessonComparisons lesson={lesson}/>',
  'id="k-lesson-interactivity"',
  '<LessonQuickChecks lesson={lesson}',
  'id="k-lesson-summary"'
 ];
 let before=-1;
 for(const step of checkpoints){
  const position=authored.indexOf(step);
  assert.ok(position>before,'Wrong or missing pedagogical stage: '+step);
  before=position;
 }
 assert.match(reader,/lesson\.sections\.slice\(1\)\.map/);
 assert.match(reader,/section\.steps\.map/);
 assert.match(reader,/lesson\.sections\.map/);
 assert.match(reader,/lesson\.tasks\.find/);
 assert.match(reader,/Conceito que deve orientar a resposta/);
 assert.match(reader,/Erro ou limite que exige atenção/);
});

test('Study navigation explicitly links available content stages and omits irrelevant simulations',()=>{
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 for(const number of ['01','02','03','04','05','06','07','08','09','10'])
  assert.ok(reader.includes("number:'"+number+"'"),number);
 assert.match(reader,/LessonContentsNav hasVisual=\{Boolean\(lesson\)\}/);
 assert.match(reader,/hasLab=\{Boolean\(lesson&&!isGenericStarter&&hasLab\)\}/);
 assert.match(reader,/id="k-lesson-objectives"/);
 assert.match(reader,/if\(resolveMathLab\(match\)\)/);
 assert.match(reader,/if\(resolveScienceLab\(match\)\)/);
 assert.match(reader,/if\(resolveLanguageLab\(match\)\)/);
 assert.match(reader,/if\(resolveHumanitiesLab\(match\)\)/);
});

test('Incomplete curricular guides and legacy introductions use the same stage labels but disclose their gaps',()=>{
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 const guide=reader.slice(reader.indexOf('function GuidedIntro'),reader.indexOf('export default function UniversalLessonReader'));
 const intro=reader.slice(reader.indexOf('  </>:introduction&&'),reader.indexOf('  <footer className="k-universal-source"'));
 for(const path of [guide,intro]){
  for(const id of ['k-lesson-concept','k-lesson-development','k-lesson-examples','k-lesson-comparisons','k-lesson-check','k-lesson-summary']){
   assert.ok(path.includes(id),id);
  }
 }
 assert.match(guide,/aula completa/);
 assert.match(intro,/Material introdutório:/);
 assert.match(reader,/não é uma avaliação de domínio/);
 assert.match(reader,/não atribui acerto automático/);
 assert.doesNotMatch(reader,/recordAttempt\(|\/api\/ai-questions\/submit|localStorage\.setItem\(/);
});

test('All subjects remain available with valid lesson records, without data migrations or invented mastery',()=>{
 const subjects=new Set();
 let authored=0,guided=0;
 for(const topic of curriculumTopics){
  const lesson=starterLesson(topic);
  subjects.add(topic.subject);
  assert.ok(parseCourseDocument(lesson),topic.id+' must remain valid');
  assert.equal(lesson.id,topic.id);
  if(lesson.authorship.includes('módulo introdutório estruturado'))guided++;
  else authored++;
 }
 assert.ok(subjects.size>=14,'Coverage must include all examination disciplines, not only the Provão Paulista');
 assert.ok(authored>80,'Authorial modules must remain available');
 assert.ok(guided>0,'Incomplete guide content must not be presented as a finished course');
});

test('Responsive navigation remains keyboard accessible and respects reduced motion',()=>{
 const css=read('apps/web/src/app/kognos-universal-lessons.css');
 assert.match(css,/\.k-universal-lesson-nav a:focus-visible/);
 assert.match(css,/\.k-universal-learning-section/);
 assert.match(css,/@media\(max-width:700px\)/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/scroll-margin-top/);
});
