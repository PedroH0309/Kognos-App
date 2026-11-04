'use client';
import {useState} from 'react';
import {proportionalityValue,type ProportionalityType} from '@/lib/math-labs-extended';
import {MathRange,MathStage,MathOutput,nice} from './MathLabCommon';
const kinds:{id:ProportionalityType;label:string;rule:string}[]=[
 {id:'direct',label:'Direta',rule:'y = k × x'},
 {id:'inverse',label:'Inversa',rule:'y = k ÷ x'},
 {id:'quadratic',label:'Quadrática',rule:'y = k × x²'}
];
export default function ProportionalityLab(){
 const [kind,setKind]=useState<ProportionalityType>('direct');
 const [constant,setConstant]=useState(6);
 const [x,setX]=useState(3);
 const values=Array.from({length:10},(_,i)=>({x:i+1,y:proportionalityValue(kind,constant,i+1)??0}));
 const max=Math.max(1,...values.map(p=>p.y));
 const path=values.map((p,i)=>(i?'L':'M')+(30+(p.x-1)*31)+' '+(167-140*p.y/max)).join(' ');
 const y=proportionalityValue(kind,constant,x);
 return <MathStage title="Razões e proporcionalidade" description="Observe como duas grandezas variam juntas: direta, inversa ou proporcional ao quadrado.">
  <div className="k-math-switch" role="group" aria-label="Relação entre grandezas">
   {kinds.map(item=><button key={item.id} type="button" aria-pressed={kind===item.id} onClick={()=>setKind(item.id)}>{item.label}</button>)}
  </div>
  <div className="k-math-controls"><MathRange label="Constante k" min={1} max={12} value={constant} onChange={setConstant}/>
   <MathRange label="Valor de x" min={1} max={10} value={x} onChange={setX}/></div>
  <div className="k-math-graph">
   <svg viewBox="0 0 340 200" role="img" aria-label={'Gráfico da proporcionalidade '+kind+' com x entre 1 e 10'}>
    <line x1="26" y1="168" x2="322" y2="168" stroke="currentColor"/>
    <line x1="26" y1="16" x2="26" y2="168" stroke="currentColor"/>
    <path d={path} fill="none" stroke="#5B4DE3" strokeWidth="3"/>
    {values.map(p=><circle key={p.x} cx={30+(p.x-1)*31} cy={167-140*p.y/max} r={p.x===x?5:2} fill={p.x===x?'#38CDE5':'#5B4DE3'}/>)}
    <text x="317" y="187" fill="currentColor" fontSize="12">x</text>
    <text x="7" y="13" fill="currentColor" fontSize="12">y</text>
   </svg>
  </div>
  <div className="k-math-grid"><MathOutput label="Regra">{kinds.find(v=>v.id===kind)?.rule}</MathOutput>
   <MathOutput label={'Valor para x = '+x}>{y===null?'Indefinido':nice(y,3)}</MathOutput></div>
  <p className="k-math-tip">{kind==='direct'?'Se x dobra, y também dobra.':kind==='inverse'?'Se x dobra, y cai à metade quando k é constante.':'Se x dobra, y quadruplica. Esta é uma relação quadrática, não uma proporção direta simples.'}</p>
 </MathStage>;
}