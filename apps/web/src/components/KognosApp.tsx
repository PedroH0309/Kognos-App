'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import KogAssistant from './KogAssistant';
import KogMascot3D from './KogMascot3D';
import AccountSettings, {ProfileAvatar} from './AccountSettings';
import PracticeSpace from './PracticeSpace';
import StudyPlanner from './StudyPlanner';
import {statsFromAttempts,type QuestionAttempt} from '@/lib/demo-questions';
import {LayoutDashboard, BookOpen, LibraryBig, GraduationCap, ClipboardList, CalendarDays, RotateCcw, Bot, BarChart3, UserRound, Settings, Trophy, ListChecks, Search, PanelLeftClose, PanelLeftOpen, Menu, Sun, Moon, Sparkles, CheckCircle2, Target, Compass, Landmark, Medal, PencilLine, BookOpenCheck, Cloud, CircleHelp, CalendarCheck2, type LucideIcon} from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { getSupabase, isCloudConfigured } from '@/lib/supabase';
import { getCloudAttempts, getCloudTasks } from '@/lib/cloud-study';
import { adaptationLabels, dayLabels, defaultForDyslexia, defaultForTDAH, goalLabels, initialProfile, normalizeProfile, styleLabels, type Adaptation, type Goal, type StudentProfile, type TeachingStyle } from '@/lib/profile';

const STORAGE_KEY='kognos_guest_profile_v1';
type View = 'dashboard'|'tutor'|'profile'|'settings'|'learn'|'trails'|'subjects'|'calendar'|'achievements'|'questions'|'simulados'|'plans'|'reviews'|'performance';
const NAV: {key:View; icon:string;label:string;status?:string}[] = [
  {key:'dashboard',icon:'◫',label:'Visão geral'},
  {key:'learn',icon:'▤',label:'Aprender',status:'Em construção'},
  {key:'trails',icon:'◇',label:'Trilhas de aprendizagem',status:'Em construção'},
  {key:'subjects',icon:'▧',label:'Minhas disciplinas',status:'Em construção'},
  {key:'questions',icon:'▦',label:'Banco de questões'},
  {key:'simulados',icon:'◉',label:'Simulados'},
  {key:'plans',icon:'◷',label:'Meu planejamento'},
  {key:'reviews',icon:'↻',label:'Revisões',status:'Em construção'},
  {key:'calendar',icon:'▣',label:'Calendário',status:'Em construção'},
  {key:'tutor',icon:'✧',label:'Kog · Tutor IA'},
  {key:'performance',icon:'▥',label:'Desempenho'},
  {key:'achievements',icon:'★',label:'Conquistas',status:'Em construção'},
  {key:'profile',icon:'◎',label:'Meu perfil'},
  {key:'settings',icon:'⚙',label:'Configurações'},
];

const NAV_ICONS:Record<View,LucideIcon>={
 dashboard:LayoutDashboard,learn:BookOpen,trails:GraduationCap,subjects:LibraryBig,
 questions:ListChecks,simulados:ClipboardList,plans:CalendarDays,reviews:RotateCcw,
 calendar:CalendarDays,tutor:Bot,performance:BarChart3,achievements:Trophy,
 profile:UserRound,settings:Settings,
};
function NavIcon({view}:{view:View}){const Icon=NAV_ICONS[view];return <Icon size={19} strokeWidth={1.8} aria-hidden="true"/>;}
const GOAL_ICONS: Record<Goal, LucideIcon> = { enem:Target, vestibular:GraduationCap, etec:BookOpenCheck, school:PencilLine, contest:Landmark, olympiad:Medal, personal:Compass };
function GoalIcon({goal}:{goal:Goal}){const Icon=GOAL_ICONS[goal];return <Icon size={23} strokeWidth={1.7} aria-hidden="true"/>;}
function StatCard({icon:Icon,label,value,note}:{icon:LucideIcon;label:string;value:string|number;note:string}) {return <div className="stat-card kognos-stat"><span className="stat-icon"><Icon size={19} strokeWidth={1.9} aria-hidden="true"/></span><span className="stat-label">{label}</span><strong>{value}</strong><small>{note}</small></div>;}

const choices = <T extends string,>(items:Record<T,string>,selection:T[],toggle:(v:T)=>void) =>
  Object.entries(items).map(([value,label])=><button key={value} type="button" className={`choice-pill ${selection.includes(value as T)?'selected':''}`} onClick={()=>toggle(value as T)} aria-pressed={selection.includes(value as T)}><span className="choice-check">{selection.includes(value as T)?'✓':'+'}</span>{label as string}</button>);

