import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 civilToday,dateAtNoon,validCivilDate,shiftCivilDate,shiftCivilMonth,
 surroundingWeek,normalTime,timeRange,dayTasks,upcomingTasks,subjectTone
} from './calendar-model.ts';
import type {StudyTask} from './cloud-study-model.ts';
const t=(id:string,date:string,startTime?:string,done=false):StudyTask=>({
 id,date,title:`Revisar ${id}`,subject:'Matemática',minutes:45,
 kind:'manual',done,...(startTime?{startTime}:{})
});

test('civil day never shifts with ISO UTC conversion, including leap dates',()=>{
 assert.equal(validCivilDate('2028-02-29'),true);
 assert.equal(validCivilDate('2027-02-29'),false);
 assert.equal(validCivilDate('2026-11-31'),false);
 assert.equal(validCivilDate('bad'),false);
 assert.equal(civilToday(new Date(2026,10,2,13,0,0)),'2026-11-02');
 assert.equal(dateAtNoon('2026-11-02').getDate(),2);
 assert.equal(shiftCivilDate('2026-12-31',1),'2027-01-01');
 assert.equal(shiftCivilDate('2028-03-01',-1),'2028-02-29');
 assert.equal(surroundingWeek('2026-11-02').length,7);
 assert.equal(surroundingWeek('2026-11-02')[3],'2026-11-02');
});
test('month navigation clamps dates and crosses the year boundary',()=>{
 assert.equal(shiftCivilMonth('2026-01-31',1),'2026-02-28');
 assert.equal(shiftCivilMonth('2028-01-31',1),'2028-02-29');
 assert.equal(shiftCivilMonth('2026-12-20',1),'2027-01-20');
 assert.equal(shiftCivilMonth('2026-01-09',-1),'2025-12-09');
});
test('time parser validates and formats end times without fake hours',()=>{
 assert.equal(normalTime('08:30'),'08:30');
 assert.equal(normalTime('08:30:00'),'08:30');
 assert.equal(normalTime('24:00'),null);
 assert.equal(normalTime('08:61'),null);
 assert.equal(normalTime(undefined),null);
 assert.equal(timeRange(undefined,25),null);
 assert.equal(timeRange('08:00',45),'08:00 – 08:45');
 assert.equal(timeRange('23:30',60),'23:30 – 00:30 (+1 dia)');
});
test('only real tasks appear in selected day and unscheduled tasks stay visible',()=>{
 const rows=[t('b','2026-11-02','15:00'),t('c','2026-11-03','12:00'),
  t('a','2026-11-02','08:00'),t('legacy','2026-11-02'),t('done','2026-11-02','09:00',true)];
 const day=dayTasks(rows,'2026-11-02');
 assert.deepEqual(day.timed.map(x=>x.id),['a','done','b']);
 assert.deepEqual(day.unscheduled.map(x=>x.id),['legacy']);
 assert.equal(day.completed,1);
 assert.equal(day.minutes,4*45);
 assert.equal(day.all.length,4);
 assert.equal(dayTasks([],'2026-11-02').all.length,0);
});
test('upcoming list is only pending tasks, ordered by date and assigned hour',()=>{
 const rows=[t('later','2026-11-03','11:00'),t('now','2026-11-02','08:00'),
  t('done','2026-11-02','09:00',true),t('past','2026-11-01','07:00'),
  t('unplanned','2026-11-02')];
 assert.deepEqual(upcomingTasks(rows,'2026-11-02').map(x=>x.id),['now','unplanned','later']);
});
test('subject colors use Kognos palette groups',()=>{
 assert.equal(subjectTone('Biologia'),'green');
 assert.equal(subjectTone('Física'),'cyan');
 assert.equal(subjectTone('Matemática'),'violet');
 assert.equal(subjectTone('Sociologia'),'navy');
});
