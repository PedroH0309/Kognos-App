'use client';
import {useState} from 'react';
import {evaluatePolynomial,solveQuadratic} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
const xTo=(x:number)=>200+20*x;
const yTo=(y:number)=>140-14*y;
export default function FunctionGraphLab(){
 const [kind,setKind]=useState<'linear'|'quadratic'>('linear');
 const [a,setA]=useState(1),[b,setB]=useState(0),[c,setC]=useState(-2),[x,setX]=useState(2);
 const evalAt=(input:number)=>evaluatePolynomial(kind,a,b,c,input);
 const curve=Array.from({length:201},(_,i)=>{const px=-10+i/10;return (i?'L':'M')+xTo(px).toFixed(2)+' '+yTo(evalAt(px)).toFixed(2);}).join(' ');
 const coordinates=Array.from({length:11},(_,i)=>i*2-10);
 const quadratic=solveQuadratic(a,b,c);
 return <MathStage title="D · Funções e gráficos" description="Controle os coeficientes e observe a reta ou parábola mudar no plano cartesiano.">
  <div className="k-math-switch" role="group" aria-label="Tipo de função">
   <button type="button" aria-pressed={kind==='linear'} onClick={()=>setKind('linear')}>Função afim</button>
   <button type="button" aria-pressed={kind==='quadratic'} onClick={()=>setKind('quadratic')}>Função quadrática</button></div>
  <div className="k-math-controls"><MathRange label="Coeficiente a" min={-3} max={3} step={0.5} value={a} onChange={setA}/>
   <MathRange label="Coeficiente b" min={-6} max={6} step={0.5} value={b} onChange={setB}/>
   {kind==='quadratic'&&<MathRange label="Coeficiente c" min={-6} max={6} step={0.5} value={c} onChange={setC}/>}
   <MathRange label="Ponto x" min={-8} max={8} step={0.5} value={x} onChange={setX}/></div>
  <div className="k-math-graph">
   <svg viewBox="0 0 400 280" role="img" aria-label={`Gráfico de ${kind==='linear'?'função afim':'função quadrática'} com coeficientes a=${a}, b=${b}, c=${kind==='linear'?0:c}`} preserveAspectRatio="xMidYMid meet">
    {coordinates.map(n=><g key={n}><line x1={xTo(n)} y1="0" x2={xTo(n)} y2="280" stroke="currentColor" opacity=".09"/><line x1="0" y1={yTo(n)} x2="400" y2={yTo(n)} stroke="currentColor" opacity=".09"/></g>)}
    <line x1="0" y1="140" x2="400" y2="140" stroke="currentColor" opacity=".65" strokeWidth="1.4"/>
    <line x1="200" y1="0" x2="200" y2="280" stroke="currentColor" opacity=".65" strokeWidth="1.4"/>
    <path d={curve} fill="none" stroke="#5B4DE3" strokeWidth="3" strokeLinecap="round"/>
    <circle cx={xTo(x)} cy={yTo(evalAt(x))} r="5.5" fill="#38CDE5" stroke="#101B33" strokeWidth="1.5"/>
    <text x="383" y="132" fill="currentColor" fontSize="11">x</text><text x="209" y="13" fill="currentColor" fontSize="11">y</text>
   </svg>
  </div>
  <MathOutput label={kind==='linear'?'f(x) = ax + b':'f(x) = ax² + bx + c'}>{`f(${nice(x)}) = ${nice(evalAt(x))}`}</MathOutput>
  {kind==='quadratic'&&a!==0&&quadratic&&<div className="k-math-grid">
   <MathOutput label="Vértice">{`(${nice(quadratic.vertexX)}; ${nice(quadratic.vertexY)})`}</MathOutput>
   <MathOutput label="Raízes reais">{quadratic.roots.length?quadratic.roots.map(v=>nice(v)).join(' e '):'Nenhuma'}</MathOutput>
  </div>}
  <p className="k-math-tip">{kind==='linear'?'Na função afim, a define inclinação e b indica o ponto em que a reta cruza o eixo y.':'Na quadrática, o sinal de a controla a concavidade; o vértice indica máximo ou mínimo quando a é diferente de zero.'}</p>
 </MathStage>;
}