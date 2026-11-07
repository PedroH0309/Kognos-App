'use client';

import {useState} from 'react';
import {ArrowRight,CheckCircle2,Eye,Lightbulb,RotateCcw} from 'lucide-react';
import type {CourseLesson,CourseSection,CourseTask} from '@/lib/course-content';
import {levels} from '@/lib/course-content';
import type {LearningLesson} from '@/lib/learning-catalog';
import {everydayContextFor} from '@/lib/everyday-lesson-contexts';
import {studyMethodForSubject} from '@/lib/study-exploration';
import MathLabPanel from './math/MathLabPanel';
import ScienceLabPanel from './science/ScienceLabPanel';
import LanguageLabPanel from './languages/LanguageLabPanel';
import HumanitiesLabPanel from './humanities/HumanitiesLabPanel';
import {resolveMathLab} from '@/lib/math-labs';
import {resolveScienceLab} from '@/lib/science-labs';
import {resolveLanguageLab} from '@/lib/language-labs';
import {resolveHumanitiesLab} from '@/lib/humanities-labs';

/**
 * Keep the exact existing authored text; break it into smaller reading units.
 * This is layout/pacing, NOT automated pedagogical rewriting or new facts.
 */
export function lessonReadingBlocks(text:string):string[]{
 return text.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean).flatMap(paragraph=>{
  const sentences=paragraph.split(/(?<=[.!?])\s+(?=[A-ZÁÀÃÂÉÊÍÓÔÕÚÜÇ“"«])/u).map(s=>s.trim()).filter(Boolean);
  if(sentences.length<3)return [paragraph];
  const blocks:string[]=[];
  for(let index=0;index<sentences.length;index+=2)blocks.push(sentences.slice(index,index+2).join(' '));
  return blocks;
 });
}

function ReadingBlocks({value}:{value:string}){
 return <div className="k-universal-prose">{lessonReadingBlocks(value).map((text,i)=><p key={i}>{text}</p>)}</div>;
}

function ConceptMap({lesson}:{lesson:CourseLesson}){
 return <div className="k-universal-concept-flow" role="img" aria-label={'Progressão conceitual de '+lesson.topic}>
  {lesson.sections.map((section,index)=><div className="k-universal-flow-node" key={section.level}>
   <small>{String(index+1).padStart(2,'0')} · {levels[section.level]}</small>
   <strong>{section.title}</strong>
   {index<lesson.sections.length-1&&<ArrowRight size={18} aria-hidden="true"/>}
  </div>)}
 </div>;
}

function TopicLab({subject,topic}:{subject:string;topic:string}){
 const match={subject,topic};
 if(resolveMathLab(match))return <MathLabPanel {...match}/>;
 if(resolveScienceLab(match))return <ScienceLabPanel {...match}/>;
 if(resolveLanguageLab(match))return <LanguageLabPanel {...match}/>;
 if(resolveHumanitiesLab(match))return <HumanitiesLabPanel {...match}/>;
 return null;
}

function QuickCheck({task,level,onResult}:{task:CourseTask;level:string;onResult:(result:'understood'|'review')=>void}){
 const [response,setResponse]=useState('');
 const [showHint,setShowHint]=useState(false);
 const [showSolution,setShowSolution]=useState(false);
 const [selfResult,setSelfResult]=useState<'understood'|'review'|null>(null);
 function choose(result:'understood'|'review'){setSelfResult(result);onResult(result);}
 return <div className="k-universal-quick-check">
  <div className="k-universal-check-heading"><span>09 · Teste rápido · {level}</span><p>Responda antes de revelar a resolução. Esta checagem é formativa e não vale nota.</p></div>
  <p className="k-universal-prompt">{task.prompt}</p>
  <label>Seu raciocínio
   <textarea value={response} onChange={event=>setResponse(event.target.value)} rows={3} placeholder="Explique por que sua resposta faz sentido."/>
  </label>
  <div className="k-universal-inline-actions">
   <button type="button" onClick={()=>setShowHint(v=>!v)} aria-expanded={showHint}><Lightbulb size={15}/>{showHint?'Ocultar dica':'Ver dica'}</button>
   <button type="button" disabled={!response.trim()} onClick={()=>setShowSolution(v=>!v)} aria-expanded={showSolution}><Eye size={15}/>{showSolution?'Ocultar resolução':'Conferir e receber feedback'}</button>
  </div>
  {showHint&&<div className="k-universal-hint"><strong>Pista</strong><ReadingBlocks value={task.hint}/></div>}
  {showSolution&&<div className="k-universal-feedback" role="status">
   <strong>Resolução comentada</strong><ReadingBlocks value={task.solution}/>
   <p>Compare cada etapa da sua resposta com a justificativa. O Kognos não atribui acerto automático a respostas livres.</p>
   <div role="group" aria-label="Autoavaliação do teste rápido" className="k-universal-inline-actions">
    <button type="button" aria-pressed={selfResult==='understood'} onClick={()=>choose('understood')}><CheckCircle2 size={15}/>Consegui justificar</button>
    <button type="button" aria-pressed={selfResult==='review'} onClick={()=>choose('review')}><RotateCcw size={15}/>Preciso revisar</button>
   </div>
  </div>}
 </div>;
}

function LessonStage({section,index,task,onResult}:{
 section:CourseSection;index:number;task?:CourseTask;onResult:(result:'understood'|'review')=>void;
}){
 const stageLabels=['03 · Conceito e fundamentos','04 · Desenvolvimento e aplicação','04 · Aprofundamento e limites'];
 return <article className="k-universal-chapter" id={'k-universal-chapter-'+section.level}>
  <header className="k-universal-chapter-head">
   <span className="k-universal-number">{String(index+1).padStart(2,'0')}</span>
   <div><small>{stageLabels[index]??'Desenvolvimento progressivo'} · {levels[section.level]}</small><h4>{section.title}</h4></div>
  </header>
  <ReadingBlocks value={section.explanation}/>
  <div className="k-universal-applied">
   <h5>06 · Exemplo aplicado e resolvido</h5>
   <ReadingBlocks value={section.example}/>
   {section.steps.length>0&&<details className="k-universal-steps">
    <summary>Entenda o raciocínio em {section.steps.length} etapas</summary>
    <ol>{section.steps.map((step,i)=><li key={i}><ReadingBlocks value={step}/></li>)}</ol>
   </details>}
  </div>
  <div className="k-universal-comparison">
   <h5>07 · Regras, diferenças e erros frequentes</h5>
   <div className="k-universal-two-col">
    <div><strong>O que considerar</strong><p>{section.title}: observe a explicação e as condições apresentadas acima.</p></div>
    <div><strong>O que evitar</strong><ReadingBlocks value={section.pitfall}/></div>
   </div>
  </div>
  {task&&<QuickCheck key={section.level} task={task} level={levels[section.level]} onResult={onResult}/>}
 </article>;
}

export default function UniversalLessonReader({subject,topic,lesson,introduction,onTutor,onLab}:{
 subject:string;topic:string;lesson?:CourseLesson|null;introduction?:LearningLesson|null;
 onTutor?:()=>void;onLab?:()=>void;
}){
 const [results,setResults]=useState<Record<string,'understood'|'review'>>({});
 const situation=everydayContextFor(lesson);
 const method=studyMethodForSubject(subject);
 const practiceCount=lesson?.tasks.length??(introduction?1:0);
 const estimatedMinutes=lesson?Math.max(10,Math.ceil((
  lesson.sections.reduce((total,section)=>total+section.explanation.length+section.example.length+section.steps.join(' ').length,0)
 )/750)+practiceCount*3):10;
 const weak=lesson?.sections.filter(section=>results[section.level]==='review')??[];
 const assessed=Object.keys(results).length;
 const hasSpecificContext=Boolean(situation);
 const labs={subject,topic};
 const hasLab=Boolean(resolveMathLab(labs)||resolveScienceLab(labs)||resolveLanguageLab(labs)||resolveHumanitiesLab(labs));
 if(!lesson&&!introduction)return <div className="k-lesson-unavailable" role="status">
  Este conteúdo está no roteiro, mas ainda não possui material didático específico. Nenhuma aula completa será simulada automaticamente.
 </div>;
 return <div className="k-universal-lesson" aria-label={'Aula estruturada: '+topic}>
  <header className="k-universal-hero">
   <div className="k-universal-eyebrow">{subject} · Unidade de estudo</div>
   <h3>{topic}</h3>
   <div className="k-universal-metadata">
    <span>{lesson?.review==='editor'?'Aula editorial':lesson?.review==='ai_reviewed'?'Revisão automática, sem homologação':lesson?'Material introdutório · revisão docente pendente':'Introdução · não é aula completa'}</span>
    <span>Leitura e prática: ~{estimatedMinutes} min (estimativa)</span>
    <span>{lesson?lesson.sections.length+' etapas progressivas':'1 introdução'}</span>
   </div>
   <div className="k-universal-objectives"><strong>01 · Objetivo de aprendizagem</strong>
    <p>{lesson?.objective??introduction?.objective}</p>
    {!!lesson?.prerequisites.length&&<p className="k-universal-prereqs"><strong>Pré-requisitos:</strong> {lesson.prerequisites.join(' · ')}</p>}
   </div>
  </header>
  <section className="k-universal-context" aria-label="Contextualização">
   <h4>02 · Por que estudar isto?</h4>
   {situation?<><ReadingBlocks value={situation.context}/><p><strong>Desafio inicial:</strong> {situation.question}</p>
    <details><summary>Ver como a situação é resolvida</summary><ReadingBlocks value={situation.answer}/></details>
    <small>Contexto didático autoral; dados podem ser hipotéticos.</small></>:
    <><p>Comece por este exemplo do material e procure identificar o conceito que explica o resultado:</p>
     <ReadingBlocks value={lesson?.sections[0]?.example??introduction?.workedExample??''}/>
     <small>Exemplo de referência do material, não um caso cotidiano verificado.</small></>}
  </section>
  {lesson?<>
   <section className="k-universal-visual" aria-label="Mapa do percurso">
    <h4>05 · Visualize a sequência de aprendizagem</h4>
    <p>Do conceito inicial à análise de condições e limites, explore como os capítulos se conectam.</p>
    <ConceptMap lesson={lesson}/>
   </section>
   {lesson.sections.map((section,index)=>{
    const task=lesson.tasks.find(t=>t.level===section.level);
    return <LessonStage key={section.level} index={index} section={section} task={task}
     onResult={result=>setResults(values=>({...values,[section.level]:result}))}/>;
   })}
   {hasLab&&<section className="k-universal-lab" aria-label={'Simulação interativa de '+topic}>
    <h4>08 · Explore visualmente e teste hipóteses</h4>
    <p>O laboratório corresponde a um recorte deste tema. Manipule elementos e compare o resultado com a teoria estudada; não é uma avaliação de domínio.</p>
    <TopicLab subject={subject} topic={topic}/>
    {onLab&&<button type="button" onClick={onLab}>Abrir mais recursos no Laboratório <ArrowRight size={15}/></button>}
   </section>}
   <section className="k-universal-summary" aria-label="Consolidação da aula">
    <h4>10 · Consolidação e folha de revisão</h4>
    <p>Antes de avançar, recupere com suas palavras os conceitos essenciais de cada etapa:</p>
    <ol>{lesson.sections.map(section=><li key={section.level}><strong>{section.title}.</strong> {lessonReadingBlocks(section.explanation)[0]}</li>)}</ol>
    <p><strong>Como investigar este assunto:</strong> {method.title.toLocaleLowerCase('pt-BR')}. {method.questions[0]}</p>
    <div className="k-universal-diagnostic">
     <strong>Diagnóstico formativo · {assessed} de {lesson.sections.length} checagens autoavaliadas</strong>
     {weak.length?<p>Priorize a revisão de: {weak.map(s=>s.title).join('; ')}. Retorne aos exemplos e refaça as atividades.</p>:
      <p>{assessed===lesson.sections.length?'Você relatou compreensão das etapas; confirme com questões corrigidas na prática do Kognos.':'Complete as checagens rápidas acima para identificar quais etapas precisam de revisão.'}</p>}
     <p className="k-universal-caution">A autoavaliação não é nota, acerto registrado ou comprovação de domínio.</p>
    </div>
    <p>Para fixação e simulado, use as abas <strong>Atividades</strong> e <strong>Evolução</strong> e o espaço de <strong>Simulados</strong>.</p>
   </section>
  </>:introduction&&<section className="k-universal-intro-only">
   <h4>03 · Conceito central</h4><ReadingBlocks value={introduction.explanation}/>
   <h4>04 · Aplicação explicada</h4><ReadingBlocks value={introduction.workedExample}/>
   <div className="k-universal-comparison"><strong>07 · Erro frequente</strong><ReadingBlocks value={introduction.commonMistake}/></div>
   <div className="k-universal-quick-check"><h4>09 · Teste de compreensão</h4><p>{introduction.check}</p>
    <p>Responda na aba Atividades e confira a referência em Explicações. Este assunto ainda exige uma aula aprofundada.</p>
   </div>
   <p className="k-universal-caution">Material introdutório: ainda não há progressão completa, simulado próprio ou diagnóstico de domínio.</p>
  </section>}
  <footer className="k-universal-source">
   <strong>Qualidade editorial</strong>
   <p>{lesson?lesson.authorship+' · '+lesson.license:'Introdução editorial breve, sem cobertura integral do assunto.'}</p>
   {lesson?.review==='introductory'&&<p>Este material não substitui uma aula completa revisada por especialista. O formato didático foi padronizado, não reescrito automaticamente.</p>}
   {onTutor&&<button type="button" onClick={onTutor}>Pedir explicação personalizada ao Kog <ArrowRight size={15}/></button>}
  </footer>
 </div>;
}
