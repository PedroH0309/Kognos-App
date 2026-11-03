'use client';

import {Activity,ArrowRight,BookOpenText} from 'lucide-react';
import type {SkillEvolution} from '@/lib/skill-evolution';

function dayLabel(iso:string){
 const date=new Date(iso);
 return Number.isFinite(date.getTime())?date.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}):'Data indisponível';
}
export default function SkillEvolutionPanel({evolution,sampleLimited=false,onPractice,onTutor}:{
 evolution:SkillEvolution|null;sampleLimited?:boolean;onPractice:()=>void;onTutor:()=>void;
}){
 const blocks=evolution?.blocks??[];
 const mastery=evolution?.mastery;
 const change=evolution?.changePoints??null;
 const signal=change===null?'Aguardando duas sequências completas':
  change>0?`+${change} pontos percentuais`:
  `${change} pontos percentuais`;
 return <section className="k-skill-evolution" aria-label="Evolução de desempenho nesta habilidade">
  <header className="k-skill-evolution-heading">
   <div><span className="overline"><Activity size={14} aria-hidden="true"/> EVOLUÇÃO DA HABILIDADE</span>
    <h3>Seu progresso entre práticas</h3>
    <p>Compare suas respostas de IA nesta aula, incluindo questões básicas, intermediárias e avançadas.</p></div>
   {change!==null&&<span className={`k-skill-trend ${evolution?.direction??'same'}`}>{signal}</span>}
  </header>
  {mastery&&<div className={`k-skill-mastery-insight is-${mastery.stage}`} role="status">
   <div className="k-skill-mastery-insight-head"><strong>Indicador de domínio: {mastery.label}</strong>
    <span>{mastery.completedPractices} práticas completas · {mastery.distinctPracticeDays} dias de prática</span>
   </div>
   <p>{mastery.reason}</p>
   <p><b>Recomendação:</b> {mastery.recommendation}</p>
  </div>}
  {!blocks.length?<div className="k-skill-evolution-empty">
   <BookOpenText size={18} aria-hidden="true"/><p>As práticas de IA desta aula ainda não têm respostas suficientes para formar um histórico. Inicie uma sequência para acompanhar a evolução.</p>
  </div>:<>
   <div className="k-skill-evolution-scroll">
    <ol className="k-skill-evolution-list" aria-label="Blocos recentes de respostas, do mais antigo ao mais recente">
     {blocks.map((block,i)=><li key={block.startAt+'-'+i}>
      <div className="k-skill-evolution-row">
       <strong>{dayLabel(block.startAt)}</strong>
       <span>{block.correct}/{block.answered} acertos · {block.accuracy}%</span>
      </div>
      <div className="k-skill-evolution-track" role="progressbar" aria-label={`Acertos do bloco ${i+1}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={block.accuracy}>
       <span style={{width:`${block.accuracy}%`}}/>
      </div>
      <div className="k-skill-evolution-levels">
       <span>Básicas {block.difficulty.basic.correct}/{block.difficulty.basic.answered}</span>
       <span>Intermediárias {block.difficulty.intermediate.correct}/{block.difficulty.intermediate.answered}</span>
       <span>Avançadas {block.difficulty.advanced.correct}/{block.difficulty.advanced.answered}</span>
      </div>
      <small>{block.complete?'Sequência completa (3 + 4 + 3)':'Bloco parcial ou com distribuição diferente'}</small>
     </li>)}
    </ol>
   </div>
   <div className="k-skill-evolution-analysis" role="status">
    <strong>{change===null?'Comparação entre sequências ainda indisponível':`Variação observada: ${signal}`}</strong>
    <p>{change===null?'São necessárias duas sequências completas com a distribuição 3 básicas, 4 intermediárias e 3 avançadas para comparar os resultados.':
     'Comparação entre as duas últimas sequências completas. É uma diferença de acertos, não uma medida definitiva de aprendizagem ou domínio.'}</p>
    <p><b>Próximo passo:</b> {mastery?.recommendation??evolution?.recommendation??'Complete uma prática para receber orientação personalizada.'}</p>
   </div>
  </>}
  <div className="k-skill-evolution-actions">
   <button type="button" className="btn primary" onClick={onPractice}>Praticar mais 10 questões <ArrowRight size={15}/></button>
   <button type="button" className="btn outline" onClick={onTutor}>Estudar com Kog</button>
  </div>
  <p className="k-skill-evolution-disclaimer">Blocos inferidos pelo intervalo entre respostas (até 90 minutos), limitados a dez itens; não são sessões identificadas individualmente no banco. Apenas respostas IA corrigidas no servidor entram neste histórico.{sampleLimited?' O banco contém mais registros que a amostra consultada; o histórico pode estar incompleto.':''} O indicador não representa nota de vestibular nem estimativa TRI.</p>
 </section>;
}
