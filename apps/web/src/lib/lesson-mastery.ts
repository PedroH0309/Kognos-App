import type {Difficulty} from './exam-blueprints.ts';

export type GradedMasteryItem={difficulty:Difficulty;correct:boolean};
export type LessonMasteryAssessment={
 answered:number;correct:number;accuracy:number;basic:number;intermediate:number;advanced:number;
 label:'precisa reforçar'|'em desenvolvimento'|'evidência inicial de domínio';
 nextStep:string;
};

/** A correct basic item is not equivalent to mastery of advanced skills.
 * This is a session-specific formative signal, never a vestibular score.
 */
export function assessLessonMastery(items:readonly GradedMasteryItem[]):LessonMasteryAssessment{
 const answered=items.length,correct=items.filter(x=>x.correct).length;
 const count=(difficulty:Difficulty)=>items.filter(x=>x.difficulty===difficulty&&x.correct).length;
 const basic=count('basic'),intermediate=count('intermediate'),advanced=count('advanced');
 const accuracy=answered?Math.round(correct/answered*100):0;
 const hasFullSequence=answered===10&&items.filter(x=>x.difficulty==='basic').length===3
  &&items.filter(x=>x.difficulty==='intermediate').length===4
  &&items.filter(x=>x.difficulty==='advanced').length===3;
 const strong=hasFullSequence&&correct>=8&&advanced>=2&&intermediate>=3;
 const label=strong?'evidência inicial de domínio':
  accuracy>=60&&basic>=2?'em desenvolvimento':'precisa reforçar';
 const nextStep=strong
  ?'Revise este assunto em alguns dias para confirmar a retenção; uma sessão não prova domínio consolidado.'
  :advanced<2&&basic>=2&&intermediate>=2
   ?'Continue com problemas intermediários e avance gradualmente para questões avançadas.'
   :'Reveja a explicação e o erro mais frequente com o Kog antes de outra sequência.';
 return {answered,correct,accuracy,basic,intermediate,advanced,label,nextStep};
}
