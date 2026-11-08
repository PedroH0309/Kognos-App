import {test} from 'node:test';
import assert from 'node:assert/strict';
import {weeklyAreaPaths} from './dashboard-area-path.ts';

test('weekly area is a cubic curve joined to the original real-data points',()=>{
 const path=weeklyAreaPaths([{x:20,y:150},{x:130,y:100},{x:240,y:130},{x:350,y:60}],302);
 assert.ok(path.line.startsWith('M 20 150 C '));
 assert.equal((path.line.match(/ C /g)||[]).length,3);
 assert.ok(path.line.endsWith('350 60'));
 assert.ok(path.area.startsWith(path.line));
 assert.ok(path.area.endsWith('L 350 302 L 20 302 Z'));
});
test('flat zero-activity week is honest rather than inventing peaks',()=>{
 const path=weeklyAreaPaths([{x:0,y:302},{x:100,y:302},{x:200,y:302}],302);
 assert.ok(path.line.startsWith('M 0 302'));
 assert.ok(!path.line.includes('NaN'));
 assert.ok(!path.line.includes('Infinity'));
 assert.equal([...path.line.matchAll(/ C ([^ ]+) ([^ ]+) ([^ ]+) ([^ ]+) ([^ ]+) ([^ ]+)/g)]
  .every(m=>Number(m[2])===302&&Number(m[4])===302&&Number(m[6])===302),true);
});
test('turning points do not generate overshoot beyond observed values',()=>{
 const points=[{x:20,y:200},{x:130,y:70},{x:240,y:140},{x:350,y:90},{x:460,y:280}];
 const path=weeklyAreaPaths(points,302);
 const segments=[...path.line.matchAll(/ C ([^ ]+) ([^ ]+) ([^ ]+) ([^ ]+) ([^ ]+) ([^ ]+)/g)];
 assert.equal(segments.length,points.length-1);
 for(let i=0;i<segments.length;i++){
  const min=Math.min(points[i].y,points[i+1].y),max=Math.max(points[i].y,points[i+1].y);
  assert.ok(Number(segments[i][2])>=min&&Number(segments[i][2])<=max);
  assert.ok(Number(segments[i][4])>=min&&Number(segments[i][4])<=max);
 }
});
test('missing, singular and invalid data do not crash the display',()=>{
 assert.deepEqual(weeklyAreaPaths([],302),{line:'',area:''});
 assert.deepEqual(weeklyAreaPaths([{x:5,y:10}],302),{line:'M 5 10',area:'M 5 10 L 5 302 Z'});
 assert.deepEqual(weeklyAreaPaths([{x:5,y:10},{x:5,y:7}],302),{line:'',area:''});
 assert.deepEqual(weeklyAreaPaths([{x:5,y:NaN}],302),{line:'',area:''});
});
