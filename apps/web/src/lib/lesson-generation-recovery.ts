/** Retries for pedagogical/format rejections only. Never retry rate limits,
 * auth failures, database errors or network outages automatically.
 */
export const LESSON_REVIEW_MAX_ATTEMPTS=6;
export const LESSON_REVIEW_MAX_CONSECUTIVE_EMPTY=3;
const retryable=new Set(['AI_REVIEW_NO_APPROVAL','AI_DUPLICATE_OUTPUT','AI_INVALID_OUTPUT']);
export function recoverableLessonGenerationError(error:unknown):boolean{
 if(!(error instanceof Error))return false;
 const code=(error as Error&{code?:unknown}).code;
 return typeof code==='string'&&retryable.has(code);
}
/** A smaller independent-review batch reduces the chance that a single
 * ambiguous item or a truncated JSON object spoils an entire request.
 */
export function nextLessonReviewBatchSize(remaining:number,consecutiveEmpty:number):number{
 if(!Number.isSafeInteger(remaining)||remaining<1)return 0;
 if(consecutiveEmpty<=0)return Math.min(remaining,5);
 return Math.min(remaining,consecutiveEmpty===1?2:1);
}
export function lessonGenerationFailureMessage(approved:number):string{
 return approved>0
  ?`Apenas ${approved} de 10 questões foram aprovadas. As restantes não passaram pela revisão. As aprovadas continuam no seu banco; tente novamente mais tarde para obter um treino completo.`
  :'A geração respondeu, mas nenhum item passou pela revisão independente, mesmo após novas tentativas em lotes menores. Verifique o diagnóstico do gerador ou ajuste o provedor de revisão (Gemini/Groq). Nenhuma questão não verificada será usada.';
}
