'use client';

import type {WeeklyStudyPoint} from '@/lib/dashboard-weekly-activity';

/** Lightweight SVG: no external chart dependency and no synthetic demo series. */
export default function WeeklyProgressChart({points}:{points:readonly WeeklyStudyPoint[]}){
 const data=points.length===7?points:[];
 const values=data.map(point=>point.count);
 const total=values.reduce((sum,value)=>sum+value,0);
 const max=Math.max(1,...values);
 const x=(i:number)=>26+(648/6)*i;
 const y=(value:number)=>174-(value/max)*130;
 const polyline=values.map((value,i)=>`${x(i)},${y(value)}`).join(' ');
 const area=`26,174 ${polyline} 674,174`;
 return <div className="k-weekly-chart" aria-label={`Questões do acervo demonstrativo respondidas nos últimos sete dias: ${data.map(d=>`${d.day}: ${d.count}`).join(', ')||'carregando histórico'}`}>
  {data.length>0&&<>
   <svg className="k-weekly-svg" viewBox="0 0 700 206" role="img" aria-label={`${total} respostas de prática registradas nos últimos sete dias`} preserveAspectRatio="none">
    <defs>
     <linearGradient id="kognos-weekly-fill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#5B4DE3" stopOpacity=".19"/>
      <stop offset="100%" stopColor="#5B4DE3" stopOpacity=".015"/>
     </linearGradient>
    </defs>
    {[44,109,174].map(v=><line key={v} x1="26" x2="674" y1={v} y2={v} className="k-weekly-gridline"/>)}
    <polygon points={area} fill="url(#kognos-weekly-fill)"/>
    <polyline points={polyline} className="k-weekly-line"/>
    {values.map((value,i)=><circle key={data[i].date} cx={x(i)} cy={y(value)} r="5.7" className="k-weekly-dot">
      <title>{`${data[i].day}: ${value} ${value===1?'resposta':'respostas'}`}</title>
    </circle>)}
   </svg>
   <div className="k-weekly-axis" aria-hidden="true">{data.map(day=><span key={day.date}>{day.day}</span>)}</div>
  </>}
  <div className="k-weekly-caption"><span>{total===0?'Nenhuma resposta registrada nesta semana':`${total} ${total===1?'resposta registrada':'respostas registradas'} na semana`}</span><small>Histórico de prática demonstrativa · últimos 7 dias</small></div>
 </div>;
}
