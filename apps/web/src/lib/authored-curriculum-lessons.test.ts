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
