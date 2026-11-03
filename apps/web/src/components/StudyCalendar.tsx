'use client';

import {useEffect,useMemo,useState,type CSSProperties} from 'react';
import {
 ArrowRight,BookOpen,CalendarDays,Check,CheckCircle2,ChevronDown,
 ChevronLeft,ChevronRight,Clock3,FlaskConical,GraduationCap,
 Leaf,Plus,Sparkles,Target,Timer,Trash2,Download
} from 'lucide-react';
import type {StudyTask} from '@/lib/cloud-study-model';
import {getCloudTasks,setCloudTaskDone,setCloudTaskTime,deleteCloudTask} from '@/lib/cloud-study';
import {
 civilToday,dateAtNoon,dayTasks,formatDay,formatMonth,formatWeekday,
 normalTime,shiftCivilDate,shiftCivilMonth,subjectTone,surroundingWeek,timeRange,upcomingTasks,validCivilDate
} from '@/lib/calendar-model';
import type {KogStudyContext} from '@/lib/kog-study-context';

type Props={
 userId:string|null;
 onPlanner:(date:string)=>void;
 onTutor:()=>void;
 onContextChange:(context:KogStudyContext|null)=>void;
};
const demoStorageKey='kognos_tasks_v1_guest';
const weekdayNames=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

function TaskSubjectIcon({subject}:{subject:string}){
 const tone=subjectTone(subject);
 const normalized=subject.toLocaleLowerCase('pt-BR');
 const Icon=/bio/.test(normalized)?Leaf:
  /quim|quím/.test(normalized)?FlaskConical:
  /hist|geog/.test(normalized)?BookOpen:
  /mat|fis|fís/.test(normalized)?Target:GraduationCap;
 return <span className={`k-cal-subject-icon k-tone-${tone}`}><Icon size={21} strokeWidth={1.8} aria-hidden="true"/></span>;
}

