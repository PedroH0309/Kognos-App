import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {authoredCurriculumSpecs,authoredCurriculumReviewRecords,deepAuthoredCurriculumLesson} from './authored-curriculum-lessons.ts';
import {authoredLessonQualityIssues} from './authored-lesson-quality.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {parseCourseDocument} from './course-content.ts';
import {canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {starterLesson} from './starter-lessons.ts';

test('novas aulas cumprem o contrato comum e mantêm revisão humana pendente',()=>{
 assert.ok(authoredCurriculumSpecs.length>0);
 for(const spec of authoredCurriculumSpecs){
  assert.deepEqual(authoredLessonQualityIssues(spec),[],spec.topic);
  const topic=curriculumTopics.find(t=>t.subject===spec.subject&&t.topic===spec.topic);
  assert.ok(topic);
  const lesson=deepAuthoredCurriculumLesson(topic);
  assert.ok(lesson&&parseCourseDocument(lesson));
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.review,'introductory');
  assert.match(lesson.authorship,/assistência de IA.*revisão pedagógica humana pendente.*sem homologação docente/);
  assert.match(lesson.license,/autoral.*não oficial/);
 }
});

test('registro de conferência identifica o texto final sem alegar homologação docente',()=>{
 for(const spec of authoredCurriculumSpecs){
  const digest=createHash('sha256').update(JSON.stringify(spec)).digest('hex');
  const record=authoredCurriculumReviewRecords.find(row=>row.subject===spec.subject&&row.topic===spec.topic);
  assert.ok(record);
  assert.equal(record.contentSha256,digest,'edições posteriores exigem nova conferência');
  assert.equal(record.humanPedagogicalReview,'pending');
  assert.equal(record.questionChecks.length,3);
  assert.ok(record.questionChecks.every(check=>check.reasoning.length>=80));
  assert.ok(record.questionChecks.every((check,index)=>check.index===index&&check.correctIndex===spec.tasks[index].correctIndex));
  const topic=curriculumTopics.find(t=>t.subject===spec.subject&&t.topic===spec.topic)!;
  const lesson=deepAuthoredCurriculumLesson(topic)!;
  assert.ok(record.verifiedSourceUrls.every(url=>lesson.sourceUrls.includes(url)));
 }
});

test('fonte única chega à API somente para IDs e escopos registrados',()=>{
 for(const spec of authoredCurriculumSpecs){
  const topic=curriculumTopics.find(t=>t.subject===spec.subject&&t.topic===spec.topic)!;
  const expected=topic.exams.map(exam=>canonicalLessonForExam(exam,topic)).find(Boolean);
  assert.ok(expected);
  assert.deepEqual(starterLesson(topic).sections,spec.sections);
  assert.deepEqual(starterLesson(topic).tasks,spec.tasks);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const actual=canonicalLessonForExam(exam,topic);
   if(examBlueprints[exam].subjects[spec.subject]?.includes(spec.topic))assert.strictEqual(actual,expected);
   else assert.equal(actual,null);
  }
  assert.equal(deepAuthoredCurriculumLesson({...topic,id:'course-forged'}),null);
  assert.equal(deepAuthoredCurriculumLesson({...topic,topic:topic.topic+' outro'}),null);
 }
});

test('porcentagens e juros são conferidos por cálculo, incluindo os três distratores compostos',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Porcentagem e razão');
 assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 assert.equal(choice(0),`${800*(1-.35-.25)} eleitores`);
 const money=(value:number)=>value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}).replace(/\u00a0/g,' ');
 assert.equal(choice(1),'Lucro de '+money(4000*1.4*.85-4000));
 const capital=24000,first=capital*3/8,second=capital*5/8;
 assert.equal(choice(2),money(first*1.012**4+second*(1+.015*4)));
 assert.deepEqual(spec.tasks[2].options,[
  money(first*(1+.012*4)+second*(1+.015*4)),
  money(first*1.012**4+second*1.015**4),
  money(first*1.012**4+second*(1+.015*4)),
  money(second*1.012**4+first*(1+.015*4))
 ]);
});

test('textos de interpretação são hipóteses autorais, sem atribuir dados a instituições reais',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Português'&&lesson.topic==='Interpretação de textos');
 assert.ok(spec);
 for(const task of spec.tasks)assert.match(task.prompt,/autoral hipotétic[ao]/);
 assert.doesNotMatch(JSON.stringify(spec),/Sinase|segundo especialistas|Machado de Assis/);
});

test('gabaritos de movimento e forças respeitam atrito, massas ligadas e projeção da normal',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Movimento e forças');
 assert.ok(spec);
 const format=(value:number,places:number)=>value.toLocaleString('pt-BR',{minimumFractionDigits:places,maximumFractionDigits:places});
 const expected=[format((18-.25*3*9.8)/3,2)+' m/s²',format((6*9.8-.2*4*9.8)/(4+6),2)+' m/s²',format(Math.sqrt(9.8*80*.2679),1)+' m/s'];
 spec.tasks.forEach((task,index)=>{assert.ok(task.options&&typeof task.correctIndex==='number');assert.equal(task.options[task.correctIndex],expected[index]);});
 assert.match(spec.tasks[0].prompt,/já desliza/);
 assert.match(spec.tasks[1].prompt,/polia fixa ideal/);
 assert.match(spec.tasks[2].prompt,/Não há atrito/);
});

test('estrutura atômica conserva prótons/elétrons e calcula energia e comprimento de onda',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Estrutura atômica');
 assert.ok(spec);
 const choice=(i:number)=>{const t=spec.tasks[i];assert.ok(t.options&&typeof t.correctIndex==='number');return t.options[t.correctIndex];};
 assert.equal(17+18,35);assert.equal(choice(0),'³⁵₁₇Cl');
 assert.equal(26-3,18+5);assert.equal(choice(1),'[Ar]3d⁵');
 const energy=13.6*3**2*(1/2**2-1/4**2);
 assert.equal(energy,22.95);
 const wavelength=1240/energy;
 assert.equal(choice(2),wavelength.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})+' nm');
 assert.match(spec.tasks[2].prompt,/um elétron/);
});

test('citologia distingue fluxo osmótico de soluto e conserva cromossomos na mitose',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Citologia');
 assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const concentrations=[...task.prompt.matchAll(/(\d+) g\/L/g)].map(match=>Number(match[1]));
 assert.equal(concentrations.length,2);
 const [outside,inside]=concentrations;
 const expectedFlow=inside>outside?'Entrada líquida de água':'Saída líquida de água';
 assert.ok(task.options[task.correctIndex].startsWith(expectedFlow));
 const division=spec.tasks[2];assert.ok(division.options&&typeof division.correctIndex==='number');
 const chromosomes=Number(division.prompt.match(/2n = (\d+)/)?.[1]);
 assert.ok(Number.isFinite(chromosomes)&&chromosomes>0);
 const chromatids=2*chromosomes,daughterChromosomes=chromatids/2;
 const words:Record<number,string>={6:'seis',12:'doze'};
 assert.equal(division.options[division.correctIndex],`Metáfase com ${words[chromosomes]} cromossomos e ${words[chromatids]} cromátides; cada filha com ${words[daughterChromosomes]} cromossomos não duplicados`);
 assert.equal(daughterChromosomes,chromosomes);
 assert.doesNotMatch(spec.sections.map(section=>section.explanation).join(' '),/polimerase δ.*exonuclease 5/);
});

test('cartografia calcula escala e distingue frequência municipal de população',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Cartografia');
 assert.ok(spec);
 const basic=spec.tasks[0];assert.ok(basic.options&&typeof basic.correctIndex==='number');
 const denominator=Number(basic.prompt.match(/1:([\d.]+)/)?.[1].replaceAll('.',''));
 const centimeters=Number(basic.prompt.match(/([\d,]+) cm/)?.[1].replace(',','.'));
 assert.ok(Number.isFinite(denominator)&&Number.isFinite(centimeters));
 const kilometers=centimeters*denominator/100000;
 assert.equal(basic.options[basic.correctIndex],kilometers.toLocaleString('pt-BR')+' km');
 const advanced=spec.tasks[2];assert.ok(advanced.options&&typeof advanced.correctIndex==='number');
 const count=Number(advanced.prompt.match(/(\d+) municípios/)?.[1]);
 const perGroup=Number(advanced.prompt.match(/grupos de (\d+)/)?.[1]);
 assert.ok(Number.isFinite(count)&&Number.isFinite(perGroup));
 assert.match(advanced.options[advanced.correctIndex],new RegExp(`${100*perGroup/count}% dos municípios`));
 // Equal counts do not imply equal population shares or equal value intervals.
 const populations=[1000,2000,3000,4000,5000],values=[1,2,3,10,80];
 assert.notEqual(100*populations.at(-1)!/populations.reduce((a,b)=>a+b,0),100/populations.length);
 assert.notEqual(values[1]-values[0],values[4]-values[3]);
});

test('separação de misturas conserva massa e inclui solvente adicionado no filtrado',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Ciências'&&lesson.topic==='Matéria, substâncias e misturas');
 assert.ok(spec);
 const task=spec.tasks[2];assert.ok(task.options&&typeof task.correctIndex==='number');
 const mass=(name:string)=>Number(task.prompt.match(new RegExp(`(\\d+) g de ${name}`))?.[1]);
 const iron=mass('ferro'),sand=mass('areia'),salt=mass('sal'),water=mass('água');
 assert.ok([iron,sand,salt,water].every(value=>Number.isFinite(value)&&value>0));
 const initial=iron+sand+salt+water,filtrate=initial-iron-sand;
 assert.equal(filtrate,salt+water);
 assert.ok(task.options[task.correctIndex].startsWith(`${filtrate} g,`));
 assert.match(task.prompt,/suficientes para dissolver todo o sal/);
 assert.match(task.prompt,/ausência de reações e de perdas/);
});

