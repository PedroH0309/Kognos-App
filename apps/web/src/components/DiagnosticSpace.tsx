'use client';

import {useEffect,useMemo,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,ClipboardCheck,Info,RotateCcw,Sparkles,Target} from 'lucide-react';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {type QuestionAttempt,type DemoQuestion} from '@/lib/demo-questions';
import {selectAdaptiveDiagnosticSession,evaluateExploratoryDiagnostic,type DiagnosticAnswer} from '@/lib/adaptive-review';
import {findLessonByQuestionId} from '@/lib/learning-catalog';
import {createCloudAttempts,getCloudAttempts} from '@/lib/cloud-study';

type LearningFocus={subject:string;lessonId:string};
const guestKey='kognos_demo_attempts_v1_guest';
export default function DiagnosticSpace({userId,onContextChange,onLearn,onTutor,onPlanner}:{
 userId:string|null;onContextChange:(context:KogStudyContext|null)=>void;
 onLearn:(focus:LearningFocus)=>void;onTutor:()=>void;onPlanner:()=>void;
}){
 const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
 const [sessionQuestions,setSessionQuestions]=useState<DemoQuestion[]>([]);
 const [loaded,setLoaded]=useState(false);
 const [error,setError]=useState('');
 const [screen,setScreen]=useState<'intro'|'questions'|'report'>('intro');
 const [position,setPosition]=useState(0);
 const [answers,setAnswers]=useState<Record<string,number>>({});
 const [saving,setSaving]=useState(false);
 useEffect(()=>{
  let active=true;setLoaded(false);setError('');onContextChange(null);
  async function load(){
   try{
    const rows=userId?await getCloudAttempts(userId):JSON.parse(localStorage.getItem(guestKey)||'[]') as QuestionAttempt[];
    if(active){setAttempts(Array.isArray(rows)?rows:[]);setLoaded(true);}
   }catch(e){if(active){setError(e instanceof Error?e.message:'Não foi possível carregar as tentativas.');setLoaded(false);}}
  }
  void load();return()=>{active=false;};
 },[userId,onContextChange]);
 const suggestedQuestions=useMemo(()=>selectAdaptiveDiagnosticSession(attempts),[attempts]);
 const questions=sessionQuestions.length?sessionQuestions:suggestedQuestions;
 const current=questions[position];
 const currentAnswer=current?answers[current.id]:undefined;
 const report=useMemo(()=>evaluateExploratoryDiagnostic(questions,questions.map(q=>({questionId:q.id,answerIndex:answers[q.id]} as DiagnosticAnswer))),[questions,answers]);
 async function finish(){
  if(saving||!loaded||report.answered!==questions.length)return;
  setSaving(true);setError('');
  const stamp=Date.now();
  const records:QuestionAttempt[]=questions.map((q,i)=>({questionId:q.id,subject:q.subject,
   answerIndex:answers[q.id],correct:answers[q.id]===q.correct,createdAt:new Date(stamp+i).toISOString(),mode:'practice'}));
  try{
   if(userId)await createCloudAttempts(userId,records);
   else {
    const previous=JSON.parse(localStorage.getItem(guestKey)||'[]');
    localStorage.setItem(guestKey,JSON.stringify([...(Array.isArray(previous)?previous:[]),...records]));
   }
   setAttempts(old=>[...old,...records]);
   setScreen('report');
   onContextChange({kind:'performance'});
  }catch(e){setError(e instanceof Error?e.message:'Não foi possível salvar. Tente novamente.');}
  finally{setSaving(false);}
 }
 function reset(){setScreen('intro');setSessionQuestions([]);setPosition(0);setAnswers({});setError('');onContextChange(null);}
 return <main className="app-content diagnostic-page">
  <div className="page-intro"><span className="overline">PONTO DE PARTIDA</span><h1>Descubra por onde <em>começar.</em></h1><p>Uma avaliação inicial com 20 questões autorais para identificar prioridades. Após estudar, refaça a avaliação para comparar as respostas.</p></div>
  {error&&<div className="message warning" role="alert">{error}</div>}
  {screen==='intro'&&<section className="dark-panel diag-intro">
   <div className="diag-symbol"><ClipboardCheck size={28}/></div>
   <h2>Diagnóstico exploratório</h2>
   <p>Você responderá <strong>{questions.length} questões autorais</strong>, distribuídas entre disciplinas. Assuntos com erros anteriores recebem prioridade na ordem de apresentação.</p>
   <div className="diag-info-grid"><span><Target size={17}/> {questions.length} áreas avaliadas</span><span><Info size={17}/> Resultado indicativo</span><span><CheckCircle2 size={17}/> Feedback ao final</span></div>
   <p className="privacy-note">As respostas são registradas como <strong>prática demonstrativa</strong> no seu histórico atual. O banco demonstrativo contém 20 questões autorais, algumas intermediárias. Reavaliações podem reutilizar itens e não comprovam domínio; nenhuma nota TRI é calculada.</p>
   <button type="button" className="btn primary" disabled={!loaded} onClick={()=>{setSessionQuestions(suggestedQuestions);setPosition(0);setAnswers({});setScreen('questions');onContextChange(null);}}>{loaded?'Começar diagnóstico':'Carregando histórico…'} <ArrowRight size={17}/></button>
  </section>}
  {screen==='questions'&&current&&<section className="dark-panel diag-exam">
   <div className="diag-progress-title"><span>QUESTÃO {position+1} DE {questions.length}</span><strong>{current.subject}</strong></div>
   <div className="question-progress"><span style={{width:`${(position+1)*100/questions.length}%`}}/></div>
   <span className="overline">{current.topic.toUpperCase()} · {current.difficulty}</span>
   <h2>{current.prompt}</h2>
   <div className="answer-options">{current.options.map((text,i)=><button type="button" key={i} className={`answer-choice ${currentAnswer===i?'chosen':''}`} aria-pressed={currentAnswer===i} onClick={()=>setAnswers(old=>({...old,[current.id]:i}))}><span>{String.fromCharCode(65+i)}</span>{text}</button>)}</div>
   <div className="diag-actions"><button type="button" className="btn outline" onClick={()=>position?setPosition(position-1):setScreen('intro')}><ArrowLeft size={16}/> Voltar</button>
    {position<questions.length-1?<button type="button" className="btn primary" disabled={!Number.isInteger(currentAnswer)} onClick={()=>setPosition(position+1)}>Próxima <ArrowRight size={16}/></button>:<button type="button" className="btn primary" disabled={saving||report.answered!==questions.length} onClick={()=>void finish()}>{saving?'Salvando…':'Concluir diagnóstico'} <CheckCircle2 size={16}/></button>}
   </div><p className="privacy-note">As soluções ficam ocultas durante a sondagem. Evite consultar o gabarito ou o Kog antes de concluir para obter um retrato mais útil da sua prática.</p>
  </section>}
  {screen==='report'&&<section className="dark-panel diag-report" aria-live="polite">
   <span className="overline">SONDAGEM CONCLUÍDA</span><h2>Seu ponto de partida está registrado.</h2>
   <p>Você acertou <strong>{report.correct} de {report.total} questões</strong>. Esse resultado descreve somente esta amostra; não equivale ao seu nível de domínio ou nota em exame.</p>
   <div className="diag-result-list">{report.results.map(result=>{const lesson=findLessonByQuestionId(result.questionId);const q=questions.find(x=>x.id===result.questionId)!;
    return <article key={result.questionId} className="diag-result-item"><div><span className={`diag-result-marker ${result.correct?'is-correct':'needs-review'}`}>{result.correct?<CheckCircle2 size={17}/>:<RotateCcw size={17}/>}</span><div><strong>{result.subject} · {result.topic}</strong><small>{result.correct?'Acerto nesta amostra':'Assunto indicado para revisão'}</small><p>{q.explanation}</p></div></div>{lesson&&<button type="button" className="btn outline small" onClick={()=>onLearn({subject:lesson.subject,lessonId:lesson.id})}>Estudar assunto <ArrowRight size={14}/></button>}</article>})}</div>
   <div className="diag-actions"><button type="button" className="btn outline" onClick={reset}><RotateCcw size={16}/> Refazer sondagem</button><button type="button" className="btn primary" onClick={onPlanner}><Target size={16}/> Criar plano semanal</button><button type="button" className="btn outline" onClick={onTutor}><Sparkles size={16}/> Analisar com Kog</button></div>
   <p className="privacy-note">O Kog poderá analisar suas tentativas registradas se você estiver conectado. Para acompanhar evolução com mais segurança, resolva também questões novas em dias diferentes.</p>
  </section>}
 </main>;
}