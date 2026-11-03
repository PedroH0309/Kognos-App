import {findLearningLesson} from './learning-catalog.ts';
import {inferLegacyLessonId,validLessonAIReference} from './lesson-ai-links.ts';
import type {ExamId,Difficulty} from './exam-blueprints.ts';
import {inferSkillEvolution,type SkillEvolution,type VerifiedSkillAttempt} from './skill-evolution.ts';

/** Input comes exclusively from service-role queries scoped to the authenticated account. */
export type PrivateAIQuestionRow={id:string;lesson_id:string|null;institution:ExamId;subject:string;topic:string;correct_index:number;difficulty?:Difficulty};
export type PrivateAIAttemptRow={question_id:string;answer_index:number;created_at:string;mode:string};
export type AIStudyLesson={lessonId:string;attempts:number;distinctQuestions:number;correct:number;incorrect:number;practice:number;mock:number;lastCorrect:boolean|null;lastAttemptAt:string|null};
export type AIStudyProgress={lessons:AIStudyLesson[];totalAttempts:number;unlinkedAttempts:number;sampleLimited:boolean;skillEvolution:SkillEvolution[]};

/** Never return the answer key, answer index, raw question or personal identifier to the browser. */
export function aggregateAIStudyProgress(questions:readonly PrivateAIQuestionRow[],attempts:readonly PrivateAIAttemptRow[],sampleLimited=false):AIStudyProgress{
 const byQuestion=new Map<string,{lessonId:string;correct:number;difficulty:Difficulty|null}>();
 for(const q of questions){
  if(!q||typeof q.id!=='string'||!Number.isInteger(q.correct_index)||q.correct_index<0||q.correct_index>4)continue;
  const verified=q.lesson_id&&validLessonAIReference(q.lesson_id,q.institution,q.subject,q.topic)?q.lesson_id:null;
  const lessonId=verified||(!q.lesson_id?inferLegacyLessonId(q.institution,q.subject,q.topic):null);
  if(lessonId&&findLearningLesson(lessonId))byQuestion.set(q.id,{lessonId,correct:q.correct_index,difficulty:q.difficulty==='basic'||q.difficulty==='intermediate'||q.difficulty==='advanced'?q.difficulty:null});
 }
 const summary=new Map<string,{record:AIStudyLesson;ids:Set<string>;lastTime:number}>();
 const evolutionAttempts=new Map<string,VerifiedSkillAttempt[]>();
 let totalAttempts=0,unlinkedAttempts=0;
 for(const a of attempts){
  if(!a||!Number.isInteger(a.answer_index)||a.answer_index<0||a.answer_index>4||!Number.isFinite(Date.parse(a.created_at)))continue;
  const q=byQuestion.get(a.question_id);
  totalAttempts++;
  if(!q){unlinkedAttempts++;continue;}
  let value=summary.get(q.lessonId);
  if(!value){value={record:{lessonId:q.lessonId,attempts:0,distinctQuestions:0,correct:0,incorrect:0,practice:0,mock:0,lastCorrect:null,lastAttemptAt:null},ids:new Set(),lastTime:-Infinity};summary.set(q.lessonId,value);}
  const good=a.answer_index===q.correct;
  if(a.mode==='practice'&&q.difficulty){
   const current=evolutionAttempts.get(q.lessonId)??[];
   current.push({questionId:a.question_id,difficulty:q.difficulty,correct:good,createdAt:a.created_at});
   evolutionAttempts.set(q.lessonId,current);
  }
  value.record.attempts++;
  value.record.correct+=Number(good);
  value.record.incorrect+=Number(!good);
  value.record.practice+=Number(a.mode==='practice');
  value.record.mock+=Number(a.mode==='mock');
  value.ids.add(a.question_id);
  const stamp=Date.parse(a.created_at);
  if(stamp>value.lastTime){value.lastTime=stamp;value.record.lastCorrect=good;value.record.lastAttemptAt=a.created_at;}
 }
 return {lessons:[...summary.values()].map(({record,ids})=>({...record,distinctQuestions:ids.size})).sort((a,b)=>a.lessonId.localeCompare(b.lessonId)),totalAttempts,unlinkedAttempts,sampleLimited,
  skillEvolution:[...evolutionAttempts.entries()].map(([lessonId,records])=>inferSkillEvolution(lessonId,records))
   .sort((a,b)=>a.lessonId.localeCompare(b.lessonId))};
}

export function aiLessonStats(data:AIStudyProgress|null,lessonId:string):AIStudyLesson|null{
 return data?.lessons.find(item=>item.lessonId===lessonId)??null;
}