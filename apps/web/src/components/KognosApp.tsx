'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';

import {AnimatedPage,AnimatedSidebarScrim} from './KognosMotion';
import Logo from './Logo';
import OnboardingV2 from './OnboardingV2';


import {examBlueprints,publicExamEntries,type ExamId} from '@/lib/exam-blueprints';
import {examForStudent} from '@/lib/exam-syllabus';
import type {KogStudyContext} from '@/lib/kog-study-context';
import KogMascot3D from './KogMascot3D';
import WeeklyProgressChart from './WeeklyProgressChart';
import KognosLoadingOverlay from './KognosLoadingOverlay';
import {weeklyStudyActivity,type WeeklyStudyPoint} from '@/lib/dashboard-weekly-activity';
import { KognosSelect, KognosDateField, KognosRange } from './OnboardingControls';
import { weeklyStudyHours } from '@/lib/onboarding-helpers';
import AccountSettings, {ProfileAvatar} from './AccountSettings';
import ThemeSwitch from './ThemeSwitch';


import type {AchievementSummary} from '@/lib/ai-achievements';



import {reviewItems,reviewCounts} from '@/lib/adaptive-review';




import {statsFromAttempts,type QuestionAttempt} from '@/lib/demo-questions';
import {LayoutDashboard, BookOpen, LibraryBig, GraduationCap, ClipboardList, CalendarDays, RotateCcw, Bot, BarChart3, UserRound, Settings, Trophy, ListChecks, Search, ArrowRight, ArrowLeft, Check, Plus, Clock3, ShieldCheck, BookOpenText, PanelLeftClose, PanelLeftOpen, Menu, Sun, Moon, LogOut, Sparkles, CheckCircle2, Target, Compass, Landmark, Medal, PencilLine, BookOpenCheck, BrainCircuit, Cloud, CircleHelp, CalendarCheck2, Zap, type LucideIcon} from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import {explainProfileDatabaseError, profileSetupIssue} from '@/lib/profile-setup';
import {readStoredStudentProfile} from '@/lib/auth-profile-routing';
import {isRetainedStudyView,rememberStudyView,type RetainedStudyView} from '@/lib/retained-study-views';
import {isSameAuthenticatedAccount,readWorkspaceView,saveWorkspaceView} from '@/lib/workspace-session';
import {lessonForPracticeFocus} from '@/lib/lesson-practice-navigation';
import { getSupabase, isCloudConfigured } from '@/lib/supabase';
import { getCloudAttempts, getCloudTasks } from '@/lib/cloud-study';
import { adaptationLabels, dayLabels, defaultForDyslexia, defaultForTDAH, goalLabels, initialProfile, normalizeProfile, styleLabels, type Adaptation, type Goal, type StudentProfile, type TeachingStyle } from '@/lib/profile';

/** Avoid downloading every study workspace before the login/dashboard is visible.
 * Next.js preloads each route's code when that workspace is first selected.
 */
function WorkspaceLoading(){return <main className="app-content k-workspace-loading"><KognosLoadingOverlay label="Preparando área de estudos"/></main>;}
const KogAssistant=dynamic(()=>import('./KogAssistant'),{loading:()=> <KognosLoadingOverlay label="Abrindo o tutor Kog"/>});
const ExamSources=dynamic(()=>import('./ExamSources'),{loading:()=> <WorkspaceLoading/>});
const PracticeSpace=dynamic(()=>import('./PracticeSpace'),{loading:()=> <WorkspaceLoading/>});
const AchievementSpace=dynamic(()=>import('./AchievementSpace'),{loading:()=> <WorkspaceLoading/>});
const DiagnosticSpace=dynamic(()=>import('./DiagnosticSpace'),{loading:()=> <WorkspaceLoading/>});
const WeeklyExamSpace=dynamic(()=>import('./WeeklyExamSpace'),{loading:()=> <WorkspaceLoading/>});
const ReviewSpace=dynamic(()=>import('./ReviewSpace'),{loading:()=> <WorkspaceLoading/>});
const CurriculumRoom=dynamic(()=>import('./CurriculumRoom'),{loading:()=> <WorkspaceLoading/>});
const LearningTrails=dynamic(()=>import('./LearningTrails'),{loading:()=> <WorkspaceLoading/>});
const SubjectDashboard=dynamic(()=>import('./SubjectDashboard'),{loading:()=> <WorkspaceLoading/>});
const StudyPlanner=dynamic(()=>import('./StudyPlanner'),{loading:()=> <WorkspaceLoading/>});
const StudyCalendar=dynamic(()=>import('./StudyCalendar'),{loading:()=> <WorkspaceLoading/>});

const STORAGE_KEY='kognos_guest_profile_v1';
type View = 'dashboard'|'tutor'|'profile'|'settings'|'learn'|'trails'|'subjects'|'calendar'|'achievements'|'questions'|'simulados'|'sources'|'diagnostic'|'weekly'|'plans'|'reviews'|'performance';

// Navigation items with proper Lucide icons - replaces emoji icons
const NAV: {key:View; label:string;help?:string;status?:string}[] = [
  {key:'dashboard',label:'Visão geral',help:'Seu painel principal com progresso, próximas atividades e acesso rápido'},
  {key:'learn',label:'Aprender',help:'Acesse as aulas organizadas por conteúdo e trilha de aprendizagem'},
  {key:'trails',label:'Trilhas de aprendizagem',help:'Currículo sequenciado com pré-requisitos e progressão guiada'},
  {key:'subjects',label:'Minhas disciplinas',help:'Visão por disciplina com cobertura de prática e próximos tópicos'},
  {key:'questions',label:'Banco de questões',help:'Pratique com questões demonstrativas e geradas por IA'},
  {key:'simulados',label:'Simulados',help:'Teste seu aprendizado com simulados completos cronometrados'},
  {key:'sources',label:'Matrizes e editais',help:'Consulte as matrizes oficiais de ENEM, ETEC e vestibulares'},
  {key:'diagnostic',label:'Diagnóstico inicial',help:'Avaliação exploratória para identificar pontos de partida'},
  {key:'weekly',label:'Simulado semanal',help:'Simulado semanal adaptativo (20–90 questões)'},
  {key:'plans',label:'Meu planejamento',help:'Planejador semanal com sessões personalizadas e metas'},
  {key:'reviews',label:'Revisões inteligentes',help:'Revisão espaçada baseada em desempenho (1/3/7/14 dias)'},
  {key:'calendar',label:'Calendário',help:'Visualize suas sessões de estudo agendadas e progresso'},
  {key:'tutor',label:'Kog · Tutor IA',help:'Tutor inteligente para dúvidas, explicações e planos de estudo'},
  {key:'performance',label:'Desempenho',help:'Estatísticas detalhadas de acertos, tempo e evolução'},
  {key:'achievements',label:'Conquistas',help:'Selos e marcos desbloqueados pelo seu progresso'},
  {key:'profile',label:'Meu perfil',help:'Gerencie suas preferências, metas e configurações de acessibilidade'},
  {key:'settings',label:'Configurações',help:'Ajuste tema, conta, notificações e dados'},
];

