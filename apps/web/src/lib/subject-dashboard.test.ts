import {test} from 'node:test';
import assert from 'node:assert/strict';
import {subjectSnapshots,subjectDashboardTotals} from './subject-dashboard.ts';
import type {QuestionAttempt} from './demo-questions.ts';

const at=(questionId:string,answerIndex:number,createdAt='2026-10-01T12:00:00.000Z',correct=false):QuestionAttempt=>({questionId,answerIndex,createdAt,correct,subject:'Matemática',mode:'practice'});
const today=new Date('2026-10-20T12:00:00.000Z');

test('subjects show independent coverage rather than mirrored lesson pages',()=>{
 const snaps=subjectSnapshots([],today);
 const totals=subjectDashboardTotals(snaps);
 assert.equal(snaps.length,7);
 assert.equal(totals.subjects,7);
 assert.equal(totals.active,0);
 assert.equal(totals.practiced,0);
 assert.equal(totals.total,20);
 assert.equal(totals.due,0);
 assert.ok(snaps.every(s=>s.status==='not-started'&&s.recommended));
});

test('subject progress uses canonical answers instead of untrusted correct and subject flags',()=>{
 const snaps=subjectSnapshots([at('q01',2,'2026-10-01T12:00:00.000Z',false),at('q02',0,'2026-10-04T12:00:00.000Z',true)],today);
 const math=snaps.find(s=>s.subject==='Matemática')!;
 assert.equal(math.practiced,2);
 assert.equal(math.correctSamples,1);
 assert.equal(math.needsReview,1);
 assert.equal(math.notPracticed,2);
 assert.equal(math.coverage,50);
 assert.equal(math.dueReviews,2);
 assert.equal(math.attempts,2);
 assert.equal(math.lastAttemptAt,'2026-10-04T12:00:00.000Z');
 assert.equal(math.recommended?.questionId,'q02');
 assert.equal(math.status,'needs-review');
 assert.equal(subjectDashboardTotals(snaps).active,1);
 assert.equal(snaps.find(s=>s.subject==='Biologia')?.practiced,0);
});

test('unknown, invalid answers and invalid timestamps cannot inflate subject statistics',()=>{
 const rows=[at('q999',0),at('q01',99),at('q01',2,'not-a-date'),at('q01',2)];
 const math=subjectSnapshots(rows,today).find(s=>s.subject==='Matemática')!;
 assert.equal(math.attempts,1);
 assert.equal(math.practiced,1);
 assert.equal(math.correctSamples,1);
 assert.equal(math.dueReviews,1);
});

test('sample-covered means all demo items attempted, not definitive mastery',()=>{
 const rows=[at('q01',2),at('q02',3),at('q03',1),at('q04',0)];
 const math=subjectSnapshots(rows,today).find(s=>s.subject==='Matemática')!;
 assert.equal(math.practiced,4);
 assert.equal(math.total,4);
 assert.equal(math.status,math.needsReview>0?'needs-review':'sample-covered');
});