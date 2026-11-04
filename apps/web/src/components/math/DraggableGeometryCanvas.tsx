'use client';
import {useRef,type PointerEvent} from 'react';
import type {GeometricShape} from '@/lib/math-labs';

type Handle='a'|'b';
const clamp=(v:number)=>Math.max(1,Math.min(12,Math.round(v*2)/2));
export function shapeFromPointer(
 shape:GeometricShape,handle:Handle,x:number,y:number
):{dimension:'a'|'b';value:number}{
 if(handle==='b'&&shape!=='square'&&shape!=='circle')
  return {dimension:'b',value:clamp((210-y)/14)};
 if(shape==='circle')return {dimension:'a',value:clamp((x-170)/8)};
 if(shape==='right-triangle')return {dimension:'a',value:clamp((x-50)/18)};
 if(shape==='square')return {dimension:'a',value:clamp((x-50)/14)};
 return {dimension:'a',value:clamp((x-50)/18)};
}
/** The figure itself is draggable by touch or mouse.
 * Existing range controls remain an accessible keyboard alternative.
 */
export default function DraggableGeometryCanvas({shape,a,b,onA,onB}:{
 shape:GeometricShape;a:number;b:number;onA:(v:number)=>void;onB:(v:number)=>void;
}){
 const svgRef=useRef<SVGSVGElement|null>(null);
 const active=useRef<Handle|null>(null);
 const move=(e:PointerEvent<SVGSVGElement>)=>{
  if(active.current===null)return;
  const svg=svgRef.current,ctm=svg?.getScreenCTM();
  if(!svg||!ctm)return;
  const point=svg.createSVGPoint();point.x=e.clientX;point.y=e.clientY;
  const p=point.matrixTransform(ctm.inverse());
  const next=shapeFromPointer(shape,active.current,p.x,p.y);
  if(next.dimension==='a')onA(next.value);else onB(next.value);
 };
 const start=(e:PointerEvent<SVGCircleElement>,handle:Handle)=>{
  e.preventDefault();active.current=handle;
  svgRef.current?.setPointerCapture(e.pointerId);
 };
 const stop=(e:PointerEvent<SVGSVGElement>)=>{
  if(svgRef.current?.hasPointerCapture(e.pointerId))svgRef.current.releasePointerCapture(e.pointerId);
  active.current=null;
 };
 const rectSizeA=(shape==='square'?14:18)*a;
 const height=(shape==='square'?a:b)*14;
 const triX=50+18*a,triY=210-14*b;
 const mainHandle=shape==='circle'?{x:170+8*a,y:124}:
  shape==='right-triangle'?{x:triX,y:210}:{x:50+rectSizeA,y:210};
 const secondaryHandle=shape==='rectangle'?{x:50,y:210-height}:
  shape==='right-triangle'?{x:triX,y:triY}:null;
 const knob=(cx:number,cy:number,handle:Handle)=>(
  <circle cx={cx} cy={cy} r="10" fill="#38CDE5" stroke="#273A61" strokeWidth="2"
   className="k-drag-geometry-handle" onPointerDown={e=>start(e,handle)}>
   <title>{handle==='a'?'Arrastar para alterar dimensão horizontal ou raio':'Arrastar para alterar altura'}</title>
  </circle>);
 return <div className="k-drag-geometry-canvas">
  <svg ref={svgRef} viewBox="0 0 340 245" role="img"
   aria-label={'Figura geométrica ajustável: '+shape+', dimensão a '+a+' centímetros, dimensão b '+b+' centímetros. Arraste os pontos coloridos ou use os controles numéricos.'}
   onPointerMove={move} onPointerUp={stop} onPointerCancel={stop}>
   {Array.from({length:17},(_,i)=>i).map(i=><g key={i} opacity=".1" stroke="currentColor">
    <line x1={30+i*18} x2={30+i*18} y1="15" y2="225"/>
    <line x1="15" x2="325" y1={18+i*12} y2={18+i*12}/></g>)}
   {shape==='circle'?<>
    <circle cx="170" cy="124" r={8*a} fill="#5B4DE32A" stroke="#5B4DE3" strokeWidth="3"/>
    <line x1="170" y1="124" x2={170+8*a} y2="124" stroke="#38CDE5" strokeWidth="3"/>
    <circle cx="170" cy="124" r="3" fill="#273A61"/>
   </>:shape==='right-triangle'?<>
    <polygon points={'50,210 '+triX+',210 '+triX+','+triY} fill="#5B4DE32A" stroke="#5B4DE3" strokeWidth="3"/>
    <path d={'M '+(triX-12)+' 210 V 198 H '+triX} fill="none" stroke="#38CDE5" strokeWidth="2"/>
   </>:<>
    <rect x="50" y={210-height} width={rectSizeA} height={height}
     fill="#5B4DE32A" stroke="#5B4DE3" strokeWidth="3" rx="2"/>
   </>}
   {knob(mainHandle.x,mainHandle.y,'a')}
   {secondaryHandle&&knob(secondaryHandle.x,secondaryHandle.y,'b')}
   <g fill="currentColor" fontSize="11">
    <text x="11" y="240">Arraste os pontos cianos para alterar as medidas.</text>
   </g>
  </svg>
 </div>;
}