test('funções e gráficos conferem imagens, inclinação perpendicular e intervalo de lucro',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Funções e gráficos');
 assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const f=(x:number)=>4*x-7;
 assert.equal(choice(0),`f(2) = ${f(2)} e intercepto y em (0; ${String(f(0)).replace('-','−')})`);
 const slope=(-3-3)/(4-1),fraction=choice(1).split('/').map(Number),perpendicular=fraction.length===2?fraction[0]/fraction[1]:fraction[0];
 assert.equal(slope*perpendicular,-1);
 const a=-1,b=10,c=-16,delta=b*b-4*a*c;
 const roots=[(-b-Math.sqrt(delta))/(2*a),(-b+Math.sqrt(delta))/(2*a)].sort((left,right)=>left-right);
 assert.equal(choice(2),`${roots[0]} < x < ${roots[1]}`);
 const profit=(x:number)=>a*x*x+b*x+c;
 assert.equal(profit(roots[0]),0);assert.equal(profit(roots[1]),0);
 assert.ok(profit((roots[0]+roots[1])/2)>0);
 assert.ok(profit(0)<0&&profit(10)<0);
});

test('trabalho e energia conferem atrito, altura e balanço de mola com dissipação',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Trabalho e energia');
 assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const format=(value:number,places?:number)=>value.toLocaleString('pt-BR',places===undefined?{}:{minimumFractionDigits:places,maximumFractionDigits:places});
 assert.equal(choice(0),format(-.25*3*10*5).replace('-','−')+' J');
 assert.equal(choice(1),format(15**2/(2*10))+' m');
 const task=spec.tasks[2],number=(pattern:RegExp)=>Number(task.prompt.match(pattern)?.[1].replace(',','.'));
 const mass=number(/(\d+) kg/),speed=number(/(\d+) m\/s/),coefficient=number(/coeficiente ([\d,]+)/),spring=number(/k = (\d+) N\/m/),gravity=number(/g = (\d+) m\/s²/);
 assert.ok([mass,speed,coefficient,spring,gravity].every(value=>Number.isFinite(value)&&value>0));
 const friction=coefficient*mass*gravity,initial=mass*speed**2/2;
 const compression=(-friction+Math.sqrt(friction**2+spring*mass*speed**2))/spring;
 const duration=number(/em (\d+) s,/),efficiency=number(/rendimento de (\d+)%/)/100;
 assert.ok(duration>0&&efficiency>0&&efficiency<=1);
 const inputPower=initial/efficiency/duration;
 assert.equal(choice(2),format(compression,2)+' m e '+format(inputPower)+' W');
 assert.ok(Math.abs(spring*compression**2/2+friction*compression-initial)<1e-9);
 assert.ok(task.options&&typeof task.correctIndex==='number');
 task.options.forEach((option,index)=>{
  if(index===task.correctIndex)return;
  const values=option.match(/^([\d,]+) m e ([\d,]+) W$/);assert.ok(values);
  const x=Number(values[1].replace(',','.')),power=Number(values[2].replace(',','.'));
  assert.ok(Math.abs(spring*x*x/2+friction*x-initial)>1||Math.abs(power-inputPower)>1e-9);
 });
});

test('genética calcula expectativa, condicionamento e mapa de três pontos sem confundir extremos',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Genética e hereditariedade');
 assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const cross=(left:string[],right:string[])=>left.flatMap(a=>right.map(b=>a+b));
 const offspring=cross(['R','r'],['r']);
 assert.equal(choice(0),String(120*offspring.filter(genotype=>genotype==='rr').length/offspring.length));
 const eligible=cross(['A','a'],['A','a']).filter(genotype=>genotype.includes('A'));
 const heterozygous=eligible.filter(genotype=>genotype.includes('a'));
 assert.equal(choice(1),`${heterozygous.length}/${eligible.length}`);
 const classes=[...spec.tasks[2].prompt.matchAll(/([Aa][Bb][Cc]): (\d+)/g)].map(match=>({gamete:match[1],count:Number(match[2])}));
 assert.equal(classes.length,8);
 const total=classes.reduce((sum,row)=>sum+row.count,0);
 const ranked=classes.toSorted((a,b)=>b.count-a.count),parental=ranked[0].gamete,double=ranked.at(-2)!.gamete;
 const changed=[...parental].flatMap((allele,index)=>allele!==double[index]?[index]:[]);
 assert.deepEqual(changed,[1]);
 const frequency=(left:number,right:number)=>100*classes.filter(row=>(row.gamete[left]===row.gamete[left].toUpperCase())!==(row.gamete[right]===row.gamete[right].toUpperCase())).reduce((sum,row)=>sum+row.count,0)/total;
 const first=frequency(0,1),second=frequency(1,2);
 assert.equal(choice(2),`A–B–C; A–B = ${first} cM e B–C = ${second} cM`);
 assert.equal(frequency(0,2),28);
 assert.equal(first+second,32);
 assert.ok(frequency(0,2)<first+second,'eventos duplos não aparecem como recombinantes dos marcadores externos');
});

test('clima distingue amplitude mensal, extremos diários e parcela de chuva da parcela de dias',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Clima e ambiente');
 assert.ok(spec);
 const amplitude=spec.tasks[0],rain=spec.tasks[1];
 assert.ok(amplitude.options&&typeof amplitude.correctIndex==='number');
 const values=[...amplitude.prompt.matchAll(/(\d+) °C/g)].map(match=>Number(match[1]));
 assert.equal(values.length,4);
 assert.ok(amplitude.options[amplitude.correctIndex].startsWith(`${values[0]-values[1]} °C,`));
 assert.notEqual(values[0]-values[1],values[2]-values[3]);
 assert.ok(rain.options&&typeof rain.correctIndex==='number');
 const amounts=[...rain.prompt.matchAll(/(\d+) mm/g)].map(match=>Number(match[1]));
 assert.equal(amounts.length,2);
 const fraction=100*amounts[0]/amounts.reduce((sum,value)=>sum+value,0);
 assert.ok(rain.options[rain.correctIndex].includes(fraction.toFixed(1).replace('.',',')+'%'));
 assert.notEqual(fraction,100*6/31);
 assert.match(rain.solution,/210\/200 × 100 = 105%/);
});

test('mais-valia separa valor transferido, valor novo e denominador da taxa',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Sociologia'&&lesson.topic==='Durkheim, Marx e Weber');assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const number=(pattern:RegExp)=>Number(task.prompt.match(pattern)?.[1]);
 const constant=number(/é (\d+) unidades/),created=number(/criado é (\d+)/),variable=number(/(\d+) correspondem/);
 assert.ok([constant,created,variable].every(value=>Number.isFinite(value)&&value>0));
 const surplus=created-variable,rate=100*surplus/variable;
 assert.equal(task.options[task.correctIndex],`Mais-valia de ${surplus} unidades; taxa de mais-valia de ${rate}%.`);
 assert.notEqual(rate,100*surplus/(constant+variable));
 assert.notEqual(surplus,constant+created);
});

test('mudanças de estado calculam energia de fusão e saída de massa sem criar matéria',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Ciências'&&lesson.topic==='Mudanças de estado e transformações');assert.ok(spec);
 const energy=spec.tasks[1],mass=spec.tasks[2];assert.ok(energy.options&&typeof energy.correctIndex==='number');
 const grams=Number(energy.prompt.match(/(\d+) g de gelo/)?.[1]),latent=Number(energy.prompt.match(/L = (\d+) J\/g/)?.[1]);
 assert.ok(grams>0&&latent>0);
 assert.equal(energy.options[energy.correctIndex],(grams*latent).toLocaleString('pt-BR')+' J');
 assert.match(energy.prompt,/já estão a 0 °C/);assert.match(energy.prompt,/pressão constante/);
 assert.ok(mass.options&&typeof mass.correctIndex==='number');
 const initial=Number(mass.prompt.match(/juntos (\d+) g/)?.[1]),outgoing=Number(mass.prompt.match(/exatamente (\d+) g/)?.[1]);
 assert.ok(initial>outgoing&&outgoing>0);
 assert.ok(mass.options[mass.correctIndex].startsWith(`${initial} g e ${initial-outgoing} g,`));
 assert.equal(initial,(initial-outgoing)+outgoing);
});

test('probabilidade e estatística ponderam frequências, atualizam a urna e invertem a base condicional',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Probabilidade e estatística');assert.ok(spec);
 const selected=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const values=spec.tasks[0].prompt.match(/valores (\d+), (\d+) e (\d+) com frequências absolutas (\d+), (\d+) e (\d+)/);assert.ok(values);
 const observations=[1,2,3].flatMap(index=>Array(Number(values[index+3])).fill(Number(values[index])) as number[]).sort((a,b)=>a-b);
 const mean=observations.reduce((sum,value)=>sum+value,0)/observations.length;
 const median=(observations[observations.length/2-1]+observations[observations.length/2])/2;
 assert.equal(selected(0),`Média ${String(mean).replace('.',',')} e mediana ${String(median).replace('.',',')}.`);
 const balls=['a','a','a','a','v','v','v'];
 const pairs=balls.flatMap((first,i)=>balls.flatMap((second,j)=>i!==j?[[first,second]]:[]));
 const favorable=pairs.filter(pair=>pair.every(color=>color==='a')).length;
 const fraction=selected(1).split('/').map(Number);
 assert.equal(fraction[0]/fraction[1],favorable/pairs.length);
 assert.notEqual(favorable/pairs.length,(4/7)**2);
 const fromA=.10*.20,fromB=.90*.02,conditional=fromA/(fromA+fromB);
 const answer=selected(2).match(/^(\d+)\/(\d+), aproximadamente ([\d,]+)%$/);assert.ok(answer);
 assert.equal(Number(answer[1])/Number(answer[2]),conditional);
 assert.equal(Number(answer[3].replace(',','.')),Number((100*conditional).toFixed(2)));
 assert.notEqual(conditional,.20);assert.notEqual(conditional,.10);
});