function Logo({small=false}:{small?:boolean}) {
  return <div className="logo-cluster"><div className="logo-mark"><Image src="/brand/kognos-mark.webp" width={small?42:56} height={small?42:56} alt="Símbolo Kognos" priority /></div><div className="logo-word"><strong>Kognos<span>.</span></strong>{!small&&<small>APRENDIZAGEM INTELIGENTE</small>}</div></div>;
}

function AuthModal({onClose,onAuthenticated}:{onClose:()=>void;onAuthenticated:()=>void}){
  const [mode,setMode]=useState<'signin'|'signup'|'reset'>('signin');
  const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [showPassword,setShowPassword]=useState(false);
  const [pending,setPending]=useState(false);const [notice,setNotice]=useState('');
  const enabled=isCloudConfigured();
  async function submit(e:React.FormEvent){
    e.preventDefault();const supabase=getSupabase();if(!supabase)return;
    setPending(true);setNotice('');
    try{
      if(mode==='reset'){
        const {error}=await supabase.auth.resetPasswordForEmail(email.trim(),{redirectTo:window.location.origin});
        if(error)throw error;
        setNotice('Se este e-mail estiver cadastrado, enviaremos instruções para redefinir a senha.');return;
      }
      if(mode==='signup'&&password.length<12){setNotice('Crie uma senha com pelo menos 12 caracteres.');return;}
      const result=mode==='signup'?await supabase.auth.signUp({email,password}):await supabase.auth.signInWithPassword({email,password});
      if(result.error)throw result.error;
      if(mode==='signup'&&!result.data.session){setNotice('Cadastro iniciado. Confirme seu e-mail antes de entrar.');return;}
      onAuthenticated();onClose();
    }catch(e){setNotice(e instanceof Error?e.message:'Não foi possível concluir a autenticação.');}
    finally{setPending(false);}
  }
  return <div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><section className="auth-card" role="dialog" aria-modal="true" aria-label="Entrar no Kognos">
    <div className="modal-head"><Logo small/><button className="text-button" aria-label="Fechar" onClick={onClose}>✕</button></div>
    <h2>{mode==='signin'?'Bem-vindo de volta':mode==='signup'?'Crie sua conta':'Recuperar acesso'}</h2><p className="muted">{mode==='reset'?'Enviaremos um link para redefinir sua senha.':'Sua conta sincroniza seus estudos e libera o tutor com IA.'}</p>
    {!enabled?<div className="message warning">A nuvem ainda não está configurada. Configure o Supabase pelo README para ativar contas e recuperação.</div>:<form onSubmit={submit} className="field-stack">
      <label>E-mail<input autoComplete="email" type="email" required placeholder="voce@exemplo.com" value={email} onChange={e=>setEmail(e.target.value)}/></label>
      {mode!=='reset'&&<div className="password-input"><label>Senha<input type={showPassword?'text':'password'} minLength={mode==='signup'?12:1} required autoComplete={mode==='signin'?'current-password':'new-password'} value={password} placeholder={mode==='signup'?'No mínimo 12 caracteres':'Sua senha'} onChange={e=>setPassword(e.target.value)}/></label><button type="button" className="password-eye" aria-label={showPassword?'Ocultar senha':'Mostrar senha'} onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Ocultar':'Mostrar'}</button></div>}
      <button className="btn primary full" disabled={pending}>{pending?'Aguarde…':mode==='signin'?'Entrar':mode==='signup'?'Criar conta':'Enviar link de recuperação'}</button>
    </form>}
    {notice&&<div className="message" role="status">{notice}</div>}
    {enabled&&<div className="auth-switches"><button className="text-button switch-mode" onClick={()=>{setMode(mode==='signup'?'signin':'signup');setNotice('');}}>{mode==='signup'?'Já possui conta? Entrar':'Criar conta'}</button><button className="text-button switch-mode" onClick={()=>{setMode(mode==='reset'?'signin':'reset');setNotice('');}}>{mode==='reset'?'Voltar ao login':'Esqueci minha senha'}</button></div>}
    <p className="fine-print">Proteja seu acesso: nunca compartilhe senha ou códigos de verificação.</p>
  </section></div>;
}

function Onboarding({start,onFinish,onLogin,cloud}:{start:StudentProfile;onFinish:(p:StudentProfile)=>Promise<void>;onLogin:()=>void;cloud:boolean}){
  const [step,setStep]=useState(0);const [p,setP]=useState<StudentProfile>({...start});const [declared,setDeclared]=useState<'none'|'tdah'|'dislexia'|'both'|'skip'>('skip');
  const [saving,setSaving]=useState(false);const [error,setError]=useState('');
  const update=(v:Partial<StudentProfile>)=>setP(old=>({...old,...v}));
  function toggleStyle(s:TeachingStyle){update({styles:p.styles.includes(s)?p.styles.filter(v=>v!==s):[...p.styles,s]});}
  function toggleAdaptation(s:Adaptation){update({adaptations:p.adaptations.includes(s)?p.adaptations.filter(v=>v!==s):[...p.adaptations,s]});}
  function declaration(v:typeof declared){setDeclared(v);const choices=v==='tdah'?defaultForTDAH:v==='dislexia'?defaultForDyslexia:v==='both'?[...defaultForTDAH,...defaultForDyslexia]:[];if(choices.length)update({adaptations:Array.from(new Set([...p.adaptations,...choices]))});}
  function validate(){if(step===0&&!p.nickname.trim())return 'Como podemos chamar você? Informe um apelido.';if(step===1&&p.weeklyDays.length===0)return 'Escolha ao menos um dia da semana.';if(step===2&&p.styles.length===0)return 'Escolha ao menos uma preferência de estudo.';return '';}
  async function proceed(){const err=validate();if(err){setError(err);return;}setError('');if(step<4){setStep(step+1);return;}setSaving(true);try{await onFinish({...p,completedAt:new Date().toISOString()});}catch(e){setError(e instanceof Error?e.message:'Falha ao salvar.');}finally{setSaving(false);}}
  return <main className="onboard-layout"><div className="onboard-decor"/><header className="onboard-header"><Logo/><div className="onboard-utilities"><span className="subtle-tag">SUA JORNADA COMEÇA AQUI</span><button onClick={onLogin} className="btn outline small">{cloud?'Entrar / Criar conta':'Configurar conta'}</button></div></header>
  <div className="onboard-columns"><section className="onboard-content"><div className="wizard-progress"><span>SEU PERFIL DE APRENDIZAGEM</span><strong>Etapa {step+1} de 5</strong></div><div className="wizard-bars">{Array.from({length:5},(_,i)=><div key={i} className={i<=step?'filled':''}/>)}</div>
  {step===0&&<><p className="overline">01 · O QUE MOVE VOCÊ?</p><h1>Seu futuro começa com <em>uma escolha.</em></h1><p className="intro-copy">Vamos montar uma experiência tão única quanto sua forma de aprender.</p>
    <label className="field-label">Como prefere ser chamado?<input value={p.nickname} maxLength={60} onChange={e=>update({nickname:e.target.value})} placeholder="Seu apelido" autoFocus/></label>
    <span className="field-label">Para que você quer estudar? <small className="muted">(você pode escolher mais de um)</small></span><div className="goal-grid">{(Object.entries(goalLabels) as [Goal,string][]).map(([key,label])=><button key={key} aria-pressed={p.goals.includes(key)} className={`goal-card ${p.goals.includes(key)?'selected':''}`} onClick={()=>{const selected=p.goals.includes(key)?p.goals.filter(g=>g!==key):[...p.goals,key];if(selected.length)update({goal:selected[0],goals:selected});}}><span className="goal-icon"><GoalIcon goal={key}/></span><strong>{label}</strong><span className="select-ring">{p.goals.includes(key)?'✓':''}</span></button>)}</div>
    <div className="two-cols"><label className="field-label">Etapa escolar<select value={p.stage} onChange={e=>update({stage:e.target.value as StudentProfile['stage']})}><option value="fundamental_2">Ensino fundamental II</option><option value="medio">Ensino médio</option><option value="tecnico">Ensino técnico</option><option value="superior">Ensino superior</option><option value="adulto">Adulto / outros estudos</option><option value="other">Outro</option></select></label><label className="field-label">Nível atual<select value={p.level} onChange={e=>update({level:e.target.value as StudentProfile['level']})}><option value="beginner">Estou começando</option><option value="intermediate">Intermediário</option><option value="advanced">Avançado</option></select></label></div>
    <div className="two-cols"><label className="field-label">Meta específica (opcional)<input value={p.targetName} maxLength={120} onChange={e=>update({targetName:e.target.value})} placeholder="Ex.: UNESP 2027"/></label><label className="field-label">Data da prova (opcional)<input type="date" value={p.targetDate} onChange={e=>update({targetDate:e.target.value})}/></label></div>
  </>}
  {step===1&&<><p className="overline">02 · A ROTINA QUE FUNCIONA</p><h1>Seu tempo tem <em>valor.</em></h1><p className="intro-copy">Sem planos impossíveis. Vamos começar com o tempo que você realmente tem.</p><span className="field-label">Quais dias você pode estudar?</span><div className="days-row">{dayLabels.map((d,i)=><button key={i} className={`day ${p.weeklyDays.includes(i)?'active':''}`} onClick={()=>update({weeklyDays:p.weeklyDays.includes(i)?p.weeklyDays.filter(x=>x!==i):[...p.weeklyDays,i].sort()})} title={['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'][i]}>{d}</button>)}</div><label className="field-label range-field">Tempo total de estudo por dia <strong>{p.dailyMinutes} minutos</strong><input type="range" min="15" max="240" step="15" value={p.dailyMinutes} onChange={e=>update({dailyMinutes:Number(e.target.value)})}/></label><span className="field-label">Tamanho ideal de cada sessão</span><div className="card-selector">{[15,25,40,60].map(m=><button key={m} className={`choice-time ${p.sessionMinutes===m?'selected':''}`} onClick={()=>update({sessionMinutes:m})}><strong>{m} min</strong><small>{m===15?'Foco rápido':m===25?'Foco equilibrado':m===40?'Aprofundar':'Imersão'}</small></button>)}</div></>}
  {step===2&&<><p className="overline">03 · SUA FORMA DE APRENDER</p><h1>Aprender não precisa ser <em>igual para todos.</em></h1><p className="intro-copy">Escolha quantos formatos quiser. O tutor ajustará as explicações.</p><span className="field-label">Como você prefere estudar?</span><div className="choice-grid">{choices(styleLabels,p.styles,toggleStyle)}</div><span className="field-label">Tom das explicações</span><div className="card-selector tone-choices">{([['balanced','Equilibrado','Professoral, sem rigidez'],['formal','Mais professoral','Técnico e detalhista'],['motivating','Mais motivador','Direto e estimulante']] as const).map(([k,title,sub])=><button key={k} className={`choice-time ${p.tone===k?'selected':''}`} onClick={()=>update({tone:k})}><strong>{title}</strong><small>{sub}</small></button>)}</div></>}
  {step===3&&<><p className="overline">04 · ACESSIBILIDADE E CONFORTO</p><h1>Um ambiente que se <em>adapta a você.</em></h1><p className="intro-copy">Esta parte é opcional. A pergunta não é um diagnóstico e não precisa ser respondida.</p><span className="field-label">Você tem TDAH ou dislexia, ou gostaria de ajustes relacionados?</span><div className="choice-grid condition-grid">{([['tdah','TDAH / concentração'],['dislexia','Dislexia / leitura'],['both','Ambos'],['none','Não preciso de ajustes'],['skip','Prefiro não informar']] as const).map(([v,label])=><button key={v} className={`choice-pill ${declared===v?'selected':''}`} onClick={()=>declaration(v)} aria-pressed={declared===v}>{label}</button>)}</div><p className="privacy-note">Não salvamos essa resposta ou um rótulo clínico. Apenas as adaptações que você escolher abaixo serão armazenadas.</p><span className="field-label">Escolha as adaptações para sua experiência</span><div className="choice-grid">{choices(adaptationLabels,p.adaptations,toggleAdaptation)}</div></>}
  {step===4&&<><p className="overline">05 · TUDO PRONTO PARA COMEÇAR</p><h1>O conhecimento é <em>seu próximo passo.</em></h1><p className="intro-copy">Seu perfil foi preparado. Você poderá alterar tudo depois.</p><div className="summary-card"><div><small>SEU OBJETIVO</small><strong>{p.goals.map(g=>goalLabels[g]).join(' · ')} {p.targetName?`· ${p.targetName}`:''}</strong></div><div><small>SEU RITMO</small><strong>{p.dailyMinutes} min/dia · {p.weeklyDays.length} dias/semana</strong></div><div><small>FORMA DE APRENDER</small><strong>{p.styles.map(s=>styleLabels[s]).join(' · ')}</strong></div><div><small>ACESSIBILIDADE</small><strong>{p.adaptations.length?`${p.adaptations.length} adaptações ativadas`:'Padrão'}</strong></div></div><div className="message neutral">Sua jornada pode começar sem login, mas o histórico fica apenas neste navegador. Para sincronizar dados e usar a IA, crie uma conta.</div></>}
  {error&&<div className="message warning" role="alert">{error}</div>}
  <div className="wizard-actions">{step>0?<button className="btn outline" onClick={()=>{setStep(step-1);setError('');}}>← Voltar</button>:<span/>}<button className="btn primary" disabled={saving} onClick={proceed}>{saving?'Salvando...':step===4?'Começar a aprender →':'Continuar →'}</button></div></section>
  <aside className="onboard-visual"><div className="hero-image"><Image src="/brand/kognos-hero.webp" alt="Ilustração abstrata do cérebro conectado a conhecimentos" fill sizes="(max-width: 920px) 100vw, 45vw" priority/></div><div className="visual-message"><span className="sparkle">✧</span><div><strong>Uma mente. Infinitas possibilidades.</strong><p>Seu ritmo, seus objetivos, o seu caminho.</p></div></div><div className="visual-footer">KOGNOS / APRENDIZAGEM INTELIGENTE <span>V 0.5</span></div></aside></div></main>;
}

function Dashboard({p,onGo,onEdit,user}:{p:StudentProfile;onGo:(v:View)=>void;onEdit:()=>void;user:User|null}){
  const first=p.nickname.split(' ')[0]||'estudante';
  const [activity,setActivity]=useState<{answered:number;accuracy:number|null;completed:number;activeDays:number}>({answered:0,accuracy:null,completed:0,activeDays:0});
  const [activityError,setActivityError]=useState('');
  useEffect(()=>{
    let active=true;setActivityError('');
    (async()=>{
      try {
        let attempts:QuestionAttempt[];let tasks:{done:boolean}[];
        if(user){[attempts,tasks]=await Promise.all([getCloudAttempts(user.id),getCloudTasks(user.id)]);}
        else {
          attempts=JSON.parse(localStorage.getItem('kognos_demo_attempts_v1_guest')||'[]') as QuestionAttempt[];
          tasks=JSON.parse(localStorage.getItem('kognos_tasks_v1_guest')||'[]') as {done:boolean}[];
        }
        if(!active)return;
        const safeAttempts=Array.isArray(attempts)?attempts:[];
        const stats=statsFromAttempts(safeAttempts);
        setActivity({answered:stats.answered,accuracy:stats.accuracy,completed:Array.isArray(tasks)?tasks.filter(t=>t.done).length:0,activeDays:new Set(safeAttempts.map(a=>a.createdAt.slice(0,10))).size});
      } catch(e){if(active){setActivity({answered:0,accuracy:null,completed:0,activeDays:0});setActivityError(e instanceof Error?e.message:'Não foi possível carregar seu desempenho.');}}
    })();
    return()=>{active=false;};
  },[user]);
  return <div className="app-content"><div className="welcome-top"><div><span className="overline">SUA JORNADA DE APRENDIZAGEM</span><h1>Que bom ter você aqui, <em>{first}.</em></h1><p>Um passo de cada vez, muito conhecimento pela frente.</p></div><span className="mode-badge">{user?<Cloud size={14} aria-hidden="true"/>:<CircleHelp size={14} aria-hidden="true"/>}{user?'Perfil sincronizado':'Modo demonstração'}</span></div>
  <section className="welcome-hero"><div className="welcome-hero-copy"><span className="overline cyan">BEM-VINDO AO KOGNOS</span><h2>Não é sobre estudar mais. <em>É sobre aprender melhor.</em></h2><p>O Kognos adapta as explicações ao seu objetivo e às suas preferências. Comece perguntando algo ao seu tutor.</p><div className="hero-actions"><button className="btn primary" onClick={()=>onGo('tutor')}><Sparkles size={16} aria-hidden="true"/> Conversar com Kog</button><button className="btn outline" onClick={onEdit}>Ajustar perfil</button></div></div><Image className="dashboard-hero-img" src="/brand/kognos-hero.webp" alt="Arte de inteligência e aprendizagem" fill sizes="(max-width: 900px) 100vw, 50vw"/></section>
  <div className="stat-grid"><StatCard icon={BookOpenCheck} label="QUESTÕES RESOLVIDAS" value={activity.answered} note={user?'Sincronizadas na sua conta':'Neste navegador'}/><StatCard icon={Target} label="TAXA DE ACERTOS" value={activity.accuracy===null?'—':`${activity.accuracy}%`} note={activity.answered?'Com base nas suas respostas':'Comece um treino'}/><StatCard icon={CheckCircle2} label="TAREFAS CONCLUÍDAS" value={activity.completed} note="Do seu planejamento"/><StatCard icon={CalendarCheck2} label="DIAS COM PRÁTICA" value={activity.activeDays} note={user?'Histórico da conta':'Histórico local'}/></div>
  {activityError&&<div className="message warning" role="alert">Falha ao carregar dados da nuvem: {activityError}. Verifique a migração 0004.</div>}
  <div className="home-two-cols"><section className="dark-panel"><div className="panel-title"><div><span className="overline">COMECE POR AQUI</span><h3>Sua próxima conquista</h3></div><span>✦</span></div><p className="panel-desc">O tutor Kognos pode explicar assuntos, criar exemplos e ajudar a destravar questões. O banco demonstrativo e o planejamento já permitem registrar atividades; a versão pública com provas oficiais e sincronização ainda está em desenvolvimento.</p><button className="btn primary" onClick={()=>onGo('tutor')}>Abrir tutor IA →</button><div className="panel-foot">{user?'O uso da IA exige configuração da chave no servidor.':'Conecte sua conta para habilitar a IA.'}</div></section><section className="dark-panel feature-panel"><div className="panel-title"><div><span className="overline">SEU PERFIL DE ESTUDO</span><h3>Como você aprende</h3></div></div><div className="profile-tags">{p.styles.map(x=><span className="profile-tag" key={x}>✧ {styleLabels[x]}</span>)}{p.adaptations.map(x=><span className="profile-tag special" key={x}>◈ {adaptationLabels[x]}</span>)}</div><button className="link-btn" onClick={onEdit}>Personalizar preferências →</button></section></div>
  <div className="dashboard-quick-actions"><button className="btn outline" onClick={()=>onGo('questions')}><ListChecks size={18}/> Resolver questões</button><button className="btn outline" onClick={()=>onGo('simulados')}><ClipboardList size={18}/> Fazer simulado</button><button className="btn outline" onClick={()=>onGo('plans')}><CalendarDays size={18}/> Meu plano</button><button className="btn outline" onClick={()=>onGo('performance')}><BarChart3 size={18}/> Meu desempenho</button></div><div className="development-note"><span>✧</span><p><strong>Progresso sem dados inventados.</strong> Os números acima vêm das atividades demonstrativas registradas. Contas conectadas usam a nuvem; ciclos adaptativos completos e avaliações oficiais ainda estão em construção.</p></div>
  </div>;
}

function TutorLanding({profile,onOpen}:{profile:StudentProfile;onOpen:()=>void}) {
  return <div className="app-content kog-landing"><div className="kog-landing-content"><span className="overline">UM PROFESSOR AO SEU LADO</span><h1>Conheça o <em>Kog.</em></h1><p>Seu tutor IA agora acompanha você em qualquer parte do Kognos, sem interromper os estudos. Peça explicações, exemplos e exercícios contextualizados, com o estilo que você escolheu no onboarding.</p><div className="kog-landing-tags"><span><Sparkles size={14}/> Didática adaptativa</span><span><BookOpenCheck size={14}/> Explicações passo a passo</span><span><Target size={14}/> Foco em {goalLabels[profile.goal]}</span></div><button type="button" className="btn primary" onClick={onOpen}>Abrir o Kog na lateral <Sparkles size={17}/></button><small>O chat é processado por um provedor externo de IA. Verifique informações importantes e evite compartilhar dados sensíveis.</small></div><KogMascot3D/></div>;
}

function ComingSoon({view,onGo}:{view:View;onGo:(v:View)=>void}){
 const item=NAV.find(x=>x.key===view);
 return <div className="app-content"><div className="coming-soon"><span className="coming-icon">◇</span><p className="overline">NO ROADMAP DO KOGNOS</p><h1>{item?.label}</h1><p>Estamos implementando este módulo gradualmente, conectado ao banco e ao motor de aprendizagem. Não vamos mostrar dados fictícios como se fossem seus.</p><div><button className="btn primary" onClick={()=>onGo('tutor')}>Conversar com o tutor</button><button className="btn outline" onClick={()=>onGo('dashboard')}>Voltar ao início</button></div></div></div>;
}

export default function KognosApp(){
 const [loading,setLoading]=useState(true);const [user,setUser]=useState<User|null>(null);const [profile,setProfile]=useState<StudentProfile|null>(null);
 const [assistantOpen,setAssistantOpen]=useState(false);
 const [view,setView]=useState<View>('dashboard');const [editing,setEditing]=useState(false);const [authOpen,setAuthOpen]=useState(false);const [mobileMenu,setMobileMenu]=useState(false);const [sidebarCollapsed,setSidebarCollapsed]=useState(false);
 const [avatarUrl,setAvatarUrl]=useState<string|null>(null);const [theme,setTheme]=useState<'dark'|'light'>('dark');const [recoveryMode,setRecoveryMode]=useState(false);const [searchOpen,setSearchOpen]=useState(false);const [search,setSearch]=useState('');
 const cloud=useMemo(()=>isCloudConfigured(),[]);
 useEffect(()=>{
  let mounted=true;const sb=getSupabase();
  const preferred=window.localStorage.getItem('kognos_theme_v1');if(preferred==='light'||preferred==='dark')setTheme(preferred);setSidebarCollapsed(window.localStorage.getItem('kognos_sidebar_collapsed_v1')==='true');
  const loadGuest=()=>{try{const saved=window.localStorage.getItem(STORAGE_KEY);if(mounted){setProfile(saved?normalizeProfile(JSON.parse(saved)):null);setAvatarUrl(window.localStorage.getItem('kognos_guest_avatar_v1'));}}catch{if(mounted)setProfile(null);}};
  const loadProfile=async(id:string)=>{if(!sb)return;const {data,error}=await sb.from('profiles').select('display_name,username,biography,avatar_path,preferences').eq('id',id).maybeSingle();if(!mounted)return;if(error){setProfile(null);setAvatarUrl(null);return;}
     const prefs=data?.preferences||null;setProfile(prefs&&prefs.completedAt?normalizeProfile({...prefs,nickname:data?.display_name||prefs.nickname,username:data?.username||'',biography:data?.biography||''}):null);
     setAvatarUrl(null);if(data?.avatar_path){const {data:signed}=await sb.storage.from('kognos-avatars').createSignedUrl(data.avatar_path,3600);if(mounted)setAvatarUrl(signed?.signedUrl||null);}
  };
  (async()=>{if(sb){const {data}=await sb.auth.getSession();if(!mounted)return;if(data.session?.user){setUser(data.session.user);await loadProfile(data.session.user.id);}else loadGuest();}else loadGuest();if(mounted)setLoading(false);})();
  const {data:listener}=sb?.auth.onAuthStateChange((event,session)=>{if(!mounted)return;setUser(session?.user||null);if(event==='SIGNED_OUT'){loadGuest();setView('dashboard');}if(event==='SIGNED_IN'&&session?.user){loadProfile(session.user.id);}if(event==='PASSWORD_RECOVERY'){setRecoveryMode(true);setView('settings');}})||{data:{subscription:{unsubscribe:()=>{}}}};
  return()=>{mounted=false;listener.subscription.unsubscribe();};
 },[]);
 async function saveProfile(p:StudentProfile){const normalized=normalizeProfile(p);if(user){const sb=getSupabase();if(!sb)throw new Error('Supabase não configurado.');const {error}=await sb.from('profiles').upsert({id:user.id,display_name:normalized.nickname||null,username:normalized.username||null,biography:normalized.biography,education_stage:normalized.stage,preferences:normalized},{onConflict:'id'});if(error)throw new Error(`Não foi possível salvar seu perfil: ${error.message}`);}else{window.localStorage.setItem(STORAGE_KEY,JSON.stringify(normalized));}setProfile(normalized);setEditing(false);setView('dashboard');}
 async function signout(){await getSupabase()?.auth.signOut();setAvatarUrl(null);setMobileMenu(false);setAssistantOpen(false);}
 function navigate(v:View){ if(v==='tutor'){setAssistantOpen(true);}else{setView(v);}setMobileMenu(false); }
 function changeTheme(v:'dark'|'light'){setTheme(v);window.localStorage.setItem('kognos_theme_v1',v);}
 function toggleSidebar(){setSidebarCollapsed(old=>{localStorage.setItem('kognos_sidebar_collapsed_v1',String(!old));return !old;});}
 async function saveAccountChanges(p:StudentProfile){const normalized=normalizeProfile(p);if(user){const sb=getSupabase();if(!sb)throw new Error('Supabase indisponível.');const {error}=await sb.from('profiles').update({display_name:normalized.nickname,username:normalized.username||null,biography:normalized.biography,preferences:normalized}).eq('id',user.id);if(error){if(error.code==='23505')throw new Error('Este nome de usuário já está em uso. Escolha outro.');throw error;}}else window.localStorage.setItem(STORAGE_KEY,JSON.stringify(normalized));setProfile(normalized);}
 function changeAvatar(url:string|null,_path:string|null){setAvatarUrl(url);}
 const actualProfile=profile??initialProfile;
 const accessibility=[actualProfile.adaptations.includes('larger_text')?'larger-text':'',actualProfile.adaptations.includes('high_contrast')?'strong-contrast':'',actualProfile.adaptations.includes('reduced_distractions')?'less-motion':''].join(' ');
 if(loading)return <div className="loading-page"><Logo/><p>Preparando seu espaço de aprendizagem…</p></div>;
 if(!profile||editing)return <div className={`${accessibility} theme-${theme}`}><Onboarding key={editing?'edit':'first'} start={actualProfile} onFinish={saveProfile} onLogin={()=>setAuthOpen(true)} cloud={cloud}/>{authOpen&&<AuthModal onClose={()=>setAuthOpen(false)} onAuthenticated={()=>{setEditing(false);}}/>}</div>;
 return <div className={`app-layout theme-${theme} ${sidebarCollapsed?'sidebar-collapsed':''} ${accessibility}`}><aside className={`app-sidebar ${mobileMenu?'mobile-open':''}`}><div className="side-logo"><Logo/><button type="button" className="sidebar-collapse-btn" onClick={toggleSidebar} aria-label={sidebarCollapsed?'Expandir barra lateral':'Recolher barra lateral'} title={sidebarCollapsed?'Expandir menu':'Recolher menu'}>{sidebarCollapsed?<PanelLeftOpen size={17}/>:<PanelLeftClose size={17}/>}</button></div><div className="side-heading">SEU ESPAÇO</div><nav className="side-nav" aria-label="Navegação principal">{NAV.map(item=><button key={item.key} onClick={()=>navigate(item.key)} className={`side-nav-item ${view===item.key?'active':''}`} title={item.label} aria-label={item.label} aria-current={view===item.key?'page':undefined}><span><NavIcon view={item.key}/></span>{item.label}{item.status&&<small>◌</small>}</button>)}</nav><div className="sidebar-bottom"><div className="side-promo"><span>✧ KOGNOS IA</span><h3>Seu conhecimento, amplificado.</h3><p>Tire dúvidas com o tutor que se adapta a você.</p><button onClick={()=>setAssistantOpen(true)}>Explorar tutor →</button></div><button title="Meu perfil" className="side-user" onClick={()=>setView('profile')}><ProfileAvatar url={avatarUrl} name={actualProfile.nickname}/><span><strong>{actualProfile.nickname}</strong><small>{user?'Conta conectada':'Perfil local'}</small></span><b>⋯</b></button></div></aside>{mobileMenu&&<button className="mobile-sidebar-scrim" aria-label="Fechar menu lateral" onClick={()=>setMobileMenu(false)}/>}
 <div className="app-main"><header className="app-topbar"><button className="mobile-menu-btn" onClick={()=>setMobileMenu(!mobileMenu)} aria-label={mobileMenu?"Fechar menu":"Abrir menu"} aria-expanded={mobileMenu}><Menu size={20}/></button><div className="crumbs">Kognos <span>/</span> {NAV.find(x=>x.key===view)?.label}</div>
 <div className="top-right"><div className="global-search"><button className="search-trigger" onClick={()=>setSearchOpen(!searchOpen)} aria-expanded={searchOpen}><Search size={16}/><span>Buscar recursos…</span></button>{searchOpen&&<div className="search-popover"><input autoFocus placeholder="Buscar página ou módulo…" value={search} onChange={e=>setSearch(e.target.value)}/>{NAV.filter(x=>x.label.toLowerCase().includes(search.toLowerCase())).map(x=><button key={x.key} onClick={()=>{navigate(x.key);setSearchOpen(false);setSearch('');}}>{x.label} {x.status&&<small>Em breve</small>}</button>)}</div>}</div><button className="icon-top-btn" onClick={()=>changeTheme(theme==='dark'?'light':'dark')} aria-label="Alternar tema">{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button><button className="icon-top-btn" onClick={()=>setAssistantOpen(true)} aria-label="Abrir Kog tutor"><Sparkles size={18}/></button>{user?<button className="avatar-top-btn" onClick={()=>setView('profile')} aria-label="Abrir perfil"><ProfileAvatar url={avatarUrl} name={actualProfile.nickname}/></button>:<button className="btn outline small" onClick={()=>setAuthOpen(true)}>Entrar / Criar conta</button>}</div></header>
 {view==='dashboard'?<Dashboard p={actualProfile} onGo={navigate} onEdit={()=>setEditing(true)} user={user}/>:
 view==='tutor'?<TutorLanding profile={actualProfile} onOpen={()=>setAssistantOpen(true)}/>: 
 view==='questions'||view==='simulados'||view==='performance'?<PracticeSpace key={`${user?.id||'guest'}-${view}`} mode={view} userId={user?.id||null} onTutor={()=>setAssistantOpen(true)}/>: 
 view==='plans'?<StudyPlanner key={user?.id||'guest'} profile={actualProfile} userId={user?.id||null}/>: 
 view==='profile'||view==='settings'?<AccountSettings key={`${user?.id||'guest'}-${view}`} user={user} profile={actualProfile} avatarUrl={avatarUrl} onSave={saveAccountChanges} onAvatarChanged={changeAvatar} onLogin={()=>setAuthOpen(true)} onPreferences={()=>setEditing(true)} onSignout={signout} theme={theme} onThemeChange={changeTheme} recoveryMode={recoveryMode} openSecurity={view==='settings'}/>:
 <ComingSoon view={view} onGo={navigate}/>}
 <footer className="app-footer">© Kognos · Conhecimento que evolui com você. <span>Versão 0.6 · Projeto em desenvolvimento</span></footer></div><nav className="mobile-bottom-nav" aria-label="Navegação rápida">{(['dashboard','learn','plans','tutor','profile'] as View[]).map(v=><button key={v} className={view===v?'active':''} onClick={()=>navigate(v)}><span><NavIcon view={v}/></span>{v==='dashboard'?'Início':v==='learn'?'Estudar':v==='plans'?'Plano':v==='tutor'?'Tutor':'Perfil'}</button>)}</nav><KogAssistant open={assistantOpen} onOpen={()=>setAssistantOpen(true)} onClose={()=>setAssistantOpen(false)} profile={actualProfile} user={user} onLogin={()=>setAuthOpen(true)} context={view}/>
 {authOpen&&<AuthModal onClose={()=>setAuthOpen(false)} onAuthenticated={()=>setView('dashboard')}/>}</div>;
}
