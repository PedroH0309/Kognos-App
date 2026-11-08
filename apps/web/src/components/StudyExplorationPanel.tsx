'use client';

import {useState} from 'react';
import {ArrowDown,ArrowLeft,ArrowRight,ArrowUp,BookOpen,CheckCircle2,RefreshCw} from 'lucide-react';
import LessonChoiceQuestion from './LessonChoiceQuestion';
import {lessonTaskChoice,introductoryChoice} from '@/lib/lesson-multiple-choice';
import type {ExplorerMaterial} from '@/lib/study-exploration';
import TopicVisualStudio from './TopicVisualStudio';
import {
 contentMaturity,explorerChallenge,explorerSourceLabel,referenceCards,studyMethodForSubject
} from '@/lib/study-exploration';

type Stage='investigate'|'organize'|'apply';
const stages:{id:Stage;label:string}[]=[
 {id:'investigate',label:'Investigar'},
 {id:'organize',label:'Organizar'},
 {id:'apply',label:'Aplicar'}
];
const maturityLabels={
 published:'Aula completa desenvolvida',
 introduction:'Introdução disponível',
 outline:'Tema cadastrado — sem aula completa'
} as const;

/**
 * Interactive exploration for every catalog topic. The only scored practice
 * remains the existing 10-question AI session in SkillEvolutionPanel.
 */
