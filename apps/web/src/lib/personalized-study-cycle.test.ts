import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialProfile} from './profile.ts';
import {demoQuestions} from './demo-questions.ts';
import {createPersonalizedStudyWeek,missedTopics,studyMethod,youtubeStudySearch,weekLearningSummary} from './personalized-study-cycle.ts';
import {selectBaselineQuestions,selectWeeklyCheckpoint} from './adaptive-review.ts';
import type {QuestionAttempt} from './demo-questions.ts';
import type {StudyTask} from './cloud-study-model.ts';
function answer(id:string,index:number,date='2026-11-01T13:00:00Z'):QuestionAttempt{
 const q=demoQuestions.find(item=>item.id===id)!;
 return {questionId:id,answerIndex:index,correct: index!==q.correct,subject:'INCORRECT USER LABEL',createdAt:date,mode:'mock'};
}
test('baseline has 20 original questions, never labels them as official',()=>{
 const qs=selectBaselineQuestions();
 assert.equal(qs.length,20);assert.equal(new Set(qs.map(q=>q.id)).size,20);
 assert.ok(new Set(qs.map(q=>q.subject)).size>=5);
});
test('weekly check emphasizes verified incorrect topics and introduces different subjects',()=>{
 const attempts=[answer('q14',0),answer('q01',0)];
 const quiz=selectWeeklyCheckpoint(attempts,10);
 assert.equal(quiz.length,10);
 assert.ok(quiz.some(q=>q.id==='q14'));
 assert.ok(quiz.some(q=>q.id==='q01'));
 assert.ok(quiz.some(q=>q.id!=='q14'&&q.id!=='q01'));
 assert.equal(new Set(quiz.map(q=>q.id)).size,10);
});
test('wrong-topic logic verifies answer keys and respects later correction',()=>{
 const question=demoQuestions.find(q=>q.id==='q14')!;
 const wrong=(question.correct+1)%question.options.length;
 const attempts=[answer('q14',wrong),answer('q14',question.correct,'2026-11-02T13:00:00Z')];
 assert.equal(missedTopics(attempts).length,0);
 assert.equal(missedTopics([answer('q14',wrong)])[0].subject,'Biologia');
});
test('personalized weekly schedule splits multiple subjects without exceeding preferences',()=>{
 const p={...initialProfile,weeklyDays:[1,2,3],dailyMinutes:65,sessionMinutes:25};
 const rows=createPersonalizedStudyWeek(p,[],[],null,new Date(2026,10,2,12),(()=>{let n=0;return()=>String(++n)})());
 const days=[...new Set(rows.map(t=>t.date))];
 assert.deepEqual(days,['2026-11-02','2026-11-03','2026-11-04']);
 for(const d of days){
  const today=rows.filter(t=>t.date===d);
  assert.ok(today.length>=2&&today.length<=3);
  assert.equal(new Set(today.map(t=>t.subject)).size,today.length);
  assert.ok(today.reduce((sum,t)=>sum+t.minutes,0)<=65);
  assert.ok(today.every(t=>t.minutes>=15&&t.minutes<=25&&t.startTime===undefined));
 }
 assert.deepEqual(createPersonalizedStudyWeek(p,rows,[],null,new Date(2026,10,2,12),()=>String(Math.random())).map(t=>t.id),rows.map(t=>t.id));
});
test('existing manual activities remain, rest days are honored, and focus mode shortens sessions',()=>{
 const p={...initialProfile,weeklyDays:[1],dailyMinutes:55,sessionMinutes:40,adaptations:['short_blocks','frequent_checks'] as typeof initialProfile.adaptations};
 const manual:StudyTask={id:'user-task',date:'2026-11-02',title:'Manual',minutes:25,subject:'Matemática',done:true,kind:'manual',startTime:'08:00'};
 const generated=createPersonalizedStudyWeek(p,[manual],[],null,new Date(2026,10,2,12),()=> 'new-task');
 assert.deepEqual(generated.find(x=>x.id==='user-task'),manual);
 assert.equal(generated.filter(t=>t.kind==='suggested').length,2);
 assert.ok(generated.filter(t=>t.kind==='suggested').every(t=>t.date==='2026-11-02'&&t.minutes<=25));
 assert.ok(studyMethod(p).some(text=>text.includes('checagem')));
});
test('weekly dashboard measures activities but does not claim exam mastery',()=>{
 const rows:StudyTask[]=[{id:'a',date:'2026-11-02',title:'Física',subject:'Física',minutes:25,done:true,kind:'manual'},
 {id:'b',date:'2026-11-03',title:'História',subject:'História',minutes:20,done:false,kind:'suggested'}];
 const summary=weekLearningSummary(rows,new Date(2026,10,3,12));
 assert.equal(summary.total,2);assert.equal(summary.completed,1);
 assert.equal(summary.plannedMinutes,45);assert.equal(summary.reviewReady,false);
 assert.equal(summary.from,'2026-11-02');assert.equal(summary.until,'2026-11-08');
});
test('YouTube link is a query, not a fabricated instructor video',()=>{
 const href=youtubeStudySearch('Biologia','Citologia');
 const url=new URL(href);
 assert.equal(url.hostname,'www.youtube.com');
 assert.equal(url.pathname,'/results');
 assert.ok(url.searchParams.get('search_query')?.includes('Citologia'));
});
