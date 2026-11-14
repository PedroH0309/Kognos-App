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
