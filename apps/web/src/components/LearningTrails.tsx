'use client';

import {useEffect,useMemo,useState} from 'react';
import {ArrowRight, BookOpenText, CheckCircle2, CircleHelp, Clock3, Lightbulb, RotateCcw, Search, Sparkles, Target} from 'lucide-react';
import type {KogStudyContext} from '@/lib/kog-study-context';
import type {QuestionAttempt} from '@/lib/demo-questions';
import {getCloudAttempts} from '@/lib/cloud-study';
import {learningLessons,learningSubjects,lessonsForSubject,findLearningLesson,type LearningLesson} from '@/lib/learning-catalog';
import {evidenceForLesson,recommendedNextLesson,subjectProgress} from '@/lib/learning-progress';

type Mode='learn'|'trails'|'subjects';
type Focus={subject:string;topic:string;questionId:string};
const subjectDescriptions:Record<string,string>={
 'Matemática':'Operações, funções e raciocínio quantitativo',
 'Português':'Leitura, interpretação e estrutura da língua',
 'Física':'Movimento, forças e transformações de energia',
 'Química':'Matéria, ligações e soluções',
 'Biologia':'Células, herança e relações ecológicas',
 'História':'Processos históricos e transformações sociais',
 'Geografia':'Mapas, território e clima',
};
const evidenceLabels={'not-started':'Ainda não praticado',review:'Revisar resultado','correct-sample':'Acerto registrado'} as const;

