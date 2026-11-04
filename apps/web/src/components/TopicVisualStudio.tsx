'use client';
import {useState} from 'react';
import {referenceCards,studyMethodForSubject,type ExplorerMaterial} from '@/lib/study-exploration';

type View='map'|'flow';
/** Every curriculum topic gets a visible and clickable concept workspace.
 * Lens names are methods, not automatically invented topic-specific facts.
 */
export default function TopicVisualStudio(input:ExplorerMaterial){
 const method=studyMethodForSubject(input.subject);
 const references=referenceCards(input);
 const [view,setView]=useState<View>('map');
 const [focus,setFocus]=useState(0);
 const [reference,setReference]=useState(0);
 const [order,setOrder]=useState([0,1,2]);
 const [details,setDetails]=useState(false);
 const labels=method.promptLabels;
 const move=(from:number,delta:number)=>{
  const dest=from+delta;if(dest<0||dest>=order.length)return;
  setOrder(current=>{const result=[...current];[result[from],result[dest]]=[result[dest],result[from]];return result;});
 };
 return <section className="k-visual-studio" aria-label={'Mapa interativo de '+input.topic}>
  <div className="k-visual-studio-heading">
   <div><span>ESTÚDIO VISUAL · {input.subject.toLocaleUpperCase('pt-BR')}</span>
    <h4>Manipule o mapa de {input.topic}</h4>
    <p>Escolha um eixo, reorganize a sequência e inspecione o conteúdo registrado. Esta é uma ferramenta de investigação, não uma explicação automática de todo o assunto.</p>
   </div>
   <div className="k-visual-studio-switch" role="group" aria-label="Visualização">
    <button type="button" aria-pressed={view==='map'} onClick={()=>setView('map')}>Mapa</button>
    <button type="button" aria-pressed={view==='flow'} onClick={()=>setView('flow')}>Sequência</button>
   </div>
  </div>
  {view==='map'?<div className="k-visual-concept-map">
   <div className="k-visual-topic-node"><small>TEMA CENTRAL</small><strong>{input.topic}</strong></div>
   <svg viewBox="0 0 320 48" preserveAspectRatio="none" aria-hidden="true">
    <path d="M160 0 V21 M52 21 H268 M52 21 V48 M160 21 V48 M268 21 V48"
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5" opacity=".55"/>
   </svg>
   <div className="k-visual-lenses" role="group" aria-label="Selecione um eixo de investigação">
    {labels.map((label,i)=><button key={label} type="button" aria-pressed={focus===i} onClick={()=>setFocus(i)}>
     <span>{i+1}</span><strong>{label}</strong></button>)}
   </div>
  </div>:<div className="k-visual-flow" aria-label="Reorganize os eixos para construir seu roteiro">
   {order.map((index,i)=><div className="k-visual-flow-card" key={index}>
    <div><small>ETAPA {i+1}</small><strong>{labels[index]}</strong></div>
    <div className="k-visual-flow-tools">
     <button type="button" disabled={i===0} aria-label={'Mover '+labels[index]+' para cima'} onClick={()=>move(i,-1)}>↑</button>
     <button type="button" disabled={i===2} aria-label={'Mover '+labels[index]+' para baixo'} onClick={()=>move(i,1)}>↓</button>
     <button type="button" aria-label={'Inspecionar '+labels[index]} onClick={()=>setFocus(index)}>Ver</button>
    </div></div>)}
   <p className="k-visual-caption">Você define a ordem. Não há ordem científica ou histórica universal para estas três perguntas orientadoras.</p>
  </div>}
  <div className="k-visual-inspector" aria-live="polite">
   <span>EIXO EM FOCO · {focus+1}/3</span>
   <h4>{labels[focus]}</h4><p>{method.questions[focus]}</p>
   <button type="button" className="k-visual-inspector-toggle" aria-expanded={details} onClick={()=>setDetails(v=>!v)}>
    {details?'Ocultar referência curricular':'Consultar referência curricular'}
   </button>
   {details&&<div className="k-visual-excerpts">
    <div className="k-visual-excerpt-tabs" role="group" aria-label="Selecione um trecho">
     {references.map((value,i)=><button type="button" key={i} aria-pressed={reference===i}
      onClick={()=>setReference(i)}>Trecho {i+1}</button>)}
    </div>
    <p>{references[reference]??input.topic}</p>
   </div>}
  </div>
  <p className="k-visual-caption">Os eixos são métodos de estudo. O mapa é uma representação manipulável do roteiro, e não uma simulação específica de conceitos que ainda não possuem material desenvolvido.</p>
 </section>;
}
