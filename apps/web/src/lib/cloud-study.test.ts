import assert from 'node:assert/strict';
import test from 'node:test';
import {attemptFromRow,attemptToRow,taskFromRow,taskToRow} from './cloud-study-model.ts';
const owner='edb7afe2-5181-4a79-8b6a-f15dc768bc5d';
test('task conversion preserves owner fields and task semantics',()=>{
 const task={id:'3f6ecde4-ce81-4c71-a0a7-69f179e18cf2',date:'2026-11-02',title:'Revisar física',minutes:25,done:false,kind:'manual' as const,subject:'Física'};
 const row=taskToRow(task,owner);assert.equal(row.user_id,owner);assert.deepEqual(taskFromRow(row),task);
});
test('attempt conversion preserves original demo result without inventing grade',()=>{
 const a={questionId:'q10',subject:'Biologia',correct:true,answerIndex:2,createdAt:'2026-11-01T17:00:00.000Z',mode:'practice' as const};
 const row=attemptToRow(a,owner,'3f6ecde4-ce81-4c71-a0a7-69f179e18cf2');
 assert.equal(row.user_id,owner);assert.deepEqual(attemptFromRow(row),a);
});

test('scheduled tasks persist their optional time while older records remain valid',()=>{
 const scheduled={
  id:'1f6ecde4-ce81-4c71-a0a7-69f179e18cf2',date:'2026-11-02',
  title:'Revisar funções',subject:'Matemática',minutes:45,
  done:false,kind:'manual' as const,startTime:'13:30'
 };
 const row=taskToRow(scheduled,owner);
 assert.equal(row.start_time,'13:30');
 assert.deepEqual(taskFromRow({...row,start_time:'13:30:00'}),scheduled);
 const unscheduled={...scheduled,id:'2f6ecde4-ce81-4c71-a0a7-69f179e18cf2',startTime:undefined};
 const legacy=taskToRow(unscheduled,owner);
 assert.equal('start_time' in legacy,false);
 const restored=taskFromRow(legacy);
 assert.equal(restored.startTime,undefined);
 assert.equal('startTime' in restored,false);
});
