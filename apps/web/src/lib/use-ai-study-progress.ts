'use client';
import {getSupabase} from './supabase';
import type {AIStudyProgress} from './ai-study-progress';
import {useAsyncResource} from './use-async-resource';

async function loadProgress(userId:string,signal:AbortSignal):Promise<AIStudyProgress>{
 const client=getSupabase();
 const {data:auth,error}=await client?.auth.getSession()??{data:{session:null},error:null};
 signal.throwIfAborted();
 if(error||!auth.session||auth.session.user.id!==userId)throw new Error('Entre novamente para consultar suas questões de IA.');
 const response=await fetch('/api/ai-study-progress',{
  headers:{Authorization:`Bearer ${auth.session.access_token}`},cache:'no-store',signal
 });
 if(!response.ok)throw new Error('Não foi possível consultar o histórico de IA. Tente novamente.');
 return response.json();
}

export function useAIStudyProgress(userId:string|null){
 return useAsyncResource(userId,loadProgress,'Falha ao consultar o histórico de IA.');
}
