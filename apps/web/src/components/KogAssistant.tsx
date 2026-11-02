'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, BookOpenText, Check, ChevronDown, Maximize2, Minimize2, MessageCircle, RotateCcw, Send, Sparkles, X } from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { getSupabase } from '@/lib/supabase';
import { goalLabels, type StudentProfile } from '@/lib/profile';
import {findLearningLesson} from '@/lib/learning-catalog';
import KogMascot3D from './KogMascot3D';
import { KognosSelect, type KognosOption } from './KognosFields';
import { subjectForView, quickPromptForView, type KogContext } from '@/lib/kog-context';
import {contextualKogPrompts,previewKogStudyContext,findDemoQuestion,type KogStudyContext} from '@/lib/kog-study-context';
import {localStudyGuide} from '@/lib/offline-study-guide';
import {normalizeTutorAnswer} from '@/lib/tutor';
import {tutorScopeReply,enforcePedagogicalTutorAnswer} from '@/lib/tutor-scope';
import type {AIReadiness} from '@/lib/ai-readiness';

type ChatMessage = { role: 'user' | 'assistant'; content: string };
const SUBJECTS = ['Matemática','Física','Química','Biologia','História','Geografia','Português','Literatura','Inglês','Redação','Filosofia','Sociologia','Raciocínio lógico','Geral'];

