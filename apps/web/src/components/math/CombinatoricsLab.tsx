'use client';
import {useState} from 'react';
import {countWays,type CountingType} from '@/lib/math-labs-extended';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
const kinds:{id:CountingType;label:string}[]=[
 {id:'product',label:'Princípio multiplicativo'},
 {id:'permutation',label:'Permutação'},
 {id:'arrangement',label:'Arranjo'},
 {id:'combination',label:'Combinação'}
];
export default function CombinatoricsLab(){
 const [kind,setKind]=useState<CountingType>('combination');
 const [n,setN]=useState(5),[k,setK]=useState(2);
 const positions=kind==='product'?2:kind==='permutation'?n:k;
 const ways=countWays(kind,n,k);
 const formula=kind==='product'?'n × k':kind==='permutation'?'n!':kind==='arrangement'?'n! / (n−k)!':'n! / (k! × (n−k)!)';
 return <MathStage title="Análise combinatória" description="Conte possibilidades e compare escolhas em que a ordem importa ou não importa.">
  <div className="k-math-switch" role="group" aria-label="Método de contagem">
   {kinds.map(item=><button key={item.id} type="button" aria-pressed={kind===item.id} onClick={()=>setKind(item.id)}>{item.label}</button>)}
  </div>
  <div className="k-math-controls"><MathRange label={kind==='product'?'Opções da 1ª etapa':'Total de elementos (n)'} min={1} max={8} value={n}
   onChange={v=>{setN(v);setK(old=>Math.min(old,v));}}/>
   {kind!=='permutation'&&<MathRange label={kind==='product'?'Opções da 2ª etapa':'Elementos selecionados (k)'} min={1} max={kind==='product'?8:n}
    value={k} onChange={setK}/>}</div>
  <div className="k-math-sequence-list k-math-slot-grid" role="img" aria-label={'Representação de '+positions+' posições na contagem'}>
   {Array.from({length:positions},(_,i)=><div key={i}><small>POSIÇÃO {i+1}</small><strong>{kind==='combination'?'•':kind==='permutation'?nice(n-i):kind==='arrangement'?nice(n-i):i===0?nice(n):nice(k)}</strong></div>)}
  </div>
  <div className="k-math-grid"><MathOutput label="Fórmula">{formula}</MathOutput><MathOutput label="Número de possibilidades">{ways===null?'Seleção inválida':nice(ways,0)}</MathOutput></div>
  <p className="k-math-tip">{kind==='product'?'Princípio multiplicativo: multiplicam-se as escolhas disponíveis em cada etapa.':kind==='permutation'?'Permutação: organize todos os n elementos distintos; a ordem altera o resultado.':kind==='arrangement'?'Arranjo simples: escolha k entre n elementos distintos, sem repetição, considerando a ordem.':'Combinação simples: escolha k entre n elementos distintos, sem repetição, desconsiderando a ordem.'}</p>
 </MathStage>;
}