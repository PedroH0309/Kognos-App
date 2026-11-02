import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const app=read('apps/web/src/components/KognosApp.tsx');
const calendar=read('apps/web/src/components/StudyCalendar.tsx');
const planner=read('apps/web/src/components/StudyPlanner.tsx');
const style=read('apps/web/src/app/kognos-calendar.css');
const layout=read('apps/web/src/app/layout.tsx');
const migration=read('supabase/migrations/0011_calendar_task_times.sql');
const cloud=read('apps/web/src/lib/cloud-study.ts');

test('real calendar replaces the coming-soon placeholder and is reachable on mobile and desktop',()=>{
 assert.ok(!app.includes("{key:'calendar',icon:'▣',label:'Calendário',status:'Em construção'}"));
 assert.match(app,/view==='calendar'\?<StudyCalendar/);
 assert.match(app,/NAV_SECONDARY:View\[\]=\['calendar','plans'/);
 assert.match(app,/\['dashboard','learn','questions','calendar','profile'\]/);
 assert.match(app,/v==='calendar'\?'Plano'/);
 assert.match(app,/onPlanner=\{openPlannerForDate\}/);
 assert.match(app,/onCalendar=\{\(\)=>navigate\('calendar'\)\}/);
 assert.match(planner,/initialDate\?\:string/);
 assert.match(planner,/Horário \(opcional\)/);
});

test('calendar selects dates and uses real persisted tasks without sample sessions',()=>{
 for(const part of ['getCloudTasks','setCloudTaskDone','setCloudTaskTime','deleteCloudTask',
  'dayTasks(tasks,selected)','upcomingTasks(tasks,selected,4)','surroundingWeek(selected)',
  'onClick={()=>onPlanner(selected)}','onClick={()=>openDay(day)}','renderTaskCard(item)']){
  assert.ok(calendar.includes(part),part);
 }
 assert.match(calendar,/selectedData\.unscheduled/);
 assert.match(calendar,/aria-label="Selecionar dia"/);
 assert.match(calendar,/monthExpanded\?\x27Fechar calendário mensal\x27:\x27Abrir calendário mensal\x27/);
 assert.match(calendar,/type="time"/);
 assert.match(calendar,/type="date"/);
 assert.match(calendar,/Concluir atividade/);
 assert.match(calendar,/Nenhuma atividade registrada/);
 assert.ok(!calendar.includes("Matemática',time:'08:00"));
 assert.ok(!calendar.includes('Math.random('));
});

test('calendar time column migration is nullable, idempotent and does not weaken RLS',()=>{
 assert.match(migration,/add column if not exists start_time time without time zone/);
 assert.match(migration,/null/i);
 assert.ok(!migration.includes('disable row level security'));
 assert.ok(!migration.includes('create policy'));
 assert.match(cloud,/setCloudTaskTime/);
 assert.match(cloud,/calendarSchemaMissing/);
 assert.match(cloud,/select\('id,user_id,task_date,title,duration_minutes,done,kind,subject'\)/);
 assert.match(cloud,/0011_calendar_task_times\.sql/);
});

test('desktop and mobile calendar match Kognos palette and existing dark navigation',()=>{
 assert.ok(layout.indexOf('import "./kognos-calendar.css"')>layout.indexOf('import "./kognos-profile-planner-fixes.css"'));
 assert.match(style,/\.k-cal-main-grid/);
 assert.match(style,/\.k-cal-date-pill\.selected/);
 assert.match(style,/\.k-cal-timeline/);
 assert.match(style,/\.k-cal-widget/);
 assert.match(style,/\.k-cal-ring/);
 assert.match(style,/\.k-cal-unscheduled/);
 assert.match(style,/@media\(max-width:920px\)/);
 assert.match(style,/@media\(max-width:530px\)/);
 assert.match(style,/\.app-layout\.theme-dark \.k-calendar-page/);
 assert.match(style,/prefers-reduced-motion:reduce/);
 for(const color of ['#101B33','#273A61','#5B4DE3','#38CDE5','#F7F9FC','#18B78A'])assert.ok(style.includes(color),color);
});

test('study summary is based on saved activity data, never fictitious hours',()=>{
 assert.match(calendar,/const minutesDone=selectedData\.all\.filter/);
 assert.match(calendar,/const totalMinutes=selectedData\.minutes/);
 assert.match(calendar,/const rate=selectedData\.all\.length\?100/);
 assert.match(calendar,/A agenda mostra somente atividades reais/);
});
