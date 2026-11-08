import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('published lessons present separate authored theory, activities and resolved examples',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const reading=read('apps/web/src/components/TopicLessonSections.tsx');
 const legacy=read('apps/web/src/components/InteractiveCourseLesson.tsx');
 assert.match(room,/<TopicLessonSections/);
 assert.match(room,/readerTab==='activities'/);
 assert.match(room,/readerTab==='explanations'/);
 assert.match(reading,/lesson\.sections\.map/);
 assert.match(reading,/lesson\.tasks\.filter/);
 assert.match(reading,/section\.steps\.map/);
 assert.match(reading,/task\.solution/);
 assert.match(reading,/section\.pitfall/);
 assert.match(legacy,/section\.steps\.slice\(0,shown\)/);
 assert.doesNotMatch(reading,/recordAttempt\(|contentRequest\(/);
});

test('curriculum topics have distinct lesson, materials, and evolution views',()=>{
 const source=read('apps/web/src/components/CurriculumRoom.tsx');
 for(const tab of ['lesson','materials','evolution']){
  assert.match(source,new RegExp("readerTab==='"+tab+"'"));
 }
 assert.match(source,/SkillEvolutionPanel/);
 assert.match(source,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
});

test('mobile subject navigation shows either lesson list or the selected classroom, with a return button',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const css=read('apps/web/src/app/kognos-classrooms.css');
 assert.match(trails,/setMobilePane\('list'\)/);
 assert.match(trails,/setMobilePane\('lesson'\)/);
 assert.match(trails,/k-classroom-back/);
 assert.match(trails,/InteractiveIntroLesson/);
 assert.match(css,/is-mobile-list \.learning-lesson-detail \{display:none;/);
 assert.match(css,/is-mobile-lesson \.learning-index \{display:none;/);
 assert.match(css,/\.course-room-embedded \.course-reader \{[^}]*padding:0/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-classrooms\.css/);
});

test('lesson reflection and hints are not recorded as measured mastery',()=>{
 const studio=read('apps/web/src/components/InteractiveCourseLesson.tsx');
 const intro=read('apps/web/src/components/InteractiveIntroLesson.tsx');
 assert.doesNotMatch(studio,/contentRequest\(|\/api\/ai-questions\/submit/);
 assert.doesNotMatch(intro,/contentRequest\(|\/api\/ai-questions\/submit/);
 assert.match(studio,/não são enviadas nem registradas como nota ou domínio/i);
 assert.match(intro,/não altera seu mapa de domínio/i);
});
