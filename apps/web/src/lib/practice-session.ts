import type {DemoQuestion,QuestionAttempt} from './demo-questions.ts';
/** Session-only stats: do not present cumulative lifetime accuracy as a single quiz grade. */
export function practiceSessionSummary(questions:readonly DemoQuestion[],attempts:readonly QuestionAttempt[]){
 const lastByQuestion=new Map<string,QuestionAttempt>();
 for(const a of attempts)if(questions.some(q=>q.id===a.questionId))lastByQuestion.set(a.questionId,a);
 const answered=[...lastByQuestion.entries()].length;
 const correct=questions.filter(q=>lastByQuestion.get(q.id)?.answerIndex===q.correct).length;
 return {total:questions.length,answered,correct,accuracy:answered?Math.round(correct/answered*100):null};
}