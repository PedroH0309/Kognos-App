import {test} from 'node:test';
import assert from 'node:assert/strict';
import {brazilCivilDay,weeklyStudyActivity} from './dashboard-weekly-activity.ts';

test('chart starts at zero without fabricating learning history',()=>{
 const rows=weeklyStudyActivity([],new Date('2026-11-02T16:00:00Z'));
 assert.equal(rows.length,7);
 assert.deepEqual(rows.map(v=>v.count),[0,0,0,0,0,0,0]);
 assert.equal(rows.at(-1)?.date,'2026-11-02');
});
test('last seven São Paulo days count actual registered answers only',()=>{
 const now=new Date('2026-11-02T16:00:00Z');
 const result=weeklyStudyActivity([
  {createdAt:'2026-11-02T02:00:00Z'}, // November 1 in São Paulo
  {createdAt:'2026-11-02T14:00:00Z'}, // November 2
  {createdAt:'2026-10-27T19:00:00Z'}, // exactly 6 days before
  {createdAt:'2026-10-25T14:00:00Z'}, // outside window
  {createdAt:'not-a-date'},
 ],now);
 assert.deepEqual(result.map(x=>x.date),['2026-10-27','2026-10-28','2026-10-29','2026-10-30','2026-10-31','2026-11-01','2026-11-02']);
 assert.deepEqual(result.map(x=>x.count),[1,0,0,0,0,1,1]);
 assert.equal(result.at(-1)?.day,'Seg');
});
test('Brazilian date boundary does not shift with UTC midnight',()=>{
 assert.equal(brazilCivilDay(new Date('2026-11-02T01:20:00Z')),'2026-11-01');
 assert.equal(brazilCivilDay(new Date('invalid')),null);
});
