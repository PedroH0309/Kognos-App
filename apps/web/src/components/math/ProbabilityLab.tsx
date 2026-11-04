'use client';
import {useState} from 'react';
import {probability} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
export default function ProbabilityLab(){
 const [blue,setBlue]=useState(2),[orange,setOrange]=useState(3),[draws,setDraws]=useState(0),[blueDraws,setBlueDraws]=useState(0),[latest,setLatest]=useState<string|null>(null);
 const expected=probability(blue,orange);
 function reset(){setDraws(0);setBlueDraws(0);setLatest(null);}
 function draw(){const chosen=Math.random()*(blue+orange)<blue;setDraws(n=>n+1);if(chosen)setBlueDraws(n=>n+1);setLatest(chosen?'Azul':'Laranja');}
 const empirical=draws?100*blueDraws/draws:null;
 return <MathStage title="F · Probabilidade" description="Monte uma urna e realize sorteios com reposição: a chance teórica pode ser comparada à frequência observada.">
  <div className="k-math-controls"><MathRange label="Bolas azuis" min={0} max={12} value={blue} onChange={v=>{setBlue(v);reset();}}/>
   <MathRange label="Bolas laranja" min={0} max={12} value={orange} onChange={v=>{setOrange(v);reset();}}/></div>
  <div className="k-math-urn" aria-label={`Urna com ${blue} bolas azuis e ${orange} bolas laranja`}>
   {Array.from({length:blue},(_,i)=><span key={'b'+i} className="k-math-ball blue" aria-label="Bola azul"/>)}
   {Array.from({length:orange},(_,i)=><span key={'o'+i} className="k-math-ball orange" aria-label="Bola laranja"/>)}
   {!blue&&!orange&&<span>Inclua pelo menos uma bola para começar.</span>}
  </div>
  <div className="k-math-grid"><MathOutput label="P(azul) teórica">{expected?nice(expected.percent,2)+'%':'—'}</MathOutput>
   <MathOutput label="Casos favoráveis / total">{expected?expected.fraction:'—'}</MathOutput>
   <MathOutput label="Azuis observadas">{blueDraws} de {draws}</MathOutput>
   <MathOutput label="Frequência experimental">{empirical===null?'—':nice(empirical,1)+'%'}</MathOutput></div>
  <div className="k-math-buttons"><button type="button" className="k-math-action" disabled={!expected} onClick={draw}>Sortear uma bola</button>
   <button type="button" disabled={!expected} onClick={()=>{for(let i=0;i<10;i++)drawOne();function drawOne(){/* intentionally not used */} const count=Array.from({length:10},()=>Math.random()*(blue+orange)<blue).filter(Boolean).length;setDraws(n=>n+10);setBlueDraws(n=>n+count);setLatest('Lote de 10 sorteios');}}>Sortear 10 vezes</button>
   <button type="button" onClick={reset}>Reiniciar</button></div>
  <p className="k-math-tip" role="status">{latest?`Último sorteio: ${latest}. `:''}Cada sorteio é independente e a bola retorna à urna. Com mais sorteios, a frequência tende a se aproximar da chance teórica, mas não precisa coincidir.</p>
 </MathStage>;
}