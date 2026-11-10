'use client';
import {useEffect,useRef,useState} from 'react';
import {BookOpenText,CheckSquare,Lightbulb,ChevronDown,ArrowRight} from 'lucide-react';
import {levels,type CourseLesson} from '@/lib/course-content';
import type {LearningLesson} from '@/lib/learning-catalog';
import {studyMethodForSubject} from '@/lib/study-exploration';
import {everydayContextFor} from '@/lib/everyday-lesson-contexts';
import {courseId} from '@/lib/curriculum-id';
import UniversalLessonReader from './UniversalLessonReader';
import LessonChoiceQuestion from './LessonChoiceQuestion';
import {lessonTaskChoice,introductoryChoice} from '@/lib/lesson-multiple-choice';

export type LessonPane='content'|'activities'|'explanations';
export const lessonPanes:{id:LessonPane;label:string;description:string}[]=[
 {id:'content',label:'Aula em texto',description:'Teoria organizada para leitura'},
 {id:'activities',label:'Atividades',description:'Aplicação e exercícios'},
 {id:'explanations',label:'Explicações',description:'Exemplos e resoluções'}
];
const sectionNumber=(index:number)=>String(index+1).padStart(2,'0');
function TextBlocks({value}:{value:string}){
 return <div className="k-lesson-text-block">{value.split(/\n\s*\n/).filter(Boolean).map((text,i)=><p key={i}>{text.trim()}</p>)}</div>;
}
/** Reading-first layout for individually selected curricular lessons.
 * Does not fabricate missing educational content or auto-grade free text.
 */
