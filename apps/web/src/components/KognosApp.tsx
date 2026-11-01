'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import KogAssistant from './KogAssistant';
import type {KogStudyContext} from '@/lib/kog-study-context';
import KogMascot3D from './KogMascot3D';
import { KognosSelect, KognosDateField, KognosRange } from './OnboardingControls';
import { weeklyStudyHours } from '@/lib/onboarding-helpers';
import AccountSettings, {ProfileAvatar} from './AccountSettings';
import PracticeSpace from './PracticeSpace';
import DiagnosticSpace from './DiagnosticSpace';
import ReviewSpace from './ReviewSpace';
import {reviewItems,reviewCounts} from '@/lib/adaptive-review';
import LearningTrails from './LearningTrails';
import StudyPlanner from './StudyPlanner';
import {statsFromAttempts,type QuestionAttempt} from '@/lib/demo-questions';
import {LayoutDashboard, BookOpen, LibraryBig, GraduationCap, ClipboardList, CalendarDays, RotateCcw, Bot, BarChart3, UserRound, Settings, Trophy, ListChecks, Search, ArrowRight, ArrowLeft, Check, Plus, Clock3, ShieldCheck, BookOpenText, PanelLeftClose, PanelLeftOpen, Menu, Sun, Moon, Sparkles, CheckCircle2, Target, Compass, Landmark, Medal, PencilLine, BookOpenCheck, Cloud, CircleHelp, CalendarCheck2, type LucideIcon} from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { getSupabase, isCloudConfigured } from '@/lib/supabase';
import { getCloudAttempts, getCloudTasks } from '@/lib/cloud-study';
import { adaptationLabels, dayLabels, defaultForDyslexia, defaultForTDAH, goalLabels, initialProfile, normalizeProfile, styleLabels, type Adaptation, type Goal, type StudentProfile, type TeachingStyle } from '@/lib/profile';

const STORAGE_KEY='kognos_guest_profile_v1';
type View = 'dashboard'|'tutor'|'profile'|'settings'|'learn'|'trails'|'subjects'|'calendar'|'achievements'|'questions'|'simulados'|'diagnostic'|'plans'|'reviews'|'performance';
const NAV: {key:View; icon:string;label:string;status?:string}[] = [
  {key:'dashboard',icon:'◫',label:'Visão geral'},
  {key:'learn',icon:'▤',label:'Aprender'},
  {key:'trails',icon:'◇',label:'Trilhas de aprendizagem'},
  {key:'subjects',icon:'▧',label:'Minhas disciplinas'},
  {key:'questions',icon:'▦',label:'Banco de questões'},
  {key:'simulados',icon:'◉',label:'Simulados'},
  {key:'diagnostic',icon:'◈',label:'Diagnóstico inicial'},
  {key:'plans',icon:'◷',label:'Meu planejamento'},
  {key:'reviews',icon:'↻',label:'Revisões inteligentes'},
  {key:'calendar',icon:'▣',label:'Calendário',status:'Em construção'},
  {key:'tutor',icon:'✧',label:'Kog · Tutor IA'},
  {key:'performance',icon:'▥',label:'Desempenho'},
  {key:'achievements',icon:'★',label:'Conquistas',status:'Em construção'},
  {key:'profile',icon:'◎',label:'Meu perfil'},
  {key:'settings',icon:'⚙',label:'Configurações'},
];

