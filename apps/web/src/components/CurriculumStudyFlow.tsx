'use client';
import {useCallback,useEffect,useRef,useState,type ReactNode} from 'react';
import {ArrowLeft,ArrowRight,BookOpenText,BookOpenCheck,Calculator,FlaskConical,Dna,Globe2,Languages,Landmark,Scale,PenLine,Atom,Users,ChevronRight,CheckCircle2,Search} from 'lucide-react';
import {topicForLegacyLesson,type CurriculumTopic} from '@/lib/curriculum-catalog';
import type {ExamId} from '@/lib/exam-blueprints';
import {examBlueprints} from '@/lib/exam-blueprints';
import type {ProvaoGrade} from '@/lib/provao-paulista';
import {contentRequest} from '@/lib/content-client';
import {canFinishLesson,curriculumSubjects,curriculumSubjectTopics,nextCurriculumTopic,scopedCurriculum,type CurriculumStep,type CurriculumListTopic} from '@/lib/curriculum-navigation';

type Props={
 preferredExam?:ExamId|null;
 focus?:{lessonId:string;subject:string}|null;
 renderLesson:(topic:CurriculumTopic,onActivityProgress:(answered:boolean)=>void)=>ReactNode;
};
const statuses:Record<string,string>={published:'Aula desenvolvida',introduction:'Introdução disponível',outline:'Tema mapeado, sem aula',draft:'Em revisão'};
const icons:Record<string,typeof Calculator>={
 'Matemática':Calculator,'Português':BookOpenText,'Inglês':Languages,'Redação':PenLine,
 'Física':Atom,'Química':FlaskConical,'Biologia':Dna,'História':Landmark,
 'Geografia':Globe2,'Filosofia':Scale,'Sociologia':Users
};
export default function CurriculumStudyFlow({preferredExam=null,focus=null,renderLesson}:Props){
 const [topics,setTopics]=useState<CurriculumListTopic[]>([]);
 const [exam,setExam]=useState<ExamId|'all'>(preferredExam??'all');
 const [grade,setGrade]=useState<ProvaoGrade|null>(null);
 const [subject,setSubject]=useState(focus?.subject??'');
 const [search,setSearch]=useState('');
 const [selected,setSelected]=useState(focus?.lessonId?(topicForLegacyLesson(focus.lessonId)?.id??focus.lessonId):'');
 const [step,setStep]=useState<CurriculumStep>(focus?.lessonId?'lesson':'subjects');
 const [readingConfirmed,setReadingConfirmed]=useState(false);
 const [activitiesAnswered,setActivitiesAnswered]=useState(false);
 const [loadError,setLoadError]=useState('');
 const [loading,setLoading]=useState(true);
 const top=useRef<HTMLDivElement|null>(null);
 const load=useCallback(async()=>{
  try{
   const response=await contentRequest('/api/content');
   setTopics(response.topics);
   setLoadError('');
  }catch(error){
   setLoadError(error instanceof Error?error.message:'Não foi possível carregar as disciplinas.');
  }finally{setLoading(false);}
 },[]);
 useEffect(()=>{void load();},[load]);
 useEffect(()=>{setExam(preferredExam??'all');},[preferredExam]);
 useEffect(()=>{
  if(focus?.lessonId){setSelected(topicForLegacyLesson(focus.lessonId)?.id??focus.lessonId);setSubject(focus.subject);setStep('lesson');}
 },[focus?.lessonId,focus?.subject]);
 useEffect(()=>{
  const frame=requestAnimationFrame(()=>top.current?.scrollIntoView({behavior:'auto',block:'start'}));
  return()=>cancelAnimationFrame(frame);
 },[step,selected]);
 const scoped=scopedCurriculum(topics,exam,grade);
 const subjects=curriculumSubjects(scoped);
 const subjectTopics=curriculumSubjectTopics(scoped,subject);
 const visibleTopics=subjectTopics.filter(topic=>topic.topic.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR')));
 const current=subjectTopics.find(topic=>topic.id===selected)??topics.find(topic=>topic.id===selected)??null;
 const next=current?nextCurriculumTopic(subjectTopics,current.id):null;
 const position=current?subjectTopics.findIndex(topic=>topic.id===current.id)+1:0;
 const hasLesson=Boolean(current&&['published','introduction'].includes(current.status));
 const ready=canFinishLesson(hasLesson,readingConfirmed,activitiesAnswered,true);
 function resetCompletion(){setReadingConfirmed(false);setActivitiesAnswered(false);}
 function chooseSubject(name:string){
  setSubject(name);setSearch('');setSelected('');resetCompletion();setStep('topics');
 }
 function chooseTopic(topic:CurriculumListTopic){
  setSubject(topic.subject);setSelected(topic.id);resetCompletion();setStep('lesson');
 }
 function nextLesson(){if(next&&(!hasLesson||ready))chooseTopic(next);}
 return <main className="app-content course-room k-curriculum-flow">
  <div ref={top} className="k-curriculum-flow-anchor" aria-hidden="true"/>
  {loadError&&<div className="message warning" role="alert">{loadError}
   <button type="button" onClick={()=>void load()}>Tentar novamente</button></div>}
  {step==='subjects'&&<section className="k-curriculum-step" aria-label="Seleção de disciplinas">
   <header className="k-curriculum-flow-head">
    <span className="overline">ESTUDOS · 1 DE 3</span>
    <h1>Qual matéria você quer estudar?</h1>
    <p>Primeiro escolha uma disciplina. Depois selecione o tema para entrar na sala daquela aula.</p>
   </header>
   <div className="k-curriculum-exam-scope">
    <label>Preparação<select aria-label="Preparação" value={exam}
     onChange={e=>{setExam(e.target.value as ExamId|'all');setGrade(null);}}>
     <option value="all">Todos os currículos</option>
     {Object.entries(examBlueprints).map(([id,item])=><option value={id} key={id}>{id==='vunesp'?'UNESP / VUNESP':item.label}</option>)}
    </select></label>
    {exam==='saresp'&&<label>Série do Provão Paulista<select value={grade??'all'}
     onChange={e=>setGrade(e.target.value==='all'?null:Number(e.target.value) as ProvaoGrade)}>
     <option value="all">Todas as séries</option><option value="1">1ª série</option>
     <option value="2">2ª série</option><option value="3">3ª série</option>
    </select></label>}
   </div>
   <div className="k-curriculum-subject-grid">
    {subjects.map(item=>{
     const Icon=icons[item.name]??BookOpenText;
     return <button type="button" className="k-curriculum-subject-card" key={item.name} onClick={()=>chooseSubject(item.name)}>
      <span className="k-curriculum-subject-icon"><Icon size={23} aria-hidden="true"/></span>
      <span className="k-curriculum-subject-label"><strong>{item.name}</strong>
       <small>{item.total} conteúdos · {item.developed} aulas desenvolvidas · {item.introduced} introduções</small></span>
      <ChevronRight size={19} aria-hidden="true"/>
     </button>;
    })}
   </div>
   {loading&&<p role="status">Carregando matérias…</p>}
   {!loading&&!subjects.length&&!loadError&&<p className="k-curriculum-empty">Nenhuma disciplina encontrada para estes filtros.</p>}
   <p className="k-curriculum-disclaimer">O catálogo lista temas curriculares. Alguns ainda não possuem aula escrita completa.</p>
  </section>}
  {step==='topics'&&<section className="k-curriculum-step" aria-label={'Conteúdos da disciplina '+subject}>
   <button type="button" className="k-curriculum-back" onClick={()=>{setStep('subjects');setSelected('');resetCompletion();}}>
    <ArrowLeft size={17}/> Voltar às matérias</button>
   <header className="k-curriculum-flow-head"><span className="overline">ESTUDOS · 2 DE 3 · {subject.toLocaleUpperCase('pt-BR')}</span>
    <h1>Conteúdos de {subject}</h1><p>Escolha o assunto que você deseja estudar. Cada aula abre separadamente, sem a grade de outros conteúdos.</p>
   </header>
   <label className="k-curriculum-topic-search"><Search size={18}/>
    <span className="sr-only">Buscar assunto</span>
    <input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Pesquisar um tema…"/>
   </label>
   <p className="k-curriculum-topic-count">{visibleTopics.length} de {subjectTopics.length} conteúdos</p>
   <div className="k-curriculum-topic-list">
    {visibleTopics.map(topic=><button className="k-curriculum-topic-row" type="button" key={topic.id} onClick={()=>chooseTopic(topic)}>
     <span className="k-curriculum-topic-num">{String(subjectTopics.indexOf(topic)+1).padStart(2,'0')}</span>
     <span className="k-curriculum-topic-copy"><strong>{topic.topic}</strong>
      <small>{statuses[topic.status]??'Em revisão'}</small></span>
     <ArrowRight size={18} aria-hidden="true"/>
    </button>)}
   </div>
   {!visibleTopics.length&&<p className="k-curriculum-empty">Não encontramos conteúdos para essa pesquisa.</p>}
  </section>}
  {step==='lesson'&&<section className="k-curriculum-step k-curriculum-lesson-step" aria-label={'Aula '+(current?.topic??'selecionada')}>
   <div className="k-curriculum-lesson-toolbar">
    <button type="button" className="k-curriculum-back" onClick={()=>{setStep('topics');resetCompletion();}}>
     <ArrowLeft size={17}/> Conteúdos de {subject}</button>
    <span>ESTUDOS · 3 DE 3{position>0?' · '+position+' / '+subjectTopics.length:''}</span>
   </div>
   {current?<><header className="k-curriculum-lesson-head">
    <span className="overline">{current.subject}</span><h1>{current.topic}</h1>
    <span className="k-curriculum-maturity">{statuses[current.status]??'Em revisão'}</span>
   </header>
    <article className="k-curriculum-dedicated-reader" key={current.id}>
     {renderLesson(current,setActivitiesAnswered)}
    </article>
    <footer className="k-curriculum-lesson-progress">
     <div className="k-curriculum-progress-head"><BookOpenCheck size={21}/><div>
      <strong>Finalizar e prosseguir</strong>
      <p>{hasLesson?'Leia o texto e preencha as atividades para liberar a próxima aula.':
       'Este tema está mapeado, mas ainda não tem aula escrita completa. Você pode avançar sem registrá-lo como concluído.'}</p>
     </div></div>
     {hasLesson&&<div className="k-curriculum-progress-items">
      <label className="k-curriculum-check"><input type="checkbox" checked={readingConfirmed}
       onChange={e=>setReadingConfirmed(e.target.checked)}/>
       <span>Concluí a leitura de toda a aula</span></label>
      <span className={activitiesAnswered?'is-done':''}>{activitiesAnswered?<CheckCircle2 size={18}/>:<PenLine size={18}/>}
       {activitiesAnswered?'Atividades preenchidas':'Responda às atividades da aba Atividades'}</span>
     </div>}
     <div className="k-curriculum-lesson-actions">
      {next?<button type="button" className="k-curriculum-next"
       disabled={hasLesson&&!ready} onClick={nextLesson}>
       {hasLesson?'Prosseguir para a próxima aula':'Pular tema sem aula'} <ArrowRight size={18}/>
      </button>:<button type="button" className="k-curriculum-next" onClick={()=>chooseSubject(subject)}>
       Fim dos temas · Voltar aos conteúdos <ArrowRight size={18}/></button>}
     </div>
     {hasLesson&&!ready&&<p className="k-curriculum-progress-help">Para avançar, confirme a leitura e preencha todas as respostas dos exercícios da aba Atividades. Isso não constitui correção ou aprovação automática.</p>}
     {next&&<p className="k-curriculum-next-label">Próximo assunto: {next.topic}</p>}
    </footer>
   </>:<div className="k-curriculum-empty"><h2>Assunto indisponível neste filtro.</h2>
    <button type="button" onClick={()=>setStep('subjects')}>Voltar às matérias</button></div>}
  </section>}
 </main>;
}
