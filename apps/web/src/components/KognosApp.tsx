'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';

import {AnimatedPage,AnimatedSidebarScrim,MobileTabIndicator} from './KognosMotion';

import {examBlueprints,type ExamId} from '@/lib/exam-blueprints';
import {examForStudent} from '@/lib/exam-syllabus';
import type {KogStudyContext} from '@/lib/kog-study-context';
import KogMascot3D from './KogMascot3D';
import WeeklyProgressChart from './WeeklyProgressChart';
import {weeklyStudyActivity,type WeeklyStudyPoint} from '@/lib/dashboard-weekly-activity';
import { KognosSelect, KognosDateField, KognosRange } from './OnboardingControls';
import { weeklyStudyHours } from '@/lib/onboarding-helpers';
import AccountSettings, {ProfileAvatar} from './AccountSettings';


import type {AchievementSummary} from '@/lib/ai-achievements';



import {reviewItems,reviewCounts} from '@/lib/adaptive-review';




import {statsFromAttempts,type QuestionAttempt} from '@/lib/demo-questions';
import {LayoutDashboard, BookOpen, LibraryBig, GraduationCap, ClipboardList, CalendarDays, RotateCcw, Bot, BarChart3, UserRound, Settings, Trophy, ListChecks, Search, ArrowRight, ArrowLeft, Check, Plus, Clock3, ShieldCheck, BookOpenText, PanelLeftClose, PanelLeftOpen, Menu, Sun, Moon, Sparkles, CheckCircle2, Target, Compass, Landmark, Medal, PencilLine, BookOpenCheck, BrainCircuit, Cloud, CircleHelp, CalendarCheck2, Zap, type LucideIcon} from 'lucide-react';
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
function WorkspaceLoading(){return <main className="app-content k-workspace-loading" role="status" aria-live="polite">
 <span className="k-workspace-loading-pulse" aria-hidden="true"/>
 <p>Preparando esta área de estudos…</p>
</main>;}
const KogAssistant=dynamic(()=>import('./KogAssistant'),{loading:()=> <div role="status" className="k-kog-chunk-loading">Abrindo o tutor Kog…</div>});
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
const NAV: {key:View; icon:string;label:string;status?:string}[] = [
  {key:'dashboard',icon:'◫',label:'Visão geral'},
  {key:'learn',icon:'▤',label:'Aprender'},
  {key:'trails',icon:'◇',label:'Trilhas de aprendizagem'},
  {key:'subjects',icon:'▧',label:'Minhas disciplinas'},
  {key:'questions',icon:'▦',label:'Banco de questões'},
  {key:'simulados',icon:'◉',label:'Simulados'},
  {key:'sources',icon:'▤',label:'Matrizes e editais'},
  {key:'diagnostic',icon:'◈',label:'Diagnóstico inicial'},
  {key:'weekly',icon:'◈',label:'Simulado semanal (20–90)'},
  {key:'plans',icon:'◷',label:'Meu planejamento'},
  {key:'reviews',icon:'↻',label:'Revisões inteligentes'},
  {key:'calendar',icon:'▣',label:'Calendário'},
  {key:'tutor',icon:'✧',label:'Kog · Tutor IA'},
  {key:'performance',icon:'▥',label:'Desempenho'},
  {key:'achievements',icon:'★',label:'Conquistas'},
  {key:'profile',icon:'◎',label:'Meu perfil'},
  {key:'settings',icon:'⚙',label:'Configurações'},
];

const NAV_ICONS:Record<View,LucideIcon>={
 dashboard:LayoutDashboard,learn:BookOpen,trails:GraduationCap,subjects:LibraryBig,
 questions:ListChecks,simulados:ClipboardList,sources:BookOpenText,diagnostic:Target,weekly:ClipboardList,plans:CalendarDays,reviews:RotateCcw,
 calendar:CalendarDays,tutor:Bot,performance:BarChart3,achievements:Trophy,
 profile:UserRound,settings:Settings,
};
/** All existing routes remain reachable, but the sidebar uses the compact
 * hierarchy of the requested E-Study reference instead of long AI-colored groups.
 */