export default function LearningTrails({mode,userId,onContextChange,onTutor,onPractice}:{
 mode:Mode;userId:string|null;onContextChange:(context:KogStudyContext|null)=>void;
 onTutor:()=>void;onPractice:(focus:Focus)=>void;
}){
 const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
 const [subject,setSubject]=useState('Matemática');
 const [selectedId,setSelectedId]=useState<string>('math-percentages');
 const [query,setQuery]=useState('');
 const [loaded,setLoaded]=useState(false);
 const [error,setError]=useState('');
 useEffect(()=>{
   let mounted=true;setLoaded(false);setError('');setAttempts([]);
   if(!userId){
     try{const raw=localStorage.getItem('kognos_demo_attempts_v1_guest');if(mounted)setAttempts(raw?JSON.parse(raw):[]);}
     catch{if(mounted)setError('Este navegador não permitiu carregar o histórico local.');}
     if(mounted)setLoaded(true);return()=>{mounted=false;};
   }
   getCloudAttempts(userId).then(data=>{if(mounted){setAttempts(data);setLoaded(true);}})
     .catch(err=>{if(mounted){setLoaded(true);setError(err instanceof Error?err.message:'Falha ao carregar histórico.');}});
   return()=>{mounted=false;};
 },[userId]);
 const lesson=findLearningLesson(selectedId);
 const visibleLessons=useMemo(()=>lessonsForSubject(subject).filter(l=>`${l.topic} ${l.objective}`.toLocaleLowerCase('pt-BR').includes(query.trim().toLocaleLowerCase('pt-BR'))),[subject,query]);
 const statistics=subjectProgress(subject,attempts);
 const next=recommendedNextLesson(subject,attempts);
 useEffect(()=>{
   if(lesson){onContextChange({kind:'lesson',lessonId:lesson.id});}
   else onContextChange(null);
 },[lesson?.id,onContextChange]);
 function selectSubject(value:string){setSubject(value);setSelectedId(lessonsForSubject(value)[0]?.id||'');setQuery('');}
 function chooseLesson(item:LearningLesson){setSelectedId(item.id);onContextChange({kind:'lesson',lessonId:item.id});}
 const overallPracticed=learningLessons.filter(l=>evidenceForLesson(l,attempts)!=='not-started').length;
 return <div className="app-content learning-paths-page">
   <div className="page-intro"><span className="overline">TRILHAS DE APRENDIZAGEM</span>
     <h1>{mode==='subjects'?'Suas ':mode==='learn'?'Aprender ': 'Explore suas '}<em>{mode==='subjects'?'disciplinas.':mode==='learn'?'de verdade.':'trilhas.'}</em></h1>
     <p>Estude um conceito, veja um exemplo, responda a uma pergunta e pratique. Conteúdo original introdutório — não é um curso completo nem material oficial de vestibular.</p>
   </div>
   <div className="message neutral" role="note">{userId?'As tentativas demonstrativas são consultadas na sua conta Supabase.':'Modo visitante: o progresso dos exercícios fica neste navegador.'} São {learningLessons.length} tópicos introdutórios e uma questão autoral por tópico. Um acerto isolado não comprova domínio permanente.</div>
   {error&&<div className="message warning" role="alert">{error}</div>}
   <section className="learning-overview" aria-label="Progresso do catálogo introdutório">
     <div className="learning-overview-copy"><span className="overline">MAPA DE CONTEÚDOS</span><h2>{overallPracticed} de {learningLessons.length} tópicos praticados</h2><p>Acompanhe evidências de prática, sem notas ou classificações inventadas.</p></div>
     <div className="learning-overview-meter"><strong>{Math.round(100*overallPracticed/learningLessons.length)}%</strong><div className="learning-progress-track"><span style={{width:`${100*overallPracticed/learningLessons.length}%`}}/></div><small>Cobertura de exercícios autorais</small></div>
   </section>
   <section className="learning-subjects" aria-label="Selecione uma disciplina">
     {learningSubjects.map(item=>{const stats=subjectProgress(item,attempts);return <button type="button" className={`learning-subject-card ${item===subject?'is-current':''}`} key={item} aria-pressed={item===subject} onClick={()=>selectSubject(item)}>
       <span className="learning-subject-top"><BookOpenText size={19}/><small>{stats.total} tópicos</small></span>
       <strong>{item}</strong><span className="learning-subject-description">{subjectDescriptions[item]}</span>
       <span className="learning-progress-track"><span style={{width:`${stats.coverage}%`}}/></span><small>{stats.practiced}/{stats.total} praticados · {stats.correct} com acerto registrado</small>
     </button>;})}
   </section>
   <div className="learning-body-grid">
     <section className="learning-index dark-panel" aria-label={`Tópicos de ${subject}`}>
       <div className="learning-index-header"><div><span className="overline">{subject.toUpperCase()}</span><h2>Seu roteiro</h2><p>{statistics.practiced} atividades tentadas · {statistics.review} para revisar</p></div></div>
       <label className="learning-search"><Search size={16} aria-hidden="true"/><span className="sr-only">Buscar tópico</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar assunto…"/></label>
       {!loaded&&<p className="muted" role="status">Carregando progresso…</p>}
       {next&&<button type="button" className="learning-next" onClick={()=>chooseLesson(next)}><Target size={16}/> Sugestão: {next.topic} <ArrowRight size={15}/></button>}
       <div className="learning-lesson-list">{visibleLessons.length?visibleLessons.map((item,index)=>{
         const evidence=evidenceForLesson(item,attempts);return <button type="button" key={item.id} className={`learning-lesson-item ${item.id===selectedId?'selected':''}`} aria-current={item.id===selectedId?'step':undefined} onClick={()=>chooseLesson(item)}>
           <span className="learning-lesson-number">{String(lessonsForSubject(subject).indexOf(item)+1).padStart(2,'0')}</span>
           <span className="learning-lesson-label"><strong>{item.topic}</strong><small>{evidenceLabels[evidence]} · {item.minutes} min de leitura estimada</small></span>
           {evidence==='correct-sample'?<CheckCircle2 size={17}/>:evidence==='review'?<RotateCcw size={17}/>:<ArrowRight size={16}/>}
         </button>;}) : <p className="muted">Nenhum tópico encontrado neste filtro.</p>}</div>
     </section>
     <section className="learning-lesson-detail dark-panel" aria-label="Aula selecionada">
       {lesson?<>
         <div className="learning-lesson-head"><span className="overline">MINIAULA AUTORAL · {lesson.subject.toUpperCase()}</span><h2>{lesson.topic}</h2><div className="learning-lesson-tags"><span><Clock3 size={14}/> {lesson.minutes} min estimados</span><span><CircleHelp size={14}/> 1 exercício disponível</span></div></div>
         <div className="learning-pedagogy"><span className="learning-pedagogy-icon"><Target size={18}/></span><div><strong>Objetivo da aula</strong><p>{lesson.objective}</p></div></div>
         {lesson.prerequisites.length>0&&<div className="learning-prereqs"><strong>Base recomendada:</strong> {lesson.prerequisites.map(id=>findLearningLesson(id)?.topic).filter(Boolean).join(', ')}</div>}
         <div className="learning-lesson-block"><h3>Entenda o conceito</h3><p>{lesson.explanation}</p></div>
         <div className="learning-lesson-block"><h3>Exemplo resolvido</h3><p>{lesson.workedExample}</p></div>
         <div className="learning-lesson-block mistake"><h3>Erro comum</h3><p>{lesson.commonMistake}</p></div>
         <div className="learning-lesson-block check"><h3>Confira se entendeu</h3><p>{lesson.check}</p><small>Explique com suas palavras ou peça uma dica ao Kog.</small></div>
         <div className="learning-lesson-actions"><button type="button" className="btn primary" onClick={()=>onPractice({subject:lesson.subject,topic:lesson.topic,questionId:lesson.questionId})}>Praticar este tópico <ArrowRight size={16}/></button><button type="button" className="btn outline" onClick={()=>{onContextChange({kind:'lesson',lessonId:lesson.id});onTutor();}}><Sparkles size={15}/> Estudar com Kog</button></div>
         <p className="privacy-note">A evidência de progresso vem do exercício respondido. A leitura desta aula, por si só, não é registrada como conteúdo dominado.</p>
       </>:<p className="muted">Escolha uma aula para começar.</p>}
     </section>
   </div>
 </div>;
}