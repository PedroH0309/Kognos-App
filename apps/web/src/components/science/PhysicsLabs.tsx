'use client';
import {useState} from 'react';
import {motionAt,waveProperties,circuitValues,temperatureScales,type ResistorMode} from '@/lib/science-labs';
import {ScienceStage,ScienceSlider,ScienceOutput,fmt} from './ScienceLabCommon';

export function MotionLab(){
 const [initial,setInitial]=useState(5),[acceleration,setAcceleration]=useState(2),[time,setTime]=useState(4);
 const data=motionAt(initial,acceleration,time);
 const points=Array.from({length:81},(_,i)=>{
  const t=i*0.125,s=motionAt(initial,acceleration,t)?.position??0;
  return {t,s};
 });
 const largest=Math.max(1,...points.map(p=>Math.abs(p.s)));
 const curve=points.map((p,i)=>(i?'L':'M')+(30+p.t*29)+' '+(170-135*p.s/largest)).join(' ');
 return <ScienceStage subject="Física" title="Movimento uniformemente variado" description="Altere velocidade inicial, aceleração e tempo. Observe deslocamento e velocidade resultante.">
  <div className="k-science-controls">
   <ScienceSlider label="Velocidade inicial" value={initial} min={-10} max={20} step={1} unit=" m/s" onChange={setInitial}/>
   <ScienceSlider label="Aceleração" value={acceleration} min={-5} max={5} unit=" m/s²" onChange={setAcceleration}/>
   <ScienceSlider label="Tempo" value={time} min={0} max={10} step={0.5} unit=" s" onChange={setTime}/>
  </div>
  <div className="k-science-visual">
   <svg viewBox="0 0 340 210" role="img" aria-label={'Posição em função do tempo com velocidade inicial '+initial+' e aceleração '+acceleration}>
    <line x1="27" x2="325" y1="170" y2="170" stroke="currentColor" opacity=".5"/>
    <line x1="30" x2="30" y1="10" y2="195" stroke="currentColor" opacity=".5"/>
    <path d={curve} stroke="#5B4DE3" strokeWidth="3" fill="none"/>
    <circle cx={30+time*29} cy={170-135*(data?.position??0)/largest} r="5" fill="#38CDE5" stroke="#101B33" strokeWidth="1.5"/>
    <text x="309" y="191" fill="currentColor" fontSize="11">t (s)</text><text x="36" y="14" fill="currentColor" fontSize="11">s (m)</text>
   </svg>
  </div>
  <div className="k-science-grid"><ScienceOutput label="Deslocamento (s₀ = 0)">{fmt(data?.position??NaN)} m</ScienceOutput>
   <ScienceOutput label="Velocidade no instante">{fmt(data?.velocity??NaN)} m/s</ScienceOutput></div>
  <p className="k-science-note">Modelo ideal, aceleração constante: s = v₀t + at²/2 e v = v₀ + at. Não considera resistência do ar nem limitações do trajeto.</p>
 </ScienceStage>;
}
export function WavesLab(){
 const [frequency,setFrequency]=useState(3),[wavelength,setWavelength]=useState(2),[amplitude,setAmplitude]=useState(1.5),[phase,setPhase]=useState(0);
 const values=waveProperties(frequency,wavelength);
 const wave=Array.from({length:181},(_,i)=>{
  const x=i*0.1,y=amplitude*Math.sin(2*Math.PI*x/wavelength-phase*Math.PI/180);
  return (i?'L':'M')+(10+i*1.75).toFixed(1)+' '+(103-35*y).toFixed(1);
 }).join(' ');
 return <ScienceStage subject="Física" title="Comprimento de onda e frequência" description="Ajuste frequência, comprimento de onda e amplitude de uma onda senoidal ideal.">
  <div className="k-science-controls">
   <ScienceSlider label="Frequência" min={0.5} max={10} step={0.5} value={frequency} onChange={setFrequency} unit=" Hz"/>
   <ScienceSlider label="Comprimento de onda" min={0.5} max={8} step={0.5} value={wavelength} onChange={setWavelength} unit=" m"/>
   <ScienceSlider label="Amplitude" min={0.5} max={2} step={0.25} value={amplitude} onChange={setAmplitude} unit=" m"/>
   <ScienceSlider label="Fase" min={0} max={360} step={30} value={phase} onChange={setPhase} unit="°"/>
  </div>
  <div className="k-science-visual"><svg viewBox="0 0 340 210" role="img" aria-label={'Perfil espacial de onda com amplitude '+amplitude+' e comprimento '+wavelength}>
   <line x1="10" x2="328" y1="103" y2="103" stroke="currentColor" opacity=".45"/>
   <path d={wave} stroke="#5B4DE3" strokeWidth="3" fill="none"/>
   <text x="12" y="19" fill="currentColor" fontSize="11">Onda senoidal</text>
   <text x="316" y="122" fill="currentColor" fontSize="11">x</text>
  </svg></div>
  <div className="k-science-grid"><ScienceOutput label="Velocidade de propagação">{fmt(values?.speed??NaN)} m/s</ScienceOutput>
   <ScienceOutput label="Período">{fmt(values?.period??NaN)} s</ScienceOutput></div>
  <p className="k-science-note">v = λf e T = 1/f. Esta figura mostra uma seção espacial em um instante, sem simular reflexão, interferência ou efeito Doppler. Em um meio fixo, a velocidade normalmente depende do meio.</p>
 </ScienceStage>;
}
export function CircuitsLab(){
 const [voltage,setVoltage]=useState(12),[resistance,setResistance]=useState(4);
 const [mode,setMode]=useState<ResistorMode>('single');
 const result=circuitValues(voltage,resistance,mode);
 return <ScienceStage subject="Física" title="Lei de Ohm e circuitos" description="Experimente uma fonte ideal e um ou dois resistores idênticos em série ou paralelo.">
  <div className="k-science-choice" role="group" aria-label="Associação de resistores">
   {([['single','Um resistor'],['series','Série'],['parallel','Paralelo']] as const).map(([id,label])=>
    <button type="button" key={id} aria-pressed={mode===id} onClick={()=>setMode(id)}>{label}</button>)}
  </div>
  <div className="k-science-controls">
   <ScienceSlider label="Tensão da fonte" min={0} max={24} value={voltage} onChange={setVoltage} unit=" V"/>
   <ScienceSlider label="Resistência de cada resistor" min={1} max={20} value={resistance} onChange={setResistance} unit=" Ω"/>
  </div>
  <div className="k-science-visual">
   <svg viewBox="0 0 340 200" role="img" aria-label={'Circuito simplificado com '+(mode==='single'?'um resistor':mode==='series'?'dois resistores em série':'dois resistores em paralelo')}>
    <path d="M60 60 H270 V151 H60 Z" fill="none" stroke="#5B4DE3" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M60 80 V131 M48 89 H72 M54 125 H66" stroke="#38CDE5" strokeWidth="3"/>
    <rect x="130" y="49" width="50" height="22" rx="3" fill="var(--science-surface,#fff)" stroke="#5B4DE3" strokeWidth="2"/>
    {mode==='series'&&<rect x="205" y="49" width="50" height="22" rx="3" fill="var(--science-surface,#fff)" stroke="#5B4DE3" strokeWidth="2"/>}
    {mode==='parallel'&&<><path d="M111 60 V111 H251 V60" stroke="#38CDE5" strokeWidth="2.5" fill="none"/>
     <rect x="157" y="100" width="50" height="22" rx="3" fill="var(--science-surface,#fff)" stroke="#38CDE5" strokeWidth="2"/></>}
    <text x="74" y="108" fill="currentColor" fontSize="12">{voltage} V</text><text x="139" y="43" fill="currentColor" fontSize="11">{resistance} Ω</text>
   </svg>
  </div>
  <div className="k-science-grid"><ScienceOutput label="Resistência equivalente">{fmt(result?.equivalentResistance??NaN)} Ω</ScienceOutput>
   <ScienceOutput label="Corrente total">{fmt(result?.current??NaN)} A</ScienceOutput>
   <ScienceOutput label="Potência total">{fmt(result?.power??NaN)} W</ScienceOutput></div>
  <p className="k-science-note">I = V/R equivalente, P = VI. Fonte e fios ideais; os resistores são ôhmicos e iguais. Não simula baterias reais nem aquecimento.</p>
 </ScienceStage>;
}
export function ThermalLab(){
 const [celsius,setCelsius]=useState(25);
 const measures=temperatureScales(celsius);
 const height=(celsius+273.15)/(373.15)*130;
 return <ScienceStage subject="Física" title="Escalas de temperatura" description="Converta Celsius, Fahrenheit e Kelvin e acompanhe um termômetro ilustrativo.">
  <div className="k-science-controls"><ScienceSlider label="Temperatura" min={-100} max={100} value={celsius} onChange={setCelsius} unit=" °C"/></div>
  <div className="k-science-visual"><svg viewBox="0 0 340 190" role="img" aria-label={'Termômetro esquemático indicando '+celsius+' graus Celsius'}>
   <rect x="151" y="19" width="38" height="143" rx="18" fill="none" stroke="#5B4DE3" strokeWidth="3"/>
   <rect x="161" y={153-height} width="18" height={height} rx="8" fill="#38CDE5"/>
   <circle cx="170" cy="159" r="19" fill="#5B4DE3"/>
   <text x="206" y="39" fontSize="12" fill="currentColor">100 °C</text>
   <text x="206" y="151" fontSize="12" fill="currentColor">−100 °C</text>
  </svg></div>
  <div className="k-science-grid"><ScienceOutput label="Celsius">{fmt(celsius,2)} °C</ScienceOutput>
   <ScienceOutput label="Fahrenheit">{fmt(measures?.fahrenheit??NaN,2)} °F</ScienceOutput>
   <ScienceOutput label="Kelvin">{fmt(measures?.kelvin??NaN,2)} K</ScienceOutput></div>
  <p className="k-science-note">K = °C + 273,15 e °F = 1,8×°C + 32. O termômetro é um esquema pedagógico, não um sensor físico; escala Kelvin não usa símbolo de grau.</p>
 </ScienceStage>;
}
