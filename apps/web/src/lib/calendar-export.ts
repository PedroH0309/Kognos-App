import type {StudyTask} from './cloud-study-model.ts';
import {normalTime,shiftCivilDate,validCivilDate} from './calendar-model.ts';

/** RFC 5545 importable snapshot. No account access, OAuth or background sync.
 * Timed events use floating local wall-clock time so iOS/Android interpret
 * them in the importing calendar's timezone. Tasks without time are all-day.
 */
function escapeText(v:string):string{
 return v.replace(/[\r\n]+/g,' ').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,');
}
function stamp(d:Date){return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');}
function day(value:string){return value.replace(/-/g,'');}
function datetime(date:string,hour:number,minute:number){
 return day(date)+'T'+String(hour).padStart(2,'0')+String(minute).padStart(2,'0')+'00';
}
export function createStudyCalendarICS(tasks:readonly StudyTask[],now=new Date()):string {
 const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Kognos//Study Planner//PT-BR',
  'CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:Kognos Estudos'];
 for(const item of tasks){
  if(!validCivilDate(item.date)||item.minutes<5||item.minutes>1440||!item.id)continue;
  const identifier=String(item.id).replace(/[^a-zA-Z0-9-]/g,'').slice(0,72);
  if(!identifier)continue;
  const event=['BEGIN:VEVENT',
   'UID:'+identifier+'-'+day(item.date)+'@kognos.app',
   'DTSTAMP:'+stamp(now),
   'SUMMARY:'+escapeText(item.subject+': '+item.title),
   'DESCRIPTION:'+escapeText('Kognos · '+item.minutes+' minutos planejados. '+(item.done?'Concluída.':'Pendente.')),
   'STATUS:CONFIRMED'
  ];
  const time=normalTime(item.startTime);
  if(time){
   const [h,m]=time.split(':').map(Number);
   const endMinutes=h*60+m+item.minutes;
   event.push('DTSTART:'+datetime(item.date,h,m));
   event.push('DTEND:'+datetime(shiftCivilDate(item.date,Math.floor(endMinutes/1440)),Math.floor(endMinutes/60)%24,endMinutes%60));
  }else{
   event.push('DTSTART;VALUE=DATE:'+day(item.date));
   event.push('DTEND;VALUE=DATE:'+day(shiftCivilDate(item.date,1)));
  }
  event.push('END:VEVENT');
  lines.push(...event);
 }
 lines.push('END:VCALENDAR');
 // RFC 5545: fold at 75 UTF-8 octets, counting the continuation space.
 const encoder=new TextEncoder();
 const folded:string[]=[];
 for(const raw of lines){
  let line='',size=0;
  for(const ch of raw){
   const bytes=encoder.encode(ch).length;
   if(size+bytes>75){folded.push(line);line=' '+ch;size=1+bytes;}
   else{line+=ch;size+=bytes;}
  }
  folded.push(line);
 }
 return folded.join('\r\n')+'\r\n';
}
export function downloadStudyCalendar(tasks:readonly StudyTask[]){
 if(!tasks.length)throw new Error('Adicione pelo menos uma atividade antes de exportar.');
 const content=createStudyCalendarICS(tasks);
 const file=new Blob([content],{type:'text/calendar;charset=utf-8'});
 const url=URL.createObjectURL(file);
 const link=document.createElement('a');
 link.href=url;link.download='kognos-agenda.ics';
 document.body.appendChild(link);link.click();link.remove();
 window.setTimeout(()=>URL.revokeObjectURL(url),3000);
}
