'use client';
import {useState,type KeyboardEvent,type ReactNode} from 'react';
import {cellKinds,cellParts,parts,cellPartAvailable,type CellPart,type CellType} from '@/lib/visual-study-models';
import {ScienceStage} from './ScienceLabCommon';

export default function CellAnatomyLab(){
 const [type,setType]=useState<CellType>('animal');
 const [selected,setSelected]=useState<CellPart>('nucleus');
 const [zoom,setZoom]=useState(100);
 const [showLabels,setShowLabels]=useState(true);
 const available=cellParts[type];
 const focus=(part:CellPart)=>{if(cellPartAvailable(type,part))setSelected(part);};
 const onKey=(event:KeyboardEvent<SVGGElement>,part:CellPart)=>{
  if(event.key==='Enter'||event.key===' '){event.preventDefault();focus(part);}
 };
 const active=cellPartAvailable(type,selected)?selected:available[0];
 const fill=(part:CellPart,base:string)=>active===part?'#f4cb67':base;
 const typeChange=(next:CellType)=>{setType(next);setSelected(next==='prokaryote'?'dna':'nucleus');};
 function target(part:CellPart,child:ReactNode){
  return <g role="button" tabIndex={0} aria-label={'Selecionar '+parts[part].label}
   onClick={()=>focus(part)} onKeyDown={event=>onKey(event,part)}
   style={{cursor:'pointer'}}>{child}<title>{parts[part].label}</title></g>;
 }
 const scale=zoom/100;
 return <ScienceStage subject="Biologia" title="Célula interativa: estruturas e funções"
  description="Toque nas estruturas para inspecionar sua função. Compare células animal, vegetal e procarionte e amplie o esquema.">
  <div className="k-cell-controls" role="group" aria-label="Tipo de célula">
   {cellKinds.map(item=><button key={item.id} type="button" aria-pressed={type===item.id}
    onClick={()=>typeChange(item.id)}>{item.label}</button>)}
  </div>
  <div className="k-cell-canvas">
   <svg viewBox="0 0 360 270" role="group" aria-label={'Diagrama simplificado de '+cellKinds.find(x=>x.id===type)?.label}>
    <g transform={'translate(180 136) scale('+scale+') translate(-180 -136)'}>
     {type==='plant'&&target('wall',<rect x="30" y="28" width="300" height="215" rx="29"
      fill={fill('wall','#b8db98')} stroke="#4b9a64" strokeWidth="7"/>)}
     {target('membrane',type==='plant'?<rect x="43" y="41" width="274" height="189" rx="23"
      fill={fill('membrane','#e6f4df')} stroke="#61a9ad" strokeWidth="4"/>:
      <ellipse cx="180" cy="134" rx={type==='animal'?146:135} ry={type==='animal'?102:78}
      fill={fill('membrane',type==='animal'?'#e1ecfc':'#e8f0db')}
      stroke="#5B4DE3" strokeWidth="4"/>)}
     {target('cytoplasm',<ellipse cx="180" cy="136" rx={type==='animal'?120:type==='plant'?123:111}
      ry={type==='animal'?82:type==='plant'?76:62} fill={fill('cytoplasm','#abd4ee')}
      opacity={type==='plant'?.48:.64} stroke="#70b8d3" strokeWidth="1.5"/>)}
     {type==='plant'&&target('vacuole',<ellipse cx="216" cy="150" rx="73" ry="52"
      fill={fill('vacuole','#b9d6f5')} stroke="#5686be" strokeWidth="3"/>)}
     {type!=='prokaryote'&&target('nucleus',<g>
      <circle cx={type==='plant'?112:171} cy="126" r="35"
       fill={fill('nucleus','#b8a6ef')} stroke="#6750ae" strokeWidth="3"/>
      <circle cx={type==='plant'?112:171} cy="126" r="11" fill="#6c59a9"/>
     </g>)}
     {type!=='prokaryote'&&target('mitochondria',<g>
      <ellipse cx={type==='plant'?265:252} cy={type==='plant'?87:155} rx="30" ry="14"
       transform={type==='plant'?'rotate(-20 265 87)':'rotate(-22 252 155)'}
       fill={fill('mitochondria','#f8a78e')} stroke="#b85c58" strokeWidth="2"/>
      <path d={type==='plant'?'M244 93 q7 -18 15 0 t17 -6':'M233 162 q6 -18 13 -3 t18 -7'}
       fill="none" stroke="#b85c58" strokeWidth="2"/>
     </g>)}
     {type==='plant'&&target('chloroplast',<g>
      <ellipse cx="269" cy="198" rx="29" ry="15" fill={fill('chloroplast','#88c980')} stroke="#388653" strokeWidth="2"/>
      <path d="M248 194 h43 M248 201 h43 M251 188 h34" stroke="#388653" strokeWidth="2"/>
      <ellipse cx="260" cy="61" rx="21" ry="10" fill={fill('chloroplast','#88c980')} stroke="#388653" strokeWidth="2"/>
     </g>)}
     {type==='prokaryote'&&target('dna',<g>
      <path d="M123 132 C147 90 172 176 203 118 S245 146 227 159" fill="none"
       stroke={active==='dna'?'#f4cb67':'#8b63b7'} strokeWidth="6" strokeLinecap="round"/>
      <path d="M140 150 Q161 130 183 154 T230 143" fill="none" stroke="#64519d" strokeWidth="3"/>
     </g>)}
     {target('ribosomes',<g fill={fill('ribosomes','#536ac4')} stroke="#34488a" strokeWidth="1">
      {[[114,94],[130,174],[202,187],[223,89],[269,127],[99,152],[178,71]].map(([cx,cy],i)=>
       <circle key={i} cx={cx} cy={cy} r={type==='prokaryote'?5:4.2}/>)}
     </g>)}
    </g>
    {showLabels&&<g fill="#263858" fontSize="12" fontWeight="700">
     <text x="12" y="18">{cellKinds.find(x=>x.id===type)?.label}</text>
     <text x="12" y="259">Esquema ilustrativo, sem escala</text>
    </g>}
   </svg>
  </div>
  <div className="k-cell-tools">
   <label>Ampliação <strong>{zoom}%</strong><input type="range" min="80" max="120" step="10" value={zoom}
    onChange={e=>setZoom(Number(e.target.value))}/></label>
   <label className="k-cell-label-toggle"><input type="checkbox" checked={showLabels}
    onChange={e=>setShowLabels(e.target.checked)}/> Mostrar rótulos</label>
  </div>
  <div className="k-cell-parts" role="group" aria-label="Selecionar estrutura celular">
   {available.map(part=><button key={part} type="button" aria-pressed={active===part}
    onClick={()=>focus(part)}>{parts[part].label}</button>)}
  </div>
  <div className="k-cell-description" role="status" aria-live="polite">
   <span>ESTRUTURA SELECIONADA</span><h4>{parts[active].label}</h4>
   <p>{parts[active].function}</p>
  </div>
  <p className="k-science-note">Representação pedagógica simplificada. A célula vegetal possui parede e plastídios, enquanto a animal não apresenta essas estruturas; células procariontes não têm núcleo delimitado por membrana. Não mostra número, dimensões ou distribuição reais de organelas.</p>
 </ScienceStage>;
}
