import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('skill evidence is computed only after server correction and never returns question keys',()=>{
 const route=read('apps/web/src/app/api/ai-study-progress/route.ts');
 const aggregate=read('apps/web/src/lib/ai-study-progress.ts');
 const skill=read('apps/web/src/lib/skill-evolution.ts');
 const evidence=read('apps/web/src/lib/skill-mastery-evidence.ts');
 assert.match(route,/\.eq\('user_id',userId\)/);
 assert.match(route,/\.select\('id,lesson_id,institution,subject,topic,difficulty,correct_index'\)/);
 assert.match(aggregate,/a\.answer_index===q\.correct/);
 assert.match(aggregate,/a\.mode==='practice'&&q\.difficulty/);
 assert.match(skill,/new Set\(rows\.map\(row=>row\.questionId\)\)\.size===10/);
 assert.match(skill,/distinctRecentQuestions/);
 assert.match(evidence,/distinctRecentQuestions&&previous&&latest/);
 assert.doesNotMatch(aggregate,/return \{[^\n]+correct_index/);
});
test('the student can filter a qualitative mastery map and open targeted lesson or practice',()=>{
 const map=read('apps/web/src/components/SkillMasteryMap.tsx');
 const subjects=read('apps/web/src/components/SubjectDashboard.tsx');
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const timeline=read('apps/web/src/components/SkillEvolutionPanel.tsx');
 assert.match(map,/Mapa de domínio por habilidade/);
 assert.match(map,/Em aprendizagem/);
 assert.match(map,/Sem histórico/);
 assert.match(map,/onPractice\(lesson\.id\)/);
 assert.match(map,/onOpenLesson\(lesson\)/);
 assert.match(map,/lessonGenerationPreset\(lesson\.id\)/);
 assert.match(subjects,/<SkillMasteryMap/);
 assert.match(subjects,/prioritySkillLessonId\(topics,skillEvidenceById\)/);
 assert.match(subjects,/contentTab==='map'/);
 assert.match(trails,/prioritySkillLessonId\(roadmap\.steps\.map/);
 assert.match(trails,/masteryById\.get\(item\.id\)/);
 assert.match(timeline,/mastery\.recommendation/);
 assert.doesNotMatch(map,/fetch\(/);
});
