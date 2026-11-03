'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {ArrowRight,BookOpenText,ChartNoAxesColumn,CheckCircle2,Clock3,Compass,GraduationCap,LibraryBig,RotateCcw,Sparkles,Target} from 'lucide-react';
import {getCloudAttempts} from '@/lib/cloud-study';
import type {QuestionAttempt} from '@/lib/demo-questions';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {learningSubjects,lessonsForSubject,type LearningLesson} from '@/lib/learning-catalog';
import {evidenceForLesson} from '@/lib/learning-progress';
import {subjectDashboardTotals,subjectSnapshots,type SubjectSnapshot} from '@/lib/subject-dashboard';
import {connectedSubjectProgress,connectedLessonEvidence} from '@/lib/connected-learning';
import {useAIStudyProgress} from '@/lib/use-ai-study-progress';
import StudySyncNotice from './StudySyncNotice';

const descriptions:Record<string,string>={
 'Matemática':'Números, funções, probabilidade e resolução de problemas.',
 'Português':'Interpretação, gramática e linguagem em contexto.',
 'Física':'Movimento, forças e transformações de energia.',
 'Química':'Estrutura da matéria, ligações e soluções.',
 'Biologia':'Organização celular, hereditariedade e ecologia.',
 'História':'Sociedade, processos históricos e transformações.',
 'Geografia':'Cartografia, clima e organização do espaço.',
};
const subjectIcons=[GraduationCap,BookOpenText,Compass,Target,LibraryBig,Clock3,ChartNoAxesColumn];
const statusLabels={
 'not-started':'Não iniciada',
 'needs-review':'Há assuntos para revisar',
 'in-progress':'Em andamento',
 'sample-covered':'Amostra praticada',
} as const;
const evidenceLabels={
 'not-started':'Ainda não praticado',
 'review':'Precisa de revisão',
 'correct-sample':'Acerto registrado',
} as const;
const guestAttemptsKey='kognos_demo_attempts_v1_guest';
type LessonFocus={subject:string;lessonId:string};
type PracticeFocus={subject:string;topic:string;questionId:string};

