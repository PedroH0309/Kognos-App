'use client';
import ErrorRecovery from '@/components/ErrorRecovery';

export default function ApplicationError({retry}:{error:unknown;retry:()=>void}){
 return <ErrorRecovery onRetry={retry}/>;
}