test('evidências distinguem contagem absoluta e taxa quando a base de participantes muda',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Redação'&&lesson.topic==='Argumentos, repertório e evidências');assert.ok(spec);
 const task=spec.tasks[2];assert.ok(task.options&&typeof task.correctIndex==='number');
 const first=task.prompt.match(/primeiro, foram (\d+) casos entre (\d+) participantes/),second=task.prompt.match(/segundo, (\d+) entre (\d+)/);assert.ok(first&&second);
 const firstCases=Number(first[1]),firstTotal=Number(first[2]),secondCases=Number(second[1]),secondTotal=Number(second[2]);
 const initialRate=100*firstCases/firstTotal,finalRate=100*secondCases/secondTotal;
 assert.ok(secondCases>firstCases&&finalRate<initialRate);
 assert.equal(task.options[task.correctIndex],`A taxa caiu de ${initialRate}% para ${finalRate}%, diferença de ${initialRate-finalRate} pontos percentuais, enquanto o total de casos aumentou.`);
 assert.notEqual(initialRate-finalRate,100*(initialRate-finalRate)/initialRate);
});

test('eletricidade cotidiana separa série, fator de potência e rendimento sem contar perdas duas vezes',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Eletricidade cotidiana');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt;
 const voltage=Number(first.match(/fonte de (\d+) V/)?.[1]),resistors=first.match(/de (\d+) Ω e (\d+) Ω/);assert.ok(resistors);
 const resistance=Number(resistors[1])+Number(resistors[2]),current=voltage/resistance;
 assert.equal(choice(0),`${current} A e ${current*Number(resistors[1])} V.`);
 const second=spec.tasks[1].prompt;
 const rms=Number(second.match(/eficaz de (\d+) V/)?.[1]),apparent=Number(second.match(/aparente de (\d+) VA/)?.[1]),factor=Number(second.match(/fator de potência (?:de )?(\d+(?:,\d+)?)/)?.[1].replace(',','.')),duration=Number(second.match(/Em (\d+) h/)?.[1]);
 assert.ok([rms,apparent,factor,duration].every(value=>value>0&&Number.isFinite(value)));
 const active=apparent*factor;
 assert.equal(choice(1),`${apparent/rms} A e ${active*duration/1000} kWh.`);
 assert.notEqual(apparent/rms,active/rms);
 const third=spec.tasks[2].prompt,decimal=(pattern:RegExp)=>Number(third.match(pattern)?.[1].replace(',','.'));
 const power=decimal(/de ([\d,]+) kW/),hours=decimal(/por (\d+) h/),days=decimal(/durante (\d+) dias/),efficiencyA=decimal(/útil de (\d+)%/)/100,efficiencyB=decimal(/rendimento de (\d+)%/)/100,price=decimal(/R\$ ([\d,]+)\/kWh/);
 assert.ok([power,hours,days,efficiencyA,efficiencyB,price].every(value=>value>0&&Number.isFinite(value)));
 const inputA=power*hours*days,useful=inputA*efficiencyA,inputB=useful/efficiencyB,saving=(inputA-inputB)*price;
 assert.equal(choice(2),`${inputB} kWh e R$ ${saving.toFixed(2).replace('.',',')}.`);
 assert.equal(inputB*efficiencyB,useful);
 assert.notEqual(inputA,inputA/efficiencyA);
});

test('divisibilidade confere simultaneamente MDC e MMC e busca o menor resto compatível',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Operações, divisibilidade e conjuntos numéricos');assert.ok(spec);
 const gcd=(a:number,b:number):number=>b===0?a:gcd(b,a%b),lcm=(a:number,b:number)=>a/gcd(a,b)*b;
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const common=Number(task.prompt.match(/MDC\(a,b\) = (\d+)/)?.[1]),multiple=Number(task.prompt.match(/MMC\(a,b\) = (\d+)/)?.[1]),first=Number(task.prompt.match(/a = (\d+)/)?.[1]);assert.ok(common>0&&multiple>0&&first>0);
 const candidates=task.options.map(Number),matching=candidates.filter(candidate=>gcd(first,candidate)===common&&lcm(first,candidate)===multiple);
 assert.deepEqual(matching,[Number(task.options[task.correctIndex])]);
 assert.equal(matching[0],common*multiple/first);
 const congruences=spec.tasks[2];assert.ok(congruences.options&&typeof congruences.correctIndex==='number');
 const constraints=[...congruences.prompt.matchAll(/resto (\d+) na divisão por (\d+)/g)].map(match=>({remainder:Number(match[1]),modulus:Number(match[2])}));assert.equal(constraints.length,3);
 const period=constraints.reduce((value,rule)=>lcm(value,rule.modulus),1);
 const valid=Array.from({length:period},(_,index)=>index+1).filter(value=>constraints.every(rule=>value%rule.modulus===rule.remainder));
 assert.equal(valid.length,1);assert.equal(congruences.options[congruences.correctIndex],String(valid[0]));
 assert.ok(congruences.options.every((option,index)=>index===congruences.correctIndex||constraints.some(rule=>Number(option)%rule.modulus!==rule.remainder)));
});

test('ciências aplica força resultante ao sistema e conserva energia na subida ideal',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Ciências'&&lesson.topic==='Força, movimento e energia');assert.ok(spec);
 const contact=spec.tasks[1];assert.ok(contact.options&&typeof contact.correctIndex==='number');
 const masses=[...contact.prompt.matchAll(/[AB] \((\d+) kg\)/g)].map(match=>Number(match[1]));assert.equal(masses.length,2);
 const applied=Number(contact.prompt.match(/de (\d+) N/)?.[1]);assert.ok(applied>0);
 const acceleration=applied/(masses[0]+masses[1]),force=masses[1]*acceleration;
 assert.equal(contact.options[contact.correctIndex],`${force} N.`);
 assert.equal(applied-force,masses[0]*acceleration);
 const energy=spec.tasks[2];assert.ok(energy.options&&typeof energy.correctIndex==='number');
 const speed=Number(energy.prompt.match(/de (\d+) m\/s/)?.[1]),gravity=Number(energy.prompt.match(/g = (\d+) m\/s²/)?.[1]),mass=Number(energy.prompt.match(/de (\d+) kg/)?.[1]);assert.ok(speed>0&&gravity>0&&mass>0);
 const height=speed**2/(2*gravity),kinetic=mass*speed**2/2;
 assert.equal(kinetic,mass*gravity*height);
 assert.equal(energy.options[energy.correctIndex],`${String(height).replace('.',',')} m.`);
 assert.notEqual(height,speed/gravity);
 assert.notEqual(height,speed**2/gravity);
});

test('escalas convertem comprimentos e áreas e reajustam o denominador na ampliação',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Escalas e representações espaciais');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const scale=(text:string)=>Number(text.match(/1:(\d[\d.]*)/)?.[1].replaceAll('.',''));
 const first=spec.tasks[0].prompt,denominator=scale(first),cm=Number(first.match(/de (\d+) cm/)?.[1]);assert.ok(denominator>0&&cm>0);
 assert.equal(choice(0),`${cm*denominator/100000} km.`);
 const second=spec.tasks[1].prompt,area=Number(second.match(/de (\d+) cm²/)?.[1]);assert.ok(area>0);
 assert.notEqual(area*scale(second)/100000,area*(scale(second)/100000)**2);
 const enlargement=second.match(/ampliação uniforme para (\d+)%/);assert.ok(enlargement);
 const factor=Number(enlargement[1])/100,newDenominator=scale(second)/factor;
 assert.equal(choice(1),`${area*(scale(second)/100000)**2} km² e 1:${newDenominator.toLocaleString('pt-BR')}.`);
 assert.ok(spec.tasks[1].solution.includes(`1:${newDenominator.toLocaleString('pt-BR')}`));
 assert.equal(area*factor**2*(newDenominator/100000)**2,area*(scale(second)/100000)**2);
});

test('bioquímica calcula cinética no modelo declarado e soma energia apenas com acoplamento',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Bioquímica celular e biomoléculas');assert.ok(spec);
 const kinetic=spec.tasks[1];assert.ok(kinetic.options&&typeof kinetic.correctIndex==='number');
 const value=(pattern:RegExp)=>Number(kinetic.prompt.match(pattern)?.[1]);
 const limit=value(/Vmax = (\d+) µmol/),km=value(/Km = (\d+) mmol/),substrate=value(/\[S\] = (\d+) mmol/);
 assert.ok(limit>0&&km>0&&substrate>0);
 const rate=limit*substrate/(km+substrate);
 assert.equal(kinetic.options[kinetic.correctIndex],`${rate} µmol/min.`);
 assert.notEqual(rate,limit/2);
 const energy=spec.tasks[2];assert.ok(energy.options&&typeof energy.correctIndex==='number');
 const values=[...energy.prompt.matchAll(/ΔG = ([−+]?\d+) kJ\/mol/g)].map(match=>Number(match[1].replace('−','-')));
 assert.equal(values.length,2);assert.ok(values[0]>0&&values[1]<0);
 const sum=values.reduce((total,value)=>total+value,0);
 assert.equal(energy.options[energy.correctIndex],`ΔG total = ${String(sum).replace('-','−')} kJ/mol; favorável termodinamicamente no modelo acoplado.`);
 assert.match(energy.solution,/não garante velocidade/);
 assert.match(spec.sections[1].explanation,/não é uma medida universal de afinidade/);
});

