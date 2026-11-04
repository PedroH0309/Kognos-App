'use client';
import {useState} from 'react';
import {historicalTimelines,chronologicalOrder,sourceScenarios,historyCauseCards} from '@/lib/humanities-labs';
import {HumanitiesStage,HumanitiesField,ChoiceRow} from './HumanitiesLabCommon';

export function HistoryTimelineLab(){
 const [collection,setCollection]=useState(0),[selected,setSelected]=useState(0);
 const [order,setOrder]=useState<number[]>([2,0,4,1,5,3]);
 const [checked,setChecked]=useState(false);
 const timeline=historicalTimelines[collection];
 const milestones=timeline.milestones;
 const chronology=chronologicalOrder(milestones,order);
 function chooseCollection(next:number){setCollection(next);setSelected(0);setOrder([2,0,4,1,5,3]);setChecked(false);}
 function move(index:number,delta:number){const target=index+delta;if(target<0||target>=order.length)return;
  setOrder(current=>{const updated=[...current];[updated[index],updated[target]]=[updated[target],updated[index]];return updated;});
  setChecked(false);
 }
 return <HumanitiesStage subject="História" kind="history-timeline" title="Linha do tempo e processos históricos"
  description="Analise marcos históricos, intervalos de tempo e sequências, sem confundir uma linha do tempo com a explicação integral dos processos.">
  <label className="k-humanities-select">Linha do tempo
   <select value={collection} onChange={e=>chooseCollection(Number(e.target.value))}>
    {historicalTimelines.map((entry,i)=><option key={entry.id} value={i}>{entry.label}</option>)}
   </select>
  </label>
  <div className="k-humanities-timeline" role="group" aria-label="Selecione um marco histórico">
   <div className="k-humanities-timeline-track" aria-hidden="true"/>
   {milestones.map((event,i)=><button key={event.year} type="button" onClick={()=>setSelected(i)}
    aria-pressed={selected===i} style={{left:(10+80*i/Math.max(1,milestones.length-1))+'%'}}>
     <span>{event.year}</span>
    </button>)}
  </div>
  <div className="k-humanities-insight">
   <span>MARCO SELECIONADO · {milestones[selected].year}</span>
   <h4>{milestones[selected].label}</h4>
   <p>{milestones[selected].context}</p>
   <small>Referência de data e evento: {milestones[selected].reference}. Texto explicativo original do Kognos.</small>
  </div>
  <h4>Organize a cronologia</h4>
  <p className="k-humanities-subtext">Use as setas para ordenar seis marcos por ano. Os pontos estão espaçados igualmente para facilitar a leitura: as distâncias na linha não representam a duração real entre acontecimentos. Uma sequência temporal não demonstra, por si só, relação de causa e efeito.</p>
  <ol className="k-humanities-reorder">{order.map((index,position)=><li key={index}><span><strong>{milestones[index].label}</strong> · {milestones[index].year}</span>
   <div><button type="button" aria-label={'Mover marco '+(position+1)+' para cima'} disabled={position===0} onClick={()=>move(position,-1)}>↑</button>
    <button type="button" aria-label={'Mover marco '+(position+1)+' para baixo'} disabled={position===5} onClick={()=>move(position,1)}>↓</button></div></li>)}</ol>
  <button type="button" className="k-humanities-primary" onClick={()=>setChecked(true)}>Conferir sequência temporal</button>
  {checked&&<p className="k-humanities-feedback" role="status">{chronology?'Ordem cronológica correta. Agora compare os contextos para investigar relações e rupturas.':'Há marcos fora da ordem temporal. Considere os anos e reorganize a sequência.'}</p>}
 </HumanitiesStage>;
}
export function HistorySourcesLab(){
 const [source,setSource]=useState(0),[decision,setDecision]=useState<string|null>(null);
 const [questions,setQuestions]=useState('');
 const scenario=sourceScenarios[source];
 return <HumanitiesStage subject="História" kind="history-evidence" title="Análise crítica de fontes e narrativas"
  description="Aprenda a identificar autoria, ponto de vista e limites de uma narrativa por meio de trechos DIDÁTICOS FICTÍCIOS.">
  <label className="k-humanities-select">Cenário de análise
   <select value={source} onChange={e=>{setSource(Number(e.target.value));setDecision(null);setQuestions('');}}>
    {sourceScenarios.map((item,i)=><option key={item.id} value={i}>{item.topic}</option>)}</select>
  </label>
  <div className="k-humanities-insight">
   <span>ORIGEM IDENTIFICADA</span>
   <p>{scenario.origin}</p>
   <blockquote>{scenario.excerpt}</blockquote>
  </div>
  <h4>A afirmação é justificada pelo trecho?</h4>
  <p>{scenario.claim}</p>
  <ChoiceRow label="Analise a afirmação"
   items={[{value:'yes',label:'Sim, está comprovada'},{value:'no',label:'Não, é preciso confrontar fontes'}]}
   value={decision??''} onChange={setDecision}/>
  {decision&&<p className="k-humanities-feedback" role="status">{decision==='no'?'Boa análise: uma afirmação ampla exige confronto de evidências.':'Revise o alcance da afirmação e considere o contexto de produção.'} {scenario.notes}</p>}
  <HumanitiesField label="Que outras fontes ou perguntas seriam necessárias?" value={questions} onChange={setQuestions}
   placeholder="Quem produziu o registro? Em que contexto? Quais vozes estão ausentes?"/>
  <p className="k-humanities-subtext">Estes trechos não são documentos primários autênticos e não podem ser usados como evidência de época em uma redação ou pesquisa histórica.</p>
 </HumanitiesStage>;
}
export function HistoryCausalityLab(){
 const [focus,setFocus]=useState('Revolução Industrial');
 const [order,setOrder]=useState([2,0,1]),[checked,setChecked]=useState(false);
 const [factor,setFactor]=useState(''),[actors,setActors]=useState(''),[changes,setChanges]=useState('');
 function move(index:number,delta:number){const target=index+delta;if(target<0||target>=3)return;
  setOrder(current=>{const next=[...current];[next[index],next[target]]=[next[target],next[index]];return next;});
  setChecked(false);
 }
 return <HumanitiesStage subject="História" kind="history-causality" title="Oficina de causas, decisões e consequências"
  description="Reconstrua perguntas de investigação para processos históricos complexos. A estrutura é didática; não implica causalidade automática.">
  <label className="k-humanities-select">Processo para estudo<select value={focus} onChange={e=>{setFocus(e.target.value);setFactor('');setActors('');setChanges('');}}>
   {['Revolução Industrial','Colonização e trabalho','Movimentos sociais e direitos'].map(v=><option key={v} value={v}>{v}</option>)}</select></label>
  <ol className="k-humanities-reorder">{order.map((index,i)=><li key={index}>
   <span><strong>{historyCauseCards[index].label}</strong> — {historyCauseCards[index].explanation}</span>
   <div><button type="button" aria-label={'Mover etapa '+(i+1)+' para cima'} disabled={i===0} onClick={()=>move(i,-1)}>↑</button>
    <button type="button" aria-label={'Mover etapa '+(i+1)+' para baixo'} disabled={i===2} onClick={()=>move(i,1)}>↓</button></div>
  </li>)}</ol>
  <button type="button" className="k-humanities-primary" onClick={()=>setChecked(true)}>Conferir roteiro de investigação</button>
  {checked&&<p role="status" className="k-humanities-feedback">{order.every((v,i)=>v===i)?'O roteiro segue antecedentes, transformações e consequências.':'Organize primeiro as condições, depois as transformações e por último os efeitos. Esta é uma ordem de exposição, não uma lei histórica.'}</p>}
  <div className="k-humanities-notes">
   <HumanitiesField label={'Que condições antecederam '+focus+'?'} value={factor} onChange={setFactor}/>
   <HumanitiesField label="Quais agentes, interesses e conflitos merecem pesquisa?" value={actors} onChange={setActors}/>
   <HumanitiesField label="Que mudanças e permanências devem ser verificadas?" value={changes} onChange={setChanges}/>
  </div>
  <p className="k-humanities-subtext">Rascunhos de investigação: consulte fontes históricas reais para formular conclusões sobre o tema.</p>
 </HumanitiesStage>;
}
