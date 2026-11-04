'use client';
import {useState} from 'react';
import {geometryMetrics,type GeometricShape} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
import DraggableGeometryCanvas from './DraggableGeometryCanvas';
const shapes:{value:GeometricShape;label:string}[]=[
 {value:'rectangle',label:'Retângulo'},{value:'square',label:'Quadrado'},
 {value:'right-triangle',label:'Triângulo retângulo'},{value:'circle',label:'Círculo'}
];
export default function GeometryWorkbench(){
 const [shape,setShape]=useState<GeometricShape>('rectangle'),[a,setA]=useState(4),[b,setB]=useState(3);
 const {area,perimeter}=geometryMetrics(shape,a,b);
 return <MathStage title="E · Geometria plana" description="Arraste os pontos cianos da própria figura ou ajuste as medidas. Compare área (superfície) e perímetro (contorno) em tempo real.">
  <label className="k-math-select">Figura<select value={shape} onChange={e=>setShape(e.target.value as GeometricShape)}>
   {shapes.map(item=><option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
  <div className="k-math-controls"><MathRange label={shape==='circle'?'Raio (cm)':shape==='right-triangle'?'Cateto 1 (cm)':'Lado / base (cm)'} min={1} max={12} value={a} onChange={setA}/>
   {(shape==='rectangle'||shape==='right-triangle')&&<MathRange label={shape==='rectangle'?'Altura (cm)':'Cateto 2 (cm)'} min={1} max={12} value={b} onChange={setB}/>}</div>
  <DraggableGeometryCanvas shape={shape} a={a} b={b} onA={setA} onB={setB}/>
  <div className="k-math-grid"><MathOutput label="Área">{nice(area,2)} cm²</MathOutput><MathOutput label="Perímetro">{nice(perimeter,2)} cm</MathOutput></div>
  <p className="k-math-tip">{shape==='rectangle'?'Retângulo: área = base × altura; perímetro = 2(base + altura).':shape==='square'?'Quadrado: área = lado²; perímetro = 4 × lado.':shape==='circle'?'Círculo: área = πr²; comprimento da circunferência = 2πr.':'Triângulo retângulo: área = cateto₁ × cateto₂ ÷ 2; o terceiro lado vem do teorema de Pitágoras.'}</p>
 </MathStage>;
}