'use client';
import {useState,useEffect} from 'react';
import type {StudentProfile} from '@/lib/profile';
import {createCloudTasks,deleteCloudTask,getCloudTasks,setCloudTaskDone,type StudyTask} from '@/lib/cloud-study';

const subjects=['Matemática','Português','Biologia','Química','Física','História','Geografia'];
export function taskStorageKey(id:string|null){return 'kognos_tasks_v1_'+(id||'guest');}
function localDate(date:Date){const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,'0'),d=String(date.getDate()).padStart(2,'0');return `${y}-${m}-${d}`;}
export function createWeekPlan(p:StudentProfile,existing:StudyTask[],base=new Date()):StudyTask[]{
  const dates=new Set(existing.filter(t=>t.kind==='suggested').map(t=>t.date));
  const generated:StudyTask[]=[];
  for(let day=0;day<7;day++){
    const date=new Date(base.getFullYear(),base.getMonth(),base.getDate()+day);
    if(!p.weeklyDays.includes(date.getDay()))continue;
    const key=localDate(date);
    if(dates.has(key))continue;
    const subject=subjects[day%subjects.length];
    generated.push({id:crypto.randomUUID(),date:key,title:`Estudar ${subject} + praticar`,minutes:Math.min(p.sessionMinutes,p.dailyMinutes),done:false,kind:'suggested',subject});
  }
  return [...existing,...generated].sort((a,b)=>a.date.localeCompare(b.date));
}

