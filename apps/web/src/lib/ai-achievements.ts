/** Kognos XP is earned once per unique, recorded question.
 * Compute achievements from historical attempts rather than client counters.
 * All correct answers for demo questions are recomputed on the server. */
export type ScoredAnswer={
 id:string;correct:boolean;subject:string;mode:'practice'|'mock';createdAt:string;
};
export type AchievementBadge={
 id:string;title:string;description:string;progress:number;target:number;unlocked:boolean;
};
export type AchievementSummary={
 xp:number;level:number;nextLevelXP:number;
 answered:number;correct:number;incorrect:number;accuracy:number|null;
 mockAnswered:number;activeDays:number;streakDays:number;subjects:number;
 unlocked:number;badges:AchievementBadge[];sampleLimited:boolean;
};
const timeZone='America/Sao_Paulo';
function dateInBrazil(timestamp:string):string|null {
 const parsed=new Date(timestamp);
 if(!Number.isFinite(parsed.getTime()))return null;
 const p=new Intl.DateTimeFormat('en-US',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(parsed);
 const get=(type:string)=>p.find(x=>x.type===type)?.value;
 return `${get('year')}-${get('month')}-${get('day')}`;
}
function precedingDay(day:string):string{
 const time=Date.parse(day+'T12:00:00Z');
 return new Date(time-86400000).toISOString().slice(0,10);
}
function streakForDates(days:Set<string>,today:string):number{
 let day=days.has(today)?today:precedingDay(today),count=0;
 while(days.has(day)){count++;day=precedingDay(day);}
 return count;
}
function badge(id:string,title:string,description:string,progress:number,target:number):AchievementBadge{
 return {id,title,description,progress:Math.min(target,Math.max(0,progress)),target,unlocked:progress>=target};
}

/** Input must be authenticated, server-fetched rows. First recorded answer wins.
 * Invalid or duplicated attempts never add XP.
 */
export function buildAchievementSummary(rows:readonly ScoredAnswer[],now=new Date(),sampleLimited=false):AchievementSummary{
 const first=new Map<string,ScoredAnswer>();
 for(const row of [...rows].sort((a,b)=>a.createdAt.localeCompare(b.createdAt))){
  if(!row||!row.id||typeof row.correct!=='boolean'||!dateInBrazil(row.createdAt)||first.has(row.id))continue;
  first.set(row.id,row);
 }
 const attempts=[...first.values()];
 const correct=attempts.filter(x=>x.correct).length;
 const answered=attempts.length,incorrect=answered-correct;
 const xp=correct*10+incorrect*2;
 const days=new Set(attempts.map(a=>dateInBrazil(a.createdAt)).filter((v):v is string=>v!==null));
 const subjects=new Set(attempts.map(a=>a.subject).filter(Boolean)).size;
 const mockAnswered=attempts.filter(a=>a.mode==='mock').length;
 const today=dateInBrazil(now.toISOString())??'1970-01-01';
 const streakDays=streakForDates(days,today);
 const badges=[
  badge('first-answer','Primeiro passo','Conclua sua primeira questão.',answered,1),
  badge('first-correct','Primeiro acerto','Acerte uma questão.',correct,1),
  badge('five-answered','Em movimento','Conclua 5 questões.',answered,5),
  badge('ten-correct','Mente afiada','Acerte 10 questões diferentes.',correct,10),
  badge('twenty-five','Ritmo de estudo','Conclua 25 questões.',answered,25),
  badge('three-subjects','Explorador do saber','Estude 3 disciplinas.',subjects,3),
  badge('three-days','Constância','Estude em 3 dias diferentes.',days.size,3),
  badge('three-streak','Sequência de foco','Pratique por 3 dias consecutivos.',streakDays,3),
  badge('first-mock','Primeiro simulado','Responda a uma questão de simulado.',mockAnswered,1),
  badge('one-hundred-xp','Cem pontos','Acumule 100 XP.',xp,100),
 ];
 return {
  xp,level:1+Math.floor(xp/100),nextLevelXP:100,
  answered,correct,incorrect,accuracy:answered?Math.round(correct/answered*100):null,
  mockAnswered,activeDays:days.size,streakDays,subjects,
  unlocked:badges.filter(b=>b.unlocked).length,badges,sampleLimited
 };
}