const NAV_PRIMARY:View[]=['dashboard','tutor','learn','subjects'];
const NAV_SECONDARY:View[]=['calendar'];
const NAV_PRACTICE:View[]=['questions','simulados'];
const NAV_MORE:View[]=['trails','diagnostic','weekly','sources','performance','reviews','achievements','settings'];
const SHORT_NAV_LABELS:Partial<Record<View,string>>={
 dashboard:'Início',tutor:'Tutor Kog',learn:'Estudar',subjects:'Disciplinas',
 questions:'Questões',simulados:'Simulados',plans:'Meu plano',
 reviews:'Revisões',achievements:'Conquistas',settings:'Configurações',
 trails:'Trilhas',diagnostic:'Diagnóstico',weekly:'Simulado semanal',sources:'Matrizes e editais',
 calendar:'Calendário',performance:'Desempenho',profile:'Meu perfil'
};
function SideNavigationItem({view,active,onSelect}:{view:View;active:boolean;onSelect:(view:View)=>void}){
 const item=NAV.find(entry=>entry.key===view)!;
 return <button type="button" onClick={()=>onSelect(view)} className={`side-nav-item ${active?'active':''}`}
   title={item.label} aria-label={item.label} aria-current={active?'page':undefined}>
   <span className="k-side-icon"><NavIcon view={view}/></span>
   <span className="k-side-label">{SHORT_NAV_LABELS[view]||item.label}</span>
   {item.status&&<small title={item.status}>◌</small>}
 </button>;
}
function NavIcon({view}:{view:View}){const Icon=NAV_ICONS[view];return <Icon size={19} strokeWidth={1.8} aria-hidden="true"/>;}
const GOAL_ICONS: Record<Goal, LucideIcon> = { enem:Target, vestibular:GraduationCap, etec:BookOpenCheck, school:PencilLine, contest:Landmark, olympiad:Medal, personal:Compass };
function GoalIcon({goal}:{goal:Goal}){const Icon=GOAL_ICONS[goal];return <Icon size={23} strokeWidth={1.7} aria-hidden="true"/>;}
function StatCard({icon:Icon,label,value,note}:{icon:LucideIcon;label:string;value:string|number;note:string}) {return <div className="stat-card kognos-stat"><span className="stat-icon"><Icon size={19} strokeWidth={1.9} aria-hidden="true"/></span><span className="stat-label">{label}</span><strong>{value}</strong><small>{note}</small></div>;}

const choices = <T extends string,>(items:Record<T,string>,selection:T[],toggle:(v:T)=>void) =>
  Object.entries(items).map(([value,label])=><button key={value} type="button" className={`choice-pill ${selection.includes(value as T)?'selected':''}`} onClick={()=>toggle(value as T)} aria-pressed={selection.includes(value as T)}><span className="choice-check" aria-hidden="true">{selection.includes(value as T)?<Check size={15}/>:<Plus size={15}/>}</span>{label as string}</button>);

function Logo({small=false}:{small?:boolean}) {
  return <div className="logo-cluster"><div className="logo-mark"><Image src="/brand/kognos-mark.webp" width={small?42:56} height={small?42:56} alt="Símbolo Kognos" priority /></div><div className="logo-word"><strong>Kognos<span>.</span></strong>{!small&&<small>APRENDIZAGEM INTELIGENTE</small>}</div></div>;
}

