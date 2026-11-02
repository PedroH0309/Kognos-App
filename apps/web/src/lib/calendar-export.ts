import type {StudyTask} from './cloud-study-model.ts';
import {normalTime,shiftCivilDate,validCivilDate} from './calendar-model.ts';

function escapeICS(value:string):string{
 return value.replace(/\\/g,'\\\\').replace(/\r\n|\r|\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');
}
function dateCode(value:string):string{return value.replace(/-/g,'');}
function stamp(date:Date):string{return date.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');}

/** Portable calendar snapshot. Importing it does not establish continuous sync. */
export function exportStudyCalendar(tasks:readonly StudyTask[],created=new Date()):string{
 const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Kognos//Estudos//PT',
  'CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:Kognos - Estudos'];
 for(const task of tasks){
  if(!validCivilDate(task.date)||!Number.isFinite(task.minutes)||task.minutes<=0)continue;
  const time=normalTime(task.startTime);
  const safeId=task.id.replace(/[^a-zA-Z0-9_-]/g,'').slice(0,100)||'task';
  lines.push('BEGIN:VEVENT','UID:kognos-'+safeId+'-'+dateCode(task.date)+'@calendar.kognos',
   'DTSTAMP:'+stamp(created));
  if(time){
   const [hour,minute]=time.split(':').map(Number);
   const total=hour*60+minute+Math.round(task.minutes);
   const endDay=shiftCivilDate(task.date,Math.floor(total/1440));
   const endHour=String(Math.floor(total%1440/60)).padStart(2,'0');
   const endMinute=String(total%60).padStart(2,'0');
   lines.push('DTSTART:'+dateCode(task.date)+'T'+time.replace(':','')+'00',
    'DTEND:'+dateCode(endDay)+'T'+endHour+endMinute+'00');
  }else{
   lines.push('DTSTART;VALUE=DATE:'+dateCode(task.date),
    'DTEND;VALUE=DATE:'+dateCode(shiftCivilDate(task.date,1)));
  }
  lines.push('SUMMARY:'+escapeICS(task.title),
   'DESCRIPTION:'+escapeICS('Disciplina: '+task.subject+'\nDuração prevista: '+task.minutes+
   ' minutos\nStatus: '+(task.done?'Concluída':'Pendente')+
   '\nExportação Kognos: modificações posteriores não sincronizam automaticamente.'),
   'END:VEVENT');
 }
 return [...lines,'END:VCALENDAR',''].join('\r\n');
}
