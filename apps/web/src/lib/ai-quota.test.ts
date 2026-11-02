import {test} from 'node:test';
import assert from 'node:assert/strict';
import {shouldRefundAIQuota,refundAIQuota} from './ai-quota.ts';

test('only provider failures before usable output are eligible for refund',()=>{
 for(const code of ['NVIDIA_AUTH','NVIDIA_RATE_LIMIT','NVIDIA_UNAVAILABLE','NVIDIA_BAD_REQUEST','NVIDIA_MODEL_UNAVAILABLE','NVIDIA_NETWORK']){
  assert.equal(shouldRefundAIQuota(code),true,code);
 }
 for(const code of ['NVIDIA_TIMEOUT','NVIDIA_TRUNCATED','AI_INVALID_OUTPUT','AI_GENERATION_UNEXPECTED','AI_NOT_CONFIGURED','NVIDIA_EMPTY','not-a-code']){
  assert.equal(shouldRefundAIQuota(code),false,code);
 }
});
test('refund targets only authenticated user ID and the original UTC day',async()=>{
 let received:any=null;
 const admin={rpc:async(name:string,params:any)=>{received={name,params};return {data:true,error:null};}};
 assert.equal(await refundAIQuota(admin as any,'student-a','2026-11-02'),true);
 assert.deepEqual(received,{name:'refund_ai_quota',params:{p_user_id:'student-a',p_quota_day:'2026-11-02'}});
});
test('no refund is attempted with malformed day and failed RPC cannot expose details',async()=>{
 let calls=0;
 const admin={rpc:async()=>{calls++;return {data:null,error:{message:'secret data'}}}};
 assert.equal(await refundAIQuota(admin as any,'user','not-a-date'),false);
 assert.equal(calls,0);
 const oldWarn=console.warn;let warning='';
 console.warn=(...args)=>{warning=args.join(' ');};
 try{assert.equal(await refundAIQuota(admin as any,'user','2026-11-02'),false);}
 finally{console.warn=oldWarn;}
 assert.doesNotMatch(warning,/secret data/);
});
