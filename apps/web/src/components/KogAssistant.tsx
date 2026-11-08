'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, BookOpenText, Check, FileText, Lightbulb, ListChecks, MessageCircle, RotateCcw, Send, Sparkles, X } from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { getSupabase } from '@/lib/supabase';
import { goalLabels, type StudentProfile } from '@/lib/profile';
import {findLearningLesson} from '@/lib/learning-catalog';
import { KognosSelect, type KognosOption } from './KognosFields';
import { subjectForView, quickPromptForView, type KogContext } from '@/lib/kog-context';
import {contextualKogPrompts,previewKogStudyContext,findDemoQuestion,type KogStudyContext} from '@/lib/kog-study-context';
import {localStudyGuide} from '@/lib/offline-study-guide';
import {normalizeTutorAnswer} from '@/lib/tutor';
import KognosLoadingOverlay from './KognosLoadingOverlay';
import {tutorScopeReply,enforcePedagogicalTutorAnswer} from '@/lib/tutor-scope';
import type {AIReadiness} from '@/lib/ai-readiness';

type ChatMessage = { role: 'user' | 'assistant'; content: string };
const SUBJECTS = ['Matemática','Física','Química','Biologia','História','Geografia','Português','Literatura','Inglês','Redação','Filosofia','Sociologia','Raciocínio lógico','Geral'];

