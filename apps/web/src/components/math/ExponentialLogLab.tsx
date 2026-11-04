'use client';
import {useState} from 'react';
import {exponentialValue,logarithmValue} from '@/lib/math-labs-extended';
import {MathRange,MathStage,MathOutput,nice} from './MathLabCommon';
export default function ExponentialLogLab(){
 const [base,setBase]=useState(2),[power,setPower]=useState(3),[argument,setArgument]=useState(8);
 const exp=exponentialValue(base,power),log=logarithmValue(base,argument);
 const expLine=Array.from({length:81},(_,i)=>{
  const x=-3+i*0.075,y=exponentialValue(base,x)??0;
  return (i?'L':'M')+(60+(x+3)*42).toFixed(2)+' '+(183-10*Math.min(16,y)).toFixed(2);
 }).join(' ');
 const logLine=Array.from({length:81},(_,i)=>{
  const x=0.25+i*0.12,y=logarithmValue(base,x)??0;
  return (i?'L':'M')+(60+x*22).toFixed(2)+' '+(183-30*y).toFixed(2);
 }).join(' ');
 return <MathStage title="Funções exponenciais e logarítmicas" description="Veja como a exponencial cresce ou decresce e como o logaritmo desfaz a potenciação.">
  <div className="k-math-controls"><MathRange label="Base (positiva e diferente de 1)" min={1.5} max={5} step={0.5} value={base} onChange={setBase}/>
   <MathRange label="Expoente x" min={-3} max={3} step={0.5} value={power} onChange={setPower}/>
   <MathRange label="Argumento do logaritmo" min={0.5} max={20} step={0.5} value={argument} onChange={setArgument}/></div>
  <div className="k-math-graph">
   <svg viewBox="0 0 350 210" role="img" aria-label={'Gráficos ilustrativos de exponencial e logaritmo na base '+base}>
    <line x1="18" x2="337" y1="183" y2="183" stroke="currentColor" opacity=".6"/>
    <line x1="60" x2="60" y1="12" y2="195" stroke="currentColor" opacity=".6"/>
    <path d={expLine} fill="none" stroke="#5B4DE3" strokeWidth="2.5"/>
    <path d={logLine} fill="none" stroke="#38CDE5" strokeWidth="2.5"/>
    <text x="195" y="24" fill="#5B4DE3" fontSize="12">y = bˣ</text>
    <text x="195" y="40" fill="#0F8FA8" fontSize="12">y = logᵦ(x)</text>
    <text x="334" y="200" fill="currentColor" fontSize="12">x</text>
   </svg>
  </div>
  <div className="k-math-grid"><MathOutput label={base+' elevado a '+power}>{nice(exp??NaN,4)}</MathOutput>
   <MathOutput label={'log base '+base+' de '+argument}>{nice(log??NaN,4)}</MathOutput></div>
  <p className="k-math-tip">Quando b&gt;1, bˣ cresce; logᵦ(x) é sua função inversa, definida apenas para x&gt;0. Por exemplo, se bˣ = y, então logᵦ(y) = x. As curvas usam janelas diferentes apenas para fins didáticos.</p>
 </MathStage>;
}