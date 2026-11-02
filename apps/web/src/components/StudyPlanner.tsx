'use client';
import {useState,useEffect} from 'react';
import {CalendarDays} from 'lucide-react';
import {validCivilDate} from '@/lib/calendar-model';
import { KognosDateField, KognosSelect, type KognosOption } from './KognosFields';
import type {StudentProfile} from '@/lib/profile';
import type {QuestionAttempt} from '@/lib/demo-questions';
import {getCloudAttempts} from '@/lib/cloud-study';
import {useAIStudyProgress} from '@/lib/use-ai-study-progress';
import {createAdaptiveWeekPlan,studyPriorities} from '@/lib/adaptive-week-plan';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {createCloudTasks,deleteCloudTask,getCloudTasks,setCloudTaskDone,type StudyTask} from '@/lib/cloud-study';

const subjects=['Matemática','Português','Biologia','Química','Física','História','Geografia'];
const subjectOptions = subjects.map(s=>({value:s,label:s})) as KognosOption<string>[];
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

export default function StudyPlanner({profile,userId,onContextChange,onTutor,initialDate,onCalendar}:{profile:StudentProfile;userId:string|null;onContextChange:(context:KogStudyContext|null)=>void;onTutor:()=>void;initialDate?:string;onCalendar?:()=>void}){
  const [tasks,setTasks]=useState<StudyTask[]>([]);
  const [title,setTitle]=useState('');const [subject,setSubject]=useState('Matemática');
  const [minutes,setMinutes]=useState(25);const [date,setDate]=useState('');const [startTime,setStartTime]=useState('');
  const [notice,setNotice]=useState('');const [error,setError]=useState('');
  const [loaded,setLoaded]=useState(false);const [busy,setBusy]=useState(false);
  const [history,setHistory]=useState<QuestionAttempt[]>([]);
  const [historyLoading,setHistoryLoading]=useState(true),[historyError,setHistoryError]=useState('');
  const {data:aiEvidence,loading:aiEvidenceLoading,error:aiEvidenceError}=useAIStudyProgress(userId);
  const priority=studyPriorities(history,aiEvidence);
  useEffect(()=>{
    let active=true;setLoaded(false);setError('');setNotice('');setTasks([]);setDate(initialDate&&validCivilDate(initialDate)?initialDate:localDate(new Date()));
    if(!userId){
      try{const raw=localStorage.getItem(taskStorageKey(null));if(active)setTasks(raw?JSON.parse(raw):[]);}
      catch{if(active)setTasks([]);}
      setLoaded(true);return()=>{active=false;};
    }
    getCloudTasks(userId).then(rows=>{if(active){setTasks(rows);setLoaded(true);}})
      .catch(e=>{if(active){setError(e instanceof Error?e.message:'Não foi possível consultar suas tarefas na nuvem.');setLoaded(false);}});
    return()=>{active=false;};
  },[userId,initialDate]);
  useEffect(()=>{
    let active=true;
    setHistory([]);setHistoryLoading(true);setHistoryError('');
    const load=async()=>{
      try{
        const data=userId?await getCloudAttempts(userId):JSON.parse(localStorage.getItem('kognos_demo_attempts_v1_guest')||'[]');
        if(active)setHistory(Array.isArray(data)?data:[]);
      }catch(e){if(active)setHistoryError(e instanceof Error?e.message:'Histórico de prática indisponível.');}
      finally{if(active)setHistoryLoading(false);}
    };
    void load();
    return()=>{active=false;};
  },[userId]);
  function commitLocal(next:StudyTask[]){setTasks(next);try{localStorage.setItem(taskStorageKey(null),JSON.stringify(next));}catch{setError('O navegador não permitiu salvar suas tarefas.');}}
  async function run(action:()=>Promise<void>){if(busy||!loaded)return;setBusy(true);setError('');try{await action();}catch(e){setError(e instanceof Error?e.message:'Erro ao salvar tarefa.');}finally{setBusy(false);}}
  function add(e:React.FormEvent){e.preventDefault();if(!title.trim()||!date)return;
    const item:StudyTask={id:crypto.randomUUID(),date,title:title.trim().slice(0,120),subject,minutes,done:false,kind:'manual',...(startTime?{startTime}:{})};
    void run(async()=>{if(userId)await createCloudTasks(userId,[item]);
      const next=[...tasks,item].sort((a,b)=>a.date.localeCompare(b.date));
      if(userId)setTasks(next);else commitLocal(next);
      setTitle('');setStartTime('');setNotice(userId?'Atividade salva na sua conta.':'Atividade salva neste dispositivo.');});
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
    const next=createAdaptiveWeekPlan(profile,tasks,history,aiEvidence);const oldIds=new Set(tasks.map(t=>t.id));const created=next.filter(t=>!oldIds.has(t.id));
    if(userId)await createCloudTasks(userId,created);
    if(userId)setTasks(next);else commitLocal(next);
    setNotice(created.length?`Adicionadas ${created.length} sessões com prioridades baseadas nos registros disponíveis. Ajuste o plano conforme sua rotina.`:'Não há novos dias ou minutos disponíveis nesta semana.');
  });}
  useEffect(()=>{onContextChange({kind:'planner'});},[onContextChange]);
  const pending=tasks.filter(t=>!t.done),done=tasks.filter(t=>t.done);
  const evidenceLoading=historyLoading||aiEvidenceLoading;
  const evidenceUnavailable=Boolean(historyError||aiEvidenceError);
  function askKog(taskId?:string){onContextChange(taskId?{kind:'planner',taskId}:{kind:'planner'});onTutor();}
  return <div className="app-content study-planner"><div className="page-intro"><span className="overline">ORGANIZAÇÃO INTELIGENTE</span><h1>Seu plano de <em>estudos.</em></h1><p>Uma agenda realista, flexível e respeitosa com seu tempo.</p>{onCalendar&&<button type="button" className="btn outline k-planner-calendar-link" onClick={onCalendar}><CalendarDays size={17}/> Ver calendário</button>}</div>
    <div className="message neutral">{userId?'As atividades são sincronizadas na sua conta. As sugestões consideram sua disponibilidade, erros recentes e assuntos ainda não praticados nas amostras disponíveis.':'As atividades ficam neste navegador; sugestões utilizam somente o histórico demonstrativo local.'} Isso não é uma avaliação de domínio nem uma previsão de prova.</div>
    {error&&<div className="message warning" role="alert">{error} {userId&&!loaded?'Verifique se aplicou a migração 0004 no Supabase.':''}</div>}
    {!loaded&&!error&&<p className="muted" role="status">Carregando sua agenda…</p>}
    <div className="stat-grid"><div className="stat-card"><span>ATIVIDADES PLANEJADAS</span><strong>{tasks.length}</strong></div><div className="stat-card"><span>CONCLUÍDAS</span><strong>{done.length}</strong></div><div className="stat-card"><span>PENDENTES</span><strong>{pending.length}</strong></div><div className="stat-card"><span>MINUTOS PLANEJADOS</span><strong>{tasks.reduce((sum,t)=>sum+t.minutes,0)}</strong></div></div>
    <section className="planner-intelligence dark-panel" aria-label="Prioridades identificadas para o planejamento">
      <div><span className="overline">PLANEJAMENTO COM EVIDÊNCIAS</span><h2>Por onde começar nesta semana</h2><p>{evidenceLoading?'Consultando os resultados salvos…':evidenceUnavailable?'Parte do histórico não pôde ser consultada. As prioridades podem refletir somente as informações disponíveis.':'Prioridades sugeridas a partir de questões respondidas e conteúdos introdutórios não praticados.'}</p></div>
      <div className="planner-intelligence-list">{priority.slice(0,3).map((item,index)=><div key={item.subject}><span className="planner-priority-number">{index+1}</span><div><strong>{item.subject}</strong><small>{item.topic} · {item.needsReview?'revisão indicada':'próxima prática sugerida'}</small></div></div>)}</div>
    </section>
    <div className="planner-grid"><section className="dark-panel"><h2>Minha agenda</h2><p className="muted">Marque atividades, exclua-as ou crie seu próprio plano.</p>{!tasks.length?<p className="empty-tasks">Ainda não há tarefas. Gere sugestões ou adicione sua primeira atividade.</p>:<div className="task-list">{tasks.map(t=><div key={t.id} className={`task-row ${t.done?'completed':''}`}><label><input disabled={busy||!loaded} type="checkbox" checked={t.done} onChange={e=>toggle(t,e.target.checked)}/><span><strong>{t.title}</strong><small>{new Date(t.date+'T12:00:00').toLocaleDateString('pt-BR')} · {t.subject} · {t.startTime?`${t.startTime} · `:''}{t.minutes} min · {t.kind==='manual'?'Criada por você':'Sugestão'}</small></span></label><div className="task-row-actions"><button type="button" className="task-kog-help" onClick={()=>askKog(t.id)} aria-label={`Pedir ajuda ao Kog para ${t.title}`}>Kog</button><button className="delete-task" disabled={busy||!loaded} aria-label={`Excluir ${t.title}`} onClick={()=>remove(t)}>✕</button></div></div>)}</div>}</section>
    <aside className="dark-panel"><h2>Planeje a semana</h2><p className="muted">Gere atividades com base no seu tempo disponível e nos assuntos que merecem atenção.</p><button className="btn primary full" disabled={!loaded||busy||evidenceLoading} onClick={generate}>{busy?'Salvando…':evidenceLoading?'Analisando histórico…':'Gerar plano por prioridades'}</button><button type="button" className="btn outline full" onClick={()=>askKog()}>Organizar minha semana com Kog</button><div className="section-divider"/><form className="field-stack" onSubmit={add}><h3>Adicionar atividade</h3><label>Atividade<input value={title} maxLength={120} required placeholder="Ex.: Revisar citologia" onChange={e=>setTitle(e.target.value)}/></label><KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={setSubject} /><div className="two-cols planner-form-grid"><KognosDateField label="Data" value={date} onChange={setDate} /><label>Duração (min)<input type="number" min={5} max={240} value={minutes} onChange={e=>setMinutes(Math.max(5,Math.min(240,Number(e.target.value)||5)))}/></label></div><label className="k-planner-start-time">Horário (opcional)<input type="time" value={startTime} onChange={e=>setStartTime(e.target.value)} step="60"/><small className="muted">Sem horário, a atividade aparece na lista de pendentes de agendamento.</small></label><button className="btn outline" disabled={!loaded||busy}>{busy?'Salvando…':'Adicionar tarefa'}</button></form></aside></div>
    {evidenceUnavailable&&<p role="status" className="privacy-note">Histórico parcial: {historyError||aiEvidenceError}. As atividades manuais continuam disponíveis.</p>}
    {notice&&<div className="message success" role="status">{notice}</div>}
  </div>;
}