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

test('ETEC is absent from every public exam dropdown without deleting old blueprints',()=>{
 const blueprint=read('apps/web/src/lib/exam-blueprints.ts');
 assert.match(blueprint,/publicExamIds:readonly ExamId\[\]=\['enem','fuvest','saresp','vunesp'\]/);
 for(const path of paths){
  const source=read(path);
  assert.match(source,/publicExamEntries\(\)/,path);
  assert.doesNotMatch(source,/Object\.entries\(examBlueprints\)/,path);
 }
});

test('legacy ETEC profiles do not reactivate the hidden exam on the website',()=>{
 const app=read(paths[0]);
 const syllabus=read('apps/web/src/lib/exam-syllabus.ts');
 assert.match(syllabus,/profile\.examFocus==='etec'\?null:profile\.examFocus/);
 assert.match(syllabus,/filter\(exam=>exam!=='etec'\)/);
 assert.match(app,/p\.examFocus!=='etec'/);
 assert.match(app,/\.filter\(e=>e!=='etec'\)\.map\(e=>examBlueprints\[e\]\.label\)/);
});

test('student study discovery hides ETEC-only material without altering internal catalogue',()=>{
 const cat=read('apps/web/src/lib/curriculum-catalog.ts');
 const flow=read('apps/web/src/components/CurriculumStudyFlow.tsx');
 assert.match(cat,/for\(const exam of Object\.keys\(examBlueprints\)/);
 assert.match(flow,/setTopics\(\(response\.topics as CurriculumListTopic\[\]\)\.filter\(topic=>/);
 assert.match(flow,/topic\.exams\.some\(exam=>exam!=='etec'\)/);
 assert.match(read('apps/web/src/app/api/content/route.ts'),/curriculumTopics/);
});

test('100-percent progress indicators remain unchanged, as explicitly requested',()=>{
 const subjects=read('apps/web/src/components/SubjectDashboard.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 assert.match(subjects,/>Cobertura de prática<\/strong>/);
 assert.match(subjects,/\$\{snapshot\.coverage\}%/);
 assert.match(trails,/>Prática registrada<\/span>/);
 assert.match(trails,/\$\{progress\}%/);
});

test('ETEC historic source records remain in the database but not in public listings',()=>{
 const source=read('apps/web/src/components/ExamSources.tsx');
 assert.match(source,/source\.institution!=='etec'/);
 assert.match(source,/topic\.institution!=='etec'/);
 assert.match(source,/visibleSources\.some\(source=>source\.id===topic\.source_id\)/);
});
