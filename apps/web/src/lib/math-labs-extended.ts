/**
 * Mathematics Stage 2. Deterministic, client-only simulations with bounded input.
 * None of these helpers writes assessed attempts, grades or Supabase data.
 */

export type SequenceType='arithmetic'|'geometric';
export function sequenceModel(type:SequenceType,first:number,difference:number,count:number){
 if(!Number.isFinite(first)||!Number.isFinite(difference)||!Number.isInteger(count)||count<1||count>20)return null;
 const terms=Array.from({length:count},(_,i)=>type==='arithmetic'?first+i*difference:first*difference**i);
 if(terms.some(value=>!Number.isFinite(value)))return null;
 const sum=type==='arithmetic'?count*(2*first+(count-1)*difference)/2:
  difference===1?first*count:first*(1-difference**count)/(1-difference);
 return {terms,nth:terms[count-1],sum};
}

export type ProportionalityType='direct'|'inverse'|'quadratic';
export function proportionalityValue(type:ProportionalityType,constant:number,x:number):number|null{
 if(!Number.isFinite(constant)||!Number.isFinite(x)||(type==='inverse'&&x===0))return null;
 const result=type==='direct'?constant*x:type==='inverse'?constant/x:constant*x*x;
 return Number.isFinite(result)?result:null;
}

function validBase(base:number){return Number.isFinite(base)&&base>0&&base!==1;}
export function exponentialValue(base:number,exponent:number):number|null{
 if(!validBase(base)||!Number.isFinite(exponent))return null;
 const result=base**exponent;
 return Number.isFinite(result)?result:null;
}
export function logarithmValue(base:number,argument:number):number|null{
 if(!validBase(base)||!Number.isFinite(argument)||argument<=0)return null;
 const result=Math.log(argument)/Math.log(base);
 return Number.isFinite(result)?result:null;
}

export type CountingType='product'|'permutation'|'arrangement'|'combination';
function factorial(n:number):number{return Array.from({length:n},(_,i)=>i+1).reduce((result,v)=>result*v,1);}
export function countWays(type:CountingType,n:number,k:number):number|null{
 if(!Number.isInteger(n)||!Number.isInteger(k)||n<0||k<0||n>12||k>12)return null;
 if(type==='product')return n*k;
 if(type==='permutation')return factorial(n);
 if(k>n)return null;
 if(type==='arrangement')return factorial(n)/factorial(n-k);
 return Math.round(factorial(n)/(factorial(k)*factorial(n-k)));
}

export type LinearSystemResult={kind:'unique';x:number;y:number}|{kind:'parallel'|'coincident'};
/** a*x + b*y = c; d*x + e*y = f */
export function solveLinearSystem(a:number,b:number,c:number,d:number,e:number,f:number):LinearSystemResult{
 if(![a,b,c,d,e,f].every(Number.isFinite))return {kind:'parallel'};
 const det=a*e-b*d;
 if(Math.abs(det)>1e-10)return {kind:'unique',x:(c*e-b*f)/det,y:(a*f-c*d)/det};
 const same=Math.abs(a*f-c*d)<1e-10&&Math.abs(b*f-c*e)<1e-10;
 return {kind:same?'coincident':'parallel'};
}

export type SolidType='cube'|'prism'|'cylinder'|'cone';
export function solidMetrics(type:SolidType,a:number,b:number,c:number){
 if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||(type==='prism'&&c<=0))return {volume:NaN,area:NaN};
 if(type==='cube')return {volume:a**3,area:6*a*a};
 if(type==='prism')return {volume:a*b*c,area:2*(a*b+a*c+b*c)};
 if(type==='cylinder')return {volume:Math.PI*a*a*b,area:2*Math.PI*a*(a+b)};
 return {volume:Math.PI*a*a*b/3,area:Math.PI*a*(a+Math.hypot(a,b))};
}

export type MeasureDimension='length'|'mass'|'time'|'capacity';
export const measureUnits:Readonly<Record<MeasureDimension,Readonly<Record<string,number>>>>={
 length:{mm:0.001,cm:0.01,m:1,km:1000},
 mass:{mg:0.001,g:1,kg:1000},
 time:{s:1,min:60,h:3600},
 capacity:{mL:0.001,L:1}
};
export function convertMeasure(dimension:MeasureDimension,value:number,from:string,to:string):number|null{
 const units=measureUnits[dimension];
 if(!units||!Number.isFinite(value)||!Object.hasOwn(units,from)||!Object.hasOwn(units,to))return null;
 const result=value*units[from]/units[to];
 return Number.isFinite(result)?result:null;
}

export type PeriodicMode='sine'|'cosine';
export function periodicValue(mode:PeriodicMode,amplitude:number,period:number,phase:number,angle:number):number{
 if(![amplitude,period,phase,angle].every(Number.isFinite)||period<=0)return NaN;
 const radians=2*Math.PI*(angle-phase)/period;
 return amplitude*(mode==='sine'?Math.sin(radians):Math.cos(radians));
}

/** Only curated exact symbolic examples are classified. A decimal input alone is
 * not reliable proof of rationality vs. irrationality. */
export const numberSetExamples=[
 {label:'−3',value:-3,groups:['Inteiros','Racionais','Reais']},
 {label:'0',value:0,groups:['Naturais','Inteiros','Racionais','Reais']},
 {label:'4',value:4,groups:['Naturais','Inteiros','Racionais','Reais']},
 {label:'1/2',value:0.5,groups:['Racionais','Reais']},
 {label:'−2,75',value:-2.75,groups:['Racionais','Reais']},
 {label:'√2',value:Math.sqrt(2),groups:['Irracionais','Reais']},
 {label:'π',value:Math.PI,groups:['Irracionais','Reais']}
] as const;