test('química ambiental conserva estequiometria e distingue carga removida da remanescente',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Química ambiental');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const acid=spec.tasks[1].prompt,coefficient=Number(acid.match(/CaCO3 \+ (\d+) H\+/)?.[1]),moles=Number(acid.match(/consumir (\d+,\d+) mol/)?.[1].replace(',','.')),molarMass=Number(acid.match(/igual a (\d+) g\/mol/)?.[1]);
 assert.ok(coefficient>0&&moles>0&&molarMass>0);
 assert.equal(choice(1),`${moles/coefficient*molarMass} g.`);
 // CaCO3 + 2H+ -> Ca2+ + CO2 + H2O: atom and charge counts, independent of masses.
 const atoms=(formula:string)=>{
  const totals:Record<string,number>={};
  for(const match of formula.matchAll(/([A-Z][a-z]?)(\d*)/g))totals[match[1]]=(totals[match[1]]??0)+Number(match[2]||1);
  return totals;
 };
 const combine=(...parts:Record<string,number>[])=>parts.reduce((sum,part)=>{for(const [element,count] of Object.entries(part))sum[element]=(sum[element]??0)+count;return sum;},{} as Record<string,number>);
 assert.deepEqual(combine(atoms('CaCO3'),{H:coefficient}),combine(atoms('Ca'),atoms('CO2'),atoms('H2O')));
 assert.equal(coefficient,2);
 const third=spec.tasks[2].prompt,flow=Number(third.match(/saída de (\d+) m³\/d/)?.[1]),concentrations=third.match(/de (\d+) mg\/L na entrada para (\d+) mg\/L/);assert.ok(concentrations&&flow>0);
 const incoming=flow*1000*Number(concentrations[1])/1e6,outgoing=flow*1000*Number(concentrations[2])/1e6,removed=incoming-outgoing,efficiency=100*removed/incoming;
 assert.ok(removed>0&&removed<incoming);
 assert.equal(choice(2),`${removed} kg/d e ${efficiency}%.`);
 assert.notEqual(efficiency,100*outgoing/incoming);
 assert.notEqual(efficiency,100*removed/outgoing);
 assert.match(spec.sections[2].explanation,/não prova que toda carga foi destruída/);
});

test('unidades convertem área ao quadrado e cancelam dimensões na pressão e em Reynolds',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Grandezas, unidades e análise dimensional');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,speed=Number(first.match(/(\d+) km\/h/)?.[1]),area=Number(first.match(/(\d+) cm²/)?.[1]);assert.ok(speed>0&&area>0);
 assert.equal(choice(0),`${speed*1000/3600} m/s e ${String(area*.01**2).replace('.',',')} m².`);
 const add=(...vectors:number[][])=>vectors[0].map((_,index)=>vectors.reduce((sum,vector)=>sum+vector[index],0));
 const negate=(vector:number[])=>vector.map(value=>-value);
 const mass=[1,0,0],length=[0,1,0],time=[0,0,1];
 const acceleration=add(length,time.map(value=>-2*value)),force=add(mass,acceleration),surface=length.map(value=>2*value),pressure=add(force,negate(surface));
 const density=add(mass,length.map(value=>-3*value));
 assert.deepEqual(add(density,acceleration,length),pressure);
 const superscript=(value:number)=>String(value).replaceAll('-','⁻').replaceAll('1','¹').replaceAll('2','²').replaceAll('3','³');
 const dimension=pressure.map((power,index)=>power===0?'':'MLT'[index]+(power===1?'':superscript(power))).join('');
 assert.equal(choice(1),dimension+'.');
 const third=spec.tasks[2].prompt,numeric=(pattern:RegExp)=>Number(third.match(pattern)?.[1].replace(',','.'));
 const rho=numeric(/ρ = (\d+) kg/),velocity=numeric(/v = (\d+,\d+) m\/s/),size=numeric(/L = (\d+,\d+) m/),viscosity=numeric(/μ = (\d+,\d+) Pa/);assert.ok([rho,velocity,size,viscosity].every(value=>value>0));
 const reynolds=rho*velocity*size/viscosity;
 const speedDimension=add(length,negate(time)),dynamicViscosity=add(pressure,time);
 assert.deepEqual(add(density,speedDimension,length,negate(dynamicViscosity)),[0,0,0]);
 assert.equal(choice(2),`${reynolds}, adimensional.`);
 assert.match(spec.sections[2].explanation,/não revela C = 2π/);
});

test('multimodalidade confere maioria e crescimento sem tratar altura visual como duplicação',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Inglês'&&lesson.topic==='Gêneros e textos multimodais');assert.ok(spec);
 const survey=spec.tasks[1];assert.ok(survey.options&&typeof survey.correctIndex==='number');
 const counts=survey.prompt.match(/(Eighteen) of (thirty) respondents/);assert.ok(counts);
 const vocabulary:Record<string,number>={eighteen:18,thirty:30};
 const proportion=vocabulary[counts[1].toLowerCase()]/vocabulary[counts[2].toLowerCase()];
 assert.ok(proportion>.5&&proportion<1);
 assert.match(survey.options[survey.correctIndex],/^A majority of the thirty respondents/);
 assert.ok(survey.solution.includes(`${100*proportion}%`));
 const chart=spec.tasks[2];assert.ok(chart.options&&typeof chart.correctIndex==='number');
 const values=chart.prompt.match(/attendance is (\d+) in Week 1 and (\d+) in Week 2/),axis=chart.prompt.match(/axis starts at (\d+)/);assert.ok(values&&axis);
 const initial=Number(values[1]),final=Number(values[2]),baseline=Number(axis[1]),growth=100*(final-initial)/initial;
 assert.ok(chart.options[chart.correctIndex].startsWith(`Attendance rose by ${growth}%;`));
 assert.notEqual(final/initial,2);
 assert.ok((final-baseline)/(initial-baseline)>final/initial);
 assert.match(chart.options[chart.correctIndex],/data do not show doubling/);
});

test('geometria confere cantos, cone parcialmente cheio e ordem das transformações',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Geometria e medidas');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const garden=spec.tasks[0].prompt.match(/(\d+) m por (\d+) m/),path=spec.tasks[0].prompt.match(/uniforme (\d+) m/);assert.ok(garden&&path);
 const length=Number(garden[1]),width=Number(garden[2]),border=Number(path[1]);
 const pathArea=(length+2*border)*(width+2*border)-length*width;
 assert.equal(choice(0),`${pathArea} m².`);assert.notEqual(pathArea,2*(length+width)*border);
 const second=spec.tasks[1].prompt;
 const radius=Number(second.match(/raio interno (\d+) cm/)?.[1]),waterHeight=Number(second.match(/até altura (\d+) cm/)?.[1]),coneRadius=Number(second.match(/borda (\d+) cm/)?.[1]),coneHeight=Number(second.match(/altura interna (\d+) cm/)?.[1]);
 assert.ok([radius,waterHeight,coneRadius,coneHeight].every(value=>value>0));
 const waterVolume=Math.PI*radius**2*waterHeight,capacity=Math.PI*coneRadius**2*coneHeight/3;
 assert.ok(waterVolume<capacity);
 const finalHeight=coneHeight*Math.cbrt(waterVolume/capacity);
 assert.equal(choice(1),finalHeight.toFixed(1).replace('.',',')+' cm.');
 assert.ok(Math.abs(Math.PI*(coneRadius*finalHeight/coneHeight)**2*finalHeight/3-waterVolume)<1e-9);
 const third=spec.tasks[2].prompt,vertex=third.match(/C\((\d+), (\d+)\)/),vector=third.match(/vetor \((\d+), −(\d+)\)/);assert.ok(vertex&&vector);
 const x=Number(vertex[1]),y=Number(vertex[2]),tx=Number(vector[1]),ty=-Number(vector[2]);
 const coordinate=(value:number)=>String(value).replace('-','−');
 assert.equal(choice(2),`(${coordinate(-y+tx)}, ${coordinate(x+ty)}).`);
 assert.notDeepEqual([-y+tx,x+ty],[-(y+ty),x+tx]);
 const example=spec.sections[0].example,sides=example.match(/iguais de (\d+) m e base de (\d+) m/);assert.ok(sides);
 const height=Math.sqrt(Number(sides[1])**2-(Number(sides[2])/2)**2);
 assert.match(example,new RegExp(`= ${height} m`));
 assert.match(spec.sections[2].explanation,/orientação no plano, inclusive com ângulo negativo/);
});

