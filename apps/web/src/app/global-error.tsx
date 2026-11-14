'use client';
import ErrorRecovery from '@/components/ErrorRecovery';

export default function GlobalError({retry}:{error:unknown;retry:()=>void}){
 return <html lang="pt-BR"><body style={{margin:0}}><ErrorRecovery onRetry={retry}/></body></html>;
}
