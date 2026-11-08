import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('Every public lesson and legacy classroom renders only alternatives A–D, never free-response inputs',()=>{
 for(const path of [
  'apps/web/src/components/TopicLessonSections.tsx',
  'apps/web/src/components/UniversalLessonReader.tsx',
  'apps/web/src/components/InteractiveCourseLesson.tsx',
  'apps/web/src/components/InteractiveIntroLesson.tsx',
  'apps/web/src/components/StudyExplorationPanel.tsx'
 ]){
  const source=read(path);
  assert.doesNotMatch(source,/<textarea\b/,path);
  assert.match(source,/LessonChoiceQuestion/,path);
 }
 const routes=read('apps/web/src/components/CurriculumRoom.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(routes,/<TopicLessonSections/);
 assert.match(trails,/<TopicLessonSections/);
});
test('Multiple-choice question has exactly four buttons, instant feedback, hints and no network or mastery writes',()=>{
 const component=read('apps/web/src/components/LessonChoiceQuestion.tsx');
 assert.match(component,/choice\.options\.map/);
 assert.match(component,/letters\[index\]/);
 assert.match(component,/aria-pressed/);
 assert.match(component,/role="status"/);
 assert.match(component,/choice\.explanation/);
 assert.match(component,/onAnswer\?\./);
 assert.doesNotMatch(component,/fetch\(|contentRequest\(|supabase|recordAttempt\(|localStorage/);
});
test('Intro exercises reuse authored question bank and generic lesson tasks reuse authored solutions, not invented answer keys',()=>{
 const source=read('apps/web/src/lib/lesson-multiple-choice.ts');
 assert.match(source,/questionForLesson\(lesson\)/);
 assert.match(source,/lesson\.tasks\.filter/);
 assert.match(source,/task\.solution/);
 assert.match(source,/source:'resolution_matching'/);
 assert.match(source,/source:'demo'/);
});
test('Activities advance after every A-D question has been answered, not after text drafts',()=>{
 const source=read('apps/web/src/components/TopicLessonSections.tsx');
 assert.match(source,/exerciseIds\.every\(key=>Object\.hasOwn\(next,key\)\)/);
 assert.match(source,/onActivityProgress\?\./);
 assert.match(source,/introductoryChoice/);
 assert.doesNotMatch(source,/updateDraft|drafts\[/);
});
