/** Pure, curriculum-scoped learning calculations. No scores or attempts are stored. */
export type MathLabKind =
 | 'scientific' | 'percentage' | 'equations' | 'functions'
 | 'geometry' | 'probability' | 'statistics' | 'trigonometry'
 | 'number-sets' | 'proportion' | 'sequences' | 'exponential-log'
 | 'combinatorics' | 'linear-systems' | 'solids' | 'unit-conversion'
 | 'periodic-waves';
export type MathTopic={subject:string;topic:string;description?:string;unit?:string};
const fold=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
/** Specific official topic phrases take priority over generic unit labels.
 * Never select a 2D geometry lab for 3D solids or a triangle lab for periodic waves. */
export function resolveMathLab({subject,topic,description='',unit=''}:MathTopic):MathLabKind|null{
 if(fold(subject).trim()!=='matematica')return null;
 const text=fold(topic+' '+description);
 const unitText=fold(unit);
 if(/notacao cientifica|potencias? de (base )?dez|ordens? de grandeza/.test(text))return 'scientific';
 if(/sistema internacional de medidas|convers(ao|oes) de unidades|unidades e conversoes/.test(text)||unitText==='sistemas de medidas')return 'unit-conversion';
 if(/poliedro|corpos redondos|volumes?|capacidade|vistas ortogonais|figura espacial|geometria espacial/.test(text)||unitText==='geometria espacial')return 'solids';
 if(/funcoes? seno e cosseno|fenomenos periodicos|medidas, relacoes entre arcos|arcos e angulos/.test(text))return 'periodic-waves';
 if(/trigonometri|seno|cosseno|tangente|relac(ao|oes) trigonometrica/.test(text))return 'trigonometry';
 if(/sequenc|progress(ao|oes) aritmet|progress(ao|oes) geometr|lei de recorrencia/.test(text))return 'sequences';
 if(/logaritm|exponencial/.test(text))return 'exponential-log';
 if(/sistemas? lineares|sistema de equacoes lineares|sistema linear/.test(text)||unitText==='sistemas lineares')return 'linear-systems';
 if(/probabilidade|espaco amostral|eventos aleatorios/.test(text)||unitText==='probabilidade')return 'probability';
 if(/arranjos?|permutac|combinac|analise combinatoria|principios? multiplicativo|problemas de contagem/.test(text)||unitText==='analise combinatoria')return 'combinatorics';
 if(/estatistic|media aritmetica|mediana|moda estatistica|medidas de tendencia central|variancia|desvio padrao|histograma|graficos? (de barras|de setores)|leitura de graficos|tabelas? e graficos/.test(text)||unitText==='tratamento da informacao')return 'statistics';
 if(/geometria|perimetro|areas? de figuras|circunferencia|poligono|quadrilatero|semelhanca de triangulos|teorema de pitagoras/.test(text))return 'geometry';
 if(/porcent|percentu|taxas? e indices|juros simples/.test(text))return 'percentage';
 if(/razoes?|proporc|regra de tres|relacao entre grandezas|densidade demografica|velocidade, densidade/.test(text))return 'proportion';
 if(/func(ao|oes)|graficos? de funcoes|dominio e imagem/.test(text)||unitText==='funcoes')return 'functions';
 if(/equac(ao|oes)|inequac|bhaskara/.test(text))return 'equations';
 if(/numeros? naturais?|conjuntos numericos|numeros? inteiros?|racionais? e reais|reta numerica/.test(text)||unitText==='conjuntos numericos')return 'number-sets';
 if(/graficos?|tabelas|dados quantitativos/.test(text))return 'statistics';
 return null;
}

