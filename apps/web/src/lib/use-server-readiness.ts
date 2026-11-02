'use client';
import {useCallback,useEffect,useRef,useState} from 'react';
import type {AIReadiness} from './ai-readiness';

/** Public, no-store status probe; does not verify credentials with a provider. */
export function useServerReadiness(){
 const [status,setStatus]=useState<AIReadiness|null>(null);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState('');
 const sequence=useRef(0);
 const refresh=useCallback(async()=>{
  const request=++sequence.current;
  setLoading(true);setError('');
  try{
   const response=await fetch('/api/ai-status',{cache:'no-store'});
   if(!response.ok)throw new Error('status-unavailable');
   const data:unknown=await response.json();
   if(!data||typeof data!=='object'||!('supabaseServerConfigured' in data)||!('nvidiaKeyConfigured' in data)
     ||typeof data.supabaseServerConfigured!=='boolean'||typeof data.nvidiaKeyConfigured!=='boolean')throw new Error('status-invalid');
   if(request===sequence.current)setStatus(data as AIReadiness);
  }catch{
   if(request===sequence.current){setStatus(null);setError('Não foi possível verificar a configuração deste servidor.');}
  }finally{if(request===sequence.current)setLoading(false);}
 },[]);
 useEffect(()=>{void refresh();return()=>{sequence.current+=1;};},[refresh]);
 return {status,loading,error,refresh};
}