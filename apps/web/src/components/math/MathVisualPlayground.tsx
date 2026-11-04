'use client';
import {useState} from 'react';
import {modelLine} from '@/lib/visual-study-models';

const format=(n:number)=>Number.isFinite(n)?n.toLocaleString('pt-BR',{maximumFractionDigits:2}):'–';
export default function MathVisualPlayground({topic}:{topic:string}){
 const [slope,setSlope]=useState(2),[intercept,setIntercept]=useState(1),[x,setX]=useState(2);
 const [showGuides,setShowGuides]=useState(true);
 const y=modelLine(slope,intercept,x)??0;
 const projectX=(n:number)=>170+n*24;
 const projectY=(n:number)=>144-n*12;
 const path=Array.from({length:61},(_,i)=>{
  const value=-6+i*0.2;
  return (i?'L':'M')+projectX(value).toFixed(2)+' '+projectY(modelLine(slope,intercept,value)??0).toFixed(2);
 }).join(' ');
 return <section className="k-math-playground" aria-label={'Experimentação numérica de '+topic}>
  <header><span className="overline">MATEMÁTICA · MESA DE EXPERIMENTAÇÃO</span>
   <h3>Experimente relações entre valores</h3>
   <p>Arraste os parâmetros e veja o gráfico e a reta numérica se transformarem em tempo real.</p>
  </header>
  <div className="k-math-playground-controls">
   <label>Coeficiente a <strong>{slope}</strong><input type="range" min="-5" max="5" step="0.5" value={slope} onChange={e=>setSlope(Number(e.target.value))}/></label>
   <label>Coeficiente b <strong>{intercept}</strong><input type="range" min="-6" max="6" step="0.5" value={intercept} onChange={e=>setIntercept(Number(e.target.value))}/></label>
   <label>Valor de x <strong>{x}</strong><input type="range" min="-5" max="5" step="0.5" value={x} onChange={e=>setX(Number(e.target.value))}/></label>
  </div>
  <div className="k-math-playground-graph">
   <svg viewBox="0 0 340 288" role="img" aria-label={'Gráfico de y igual a '+slope+' vezes x mais '+intercept+', com ponto em '+format(x)+', '+format(y)}>
    <defs><clipPath id="k-math-playground-window"><rect x="12" y="15" width="316" height="255"/></clipPath></defs>
    {showGuides&&Array.from({length:13},(_,i)=>i-6).map(n=><g key={n} stroke="currentColor" opacity=".1">
     <line x1={projectX(n)} x2={projectX(n)} y1="15" y2="270"/>
     <line x1="12" x2="328" y1={projectY(n)} y2={projectY(n)}/></g>)}
    <line x1="12" y1={projectY(0)} x2="328" y2={projectY(0)} stroke="currentColor" opacity=".7"/>
    <line x1={projectX(0)} y1="15" x2={projectX(0)} y2="270" stroke="currentColor" opacity=".7"/>
    <g clipPath="url(#k-math-playground-window)">
     <path d={path} fill="none" stroke="#5B4DE3" strokeWidth="3"/>
     <circle cx={projectX(x)} cy={projectY(y)} r="6" fill="#38CDE5" stroke="#101B33" strokeWidth="1.5"/>
    </g>
    <text x="310" y="160" fontSize="11" fill="currentColor">x</text>
    <text x="178" y="24" fontSize="11" fill="currentColor">y</text>
    <text x="170" y="282" fontSize="11" fill="currentColor" textAnchor="middle">Plano cartesiano ilustrativo</text>
   </svg>
  </div>
  <div className="k-math-playground-values">
   <span>y = {format(slope)}x {intercept<0?'− '+format(Math.abs(intercept)):'+ '+format(intercept)}</span>
   <strong>({format(x)}; {format(y)})</strong>
  </div>
  <label className="k-math-playground-guides"><input type="checkbox" checked={showGuides} onChange={e=>setShowGuides(e.target.checked)}/> Mostrar malha cartesiana</label>
  <p className="k-math-playground-note"><strong>Importante:</strong> este é um manipulador básico de função afim disponibilizado como suporte visual para o tema “{topic}”. Ele não deve ser confundido com um simulador específico desse assunto. Quando existir um laboratório de Matemática correspondente, ele aparece no lugar deste manipulador.</p>
 </section>;
}
