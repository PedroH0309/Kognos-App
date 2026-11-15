'use client';
import type {AIReadiness} from './ai-readiness';
import {useAsyncResource} from './use-async-resource';

async function loadReadiness(_key:string,signal:AbortSignal):Promise<AIReadiness>{
 const response=await fetch('/api/ai-status',{cache:'no-store',signal});
 if(!response.ok)throw new Error('Não foi possível verificar a configuração deste servidor.');
 const data:unknown=await response.json();
 if(!data||typeof data!=='object'||!('supabaseServerConfigured' in data)||!('nvidiaKeyConfigured' in data)
  ||typeof data.supabaseServerConfigured!=='boolean'||typeof data.nvidiaKeyConfigured!=='boolean')
  throw new Error('O servidor retornou uma configuração inválida. Tente novamente.');
 return data as AIReadiness;
}

/** Public, no-store status probe; does not verify credentials with a provider. */
export function useServerReadiness(){
 const {data:status,...state}=useAsyncResource('server-readiness',loadReadiness,'Não foi possível verificar a configuração deste servidor.');
 return {status,...state};
}
