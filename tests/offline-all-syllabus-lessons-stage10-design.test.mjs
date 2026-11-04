import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('Offline starter lessons appear for all curricular topics without a separate generation request',()=>{
 const route=read('apps/web/src/app/api/content/route.ts');
 assert.match(route,/import \{starterCoverage,starterLesson\}/);
 assert.match(route,/const lesson=published\?\.kind==='lesson'\?published:topic\?starterLesson\(topic\):null/);
 assert.match(route,/if\(!db\)return contentJson\(\{topics:curriculumTopics\.map/);
 assert.match(route,/starterStatus\(t\)/);
 assert.match(route,/if\(row&&\(row\.archived\|\|!row\.published\)\)/);
 assert.match(route,/status:r\?r\.archived\?'archived':r\.published_revision\?'published':'draft':starterStatus\(t\)/);
 assert.doesNotMatch(route,/await fetch\(/);
});
test('Existing classroom and new curriculum navigation correctly label preloaded, not teacher-reviewed modules',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const flow=read('apps/web/src/components/CurriculumStudyFlow.tsx');
 const reader=read('apps/web/src/components/TopicLessonSections.tsx');
 assert.match(room,/Aula-base pré-carregada/);
 assert.match(room,/detail\.lesson\.review==='introductory'/);
 assert.match(flow,/Guia inicial pré-carregado/);
 assert.match(flow,/Aula-base pré-carregada/);
 assert.match(flow,/starter','guided/);
 assert.match(reader,/REVISÃO DOCENTE PENDENTE/);
 assert.match(reader,/não representa aula integral revisada por professor/);
 assert.match(reader,/lesson\.sections\.map/);
 assert.match(reader,/lesson\.tasks\.filter/);
 assert.match(reader,/task\.solution/);
 assert.match(reader,/onActivityProgress/);
});
test('No untrusted official exam content, copyrighted third-party lessons or model keys ship in the fallback',()=>{
 const patterns=read('apps/web/src/lib/starter-lesson-patterns.ts');
 const lesson=read('apps/web/src/lib/starter-lessons.ts');
 assert.match(lesson,/O exemplos e exercícios|Os exemplos e exercícios a seguir são originais do Kognos/);
 assert.match(lesson,/sem homologação docente/);
 assert.match(lesson,/findProvaoTopic/);
 assert.match(patterns,/matchTeachingSeed/);
 for(const file of [patterns,lesson]){
  assert.doesNotMatch(file,/supabase\.from|SUPABASE_SECRET_KEY|GEMINI_API_KEY|GROQ_API_KEY|fetch\(/);
 }
});