export default function SubjectDashboard({userId,onOpenTrail,onPractice,onGenerateAI,onTutor,onContextChange}:{
 userId:string|null;
 onOpenTrail:(focus:LessonFocus)=>void;
 onPractice:(focus:PracticeFocus)=>void;onGenerateAI:(lessonId:string,generateNew?:boolean)=>void;
 onTutor:()=>void;
 onContextChange:(value:KogStudyContext|null)=>void;
}){
 const [selected,setSelected]=useState('Matemática');
 const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
 const [loaded,setLoaded]=useState(false);
 const [error,setError]=useState('');
 const {data:aiProgress,loading:aiLoading,error:aiError,refresh:refreshAI}=useAIStudyProgress(userId);
 const ready=loaded&&(!userId||!aiLoading);
 const load=useCallback(async()=>{
  setLoaded(false);setError('');
  try{
   const records=userId?await getCloudAttempts(userId):JSON.parse(localStorage.getItem(guestAttemptsKey)||'[]');
   setAttempts(Array.isArray(records)?records:[]);
   setLoaded(true);
  }catch(e){setAttempts([]);setError(e instanceof Error?e.message:'Não foi possível carregar o histórico.');setLoaded(false);}
 },[userId]);
 useEffect(()=>{void load();onContextChange(null);},[load,onContextChange]);
 const snapshots=useMemo(()=>subjectSnapshots(attempts).map(current=>{
  const merged=connectedSubjectProgress(current.subject,attempts,aiProgress);
  const aiDates=merged.steps.map(step=>step.generated?.lastAttemptAt).filter((date):date is string=>Boolean(date));
  const lastAI=aiDates.sort((a,b)=>Date.parse(b)-Date.parse(a))[0]??null;
  const last=current.lastAttemptAt&&lastAI?(Date.parse(current.lastAttemptAt)>Date.parse(lastAI)?current.lastAttemptAt:lastAI):current.lastAttemptAt||lastAI;
  const status:SubjectSnapshot['status']=merged.practiced===0?'not-started':merged.review>0?'needs-review':merged.practiced===merged.total?'sample-covered':'in-progress';
  return {...current,practiced:merged.practiced,coverage:merged.total?Math.round(100*merged.practiced/merged.total):0,
   needsReview:merged.review,notPracticed:merged.total-merged.practiced,recommended:merged.next,
   lastAttemptAt:last,attempts:current.attempts+merged.aiAttempts,status,
   aiAttempts:merged.aiAttempts,aiCorrect:merged.aiCorrect,aiQuestions:merged.aiQuestions};
 }),[attempts,aiProgress]);
 const totals=useMemo(()=>subjectDashboardTotals(snapshots),[snapshots]);
 const snapshot=snapshots.find(s=>s.subject===selected)??snapshots[0];
 const topics=lessonsForSubject(snapshot?.subject||selected);
 const next=snapshot?.recommended??topics[0]??null;
 function openTrail(lesson:LearningLesson){onOpenTrail({subject:lesson.subject,lessonId:lesson.id});}
 function practice(lesson:LearningLesson){if(userId)onGenerateAI(lesson.id,true);else onPractice({subject:lesson.subject,topic:lesson.topic,questionId:lesson.questionId});}
 function askKog(){if(next)onContextChange({kind:'lesson',lessonId:next.id});onTutor();}
 return <main className="app-content subject-dashboard-page">
  <div className="page-intro"><span className="overline">PAINEL DE MATÉRIAS</span><h1>Minhas <em>disciplinas.</em></h1><p>Veja o que já praticou em cada matéria, identifique pontos de revisão e escolha sua próxima atividade. Para seguir a sequência das aulas, abra as Trilhas de aprendizagem.</p></div>
  <div className="message neutral" role="note">Cobertura de {totals.total} miniaulas introdutórias, considerando tentativas demonstrativas e questões de IA vinculadas (quando disponíveis). Não é nota nem prova de domínio. {userId?'Histórico sincronizado com sua conta.':'No modo visitante, o histórico fica neste navegador.'}</div>
  {error&&<div className="message warning" role="alert"><span>{error} Verifique o acesso ao seu histórico.</span> <button type="button" className="btn outline small" onClick={()=>void load()}>Tentar novamente</button></div>}
  {aiError&&userId&&<StudySyncNotice error={aiError} onRetry={()=>void refreshAI()}/>}
  <section className="subject-kpi-grid" aria-label="Visão geral das disciplinas">
   <article><LibraryBig size={20}/><span>Matérias disponíveis</span><strong>{totals.subjects}</strong><small>Catálogo introdutório</small></article>
   <article><BookOpenText size={20}/><span>Matérias praticadas</span><strong>{ready?totals.active:'—'}</strong><small>Com pelo menos uma tentativa</small></article>
   <article><CheckCircle2 size={20}/><span>Assuntos praticados</span><strong>{ready?`${totals.practiced}/${totals.total}`:'—'}</strong><small>Miniaulas com tentativas</small></article>
   <article><RotateCcw size={20}/><span>Revisões vencidas</span><strong>{ready?totals.due:'—'}</strong><small>Agenda dos exercícios demonstrativos</small></article>
  </section>
  <div className="subject-workspace-grid">
   <section className="subject-library-panel" aria-label="Selecionar disciplina">
    <div className="subject-section-heading"><div><span className="overline">SUAS MATÉRIAS</span><h2>Escolha uma disciplina</h2></div><small>{learningSubjects.length} disponíveis</small></div>
    <div className="subject-card-list">{snapshots.map((entry,index)=>{
     const Icon=subjectIcons[index]||BookOpenText;
     return <button type="button" className={`subject-select-card ${entry.subject===selected?'is-selected':''}`} onClick={()=>{setSelected(entry.subject);onContextChange(null);}} aria-pressed={entry.subject===selected} key={entry.subject}>
      <span className="subject-select-icon"><Icon size={21} aria-hidden="true"/></span>
      <span className="subject-select-body"><strong>{entry.subject}</strong><small>{ready?statusLabels[entry.status]:'Consultando histórico…'}</small><span className="subject-mini-progress" aria-hidden="true"><span style={{width:`${ready?entry.coverage:0}%`}}/></span></span>
      <span className="subject-select-count">{ready?`${entry.practiced}/${entry.total}`:'—'}</span>
     </button>;
    })}</div>
   </section>
   <section className="subject-detail-panel dark-panel" aria-label={`Resumo de ${snapshot?.subject||selected}`}>
    <div className="subject-detail-head"><div><span className="overline">RESUMO DA DISCIPLINA</span><h2>{snapshot?.subject||selected}</h2><p>{descriptions[snapshot?.subject||selected]}</p></div><button type="button" className="btn outline small" onClick={()=>void load()} disabled={!loaded} title="Atualizar histórico">Atualizar</button></div>
    <div className="subject-detail-progress"><div><strong>Cobertura de prática</strong><span>{ready?`${snapshot.coverage}%`:'—'}</span></div><div className="learning-progress-track"><span style={{width:`${ready?snapshot.coverage:0}%`}}/></div><small>{ready?`${snapshot.practiced} de ${snapshot.total} tópicos praticados (demo ou IA)`:'Consultando histórico de exercícios…'}</small></div>
    <div className="subject-detail-metrics"><div><strong>{ready?snapshot.correctSamples:'—'}</strong><span>Acertos na amostra demo</span></div><div><strong>{ready?snapshot.needsReview:'—'}</strong><span>Última resposta incorreta</span></div><div><strong>{ready?snapshot.notPracticed:'—'}</strong><span>Ainda não praticados</span></div></div>
    {userId&&<div className="subject-ai-data"><Sparkles size={18}/><div><strong>{ready?`${snapshot.aiCorrect} de ${snapshot.aiAttempts} respostas IA corretas`:'Consultando respostas IA…'}</strong><small>{ready?`${snapshot.aiQuestions} questões diferentes vinculadas a ${snapshot.subject}. Não é uma medida de domínio.`:'Aguarde a sincronização do histórico privado.'}</small></div></div>}
    <div className="subject-next-action"><div><span className="overline"><Target size={15}/> PRÓXIMO PASSO SUGERIDO</span><h3>{next?.topic??'Selecione uma matéria'}</h3><p>{next?.objective??'Escolha uma aula para começar.'}</p><small>{ready&&snapshot.lastAttemptAt?`Última prática: ${new Date(snapshot.lastAttemptAt).toLocaleDateString('pt-BR')}`:'Você ainda não registrou prática nesta matéria.'}</small></div>
     <div className="subject-next-buttons"><button type="button" className="btn primary" disabled={!ready||!next} onClick={()=>next&&openTrail(next)}>Abrir trilha <ArrowRight size={15}/></button><button type="button" className="btn outline" disabled={!ready||!next} onClick={()=>next&&practice(next)}>{userId?'Praticar com 10 questões graduais':'Praticar demonstração'}</button><button type="button" className="btn outline" disabled={!next||!userId} onClick={()=>next&&onGenerateAI(next.id)}><Sparkles size={15}/> Questões IA</button><button type="button" className="btn outline" disabled={!next} onClick={askKog}><Sparkles size={15}/> Perguntar ao Kog</button></div>
    </div>
    <div className="subject-topics-heading"><h3>Conteúdos desta matéria</h3><span>{topics.length} miniaulas</span></div>
    <div className="subject-topic-list">{topics.map((lesson,index)=>{
      const state=loaded?evidenceForLesson(lesson,attempts):'not-started';const linked=connectedLessonEvidence(lesson,attempts,aiProgress);const ai=linked.generated;
      return <article className="subject-topic-item" key={lesson.id}>
       <span className="subject-topic-index">{String(index+1).padStart(2,'0')}</span>
       <span className="subject-topic-copy"><strong>{lesson.topic}</strong><small>{ready?(state==='not-started'&&linked.hasAI?'Praticado com IA':evidenceLabels[state]):'Carregando resultado…'} · {lesson.minutes} min estimados{ai?` · IA: ${ai.correct}/${ai.attempts} acertos`:''}</small></span>
       <button type="button" className="subject-topic-open" onClick={()=>openTrail(lesson)} aria-label={`Abrir aula de ${lesson.topic}`} title={`Estudar ${lesson.topic}`}><ArrowRight size={17}/></button>
      </article>;
    })}</div>
    <p className="privacy-note">Para organizar a sequência e os pré-requisitos, use Trilhas de aprendizagem. Questões demonstrativas são corrigidas no navegador; as geradas por IA são corrigidas no servidor. Os indicadores não constituem avaliação oficial.</p>
   </section>
  </div>
 </main>;
}