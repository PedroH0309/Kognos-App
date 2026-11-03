import {findLearningLesson} from './learning-catalog.ts';
import {validLessonAIReference} from './lesson-ai-links.ts';
import type {ExamId} from './exam-blueprints.ts';

/** Generate remediation ONLY from answers graded by the authenticated server.
 * An attached lesson must also match the canonical editorial question bridge.
 */
export type GradedRecoveryQuestion={
 id:string;lesson_id?:string|null;institution:ExamId;subject:string;topic:string
};
export type VerifiedRecoveryGrade={correct:boolean};
export type LessonRecoveryTarget={
 questionId:string;lessonId:string|null;subject:string;topic:string;
 objective:string|null;explanation:string|null;commonMistake:string|null;
 wrongCount:number;
};

export function recoveryTargetForQuestion(question:GradedRecoveryQuestion):LessonRecoveryTarget{
 const id=question.lesson_id;
 const lesson=id&&validLessonAIReference(id,question.institution,question.subject,question.topic)
  ?findLearningLesson(id):null;
 return {questionId:question.id,lessonId:lesson?.id??null,
  subject:lesson?.subject??question.subject,topic:lesson?.topic??question.topic,
  objective:lesson?.objective??null,explanation:lesson?.explanation??null,
  commonMistake:lesson?.commonMistake??null,wrongCount:1};
}

/** Deduplicate lessons for the follow-up screen, but preserve how many
 * recorded errors led to that recommendation. Never count unanswered items.
 */
export function recoveryTargetsFromGradedSession(
 questions:readonly GradedRecoveryQuestion[],
 grades:readonly VerifiedRecoveryGrade[]
):LessonRecoveryTarget[]{
 const group=new Map<string,LessonRecoveryTarget>();
 for(let i=0;i<questions.length;i++){
  if(!grades[i]||grades[i].correct!==false)continue;
  const item=recoveryTargetForQuestion(questions[i]);
  const key=item.lessonId??[item.subject,item.topic].join('|');
  const previous=group.get(key);
  if(previous)previous.wrongCount++;
  else group.set(key,item);
 }
 return [...group.values()].sort((a,b)=>b.wrongCount-a.wrongCount);
}