test('átomos introdutórios conservam neutralidade e ponderam massas pelas abundâncias',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Ciências'&&lesson.topic==='Átomos e tabela periódica introdutória');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const particles=spec.tasks[0].prompt.match(/(\d+) prótons e (\d+) nêutrons/);assert.ok(particles);
 const protons=Number(particles[1]),neutrons=Number(particles[2]);
 assert.equal(choice(0),`Z = ${protons}, A = ${protons+neutrons}, ${protons} elétrons.`);
 const prompt=spec.tasks[1].prompt;
 const masses=[...prompt.matchAll(/(\d+,\d+) u/g)].map(match=>Number(match[1].replace(',','.'))),abundances=[...prompt.matchAll(/(\d+)%/g)].map(match=>Number(match[1])/100);
 assert.equal(masses.length,2);assert.equal(abundances.length,2);assert.equal(abundances[0]+abundances[1],1);
 const mean=masses.reduce((sum,mass,index)=>sum+mass*abundances[index],0);
 assert.equal(choice(1),mean.toFixed(1).replace('.',',')+' u.');
 assert.notEqual(mean,(masses[0]+masses[1])/2);
 const shells=[...spec.tasks[2].prompt.matchAll(/\b(\d+),(\d+),(\d+)\b/g)].map(match=>match.slice(1).map(Number));assert.equal(shells.length,2);
 assert.ok(shells.every(distribution=>distribution.length===3));
 assert.equal(shells[0].at(-1),1);assert.equal(shells[1].at(-1),7);
 assert.equal(choice(2),'Ambos estão no período 3; o primeiro é do grupo 1 e forma +1, o segundo é do grupo 17 e forma −1.');
 assert.match(spec.sections[2].explanation,/não se deve misturar raio covalente/);
});

test('atividade física soma os períodos moderados sem certificar todos os componentes da rotina',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Educação Física'&&lesson.topic==='Atividade física e qualidade de vida');assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const durations=task.prompt.match(/três períodos de (\d+) minutos e dois de (\d+) minutos/);assert.ok(durations);
 const threshold=Number(task.prompt.match(/inferior de (\d+) minutos/)?.[1]);assert.ok(threshold>0);
 const total=3*Number(durations[1])+2*Number(durations[2]);
 assert.equal(task.options[task.correctIndex],`${total} minutos, acima do limite inferior aeróbio em ${total-threshold} minutos.`);
 assert.match(task.solution,/sem permitir concluir que todas as recomendações foram atendidas/);
 assert.match(spec.sections[2].explanation,/não prova automaticamente excesso de treinamento/);
});

test('urbanização distingue crescimento de moradores e mudança da parcela urbana',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Urbanização e globalização');assert.ok(spec);
 const task=spec.tasks[0];assert.ok(task.options&&typeof task.correctIndex==='number');
 const populations=[...task.prompt.matchAll(/(\d+) mil/g)].map(match=>Number(match[1]));
 assert.equal(populations.length,4);
 const [urbanBefore,urbanAfter,totalBefore,totalAfter]=populations;
 const before=100*urbanBefore/totalBefore,after=100*urbanAfter/totalAfter;
 assert.ok(urbanAfter>urbanBefore&&after<before);
 assert.equal(task.options[task.correctIndex],`A população urbana cresceu, mas o grau caiu de ${before}% para ${after}%, queda de ${before-after} pontos percentuais.`);
 assert.notEqual(before-after,100*(urbanAfter-urbanBefore)/urbanBefore);
 assert.match(spec.sections[0].explanation,/não impor uma nomenclatura única/);
});

test('ecologia aplica eficiências sucessivas fornecidas, sem impor regra universal de dez por cento',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Ecologia e impactos ambientais');assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const initial=Number(task.prompt.match(/([\d.]+) kJ/)?.[1].replaceAll('.',''));
 const rates=[...task.prompt.matchAll(/(\d+)%/g)].map(match=>Number(match[1])/100);
 assert.equal(rates.length,2);assert.ok(initial>0);
 const final=rates.reduce((energy,rate)=>energy*rate,initial);
 assert.equal(task.options[task.correctIndex],`${final} kJ por metro quadrado por ano.`);
 assert.notEqual(final,initial*.1*.1);
 assert.notEqual(final,initial*rates[1]);
 assert.match(spec.sections[1].explanation,/não é reciclada/);
 assert.match(spec.sections[2].explanation,/nem toda exótica se torna invasora/);
});

test('soluções conservam quantidade analítica e usam volume final nas conversões e misturas',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Soluções e concentração');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,mass=Number(first.match(/(\d+) g de soluto/)?.[1]),volume=Number(first.match(/de (\d+) mL/)?.[1]);
 assert.ok(mass>0&&volume>0);
 assert.equal(choice(0),`${mass/(volume/1000)} g/L e ${100*mass/volume}% m/v.`);
 const second=spec.tasks[1].prompt,grams=Number(second.match(/([\d,]+) g de NaCl/)?.[1].replace(',','.')),molarMass=Number(second.match(/([\d,]+) g\/mol/)?.[1].replace(',','.')),litres=Number(second.match(/de (\d+) mL/)?.[1])/1000;
 assert.ok(grams>0&&molarMass>0&&litres>0);
 const analytical=grams/molarMass/litres;
 assert.equal(choice(1),analytical.toFixed(3).replace('.',',')+' mol/L.');
 assert.notEqual(analytical,analytical*2);
 const third=spec.tasks[2].prompt,parts=[...third.matchAll(/(\d+) mL de solução(?: aquosa)? de NaCl a ([\d,]+) mol\/L/g)].map(match=>({volume:Number(match[1])/1000,concentration:Number(match[2].replace(',','.'))}));
 assert.equal(parts.length,2);
 const finalVolume=Number(third.match(/final informado de (\d+) mL/)?.[1])/1000;
 const totalMoles=parts.reduce((sum,part)=>sum+part.volume*part.concentration,0),concentration=totalMoles/finalVolume;
 assert.equal(choice(2),concentration.toFixed(3).replace('.',',')+' mol/L.');
 assert.ok(finalVolume>parts.reduce((sum,part)=>sum+part.volume,0));
 assert.notEqual(concentration,parts.reduce((sum,part)=>sum+part.concentration,0)/parts.length);
 const options=spec.tasks[2].options!;
 options.forEach((option,index)=>{if(index!==spec.tasks[2].correctIndex)assert.ok(Math.abs(Number(option.split(' ')[0].replace(',','.'))-concentration)>1e-9);});
});

test('razões e escalas convertem unidades, conservam soluto e calculam o mínimo de máquinas',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Razões, escalas e proporcionalidade');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,denominator=Number(first.match(/escala 1:([\d ]+)/)?.[1].replaceAll(' ','')),centimetres=Number(first.match(/([\d,]+) cm/)?.[1].replace(',','.'));
 assert.ok(denominator>0&&centimetres>0);
 assert.equal(choice(0),(centimetres*denominator/100000).toLocaleString('pt-BR')+' km');
 const second=spec.tasks[1].prompt,percentage=Number(second.match(/concentração (\d+)%/)?.[1]),initial=Number(second.match(/de (\d+) g dessa/)?.[1]),removed=Number(second.match(/evaporarmos (\d+) g de água/)?.[1]);
 assert.ok(initial>removed&&percentage>0);
 const solute=initial*percentage/100,remaining=initial-removed,finalPercentage=100*solute/remaining;
 assert.equal(choice(1),finalPercentage.toLocaleString('pt-BR')+'% m/m');
 assert.ok(finalPercentage>percentage);
 const third=spec.tasks[2].prompt,baseline=third.match(/(\d+) máquinas.*?(\d+) horas por dia.*?([\d.]+) peças em (\d+) dias/),target=third.match(/produzir ([\d.]+) peças em (\d+) dias, com jornada de (\d+) horas por dia/);assert.ok(baseline&&target);
 const machineCount=Number(baseline[1]),hours=Number(baseline[2]),pieces=Number(baseline[3].replaceAll('.','')),days=Number(baseline[4]);
 const goal=Number(target[1].replaceAll('.','')),newDays=Number(target[2]),newHours=Number(target[3]),rate=pieces/(machineCount*hours*days),capacity=rate*newDays*newHours,minimum=Math.ceil(goal/capacity);
 assert.ok(capacity>0&&minimum>0);
 assert.equal(choice(2),`${minimum} máquinas`);
 assert.ok(minimum*capacity>=goal&&(minimum-1)*capacity<goal);
});

test('eletricidade e ondas recalculam circuito misto e energia por fóton com GHz convertido',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Ciências'&&lesson.topic==='Eletricidade e ondas');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,resistance=Number(first.match(/de (\d+) Ω/)?.[1]),current=Number(first.match(/de ([\d,]+) A/)?.[1].replace(',','.'));
 assert.ok(resistance>0&&current>0);assert.equal(choice(0),`${resistance*current} V`);
 const second=spec.tasks[1].prompt,voltage=Number(second.match(/de (\d+) V/)?.[1]),resistors=[...second.matchAll(/R[₁₂₃] = (\d+) Ω/g)].map(match=>Number(match[1]));assert.equal(resistors.length,3);
 const [series,left,right]=resistors,parallel=1/(1/left+1/right),total=series+parallel,amps=voltage/total;
 assert.equal(choice(1),`${voltage*amps} W`);
 assert.ok(Math.abs(series*amps**2+(voltage-series*amps)**2/left+(voltage-series*amps)**2/right-voltage*amps)<1e-9);
 const third=spec.tasks[2].prompt,frequency=Number(third.match(/f = ([\d,]+) GHz/)?.[1].replace(',','.'))*1e9,planck=Number(third.match(/h = ([\d,]+) × 10⁻³⁴/)?.[1].replace(',','.'))*1e-34;
 assert.ok(frequency>0&&planck>0);
 const superscript:Record<string,string>={'⁻':'-','⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9'};
 const parseEnergy=(option:string)=>{const match=option.match(/([\d,]+) × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+) J/);assert.ok(match);return Number(match[1].replace(',','.'))*10**Number([...match[2]].map(char=>superscript[char]).join(''));};
 const energy=planck*frequency;
 assert.ok(Math.abs(parseEnergy(choice(2))/energy-1)<0.005);
 spec.tasks[2].options!.forEach((option,index)=>{if(index!==spec.tasks[2].correctIndex)assert.ok(Math.abs(parseEnergy(option)/energy-1)>0.5);});
});

