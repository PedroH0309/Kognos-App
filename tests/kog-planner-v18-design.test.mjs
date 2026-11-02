import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('Kog checks server readiness and offers transparent local authored learning',()=>{
 const assistant=read('apps/web/src/components/KogAssistant.tsx');
 const route=read('apps/web/src/app/api/ai-status/route.ts');
 const tutor=read('apps/web/src/app/api/tutor/route.ts');
 assert.match(assistant,/\/api\/ai-status/);
 assert.match(assistant,/localStudyGuide\(prompt,studyContext\)/);
 assert.match(assistant,/Biblioteca local · sem IA/);
 assert.match(assistant,/Teorema de Pitágoras/);
 assert.match(route,/publicAIReadiness\(process\.env\)/);
 assert.doesNotMatch(route,/NextResponse\.json\(process\.env/);
 assert.match(tutor,/AI_NOT_CONFIGURED/);
});
test('planner combines demo and AI evidence and respects student scheduling',()=>{
 const planner=read('apps/web/src/components/StudyPlanner.tsx');
 const engine=read('apps/web/src/lib/adaptive-week-plan.ts');
 assert.match(planner,/getCloudAttempts/);
 assert.match(planner,/useAIStudyProgress/);
 assert.match(planner,/createPersonalizedStudyWeek\(profile,tasks,history,aiEvidence,new Date\(\),\(\)=>crypto.randomUUID\(\),weeklyTopics,officialTopics\)/);
 assert.match(read('apps/web/src/lib/personalized-study-cycle.ts'),/profile\.weeklyDays/);
 assert.match(planner,/Analisando histórico/);
 assert.match(engine,/connectedSubjectProgress/);
 assert.match(engine,/profile\.weeklyDays/);
 assert.match(engine,/profile\.dailyMinutes-allocated/);
 assert.doesNotMatch(engine,/Math\.random\(/);
});
test('offline resources and private provider credentials remain distinct',()=>{
 const guide=read('apps/web/src/lib/offline-study-guide.ts');
 const readme=read('README.md');
 assert.match(guide,/não uma resposta gerada por IA/i);
 assert.match(readme,/What's new in v1\.8/);
 const status=read('apps/web/src/lib/ai-readiness.ts');
 assert.doesNotMatch(status,/return.*NVIDIA_API_KEY/);
});