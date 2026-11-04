'use client';
import {useState} from 'react';
import {periodicValue,type PeriodicMode} from '@/lib/math-labs-extended';
import {MathRange,MathStage,MathOutput,nice} from './MathLabCommon';
export default function PeriodicWaveLab(){
 const [mode,setMode]=useState<PeriodicMode>('sine');
 const [amplitude,setAmplitude]=useState(2),[period,setPeriod]=useState(360);
 const [phase,setPhase]=useState(0),[angle,setAngle]=useState(90);
 const y=periodicValue(mode,amplitude,period,phase,angle);
 const curve=Array.from({length:181},(_,i)=>{
  const a=i*4;const v=periodicValue(mode,amplitude,period,phase,a);
  return (i?'L':'M')+(15+a/2.2).toFixed(2)+' '+(100-v*29).toFixed(2);
 }).join(' ');
 const markerX=15+angle/2.2,markerY=100-y*29;
 return <MathStage title="Arcos e funções periódicas" description="Explore seno e cosseno em ciclos completos: amplitude, período, deslocamento horizontal e ângulo.">
  <div className="k-math-switch" role="group" aria-label="Função periódica">
   <button type="button" aria-pressed={mode==='sine'} onClick={()=>setMode('sine')}>Seno</button>
   <button type="button" aria-pressed={mode==='cosine'} onClick={()=>setMode('cosine')}>Cosseno</button>
  </div>
  <div className="k-math-controls">
   <MathRange label="Amplitude" min={0.5} max={3} step={0.5} value={amplitude} onChange={setAmplitude}/>
   <MathRange label="Período (graus)" min={90} max={720} step={30} value={period} onChange={setPeriod}/>
   <MathRange label="Deslocamento (graus)" min={0} max={180} step={15} value={phase} onChange={setPhase}/>
   <MathRange label="Ângulo observado" min={0} max={720} step={15} value={angle} onChange={setAngle} unit="°"/>
  </div>
  <div className="k-math-graph">
   <svg viewBox="0 0 350 210" role="img" aria-label={'Gráfico de '+mode+' com amplitude '+amplitude+' e período '+period+' graus'}>
    <line x1="12" y1="100" x2="342" y2="100" stroke="currentColor" opacity=".6"/>
    <line x1="15" y1="8" x2="15" y2="192" stroke="currentColor" opacity=".6"/>
    <path d={curve} stroke="#5B4DE3" strokeWidth="2.8" fill="none"/>
    <circle cx={markerX} cy={markerY} r="5" fill="#38CDE5" stroke="#101B33"/>
    {[0,180,360,540,720].map(deg=><text key={deg} x={15+deg/2.2} y="198" textAnchor="middle" fontSize="10" fill="currentColor">{deg}°</text>)}
   </svg>
  </div>
  <div className="k-math-grid"><MathOutput label={'Valor no ângulo '+angle+'°'}>{nice(y,4)}</MathOutput>
   <MathOutput label="Radianos do ângulo">{nice(angle*Math.PI/180,4)} rad</MathOutput></div>
  <p className="k-math-tip">Uma volta completa equivale a 360° = 2π rad. A amplitude controla a altura da oscilação; o período define após quantos graus a forma se repete. Esta simulação descreve funções periódicas, não apenas triângulos retângulos.</p>
 </MathStage>;
}