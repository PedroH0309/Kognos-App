'use client';
import {type ProvaoGrade} from '@/lib/provao-paulista';

import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,BookOpenText,CheckCircle2,ChevronRight,Clock3,Compass,Info,ListChecks,RotateCcw,Search,Sparkles,Target} from 'lucide-react';
import type {KogStudyContext} from '@/lib/kog-study-context';
import type {QuestionAttempt} from '@/lib/demo-questions';
import {getCloudAttempts} from '@/lib/cloud-study';
import {learningSubjects,lessonsForSubject,findLearningLesson,type LearningLesson} from '@/lib/learning-catalog';
import {evidenceForLesson} from '@/lib/learning-progress';
import {adjacentLesson,trailSnapshot} from '@/lib/learning-roadmap';
import {connectedCatalogProgress,connectedSubjectProgress,connectedLessonEvidence} from '@/lib/connected-learning';
import {useAIStudyProgress} from '@/lib/use-ai-study-progress';
import {linkedExamTopic} from '@/lib/lesson-ai-links';
import {examBlueprints,type ExamId} from '@/lib/exam-blueprints';
import {officialSyllabusSources} from '@/lib/exam-syllabus';
import CurriculumRoom from './CurriculumRoom';
import {learningCatalogForExam} from '@/lib/lesson-ai-links';
import StudySyncNotice from './StudySyncNotice';
import SkillEvolutionPanel from './SkillEvolutionPanel';
import InteractiveIntroLesson from './InteractiveIntroLesson';
import StudyExplorationPanel from './StudyExplorationPanel';
import MathLabPanel from './math/MathLabPanel';
import ScienceLabPanel from './science/ScienceLabPanel';
import LanguageLabPanel from './languages/LanguageLabPanel';
import HumanitiesLabPanel from './humanities/HumanitiesLabPanel';
import {resolveHumanitiesLab} from '@/lib/humanities-labs';
import {resolveLanguageLab} from '@/lib/language-labs';
import {resolveScienceLab} from '@/lib/science-labs';
import {resolveMathLab} from '@/lib/math-labs';
import {prioritySkillLessonId} from '@/lib/skill-mastery-evidence';

type Mode='learn'|'trails';
type Focus={subject:string;topic:string;questionId:string};
const evidenceLabels={'not-started':'Não praticada',review:'Revisar questão','correct-sample':'Acerto registrado'} as const;
const guestKey='kognos_demo_attempts_v1_guest';

