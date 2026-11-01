'use client';
import {useState,useEffect} from 'react';
import {demoQuestions,statsFromAttempts,type DemoQuestion,type QuestionAttempt} from '@/lib/demo-questions';
import {getCloudAttempts,createCloudAttempt} from '@/lib/cloud-study';

type Mode='questions'|'simulados'|'performance';
function storageKey(userId:string|null){return 'kognos_demo_attempts_v1_'+(userId||'guest');}

export default function PracticeSpace({mode,userId,onTutor}:{mode:Mode;userId:string|null;onTutor:()=>void}){
  const [attempts,setAttempts]=useState<QuestionAttempt[]>([]);
  const [subject,setSubject]=useState('Todas');
  const [quiz,setQuiz]=useState<DemoQuestion[]>([]);const [position,setPosition]=useState(0);
  const [answer,setAnswer]=useState<number|null>(null);const [submitted,setSubmitted]=useState(false);
  const [done,setDone]=useState(false);const [pending,setPending]=useState(false);
  const [loaded,setLoaded]=useState(false);const [error,setError]=useState('');
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
  const subjects=['Todas',...new Set(demoQuestions.map(q=>q.subject))];
  const filtered=demoQuestions.filter(q=>subject==='Todas'||q.subject===subject);
  function start(questions:DemoQuestion[]){setQuiz(questions);setPosition(0);setAnswer(null);setSubmitted(false);setDone(false);setError('');}
  async function confirm(){if(answer===null||submitted||pending||!loaded)return;
    const q=quiz[position];const item:QuestionAttempt={questionId:q.id,subject:q.subject,correct:q.correct===answer,answerIndex:answer,createdAt:new Date().toISOString(),mode:mode==='simulados'?'mock':'practice'};
    setPending(true);setError('');
    try{
      if(userId)await createCloudAttempt(userId,item);
      const next=[...attempts,item];setAttempts(next);
      if(!userId){try{localStorage.setItem(storageKey(null),JSON.stringify(next));}catch{setError('Seu navegador não permitiu salvar o resultado.');}}
      setSubmitted(true);
    }catch(e){setError(e instanceof Error?e.message:'Falha ao registrar a resposta. Tente novamente.');}
    finally{setPending(false);}
  }
  function next(){if(position===quiz.length-1){setDone(true);return;}setPosition(position+1);setAnswer(null);setSubmitted(false);}
  const current=quiz[position];
  return <div className="app-content practice-page"><div className="page-intro"><span className="overline">APRENDER NA PRÁTICA</span><h1>{mode==='questions'?'Banco de ':mode==='performance'?'Seu ':'Simulados e '}<em>{mode==='questions'?'questões.':mode==='performance'?'desempenho.':'diagnósticos.'}</em></h1><p>Questões originais de demonstração para exercitar o mecanismo de estudo. Não são provas oficiais.</p></div>
    <div className="message neutral">{userId?'Seu histórico demonstrativo é sincronizado com a sua conta Supabase. A correção desta amostra acontece no navegador; não é uma nota oficial.':'Modo visitante: suas respostas são salvas apenas neste navegador.'}</div>
    {error&&<div className="message warning" role="alert">{error} {userId&&!loaded?'Verifique a migração 0004.':''}</div>}
    {!loaded&&!error&&<p role="status" className="muted">Carregando suas respostas…</p>}
    {mode==='performance'?<><div className="stat-grid"><div className="stat-card"><span>QUESTÕES RESPONDIDAS</span><strong>{stats.answered}</strong></div><div className="stat-card"><span>ACERTOS</span><strong>{stats.correct}</strong></div><div className="stat-card"><span>TAXA DE ACERTOS</span><strong>{stats.accuracy===null?'—':`${stats.accuracy}%`}</strong></div><div className="stat-card"><span>DISCIPLINAS PRATICADAS</span><strong>{new Set(attempts.map(x=>x.subject)).size}</strong></div></div><section className="dark-panel"><h3>Seu histórico de prática</h3>{!attempts.length?<p className="muted">Ainda não há respostas registradas. Comece pelo Banco de questões ou Simulados.</p>:<div className="history-list">{[...attempts].reverse().slice(0,20).map((a,i)=><div key={i}><span>{a.correct?'✓':'↻'} {a.subject} · {a.questionId.toUpperCase()}</span><span>{a.correct?'Acertou':'Revisar'} · {new Date(a.createdAt).toLocaleDateString('pt-BR')}</span></div>)}</div>}</section></>:
    !quiz.length?<section className="practice-start dark-panel"><div className="practice-start-head"><h2>{mode==='simulados'?'Simulado demonstrativo':'Escolha seu treino'}</h2><p>{mode==='simulados'?'Resolva 20 questões de diferentes matérias com correção comentada.':'Filtre pela disciplina ou responda a todos os itens do acervo autoral.'}</p></div><div className="two-cols"><label className="field-label">Disciplina<select value={subject} onChange={e=>setSubject(e.target.value)}><option>Todas</option>{subjects.slice(1).map(s=><option key={s}>{s}</option>)}</select></label><div className="practice-preview"><strong>{filtered.length}</strong><small>questões disponíveis</small></div></div><button className="btn primary" disabled={!filtered.length||!loaded} onClick={()=>start(filtered)}>{mode==='simulados'?'Iniciar simulado':'Começar exercícios'} →</button><p className="privacy-note">O resultado não é uma previsão de nota no ENEM nem diagnóstico de todas as habilidades.</p></section>:
    done?<section className="dark-panel practice-result"><span className="overline">SESSÃO CONCLUÍDA</span><h2>Você terminou essa sequência.</h2><p>Confira suas respostas e continue praticando. {userId?'Os resultados foram sincronizados na sua conta.':'Os resultados foram registrados neste navegador.'}</p><div className="stat-grid"><div className="stat-card"><span>QUESTÕES DA SESSÃO</span><strong>{quiz.length}</strong></div><div className="stat-card"><span>HISTÓRICO TOTAL</span><strong>{stats.answered}</strong></div><div className="stat-card"><span>APROVEITAMENTO TOTAL</span><strong>{stats.accuracy===null?'—':stats.accuracy+'%'}</strong></div></div><button className="btn primary" onClick={()=>{setQuiz([]);setDone(false);}}>Novo treino</button><button className="btn outline" onClick={onTutor}>Tirar dúvida com Kog</button></section>:
    <section className="dark-panel active-practice"><div className="question-topline"><span>{mode==='simulados'?'SIMULADO':'PRÁTICA AUTORAL'} · QUESTÃO {position+1} DE {quiz.length}</span><span>{current.subject} · {current.difficulty}</span></div><div className="question-progress"><span style={{width:`${((position+1)/quiz.length)*100}%`}}/></div><h2>{current.prompt}</h2><small className="muted">{current.topic} · Item autoral demonstrativo</small><div className="answer-options">{current.options.map((option,i)=><button key={i} disabled={submitted||pending} className={`answer-choice ${answer===i?'chosen':''} ${submitted&&i===current.correct?'is-correct':''} ${submitted&&answer===i&&i!==current.correct?'is-wrong':''}`} onClick={()=>setAnswer(i)}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{submitted&&<div className={`explanation-box ${answer===current.correct?'correct':'incorrect'}`} role="status"><strong>{answer===current.correct?'Resposta correta!':'Vamos revisar essa ideia.'}</strong><p>Gabarito: alternativa {String.fromCharCode(65+current.correct)}. {current.explanation}</p></div>}<div className="practice-actions"><button className="btn outline" onClick={()=>{setQuiz([]);setDone(false);}}>Encerrar treino</button>{!submitted?<button className="btn primary" disabled={answer===null||!loaded||pending} onClick={()=>void confirm()}>{pending?'Salvando…':'Conferir resposta'}</button>:<button className="btn primary" onClick={next}>{position===quiz.length-1?'Ver resultado':'Próxima questão →'}</button>}</div></section>}
  </div>;
}
