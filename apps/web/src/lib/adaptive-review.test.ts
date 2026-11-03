import {test} from 'node:test';
import assert from 'node:assert/strict';
import {addCalendarDays,localDateKey,reviewCounts,reviewItems,selectExploratoryDiagnostic,evaluateExploratoryDiagnostic} from './adaptive-review.ts';
import {demoQuestions,type QuestionAttempt} from './demo-questions.ts';
const at=(questionId:string,answerIndex:number,date:string):QuestionAttempt=>({questionId,answerIndex,subject:'ignored client hint',correct:!Boolean(answerIndex),createdAt:`${date}T12:00:00`,mode:'practice'});
const today=new Date(2026,10,1,15);
test('review list covers precisely the canonical authored lesson/question set',()=>{
 const items=reviewItems([],today);
 assert.equal(items.length,80);
 assert.deepEqual(reviewCounts(items),{due:0,scheduled:0,notStarted:80});
 assert.ok(items.every(x=>x.status==='not-started'));
});
test('wrong responses are due immediately; wrong client-side correct flag is not trusted',()=>{
 const [item]=reviewItems([at('q01',0,'2026-11-01')],today).filter(x=>x.question.id==='q01');
 assert.equal(item.status,'due');assert.equal(item.lastCorrect,false);assert.equal(item.distinctDayStreak,0);
});
test('correct response gets one-day review, never full mastery',()=>{
 const item=reviewItems([at('q01',2,'2026-11-01')],today).find(x=>x.question.id==='q01')!;
 assert.equal(item.status,'scheduled');assert.equal(item.dueDate,'2026-11-02');assert.equal(item.distinctDayStreak,1);
});
test('consecutive correct dates advance modestly; same-day repeated attempts do not inflate intervals',()=>{
 const items=reviewItems([at('q01',2,'2026-10-28'),at('q01',2,'2026-10-28'),at('q01',2,'2026-10-30')],today);
 const i=items.find(x=>x.question.id==='q01')!;
 assert.equal(i.distinctDayStreak,2);assert.equal(i.dueDate,'2026-11-02');assert.equal(i.status,'scheduled');
});
test('a new error resets the review interval',()=>{
 const item=reviewItems([at('q01',2,'2026-10-27'),at('q01',0,'2026-11-01')],today).find(x=>x.question.id==='q01')!;
 assert.equal(item.lastCorrect,false);assert.equal(item.status,'due');
});
test('date math works across month, year and daylight-saving boundaries',()=>{
 assert.equal(addCalendarDays('2026-12-31',1),'2027-01-01');
 assert.equal(localDateKey(today),'2026-11-01');
 assert.equal(addCalendarDays('2026-02-28',1),'2026-03-01');
});
test('diagnostic has one representative item per subject with no repeats',()=>{
 const list=selectExploratoryDiagnostic([]);
 assert.equal(list.length,16);assert.equal(new Set(list.map(x=>x.subject)).size,16);
 assert.equal(new Set(list.map(x=>x.id)).size,16);
 const withHistory=selectExploratoryDiagnostic([at('q01',2,'2026-10-31')]);
 assert.ok(withHistory.some(q=>q.id==='q02'));
});
test('diagnostic evaluates using canonical answer index, not browser correct field',()=>{
 const q=demoQuestions.find(x=>x.id==='q01')!;
 const report=evaluateExploratoryDiagnostic([q],[{questionId:'q01',answerIndex:2}]);
 assert.equal(report.correct,1);assert.equal(report.answered,1);
 assert.equal(evaluateExploratoryDiagnostic([q],[{questionId:'q01',answerIndex:99}]).answered,0);
});