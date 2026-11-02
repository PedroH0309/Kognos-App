import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildAchievementSummary} from './ai-achievements.ts';
const row=(id:string,correct:boolean,createdAt='2026-11-02T12:00:00Z',subject='Matemática',mode:'practice'|'mock'='practice')=>({id,correct,subject,createdAt,mode});
test('one attempt per question contributes XP and prevents farming after repeats',()=>{
 const summary=buildAchievementSummary([row('ai:q1',true),row('ai:q1',false,'2026-11-02T13:00:00Z'),row('demo:q01',false)],new Date('2026-11-02T14:00:00Z'));
 assert.equal(summary.answered,2);assert.equal(summary.correct,1);assert.equal(summary.xp,12);
 assert.equal(summary.accuracy,50);assert.equal(summary.level,1);
 assert.equal(summary.badges.find(b=>b.id==='first-answer')?.unlocked,true);
});
test('three days in Brazil yield streak while dates and badges are grounded',()=>{
 const rows=[
 row('1',true,'2026-10-31T15:00:00Z','Matemática'),
 row('2',true,'2026-11-01T15:00:00Z','Biologia'),
 row('3',true,'2026-11-02T15:00:00Z','Física','mock'),
 ];
 const result=buildAchievementSummary(rows,new Date('2026-11-02T16:00:00Z'));
 assert.equal(result.streakDays,3);assert.equal(result.activeDays,3);assert.equal(result.subjects,3);
 assert.equal(result.mockAnswered,1);
 assert.equal(result.badges.find(b=>b.id==='three-subjects')?.unlocked,true);
 assert.equal(result.badges.find(b=>b.id==='three-streak')?.unlocked,true);
});
test('no activity stays at level one with zero badges and no fictional points',()=>{
 const result=buildAchievementSummary([]);
 assert.equal(result.xp,0);assert.equal(result.answered,0);
 assert.equal(result.accuracy,null);assert.equal(result.unlocked,0);
 assert.equal(result.streakDays,0);
});
test('the same question cannot create more XP even if database has legacy duplicates',()=>{
 const result=buildAchievementSummary([row('a',false,'2026-11-01T12:00:00Z'),row('a',true,'2026-11-02T12:00:00Z')]);
 assert.equal(result.xp,2);
});
