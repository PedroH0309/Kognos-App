'use client';
import {useState} from 'react';
import {percentageScenario} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
export default function PercentageExplorer(){
 const [base,setBase]=useState(120),[rate,setRate]=useState(10);
 const [mode,setMode]=useState<'discount'|'increase'>('discount');
 const [challenge,setChallenge]=useState(''),[checked,setChecked]=useState(false);
 const {difference,total,fraction}=percentageScenario(base,rate,mode);
 const correct=percentageScenario(180,15,'discount').total;
 return <MathStage title="B · Porcentagem e razão" description="Ajuste a taxa e compare aumento, desconto, fração e decimal usando o mesmo valor de referência.">
  <div className="k-math-controls"><MathRange label="Valor original (R$)" value={base} min={20} max={1000} step={10} onChange={setBase}/>
   <MathRange label="Taxa (%)" value={rate} min={0} max={100} onChange={setRate}/></div>
  <div className="k-math-switch" role="group" aria-label="Tipo de variação">
   <button type="button" aria-pressed={mode==='discount'} onClick={()=>setMode('discount')}>Desconto</button>
   <button type="button" aria-pressed={mode==='increase'} onClick={()=>setMode('increase')}>Aumento</button>
  </div>
  <div className="k-math-percent-track" role="progressbar" aria-label="Percentual aplicado" aria-valuemin={0} aria-valuemax={100} aria-valuenow={rate}><span style={{width:rate+'%'}}/></div>
  <div className="k-math-grid"><MathOutput label="Taxa decimal">{nice(fraction,4)}</MathOutput>
   <MathOutput label="Parte calculada">R$ {nice(difference,2)}</MathOutput>
   <MathOutput label="Valor final">R$ {nice(total,2)}</MathOutput></div>
  <p className="k-math-tip">{rate}% = {rate}/100 = {nice(fraction,4)}. {mode==='discount'?'Subtraia':'Some'} R$ {nice(difference,2)} do valor original de R$ {nice(base,2)}.</p>
  <div className="k-math-challenge"><h4>Desafio rápido</h4><p>Um produto de R$ 180 recebe desconto de 15%. Qual é o preço final?</p>
   <label>Seu resultado (R$)<input type="number" step="0.01" value={challenge} onChange={e=>{setChallenge(e.target.value);setChecked(false);}} placeholder="Ex.: 150"/></label>
   <button type="button" disabled={challenge.trim()===''||!Number.isFinite(Number(challenge))} onClick={()=>setChecked(true)}>Conferir raciocínio</button>
   {checked&&<p role="status">{Math.abs(Number(challenge)-correct)<0.01?'Correto: 15% de 180 é 27; 180 − 27 = 153.':'Revise: calcule 0,15 × 180 e subtraia do valor original. O resultado é R$ 153.'}</p>}
  </div>
 </MathStage>;
}