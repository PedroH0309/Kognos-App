'use client';
import {useState} from 'react';
import {calculateScientific,scientificDecimal,type ScientificOperator} from '@/lib/math-labs';
import {MathStage,MathRange,MathOutput,nice} from './MathLabCommon';
const operations:{value:ScientificOperator;label:string}[]=[
 {value:'add',label:'Somar'},{value:'subtract',label:'Subtrair'},
 {value:'multiply',label:'Multiplicar'},{value:'divide',label:'Dividir'}
];
export default function ScientificNotationLab(){
 const [mantissa,setMantissa]=useState(3.2),[exponent,setExponent]=useState(5);
 const [otherMantissa,setOtherMantissa]=useState(4.5),[otherExponent,setOtherExponent]=useState(3);
 const [operator,setOperator]=useState<ScientificOperator>('add');
 const result=calculateScientific(mantissa,exponent,otherMantissa,otherExponent,operator);
 const opSymbol={add:'+',subtract:'−',multiply:'×',divide:'÷'}[operator];
 return <MathStage title="A · Notação científica" description="Mova a vírgula alterando o expoente. Depois combine duas potências de dez e observe o resultado.">
  <div className="k-math-controls"><MathRange label="Mantissa A" value={mantissa} min={1} max={9.9} step={0.1} onChange={setMantissa}/>
   <MathRange label="Expoente A" value={exponent} min={-9} max={9} onChange={setExponent}/></div>
  <div className="k-math-equality"><span>{nice(mantissa,1)} × 10<sup>{exponent}</sup></span><span aria-hidden="true">=</span><strong>{scientificDecimal(mantissa,exponent)}</strong></div>
  <p className="k-math-tip">Expoente {exponent>=0?'positivo: a vírgula se desloca para a direita':'negativo: a vírgula se desloca para a esquerda'} em {Math.abs(exponent)} posição(ões). A mantissa fica entre 1 e 10.</p>
  <h4>Operações com notação científica</h4>
  <div className="k-math-controls"><MathRange label="Mantissa B" value={otherMantissa} min={1} max={9.9} step={0.1} onChange={setOtherMantissa}/>
   <MathRange label="Expoente B" value={otherExponent} min={-9} max={9} onChange={setOtherExponent}/></div>
  <label className="k-math-select">Operação<select value={operator} onChange={e=>setOperator(e.target.value as ScientificOperator)}>
   {operations.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></label>
  <div className="k-math-equality k-math-equality-small"><span>{nice(mantissa,1)} × 10<sup>{exponent}</sup></span><span>{opSymbol}</span><span>{nice(otherMantissa,1)} × 10<sup>{otherExponent}</sup></span></div>
  <MathOutput label="Resultado decimal">{scientificDecimal(result.result,0)}</MathOutput>
  <MathOutput label="Resultado em notação científica">{result.scientific.replace('.',',').replace('e+',' × 10^').replace('e-',' × 10^-')}</MathOutput>
  <p className="k-math-tip">{operator==='multiply'?'Na multiplicação, multiplique as mantissas e some os expoentes.':operator==='divide'?'Na divisão, divida as mantissas e subtraia os expoentes.':'Na soma ou subtração, iguale os expoentes antes de operar as mantissas.'}</p>
 </MathStage>;
}