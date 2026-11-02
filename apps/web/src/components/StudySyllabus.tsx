'use client';

import {useMemo,useState} from 'react';
import {activeSyllabi,mergedSyllabus,officialSyllabusSources} from '@/lib/exam-syllabus';
import {examBlueprints} from '@/lib/exam-blueprints';
import type {StudentProfile} from '@/lib/profile';

export default function StudySyllabus({profile}:{profile:StudentProfile}){
 const [search,setSearch]=useState('');
 const exams=activeSyllabi(profile);
 const catalog=useMemo(()=>mergedSyllabus(exams),[exams.join('|')]);
 const needle=search.trim().toLocaleLowerCase('pt-BR');
 const subjects=Object.entries(catalog).map(([subject,topics])=>({
  subject,topics:topics.filter(topic=>!needle||subject.toLocaleLowerCase('pt-BR').includes(needle)||topic.toLocaleLowerCase('pt-BR').includes(needle))
 })).filter(item=>item.topics.length>0);
 const total=Object.values(catalog).reduce((n,items)=>n+items.length,0);
 return <section className="dark-panel k-complete-syllabus" aria-label="Programa de estudos do seu vestibular">
  <span className="overline">MATRIZ DE ESTUDOS</span>
  <h2>Todos os conteúdos do seu roteiro</h2>
  {exams.length===0?<p>Defina uma prova específica em Meu perfil → Preferências de aprendizagem para vincular a trilha de estudos a uma matriz.</p>:<>
   <p className="muted">{total} tópicos preparatórios em {Object.keys(catalog).length} disciplinas, para {exams.map(exam=>examBlueprints[exam].label).join(' e ')}. Use a busca para localizar temas e acompanhe as atualizações oficiais do edital.</p>
   <label className="k-syllabus-search">Buscar disciplina ou conteúdo<input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Ex.: eletromagnetismo, genética, redação"/></label>
   <div className="k-syllabus-subjects">{subjects.map(({subject,topics})=><details key={subject}>
    <summary><strong>{subject}</strong><span>{topics.length} tópicos</span></summary>
    <ol>{topics.map(topic=><li key={topic}>{topic}</li>)}</ol>
   </details>)}</div>
   {subjects.length===0&&<p role="status">Nenhum assunto corresponde a essa busca.</p>}
   <div className="k-syllabus-sources"><strong>Documentos institucionais de referência</strong>
    {exams.map(exam=><p key={exam}><a href={officialSyllabusSources[exam].url} target="_blank" rel="noopener noreferrer">{officialSyllabusSources[exam].title} · {officialSyllabusSources[exam].edition}</a><small>{officialSyllabusSources[exam].note}</small></p>)}
    <p className="privacy-note">Este índice é um roteiro editorial amplo alinhado às áreas de estudo, não uma reprodução integral homologada de cada edital. Obras obrigatórias, habilidades e conteúdos específicos por série precisam ser conferidos na versão oficial atual.</p>
   </div>
  </>}
 </section>;
}
