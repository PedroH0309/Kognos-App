import {splitGenerationBatches} from './ai-bank-paging.ts';

export const MAX_ATTEMPTS_PER_BATCH=3;
/** Provider APIs have shared rate limits. Never fan out all ten calls at once. */
export const MAX_CONCURRENT_GENERATION_BATCHES=2;

export type BatchDiagnostics={
 generated?:number;
 structurallyMissing?:number;
 missingReview?:number;
 pedagogicallyRejected?:number;
 answerDisagreements?:number;
 duplicates?:number;
};
export type GenerationBatchResult={approved:number;rejected?:number;diagnostics?:BatchDiagnostics};
export type GenerationRunResult={
 requested:number;saved:number;rejected:number;missing:number;error:string;
 diagnostics:Required<BatchDiagnostics>;
};
const emptyDiagnostics=():Required<BatchDiagnostics>=>({
 generated:0,structurallyMissing:0,missingReview:0,
 pedagogicallyRejected:0,answerDisagreements:0,duplicates:0
});
function addDiagnostics(target:Required<BatchDiagnostics>,data:BatchDiagnostics|undefined){
 if(!data)return;
 for(const key of Object.keys(target) as (keyof BatchDiagnostics)[]){
  const value=data[key];
  if(typeof value==='number'&&Number.isFinite(value)&&value>=0){
   target[key]+=Math.floor(value);
  }
 }
}
function recoverableGenerationError(message:string){
 // The model produced no usable items or a previous near-duplicate, not a
 // credential, model or rate limit failure. Try a different batch variant.
 return /revisão automática não aprovou|questões propostas já existem|questões ou revisão em um formato inválido/i.test(message);
}

/** Each request gets its own server-side review and saves ONLY approved items.
 * Two microbatches run concurrently to reduce latency. Partial approvals are
 * replenished up to three attempts per microbatch; errors never fabricate
 * questions or bypass independent checking. No arbitrary retries on API 429.
 */
export async function generateApprovedBatches(
 quantity:number,
 send:(count:number,batch:number,attempt:number)=>Promise<GenerationBatchResult>,
 onProgress?:(batch:number,attempt:number)=>void,
 onSaved?:(count:number)=>void
):Promise<GenerationRunResult>{
 const parts=splitGenerationBatches(quantity);
 let cursor=0,saved=0,rejected=0,error='';
 const diagnostics=emptyDiagnostics();
 let cancelled=false;
 async function worker(){
  while(!cancelled){
   const index=cursor++;
   if(index>=parts.length)return;
   let remaining=parts[index];
   for(let attempt=1;attempt<=MAX_ATTEMPTS_PER_BATCH&&remaining>0&&!cancelled;attempt++){
    onProgress?.(index+1,attempt);
    try{
     const result=await send(remaining,index+1,attempt);
     if(!result||!Number.isInteger(result.approved)||result.approved<0||result.approved>remaining)
      throw new Error('O servidor retornou uma quantidade inválida de questões.');
     saved+=result.approved;
     remaining-=result.approved;
     rejected+=Math.max(0,Number(result.rejected)||0);
     addDiagnostics(diagnostics,result.diagnostics);
     onSaved?.(saved);
    }catch(e){
     const reason=e instanceof Error?e.message:'Falha durante a geração de questões.';
     if(recoverableGenerationError(reason))continue;
     // Other in-flight requests finish, and their approved items remain saved.
     if(!error)error=reason;
     cancelled=true;
     break;
    }
   }
  }
 }
 await Promise.all(Array.from({length:Math.min(MAX_CONCURRENT_GENERATION_BATCHES,parts.length)},()=>worker()));
 return {requested:quantity,saved,rejected,missing:quantity-saved,error,diagnostics};
}