export default function StudyCalendar({userId,onPlanner,onTutor,onContextChange}:Props){
 const [selected,setSelected]=useState(()=>civilToday());
 const [tasks,setTasks]=useState<StudyTask[]>([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState('');
 const [notice,setNotice]=useState('');
 const [busyId,setBusyId]=useState<string|null>(null);
 const [monthExpanded,setMonthExpanded]=useState(false);
 const [editing,setEditing]=useState<string|null>(null);
 const [times,setTimes]=useState<Record<string,string>>({});

 useEffect(()=>{
  let active=true;
  onContextChange({kind:'planner'});
  setLoading(true);setError('');
  async function load(){
   try{
    let rows:StudyTask[];
    if(userId)rows=await getCloudTasks(userId);
    else{
     const raw=localStorage.getItem(demoStorageKey);
     const parsed=raw?JSON.parse(raw):[];
     rows=Array.isArray(parsed)?parsed:[];
    }
    if(active)setTasks(rows);
   }catch(cause){
    if(active)setError(cause instanceof Error?cause.message:'Não foi possível carregar suas atividades.');
   }finally{
    if(active)setLoading(false);
   }
  }
  void load();
  return()=>{active=false;};
 },[userId,onContextChange]);

 const selectedData=useMemo(()=>dayTasks(tasks,selected),[tasks,selected]);
 const upcoming=useMemo(()=>upcomingTasks(tasks,selected,4),[tasks,selected]);
 const week=useMemo(()=>surroundingWeek(selected),[selected]);
 const minutesDone=selectedData.all.filter(t=>t.done).reduce((total,t)=>total+t.minutes,0);
 const rate=selectedData.all.length?100*selectedData.completed/selectedData.all.length:0;
 const totalMinutes=selectedData.minutes;
 const plannedHours=Math.floor(totalMinutes/60);
 const plannedMinutes=totalMinutes%60;
 const monthStart=useMemo(()=>{
  const d=dateAtNoon(selected);
  return new Date(d.getFullYear(),d.getMonth(),1,12);
 },[selected]);
 const grid=useMemo(()=>{
  const offset=monthStart.getDay(),days=new Date(monthStart.getFullYear(),monthStart.getMonth()+1,0).getDate();
  return Array.from({length:Math.ceil((offset+days)/7)*7},(_,i)=>{
   const day=i-offset+1;
   return day>=1&&day<=days?
    `${monthStart.getFullYear()}-${String(monthStart.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`:null;
  });
 },[monthStart]);

 function openDay(date:string){
  if(!validCivilDate(date))return;
  setSelected(date);setNotice('');setEditing(null);
 }
 async function mutate(item:StudyTask,action:'done'|'time'|'delete',value?:string|null){
  if(busyId)return;
  setBusyId(item.id);setError('');setNotice('');
  try{
   let next:StudyTask[];
   if(action==='done'){
    if(userId)await setCloudTaskDone(userId,item.id,!item.done);
    next=tasks.map(t=>t.id===item.id?{...t,done:!t.done}:t);
    setNotice(item.done?'Atividade marcada como pendente.':'Atividade concluída.');
   }else if(action==='time'){
    const time=value?normalTime(value):null;
    if(value&&!time)throw new Error('Escolha um horário válido.');
    if(userId)await setCloudTaskTime(userId,item.id,time);
    next=tasks.map(t=>t.id===item.id?(()=>{
     const updated={...t};
     if(time)updated.startTime=time;
     else delete updated.startTime;
     return updated;
    })():t);
    setNotice(time?'Horário atualizado.':'Atividade movida para Sem horário.');
    setEditing(null);
   }else{
    if(userId)await deleteCloudTask(userId,item.id);
    next=tasks.filter(t=>t.id!==item.id);
    setNotice('Atividade excluída.');
   }
   setTasks(next);
   if(!userId){
    try{localStorage.setItem(demoStorageKey,JSON.stringify(next));}
    catch{setError('A alteração apareceu na tela, mas o navegador não permitiu salvá-la.');}
   }
  }catch(cause){
   setError(cause instanceof Error?cause.message:'Não foi possível salvar a atividade.');
  }finally{
   setBusyId(null);
  }
 }
 function editTask(task:StudyTask){
  setEditing(v=>v===task.id?null:task.id);
  setTimes(old=>({...old,[task.id]:task.startTime||''}));
 }
 function renderTimeEditor(task:StudyTask){
  return <div className="k-cal-time-editor">
   <label htmlFor={`k-cal-time-${task.id}`}>Horário de início</label>
   <div className="k-cal-time-editor-actions">
    <input id={`k-cal-time-${task.id}`} type="time" step="60"
     value={times[task.id]??task.startTime??''}
     disabled={busyId!==null} onChange={event=>setTimes(old=>({...old,[task.id]:event.target.value}))}/>
    <button type="button" className="k-cal-save-time" onClick={()=>void mutate(task,'time',times[task.id]??task.startTime??'')}
     disabled={busyId!==null||!(times[task.id]??task.startTime)}><Check size={16}/> Salvar</button>
    {task.startTime&&<button type="button" className="k-cal-clear-time" onClick={()=>void mutate(task,'time',null)} disabled={busyId!==null}>Sem horário</button>}
    <button type="button" className="k-cal-delete-time" disabled={busyId!==null}
     onClick={()=>{if(window.confirm(`Excluir a atividade "${task.title}"?`))void mutate(task,'delete');}}
     aria-label={`Excluir atividade ${task.title}`}><Trash2 size={15}/> Excluir</button>
   </div>
  </div>;
 }
 function renderTaskCard(item:StudyTask){
  const tone=subjectTone(item.subject);
  return <article className={`k-cal-task-card k-tone-${tone} ${item.done?'is-done':''}`}>
   <TaskSubjectIcon subject={item.subject}/>
   <div className="k-cal-task-info">
    <strong>{item.title}</strong>
    <small>{item.subject} · {timeRange(item.startTime,item.minutes)||`${item.minutes} min · sem horário`}</small>
   </div>
   <div className="k-cal-task-actions">
    <button type="button" className="k-cal-check-task" aria-label={item.done?`Marcar ${item.title} como pendente`:`Concluir ${item.title}`}
     title={item.done?'Marcar pendente':'Concluir atividade'} aria-pressed={item.done}
     disabled={busyId!==null} onClick={()=>void mutate(item,'done')}>
     <CheckCircle2 size={19}/></button>
    <button type="button" className="k-cal-edit-task" aria-label={`Alterar horário de ${item.title}`}
     aria-expanded={editing===item.id} disabled={busyId!==null} onClick={()=>editTask(item)}>
     <Clock3 size={17}/></button>
   </div>
   {editing===item.id&&renderTimeEditor(item)}
  </article>;
 }

 return <main className="app-content k-calendar-page">
  <header className="k-cal-page-header">
   <div className="k-cal-heading"><span className="overline">ORGANIZE O SEU TEMPO</span><h1>Calendário</h1>
    <p>Suas atividades de estudo, em uma agenda feita para você.</p></div>
   <div className="k-cal-top-actions">
    <button type="button" className="k-cal-today" onClick={()=>openDay(civilToday())}>Hoje</button>
    <div className="k-cal-week-arrows">
     <button type="button" onClick={()=>openDay(shiftCivilDate(selected,-7))} aria-label="Semana anterior"><ChevronLeft size={19}/></button>
     <button type="button" onClick={()=>openDay(shiftCivilDate(selected,7))} aria-label="Próxima semana"><ChevronRight size={19}/></button>
    </div>
    <label className="k-cal-date-jump"><CalendarDays size={18}/><span>{formatMonth(selected)}</span>
     <input type="date" aria-label="Escolher outra data" value={selected}
      onChange={e=>openDay(e.target.value)}/></label>
    <button type="button" className="k-cal-add-button" onClick={()=>onPlanner(selected)}><Plus size={18}/> <span>Nova atividade</span></button>
   </div>
  </header>

  <section className="k-cal-date-strip" aria-label="Selecionar dia">
   <div className="k-cal-week-strip">{week.map(day=><button key={day} type="button"
    aria-pressed={day===selected} aria-label={new Intl.DateTimeFormat('pt-BR',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(dateAtNoon(day))}
    className={`k-cal-date-pill ${day===selected?'selected':''} ${day===civilToday()?'is-today':''}`}
    onClick={()=>openDay(day)}>
    <span>{formatWeekday(day)}</span><strong>{dateAtNoon(day).getDate()}</strong>
    {tasks.some(t=>t.date===day)&&<i aria-hidden="true"/>}
   </button>)}</div>
   <button type="button" className="k-cal-expand-month"
    aria-label={monthExpanded?'Fechar calendário mensal':'Abrir calendário mensal'}
    aria-expanded={monthExpanded} onClick={()=>setMonthExpanded(value=>!value)}>
    <ChevronDown size={20}/></button>
   {monthExpanded&&<div className="k-cal-month-expanded">
    <div className="k-cal-month-heading">
     <button type="button" aria-label="Mês anterior" onClick={()=>openDay(shiftCivilMonth(selected,-1))}><ChevronLeft size={18}/></button>
     <strong>{formatMonth(selected)}</strong>
     <button type="button" aria-label="Mês seguinte" onClick={()=>openDay(shiftCivilMonth(selected,1))}><ChevronRight size={18}/></button>
    </div>
    <div className="k-cal-month-grid">{weekdayNames.map(d=><span key={d}>{d}</span>)}
     {grid.map((date,index)=>date?<button key={date} type="button" className={date===selected?'selected':''}
       aria-pressed={date===selected} onClick={()=>{openDay(date);setMonthExpanded(false);}}>{Number(date.slice(-2))}
       {tasks.some(t=>t.date===date)&&<i/>}</button>:<span key={`gap-${index}`}/>)}
    </div>
   </div>}
  </section>

  {error&&<div role="alert" className="message warning k-cal-message">{error}</div>}
  {notice&&<div role="status" className="message success k-cal-message">{notice}</div>}

  <div className="k-cal-main-grid">
   <section className="k-cal-schedule" aria-labelledby="k-cal-schedule-title">
    <div className="k-cal-section-heading">
     <div><span className="overline">{formatDay(selected)}</span><h2 id="k-cal-schedule-title">Minha agenda</h2></div>
     <button type="button" className="k-cal-add-mini" onClick={()=>onPlanner(selected)} aria-label="Adicionar atividade"><Plus size={19}/></button>
    </div>
    {loading?<p className="k-cal-empty" role="status">Carregando suas atividades…</p>:
     selectedData.all.length===0?<div className="k-cal-empty">
      <CalendarDays size={34}/><h3>Seu dia está livre.</h3>
      <p>Nenhuma atividade registrada para esta data. Adicione uma sessão ou gere um plano de estudos.</p>
      <button type="button" className="k-cal-action" onClick={()=>onPlanner(selected)}><Plus size={17}/> Adicionar atividade</button>
     </div>:<>
      <div className="k-cal-timeline">
       {selectedData.timed.map(item=><div className="k-cal-time-row" key={item.id}>
        <span className="k-cal-time-marker">{normalTime(item.startTime)}</span>
        {renderTaskCard(item)}
       </div>)}
      </div>
      {selectedData.unscheduled.length>0&&<section className="k-cal-unscheduled" aria-label="Atividades sem horário">
       <div className="k-cal-subheading"><Clock3 size={17}/><h3>Sem horário definido</h3><span>{selectedData.unscheduled.length}</span></div>
       {selectedData.unscheduled.map(item=><div key={item.id} className="k-cal-time-row k-cal-unscheduled-row">
        <span className="k-cal-time-marker">—</span>
        {renderTaskCard(item)}
       </div>)}
      </section>}
     </>}
   </section>

   <aside className="k-cal-aside">
    <section className="k-cal-widget" aria-labelledby="k-cal-summary-title">
     <div className="k-cal-widget-head"><span className="k-cal-widget-icon"><Target size={20}/></span><h2 id="k-cal-summary-title">Resumo do dia</h2></div>
     <div className="k-cal-summary-body">
      <div className="k-cal-ring" style={{'--k-cal-progress':`${rate}%`} as CSSProperties}>
       <div><strong>{selectedData.completed}/{selectedData.all.length}</strong><small>concluídas</small></div>
      </div>
      <div className="k-cal-metrics">
       <div><CalendarDays size={17}/><span>{selectedData.all.length} atividades</span></div>
       <div><Timer size={17}/><span>{plannedHours? `${plannedHours}h `:''}${plannedMinutes? `${plannedMinutes}min`:plannedHours?'':'0min'} planejados</span></div>
       <div><CheckCircle2 size={17}/><span>{minutesDone} min concluídos</span></div>
      </div>
     </div>
    </section>
    <section className="k-cal-widget" aria-labelledby="k-cal-next-title">
     <div className="k-cal-widget-head k-cal-next-heading"><span className="k-cal-widget-icon"><CalendarDays size={20}/></span><h2 id="k-cal-next-title">Próximas atividades</h2></div>
     {upcoming.length===0?<p className="k-cal-upcoming-empty">Não há atividades pendentes a partir desta data.</p>:
      <div className="k-cal-upcoming-list">{upcoming.map(item=><button type="button" key={item.id} onClick={()=>openDay(item.date)} className="k-cal-upcoming-item">
       <TaskSubjectIcon subject={item.subject}/><span><strong>{item.title}</strong><small>{item.subject}{item.startTime?` · ${item.startTime}`:''}</small></span>
       <em>{new Intl.DateTimeFormat('pt-BR',{day:'numeric',month:'short'}).format(dateAtNoon(item.date))}</em>
      </button>)}</div>}
     <button type="button" className="k-cal-plan-link" onClick={()=>onPlanner(selected)}>Gerenciar meu plano <ArrowRight size={15}/></button>
    </section>
    <section className="k-cal-widget k-cal-kog-widget">
     <span className="k-cal-widget-icon"><Sparkles size={21}/></span>
     <div><strong>Organize seus estudos com o Kog</strong><p>Use o tutor para estruturar uma rotina que respeite seus objetivos.</p></div>
     <button type="button" onClick={onTutor}>Conversar com Kog <ArrowRight size={16}/></button>
    </section>
   </aside>
  </div>
  <p className="k-cal-source-note">A agenda mostra somente atividades reais do seu planejamento. Horários não definidos permanecem separados; os tempos são estimativas de estudo, não registros de tempo efetivo.</p>
 </main>;
}
