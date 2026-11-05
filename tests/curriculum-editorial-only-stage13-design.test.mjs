import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('Study reader never produces AI-generated lessons from a button',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 assert.doesNotMatch(room,/\/api\/content\/generate/);
 assert.doesNotMatch(room,/Desenvolver aula completa com o Kog/);
 assert.doesNotMatch(room,/Autorizo desenvolver este assunto com IA/);
 assert.match(room,/Aprofundamento editorial ainda em elaboração/);
 assert.match(room,/stage13Lesson|TopicLessonSections/);
});
test('Old lesson generator endpoint is retired without permitting a backend AI call',()=>{
 const route=read('apps/web/src/app/api/content/generate/route.ts');
 assert.match(route,/export async function POST\(\)/);
 assert.match(route,/410/);
 assert.doesNotMatch(route,/developCourse\(/);
 assert.doesNotMatch(route,/reserve_ai_quota|kognos_claim_course|kognos_finish_course/);
});
test('Curriculum still loads authored cases and existing practice separately',()=>{
 const starter=read('apps/web/src/lib/starter-lessons.ts');
 const context=read('apps/web/src/lib/everyday-lesson-contexts.ts');
 assert.match(starter,/stage13Lesson\(topic\)/);
 assert.match(starter,/stage13Topics/);
 assert.match(context,/\.\.\.stage13EverydayContexts/);
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(room,/onGenerateAI/);
});
