'use client';

import {useId,useState} from 'react';
import type {WeeklyStudyPoint} from '@/lib/dashboard-weekly-activity';
import {weeklyAreaPaths} from '@/lib/dashboard-area-path';

/** Smooth reference-inspired violet area chart of actual seven-day practice totals.
 * Accessible pointer, keyboard and touch inspection; no sample or synthetic values.
 */
export default function WeeklyProgressChart({points}:{points:readonly WeeklyStudyPoint[]}){
 const [hovered,setHovered]=useState<number|null>(null);
 const [selected,setSelected]=useState<number|null>(null);
 const gradientId=useId().replace(/:/g,'');
 const data=points.length===7?points:[];
 const values=data.map(point=>point.count);
 const total=values.reduce((sum,value)=>sum+value,0);
 const max=Math.max(1,...values);
 const x=(i:number)=>20+(660/6)*i;
 const baseline=302;
 const y=(value:number)=>max===0?baseline:baseline-(value/max)*235;
 const paths=weeklyAreaPaths(values.map((value,i)=>({x:x(i),y:y(value)})),baseline);
 const activeIndex=hovered??selected;
 const active=activeIndex===null?null:data[activeIndex]??null;
 const countLabel=(count:number)=>`${count} ${count===1?'resposta':'respostas'}`;
 const shortDate=(day:string)=>new Date(day+'T12:00:00Z')
  .toLocaleDateString('pt-BR',{day:'numeric',month:'short',timeZone:'UTC'}).replace(' de ',' ');
 return <div className="k-weekly-chart" role="group" aria-label="Respostas demonstrativas registradas nos últimos sete dias. Explore os pontos do gráfico para consultar os valores.">
  {data.length>0&&<>
   <div className="k-weekly-plot">
    <svg className="k-weekly-svg" viewBox="0 0 700 334" role="img"
     aria-label={'Evolução semanal: '+data.map(day=>day.day+' '+day.date+': '+countLabel(day.count)).join('; ')}
     preserveAspectRatio="none">
     <defs>
      <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
       <stop offset="0%" stopColor="#635BFF" stopOpacity=".36"/>
       <stop offset="100%" stopColor="#635BFF" stopOpacity=".035"/>
      </linearGradient>
     </defs>
     {[60,109,158,207,256,302].map(v=><line key={v} x1="20" x2="680" y1={v} y2={v} className="k-weekly-gridline"/>)}
     <path d={paths.area} fill={'url(#'+gradientId+')'} className="k-weekly-area"/>
     <path d={paths.line} className="k-weekly-line"/>
     {values.map((value,i)=><g key={data[i].date}>
      <circle cx={x(i)} cy={y(value)} r="7.2" className={'k-weekly-dot'+(activeIndex===i?' is-active':'')}/>
      <circle cx={x(i)} cy={y(value)} r="3.2" className="k-weekly-dot-core"/>
     </g>)}
    </svg>
    {data.map((day,i)=><button key={day.date} type="button"
     className={`k-weekly-hit-area ${selected===i?'is-selected':''}`}
     style={{left:`${x(i)/700*100}%`,top:`${y(day.count)/334*100}%`}}
     aria-label={`${day.day}, ${shortDate(day.date)}: ${countLabel(day.count)}. ${selected===i?'Toque para fechar o detalhe.':'Toque para fixar o detalhe.'}`}
     aria-pressed={selected===i}
     onPointerEnter={event=>{if(event.pointerType!=='touch')setHovered(i);}}
     onPointerLeave={()=>setHovered(null)}
     onFocus={()=>setHovered(i)}
     onBlur={()=>setHovered(null)}
     onClick={()=>{setSelected(current=>current===i?null:i);setHovered(null);}}
     onKeyDown={event=>{if(event.key==='Escape'){setSelected(null);setHovered(null);}}}>
     <span className="k-weekly-hit-ring" aria-hidden="true"/>
    </button>)}
    {active&&activeIndex!==null&&<div className={`k-weekly-tooltip ${activeIndex===0?'at-start':activeIndex===6?'at-end':''} ${y(active.count)<100?'is-high':''}`}
     role="status" aria-live="polite" style={{left:`${x(activeIndex)/700*100}%`,top:`${y(active.count)/334*100}%`}}>
      <strong>{countLabel(active.count)}</strong>
      <span>{active.day} · {shortDate(active.date)}</span>
     </div>}
   </div>
   <div className="k-weekly-axis" aria-hidden="true">{data.filter((_,i)=>i%2===0).map(day=><span key={day.date}>{shortDate(day.date)}</span>)}</div>
  </>}
  <div className="k-weekly-caption">
   <span>{total===0?'Nenhuma resposta registrada nesta semana':`${total} ${total===1?'resposta registrada':'respostas registradas'} na semana`}</span>
   <small>Histórico de prática demonstrativa · últimos 7 dias</small>
  </div>
  <p className="k-weekly-interaction-hint">Passe o mouse, clique ou toque nos pontos para ver os valores de cada dia.</p>
 </div>;
}
