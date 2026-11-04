'use client';
import {useEffect,useMemo,useState} from 'react';
import {FlaskConical,ArrowLeft,Search,BookOpen,Box,SlidersHorizontal} from 'lucide-react';
import {curriculumTopics,type CurriculumTopic} from '@/lib/curriculum-catalog';
import {findProvaoTopic,isProvaoTopic,type ProvaoGrade} from '@/lib/provao-paulista';
import type {ExamId} from '@/lib/exam-blueprints';
import {describeLaboratory} from '@/lib/laboratory-catalog';
import {resolveMathLab} from '@/lib/math-labs';
import {resolveScienceLab} from '@/lib/science-labs';
import {resolveLanguageLab} from '@/lib/language-labs';
import {resolveHumanitiesLab} from '@/lib/humanities-labs';
import MathLabPanel from './math/MathLabPanel';
import MathVisualPlayground from './math/MathVisualPlayground';
import ScienceLabPanel from './science/ScienceLabPanel';
import LanguageLabPanel from './languages/LanguageLabPanel';
import HumanitiesLabPanel from './humanities/HumanitiesLabPanel';
import PhETSimulationPanel from './PhETSimulationPanel';
import TopicVisualStudio from './TopicVisualStudio';

type LabInfo={topic:CurriculumTopic;description?:string;unit?:string;kind:ReturnType<typeof describeLaboratory>};
export default function LaboratoryHub({exam=null,grade=null,onOpenLesson}:{
 exam?:ExamId|null;grade?:ProvaoGrade|null;onOpenLesson?:(topic:CurriculumTopic)=>void;
}){
 const catalog=useMemo<LabInfo[]>(()=>curriculumTopics
  .filter(t=>(!exam||t.exams.includes(exam))&&(!exam||exam!=='saresp'||isProvaoTopic(t.subject,t.topic,grade)))
  .map(topic=>{
   const ref=findProvaoTopic(topic.subject,topic.topic);
   const description=ref?.description,unit=ref?.unit;
   return {topic,description,unit,kind:describeLaboratory({subject:topic.subject,topic:topic.topic,description,unit})};
  }),[exam,grade]);
 const subjects=useMemo(()=>[...new Set(catalog.map(t=>t.topic.subject))].sort((a,b)=>a.localeCompare(b,'pt-BR')),[catalog]);
 const [subject,setSubject]=useState('Matemática');
 const [search,setSearch]=useState('');
 const [showAll,setShowAll]=useState(false);
 const [selectedId,setSelectedId]=useState<string|null>(null);
 const [mobileOpen,setMobileOpen]=useState(false);
 const currentSubject=subjects.includes(subject)?subject:(subjects[0]??'');
 const filtered=useMemo(()=>catalog.filter(item=>item.topic.subject===currentSubject
  &&(showAll||item.kind.status==='specialized')
  &&item.topic.topic.toLocaleLowerCase('pt-BR').includes(search.trim().toLocaleLowerCase('pt-BR'))),[catalog,currentSubject,showAll,search]);
 const active=filtered.find(item=>item.topic.id===selectedId)??filtered[0]??null;
 useEffect(()=>{setMobileOpen(false);},[currentSubject,exam,grade]);
 function selectSubject(next:string){
  setSubject(next);setSelectedId(null);setSearch('');setMobileOpen(false);
 }
 function selectTopic(next:string){setSelectedId(next);setMobileOpen(true);}
 const entry=active?.topic;
 const ref=active?{subject:active.topic.subject,topic:active.topic.topic,unit:active.unit,description:active.description}:null;
 const math=ref?resolveMathLab(ref):null;
 const science=ref?resolveScienceLab(ref):null;
 const language=ref?resolveLanguageLab(ref):null;
 const humanities=ref?resolveHumanitiesLab(ref):null;
 return <section className="k-lab-hub" aria-label="Laboratório de simulações do Kognos">
  <header className="k-lab-hub-head">
   <div className="k-lab-hub-symbol"><FlaskConical size={25} aria-hidden="true"/></div>
   <div><span className="overline">KOGNOS LAB · ÁREA INDEPENDENTE</span><h2>Laboratórios por matéria e tema</h2>
    <p>Selecione uma disciplina e um experimento. Manipule gráficos, células, moléculas e outros modelos sem sair da área de laboratório.</p></div>
  </header>
  <nav className="k-lab-subjects" aria-label="Matérias do laboratório">
   {subjects.map(item=>{
    const total=catalog.filter(entry=>entry.topic.subject===item&&entry.kind.status==='specialized').length;
    return <button type="button" key={item} aria-pressed={currentSubject===item}
     onClick={()=>selectSubject(item)}>{item}<small>{total} temáticos</small></button>;
   })}
  </nav>
  <div className={'k-lab-body '+(mobileOpen?'is-lab-open':'is-lab-index')}>
   <aside className="k-lab-topic-index" aria-label={'Experimentos de '+currentSubject}>
    <div className="k-lab-topic-title"><h3>Temas de {currentSubject}</h3><span>{filtered.length} opções</span></div>
    <label className="k-lab-search"><Search size={17}/><span className="sr-only">Buscar tema</span>
     <input type="search" value={search} placeholder="Encontrar um tema…" onChange={e=>{setSearch(e.target.value);setSelectedId(null);setMobileOpen(false);}}/></label>
    <label className="k-lab-show-all"><input type="checkbox" checked={showAll} onChange={e=>{setShowAll(e.target.checked);setSelectedId(null);setMobileOpen(false);}}/>
     Mostrar também mapas de investigação gerais</label>
    <div className="k-lab-topic-list">
     {filtered.map(item=><button type="button" key={item.topic.id}
      aria-pressed={entry?.id===item.topic.id} onClick={()=>selectTopic(item.topic.id)}>
      <span>{item.kind.status==='specialized'?<SlidersHorizontal size={16}/>:<Box size={16}/>}</span>
      <span><strong>{item.topic.topic}</strong><small>{item.kind.description}</small></span></button>)}
     {!filtered.length&&<p className="k-lab-empty">Nenhum laboratório encontrado com estes filtros. Ative os mapas gerais para consultar outros temas.</p>}
    </div>
   </aside>
   <article className="k-lab-detail" aria-label="Experiência interativa selecionada">
    <button className="k-lab-back" type="button" onClick={()=>setMobileOpen(false)}><ArrowLeft size={16}/> Outros temas de {currentSubject}</button>
    {entry&&ref&&active?<div key={entry.id}>
     <header className="k-lab-detail-head">
      <span className="overline">{entry.subject} · {active.kind.status==='specialized'?'EXPERIÊNCIA POR CONTEÚDO':'MAPA DE INVESTIGAÇÃO'}</span>
      <h3>{entry.topic}</h3>
      <p>{active.kind.description}. As simulações são opcionais, não substituem a aula escrita nem geram nota.</p>
      {onOpenLesson&&<button type="button" className="k-lab-open-lesson" onClick={()=>onOpenLesson(entry)}>
       <BookOpen size={16}/> Ir para a aula deste tema</button>}
     </header>
     {math&&<MathLabPanel key={'math-'+entry.id} {...ref}/>}
     {entry.subject==='Matemática'&&!math&&<MathVisualPlayground key={'math-fallback-'+entry.id} topic={entry.topic}/>}
     {science&&<ScienceLabPanel key={'science-'+entry.id} {...ref}/>}
     {language&&<LanguageLabPanel key={'language-'+entry.id} {...ref}/>}
     {humanities&&<HumanitiesLabPanel key={'humanities-'+entry.id} {...ref}/>}
     <PhETSimulationPanel key={'phet-'+entry.id} {...ref}/>
     {active.kind.status==='general'&&<TopicVisualStudio key={'concept-'+entry.id} {...ref}/>}
     <p className="k-lab-honesty">Os recursos experimentais desta sala são modelos didáticos. Quando o tema ainda não possui simulador especializado, o mapa de investigação não representa um experimento científico daquele conteúdo. A prática com notas e evolução permanece na aula.</p>
    </div>:<div className="k-lab-empty"><h3>Selecione um tema</h3><p>Escolha outro assunto ou marque a opção de mostrar mapas gerais.</p></div>}
   </article>
  </div>
 </section>;
}
