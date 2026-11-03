import {demoQuestions, type DemoQuestion, type QuestionAttempt} from './demo-questions.ts';
import {learningLessons, type LearningLesson} from './learning-catalog.ts';

/**
 * Small, transparent demonstration scheduler. Repeating one original question
 * is NOT proof of durable knowledge. No grade, medical inference, or exam score.
 */
export type ReviewStatus = 'due'|'scheduled'|'not-started';
export type ReviewItem = {
  lesson:LearningLesson;
  question:DemoQuestion;
  status:ReviewStatus;
  dueDate:string|null;
  lastAttemptDate:string|null;
  lastCorrect:boolean|null;
  distinctDayStreak:number;
  attempts:number;
};

const VALID_DAYS=[1,3,7,14] as const;
function dayOf(value:string):string|null {
 const d=new Date(value);
 if(!Number.isFinite(d.getTime()))return null;
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
export function addCalendarDays(day:string,days:number):string {
 const [year,month,date]=day.split('-').map(Number);
 const d=new Date(year,month-1,date+days,12);
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
export function localDateKey(value:Date):string {
 return `${value.getFullYear()}-${String(value.getMonth()+1).padStart(2,'0')}-${String(value.getDate()).padStart(2,'0')}`;
}
export function reviewItems(attempts:readonly QuestionAttempt[],now=new Date()):ReviewItem[] {
 const today=localDateKey(now);
 return learningLessons.map((lesson):ReviewItem=>{
  const question=demoQuestions.find(q=>q.id===lesson.questionId);
  if(!question)throw new Error(`Missing question for lesson ${lesson.id}`);
  const valid=attempts.filter(a=>a.questionId===question.id&&Number.isInteger(a.answerIndex)&&a.answerIndex>=0&&a.answerIndex<question.options.length&&dayOf(a.createdAt))
   .sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt));
  if(!valid.length)return {lesson,question,status:'not-started',dueDate:null,lastAttemptDate:null,lastCorrect:null,distinctDayStreak:0,attempts:0};
  const last=valid[0];
  const correct=last.answerIndex===question.correct;
  let streak=0;
  let previousDay='';
  if(correct){
   for(const a of valid){
    if(a.answerIndex!==question.correct)break;
    const date=dayOf(a.createdAt)!;
    if(date!==previousDay){streak++;previousDay=date;}
   }
  }
  const latestDay=dayOf(last.createdAt)!;
  const interval=correct?VALID_DAYS[Math.min(streak,VALID_DAYS.length)-1]:0;
  const dueDate=addCalendarDays(latestDay,interval);
  return {lesson,question,status:dueDate<=today?'due':'scheduled',dueDate,lastAttemptDate:latestDay,lastCorrect:correct,distinctDayStreak:streak,attempts:valid.length};
 }).sort((a,b)=>{
  const priority={due:0,scheduled:1,'not-started':2};
  return priority[a.status]-priority[b.status] ||
   (a.dueDate||'9999-12-31').localeCompare(b.dueDate||'9999-12-31') ||
   a.lesson.subject.localeCompare(b.lesson.subject,'pt-BR') || a.lesson.topic.localeCompare(b.lesson.topic,'pt-BR');
 });
}
export function reviewCounts(items:readonly ReviewItem[]){
 return {due:items.filter(x=>x.status==='due').length,scheduled:items.filter(x=>x.status==='scheduled').length,notStarted:items.filter(x=>x.status==='not-started').length};
}

/** One item from each available subject, favoring topics not yet practiced. */
export function selectExploratoryDiagnostic(attempts:readonly QuestionAttempt[]):DemoQuestion[] {
 const counts=new Map<string,number>();
 for(const a of attempts)if(demoQuestions.some(q=>q.id===a.questionId))counts.set(a.questionId,(counts.get(a.questionId)||0)+1);
 const groups=new Map<string,DemoQuestion[]>();
 for(const q of demoQuestions)groups.set(q.subject,[...(groups.get(q.subject)||[]),q]);
 return [...groups].sort(([left],[right])=>left.localeCompare(right,'pt-BR'))
  .map(([,items])=>[...items].sort((a,b)=>(counts.get(a.id)||0)-(counts.get(b.id)||0)||a.id.localeCompare(b.id))[0]);
}
export type DiagnosticAnswer = {questionId:string; answerIndex:number};
export function evaluateExploratoryDiagnostic(questions:readonly DemoQuestion[],answers:readonly DiagnosticAnswer[]){
 const selected=new Map(answers.map(a=>[a.questionId,a.answerIndex]));
 const results=questions.map(q=>{
  const answerIndex=selected.get(q.id);
  return {questionId:q.id,subject:q.subject,topic:q.topic,correct:answerIndex===q.correct,answered:Number.isInteger(answerIndex)&&typeof answerIndex==='number'&&answerIndex>=0&&answerIndex<q.options.length,answerIndex};
 });
 return {answered:results.filter(r=>r.answered).length,correct:results.filter(r=>r.answered&&r.correct).length,total:results.length,results,
  subjects:results.map(r=>({subject:r.subject,correct:r.correct,topic:r.topic,questionId:r.questionId}))};
}
/** Mixed author-created 20-item starting checkpoint: the original introductory
 * topics, no claim of authentic ENEM/FUVEST/VUNESP/SARESP questions. */
export function selectBaselineQuestions():DemoQuestion[]{
 return demoQuestions.filter(q=>/^q(0[1-9]|1[0-9]|20)$/.test(q.id));
}
/** Weekly checkpoint mixes missed topics with previously-unseen topics, while
 * rotating questions based on recorded history. Never trusts user-supplied
 * 'correct', and avoids calling a single answer a durable learning deficit.
 */
export function selectWeeklyCheckpoint(attempts:readonly QuestionAttempt[],limit=10):DemoQuestion[]{
 const history=new Map<string,{count:number;lastWrong:boolean}>();
 for(const attempt of [...attempts].sort((a,b)=>a.createdAt.localeCompare(b.createdAt))){
  const q=demoQuestions.find(v=>v.id===attempt.questionId);
  if(!q||!Number.isInteger(attempt.answerIndex)||attempt.answerIndex<0||attempt.answerIndex>=q.options.length)continue;
  const prev=history.get(q.id)||{count:0,lastWrong:false};
  history.set(q.id,{count:prev.count+1,lastWrong:attempt.answerIndex!==q.correct});
 }
 const wrong=demoQuestions.filter(q=>history.get(q.id)?.lastWrong)
   .sort((a,b)=>(history.get(a.id)?.count||0)-(history.get(b.id)?.count||0)||a.id.localeCompare(b.id));
 const newQuestions=demoQuestions.filter(q=>!history.has(q.id)).sort((a,b)=>a.id.localeCompare(b.id));
 const rest=demoQuestions.filter(q=>history.has(q.id)&&!history.get(q.id)?.lastWrong)
   .sort((a,b)=>(history.get(a.id)?.count||0)-(history.get(b.id)?.count||0)||a.id.localeCompare(b.id));
 const output:DemoQuestion[]=[];
 const target=Math.max(1,Math.min(20,Math.floor(limit)));
 // Balanced sampling: the checkpoint must include familiar weak and different
 // material when such material actually exists.
 const weakCap=Math.ceil(target*0.6);
 output.push(...wrong.slice(0,weakCap));
 output.push(...newQuestions.slice(0,Math.max(0,target-output.length)));
 for(const q of [...wrong.slice(weakCap),...rest,...newQuestions]){
  if(output.length>=target)break;
  if(!output.some(x=>x.id===q.id))output.push(q);
 }
 return output.slice(0,target);
}
