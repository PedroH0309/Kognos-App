'use client';

import {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {BrainCircuit,BookOpenText,ShieldCheck,RefreshCw,Clock3,CheckCircle2,AlertTriangle,Sparkles} from 'lucide-react';
import {KognosSelect} from './KognosFields';
import {examBlueprints,difficulties,type ExamId,type Difficulty} from '@/lib/exam-blueprints';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {getSupabase} from '@/lib/supabase';
import type {ApprovedSyllabusTopic} from '@/lib/syllabus-sources';
import {lessonGenerationPreset,validLessonAIReference,inferLegacyLessonId,lessonPracticeGenerationRequest} from '@/lib/lesson-ai-links';
import {newQuestionsForSelectedLesson} from '@/lib/lesson-practice-session';
import {findLearningLesson} from '@/lib/learning-catalog';
import {AI_BANK_PAGE_SIZE} from '@/lib/ai-bank-paging';
import IntegrationSetupNotice from './IntegrationSetupNotice';
import {bankSyncNotice} from '@/lib/integration-feedback';
import {useServerReadiness} from '@/lib/use-server-readiness';
import {readGeneratorDraft,saveGeneratorDraft} from '@/lib/ai-generator-draft';
import {generateApprovedBatches,MAX_ATTEMPTS_PER_BATCH} from '@/lib/ai-generation-batches';
import {getCloudTasks,createCloudTasks} from '@/lib/cloud-study';
import {createSpacedReviewPlan} from '@/lib/spaced-review-plan';
import {recoveryTargetForQuestion,recoveryTargetsFromGradedSession} from '@/lib/lesson-recovery';
import type {StudentProfile} from '@/lib/profile';

export type UserAIQuestion={id:string;lesson_id?:string|null;institution:ExamId;source_title:string;source_url:string;edition:string;subject:string;topic:string;difficulty:Difficulty;prompt:string;options:string[];created_at:string;source_kind?:'editor_approved_source'|'editorial';review_status:'auto_reviewed'};
type Grading={correct:boolean;correctIndex:number;explanation:string;xpEarned:number};
type Mode='questions'|'simulados';
const examOptions=(Object.entries(examBlueprints) as [ExamId,(typeof examBlueprints)[ExamId]][]).map(([value,item])=>({value,label:item.label}));
const difficultyOptions=(Object.entries(difficulties) as [Difficulty,string][]).map(([value,label])=>({value,label}));
const amountOptions=[1,3,5,10].map(value=>({value:String(value),label:`${value} ${value===1?'questão':'questões'}`}));

export default function AiQuestionStudio({mode,userId,profile,onTutor,onLogin,onContextChange,onOpenLesson,onGenerateLesson,focusLessonId,lessonPracticeRequestId=0}:{mode:Mode;userId:string|null;profile:StudentProfile;onTutor:()=>void;onLogin:()=>void;onContextChange:(context:KogStudyContext|null)=>void;onOpenLesson:(focus:{subject:string;lessonId:string})=>void;onGenerateLesson:(lessonId:string)=>void;focusLessonId?:string|null;lessonPracticeRequestId?:number}) {
 const preset=focusLessonId?lessonGenerationPreset(focusLessonId):null;
 const readiness=useServerReadiness();
 const hasServerBank=readiness.status?.supabaseServerConfigured===true;
 const canGenerate=readiness.status?.questionGenerationConfigured===true;
 const [linkedLessonId,setLinkedLessonId]=useState<string|null>(preset?.lessonId??null);
 const [institution,setInstitution]=useState<ExamId>(preset?.institution??'enem');
 const [subject,setSubject]=useState(preset?.subject??'Matemática');
 const [topic,setTopic]=useState(preset?.topic??'Porcentagem e razão');
 const [difficulty,setDifficulty]=useState<Difficulty>('intermediate');
 const [count,setCount]=useState('1');
 const [bankScope,setBankScope]=useState<'all'|'topic'>(focusLessonId?'topic':'all');
 const [questions,setQuestions]=useState<UserAIQuestion[]>([]);
 const [totalQuestions,setTotalQuestions]=useState(0);
 const [hasMore,setHasMore]=useState(false);
 const [loadingMore,setLoadingMore]=useState(false);
 const [approvedSoFar,setApprovedSoFar]=useState(0);
 const [draftReadyFor,setDraftReadyFor]=useState<string|null>(null);
 const [generationStartedAt,setGenerationStartedAt]=useState<number|null>(null);
 const [generationSeconds,setGenerationSeconds]=useState(0);
 const requestSerial=useRef(0);
 const handledLessonPractice=useRef('');
 const [lessonPracticeRetry,setLessonPracticeRetry]=useState(0);
 const [lessonPracticeLoading,setLessonPracticeLoading]=useState(false);
 const [lessonPracticeError,setLessonPracticeError]=useState('');
 const [manualBankForRequest,setManualBankForRequest]=useState(0);
 const [approvedTopics,setApprovedTopics]=useState<ApprovedSyllabusTopic[]>([]);
 const [sourceNotice,setSourceNotice]=useState('');
 const [loading,setLoading]=useState(false),[generating,setGenerating]=useState(false),[submitting,setSubmitting]=useState(false);
 const [error,setError]=useState(''),[notice,setNotice]=useState('');
 const [bankFetched,setBankFetched]=useState(false),[bankError,setBankError]=useState('');
 const [session,setSession]=useState<UserAIQuestion[]>([]),[cursor,setCursor]=useState(0),[choice,setChoice]=useState<number|null>(null);
 const [answers,setAnswers]=useState<Grading[]>([]),[finished,setFinished]=useState(false);
 const [reviewBusy,setReviewBusy]=useState(false);
 const reviewLock=useRef(false);
 const [reviewNotice,setReviewNotice]=useState('');
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
 const recoveryTargets=useMemo(()=>recoveryTargetsFromGradedSession(session,answers),[session,answers]);
 const wrongQuestion=current&&answers[cursor]?.correct===false?recoveryTargetForQuestion(current):null;
 const lessonAutostart=lessonPracticeRequestId>0&&Boolean(focusLessonId)&&manualBankForRequest!==lessonPracticeRequestId;

 useEffect(()=>{
  if(!userId||focusLessonId){setDraftReadyFor(null);return;}
  const draft=readGeneratorDraft(window.localStorage,userId);
  if(draft){
   setInstitution(draft.institution);setSubject(draft.subject);setTopic(draft.topic);
   setDifficulty(draft.difficulty);setCount(draft.count);setBankScope(draft.bankScope);
  }
  setDraftReadyFor(userId);
 },[userId,focusLessonId]);
 useEffect(()=>{
  // Wait for draft hydration before writing: don't overwrite the previous filters with defaults.
  if(!userId||draftReadyFor!==userId||focusLessonId)return;
  saveGeneratorDraft(window.localStorage,userId,{institution,subject,topic,difficulty,count,bankScope});
 },[userId,draftReadyFor,focusLessonId,institution,subject,topic,difficulty,count,bankScope]);
 useEffect(()=>{
  if((!generating&&!lessonPracticeLoading)||generationStartedAt===null)return;
  const update=()=>setGenerationSeconds(Math.floor((Date.now()-generationStartedAt)/1000));
  update();const timer=window.setInterval(update,1000);
  window.addEventListener('focus',update);
  return()=>{window.clearInterval(timer);window.removeEventListener('focus',update);};
 },[generating,lessonPracticeLoading,generationStartedAt]);

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
  if(!userId||!hasServerBank){
   setQuestions([]);setTotalQuestions(0);setHasMore(false);
   setBankFetched(false);setBankError('');setLoading(false);setError('');return;
  }
  setLoading(true);setBankFetched(false);setBankError('');setError('');
  try{
   const data=await authenticatedFetch(listUrl(0));
   if(requestId!==requestSerial.current)return;
   if(!Array.isArray(data.questions)||!Number.isInteger(data.total)||data.total<0||typeof data.hasMore!=='boolean')
    throw new Error('Resposta inválida do banco.');
   setQuestions(data.questions);setTotalQuestions(data.total);
   setHasMore(data.hasMore);setBankFetched(true);
  }catch(e){
   if(requestId===requestSerial.current){
    setQuestions([]);setTotalQuestions(0);setHasMore(false);
    setBankFetched(false);setBankError(bankSyncNotice(e instanceof Error?e.message:''));
   }
  }finally{if(requestId===requestSerial.current)setLoading(false);}
 },[authenticatedFetch,listUrl,userId,hasServerBank]);
 // Lesson practice should request fresh reviewed items immediately, not spend
 // its first network round-trip loading unrelated saved bank entries.
 useEffect(()=>{
  if(!lessonAutostart)void refresh();
  return()=>{requestSerial.current+=1;};
 },[refresh,lessonAutostart]);
 // One learner click = one generation attempt. Never rerun merely because
 // the status hook, saved bank or component re-rendered. React Strict Mode is
 // also guarded by handledLessonPractice.
 useEffect(()=>{
  if(!lessonAutostart||!userId||!focusLessonId||readiness.loading)return;
  const requestKey=[userId,focusLessonId,lessonPracticeRequestId,lessonPracticeRetry].join(':');
  if(handledLessonPractice.current===requestKey)return;
  handledLessonPractice.current=requestKey;
  if(!canGenerate){
   setLessonPracticeError('O servidor ainda não confirmou a geração e revisão de questões. Confira o diagnóstico de IA e tente novamente.');
   return;
  }
  const generation=lessonPracticeGenerationRequest(focusLessonId,lessonPracticeRequestId+lessonPracticeRetry);
  if(!generation){
   setLessonPracticeError('Esta aula ainda não tem um assunto seguro vinculado ao gerador.');
   return;
  }
  // An explicit new lesson-practice click replaces the previous in-page exercise.
  setSession([]);setFinished(false);setCursor(0);setChoice(null);setAnswers([]);
  setLessonPracticeLoading(true);setLessonPracticeError('');setError('');setNotice('');
  setGenerationStartedAt(Date.now());setGenerationSeconds(0);
  const attempt=async()=>{
   try{
    const data=await authenticatedFetch('/api/ai-questions/generate',{
     method:'POST',body:JSON.stringify(generation)
    });
    const fresh=newQuestionsForSelectedLesson(data,generation);
    if(!fresh.length)throw new Error('A geração não retornou questões novas, revisadas e vinculadas a esta aula.');
    start(fresh);
    setNotice(`${fresh.length} ${fresh.length===1?'questão nova aprovada':'questões novas aprovadas'} para esta aula. ${fresh.length<generation.count?'A revisão aprovou menos questões que o solicitado; nenhuma antiga foi reutilizada.':''}`);
   }catch(e){
    setLessonPracticeError(e instanceof Error?e.message:'Não foi possível gerar as questões desta aula.');
   }finally{
    setLessonPracticeLoading(false);setGenerationStartedAt(null);
   }
  };
  void attempt();
 },[lessonAutostart,userId,focusLessonId,lessonPracticeRequestId,lessonPracticeRetry,
    readiness.loading,canGenerate,authenticatedFetch]);
 async function loadMore(){
  if(!userId||!hasServerBank||loading||loadingMore||!hasMore)return;
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
  if(!userId||!hasServerBank||lessonAutostart){setApprovedTopics([]);return;}
  let active=true;
  authenticatedFetch('/api/exam-sources').then(data=>{if(active){setApprovedTopics(Array.isArray(data.topics)?data.topics:[]);setSourceNotice('');}})
   .catch(()=>{if(active){setApprovedTopics([]);setSourceNotice('Catálogo de fontes revisadas indisponível. O gerador ainda pode usar os recortes editoriais após aplicar a migração 0006.');}});
  return()=>{active=false;};
 },[authenticatedFetch,userId,hasServerBank,lessonAutostart]);
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
  if(!userId||!canGenerate||generating)return;
  const requested=Number(count);
  setGenerating(true);setApprovedSoFar(0);setGenerationStartedAt(Date.now());setGenerationSeconds(0);setError('');setNotice('');
  try{
   const result=await generateApprovedBatches(requested,
    async (remaining,batch,attempt)=>await authenticatedFetch('/api/ai-questions/generate',{
     method:'POST',body:JSON.stringify({
      institution,subject,topic,difficulty,count:remaining,variation:(batch-1)*3+attempt-1,
      ...(verifiedTopic?{sourceTopicId:verifiedTopic.id}:{}),
      ...(activeLessonLink?{lessonId:activeLessonLink}:{})
     })
    }),
    undefined,
    approved=>setApprovedSoFar(approved)
   );
   if(result.saved){
    const reasons=result.missing?[
     result.diagnostics.structurallyMissing?`formato incompleto (${result.diagnostics.structurallyMissing})`:null,
     result.diagnostics.missingReview?`revisão incompleta (${result.diagnostics.missingReview})`:null,
     result.diagnostics.pedagogicallyRejected?`reprovações pedagógicas (${result.diagnostics.pedagogicallyRejected})`:null,
     result.diagnostics.answerDisagreements?`gabaritos divergentes (${result.diagnostics.answerDisagreements})`:null,
     result.diagnostics.duplicates?`questões repetidas (${result.diagnostics.duplicates})`:null
    ].filter(Boolean).join('; '):'';
    setNotice(`${result.saved} de ${result.requested} questões aprovadas e salvas. ${result.missing?`${result.missing} ficaram pendentes após até ${MAX_ATTEMPTS_PER_BATCH} tentativas por lote. ${reasons?`Diagnóstico das tentativas: ${reasons}. `:''}`:''}As aprovadas já estão no banco para prática e simulados.`);
    await refresh();
   }
   if(result.error)setError(`${result.error}${result.saved?` As ${result.saved} aprovadas continuam salvas.`:''}`);
   else if(result.missing&&!result.saved)setError('Nenhuma questão passou pela revisão. Tente outro tema ou dificuldade; nenhuma questão incorreta foi salva.');
  }finally{setGenerating(false);setGenerationStartedAt(null);}
 }

 function start(list:UserAIQuestion[]){if(!list.length)return;setReviewNotice('');setSession([...list]);setCursor(0);setChoice(null);setAnswers([]);setFinished(false);setError('');setNotice('');setElapsed(0);}
 async function submitAnswer(){
  if(!current||choice===null||submitting||answers[cursor])return;
  setSubmitting(true);setError('');
  try{
   const grade=await authenticatedFetch('/api/ai-questions/submit',{
    method:'POST',body:JSON.stringify({questionId:current.id,answerIndex:choice,mode:inMock?'mock':'practice'})
   });
   const xpEarned=Number(grade.xpEarned)||0;
   setAnswers(old=>[...old,{correct:Boolean(grade.correct),correctIndex:grade.correctIndex,explanation:grade.explanation,xpEarned}]);
   // Keep the completed question visible only in THIS session for feedback;
   // it is no longer available for a new attempt or a new bank session.
   setQuestions(old=>old.filter(q=>q.id!==current.id));
   setTotalQuestions(old=>Math.max(0,old-1));
   setNotice(`Resposta registrada · +${xpEarned} XP. Esta questão saiu da sua lista de pendentes.`);
   window.dispatchEvent(new Event('kognos:ai-answer-recorded'));
   // Use a server-graded attempt when the Kog tutor opens, never an
   // unverified client-provided correct answer or guessed weakness.
   onContextChange({kind:'generated_question',questionId:current.id,phase:'review'});
  }catch(e){
   const message=e instanceof Error?e.message:'Falha ao corrigir a resposta.';
   setError(message);
   if(/já concluída/i.test(message)){
    setQuestions(old=>old.filter(q=>q.id!==current.id));
    setSession([]);setFinished(false);
    void refresh();
   }
  }finally{setSubmitting(false);}
 }

 function askKogForQuestion(questionId:string){
  onContextChange({kind:'generated_question',questionId,phase:'review'});
  onTutor();
 }
 async function scheduleMistakeReviews(){
  if(!userId||!finished||reviewLock.current||!recoveryTargets.length)return;
  reviewLock.current=true;setReviewBusy(true);setReviewNotice('');
  try{
   // One read and one batch insert after explicit student confirmation.
   const existing=await getCloudTasks(userId);
   const weak=recoveryTargets.map(item=>({
    subject:item.subject,topic:item.topic,incorrect:item.wrongCount,lastWrong:true
   }));
   const plan=createSpacedReviewPlan(profile,existing,weak,new Date(),()=>crypto.randomUUID(),3);
   if(plan.created.length)await createCloudTasks(userId,plan.created);
   setReviewNotice(plan.created.length
    ?`${plan.created.length} revisão(ões) agendada(s) no calendário do Kognos.${plan.covered?` ${plan.covered} intervalo(s) já estavam programados.`:''}${plan.skipped?` ${plan.skipped} intervalo(s) ficaram sem horário.`:''}`
    :plan.covered?'Os intervalos disponíveis já têm revisões pendentes desses assuntos.':
     'Não há horários livres para revisar nos próximos dias permitidos antes da prova. Ajuste suas preferências de estudo.');
  }catch(e){
   setReviewNotice(e instanceof Error?`Não foi possível salvar as revisões: ${e.message}`:
    'Não foi possível salvar as revisões. Tente novamente.');
  }finally{reviewLock.current=false;setReviewBusy(false);}
 }
 function next(){
  if(cursor>=session.length-1){setFinished(true);setChoice(null);return;}
  setCursor(v=>v+1);setChoice(null);
 }
 const points=answers.filter(a=>a.correct).length;
 const sessionXP=answers.reduce((sum,a)=>sum+a.xpEarned,0);
 const duration=`${String(Math.floor(elapsed/60)).padStart(2,'0')}:${String(elapsed%60).padStart(2,'0')}`;
 return <div className="ai-studio">
   {error&&<div role="alert" className="message warning">{error}</div>}
   {notice&&<div role="status" className="message success">{notice}</div>}
   {!userId&&<div className="dark-panel ai-signin ai-signin-action"><ShieldCheck size={23}/><div><h2>Entre para construir seu banco de IA</h2><p>O acervo demonstrativo tem 20 questões fixas. Com sua conta você gera questões com IA, salva no Supabase, registra pontos e monta simulados.</p><button type="button" className="btn primary" onClick={onLogin}>Entrar ou criar conta</button></div></div>}
   {userId&&!session.length&&lessonAutostart&&<section className="dark-panel k-lesson-practice-generation" role="status" aria-live="polite">
    <div className="k-lesson-practice-generation-head"><Sparkles size={22}/><div>
     <strong>{linkedLesson? `Preparando exercícios de ${linkedLesson.topic}`:'Preparando exercícios desta aula'}</strong>
     <p>O Kognos solicita 3 questões autorais novas, verifica os gabaritos e abre o treino somente com os itens aprovados.</p>
    </div></div>
    {lessonPracticeError?<div className="message warning" role="alert">{lessonPracticeError}
     <p>Nenhuma questão antiga será usada como substituta.</p></div>:
     <p className="k-lesson-practice-pending">{lessonPracticeLoading?`Revisando novas questões · ${generationSeconds}s`:'Verificando a disponibilidade da geração…'}</p>}
    <div className="k-lesson-practice-actions">
     {lessonPracticeError&&<button type="button" className="btn primary" onClick={()=>setLessonPracticeRetry(value=>value+1)}><RefreshCw size={15}/> Tentar gerar novamente</button>}
     <button type="button" className="btn outline" disabled={lessonPracticeLoading} onClick={()=>{setManualBankForRequest(lessonPracticeRequestId);setLessonPracticeError('');}}>Abrir banco existente manualmente</button>
    </div>
    <p className="privacy-note">O processo utiliza a configuração gratuita de IA do servidor, sujeita às cotas dos provedores. Nenhum resultado é inventado quando a geração falha.</p>
   </section>}
   {userId&&!session.length&&!lessonAutostart&&<>
    <IntegrationSetupNotice readiness={readiness}/>
    {linkedLesson&&<div className="ai-lesson-focus"><BookOpenText size={18}/><span><strong>Questões para a aula: {linkedLesson.topic}</strong><small>Questões vinculadas à trilha. O banco filtra apenas esta aula; resultados continuam privados.</small></span><button type="button" className="btn outline small" onClick={()=>{setLinkedLessonId(null);setBankScope('all');}}>Ver banco completo</button></div>}
    <section className="dark-panel ai-studio-generator">
      <div className="ai-generator-heading"><div><span className="overline">BANCO INTELIGENTE</span><h2><BrainCircuit size={22} aria-hidden="true"/> Gerador de questões com IA</h2><p>Escolha a instituição e o nível. O Kognos gera itens originais e realiza uma revisão automática antes de salvá-los.</p></div><span className="ai-tag"><Sparkles size={14}/> {readiness.status?.freeOnlyMode?'IA · modo gratuito':'IA · revisão automática'}</span></div>
      <div className="ai-generator-grid">
       <KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/>
       <KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={changeSubject}/>
       <KognosSelect label="Assunto" value={topic} options={topicOptions} onChange={changeTopic}/>
       <KognosSelect label="Nível" value={difficulty} options={difficultyOptions} onChange={setDifficulty}/>
       <KognosSelect label="Quantidade" value={count} options={amountOptions} onChange={setCount}/>
      </div>
      <details className="ai-source-note ai-source-reference"><summary><BookOpenText size={15} aria-hidden="true"/><strong>{verifiedTopic?`Conteúdo vinculado a fonte revisada · ${verifiedTopic.edition}`:`Referência editorial · ${blueprint.edition}`}</strong><span>Consultar detalhes</span></summary><div><p>{verifiedTopic?`Evidência: “${verifiedTopic.evidence}”. Revisão editorial não equivale à homologação da instituição.`:blueprint.notice} <a href={verifiedTopic?.sourceUrl||blueprint.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar fonte institucional</a></p>{sourceNotice&&<small>{sourceNotice}</small>}</div></details>
      <div className="ai-generator-actions"><button className="btn primary" disabled={generating||loading||!canGenerate} onClick={()=>void generate()}><Sparkles size={16}/>{generating?`Preparando ${count} questões · ${approvedSoFar} aprovadas`:`Gerar ${count} ${Number(count)===1?'questão':'questões'} com IA`}</button><small>{generating?`Processando há ${generationSeconds}s. Você pode mudar de guia e voltar; a geração continua enquanto a página permanecer aberta.`:'Modo gratuito: até 5 questões por lote, sem chamadas simultâneas. O Kognos revisa os gabaritos e respeita as cotas dos provedores.'}</small></div>
    </section>
    <section className="dark-panel ai-bank">
      <div className="ai-bank-header"><div><h2>{inMock?'Simulados personalizados':'Meu banco de questões IA'}</h2><p>Somente questões pendentes aparecem aqui. Ao responder, elas saem desta fila e rendem XP em Conquistas.</p></div><button type="button" className="btn outline small" onClick={()=>void refresh()} disabled={loading}><RefreshCw size={15}/> Atualizar</button></div>
      <div className="ai-bank-scope" role="group" aria-label="Filtrar banco pessoal"><button type="button" className={bankScope==='all'?'selected':''} aria-pressed={bankScope==='all'} onClick={()=>{setBankScope('all');setLinkedLessonId(null);}}>Toda a instituição</button><button type="button" className={bankScope==='topic'?'selected':''} aria-pressed={bankScope==='topic'} onClick={()=>setBankScope('topic')}>Assunto selecionado</button></div>
      <div className="ai-bank-counter"><strong>{hasServerBank?(loading?'…':bankFetched?totalQuestions:'—'):'—'}</strong><span>{hasServerBank&&bankFetched?`${totalQuestions===1?'questão pendente':'questões pendentes'} neste filtro · ${scopeDescription}${inMock?` · ${difficulties[difficulty]}`:''}` :'Banco aguardando consulta confirmada'}<small>{loading?'Consultando banco…':hasServerBank&&bankFetched?`${questions.length} carregadas nesta página`:'O total de questões ainda não foi confirmado'}</small></span></div>
      {(!hasServerBank||(!loading&&!bankFetched))&&<div className="k-bank-connection" role="status">
        {hasServerBank?bankError||'Não foi possível confirmar a consulta ao banco.':readiness.loading?'Verificando a conexão do servidor…':'A consulta ao banco de IA ainda não está disponível. Confira a configuração do servidor no aviso acima.'}
        <button type="button" className="k-bank-retry" disabled={loading||readiness.loading} onClick={()=>void (hasServerBank?refresh():readiness.refresh())}><RefreshCw size={14}/> Tentar novamente</button>
       </div>}
      {hasServerBank&&loading&&<p role="status" className="muted">Carregando questões...</p>}
      {hasServerBank&&bankFetched&&!loading&&!bank.length&&<p className="ai-empty">Nenhuma questão pendente neste filtro. Questões concluídas não podem ser respondidas novamente para ganhar XP; escolha outro assunto ou gere novas questões.</p>}
      {hasServerBank&&bankFetched&&!!bank.length&&<>
       <button type="button" className="btn primary" onClick={()=>start(bank.slice(0,Math.min(20,bank.length)))}>{inMock?'Iniciar simulado de IA':'Praticar questões do banco'} ({Math.min(20,bank.length)})</button>
       <div className="ai-question-list">{bank.map(q=><article key={q.id}><div><span>{q.subject} · {q.topic} · {difficulties[q.difficulty]}</span><h3>{q.prompt}</h3><small>{q.source_kind==='editor_approved_source'?'IA · assunto vinculado a matriz revisada':'IA · assunto editorial'} · resposta verificada automaticamente, sem homologação do item</small></div><button type="button" className="btn outline small" onClick={()=>start([q])}>Resolver</button></article>)}</div>
      </>}
      {hasServerBank&&bankFetched&&hasMore&&<button type="button" className="btn outline ai-load-more" disabled={loadingMore||loading} onClick={()=>void loadMore()}>{loadingMore?'Carregando…':`Carregar mais questões (${questions.length} de ${totalQuestions})`}</button>}
      {hasServerBank&&bankFetched&&!hasMore&&totalQuestions>0&&<p className="ai-end-of-results">Todas as {totalQuestions} questões pendentes deste filtro foram carregadas.</p>}
      <p className="privacy-note">A revisão automática não garante ausência de erros. Questões geradas não são oficiais e não entram no banco de outros alunos sem revisão humana.</p>
    </section>
   </>}
   {userId&&session.length>0&&<section className="dark-panel ai-session">
    {finished?<>
      <span className="overline">{inMock?'SIMULADO CONCLUÍDO':'TREINO CONCLUÍDO'}</span><h2>Seu resultado: {points} de {session.length}</h2><p>Você conquistou {sessionXP} XP nesta sessão. As questões concluídas saíram do banco de pendentes e já contam para suas Conquistas. Esta pontuação não é nota oficial nem estimativa TRI.</p>
      <div className="ai-review-results">{session.map((q,i)=><article key={q.id}><strong>{i+1}. {q.subject} — {answers[i]?.correct?'Acerto':'Revisar'}</strong><p>{q.prompt}</p><p>Gabarito: {String.fromCharCode(65+(answers[i]?.correctIndex??0))}. {answers[i]?.explanation||'Sem correção disponível.'}</p></article>)}</div>
      <button type="button" className="btn primary" onClick={()=>{setSession([]);setFinished(false);void refresh();}}>Voltar às questões pendentes</button>
    </>:<>
      <div className="question-topline"><span>{inMock?'SIMULADO IA':'PRÁTICA IA'} · QUESTÃO {cursor+1} DE {session.length}</span><span>{current.subject} · {difficulties[current.difficulty]}</span></div>
      <div className="question-progress"><span style={{width:`${(cursor+1)/session.length*100}%`}}/></div>
      <div className="ai-session-meta"><span>{current.institution.toUpperCase()} · {current.topic}</span>{inMock&&<span><Clock3 size={15}/> {duration} decorrido</span>}</div>
      <h2>{current.prompt}</h2>
      <div className="answer-options">{current.options.map((text,i)=><button type="button" key={i} disabled={Boolean(answers[cursor])||submitting} className={`answer-choice ${choice===i?'chosen':''} ${!inMock&&answers[cursor]&&i===answers[cursor].correctIndex?'is-correct':''}`} onClick={()=>setChoice(i)}><span>{String.fromCharCode(65+i)}</span>{text}</button>)}</div>
      {answers[cursor]&&!inMock&&<div className={`explanation-box ${answers[cursor].correct?'correct':'incorrect'}`} role="status"><strong>{answers[cursor].correct?'Correto!':'Vamos revisar'} · +{answers[cursor].xpEarned} XP</strong><p>Gabarito: {String.fromCharCode(65+answers[cursor].correctIndex)}. {answers[cursor].explanation}</p></div>}
      {answers[cursor]&&inMock&&<p className="message neutral" role="status">Resposta registrada · +{answers[cursor].xpEarned} XP. A correção ficará disponível somente no final deste simulado.</p>}
      <div className="practice-actions"><button type="button" className="btn outline" onClick={()=>{setSession([]);setFinished(false);void refresh();}}>Encerrar</button><button type="button" className="btn outline" onClick={onTutor}>{answers[cursor]&&!inMock?'Entender com Kog':'Pedir dica ao Kog'}</button>{!answers[cursor]?<button type="button" className="btn primary" disabled={choice===null||submitting} onClick={()=>void submitAnswer()}>{submitting?'Conferindo…':'Registrar resposta'}</button>:<button type="button" className="btn primary" onClick={next}>{cursor===session.length-1?'Ver resultado':'Próxima questão →'}</button>}</div>
    </>}
   </section>}
 </div>;
}