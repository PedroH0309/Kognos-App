'use client';
import {useState} from 'react';
import {sequenceModel,type SequenceType} from '@/lib/math-labs-extended';
import {MathRange,MathStage,MathOutput,nice} from './MathLabCommon';
export default function SequenceLab(){
 const [kind,setKind]=useState<SequenceType>('arithmetic');
 const [first,setFirst]=useState(2),[difference,setDifference]=useState(3),[count,setCount]=useState(6);
 const data=sequenceModel(kind,first,difference,count);
 return <MathStage title="Sequências, PA e PG" description="Mude o primeiro termo e a razão; acompanhe a lei de formação, os termos e a soma dos n primeiros.">
  <div className="k-math-switch" role="group" aria-label="Tipo de progressão">
   <button type="button" aria-pressed={kind==='arithmetic'} onClick={()=>{setKind('arithmetic');setDifference(3);}}>PA — aritmética</button>
   <button type="button" aria-pressed={kind==='geometric'} onClick={()=>{setKind('geometric');setDifference(2);}}>PG — geométrica</button>
  </div>
  <div className="k-math-controls"><MathRange label="Primeiro termo a₁" min={-5} max={10} value={first} onChange={setFirst}/>
   <MathRange label={kind==='arithmetic'?'Diferença (razão r)':'Fator (razão q)'} min={kind==='arithmetic'?-5:0} max={5} value={difference} onChange={setDifference}/>
   <MathRange label="Número de termos" min={2} max={9} value={count} onChange={setCount}/></div>
  {data&&<>
   <ol className="k-math-sequence-list">
    {data.terms.map((value,index)=><li key={index}><small>a{index+1}</small><strong>{nice(value,3)}</strong></li>)}
   </ol>
   <div className="k-math-grid"><MathOutput label={'Termo a'+count}>{nice(data.nth,3)}</MathOutput>
    <MathOutput label="Soma dos termos">{nice(data.sum,3)}</MathOutput></div>
  </>}
  <p className="k-math-tip">{kind==='arithmetic'?'PA: aₙ = a₁ + (n−1)r. A diferença entre termos consecutivos é constante.':'PG: aₙ = a₁·qⁿ⁻¹. A razão multiplicativa entre termos é constante quando os termos permitem essa divisão.'}</p>
 </MathStage>;
}