const finite=(n:number)=>Number.isFinite(n);
export function scientificDecimal(mantissa:number,exponent:number):string{
 if(!finite(mantissa)||!Number.isInteger(exponent)||Math.abs(exponent)>18)return 'Valor fora do intervalo';
 if(mantissa===0)return '0';
 const sign=mantissa<0?'-':'';
 const raw=Math.abs(mantissa).toString();
 if(raw.includes('e'))return (mantissa*10**exponent).toLocaleString('pt-BR',{useGrouping:false,maximumFractionDigits:18});
 const [int,frac='']=raw.split('.');
 const digits=int+frac;
 const point=int.length+exponent;
 let decimal=point<=0?'0.'+'0'.repeat(-point)+digits:
  point>=digits.length?digits+'0'.repeat(point-digits.length):
  digits.slice(0,point)+'.'+digits.slice(point);
 decimal=decimal.replace(/^0+(?=\d)/,'').replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'');
 return sign+decimal.replace('.',',');
}
export type ScientificOperator='add'|'subtract'|'multiply'|'divide';
export function calculateScientific(a:number,ae:number,b:number,be:number,operator:ScientificOperator){
 const first=a*10**ae,second=b*10**be;
 const result=operator==='add'?first+second:operator==='subtract'?first-second:
  operator==='multiply'?first*second:second===0?NaN:first/second;
 const scientific=Number.isFinite(result)?result.toExponential(4):'Indefinido';
 return {first,second,result,scientific};
}
export function percentageScenario(amount:number,rate:number,mode:'discount'|'increase'){
 const difference=amount*rate/100;
 return {difference,total:mode==='discount'?amount-difference:amount+difference,
  fraction:rate/100};
}
export function solveLinear(a:number,b:number){
 if(!finite(a)||!finite(b)||a===0)return null;
 return {root:-b/a};
}
export function solveQuadratic(a:number,b:number,c:number){
 if(![a,b,c].every(finite)||a===0)return null;
 const discriminant=b*b-4*a*c;
 const roots=discriminant<0?[]:discriminant===0?[-b/(2*a)]:
  [(-b-Math.sqrt(discriminant))/(2*a),(-b+Math.sqrt(discriminant))/(2*a)].sort((x,y)=>x-y);
 return {discriminant,roots,vertexX:-b/(2*a),vertexY:c-b*b/(4*a)};
}
export function evaluatePolynomial(kind:'linear'|'quadratic',a:number,b:number,c:number,x:number){
 return kind==='linear'?a*x+b:a*x*x+b*x+c;
}
export type GeometricShape='rectangle'|'square'|'right-triangle'|'circle';
export function geometryMetrics(shape:GeometricShape,a:number,b:number){
 if(!finite(a)||!finite(b)||a<=0||b<=0)return {area:NaN,perimeter:NaN};
 if(shape==='square')return {area:a*a,perimeter:4*a};
 if(shape==='circle')return {area:Math.PI*a*a,perimeter:2*Math.PI*a};
 if(shape==='right-triangle')return {area:a*b/2,perimeter:a+b+Math.hypot(a,b)};
 return {area:a*b,perimeter:2*(a+b)};
}
export function probability(favorable:number,other:number){
 if(!Number.isInteger(favorable)||!Number.isInteger(other)||favorable<0||other<0||favorable+other===0)return null;
 return {fraction:favorable+'/'+(favorable+other),percent:100*favorable/(favorable+other)};
}
export function descriptiveStatistics(values:number[]){
 if(!values.length||values.length>100||values.some(v=>!finite(v)))return null;
 const sorted=[...values].sort((a,b)=>a-b);
 const count=sorted.length,mean=sorted.reduce((s,v)=>s+v,0)/count;
 const middle=Math.floor(count/2);
 const median=count%2?sorted[middle]:(sorted[middle-1]+sorted[middle])/2;
 const frequencies=new Map<number,number>();
 for(const value of sorted)frequencies.set(value,(frequencies.get(value)??0)+1);
 const highest=Math.max(...frequencies.values());
 const modes=highest===1?[]:[...frequencies.entries()].filter(([,times])=>times===highest).map(([value])=>value);
 const variance=sorted.reduce((s,v)=>s+(v-mean)**2,0)/count;
 return {count,mean,median,modes,range:sorted[count-1]-sorted[0],variance,standardDeviation:Math.sqrt(variance),sorted,frequencies:[...frequencies.entries()]};
}
export function trigTriangle(angle:number,hypotenuse:number){
 const radians=angle*Math.PI/180;
 const sin=Math.sin(radians),cos=Math.cos(radians);
 return {radians,sin,cos,tan:angle===90?null:Math.tan(radians),
  opposite:hypotenuse*sin,adjacent:hypotenuse*cos};
}
