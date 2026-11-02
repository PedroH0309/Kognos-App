import {splitGenerationBatches} from './ai-bank-paging.ts';

export const MAX_ATTEMPTS_PER_BATCH=3;
export type GenerationBatchResult={approved:number;rejected?:number};
export type GenerationRunResult={requested:number;saved:number;rejected:number;missing:number;error:string};

/** Requests 1..10 new approved items in validated batches of at most 5.
 * Partially accepted batches are topped up, but the review can still reject
 * the remainder. Never publish unreviewed items to meet a requested count.
 * Bounded retries respect daily API quota and third-party API costs.
 */
export async function generateApprovedBatches(
 quantity:number,
 send:(count:number,batch:number,attempt:number)=>Promise<GenerationBatchResult>,
 onProgress?:(batch:number,attempt:number)=>void
):Promise<GenerationRunResult>{
 const parts=splitGenerationBatches(quantity);
 let saved=0,rejected=0,error='';
 for(let batch=0;batch<parts.length;batch++){
  let remaining=parts[batch];
  for(let attempt=1;attempt<=MAX_ATTEMPTS_PER_BATCH&&remaining>0;attempt++){
   onProgress?.(batch+1,attempt);
   try{
    const result=await send(remaining,batch+1,attempt);
    if(!result||!Number.isInteger(result.approved)||result.approved<0||result.approved>remaining)
     throw new Error('O servidor retornou uma quantidade inválida de questões.');
    saved+=result.approved;
    remaining-=result.approved;
    rejected+=Math.max(0,Number(result.rejected)||0);
   }catch(e){
    const reason=e instanceof Error?e.message:'Falha durante a geração de questões.';
    // Rejection of an entire batch is recoverable; other API and schema
    // errors must stop to avoid burning extra requests/quotas.
    if(/revisão automática não aprovou/i.test(reason))continue;
    error=reason;
    break;
   }
  }
  if(error)break;
 }
 return {requested:quantity,saved,rejected,missing:quantity-saved,error};
}
