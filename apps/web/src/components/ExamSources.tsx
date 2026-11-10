'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {BookOpenText,ExternalLink,ShieldCheck,RefreshCw,CheckCircle2,AlertTriangle,FileSearch,Sparkles,LogIn,LockKeyhole,Clock3,FolderOpen,ArrowRight,Search,Info,UploadCloud,LoaderCircle} from 'lucide-react';
import {KognosSelect} from './KognosFields';
import {getSupabase} from '@/lib/supabase';
import {examBlueprints,publicExamEntries,type ExamId} from '@/lib/exam-blueprints';
import type {ApprovedSyllabusTopic,ImportMethod} from '@/lib/syllabus-sources';
import {getSourceWorkspaceState,sourceWorkspaceMetrics} from '@/lib/source-workspace';

type ReviewTopic={id:string;source_id:string;subject:string;topic:string;evidence_excerpt:string;review_status:string};
type ReviewSource={id:string;institution:ExamId;edition:string;source_title:string;source_url:string;source_method:ImportMethod;review_status:string;created_at:string};
const examOptions=publicExamEntries().map(([value,b])=>({value,label:b.label}));
const methodOptions:{value:ImportMethod;label:string}[]=[{value:'official_html',label:'Ler página HTML oficial'},{value:'manual_transcript',label:'Colar texto de PDF ou documento'}];

