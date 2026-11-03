import {test} from 'node:test';
import assert from 'node:assert/strict';
import {inferSkillEvolution,type VerifiedSkillAttempt} from './skill-evolution.ts';
import {assessSkillMasteryEvidence,prioritySkillLessonId} from './skill-mastery-evidence.ts';

type Difficulty='basic'|'intermediate'|'advanced';
const levels:Difficulty[]=[...Array(3).fill('basic'),...Array(4).fill('intermediate'),...Array(3).fill('advanced')];
function run(day:number,hour:number,wrong:number[],prefix:string):VerifiedSkillAttempt[]{
 const base=Date.parse(`2026-11-${String(day).padStart(2,'0')}T${String(hour).padStart(2,'0')}:00:00Z`);
 return levels.map((difficulty,i)=>({questionId:`${prefix}-${i}`,difficulty,
  correct:!wrong.includes(i),createdAt:new Date(base+i*60000).toISOString()}));
}
const strong=[3,7]; // exactly 8/10: basic 3/3, intermediate 3/4, advanced 2/3
test('unpracticed and partial skills never claim mastery',()=>{
 const empty=assessSkillMasteryEvidence([]);
 assert.equal(empty.stage,'no-evidence');
 assert.equal(empty.completedPractices,0);
 const partial=inferSkillEvolution('math-percentages',run(1,9,[], 'one').slice(0,4));
 assert.equal(partial.mastery.stage,'exploring');
 assert.equal(partial.mastery.completedPractices,0);
});
test('one full high-scoring practice remains developing, not consistent',()=>{
 const result=inferSkillEvolution('math-percentages',run(1,9,strong,'a'));
 assert.equal(result.mastery.stage,'developing');
 assert.equal(result.mastery.latestCompleteAccuracy,80);
 assert.equal(result.mastery.completedPractices,1);
 assert.equal(result.mastery.distinctPracticeDays,1);
});
test('two good sessions on one day demonstrate consistency but not long-term retention',()=>{
 const data=[...run(1,9,strong,'a'),...run(1,13,strong,'b')];
 const result=inferSkillEvolution('math-percentages',data);
 assert.equal(result.mastery.stage,'consistent');
 assert.equal(result.mastery.distinctPracticeDays,1);
 assert.match(result.mastery.recommendation,/outro dia/);
});
test('two strong sessions spaced by 24+ hours support only INITIAL observed retention',()=>{
 const result=inferSkillEvolution('math-percentages',[
  ...run(1,9,strong,'a'),...run(3,9,strong,'b')
 ]);
 assert.equal(result.mastery.stage,'retention-observed');
 assert.equal(result.mastery.distinctPracticeDays,2);
 assert.equal(result.mastery.completedPractices,2);
 assert.match(result.mastery.reason,/intervalo de pelo menos 24 horas/);
 assert.doesNotMatch(result.mastery.label,/definitivo/i);
});
test('a high basic score alone cannot disguise weak advanced performance',()=>{
 const result=inferSkillEvolution('math-percentages',[
  ...run(1,9,[7,8,9],'a'),...run(3,9,[7,8,9],'b')
 ]);
 assert.equal(result.mastery.stage,'developing');
 assert.match(result.mastery.recommendation,/avançadas/);
});
test('latest regression revokes consistency despite two earlier strong sessions',()=>{
 const result=inferSkillEvolution('math-percentages',[
  ...run(1,9,strong,'a'),...run(3,9,strong,'b'),...run(6,9,[0,1,2,3,4,5,6],'c')
 ]);
 assert.equal(result.mastery.stage,'developing');
});
test('repeated answers to the same question cannot complete a progressive practice',()=>{
 const repeated=run(1,9,strong,'a').map(item=>({...item,questionId:'same-question'}));
 const result=inferSkillEvolution('math-percentages',repeated);
 assert.equal(result.blocks[0].complete,false);
 assert.equal(result.mastery.stage,'exploring');
});
test('recommendation prioritizes unfinished or struggling skills before retained topics',()=>{
 const retained=inferSkillEvolution('strong',[...run(1,9,strong,'a'),...run(3,9,strong,'b')]).mastery;
 const struggling=inferSkillEvolution('weak',run(2,9,[7,8,9],'c')).mastery;
 const inProgress=inferSkillEvolution('partial',run(3,9,[],'d').slice(0,4)).mastery;
 const lessons=[{id:'strong'},{id:'weak'},{id:'partial'},{id:'never'}];
 const signals=new Map([['strong',retained],['weak',struggling],['partial',inProgress]]);
 assert.equal(prioritySkillLessonId(lessons,signals,new Date('2026-11-12T09:00:00Z')),'partial');
 assert.equal(prioritySkillLessonId(lessons,new Map(),new Date('2026-11-12T09:00:00Z')),null);
});
