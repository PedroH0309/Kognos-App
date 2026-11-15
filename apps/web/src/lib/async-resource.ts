/** Every settled value belongs to one account/resource and one refresh. */
export type ResourceResult<T>={key:string;revision:number;data:T|null;error:string};

export function resourceSnapshot<T>(key:string|null,revision:number,result:ResourceResult<T>|null){
 const sameResource=key!==null&&result?.key===key;
 const settled=sameResource&&result.revision===revision;
 return {data:sameResource?result.data:null,error:settled?result.error:'',loading:key!==null&&!settled};
}

/** Ignore stale completions even if a loader cannot physically cancel its work.
 * The deadline also settles loaders that never resolve, without retaining a timer.
 */
export async function runResourceRequest<T>(
 key:string,revision:number,load:(key:string,signal:AbortSignal)=>Promise<T>,
 scope:AbortSignal,publish:(result:ResourceResult<T>)=>void,fallback:string,timeoutMs=15000
){
 if(scope.aborted)return;
 const request=new AbortController();
 const cancel=()=>request.abort();
 scope.addEventListener('abort',cancel,{once:true});
 let rejectAbort:()=>void=()=>{};
 const aborted=new Promise<never>((_,reject)=>{
  rejectAbort=()=>reject(new Error(fallback));
  request.signal.addEventListener('abort',rejectAbort,{once:true});
 });
 const timer=setTimeout(()=>request.abort(),timeoutMs);
 try{
  const data=await Promise.race([load(key,request.signal),aborted]);
  if(!scope.aborted)publish({key,revision,data,error:''});
 }catch(error){
  if(!scope.aborted)publish({key,revision,data:null,error:error instanceof Error?error.message:fallback});
 }finally{
  clearTimeout(timer);
  scope.removeEventListener('abort',cancel);
  request.signal.removeEventListener('abort',rejectAbort);
 }
}
