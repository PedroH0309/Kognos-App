'use client';
import {useState} from 'react';

/** Simulação didática de transferência energética, não previsão de um ecossistema real.
 * Energia por nível = E_anterior × eficiência escolhida. Não registra tentativas.
 */
export default function EcologyEnergyLab(){
 const [transfer,setTransfer]=useState(10);
 const producer=10000;
 const energies=[producer,producer*transfer/100,producer*(transfer/100)**2,producer*(transfer/100)**3];
 const names=['Produtores','Consumidores primários','Consumidores secundários','Consumidores terciários'];
 const format=(n:number)=>n.toLocaleString('pt-BR',{maximumFractionDigits:3});
 return <div className="k-ecology-energy-lab">
  <div className="k-ecology-energy-lab-toolbar">
   <label htmlFor="k-ecology-transfer">Eficiência de transferência do modelo: <strong>{transfer}%</strong>
    <input type="range" id="k-ecology-transfer" min={5} max={30} step={1} value={transfer} onChange={e=>setTransfer(Number(e.target.value))}/>
   </label>
   <p>Arraste para descobrir como a disponibilidade energética muda nos níveis tróficos. Base hipotética: {format(producer)} kJ nos produtores.</p>
  </div>
  <div className="k-ecology-trophic-levels" aria-label="Energia disponível por nível trófico">
   {energies.map((energy,i)=><div key={i} className="k-ecology-trophic-row">
    <span>{names[i]}</span>
    <div className="k-ecology-trophic-track"><div className="k-ecology-trophic-fill" style={{width:Math.max(2,100*(energy/producer)**.27)+'%'}} aria-hidden="true"/></div>
    <output aria-live="off">{format(energy)} kJ</output>
   </div>)}
  </div>
  <p className="k-ecology-energy-lab-note"><strong>Interpretação:</strong> cada transferência reduz a energia disponível no modelo porque nem toda energia é assimilada; parte é utilizada no metabolismo e dissipada. A porcentagem foi escolhida para explorar cenários e não é uma eficiência universal.</p>
 </div>;
}