export default function KogAssistant({open,onOpen,onClose,profile,user,onLogin,context,studyContext}:{
  open:boolean;onOpen:()=>void;onClose:()=>void;profile:StudentProfile;user:User|null;onLogin:()=>void;context:KogContext;studyContext:KogStudyContext|null;
}) {
  const [messages,setMessages] = useState<ChatMessage[]>([]);
  const [draft,setDraft] = useState('');
  const [subject,setSubject] = useState('Matemática');
  const [pending,setPending] = useState(false);
  const [error,setError] = useState('');
  const [readiness,setReadiness] = useState<AIReadiness|null>(null);
  const [checkingReadiness,setCheckingReadiness] = useState(false);
  const [expanded,setExpanded] = useState(false);
  const [notice,setNotice] = useState(true);
  const scrollRef=useRef<HTMLDivElement>(null);
  const textRef=useRef<HTMLTextAreaElement>(null);
  const launcherRef=useRef<HTMLButtonElement>(null);
  const inFlightRef=useRef(false);
  const currentUserRef=useRef(user?.id||'guest');
  const activeSubject=subjectForView(context);
  const contextLabel=previewKogStudyContext(studyContext);
  const suggested=contextualKogPrompts(studyContext)??quickPromptForView(context,profile.goal);
  const subjectOptions = SUBJECTS.map(s=>({value:s,label:s})) as KognosOption<string>[];
  const activeProvider=readiness?.tutorProvider??null;
  const providerName=activeProvider==='openai'?'OpenAI':activeProvider==='gemini'?'Google Gemini':activeProvider==='groq'?'Groq':activeProvider==='nvidia'?'NVIDIA':'um provedor de IA externo';
  const privacyUrl=activeProvider==='openai'?'https://openai.com/policies/privacy-policy/':
    activeProvider==='gemini'?'https://policies.google.com/privacy':
    activeProvider==='groq'?'https://groq.com/privacy-policy/':
    activeProvider==='nvidia'?'https://www.nvidia.com/en-us/about-nvidia/privacy-policy/':null;

  useEffect(() => {if(open) {const t=window.setTimeout(()=>textRef.current?.focus(),120);return()=>window.clearTimeout(t);}},[open]);
  useEffect(()=>{
    if(!open)return;
    const controller=new AbortController();
    setCheckingReadiness(true);
    fetch('/api/ai-status',{cache:'no-store',signal:controller.signal}).then(async res=>{
      if(!res.ok)throw new Error('Indisponível');
      const data=await res.json();
      if(typeof data.tutorConfigured!=='boolean')throw new Error('Resposta inválida');
      if(!controller.signal.aborted)setReadiness(data as AIReadiness);
    }).catch(()=>{if(!controller.signal.aborted)setReadiness(null);}).finally(()=>{if(!controller.signal.aborted)setCheckingReadiness(false);});
    return()=>controller.abort();
  },[open]);
  useEffect(() => {scrollRef.current?.scrollTo({top:scrollRef.current.scrollHeight,behavior:'smooth'});},[messages,pending,open]);
  useEffect(() => {
    if(studyContext?.kind==='lesson')setSubject(findLearningLesson(studyContext.lessonId)?.subject||'Geral');
    else if(studyContext?.kind==='question')setSubject(findDemoQuestion(studyContext.questionId)?.subject||'Geral');
    else if(studyContext?.kind==='generated_question')setSubject('Geral');
    else if(context==='questions'||context==='simulados')setSubject(activeSubject);
  },[context,activeSubject,studyContext]);
  useEffect(() => {
    // Prevent accidentally showing one student's chat to a different signed-in user.
    const next=user?.id||'guest';
    if(currentUserRef.current!==next){setMessages([]);setDraft('');setError('');currentUserRef.current=next;}
  },[user?.id]);
  useEffect(() => {
    if(!open)return;
    const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape'){event.preventDefault();onClose();launcherRef.current?.focus();}};
    document.addEventListener('keydown',onKey);
    return()=>document.removeEventListener('keydown',onKey);
  },[open,onClose]);
  useEffect(()=>{
    if(!open || window.matchMedia('(min-width: 701px)').matches)return;
    // On small screens, the drawer behaves as a bottom sheet and locks page scrolling.
    const previous=document.body.style.overflow;document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=previous;};
  },[open]);

  async function send(event:React.FormEvent) {
    event.preventDefault();
    if(inFlightRef.current || pending || !draft.trim())return;
    if(!user){onLogin();return;}
    // Respond immediately to clear requests outside the tutor's educational scope.
    // The API repeats this check so direct requests cannot bypass it.
    const scopeReply=tutorScopeReply(draft.trim());
    if(scopeReply){
      setMessages(prev=>[...prev,{role:'user',content:draft.trim()},{role:'assistant',content:scopeReply}]);
      setDraft('');setError('');return;
    }
    if(readiness&&!readiness.tutorConfigured){
      const prompt=draft.trim();
      const guide=localStudyGuide(prompt,studyContext);
      if(guide){
        setMessages(prev=>[...prev,{role:'user',content:prompt},{role:'assistant',content:guide.content}]);
        setDraft('');setError('');
      }else{
        setError('Este assunto ainda não está na biblioteca local. Para conversar livremente com o Kog, configure a chave de API do provedor do tutor no servidor. Suas palavras não foram enviadas ao provedor.');
      }
      return;
    }
    const api=getSupabase();
    const session=await api?.auth.getSession();
    const token=session?.data.session?.access_token;
    if(session?.data.session?.user.id!==user.id){setError('Sua conta mudou. Entre novamente para continuar.');return;}
    if(!token){setError('Sua sessão expirou. Entre novamente.');return;}
    const prompt=draft.trim(); const history=messages.slice(-8);
    inFlightRef.current=true;setPending(true);setError('');setDraft('');
    setMessages(prev=>[...prev,{role:'user',content:prompt}]);
    try{
      const response=await fetch('/api/tutor',{
        method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},
        body:JSON.stringify({message:prompt,subject,history,studyContext}),
      });
      const data=await response.json();
      if(!response.ok){
        if(data.code==='AI_NOT_CONFIGURED'){
          setReadiness(current=>({tutorConfigured:false,tutorProvider:null,nvidiaKeyConfigured:current?.nvidiaKeyConfigured??false,questionGenerationConfigured:current?.questionGenerationConfigured??false,supabaseServerConfigured:current?.supabaseServerConfigured??true,offlineGuidesAvailable:true}));
          const guide=localStudyGuide(prompt,studyContext);
          if(guide){if(currentUserRef.current===user.id)setMessages(prev=>[...prev,{role:'assistant',content:guide.content}]);return;}
        }
        throw new Error(typeof data.error==='string'?data.error:'Não foi possível receber a resposta.');
      }
      if(typeof data.answer!=='string')throw new Error('O tutor retornou uma resposta inválida.');
      if(currentUserRef.current===user.id)setMessages(prev=>[...prev,{role:'assistant',content:data.answer}]);
    }catch(err){if(currentUserRef.current===user.id)setError(err instanceof Error?err.message:'Falha ao conectar com o tutor.');}
    finally{inFlightRef.current=false;setPending(false);}
  }
  function fillPrompt(value:string){setDraft(value.slice(0,3000));textRef.current?.focus();}
  return <>
    <button ref={launcherRef} type="button" className={`kog-launcher ${open?'kog-launcher-hidden':''}`} onClick={onOpen}
      aria-label="Abrir Kog, o tutor de inteligência artificial" title="Pergunte ao Kog">
      <span className="kog-launcher-avatar"><Image src="/brand/kog-mascot.svg" alt="" width={50} height={50}/></span>
      <span className="kog-launcher-label">Pergunte ao Kog <Sparkles size={14}/></span>
    </button>
    {open&&<>
      <button type="button" className="kog-drawer-scrim" aria-label="Fechar tutor" onClick={onClose}/>
      <section className={`kog-drawer ${expanded?'kog-drawer-expanded':''}`} role="dialog" aria-modal={false} aria-label="Kog, seu tutor de inteligência artificial">
        <header className="kog-drawer-header">
          <div className="kog-header-badge"><Image src="/brand/kog-mascot.svg" width={38} height={38} alt=""/></div>
          <div className="kog-header-label"><strong>Kog <span>· seu tutor IA</span></strong><small><span className="kog-status-dot"/> Seu assistente de estudos</small></div>
          <div className="kog-header-actions">
            <button type="button" title={expanded?'Reduzir painel':'Expandir painel'} aria-label={expanded?'Reduzir painel':'Expandir painel'} onClick={()=>setExpanded(x=>!x)}><span className="desktop-only">{expanded?<Minimize2 size={17}/>:<Maximize2 size={17}/>}</span><span className="mobile-only"><ChevronDown size={18}/></span></button>
            <button type="button" title="Fechar tutor" aria-label="Fechar tutor" onClick={()=>{onClose();launcherRef.current?.focus();}}><X size={20}/></button>
          </div>
        </header>
        <div className="kog-dialog-body" ref={scrollRef} role="log" aria-live="polite" aria-label="Conversa com o tutor">
          {messages.length===0?<>
            <div className="kog-greeting">
              <KogMascot3D/>
              <div className="kog-greeting-copy"><span><Sparkles size={15}/> SEU PROFESSOR PARTICULAR</span><h2>Olá, {profile.nickname.split(' ')[0]||'estudante'}!</h2><p>Sou o Kog, seu tutor de estudos. Explico matérias, ajudo a interpretar exercícios e reviso conceitos com você. Não gero código nem trabalhos prontos.</p></div>
            </div>
            <div className="kog-context-card"><BookOpenText size={16}/><span>{contextLabel?<><strong>{contextLabel}</strong> · O Kog vai considerar essa atividade ao responder.</>:<>Seu foco: <strong>{goalLabels[profile.goal]}</strong> · Ajuda contextual na área <strong>{context==='dashboard'?'Visão geral':context}</strong></>}</span></div>
            <p className="kog-suggestions-title">Por onde começamos?</p>
            <div className="kog-suggestions">{readiness&&!readiness.tutorConfigured&&<button type="button" onClick={()=>fillPrompt("Me explique teorema de Pitágoras")}><BookOpenText size={14}/> Teorema de Pitágoras <ArrowUp size={13}/></button>}{suggested.map(item=><button type="button" key={item} onClick={()=>fillPrompt(item)}><Sparkles size={14} aria-hidden="true"/>{item}<ArrowUp size={13} aria-hidden="true"/></button>)}</div>
          </>:messages.map((message,index)=><div key={`${index}-${message.role}`} className={`kog-message-row ${message.role}`}>
            {message.role==='assistant'&&<span className="kog-mini-avatar"><Image src="/brand/kog-mascot.svg" alt="" width={26} height={26}/></span>}
            <div className="kog-message-text">{message.role==='assistant'?normalizeTutorAnswer(enforcePedagogicalTutorAnswer(message.content)):message.content}</div>
          </div>)}
          {pending&&<div className="kog-message-row assistant"><span className="kog-mini-avatar"><Image src="/brand/kog-mascot.svg" alt="" width={26} height={26}/></span><div className="kog-message-text kog-thinking"><span/><span/><span/><small>Preparando uma explicação…</small></div></div>}
          {readiness&&!readiness.tutorConfigured&&<div className="kog-offline-banner" role="status"><BookOpenText size={18}/><div><strong>Biblioteca local · sem IA</strong><p>{!readiness.tutorProvider?'A chave de API do tutor não foi encontrada no servidor.':'A configuração do Supabase no servidor está incompleta.'} Posso mostrar guias preparados de Pitágoras e das miniaulas. Para conversas livres, configure as variáveis do servidor em <code>apps/web/.env.local</code> e reinicie o aplicativo.</p><button type="button" onClick={()=>fillPrompt('Me explique teorema de Pitágoras')}>Ver guia de Pitágoras</button></div></div>}
          {checkingReadiness&&<p className="kog-readiness-check" role="status">Verificando configuração do tutor…</p>}
          {error&&<div className="kog-chat-error" role="alert">{error}<button type="button" onClick={()=>setError('')} aria-label="Dispensar erro"><X size={14}/></button></div>}
        </div>
        <div className="kog-drawer-bottom">
          {contextLabel&&<div className="kog-active-context" role="status"><BookOpenText size={14} aria-hidden="true"/><span>{contextLabel}</span><small>{(studyContext?.kind==='question'||studyContext?.kind==='generated_question')&&studyContext.phase==='solving'?'Dicas sem gabarito':'Contexto da atividade'}</small></div>}
          {messages.length>0&&<div className="kog-quick-row">{(studyContext?suggested:['Explique de outra forma','Dê um exemplo','Me teste','Resuma']).map(s=><button type="button" key={s} disabled={pending} onClick={()=>fillPrompt(studyContext?s:`${s} o último conteúdo que discutimos.`)}>{s}</button>)}<button type="button" title="Nova conversa" aria-label="Iniciar nova conversa" onClick={()=>{setMessages([]);setDraft('');setError('');}}><RotateCcw size={15}/></button></div>}
          <form onSubmit={send} className="kog-input-area"><div className="kog-input-head"><KognosSelect compact label="Disciplina" value={subject} options={subjectOptions} onChange={setSubject} className="kog-subject-select" /><small>{draft.length}/3000</small></div>
            <div className="kog-input-wrap"><textarea ref={textRef} value={draft} onChange={e=>setDraft(e.target.value)} maxLength={3000} rows={2} placeholder="Pergunte sobre uma matéria ou exercício…" onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();e.currentTarget.form?.requestSubmit();}}}/><button type="submit" aria-label="Enviar mensagem" title="Enviar mensagem" disabled={!draft.trim()||pending} className="kog-send-btn"><Send size={18}/></button></div>
          </form>
          {!user&&<p className="kog-login-tip"><MessageCircle size={14}/> Entre na sua conta para conversar com o Kog. <button onClick={onLogin} type="button">Entrar</button></p>}
          {notice?<p className="kog-ai-notice">As mensagens e o contexto de estudo são processados por {providerName} para gerar respostas. Não compartilhe dados sensíveis. {privacyUrl&&<a href={privacyUrl} target="_blank" rel="noopener noreferrer">Privacidade</a>} <button type="button" aria-label="Ocultar aviso" title="Ocultar aviso" onClick={()=>setNotice(false)}><Check size={12}/></button></p>:<button type="button" className="kog-notice-toggle" onClick={()=>setNotice(true)}>Como meus dados são processados?</button>}
        </div>
      </section>
    </>}
  </>;
}