export default function KogAssistant({active,onBack,profile,user,onLogin,context,studyContext}:{
  active:boolean;onBack:()=>void;profile:StudentProfile;user:User|null;onLogin:()=>void;context:KogContext;studyContext:KogStudyContext|null;
}) {
  const [messages,setMessages] = useState<ChatMessage[]>([]);
  const [draft,setDraft] = useState('');
  const [subject,setSubject] = useState('Matemática');
  const [pending,setPending] = useState(false);
  const [error,setError] = useState('');
  const [readiness,setReadiness] = useState<AIReadiness|null>(null);
  const [checkingReadiness,setCheckingReadiness] = useState(false);
  const [notice,setNotice] = useState(true);
  const scrollRef=useRef<HTMLDivElement>(null);
  const textRef=useRef<HTMLTextAreaElement>(null);
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

  useEffect(() => {if(active && window.matchMedia('(min-width: 701px)').matches) {const t=window.setTimeout(()=>textRef.current?.focus(),120);return()=>window.clearTimeout(t);}},[active]);
  useEffect(()=>{
    if(!active)return;
    const controller=new AbortController();
    setCheckingReadiness(true);
    fetch('/api/ai-status',{cache:'no-store',signal:controller.signal}).then(async res=>{
      if(!res.ok)throw new Error('Indisponível');
      const data=await res.json();
      if(typeof data.tutorConfigured!=='boolean')throw new Error('Resposta inválida');
      if(!controller.signal.aborted)setReadiness(data as AIReadiness);
    }).catch(()=>{if(!controller.signal.aborted)setReadiness(null);}).finally(()=>{if(!controller.signal.aborted)setCheckingReadiness(false);});
    return()=>controller.abort();
  },[active]);
  useEffect(() => {scrollRef.current?.scrollTo({top:scrollRef.current.scrollHeight,behavior:'smooth'});},[messages,pending,active]);
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
          setReadiness(current=>({freeOnlyMode:current?.freeOnlyMode??true,generatorProvider:current?.generatorProvider??null,reviewerProvider:current?.reviewerProvider??null,tutorConfigured:false,tutorProvider:null,nvidiaKeyConfigured:current?.nvidiaKeyConfigured??false,questionGenerationConfigured:current?.questionGenerationConfigured??false,generatorCredentialsConfigured:current?.generatorCredentialsConfigured??false,supabaseServerConfigured:current?.supabaseServerConfigured??true,offlineGuidesAvailable:true}));
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
  async function retryTutorConnection(){
    setCheckingReadiness(true);
    try{
      const response=await fetch('/api/ai-status',{cache:'no-store'});
      if(!response.ok)throw new Error('Falha ao verificar a configuração');
      const next=await response.json() as AIReadiness;
      if(typeof next.tutorConfigured!=='boolean')throw new Error('Resposta inválida');
      setReadiness(next);
      if(next.tutorConfigured)setError('');
    }catch{setError('Não foi possível verificar o servidor de IA. Tente novamente.');}
    finally{setCheckingReadiness(false);}
  }
  function fillPrompt(value:string){setDraft(value.slice(0,3000));textRef.current?.focus();}
  return <section className={`kog-page ${messages.length===0?'kog-page-empty':''}`} aria-label="Conversa com o tutor Kog">
    {(pending||checkingReadiness)&&<KognosLoadingOverlay inline label={pending?'Kog preparando explicação':'Verificando tutor Kog'}/>}
    <header className="kog-page-header">
      <div className="kog-page-identity">
        <span className="kog-page-brand"><Image src="/brand/kog-mascot.svg" alt="" width={38} height={38}/></span>
        <div><strong>Tutor Kog</strong><small>Seu espaço de estudos com inteligência artificial</small></div>
      </div>
      <div className="kog-page-header-actions">
        <button type="button" onClick={onBack} aria-label="Voltar à página anterior"><ArrowLeft size={17}/> Voltar</button>
        <button type="button" onClick={()=>{setMessages([]);setDraft("");setError("");}} aria-label="Iniciar nova conversa"><RotateCcw size={17}/> Nova conversa</button>
      </div>
    </header>
        <div className="kog-dialog-body" ref={scrollRef} role="log" aria-live="polite" aria-label="Conversa com o tutor">
          {messages.length===0?<>
            <div className="kog-greeting">
              <Image className="kog-page-welcome-avatar" src="/brand/kog-mascot.svg" alt="" width={62} height={62}/>
              <div className="kog-greeting-copy"><span><Sparkles size={15}/> SEU PROFESSOR PARTICULAR</span><h2>Olá, {profile.nickname.split(' ')[0]||'estudante'}!</h2><p>Sou o Kog, seu tutor de estudos. Explico matérias, ajudo a interpretar exercícios e reviso conceitos com você. Não gero código nem trabalhos prontos.</p></div>
            </div>
            <div className="kog-context-card"><BookOpenText size={16}/><span>{contextLabel?<><strong>{contextLabel}</strong> · O Kog vai considerar essa atividade ao responder.</>:<>Seu foco: <strong>{goalLabels[profile.goal]}</strong> · Ajuda contextual na área <strong>{context==='dashboard'?'Visão geral':context}</strong></>}</span></div>

          </>:messages.map((message,index)=><div key={`${index}-${message.role}`} className={`kog-message-row ${message.role}`}>
            {message.role==='assistant'&&<span className="kog-mini-avatar"><Image src="/brand/kog-mascot.svg" alt="" width={26} height={26}/></span>}
            <div className="kog-message-text">{message.role==='assistant'?normalizeTutorAnswer(enforcePedagogicalTutorAnswer(message.content)):message.content}</div>
          </div>)}
          {pending&&<div className="kog-message-row assistant"><span className="kog-mini-avatar"><Image src="/brand/kog-mascot.svg" alt="" width={26} height={26}/></span><div className="kog-message-text kog-thinking"><span/><span/><span/><small>Preparando uma explicação…</small></div></div>}
          {readiness&&!readiness.tutorConfigured&&<div className="kog-offline-banner" role="status"><BookOpenText size={18}/><div>
            <strong>Tutor de IA indisponível · biblioteca local ativa</strong>
            <p>{!readiness.tutorProvider?'Nenhuma credencial válida do tutor está configurada no servidor.':'A integração do Supabase do servidor está incompleta.'} Para ativar conversas livres, o responsável pelo projeto deve configurar <code>GEMINI_API_KEY</code> ou <code>GROQ_API_KEY</code> nas variáveis de ambiente da hospedagem, sem publicar a chave no GitHub. Os guias locais existentes continuam acessíveis e não usam IA.</p>
            <div className="kog-offline-actions"><button type="button" onClick={()=>fillPrompt('Me explique teorema de Pitágoras')}>Usar guia local</button><button type="button" onClick={()=>void retryTutorConnection()} disabled={checkingReadiness}>Verificar novamente</button></div>
           </div></div>}
          
          {error&&<div className="kog-chat-error" role="alert">{error}<button type="button" onClick={()=>setError('')} aria-label="Dispensar erro"><X size={14}/></button></div>}
        </div>
        <div className="kog-drawer-bottom">
          {contextLabel&&<div className="kog-active-context" role="status"><BookOpenText size={14} aria-hidden="true"/><span>{contextLabel}</span><small>{(studyContext?.kind==='question'||studyContext?.kind==='generated_question')&&studyContext.phase==='solving'?'Dicas sem gabarito':'Contexto da atividade'}</small></div>}
          {messages.length>0&&<div className="kog-quick-row">{(studyContext?suggested:['Explique de outra forma','Dê um exemplo','Me teste','Resuma']).map(s=><button type="button" key={s} disabled={pending} onClick={()=>fillPrompt(studyContext?s:`${s} o último conteúdo que discutimos.`)}>{s}</button>)}<button type="button" title="Nova conversa" aria-label="Iniciar nova conversa" onClick={()=>{setMessages([]);setDraft('');setError('');}}><RotateCcw size={15}/></button></div>}
          <form onSubmit={send} className="kog-input-area"><div className="kog-input-head"><KognosSelect compact label="Disciplina" value={subject} options={subjectOptions} onChange={setSubject} className="kog-subject-select" /><small>{draft.length}/3000</small></div>
            <div className="kog-input-wrap"><textarea ref={textRef} value={draft} onChange={e=>setDraft(e.target.value)} maxLength={3000} rows={2} placeholder="Pergunte sobre uma matéria ou exercício…" onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();e.currentTarget.form?.requestSubmit();}}}/><button type="submit" aria-label="Enviar mensagem" title="Enviar mensagem" disabled={!draft.trim()||pending} className="kog-send-btn"><Send size={18}/></button></div>
          </form>
          {messages.length===0&&<div className="kog-page-actions" aria-label="Sugestões para começar">
            <button type="button" onClick={()=>fillPrompt(suggested[0]||"Explique este conteúdo do básico ao avançado.")}><BookOpenText size={17}/> Explique sobre</button>
            <button type="button" onClick={()=>fillPrompt("Crie um resumo para revisar o tema que eu indicar, com os pontos mais importantes.")}><FileText size={17}/> Criar resumo</button>
            <button type="button" onClick={()=>fillPrompt("Crie uma questão de estudo sobre o tema que eu indicar e depois explique a resolução.")}><ListChecks size={17}/> Gerar questão</button>
            <button type="button" onClick={()=>fillPrompt("Dê dicas práticas para estudar melhor este assunto e revisar meus erros.")}><Lightbulb size={17}/> Dicas de estudo</button>
          </div>}
          {!user&&<p className="kog-login-tip"><MessageCircle size={14}/> Entre na sua conta para conversar com o Kog. <button onClick={onLogin} type="button">Entrar</button></p>}
          {notice?<p className="kog-ai-notice">{readiness?.tutorConfigured
           ?<>Para gerar respostas, mensagens e contexto de estudo são enviados ao provedor {providerName}. Não compartilhe dados sensíveis. {privacyUrl&&<a href={privacyUrl} target="_blank" rel="noopener noreferrer">Privacidade</a>}</>
           :<>Sem provedor de IA ativo, os guias disponíveis são preparados localmente, sem enviar sua mensagem a um provedor de IA. {readiness===null?'O status do servidor ainda não foi confirmado.':''}</>}
           <button type="button" aria-label="Ocultar aviso" title="Ocultar aviso" onClick={()=>setNotice(false)}><Check size={12}/></button></p>:<button type="button" className="kog-notice-toggle" onClick={()=>setNotice(true)}>Como meus dados são processados?</button>}
        </div>
  </section>;
}