export default function TopicLessonSections({view,subject,topic,lesson,introduction,onTutor,onActivityProgress,onRelatedTopic,onReadingEnd}:{
 view:LessonPane;subject:string;topic:string;
 lesson?:CourseLesson|null;introduction?:LearningLesson|null;onTutor?:()=>void;
 onRelatedTopic?:(topicId:string)=>void;
 onActivityProgress?:(allAnswered:boolean)=>void;
 onReadingEnd?:()=>void;
}){
 const [choiceAnswers,setChoiceAnswers]=useState<Record<string,boolean>>({});
 const readingEndRef=useRef<HTMLDivElement|null>(null);
 const readingNotifiedRef=useRef(false);
 useEffect(()=>{
  if(view!=='content'||!onReadingEnd)return;
  const target=readingEndRef.current;
  if(!target)return;
  if(typeof IntersectionObserver==='undefined')return;
  const observer=new IntersectionObserver(entries=>{
   if(entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=0.65)&&!readingNotifiedRef.current){
    readingNotifiedRef.current=true;
    onReadingEnd();
   }
  },{threshold:[0.65]});
  observer.observe(target);
  return()=>observer.disconnect();
 },[view,onReadingEnd]);
 const [steps,setSteps]=useState<Record<string,boolean>>({});
 const [solutions,setSolutions]=useState<Record<string,boolean>>({});
 const method=studyMethodForSubject(subject);
 const authored=Boolean(lesson||introduction);
 const individuallyAuthored=Boolean(lesson?.authorship.includes('aula autoral'));
 const situation=everydayContextFor(lesson);
 const introChoice=introduction?introductoryChoice(introduction):null;

 const status=lesson?(lesson.supportTopic?'APOIO AUTORAL PARCIAL · OUTROS PONTOS PENDENTES':
  lesson.authorship.includes('módulo introdutório estruturado')?'ROTEIRO INTRODUTÓRIO · AULA COMPLETA PENDENTE':
  lesson.review==='introductory'?(individuallyAuthored?'AULA AUTORAL · REVISÃO DOCENTE PENDENTE':'MATERIAL DE ESTUDO · REVISÃO DOCENTE PENDENTE'):
  'AULA DESENVOLVIDA'):introduction?'INTRODUÇÃO AUTORAL':'TEMA DO ROTEIRO · SEM AULA EDITORIAL';
 const idFor=(a:string,b:number)=>a+'-'+b;
 const exerciseIds=lesson?lesson.sections.flatMap(section=>lesson.tasks.filter(t=>
  t.level===section.level&&lessonTaskChoice(lesson,t).source==='editorial')
  .map((_,i)=>idFor(section.level,i))):introChoice?['intro']:[];
 const answered=exerciseIds.filter(id=>Object.hasOwn(choiceAnswers,id)).length;
 function updateChoice(id:string,correct:boolean){
  const next={...choiceAnswers,[id]:correct};setChoiceAnswers(next);
  // Progress marks attempted alternatives only; answer correctness is not stored as mastery.
  onActivityProgress?.(exerciseIds.length>0&&exerciseIds.every(key=>Object.hasOwn(next,key)));
 }
 return <section className="k-lesson-reading-room" aria-label={lessonPanes.find(p=>p.id===view)?.label+' de '+topic}>
  <header className="k-lesson-reading-intro">
   <span className="overline">{status}</span>
   <h3>{view==='content'?'Estude o conteúdo':view==='activities'?'Coloque em prática':'Entenda o raciocínio'}</h3>
   <p>{view==='content'?'Siga as etapas de objetivos, contexto, conceitos, exemplos, comparações, prática formativa e consolidação.':
    view==='activities'?'Selecione uma das quatro alternativas e receba a explicação imediatamente. Não há questões dissertativas.':
    'Confira exemplos, resoluções passo a passo e os erros mais comuns do conteúdo.'}</p>
  </header>
  {!authored&&<div className="k-lesson-unavailable" role="status">
   <BookOpenText size={20} aria-hidden="true"/>
   <div><strong>Este tema ainda não possui uma aula escrita e revisada no catálogo.</strong>
    <p>O título do roteiro não é uma aula completa. Enquanto o conteúdo é desenvolvido, você pode consultar o edital, estudar com o Kog ou acessar os simuladores no Kognos Lab. Não apresentamos textos gerados automaticamente como se fossem uma aula validada.</p>
   </div>
  </div>}
  {view==='content'&&<UniversalLessonReader subject={subject} topic={topic} lesson={lesson} introduction={introduction}/>}
  {view==='activities'&&<>
   {exerciseIds.length===0&&<p className="k-lesson-unavailable" role="status">Ainda não há questões objetivas específicas e verificadas para esta aula. Os enunciados abertos e distratores de outras disciplinas não são exibidos como alternativas.</p>}
   {exerciseIds.length>0&&<p className="k-lesson-answer-count" role="status">Questões de alternativas respondidas: {answered} de {exerciseIds.length}. Este treino é local; as respostas não são registradas como nota ou domínio.</p>}
   {lesson&&lesson.sections.map((section,i)=>{
    const tasks=lesson.tasks.filter(task=>task.level===section.level&&lessonTaskChoice(lesson,task).source==='editorial');
    return <article className="k-lesson-chapter" key={section.level}>
     <div className="k-lesson-chapter-heading"><span>{sectionNumber(i)}</span><div><small>{levels[section.level]}</small><h4>Atividades de {section.title}</h4></div></div>
     {tasks.map((task,j)=>{
      const id=idFor(section.level,j);
      return <div className="k-lesson-exercise" key={id}>
       <span className="k-lesson-exercise-number"><CheckSquare size={16}/> EXERCÍCIO {j+1}</span>
       <LessonChoiceQuestion choice={lessonTaskChoice(lesson,task)} onAnswer={correct=>updateChoice(id,correct)}/>
      </div>;
     })}
    </article>;
   })}
   {!lesson&&introduction&&<article className="k-lesson-chapter">
    <h4>Teste de alternativas sobre o conceito</h4>
    {introChoice?<LessonChoiceQuestion choice={introChoice} onAnswer={correct=>updateChoice('intro',correct)}/>:
     <p>Este conteúdo ainda não possui uma questão objetiva disponível. Nenhuma questão dissertativa será solicitada.</p>}
   </article>}
   {!authored&&<div className="k-lesson-study-method"><h4>Atividades em elaboração</h4>
    <p>Este assunto ainda não possui questões de alternativas verificadas. Consulte os materiais e os simulados disponíveis.</p></div>}
  </>}
  {view==='explanations'&&<>
   {situation&&<article className="k-lesson-problem-answer">
    <span className="k-lesson-everyday-label">RETOMANDO O DESAFIO INICIAL</span>
    <h4>Como resolver a situação?</h4>
    <p>{situation.answer}</p>
   </article>}
   {lesson&&lesson.sections.map((section,i)=>{
    const tasks=lesson.tasks.filter(task=>task.level===section.level);
    const open=Boolean(steps[section.level]);
    return <article className="k-lesson-chapter" key={section.level}>
     <div className="k-lesson-chapter-heading"><span>{sectionNumber(i)}</span><div><small>{levels[section.level]}</small><h4>{section.title}</h4></div></div>
     <button type="button" className="k-lesson-expand" aria-expanded={open}
      onClick={()=>setSteps(prev=>({...prev,[section.level]:!open}))}>Passo a passo do exemplo <ChevronDown size={17}/></button>
     {open&&<ol className="k-lesson-steps">{section.steps.map((step,j)=><li key={j}>{step}</li>)}</ol>}
     <div className="k-lesson-worked"><strong>Exemplo resolvido</strong><TextBlocks value={section.example}/></div>
     <div className="k-lesson-mistake"><strong>Erro frequente</strong><p>{section.pitfall}</p></div>
     {tasks.map((task,j)=>{
      const id=idFor(section.level,j);
      return <div key={id} className="k-lesson-solution">
       <button type="button" className="k-lesson-expand" aria-expanded={Boolean(solutions[id])}
        onClick={()=>setSolutions(prev=>({...prev,[id]:!prev[id]}))}>Ver resolução da atividade {j+1} <ChevronDown size={17}/></button>
       {solutions[id]&&<TextBlocks value={task.solution}/>}
      </div>;
     })}
    </article>;
   })}
   {!lesson&&introduction&&<article className="k-lesson-chapter">
    <h4>Exemplo contextualizado</h4><div className="k-lesson-worked"><TextBlocks value={introduction.workedExample}/></div>
    <div className="k-lesson-mistake"><strong>Atenção ao erro comum</strong><p>{introduction.commonMistake}</p></div>
   </article>}
   {!authored&&<div className="k-lesson-study-method"><h4>Explicação ainda não publicada</h4><p>Não existe resolução editorial específica para este assunto. Consulte as referências da disciplina ou peça uma explicação individual ao Kog.</p></div>}
  </>}
  <footer className="k-lesson-reading-footer">
   <span><Lightbulb size={16}/> Atividades desta página são treino local; o histórico de domínio é calculado na Evolução da habilidade.</span>
   {onTutor&&<button type="button" onClick={onTutor}>Explicar com o Kog <ArrowRight size={16}/></button>}
  </footer>
  {view==='content'&&<div ref={readingEndRef} className="k-lesson-reading-end" aria-hidden="true"/>}
 </section>;
}
