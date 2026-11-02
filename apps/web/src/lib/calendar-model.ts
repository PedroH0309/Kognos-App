import type {StudyTask} from './cloud-study-model.ts';

/** Calendar dates are civil YYYY-MM-DD values, not UTC instants.
 * Working at local noon prevents date-only strings shifting to yesterday
 * when the browser is in Brazil or another negative UTC offset.
 */
export function validCivilDate(value:string):boolean{
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
 const [year,month,day]=value.split('-').map(Number);
 const d=new Date(year,month-1,day,12,0,0);
 return d.getFullYear()===year&&d.getMonth()===month-1&&d.getDate()===day;
}
export function civilToday(now=new Date()):string{
 return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}
export function dateAtNoon(iso:string):Date{
 if(!validCivilDate(iso))throw new Error('Data inválida.');
 const [year,month,day]=iso.split('-').map(Number);
 return new Date(year,month-1,day,12);
}
export function shiftCivilDate(iso:string,offset:number):string{
 const d=dateAtNoon(iso);
 d.setDate(d.getDate()+offset);
 return civilToday(d);
}
/** Keeps a valid day when changing months, including Dec/Jan and Feb/Mar. */
export function shiftCivilMonth(iso:string,offset:number):string{
 const d=dateAtNoon(iso);
 const target=new Date(d.getFullYear(),d.getMonth()+offset,1,12);
 const max=new Date(target.getFullYear(),target.getMonth()+1,0).getDate();
 target.setDate(Math.min(d.getDate(),max));
 return civilToday(target);
}
export function surroundingWeek(iso:string):string[]{
 return Array.from({length:7},(_,index)=>shiftCivilDate(iso,index-3));
}
export function formatMonth(iso:string):string{
 return new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(dateAtNoon(iso));
}
export function formatDay(iso:string):string{
 return new Intl.DateTimeFormat('pt-BR',{weekday:'short',day:'numeric',month:'short'}).format(dateAtNoon(iso));
}
export function formatWeekday(iso:string):string{
 return ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'][dateAtNoon(iso).getDay()];
}
export function normalTime(value:unknown):string|null{
 if(typeof value!=='string'||!/^\d{2}:\d{2}(?::\d{2})?$/.test(value))return null;
 const [hour,minute,second='00']=value.split(':').map(Number);
 if(hour>23||minute>59||second>59)return null;
 return `${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}`;
}
export function timeRange(time:unknown,minutes:number):string|null{
 const start=normalTime(time);
 if(!start)return null;
 const [hour,minute]=start.split(':').map(Number);
 const total=hour*60+minute+Math.max(0,minutes);
 const end=`${String(Math.floor(total/60)%24).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;
 return `${start} – ${end}${total>=1440?' (+1 dia)':''}`;
}
const sorted=(a:StudyTask,b:StudyTask)=>
 a.date.localeCompare(b.date)||
 (normalTime(a.startTime)||'99:99').localeCompare(normalTime(b.startTime)||'99:99')||
 a.title.localeCompare(b.title,'pt-BR');
export function dayTasks(tasks:readonly StudyTask[],date:string){
 const today=tasks.filter(t=>t.date===date).sort(sorted);
 return {timed:today.filter(t=>normalTime(t.startTime)!==null),
  unscheduled:today.filter(t=>normalTime(t.startTime)===null),
  all:today,completed:today.filter(t=>t.done).length,
  minutes:today.reduce((sum,t)=>sum+Math.max(0,t.minutes),0)};
}
export function upcomingTasks(tasks:readonly StudyTask[],date:string,limit=4):StudyTask[]{
 return tasks.filter(t=>!t.done&&t.date>=date).sort(sorted).slice(0,limit);
}
export type SubjectTone='navy'|'violet'|'cyan'|'green';
export function subjectTone(subject:string):SubjectTone{
 const s=subject.toLocaleLowerCase('pt-BR');
 if(/bio|quím|quim|nature/.test(s))return 'green';
 if(/fis|fís|geog/.test(s))return 'cyan';
 if(/mat|red|port|ling|hist/.test(s))return 'violet';
 return 'navy';
}
