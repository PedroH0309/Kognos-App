/** Smooth, shape-preserving cubic Bézier interpolation for a weekly area chart.
 * Data points are actual measured totals. A monotone interpolant avoids
 * inventing visually higher peaks, lower troughs, or negative counts.
 */
export type AreaChartPoint={x:number;y:number};
export type AreaChartPaths={line:string;area:string};

const fmt=(value:number)=>Number(value.toFixed(3)).toString();

export function weeklyAreaPaths(points:readonly AreaChartPoint[],baseline:number):AreaChartPaths{
 if(!Number.isFinite(baseline)||points.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y))){
  return {line:'',area:''};
 }
 if(points.length===0)return {line:'',area:''};
 if(points.length===1){
  const {x,y}=points[0];
  const line=`M ${fmt(x)} ${fmt(y)}`;
  return {line,area:`${line} L ${fmt(x)} ${fmt(baseline)} Z`};
 }
 const segments=points.slice(1).map((point,i)=>{
  const prev=points[i],dx=point.x-prev.x;
  return {dx,slope:(point.y-prev.y)/dx};
 });
 if(segments.some(s=>s.dx<=0))return {line:'',area:''};
 const tangents=points.map((_,i)=>{
  if(i===0)return segments[0].slope;
  if(i===points.length-1)return segments[segments.length-1].slope;
  const before=segments[i-1],after=segments[i];
  if(before.slope===0||after.slope===0||Math.sign(before.slope)!==Math.sign(after.slope))return 0;
  const w1=2*after.dx+before.dx,w2=after.dx+2*before.dx;
  return (w1+w2)/(w1/before.slope+w2/after.slope);
 });
 const first=points[0],last=points[points.length-1];
 let line=`M ${fmt(first.x)} ${fmt(first.y)}`;
 for(let i=0;i<segments.length;i++){
  const from=points[i],to=points[i+1],dx=segments[i].dx/3;
  line+=` C ${fmt(from.x+dx)} ${fmt(from.y+tangents[i]*dx)} ${fmt(to.x-dx)} ${fmt(to.y-tangents[i+1]*dx)} ${fmt(to.x)} ${fmt(to.y)}`;
 }
 return {line,area:`${line} L ${fmt(last.x)} ${fmt(baseline)} L ${fmt(first.x)} ${fmt(baseline)} Z`};
}
