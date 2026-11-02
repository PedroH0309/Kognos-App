'use client';

import {useState} from 'react';
import {activeSyllabi,officialSyllabusSources} from '@/lib/exam-syllabus';
import {examBlueprints,completeExamTopicCatalog} from '@/lib/exam-blueprints';
import type {StudentProfile} from '@/lib/profile';
import type {StudyTask} from '@/lib/cloud-study-model';
import {syllabusProgress,type SyllabusTopicState,type TopicWeakEvidence} from '@/lib/syllabus-progress';

const labels:Record<SyllabusTopicState,string>={
 not_started:'Ainda não iniciado',planned:'Planejado',studied:'Estudado',review:'Precisa de revisão'
};
type SyllabusFilter='all'|SyllabusTopicState;
const filters:{id:SyllabusFilter;label:string}[]=[
 {id:'all',label:'Todos'},{id:'not_started',label:'Não iniciados'},
 {id:'planned',label:'Planejados'},{id:'studied',label:'Estudados'},{id:'review',label:'Revisar'}
];
export default function StudySyllabus({profile,tasks=[],weakTopics=[]}:{
 profile:StudentProfile;tasks?:readonly StudyTask[];weakTopics?:readonly TopicWeakEvidence[]
}){
 const [search,setSearch]=useState('');
 const [statusFilter,setStatusFilter]=useState<SyllabusFilter>('all');
 const exams=activeSyllabi(profile);
 const catalog=completeExamTopicCatalog(exams);
 const progress=syllabusProgress(catalog,tasks,weakTopics);
 const needle=search.trim().toLocaleLowerCase('pt-BR');
 const subjects=progress.subjects.map(item=>({
  ...item,topics:item.topics.filter(topic=>
   (statusFilter==='all'||topic.state===statusFilter)&&
   (!needle||item.subject.toLocaleLowerCase('pt-BR').includes(needle)
    ||topic.topic.toLocaleLowerCase('pt-BR').includes(needle)))
 })).filter(item=>item.topics.length>0);
 const total=progress.total;
 const completedPercentage=total?Math.round(100*progress.studied/total):0;
 return <section className="dark-panel k-complete-syllabus" aria-label="Programa de estudos do seu vestibular">
  <span className="overline">MATRIZ DE ESTUDOS</span>
  <h2>Todos os conteúdos do seu roteiro</h2>
  {exams.length===0?<p>Defina uma prova específica em Meu perfil → Preferências de aprendizagem para vincular a trilha de estudos a uma matriz.</p>:<>
   <p className="muted">{total} tópicos preparatórios em {Object.keys(catalog).length} disciplinas, para {exams.map(exam=>examBlueprints[exam].label).join(' e ')}. Acompanhe conteúdos estudados, assuntos ainda não iniciados e pontos para revisão.</p>
   <div className="k-syllabus-progress-summary" aria-label="Resumo de atividades por conteúdo">
    <div><strong>{progress.studied}</strong><span>Estudados</span></div>
    <div><strong>{progress.planned}</strong><span>Planejados</span></div>
    <div><strong>{progress.review}</strong><span>Para revisar</span></div>
    <div><strong>{total}</strong><span>No roteiro</span></div>
   </div>
   <div className="k-syllabus-progress-track" role="progressbar" aria-label="Tópicos com tarefa de estudo concluída"
     aria-valuemin={0} aria-valuemax={total} aria-valuenow={progress.studied}>
    <span style={{width:completedPercentage+'%'}}/>
   </div>
   <p className="privacy-note">Este progresso registra tarefas concluídas. Não representa nota, proficiência ou domínio do conteúdo.</p>
   <label className="k-syllabus-search">Buscar disciplina ou conteúdo<input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Ex.: eletromagnetismo, genética, redação"/></label>
   <div className="k-syllabus-filters" aria-label="Filtrar tópicos por situação">
    {filters.map(filter=><button key={filter.id} type="button" aria-pressed={statusFilter===filter.id}
      className={statusFilter===filter.id?'selected':''} onClick={()=>setStatusFilter(filter.id)}>{filter.label}</button>)}
   </div>
   <div className="k-syllabus-subjects">{subjects.map(({subject,topics})=><details key={subject}>
    <summary><strong>{subject}</strong><span>{topics.length} tópicos exibidos</span></summary>
    <ul className="k-syllabus-topic-list">{topics.map(topic=><li key={topic.topic} className={'k-syllabus-topic '+topic.state}>
      <span>{topic.topic}</span>
      <small>{labels[topic.state]}{topic.state==='review'&&topic.recordedErrors>0?' · '+topic.recordedErrors+' erro(s) registrados':''}</small>
    </li>)}</ul>
   </details>)}</div>
   {subjects.length===0&&<p role="status">Nenhum assunto corresponde a essa busca.</p>}
   <div className="k-syllabus-sources"><strong>Documentos institucionais de referência</strong>
    {exams.map(exam=><p key={exam}><a href={officialSyllabusSources[exam].url} target="_blank" rel="noopener noreferrer">{officialSyllabusSources[exam].title} · {officialSyllabusSources[exam].edition}</a><small>{officialSyllabusSources[exam].note}</small></p>)}
    <p className="privacy-note">Este índice é um roteiro editorial amplo alinhado às áreas de estudo, não uma reprodução integral homologada de cada edital. Obras obrigatórias, habilidades e conteúdos específicos por série precisam ser conferidos na versão oficial atual.</p>
   </div>
  </>}
 </section>;
}