export default function LearningTrails({mode,userId,onContextChange,onTutor,onPractice,onGenerateAI,onSeeTrails,focus,active=true,preferredExam=null}:{
 mode:Mode;userId:string|null;preferredExam?:ExamId|null;onContextChange:(context:KogStudyContext|null)=>void;
 onTutor:()=>void;onPractice:(focus:Focus)=>void;onGenerateAI:(lessonId:string,generateNew?:boolean)=>void;onSeeTrails:(focus:{subject:string;lessonId:string})=>void;focus?:{subject:string;lessonId:string}|null;active?:boolean;
}){
 const [exam,setExam]=useState<ExamId|null>(preferredExam);
 const [provaoGrade,setProvaoGrade]=useState<ProvaoGrade|null>(null);
 const catalog=useMemo(()=>learningCatalogForExam(exam,provaoGrade),[exam,provaoGrade]);
 const scopedSubjects=useMemo(()=>[...new Set(catalog.map(l=>l.subject))],[catalog]);
 useEffect(()=>setExam(preferredExam),[preferredExam]);
 const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
 const [subject,setSubject]=useState(focus?.subject??'Matemática');
 const [selectedId,setSelectedId]=useState(focus?.lessonId??'math-percentages');
 const [mobilePane,setMobilePane]=useState<'list'|'lesson'>(focus?.lessonId?'lesson':'list');
 const [query,setQuery]=useState('');
 const [loaded,setLoaded]=useState(false);
 const [error,setError]=useState('');
 const [restored,setRestored]=useState(false);
 const {data:aiProgress,loading:aiLoading,error:aiError,refresh:refreshAI}=useAIStudyProgress(userId);
 useEffect(()=>{if(catalog.some(l=>l.id===selectedId))return;const first=catalog[0];if(first){setSubject(first.subject);setSelectedId(first.id);}},[catalog,selectedId]);
 const detailRef=useRef<HTMLElement|null>(null);
 const indexRef=useRef<HTMLElement|null>(null);
 // The question workspace stays mounted when hidden. Defer a single updated
 // progress read until this trail becomes visible again, rather than fetching
 // during every graded answer of a ten-question practice run.
 const historyChangedWhileAway=useRef(false);
 useEffect(()=>{
  const mark=()=>{historyChangedWhileAway.current=true;};
  window.addEventListener('kognos:ai-answer-recorded',mark);
  return()=>window.removeEventListener('kognos:ai-answer-recorded',mark);
 },[]);
 useEffect(()=>{
  if(active&&historyChangedWhileAway.current){
   historyChangedWhileAway.current=false;
   void refreshAI();
  }
 },[active,refreshAI]);
 useEffect(()=>{
  let mounted=true;setLoaded(false);setError('');setAttempts([]);
  if(!userId){
   try{const raw=localStorage.getItem(guestKey);const items=raw?JSON.parse(raw):[];if(mounted)setAttempts(Array.isArray(items)?items:[]);}
   catch{if(mounted)setError('Não foi possível carregar o histórico deste navegador.');}
   if(mounted)setLoaded(true);return()=>{mounted=false;};
  }
  getCloudAttempts(userId).then(data=>{if(mounted){setAttempts(data);setLoaded(true);}})
   .catch(err=>{if(mounted){setLoaded(true);setError(err instanceof Error?err.message:'Falha ao carregar histórico.');}});
  return()=>{mounted=false;};
 },[userId]);

 useEffect(()=>{
  if(focus){if(!learningCatalogForExam(preferredExam).some(l=>l.id===focus.lessonId))setExam(null);setSubject(focus.subject);setSelectedId(focus.lessonId);setMobilePane('lesson');setRestored(true);return;}
  try{const saved=localStorage.getItem(`kognos_last_lesson_v1_${userId||'guest'}`);
   if(saved){const found=findLearningLesson(saved);if(found){setSubject(found.subject);setSelectedId(found.id);}}
  }catch{/* Browser storage may be disabled. */}
  setRestored(true);
 },[userId,focus?.lessonId,focus?.subject]);

 useEffect(()=>{
  if(!restored)return;
  const found=findLearningLesson(selectedId);if(!found||found.subject!==subject)return;
  try{localStorage.setItem(`kognos_last_lesson_v1_${userId||'guest'}`,found.id);}catch{/* Optional local preference. */}
 },[restored,selectedId,subject,userId]);

 const roadmap=useMemo(()=>trailSnapshot(subject,attempts,catalog),[subject,attempts,catalog]);
 const connected=useMemo(()=>connectedCatalogProgress(attempts,aiProgress,catalog),[attempts,aiProgress,catalog]);
 const connectedTrail=useMemo(()=>connectedSubjectProgress(subject,attempts,aiProgress,catalog),[subject,attempts,aiProgress,catalog]);
 const historyReady=loaded&&(!userId||!aiLoading);
 const visibleLessons=useMemo(()=>roadmap.steps.filter(step=>`${step.lesson.topic} ${step.lesson.objective}`.toLocaleLowerCase('pt-BR').includes(query.trim().toLocaleLowerCase('pt-BR'))),[roadmap.steps,query]);
 const lesson=findLearningLesson(selectedId);
 const mathLab=lesson?resolveMathLab({subject:lesson.subject,topic:lesson.topic}):null;
 const scienceLab=lesson?resolveScienceLab({subject:lesson.subject,topic:lesson.topic}):null;
 const languageLab=lesson?resolveLanguageLab({subject:lesson.subject,topic:lesson.topic}):null;
 const humanitiesLab=lesson?resolveHumanitiesLab({subject:lesson.subject,topic:lesson.topic}):null;
 const position=lesson?.subject===subject?roadmap.steps.findIndex(step=>step.lesson.id===lesson.id):-1;
 const previous=lesson?adjacentLesson(subject,lesson.id,-1,catalog):null;
 const following=lesson?adjacentLesson(subject,lesson.id,1,catalog):null;
 const progress=connected.total?Math.round(100*connected.practiced/connected.total):0;
 const currentProgress=roadmap.total?Math.round(100*connectedTrail.practiced/roadmap.total):0;

 const visibleContext=useCallback((context:KogStudyContext|null)=>{if(active)onContextChange(context);},[active,onContextChange]);
 useEffect(()=>{
  if(!active)return;
  visibleContext(lesson&&lesson.subject===subject?{kind:'lesson',lessonId:lesson.id}:null);
 },[active,lesson?.id,subject,visibleContext]);

 function selectSubject(value:string){
  setSubject(value);setSelectedId(catalog.find(l=>l.subject===value)?.id??'');setQuery('');setMobilePane('list');
 }
 function chooseLesson(item:LearningLesson){
  setSubject(item.subject);setSelectedId(item.id);setMobilePane('lesson');visibleContext({kind:'lesson',lessonId:item.id});
  if(window.matchMedia('(max-width: 1150px)').matches)detailRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
 }
 useEffect(()=>{
  if(active&&mobilePane==='lesson'&&window.matchMedia('(max-width: 760px)').matches){detailRef.current?.scrollIntoView({behavior:'auto',block:'start'});}
 },[active,mobilePane,selectedId]);
 const masteryById=useMemo(()=>new Map((aiProgress?.skillEvolution??[]).map(item=>[item.lessonId,item.mastery])),[aiProgress]);
 const nextWeakId=userId&&aiProgress?prioritySkillLessonId(roadmap.steps.map(step=>step.lesson),masteryById):null;
 const highlight=(nextWeakId?roadmap.steps.find(step=>step.lesson.id===nextWeakId)?.lesson:null)
  ??connectedTrail.next??roadmap.steps[0]?.lesson??null;
 const hasHistory=historyReady&&connected.practiced>0;
 const isTrail=mode==='trails';

 return <main className={`app-content learning-paths-page ${mode==='learn'?'learning-focus-page':'learning-trails-page'} learning-journey-v14`}>
  <div className="page-intro learning-journey-intro">
   <div><span className="overline">{isTrail?'ROTEIROS DE APRENDIZAGEM':'SALA DE ESTUDO'}</span>
    <h1>{isTrail?'Seu caminho para ': 'Hora de '}<em>{isTrail?'aprender.':'aprender.'}</em></h1>
    <p>{isTrail?'Escolha a matéria, acompanhe as etapas e avance no seu ritmo.':'Estude a aula e pratique com questões originais geradas e corrigidas por IA.'}</p>
   </div>
   <span className="learning-journey-edition"><BookOpenText size={14}/> Catálogo preparatório autoral</span>
  </div>

  <div className="course-filters"><label>Prova<select value={exam||'all'} onChange={e=>setExam(e.target.value==='all'?null:e.target.value as ExamId)}><option value="all">Todas as provas</option>{Object.entries(examBlueprints).map(([id,b])=><option value={id} key={id}>{b.label}</option>)}</select></label>{exam==='saresp'&&<label>Série do Provão Paulista<select value={provaoGrade??'all'} onChange={e=>setProvaoGrade(e.target.value==='all'?null:Number(e.target.value) as ProvaoGrade)}><option value="all">Todas as séries do ensino médio</option><option value="1">1ª série — Seriado I</option><option value="2">2ª série — Seriado II</option><option value="3">3ª série — Seriado III</option></select></label>}<p>{catalog.length} temas disponíveis para estudo e prática com IA.</p></div>
  {error&&<div className="message warning" role="alert">{error}</div>}
  {aiError&&userId&&<StudySyncNotice error={aiError} onRetry={()=>void refreshAI()}/>}
  {isTrail&&<section className="learning-journey-summary" aria-label="Seu progresso nos roteiros">
   <div className="learning-journey-summary-main">
    <span className="learning-journey-mark"><Compass size={21}/></span>
    <div className="learning-journey-summary-copy"><span className="overline">SUA JORNADA</span>
     <strong>{!historyReady?'Carregando seu histórico…':hasHistory?'Continue de onde parou':'Comece sua primeira trilha'}</strong>
     <small>{historyReady?`${connected.practiced} de ${connected.total} tópicos com prática`:'Consultando suas tentativas registradas'}</small>
    </div>
   </div>
   <div className="learning-journey-summary-progress">
    <div className="learning-journey-progress-label"><span>Prática registrada</span><strong>{historyReady?`${progress}%`:'—'}</strong></div>
    <div className="learning-progress-track" role="progressbar" aria-label="Tópicos com questões respondidas" aria-valuemin={0} aria-valuemax={connected.total} aria-valuenow={historyReady?connected.practiced:0}><span style={{width:`${historyReady?progress:0}%`}}/></div>
    <small>{historyReady&&connected.review>0?`${connected.review} tópico(s) indicados para revisão`: 'Evolução por tentativas, não por domínio comprovado'}</small>
   </div>
  </section>}

  <section className="learning-journey-browser" aria-label="Selecionar matéria">
   <div className="learning-journey-browser-head">
    <div><span className="overline">{isTrail?'ESCOLHA SUA TRILHA':'ESCOLHA UMA DISCIPLINA'}</span><h2>Por onde vamos começar?</h2></div>
    <span>{scopedSubjects.length} disciplinas disponíveis</span>
   </div>
   <div className="learning-journey-subject-pills" role="group" aria-label="Disciplina selecionada">
    {scopedSubjects.map(item=>{
     const count=connectedSubjectProgress(item,attempts,aiProgress,catalog);return <button type="button" key={item} className={`learning-journey-subject-pill ${item===subject?'is-active':''}`} aria-pressed={item===subject} onClick={()=>selectSubject(item)}>
       <span>{item}</span><small>{historyReady?`${count.practiced}/${count.total}`:`${count.total} aulas`}</small>
      </button>;
    })}
   </div>
  </section>

  <section className="learning-journey-subject-overview" aria-label={`Visão geral de ${subject}`}>
   <div className="learning-journey-subject-copy"><span className="overline">{isTrail?'TRILHA SELECIONADA':'AULA SELECIONADA'}</span>
    <h2>{subject}<span> · {roadmap.total} etapas</span></h2>
    <p>{isTrail?'Aulas organizadas do fundamento à aplicação. Você pode revisitar qualquer etapa.':'Escolha o assunto e acompanhe a explicação no painel abaixo.'}</p>
    {!isTrail&&lesson&&<button type="button" className="learning-journey-open-trails" onClick={()=>onSeeTrails({subject:lesson.subject,lessonId:lesson.id})}>Ver sequência completa <ArrowRight size={13}/></button>}
   </div>
   <div className="learning-journey-subject-status"><div><span>Prática registrada</span><strong>{historyReady?`${connectedTrail.practiced}/${roadmap.total}`:'—'}</strong></div>
    <div className="learning-progress-track" role="progressbar" aria-label={`Tópicos praticados de ${subject}`} aria-valuemin={0} aria-valuemax={roadmap.total} aria-valuenow={historyReady?connectedTrail.practiced:0}><span style={{width:`${historyReady?currentProgress:0}%`}}/></div>
   </div>
   {highlight&&<button type="button" className="learning-journey-continue" onClick={()=>chooseLesson(highlight)}>
      <Target size={17}/><span><small>Próximo passo recomendado</small><strong>{highlight.topic}</strong></span><ArrowRight size={16}/>
    </button>}
  </section>

  <div className={`learning-body-grid learning-journey-workspace ${mode==='learn'?'is-learning-first':''} ${mobilePane==='lesson'?'is-mobile-lesson':'is-mobile-list'}`}>
   <section ref={indexRef} className="learning-index dark-panel" aria-label={`Etapas de ${subject}`}>
    <div className="learning-index-header"><div><span className="overline">{isTrail?'SEQUÊNCIA DA TRILHA':'NAVEGUE PELAS AULAS'}</span><h2>{isTrail?'Etapas do percurso':'Escolha uma aula'}</h2><p>{roadmap.total} temas disponíveis para estudo</p></div></div>
    <label className="learning-search"><Search size={16} aria-hidden="true"/><span className="sr-only">Buscar tópico</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar assunto…"/></label>
    {!loaded&&<p className="muted" role="status">Carregando evidências de prática…</p>}
    <div className="learning-lesson-list learning-journey-steps">
     {visibleLessons.length?visibleLessons.map(step=>{
      const item=step.lesson;const active=item.id===selectedId;const connectedEvidence=connectedLessonEvidence(item,attempts,aiProgress);const ai=connectedEvidence.generated;
       const mastery=masteryById.get(item.id);
      return <button type="button" key={item.id} className={`learning-lesson-item learning-journey-step ${active?'selected':''} ${step.evidence==='correct-sample'?'has-sample':''} ${connectedEvidence.review?'needs-review':''} ${connectedEvidence.hasAI?'has-ai':''}`}
       aria-current={active?'step':undefined} onClick={()=>chooseLesson(item)}>
       <span className="learning-lesson-number">{step.evidence==='correct-sample'?<CheckCircle2 size={17}/>:String(step.number).padStart(2,'0')}</span>
       <span className="learning-lesson-label"><strong>{item.topic}</strong><small>{connectedEvidence.hasAI&&step.evidence==='not-started'?'Prática IA registrada':evidenceLabels[step.evidence]}{item.curriculumId?' · Aula por tema':` · ${item.minutes} min`}</small>{ai&&<small className="learning-ai-step-stat">IA: {ai.attempts} resposta(s) em {ai.distinctQuestions} questão(ões){ai.lastCorrect===false?' · revisar':''}</small>}{mastery&&<small className={`k-skill-stage-inline is-${mastery.stage}`}>{mastery.label} · {mastery.distinctPracticeDays} dia(s) com sequência completa</small>}{step.prerequisites.length>0&&<small className="learning-journey-prereq">Base: {step.prerequisites.map(req=>req.topic).join(', ')}</small>}</span>
       {connectedEvidence.review?<RotateCcw size={16}/>:<ChevronRight size={17}/>}
      </button>;
     }):<p className="muted">Nenhum assunto encontrado. Tente outra palavra.</p>}
    </div>
    <div className="learning-journey-key"><span><span className="dot"/>Não praticado</span><span><span className="dot review"/>Revisar</span><span><span className="dot sampled"/>Acerto registrado</span></div>
   </section>
   <section ref={detailRef} className="learning-lesson-detail dark-panel" aria-label="Aula selecionada">
    <button type="button" className="k-classroom-back" onClick={()=>{setMobilePane('list');requestAnimationFrame(()=>indexRef.current?.scrollIntoView({behavior:'smooth',block:'start'}));}}><ArrowLeft size={16} aria-hidden="true"/> Voltar às aulas de {subject}</button>
    {lesson&&lesson.subject===subject?lesson.curriculumId?<CurriculumRoom key={lesson.id} embedded active={active} userId={userId} focus={{subject:lesson.subject,lessonId:lesson.id}} onContextChange={visibleContext} onTutor={onTutor} onGenerateAI={onGenerateAI}/>:<>
     <div className="learning-lesson-head">
      <span className="overline">AULA {String(position+1).padStart(2,'0')} DE {String(roadmap.total).padStart(2,'0')} · {lesson.subject.toUpperCase()}</span>
      <h2>{lesson.topic}</h2>
      <div className="learning-lesson-tags"><span><Clock3 size={14}/> {lesson.minutes} min de estudo estimado</span><span><ListChecks size={14}/> 1 exercício autoral</span><span>{evidenceLabels[evidenceForLesson(lesson,attempts)]}</span></div>
     </div>
     <div className="learning-pedagogy"><span className="learning-pedagogy-icon"><Target size={18}/></span><div><strong>Objetivo da aula</strong><p>{lesson.objective}</p></div></div>
     {lesson.prerequisites.length>0&&<div className="learning-prereqs"><strong>Antes desta aula:</strong> {lesson.prerequisites.map(id=>findLearningLesson(id)).filter((item):item is LearningLesson=>Boolean(item)).map((item,i)=><button type="button" key={item.id} onClick={()=>chooseLesson(item)}>{i>0?', ':''}{item.topic} <ArrowRight size={12}/></button>)}</div>}
     <InteractiveIntroLesson key={lesson.id} lesson={lesson} onTutor={()=>{visibleContext({kind:'lesson',lessonId:lesson.id});onTutor();}}/>
     <details className="k-math-explore-details k-study-explore-details">
      <summary>Exploração interativa de {lesson.subject}</summary>
      {mathLab&&<MathLabPanel key={'math-'+lesson.id} subject={lesson.subject} topic={lesson.topic}/>}
      {scienceLab&&<ScienceLabPanel key={'science-'+lesson.id} subject={lesson.subject} topic={lesson.topic}/>}
      {languageLab&&<LanguageLabPanel key={'language-'+lesson.id} subject={lesson.subject} topic={lesson.topic}/>}
      {humanitiesLab&&<HumanitiesLabPanel key={'humanities-'+lesson.id} subject={lesson.subject} topic={lesson.topic}/>}
      <StudyExplorationPanel key={lesson.id} subject={lesson.subject} topic={lesson.topic} introduction={lesson}
        onTutor={()=>{visibleContext({kind:'lesson',lessonId:lesson.id});onTutor();}}/>
     </details>
     <div className="learning-ai-lesson-summary">{aiProgress&&(()=>{const summary=connectedLessonEvidence(lesson,attempts,aiProgress).generated;return summary?<><strong>Questões IA vinculadas: {summary.distinctQuestions}</strong><span>{summary.correct} acerto(s) em {summary.attempts} tentativa(s) · {summary.incorrect} erro(s). Esses dados não representam proficiência.</span></>:<span>Ainda não há questões IA respondidas e vinculadas a esta aula.</span>;})()}</div>
     <details className="learning-lesson-block learning-catalog-references">
      <summary>Referências e provas relacionadas</summary>
      <p>Conteúdo autoral Kognos. Relação editorial com os roteiros abaixo; não é aula oficial nem garantia de cobrança. Confira a edição e a série nos documentos da instituição.</p>
      <ul>{(Object.keys(examBlueprints) as ExamId[]).filter(id=>linkedExamTopic(lesson.id,id)).map(id=><li key={id}><a href={officialSyllabusSources[id].url} target="_blank" rel="noreferrer">{id==='vunesp'?'UNESP / VUNESP':examBlueprints[id].label}</a> · {linkedExamTopic(lesson.id,id)}</li>)}</ul>
     </details>
     {userId&&<SkillEvolutionPanel
      evolution={aiProgress?.skillEvolution?.find(item=>item.lessonId===lesson.id)??null}
      sampleLimited={aiProgress?.sampleLimited??false}
      onPractice={()=>onGenerateAI(lesson.id,true)}
      onTutor={()=>{visibleContext({kind:'lesson',lessonId:lesson.id});onTutor();}}
     />}
     {!userId&&<div className="learning-lesson-actions"><button type="button" className="btn outline" onClick={()=>{visibleContext({kind:'lesson',lessonId:lesson.id});onTutor();}}><Sparkles size={15}/> Estudar com Kog</button></div>}
     <p className="privacy-note">{userId?'Ao praticar, o Kognos cria novas questões autorais para o objetivo específico desta aula, revisa as respostas e abre o treino automaticamente. A geração depende das cotas gratuitas dos provedores.':'No modo visitante, a prática demonstra uma questão fixa. Entre em sua conta para gerar questões inéditas sobre a aula com IA.'}</p>
     <div className="learning-journey-lesson-nav"><button type="button" disabled={!previous} onClick={()=>previous&&chooseLesson(previous)}><ArrowLeft size={15}/> Anterior</button>
       <span>{position+1} / {roadmap.total}</span>
       <button type="button" disabled={!following} onClick={()=>following&&chooseLesson(following)}>Próxima aula <ArrowRight size={15}/></button></div>
    </>:<p className="muted">Escolha uma aula para começar.</p>}
   </section>
  </div>
  <p className="learning-journey-footnote"><Info size={15} aria-hidden="true"/>{userId?'As questões respondidas com IA alimentam seu histórico adaptativo.':'Modo visitante: histórico demonstrativo guardado no navegador; entre para usar IA.'} Conteúdos autorais de preparação, sem cobertura integral dos editais; uma resposta isolada não demonstra domínio.</p>
 </main>;
}