export default function StudyPlanner({profile,userId}:{profile:StudentProfile;userId:string|null}){
  const [tasks,setTasks]=useState<StudyTask[]>([]);
  const [title,setTitle]=useState('');const [subject,setSubject]=useState('Matemática');
  const [minutes,setMinutes]=useState(25);const [date,setDate]=useState('');
  const [notice,setNotice]=useState('');const [error,setError]=useState('');
  const [loaded,setLoaded]=useState(false);const [busy,setBusy]=useState(false);
  useEffect(()=>{
    let active=true;setLoaded(false);setError('');setNotice('');setTasks([]);setDate(localDate(new Date()));
    if(!userId){
      try{const raw=localStorage.getItem(taskStorageKey(null));if(active)setTasks(raw?JSON.parse(raw):[]);}
      catch{if(active)setTasks([]);}
      setLoaded(true);return()=>{active=false;};
    }
    getCloudTasks(userId).then(rows=>{if(active){setTasks(rows);setLoaded(true);}})
      .catch(e=>{if(active){setError(e instanceof Error?e.message:'Não foi possível consultar suas tarefas na nuvem.');setLoaded(false);}});
    return()=>{active=false;};
  },[userId]);
  function commitLocal(next:StudyTask[]){setTasks(next);try{localStorage.setItem(taskStorageKey(null),JSON.stringify(next));}catch{setError('O navegador não permitiu salvar suas tarefas.');}}
  async function run(action:()=>Promise<void>){if(busy||!loaded)return;setBusy(true);setError('');try{await action();}catch(e){setError(e instanceof Error?e.message:'Erro ao salvar tarefa.');}finally{setBusy(false);}}
  function add(e:React.FormEvent){e.preventDefault();if(!title.trim()||!date)return;
    const item:StudyTask={id:crypto.randomUUID(),date,title:title.trim().slice(0,120),subject,minutes,done:false,kind:'manual'};
    void run(async()=>{if(userId)await createCloudTasks(userId,[item]);
      const next=[...tasks,item].sort((a,b)=>a.date.localeCompare(b.date));
      if(userId)setTasks(next);else commitLocal(next);
      setTitle('');setNotice(userId?'Atividade salva na sua conta.':'Atividade salva neste dispositivo.');});
  }
  function toggle(item:StudyTask,done:boolean){void run(async()=>{
    if(userId)await setCloudTaskDone(userId,item.id,done);
    const next=tasks.map(v=>v.id===item.id?{...v,done}:v);
    if(userId)setTasks(next);else commitLocal(next);
  });}
  function remove(item:StudyTask){void run(async()=>{
    if(userId)await deleteCloudTask(userId,item.id);
    const next=tasks.filter(v=>v.id!==item.id);
    if(userId)setTasks(next);else commitLocal(next);
    setNotice('Tarefa removida.');
  });}
  function generate(){void run(async()=>{
    const next=createWeekPlan(profile,tasks);const oldIds=new Set(tasks.map(t=>t.id));const created=next.filter(t=>!oldIds.has(t.id));
    if(userId)await createCloudTasks(userId,created);
    if(userId)setTasks(next);else commitLocal(next);
    setNotice(created.length?'Sugestões adicionadas; ajuste as tarefas conforme sua rotina.':'Não há novos dias disponíveis para planejar.');
  });}
  const pending=tasks.filter(t=>!t.done),done=tasks.filter(t=>t.done);
  return <div className="app-content study-planner"><div className="page-intro"><span className="overline">ORGANIZAÇÃO INTELIGENTE</span><h1>Seu plano de <em>estudos.</em></h1><p>Uma agenda realista, flexível e respeitosa com seu tempo.</p></div>
    <div className="message neutral">{userId?'As atividades desta conta são sincronizadas com o Supabase. O plano ainda usa a sua disponibilidade e será adaptado ao desempenho em uma etapa futura.':'Modo visitante: suas tarefas permanecem somente neste dispositivo. Crie uma conta para sincronizar um planejamento novo.'}</div>
    {error&&<div className="message warning" role="alert">{error} {userId&&!loaded?'Verifique se aplicou a migração 0004 no Supabase.':''}</div>}
    {!loaded&&!error&&<p className="muted" role="status">Carregando sua agenda…</p>}
    <div className="stat-grid"><div className="stat-card"><span>ATIVIDADES PLANEJADAS</span><strong>{tasks.length}</strong></div><div className="stat-card"><span>CONCLUÍDAS</span><strong>{done.length}</strong></div><div className="stat-card"><span>PENDENTES</span><strong>{pending.length}</strong></div><div className="stat-card"><span>MINUTOS PLANEJADOS</span><strong>{tasks.reduce((sum,t)=>sum+t.minutes,0)}</strong></div></div>
    <div className="planner-grid"><section className="dark-panel"><h2>Minha agenda</h2><p className="muted">Marque atividades, exclua-as ou crie seu próprio plano.</p>{!tasks.length?<p className="empty-tasks">Ainda não há tarefas. Gere sugestões ou adicione sua primeira atividade.</p>:<div className="task-list">{tasks.map(t=><div key={t.id} className={`task-row ${t.done?'completed':''}`}><label><input disabled={busy||!loaded} type="checkbox" checked={t.done} onChange={e=>toggle(t,e.target.checked)}/><span><strong>{t.title}</strong><small>{new Date(t.date+'T12:00:00').toLocaleDateString('pt-BR')} · {t.subject} · {t.minutes} min · {t.kind==='manual'?'Criada por você':'Sugestão'}</small></span></label><button className="delete-task" disabled={busy||!loaded} aria-label={`Excluir ${t.title}`} onClick={()=>remove(t)}>✕</button></div>)}</div>}</section>
    <aside className="dark-panel"><h2>Planeje a semana</h2><p className="muted">Crie tarefas ou gere uma sugestão com base no seu tempo disponível.</p><button className="btn primary full" disabled={!loaded||busy} onClick={generate}>{busy?'Salvando…':'Gerar sugestões da semana'}</button><div className="section-divider"/><form className="field-stack" onSubmit={add}><h3>Adicionar atividade</h3><label>Atividade<input value={title} maxLength={120} required placeholder="Ex.: Revisar citologia" onChange={e=>setTitle(e.target.value)}/></label><label>Disciplina<select value={subject} onChange={e=>setSubject(e.target.value)}>{subjects.map(s=><option key={s}>{s}</option>)}</select></label><div className="two-cols"><label>Data<input type="date" required value={date} onChange={e=>setDate(e.target.value)}/></label><label>Duração (min)<input type="number" min={5} max={240} value={minutes} onChange={e=>setMinutes(Math.max(5,Math.min(240,Number(e.target.value)||5)))}/></label></div><button className="btn outline" disabled={!loaded||busy}>{busy?'Salvando…':'Adicionar tarefa'}</button></form></aside></div>
    {notice&&<div className="message success" role="status">{notice}</div>}
  </div>;
}