// Icon mapping - single source of truth
const NAV_ICONS:Record<View,LucideIcon>={
  dashboard:LayoutDashboard,
  learn:BookOpen,
  trails:GraduationCap,
  subjects:LibraryBig,
  questions:ListChecks,
  simulados:ClipboardList,
  sources:BookOpenText,
  diagnostic:Target,
  weekly:ClipboardList,
  plans:CalendarDays,
  reviews:RotateCcw,
  calendar:CalendarDays,
  tutor:Bot,
  performance:BarChart3,
  achievements:Trophy,
  profile:UserRound,
  settings:Settings,
};
/** All existing routes remain reachable, but the sidebar uses the compact
 * hierarchy of the requested E-Study reference instead of long AI-colored groups.
 */
const NAV_PRIMARY:View[]=['dashboard','tutor','learn','subjects'];
const NAV_SECONDARY:View[]=['calendar'];
const NAV_PRACTICE:View[]=['questions','simulados'];
const NAV_MORE:View[]=['diagnostic','weekly','sources','performance','reviews','achievements','settings'];
const SHORT_NAV_LABELS:Partial<Record<View,string>>={
 dashboard:'Início',tutor:'Tutor Kog',learn:'Estudar',subjects:'Disciplinas',
 questions:'Questões',simulados:'Simulados',plans:'Meu plano',
 reviews:'Revisões',achievements:'Conquistas',settings:'Configurações',
 trails:'Trilhas',diagnostic:'Diagnóstico',weekly:'Simulado semanal',sources:'Matrizes e editais',
 calendar:'Calendário',performance:'Desempenho',profile:'Meu perfil'
};
function SideNavigationItem({view,active,onSelect}:{view:View;active:boolean;onSelect:(view:View)=>void}){
 const item=NAV.find(entry=>entry.key===view)!;
 return <div className="ks-tooltip">
   <button type="button" onClick={()=>onSelect(view)} className={`side-nav-item ${active?'active':''}`}
     title={item.label} aria-label={item.label} aria-current={active?'page':undefined}>
     <span className="k-side-icon"><NavIcon view={view}/></span>
     <span className="k-side-label">{SHORT_NAV_LABELS[view]||item.label}</span>
     {item.status&&<small title={item.status} className="k-side-badge">•</small>}
   </button>
   {item.help && <span className="ks-tooltip-content" role="tooltip">{item.help}</span>}
 </div>;
}
function NavIcon({view}:{view:View}){const Icon=NAV_ICONS[view];return <Icon size={19} strokeWidth={1.8} aria-hidden="true"/>;}
const GOAL_ICONS: Record<Goal, LucideIcon> = { enem:Target, vestibular:GraduationCap, etec:BookOpenCheck, school:PencilLine, contest:Landmark, olympiad:Medal, personal:Compass };
function GoalIcon({goal}:{goal:Goal}){const Icon=GOAL_ICONS[goal];return <Icon size={23} strokeWidth={1.7} aria-hidden="true"/>;}
function StatCard({icon:Icon,label,value,note}:{icon:LucideIcon;label:string;value:string|number;note:string}) {return <div className="stat-card kognos-stat"><span className="stat-icon"><Icon size={19} strokeWidth={1.9} aria-hidden="true"/></span><span className="stat-label">{label}</span><strong>{value}</strong><small>{note}</small></div>;}

const choices = <T extends string,>(items:Record<T,string>,selection:T[],toggle:(v:T)=>void) =>
  Object.entries(items).map(([value,label])=><button key={value} type="button" className={`choice-pill ${selection.includes(value as T)?'selected':''}`} onClick={()=>toggle(value as T)} aria-pressed={selection.includes(value as T)}><span className="choice-check" aria-hidden="true">{selection.includes(value as T)?<Check size={15}/>:<Plus size={15}/>}</span>{label as string}</button>);

