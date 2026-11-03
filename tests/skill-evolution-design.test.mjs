import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('history is assembled on the server using only scoped attempts and private grading keys',()=>{
 const route=read('apps/web/src/app/api/ai-study-progress/route.ts');
 const aggregator=read('apps/web/src/lib/ai-study-progress.ts');
 assert.match(route,/\.eq\('user_id',userId\)/);
 assert.match(route,/\.select\('id,lesson_id,institution,subject,topic,difficulty,correct_index'\)/);
 assert.match(route,/\.select\('question_id,answer_index,created_at,mode'\)/);
 assert.match(aggregator,/a\.answer_index===q\.correct/);
 assert.match(aggregator,/a\.mode==='practice'&&q\.difficulty/);
 assert.match(aggregator,/inferSkillEvolution\(lessonId,records\)/);
});
test('lesson shows per-skill progress with no secondary network request and refreshes after returning from practice',()=>{
 const trails=read('apps/web/src/components/LearningTrails.tsx');
 const panel=read('apps/web/src/components/SkillEvolutionPanel.tsx');
 const subjects=read('apps/web/src/components/SubjectDashboard.tsx');
 assert.match(trails,/<SkillEvolutionPanel/);
 assert.match(trails,/aiProgress\?\.skillEvolution\?\.find/);
 assert.match(trails,/onPractice=\{\(\)=>onGenerateAI\(lesson\.id,true\)\}/);
 assert.match(trails,/kognos:ai-answer-recorded/);
 assert.match(trails,/if\(active&&historyChangedWhileAway\.current\)/);
 assert.match(panel,/skill-evolution-list/);
 assert.match(panel,/block\.difficulty\.advanced/);
 assert.match(panel,/Blocos inferidos pelo intervalo entre respostas/);
 assert.doesNotMatch(panel,/fetch\(/);
 assert.match(subjects,/evolution\.changePoints/);
});