test('estratificação calcula média e Gini da população hipotética sem inferir causalidade',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Sociologia'&&lesson.topic==='Estratificação e desigualdade social');assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const values=task.prompt.match(/rendas de (\d+), (\d+), (\d+) e (\d+) unidades/);assert.ok(values);
 const incomes=values.slice(1).map(Number),total=incomes.reduce((sum,value)=>sum+value,0),mean=total/incomes.length;
 const gini=(items:number[])=>items.reduce((sum,a)=>sum+items.reduce((inner,b)=>inner+Math.abs(a-b),0),0)/(2*items.length*items.reduce((sum,value)=>sum+value,0));
 const index=gini(incomes);
 assert.equal(task.options[task.correctIndex],`${mean} unidades; Gini ${index.toFixed(2).replace('.',',')}.`);
 assert.equal(gini(incomes.map(value=>value*2)),index);
 assert.equal(gini(incomes.map(()=>mean)),0);
 assert.ok(index>0&&index<1);
});

test('ponto quente fixo converte centímetros e milhões de anos e acompanha a direção de envelhecimento',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Geologia e estrutura terrestre');assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const speed=Number(task.prompt.match(/de (\d+) cm\/ano/)?.[1]),ages=[...task.prompt.matchAll(/(\d+) Ma/g)].map(match=>Number(match[1]));
 assert.equal(ages.length,2);assert.ok(speed>0&&ages[1]>ages[0]);
 const distanceKm=speed*(ages[1]-ages[0])*1e6/1e5;
 assert.match(task.prompt,/A fica a noroeste de C/);
 assert.equal(task.options[task.correctIndex],`${distanceKm} km; movimento da placa para sudeste, de A para C.`);
 assert.notEqual(distanceKm,speed*(ages[1]-ages[0]));
});

test('membranas conservam soluto impermeante no modelo osmótico sem confundir volume perdido e restante',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Células, organelas e membranas');assert.ok(spec);
 const task=spec.tasks[1];assert.ok(task.options&&typeof task.correctIndex==='number');
 const initialVolume=Number(task.prompt.match(/inicial de (\d+) mL/)?.[1]),initial=Number(task.prompt.match(/impermeante de (\d+) mOsm\/L/)?.[1]),external=Number(task.prompt.match(/reservatório a (\d+) mOsm\/L/)?.[1]);
 assert.ok(initialVolume>0&&external>initial);
 const particlesMilliOsmoles=initial*initialVolume/1000;
 const finalVolume=particlesMilliOsmoles/external*1000;
 const selected=task.options[task.correctIndex];
 assert.match(selected,/mL, com perda líquida de água\.$/);
 assert.ok(Math.abs(Number.parseFloat(selected)-finalVolume)<1e-9);
 assert.ok(Math.abs(particlesMilliOsmoles-finalVolume*external/1000)<1e-9);
 assert.notEqual(finalVolume,initialVolume-finalVolume);
 assert.ok(finalVolume<initialVolume);
});

test('misturas fecham balanço sem diagnosticar causa de déficit nem perder soluto na destilação ideal',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Matéria, transformações e separação de misturas');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,initial=Number(first.match(/amostra de (\d+) g/)?.[1]),sand=Number(first.match(/(\d+) g de areia seca/)?.[1]),salt=Number(first.match(/(\d+) g de cloreto de sódio seco/)?.[1]);
 assert.ok(initial>sand+salt);
 assert.equal(choice(0),`${initial-sand-salt} g; os dados não identificam a causa da diferença.`);
 const third=spec.tasks[2].prompt,total=Number(third.match(/de (\d+) g contém/)?.[1]),solute=Number(third.match(/contém (\d+) g de sal/)?.[1]),distillate=Number(third.match(/recolhidos (\d+) g de água/)?.[1]);
 assert.ok(total>solute+distillate);
 const residue=total-distillate,percentage=100*solute/residue;
 assert.equal(choice(2),`${residue} g de resíduo com ${percentage.toFixed(1).replace('.',',')}% m/m de sal.`);
 assert.notEqual(percentage,100*solute/total);
 assert.equal(residue-solute+distillate,total-solute);
});

test('células convertem milímetros e micrômetros ao calcular ampliação da imagem',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Ciências'&&lesson.topic==='Células e seres vivos');assert.ok(spec);
 const task=spec.tasks[2],image=Number(task.prompt.match(/imagem de ([\d,]+) mm/)?.[1].replace(',','.')),real=Number(task.prompt.match(/diâmetro real de (\d+) µm/)?.[1]);
 assert.ok(image>0&&real>0&&task.options&&typeof task.correctIndex==='number');
 const magnification=image*1000/real;
 assert.equal(task.options[task.correctIndex],`${magnification} vezes; ampliação, por si só, não garante distinguir estruturas menores.`);
 assert.notEqual(magnification,image/real);
});

test('trabalho distingue produtividade por trabalhador de crescimento da produção total',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Sociologia'&&lesson.topic==='Trabalho e transformações produtivas');assert.ok(spec);
 const task=spec.tasks[2],before=task.prompt.match(/antes: (\d+) peças e (\d+) trabalhadores/),after=task.prompt.match(/depois: (\d+) peças e (\d+) trabalhadores/);assert.ok(before&&after&&task.options&&typeof task.correctIndex==='number');
 const initial=Number(before[1])/Number(before[2]),final=Number(after[1])/Number(after[2]),growth=Math.round((final/initial-1)*100);
 assert.ok(initial>0&&final>initial);
 assert.equal(task.options[task.correctIndex],`De ${initial} para ${final} peças por trabalhador no período: aumento de ${growth}%; isso não mede sozinho esforço, salário ou causa da mudança.`);
 assert.ok(Math.abs(growth-(Number(after[1])/Number(before[1])-1)*100)>1);
});

test('relevo e solos calculam perda por área e média ponderada sem igualar erosão a exportação',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Relevo, solos e recursos naturais');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const second=spec.tasks[1].prompt,value=(name:string)=>Number(second.match(new RegExp(`${name} = (\\d+(?:,\\d+)?)`))?.[1].replace(',','.'));
 const factors=['R','K','LS','C','P'].map(value);assert.ok(factors.every(factor=>factor>0));
 const loss=factors.reduce((product,factor)=>product*factor,1),reference=value('T');assert.ok(loss<reference);
 assert.equal(choice(1),`${loss.toFixed(2).replace('.',',')} t/ha/ano; abaixo do valor de comparação dado.`);
 const third=spec.tasks[2].prompt,zones=[...third.matchAll(/(\d+) ha com perda estimada de (\d+) t\/ha\/ano/g)];assert.equal(zones.length,2);
 const area=zones.reduce((total,zone)=>total+Number(zone[1]),0),total=zones.reduce((sum,zone)=>sum+Number(zone[1])*Number(zone[2]),0);
 assert.equal(choice(2),`${total} t/ano no conjunto e média ${total/area} t/ha/ano; não determina o sedimento exportado na saída.`);
 assert.notEqual(total/area,zones.reduce((sum,zone)=>sum+Number(zone[2]),0)/zones.length);
});

test('respiração distingue ATP bruto e líquido e soma equivalentes sob rendimento declarado',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Metabolismo e respiração celular');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,count=Number(first.match(/glicólise de (\d+) moléculas/)?.[1]);assert.ok(count>0);
 assert.equal(choice(0),`${count*(4-2)} ATP líquidos, ${count*2} NADH e ${count*2} piruvatos.`);
 const second=spec.tasks[1].prompt,nadh=Number(second.match(/(\d+) NADH equivalentes/)?.[1]),fadh=Number(second.match(/(\d+) FADH2/)?.[1]),substrate=Number(second.match(/(\d+) ATP equivalentes por fosforilação/)?.[1]),pN=Number(second.match(/rendimento de ([\d,]+) ATP por NADH/)?.[1].replace(',','.')),pF=Number(second.match(/e ([\d,]+) ATP por FADH2/)?.[1].replace(',','.'));
 assert.ok(nadh>0&&fadh>0&&substrate>0&&pN>0&&pF>0);
 assert.equal(choice(1),`${nadh*pN+fadh*pF+substrate} ATP equivalentes no modelo.`);
 assert.notEqual(nadh*pN+fadh*pF+substrate,nadh*3+fadh*2+substrate);
});

