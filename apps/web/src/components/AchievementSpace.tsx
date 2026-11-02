'use client';

import {useCallback,useEffect,useState} from 'react';
import {Award,BookOpenCheck,CheckCircle2,Flame,LockKeyhole,RefreshCw,Star,Target,Trophy,Zap} from 'lucide-react';
import {getSupabase} from '@/lib/supabase';
import type {AchievementSummary} from '@/lib/ai-achievements';
import styles from './AchievementSpace.module.css';

type Props={userId:string|null;onPractice:()=>void};
export default function AchievementSpace({userId,onPractice}:Props){
 const [stats,setStats]=useState<AchievementSummary|null>(null);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState('');
 const load=useCallback(async()=>{
  if(!userId){setLoading(false);setStats(null);return;}
  setLoading(true);setError('');
  try{
   const supabase=getSupabase();
   const {data,error:sessionError}=await supabase!.auth.getSession();
   if(sessionError||!data.session||data.session.user.id!==userId)throw new Error('Entre novamente para consultar suas conquistas.');
   const response=await fetch('/api/ai-achievements',{
    headers:{Authorization:`Bearer ${data.session.access_token}`},cache:'no-store'
   });
   const body=await response.json();
   if(!response.ok)throw new Error(body.error||'Não foi possível consultar suas conquistas.');
   setStats(body as AchievementSummary);
  }catch(e){setStats(null);setError(e instanceof Error?e.message:'Falha ao carregar as conquistas.');}
  finally{setLoading(false);}
 },[userId]);
 useEffect(()=>{void load();},[load]);
 const next=stats?100-(stats.xp%100):100;
 return <main className="app-content">
  <div className={styles.heading}>
   <div>
    <span className="overline">SEU PROGRESSO REAL</span>
    <h1 className={styles.headingTitle}><Trophy size={29}/> Conquistas</h1>
    <p>Ganhe XP ao concluir questões. Cada questão concede pontos somente na primeira resposta, mesmo que você volte a estudá-la.</p>
   </div>
   <button className="btn outline small" type="button" disabled={loading} onClick={()=>void load()}><RefreshCw size={15}/> Atualizar</button>
  </div>
  {loading&&<div className={styles.status} role="status">Consultando seu histórico de estudos…</div>}
  {error&&<div className="message warning" role="alert">{error} <button type="button" className="btn outline small" onClick={()=>void load()}>Tentar novamente</button></div>}
  {!loading&&stats&&<>
   {stats.sampleLimited&&<p className="message warning">Seu histórico é muito grande. Esta pontuação representa apenas a amostra mais recente disponível; os dados não foram apagados.</p>}
   <section className={styles.hero}>
    <div className={styles.levelIcon}><Zap size={30}/></div>
    <div className={styles.levelCopy}>
     <span>NÍVEL {stats.level}</span>
     <h2>{stats.xp.toLocaleString('pt-BR')} XP acumulados</h2>
     <p>{next} XP para o próximo nível · +10 por acerto, +2 por questão concluída com erro</p>
     <div className={styles.progressBar} role="progressbar" aria-label="Progresso para o próximo nível" aria-valuemin={0} aria-valuemax={100} aria-valuenow={stats.xp%100}><span style={{width:`${stats.xp%100}%`}}/></div>
    </div>
   </section>
   <div className={styles.stats}>
    <div><BookOpenCheck size={21}/><strong>{stats.answered}</strong><span>Questões concluídas</span></div>
    <div><Target size={21}/><strong>{stats.accuracy===null?'—':`${stats.accuracy}%`}</strong><span>Taxa de acertos</span></div>
    <div><Flame size={21}/><strong>{stats.streakDays} {stats.streakDays===1?'dia':'dias'}</strong><span>Sequência atual</span></div>
    <div><Award size={21}/><strong>{stats.unlocked}/{stats.badges.length}</strong><span>Conquistas desbloqueadas</span></div>
   </div>
   <section className={styles.badgeSection}>
    <div className={styles.badgeHeading}>
     <div><span className="overline">SELOS DE APRENDIZAGEM</span><h2>Suas conquistas</h2><p>As metas são desbloqueadas automaticamente a partir de respostas registradas na sua conta.</p></div>
    </div>
    <div className={styles.badgeGrid}>
     {[...stats.badges].sort((a,b)=>Number(b.unlocked)-Number(a.unlocked)).map(b=>
      <article key={b.id} className={`${styles.badgeCard} ${b.unlocked?styles.unlocked:''}`}>
       <span className={styles.badgeIcon}>{b.unlocked?<Star size={23}/>:<LockKeyhole size={23}/>}</span>
       <div className={styles.badgeText}>
        <span className={styles.badgeStatus}>{b.unlocked?<><CheckCircle2 size={13}/> DESBLOQUEADA</>:'EM PROGRESSO'}</span>
        <h3>{b.title}</h3><p>{b.description}</p>
        <div className={styles.badgeProgress}><span style={{width:`${Math.min(100,b.progress/b.target*100)}%`}}/></div>
        <small>{b.progress} de {b.target}</small>
       </div>
      </article>
     )}
    </div>
   </section>
   {!stats.answered&&<div className={styles.status}>Você ainda não concluiu questões. Seus primeiros pontos e selos aparecerão aqui quando uma resposta for registrada.</div>}
   <button type="button" className="btn primary" onClick={onPractice}><BookOpenCheck size={16}/> Ir para as questões pendentes</button>
  </>}
 </main>;
}
