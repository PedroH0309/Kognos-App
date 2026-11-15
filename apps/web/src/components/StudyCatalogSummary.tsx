'use client';
import {useId} from 'react';
import styles from './StudyCatalogSummary.module.css';

type Props={counts:{authored:number;introductory:number;planned:number};readyOnly:boolean;onReadyOnlyChange:(value:boolean)=>void};

export default function StudyCatalogSummary({counts,readyOnly,onReadyOnlyChange}:Props){
 const description=useId();
 return <section className={styles.summary} aria-label="Disponibilidade do catálogo">
  <div className={styles.heading}>
   <h2 className={styles.title}>Conteúdo para estudar</h2>
   <p className={styles.description} id={description}>Aulas aprofundadas e guias introdutórios têm conteúdo autoral. Os demais temas estão em desenvolvimento. Revisão pedagógica humana pendente.</p>
  </div>
  <dl className={styles.counts}>
   <div><dt>Aulas aprofundadas</dt><dd>{counts.authored}</dd></div>
   <div><dt>Guias introdutórios</dt><dd>{counts.introductory}</dd></div>
   <div><dt>Em desenvolvimento</dt><dd>{counts.planned}</dd></div>
  </dl>
  <label className={styles.filter}>
   <input type="checkbox" checked={readyOnly} onChange={event=>onReadyOnlyChange(event.target.checked)} aria-describedby={description}/>
   <span>Mostrar apenas aulas com conteúdo</span>
  </label>
 </section>;
}