export default function ExamSources({userId,onLogin,onQuestionBank}:{userId:string|null;onLogin:()=>void;onQuestionBank:()=>void}){
 const [institution,setInstitution]=useState<ExamId>('enem');
 const [edition,setEdition]=useState('Matriz de Referência 2026');
 const [sourceTitle,setSourceTitle]=useState('Matrizes de Referência do Enem — Inep');
 const [sourceUrl,setSourceUrl]=useState(examBlueprints.enem.sourceUrl);
 const [method,setMethod]=useState<ImportMethod>('official_html');
 const [transcript,setTranscript]=useState('');
 const [approved,setApproved]=useState<ApprovedSyllabusTopic[]>([]);
 const [reviewTopics,setReviewTopics]=useState<ReviewTopic[]>([]);
 const [reviewSources,setReviewSources]=useState<ReviewSource[]>([]);
 const [editor,setEditor]=useState(false);
 const [loaded,setLoaded]=useState(false);
 const [editorTab,setEditorTab]=useState<'import'|'review'>('import');
 const [reviewSearch,setReviewSearch]=useState('');
 const [error,setError]=useState(''),[notice,setNotice]=useState('');
 const [loading,setLoading]=useState(false),[busy,setBusy]=useState(false);
 const fetchAuthorized=useCallback(async(init?:RequestInit)=>{
  const supabase=getSupabase();if(!supabase||!userId)throw new Error('Entre com sua conta para acessar as matrizes.');
  const {data,error:authError}=await supabase.auth.getSession();
  if(authError||!data.session||data.session.user.id!==userId)throw new Error('A sessão expirou. Entre novamente.');
  const response=await fetch('/api/exam-sources',{...init,cache:'no-store',headers:{'Content-Type':'application/json',Authorization:`Bearer ${data.session.access_token}`,...init?.headers}});
  const payload=await response.json();
  if(!response.ok)throw new Error(typeof payload.error==='string'?payload.error:'O catálogo está indisponível.');
  return payload;
 },[userId]);
 const refresh=useCallback(async()=>{
  if(!userId){setApproved([]);setReviewTopics([]);setReviewSources([]);setEditor(false);setLoaded(false);setLoading(false);setError('');return;}
  setLoading(true);setError('');
  try{
   const data=await fetchAuthorized();
   // Retain ETEC archive in the database; exclude it from the public workspace.
   const visibleSources:ReviewSource[]=(Array.isArray(data.reviewSources)?data.reviewSources:[]).filter(
    (source:ReviewSource)=>source.institution!=='etec'
   );
   setApproved((Array.isArray(data.topics)?data.topics:[]).filter(
    (topic:ApprovedSyllabusTopic)=>topic.institution!=='etec'
   ));
   setReviewSources(visibleSources);
   setReviewTopics((Array.isArray(data.reviewTopics)?data.reviewTopics:[]).filter(
    (topic:ReviewTopic)=>visibleSources.some(source=>source.id===topic.source_id)
   ));
   setEditor(data.editor===true);setLoaded(true);
  }catch(e){setApproved([]);setReviewTopics([]);setReviewSources([]);setEditor(false);setLoaded(false);setError(e instanceof Error?e.message:'Falha ao carregar matrizes.');}
  finally{setLoading(false);}
 },[fetchAuthorized,userId]);
 useEffect(()=>{void refresh();},[refresh]);
 const sourcesById=useMemo(()=>new Map(reviewSources.map(s=>[s.id,s])),[reviewSources]);
 const institutionTopics=approved.filter(x=>x.institution===institution);
 const metrics=sourceWorkspaceMetrics(approved,reviewTopics,reviewSources);
 const access=getSourceWorkspaceState({authenticated:Boolean(userId),loading,loaded,error,editor});
 const visibleReviewTopics=reviewTopics.filter(t=>{const src=sourcesById.get(t.source_id);return src?.institution===institution&&`${t.subject} ${t.topic} ${src.source_title}`.toLocaleLowerCase('pt-BR').includes(reviewSearch.trim().toLocaleLowerCase('pt-BR'));});
 function changeInstitution(id:ExamId){const b=examBlueprints[id];setInstitution(id);setSourceUrl(b.sourceUrl);setEdition(b.edition);setSourceTitle(b.sourceTitle);setError('');}
 async function ingest(){
  setBusy(true);setError('');setNotice('');
  try{
   const result=await fetchAuthorized({method:'POST',body:JSON.stringify({institution,edition,sourceTitle,sourceUrl,method,transcript})});
   setNotice(`${result.proposed} assunto(s) extraído(s) aguardando aprovação editorial. Nada foi publicado automaticamente.`);
   setTranscript('');setEditorTab('review');await refresh();
  }catch(e){setError(e instanceof Error?e.message:'Falha ao extrair conteúdos.');}
  finally{setBusy(false);}
 }
 async function moderate(topicId:string,decision:'approved'|'rejected'){
  setBusy(true);setError('');setNotice('');
  try{
   await fetchAuthorized({method:'PATCH',body:JSON.stringify({topicId,decision})});
   setNotice(decision==='approved'?'Tópico aprovado e disponível no gerador.':'Tópico rejeitado, sem publicação.');
   await refresh();
  }catch(e){setError(e instanceof Error?e.message:'Falha na revisão.');}
  finally{setBusy(false);}
 }
 return <main className="app-content k-syllabus-page">
  <header className="page-intro k-source-intro">
   <span className="overline">CENTRAL DE CONTEÚDOS · BASE DOCUMENTAL</span>
   <h1>Matrizes e <em>editais.</em></h1>
   <p>Consulte referências institucionais, acompanhe os assuntos revisados e, se tiver permissão editorial, organize as fontes utilizadas pelo gerador de questões.</p>
  </header>

  {access==='guest'&&<section className="k-source-access k-source-access-guest" aria-labelledby="source-access-title">
   <span className="k-source-access-icon"><LockKeyhole size={20} aria-hidden="true"/></span>
   <div className="k-source-access-copy"><strong id="source-access-title">Você está no modo visitante</strong><p>Entre na sua conta do Kognos para carregar o catálogo e verificar seu acesso de editor. Os links oficiais continuam disponíveis abaixo.</p></div>
   <button type="button" className="btn primary k-source-login" onClick={onLogin}><LogIn size={16} aria-hidden="true"/> Entrar na minha conta <ArrowRight size={16} aria-hidden="true"/></button>
  </section>}
  {access==='loading'&&<div className="k-source-access k-source-access-loading" role="status"><LoaderCircle size={19} className="k-source-spin" aria-hidden="true"/> Conferindo sua sessão e as permissões no Supabase…</div>}
  {access==='error'&&<section className="k-source-access k-source-access-error" role="alert"><AlertTriangle size={20} aria-hidden="true"/><div className="k-source-access-copy"><strong>Não foi possível carregar o catálogo</strong><p>{error}</p><small>Confira a migração 0006, as variáveis do Supabase e sua sessão. Nenhum assunto foi marcado como aprovado nesta consulta.</small></div><button type="button" className="btn outline small" disabled={loading} onClick={()=>void refresh()}><RefreshCw size={15}/> Tentar novamente</button></section>}
  {(access==='editor'||access==='reader')&&<section className="k-source-access k-source-access-ready" aria-label="Status da conta"><span className="k-source-access-icon"><ShieldCheck size={20} aria-hidden="true"/></span><div className="k-source-access-copy"><strong>{access==='editor'?'Acesso editorial confirmado':'Conta conectada · acesso de leitura'}</strong><p>{access==='editor'?'Você pode importar documentos, revisar assuntos propostos e publicar tópicos fundamentados.':'Seu catálogo está disponível. Para liberar as ferramentas editoriais, configure seu User UID em KOGNOS_EDITOR_USER_IDS no servidor e reinicie o aplicativo.'}</p></div><span className="k-source-access-tag">{access==='editor'?'EDITOR':'LEITURA'}</span></section>}
  {notice&&<div className="message success k-source-notice" role="status">{notice}</div>}

  {loaded&&!loading&&<div className="k-source-metrics" aria-label="Resumo do catálogo">
   <div className="k-source-metric"><BookOpenText size={18} aria-hidden="true"/><span>Assuntos aprovados</span><strong>{metrics.approved}</strong></div>
   <div className="k-source-metric"><FolderOpen size={18} aria-hidden="true"/><span>{editor?'Fontes importadas':'Instituições disponíveis'}</span><strong>{editor?metrics.sources:examOptions.length}</strong></div>
   <div className="k-source-metric"><Clock3 size={18} aria-hidden="true"/><span>{editor?'Aguardando revisão':'Instituições com conteúdos'}</span><strong>{editor?metrics.pending:metrics.institutions}</strong></div>
  </div>}

  <div className="k-syllabus-grid">
   <section className="dark-panel k-syllabus-library" aria-label="Catálogo de assuntos aprovados">
    <div className="k-syllabus-heading"><div><span className="k-source-eyebrow">CATÁLOGO VALIDADO</span><h2><BookOpenText size={19} aria-hidden="true"/> Conteúdos revisados</h2></div>{userId&&<button type="button" className="btn outline small" disabled={loading} onClick={()=>void refresh()} aria-label="Atualizar assuntos aprovados"><RefreshCw size={14} aria-hidden="true"/> Atualizar</button>}</div>
    <KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/>
    {loaded&&!loading&&<p className="k-syllabus-caption"><strong>{institutionTopics.length}</strong> assunto(s) aprovado(s) para {examBlueprints[institution].label}. Cada assunto deve ter uma fonte e uma evidência.</p>}
    {access==='guest'&&<div className="k-syllabus-empty k-syllabus-empty-guest"><BookOpenText size={24} aria-hidden="true"/><strong>Catálogo disponível após entrar</strong><p>Entre na sua conta para consultar os assuntos revisados ou use as referências oficiais ao lado.</p><button type="button" className="btn outline small" onClick={onLogin}><LogIn size={14}/> Entrar para consultar</button></div>}
    {access==='loading'&&<div className="k-syllabus-empty" role="status"><LoaderCircle className="k-source-spin" size={23} aria-hidden="true"/><strong>Carregando conteúdos…</strong></div>}
    {access==='error'&&<div className="k-syllabus-empty"><AlertTriangle size={24} aria-hidden="true"/><strong>Catálogo temporariamente indisponível</strong><p>Não é possível confirmar a quantidade de tópicos aprovados até que a conexão seja restabelecida.</p></div>}
    {(access==='reader'||access==='editor')&&<>
     {institutionTopics.map(item=><article className="k-syllabus-topic" key={item.id}><div className="k-syllabus-topic-head"><strong>{item.subject} · {item.topic}</strong><span>APROVADO</span></div><p>“{item.evidence}”</p><small>{item.sourceTitle} · {item.edition}{item.sourceMethod==='manual_transcript'?' · texto transcrito':' · página HTML'}</small><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar documento <ExternalLink size={13} aria-hidden="true"/></a></article>)}
     {institutionTopics.length===0&&<div className="k-syllabus-empty"><FileSearch size={24} aria-hidden="true"/><strong>Ainda não há assuntos revisados para {examBlueprints[institution].label}</strong><p>Este catálogo começará a aparecer quando uma fonte for importada e um editor aprovar os tópicos. Enquanto isso, os assuntos do gerador são sugestões editoriais, não conteúdos oficialmente confirmados.</p>{editor&&<button type="button" className="btn outline small" onClick={()=>setEditorTab('import')}>Preparar primeira fonte <ArrowRight size={14}/></button>}</div>}
    </>}
    <div className="k-source-library-footer"><button type="button" className="btn primary" onClick={onQuestionBank}>Ir para o banco de questões <ArrowRight size={16} aria-hidden="true"/></button><small>As questões geradas pela IA não são questões oficiais.</small></div>
   </section>
   <aside className="dark-panel k-syllabus-sidebar" aria-label="Referências institucionais">
    <div className="k-source-sidebar-heading"><span className="k-source-eyebrow">PESQUISA DOCUMENTAL</span><h2>Fontes oficiais</h2><p>Consulte os materiais das instituições. A página principal pode conter links adicionais para os editais ou programas completos.</p></div>
    {examOptions.map(opt=><a className="k-syllabus-source-link" key={opt.value} href={examBlueprints[opt.value].sourceUrl} target="_blank" rel="noopener noreferrer"><span><strong>{opt.label}</strong><small>{examBlueprints[opt.value].sourceTitle}</small></span><ExternalLink size={16} aria-hidden="true"/></a>)}
    <div className="k-source-information"><Info size={17} aria-hidden="true"/><span>A IA sugere assuntos com base em documentos. Só aqueles aprovados editorialmente aparecem como fundamentados no catálogo.</span></div>
   </aside>
  </div>

  {editor&&<section className="dark-panel k-syllabus-editor" aria-labelledby="source-admin-title">
   <div className="k-syllabus-heading k-source-editor-heading"><div><span className="k-source-eyebrow">PAINEL EDITORIAL · ACESSO RESTRITO</span><h2 id="source-admin-title"><ShieldCheck size={21} aria-hidden="true"/> Gerenciamento de fontes</h2><p>Importe documentos e revise evidências antes de liberar conteúdos para os simulados.</p></div><span className="k-source-editor-indicator"><LockKeyhole size={13}/> Acesso verificado no servidor</span></div>
   <div className="k-source-tabs" role="group" aria-label="Ferramentas editoriais"><button type="button" className={editorTab==='import'?'active':''} aria-pressed={editorTab==='import'} onClick={()=>setEditorTab('import')}><UploadCloud size={17}/> Importar documento</button><button type="button" className={editorTab==='review'?'active':''} aria-pressed={editorTab==='review'} onClick={()=>setEditorTab('review')}><CheckCircle2 size={17}/> Revisar candidatos <span>{reviewTopics.length}</span></button></div>
   {editorTab==='import'&&<div className="k-source-editor-panel"><div className="k-source-workflow"><span>1. Vincule a fonte</span><ArrowRight size={15}/><span>2. Extraia com IA</span><ArrowRight size={15}/><span>3. Revise manualmente</span></div><p>Importe HTML de um domínio permitido ou cole o texto extraído de um PDF. Antes de aprovar, confira cada trecho no documento original.</p>
    <div className="k-syllabus-fields"><KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/><KognosSelect label="Método" value={method} options={methodOptions} onChange={setMethod}/><label>Edição do documento<input value={edition} maxLength={90} onChange={e=>setEdition(e.target.value)} placeholder="Ex.: Programa 2027"/></label><label>Título do documento<input value={sourceTitle} maxLength={140} onChange={e=>setSourceTitle(e.target.value)} placeholder="Título exibido na fonte"/></label><label className="k-syllabus-wide">Link HTTPS oficial<input value={sourceUrl} onChange={e=>setSourceUrl(e.target.value)} placeholder="https://..."/></label>{method==='manual_transcript'&&<label className="k-syllabus-wide">Texto extraído do documento<textarea rows={7} maxLength={26000} value={transcript} onChange={e=>setTranscript(e.target.value)} placeholder="Cole no mínimo 350 caracteres do conteúdo programático…"/><small>Não envie informações pessoais. O provedor de IA configurado no servidor processará o texto para propor assuntos; nenhum será publicado sem revisão editorial.</small></label>}</div>
    <div className="k-source-editor-actions"><button type="button" className="btn primary" disabled={busy||loading} onClick={()=>void ingest()}>{busy?'Processando…':'Extrair candidatos com IA'} <Sparkles size={16}/></button><small>A extração usa sua cota de IA. PDFs precisam ter o texto copiado nesta versão.</small></div>
   </div>}
   {editorTab==='review'&&<div className="k-source-editor-panel"><div className="k-source-review-tools"><div><strong>Candidatos aguardando decisão ({reviewTopics.length})</strong><p>Aprovar só depois de validar o trecho no documento original.</p></div><label className="k-source-review-search"><Search size={16} aria-hidden="true"/><span className="sr-only">Buscar candidatos</span><input value={reviewSearch} onChange={e=>setReviewSearch(e.target.value)} placeholder="Buscar disciplina ou assunto…"/></label></div><KognosSelect label="Instituição para revisão" value={institution} options={examOptions} onChange={changeInstitution}/>
    {visibleReviewTopics.length===0?<div className="k-syllabus-empty"><CheckCircle2 size={24} aria-hidden="true"/><strong>Nenhum candidato pendente nesta seleção</strong><p>{reviewTopics.length===0?'Importe um documento para começar a revisão.':'Altere a instituição ou o filtro para encontrar outros candidatos.'}</p><button type="button" className="btn outline small" onClick={()=>setEditorTab('import')}>Importar documento</button></div>:<div className="k-syllabus-review-list">{visibleReviewTopics.map(t=>{const source=sourcesById.get(t.source_id);return <article key={t.id}><strong>{t.subject} · {t.topic}</strong><small>{source?.source_title||'Fonte não encontrada'} · {source?.edition||''}</small><p>“{t.evidence_excerpt}”</p><div className="k-syllabus-actions"><button type="button" className="btn primary small" disabled={busy} onClick={()=>void moderate(t.id,'approved')}><CheckCircle2 size={14}/> Aprovar</button><button type="button" className="btn outline small" disabled={busy} onClick={()=>void moderate(t.id,'rejected')}><AlertTriangle size={14}/> Rejeitar</button>{source?.source_url&&<a href={source.source_url} target="_blank" rel="noopener noreferrer">Conferir documento <ExternalLink size={13}/></a>}</div></article>})}</div>}
   </div>}
  </section>}
 </main>;
}