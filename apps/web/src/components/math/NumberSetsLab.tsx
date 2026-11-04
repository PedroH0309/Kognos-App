'use client';
import {useState} from 'react';
import {numberSetExamples} from '@/lib/math-labs-extended';
import {MathStage,nice} from './MathLabCommon';

const groups=['Naturais','Inteiros','Racionais','Irracionais','Reais'];
export default function NumberSetsLab(){
 const [selected,setSelected]=useState(0);
 const [guess,setGuess]=useState<string|null>(null);
 const example=numberSetExamples[selected];
 const cx=150+example.value*23;
 const group=groups[(selected+2)%groups.length];
 return <MathStage title="Números e conjuntos numéricos" description="Compare números naturais, inteiros, racionais, irracionais e reais na reta numérica.">
  <label className="k-math-select">Escolha um número
   <select value={selected} onChange={e=>{setSelected(Number(e.target.value));setGuess(null);}}>
    {numberSetExamples.map((entry,i)=><option value={i} key={entry.label}>{entry.label}</option>)}
   </select>
  </label>
  <div className="k-math-graph">
   <svg viewBox="0 0 330 120" role="img" aria-label={'Reta numérica com '+example.label+' em '+nice(example.value,3)}>
    <line x1="20" x2="310" y1="65" y2="65" stroke="currentColor" strokeWidth="2"/>
    {Array.from({length:11},(_,i)=>i-5).map(v=><g key={v}>
     <line x1={150+v*23} x2={150+v*23} y1="59" y2="71" stroke="currentColor" strokeWidth="1"/>
     <text x={150+v*23} y="89" textAnchor="middle" fill="currentColor" fontSize="10">{v}</text>
    </g>)}
    <circle cx={cx} cy="65" r="6" fill="#5B4DE3" stroke="#38CDE5" strokeWidth="2"/>
    <text x={Math.min(295,Math.max(25,cx))} y="37" textAnchor="middle" fill="currentColor" fontSize="13">{example.label}</text>
   </svg>
  </div>
  <div className="k-math-set-tags" aria-label="Conjuntos aos quais pertence">
   {groups.map(value=><span key={value} className={example.groups.includes(value as never)?'is-member':'is-not-member'}>{value}</span>)}
  </div>
  <p className="k-math-tip">O número {example.label} pertence aos conjuntos destacados. Aqui adotamos a convenção de que zero é natural. Todo racional e todo irracional é real, mas um número não pode ser racional e irracional ao mesmo tempo.</p>
  <div className="k-math-challenge"><h4>Qual classificação está correta?</h4><p>O número {example.label} é {group.toLocaleLowerCase('pt-BR')}?</p>
   <div className="k-math-switch" role="group" aria-label="Classifique o número">
    <button type="button" aria-pressed={guess==='yes'} onClick={()=>setGuess('yes')}>Sim</button>
    <button type="button" aria-pressed={guess==='no'} onClick={()=>setGuess('no')}>Não</button>
   </div>
   {guess&&<p role="status">{(guess==='yes')===example.groups.includes(group as never)?'Correto. Confira os conjuntos destacados acima.':'Revise os conjuntos destacados na reta.'}</p>}
  </div>
 </MathStage>;
}