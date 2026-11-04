/** Deterministic and deliberately bounded educational models.
 * Calculations run locally and never represent an assessed Kognos attempt.
 * Selected experiments illustrate ONE part of an official syllabus item, not all its subtopics.
 */
export type ScienceKind='motion'|'waves'|'circuits'|'thermal'
 |'atom'|'stoichiometry'|'solutions'|'ph'
 |'genetics'|'trophic'|'population'|'cell-cycle';
export type ScienceTopic={subject:string;topic:string;description?:string;unit?:string};
const normalize=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function resolveScienceLab({subject,topic,description='',unit=''}:ScienceTopic):ScienceKind|null{
 const raw=normalize(topic+' '+description);
 const group=normalize(subject).trim();
 const chapter=normalize(unit);
 if(group==='fisica'){
  if(/escalas termometricas|celsius|fahrenheit|kelvin/.test(raw))return 'thermal';
  if(/resistores|lei de ohm|circuitos eletricos|corrente eletrica e intensidade|resistencia eletrica|potencia eletrica.*consumo/.test(raw))return 'circuits';
  if(/comprimento de onda|periodo e frequencia de uma onda|velocidade de propagacao.*onda|pulsos e ondas|ondas mecanicas e eletromagneticas|ondas sonoras/.test(raw))return 'waves';
  if(/velocidade e aceleracao|func(ao|oes) horaria|cinematica|movimentos uniformes|movimentos retilineos|queda livre|representacao grafica, em funcao do tempo/.test(raw)||chapter==='cinematica.')return 'motion';
 }
 if(group==='quimica'){
  if(/produto ionico da agua|escalas de ph|escala de ph|poh\b|indicadores.*neutralizacao/.test(raw))return 'ph';
  if(/operacoes envolvendo solucoes|diluic(ao|oes)|concentrac(ao|oes)|solucoes aquosas: conceito/.test(raw))return 'solutions';
  if(/calculos estequiometricos|aspectos quantitativos das transformacoes|lei de lavoisier|lei de proust|equacoes quimicas e balanceamento/.test(raw))return 'stoichiometry';
  if(/modelos atomicos|numero atomico|numero de massa|isotopos|estrutura do atomo|eletrosfera/.test(raw))return 'atom';
 }
 if(group==='biologia'){
  if(/divisoes celulares|mitose|meiose|ciclo celular/.test(raw))return 'cell-cycle';
  if(/1.? e 2.? lei de gregor mendel|mendelian|mendel|conceitos basicos de genetica/.test(raw))return 'genetics';
  if(/piramides ecologicas|pir(â|a)mides? de energia|niveis troficos/.test(raw))return 'trophic';
  if(/fatores que regulam o tamanho das populacoes|crescimento populacional|dinamica das populacoes/.test(raw))return 'population';
 }
 return null;
}
const valid=(...xs:number[])=>xs.every(Number.isFinite);
export function motionAt(initialVelocity:number,acceleration:number,time:number):{position:number;velocity:number}|null{
 if(!valid(initialVelocity,acceleration,time)||time<0)return null;
 return {position:initialVelocity*time+acceleration*time*time/2,velocity:initialVelocity+acceleration*time};
}
export function waveProperties(frequency:number,wavelength:number):{speed:number;period:number}|null{
 if(!valid(frequency,wavelength)||frequency<=0||wavelength<=0)return null;
 return {speed:frequency*wavelength,period:1/frequency};
}
export type ResistorMode='single'|'series'|'parallel';
export function circuitValues(voltage:number,resistance:number,mode:ResistorMode){
 if(!valid(voltage,resistance)||voltage<0||resistance<=0)return null;
 const equivalentResistance=mode==='series'?2*resistance:mode==='parallel'?resistance/2:resistance;
 const current=voltage/equivalentResistance;
 return {equivalentResistance,current,power:voltage*current};
}
export function temperatureScales(celsius:number):{celsius:number;fahrenheit:number;kelvin:number}|null{
 if(!valid(celsius)||celsius< -273.15)return null;
 return {celsius,fahrenheit:celsius*9/5+32,kelvin:celsius+273.15};
}
export function atomModel(atomicNumber:number,neutrons:number,charge:number){
 if(![atomicNumber,neutrons,charge].every(Number.isInteger)||atomicNumber<1||atomicNumber>20||neutrons<0||neutrons>30)return null;
 const electrons=atomicNumber-charge;
 if(electrons<0||electrons>25)return null;
 return {protons:atomicNumber,neutrons,electrons,massNumber:atomicNumber+neutrons,charge};
}
/** Paper-only reaction 2 H2 + O2 -> 2 H2O, mol conservation with limiting reagent. */
export function waterStoichiometry(hydrogenMoles:number,oxygenMoles:number){
 if(!valid(hydrogenMoles,oxygenMoles)||hydrogenMoles<0||oxygenMoles<0)return null;
 const extent=Math.min(hydrogenMoles/2,oxygenMoles);
 return {waterMoles:2*extent,hydrogenRemaining:hydrogenMoles-2*extent,oxygenRemaining:oxygenMoles-extent};
}
export function dilutionModel(initialMolarity:number,initialVolumeMl:number,finalVolumeMl:number){
 if(!valid(initialMolarity,initialVolumeMl,finalVolumeMl)||initialMolarity<0||
 initialVolumeMl<=0||finalVolumeMl<initialVolumeMl)return null;
 return {soluteMillimoles:initialMolarity*initialVolumeMl,
 finalMolarity:initialMolarity*initialVolumeMl/finalVolumeMl};
}
/** pH+pOH=14 is the conventional dilute-solution approximation at 25 °C. */
export function phProperties(hydrogenConcentration:number){
 if(!valid(hydrogenConcentration)||hydrogenConcentration<=0)return null;
 const ph=-Math.log10(hydrogenConcentration);
 return {ph,poh:14-ph};
}
export type MendelianGenotype='AA'|'Aa'|'aa';
export function punnettCross(parentA:string,parentB:string):
 {cells:MendelianGenotype[];genotypes:Record<MendelianGenotype,number>;dominantFraction:number}|null{
 const validParent=(v:string):v is MendelianGenotype=>v==='AA'||v==='Aa'||v==='aa';
 if(!validParent(parentA)||!validParent(parentB))return null;
 const cells:MendelianGenotype[]=[];
 const counts:Record<MendelianGenotype,number>={AA:0,Aa:0,aa:0};
 for(const a of parentA)for(const b of parentB){
  const result=(a+b).split('').sort((x,y)=>x==='A'?-1:y==='A'?1:0).join('') as MendelianGenotype;
  cells.push(result);counts[result]+=1;
 }
 return {cells,genotypes:counts,dominantFraction:(counts.AA+counts.Aa)/4};
}
export function logisticPopulation(initial:number,capacity:number,rate:number,time:number):number|null{
 if(!valid(initial,capacity,rate,time)||initial<=0||capacity<=0||initial>capacity||rate<0||time<0)return null;
 const result=capacity/(1+(capacity-initial)/initial*Math.exp(-rate*time));
 return Number.isFinite(result)?result:null;
}
export function trophicEnergy(producers:number,transferPercent:number):number[]|null{
 if(!valid(producers,transferPercent)||producers<=0||transferPercent<=0||transferPercent>100)return null;
 return Array.from({length:4},(_,i)=>producers*(transferPercent/100)**i);
}
export type CellStage='G1'|'S'|'G2'|'M';
export function cellCyclePhase(stage:CellStage):{label:string;dnaContent:string;description:string}{
 const phases:Record<CellStage,{label:string;dnaContent:string;description:string}>={
 G1:{label:'G1 — crescimento',dnaContent:'2C',description:'A célula cresce e executa suas funções antes de duplicar o DNA.'},
 S:{label:'S — síntese de DNA',dnaContent:'2C → 4C',description:'O DNA é replicado. A quantidade de DNA aumenta, sem dobrar o número de cromossomos.'},
 G2:{label:'G2 — preparação',dnaContent:'4C',description:'A célula verifica o DNA replicado e prepara os componentes necessários à divisão.'},
 M:{label:'Mitose e citocinese',dnaContent:'4C → 2C por célula-filha',description:'Os cromossomos duplicados são segregados; após a divisão, cada célula-filha recebe a quantidade inicial de DNA.'}
 };
 return phases[stage];
}
