import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialProfile} from './profile.ts';
import {createSpacedReviewPlan,REVIEW_INTERVALS} from './spaced-review-plan.ts';
import type {StudyTask} from './cloud-study-model.ts';

const monday=new Date(2026,10,2,12);
const weak=[{subject:'Matemática',topic:'Funções e gráficos',incorrect:3,lastWrong:true}];
const profile={...initialProfile,weeklyDays:[2,4],dailyMinutes:60,sessionMinutes:25,targetDate:''};

test('spaces short study sessions around allowed days (D+1, D+3, D+7)',()=>{
 let serial=0;
 const result=createSpacedReviewPlan(profile,[],weak,monday,()=>String(++serial));
 assert.deepEqual(REVIEW_INTERVALS,[1,3,7]);
 assert.equal(result.topics,1);
 assert.equal(result.skipped,0);
 assert.deepEqual(result.created.map(t=>t.date),['2026-11-03','2026-11-05','2026-11-10']);
 assert.ok(result.created.every(t=>t.kind==='manual'&&t.minutes===20&&!t.done));
 assert.deepEqual(result.created.map(t=>t.title.includes('revisão espaçada')), [true,true,true]);
});
test('does not duplicate pending review sessions after refresh or repeated clicks',()=>{
 const first=createSpacedReviewPlan(profile,[],weak,monday,()=>crypto.randomUUID());
 const repeated=createSpacedReviewPlan(profile,first.created,weak,monday,()=>crypto.randomUUID());
 assert.equal(repeated.created.length,0);
 assert.equal(repeated.covered,3);
 assert.equal(repeated.skipped,0);
});
test('uses only currently wrong weekly topics and bounds processing',()=>{
 const records=[{...weak[0],lastWrong:false},{subject:'História',topic:'Segundo Reinado',incorrect:0,lastWrong:true},
 {subject:'Física',topic:'Leis de Newton',incorrect:5,lastWrong:true}];
 const result=createSpacedReviewPlan(profile,[],records,monday,()=>crypto.randomUUID());
 assert.equal(result.topics,1);
 assert.ok(result.created.every(t=>t.subject==='Física'));
});
test('preserves existing tasks, daily capacity and user-selected exam cutoff',()=>{
 const busy:StudyTask[]=[{
  id:'existing',date:'2026-11-03',subject:'Português',
  title:'Ler um capítulo',minutes:55,done:true,kind:'manual'
 }];
 const result=createSpacedReviewPlan({...profile,targetDate:'2026-11-06'},busy,weak,monday,()=>crypto.randomUUID());
 assert.equal(busy.length,1);
 assert.deepEqual(result.created.map(t=>t.date),['2026-11-05']);
 assert.equal(result.skipped,1);
 assert.equal(result.covered,1);
 assert.ok(result.created.every(t=>t.date<='2026-11-06'));
});
test('does not exceed the daily budget with multiple weak topics',()=>{
 const topics=['Cinemática','Óptica','Termodinâmica','Circuitos'].map((topic,i)=>({
  subject:'Física',topic,incorrect:5-i,lastWrong:true
 }));
 const result=createSpacedReviewPlan(profile,[],topics,monday,()=>crypto.randomUUID());
 assert.equal(result.topics,3);
 for(const date of new Set(result.created.map(item=>item.date))){
  assert.ok(result.created.filter(item=>item.date===date).reduce((sum,item)=>sum+item.minutes,0)<=60);
 }
 assert.equal(result.created.length+result.skipped+result.covered,9);
});
test('has no effect when there is no available study day or deadline has passed',()=>{
 assert.equal(createSpacedReviewPlan({...profile,weeklyDays:[]},[],weak,monday).created.length,0);
 assert.equal(createSpacedReviewPlan({...profile,targetDate:'2026-11-02'},[],weak,monday).created.length,0);
});
