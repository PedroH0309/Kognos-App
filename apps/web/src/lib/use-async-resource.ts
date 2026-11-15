'use client';
import {useCallback,useEffect,useState} from 'react';
import {resourceSnapshot,runResourceRequest,type ResourceResult} from './async-resource';

/** Keep loaders stable (module functions or useCallback). Null keys are idle.
 * Changing accounts hides prior data during render, before effect cleanup runs.
 */
export function useAsyncResource<T>(key:string|null,load:(key:string,signal:AbortSignal)=>Promise<T>,fallback:string){
 const [revision,setRevision]=useState(0);
 const [result,setResult]=useState<ResourceResult<T>|null>(null);
 const refresh=useCallback(()=>setRevision(value=>value+1),[]);
 useEffect(()=>{
  if(key===null)return;
  const scope=new AbortController();
  void runResourceRequest(key,revision,load,scope.signal,setResult,fallback);
  return()=>scope.abort();
 },[key,revision,load,fallback]);
 return {...resourceSnapshot(key,revision,result),refresh};
}
