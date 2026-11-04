'use client';
import {useState} from 'react';
import {punnettCross,logisticPopulation,trophicEnergy,cellCyclePhase,type MendelianGenotype,type CellStage} from '@/lib/science-labs';
import {ScienceStage,ScienceSlider,ScienceOutput,fmt} from './ScienceLabCommon';

export function GeneticsLab(){
 const [parentA,setParentA]=useState<MendelianGenotype>('Aa');
 const [parentB,setParentB]=useState<MendelianGenotype>('Aa');
 const result=punnettCross(parentA,parentB);
 const parents=[['AA','Homozigoto dominante'],['Aa','Heterozigoto'],['aa','Homozigoto recessivo']] as const;
 return <ScienceStage subject="Biologia" title="Cruzamentos mendelianos" description="Combine dois genótipos de um único gene e descubra as probabilidades de cada descendente, sem prever indivíduos reais.">
  <div className="k-science-controls">
   {([['Genótipo parental 1',parentA,setParentA],['Genótipo parental 2',parentB,setParentB]] as const).map(([label,value,set])=>
    <label className="k-science-select" key={label}>{label}<select value={value} onChange={e=>set(e.target.value as MendelianGenotype)}>
     {parents.map(([id,description])=><option key={id} value={id}>{id} — {description}</option>)}
    </select></label>)}
  </div>
  <div className="k-science-punnett" aria-label="Quadro de Punnett do cruzamento de dois parentais">
   {result?.cells.map((cell,index)=><div key={index} className={cell==='aa'?'is-recessive':'is-dominant'}>{cell}</div>)}
  </div>
  {result&&<div className="k-science-grid">
   <ScienceOutput label="AA">{result.genotypes.AA}/4 = {25*result.genotypes.AA}%</ScienceOutput>
   <ScienceOutput label="Aa">{result.genotypes.Aa}/4 = {25*result.genotypes.Aa}%</ScienceOutput>
   <ScienceOutput label="aa">{result.genotypes.aa}/4 = {25*result.genotypes.aa}%</ScienceOutput>
   <ScienceOutput label="Fenótipo dominante">{fmt(result.dominantFraction*100,0)}%</ScienceOutput>
  </div>}
  <p className="k-science-note">Modelo monogênico com dominância completa, segregação mendeliana e equiprobabilidade dos gametas. Os percentuais são probabilidades teóricas de cada descendente, não proporções garantidas em famílias reais. Não representa interações gênicas, sistema ABO ou influências ambientais.</p>
 </ScienceStage>;
}
export function PopulationLab(){
 const [initial,setInitial]=useState(20);
 const [capacity,setCapacity]=useState(100);
 const [rate,setRate]=useState(0.35),[time,setTime]=useState(10);
 const safeInitial=Math.min(initial,capacity);
 const current=logisticPopulation(safeInitial,capacity,rate,time);
 const curve=Array.from({length:101},(_,i)=>{
  const t=i*0.25,number=logisticPopulation(safeInitial,capacity,rate,t)??0;
  return (i?'L':'M')+(16+12.3*t).toFixed(1)+' '+(176-152*number/capacity).toFixed(1);
 }).join(' ');
 return <ScienceStage subject="Biologia" title="Crescimento populacional" description="Ajuste a população inicial, a capacidade ambiental e a taxa de crescimento em um modelo logístico.">
  <div className="k-science-controls">
   <ScienceSlider label="População inicial" min={5} max={100} step={5} value={initial} onChange={setInitial}/>
   <ScienceSlider label="Capacidade de suporte (K)" min={50} max={500} step={25} value={capacity} onChange={setCapacity}/>
   <ScienceSlider label="Taxa intrínseca (r)" min={0} max={1} step={0.05} value={rate} onChange={setRate}/>
   <ScienceSlider label="Tempo do modelo" min={0} max={25} step={1} value={time} onChange={setTime}/>
  </div>
  {initial>capacity&&<p className="k-science-note">Para manter a simulação de crescimento a partir de baixo da capacidade, o valor inicial foi limitado a K = {capacity} neste gráfico.</p>}
  <div className="k-science-visual"><svg viewBox="0 0 340 210" role="img" aria-label={'Gráfico de crescimento populacional logístico com capacidade '+capacity}>
   <line x1="16" y1="176" x2="328" y2="176" stroke="currentColor" opacity=".5"/>
   <line x1="16" y1="12" x2="16" y2="190" stroke="currentColor" opacity=".5"/>
   <path d={curve} stroke="#5B4DE3" strokeWidth="3" fill="none"/>
   <line x1="16" y1="24" x2="328" y2="24" stroke="#38CDE5" strokeWidth="1.6" strokeDasharray="5 4"/>
   <text x="225" y="17" fill="currentColor" fontSize="11">K = {capacity}</text>
   <text x="310" y="194" fill="currentColor" fontSize="11">tempo</text>
  </svg></div>
  <div className="k-science-grid"><ScienceOutput label="População estimada no tempo t">{fmt(current??NaN,1)}</ScienceOutput>
   <ScienceOutput label="Capacidade de suporte">{capacity}</ScienceOutput></div>
  <p className="k-science-note">Curva logística ideal de ambiente estável, sem migração, sazonalidade, predadores ou flutuação aleatória. Não é previsão de uma população real; r e t usam unidades abstratas consistentes entre si.</p>
 </ScienceStage>;
}
export function TrophicLab(){
 const [producer,setProducer]=useState(1000);
 const [efficiency,setEfficiency]=useState(10);
 const energy=trophicEnergy(producer,efficiency);
 const labels=['Produtores','Consumidores primários','Consumidores secundários','Consumidores terciários'];
 return <ScienceStage subject="Biologia" title="Pirâmide de energia" description="Explore a energia disponível em níveis tróficos, variando a energia dos produtores e a eficiência média de transferência.">
  <div className="k-science-controls">
   <ScienceSlider label="Energia dos produtores" min={100} max={5000} step={100} value={producer} onChange={setProducer} unit=" kJ"/>
   <ScienceSlider label="Transferência por nível" min={5} max={20} step={1} value={efficiency} onChange={setEfficiency} unit="%"/>
  </div>
  <div className="k-science-trophic" role="img" aria-label={'Pirâmide de energia com eficiência de transferência de '+efficiency+' por cento'}>
   {energy?.slice().reverse().map((value,i)=><div key={i} className="k-science-trophic-row" style={{width:Math.min(95,32+i*21)+'%'}}>
    <strong>{labels[3-i]}</strong><span>{fmt(value,2)} kJ</span></div>)}
  </div>
  <div className="k-science-grid"><ScienceOutput label="Energia de consumidores primários">{fmt(energy?.[1]??NaN,2)} kJ</ScienceOutput>
   <ScienceOutput label="Energia no quarto nível">{fmt(energy?.[3]??NaN,3)} kJ</ScienceOutput></div>
  <p className="k-science-note">Modelo aproximado de fluxo unidirecional de energia. A regra dos 10% é uma referência didática, não uma constante universal; transferências reais dependem de organismos e ecossistemas. Pirâmide energética não representa biomassa ou número de indivíduos.</p>
 </ScienceStage>;
}
export function CellCycleLab(){
 const [stage,setStage]=useState<CellStage>('G1');
 const stages:CellStage[]=['G1','S','G2','M'];
 const index=stages.indexOf(stage);
 const info=cellCyclePhase(stage);
 return <ScienceStage subject="Biologia" title="Ciclo celular e mitose" description="Percorra G1, S, G2 e mitose/citocinese e acompanhe as mudanças na quantidade de DNA.">
  <nav className="k-science-cell-stages" aria-label="Etapas do ciclo celular">
   {stages.map((id,i)=><button type="button" key={id} onClick={()=>setStage(id)}
    aria-pressed={stage===id}><span>{i+1}</span>{id}</button>)}
  </nav>
  <div className="k-science-visual"><svg viewBox="0 0 340 176" role="img" aria-label={'Esquema do ciclo celular, etapa atual '+stage}>
   <circle cx="170" cy="89" r="64" fill="#5B4DE31C" stroke="#5B4DE3" strokeWidth="2"/>
   <circle cx="170" cy="89" r="38" fill="#38CDE51B" stroke="#0AAFC7" strokeWidth="2"/>
   {Array.from({length:stage==='G1'?2:4},(_,i)=><path key={i}
    d={'M '+(148+(i%2)*31)+' '+(72+Math.floor(i/2)*25)+' q 10 -10 16 0 q -8 12 -16 7'}
    stroke={i%2?'#5B4DE3':'#0AAFC7'} strokeWidth="3" fill="none"/>)}
   <text x="170" y="164" fontSize="12" textAnchor="middle" fill="currentColor">Representação esquemática</text>
  </svg></div>
  <div className="k-science-grid"><ScienceOutput label="Etapa">{info.label}</ScienceOutput>
   <ScienceOutput label="Conteúdo relativo de DNA">{info.dnaContent}</ScienceOutput></div>
  <p className="k-science-note">{info.description} Esquema simplificado de uma célula diploide em ciclo mitótico; não representa meiose, cromossomos específicos, nem o tempo relativo de cada etapa.</p>
  <div className="k-science-choice" role="group" aria-label="Avançar no ciclo">
   <button type="button" disabled={index===0} onClick={()=>setStage(stages[index-1])}>Etapa anterior</button>
   <button type="button" onClick={()=>setStage(stages[(index+1)%stages.length])}>Próxima etapa</button>
  </div>
 </ScienceStage>;
}
