'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {BookOpenText,ExternalLink,ShieldCheck,RefreshCw,CheckCircle2,AlertTriangle,FileSearch, Sparkles} from 'lucide-react';
import {KognosSelect} from './KognosFields';
import {getSupabase} from '@/lib/supabase';
import {examBlueprints,type ExamId} from '@/lib/exam-blueprints';
import type {ApprovedSyllabusTopic,ImportMethod} from '@/lib/syllabus-sources';

type ReviewTopic={id:string;source_id:string;subject:string;topic:string;evidence_excerpt:string;review_status:string};
type ReviewSource={id:string;institution:ExamId;edition:string;source_title:string;source_url:string;source_method:ImportMethod;review_status:string;created_at:string};
const examOptions=(Object.entries(examBlueprints) as [ExamId,(typeof examBlueprints)[ExamId]][]).map(([value,b])=>({value,label:b.label}));
const methodOptions:{value:ImportMethod;label:string}[]=[{value:'official_html',label:'Ler página HTML oficial'},{value:'manual_transcript',label:'Colar texto de PDF ou documento'}];

export default function ExamSources({userId,onQuestionBank}:{userId:string|null;onQuestionBank:()=>void}){
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
  if(!userId){setApproved([]);setEditor(false);return;}
  setLoading(true);setError('');
  try{
   const data=await fetchAuthorized();setApproved(Array.isArray(data.topics)?data.topics:[]);setEditor(data.editor===true);
   setReviewTopics(Array.isArray(data.reviewTopics)?data.reviewTopics:[]);
   setReviewSources(Array.isArray(data.reviewSources)?data.reviewSources:[]);
  }catch(e){setError(e instanceof Error?e.message:'Falha ao carregar matrizes.');}
  finally{setLoading(false);}
 },[fetchAuthorized,userId]);
 useEffect(()=>{void refresh();},[refresh]);
 const sourcesById=useMemo(()=>new Map(reviewSources.map(s=>[s.id,s])),[reviewSources]);
 const institutionTopics=approved.filter(x=>x.institution===institution);
 function changeInstitution(id:ExamId){const b=examBlueprints[id];setInstitution(id);setSourceUrl(b.sourceUrl);setEdition(b.edition);setSourceTitle(b.sourceTitle);setError('');}
 async function ingest(){
  setBusy(true);setError('');setNotice('');
  try{
   const result=await fetchAuthorized({method:'POST',body:JSON.stringify({institution,edition,sourceTitle,sourceUrl,method,transcript})});
   setNotice(`${result.proposed} assunto(s) extraído(s) aguardando aprovação editorial. Nada foi publicado automaticamente.`);
   setTranscript('');await refresh();
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
  <div className="page-intro"><span className="overline">BASE DOCUMENTAL · EDIÇÕES E EVIDÊNCIAS</span><h1>Matrizes e <em>editais.</em></h1><p>Assuntos vinculados a fontes institucionais e revisados antes de orientar a geração de exercícios. Uma matriz descreve competências; não prevê o que cairá.</p></div>
  {!userId&&<div className="dark-panel"><ShieldCheck size={20}/><h2>Entre na sua conta</h2><p>O catálogo sincronizado depende do Supabase. As fontes institucionais de referência continuam disponíveis nos links abaixo.</p></div>}
  {error&&<div className="message warning" role="alert">{error}</div>}{notice&&<div className="message success" role="status">{notice}</div>}
  <div className="k-syllabus-grid">
   <section className="dark-panel k-syllabus-library"><div className="k-syllabus-heading"><h2><BookOpenText size={19}/> Fontes e conteúdos revisados</h2><button type="button" className="btn outline small" disabled={loading||!userId} onClick={()=>void refresh()}><RefreshCw size={14}/> Atualizar</button></div>
    <KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/>
    <p className="k-syllabus-caption">{institutionTopics.length} assunto(s) aprovados na instituição selecionada. Só passam a orientar a IA após revisão editorial.</p>
    {institutionTopics.map(item=><article className="k-syllabus-topic" key={item.id}><div className="k-syllabus-topic-head"><strong>{item.subject} · {item.topic}</strong><span>REVISADO</span></div><p>“{item.evidence}”</p><small>{item.sourceTitle} · {item.edition}{item.sourceMethod==='manual_transcript'?' · texto transcrito':' · página HTML'}</small><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar fonte institucional <ExternalLink size={13}/></a></article>)}
    {!institutionTopics.length&&<div className="k-syllabus-empty"><FileSearch size={24}/><strong>Sem tópicos editoriais aprovados nesta edição</strong><p>Os temas sugeridos no gerador continuam identificados como editoriais. O Kognos não inventa a cobertura de uma prova.</p></div>}
    <button type="button" className="btn primary" onClick={onQuestionBank}>Criar questões no banco com IA →</button>
   </section>
   <aside className="dark-panel k-syllabus-sidebar"><h2>Referências institucionais</h2><p>Consulte as fontes oficiais diretamente. A página principal nem sempre contém o PDF com o programa detalhado.</p>
    {examOptions.map(opt=><a className="k-syllabus-source-link" key={opt.value} href={examBlueprints[opt.value].sourceUrl} target="_blank" rel="noopener noreferrer"><span><strong>{opt.label}</strong><small>{examBlueprints[opt.value].sourceTitle}</small></span><ExternalLink size={16}/></a>)}
    <div className="message neutral"><ShieldCheck size={17}/> A IA propõe candidatos; um editor autorizado aprova antes que um assunto seja considerado fundamentado.</div>
   </aside>
  </div>
  {editor&&<section className="dark-panel k-syllabus-editor"><div className="k-syllabus-heading"><div><span className="overline">ÁREA RESTRITA · EDIÇÃO DE CONTEÚDO</span><h2><Sparkles size={20}/> Importar fonte para revisão</h2></div></div>
   <p>Importe uma página HTML de domínio institucional autorizado ou cole o texto extraído de um PDF. Transcrições precisam ser verificadas manualmente no documento oficial antes de aprovar seus assuntos.</p>
   <div className="k-syllabus-fields">
    <KognosSelect label="Instituição" value={institution} options={examOptions} onChange={changeInstitution}/>
    <KognosSelect label="Método" value={method} options={methodOptions} onChange={setMethod}/>
    <label>Edição do documento<input value={edition} maxLength={90} onChange={e=>setEdition(e.target.value)} placeholder="Ex.: Programa 2027"/></label>
    <label>Título do documento<input value={sourceTitle} maxLength={140} onChange={e=>setSourceTitle(e.target.value)} placeholder="Título exibido na fonte"/></label>
    <label className="k-syllabus-wide">Link HTTPS oficial<input value={sourceUrl} onChange={e=>setSourceUrl(e.target.value)} placeholder="https://..."/></label>
    {method==='manual_transcript'&&<label className="k-syllabus-wide">Texto extraído do documento<textarea rows={7} maxLength={26000} value={transcript} onChange={e=>setTranscript(e.target.value)} placeholder="Cole no mínimo 350 caracteres do conteúdo programático..."/><small>Não envie informações pessoais. O texto será processado pela NVIDIA para extrair candidatos de conteúdo, sem publicação automática.</small></label>}
   </div>
   <button className="btn primary" disabled={busy||!userId} onClick={()=>void ingest()}>{busy?'Processando…':'Extrair candidatos com IA'}</button>
   <h3>Candidatos aguardando decisão ({reviewTopics.length})</h3>
   {reviewTopics.length===0?<p className="muted">Nenhum conteúdo pendente neste catálogo.</p>:<div className="k-syllabus-review-list">{reviewTopics.map(t=><article key={t.id}><strong>{t.subject} · {t.topic}</strong><small>{sourcesById.get(t.source_id)?.source_title||'Fonte não encontrada'} · {sourcesById.get(t.source_id)?.edition||''}</small><p>“{t.evidence_excerpt}”</p><div className="k-syllabus-actions"><button className="btn primary small" disabled={busy} onClick={()=>void moderate(t.id,'approved')}><CheckCircle2 size={14}/> Aprovar</button><button className="btn outline small" disabled={busy} onClick={()=>void moderate(t.id,'rejected')}><AlertTriangle size={14}/> Rejeitar</button><a href={sourcesById.get(t.source_id)?.source_url||'#'} target="_blank" rel="noopener noreferrer">Ver documento <ExternalLink size={13}/></a></div></article>)}</div>}
  </section>}
 </main>;
}