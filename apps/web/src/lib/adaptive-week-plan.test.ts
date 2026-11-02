import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createAdaptiveWeekPlan,studyPriorities} from './adaptive-week-plan.ts';
import {initialProfile} from './profile.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import type {StudyTask} from './cloud-study-model.ts';

test('a recorded wrong demo answer elevates the matching subject without trusting correct flag',()=>{
 const wrong:QuestionAttempt={questionId:'q14',subject:'Matemática',answerIndex:0,correct:true,createdAt:'2026-10-31T10:00:00Z',mode:'practice'};
 const rankings=studyPriorities([wrong],null);
 assert.equal(rankings[0].subject,'Biologia');
 assert.equal(rankings[0].needsReview,true);
 const p={...initialProfile,weeklyDays:[0,1,2,3,4,5,6]};
 let nextId=0;
 const generated=createAdaptiveWeekPlan(p,[],[wrong],null,new Date(2026,10,1,12),()=>`test-${++nextId}`);
 assert.equal(generated.length,7);
 assert.equal(generated[0].subject,'Biologia');
 assert.match(generated[0].title,/Revisar Biologia/);
 assert.ok(generated.every(row=>row.minutes<=p.sessionMinutes));
});
test('respects daily budget, free days, and does not overwrite scheduled tasks',()=>{
 const p={...initialProfile,weeklyDays:[0,1,2],dailyMinutes:30,sessionMinutes:25};
 const manual:StudyTask={id:'m',date:'2026-11-01',subject:'Matemática',kind:'manual',done:false,title:'Redação',minutes:30};
 const suggested:StudyTask={id:'s',date:'2026-11-02',subject:'Física',kind:'suggested',done:false,title:'Leitura',minutes:20};
 const generated=createAdaptiveWeekPlan(p,[manual,suggested],[],null,new Date(2026,10,1,12),()=>`new`);
 assert.equal(generated.length,3);
 assert.deepEqual(generated.filter(x=>x.id==='new').map(x=>x.date),['2026-11-03']);
 assert.deepEqual(generated.find(x=>x.id==='m'),manual);
 assert.deepEqual(generated.find(x=>x.id==='s'),suggested);
});
test('AI-linked errors prioritize the correct lesson without inventing an exam score',()=>{
 const ai={lessons:[{lessonId:'math-percentages',attempts:2,distinctQuestions:2,correct:0,incorrect:2,practice:2,mock:0,lastCorrect:false,lastAttemptAt:'2026-11-01T13:00:00Z'}],totalAttempts:2,unlinkedAttempts:0,sampleLimited:false};
 const first=studyPriorities([],ai)[0];
 assert.equal(first.subject,'Matemática');assert.equal(first.topic,'Porcentagem');assert.equal(first.needsReview,true);
});