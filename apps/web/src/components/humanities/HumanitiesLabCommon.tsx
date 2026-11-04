'use client';
import type {ReactNode} from 'react';
import type {HumanitiesKind} from '@/lib/humanities-labs';

export function HumanitiesStage({subject,kind,title,description,children}:{
 subject:string;kind:HumanitiesKind;title:string;description:string;children:ReactNode;
}){
 return <section className="k-humanities-lab" aria-label={title} data-humanities-kind={kind}>
  <header className="k-humanities-lab-head">
   <span className="overline">LABORATÓRIO DE {subject.toLocaleUpperCase('pt-BR')} · MATERIAL AUTORAL</span>
   <h3>{title}</h3><p>{description}</p>
  </header>
  {children}
  <p className="k-humanities-disclaimer">Atividade didática local, sem nota ou correção oficial. As escolhas e anotações não são salvas nem alteram o mapa de domínio. Para a prática avaliada, use “Praticar mais 10 questões” em Evolução da habilidade.</p>
 </section>;
}
export function HumanitiesField({label,value,onChange,placeholder='',rows=3}:{
 label:string;value:string;onChange:(value:string)=>void;placeholder?:string;rows?:number;
}){
 return <label className="k-humanities-field">{label}
  <textarea value={value} rows={rows} placeholder={placeholder} maxLength={2000}
   onChange={e=>onChange(e.target.value)}/></label>;
}
export function HumanitiesSlider({label,value,min,max,step=1,onChange,unit=''}:{
 label:string;value:number;min:number;max:number;step?:number;onChange:(v:number)=>void;unit?:string;
}){
 return <label className="k-humanities-slider">
  <span>{label}<strong>{value.toLocaleString('pt-BR')}{unit}</strong></span>
  <input type="range" value={value} min={min} max={max} step={step}
   onChange={e=>onChange(Number(e.target.value))}/>
 </label>;
}
export function ChoiceRow({label,items,value,onChange}:{
 label:string;items:readonly {value:string;label:string}[];value:string;
 onChange:(value:string)=>void;
}){
 return <div className="k-humanities-choice" role="group" aria-label={label}>
  {items.map(item=><button key={item.value} type="button" aria-pressed={value===item.value}
   onClick={()=>onChange(item.value)}>{item.label}</button>)}
 </div>;
}
