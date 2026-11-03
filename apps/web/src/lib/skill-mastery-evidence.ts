import type {Difficulty} from './exam-blueprints.ts';
import type {SkillPracticeBlock} from './skill-evolution.ts';

/** Formative evidence, not psychometrically calibrated proficiency or exam score.
 * Accept only inferred blocks that were built from owner-scoped server grading.
 */
export type SkillMasteryStage='no-evidence'|'exploring'|'developing'|'consistent'|'retention-observed';
export type SkillMasteryEvidence={
 stage:SkillMasteryStage;label:string;
 completedPractices:number;distinctPracticeDays:number;
 lastPracticedAt:string|null;latestCompleteAccuracy:number|null;
 latestLevels:Record<Difficulty,{answered:number;correct:number}>|null;
 recommendation:string;reason:string;
};
const stageLabels:Record<SkillMasteryStage,string>={
 'no-evidence':'Sem histórico de IA',
 'exploring':'Primeiras tentativas',
 'developing':'Em desenvolvimento',
 'consistent':'Desempenho consistente',
 'retention-observed':'Retenção inicial observada'
};
const HOURS_24=24*60*60*1000;
function meetsBasicEvidence(block:SkillPracticeBlock):boolean{
 return block.complete&&block.correct>=7
  &&block.difficulty.basic.correct>=2&&block.difficulty.intermediate.correct>=2
  &&block.difficulty.advanced.correct>=1;
}
function meetsStrongEvidence(block:SkillPracticeBlock):boolean{
 return block.complete&&block.correct>=8
  &&block.difficulty.basic.correct>=2&&block.difficulty.intermediate.correct>=3
  &&block.difficulty.advanced.correct>=2;
}
function nextAction(block:SkillPracticeBlock|null,stage:SkillMasteryStage):string{
 if(stage==='no-evidence')return 'Comece uma prática inédita de 10 questões desta aula.';
 if(!block)return 'Conclua a sequência gradual para identificar quais níveis precisam de reforço.';
 if(stage==='retention-observed')return 'Mantenha revisões espaçadas e pratique em outra data para confirmar a retenção.';
 if(stage==='consistent')return 'Retorne em outro dia para verificar se o desempenho se mantém após um intervalo.';
 if(block.difficulty.basic.correct<2)return 'Reestude os conceitos fundamentais com o Kog e resolva novas questões básicas.';
 if(block.difficulty.intermediate.correct<3)return 'Reforce questões intermediárias com explicação e correção passo a passo.';
 if(block.difficulty.advanced.correct<2)return 'Pratique situações avançadas e depois repita o teste em outro dia.';
 return 'Faça outra sequência gradual para verificar estabilidade antes de avançar.';
}
export function assessSkillMasteryEvidence(blocks:readonly SkillPracticeBlock[]):SkillMasteryEvidence{
 const complete=blocks.filter(b=>b.complete&&Number.isFinite(Date.parse(b.endAt)));
 const latest=complete.at(-1)??null;
 const previous=complete.at(-2)??null;
 const completedPractices=complete.length;
 const distinctPracticeDays=new Set(complete.map(b=>b.endAt.slice(0,10))).size;
 const sufficient=Boolean(previous&&latest&&meetsBasicEvidence(previous)&&meetsBasicEvidence(latest));
 const strong=Boolean(previous&&latest&&meetsStrongEvidence(previous)&&meetsStrongEvidence(latest));
 const separated=Boolean(previous&&latest&&Date.parse(latest.endAt)-Date.parse(previous.endAt)>=HOURS_24);
 const stage:SkillMasteryStage=!blocks.length?'no-evidence':
  !completedPractices?'exploring':
  strong&&separated?'retention-observed':
  sufficient?'consistent':'developing';
 let reason:string;
 if(stage==='no-evidence')reason='Nenhuma tentativa de IA corrigida foi registrada nesta habilidade.';
 else if(stage==='exploring')reason='Há respostas registradas, mas nenhuma sequência completa e comparável de 10 questões.';
 else if(stage==='developing')reason=`${completedPractices} sequência(s) completa(s). Ainda faltam duas sequências recentes com bom desempenho em todos os níveis.`;
 else if(stage==='consistent')reason='As duas últimas sequências completas têm desempenho suficiente nos níveis básico, intermediário e avançado; a retenção em dias diferentes ainda precisa ser verificada.';
 else reason='As duas últimas sequências completas tiveram bom desempenho em todos os níveis e foram realizadas com intervalo de pelo menos 24 horas.';
 return {stage,label:stageLabels[stage],completedPractices,distinctPracticeDays,
  lastPracticedAt:blocks.at(-1)?.endAt??null,latestCompleteAccuracy:latest?.accuracy??null,
  latestLevels:latest?.difficulty??null,recommendation:nextAction(latest,stage),reason};
}

/** Prioritize active but insufficient evidence, then repeat successful skills
 * after a spaced interval. Never convert a status into a fixed IQ/exam score.
 */
export function prioritySkillLessonId(
 lessons:readonly {id:string}[], mastery:ReadonlyMap<string,SkillMasteryEvidence>,
 now:Date=new Date()
):string|null{
 const nowMs=now.getTime();
 const candidates=lessons.map((lesson,index)=>{
  const evidence=mastery.get(lesson.id);
  if(!evidence||evidence.stage==='no-evidence')return null;
  const days=evidence.lastPracticedAt?Math.max(0,(nowMs-Date.parse(evidence.lastPracticedAt))/86400000):0;
  const rank=evidence.stage==='exploring'?0:
   evidence.stage==='developing'?1:
   evidence.stage==='consistent'&&days>=1?2:
   evidence.stage==='retention-observed'&&days>=7?3:10;
  return {id:lesson.id,rank,index};
 }).filter((x):x is {id:string;rank:number;index:number}=>Boolean(x&&x.rank<10));
 candidates.sort((a,b)=>a.rank-b.rank||a.index-b.index);
 return candidates[0]?.id??null;
}
