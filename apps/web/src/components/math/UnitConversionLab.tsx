'use client';
import {useState} from 'react';
import {convertMeasure,measureUnits,type MeasureDimension} from '@/lib/math-labs-extended';
import {MathRange,MathStage,MathOutput,nice} from './MathLabCommon';
const quantities:{value:MeasureDimension;label:string}[]=[
 {value:'length',label:'Comprimento'},{value:'mass',label:'Massa'},
 {value:'time',label:'Tempo'},{value:'capacity',label:'Capacidade'}
];
export default function UnitConversionLab(){
 const [dimension,setDimension]=useState<MeasureDimension>('length');
 const [value,setValue]=useState(2);
 const [from,setFrom]=useState('km'),[to,setTo]=useState('m');
 const units=Object.keys(measureUnits[dimension]);
 const converted=convertMeasure(dimension,value,from,to);
 const ratio=convertMeasure(dimension,1,from,to);
 function changeDimension(next:MeasureDimension){const options=Object.keys(measureUnits[next]);setDimension(next);setFrom(options[0]);setTo(options[options.length-1]);}
 return <MathStage title="Unidades do Sistema Internacional" description="Experimente conversões entre unidades de uma mesma grandeza e observe o fator multiplicativo.">
  <label className="k-math-select">Grandeza<select value={dimension} onChange={e=>changeDimension(e.target.value as MeasureDimension)}>
   {quantities.map(item=><option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
  <MathRange label={'Valor em '+from} min={0.5} max={100} step={0.5} value={value} onChange={setValue}/>
  <div className="k-math-unit-pair">
   <label className="k-math-select">De<select value={from} onChange={e=>setFrom(e.target.value)}>
    {units.map(unit=><option key={unit} value={unit}>{unit}</option>)}</select></label>
   <button type="button" className="k-math-action" onClick={()=>{setFrom(to);setTo(from);}} aria-label="Inverter origem e destino">⇄</button>
   <label className="k-math-select">Para<select value={to} onChange={e=>setTo(e.target.value)}>
    {units.map(unit=><option key={unit} value={unit}>{unit}</option>)}</select></label>
  </div>
  <div className="k-math-grid"><MathOutput label="Valor convertido">{nice(converted??NaN,8)} {to}</MathOutput>
   <MathOutput label="Uma unidade equivale a">{nice(ratio??NaN,8)} {to}</MathOutput></div>
  <p className="k-math-tip">Converta apenas unidades da mesma dimensão. Comprimento, massa, tempo e capacidade usam fatores próprios; uma mudança de unidade não altera a grandeza física.</p>
 </MathStage>;
}