'use client';
import {useState} from 'react';
import {geometryMetrics,type GeometricShape} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
const shapes:{value:GeometricShape;label:string}[]=[
 {value:'rectangle',label:'Retângulo'},{value:'square',label:'Quadrado'},
 {value:'right-triangle',label:'Triângulo retângulo'},{value:'circle',label:'Círculo'}
];
export default function GeometryWorkbench(){
 const [shape,setShape]=useState<GeometricShape>('rectangle'),[a,setA]=useState(4),[b,setB]=useState(3);
 const {area,perimeter}=geometryMetrics(shape,a,b);
 return <MathStage title="E · Geometria plana" description="Altere as medidas de figuras planas e compare área (superfície) e perímetro (contorno).">
  <label className="k-math-select">Figura<select value={shape} onChange={e=>setShape(e.target.value as GeometricShape)}>
   {shapes.map(item=><option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
  <div className="k-math-controls"><MathRange label={shape==='circle'?'Raio (cm)':shape==='right-triangle'?'Cateto 1 (cm)':'Lado / base (cm)'} min={1} max={12} value={a} onChange={setA}/>
   {(shape==='rectangle'||shape==='right-triangle')&&<MathRange label={shape==='rectangle'?'Altura (cm)':'Cateto 2 (cm)'} min={1} max={12} value={b} onChange={setB}/>}</div>
  <div className="k-math-geometry">
   <svg viewBox="0 0 320 200" role="img" aria-label={`Desenho esquemático de ${shapes.find(x=>x.value===shape)?.label}, medidas a=${a} e b=${b}`}>
    {shape==='circle'?<><circle cx="160" cy="100" r={a*6.2+14} fill="#5B4DE31F" stroke="#5B4DE3" strokeWidth="3"/><line x1="160" y1="100" x2={160+a*6.2+14} y2="100" stroke="#38CDE5" strokeWidth="3"/><text x="168" y="91" fill="currentColor" fontSize="12">r = {a} cm</text></>:
     shape==='right-triangle'?<><polygon points={`75,165 ${75+a*15},165 ${75+a*15},${165-b*12}`} fill="#5B4DE31F" stroke="#5B4DE3" strokeWidth="3" strokeLinejoin="round"/><path d={`M ${75+a*15-14} 165 V 151 H ${75+a*15}`} fill="none" stroke="#38CDE5" strokeWidth="2"/><text x="98" y="183" fill="currentColor" fontSize="12">{a} cm</text><text x={80+a*15} y={165-b*6} fill="currentColor" fontSize="12">{b} cm</text></>:
     <><rect x="60" y="28" width={a*17+20} height={(shape==='square'?a:b)*10+20} rx="3" fill="#5B4DE31F" stroke="#5B4DE3" strokeWidth="3"/><text x="70" y="20" fill="currentColor" fontSize="12">{a} cm</text><text x={a*17+88} y="48" fill="currentColor" fontSize="12">{shape==='square'?a:b} cm</text></>}
   </svg>
  </div>
  <div className="k-math-grid"><MathOutput label="Área">{nice(area,2)} cm²</MathOutput><MathOutput label="Perímetro">{nice(perimeter,2)} cm</MathOutput></div>
  <p className="k-math-tip">{shape==='rectangle'?'Retângulo: área = base × altura; perímetro = 2(base + altura).':shape==='square'?'Quadrado: área = lado²; perímetro = 4 × lado.':shape==='circle'?'Círculo: área = πr²; comprimento da circunferência = 2πr.':'Triângulo retângulo: área = cateto₁ × cateto₂ ÷ 2; o terceiro lado vem do teorema de Pitágoras.'}</p>
 </MathStage>;
}