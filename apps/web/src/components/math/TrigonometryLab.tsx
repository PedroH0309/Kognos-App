'use client';
import {useState} from 'react';
import {trigTriangle} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
export default function TrigonometryLab(){
 const [angle,setAngle]=useState(30),[hypotenuse,setHypotenuse]=useState(10);
 const data=trigTriangle(angle,hypotenuse);
 const ax=52,ay=218,bx=ax+175*data.cos,cy=ay-175*data.sin;
 return <MathStage title="H · Trigonometria" description="Mude o ângulo e a hipotenusa de um triângulo retângulo e compare catetos, seno, cosseno e tangente.">
  <div className="k-math-controls"><MathRange label="Ângulo θ (graus)" min={0} max={90} value={angle} onChange={setAngle} unit="°"/>
   <MathRange label="Hipotenusa (cm)" min={1} max={20} value={hypotenuse} onChange={setHypotenuse}/></div>
  <div className="k-math-geometry">
   <svg viewBox="0 0 310 255" role="img" aria-label={`Triângulo retângulo com ângulo ${angle} graus, cateto adjacente ${nice(data.adjacent)} cm e cateto oposto ${nice(data.opposite)} cm`}>
    <polygon points={`${ax},${ay} ${bx},${ay} ${bx},${cy}`} fill="#5B4DE321" stroke="#5B4DE3" strokeWidth="3"/>
    <line x1={ax} y1={ay} x2={bx} y2={ay} stroke="#38CDE5" strokeWidth="4"/>
    <line x1={bx} y1={ay} x2={bx} y2={cy} stroke="#F59E0B" strokeWidth="4"/>
    <text x={ax+22} y={ay-12} fontSize="13" fill="currentColor">{angle}°</text>
    <text x={ax+(bx-ax)/2} y={ay+19} textAnchor="middle" fontSize="11" fill="currentColor">adjacente</text>
    <text x={bx+8} y={(ay+cy)/2} fontSize="11" fill="currentColor">oposto</text>
    <text x={ax+(bx-ax)/2-22} y={(ay+cy)/2-12} fontSize="11" fill="currentColor">hipotenusa</text>
   </svg>
  </div>
  <div className="k-math-grid"><MathOutput label="Cateto oposto">{nice(data.opposite)} cm</MathOutput>
   <MathOutput label="Cateto adjacente">{nice(data.adjacent)} cm</MathOutput>
   <MathOutput label="sen(θ)">{nice(data.sin,4)}</MathOutput>
   <MathOutput label="cos(θ)">{nice(data.cos,4)}</MathOutput>
   <MathOutput label="tan(θ)">{data.tan===null?'Não definida':nice(data.tan,4)}</MathOutput>
   <MathOutput label="Radianos">{nice(data.radians,4)} rad</MathOutput></div>
  <p className="k-math-tip">sen θ = oposto / hipotenusa; cos θ = adjacente / hipotenusa; tan θ = oposto / adjacente. Em 90°, a tangente não existe. O desenho é esquemático, com proporções controladas pelo ângulo.</p>
 </MathStage>;
}