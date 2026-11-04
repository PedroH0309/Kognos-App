'use client';
import type {ReactNode} from 'react';

export const fmt=(n:number,digits=3)=>Number.isFinite(n)?n.toLocaleString('pt-BR',{maximumFractionDigits:digits}):'Indefinido';
export function ScienceStage({subject,title,description,children}:{subject:string;title:string;description:string;children:ReactNode}){
 return <section className="k-science-lab" aria-label={title}>
  <header className="k-science-lab-header">
   <span className="overline">LABORATÓRIO DE {subject.toLocaleUpperCase('pt-BR')} · MODELO DIDÁTICO</span>
   <h3>{title}</h3><p>{description}</p>
  </header>
  {children}
  <p className="k-science-disclaimer">Exploração demonstrativa, não experimento físico. Não registra nota, acertos ou domínio. Para avaliação e histórico, utilize “Praticar mais 10 questões” em Evolução da habilidade.</p>
 </section>;
}
export function ScienceSlider({label,value,min,max,step=1,onChange,unit=''}:{
 label:string;value:number;min:number;max:number;step?:number;onChange:(v:number)=>void;unit?:string;
}){
 return <label className="k-science-slider"><span>{label}<strong>{fmt(value,4)}{unit}</strong></span>
  <input type="range" min={min} max={max} step={step} value={value}
   onChange={e=>onChange(Number(e.target.value))}/>
 </label>;
}
export function ScienceOutput({label,children}:{label:string;children:ReactNode}){
 return <div className="k-science-output"><span>{label}</span><strong>{children}</strong></div>;
}
