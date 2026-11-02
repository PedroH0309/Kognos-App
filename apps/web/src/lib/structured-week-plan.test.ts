import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createStructuredWeekPlan} from './structured-week-plan.ts';
import {initialProfile} from './profile.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import type {StudyTask} from './cloud-study-model.ts';

test('splits available days between distinct subjects without exceeding daily minutes',()=>{
 const profile={...initialProfile,weeklyDays:[1,2],dailyMinutes:60,sessionMinutes:25};
 let index=0;
 const rows=createStructuredWeekPlan(profile,[],[],null,new Date(2026,10,2,12),()=>String(++index));
 assert.equal(rows.length,4);
 for(const date of ['2026-11-02','2026-11-03']){
  const day=rows.filter(row=>row.date===date);
  assert.equal(day.length,2);
  assert.notEqual(day[0].subject,day[1].subject);
  assert.ok(day.reduce((sum,row)=>sum+row.minutes,0)<=60);
 }
 assert.deepEqual(createStructuredWeekPlan(profile,rows,[],null,new Date(2026,10,2,12)),rows);
});
test('keeps manually scheduled activities and supports short study blocks',()=>{
 const profile={...initialProfile,weeklyDays:[1],dailyMinutes:45,sessionMinutes:40,adaptations:['short_blocks'] as typeof initialProfile.adaptations};
 const manual:StudyTask={id:'m',date:'2026-11-02',subject:'Português',title:'Revisar redação',minutes:15,done:false,kind:'manual'};
 const rows=createStructuredWeekPlan(profile,[manual],[],null,new Date(2026,10,2,12),()=>String(Math.random()));
 assert.deepEqual(rows.find(row=>row.id==='m'),manual);
 assert.equal(rows.filter(row=>row.kind==='suggested').length,2);
 assert.ok(rows.filter(row=>row.kind==='suggested').every(row=>row.minutes===15));
});
test('suggests a weekly checkpoint only after recorded question attempts',()=>{
 const profile={...initialProfile,weeklyDays:[1,3],dailyMinutes:60,sessionMinutes:25};
 const wrong:QuestionAttempt={questionId:'q01',subject:'Matemática',answerIndex:0,correct:true,createdAt:'2026-11-01T10:00:00Z',mode:'practice'};
 let counter=0;
 const rows=createStructuredWeekPlan(profile,[],[wrong],null,new Date(2026,10,2,12),()=>String(++counter));
 const checkpoint=rows.filter(row=>row.subject==='Reavaliação');
 assert.equal(checkpoint.length,1);
 assert.equal(checkpoint[0].date,'2026-11-04');
 assert.ok(rows.filter(row=>row.date==='2026-11-04').reduce((sum,row)=>sum+row.minutes,0)<=60);
 assert.equal(createStructuredWeekPlan(profile,[],[],null,new Date(2026,10,2,12)).some(row=>row.subject==='Reavaliação'),false);
});
