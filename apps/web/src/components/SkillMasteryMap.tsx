'use client';

import {useMemo,useState} from 'react';
import {ArrowRight,BookOpenText,BrainCircuit,RotateCcw} from 'lucide-react';
import type {LearningLesson} from '@/lib/learning-catalog';
import {lessonGenerationPreset} from '@/lib/lesson-ai-links';
import type {SkillEvolution} from '@/lib/skill-evolution';
import {assessSkillMasteryEvidence,type SkillMasteryEvidence} from '@/lib/skill-mastery-evidence';

type Filter='all'|'needs-practice'|'stable'|'not-started';
const filters:[Filter,string][]=[
 ['all','Todas'],['needs-practice','Em aprendizagem'],['stable','Consistentes'],['not-started','Sem histórico']
];
const emptyEvidence=assessSkillMasteryEvidence([]);
function isStable(evidence:SkillMasteryEvidence){
 return evidence.stage==='consistent'||evidence.stage==='retention-observed';
}

export default function SkillMasteryMap({lessons,evolutions,sampleLimited=false,onOpenLesson,onPractice}:{
 lessons:readonly LearningLesson[];evolutions:readonly SkillEvolution[];sampleLimited?:boolean;
 onOpenLesson:(lesson:LearningLesson)=>void;onPractice:(lessonId:string)=>void;
}){
 const [filter,setFilter]=useState<Filter>('all');
 const byLesson=useMemo(()=>new Map(evolutions.map(item=>[item.lessonId,item.mastery])),[evolutions]);
 const items=useMemo(()=>lessons.map(lesson=>({
  lesson,evidence:byLesson.get(lesson.id)??emptyEvidence,
  canPractice:Boolean(lessonGenerationPreset(lesson.id))
 })),[lessons,byLesson]);
 const countStable=items.filter(item=>isStable(item.evidence)).length;
 const countLearning=items.filter(item=>item.evidence.stage==='exploring'||item.evidence.stage==='developing').length;
 const countEmpty=items.filter(item=>item.evidence.stage==='no-evidence').length;
 const visible=items.filter(item=>filter==='all'
  ||filter==='not-started'&&item.evidence.stage==='no-evidence'
  ||filter==='needs-practice'&&(item.evidence.stage==='exploring'||item.evidence.stage==='developing')
  ||filter==='stable'&&isStable(item.evidence));
 return <section className="k-skill-map" aria-label="Mapa de domínio por habilidade">
  <div className="k-skill-map-head">
   <div><span className="overline"><BrainCircuit size={15} aria-hidden="true"/> PROGRESSO POR HABILIDADE</span>
    <h3>Mapa de domínio por habilidade</h3>
    <p>Uma visão formativa do seu aprendizado. Consistência e retenção exigem mais de uma prática; nenhum acerto isolado define domínio.</p></div>
   <div className="k-skill-map-stats" aria-label="Resumo das habilidades">
    <span><strong>{countLearning}</strong> em aprendizagem</span>
    <span><strong>{countStable}</strong> consistentes ou com retenção inicial</span>
    <span><strong>{countEmpty}</strong> sem histórico IA</span>
   </div>
  </div>
  <div className="k-skill-map-filters" role="group" aria-label="Filtrar evidências">
   {filters.map(([key,label])=><button type="button" key={key} aria-pressed={filter===key} className={filter===key?'selected':''} onClick={()=>setFilter(key)}>{label}</button>)}
  </div>
  {!visible.length?<div className="k-skill-map-empty" role="status">
   <BookOpenText size={18} aria-hidden="true"/><p>Não há habilidades nesta categoria. Continue praticando para reunir novas evidências.</p>
  </div>:<div className="k-skill-map-grid">
   {visible.map(({lesson,evidence,canPractice})=><article className={`k-skill-map-card is-${evidence.stage}`} key={lesson.id}>
    <div className="k-skill-map-card-heading">
     <strong>{lesson.topic}</strong><span className="k-skill-map-state">{evidence.label}</span>
    </div>
    <p className="k-skill-map-reason">{evidence.reason}</p>
    <div className="k-skill-map-card-meta">
     <span>{evidence.completedPractices} {evidence.completedPractices===1?'prática completa':'práticas completas'}</span>
     <span>{evidence.distinctPracticeDays} {evidence.distinctPracticeDays===1?'dia avaliado':'dias avaliados'}</span>
    </div>
    {evidence.latestLevels&&<div className="k-skill-map-levels" aria-label="Acertos por dificuldade na última sequência completa">
     <span>Básica {evidence.latestLevels.basic.correct}/{evidence.latestLevels.basic.answered}</span>
     <span>Intermediária {evidence.latestLevels.intermediate.correct}/{evidence.latestLevels.intermediate.answered}</span>
     <span>Avançada {evidence.latestLevels.advanced.correct}/{evidence.latestLevels.advanced.answered}</span>
    </div>}
    <p className="k-skill-map-next"><RotateCcw size={13} aria-hidden="true"/>{evidence.recommendation}</p>
    <div className="k-skill-map-actions">
     <button type="button" className="btn outline small" onClick={()=>onOpenLesson(lesson)}>Abrir aula <ArrowRight size={13}/></button>
     <button type="button" className="btn primary small" disabled={!canPractice} onClick={()=>onPractice(lesson.id)} title={!canPractice?'Aula ainda sem um tema validado para a geração por IA':undefined}>{canPractice?'Praticar 10 questões':'IA indisponível'}</button>
    </div>
   </article>)}
  </div>}
  <p className="k-skill-map-disclaimer">Resultados calculados apenas com respostas de IA verificadas no servidor. As sequências são agrupadas por tempo, não por um identificador persistente. Retenção inicial requer duas sequências completas com bom desempenho separadas por pelo menos 24 horas.{sampleLimited?' Os registros consultados representam uma amostra limitada do histórico.':''} Este mapa não é uma nota oficial nem um diagnóstico definitivo.</p>
 </section>;
}