function AuthModal({onClose,onAuthenticated,standalone=false,theme,onThemeChange}:{onClose:()=>void;onAuthenticated:()=>void;standalone?:boolean;theme:'dark'|'light';onThemeChange:(value:'dark'|'light')=>void}){
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
  const card=<section className={`auth-card ${standalone?'k-auth-card-embedded':''}`} role={standalone?undefined:"dialog"} aria-modal={standalone?undefined:true} aria-label="Entrar no Kognos">
    <div className="modal-head">{!standalone&&<Logo small/>}{!standalone&&<button className="text-button" aria-label="Fechar" onClick={onClose}>✕</button>}</div>
    {standalone&&mode!=='reset'&&<div className="k-auth-mode-tabs" role="group" aria-label="Opção de acesso">
      <button type="button" aria-pressed={mode==='signin'} className={mode==='signin'?'selected':''} onClick={()=>{setMode('signin');setNotice('');}}>Entrar</button>
      <button type="button" aria-pressed={mode==='signup'} className={mode==='signup'?'selected':''} onClick={()=>{setMode('signup');setNotice('');}}>Criar conta</button>
    </div>}
    <h2>{mode==='signin'?'Bem-vindo de volta':mode==='signup'?'Crie sua conta':'Recuperar acesso'}</h2><p className="muted">{mode==='reset'?'Enviaremos um link para redefinir sua senha.':'Sua conta sincroniza seus estudos e libera o tutor com IA.'}</p>
    {!enabled?<div className="message warning">A nuvem ainda não está configurada. Configure o Supabase pelo README para ativar contas e recuperação.</div>:<form onSubmit={submit} className="field-stack">
      <label>E-mail<input autoComplete="email" type="email" required placeholder="voce@exemplo.com" value={email} onChange={e=>setEmail(e.target.value)}/></label>
      {mode!=='reset'&&<div className="password-input"><label>Senha<input type={showPassword?'text':'password'} minLength={mode==='signup'?12:1} required autoComplete={mode==='signin'?'current-password':'new-password'} value={password} placeholder={mode==='signup'?'No mínimo 12 caracteres':'Sua senha'} onChange={e=>setPassword(e.target.value)}/></label><button type="button" className="password-eye" aria-label={showPassword?'Ocultar senha':'Mostrar senha'} onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Ocultar':'Mostrar'}</button></div>}
      <button className="btn primary full" disabled={pending}>{pending?'Aguarde…':mode==='signin'?'Entrar':mode==='signup'?'Criar conta':'Enviar link de recuperação'}</button>
    </form>}
    {notice&&<div className="message" role="status">{notice}</div>}
    {enabled&&<div className="auth-switches">{!standalone&&<button className="text-button switch-mode" onClick={()=>{setMode(mode==='signup'?'signin':'signup');setNotice('');}}>{mode==='signup'?'Já possui conta? Entrar':'Criar conta'}</button>}<button className="text-button switch-mode" onClick={()=>{setMode(mode==='reset'?'signin':'reset');setNotice('');}}>{mode==='reset'?'Voltar ao login':'Esqueci minha senha'}</button></div>}
    <p className="fine-print">Proteja seu acesso: nunca compartilhe senha ou códigos de verificação.</p>
  </section>;
  if(standalone)return <main className="k-auth-gateway k-auth-v2">
    <div className="k-auth-theme-control"><ThemeSwitch theme={theme} onChange={onThemeChange}/></div>
    <div className="k-auth-shell k-auth-stack">
      <aside className="k-auth-story" aria-label="Conheça o Kognos">
        <div className="k-auth-stage-brand"><Logo small/><span>APRENDIZAGEM INTELIGENTE</span></div>
        <div className="k-auth-story-main">
          <div className="k-auth-portrait-scene">
            <Image src="/brand/kognos-login-friends.svg" width={640} height={378}
              alt="" priority sizes="(max-width: 640px) 340px, 480px"/>
          </div>
          <h1>Seu espaço para <em>evoluir.</em></h1>
          <p>Estude do seu jeito. Conhecimento, clareza e progresso em um só lugar.</p>
        </div>
        <div className="k-auth-story-bubble k-auth-bubble-one" aria-hidden="true"/>
        <div className="k-auth-story-bubble k-auth-bubble-two" aria-hidden="true"/>
        <div className="k-auth-story-bubble k-auth-bubble-three" aria-hidden="true"/>
        <div className="k-auth-story-bubble k-auth-bubble-four" aria-hidden="true"/>
      </aside>
      <div className="k-auth-form-shell">{card}</div>
    </div>
    <p className="k-auth-footer">Kognos · Conhecimento que evolui com você</p>
  </main>;
  return <div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}>{card}</div>;
}
function Dashboard({p,onGo,onEdit,user}:{p:StudentProfile;onGo:(v:View)=>void;onEdit:()=>void;user:User|null}){
  const first=p.nickname.split(' ')[0]||'estudante';
  const [activity,setActivity]=useState<{answered:number;accuracy:number|null;completed:number;activeDays:number;dueReviews:number}>({answered:0,accuracy:null,completed:0,activeDays:0,dueReviews:0});
  const [activityError,setActivityError]=useState('');
  const [weekly,setWeekly]=useState<WeeklyStudyPoint[]>([]);
  const [earned,setEarned]=useState<AchievementSummary|null>(null);
  const [earnedError,setEarnedError]=useState('');
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
        setWeekly(weeklyStudyActivity(safeAttempts));
        setActivity({answered:stats.answered,accuracy:stats.accuracy,completed:Array.isArray(tasks)?tasks.filter(t=>t.done).length:0,activeDays:new Set(safeAttempts.map(a=>a.createdAt.slice(0,10))).size,dueReviews:reviewCounts(reviewItems(safeAttempts)).due});
      } catch(e){if(active){setActivity({answered:0,accuracy:null,completed:0,activeDays:0,dueReviews:0});setWeekly([]);setActivityError(e instanceof Error?e.message:'Não foi possível carregar seu desempenho.');}}
    })();
    return()=>{active=false;};
  },[user]);
  useEffect(()=>{
    if(!user){setEarned(null);setEarnedError('');return;}
    let active=true;
    async function reload(){
      try{
        const client=getSupabase();
        const {data}=await client!.auth.getSession();
        if(!data.session||data.session.user.id!==user?.id)return;
        const response=await fetch('/api/ai-achievements',{
          headers:{Authorization:`Bearer ${data.session.access_token}`},cache:'no-store'
        });
        const result=await response.json();
        if(!response.ok)throw new Error(result.error||'Pontuação indisponível.');
        if(active){setEarned(result as AchievementSummary);setEarnedError('');}
      }catch(e){if(active){setEarned(null);setEarnedError(e instanceof Error?e.message:'Não foi possível carregar sua pontuação.');}}
    }
    void reload();
    window.addEventListener('kognos:ai-answer-recorded',reload);
    return()=>{active=false;window.removeEventListener('kognos:ai-answer-recorded',reload);};
  },[user?.id]);
  return <main className="app-content k-dashboard">
    <header className="k-dashboard-heading">
      <div className="k-dashboard-intro">
        <span className="overline">VISÃO GERAL · SEU ESPAÇO DE ESTUDO</span>
        <h1>Seu espaço de <em>evolução.</em></h1>
        <p>Olá, {first}. Sua jornada continua por aqui, no seu ritmo.</p>
      </div>
      <div className="k-dashboard-heading-actions">
        <span className="mode-badge">{user?<Cloud size={15} aria-hidden="true"/>:<CircleHelp size={15} aria-hidden="true"/>}{user?'Conta sincronizada':'Modo demonstração'}</span>
        <button type="button" className="k-dashboard-icon-button" onClick={()=>onGo('tutor')} title="Perguntar ao Kog" aria-label="Abrir tutor Kog"><Sparkles size={19}/></button>
      </div>
    </header>

    <section className="k-continue-card" aria-labelledby="k-continue-title">
      <div className="k-continue-copy">
        <span className="k-hero-eyebrow"><span className="k-pulse-dot"/> CONTINUAR APRENDENDO</span>
        <h2 id="k-continue-title">Pronto para seu <span>próximo avanço?</span></h2>
        <p>Estude no seu ritmo, retome uma trilha e transforme cada conceito em uma conquista.</p>
        <div className="k-hero-chips">
          <span><Target size={14}/> Foco: {goalLabels[p.goal]}</span>
          <span><Clock3 size={14}/> Plano: {p.dailyMinutes} min/dia</span>
        </div>
        <button type="button" className="btn primary k-hero-button" onClick={()=>onGo('learn')}>Continuar estudando <ArrowRight size={17}/></button>
      </div>
      <div className="k-continue-art" aria-hidden="true">
        <span className="k-art-ring k-art-ring-one"/><span className="k-art-ring k-art-ring-two"/>
        <div className="k-art-center"><BrainCircuit size={44} strokeWidth={1.45}/></div>
        <div className="k-art-note"><span><BookOpenText size={17}/></span><div><strong>Aprenda</strong><small>no seu ritmo</small></div></div>
        <div className="k-art-badge"><CheckCircle2 size={16}/><span>Seu progresso importa</span></div>
        <span className="k-art-dot k-art-dot-one"/><span className="k-art-dot k-art-dot-two"/><span className="k-art-dot k-art-dot-three"/>
      </div>
    </section>

    <section className="k-stat-section" aria-label="Seu desempenho registrado">
      <div className="stat-grid">
        <StatCard icon={BookOpenCheck} label="QUESTÕES CONCLUÍDAS" value={earned?.answered??activity.answered} note={earned?'Histórico da sua conta':'Atividades demonstrativas'}/>
        <StatCard icon={Target} label="TAXA DE ACERTOS" value={(earned?.accuracy??activity.accuracy)===null?'—':`${earned?.accuracy??activity.accuracy}%`} note="Respostas registradas"/>
        <StatCard icon={Zap} label="PONTUAÇÃO XP" value={earned?.xp??'—'} note={earned?`Nível ${earned.level} · ${earned.unlocked} conquistas`:'Consulte Conquistas'}/>
        <StatCard icon={CheckCircle2} label="TAREFAS CONCLUÍDAS" value={activity.completed} note="Do seu planejamento"/>
      </div>
    </section>
    {activityError&&<div className="message warning" role="alert">Falha ao carregar dados da nuvem: {activityError}. Verifique a migração 0004.</div>}
    {earnedError&&<div className="message warning" role="alert">Conquistas indisponíveis: {earnedError}</div>}

    <div className="k-dashboard-detail-grid">
      <section className="k-surface-panel k-weekly-panel" aria-labelledby="k-weekly-heading">
        <div className="k-dashboard-section-heading">
          <div><span className="overline">ACOMPANHE SEU RITMO</span><h2 id="k-weekly-heading">Evolução semanal</h2></div>
          <button type="button" className="k-section-text-action" onClick={()=>onGo('performance')}>Ver desempenho <ArrowRight size={16}/></button>
        </div>
        <WeeklyProgressChart points={weekly}/>
      </section>
      <section className="k-surface-panel k-next-panel" aria-labelledby="k-next-heading">
        <div className="k-dashboard-section-heading">
          <div><span className="overline">O QUE FAZER AGORA</span><h2 id="k-next-heading">Sua próxima etapa</h2></div>
        </div>
        <div className="k-next-list">
          <button type="button" onClick={()=>onGo('plans')} className="k-next-item"><span className="k-next-icon"><CalendarDays size={20}/></span><span><strong>Meu planejamento</strong><small>{p.dailyMinutes} min por dia no seu plano</small></span><ArrowRight size={16}/></button>
          <button type="button" onClick={()=>onGo('reviews')} className="k-next-item"><span className="k-next-icon k-next-icon-cyan"><RotateCcw size={20}/></span><span><strong>Revisões inteligentes</strong><small>{activity.dueReviews>0?`${activity.dueReviews} revisões programadas`:'Confira o que revisar'}</small></span><ArrowRight size={16}/></button>
          <button type="button" onClick={()=>onGo('achievements')} className="k-next-item"><span className="k-next-icon k-next-icon-green"><Trophy size={20}/></span><span><strong>Minhas conquistas</strong><small>{earned?`${earned.unlocked} selos desbloqueados`:'Acompanhe seu progresso'}</small></span><ArrowRight size={16}/></button>
        </div>
        <button type="button" className="btn primary k-next-cta" onClick={()=>onGo('plans')}>Abrir meu plano <ArrowRight size={17}/></button>
      </section>
    </div>

    <section className="k-learning-shortcuts" aria-label="Acessos rápidos">
      <div className="k-dashboard-section-heading">
        <div><span className="overline">EXPLORE A PLATAFORMA</span><h2>Aprenda do seu jeito</h2></div>
        <button type="button" className="k-section-text-action" onClick={onEdit}><Settings size={15}/> Ajustar preferências</button>
      </div>
      <div className="k-shortcut-grid">
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('learn')}><span className="k-shortcut-icon k-shortcut-violet"><GraduationCap size={25}/></span><strong>Estudar</strong><small>Acesse as aulas por conteúdo</small><ArrowRight size={17}/></button>
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('questions')}><span className="k-shortcut-icon k-shortcut-cyan"><ListChecks size={25}/></span><strong>Questões</strong><small>Pratique seus conhecimentos</small><ArrowRight size={17}/></button>
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('simulados')}><span className="k-shortcut-icon k-shortcut-blue"><ClipboardList size={25}/></span><strong>Simulados</strong><small>Teste seu aprendizado</small><ArrowRight size={17}/></button>
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('tutor')}><span className="k-shortcut-icon k-shortcut-green"><Bot size={25}/></span><strong>Tutor Kog</strong><small>Tire dúvidas e revise</small><ArrowRight size={17}/></button>
      </div>
    </section>
    <div className="development-note k-dashboard-data-note"><ShieldCheck size={18}/><p><strong>Seu progresso, sem números inventados.</strong> As estatísticas vêm das respostas e tarefas registradas. O gráfico semanal mostra somente as respostas do acervo demonstrativo, não mede horas de estudo.</p></div>
  </main>;
}

