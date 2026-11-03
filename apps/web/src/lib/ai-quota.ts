import type {SupabaseClient} from '@supabase/supabase-js';

/** Charges are reserved BEFORE any provider call to prevent concurrent bypass.
 * Refund only provider-side failures, not billable completed outputs, review
 * rejections, malformed questions or duplicate questions. */
const NON_BILLABLE_PROVIDER_FAILURES=new Set([
 'NVIDIA_AUTH','NVIDIA_RATE_LIMIT','NVIDIA_UNAVAILABLE',
 'NVIDIA_BAD_REQUEST','NVIDIA_MODEL_UNAVAILABLE','NVIDIA_NETWORK',
]);

export function shouldRefundAIQuota(code:string):boolean {
 return NON_BILLABLE_PROVIDER_FAILURES.has(code);
}

/** Refund only one reserved use from the original UTC quota day.
 * The database retains total_attempts so repeated failures stay capped. */
export async function refundAIQuota(admin:SupabaseClient,userId:string,quotaDay:string):Promise<boolean> {
 if(!/^\d{4}-\d{2}-\d{2}$/.test(quotaDay)||!userId)return false;
 try{
  const {data,error}=await admin.rpc('refund_ai_quota',{p_user_id:userId,p_quota_day:quotaDay});
  if(error){
   // Never log database error details or credentials; a failed refund remains charged.
   console.warn('[KOGNOS][AI_QUOTA] Refund unavailable. Check migration 0008.');
   return false;
  }
  return data===true;
 }catch{
  console.warn('[KOGNOS][AI_QUOTA] Refund request failed.');
  return false;
 }
}
