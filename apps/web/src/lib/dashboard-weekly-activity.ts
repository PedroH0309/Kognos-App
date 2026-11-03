/** Render actual answered-practice activity, never invented learning metrics.
 * Dates are grouped in São Paulo civil days to match the Kognos XP calendar.
 */
export type WeeklyStudyPoint={date:string;day:string;count:number};
const weekdays=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'] as const;
export function brazilCivilDay(input:Date):string|null{
 if(!Number.isFinite(input.getTime()))return null;
 const parts=new Intl.DateTimeFormat('en-US',{
  timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'
 }).formatToParts(input);
 const value=(name:string)=>parts.find(p=>p.type===name)?.value;
 return `${value('year')}-${value('month')}-${value('day')}`;
}
export function weeklyStudyActivity(
 attempts:ReadonlyArray<{createdAt?:string}>,
 now:Date=new Date()
):WeeklyStudyPoint[]{
 const current=brazilCivilDay(now);
 if(!current)return [];
 // UTC noon avoids timezone/DST drift when enumerating adjacent civil dates.
 const anchor=Date.parse(current+'T12:00:00Z');
 const series=Array.from({length:7},(_,i)=>{
  const date=new Date(anchor-(6-i)*86400000);
  return {date:date.toISOString().slice(0,10),day:weekdays[date.getUTCDay()],count:0};
 });
 const index=new Map(series.map((day,i)=>[day.date,i]));
 for(const row of attempts){
  if(typeof row?.createdAt!=='string')continue;
  const date=brazilCivilDay(new Date(row.createdAt));
  const i=date?index.get(date):undefined;
  if(i!==undefined)series[i].count+=1;
 }
 return series;
}