function ComingSoon({view,onGo}:{view:View;onGo:(v:View)=>void}){
 const item=NAV.find(x=>x.key===view);
 return <div className="app-content"><div className="coming-soon"><span className="coming-icon">◇</span><p className="overline">NO ROADMAP DO KOGNOS</p><h1>{item?.label}</h1><p>Estamos implementando este módulo gradualmente, conectado ao banco e ao motor de aprendizagem. Não vamos mostrar dados fictícios como se fossem seus.</p><div><button className="btn primary" onClick={()=>onGo('tutor')}>Conversar com o tutor</button><button className="btn outline" onClick={()=>onGo('dashboard')}>Voltar ao início</button></div></div></div>;
}

export default function KognosApp(){
  const [loading,setLoading]=useState(true);const [user,setUser]=useState<User|null>(null);const [profile,setProfile]=useState<StudentProfile|null>(null);
  const [profileError,setProfileError]=useState('');
  const [reloadRequest,setReloadRequest]=useState(0);
  const [assistantInitialized,setAssistantInitialized]=useState(false);const [tutorReturnView,setTutorReturnView]=useState<View>('dashboard');
   const [retainedViews,setRetainedViews]=useState<readonly RetainedStudyView[]>([]);
  const [view,setView]=useState<View>('dashboard');const [editing,setEditing]=useState(false);const [authOpen,setAuthOpen]=useState(false);const [plannerDate,setPlannerDate]=useState('');const [diagnosticCycle,setDiagnosticCycle]=useState<'baseline'|'weekly'>('baseline');const [mobileMenu,setMobileMenu]=useState(false);const [sidebarCollapsed,setSidebarCollapsed]=useState(false);const [moreMenuOpen,setMoreMenuOpen]=useState(false);const [practiceMenuOpen,setPracticeMenuOpen]=useState(false);
  const [studyContext,setStudyContext]=useState<KogStudyContext|null>(null);
  const [practiceFocus,setPracticeFocus]=useState<{subject:string;topic:string;questionId:string}|null>(null);
  const [aiFocusLessonId,setAiFocusLessonId]=useState<string|null>(null);
  // Increment only after an explicit learner click. Never autogenerate on ordinary navigation.
  const [lessonPracticeRequestId,setLessonPracticeRequestId]=useState(0);
  const [learningFocus,setLearningFocus]=useState<{subject:string;lessonId:string}|null>(null);
  const [avatarUrl,setAvatarUrl]=useState<string|null>(null);const [theme,setTheme]=useState<'dark'|'light'>('light');const [recoveryMode,setRecoveryMode]=useState(false);const [searchOpen,setSearchOpen]=useState(false);const [search,setSearch]=useState('');
  const cloud=useMemo(()=>isCloudConfigured(),[]);
  const authRequestId=useRef(0);
  const authenticatedUserRef=useRef<string|null>(null);
  useEffect(()=>{
   let mounted=true;let sessionEventSeen=false;
   const sb=getSupabase();
   try{
     const preferred=window.localStorage.getItem('kognos_theme_v1');
     if(preferred==='light'||preferred==='dark')setTheme(preferred);
     setSidebarCollapsed(window.localStorage.getItem('kognos_sidebar_collapsed_v1')==='true');
   }catch { /* Storage restrictions must not interfere with authentication. */ }
   if(!sb){setLoading(false);return()=>{mounted=false;};}
   async function resolveAccount(account:User|null){
     const requestId=++authRequestId.current;
     if(!mounted)return;
     const sameAccount=isSameAuthenticatedAccount(authenticatedUserRef.current,account?.id??null);
     if(!sameAccount)setRetainedViews([]); // Clear prior account's retained drafts.
     authenticatedUserRef.current=account?.id??null;
     // Restore the last page only when the account actually changes or after a reload.
     if(account&&!sameAccount){const saved=readWorkspaceView(window.sessionStorage,account.id);setView(saved==='trails'?'learn':saved);}
     setLoading(true);setProfileError('');setUser(account);setProfile(null);setAvatarUrl(null);
     if(!account){setEditing(false);setView('dashboard');setLoading(false);return;}
     // An existing Auth account and a completed learning profile are different states.
     // A fetch error must never be treated as proof of a new account.
     let {data,error}=await sb!.from('profiles')
       .select('display_name,username,biography,avatar_path,preferences').eq('id',account.id).maybeSingle();
     // Some older deployments lack the optional avatar_path column. They should
     // still be able to open an already completed profile without re-onboarding.
     if(error && /avatar_path/i.test(error.message) && /column|schema cache|does not exist/i.test(error.message)){
       const older=await sb!.from('profiles')
         .select('display_name,username,biography,preferences').eq('id',account.id).maybeSingle();
       data=older.data?{...older.data,avatar_path:null}:null;error=older.error;
     }
     if(!mounted||authRequestId.current!==requestId)return;
     if(error){setProfileError(explainProfileDatabaseError(error));setLoading(false);return;}
     setProfile(readStoredStudentProfile(data));
     setLoading(false);
     if(data?.avatar_path){
       const {data:signed}=await sb!.storage.from('kognos-avatars').createSignedUrl(data.avatar_path,3600);
       if(mounted&&authRequestId.current===requestId)setAvatarUrl(signed?.signedUrl||null);
     }
   }
   const {data:listener}=sb.auth.onAuthStateChange((event,session)=>{
     if(!mounted)return;
     if(event==='INITIAL_SESSION')return; // getSession initializes exactly once below.
     if(event==='SIGNED_OUT'){
       sessionEventSeen=true;
       setAuthOpen(false);setAssistantInitialized(false);setStudyContext(null);
       void resolveAccount(null);
     }else if(event==='SIGNED_IN' && session?.user){
       sessionEventSeen=true;
       // Supabase can emit SIGNED_IN again when a tab regains focus.
       // Never tear down the current lesson or generation for the same user.
       if(isSameAuthenticatedAccount(authenticatedUserRef.current,session.user.id))return;
       setAuthOpen(false);setEditing(false);
       void resolveAccount(session.user);
     }else if(event==='PASSWORD_RECOVERY'&&session?.user){
       sessionEventSeen=true;
       setRecoveryMode(true);
       if(!isSameAuthenticatedAccount(authenticatedUserRef.current,session.user.id))void resolveAccount(session.user);
       setView('settings');
     }
   });
   void sb.auth.getSession().then(({data,error})=>{
     if(!mounted||sessionEventSeen)return;
     if(error){setProfileError('Não foi possível verificar sua sessão. Tente entrar novamente.');setLoading(false);return;}
     void resolveAccount(data.session?.user||null);
   }).catch(()=>{if(mounted&&!sessionEventSeen){setProfileError('Não foi possível verificar a sessão. Confira sua conexão e tente novamente.');setLoading(false);}});
   return()=>{mounted=false;authRequestId.current++;listener.subscription.unsubscribe();};
  },[reloadRequest]);
  useEffect(()=>{
    // Do not overwrite the stored page while the profile is still being resolved.
    if(user?.id&&profile&&!loading&&!editing)saveWorkspaceView(window.sessionStorage,user.id,view);
  },[user?.id,profile,loading,editing,view]);
  useEffect(()=>{
   if(user?.id&&profile&&isRetainedStudyView(view))
    setRetainedViews(previous=>rememberStudyView(previous,view));
  },[user?.id,profile,view]);
 async function saveProfile(p:StudentProfile){const normalized=normalizeProfile(p);if(user){const sb=getSupabase();if(!sb)throw new Error('Supabase não configurado.');const {error}=await sb.from('profiles').upsert({id:user.id,display_name:normalized.nickname||null,username:normalized.username||null,biography:normalized.biography,education_stage:normalized.stage,preferences:normalized},{onConflict:'id'});if(error)throw new Error(explainProfileDatabaseError(error));}else{window.localStorage.setItem(STORAGE_KEY,JSON.stringify(normalized));}setProfile(normalized);setEditing(false);setView('dashboard');}
 async function signout(){
   const sb=getSupabase();if(sb)await sb.auth.signOut();
   setAvatarUrl(null);setMobileMenu(false);setAssistantInitialized(false);setRetainedViews([]);setLessonPracticeRequestId(0);setStudyContext(null);
 }
 function retryProfile(){setProfileError('');setReloadRequest(x=>x+1);}
 function openAssistant(){if(view!=='tutor')setTutorReturnView(view);setAssistantInitialized(true);setView('tutor');setMobileMenu(false);}
 function navigate(v:View){ if(v==='trails')v='learn'; if(v==='tutor'){openAssistant();}else{const returningFromTutor=view==='tutor'&&v===tutorReturnView; if(v!==view&&!returningFromTutor)setStudyContext(null);/* Keep the current lesson and study plan on the return trip from Kog. */if(!returningFromTutor&&(v==='learn'||v==='subjects'))setLearningFocus(null);if(!returningFromTutor&&v==='plans')setPlannerDate('');if(!returningFromTutor&&v==='diagnostic')setDiagnosticCycle('baseline');setView(v);}setMobileMenu(false); }
 function openPlannerForDate(date:string){setPlannerDate(date);setStudyContext(null);setView('plans');setMobileMenu(false);}
 function openWeeklyReview(){setDiagnosticCycle('weekly');setStudyContext(null);setView('weekly');setMobileMenu(false);}
 function practiceFromLesson(focus:{subject:string;topic:string;questionId:string}){
  // Legacy practice shortcuts (including ReviewSpace) must not silently route
  // signed-in students to a single fixed demo item.
  const lesson=user?lessonForPracticeFocus(focus):null;
  if(lesson){generateForLesson(lesson.id,true);return;}
  setLessonPracticeRequestId(0);setAiFocusLessonId(null);
  setPracticeFocus(focus);setStudyContext(null);setView('questions');setMobileMenu(false);
 }
 function generateForLesson(lessonId:string,generateNew=false){setLessonPracticeRequestId(previous=>generateNew?previous+1:0);setAiFocusLessonId(lessonId);setPracticeFocus(null);setStudyContext(null);setView('questions');setMobileMenu(false);}
 function openFocusedLesson(focus:{subject:string;lessonId:string}){setLearningFocus(focus);setStudyContext(null);setView('learn');setMobileMenu(false);} 
 function changeTheme(v:'dark'|'light'){setTheme(v);try{window.localStorage.setItem('kognos_theme_v1',v);}catch{/* Storage restrictions must not disable the theme toggle. */}}
 function toggleSidebar(){setSidebarCollapsed(old=>{localStorage.setItem('kognos_sidebar_collapsed_v1',String(!old));return !old;});}
 async function saveAccountChanges(p:StudentProfile){const normalized=normalizeProfile(p);if(user){const sb=getSupabase();if(!sb)throw new Error('Supabase indisponível.');const {error}=await sb.from('profiles').update({display_name:normalized.nickname,username:normalized.username||null,biography:normalized.biography,preferences:normalized}).eq('id',user.id);if(error){if(error.code==='23505')throw new Error('Este nome de usuário já está em uso. Escolha outro.');throw error;}}else window.localStorage.setItem(STORAGE_KEY,JSON.stringify(normalized));setProfile(normalized);}
 function changeAvatar(url:string|null,_path:string|null){setAvatarUrl(url);}
 const actualProfile=profile??initialProfile;
 const accessibility=[actualProfile.adaptations.includes('larger_text')?'larger-text':'',actualProfile.adaptations.includes('high_contrast')?'strong-contrast':'',actualProfile.adaptations.includes('reduced_distractions')?'less-motion':''].join(' ');
 const disableAnimations=actualProfile.adaptations.includes('reduced_distractions');
 if(loading)return <div className="loading-page"><Logo/><KognosLoadingOverlay label="Preparando seu espaço de aprendizagem"/></div>;
 if(!cloud)return <main className={`k-auth-unconfigured theme-${theme}`}><Logo/><section className="k-auth-unconfigured-card"><h1>Configure o login do Kognos</h1><p>Para acessar a plataforma é necessário configurar as variáveis públicas do Supabase no arquivo <code>apps/web/.env.local</code>.</p><p>Depois de salvar o arquivo, reinicie o servidor. Não coloque senhas nem chaves privadas no GitHub.</p></section></main>;
 if(profileError)return <main className={`k-auth-unconfigured theme-${theme}`}><Logo/><section className="k-auth-unconfigured-card" role="alert"><h1>Não foi possível carregar seu perfil</h1><p>{profileError}</p><p>Se você já possui conta, não precisa fazer a personalização novamente. Corrija a configuração e tente carregar o perfil.</p><div className="k-auth-error-actions"><button type="button" className="btn primary" onClick={retryProfile}>Tentar novamente</button>{user&&<button type="button" className="btn outline" onClick={()=>void signout()}>Sair da conta</button>}</div></section></main>;
 if(!user)return <div className={`theme-${theme}`}><AuthModal standalone theme={theme} onThemeChange={changeTheme} onClose={()=>{}} onAuthenticated={()=>setAuthOpen(false)}/></div>;
 if(!profile||editing)return <div className={`${accessibility} theme-${theme}`}><OnboardingV2 key={`${user.id}-${editing?'edit':'new'}`} start={actualProfile} onFinish={saveProfile} onSignout={()=>void signout()} email={user.email||'Conta conectada'}/></div>;
 return <div className={`app-layout theme-${theme} ${sidebarCollapsed?'sidebar-collapsed':''} ${accessibility}`}><aside className={`app-sidebar ${mobileMenu?'mobile-open':''}`}><div className="side-logo"><Logo/><button type="button" className="sidebar-collapse-btn" onClick={toggleSidebar} aria-label={sidebarCollapsed?'Expandir barra lateral':'Recolher barra lateral'} title={sidebarCollapsed?'Expandir menu':'Recolher menu'}>{sidebarCollapsed?<PanelLeftOpen size={17}/>:<PanelLeftClose size={17}/>}</button></div><nav className="side-nav" aria-label="Navegação principal">
    <div className="k-nav-set k-nav-main">{NAV_PRIMARY.map(key=><SideNavigationItem key={key} view={key} active={view===key} onSelect={navigate}/>)}</div>
    <button type="button" className={`k-nav-more-toggle ${NAV_PRACTICE.includes(view)?'selected':''}`}
      onClick={()=>setPracticeMenuOpen(open=>!open)} aria-expanded={practiceMenuOpen||NAV_PRACTICE.includes(view)} aria-controls="kognos-practice-navigation">
      <span className="k-side-icon"><ListChecks size={18} strokeWidth={1.8}/></span><span className="k-side-label">Praticar</span>
      <span className="k-side-chevron"><ArrowRight size={15}/></span>
    </button>
    {(practiceMenuOpen||NAV_PRACTICE.includes(view))&&<div id="kognos-practice-navigation" className="k-nav-set k-nav-expanded">{NAV_PRACTICE.map(key=><SideNavigationItem key={key} view={key} active={view===key} onSelect={navigate}/>)}</div>}
    <div className="k-nav-separator" aria-hidden="true"/>
    <div className="k-nav-set k-nav-secondary">{NAV_SECONDARY.map(key=><SideNavigationItem key={key} view={key} active={view===key} onSelect={navigate}/>)}</div>
    <button type="button" className={`k-nav-more-toggle ${NAV_MORE.includes(view)?'selected':''}`}
      onClick={()=>setMoreMenuOpen(open=>!open)} aria-expanded={moreMenuOpen||NAV_MORE.includes(view)} aria-controls="kognos-more-navigation">
      <span className="k-side-icon"><Menu size={18} strokeWidth={1.8}/></span><span className="k-side-label">Mais recursos</span>
      <span className="k-side-chevron"><ArrowRight size={15}/></span>
    </button>
    {(moreMenuOpen||NAV_MORE.includes(view))&&<div id="kognos-more-navigation" className="k-nav-set k-nav-expanded">{NAV_MORE.map(key=><SideNavigationItem key={key} view={key} active={view===key} onSelect={navigate}/>)}</div>}
  </nav><div className="sidebar-bottom">
  <button type="button" className="k-sidebar-utility k-sidebar-mode"
    role="switch" aria-label="Modo escuro" aria-checked={theme==='dark'}
    title={theme==='dark'?'Ativar modo claro':'Ativar modo escuro'}
    onClick={()=>changeTheme(theme==='dark'?'light':'dark')}>
    <span className="k-sidebar-utility-icon" aria-hidden="true">{theme==='dark'?<Sun size={20}/>:<Moon size={20}/>}</span>
    <span className="k-sidebar-utility-label">{theme==='dark'?'Modo claro':'Modo escuro'}</span>
    <span className="k-sidebar-utility-switch" aria-hidden="true"><span/></span>
  </button>
  <button type="button" className="k-sidebar-utility k-sidebar-signout"
    onClick={()=>void signout()} title="Sair da conta" aria-label="Sair da conta">
    <span className="k-sidebar-utility-icon" aria-hidden="true"><LogOut size={20}/></span>
    <span className="k-sidebar-utility-label">Sair da conta</span>
  </button>
  <button type="button" title="Meu perfil" className="side-user"
    onClick={()=>navigate('profile')} aria-label="Abrir meu perfil">
    <ProfileAvatar url={avatarUrl} name={actualProfile.nickname}/>
    <span><strong>{actualProfile.nickname}</strong><small>{user?'Conta conectada':'Perfil local'}</small></span><b>⋯</b>
  </button>
 </div></aside><AnimatedSidebarScrim open={mobileMenu} disabled={disableAnimations} onClose={()=>setMobileMenu(false)}/>
 <div className="app-main"><header className="app-topbar"><button className="mobile-menu-btn" onClick={()=>setMobileMenu(!mobileMenu)} aria-label={mobileMenu?"Fechar menu":"Abrir menu"} aria-expanded={mobileMenu}><Menu size={20}/></button><div className="crumbs">Kognos <span>/</span> {NAV.find(x=>x.key===view)?.label}</div>
 <div className="top-right"><div className="global-search"><button className="search-trigger" onClick={()=>setSearchOpen(!searchOpen)} aria-expanded={searchOpen}><Search size={16}/><span>Buscar recursos…</span></button>{searchOpen&&<div className="search-popover"><input autoFocus placeholder="Buscar página ou módulo…" value={search} onChange={e=>setSearch(e.target.value)}/>{NAV.filter(x=>x.key!=='plans'&&x.label.toLowerCase().includes(search.toLowerCase())).map(x=><button key={x.key} onClick={()=>{navigate(x.key);setSearchOpen(false);setSearch('');}}>{x.label} {x.status&&<small>Em breve</small>}</button>)}</div>}</div><ThemeSwitch theme={theme} onChange={changeTheme}/><button className="icon-top-btn" onClick={()=>openAssistant()} aria-label="Abrir Kog tutor"><Sparkles size={18}/></button>{user?<button className="avatar-top-btn" onClick={()=>setView('profile')} aria-label="Abrir perfil"><ProfileAvatar url={avatarUrl} name={actualProfile.nickname}/></button>:<button className="btn outline small" onClick={()=>setAuthOpen(true)}>Entrar / Criar conta</button>}</div></header>
 <AnimatedPage page={view} disabled={disableAnimations}>
 {view==='dashboard'?<Dashboard p={actualProfile} onGo={navigate} onEdit={()=>setEditing(true)} user={user}/>:
 view==='tutor'?null:
 view==='subjects'?<SubjectDashboard preferredExam={examForStudent(actualProfile)} key={user?.id||'guest'} userId={user?.id||null} onContextChange={setStudyContext} onTutor={()=>openAssistant()} onOpenTrail={openFocusedLesson} onPractice={practiceFromLesson} onGenerateAI={generateForLesson}/>: 
 isRetainedStudyView(view)?(!retainedViews.includes(view)?<WorkspaceLoading/>:null):
 view==='performance'?<PracticeSpace key={`${user?.id||'guest'}-performance`} mode="performance" userId={user?.id||null} profile={actualProfile} onTutor={()=>openAssistant()} onLogin={()=>setAuthOpen(true)} onContextChange={setStudyContext} onOpenLesson={openFocusedLesson} onGenerateLesson={id=>generateForLesson(id,true)}/>: 
 view==='sources'?<ExamSources key={user?.id||'guest'} userId={user?.id||null} onLogin={()=>setAuthOpen(true)} onQuestionBank={()=>navigate('questions')}/>: 
 view==='achievements'?<AchievementSpace key={user?.id||'guest'} userId={user?.id||null} onPractice={()=>navigate('questions')}/>: 
 view==='weekly'?<WeeklyExamSpace key={user?.id||'guest'} userId={user?.id||null} profile={actualProfile} onBank={()=>navigate('simulados')} onPlanner={()=>navigate('plans')} onContextChange={setStudyContext} onTutor={()=>openAssistant()}/>:
  view==='diagnostic'?<DiagnosticSpace key={`${user?.id||'guest'}-${diagnosticCycle}`} cycle={diagnosticCycle} userId={user?.id||null} onContextChange={setStudyContext} onLearn={openFocusedLesson} onTutor={()=>openAssistant()} onPlan={()=>navigate('plans')}/>:  
 view==='reviews'?<ReviewSpace key={user?.id||'guest'} userId={user?.id||null} onContextChange={setStudyContext} onTutor={()=>openAssistant()} onPractice={practiceFromLesson} onLearn={openFocusedLesson}/>: 
 view==='calendar'?<StudyCalendar key={user?.id||'guest'} userId={user?.id||null} onContextChange={setStudyContext} onPlanner={openPlannerForDate} onTutor={()=>openAssistant()}/>: 
 view==='plans'?<StudyPlanner key={user?.id||'guest'} profile={actualProfile} userId={user?.id||null} initialDate={plannerDate||undefined} onCalendar={()=>navigate('calendar')} onDiagnostic={()=>navigate('diagnostic')} onWeeklyReview={openWeeklyReview} onLearn={openFocusedLesson} onContextChange={setStudyContext} onTutor={()=>openAssistant()}/>:  
 view==='profile'||view==='settings'?<AccountSettings key={`${user?.id||'guest'}-${view}`} user={user} profile={actualProfile} avatarUrl={avatarUrl} onSave={saveAccountChanges} onAvatarChanged={changeAvatar} onLogin={()=>setAuthOpen(true)} onPreferences={()=>setEditing(true)} onSignout={signout} theme={theme} onThemeChange={changeTheme} recoveryMode={recoveryMode} openSecurity={view==='settings'}/>:
 <ComingSoon view={view} onGo={navigate}/>}

 </AnimatedPage>
 {/* The tutor is a dedicated workspace, retained after first visit so the conversation survives tab changes. */}
 {(assistantInitialized||view==='tutor')&&<div className="kognos-tutor-workspace" hidden={view!=='tutor'}>
   <KogAssistant key={user.id} active={view==='tutor'} onBack={()=>navigate(tutorReturnView)} profile={actualProfile} user={user} onLogin={()=>setAuthOpen(true)} context={tutorReturnView} studyContext={studyContext}/>
 </div>}
 {/* Cache only visited lessons and practice screens. Hidden panels are not
     focusable, do not occupy layout space and never mount for another account. */}
 {retainedViews.includes('learn')&&<div className="k-retained-workspace" hidden={view!=='learn'}>
  <CurriculumRoom key={`${user.id}-learn`} active={view==='learn'} focus={view==='learn'?learningFocus:null} preferredExam={examForStudent(actualProfile)}
   userId={user.id} onTutor={()=>openAssistant()} onContextChange={setStudyContext}
   onGenerateAI={generateForLesson} onOpenSimulados={()=>navigate('simulados')}/>
 </div>}
 {retainedViews.includes('trails')&&<div className="k-retained-workspace" hidden={view!=='trails'}>
  <LearningTrails key={`${user.id}-trails`} preferredExam={examForStudent(actualProfile)} mode="trails" active={view==='trails'} focus={view==='trails'?learningFocus:null}
   userId={user.id} onTutor={()=>openAssistant()} onContextChange={setStudyContext}
   onPractice={practiceFromLesson} onGenerateAI={generateForLesson} onSeeTrails={openFocusedLesson}/>
 </div>}
 {retainedViews.includes('questions')&&<div className="k-retained-workspace" hidden={view!=='questions'}>
  <PracticeSpace key={`${user.id}-questions-${practiceFocus?.questionId||'all'}-${aiFocusLessonId||'browse'}-${lessonPracticeRequestId}`} mode="questions" active={view==='questions'}
   userId={user.id} profile={actualProfile} focus={practiceFocus} aiFocusLessonId={aiFocusLessonId} lessonPracticeRequestId={lessonPracticeRequestId}
   onTutor={()=>openAssistant()} onLogin={()=>setAuthOpen(true)} onContextChange={setStudyContext} onOpenLesson={openFocusedLesson} onGenerateLesson={id=>generateForLesson(id,true)}/>
 </div>}
 {retainedViews.includes('simulados')&&<div className="k-retained-workspace" hidden={view!=='simulados'}>
  <PracticeSpace key={`${user.id}-simulados`} mode="simulados" active={view==='simulados'}
   userId={user.id} profile={actualProfile} onTutor={()=>openAssistant()} onLogin={()=>setAuthOpen(true)} onContextChange={setStudyContext} onOpenLesson={openFocusedLesson} onGenerateLesson={id=>generateForLesson(id,true)}/>
 </div>}
 <footer className="app-footer">© Kognos · Conhecimento que evolui com você. <span>Versão 1.9 · Projeto em desenvolvimento</span></footer></div>
 {authOpen&&<AuthModal theme={theme} onThemeChange={changeTheme} onClose={()=>setAuthOpen(false)} onAuthenticated={()=>{if(!['sources','questions','simulados'].includes(view))setView('dashboard');}}/>}</div>;
}
