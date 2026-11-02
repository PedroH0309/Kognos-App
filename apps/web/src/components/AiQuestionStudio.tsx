'use client';

import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {BrainCircuit,BookOpenText,ShieldCheck,RefreshCw,Clock3,CheckCircle2,AlertTriangle,Sparkles} from 'lucide-react';
import {KognosSelect} from './KognosFields';
import {examBlueprints,difficulties,type ExamId,type Difficulty} from '@/lib/exam-blueprints';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {getSupabase} from '@/lib/supabase';
import type {ApprovedSyllabusTopic} from '@/lib/syllabus-sources';
import {lessonGenerationPreset,validLessonAIReference,inferLegacyLessonId} from '@/lib/lesson-ai-links';
import {findLearningLesson} from '@/lib/learning-catalog';
import {AI_BANK_PAGE_SIZE,splitGenerationBatches} from '@/lib/ai-bank-paging';

export type UserAIQuestion={id:string;lesson_id?:string|null;institution:ExamId;source_title:string;source_url:string;edition:string;subject:string;topic:string;difficulty:Difficulty;prompt:string;options:string[];created_at:string;source_kind?:'editor_approved_source'|'editorial';review_status:'auto_reviewed'};
type Grading={correct:boolean;correctIndex:number;explanation:string};
type Mode='questions'|'simulados';
const examOptions=(Object.entries(examBlueprints) as [ExamId,(typeof examBlueprints)[ExamId]][]).map(([value,item])=>({value,label:item.label}));
const difficultyOptions=(Object.entries(difficulties) as [Difficulty,string][]).map(([value,label])=>({value,label}));
const amountOptions=[1,3,5,10].map(value=>({value:String(value),label:`${value} ${value===1?'questão':'questões'}`}));

