'use client';
import {useState,useEffect,useCallback} from 'react';
import { KognosSelect, type KognosOption } from './KognosFields';
import AiQuestionStudio from './AiQuestionStudio';
import {practiceSessionSummary} from '@/lib/practice-session';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {demoQuestions,statsFromAttempts,type DemoQuestion,type QuestionAttempt} from '@/lib/demo-questions';
import {demoTopics,filterDemoQuestions} from '@/lib/question-bank';
import {getCloudAttempts,createCloudAttempt} from '@/lib/cloud-study';

type Mode='questions'|'simulados'|'performance';
type PracticeFocus={subject:string;topic:string;questionId:string};
function storageKey(userId:string|null){return 'kognos_demo_attempts_v1_'+(userId||'guest');}

export default function PracticeSpace({mode,userId,onTutor,onLogin,onContextChange,focus,aiFocusLessonId,active=true}:{mode:Mode;userId:string|null;onTutor:()=>void;onLogin:()=>void;onContextChange:(context:KogStudyContext|null)=>void;focus?:PracticeFocus|null;aiFocusLessonId?:string|null;active?:boolean}){
  const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
  const [subject,setSubject]=useState(focus?.subject??'Todas');
  const [topic,setTopic]=useState(focus?.topic??'Todos');
  const [difficulty,setDifficulty]=useState('Todas');
  const [search,setSearch]=useState('');
  const [questionSource,setQuestionSource]=useState<'ai'|'demo'>(aiFocusLessonId?'ai':focus?'demo':userId?'ai':'demo');
  const [quiz,setQuiz]=useState<DemoQuestion[]>([]);const [sessionAttempts,setSessionAttempts]=useState<QuestionAttempt[]>([]);const [position,setPosition]=useState(0);
  const [answer,setAnswer]=useState<number|null>(null);const [submitted,setSubmitted]=useState(false);
  const [done,setDone]=useState(false);const [pending,setPending]=useState(false);
  const [loaded,setLoaded]=useState(false);const [error,setError]=useState('');
  // A lesson link can arrive after this workspace was visited. Keep the
  // existing draft when merely navigating, but open the linked IA mode.
  useEffect(()=>{if(aiFocusLessonId)setQuestionSource('ai');},[aiFocusLessonId]);
  useEffect(()=>{
    let active=true;setLoaded(false);setError('');setAttempts([]);
    if(!userId){
      try{const raw=localStorage.getItem(storageKey(null));if(active)setAttempts(raw?JSON.parse(raw):[]);}catch{if(active)setAttempts([]);}
      setLoaded(true);return()=>{active=false;};
    }
    getCloudAttempts(userId).then(rows=>{if(active){setAttempts(rows);setLoaded(true);}})
      .catch(e=>{if(active){setError(e instanceof Error?e.message:'Não foi possível carregar seus resultados.');setLoaded(false);}});
    return()=>{active=false;};
  },[userId]);
  const stats=statsFromAttempts(attempts);
  const sessionSummary=practiceSessionSummary(quiz,sessionAttempts);
  const subjects=['Todas',...new Set(demoQuestions.map(q=>q.subject))];
  const subjectOptions = subjects.map(s=>({value:s,label:s==='Todas'?'Todas as disciplinas':s})) as KognosOption<string>[];
  const topics=demoTopics(subject);
  const topicOptions=topics.map(v=>({value:v,label:v==='Todos'?'Todos os assuntos':v})) as KognosOption<string>[];
  const difficultyOptions=[{value:'Todas',label:'Qualquer dificuldade'},{value:'Básica',label:'Básica'},{value:'Intermediária',label:'Intermediária'},{value:'Avançada',label:'Avançada'}];
  const filtered=filterDemoQuestions({subject,topic:mode==='questions'?topic:'Todos',difficulty:mode==='questions'?difficulty:'Todas',search:mode==='questions'?search:''});
  function clearSession(){setQuiz([]);setSessionAttempts([]);setPosition(0);setAnswer(null);setSubmitted(false);setDone(false);setError('');}
  function switchSource(next:'ai'|'demo'){if(next===questionSource)return;clearSession();setQuestionSource(next);}
  function start(questions:DemoQuestion[]){setQuiz(questions);setSessionAttempts([]);setPosition(0);setAnswer(null);setSubmitted(false);setDone(false);setError('');}
  async function confirm(){if(answer===null||submitted||pending||!loaded)return;
    const q=quiz[position];const item:QuestionAttempt={questionId:q.id,subject:q.subject,correct:q.correct===answer,answerIndex:answer,createdAt:new Date().toISOString(),mode:mode==='simulados'?'mock':'practice'};
    setPending(true);setError('');
    try{
      if(userId)await createCloudAttempt(userId,item);
      const next=[...attempts,item];setAttempts(next);setSessionAttempts(old=>[...old,item]);
      if(!userId){try{localStorage.setItem(storageKey(null),JSON.stringify(next));}catch{setError('Seu navegador não permitiu salvar o resultado.');}}
      setSubmitted(true);
    }catch(e){setError(e instanceof Error?e.message:'Falha ao registrar a resposta. Tente novamente.');}
    finally{setPending(false);}
  }
  function next(){if(position===quiz.length-1){setDone(true);return;}setPosition(position+1);setAnswer(null);setSubmitted(false);}
  const current=quiz[position];
  const visibleContext=useCallback((context:KogStudyContext|null)=>{if(active)onContextChange(context);},[active,onContextChange]);
  useEffect(()=>{
    if(!active)return;
    if(mode!=='performance'&&questionSource==='ai')return;
    if(mode==='performance'||done){visibleContext({kind:'performance'});return;}
    if(current){visibleContext({kind:'question',questionId:current.id,phase:submitted?'review':'solving'});return;}
    visibleContext(null);
  },[active,mode,questionSource,done,current?.id,submitted,visibleContext]);
  return <div className="app-content practice-page"><div className="page-intro"><span className="overline">APRENDER NA PRÁTICA</span><h1>{mode==='questions'?'Banco de ':mode==='performance'?'Seu ':'Simulados e '}<em>{mode==='questions'?'questões.':mode==='performance'?'desempenho.':'diagnósticos.'}</em></h1><p>Crie questões originais com IA e pratique por instituição, assunto e dificuldade, ou utilize o acervo demonstrativo.</p></div>
    {(mode==='performance'||questionSource==='demo')&&<div className="practice-demo-note" role="note"><span><strong>Acervo demonstrativo · {demoQuestions.length} questões fixas</strong><small>{userId?'Respostas do acervo sincronizadas no Supabase.':'Modo visitante: respostas guardadas só neste navegador.'} Os exercícios de IA ficam na outra aba.</small></span>{!userId&&mode!=='performance'&&<button type="button" className="btn outline small" onClick={onLogin}>Entrar para usar IA</button>}</div>}
    {error&&<div className="message warning" role="alert">{error} {userId&&!loaded?'Verifique a migração 0004.':''}</div>}
    {!loaded&&!error&&<p role="status" className="muted">Carregando suas respostas…</p>}
    {mode!=='performance'&&<div className="ai-source-tabs" role="group" aria-label="Origem das questões"><button type="button" aria-pressed={questionSource==='ai'} className={questionSource==='ai'?'selected':''} onClick={()=>switchSource('ai')}>Questões criadas por IA</button><button type="button" aria-pressed={questionSource==='demo'} className={questionSource==='demo'?'selected':''} onClick={()=>switchSource('demo')}>Acervo autoral demonstrativo</button></div>}
    {mode!=='performance'&&questionSource==='ai'?<AiQuestionStudio key={aiFocusLessonId||"all"} mode={mode} userId={userId} focusLessonId={aiFocusLessonId} onTutor={onTutor} onLogin={onLogin} onContextChange={visibleContext}/>:mode==='performance'?<><div className="stat-grid"><div className="stat-card"><span>QUESTÕES RESPONDIDAS</span><strong>{stats.answered}</strong></div><div className="stat-card"><span>ACERTOS</span><strong>{stats.correct}</strong></div><div className="stat-card"><span>TAXA DE ACERTOS</span><strong>{stats.accuracy===null?'—':`${stats.accuracy}%`}</strong></div><div className="stat-card"><span>DISCIPLINAS PRATICADAS</span><strong>{new Set(attempts.map(x=>x.subject)).size}</strong></div></div><section className="dark-panel"><h3>Seu histórico de prática</h3>{!attempts.length?<p className="muted">Ainda não há respostas registradas. Comece pelo Banco de questões ou Simulados.</p>:<div className="history-list">{[...attempts].reverse().slice(0,20).map((a,i)=><div key={i}><span>{a.correct?'✓':'↻'} {a.subject} · {a.questionId.toUpperCase()}</span><span>{a.correct?'Acertou':'Revisar'} · {new Date(a.createdAt).toLocaleDateString('pt-BR')}</span></div>)}</div>}</section></>:
    !quiz.length?<section className="practice-start dark-panel"><div className="practice-start-head"><h2>{mode==='simulados'?'Simulado demonstrativo':'Escolha seu treino'}</h2><p>{mode==='simulados'?'Resolva até 20 questões das matérias selecionadas com correção comentada.':'Filtre pela disciplina ou responda a todos os itens do acervo autoral.'}</p></div><div className="practice-filter-grid"><KognosSelect label="Disciplina" value={subject} options={subjectOptions} onChange={value=>{setSubject(value);setTopic('Todos');}} className="practice-subject-select" />{mode==='questions'&&<><KognosSelect label="Assunto" value={topic} options={topicOptions} onChange={setTopic}/><KognosSelect label="Dificuldade" value={difficulty} options={difficultyOptions} onChange={setDifficulty}/></>}</div>{mode==='questions'&&<label className="practice-search"><span>Buscar por conteúdo ou palavra</span><input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Ex.: função, genética, escala…"/></label>}<div className="practice-filter-summary"><div className="practice-preview"><strong>{filtered.length}</strong><small>questões disponíveis</small></div><button className="btn primary" disabled={!filtered.length||!loaded} onClick={()=>start(mode==='simulados'?filtered.slice(0,20):filtered)}>{mode==='simulados'?'Iniciar simulado demonstrativo':'Praticar todas as questões filtradas'} →</button></div>{mode==='questions'&&<div className="practice-question-catalog" aria-label="Questões filtradas">{filtered.length?filtered.map(q=><article className="practice-question-row" key={q.id}><div><span>{q.subject} · {q.topic} · {q.difficulty}</span><h3>{q.prompt}</h3></div><button type="button" className="btn outline" onClick={()=>start([q])}>Resolver <span aria-hidden="true">→</span></button></article>):<p className="muted">Nenhuma questão corresponde aos filtros. Tente outro assunto ou dificuldade.</p>}</div>}<p className="privacy-note">O resultado não é uma previsão de nota no ENEM nem diagnóstico de todas as habilidades.</p></section>:
    done?<section className="dark-panel practice-result compact-practice-result" aria-label="Resumo da sequência demonstrativa">
      <div className="practice-finish-head"><div><span className="overline">SEQUÊNCIA CONCLUÍDA</span><h2>Treino finalizado.</h2><p>{sessionSummary.correct===sessionSummary.total?'Você acertou os itens desta sequência.':'Você já pode revisar o conteúdo e tentar outro conjunto.'} Este resultado considera apenas as questões que acabou de responder.</p></div><span className="practice-result-emblem" aria-hidden="true">{sessionSummary.correct===sessionSummary.total?'✓':'↻'}</span></div>
      <div className="practice-finish-metrics" aria-label="Resultados deste treino">
        <div><strong>{sessionSummary.correct} / {sessionSummary.total}</strong><small>Acertos na sessão</small></div>
        <div><strong>{sessionSummary.accuracy===null?'—':`${sessionSummary.accuracy}%`}</strong><small>Aproveitamento nesta sessão</small></div>
        <div><strong>{stats.answered}</strong><small>Tentativas no acervo demonstrativo</small></div>
      </div>
      <div className="practice-finish-actions"><button type="button" className="btn primary" onClick={()=>clearSession()}>Voltar ao catálogo</button><button type="button" className="btn outline" onClick={()=>start(quiz)}>Refazer sequência</button><button type="button" className="btn outline" onClick={()=>switchSource('ai')}>Questões com IA</button><button type="button" className="btn outline" onClick={onTutor}>Revisar com Kog</button></div>
      <p className="privacy-note">Banco demonstrativo: {demoQuestions.length} itens autorais fixos. Para criar mais questões, entre na sua conta e utilize o gerador com IA.</p>
    </section>:
    <section className="dark-panel active-practice"><div className="question-topline"><span>{mode==='simulados'?'SIMULADO':'PRÁTICA AUTORAL'} · QUESTÃO {position+1} DE {quiz.length}</span><span>{current.subject} · {current.difficulty}</span></div><div className="question-progress"><span style={{width:`${((position+1)/quiz.length)*100}%`}}/></div><h2>{current.prompt}</h2><small className="muted">{current.topic} · Item autoral demonstrativo</small><div className="answer-options">{current.options.map((option,i)=><button key={i} disabled={submitted||pending} className={`answer-choice ${answer===i?'chosen':''} ${submitted&&i===current.correct?'is-correct':''} ${submitted&&answer===i&&i!==current.correct?'is-wrong':''}`} onClick={()=>setAnswer(i)}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{submitted&&<div className={`explanation-box ${answer===current.correct?'correct':'incorrect'}`} role="status"><strong>{answer===current.correct?'Resposta correta!':'Vamos revisar essa ideia.'}</strong><p>Gabarito: alternativa {String.fromCharCode(65+current.correct)}. {current.explanation}</p></div>}<div className="practice-actions"><button className="btn outline" onClick={()=>clearSession()}>Encerrar treino</button><button className="btn outline" onClick={onTutor}>{submitted?'Entender com Kog':'Pedir dica ao Kog'}</button>{!submitted?<button className="btn primary" disabled={answer===null||!loaded||pending} onClick={()=>void confirm()}>{pending?'Salvando…':'Conferir resposta'}</button>:<button className="btn primary" onClick={next}>{position===quiz.length-1?'Ver resultado':'Próxima questão →'}</button>}</div></section>}
  </div>;
}