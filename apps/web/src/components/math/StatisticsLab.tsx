'use client';
import {useState} from 'react';
import {descriptiveStatistics} from '@/lib/math-labs';
import {MathStage,MathOutput,nice} from './MathLabCommon';
export default function StatisticsLab(){
 const [values,setValues]=useState<number[]>([4,5,5,8,12]);
 const [next,setNext]=useState('7');
 const stats=descriptiveStatistics(values);
 const frequencies=stats?.frequencies??[];
 const max=Math.max(1,...frequencies.map(([,times])=>times));
 function add(){const v=Number(next);if(!next.trim()||!Number.isFinite(v)||Math.abs(v)>100||values.length>=30)return;setValues(items=>[...items,v]);setNext('');}
 return <MathStage title="G · Estatística" description="Construa um conjunto de dados e veja média, mediana, moda, amplitude e dispersão serem atualizadas.">
  <div className="k-math-dataset" aria-label="Valores da amostra">
   {values.map((v,i)=><button type="button" key={i} title={`Remover ${v}`} aria-label={`Remover valor ${v}`} onClick={()=>setValues(items=>items.filter((_,index)=>index!==i))}>{nice(v)} <span aria-hidden="true">×</span></button>)}
   {!values.length&&<span>Nenhum dado; adicione um valor.</span>}
  </div>
  <div className="k-math-inline-input"><label>Adicionar valor (−100 a 100)<input type="number" min={-100} max={100} step="any" value={next} onChange={e=>setNext(e.target.value)}/></label>
   <button type="button" className="k-math-action" onClick={add} disabled={!next.trim()||!Number.isFinite(Number(next))||Math.abs(Number(next))>100||values.length>=30}>Adicionar</button>
   <button type="button" onClick={()=>setValues([4,5,5,8,12])}>Exemplo inicial</button></div>
  {stats?<><div className="k-math-grid">
    <MathOutput label="Média">{nice(stats.mean)}</MathOutput><MathOutput label="Mediana">{nice(stats.median)}</MathOutput>
    <MathOutput label="Moda">{stats.modes.length?stats.modes.map(n=>nice(n)).join(', '):'Amodal'}</MathOutput>
    <MathOutput label="Amplitude">{nice(stats.range)}</MathOutput>
    <MathOutput label="Desvio-padrão populacional">{nice(stats.standardDeviation)}</MathOutput>
    <MathOutput label="Total de dados">{stats.count}</MathOutput>
   </div><div className="k-math-histogram" role="img" aria-label="Gráfico de frequências dos valores inseridos">
    {frequencies.map(([v,times])=><div className="k-math-histogram-row" key={v}>
     <span>{nice(v)}</span><div><span style={{width:100*times/max+'%'}}/></div><strong>{times}</strong></div>)}
   </div><p className="k-math-tip">Média = soma ÷ quantidade. Mediana = valor central da lista ordenada. A moda é o valor mais frequente. O desvio-padrão mostrado usa a população inteira exibida.</p>
  </>:<p className="k-math-tip">Adicione ao menos um valor para visualizar as medidas.</p>}
 </MathStage>;
}