export default function AiQuestionStudio({mode,userId,onTutor,onLogin,onContextChange,focusLessonId}:{mode:Mode;userId:string|null;onTutor:()=>void;onLogin:()=>void;onContextChange:(context:KogStudyContext|null)=>void;focusLessonId?:string|null}) {
 const preset=focusLessonId?lessonGenerationPreset(focusLessonId):null;
 const [linkedLessonId,setLinkedLessonId]=useState<string|null>(preset?.lessonId??null);
 const [institution,setInstitution]=useState<ExamId>(preset?.institution??'enem');
 const [subject,setSubject]=useState(preset?.subject??'Matemática');
 const [topic,setTopic]=useState(preset?.topic??'Porcentagem e razão');
 const [difficulty,setDifficulty]=useState<Difficulty>('intermediate');
 const [count,setCount]=useState('5');
 const [bankScope,setBankScope]=useState<'all'|'topic'>(focusLessonId?'topic':'all');
 const [questions,setQuestions]=useState<UserAIQuestion[]>([]);
 const [totalQuestions,setTotalQuestions]=useState(0);
 const [hasMore,setHasMore]=useState(false);
 const [loadingMore,setLoadingMore]=useState(false);
 const [batchNumber,setBatchNumber]=useState(0);
 const requestSerial=useRef(0);
 const [approvedTopics,setApprovedTopics]=useState<ApprovedSyllabusTopic[]>([]);
 const [sourceNotice,setSourceNotice]=useState('');
 const [loading,setLoading]=useState(false),[generating,setGenerating]=useState(false),[submitting,setSubmitting]=useState(false);
 const [error,setError]=useState(''),[notice,setNotice]=useState('');
 const [session,setSession]=useState<UserAIQuestion[]>([]),[cursor,setCursor]=useState(0),[choice,setChoice]=useState<number|null>(null);
 const [answers,setAnswers]=useState<Grading[]>([]),[finished,setFinished]=useState(false);
 const [elapsed,setElapsed]=useState(0);
 const blueprint=examBlueprints[institution];
 const subjectOptions=Object.keys(blueprint.subjects).map(value=>({value,label:value}));
 const matched=approvedTopics.filter(t=>t.institution===institution&&t.subject===subject);
 const verifiedTopic=matched.find(t=>t.topic===topic);
 const allTopics=[...new Set([...(blueprint.subjects[subject]||[]),...matched.map(x=>x.topic)])];
 const topicOptions=allTopics.map(value=>({value,label:matched.some(x=>x.topic===value)?`${value} · fonte revisada`:value}));
 const inMock=mode==='simulados';
 const linkedLesson=linkedLessonId?findLearningLesson(linkedLessonId):null;
 const activeLessonLink=linkedLessonId&&validLessonAIReference(linkedLessonId,institution,subject,topic)?linkedLessonId:null;
 const bank=useMemo(()=>questions.filter(q=>q.institution===institution&&(!inMock||q.difficulty===difficulty)&&(!linkedLessonId||q.lesson_id===linkedLessonId||(!q.lesson_id&&inferLegacyLessonId(q.institution,q.subject,q.topic)===linkedLessonId))),[questions,institution,inMock,difficulty,linkedLessonId]);
 const scopeDescription=bankScope==='topic'?`${subject} · ${topic}`:`todas as matérias · ${blueprint.label}`;
 const current=session[cursor];
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

 const listUrl=useCallback((offset:number)=>{
  const params=new URLSearchParams({institution,offset:String(offset)});
  if(inMock)params.set('difficulty',difficulty);
  if(bankScope==='topic'){params.set('subject',subject);params.set('topic',topic);}
  return `/api/ai-questions?${params.toString()}`;
 },[institution,inMock,difficulty,bankScope,subject,topic]);
 const refresh=useCallback(async()=>{
  const requestId=++requestSerial.current;
  if(!userId){setQuestions([]);setTotalQuestions(0);setHasMore(false);return;}
  setLoading(true);setError('');
  try{
   const data=await authenticatedFetch(listUrl(0));
   if(requestId!==requestSerial.current)return;
   setQuestions(Array.isArray(data.questions)?data.questions:[]);
   setTotalQuestions(Number(data.total)||0);
   setHasMore(data.hasMore===true);
  }catch(e){if(requestId===requestSerial.current){setQuestions([]);setTotalQuestions(0);setHasMore(false);setError(e instanceof Error?e.message:'Falha ao carregar as questões.');}}
  finally{if(requestId===requestSerial.current)setLoading(false);}
 },[authenticatedFetch,listUrl,userId]);
 useEffect(()=>{void refresh();return()=>{requestSerial.current+=1;};},[refresh]);
 async function loadMore(){
  if(!userId||loading||loadingMore||!hasMore)return;
  const activeId=requestSerial.current,offset=questions.length;
  if(offset%AI_BANK_PAGE_SIZE!==0)return;
  setLoadingMore(true);setError('');
  try{
   const data=await authenticatedFetch(listUrl(offset));
   if(activeId!==requestSerial.current)return;
   setQuestions(old=>[...old,...(Array.isArray(data.questions)?data.questions:[])]);
   setTotalQuestions(Number(data.total)||0);setHasMore(data.hasMore===true);
  }catch(e){if(activeId===requestSerial.current)setError(e instanceof Error?e.message:'Não foi possível carregar mais questões.');}
  finally{if(activeId===requestSerial.current)setLoadingMore(false);}
 }
 useEffect(()=>{
  if(!userId){setApprovedTopics([]);return;}
  let active=true;
  authenticatedFetch('/api/exam-sources').then(data=>{if(active){setApprovedTopics(Array.isArray(data.topics)?data.topics:[]);setSourceNotice('');}})
   .catch(()=>{if(active){setApprovedTopics([]);setSourceNotice('Catálogo de fontes revisadas indisponível. O gerador ainda pode usar os recortes editoriais após aplicar a migração 0006.');}});
  return()=>{active=false;};
 },[authenticatedFetch,userId]);
 useEffect(()=>{if(!activeSession||!inMock)return;const started=Date.now()-elapsed*1000;const handle=window.setInterval(()=>setElapsed(Math.floor((Date.now()-started)/1000)),1000);return()=>window.clearInterval(handle);},[activeSession,inMock]);
 useEffect(()=>{
  if(!current||finished){onContextChange(null);return;}
  onContextChange({kind:'generated_question',questionId:current.id,phase:answers[cursor]&&!inMock?'review':'solving'});
 },[current?.id,cursor,answers,finished,inMock,onContextChange]);
 function changeInstitution(value:ExamId){
  setInstitution(value);const preferred=linkedLessonId?lessonGenerationPreset(linkedLessonId,value):null;
  const exact=preferred?.institution===value?preferred:null;
  const first=Object.keys(examBlueprints[value].subjects)[0];setSubject(exact?.subject??first);setTopic(exact?.topic??examBlueprints[value].subjects[first][0]);
  if(!exact)setLinkedLessonId(null);
 }
 function changeSubject(value:string){setSubject(value);setTopic(blueprint.subjects[value][0]);setLinkedLessonId(null);}
 function changeTopic(value:string){setTopic(value);if(linkedLessonId&&!validLessonAIReference(linkedLessonId,institution,subject,value))setLinkedLessonId(null);}
 async function generate(){
  if(!userId)return;
  setGenerating(true);setError('');setNotice('');
  const parts=splitGenerationBatches(Number(count));
  let saved=0,rejected=0,failure='';
  try{
   for(let index=0;index<parts.length;index++){
    setBatchNumber(index+1);
    try{
     const result=await authenticatedFetch('/api/ai-questions/generate',{method:'POST',body:JSON.stringify({institution,subject,topic,difficulty,count:parts[index],sourceTopicId:verifiedTopic?.id,...(activeLessonLink?{lessonId:activeLessonLink}:{})})});
     saved+=Number(result.approved)||0;rejected+=Number(result.rejected)||0;
    }catch(e){failure=e instanceof Error?e.message:'A geração de questões não foi concluída.';break;}
   }
   if(saved){
    setNotice(`${saved} questão(ões) gerada(s) e salva(s) no banco pessoal. ${rejected?`${rejected} não passou/passaram na revisão. `:''}Essas questões também ficam disponíveis para simulados.`);
    await refresh();
   }
   if(failure)setError(`${failure}${saved?` As ${saved} questão(ões) anteriores foram mantidas no banco.`:''}`);
  }finally{setGenerating(false);setBatchNumber(0);}
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
   {!userId&&<div className="dark-panel ai-signin ai-signin-action"><ShieldCheck size={23}/><div><h2>Entre para construir seu banco de IA</h2><p>O acervo demonstrativo tem 20 questões fixas. Com a sua conta você gera novos itens com NVIDIA, salva no Supabase e monta simulados com eles.</p><button type="button" className="btn primary" onClick={onLogin}>Entrar ou criar conta</button></div></div>}
   {userId&&!session.length&&<>
    {linkedLesson&&<div className="ai-lesson-focus"><BookOpenText size={18}/><span><strong>Questões para a aula: {linkedLesson.topic}</strong><small>Questões vinculadas à trilha. O banco filtra apenas esta aula; resultados continuam privados.</small></span><button type="button" className="btn outline small" onClick={()=>{setLinkedLessonId(null);setBankScope('all');}}>Ver banco completo</button></div>}
    <section className="dark-panel ai-studio-generator">
      <div className="ai-generator-heading"><div><span className="overline">BANCO INTELIGENTE</span><h2><BrainCircuit size={22} aria-hidden="true"/> Gerador de questões com IA</h2><p>Escolha a instituição e o nível. O Kognos gera itens originais e realiza uma revisão automática antes de salvá-los.</p></div><span className="ai-tag"><Sparkles size={14}/> IA · NVIDIA</span></div>
      <div className="ai-generator-grid">
       <KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/>
       <KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={changeSubject}/>
       <KognosSelect label="Assunto" value={topic} options={topicOptions} onChange={changeTopic}/>
       <KognosSelect label="Nível" value={difficulty} options={difficultyOptions} onChange={setDifficulty}/>
       <KognosSelect label="Quantidade" value={count} options={amountOptions} onChange={setCount}/>
      </div>
      <div className="ai-source-note"><BookOpenText size={16} aria-hidden="true"/><div><strong>{verifiedTopic?`Assunto vinculado a fonte revisada: ${verifiedTopic.edition}`:`Referência editorial: ${blueprint.edition}`}</strong><p>{verifiedTopic?`Trecho do documento: “${verifiedTopic.evidence}”. A revisão editorial não é homologação da instituição.`:blueprint.notice} <a href={verifiedTopic?.sourceUrl||blueprint.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar fonte institucional</a></p>{sourceNotice&&<small>{sourceNotice}</small>}</div></div>
      <div className="ai-generator-actions"><button className="btn primary" disabled={generating||loading} onClick={()=>void generate()}><Sparkles size={16}/>{generating?`Gerando lote ${batchNumber} de ${splitGenerationBatches(Number(count)).length}…`:`Gerar ${count} ${Number(count)===1?'questão':'questões'} com IA`}</button><small>Até 10 por ação (lotes de 5) · cada lote utiliza sua cota diária de IA. A geração depende da NVIDIA e do Supabase.</small></div>
    </section>
    <section className="dark-panel ai-bank">
      <div className="ai-bank-header"><div><h2>{inMock?'Simulados personalizados':'Meu banco de questões IA'}</h2><p>Questões privadas salvas automaticamente, disponíveis para estudo e simulado.</p></div><button type="button" className="btn outline small" onClick={()=>void refresh()} disabled={loading}><RefreshCw size={15}/> Atualizar</button></div>
      <div className="ai-bank-scope" role="group" aria-label="Filtrar banco pessoal"><button type="button" className={bankScope==='all'?'selected':''} aria-pressed={bankScope==='all'} onClick={()=>{setBankScope('all');setLinkedLessonId(null);}}>Toda a instituição</button><button type="button" className={bankScope==='topic'?'selected':''} aria-pressed={bankScope==='topic'} onClick={()=>setBankScope('topic')}>Assunto selecionado</button></div>
      <div className="ai-bank-counter"><strong>{loading?'…':totalQuestions}</strong><span>{totalQuestions===1?'questão salva':'questões salvas'} neste filtro · {scopeDescription}{inMock?` · ${difficulties[difficulty]}`:''}<small> {loading?'Consultando banco…':`${questions.length} carregadas nesta página`}</small></span></div>
      {loading&&<p role="status" className="muted">Carregando questões...</p>}
      {!loading&&!bank.length&&<p className="ai-empty">Nenhuma questão salva para este filtro. Se você já gerou questões, tente “Toda a instituição”, escolha outra dificuldade ou gere um novo conjunto acima. As questões aprovadas serão incluídas também nos simulados.</p>}
      {!!bank.length&&<>
       <button type="button" className="btn primary" onClick={()=>start(bank.slice(0,Math.min(20,bank.length)))}>{inMock?'Iniciar simulado de IA':'Praticar questões do banco'} ({Math.min(20,bank.length)})</button>
       <div className="ai-question-list">{bank.map(q=><article key={q.id}><div><span>{q.subject} · {q.topic} · {difficulties[q.difficulty]}</span><h3>{q.prompt}</h3><small>{q.source_kind==='editor_approved_source'?'IA · assunto vinculado a matriz revisada':'IA · assunto editorial'} · resposta verificada automaticamente, sem homologação do item</small></div><button type="button" className="btn outline small" onClick={()=>start([q])}>Resolver</button></article>)}</div>
      </>}
      {hasMore&&<button type="button" className="btn outline ai-load-more" disabled={loadingMore||loading} onClick={()=>void loadMore()}>{loadingMore?'Carregando…':`Carregar mais questões (${questions.length} de ${totalQuestions})`}</button>}
      {!hasMore&&totalQuestions>0&&<p className="ai-end-of-results">Todas as {totalQuestions} questões deste filtro foram carregadas.</p>}
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