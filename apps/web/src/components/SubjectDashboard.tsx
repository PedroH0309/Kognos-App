'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {ArrowRight,BookOpenText,ChartNoAxesColumn,CheckCircle2,Clock3,Compass,GraduationCap,LibraryBig,RotateCcw,Sparkles,Target} from 'lucide-react';
import {getCloudAttempts} from '@/lib/cloud-study';
import type {QuestionAttempt} from '@/lib/demo-questions';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {learningSubjects,lessonsForSubject,type LearningLesson} from '@/lib/learning-catalog';
import {evidenceForLesson} from '@/lib/learning-progress';
import {subjectDashboardTotals,subjectSnapshots} from '@/lib/subject-dashboard';

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

export default function SubjectDashboard({userId,onOpenTrail,onPractice,onTutor,onContextChange}:{
 userId:string|null;
 onOpenTrail:(focus:LessonFocus)=>void;
 onPractice:(focus:PracticeFocus)=>void;
 onTutor:()=>void;
 onContextChange:(value:KogStudyContext|null)=>void;
}){
 const [selected,setSelected]=useState('Matemática');
 const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
 const [loaded,setLoaded]=useState(false);
 const [error,setError]=useState('');
 const load=useCallback(async()=>{
  setLoaded(false);setError('');
  try{
   const records=userId?await getCloudAttempts(userId):JSON.parse(localStorage.getItem(guestAttemptsKey)||'[]');
   setAttempts(Array.isArray(records)?records:[]);
   setLoaded(true);
  }catch(e){setAttempts([]);setError(e instanceof Error?e.message:'Não foi possível carregar o histórico.');setLoaded(false);}
 },[userId]);
 useEffect(()=>{void load();onContextChange(null);},[load,onContextChange]);
 const snapshots=useMemo(()=>subjectSnapshots(attempts),[attempts]);
 const totals=useMemo(()=>subjectDashboardTotals(snapshots),[snapshots]);
 const snapshot=snapshots.find(s=>s.subject===selected)??snapshots[0];
 const topics=lessonsForSubject(snapshot?.subject||selected);
 const next=snapshot?.recommended??topics[0]??null;
 function openTrail(lesson:LearningLesson){onOpenTrail({subject:lesson.subject,lessonId:lesson.id});}
 function practice(lesson:LearningLesson){onPractice({subject:lesson.subject,topic:lesson.topic,questionId:lesson.questionId});}
 function askKog(){if(next)onContextChange({kind:'lesson',lessonId:next.id});onTutor();}
 return <main className="app-content subject-dashboard-page">
  <div className="page-intro"><span className="overline">PAINEL DE MATÉRIAS</span><h1>Minhas <em>disciplinas.</em></h1><p>Veja o que já praticou em cada matéria, identifique pontos de revisão e escolha sua próxima atividade. Para seguir a sequência das aulas, abra as Trilhas de aprendizagem.</p></div>
  <div className="message neutral" role="note">Indicadores referentes às {totals.total} questões introdutórias autorais do Kognos. Eles não são uma nota nem demonstram domínio da disciplina. {userId?'Histórico sincronizado com sua conta.':'No modo visitante, o histórico fica neste navegador.'}</div>
  {error&&<div className="message warning" role="alert"><span>{error} Verifique o acesso ao seu histórico.</span> <button type="button" className="btn outline small" onClick={()=>void load()}>Tentar novamente</button></div>}
  <section className="subject-kpi-grid" aria-label="Visão geral das disciplinas">
   <article><LibraryBig size={20}/><span>Matérias disponíveis</span><strong>{totals.subjects}</strong><small>Catálogo introdutório</small></article>
   <article><BookOpenText size={20}/><span>Matérias praticadas</span><strong>{loaded?totals.active:'—'}</strong><small>Com pelo menos uma tentativa</small></article>
   <article><CheckCircle2 size={20}/><span>Assuntos praticados</span><strong>{loaded?`${totals.practiced}/${totals.total}`:'—'}</strong><small>Itens distintos respondidos</small></article>
   <article><RotateCcw size={20}/><span>Revisões vencidas</span><strong>{loaded?totals.due:'—'}</strong><small>Estimativa demonstrativa</small></article>
  </section>
  <div className="subject-workspace-grid">
   <section className="subject-library-panel" aria-label="Selecionar disciplina">
    <div className="subject-section-heading"><div><span className="overline">SUAS MATÉRIAS</span><h2>Escolha uma disciplina</h2></div><small>{learningSubjects.length} disponíveis</small></div>
    <div className="subject-card-list">{snapshots.map((entry,index)=>{
     const Icon=subjectIcons[index]||BookOpenText;
     return <button type="button" className={`subject-select-card ${entry.subject===selected?'is-selected':''}`} onClick={()=>{setSelected(entry.subject);onContextChange(null);}} aria-pressed={entry.subject===selected} key={entry.subject}>
      <span className="subject-select-icon"><Icon size={21} aria-hidden="true"/></span>
      <span className="subject-select-body"><strong>{entry.subject}</strong><small>{loaded?statusLabels[entry.status]:'Consultando histórico…'}</small><span className="subject-mini-progress" aria-hidden="true"><span style={{width:`${loaded?entry.coverage:0}%`}}/></span></span>
      <span className="subject-select-count">{loaded?`${entry.practiced}/${entry.total}`:'—'}</span>
     </button>;
    })}</div>
   </section>
   <section className="subject-detail-panel dark-panel" aria-label={`Resumo de ${snapshot?.subject||selected}`}>
    <div className="subject-detail-head"><div><span className="overline">RESUMO DA DISCIPLINA</span><h2>{snapshot?.subject||selected}</h2><p>{descriptions[snapshot?.subject||selected]}</p></div><button type="button" className="btn outline small" onClick={()=>void load()} disabled={!loaded} title="Atualizar histórico">Atualizar</button></div>
    <div className="subject-detail-progress"><div><strong>Cobertura da amostra</strong><span>{loaded?`${snapshot.coverage}%`:'—'}</span></div><div className="learning-progress-track"><span style={{width:`${loaded?snapshot.coverage:0}%`}}/></div><small>{loaded?`${snapshot.practiced} de ${snapshot.total} tópicos com tentativa registrada`:'Consultando histórico de exercícios…'}</small></div>
    <div className="subject-detail-metrics"><div><strong>{loaded?snapshot.correctSamples:'—'}</strong><span>Com acerto registrado</span></div><div><strong>{loaded?snapshot.needsReview:'—'}</strong><span>Última resposta incorreta</span></div><div><strong>{loaded?snapshot.notPracticed:'—'}</strong><span>Ainda não praticados</span></div></div>
    <div className="subject-next-action"><div><span className="overline"><Target size={15}/> PRÓXIMO PASSO SUGERIDO</span><h3>{next?.topic??'Selecione uma matéria'}</h3><p>{next?.objective??'Escolha uma aula para começar.'}</p><small>{loaded&&snapshot.lastAttemptAt?`Última prática: ${new Date(snapshot.lastAttemptAt).toLocaleDateString('pt-BR')}`:'Você ainda não registrou prática nesta matéria.'}</small></div>
     <div className="subject-next-buttons"><button type="button" className="btn primary" disabled={!loaded||!next} onClick={()=>next&&openTrail(next)}>Abrir trilha <ArrowRight size={15}/></button><button type="button" className="btn outline" disabled={!loaded||!next} onClick={()=>next&&practice(next)}>Praticar assunto</button><button type="button" className="btn outline" disabled={!next} onClick={askKog}><Sparkles size={15}/> Perguntar ao Kog</button></div>
    </div>
    <div className="subject-topics-heading"><h3>Conteúdos desta matéria</h3><span>{topics.length} miniaulas</span></div>
    <div className="subject-topic-list">{topics.map((lesson,index)=>{
      const state=loaded?evidenceForLesson(lesson,attempts):'not-started';
      return <article className="subject-topic-item" key={lesson.id}>
       <span className="subject-topic-index">{String(index+1).padStart(2,'0')}</span>
       <span className="subject-topic-copy"><strong>{lesson.topic}</strong><small>{loaded?evidenceLabels[state]:'Carregando resultado…'} · {lesson.minutes} min estimados</small></span>
       <button type="button" className="subject-topic-open" onClick={()=>openTrail(lesson)} aria-label={`Abrir aula de ${lesson.topic}`} title={`Estudar ${lesson.topic}`}><ArrowRight size={17}/></button>
      </article>;
    })}</div>
    <p className="privacy-note">Para organizar a sequência e os pré-requisitos, use Trilhas de aprendizagem. A correção das questões demonstrativas ocorre no navegador e não equivale a uma avaliação oficial.</p>
   </section>
  </div>
 </main>;
}