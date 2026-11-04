'use client';
import {useState} from 'react';
import {solidMetrics,type SolidType} from '@/lib/math-labs-extended';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
const shapes:{id:SolidType;label:string}[]=[
 {id:'cube',label:'Cubo'},{id:'prism',label:'Paralelepípedo'},
 {id:'cylinder',label:'Cilindro'},{id:'cone',label:'Cone'}
];
export default function SolidGeometryLab(){
 const [shape,setShape]=useState<SolidType>('cube');
 const [a,setA]=useState(3),[b,setB]=useState(4),[c,setC]=useState(2);
 const result=solidMetrics(shape,a,b,c);
 return <MathStage title="Geometria espacial e vistas" description="Altere as dimensões de sólidos e relacione volume, área total e vistas ortogonais.">
  <label className="k-math-select">Sólido<select value={shape} onChange={e=>setShape(e.target.value as SolidType)}>
   {shapes.map(item=><option key={item.id} value={item.id}>{item.label}</option>)}
  </select></label>
  <div className="k-math-controls"><MathRange label={shape==='cylinder'||shape==='cone'?'Raio (cm)':'Largura (cm)'} min={1} max={8} value={a} onChange={setA}/>
   {shape!=='cube'&&<MathRange label="Altura (cm)" min={1} max={8} value={b} onChange={setB}/>}
   {shape==='prism'&&<MathRange label="Profundidade (cm)" min={1} max={8} value={c} onChange={setC}/>}</div>
  <div className="k-math-geometry">
   <svg viewBox="0 0 340 215" role="img" aria-label={'Esquema em perspectiva de '+shapes.find(item=>item.id===shape)?.label}>
    {shape==='cube'||shape==='prism'?<>
     <polygon points="95,58 225,58 254,34 124,34" fill="#38CDE52A" stroke="#5B4DE3" strokeWidth="2"/>
     <polygon points="225,58 254,34 254,149 225,174" fill="#5B4DE338" stroke="#5B4DE3" strokeWidth="2"/>
     <rect x="95" y="58" width="130" height="116" fill="#5B4DE31D" stroke="#5B4DE3" strokeWidth="2"/>
    </>:shape==='cylinder'?<>
     <path d="M 110,57 L 110,162 Q 170,194 230,162 L 230,57" fill="#5B4DE31C" stroke="#5B4DE3" strokeWidth="2"/>
     <ellipse cx="170" cy="57" rx="60" ry="20" fill="#38CDE52A" stroke="#5B4DE3" strokeWidth="2"/>
     <path d="M 110,162 Q 170,140 230,162" fill="none" stroke="#5B4DE3" strokeDasharray="5 4"/>
    </>:<>
     <path d="M 170,25 L 105,165 Q 170,194 235,165 Z" fill="#5B4DE31C" stroke="#5B4DE3" strokeWidth="2"/>
     <ellipse cx="170" cy="165" rx="65" ry="18" fill="#38CDE527" stroke="#5B4DE3" strokeWidth="2"/>
    </>}
    <text x="170" y="203" fill="currentColor" textAnchor="middle" fontSize="12">Esquema sem escala</text>
   </svg>
  </div>
  <div className="k-math-grid"><MathOutput label="Volume">{nice(result.volume,2)} cm³</MathOutput>
   <MathOutput label="Área total">{nice(result.area,2)} cm²</MathOutput></div>
  <div className="k-math-two-views">
   <div><strong>Vista superior</strong>{shape==='cylinder'||shape==='cone'?<span className="k-math-mini-circle"/>:<span className="k-math-mini-rectangle"/>}</div>
   <div><strong>Vista frontal</strong>{shape==='cone'?<span className="k-math-mini-triangle"/>:<span className="k-math-mini-rectangle"/>}</div>
  </div>
  <p className="k-math-tip">{shape==='cube'?'Cubo: V = a³ e A = 6a².':shape==='prism'?'Paralelepípedo: V = largura × altura × profundidade.':shape==='cylinder'?'Cilindro: V = πr²h, área total = 2πr(r + h).':'Cone circular reto: V = πr²h/3; a área total inclui base e superfície lateral.'} As vistas são ilustrativas e não preservam escala dimensional.</p>
 </MathStage>;
}