const NAV_ICONS:Record<View,LucideIcon>={
 dashboard:LayoutDashboard,learn:BookOpen,trails:GraduationCap,subjects:LibraryBig,
 questions:ListChecks,simulados:ClipboardList,diagnostic:Target,plans:CalendarDays,reviews:RotateCcw,
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
  const [step,setStep]=useState(0);
  const [p,setP]=useState<StudentProfile>({...start});
  const [declared,setDeclared]=useState<'none'|'tdah'|'dislexia'|'both'|'skip'>('skip');
  const [saving,setSaving]=useState(false);
  const [error,setError]=useState('');
  const [dateError,setDateError]=useState(false);
  const update=(v:Partial<StudentProfile>)=>{setP(old=>({...old,...v}));setError('');};
  const toggleStyle=(s:TeachingStyle)=>update({styles:p.styles.includes(s)?p.styles.filter(v=>v!==s):[...p.styles,s]});
  const toggleAdaptation=(s:Adaptation)=>update({adaptations:p.adaptations.includes(s)?p.adaptations.filter(v=>v!==s):[...p.adaptations,s]});
  const toggleGoal=(goal:Goal)=>{const selected=p.goals.includes(goal)?p.goals.filter(g=>g!==goal):[...p.goals,goal];if(selected.length)update({goal:selected[0],goals:selected});};
  function declaration(v:typeof declared){
    setDeclared(v);
    if(v==='none')update({adaptations:[]});
    if(v==='tdah'||v==='dislexia'||v==='both'){
      const adaptations=v==='tdah'?defaultForTDAH:v==='dislexia'?defaultForDyslexia:[...defaultForTDAH,...defaultForDyslexia];
      update({adaptations:Array.from(new Set([...p.adaptations,...adaptations]))});
    }
  }
  const stepNames=['Seu objetivo','Sua rotina','Como aprender','Acessibilidade','Resumo'];
  function validate(){
    if(step===0&&!p.nickname.trim())return 'Preencha o apelido para continuar.';
    if(step===0&&!p.goals.length)return 'Selecione ao menos um objetivo.';
    if(step===0&&dateError)return 'Corrija a data da prova ou deixe o campo vazio.';
    if(step===1&&p.weeklyDays.length===0)return 'Selecione pelo menos um dia disponível.';
    if(step===2&&p.styles.length===0)return 'Selecione pelo menos uma forma de aprender.';
    return '';
  }
  async function proceed(){
    const message=validate();if(message){setError(message);return;}
    setError('');
    if(step<4){setStep(step+1);window.scrollTo({top:0,behavior:'smooth'});return;}
    setSaving(true);
    try{await onFinish({...p,nickname:p.nickname.trim(),completedAt:new Date().toISOString()});}
    catch(e){setError(e instanceof Error?e.message:'Não foi possível salvar suas preferências.');}
    finally{setSaving(false);}
  }
  const stageOptions=[
    {value:'fundamental_2',label:'Ensino fundamental II',description:'6º ao 9º ano'},
    {value:'medio',label:'Ensino médio',description:'1ª à 3ª série'},
    {value:'tecnico',label:'Ensino técnico',description:'Cursos técnicos e profissionalizantes'},
    {value:'superior',label:'Ensino superior',description:'Graduação e áreas especializadas'},
    {value:'adulto',label:'Adulto / outros estudos',description:'Aprendizagem continuada'},
    {value:'other',label:'Outro',description:'Personalizar minha jornada'}
  ] as const;
  const levelOptions=[
    {value:'beginner',label:'Estou começando',description:'Quero construir uma base sólida'},
    {value:'intermediate',label:'Intermediário',description:'Já conheço alguns assuntos'},
    {value:'advanced',label:'Avançado',description:'Quero aprofundar e praticar'}
  ] as const;
  return <main className="onboard-layout onboard-v061">
    <header className="onboard-header"><div className="onboard-header-inner"><Logo/><div className="onboard-utilities"><span className="subtle-tag">UMA JORNADA FEITA PARA VOCÊ</span><button type="button" onClick={onLogin} className="btn outline small">{cloud?'Entrar / Criar conta':'Configurar conta'}</button></div></div></header>
    <div className="onboard-columns">
      <section className="onboard-content" aria-labelledby="onboard-heading">
        <div className="wizard-head"><div><span className="wizard-eyebrow">PERSONALIZAÇÃO DE ESTUDO</span><p>Etapa <strong>{String(step+1).padStart(2,'0')}</strong> de 05 · {stepNames[step]}</p></div><span className="wizard-fraction">{Math.round((step+1)*20)}%</span></div>
        <div className="wizard-bars" role="progressbar" aria-valuemin={0} aria-valuemax={5} aria-valuenow={step+1} aria-label={`Etapa ${step+1} de cinco`}>
          {stepNames.map((name,i)=><div className={i<=step?'filled':''} key={name}/>)}</div>
        {step===0&&<>
          <p className="overline">01 / PRIMEIRO, SUA META</p>
          <h1 id="onboard-heading">Seu futuro começa com <em>uma escolha.</em></h1>
          <p className="intro-copy">Conte o que quer conquistar. O Kognos organiza uma jornada que faz sentido para você.</p>
          <div className="k-onboard-section">
            <label className="k-form-field"><span className="k-field-title">Como prefere ser chamado? <span className="k-required">*</span></span><input className="k-text-input" value={p.nickname} maxLength={60} onChange={e=>update({nickname:e.target.value})} placeholder="Seu nome ou apelido" autoComplete="nickname" autoFocus/><small className="k-field-hint">Este nome será usado no seu painel e pelo Kog.</small></label>
            <div className="k-field-group"><div className="k-group-head"><span className="k-field-title">Para que você quer estudar?</span><span className="k-group-hint">Selecione uma ou mais opções</span></div><div className="goal-grid">{(Object.entries(goalLabels) as [Goal,string][]).map(([key,label])=><button key={key} type="button" aria-pressed={p.goals.includes(key)} className={`goal-card ${p.goals.includes(key)?'selected':''}`} onClick={()=>toggleGoal(key)}><span className="goal-icon"><GoalIcon goal={key}/></span><strong>{label}</strong><span aria-hidden="true" className="select-ring">{p.goals.includes(key)?<Check size={12} strokeWidth={3}/>:null}</span></button>)}</div></div>
            <div className="two-cols k-onboard-row"><KognosSelect label="Etapa escolar" value={p.stage} onChange={value=>update({stage:value})} options={stageOptions}/><KognosSelect label="Nível atual" value={p.level} onChange={value=>update({level:value})} options={levelOptions}/></div>
            <div className="two-cols k-onboard-row"><label className="k-form-field"><span className="k-field-title">Meta específica <span className="k-optional">opcional</span></span><input className="k-text-input" value={p.targetName} maxLength={120} onChange={e=>update({targetName:e.target.value})} placeholder="Ex.: UNESP 2027"/><small className="k-field-hint">Qual prova ou instituição?</small></label><KognosDateField label="Data da prova (opcional)" value={p.targetDate} onChange={value=>update({targetDate:value})} onInvalidChange={setDateError} hint="Você pode definir isso depois."/></div>
          </div>
        </>}
        {step===1&&<>
          <p className="overline">02 / SUA ROTINA</p><h1 id="onboard-heading">Um plano que cabe na <em>sua vida.</em></h1><p className="intro-copy">A melhor rotina é a que você consegue manter. Escolha uma disponibilidade realista — ela poderá mudar.</p>
          <div className="k-onboard-section"><div className="k-field-group"><div className="k-group-head"><span className="k-field-title">Quais dias você pode estudar?</span><span className="k-group-hint">{p.weeklyDays.length} de 7 dias</span></div><div className="days-row">{['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map((name,i)=><button type="button" key={name} className={`day ${p.weeklyDays.includes(i)?'active':''}`} aria-pressed={p.weeklyDays.includes(i)} aria-label={`${['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'][i]} ${p.weeklyDays.includes(i)?'selecionado':'não selecionado'}`} onClick={()=>update({weeklyDays:p.weeklyDays.includes(i)?p.weeklyDays.filter(x=>x!==i):[...p.weeklyDays,i].sort()})}>{name}</button>)}</div></div>
            <KognosRange label="Tempo total de estudo por dia" value={p.dailyMinutes} onChange={value=>update({dailyMinutes:value})}/>
            <div className="k-field-group"><div className="k-group-head"><span className="k-field-title">Tamanho ideal de cada sessão</span><span className="k-group-hint">Pausas entre os blocos</span></div><div className="card-selector">{[15,25,40,60].map(m=><button type="button" aria-pressed={p.sessionMinutes===m} key={m} className={`choice-time ${p.sessionMinutes===m?'selected':''}`} onClick={()=>update({sessionMinutes:m})}><strong>{m} min</strong><small>{m===15?'Foco rápido':m===25?'Equilibrado':m===40?'Aprofundar':'Imersão'}</small><span aria-hidden="true" className="k-selection-dot"/></button>)}</div></div>
            <div className="k-tip"><Clock3 size={18}/><span>Seu plano inicial terá cerca de <strong>{weeklyStudyHours(p.dailyMinutes,p.weeklyDays.length)} horas por semana</strong>, distribuídas em sessões personalizadas.</span></div>
          </div>
        </>}
        {step===2&&<>
          <p className="overline">03 / SEU JEITO DE APRENDER</p><h1 id="onboard-heading">Aprender é algo <em>pessoal.</em></h1><p className="intro-copy">Escolha o que funciona melhor para você. O Kog usará essas preferências para adaptar as explicações.</p>
          <div className="k-onboard-section"><div className="k-field-group"><div className="k-group-head"><span className="k-field-title">Como você prefere estudar?</span><span className="k-group-hint">Pode marcar vários</span></div><div className="choice-grid k-style-choices">{choices(styleLabels,p.styles,toggleStyle)}</div></div><div className="k-field-group"><div className="k-group-head"><span className="k-field-title">Tom das explicações</span><span className="k-group-hint">O jeito do professor falar</span></div><div className="card-selector tone-choices">{([['balanced','Equilibrado','Professoral, sem rigidez'],['formal','Mais professoral','Técnico e detalhista'],['motivating','Mais motivador','Direto e estimulante']] as const).map(([k,title,sub])=><button type="button" key={k} aria-pressed={p.tone===k} className={`choice-time ${p.tone===k?'selected':''}`} onClick={()=>update({tone:k})}><strong>{title}</strong><small>{sub}</small><span aria-hidden="true" className="k-selection-dot"/></button>)}</div></div><div className="k-tip"><BookOpenText size={18}/><span>Suas escolhas podem mudar quando você descobrir outras formas de estudar.</span></div></div>
        </>}
        {step===3&&<>
          <p className="overline">04 / CONFORTO E ACESSIBILIDADE</p><h1 id="onboard-heading">O Kognos se adapta <em>a você.</em></h1><p className="intro-copy">Personalize a leitura e a concentração. Todas as opções são voluntárias e podem ser alteradas depois.</p>
          <div className="k-onboard-section"><div className="k-field-group"><span className="k-field-title">Gostaria de recursos relacionados a atenção ou leitura?</span><div className="choice-grid condition-grid">{([['tdah','TDAH / concentração'],['dislexia','Dislexia / leitura'],['both','Ambas as adaptações'],['none','Não preciso de ajustes'],['skip','Prefiro não responder']] as const).map(([v,label])=><button type="button" key={v} className={`choice-pill ${declared===v?'selected':''}`} onClick={()=>declaration(v)} aria-pressed={declared===v}><span className="choice-check">{declared===v?<Check size={15}/>:<Plus size={13}/>}</span>{label}</button>)}</div><p className="privacy-note"><ShieldCheck size={16}/> Não registramos diagnóstico ou condição médica. Apenas suas preferências de interface são salvas.</p></div><div className="k-field-group"><span className="k-field-title">Recursos que você deseja ativar</span><div className="choice-grid">{choices(adaptationLabels,p.adaptations,toggleAdaptation)}</div></div></div>
        </>}
        {step===4&&<>
          <p className="overline">05 / SUA JORNADA ESTÁ PRONTA</p><h1 id="onboard-heading">Tudo pronto para <em>evoluir.</em></h1><p className="intro-copy">Este é seu ponto de partida. Você pode editar suas escolhas a qualquer momento no seu perfil.</p>
          <div className="summary-card"><div><small>COMO VAMOS CHAMAR VOCÊ</small><strong>{p.nickname||'Estudante'}</strong></div><div><small>OBJETIVO PRINCIPAL</small><strong>{p.goals.map(g=>goalLabels[g]).join(' · ')}{p.targetName?` · ${p.targetName}`:''}</strong></div><div><small>SEU RITMO</small><strong>{p.dailyMinutes} minutos por dia · {p.weeklyDays.length} dias na semana · sessões de {p.sessionMinutes} min</strong></div><div><small>COMO VOCÊ APRENDE</small><strong>{p.styles.map(s=>styleLabels[s]).join(' · ')}</strong></div><div><small>RECURSOS DE ACESSIBILIDADE</small><strong>{p.adaptations.length?`${p.adaptations.length} adaptações selecionadas`:'Configuração padrão'}</strong></div></div><div className="k-tip"><CheckCircle2 size={19}/><span>Seu perfil está pronto. Sem login, os dados ficam apenas neste navegador; para sincronizar e usar o Kog, conecte sua conta.</span></div>
        </>}
        {error&&<div className="message warning" role="alert">{error}</div>}
        <div className="wizard-actions"><div>{step>0&&<button type="button" className="btn outline" onClick={()=>{setStep(step-1);setError('');window.scrollTo({top:0,behavior:'smooth'});}}><ArrowLeft size={17}/> Voltar</button>}</div><button type="button" className="btn primary" disabled={saving} onClick={proceed}>{saving?'Salvando…':step===4?'Começar a aprender':'Continuar'}{!saving&&<ArrowRight size={18}/>}</button></div>
        <p className="k-wizard-footnote">Seu ritmo, seus objetivos. <span>Você tem controle sobre suas preferências.</span></p>
      </section>
      <aside className="onboard-visual" aria-hidden="true"><div className="k-visual-top"><span className="k-visual-brand"><Sparkles size={16}/> APRENDIZAGEM INTELIGENTE</span><span>01 / KOGNOS</span></div><div className="hero-image"><Image src="/brand/kognos-hero.webp" alt="" fill sizes="(max-width: 920px) 100vw, 38vw" priority/></div><div className="visual-message"><span className="k-visual-rule"/><strong>Conhecimento que evolui com você.</strong><p>Um espaço de estudo no seu ritmo, com inteligência e clareza em cada passo.</p></div><div className="visual-footer"><span>KOGNOS / APRENDIZAGEM INTELIGENTE</span><span>v0.6.1</span></div></aside>
    </div>
  </main>;
}
function Dashboard({p,onGo,onEdit,user}:{p:StudentProfile;onGo:(v:View)=>void;onEdit:()=>void;user:User|null}){
  const first=p.nickname.split(' ')[0]||'estudante';
  const [activity,setActivity]=useState<{answered:number;accuracy:number|null;completed:number;activeDays:number;dueReviews:number}>({answered:0,accuracy:null,completed:0,activeDays:0,dueReviews:0});
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
        setActivity({answered:stats.answered,accuracy:stats.accuracy,completed:Array.isArray(tasks)?tasks.filter(t=>t.done).length:0,activeDays:new Set(safeAttempts.map(a=>a.createdAt.slice(0,10))).size,dueReviews:reviewCounts(reviewItems(safeAttempts)).due});
      } catch(e){if(active){setActivity({answered:0,accuracy:null,completed:0,activeDays:0,dueReviews:0});setActivityError(e instanceof Error?e.message:'Não foi possível carregar seu desempenho.');}}
    })();
    return()=>{active=false;};
  },[user]);
  return <div className="app-content"><div className="welcome-top"><div><span className="overline">SUA JORNADA DE APRENDIZAGEM</span><h1>Que bom ter você aqui, <em>{first}.</em></h1><p>Um passo de cada vez, muito conhecimento pela frente.</p></div><span className="mode-badge">{user?<Cloud size={14} aria-hidden="true"/>:<CircleHelp size={14} aria-hidden="true"/>}{user?'Perfil sincronizado':'Modo demonstração'}</span></div>
  <section className="welcome-hero"><div className="welcome-hero-copy"><span className="overline cyan">BEM-VINDO AO KOGNOS</span><h2>Não é sobre estudar mais. <em>É sobre aprender melhor.</em></h2><p>O Kognos adapta as explicações ao seu objetivo e às suas preferências. Comece perguntando algo ao seu tutor.</p><div className="hero-actions"><button className="btn primary" onClick={()=>onGo('tutor')}><Sparkles size={16} aria-hidden="true"/> Conversar com Kog</button><button className="btn outline" onClick={onEdit}>Ajustar perfil</button></div></div><Image className="dashboard-hero-img" src="/brand/kognos-hero.webp" alt="Arte de inteligência e aprendizagem" fill sizes="(max-width: 900px) 100vw, 50vw"/></section>
  <div className="stat-grid"><StatCard icon={BookOpenCheck} label="QUESTÕES RESOLVIDAS" value={activity.answered} note={user?'Sincronizadas na sua conta':'Neste navegador'}/><StatCard icon={Target} label="TAXA DE ACERTOS" value={activity.accuracy===null?'—':`${activity.accuracy}%`} note={activity.answered?'Com base nas suas respostas':'Comece um treino'}/><StatCard icon={CheckCircle2} label="TAREFAS CONCLUÍDAS" value={activity.completed} note="Do seu planejamento"/><StatCard icon={CalendarCheck2} label="DIAS COM PRÁTICA" value={activity.activeDays} note={user?'Histórico da conta':'Histórico local'}/></div>
  {activityError&&<div className="message warning" role="alert">Falha ao carregar dados da nuvem: {activityError}. Verifique a migração 0004.</div>}
  <div className="home-two-cols"><section className="dark-panel"><div className="panel-title"><div><span className="overline">COMECE POR AQUI</span><h3>Sua próxima conquista</h3></div><span>✦</span></div><p className="panel-desc">O tutor Kognos pode explicar assuntos, criar exemplos e ajudar a destravar questões. O banco demonstrativo e o planejamento já permitem registrar atividades; a versão pública com provas oficiais e sincronização ainda está em desenvolvimento.</p><button className="btn primary" onClick={()=>onGo('tutor')}>Abrir tutor IA →</button><div className="panel-foot">{user?'O uso da IA exige configuração da chave no servidor.':'Conecte sua conta para habilitar a IA.'}</div></section><section className="dark-panel feature-panel"><div className="panel-title"><div><span className="overline">SEU PERFIL DE ESTUDO</span><h3>Como você aprende</h3></div></div><div className="profile-tags">{p.styles.map(x=><span className="profile-tag" key={x}>✧ {styleLabels[x]}</span>)}{p.adaptations.map(x=><span className="profile-tag special" key={x}>◈ {adaptationLabels[x]}</span>)}</div><button className="link-btn" onClick={onEdit}>Personalizar preferências →</button></section></div>
  <div className="dashboard-quick-actions"><button className="btn outline" onClick={()=>onGo('questions')}><ListChecks size={18}/> Resolver questões</button><button className="btn outline" onClick={()=>onGo('simulados')}><ClipboardList size={18}/> Fazer simulado</button><button className="btn outline" onClick={()=>onGo('diagnostic')}><Target size={18}/> Diagnóstico</button><button className="btn outline" onClick={()=>onGo('reviews')}><RotateCcw size={18}/> Revisões {activity.dueReviews>0?`(${activity.dueReviews})`:''}</button><button className="btn outline" onClick={()=>onGo('plans')}><CalendarDays size={18}/> Meu plano</button><button className="btn outline" onClick={()=>onGo('performance')}><BarChart3 size={18}/> Meu desempenho</button></div><div className="development-note"><span>✧</span><p><strong>Progresso sem dados inventados.</strong> Os números acima vêm das atividades demonstrativas registradas. Contas conectadas usam a nuvem; ciclos adaptativos completos e avaliações oficiais ainda estão em construção.</p></div>
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
 const [studyContext,setStudyContext]=useState<KogStudyContext|null>(null);
 const [practiceFocus,setPracticeFocus]=useState<{subject:string;topic:string;questionId:string}|null>(null);
 const [learningFocus,setLearningFocus]=useState<{subject:string;lessonId:string}|null>(null);
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
 async function signout(){await getSupabase()?.auth.signOut();setAvatarUrl(null);setMobileMenu(false);setAssistantOpen(false);setStudyContext(null);}
 function navigate(v:View){ if(v==='tutor'){setAssistantOpen(true);}else{if(v!==view)setStudyContext(null);if(v==='questions')setPracticeFocus(null);if(v==='learn'||v==='trails'||v==='subjects')setLearningFocus(null);setView(v);}setMobileMenu(false); }
 function practiceFromLesson(focus:{subject:string;topic:string;questionId:string}){setPracticeFocus(focus);setStudyContext(null);setView('questions');setMobileMenu(false);}
 function openFocusedLesson(focus:{subject:string;lessonId:string}){setLearningFocus(focus);setStudyContext(null);setView('trails');setMobileMenu(false);} 
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
 view==='learn'||view==='trails'||view==='subjects'?<LearningTrails key={`${user?.id||'guest'}-${view}-${learningFocus?.lessonId||'all'}`} focus={learningFocus} mode={view} userId={user?.id||null} onTutor={()=>setAssistantOpen(true)} onContextChange={setStudyContext} onPractice={practiceFromLesson}/>: 
 view==='questions'||view==='simulados'||view==='performance'?<PracticeSpace key={`${user?.id||'guest'}-${view}-${practiceFocus?.questionId||'all'}`} mode={view} userId={user?.id||null} focus={view==='questions'?practiceFocus:null} onTutor={()=>setAssistantOpen(true)} onContextChange={setStudyContext}/>: 
 view==='diagnostic'?<DiagnosticSpace key={user?.id||'guest'} userId={user?.id||null} onContextChange={setStudyContext} onLearn={openFocusedLesson} onTutor={()=>setAssistantOpen(true)}/>: 
 view==='reviews'?<ReviewSpace key={user?.id||'guest'} userId={user?.id||null} onContextChange={setStudyContext} onTutor={()=>setAssistantOpen(true)} onPractice={practiceFromLesson} onLearn={openFocusedLesson}/>: 
 view==='plans'?<StudyPlanner key={user?.id||'guest'} profile={actualProfile} userId={user?.id||null} onContextChange={setStudyContext} onTutor={()=>setAssistantOpen(true)}/>: 
 view==='profile'||view==='settings'?<AccountSettings key={`${user?.id||'guest'}-${view}`} user={user} profile={actualProfile} avatarUrl={avatarUrl} onSave={saveAccountChanges} onAvatarChanged={changeAvatar} onLogin={()=>setAuthOpen(true)} onPreferences={()=>setEditing(true)} onSignout={signout} theme={theme} onThemeChange={changeTheme} recoveryMode={recoveryMode} openSecurity={view==='settings'}/>:
 <ComingSoon view={view} onGo={navigate}/>}
 <footer className="app-footer">© Kognos · Conhecimento que evolui com você. <span>Versão 1.0 · Projeto em desenvolvimento</span></footer></div><nav className="mobile-bottom-nav" aria-label="Navegação rápida">{(['dashboard','learn','plans','tutor','profile'] as View[]).map(v=><button key={v} className={view===v?'active':''} onClick={()=>navigate(v)}><span><NavIcon view={v}/></span>{v==='dashboard'?'Início':v==='learn'?'Estudar':v==='plans'?'Plano':v==='tutor'?'Tutor':'Perfil'}</button>)}</nav><KogAssistant open={assistantOpen} onOpen={()=>setAssistantOpen(true)} onClose={()=>setAssistantOpen(false)} profile={actualProfile} user={user} onLogin={()=>setAuthOpen(true)} context={view} studyContext={studyContext}/>
 {authOpen&&<AuthModal onClose={()=>setAuthOpen(false)} onAuthenticated={()=>setView('dashboard')}/>}</div>;
}