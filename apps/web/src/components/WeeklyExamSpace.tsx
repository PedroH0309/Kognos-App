'use client';
import {useCallback,useEffect,useState} from 'react';
import {getSupabase} from '@/lib/supabase';
import {examForStudent,officialSyllabusSources} from '@/lib/exam-syllabus';
import {examBlueprints} from '@/lib/exam-blueprints';
import type {StudentProfile} from '@/lib/profile';
import type {KogStudyContext} from '@/lib/kog-study-context';
type Question={id:string;subject:string;topic:string;prompt:string;options:string[]};
type Session={id:string;count:number;answeredIds:string[];correct:number;questions:Question[]};
type Result={session:Session|null;institution:string;weekStart:string};

export default function WeeklyExamSpace({userId,profile,onBank,onPlanner,onContextChange,onTutor}:{
 userId:string|null;profile:StudentProfile;onBank:()=>void;onPlanner:()=>void;
 onContextChange:(context:KogStudyContext|null)=>void;onTutor:()=>void;
}){
 const exam=examForStudent(profile);
 const [count,setCount]=useState(20);
 const [data,setData]=useState<Result|null>(null);
 const [loading,setLoading]=useState(true),[busy,setBusy]=useState(false),[generating,setGenerating]=useState(false);
 const [generated,setGenerated]=useState(0),[position,setPosition]=useState(0),[choice,setChoice]=useState<number|null>(null);
 const [feedback,setFeedback]=useState<{correct:boolean;correctIndex:number;explanation:string}|null>(null);
 const [error,setError]=useState(''),[notice,setNotice]=useState('');
 const api=useCallback(async(url:string,init?:RequestInit)=>{
  const sb=getSupabase();
  if(!sb||!userId)throw Error('Entre na conta para participar do simulado.');
  const {data:auth,error:authError}=await sb.auth.getSession();
  if(authError||!auth.session||auth.session.user.id!==userId)throw Error('Sua sessão expirou. Entre novamente.');
  const response=await fetch(url,{...init,cache:'no-store',headers:{'Content-Type':'application/json',Authorization:'Bearer '+auth.session.access_token,...init?.headers}});
  const payload=await response.json();
  if(!response.ok)throw Error(typeof payload.error==='string'?payload.error:'Não foi possível concluir a solicitação.');
  return payload;
 },[userId]);
 const refresh=useCallback(async()=>{
  if(!userId){setLoading(false);return;}
  setLoading(true);setError('');
  try{
   const next=await api('/api/weekly-exam') as Result;
   setData(next);setFeedback(null);setChoice(null);
   if(next.session){
    const index=next.session.questions.findIndex(q=>!next.session!.answeredIds.includes(q.id));
    setPosition(Math.max(0,index));
   }
  }catch(cause){setError(cause instanceof Error?cause.message:'Falha ao carregar o simulado.');}
  finally{setLoading(false);}
 },[api,userId]);
 useEffect(()=>{void refresh();},[refresh]);
 const session=data?.session,current=session?.questions[position];
 const completed=Boolean(session&&session.answeredIds.length>=session.count);
 const answered=Boolean(session&&current&&session.answeredIds.includes(current.id));
 useEffect(()=>{
  onContextChange(current&&!answered&&!completed?{kind:'generated_question',questionId:current.id,phase:'solving'}:null);
 },[current?.id,answered,completed,onContextChange]);
 async function create(){
  if(busy)return;
  setBusy(true);setError('');setNotice('');
  try{const next=await api('/api/weekly-exam',{method:'POST',body:JSON.stringify({count})}) as Result;setData(next);setPosition(0);setChoice(null);setFeedback(null);}
  catch(cause){setError(cause instanceof Error?cause.message:'Falha ao reservar as questões.');}
  finally{setBusy(false);}
 }
 async function prepare(){
  if(generating||!exam)return;
  setGenerating(true);setError('');setNotice('');setGenerated(0);
  const subjects=Object.entries(examBlueprints[exam].subjects);
  let approved=0;
  try{
   for(let batch=0;batch<Math.ceil(count/5);batch++){
    const subjectEntry=subjects[batch%subjects.length];
    const subject=subjectEntry[0],topics=subjectEntry[1];
    const topic=topics[Math.floor(batch/subjects.length)%topics.length];
    const requested=Math.min(5,count-approved);
    if(!requested)break;
    const response=await api('/api/ai-questions/generate',{method:'POST',
     body:JSON.stringify({institution:exam,subject,topic,difficulty:['basic','intermediate','advanced'][batch%3],count:requested,variation:batch%32})});
    approved+=Number(response.approved)||0;setGenerated(approved);
   }
   setNotice(String(approved)+' novas questões foram aprovadas e salvas. Agora tente iniciar o simulado. Outras questões podem ser necessárias se já houver reservas anteriores.');
  }catch(cause){
   setError((cause instanceof Error?cause.message:'Limite do provedor ou falha na geração.')+' '+approved+' questões foram aprovadas até o momento. Nenhum item artificial foi acrescentado.');
  }finally{setGenerating(false);}
 }
 async function submit(){
  if(!current||choice===null||busy||answered)return;
  setBusy(true);setError('');
  try{
   const grade=await api('/api/ai-questions/submit',{method:'POST',
    body:JSON.stringify({questionId:current.id,answerIndex:choice,mode:'mock'})});
   setFeedback({correct:Boolean(grade.correct),correctIndex:Number(grade.correctIndex),explanation:String(grade.explanation||'')});
   setData(old=>old?.session?{...old,session:{...old.session,
    answeredIds:[...old.session.answeredIds,current.id],correct:old.session.correct+Number(Boolean(grade.correct))}}:old);
   window.dispatchEvent(new Event('kognos:ai-answer-recorded'));
  }catch(cause){setError(cause instanceof Error?cause.message:'Falha ao registrar a resposta.');}
  finally{setBusy(false);}
 }
 function next(){
  if(!session)return;
  const remaining=session.questions.findIndex((q,index)=>index>position&&!session.answeredIds.includes(q.id));
  const fallback=session.questions.findIndex(q=>!session.answeredIds.includes(q.id));
  const index=remaining<0?fallback:remaining;
  if(index>=0)setPosition(index);
  setFeedback(null);setChoice(null);
 }
 return <main className="app-content k-weekly-exam">
  <header className="page-intro"><span className="overline">QUESTÕES INÉDITAS A CADA SEMANA</span><h1>Seu simulado <em>semanal.</em></h1>
   <p>Escolha de 20 a 90 questões autorais, corrigidas no servidor e sem reutilizar itens já reservados.</p></header>
  {error&&<div className="message warning" role="alert">{error}</div>}
  {notice&&<div className="message success" role="status">{notice}</div>}
  {!userId?<section className="dark-panel">Entre em sua conta para manter o histórico de questões inéditas.</section>:
   !exam?<section className="dark-panel">Selecione uma prova principal nas preferências de estudo.</section>:
   loading?<section className="dark-panel">Consultando o simulado da semana…</section>:
   !session?<section className="dark-panel k-weekly-setup">
    <h2>Prova de {examBlueprints[exam].label}</h2>
    <label>Quantidade de questões
     <input type="number" min={20} max={90} step={1} value={count} onChange={e=>setCount(Math.min(90,Math.max(20,Number(e.target.value)||20)))}/>
    </label>
    <p>Ao começar, o Kognos reserva perguntas não usadas. Uma avaliação já iniciada permanece igual até a próxima semana.</p>
    <div className="k-weekly-actions">
     <button type="button" className="btn primary" disabled={busy||generating} onClick={()=>void create()}>{busy?'Reservando…':'Iniciar '+count+' questões inéditas'}</button>
     <button type="button" className="btn outline" disabled={busy||generating} onClick={()=>void prepare()}>{generating?'Gerando e revisando… '+generated+' aprovadas':'Gerar até '+count+' novas questões com IA'}</button>
     <button type="button" className="btn outline" onClick={onBank}>Banco de questões</button>
    </div>
    <p className="privacy-note">A geração pode ser parcial, depende de cotas e de revisão independente. O Kognos não preenche o simulado com perguntas repetidas quando faltam questões novas.</p>
    <p>Referência: <a target="_blank" rel="noopener noreferrer" href={officialSyllabusSources[exam].url}>{officialSyllabusSources[exam].title}</a>. As questões são autorais, não retiradas das provas oficiais.</p>
   </section>:
   completed?<section className="dark-panel k-weekly-done">
    <span className="overline">SIMULADO CONCLUÍDO</span><h2>{session.correct} de {session.count} acertos</h2>
    <p>Suas respostas estão registradas. A próxima semana terá outra seleção de itens inéditos, se o banco tiver quantidade suficiente.</p>
    <div className="k-weekly-actions"><button className="btn primary" onClick={onPlanner}>Reorganizar estudos</button><button className="btn outline" onClick={onTutor}>Conversar com Kog</button></div>
   </section>:
   current?<section className="dark-panel k-weekly-question">
    <div className="diag-progress-title"><span>QUESTÃO {position+1} DE {session.count}</span><strong>{current.subject}</strong></div>
    <div className="question-progress"><span style={{width:String(Math.round(100*session.answeredIds.length/session.count))+'%'}}/></div>
    <p className="muted">{session.answeredIds.length} respondidas · {current.topic}</p>
    <h2>{current.prompt}</h2>
    <div className="answer-options">{current.options.map((option,index)=><button type="button" key={index}
     className={'answer-choice '+(choice===index?'chosen':'')} aria-pressed={choice===index}
     disabled={Boolean(feedback)||answered} onClick={()=>setChoice(index)}><span>{String.fromCharCode(65+index)}</span>{option}</button>)}</div>
    {feedback&&<div className="message neutral" role="status"><strong>{feedback.correct?'Correto':'Revisão indicada'}</strong><p>{feedback.explanation}</p><small>Alternativa de referência: {String.fromCharCode(65+feedback.correctIndex)}</small></div>}
    <div className="diag-actions">{!feedback&&!answered?
      <button className="btn primary" onClick={()=>void submit()} disabled={choice===null||busy}>{busy?'Corrigindo…':'Registrar resposta'}</button>:
      <button className="btn primary" onClick={next}>Próxima questão</button>}</div>
    <p className="privacy-note">As respostas são avaliadas no servidor. O gabarito não é enviado antes da tentativa.</p>
   </section>:<section className="dark-panel"><p>Não foi possível recuperar a próxima questão.</p><button className="btn outline" onClick={()=>void refresh()}>Recarregar</button></section>}
 </main>;
}
