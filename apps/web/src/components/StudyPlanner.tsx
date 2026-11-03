'use client';
import {useState,useEffect} from 'react';
import {CalendarDays} from 'lucide-react';
import StudySyllabus from './StudySyllabus';
import {suggestSyllabusTopicSchedule,pendingTopicTask} from '@/lib/syllabus-quick-schedule';
import {activeSyllabi} from '@/lib/exam-syllabus';
import {completeExamTopicCatalog} from '@/lib/exam-blueprints';
import {syllabusWithVerifiedTopics,type VerifiedStudyTopic} from '@/lib/verified-study-catalog';
import {validCivilDate} from '@/lib/calendar-model';
import { KognosDateField, KognosSelect, type KognosOption } from './KognosFields';
import type {StudentProfile} from '@/lib/profile';
import type {KogStudyContext} from '@/lib/kog-study-context';
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

export default function StudyPlanner({profile,userId,onContextChange,onTutor}:{profile:StudentProfile;userId:string|null;onContextChange:(context:KogStudyContext|null)=>void;onTutor:()=>void}){
  const [tasks,setTasks]=useState<StudyTask[]>([]);
  const [title,setTitle]=useState('');const [subject,setSubject]=useState('Matemática');
  const [minutes,setMinutes]=useState(25);const [date,setDate]=useState('');const [startTime,setStartTime]=useState('');
  const [notice,setNotice]=useState('');const [error,setError]=useState('');
  const [loaded,setLoaded]=useState(false);const [busy,setBusy]=useState(false);
  const [history,setHistory]=useState<QuestionAttempt[]>([]);
  const [historyLoading,setHistoryLoading]=useState(true),[historyError,setHistoryError]=useState('');
  const [weeklyTopics,setWeeklyTopics]=useState<WeeklyExamWeakTopic[]>([]);
  const [weeklyLoading,setWeeklyLoading]=useState(false),[weeklyError,setWeeklyError]=useState('');
  const [officialTopics,setOfficialTopics]=useState<VerifiedStudyTopic[]>([]);
  const [officialLoading,setOfficialLoading]=useState(false),[officialError,setOfficialError]=useState('');
  const {data:aiEvidence,loading:aiEvidenceLoading,error:aiEvidenceError}=useAIStudyProgress(userId);
  const priority=studyPriorities(history,aiEvidence);
  const examScope=activeSyllabi(profile);
  const examScopeKey=examScope.join('|');
  const examSubjects=Object.keys(syllabusWithVerifiedTopics(completeExamTopicCatalog(examScope),examScope,officialTopics));
  const permittedSubjects=examSubjects.length?examSubjects:subjects;
  const subjectOptions=[...new Set([...permittedSubjects,...tasks.map(t=>t.subject)])]
   .map(s=>({value:s,label:s})) as KognosOption<string>[];

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
  useEffect(()=>{
    let active=true;setWeeklyTopics([]);setWeeklyError('');
    if(!userId)return()=>{active=false;};
    setWeeklyLoading(true);
    const load=async()=>{
      try{
       const sb=getSupabase();
       if(!sb)throw Error('Nuvem não configurada.');
       const {data}=await sb.auth.getSession();
       if(!data.session||data.session.user.id!==userId)throw Error('Sessão expirada.');
       const response=await fetch('/api/weekly-exam',{cache:'no-store',
        headers:{Authorization:'Bearer '+data.session.access_token}});
       if(!response.ok)throw Error('Não foi possível carregar os assuntos da reavaliação.');
       const payload=await response.json();
       if(active)setWeeklyTopics(Array.isArray(payload.weakTopics)?payload.weakTopics.filter((item:WeeklyExamWeakTopic)=>
        item&&typeof item.subject==='string'&&typeof item.topic==='string'&&typeof item.incorrect==='number'
        &&item.incorrect>=0&&typeof item.lastWrong==='boolean'):[]);
      }catch(e){if(active)setWeeklyError(e instanceof Error?e.message:'Sem dados semanais.');}
      finally{if(active)setWeeklyLoading(false);}
    };
    void load();
    return()=>{active=false;};
  },[userId,profile.examFocus]);
  useEffect(()=>{
    let active=true;setOfficialTopics([]);setOfficialError('');
    if(!userId)return()=>{active=false;};
    setOfficialLoading(true);
    const load=async()=>{
      try{
       const sb=getSupabase();if(!sb)throw new Error('Nuvem não configurada.');
       const {data}=await sb.auth.getSession();
       if(!data.session||data.session.user.id!==userId)throw new Error('Sessão expirada.');
       const response=await fetch('/api/exam-sources',{cache:'no-store',
        headers:{Authorization:'Bearer '+data.session.access_token}});
       if(!response.ok)throw new Error('Fontes aprovadas não puderam ser consultadas.');
       const payload=await response.json();
       const approved:VerifiedStudyTopic[]=Array.isArray(payload.topics)?payload.topics.filter((x:VerifiedStudyTopic)=>
        x&&typeof x.id==='string'&&typeof x.institution==='string'&&typeof x.subject==='string'
        &&typeof x.topic==='string'&&typeof x.sourceUrl==='string'
        &&typeof x.sourceTitle==='string'&&typeof x.evidence==='string'
        &&typeof x.edition==='string'&&examScopeKey.split('|').includes(x.institution)):[];
       if(active)setOfficialTopics(approved);
      }catch(e){if(active)setOfficialError(e instanceof Error?e.message:'Fontes oficiais indisponíveis.');}
      finally{if(active)setOfficialLoading(false);}
    };
    void load();
    return()=>{active=false;};
  },[userId,examScopeKey]);
  function commitLocal(next:StudyTask[]){setTasks(next);try{localStorage.setItem(taskStorageKey(null),JSON.stringify(next));}catch{setError('O navegador não permitiu salvar suas tarefas.');}}
  async function run(action:()=>Promise<void>){if(busy||!loaded)return;setBusy(true);setError('');try{await action();}catch(e){setError(e instanceof Error?e.message:'Erro ao salvar tarefa.');}finally{setBusy(false);}}
  function scheduleTopic(subject:string,topic:string,review:boolean){
   void run(async()=>{
    const existing=pendingTopicTask(tasks,subject,topic);
    if(existing){setNotice('Este assunto já está programado para '+existing.date+'.');return;}
    const proposal=suggestSyllabusTopicSchedule(profile,tasks,subject,topic,new Date(),review);
    if(!proposal){
     setError('Não há um bloco livre nos próximos 14 dias antes da data da prova. Confira seus dias de estudo, a data do exame ou a duração diária nas preferências.');
     return;
    }
    const item:StudyTask={id:crypto.randomUUID(),date:proposal.date,minutes:proposal.minutes,
     title:proposal.title,subject,kind:'manual',done:false};
    if(userId)await createCloudTasks(userId,[item]);
    const next=[...tasks,item].sort((a,b)=>a.date.localeCompare(b.date)||a.title.localeCompare(b.title,'pt-BR'));
    if(userId)setTasks(next);else commitLocal(next);
    setNotice((review?'Revisão':'Estudo')+' de '+topic+' programado para '+proposal.date+' ('+proposal.minutes+' min). Veja a atividade no calendário do Kognos.');
   });
  }
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
    const next=createPersonalizedStudyWeek(profile,tasks,history,aiEvidence,new Date(),()=>crypto.randomUUID(),weeklyTopics,officialTopics);const oldIds=new Set(tasks.map(t=>t.id));const created=next.filter(t=>!oldIds.has(t.id));
    if(userId)await createCloudTasks(userId,created);
    if(userId)setTasks(next);else commitLocal(next);
    setNotice(created.length?`Adicionadas ${created.length} sessões com prioridades baseadas nos registros disponíveis. Ajuste o plano conforme sua rotina.`:'Não há novos dias ou minutos disponíveis nesta semana.');
  });}
  useEffect(()=>{onContextChange({kind:'planner'});},[onContextChange]);
  const pending=tasks.filter(t=>!t.done),done=tasks.filter(t=>t.done);
  function askKog(taskId?:string){onContextChange(taskId?{kind:'planner',taskId}:{kind:'planner'});onTutor();}
  return <div className="app-content study-planner"><div className="page-intro"><span className="overline">ORGANIZAÇÃO INTELIGENTE</span><h1>Seu plano de <em>estudos.</em></h1><p>Uma agenda realista, flexível e respeitosa com seu tempo.</p></div>
    <div className="message neutral">{userId?'As atividades desta conta são sincronizadas com o Supabase. O plano ainda usa a sua disponibilidade e será adaptado ao desempenho em uma etapa futura.':'Modo visitante: suas tarefas permanecem somente neste dispositivo. Crie uma conta para sincronizar um planejamento novo.'}</div>
    {error&&<div className="message warning" role="alert">{error} {userId&&!loaded?'Verifique se aplicou a migração 0004 no Supabase.':''}</div>}
    {!loaded&&!error&&<p className="muted" role="status">Carregando sua agenda…</p>}
    <div className="stat-grid"><div className="stat-card"><span>ATIVIDADES PLANEJADAS</span><strong>{tasks.length}</strong></div><div className="stat-card"><span>CONCLUÍDAS</span><strong>{done.length}</strong></div><div className="stat-card"><span>PENDENTES</span><strong>{pending.length}</strong></div><div className="stat-card"><span>MINUTOS PLANEJADOS</span><strong>{tasks.reduce((sum,t)=>sum+t.minutes,0)}</strong></div></div>
    <div className="planner-grid"><section className="dark-panel"><h2>Minha agenda</h2><p className="muted">Marque atividades, exclua-as ou crie seu próprio plano.</p>{!tasks.length?<p className="empty-tasks">Ainda não há tarefas. Gere sugestões ou adicione sua primeira atividade.</p>:<div className="task-list">{tasks.map(t=><div key={t.id} className={`task-row ${t.done?'completed':''}`}><label><input disabled={busy||!loaded} type="checkbox" checked={t.done} onChange={e=>toggle(t,e.target.checked)}/><span><strong>{t.title}</strong><small>{new Date(t.date+'T12:00:00').toLocaleDateString('pt-BR')} · {t.subject} · {t.minutes} min · {t.kind==='manual'?'Criada por você':'Sugestão'}</small></span></label><div className="task-row-actions"><button type="button" className="task-kog-help" onClick={()=>askKog(t.id)} aria-label={`Pedir ajuda ao Kog para ${t.title}`}>Kog</button><button className="delete-task" disabled={busy||!loaded} aria-label={`Excluir ${t.title}`} onClick={()=>remove(t)}>✕</button></div></div>)}</div>}</section>
    <aside className="dark-panel"><h2>Planeje a semana</h2><p className="muted">Crie tarefas ou gere uma sugestão com base no seu tempo disponível.</p><button className="btn primary full" disabled={!loaded||busy} onClick={generate}>{busy?'Salvando…':'Gerar sugestões da semana'}</button><button type="button" className="btn outline full" onClick={()=>askKog()}>Organizar minha semana com Kog</button><div className="section-divider"/><form className="field-stack" onSubmit={add}><h3>Adicionar atividade</h3><label>Atividade<input value={title} maxLength={120} required placeholder="Ex.: Revisar citologia" onChange={e=>setTitle(e.target.value)}/></label><KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={setSubject} /><div className="two-cols planner-form-grid"><KognosDateField label="Data" value={date} onChange={setDate} /><label>Duração (min)<input type="number" min={5} max={240} value={minutes} onChange={e=>setMinutes(Math.max(5,Math.min(240,Number(e.target.value)||5)))}/></label></div><button className="btn outline" disabled={!loaded||busy}>{busy?'Salvando…':'Adicionar tarefa'}</button></form></aside></div>
    {notice&&<div className="message success" role="status">{notice}</div>}
  </div>;
}