export default function StudyExplorationPanel(input:ExplorerMaterial & {onTutor?:()=>void}){
 const {subject,topic,lesson,onTutor}=input;
 const [stage,setStage]=useState<Stage>('investigate');
 const [reference,setReference]=useState(0);
 const [checkedOrder,setCheckedOrder]=useState(false);
 const steps=lesson?.sections[0]?.steps??[];
 const [order,setOrder]=useState<number[]>(()=>steps.map((_,i)=>i).reverse());
 const method=studyMethodForSubject(subject);
 const cards=referenceCards(input);
 const challenge=explorerChallenge(input);
 const choice=lesson?.tasks[0]?lessonTaskChoice(lesson,lesson.tasks[0]):input.introduction?introductoryChoice(input.introduction):null;
 const maturity=contentMaturity(input);
 const activeIndex=stages.findIndex(item=>item.id===stage);
 const correctOrder=order.every((item,index)=>item===index);
 const stageName=stages[activeIndex].label;
 function move(from:number,direction:number){
  const destination=from+direction;
  if(destination<0||destination>=order.length)return;
  setOrder(current=>{
   const next=[...current];
   [next[from],next[destination]]=[next[destination],next[from]];
   return next;
  });
  setCheckedOrder(false);
 }
 return <section className="k-study-explorer" aria-label={'Exploração de '+topic}>
  <header className="k-study-explorer-heading">
   <span className="overline"><BookOpen size={15} aria-hidden="true"/> {subject.toLocaleUpperCase('pt-BR')} · EXPLORAÇÃO ORIENTADA</span>
   <h3>{method.title}</h3>
   <p>Explore o mapa do tema, organize os conceitos e responda às alternativas disponíveis sem escrever respostas dissertativas.</p>
   <small className="k-study-maturity">{maturityLabels[maturity]}</small>
  </header>
  <TopicVisualStudio {...input}/>
  <nav className="k-study-stage-navigation" aria-label="Etapas de investigação">
   {stages.map((item,index)=><button key={item.id} type="button" aria-pressed={stage===item.id}
    onClick={()=>setStage(item.id)}>
    <span>{index+1}</span>{item.label}
   </button>)}
  </nav>
  {stage==='investigate'&&<div className="k-study-stage-body">
   <h4>Explore o material de referência</h4>
   <p className="k-study-muted">{explorerSourceLabel(input)}. Selecione os itens para destacar as partes disponíveis da referência.</p>
   <div className="k-study-reference-list" role="group" aria-label="Trechos disponíveis da referência">
    {cards.map((item,index)=><button type="button" key={index}
      aria-pressed={reference===index} onClick={()=>setReference(index)}>Trecho {index+1}</button>)}
   </div>
   <blockquote className="k-study-reference-text">{cards[reference]??topic}</blockquote>
   <p className="k-study-muted">Esses trechos são provenientes do cadastro curricular ou da aula selecionada; não são uma explicação completa criada pelo explorador.</p>
   <details className="k-study-notes-details"><summary>Consultar eixos de aprofundamento</summary>
    <div className="k-study-question-list">
     {method.promptLabels.map((label,index)=><div key={index}><span>{index+1}</span><p>{label}</p></div>)}
    </div>
   </details>
  </div>}
  {stage==='organize'&&<div className="k-study-stage-body">
   <h4>Organize e compare</h4>
   <p className="k-study-muted">No mapa visual você pode alternar o foco e reorganizar os passos do material, sem precisar escrever respostas.</p>
   {steps.length>=2&&<div className="k-study-order-activity">
    <h4>Ordene as etapas do material desenvolvido</h4>
    <p className="k-study-muted">Reorganize os passos reais da primeira seção da aula, na ordem proposta pelo material.</p>
    <ol>{order.map((stepIndex,index)=><li key={stepIndex}>
     <span>{steps[stepIndex]}</span>
     <div className="k-study-move-buttons">
      <button type="button" aria-label={'Mover passo '+(index+1)+' para cima'} disabled={index===0} onClick={()=>move(index,-1)}><ArrowUp size={16} aria-hidden="true"/></button>
      <button type="button" aria-label={'Mover passo '+(index+1)+' para baixo'} disabled={index===order.length-1} onClick={()=>move(index,1)}><ArrowDown size={16} aria-hidden="true"/></button>
     </div>
    </li>)}</ol>
    <div className="k-study-order-actions">
     <button type="button" onClick={()=>setCheckedOrder(true)}><CheckCircle2 size={16} aria-hidden="true"/> Conferir ordem</button>
     <button type="button" onClick={()=>{setOrder(steps.map((_,i)=>i).reverse());setCheckedOrder(false);}}><RefreshCw size={15} aria-hidden="true"/> Recomeçar</button>
    </div>
    {checkedOrder&&<p role="status" className="k-study-feedback">{correctOrder?'A ordem corresponde à sequência registrada na aula.':'Ainda não corresponde à ordem do material. Leia cada etapa e tente novamente.'} Não é uma avaliação de proficiência.</p>}
   </div>}
  </div>}
  {stage==='apply'&&<div className="k-study-stage-body">
   <h4>Questão de múltipla escolha</h4>
   {choice?<LessonChoiceQuestion choice={choice}/>:
    <p className="k-study-muted">Este tema tem referência cadastrada, mas ainda não possui questão objetiva publicada. Nenhuma questão dissertativa é solicitada.</p>}
   {challenge.hasVerifiedSolution&&<p className="k-study-muted">A explicação fornecida após escolher uma alternativa usa a resolução do material autoral da aula.</p>}
   {onTutor&&<button className="k-study-tutor-action" type="button" onClick={onTutor}>Pedir orientação ao Kog <ArrowRight size={16} aria-hidden="true"/></button>}
  </div>}
  <footer className="k-study-explorer-footer">
   <button type="button" disabled={activeIndex===0} onClick={()=>setStage(stages[activeIndex-1].id)}><ArrowLeft size={15} aria-hidden="true"/> Voltar</button>
   <span>{stageName} · {activeIndex+1}/3</span>
   <button type="button" disabled={activeIndex===2} onClick={()=>setStage(stages[activeIndex+1].id)}>Avançar <ArrowRight size={15} aria-hidden="true"/></button>
  </footer>
  <p className="k-study-explorer-disclaimer">Exploração sem nota e sem armazenamento no histórico. Para respostas corrigidas e mapa de domínio, use exclusivamente a prática da aba Evolução da habilidade.</p>
 </section>;
}