test('estrutura atômica conserva partículas, valida números quânticos e calcula fóton emitido',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Estrutura atômica e modelos');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,z=Number(first.match(/Z = (\d+)/)?.[1]),a=Number(first.match(/A = (\d+)/)?.[1]),charge=Number(first.match(/carga (\d+)\+/)?.[1]);
 assert.ok(a>=z&&z>charge&&charge>0);assert.equal(choice(0),`${z} prótons, ${a-z} nêutrons e ${z-charge} elétrons.`);
 const allowed=spec.tasks[1].options!.map(option=>{
  const numbers=option.replaceAll('−','-').match(/-?\d+(?:,\d+)?/g)!.map(value=>Number(value.replace(',','.')));assert.equal(numbers.length,4);
  const [n,l,ml,ms]=numbers;return Number.isInteger(n)&&n>=1&&Number.isInteger(l)&&l>=0&&l<n&&Number.isInteger(ml)&&Math.abs(ml)<=l&&Math.abs(ms)===0.5;
 });
 assert.equal(allowed.filter(Boolean).length,1);assert.equal(allowed[spec.tasks[1].correctIndex!],true);
 const third=spec.tasks[2].prompt.replaceAll('−','-'),initial=Number(third.match(/E3 = ([-\d,]+) eV/)?.[1].replace(',','.')),final=Number(third.match(/E2 = ([-\d,]+) eV/)?.[1].replace(',','.')),hc=Number(third.match(/hc = (\d+) eV/)?.[1]);
 assert.ok(initial>final&&hc>0);const photon=initial-final;assert.ok(photon>0);
 assert.equal(choice(2),`Emissão de ${photon.toFixed(2).replace('.',',')} eV; comprimento de onda aproximadamente ${Math.round(hc/photon)} nm.`);
});

test('dinâmica recalcula resultante, sistema com atrito e limite de curva horizontal',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Leis de Newton e dinâmica');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,mass=Number(first.match(/massa (\d+) kg/)?.[1]),forces=first.match(/(\d+) N para a direita e (\d+) N para a esquerda/);assert.ok(forces&&mass>0);
 assert.equal(choice(0),`${(Number(forces[1])-Number(forces[2]))/mass} m/s² para a direita.`);
 const second=spec.tasks[1].prompt,table=Number(second.match(/A de (\d+) kg/)?.[1]),hanging=Number(second.match(/B de (\d+) kg/)?.[1]),mu=Number(second.match(/μc = ([\d,]+)/)?.[1].replace(',','.')),g=Number(second.match(/g = (\d+) m\/s²/)?.[1]);
 assert.ok(table>0&&hanging>0&&mu>0&&g>0);assert.match(second,/já desliza/);
 const friction=mu*table*g,acceleration=(hanging*g-friction)/(table+hanging),tension=table*acceleration+friction;
 assert.ok(acceleration>0&&tension<hanging*g);
 assert.equal(choice(1),`${acceleration.toLocaleString('pt-BR')} m/s² e ${tension.toLocaleString('pt-BR')} N.`);
 assert.ok(Math.abs(hanging*g-tension-hanging*acceleration)<1e-9);
 const third=spec.tasks[2].prompt,car=Number(third.match(/de (\d+) kg/)?.[1]),radius=Number(third.match(/raio (\d+) m/)?.[1]),speed=Number(third.match(/de (\d+) m\/s/)?.[1]),coefficient=Number(third.match(/μe = ([\d,]+)/)?.[1].replace(',','.')),gravity=Number(third.match(/g = (\d+) m\/s²/)?.[1]);
 assert.ok(car>0&&radius>0&&speed>0&&coefficient>0&&gravity>0);
 const radial=car*speed*speed/radius,maximum=coefficient*car*gravity;
 assert.ok(radial<maximum&&speed<Math.sqrt(coefficient*gravity*radius));
 assert.equal(choice(2),`Sim: atrito necessário ${radial} N e máximo ${maximum} N.`);
});

test('cinemática recalcula percursos, impacto com desnível e transformação entre eixos paralelos',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Cinemática escalar e vetorial');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt;
 const segments=[...first.matchAll(/velocidade constante de ([+-]?\d+) m\/s durante (\d+) s/g)].map(match=>Number(match[1])*Number(match[2]));
 assert.equal(segments.length,2);
 assert.equal(choice(0),`Δs = ${segments.reduce((a,b)=>a+b,0)} m; d = ${segments.reduce((a,b)=>a+Math.abs(b),0)} m`);
 const second=spec.tasks[1].prompt,height=Number(second.match(/altura (\d+) m/)?.[1]),speed=Number(second.match(/inicial de (\d+) m\/s/)?.[1]);
 const sine=Number(second.match(/sen 37° = ([\d,]+)/)?.[1].replace(',','.')),cosine=Number(second.match(/cos 37° = ([\d,]+)/)?.[1].replace(',','.')),g=Number(second.match(/g = (\d+) m\/s²/)?.[1]);
 assert.ok(height>0&&speed>0&&g>0);
 const vx=speed*cosine,vy=speed*sine,time=(vy+Math.sqrt(vy*vy+2*g*height))/g;
 assert.ok(time>2*vy/g);
 assert.ok(Math.abs(height+vy*time-g*time*time/2)<1e-9);
 assert.equal(choice(1),`${Math.round(vx*time)} m`);
 spec.tasks[1].options!.forEach((option,index)=>{if(index!==spec.tasks[1].correctIndex)assert.ok(Math.abs(Number.parseFloat(option)-vx*time)>1);});
 const third=spec.tasks[2].prompt,acceleration=third.match(/a' = \((\d+) i \+ (\d+) j\)/);assert.ok(acceleration);
 assert.match(third,/eixos paralelos e sem rotação/);
 assert.equal(choice(2),`(${Number(acceleration[1])} i + ${Number(acceleration[2])} j) m/s²`);
});

test('porcentagem e juros mantêm bases sucessivas, capitalização e poder de compra',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Porcentagem e juros');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const currency=(text:string)=>Number(text.replace(/[R$\s.]/g,'').replace(',','.'));
 const first=spec.tasks[0].prompt,price=Number(first.match(/preço inicial de R\$ (\d+)/)?.[1]),discount=Number(first.match(/desconto de (\d+)%/)?.[1])/100,increase=Number(first.match(/acréscimo de (\d+)%/)?.[1])/100;
 assert.ok(price>0&&discount>0&&increase>0);assert.equal(currency(choice(0)),Math.round(price*(1-discount)*(1+increase)*100)/100);
 const second=spec.tasks[1].prompt,capital=Number(second.match(/capital de R\$ ([\d.]+)/)?.[1].replaceAll('.','')),rate=Number(second.match(/taxa de ([\d,]+)% ao mês/)?.[1].replace(',','.'))/100,periods=Number(second.match(/por (\d+) meses/)?.[1]);
 assert.ok(capital>0&&rate>0&&periods>1);const amount=capital*Math.pow(1+rate,periods);
 assert.equal(currency(choice(1)),Math.round(amount*100)/100);assert.notEqual(currency(choice(1)),Math.round(capital*(1+rate*periods)*100)/100);
 const third=spec.tasks[2].prompt,nominal=Number(third.match(/nominal de (\d+)%/)?.[1])/100,inflation=Number(third.match(/inflação de (\d+)%/)?.[1])/100;
 assert.ok(nominal>inflation&&inflation>0);assert.equal(choice(2),`${(((1+nominal)/(1+inflation)-1)*100).toFixed(2).replace('.',',')}%`);
 assert.notEqual(choice(2),`${((nominal-inflation)*100).toFixed(2).replace('.',',')}%`);
});


test('intervenção ENEM mantém escopo, articulação e zero na competência sem prometer nota final',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Redação'&&lesson.topic==='Proposta de intervenção e direitos humanos (ENEM)');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 assert.match(choice(0),/não constitui.*ação/);
 assert.match(choice(1),/canal presencial/);
 assert.match(choice(2),/zero na Competência V/);
 assert.match(choice(2),/não.*automaticamente.*redação inteira/);
 assert.match(spec.sections.map(section=>section.explanation).join(' '),/não.*garant.*200/);
});


test('trabalho e energia respeitam ângulo, dissipação e fronteiras da potência útil',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Trabalho, energia e potência');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt,force=Number(first.match(/força constante de (\d+) N/)?.[1]),distance=Number(first.match(/deslocamento retilíneo de (\d+) m/)?.[1]),angle=Number(first.match(/ângulo de (\d+)°/)?.[1]);assert.ok(force>0&&distance>0&&angle>0);
 assert.equal(choice(0),`${Math.round(force*distance*Math.cos(angle*Math.PI/180))} J, para o trabalho dessa força.`);
 const second=spec.tasks[1].prompt,mass=Number(second.match(/massa (\d+) kg/)?.[1]),height=Number(second.match(/desnível de (\d+) m/)?.[1]),g=Number(second.match(/g = (\d+) m\/s²/)?.[1]),dissipation=Number(second.match(/dissipando (\d+) J/)?.[1]);assert.ok(mass>0&&height>0&&g>0&&dissipation>0);
 const kinetic=mass*g*height-dissipation;assert.ok(kinetic>0);assert.equal(choice(1),`${kinetic} J; aproximadamente ${Math.sqrt(2*kinetic/mass).toFixed(2).replace('.',',')} m/s.`);
 const third=spec.tasks[2].prompt,load=Number(third.match(/carga de (\d+) kg/)?.[1]),lift=Number(third.match(/altura de (\d+) m/)?.[1]),seconds=Number(third.match(/em (\d+) s/)?.[1]),gravity=Number(third.match(/g = (\d+) m\/s²/)?.[1]),efficiency=Number(third.match(/rendimento global de (\d+)%/)?.[1])/100;assert.ok(load>0&&lift>0&&seconds>0&&gravity>0&&efficiency>0&&efficiency<1);
 const useful=load*gravity*lift/seconds;assert.equal(choice(2),`${useful} W úteis e ${useful/efficiency} W de entrada.`);assert.notEqual(useful/efficiency,useful*efficiency);
});


