'use client';

import {useEffect,useMemo,useState} from 'react';
import {ArrowRight,BookOpenText,CalendarClock,CheckCircle2,Clock3,RotateCcw,Sparkles} from 'lucide-react';
import type {KogStudyContext} from '@/lib/kog-study-context';
import type {QuestionAttempt} from '@/lib/demo-questions';
import {getCloudAttempts} from '@/lib/cloud-study';
import {reviewItems,reviewCounts,type ReviewStatus} from '@/lib/adaptive-review';

type PracticeFocus={subject:string;topic:string;questionId:string};
type LessonFocus={subject:string;lessonId:string};
const tabs:[ReviewStatus|'all',string][]=[['due','Para revisar'],['scheduled','Programadas'],['not-started','Não iniciadas'],['all','Todas']];
export default function ReviewSpace({userId,onContextChange,onTutor,onPractice,onLearn}:{
 userId:string|null;onContextChange:(context:KogStudyContext|null)=>void;onTutor:()=>void;
 onPractice:(focus:PracticeFocus)=>void;onLearn:(focus:LessonFocus)=>void;
}){
 const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
 const [loaded,setLoaded]=useState(false);
 const [error,setError]=useState('');
 const [tab,setTab]=useState<ReviewStatus|'all'>('due');
 const items=useMemo(()=>reviewItems(attempts),[attempts]);
 const counts=reviewCounts(items);
 const visible=items.filter(item=>tab==='all'||item.status===tab);
 useEffect(()=>{
  let active=true;onContextChange({kind:'performance'});setLoaded(false);setError('');
  (async()=>{
   try{const data=userId?await getCloudAttempts(userId):JSON.parse(localStorage.getItem('kognos_demo_attempts_v1_guest')||'[]');
    if(active){setAttempts(Array.isArray(data)?data:[]);setLoaded(true);}
   }catch(e){if(active){setError(e instanceof Error?e.message:'Não foi possível carregar o histórico.');setLoaded(true);}}
  })();return()=>{active=false;};
 },[userId,onContextChange]);
 return <main className="app-content adaptive-reviews-page">
  <div className="page-intro"><span className="overline">REVISÃO INTELIGENTE</span><h1>Aprender também é <em>revisar.</em></h1><p>O Kognos usa suas tentativas demonstrativas para sugerir quando retomar um assunto, com prioridade para erros e revisões vencidas.</p></div>
  <div className="message neutral" role="note">Este agendamento é experimental. Cada tópico possui apenas uma questão autoral; responder a mesma questão novamente não comprova retenção ou domínio permanente.</div>
  {error&&<div className="message warning" role="alert">{error}</div>}
  <div className="review-summary-grid" aria-label="Resumo de revisões">
   <article><RotateCcw size={21}/><strong>{loaded?counts.due:'—'}</strong><span>Revisões pendentes</span></article>
   <article><CalendarClock size={21}/><strong>{loaded?counts.scheduled:'—'}</strong><span>Programadas</span></article>
   <article><BookOpenText size={21}/><strong>{loaded?counts.notStarted:'—'}</strong><span>Assuntos não iniciados</span></article>
  </div>
  <section className="dark-panel review-list-panel">
   <div className="review-panel-header"><div><span className="overline">SEU PLANO DE RETOMADA</span><h2>Assuntos e próximas ações</h2></div><button type="button" className="btn outline" onClick={onTutor}><Sparkles size={16}/> Pedir orientação ao Kog</button></div>
   <div className="review-tabs" role="group" aria-label="Filtrar revisões">{tabs.map(([key,label])=><button key={key} type="button" className={tab===key?'is-active':''} aria-pressed={tab===key} onClick={()=>setTab(key)}>{label}</button>)}</div>
   {!loaded?<p role="status" className="muted">Consultando suas tentativas…</p>:visible.length===0?<div className="review-empty"><CheckCircle2 size={25}/><h3>{tab==='due'?'Nenhuma revisão vencida por enquanto.':'Nenhum conteúdo nesta categoria.'}</h3><p>Continue praticando as trilhas e revisite esta área depois.</p></div>:<div className="review-item-list">{visible.map(item=><article className="review-item" key={item.lesson.id}>
    <div className="review-item-body"><div className="review-item-title"><span className={`review-pill ${item.status}`}>{item.status==='due'?'Revisar agora':item.status==='scheduled'?'Agendada':'Ainda não iniciado'}</span><span className="review-discipline">{item.lesson.subject}</span></div>
     <h3>{item.lesson.topic}</h3><p>{item.lesson.objective}</p><div className="review-meta"><span><Clock3 size={13}/> {item.lesson.minutes} min de estudo</span>{item.dueDate&&<span><CalendarClock size={13}/> {new Date(item.dueDate+'T12:00:00').toLocaleDateString('pt-BR')}</span>}<span>{item.attempts} {item.attempts===1?'tentativa':'tentativas'}</span></div>
    </div><div className="review-item-actions"><button className="btn primary" type="button" onClick={()=>onPractice({subject:item.lesson.subject,topic:item.lesson.topic,questionId:item.question.id})}>Praticar <ArrowRight size={15}/></button><button className="btn outline" type="button" onClick={()=>onLearn({subject:item.lesson.subject,lessonId:item.lesson.id})}>Ver aula</button></div>
   </article>)}</div>}
  </section>
  <p className="privacy-note">Critério inicial: erro → revisão imediata; acertos em dias diferentes → espaçamento de 1, 3, 7 e 14 dias. Tentativas repetidas no mesmo dia não aumentam o intervalo. Conteúdo de demonstração, sem medição validada de memória.</p>
 </main>;
}