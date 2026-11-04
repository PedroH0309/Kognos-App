'use client';
import {useState} from 'react';
import {solveLinear,solveQuadratic} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
export default function EquationWorkbench(){
 const [kind,setKind]=useState<'linear'|'quadratic'>('linear');
 const [a,setA]=useState(2),[b,setB]=useState(-12),[c,setC]=useState(6);
 const [step,setStep]=useState(0),[attempt,setAttempt]=useState(''),[checked,setChecked]=useState(false);
 const linear=solveLinear(a,b),quadratic=solveQuadratic(a,b,c);
 const steps=kind==='linear'
  ?[`Comece com ${nice(a)}x + (${nice(b)}) = 0.`,`Subtraia ${nice(b)} dos dois lados: ${nice(a)}x = ${nice(-b)}.`,`Divida os dois lados por ${nice(a)}: x = ${nice(linear?.root??NaN)}.`]
  :[`Separe a = ${nice(a)}, b = ${nice(b)}, c = ${nice(c)}.`,
    `Calcule Δ = b² − 4ac = ${nice(quadratic?.discriminant??NaN)}.`,
    quadratic?.roots.length?`Use x = (−b ± √Δ)/(2a). Raiz(es): ${quadratic.roots.map(x=>nice(x)).join(' e ')}.`:'Δ negativo: não existem raízes reais.'];
 function reset(){setStep(0);setChecked(false);setAttempt('');}
 const roots=kind==='linear'?(linear?[linear.root]:[]):quadratic?.roots??[];
 const success=roots.some(root=>Math.abs(root-Number(attempt))<0.01);
 return <MathStage title="C · Equações" description="Equilibre os dois lados da igualdade ou resolva a equação quadrática, revelando um passo de cada vez.">
  <div className="k-math-switch" role="group" aria-label="Tipo de equação">
   <button type="button" aria-pressed={kind==='linear'} onClick={()=>{setKind('linear');reset();}}>1º grau</button>
   <button type="button" aria-pressed={kind==='quadratic'} onClick={()=>{setKind('quadratic');reset();}}>2º grau</button>
  </div>
  <div className="k-math-controls"><MathRange label="Coeficiente a" value={a} min={-8} max={8} onChange={v=>{setA(v);reset();}}/>
   <MathRange label="Coeficiente b" value={b} min={-20} max={20} onChange={v=>{setB(v);reset();}}/>
   {kind==='quadratic'&&<MathRange label="Coeficiente c" value={c} min={-20} max={20} onChange={v=>{setC(v);reset();}}/>}</div>
  <MathOutput label="Equação atual">{kind==='linear'?`${a}x + (${b}) = 0`:`${a}x² + (${b})x + (${c}) = 0`}</MathOutput>
  {a===0?<p role="alert" className="k-math-tip">Escolha a diferente de zero para manter uma equação de {kind==='linear'?'1º':'2º'} grau.</p>:<>
   <ol className="k-math-steps">{steps.slice(0,step+1).map((text,i)=><li key={i}>{text}</li>)}</ol>
   {step<steps.length-1&&<button type="button" className="k-math-action" onClick={()=>setStep(v=>v+1)}>Revelar próximo passo</button>}
   <MathOutput label="Solução real">{roots.length?roots.map(v=>nice(v)).join(' e '):'Não há raízes reais'}</MathOutput>
   {roots.length>0&&<div className="k-math-challenge"><h4>Teste uma raiz</h4><label>Qual valor de x zera a equação?<input type="number" step="0.01" value={attempt} onChange={e=>{setAttempt(e.target.value);setChecked(false);}}/></label>
    <button type="button" disabled={!attempt.trim()||!Number.isFinite(Number(attempt))} onClick={()=>setChecked(true)}>Verificar</button>
    {checked&&<p role="status">{success?'Boa! Esse valor satisfaz a igualdade.':'Ainda não: substitua seu x na equação e verifique se o lado esquerdo é zero.'}</p>}
   </div>}
  </>}
 </MathStage>;
}