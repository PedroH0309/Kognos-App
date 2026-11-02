'use client';
import {Info,RefreshCw} from 'lucide-react';
import {studySyncNotice} from '@/lib/integration-feedback';

export default function StudySyncNotice({error,onRetry}:{error:string;onRetry:()=>void}){
 if(!error)return null;
 return <aside className="k-study-sync-notice" role="status">
  <Info size={16} aria-hidden="true"/>
  <span>{studySyncNotice(error)}</span>
  <button type="button" onClick={onRetry}><RefreshCw size={13}/> Tentar novamente</button>
 </aside>;
}