test('tabela periódica conta elétrons, compara série isoeletrônica e detecta salto de ionização',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Tabela periódica e propriedades');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const configuration=spec.tasks[0].prompt.match(/1s2 2s2 2p6 3s2 3p4/);assert.ok(configuration);
 const electrons=[...configuration[0].matchAll(/(\d+)[sp](\d+)/g)].reduce((total,orbital)=>total+Number(orbital[2]),0);assert.equal(electrons,16);assert.match(choice(0),/Z = 16; período 3; grupo 16/);
 const ions=[{name:'O2−',z:8,charge:-2},{name:'F−',z:9,charge:-1},{name:'Na+',z:11,charge:1},{name:'Mg2+',z:12,charge:2}];
 for(const ion of ions){assert.ok(spec.tasks[1].prompt.includes(ion.name));assert.equal(ion.z-ion.charge,10);}
 const increasing=[...ions].sort((a,b)=>b.z-a.z).map(ion=>ion.name).join(' < ');assert.equal(choice(1),increasing+'.');
 const energies=[...spec.tasks[2].prompt.matchAll(/E[1-4] = (\d+)/g)].map(match=>Number(match[1]));assert.equal(energies.length,4);assert.ok(energies.every(value=>value>0));
 const jumps=energies.slice(1).map((energy,index)=>energy/energies[index]),valence=jumps.indexOf(Math.max(...jumps))+1;assert.equal(valence,2);assert.match(choice(2),/duas.*valência.*grupo 2/);
});


test('fotossíntese distingue origem do oxigênio e saldo líquido do ciclo de Calvin',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Fotossíntese');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 assert.match(spec.tasks[0].prompt,/água.*18O/);assert.match(choice(0),/O2.*água/);
 const second=spec.tasks[1].prompt,carbon=Number(second.match(/fixação de (\d+) CO2/)?.[1]);assert.ok(carbon>0&&carbon%3===0);
 assert.equal(choice(1),`${carbon/3} G3P líquidos, ${carbon*3} ATP e ${carbon*2} NADPH no modelo.`);
 assert.match(choice(2),/CAM.*separação temporal/);
 assert.match(spec.sections.map(section=>section.explanation).join(' '),/não.*somente.*noite/);
});


test('clima compara frequências com limiar fixo sem fabricar atribuição causal',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Geografia'&&lesson.topic==='Clima, massas de ar e mudanças climáticas');assert.ok(spec);
 const task=spec.tasks[2];assert.ok(task.options&&typeof task.correctIndex==='number');
 const sample=task.prompt.match(/primeira amostra: (\d+) dias em (\d+); segunda amostra: (\d+) dias em (\d+)/);assert.ok(sample);
 const first=Number(sample[1])/Number(sample[2]),second=Number(sample[3])/Number(sample[4]);assert.ok(first>0&&second>first);
 assert.equal(task.options[task.correctIndex],`A frequência observada é ${(second/first).toFixed(1).replace('.',',')} vezes a inicial; os dados isolados não demonstram a causa da diferença.`);
 const text=spec.sections.map(section=>section.explanation).join(' ');assert.match(text,/2011–2020/);assert.match(text,/1850–1900/);assert.match(text,/infravermelha/);
});

test('potências e radicais preservam sinais e normalizam contagem com cancelamento de unidades',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Potências, radicais e notação científica');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const first=spec.tasks[0].prompt.match(/\[\((-\d+)\)\^(\d+) · (\d+)\^(\d+)\]\/((\d+)\^(\d+))/);assert.ok(first);
 assert.equal(Number(choice(0)),Number(first[1])**Number(first[2])*Number(first[3])**Number(first[4])/Number(first[6])**Number(first[7]));
 const roots=[...spec.tasks[1].prompt.matchAll(/√(\d+)/g)].map(match=>Number(match[1]));assert.equal(roots.length,3);
 const reduced=choice(1).match(/^(\d+)√(\d+)$/);assert.ok(reduced);
 assert.ok(Math.abs(Number(reduced[1])*Math.sqrt(Number(reduced[2]))-(Math.sqrt(roots[0])-Math.sqrt(roots[1])+Math.sqrt(roots[2])))<1e-12);
 const values=[...spec.tasks[2].prompt.matchAll(/([\d,]+) × 10\^(-?\d+) g/g)].map(match=>Number(match[1].replace(',','.'))*10**Number(match[2]));assert.equal(values.length,2);
 const normalized=choice(2).match(/^([\d,]+) × 10\^(-?\d+) unidades$/);assert.ok(normalized);const coefficient=Number(normalized[1].replace(',','.'));
 assert.ok(coefficient>=1&&coefficient<10);assert.ok(Math.abs(coefficient*10**Number(normalized[2])-values[0]/values[1])<1e-9);
});

test('impulso e colisões distinguem sinal, perda cinética e as duas fases do pêndulo',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Física'&&lesson.topic==='Impulso, quantidade de movimento e colisões');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const decimal=(value:string)=>Number(value.replace(',','.'));
 const first=spec.tasks[0].prompt.match(/massa (\d+) kg.*de (\d+) m\/s para (\d+) m\/s.*intervalo de ([\d,]+) s/);assert.ok(first);
 const impulse=Number(first[1])*(Number(first[3])-Number(first[2])),meanForce=impulse/decimal(first[4]);
 assert.equal(choice(0),`${impulse} N·s; ${meanForce} N.`);
 const second=spec.tasks[1].prompt.match(/m1 = (\d+) kg.*v1 = ([+-]?\d+) m\/s.*m2 = (\d+) kg.*v2 = ([+-]?\d+) m\/s/);assert.ok(second);
 const m1=Number(second[1]),v1=Number(second[2]),m2=Number(second[3]),v2=Number(second[4]),common=(m1*v1+m2*v2)/(m1+m2);
 const loss=(m1*v1*v1+m2*v2*v2-(m1+m2)*common*common)/2;assert.ok(loss>0);
 const answer=choice(1).match(/^([\d]+)\/([\d]+) m\/s.*perda de ([\d]+)\/([\d]+) J/);assert.ok(answer);
 assert.ok(Math.abs(Number(answer[1])/Number(answer[2])-common)<1e-12);assert.ok(Math.abs(Number(answer[3])/Number(answer[4])-loss)<1e-12);
 const third=spec.tasks[2].prompt.match(/massa ([\d,]+) kg.*velocidade (\d+) m\/s.*bloco de massa ([\d,]+) kg.*g = (\d+) m\/s²/);assert.ok(third);
 const small=decimal(third[1]),initial=Number(third[2]),block=decimal(third[3]),g=Number(third[4]),speed=small*initial/(small+block),height=speed*speed/(2*g);
 assert.equal(choice(2),`${height.toFixed(2).replace('.',',')} m.`);
 assert.notEqual(height,small*initial*initial/(2*(small+block)*g),'energia cinética não se conserva durante o engaste');
});

test('polaridade do modelo soma dipolos vetorialmente e distingue geometria eletrônica e molecular',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Química'&&lesson.topic==='Ligações, geometria e polaridade molecular');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 assert.match(choice(0),/CaF2.*retículo/);
 const valence=spec.tasks[1].prompt.match(/N = (\d+) e H = (\d+)/);assert.ok(valence);const electrons=Number(valence[1])+3*Number(valence[2]);assert.equal(electrons,8);
 assert.equal(electrons/2,4);assert.match(choice(1),/tetraédrica.*piramidal trigonal/i);
 const third=spec.tasks[2].prompt.match(/módulo ([\d,]+) D.*ângulo de (\d+)°.*linear.*(180)°/);assert.ok(third);
 const dipole=Number(third[1].replace(',','.')),angle=Number(third[2]);assert.ok(dipole>0);
 const sum=(theta:number)=>Math.sqrt(Math.max(0,2*dipole*dipole*(1+Math.cos(theta*Math.PI/180))));
 assert.equal(choice(2),`${sum(angle).toFixed(1).replace('.',',')} D; ${sum(Number(third[3])).toFixed(0)} D.`);
 assert.notEqual(sum(angle),2*dipole);
});

test('mitose e meiose não confundem replicação, redução de ploidia e combinações potenciais',()=>{
 const spec=authoredCurriculumSpecs.find(lesson=>lesson.subject==='Biologia'&&lesson.topic==='Mitose e meiose');assert.ok(spec);
 const choice=(index:number)=>{const task=spec.tasks[index];assert.ok(task.options&&typeof task.correctIndex==='number');return task.options[task.correctIndex];};
 const beforeS=Number(spec.tasks[0].prompt.match(/2n = (\d+)/)?.[1]);assert.ok(beforeS>0);assert.match(spec.tasks[0].prompt,/após a fase S.*antes da separação/);
 assert.equal(choice(0),`${beforeS} cromossomos duplicados; ${2*beforeS} cromátides.`);
 const diploid=Number(spec.tasks[1].prompt.match(/2n = (\d+)/)?.[1]);assert.ok(diploid>0&&diploid%2===0);assert.match(spec.tasks[1].prompt,/após a meiose I.*antes da meiose II/);
 assert.equal(choice(1),`${diploid/2} cromossomos duplicados; ${diploid} cromátides por célula.`);
 const pairs=Number(spec.tasks[2].prompt.match(/n = (\d+) pares/)?.[1]);assert.ok(pairs>2);assert.match(spec.tasks[2].prompt,/ignore crossing-over/);
 assert.equal(choice(2),`${2**pairs} combinações potenciais; ${2**2} produtos celulares.`);
 assert.notEqual(2**pairs,2**2);
});
