'use client';
import type {ReactNode} from 'react';
export const nice=(value:number,digits=3)=>Number.isFinite(value)?value.toLocaleString('pt-BR',{maximumFractionDigits:digits}):'Indefinido';
export function MathStage({title,description,children}:{title:string;description:string;children:ReactNode}){
 return <section className="k-math-lab" aria-label={title}>
  <header className="k-math-lab-head"><span className="overline">LABORATÓRIO INTERATIVO · MATEMÁTICA</span><h3>{title}</h3><p>{description}</p></header>
  {children}
  <p className="k-math-local-note">Exploração demonstrativa: ajustes e desafios deste laboratório não geram nota, não alteram histórico e não substituem “Praticar mais 10 questões” em Evolução da habilidade.</p>
 </section>;
}
export function MathRange({label,value,min,max,step=1,onChange,unit=''}:{
 label:string;value:number;min:number;max:number;step?:number;unit?:string;onChange:(v:number)=>void;
}){
 return <label className="k-math-range">
  <span>{label}<strong>{nice(value,4)}{unit}</strong></span>
  <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}/>
 </label>;
}
export function MathNumber({label,value,onChange,min=-100,max=100,step=1}:{
 label:string;value:number;min?:number;max?:number;step?:number;onChange:(v:number)=>void;
}){
 return <label className="k-math-number">{label}<input type="number" value={value} min={min} max={max} step={step}
  onChange={e=>{const n=Number(e.target.value);if(e.target.value.trim()!==''&&Number.isFinite(n))onChange(Math.max(min,Math.min(max,n)));}}/></label>;
}
export function MathOutput({label,children}:{label:string;children:ReactNode}){
 return <div className="k-math-output"><span>{label}</span><strong>{children}</strong></div>;
}
