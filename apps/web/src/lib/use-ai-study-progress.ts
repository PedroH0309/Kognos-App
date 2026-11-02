'use client';
import {useCallback,useEffect,useState} from 'react';
import {getSupabase} from './supabase';
import type {AIStudyProgress} from './ai-study-progress';

export function useAIStudyProgress(userId:string|null){
 const [data,setData]=useState<AIStudyProgress|null>(null);
 const [loading,setLoading]=useState(Boolean(userId));
 const [error,setError]=useState('');
 const load=useCallback(async()=>{
  if(!userId){setData(null);setError('');setLoading(false);return;}
  setLoading(true);setError('');
  try{
   const client=getSupabase();const {data:auth}=await client?.auth.getSession()??{data:{session:null}};
   if(!auth.session||auth.session.user.id!==userId)throw new Error('Entre novamente para consultar suas questões de IA.');
   const response=await fetch('/api/ai-study-progress',{headers:{Authorization:`Bearer ${auth.session.access_token}`},cache:'no-store'});
   const result=await response.json();
   if(!response.ok)throw new Error(result.error||'Histórico de IA indisponível.');
   setData(result as AIStudyProgress);
  }catch(e){setData(null);setError(e instanceof Error?e.message:'Falha ao consultar o histórico de IA.');}
  finally{setLoading(false);}
 },[userId]);
 useEffect(()=>{void load();},[load]);
 return {data,loading,error,refresh:load};
}