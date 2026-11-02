'use client';
import {useState,useEffect} from 'react';
import {CalendarDays} from 'lucide-react';
import StudySyllabus from './StudySyllabus';
import {activeSyllabi,mergedSyllabus} from '@/lib/exam-syllabus';
import {validCivilDate} from '@/lib/calendar-model';
import { KognosDateField, KognosSelect, type KognosOption } from './KognosFields';
import type {StudentProfile} from '@/lib/profile';
import type {QuestionAttempt} from '@/lib/demo-questions';
import {getCloudAttempts} from '@/lib/cloud-study';
import {useAIStudyProgress} from '@/lib/use-ai-study-progress';
import {studyPriorities} from '@/lib/adaptive-week-plan';
import {createPersonalizedStudyWeek,studyMethod,youtubeStudySearch,lessonForStudyTask,weekLearningSummary,missedTopics,type WeeklyExamWeakTopic} from '@/lib/personalized-study-cycle';
import {getSupabase} from '@/lib/supabase';
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

export default function StudyPlanner({profile,userId,onContextChange,onTutor,initialDate,onCalendar,onLearn,onWeeklyReview,onDiagnostic}:{profile:StudentProfile;userId:string|null;onContextChange:(context:KogStudyContext|null)=>void;onTutor:()=>void;initialDate?:string;onCalendar?:()=>void;onLearn?:(focus:{subject:string;lessonId:string})=>void;onWeeklyReview?:()=>void;onDiagnostic?:()=>void}){
  const [tasks,setTasks]=useState<StudyTask[]>([]);
  const [title,setTitle]=useState('');const [subject,setSubject]=useState('Matemática');
  const [minutes,setMinutes]=useState(25);const [date,setDate]=useState('');const [startTime,setStartTime]=useState('');
  const [notice,setNotice]=useState('');const [error,setError]=useState('');
  const [loaded,setLoaded]=useState(false);const [busy,setBusy]=useState(false);
  const [history,setHistory]=useState<QuestionAttempt[]>([]);
  const [historyLoading,setHistoryLoading]=useState(true),[historyError,setHistoryError]=useState('');
  const [weeklyTopics,setWeeklyTopics]=useState<WeeklyExamWeakTopic[]>([]);
  const [weeklyLoading,setWeeklyLoading]=useState(false),[weeklyError,setWeeklyError]=useState('');
  const {data:aiEvidence,loading:aiEvidenceLoading,error:aiEvidenceError}=useAIStudyProgress(userId);
  const priority=studyPriorities(history,aiEvidence);
  const examSubjects=Object.keys(mergedSyllabus(activeSyllabi(profile)));
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
    const next=createPersonalizedStudyWeek(profile,tasks,history,aiEvidence,new Date(),()=>crypto.randomUUID(),weeklyTopics);const oldIds=new Set(tasks.map(t=>t.id));const created=next.filter(t=>!oldIds.has(t.id));
    if(userId)await createCloudTasks(userId,created);
    if(userId)setTasks(next);else commitLocal(next);
    setNotice(created.length?`Adicionadas ${created.length} sessões com prioridades baseadas nos registros disponíveis. Ajuste o plano conforme sua rotina.`:'Não há novos dias ou minutos disponíveis nesta semana.');
  });}
  function rebuildSuggestions(){
    if(!window.confirm('Substituir apenas as sugestões futuras pelo roteiro atual? Atividades manuais e concluídas serão preservadas.'))return;
    void run(async()=>{
      const today=localDate(new Date());
      const outdated=tasks.filter(t=>t.kind==='suggested'&&!t.done&&t.date>=today);
      if(userId)for(const item of outdated)await deleteCloudTask(userId,item.id);
      const retained=tasks.filter(t=>!outdated.includes(t));
      const next=createPersonalizedStudyWeek(profile,retained,history,aiEvidence,new Date(),()=>crypto.randomUUID(),weeklyTopics);
      const created=next.filter(t=>!retained.includes(t));
      if(userId){if(created.length)await createCloudTasks(userId,created);setTasks(next);}
      else commitLocal(next);
      setNotice('Próximas sugestões atualizadas para os conteúdos atualmente selecionados. Tarefas manuais e concluídas foram mantidas.');
    });
  }
  useEffect(()=>{onContextChange({kind:'planner'});},[onContextChange]);
  const pending=tasks.filter(t=>!t.done),done=tasks.filter(t=>t.done);
  const week=weekLearningSummary(tasks);
  const errorsByTopic=missedTopics(history);
  const methods=studyMethod(profile);
  const evidenceLoading=historyLoading||aiEvidenceLoading||weeklyLoading;
  const evidenceUnavailable=Boolean(historyError||aiEvidenceError||weeklyError);
  const unresolvedWeekly=weeklyTopics.filter(item=>item.lastWrong);
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
    <section className="k-cycle-panel dark-panel" aria-label="Ciclo semanal de aprendizagem">
      <div className="k-cycle-header"><div><span className="overline">SEU CICLO ADAPTATIVO</span><h2>Aprender, praticar e revisar</h2><p className="muted">As próximas sessões priorizam tópicos com erros registrados e respeitam seus dias e minutos disponíveis. O resultado não é um diagnóstico clínico nem uma previsão de nota.</p></div><span className="k-cycle-week">{week.from.split('-').reverse().slice(0,2).join('/')} – {week.until.split('-').reverse().slice(0,2).join('/')}</span></div>
      <div className="k-cycle-progress" role="progressbar" aria-label="Atividades concluídas nesta semana" aria-valuenow={week.completed} aria-valuemin={0} aria-valuemax={Math.max(1,week.total)}><span style={{width:`${week.total?Math.round(100*week.completed/week.total):0}%`}}/></div>
      <p className="k-cycle-summary">{week.completed} de {week.total} sessões concluídas · {week.plannedMinutes} minutos planejados · {week.subjects.length} disciplinas</p>
      <div className="k-cycle-methods"><h3>Como estudar em cada sessão</h3><ol>{methods.map(step=><li key={step}>{step}</li>)}</ol></div>
      {unresolvedWeekly.length>0&&<div className="k-cycle-errors" aria-label="Assuntos com erros nas avaliações semanais">
        <h3>Revisões prioritárias dos simulados semanais</h3>
        <div>{unresolvedWeekly.slice(0,6).map(item=><span key={item.subject+'|'+item.topic}>
         {item.subject}: {item.topic} · {item.incorrect} {item.incorrect===1?'erro registrado':'erros registrados'}
        </span>)}</div>
       </div>}
      {errorsByTopic.length>0&&<div className="k-cycle-errors"><h3>Assuntos para revisar a partir de respostas registradas</h3><div>{errorsByTopic.slice(0,5).map(item=><span key={item.subject+'-'+item.topic}>{item.subject}: {item.topic} ({item.errors} {item.errors===1?'erro':'erros'} na amostra)</span>)}</div></div>}
      {onWeeklyReview&&<div className="k-cycle-review"><div><strong>Simulado de acompanhamento semanal</strong><p>Escolha entre 20 e 90 questões inéditas, geradas a partir dos conteúdos da prova selecionada e registradas para não serem reutilizadas. A quantidade depende do banco aprovado.</p></div><button type="button" className="btn primary" onClick={onWeeklyReview}>Iniciar revisão semanal</button></div>}
    </section>
    <div className="planner-grid"><section className="dark-panel"><h2>Minha agenda</h2><p className="muted">Marque atividades, exclua-as ou crie seu próprio plano.</p>{!tasks.length?<p className="empty-tasks">Ainda não há tarefas. Gere sugestões ou adicione sua primeira atividade.</p>:<div className="task-list">{tasks.map(t=><div key={t.id} className={`task-row ${t.done?'completed':''}`}><label><input disabled={busy||!loaded} type="checkbox" checked={t.done} onChange={e=>toggle(t,e.target.checked)}/><span><strong>{t.title}</strong><small>{new Date(t.date+'T12:00:00').toLocaleDateString('pt-BR')} · {t.subject} · {t.startTime?`${t.startTime} · `:''}{t.minutes} min · {t.kind==='manual'?'Criada por você':'Sugestão'}</small></span></label><div className="task-row-actions"><div className="k-task-links">{onLearn&&lessonForStudyTask(t)&&<button type="button" className="k-task-lesson" onClick={()=>{const lesson=lessonForStudyTask(t);if(lesson)onLearn({subject:lesson.subject,lessonId:lesson.id});}}>Ver aula e prática</button>}<a className="k-task-video" href={youtubeStudySearch(t.subject,lessonForStudyTask(t)?.topic||t.title.replace(/^.*?: /,''))} target="_blank" rel="noopener noreferrer">Buscar aula no YouTube</a></div><button type="button" className="task-kog-help" onClick={()=>askKog(t.id)} aria-label={`Pedir ajuda ao Kog para ${t.title}`}>Kog</button><button className="delete-task" disabled={busy||!loaded} aria-label={`Excluir ${t.title}`} onClick={()=>remove(t)}>✕</button></div></div>)}</div>}</section>
    <aside className="dark-panel"><h2>Planeje a semana</h2><p className="muted">Gere atividades com base no seu tempo disponível e nos assuntos que merecem atenção.</p><button type="button" className="btn outline full" disabled={!loaded||busy||evidenceLoading} onClick={rebuildSuggestions}>Atualizar sugestões após mudar a prova</button><button className="btn primary full" disabled={!loaded||busy||evidenceLoading} onClick={generate}>{busy?'Salvando…':evidenceLoading?'Analisando histórico…':'Gerar plano por prioridades'}</button><button type="button" className="btn outline full" onClick={()=>askKog()}>Organizar minha semana com Kog</button>{onDiagnostic&&<button type="button" className="btn outline full" onClick={onDiagnostic}>Fazer diagnóstico inicial (20 questões)</button>}<div className="section-divider"/><form className="field-stack" onSubmit={add}><h3>Adicionar atividade</h3><label>Atividade<input value={title} maxLength={120} required placeholder="Ex.: Revisar citologia" onChange={e=>setTitle(e.target.value)}/></label><KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={setSubject} /><div className="two-cols planner-form-grid"><KognosDateField label="Data" value={date} onChange={setDate} /><label>Duração (min)<input type="number" min={5} max={240} value={minutes} onChange={e=>setMinutes(Math.max(5,Math.min(240,Number(e.target.value)||5)))}/></label></div><label className="k-planner-start-time">Horário (opcional)<input type="time" value={startTime} onChange={e=>setStartTime(e.target.value)} step="60"/><small className="muted">Sem horário, a atividade aparece na lista de pendentes de agendamento.</small></label><button className="btn outline" disabled={!loaded||busy}>{busy?'Salvando…':'Adicionar tarefa'}</button></form></aside></div>
    {evidenceUnavailable&&<p role="status" className="privacy-note">Histórico parcial: {historyError||aiEvidenceError}. As atividades manuais continuam disponíveis.</p>}
    <StudySyllabus profile={profile} tasks={tasks} weakTopics={weeklyTopics}/>
    {notice&&<div className="message success" role="status">{notice}</div>}
  </div>;
}