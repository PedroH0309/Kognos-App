'use client';
import {useState} from 'react';
import {solveLinearSystem} from '@/lib/math-labs-extended';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
const xp=(x:number)=>180+x*20,yp=(y:number)=>130-y*14;
function line(a:number,b:number,c:number){
 if(b!==0)return 'M'+xp(-9)+' '+yp((c+a*9)/b)+' L'+xp(9)+' '+yp((c-a*9)/b);
 if(a!==0){const x=xp(c/a);return 'M'+x+' 0 L'+x+' 260';}
 return '';
}
export default function LinearSystemsLab(){
 const [a,setA]=useState(1),[b,setB]=useState(1),[c,setC]=useState(5);
 const [d,setD]=useState(1),[e,setE]=useState(-1),[f,setF]=useState(1);
 const result=solveLinearSystem(a,b,c,d,e,f);
 return <MathStage title="Sistemas lineares" description="Ajuste os coeficientes das duas equações e observe a interseção das retas ou os casos sem solução única.">
  <div className="k-math-controls">
   <MathRange label="Equação 1: a" min={-4} max={4} value={a} onChange={setA}/>
   <MathRange label="Equação 1: b" min={-4} max={4} value={b} onChange={setB}/>
   <MathRange label="Equação 1: resultado" min={-8} max={8} value={c} onChange={setC}/>
   <MathRange label="Equação 2: d" min={-4} max={4} value={d} onChange={setD}/>
   <MathRange label="Equação 2: e" min={-4} max={4} value={e} onChange={setE}/>
   <MathRange label="Equação 2: resultado" min={-8} max={8} value={f} onChange={setF}/>
  </div>
  <div className="k-math-graph">
   <svg viewBox="0 0 360 260" role="img" aria-label="Duas equações representadas por retas no plano cartesiano">
    <line x1="0" y1="130" x2="360" y2="130" stroke="currentColor" opacity=".55"/>
    <line x1="180" y1="0" x2="180" y2="260" stroke="currentColor" opacity=".55"/>
    <path d={line(a,b,c)} stroke="#5B4DE3" strokeWidth="2.8" fill="none"/>
    <path d={line(d,e,f)} stroke="#0AAFC7" strokeWidth="2.8" strokeDasharray="8 4" fill="none"/>
    {result.kind==='unique'&&<circle cx={xp(result.x)} cy={yp(result.y)} r="5" fill="#F59E0B" stroke="#101B33" strokeWidth="1.5"/>}
    <text x="8" y="15" fill="#5B4DE3" fontSize="11">Reta 1</text>
    <text x="8" y="31" fill="#0AAFC7" fontSize="11">Reta 2</text>
    <text x="345" y="123" fill="currentColor" fontSize="12">x</text>
   </svg>
  </div>
  <div className="k-math-grid">
   <MathOutput label="Equação 1">{a}x + ({b})y = {c}</MathOutput>
   <MathOutput label="Equação 2">{d}x + ({e})y = {f}</MathOutput>
   <MathOutput label="Classificação">{result.kind==='unique'?'Solução única':result.kind==='parallel'?'Incompatível':'Soluções infinitas'}</MathOutput>
   <MathOutput label="Resultado">{result.kind==='unique'?('x = '+nice(result.x,3)+'; y = '+nice(result.y,3)):result.kind==='parallel'?'Nenhuma solução':'Infinitas soluções'}</MathOutput>
  </div>
  <p className="k-math-tip">Δ = a·e − b·d. Se Δ é diferente de zero, há uma solução única. Caso contrário, as equações podem ser equivalentes ou incompatíveis. A área visível do gráfico é limitada.</p>
 </MathStage>;
}
