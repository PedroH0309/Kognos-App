'use client';

import {useState} from 'react';
import {ArrowRight,BookOpenText} from 'lucide-react';
import LessonChoiceQuestion from './LessonChoiceQuestion';
import {introductoryChoice} from '@/lib/lesson-multiple-choice';
import type {LearningLesson} from '@/lib/learning-catalog';

type Stage='concept'|'example'|'reflection';
const tabs:{id:Stage;label:string}[]=[
 {id:'concept',label:'Conceito'},
 {id:'example',label:'Exemplo'},
 {id:'reflection',label:'Desafio'}
];

/** Guided presentation of authored introductory material, not a scored quiz. */
export default function InteractiveIntroLesson({lesson,onTutor}:{
 lesson:LearningLesson;onTutor?:()=>void;
}){
 const [stage,setStage]=useState<Stage>('concept');
 const choice=introductoryChoice(lesson);
 const index=tabs.findIndex(item=>item.id===stage);
 return <section className="k-course-classroom k-intro-classroom" aria-label={'Estudo guiado de '+lesson.topic}>
  <div className="k-classroom-heading">
   <span className="overline"><BookOpenText size={15} aria-hidden="true"/> INTRODUÇÃO AUTORAL · {lesson.subject}</span>
   <p>Organize o estudo por blocos e registre o que compreendeu.</p>
  </div>
  <nav className="k-classroom-stages" aria-label="Etapas de leitura">
   {tabs.map((item,i)=><button type="button" key={item.id} aria-pressed={stage===item.id} className={stage===item.id?'is-current':''}
    onClick={()=>setStage(item.id)}><span>{i+1}</span>{item.label}</button>)}
  </nav>
  <div className="k-classroom-stage" key={stage}>
   {stage==='concept'&&<><span className="k-classroom-eyebrow">FUNDAMENTO</span><h4>Entenda o conceito</h4><p className="k-classroom-readable">{lesson.explanation}</p></>}
   {stage==='example'&&<><span className="k-classroom-eyebrow">EXEMPLO RESOLVIDO</span><h4>Como isso funciona na prática?</h4><p className="k-classroom-readable">{lesson.workedExample}</p><div className="k-classroom-pitfall"><strong>Erro frequente</strong><p>{lesson.commonMistake}</p></div></>}
   {stage==='reflection'&&<>
    <span className="k-classroom-eyebrow">CHECAGEM DE MÚLTIPLA ESCOLHA</span><h4>Escolha uma alternativa</h4>
    {choice?<LessonChoiceQuestion choice={choice}/>:
     <p>Este conteúdo ainda não possui questão objetiva cadastrada; nenhuma questão dissertativa é solicitada.</p>}
    <p className="k-classroom-privacy">Esta questão de alternativas não altera seu mapa de domínio. A prática corrigida continua na área Evolução.</p>
    {onTutor&&<button type="button" className="k-classroom-tutor" onClick={onTutor}>Pedir orientação ao Kog <ArrowRight size={16} aria-hidden="true"/></button>}
   </>}
  </div>
  <footer className="k-classroom-navigation"><button type="button" disabled={index===0} onClick={()=>setStage(tabs[index-1].id)}>Anterior</button><span>{index+1} de 3 partes</span><button type="button" disabled={index===2} onClick={()=>setStage(tabs[index+1].id)}>Continuar <ArrowRight size={15} aria-hidden="true"/></button></footer>
 </section>;
}