function AuthModal({onClose,onAuthenticated,standalone=false}:{onClose:()=>void;onAuthenticated:()=>void;standalone?:boolean}){
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

function Onboarding({start,onFinish,onSignout,email}:{start:StudentProfile;onFinish:(p:StudentProfile)=>Promise<void>;onSignout:()=>void;email:string}){
  const [step,setStep]=useState(0);
  const [p,setP]=useState<StudentProfile>({...start});
  const [declared,setDeclared]=useState<'none'|'tdah'|'dislexia'|'both'|'skip'>('skip');
  const [saving,setSaving]=useState(false);
  const [error,setError]=useState('');
  const [dateError,setDateError]=useState(false);
  const [proposedExam,setProposedExam]=useState<ExamId|null>(null);
  const update=(v:Partial<StudentProfile>)=>{setP(old=>({...old,...v}));setError('');};
  const toggleStyle=(s:TeachingStyle)=>update({styles:p.styles.includes(s)?p.styles.filter(v=>v!==s):[...p.styles,s]});
  const toggleAdaptation=(s:Adaptation)=>update({adaptations:p.adaptations.includes(s)?p.adaptations.filter(v=>v!==s):[...p.adaptations,s]});
  function chooseExam(exam:ExamId){
    const previous=examForStudent(p);
    if(previous&&previous!==exam&&Boolean(start.completedAt)){setProposedExam(exam);return;}
    setProposedExam(null);update({examFocus:exam,syllabusExams:[exam]});
  }
  function confirmExam(keepPrior:boolean){
    if(!proposedExam)return;
    const old=examForStudent(p);
    update({examFocus:proposedExam,syllabusExams:keepPrior?[...new Set([...(p.syllabusExams||[]),...(old?[old]:[]),proposedExam])]:[proposedExam]});
    setProposedExam(null);
  }
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
    if(step===0&&proposedExam)return 'Escolha como deseja atualizar seus temas antes de continuar.';
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
    <header className="onboard-header"><div className="onboard-header-inner"><Logo/><div className="onboard-utilities"><span className="subtle-tag">UMA JORNADA FEITA PARA VOCÊ</span><span className="onboard-account-email" title={email}>{email}</span><button type="button" onClick={onSignout} className="btn outline small">Sair</button></div></div></header>
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
            <div className="k-field-group"><KognosSelect label="Prova principal (matriz de conteúdos)" value={p.examFocus||examForStudent(p)||'enem'} options={(Object.entries(examBlueprints) as [ExamId,(typeof examBlueprints)[ExamId]][]).map(([value,item])=>({value,label:item.label}))} onChange={chooseExam}/><small className="k-field-hint">As matérias são vinculadas à instituição selecionada. Editais, séries e modalidades específicas devem ser conferidos nas fontes oficiais.</small>
              {proposedExam&&<div className="k-exam-change-choice" role="group" aria-label="Como atualizar os conteúdos de estudo"><p>Você está mudando sua prova. Deseja substituir os temas antigos ou manter os antigos e acrescentar os da nova prova?</p><button type="button" className="btn primary small" onClick={()=>confirmExam(false)}>Usar somente a nova prova</button><button type="button" className="btn outline small" onClick={()=>confirmExam(true)}>Manter e acrescentar temas</button><button type="button" className="text-button" onClick={()=>setProposedExam(null)}>Cancelar</button></div>}
            </div>
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
          <div className="summary-card"><div><small>COMO VAMOS CHAMAR VOCÊ</small><strong>{p.nickname||'Estudante'}</strong></div><div><small>OBJETIVO PRINCIPAL</small><strong>{p.goals.map(g=>goalLabels[g]).join(' · ')}{p.targetName?` · ${p.targetName}`:''}</strong></div><div><small>MATRIZ DE ESTUDOS</small><strong>{(p.syllabusExams.length?p.syllabusExams:[examForStudent(p)].filter(Boolean) as ExamId[]).map(e=>examBlueprints[e].label).join(' · ')||'A definir'}</strong></div><div><small>SEU RITMO</small><strong>{p.dailyMinutes} minutos por dia · {p.weeklyDays.length} dias na semana · sessões de {p.sessionMinutes} min</strong></div><div><small>COMO VOCÊ APRENDE</small><strong>{p.styles.map(s=>styleLabels[s]).join(' · ')}</strong></div><div><small>RECURSOS DE ACESSIBILIDADE</small><strong>{p.adaptations.length?`${p.adaptations.length} adaptações selecionadas`:'Configuração padrão'}</strong></div></div><div className="k-tip"><CheckCircle2 size={19}/><span>Seu perfil ficará vinculado à sua conta. Da próxima vez, você poderá continuar diretamente pelo painel.</span></div>
        </>}
        {error&&<div className="message warning" role="alert">{error}</div>}
        {profileSetupIssue(error)&&<section className="onboard-db-help" aria-label="Configuração do Supabase necessária"><strong>Como liberar o cadastro</strong><p>No Supabase, abra <b>SQL Editor</b> e verifique se a migração <code>0001_core_schema.sql</code> criou <code>public.profiles</code>. Execute também <code>0003_account_and_avatars.sql</code> para os campos adicionais, respeitando a ordem das migrações. Confira se o projeto do seu <code>.env.local</code> é o mesmo do SQL Editor.</p><small>Depois recarregue a página e tente salvar. Suas escolhas continuam aqui até você sair.</small></section>}
        <div className="wizard-actions"><div>{step>0&&<button type="button" className="btn outline" onClick={()=>{setStep(step-1);setError('');window.scrollTo({top:0,behavior:'smooth'});}}><ArrowLeft size={17}/> Voltar</button>}</div><button type="button" className="btn primary" disabled={saving} onClick={proceed}>{saving?'Salvando…':step===4?'Começar a aprender':'Continuar'}{!saving&&<ArrowRight size={18}/>}</button></div>
        <p className="k-wizard-footnote">Seu ritmo, seus objetivos. <span>Você tem controle sobre suas preferências.</span></p>
      </section>
      <aside className="onboard-visual" aria-hidden="true"><div className="k-visual-top"><span className="k-visual-brand"><Sparkles size={16}/> APRENDIZAGEM INTELIGENTE</span><span>01 / KOGNOS</span></div><div className="hero-image"><Image src="/brand/kognos-hero.webp" alt="" fill sizes="(max-width: 920px) 100vw, 38vw" priority/></div><div className="visual-message"><span className="k-visual-rule"/><strong>Conhecimento que evolui com você.</strong><p>Um espaço de estudo no seu ritmo, com inteligência e clareza em cada passo.</p></div><div className="visual-footer"><span>KOGNOS / APRENDIZAGEM INTELIGENTE</span><span>v1.7</span></div></aside>
    </div>
  </main>;
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
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('trails')}><span className="k-shortcut-icon k-shortcut-violet"><GraduationCap size={25}/></span><strong>Trilhas</strong><small>Aprenda passo a passo</small><ArrowRight size={17}/></button>
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('questions')}><span className="k-shortcut-icon k-shortcut-cyan"><ListChecks size={25}/></span><strong>Questões</strong><small>Pratique seus conhecimentos</small><ArrowRight size={17}/></button>
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('simulados')}><span className="k-shortcut-icon k-shortcut-blue"><ClipboardList size={25}/></span><strong>Simulados</strong><small>Teste seu aprendizado</small><ArrowRight size={17}/></button>
        <button type="button" className="k-shortcut-card" onClick={()=>onGo('tutor')}><span className="k-shortcut-icon k-shortcut-green"><Bot size={25}/></span><strong>Tutor Kog</strong><small>Tire dúvidas e revise</small><ArrowRight size={17}/></button>
      </div>
    </section>
    <div className="development-note k-dashboard-data-note"><ShieldCheck size={18}/><p><strong>Seu progresso, sem números inventados.</strong> As estatísticas vêm das respostas e tarefas registradas. O gráfico semanal mostra somente as respostas do acervo demonstrativo, não mede horas de estudo.</p></div>
  </main>;
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
  const [profileError,setProfileError]=useState('');
  const [reloadRequest,setReloadRequest]=useState(0);
  const [assistantOpen,setAssistantOpen]=useState(false);const [assistantInitialized,setAssistantInitialized]=useState(false);
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
     if(account&&!sameAccount)setView(readWorkspaceView(window.sessionStorage,account.id));
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
       setAuthOpen(false);setAssistantOpen(false);setStudyContext(null);
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
   setAvatarUrl(null);setMobileMenu(false);setAssistantOpen(false);setAssistantInitialized(false);setRetainedViews([]);setLessonPracticeRequestId(0);setStudyContext(null);
 }
 function retryProfile(){setProfileError('');setReloadRequest(x=>x+1);}
 function openAssistant(){setAssistantInitialized(true);setAssistantOpen(true);}
 function navigate(v:View){ if(v==='tutor'){openAssistant();}else{if(v!==view)setStudyContext(null);/* Preserve the current question selection when returning to the bank. */if(v==='learn'||v==='trails'||v==='subjects')setLearningFocus(null);if(v==='plans')setPlannerDate('');if(v==='diagnostic')setDiagnosticCycle('baseline');setView(v);}setMobileMenu(false); }
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
 function openFocusedLesson(focus:{subject:string;lessonId:string}){setLearningFocus(focus);setStudyContext(null);setView('trails');setMobileMenu(false);} 
 function changeTheme(v:'dark'|'light'){setTheme(v);window.localStorage.setItem('kognos_theme_v1',v);}
 function toggleSidebar(){setSidebarCollapsed(old=>{localStorage.setItem('kognos_sidebar_collapsed_v1',String(!old));return !old;});}
 async function saveAccountChanges(p:StudentProfile){const normalized=normalizeProfile(p);if(user){const sb=getSupabase();if(!sb)throw new Error('Supabase indisponível.');const {error}=await sb.from('profiles').update({display_name:normalized.nickname,username:normalized.username||null,biography:normalized.biography,preferences:normalized}).eq('id',user.id);if(error){if(error.code==='23505')throw new Error('Este nome de usuário já está em uso. Escolha outro.');throw error;}}else window.localStorage.setItem(STORAGE_KEY,JSON.stringify(normalized));setProfile(normalized);}
 function changeAvatar(url:string|null,_path:string|null){setAvatarUrl(url);}
 const actualProfile=profile??initialProfile;
 const accessibility=[actualProfile.adaptations.includes('larger_text')?'larger-text':'',actualProfile.adaptations.includes('high_contrast')?'strong-contrast':'',actualProfile.adaptations.includes('reduced_distractions')?'less-motion':''].join(' ');
 const disableAnimations=actualProfile.adaptations.includes('reduced_distractions');
 if(loading)return <div className="loading-page"><Logo/><p>Preparando seu espaço de aprendizagem…</p></div>;
 if(!cloud)return <main className={`k-auth-unconfigured theme-${theme}`}><Logo/><section className="k-auth-unconfigured-card"><h1>Configure o login do Kognos</h1><p>Para acessar a plataforma é necessário configurar as variáveis públicas do Supabase no arquivo <code>apps/web/.env.local</code>.</p><p>Depois de salvar o arquivo, reinicie o servidor. Não coloque senhas nem chaves privadas no GitHub.</p></section></main>;
 if(profileError)return <main className={`k-auth-unconfigured theme-${theme}`}><Logo/><section className="k-auth-unconfigured-card" role="alert"><h1>Não foi possível carregar seu perfil</h1><p>{profileError}</p><p>Se você já possui conta, não precisa fazer a personalização novamente. Corrija a configuração e tente carregar o perfil.</p><div className="k-auth-error-actions"><button type="button" className="btn primary" onClick={retryProfile}>Tentar novamente</button>{user&&<button type="button" className="btn outline" onClick={()=>void signout()}>Sair da conta</button>}</div></section></main>;
 if(!user)return <div className={`theme-${theme}`}><AuthModal standalone onClose={()=>{}} onAuthenticated={()=>setAuthOpen(false)}/></div>;
 if(!profile||editing)return <div className={`${accessibility} theme-${theme}`}><Onboarding key={`${user.id}-${editing?'edit':'new'}`} start={actualProfile} onFinish={saveProfile} onSignout={()=>void signout()} email={user.email||'Conta conectada'}/></div>;
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
  </nav><div className="sidebar-bottom"><button title="Meu perfil" className="side-user" onClick={()=>setView('profile')}><ProfileAvatar url={avatarUrl} name={actualProfile.nickname}/><span><strong>{actualProfile.nickname}</strong><small>{user?'Conta conectada':'Perfil local'}</small></span><b>⋯</b></button></div></aside><AnimatedSidebarScrim open={mobileMenu} disabled={disableAnimations} onClose={()=>setMobileMenu(false)}/>
 <div className="app-main"><header className="app-topbar"><button className="mobile-menu-btn" onClick={()=>setMobileMenu(!mobileMenu)} aria-label={mobileMenu?"Fechar menu":"Abrir menu"} aria-expanded={mobileMenu}><Menu size={20}/></button><div className="crumbs">Kognos <span>/</span> {NAV.find(x=>x.key===view)?.label}</div>
 <div className="top-right"><div className="global-search"><button className="search-trigger" onClick={()=>setSearchOpen(!searchOpen)} aria-expanded={searchOpen}><Search size={16}/><span>Buscar recursos…</span></button>{searchOpen&&<div className="search-popover"><input autoFocus placeholder="Buscar página ou módulo…" value={search} onChange={e=>setSearch(e.target.value)}/>{NAV.filter(x=>x.key!=='plans'&&x.label.toLowerCase().includes(search.toLowerCase())).map(x=><button key={x.key} onClick={()=>{navigate(x.key);setSearchOpen(false);setSearch('');}}>{x.label} {x.status&&<small>Em breve</small>}</button>)}</div>}</div><button className="icon-top-btn" onClick={()=>changeTheme(theme==='dark'?'light':'dark')} aria-label="Alternar tema">{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button><button className="icon-top-btn" onClick={()=>openAssistant()} aria-label="Abrir Kog tutor"><Sparkles size={18}/></button>{user?<button className="avatar-top-btn" onClick={()=>setView('profile')} aria-label="Abrir perfil"><ProfileAvatar url={avatarUrl} name={actualProfile.nickname}/></button>:<button className="btn outline small" onClick={()=>setAuthOpen(true)}>Entrar / Criar conta</button>}</div></header>
 <AnimatedPage page={view} disabled={disableAnimations}>
 {view==='dashboard'?<Dashboard p={actualProfile} onGo={navigate} onEdit={()=>setEditing(true)} user={user}/>:
 view==='tutor'?<TutorLanding profile={actualProfile} onOpen={()=>openAssistant()}/>:
 view==='subjects'?<SubjectDashboard key={user?.id||'guest'} userId={user?.id||null} onContextChange={setStudyContext} onTutor={()=>openAssistant()} onOpenTrail={openFocusedLesson} onPractice={practiceFromLesson} onGenerateAI={generateForLesson}/>: 
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
 {/* Cache only visited lessons and practice screens. Hidden panels are not
     focusable, do not occupy layout space and never mount for another account. */}
 {retainedViews.includes('learn')&&<div className="k-retained-workspace" hidden={view!=='learn'}>
  <CurriculumRoom key={`${user.id}-learn`} active={view==='learn'} focus={view==='learn'?learningFocus:null}
   userId={user.id} onTutor={()=>openAssistant()} onContextChange={setStudyContext}
   onGenerateAI={generateForLesson}/>
 </div>}
 {retainedViews.includes('trails')&&<div className="k-retained-workspace" hidden={view!=='trails'}>
  <LearningTrails key={`${user.id}-trails`} mode="trails" active={view==='trails'} focus={view==='trails'?learningFocus:null}
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
 <footer className="app-footer">© Kognos · Conhecimento que evolui com você. <span>Versão 1.9 · Projeto em desenvolvimento</span></footer></div><nav className="mobile-bottom-nav" aria-label="Navegação rápida">{(['dashboard','learn','questions','calendar','profile'] as View[]).map(v=><button type="button" key={v} className={view===v?'active':''} onClick={()=>navigate(v)} aria-current={view===v?'page':undefined}>{view===v&&<MobileTabIndicator disabled={disableAnimations}/>}<span><NavIcon view={v}/></span>{v==='dashboard'?'Início':v==='learn'?'Estudar':v==='questions'?'Questões':v==='calendar'?'Calendário':'Perfil'}</button>)}</nav>{assistantInitialized
 ?<KogAssistant open={assistantOpen} onOpen={()=>openAssistant()} onClose={()=>setAssistantOpen(false)} profile={actualProfile} user={user} onLogin={()=>setAuthOpen(true)} context={view} studyContext={studyContext}/>
 :<button type="button" className="kog-launcher k-kog-lightweight-launcher" onClick={openAssistant}
   aria-label="Abrir Kog, tutor de inteligência artificial" title="Pergunte ao Kog">
   <span className="kog-launcher-avatar"><Image src="/brand/kog-mascot.svg" width={50} height={50} alt=""/></span>
   <span className="kog-launcher-label">Pergunte ao Kog <Sparkles size={14}/></span>
  </button>}
 {authOpen&&<AuthModal onClose={()=>setAuthOpen(false)} onAuthenticated={()=>{if(!['sources','questions','simulados'].includes(view))setView('dashboard');}}/>}</div>;
}