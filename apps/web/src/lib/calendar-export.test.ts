import {test} from 'node:test';
import assert from 'node:assert/strict';
import {exportStudyCalendar} from './calendar-export.ts';
import type {StudyTask} from './cloud-study-model.ts';

test('exports scheduled and all-day events including events crossing midnight',()=>{
 const tasks:StudyTask[]=[
  {id:'a',date:'2026-11-02',title:'Física, química; revisão',subject:'Física',minutes:45,done:false,kind:'suggested',startTime:'23:30'},
  {id:'b',date:'2026-11-03',title:'História',subject:'História',minutes:25,done:false,kind:'manual'}
 ];
 const ics=exportStudyCalendar(tasks,new Date('2026-11-02T14:00:00Z'));
 assert.ok(ics.includes('BEGIN:VCALENDAR\r\nVERSION:2.0'));
 assert.ok(ics.includes('DTSTART:20261102T233000\r\nDTEND:20261103T001500'));
 assert.ok(ics.includes('DTSTART;VALUE=DATE:20261103\r\nDTEND;VALUE=DATE:20261104'));
 assert.ok(ics.includes('SUMMARY:Física\\, química\\; revisão'));
 assert.equal(ics.match(/BEGIN:VEVENT/g)?.length,2);
});
test('omits invalid civil dates and nonpositive durations',()=>{
 const invalid:StudyTask={id:'bad',date:'2026-02-30',title:'X',subject:'Matemática',minutes:20,done:false,kind:'manual'};
 assert.equal(exportStudyCalendar([invalid,{...invalid,date:'2026-11-02',minutes:0}]).includes('BEGIN:VEVENT'),false);
});
