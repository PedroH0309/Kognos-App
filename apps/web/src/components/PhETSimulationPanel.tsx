'use client';
import {useRef,useState} from 'react';
import {allowNonCommercialPhET,simulationForTopic,type SimulationTopic} from '@/lib/third-party-simulations';

export default function PhETSimulationPanel(topic:SimulationTopic){
 const sims=simulationForTopic(topic);
 const [selected,setSelected]=useState(0);
 const [approved,setApproved]=useState(false);
 const frame=useRef<HTMLDivElement>(null);
 if(!sims.length)return null;
 const sim=sims[Math.min(selected,sims.length-1)];
 const embedsAllowed=allowNonCommercialPhET(process.env.NEXT_PUBLIC_PHET_MODE,process.env.NODE_ENV==='development');
 const makeSelection=(index:number)=>{setSelected(index);setApproved(false);};
 const fullscreen=()=>{
  const element=frame.current;
  if(element?.requestFullscreen){void element.requestFullscreen().catch(()=>window.open(sim.url,'_blank','noopener,noreferrer'));}
  else window.open(sim.url,'_blank','noopener,noreferrer');
 };
 return <section className="k-external-lab" aria-label={'Simulador PhET para '+topic.topic}>
  <div className="k-external-head">
   <div><span className="overline">LABORATÓRIO INTERATIVO · RECURSO EXTERNO</span>
    <h3>Simulador visual PhET</h3>
    <p>Experimente diretamente os objetos, coeficientes e representações deste assunto usando uma simulação educacional existente.</p>
   </div>
  </div>
  {sims.length>1&&<div className="k-external-picker" role="group" aria-label="Selecione uma simulação">
   {sims.map((item,i)=><button key={item.id} type="button" aria-pressed={selected===i}
    onClick={()=>makeSelection(i)}>{item.title}</button>)}
  </div>}
  <div className="k-external-summary"><h4>{sim.title}</h4><p>{sim.summary}</p>
   <small>Objetivo: {sim.learningGoal}</small></div>
  {embedsAllowed?<div className="k-external-frame-shell" ref={frame}>
   {!approved?<div className="k-external-permission">
    <h4>Carregar experiência interativa</h4>
    <p>O simulador é hospedado pela Universidade do Colorado. Ao carregar, seu navegador fará uma conexão direta com o site PhET; o Kognos não enviará suas respostas ou histórico ao provedor.</p>
    <button type="button" className="k-external-load" onClick={()=>setApproved(true)}>Carregar simulação</button>
    <a href={sim.url} target="_blank" rel="noopener noreferrer">Abrir diretamente no site oficial</a>
   </div>:<>
    <iframe key={sim.id} title={sim.title+' — PhET Interactive Simulations'}
     src={sim.url} allowFullScreen referrerPolicy="no-referrer"
     loading="lazy" className="k-external-iframe"/>
    <div className="k-external-toolbar">
     <button type="button" onClick={fullscreen}>Ampliar tela do simulador</button>
     <button type="button" onClick={()=>setApproved(false)}>Encerrar simulação</button>
     <a href={sim.url} target="_blank" rel="noopener noreferrer">Abrir em nova aba</a>
    </div>
   </>}
  </div>:<div className="k-external-permission">
   <h4>Simulação disponível no site oficial</h4>
   <p>A incorporação no Kognos está desabilitada neste ambiente. O PhET permite uso gratuito não comercial, mas uma versão comercial ou monetizada do Kognos exige licença específica. O proprietário pode habilitar a incorporação apenas quando tiver confirmado os direitos de uso.</p>
   <a href={sim.url} target="_blank" rel="noopener noreferrer">Abrir simulação no PhET</a>
  </div>}
  <p className="k-external-credits">
   Simulação por <a href="https://phet.colorado.edu/" target="_blank" rel="noopener noreferrer">PhET Interactive Simulations, University of Colorado Boulder</a>, licenciada sob <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0</a> para usos não comerciais, de acordo com os <a href="https://phet.colorado.edu/en/licensing" target="_blank" rel="noopener noreferrer">termos do PhET</a>. Os controles e as imagens exibidos no simulador pertencem ao projeto PhET; o Kognos não os redistribui.
  </p>
  <p className="k-external-note">A simulação é complementar, não uma questão oficial. O conteúdo da simulação não é usado para atribuir nota nem alterar o mapa de domínio. Caso o navegador bloqueie a incorporação, utilize o link oficial.</p>
 </section>;
}
