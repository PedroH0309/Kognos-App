import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

const paths=[
 'apps/web/src/components/KognosApp.tsx',
 'apps/web/src/components/CurriculumStudyFlow.tsx',
 'apps/web/src/components/CurriculumRoom.tsx',
 'apps/web/src/components/LearningTrails.tsx',
 'apps/web/src/components/SubjectDashboard.tsx',
 'apps/web/src/components/AiQuestionStudio.tsx',
 'apps/web/src/components/ExamSources.tsx',
 'apps/web/src/components/ContentAdmin.tsx'
];

test('public exam selectors show only the active exam catalogue, not ETEC',()=>{
 const blueprint=read('apps/web/src/lib/exam-blueprints.ts');
 assert.match(blueprint,/publicExamIds:readonly ExamId\[\]=\['enem','fuvest','saresp','vunesp'\]/);
 for(const path of paths){
  const source=read(path);
  assert.match(source,/publicExamEntries\(\)/,path);
  assert.doesNotMatch(source,/Object\.entries\(examBlueprints\)/,path);
 }
});
test('a legacy ETEC profile does not reappear in active catalogue or the account summary',()=>{
 const app=read(paths[0]);
 const syllabus=read('apps/web/src/lib/exam-syllabus.ts');
 assert.match(syllabus,/profile\.examFocus==='etec'\?null:profile\.examFocus/);
 assert.match(syllabus,/filter\(exam=>exam!=='etec'\)/);
 assert.match(app,/p\.examFocus!=='etec'/);
 assert.match(app,/\.filter\(e=>e!=='etec'\)\.map\(e=>examBlueprints\[e\]\.label\)/);
});
test('catalogue endpoint no longer enumerates ETEC-only course topics',()=>{
 const cat=read('apps/web/src/lib/curriculum-catalog.ts');
 assert.match(cat,/for\(const exam of publicExamIds\)/);
 assert.doesNotMatch(cat,/for\(const exam of Object\.keys\(examBlueprints\)/);
 assert.match(read('apps/web/src/app/api/content/route.ts'),/curriculumTopics/);
});
test('the misleading 100% label for practice coverage is replaced by actual topic counts',()=>{
 const subjects=read('apps/web/src/components/SubjectDashboard.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(subjects,/>Temas praticados<\/strong>/);
 assert.match(subjects,/\$\{snapshot\.practiced\}\/\$\{snapshot\.total\}/);
 assert.doesNotMatch(subjects,/\$\{snapshot\.coverage\}%/);
 assert.match(trails,/>Temas praticados<\/span>/);
 assert.match(trails,/\$\{connected\.practiced\} de \$\{connected\.total\}/);
 assert.doesNotMatch(trails,/\$\{progress\}%/);
 // Progress bars still indicate the proportion of actual recorded attempts.
 assert.match(subjects,/width:\x60\$\{ready\?snapshot\.coverage:0\}%\x60/);
 assert.match(trails,/aria-label="Tópicos com questões respondidas"/);
});
test('ETEC historic references remain intact without exposing them in the source workspace',()=>{
 const source=read('apps/web/src/components/ExamSources.tsx');
 assert.match(source,/source\.institution!=='etec'/);
 assert.match(source,/topic\.institution!=='etec'/);
 assert.match(source,/visibleSources\.some\(source=>source\.id===topic\.source_id\)/);
});
