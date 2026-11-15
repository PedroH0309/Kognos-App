'use client';
import {useEffect,useRef} from 'react';
import {BookOpen,RefreshCw} from 'lucide-react';
import styles from './ErrorRecovery.module.css';

type Props={onRetry?:()=>void;title?:string;description?:string};

/** Keep error details out of the page: they can contain account or provider data. */
export default function ErrorRecovery({onRetry,title='Não foi possível abrir esta página',
 description='Tente novamente. Se a falha continuar, volte ao início para retomar seus estudos.'}:Props){
 const heading=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{heading.current?.focus();},[]);
 return <main className={styles.page}>
  <section className={styles.card} aria-labelledby="kognos-recovery-title">
   <span className={styles.brand}><BookOpen size={24} aria-hidden="true"/> Kognos</span>
   <h1 ref={heading} tabIndex={-1} id="kognos-recovery-title" className={styles.title}>{title}</h1>
   <p className={styles.description}>{description}</p>
   <div className={styles.actions}>
    {onRetry&&<button type="button" onClick={onRetry} className={styles.retry}><RefreshCw size={18} aria-hidden="true"/> Tentar novamente</button>}
    <form action="/" method="get"><button type="submit" className={styles.home}>Voltar ao início</button></form>
   </div>
  </section>
 </main>;
}
