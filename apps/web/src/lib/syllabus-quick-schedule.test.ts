import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialProfile} from './profile.ts';
import {nextSyllabusTopicSlot,pendingTopicTask,suggestSyllabusTopicSchedule} from './syllabus-quick-schedule.ts';
import {taskCoversSyllabusTopic} from './syllabus-progress.ts';
import type {StudyTask} from './cloud-study-model.ts';

const monday=new Date(2026,10,2,12);
const task=(date:string,minutes:number,title='Estudar História: Brasil colonial · prática guiada',done=false):StudyTask=>({
 id:date+title,date,subject:'História',title,done,minutes,kind:'manual'
});

test('quick scheduling respects weekday availability, remaining time and accessibility blocks',()=>{
 const profile={...initialProfile,weeklyDays:[2,4],dailyMinutes:60,sessionMinutes:40,
  adaptations:['short_blocks'] as typeof initialProfile.adaptations};
 const result=suggestSyllabusTopicSchedule(profile,[],'História','Brasil colonial',monday);
 assert.deepEqual(result,{date:'2026-11-03',minutes:25,title:'Estudar História: Brasil colonial · prática guiada'});
});
test('skips overbooked days, including already completed scheduled minutes',()=>{
 const p={...initialProfile,weeklyDays:[2],dailyMinutes:40,sessionMinutes:25};
 const busy=[task('2026-11-03',28),task('2026-11-10',20)];
 const result=nextSyllabusTopicSlot(p,busy,monday);
 assert.deepEqual(result,{date:'2026-11-10',minutes:20});
 assert.equal(nextSyllabusTopicSlot({...p,weeklyDays:[]},[],monday),null);
 assert.equal(nextSyllabusTopicSlot({...p,dailyMinutes:10},[],monday),null);
 assert.equal(nextSyllabusTopicSlot(p,[task('2026-11-03',40),task('2026-11-10',40)],monday),null);
});
test('prevents duplicate unfinished study topics while allowing repeat after completion',()=>{
 const title='Estudar Literatura: Leitura obrigatória FUVEST 2027: Opúsculo Humanitário — Nísia Floresta · prática guiada';
 const pending:StudyTask={id:'1',date:'2026-11-04',subject:'Literatura',title,minutes:25,kind:'manual',done:false};
 const second='Leitura obrigatória FUVEST 2027: Nebulosas — Narcisa Amália';
 const first='Leitura obrigatória FUVEST 2027: Opúsculo Humanitário — Nísia Floresta';
 assert.equal(pendingTopicTask([pending],'Literatura',first,'2026-11-02')?.id,'1');
 assert.equal(pendingTopicTask([pending],'Literatura',second,'2026-11-02'),null);
 const p={...initialProfile,weeklyDays:[1,2,3],dailyMinutes:45,sessionMinutes:25};
 assert.equal(suggestSyllabusTopicSchedule(p,[pending],'Literatura',first,monday),null);
 const repeated=suggestSyllabusTopicSchedule(p,[{...pending,done:true}],'Literatura',first,monday,true);
 assert.ok(repeated?.title.startsWith('Revisar Literatura:'));
 assert.ok(repeated&&taskCoversSyllabusTopic({subject:'Literatura',title:repeated.title},'Literatura',first));
});
test('does not schedule beyond a two-week window and never displaces user tasks',()=>{
 const p={...initialProfile,weeklyDays:[1],dailyMinutes:30,sessionMinutes:25};
 const filled=[task('2026-11-02',30),task('2026-11-09',30)];
 assert.equal(suggestSyllabusTopicSchedule(p,filled,'Física','Óptica geométrica',monday),null);
 assert.equal(filled.length,2);
});

test('does not schedule after the official target date configured by the student',()=>{
 const p={...initialProfile,weeklyDays:[2],dailyMinutes:45,sessionMinutes:25,targetDate:'2026-11-02'};
 assert.equal(nextSyllabusTopicSlot(p,[],monday),null);
 assert.equal(suggestSyllabusTopicSchedule(p,[],'Matemática','Funções exponenciais',monday),null);
 assert.deepEqual(nextSyllabusTopicSlot({...p,targetDate:'2026-11-03'},[],monday),{date:'2026-11-03',minutes:25});
});
