import type {Difficulty} from './exam-blueprints.ts';

/** These are inferred practice blocks, not persisted session identifiers.
 * Only server-verified, owner-scoped attempts may enter this model.
 */
export type VerifiedSkillAttempt={
 questionId:string;difficulty:Difficulty;correct:boolean;createdAt:string;
};
export type DifficultyEvidence={answered:number;correct:number};
export type SkillPracticeBlock={
 startAt:string;endAt:string;answered:number;correct:number;accuracy:number;
 difficulty:Record<Difficulty,DifficultyEvidence>;
 complete:boolean;
};
export type SkillEvolution={
 lessonId:string;blocks:SkillPracticeBlock[];comparableBlocks:number;
 changePoints:number|null;direction:'higher'|'lower'|'same'|'insufficient';
 recommendation:string;
};
const levels:readonly Difficulty[]=['basic','intermediate','advanced'];
const INTERVAL_MS=90*60*1000;
const MAX_ITEMS_PER_BLOCK=10;
const makeEvidence=():Record<Difficulty,DifficultyEvidence>=>({
 basic:{answered:0,correct:0},intermediate:{answered:0,correct:0},advanced:{answered:0,correct:0}
});
function makeBlock(rows:readonly VerifiedSkillAttempt[]):SkillPracticeBlock {
 const difficulty=makeEvidence();
 let correct=0;
 for(const row of rows){
  difficulty[row.difficulty].answered++;
  if(row.correct){correct++;difficulty[row.difficulty].correct++;}
 }
 const answered=rows.length;
 const complete=answered===10
  &&difficulty.basic.answered===3&&difficulty.intermediate.answered===4
  &&difficulty.advanced.answered===3;
 return {startAt:rows[0].createdAt,endAt:rows[rows.length-1].createdAt,
  answered,correct,accuracy:Math.round(correct*100/answered),difficulty,complete};
}
export function recommendNextSkillStep(block:SkillPracticeBlock|null):string {
 if(!block)return 'Resolva uma sequência completa de 10 questões para receber uma recomendação por nível.';
 if(!block.complete)return 'Conclua a sequência progressiva antes de avaliar o próximo nível.';
 if(block.difficulty.basic.correct<2)return 'Retome os fundamentos desta aula com o Kog e pratique questões básicas inéditas.';
 if(block.difficulty.intermediate.correct<3)return 'Priorize problemas intermediários com explicações passo a passo e correção comentada.';
 if(block.difficulty.advanced.correct<2)return 'Você já pode reforçar os desafios avançados, sem pular as revisões.';
 return 'Bom desempenho nesta sequência: programe revisão espaçada e tente outra rodada para confirmar a retenção.';
}
export function inferSkillEvolution(lessonId:string,attempts:readonly VerifiedSkillAttempt[]):SkillEvolution {
 const valid=attempts.filter(a=>a&&levels.includes(a.difficulty)&&typeof a.questionId==='string'
  &&Number.isFinite(Date.parse(a.createdAt))&&typeof a.correct==='boolean')
  .sort((a,b)=>Date.parse(a.createdAt)-Date.parse(b.createdAt)
   ||a.questionId.localeCompare(b.questionId));
 const groups:VerifiedSkillAttempt[][]=[];
 for(const item of valid){
  const last=groups[groups.length-1],previous=last?.[last.length-1];
  const gap=previous?Date.parse(item.createdAt)-Date.parse(previous.createdAt):Infinity;
  if(!last||last.length>=MAX_ITEMS_PER_BLOCK||gap>INTERVAL_MS)groups.push([item]);
  else last.push(item);
 }
 const blocks=groups.map(makeBlock);
 const comparable=blocks.filter(b=>b.complete);
 const previous=comparable.at(-2),latest=comparable.at(-1);
 const changePoints=latest&&previous?latest.accuracy-previous.accuracy:null;
 const direction:SkillEvolution['direction']=changePoints===null?'insufficient'
  :changePoints>=10?'higher':changePoints<=-10?'lower':'same';
 return {lessonId,blocks:blocks.slice(-6),comparableBlocks:comparable.length,
  changePoints,direction,recommendation:recommendNextSkillStep(latest??blocks.at(-1)??null)};
}
