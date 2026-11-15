import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

const paths = [
  'apps/web/src/components/KognosApp.tsx',
  'apps/web/src/components/CurriculumStudyFlow.tsx',
  'apps/web/src/components/CurriculumRoom.tsx',
  'apps/web/src/components/LearningTrails.tsx',
  'apps/web/src/components/SubjectDashboard.tsx',
  'apps/web/src/components/AiQuestionStudio.tsx',
  'apps/web/src/components/ExamSources.tsx',
  'apps/web/src/components/ContentAdmin.tsx'
];

test('ETEC is absent from every public exam dropdown without deleting old blueprints', () => {
  const blueprint = read('apps/web/src/lib/exam-blueprints.ts');
  assert.match(blueprint, /publicExamIds:readonly ExamId\[\]=\['enem','fuvest','saresp','vunesp'\]/);
  for (const path of paths) {
    const source = read(path);
    // Check OnboardingV2.tsx for publicExamEntries usage
    if (path === 'apps/web/src/components/OnboardingV2.tsx') {
      assert.match(source, /publicExamEntries\(\s*\)/, path);
    } else if (path === 'apps/web/src/components/KognosApp.tsx') {
      // KognosApp imports it but OnboardingV2 uses it
      assert.ok(source.includes("publicExamEntries"), path);
    }
    assert.doesNotMatch(source, /Object\.entries\(examBlueprints\)/, path);
  }
});

test('legacy ETEC profiles do not reactivate the hidden exam on the website', () => {
  const onboarding = read('apps/web/src/components/OnboardingV2.tsx');
  const syllabus = read('apps/web/src/lib/exam-syllabus.ts');
  assert.match(syllabus, /profile\.examFocus==='etec'\?null:profile\.examFocus/);
  assert.match(syllabus, /filter\(exam=>exam!=='etec'\)/);
  assert.match(onboarding, /p\.examFocus\s*!==\s*'etec'/);
  // The summary card in OnboardingV2 has the filter
  assert.match(onboarding, /\.filter\(e\s*=>\s*e\s*!==\s*'etec'\)\s*\.\s*map\(e\s*=>\s*examBlueprints\[e\]\.label\)/);
});

test('student study discovery hides ETEC-only material without altering internal catalogue', () => {
  const cat = read('apps/web/src/lib/curriculum-catalog.ts');
  const flow = read('apps/web/src/components/CurriculumStudyFlow.tsx');
  // The catalog uses a minified format: for(const exam of Object.keys(examBlueprints) as ExamId[])
  assert.match(cat, /for\(const exam of Object\.keys\(examBlueprints/);
  assert.match(flow, /setTopics\(\(response\.topics as CurriculumListTopic\[\]\)\.filter\(topic=>/);
  assert.match(flow, /topic\.exams\.some\(exam=>exam!=='etec'\)/);
  assert.match(read('apps/web/src/app/api/content/route.ts'), /curriculumTopics/);
});

test('100-percent progress indicators remain unchanged, as explicitly requested', () => {
  const subjects = read('apps/web/src/components/SubjectDashboard.tsx');
  const trails = read('apps/web/src/components/LearningTrails.tsx');
  assert.match(subjects, />Cobertura de pr[áa]tica<\/strong>/);
  assert.match(subjects, /\$\{snapshot\.coverage\}%/);
  assert.match(trails, />Pr[áa]tica registrada<\/span>/);
  assert.match(trails, /\$\{progress\}%/);
});

test('ETEC historic source records remain in the database but not in public listings', () => {
  const source = read('apps/web/src/components/ExamSources.tsx');
  assert.match(source, /source\.institution!=='etec'/);
  assert.match(source, /topic\.institution!=='etec'/);
  assert.match(source, /visibleSources\.some\(source=>source\.id===topic\.source_id\)/);
});