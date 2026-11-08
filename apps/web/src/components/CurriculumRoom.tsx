'use client';
import {isProvaoTopic,provaoTopics,findProvaoTopic,type ProvaoGrade} from '@/lib/provao-paulista';
import {useCallback,useEffect,useState} from 'react';
import {useAIStudyProgress} from '@/lib/use-ai-study-progress';
import SkillEvolutionPanel from './SkillEvolutionPanel';
import {examBlueprints,type ExamId} from '@/lib/exam-blueprints';
import {officialSyllabusSources} from '@/lib/exam-syllabus';
import {type CurriculumTopic,topicForLegacyLesson} from '@/lib/curriculum-catalog';
import {type CourseLesson,type CourseVideo,type PublicCourseQuestion,levels,formatVideoTime,videoLink,videoEmbed} from '@/lib/course-content';
import type {LearningLesson} from '@/lib/learning-catalog';
import type {KogStudyContext} from '@/lib/kog-study-context';
import {contentRequest} from '@/lib/content-client';
import TopicLessonSections from './TopicLessonSections';
import LessonAnimatedTabs from './LessonAnimatedTabs';
import CurriculumStudyFlow from './CurriculumStudyFlow';
import InteractiveIntroLesson from './InteractiveIntroLesson';
import StudyExplorationPanel from './StudyExplorationPanel';
import MathLabPanel from './math/MathLabPanel';
import PhETSimulationPanel from './PhETSimulationPanel';
import MathVisualPlayground from './math/MathVisualPlayground';
import ScienceLabPanel from './science/ScienceLabPanel';
import LanguageLabPanel from './languages/LanguageLabPanel';
import HumanitiesLabPanel from './humanities/HumanitiesLabPanel';
import {resolveHumanitiesLab} from '@/lib/humanities-labs';
import {resolveLanguageLab} from '@/lib/language-labs';
import {resolveScienceLab} from '@/lib/science-labs';
import {resolveMathLab} from '@/lib/math-labs';
type Topic=CurriculumTopic&{status:string};
type Detail={topic:CurriculumTopic;lesson:CourseLesson|null;introduction:LearningLesson|null;videos:CourseVideo[];questions:PublicCourseQuestion[];revision:number|null;configured:boolean};
const statusLabels:Record<string,string>={published:'Aula desenvolvida',starter:'Aula-base pré-carregada',guided:'Guia introdutório pré-carregado',introduction:'Introdução disponível',outline:'Tema mapeado',draft:'Em revisão'};
type CurriculumRoomProps={
 userId?:string|null;active?:boolean;focus?:{lessonId:string;subject:string}|null;
 preferredExam?:ExamId|null;embedded?:boolean;
 onContextChange?:(c:KogStudyContext|null)=>void;onTutor?:()=>void;
 onGenerateAI?:(id:string,fresh?:boolean)=>void;
 onOpenLab?:(topic:CurriculumTopic)=>void;
 onActivityProgress?:(done:boolean)=>void;
 onReadingEnd?:()=>void;
 onNavigateTopic?:(topicId:string)=>void;
 onOpenSimulados?:()=>void;
};
export default function CurriculumRoom(props:CurriculumRoomProps){
 if(props.embedded)return <EmbeddedCurriculumRoom {...props}/>;
 return <CurriculumStudyFlow preferredExam={props.preferredExam} focus={props.focus} onOpenSimulados={props.onOpenSimulados}
  renderLesson={(topic,onActivityProgress,onRelatedTopic,onReadingEnd)=><EmbeddedCurriculumRoom key={topic.id} {...props}
   onNavigateTopic={onRelatedTopic}
   embedded focus={{lessonId:topic.id,subject:topic.subject}}
   onActivityProgress={onActivityProgress} onReadingEnd={onReadingEnd}/>}/>;
}
function EmbeddedCurriculumRoom({userId=null,active=true,focus,preferredExam=null,embedded=false,onContextChange,onTutor,onGenerateAI,onOpenLab,onActivityProgress,onNavigateTopic,onReadingEnd}:CurriculumRoomProps){
 const [topics,setTopics]=useState<Topic[]>([]),[exam,setExam]=useState<string>(preferredExam??'all'),[subject,setSubject]=useState('all'),[search,setSearch]=useState(''),[limit,setLimit]=useState(40);
 const [provaoGrade,setProvaoGrade]=useState<ProvaoGrade|null>(null);
 const [selected,setSelected]=useState<string|null>(null),[detail,setDetail]=useState<Detail|null>(null),[error,setError]=useState(''),[notice,setNotice]=useState(''),[video,setVideo]=useState<CourseVideo|null>(null);
 const [readerTab,setReaderTab]=useState<'lesson'|'activities'|'explanations'|'materials'|'evolution'>('lesson');
 const {data:aiProgress,error:progressError,refresh:refreshProgress}=useAIStudyProgress(userId);
 useEffect(()=>{if(active&&userId)void refreshProgress();},[active,userId,refreshProgress]);
 const reload=useCallback(async()=>{const r=await contentRequest('/api/content');setTopics(r.topics);setNotice(r.notice||(!r.configured?'Biblioteca editorial ainda não ativada no servidor. As introduções continuam disponíveis.':''));},[]);
 useEffect(()=>{if(!active)return;let alive=true;const refresh=()=>{if(alive)void reload().catch(e=>setError(e.message));};refresh();window.addEventListener('focus',refresh);const timer=setInterval(refresh,30000);return()=>{alive=false;clearInterval(timer);window.removeEventListener('focus',refresh);};},[active,reload]);
 useEffect(()=>{setExam(preferredExam??'all');},[preferredExam]);
 useEffect(()=>{if(focus?.lessonId){const t=topicForLegacyLesson(focus.lessonId);if(t)setSelected(t.id);}},[focus?.lessonId]);
 useEffect(()=>{
  if(!selected||!active)return;let alive=true;setDetail(null);setError('');setVideo(null);
  const load=()=>contentRequest(`/api/content?id=${encodeURIComponent(selected)}`).then(r=>{if(alive)setDetail(r);}).catch(e=>{if(alive){setDetail(null);setError(e.message);}});
  void load();window.addEventListener('focus',load);const timer=setInterval(load,30000);
  return()=>{alive=false;clearInterval(timer);window.removeEventListener('focus',load);};
 },[selected,active]);
 useEffect(()=>{if(active)onContextChange?.(detail?.lesson?{kind:'curriculum',courseId:detail.lesson.id}:detail?.topic.legacyLessonId?{kind:'lesson',lessonId:detail.topic.legacyLessonId}:null);},[active,detail?.topic.id,detail?.revision,onContextChange]);
 useEffect(()=>{setVideo(null);},[detail?.revision]);
 useEffect(()=>{setReaderTab('lesson');},[selected]);
 const filtered=topics.filter(t=>(exam==='all'||t.exams.includes(exam as ExamId))&&(exam!=='saresp'||isProvaoTopic(t.subject,t.topic,provaoGrade))&&(subject==='all'||t.subject===subject)&&`${t.topic} ${t.subject}`.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR')));
 const provaoRef=detail?findProvaoTopic(detail.topic.subject,detail.topic.topic):null;
 const mathLab=detail?resolveMathLab({subject:detail.topic.subject,topic:detail.topic.topic,description:provaoRef?.description,unit:provaoRef?.unit}):null;
 const scienceLab=detail?resolveScienceLab({subject:detail.topic.subject,topic:detail.topic.topic,description:provaoRef?.description,unit:provaoRef?.unit}):null;
 const languageLab=detail?resolveLanguageLab({subject:detail.topic.subject,topic:detail.topic.topic,description:provaoRef?.description,unit:provaoRef?.unit}):null;
 const humanitiesLab=detail?resolveHumanitiesLab({subject:detail.topic.subject,topic:detail.topic.topic,description:provaoRef?.description,unit:provaoRef?.unit}):null;

 const Container=embedded?'section':'main';
 return <Container className={embedded?"course-room course-room-embedded":"app-content course-room"}>
  {!embedded&&<>
  <header className="course-heading"><div><span className="overline">BIBLIOTECA DE ESTUDOS</span><h1>Entenda. Pratique. <em>Avance.</em></h1><p>Fundamentos, aplicação e aprofundamento, com tarefas e referências por assunto.</p></div></header>
  {notice&&<p className="course-notice" role="status">{notice}</p>}{error&&<p className="message warning" role="alert">{error}</p>}
  <div className="course-filters"><label>Prova<select aria-label="Prova" value={exam} onChange={e=>{setExam(e.target.value);setLimit(40);}}><option value="all">Todas as provas</option>{Object.entries(examBlueprints).map(([id,x])=><option key={id} value={id}>{id==='vunesp'?'UNESP / VUNESP':x.label}</option>)}</select></label>{exam==='saresp'&&<label>Série do Provão Paulista<select value={provaoGrade??'all'} onChange={e=>{setProvaoGrade(e.target.value==='all'?null:Number(e.target.value) as ProvaoGrade);setSubject('all');setLimit(40);}}><option value="all">Todas as séries do ensino médio</option><option value="1">1ª série — Seriado I</option><option value="2">2ª série — Seriado II</option><option value="3">3ª série — Seriado III</option></select></label>}<label>Disciplina<select aria-label="Disciplina" value={subject} onChange={e=>{setSubject(e.target.value);setLimit(40);}}><option value="all">Todas as disciplinas</option>{[...new Set(topics.filter(t=>exam!=='saresp'||isProvaoTopic(t.subject,t.topic,provaoGrade)).map(t=>t.subject))].map(s=><option key={s}>{s}</option>)}</select></label><label>Buscar assunto<input type="search" value={search} placeholder="Ex.: logaritmos, genética, revoluções…" onChange={e=>{setSearch(e.target.value);setLimit(40);}}/></label></div>
  <p className="course-coverage"><strong>{filtered.length}</strong> temas no roteiro · <strong>{filtered.filter(t=>t.status==='published').length}</strong> aulas desenvolvidas · <strong>{filtered.filter(t=>t.status==='introduction').length}</strong> introduções · <strong>{filtered.filter(t=>t.status==='starter'||t.status==='guided').length}</strong> materiais-base pré-carregados. A cobertura editorial completa ainda exige revisão.</p>
  </>}
  {embedded&&error&&<p className="message warning" role="alert">{error}</p>}
  <div className="course-layout" style={embedded?{display:'block'}:undefined}>{!embedded&&<aside className="course-index" aria-label="Assuntos do currículo">{filtered.slice(0,limit).map(t=><button type="button" key={t.id} aria-pressed={selected===t.id} onClick={()=>setSelected(t.id)}><small>{t.subject}</small><strong>{t.topic}</strong><span>{statusLabels[t.status]||'Em revisão'}</span></button>)}{!filtered.length&&<p>Nenhum tema encontrado para estes filtros.</p>}{filtered.length>limit&&<button type="button" onClick={()=>setLimit(n=>n+40)}>Mostrar mais 40 temas</button>}</aside>}
   <article key={selected} className="course-reader" aria-live="polite">{!selected?<div className="course-empty"><h2>Escolha um assunto</h2><p>O roteiro inclui todas as entradas cadastradas para as cinco provas. Uma aula desenvolvida contém três níveis e tarefas com resolução.</p><p>Os temas ainda sem aula aparecem identificados; o Kog pode desenvolver e revisar o conteúdo quando você solicitar.</p></div>:!detail?<p>{error?'Conteúdo indisponível.':'Carregando o assunto…'}</p>:<>
    <span className="overline">{detail.topic.subject}</span><h2>{detail.topic.topic}</h2>{readerTab==='materials'&&findProvaoTopic(detail.topic.subject,detail.topic.topic)&&<details className="course-reference"><summary>Correspondência ao Provão Paulista 2026</summary><p>{findProvaoTopic(detail.topic.subject,detail.topic.topic)!.description}</p><p>Unidade: {findProvaoTopic(detail.topic.subject,detail.topic.topic)!.unit}</p><small>{provaoTopics.filter(t=>t.subject===detail.topic.subject&&t.topic===detail.topic.topic).map(t=>`${t.grade}ª série · item ${t.code} · página ${t.page}`).join(' / ')}</small></details>}{readerTab==='materials'&&<details className="course-reference"><summary>Ver matriz ou edital oficial</summary><p>O tema é organizado editorialmente pelo Kognos e associado às fontes oficiais abaixo. A aula explica o conteúdo com autoria própria; a lista não reproduz nem garante cobertura integral do documento.</p><ul>{detail.topic.exams.map(id=><li key={id}><a href={officialSyllabusSources[id].url} target="_blank" rel="noreferrer">{officialSyllabusSources[id].title} · {officialSyllabusSources[id].edition}</a></li>)}</ul></details>}
     <LessonAnimatedTabs value={readerTab} onChange={setReaderTab} subject={detail.topic.subject}/>
     {(['lesson','activities','explanations'] as const).map(pane=><div key={pane} hidden={readerTab!==pane}>
      <TopicLessonSections view={pane==='lesson'?'content':pane} subject={detail.topic.subject}
       topic={detail.topic.topic} lesson={detail.lesson} introduction={detail.introduction} onTutor={onTutor}
        onActivityProgress={pane==='activities'?onActivityProgress:undefined} onReadingEnd={pane==='lesson'?onReadingEnd:undefined}
        onRelatedTopic={onNavigateTopic??((id)=>{const target=topics.find(item=>item.id===id);if(target){setSelected(id);setSubject(target.subject);setExam('all');setSearch('');}})}/>
     </div>)}
     {readerTab==='lesson'&&(!detail.lesson||(detail.lesson.review==='introductory'&&!detail.lesson.authorship.includes('aula autoral')))&&<aside className="course-notice" role="status">
      <strong>Aprofundamento editorial ainda em elaboração.</strong>
      <p>Este assunto possui material inicial. As próximas aulas completas serão escritas e incorporadas ao catálogo pelo projeto, sem geração automática durante o estudo.</p>
     </aside>}
     {onOpenLab&&<button type="button" className="k-lesson-to-lab" onClick={()=>onOpenLab(detail.topic)}>
      Abrir este tema no Laboratório interativo
     </button>}
    {readerTab==='materials'&&<><section className="course-videos"><h3>Videoaulas por assunto</h3>{detail.videos.length?detail.videos.map((v,i)=><div className="course-video-card" key={`${v.videoId}-${v.start}-${i}`}><strong>{v.title}</strong><span>{v.author} · início em {formatVideoTime(v.start)}</span><div><button type="button" className="btn outline" onClick={()=>setVideo(v)}>Assistir aqui</button><a className="btn outline" href={videoLink(v)} target="_blank" rel="noreferrer">Abrir no YouTube</a></div><small>{v.verification==='chapter_index'?'Horário do índice de capítulos; sem revisão audiovisual integral.':'Trecho conferido pelo editor.'} <a href={v.evidenceUrl} target="_blank" rel="noreferrer">Fonte do horário</a></small></div>):<p>Ainda não há trecho com horário verificado para este assunto. O administrador pode adicionar uma videoaula.</p>}{video&&<div className="course-player"><button type="button" onClick={()=>setVideo(null)}>Fechar vídeo</button><iframe title={video.title} src={videoEmbed(video)} allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div>}</section>
    {detail.questions.length>0&&<section><h3>Questões do catálogo</h3>{detail.questions.map(q=><EditorialQuestion key={`${q.id}-${q.revision}`} question={q}/>)}</section>}
    </>}{readerTab==='evolution'&&<>{!onGenerateAI&&<AICoursePractice key={detail.topic.id} topic={detail.topic}/>}
    {onGenerateAI&&userId&&<>{progressError&&<p role="status">Histórico indisponível no momento: {progressError}</p>}<SkillEvolutionPanel evolution={aiProgress?.skillEvolution?.find(item=>item.lessonId===(detail.topic.legacyLessonId||detail.topic.id))??null} sampleLimited={aiProgress?.sampleLimited??false} onPractice={()=>onGenerateAI(detail.topic.legacyLessonId||detail.topic.id,true)} onTutor={()=>onTutor?.()}/></>}
    </>}<div className="course-actions">{onTutor&&<button type="button" className="btn outline" onClick={onTutor}>Explicar com o Kog</button>}<a className="btn outline" href="/">Voltar ao aplicativo</a></div>
    {readerTab==='materials'&&detail.lesson&&<details><summary>Autoria e referências</summary><p>{detail.lesson.authorship} · {detail.lesson.license}</p><ul>{detail.lesson.sourceUrls.map(u=><li key={u}><a href={u} target="_blank" rel="noreferrer">{u}</a></li>)}</ul></details>}
   </>}</article></div>
 </Container>;
}
function EditorialQuestion({question:q,source='editorial',onGraded}:{question:PublicCourseQuestion;source?:'editorial'|'ai';onGraded?:(correct:boolean)=>void}){
 const [answer,setAnswer]=useState<number|null>(null),[result,setResult]=useState<{correct:boolean;correctIndex:number;explanation:string}|null>(null),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 async function submit(){if(answer===null||busy||result)return;setBusy(true);try{const graded=await contentRequest(source==='ai'?'/api/ai-questions/submit':'/api/content/answer',{method:'POST',body:JSON.stringify(source==='ai'?{questionId:q.id,answerIndex:answer,mode:'practice'}:{id:q.id,revision:q.revision,answerIndex:answer})});setResult(graded);onGraded?.(Boolean(graded.correct));setError('');}catch(e){setError(e instanceof Error?e.message:'Falha ao corrigir.');}finally{setBusy(false);}}
 return <fieldset className="course-task"><legend>{q.prompt}</legend>{q.options.map((o,i)=><label className="course-check" key={i}><input type="radio" name={q.id} checked={answer===i} disabled={Boolean(result)} onChange={()=>setAnswer(i)}/>{o}</label>)}<button type="button" className="btn primary" onClick={submit} disabled={answer===null||busy||Boolean(result)}>Conferir resposta</button>{error&&<p role="alert">{error}</p>}{result&&<div role="status"><strong>{result.correct?'Resposta correta':'Vamos revisar'} · alternativa {String.fromCharCode(65+result.correctIndex)}</strong><p>{result.explanation}</p></div>}</fieldset>;
}

function AICoursePractice({topic}:{topic:CurriculumTopic}){
 const [questions,setQuestions]=useState<PublicCourseQuestion[]>([]),[busy,setBusy]=useState(false),[error,setError]=useState(''),[difficulty,setDifficulty]=useState('basic');
 const [position,setPosition]=useState(0),[graded,setGraded]=useState<Record<string,boolean>>({}),[completed,setCompleted]=useState(false);
 async function generate(){setBusy(true);setError('');setQuestions([]);setPosition(0);setGraded({});setCompleted(false);try{
  const result=await contentRequest('/api/ai-questions/generate',{method:'POST',body:JSON.stringify({institution:topic.exams[0],subject:topic.subject,topic:topic.topic,lessonId:topic.legacyLessonId||topic.id,difficulty,count:3})});
  setQuestions((result.questions||[]).map((q:{id:string;prompt:string;options:string[]})=>({id:q.id,prompt:q.prompt,options:q.options,courseId:topic.id,revision:0,authorship:'IA Kognos',license:'Uso privado',sourceUrls:[]})));
 }catch(e){setError(e instanceof Error?e.message:'Não foi possível gerar questões.');}finally{setBusy(false);}}
 if(!topic.exams.length||!examBlueprints[topic.exams[0]]?.subjects[topic.subject]?.includes(topic.topic))return null;
 return <section className="course-generation"><h3>Praticar este tema com IA</h3><p>Gere três questões inéditas deste assunto. As questões passam por revisão automática e continuam no seu banco pessoal. Somente o tema e o nível são enviados ao provedor.</p><label>Nível<select aria-label="Nível" value={difficulty} onChange={e=>setDifficulty(e.target.value)}><option value="basic">Básico</option><option value="intermediate">Intermediário</option><option value="advanced">Avançado</option></select></label><button type="button" className="btn primary" disabled={busy} onClick={generate}>{busy?'Gerando e revisando…':'Autorizar e gerar 3 questões'}</button>{error&&<p role="alert">{error}</p>}{questions.length>0&&<div className="k-course-unified-session" aria-label="Sessão de questões geradas">
   {completed?<div className="k-course-session-finish" role="status">
    <strong>Sessão concluída</strong><p>Você acertou {Object.values(graded).filter(Boolean).length} de {questions.length} questões nesta sequência. A correção individual continua disponível no histórico da sessão.</p>
    <button type="button" className="btn outline" onClick={()=>{setCompleted(false);setPosition(0);}}>Revisar respostas</button>
   </div>:<>
    <div className="k-course-session-head"><strong>Questão {position+1} de {questions.length}</strong><span>Uma questão por vez</span></div>
    <div className="k-ai-unified-session-track" aria-hidden="true"><span style={{width:`${((position+1)/questions.length)*100}%`}}/></div>
    {questions.map((q,i)=><div key={q.id} hidden={position!==i} className="k-course-session-item">
     <EditorialQuestion source="ai" question={q} onGraded={correct=>setGraded(old=>({...old,[q.id]:correct}))}/>
    </div>)}
    <div className="k-course-session-actions">
     <button type="button" className="btn outline" disabled={position===0} onClick={()=>setPosition(i=>i-1)}>Anterior</button>
     <button type="button" className="btn primary" disabled={graded[questions[position].id]===undefined}
      onClick={()=>position===questions.length-1?setCompleted(true):setPosition(i=>i+1)}>{position===questions.length-1?'Finalizar sessão':'Próxima questão'}</button>
    </div>
   </>}
  </div>}</section>;
}


