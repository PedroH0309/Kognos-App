'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {BrainCircuit,BookOpenText,ShieldCheck,RefreshCw,Clock3,CheckCircle2,AlertTriangle,Sparkles} from 'lucide-react';
import {KognosSelect} from './KognosFields';
import {examBlueprints,difficulties,type ExamId,type Difficulty} from '@/lib/exam-blueprints';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {getSupabase} from '@/lib/supabase';

export type UserAIQuestion={id:string;institution:ExamId;source_title:string;source_url:string;edition:string;subject:string;topic:string;difficulty:Difficulty;prompt:string;options:string[];created_at:string;review_status:'auto_reviewed'};
type Grading={correct:boolean;correctIndex:number;explanation:string};
type Mode='questions'|'simulados';
const examOptions=(Object.entries(examBlueprints) as [ExamId,(typeof examBlueprints)[ExamId]][]).map(([value,item])=>({value,label:item.label}));
const difficultyOptions=(Object.entries(difficulties) as [Difficulty,string][]).map(([value,label])=>({value,label}));
const amountOptions=[1,2,3,4,5].map(value=>({value:String(value),label:`${value} ${value===1?'questão':'questões'}`}));

export default function AiQuestionStudio({mode,userId,onTutor,onContextChange}:{mode:Mode;userId:string|null;onTutor:()=>void;onContextChange:(context:KogStudyContext|null)=>void}) {
 const [institution,setInstitution]=useState<ExamId>('enem');
 const [subject,setSubject]=useState('Matemática');
 const [topic,setTopic]=useState('Porcentagem e razão');
 const [difficulty,setDifficulty]=useState<Difficulty>('intermediate');
 const [count,setCount]=useState('3');
 const [questions,setQuestions]=useState<UserAIQuestion[]>([]);
 const [loading,setLoading]=useState(false),[generating,setGenerating]=useState(false),[submitting,setSubmitting]=useState(false);
 const [error,setError]=useState(''),[notice,setNotice]=useState('');
 const [session,setSession]=useState<UserAIQuestion[]>([]),[cursor,setCursor]=useState(0),[choice,setChoice]=useState<number|null>(null);
 const [answers,setAnswers]=useState<Grading[]>([]),[finished,setFinished]=useState(false);
 const [elapsed,setElapsed]=useState(0);
 const blueprint=examBlueprints[institution];
 const subjectOptions=Object.keys(blueprint.subjects).map(value=>({value,label:value}));
 const topicOptions=(blueprint.subjects[subject]||[]).map(value=>({value,label:value}));

 const current=session[cursor];
 const inMock=mode==='simulados';
 const bank=useMemo(()=>questions.filter(q=>q.institution===institution&&(!inMock||q.difficulty===difficulty)),[questions,institution,inMock,difficulty]);
 const activeSession=session.length>0&&!finished;

 const authenticatedFetch=useCallback(async(url:string,init?:RequestInit)=>{
  const sb=getSupabase();if(!sb||!userId)throw new Error('Entre em sua conta para utilizar questões geradas por IA.');
  const {data,error:sessionError}=await sb.auth.getSession();
  const session=data.session;
  if(sessionError||!session||session.user.id!==userId)throw new Error('A sessão mudou ou expirou. Entre novamente.');
  const response=await fetch(url,{...init,headers:{'Content-Type':'application/json',Authorization:`Bearer ${session.access_token}`,...init?.headers},cache:'no-store'});
  const result=await response.json();
  if(!response.ok)throw new Error(typeof result.error==='string'?result.error:'Não foi possível concluir esta operação.');
  return result;
 },[userId]);

 const refresh=useCallback(async()=>{
  if(!userId){setQuestions([]);return;}
  setLoading(true);setError('');
  try{const data=await authenticatedFetch('/api/ai-questions');setQuestions(Array.isArray(data.questions)?data.questions:[]);}
  catch(e){setError(e instanceof Error?e.message:'Falha ao carregar as questões.');}
  finally{setLoading(false);}
 },[authenticatedFetch,userId]);
 useEffect(()=>{void refresh();},[refresh]);
 useEffect(()=>{if(!activeSession||!inMock)return;const started=Date.now()-elapsed*1000;const handle=window.setInterval(()=>setElapsed(Math.floor((Date.now()-started)/1000)),1000);return()=>window.clearInterval(handle);},[activeSession,inMock]);
 useEffect(()=>{
  if(!current||finished){onContextChange(null);return;}
  onContextChange({kind:'generated_question',questionId:current.id,phase:answers[cursor]&&!inMock?'review':'solving'});
 },[current?.id,cursor,answers,finished,inMock,onContextChange]);
 function changeInstitution(value:ExamId){setInstitution(value);const first=Object.keys(examBlueprints[value].subjects)[0];setSubject(first);setTopic(examBlueprints[value].subjects[first][0]);}
 function changeSubject(value:string){setSubject(value);setTopic(blueprint.subjects[value][0]);}
 async function generate(){
  if(!userId)return;
  setGenerating(true);setError('');setNotice('');
  try{
   const result=await authenticatedFetch('/api/ai-questions/generate',{method:'POST',body:JSON.stringify({institution,subject,topic,difficulty,count:Number(count)})});
   setQuestions(old=>[...(result.questions||[]),...old].slice(0,100));
   setNotice(`${result.approved} questão(ões) aprovada(s) automaticamente e adicionada(s) ao seu banco e aos simulados. ${result.rejected?`${result.rejected} rejeitada(s) na revisão.`:''}`);
  }catch(e){setError(e instanceof Error?e.message:'Falha ao gerar questões.');}
  finally{setGenerating(false);}
 }
 function start(list:UserAIQuestion[]){if(!list.length)return;setSession([...list]);setCursor(0);setChoice(null);setAnswers([]);setFinished(false);setError('');setNotice('');setElapsed(0);}
 async function submitAnswer(){
  if(!current||choice===null||submitting||answers[cursor])return;
  setSubmitting(true);setError('');
  try{
   const grade=await authenticatedFetch('/api/ai-questions/submit',{method:'POST',body:JSON.stringify({questionId:current.id,answerIndex:choice,mode:inMock?'mock':'practice'})});
   setAnswers(old=>[...old,grade as Grading]);
  }catch(e){setError(e instanceof Error?e.message:'Falha ao corrigir a resposta.');}
  finally{setSubmitting(false);}
 }
 function next(){
  if(cursor>=session.length-1){setFinished(true);setChoice(null);return;}
  setCursor(v=>v+1);setChoice(null);
 }
 const points=answers.filter(a=>a.correct).length;
 const duration=`${String(Math.floor(elapsed/60)).padStart(2,'0')}:${String(elapsed%60).padStart(2,'0')}`;
 return <div className="ai-studio">
   {error&&<div role="alert" className="message warning">{error}</div>}
   {notice&&<div role="status" className="message success">{notice}</div>}
   {!userId&&<div className="dark-panel ai-signin"><ShieldCheck size={23}/><h2>Questões geradas por IA para sua conta</h2><p>Para criar e guardar questões personalizadas, entre com uma conta Kognos. O acervo demonstrativo continua disponível no outro separador.</p></div>}
   {userId&&!session.length&&<>
    <section className="dark-panel ai-studio-generator">
      <div className="ai-generator-heading"><div><span className="overline">BANCO INTELIGENTE</span><h2><BrainCircuit size={22} aria-hidden="true"/> Gerador de questões com IA</h2><p>Escolha a instituição e o nível. O Kognos gera itens originais e realiza uma revisão automática antes de salvá-los.</p></div><span className="ai-tag"><Sparkles size={14}/> IA · NVIDIA</span></div>
      <div className="ai-generator-grid">
       <KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/>
       <KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={changeSubject}/>
       <KognosSelect label="Assunto" value={topic} options={topicOptions} onChange={setTopic}/>
       <KognosSelect label="Nível" value={difficulty} options={difficultyOptions} onChange={setDifficulty}/>
       <KognosSelect label="Quantidade" value={count} options={amountOptions} onChange={setCount}/>
      </div>
      <div className="ai-source-note"><BookOpenText size={16} aria-hidden="true"/><div><strong>Referência de preparação: {blueprint.edition}</strong><p>{blueprint.notice} <a href={blueprint.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar fonte institucional</a></p></div></div>
      <div className="ai-generator-actions"><button className="btn primary" disabled={generating||loading} onClick={()=>void generate()}><Sparkles size={16}/>{generating?'Gerando e revisando…':`Gerar ${count} ${Number(count)===1?'questão':'questões'} com IA`}</button><small>Máximo de 5 por solicitação · usa sua cota diária de IA</small></div>
    </section>
    <section className="dark-panel ai-bank">
      <div className="ai-bank-header"><div><h2>{inMock?'Simulados personalizados':'Meu banco de questões IA'}</h2><p>Questões privadas salvas automaticamente, disponíveis para estudo e simulado.</p></div><button type="button" className="btn outline small" onClick={()=>void refresh()} disabled={loading}><RefreshCw size={15}/> Atualizar</button></div>
      <div className="ai-bank-counter"><strong>{bank.length}</strong><span>{bank.length===1?'questão disponível':'questões disponíveis'} para {blueprint.label}{inMock?` · ${difficulties[difficulty]}`:''}</span></div>
      {loading&&<p role="status" className="muted">Carregando questões...</p>}
      {!loading&&!bank.length&&<p className="ai-empty">Ainda não existem questões de IA para esta instituição. Gere um conjunto para começar; ele aparecerá automaticamente nos seus simulados.</p>}
      {!!bank.length&&<>
       <button type="button" className="btn primary" onClick={()=>start(bank.slice(0,Math.min(20,bank.length)))}>{inMock?'Iniciar simulado de IA':'Praticar questões do banco'} ({Math.min(20,bank.length)})</button>
       <div className="ai-question-list">{bank.slice(0,20).map(q=><article key={q.id}><div><span>{q.subject} · {q.topic} · {difficulties[q.difficulty]}</span><h3>{q.prompt}</h3><small>Gerada por IA · revisão automática, sem homologação editorial</small></div><button type="button" className="btn outline small" onClick={()=>start([q])}>Resolver</button></article>)}</div>
      </>}
      <p className="privacy-note">A revisão automática não garante ausência de erros. Questões geradas não são oficiais e não entram no banco de outros alunos sem revisão humana.</p>
    </section>
   </>}
   {userId&&session.length>0&&<section className="dark-panel ai-session">
    {finished?<>
      <span className="overline">{inMock?'SIMULADO CONCLUÍDO':'TREINO CONCLUÍDO'}</span><h2>Seu resultado: {points} de {session.length}</h2><p>Resultado do seu conjunto de questões geradas por IA. Não é nota oficial, TRI ou estimativa psicométrica.</p>
      <div className="ai-review-results">{session.map((q,i)=><article key={q.id}><strong>{i+1}. {q.subject} — {answers[i]?.correct?'Acerto':'Revisar'}</strong><p>{q.prompt}</p><p>Gabarito: {String.fromCharCode(65+(answers[i]?.correctIndex??0))}. {answers[i]?.explanation||'Sem correção disponível.'}</p></article>)}</div>
      <button type="button" className="btn primary" onClick={()=>{setSession([]);setFinished(false);}}>Voltar ao banco</button>
    </>:<>
      <div className="question-topline"><span>{inMock?'SIMULADO IA':'PRÁTICA IA'} · QUESTÃO {cursor+1} DE {session.length}</span><span>{current.subject} · {difficulties[current.difficulty]}</span></div>
      <div className="question-progress"><span style={{width:`${(cursor+1)/session.length*100}%`}}/></div>
      <div className="ai-session-meta"><span>{current.institution.toUpperCase()} · {current.topic}</span>{inMock&&<span><Clock3 size={15}/> {duration} decorrido</span>}</div>
      <h2>{current.prompt}</h2>
      <div className="answer-options">{current.options.map((text,i)=><button type="button" key={i} disabled={Boolean(answers[cursor])||submitting} className={`answer-choice ${choice===i?'chosen':''} ${!inMock&&answers[cursor]&&i===answers[cursor].correctIndex?'is-correct':''}`} onClick={()=>setChoice(i)}><span>{String.fromCharCode(65+i)}</span>{text}</button>)}</div>
      {answers[cursor]&&!inMock&&<div className={`explanation-box ${answers[cursor].correct?'correct':'incorrect'}`} role="status"><strong>{answers[cursor].correct?'Correto!':'Vamos revisar'}</strong><p>Gabarito: {String.fromCharCode(65+answers[cursor].correctIndex)}. {answers[cursor].explanation}</p></div>}
      {answers[cursor]&&inMock&&<p className="message neutral" role="status">Resposta registrada. A correção ficará disponível somente no final deste simulado.</p>}
      <div className="practice-actions"><button type="button" className="btn outline" onClick={()=>{setSession([]);setFinished(false);}}>Encerrar</button><button type="button" className="btn outline" onClick={onTutor}>{answers[cursor]&&!inMock?'Entender com Kog':'Pedir dica ao Kog'}</button>{!answers[cursor]?<button type="button" className="btn primary" disabled={choice===null||submitting} onClick={()=>void submitAnswer()}>{submitting?'Conferindo…':'Registrar resposta'}</button>:<button type="button" className="btn primary" onClick={next}>{cursor===session.length-1?'Ver resultado':'Próxima questão →'}</button>}</div>
    </>}
   </section>}
 </div>;
}