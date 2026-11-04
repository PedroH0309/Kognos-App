'use client';
import {useState} from 'react';
import {intertextExamples,discourseExamples,originalText,type TextRelation,type DiscourseView} from '@/lib/visual-study-models';

const relations:{id:TextRelation;label:string}[]=[
 {id:'quote',label:'Citação'},
 {id:'paraphrase',label:'Paráfrase'},
 {id:'allusion',label:'Alusão'}
];
const voices:{id:DiscourseView;label:string}[]=[
 {id:'news',label:'Jornalismo'},
 {id:'scientific',label:'Ciência'},
 {id:'campaign',label:'Campanha'}
];

export default function IntertextualityLab(){
 const [mode,setMode]=useState<'texts'|'voices'>('texts');
 const [relation,setRelation]=useState<TextRelation>('quote');
 const [voice,setVoice]=useState<DiscourseView>('news');
 const [highlight,setHighlight]=useState(true);
 const [selected,setSelected]=useState<'source'|'new'>('new');
 const example=intertextExamples[relation];
 const discourse=discourseExamples[voice];
 function markShared(text:string,needle:string){
  const index=text.toLocaleLowerCase('pt-BR').indexOf(needle.toLocaleLowerCase('pt-BR'));
  if(!highlight||index<0)return text;
  return <>{text.slice(0,index)}<mark>{text.slice(index,index+needle.length)}</mark>{text.slice(index+needle.length)}</>;
 }
 return <section className="k-intertext-lab" aria-label="Laboratório de intertextualidade e interdiscursividade">
  <header><span className="overline">PORTUGUÊS · LABORATÓRIO VISUAL</span>
   <h3>Diálogo entre textos e discursos</h3>
   <p>Compare dois textos autorais, altere a relação entre eles e observe como diferentes campos sociais tratam um mesmo assunto.</p>
  </header>
  <div className="k-intertext-choices" role="group" aria-label="Tipo de comparação">
   <button type="button" aria-pressed={mode==='texts'} onClick={()=>{setMode('texts');setSelected('new');}}>Intertextualidade</button>
   <button type="button" aria-pressed={mode==='voices'} onClick={()=>{setMode('voices');setSelected('new');}}>Interdiscursividade</button>
  </div>
  {mode==='texts'?<div className="k-intertext-choices" role="group" aria-label="Relação entre textos">
   {relations.map(item=><button key={item.id} type="button" aria-pressed={relation===item.id}
    onClick={()=>{setRelation(item.id);setSelected('new');}}>{item.label}</button>)}
  </div>:<div className="k-intertext-choices" role="group" aria-label="Campo de discurso">
   {voices.map(item=><button type="button" key={item.id} aria-pressed={voice===item.id}
    onClick={()=>setVoice(item.id)}>{item.label}</button>)}
  </div>}
  <label className="k-intertext-highlight"><input type="checkbox" checked={highlight}
    onChange={e=>setHighlight(e.target.checked)}/> Evidenciar as palavras retomadas</label>
  <div className="k-intertext-diagram">
   <button type="button" className="k-intertext-paper" aria-pressed={selected==='source'}
    onClick={()=>setSelected('source')}>
    <span>01 · TEXTO DE PARTIDA</span>
    <p>{originalText}</p>
   </button>
   <div className="k-intertext-link" aria-hidden="true">
    <svg viewBox="0 0 120 42" role="img"><path d="M3 21 H116 M102 10 l14 11 -14 11" fill="none" stroke="#5B4DE3" strokeWidth="3" strokeLinecap="round"/></svg>
    <span>{mode==='texts'?'RETOMADA':'MUDANÇA DE PERSPECTIVA'}</span>
   </div>
   <button type="button" className="k-intertext-paper" aria-pressed={selected==='new'}
    onClick={()=>setSelected('new')}>
    <span>02 · {mode==='texts'?'TEXTO QUE DIALOGA':'DISCURSO '+discourse.label.toLocaleUpperCase('pt-BR')}</span>
    <p>{mode==='texts'?markShared(example.excerpt,example.shared):discourse.text}</p>
   </button>
  </div>
  <div className="k-intertext-explanation" role="status">
   <span>{mode==='texts'?'RELAÇÃO SELECIONADA: '+example.label.toLocaleUpperCase('pt-BR'):'PERSPECTIVA SELECIONADA: '+discourse.label.toLocaleUpperCase('pt-BR')}</span>
   <p>{mode==='texts'?example.explanation:discourse.focus}</p>
   <p className="k-intertext-footnote">Você selecionou o {selected==='source'?'texto de partida':'texto em diálogo'}. Alterne as opções acima para mudar a representação.</p>
  </div>
  <p className="k-intertext-disclaimer">Textos e contextos criados para esta demonstração. A intertextualidade pode ocorrer por citação, reformulação ou alusão; a interdiscursividade examina relações entre modos de dizer e posições sociais, e não se reduz a trocar palavras. Esta oficina não avalia proficiência e não substitui o conteúdo da aula.</p>
 </section>;
}
