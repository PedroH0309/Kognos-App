import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoTopics} from './provao-paulista.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {starterLesson} from './starter-lessons.ts';

/** Offline-only maturity audit: published Supabase overrides are not inspected here.
 * A starter scaffold is NOT a completed editorial lesson even when it uses a matched seed.
 */
type Coverage='deep_specific'|'specific_unverified'|'partial_support'|'introductory_only';
const allCurricula=new Map(curriculumTopics.map(topic=>[topic.subject+'\0'+topic.topic,topic] as const));
function category(lesson:ReturnType<typeof starterLesson>):Coverage{
 if(lesson.authorship.includes('módulo introdutório estruturado'))return 'introductory_only';
 if(lesson.supportTopic)return 'partial_support';
 if(lesson.authorship.includes('aula autoral aprofundada e específica'))return 'deep_specific';
 return 'specific_unverified';
}
export function provaoDepthAudit(){
 const uniq=new Map(provaoTopics.map(entry=>[entry.subject+'\0'+entry.topic,entry] as const));
 const coverage:Record<Coverage,number>={
  deep_specific:0,specific_unverified:0,partial_support:0,introductory_only:0
 };
 const bySubject=new Map<string,Record<Coverage,number>>();
 const pending:Array<{subject:string;topic:string;status:Coverage}>=[];
 for(const ref of uniq.values()){
  const topic=allCurricula.get(ref.subject+'\0'+ref.topic);
  if(!topic)throw new Error('MISSING_CURRICULUM_TOPIC '+ref.subject+' / '+ref.topic);
  const status=category(starterLesson(topic));
  coverage[status]++;
  if(!bySubject.has(ref.subject))bySubject.set(ref.subject,{deep_specific:0,specific_unverified:0,partial_support:0,introductory_only:0});
  bySubject.get(ref.subject)![status]++;
  if(status!=='deep_specific')pending.push({subject:ref.subject,topic:ref.topic,status});
 }
 return {total:uniq.size,coverage,bySubject:Object.fromEntries(bySubject),pending};
}
test('batch 26 registered topics are covered by the offline Provão audit',()=>{
 const report=provaoDepthAudit();
 const cases=[
  ['Química','Fórmulas químicas: fórmula mínima, fórmula centesimal, fórmula molecular'],
  ['Química','Constantes de equilíbrio e cálculos simples de equilíbrio'],
  ['Biologia','Fatores que regulam o tamanho das populações'],
  ['História','Período macedônico e cultura helenística'],
  ['História','Do artesanato à fábrica: transformações no mundo do trabalho'],
  ['Química','Transformações nucleares']
 ] as const;
 for(const [subject,prefix] of cases){
  assert.ok(!report.pending.some(item=>item.subject===subject&&item.topic.startsWith(prefix)),
   'Missing specific depth: '+subject+' / '+prefix);
 }
 assert.ok(report.coverage.deep_specific>=166,'Expected at least 166 specific Provão lessons including batch 32');
});

test('batch 32 specific topics are registered and recognized across the Provão audit',()=>{
 const report=provaoDepthAudit();
 const newTopics=[
  ['Química','Macromoléculas naturais e sintéticas'],
  ['Física','Geradores elétricos. Força eletromotriz e resistência interna. Equação e curva característica…'],
  ['Física','Receptores elétricos. Força contraeletromotriz e resistência interna. Equação e curva…'],
  ['Biologia','Teorias da origem da vida na Terra e hipóteses sobre a evolução do metabolismo energético'],
  ['História','A Declaração Universal dos Direitos Humanos de 1948: seus princípios e trajetória histórica']
 ] as const;
 for(const [subject,topic] of newTopics){
  assert.ok(!report.pending.some(entry=>entry.subject===subject&&entry.topic===topic),
   'Newly authored topic must not remain introductory: '+subject+' / '+topic);
 }
 assert.ok(report.coverage.deep_specific>=166,'Batch 32 must expand verified coverage');
});

test('batch 28 contributes five distinct deeply authored official Provão topics',()=>{
 const report=provaoDepthAudit();
 const cases=[
  ['Química','Equações termoquímicas'],
  ['Física','Máquinas térmicas e máquinas frigoríficas. O ciclo de Carnot'],
  ['Biologia','Conservação biológica (unidades de conservação)'],
  ['História','Nações e nacionalismos no século XIX'],
  ['História','A classe operária e a luta por direitos']
 ] as const;
 for(const [subject,topic] of cases){
  assert.ok(!report.pending.some(entry=>entry.subject===subject&&entry.topic===topic),
   'Batch 28 must not remain introductory: '+subject+' / '+topic);
 }
 assert.ok(report.coverage.deep_specific>=146);
});

test('batch 29 advances five genuinely distinct official Provão topics',()=>{
 const report=provaoDepthAudit();
 const cases=[
  ['Química','Ligação, estrutura, propriedades físicas e químicas da água'],
  ['Física','Trabalho realizado pelas forças exercidas por um gás. Energia interna. Transformações cíclicas'],
  ['Biologia','Alimentos e nutrição; segurança alimentar; ação das substâncias psicoativas (drogas) no sistema…'],
  ['História','A ascensão do café e a primeira industrialização'],
  ['História','Ideias sociais e projetos revolucionários']
 ] as const;
 for(const [subject,topic] of cases){
  assert.ok(!report.pending.some(x=>x.subject===subject&&x.topic===topic),
   'Batch 29 must resolve specifically '+subject+' / '+topic);
 }
 assert.ok(report.coverage.deep_specific>=161);
});

test('batch 30 contributes five distinct non-introductory Provão topics',()=>{
 const report=provaoDepthAudit();
 const names=[
  ['Química','Isomeria plana e espacial (geométrica e óptica)'],
  ['Física','Eclipses. Sombra e penumbra. Câmara escura de orifício'],
  ['Biologia','Vírus: reconhecimento das características e sua importância em contextos relacionados à saúde e…'],
  ['Química','As características gerais dos compostos orgânicos'],
  ['Física','Fenômeno da dispersão luminosa e a refração da luz na atmosfera. 9.Ondulatória']
 ] as const;
 for(const [subject,topic] of names){
  assert.ok(!report.pending.some(entry=>entry.subject===subject&&entry.topic===topic),
   'Batch 30 missing specific depth: '+subject+' / '+topic);
 }
 assert.ok(report.coverage.deep_specific>=161,'Expected at least 161 topics');
});

test('batch 31 contributes five exact new Provão syllabus lessons',()=>{
 const report=provaoDepthAudit();
 const cases=[
  ['Física','Lei de Faraday-Neumann'],
  ['Física','Capacitores. Associação de capacitores. Energia potencial elétrica armazenada em um capacitor.…'],
  ['Biologia','Doenças humanas causadas por fungos e protozoários (amebíase, malária, doença de Chagas e…'],
  ['História','Da mão de obra escrava à imigração'],
  ['História','Ásia e África: imperialismo, neocolonialismo e resistência']
 ] as const;
 for(const [subject,topic] of cases){
  assert.ok(!report.pending.some(entry=>entry.subject===subject&&entry.topic===topic),
   'Batch 31 topic must have a specific deep lesson: '+subject+' / '+topic);
 }
 assert.ok(report.coverage.deep_specific>=161);
});

test('every deep syllabus registration is unique, with actionable duplicate diagnostics',()=>{
 const seen=new Set<string>();
 const duplicates:string[]=[];
 for(const key of deepProvaoTopicKeys){
  if(seen.has(key))duplicates.push(key);
  seen.add(key);
 }
 assert.deepEqual(duplicates,[],'Duplicate subject/topicStart registrations: '+duplicates.join('; '));
});
test('full three-grade Provão syllabus has an honest depth status for every unique topic',()=>{
 const report=provaoDepthAudit();
 assert.equal(report.total,364,'360 topic entries plus four writing assessment criteria');
 assert.equal(Object.values(report.coverage).reduce((sum,n)=>sum+n,0),report.total);
 assert.ok(report.coverage.deep_specific<=deepProvaoTopicKeys.length,'Coverage must never exceed editorial registrations');
 assert.ok(report.coverage.deep_specific>=161,'At least 161 distinct Provão lessons are required');
 // Registered prefixes can overlap or fail to match the official catalogue; report the gap explicitly.
 console.log('DEPTH_REGISTRATION_GAP '+JSON.stringify({registrations:deepProvaoTopicKeys.length,matched:report.coverage.deep_specific,gap:deepProvaoTopicKeys.length-report.coverage.deep_specific}));
 // Report registrations that cannot win the same exact-first resolver used by the app.
 const registered=deepProvaoTopicKeys.map(key=>{
  const delimiter=key.indexOf(' · ');
  return {key,subject:key.slice(0,delimiter),prefix:key.slice(delimiter+3)};
 });
 const matched=new Set<string>();
 const eligible=new Set<string>();
 for(const entry of provaoTopics){
  const candidates=registered.filter(spec=>spec.subject===entry.subject&&entry.topic.startsWith(spec.prefix));
  for(const spec of candidates)eligible.add(spec.key);
  const winner=candidates.find(spec=>spec.prefix===entry.topic)??candidates[0];
  if(winner)matched.add(winner.key);
 }
 const unresolved=registered.filter(spec=>!eligible.has(spec.key)).map(spec=>spec.key);
 const shadowed=registered.filter(spec=>eligible.has(spec.key)&&!matched.has(spec.key)).map(spec=>spec.key);
 console.log('DEPTH_REGISTRATION_DIAGNOSTICS '+JSON.stringify({unresolved,shadowed,selected:matched.size}));
 assert.equal(matched.size,report.coverage.deep_specific,'Each resolved topic must correspond to one selected editorial registration');
 assert.ok(report.coverage.introductory_only>0,'Do not misrepresent incomplete classes as finished');
 assert.ok(report.pending.every(item=>item.status!=='deep_specific'));
 assert.equal(Object.values(report.bySubject).length,11,'Ten curricular subjects plus Redação rubric');
 console.log('PROVAO_DEPTH_AUDIT '+JSON.stringify({total:report.total,coverage:report.coverage,bySubject:report.bySubject,
  pendingExamples:report.pending.filter(x=>x.status==='introductory_only').slice(0,15)}));
});
test('all five examination paths use the same authored or introductory content contract',()=>{
 const statuses:Record<Coverage,number>={deep_specific:0,specific_unverified:0,partial_support:0,introductory_only:0};
 const exams=new Set<string>();
 for(const topic of curriculumTopics){
  for(const exam of topic.exams)exams.add(exam);
  const lesson=starterLesson(topic);
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.subject,topic.subject);
  assert.equal(lesson.topic,topic.topic);
  statuses[category(lesson)]++;
  if(deepProvaoLesson(topic))assert.equal(category(lesson),'deep_specific');
 }
 assert.deepEqual([...exams].sort(),['enem','etec','fuvest','saresp','vunesp']);
 console.log('ALL_EXAMS_DEPTH_AUDIT '+JSON.stringify({total:curriculumTopics.length,coverage:statuses,exams:[...exams].sort()}));
});

test('every deep lesson is assessed exclusively through verified four-option multiple choice',()=>{
 const checked=new Set<string>();
 for(const topic of curriculumTopics){
  const lesson=deepProvaoLesson(topic);
  if(!lesson)continue;
  const key=topic.subject+'\\0'+topic.topic;
  if(checked.has(key))continue;
  checked.add(key);
  assert.equal(lesson.sections.length,3,key+' must include three progressive stages');
  assert.ok(lesson.tasks.length>=3,key+' must have assessment at all stages');
  for(const level of ['basic','intermediate','advanced'] as const){
   assert.ok(lesson.tasks.some(task=>task.level===level),key+' missing '+level);
  }
  for(const task of lesson.tasks){
   assert.equal(task.options?.length,4,key+' has a non-objective task');
   assert.equal(new Set(task.options).size,4,key+' repeats an answer option');
   assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4,key+' has an invalid key');
   assert.ok(task.solution.length>=140,key+' has an insufficient commented correction');
   const choice=lessonTaskChoice(lesson,task);
   assert.equal(choice.source,'editorial');
   assert.equal(choice.correctIndex,task.correctIndex);
  }
 }
 assert.equal(checked.size,provaoDepthAudit().coverage.deep_specific,'Assess every distinct matched Provão lesson, not unmatched registrations');
});

test('all five exam catalogues report depth by exam without counting shared lessons twice',()=>{
 const counts=new Map<string,{total:number;deep:number;pending:number}>();
 for(const topic of curriculumTopics){
  for(const exam of topic.exams){
   const row=counts.get(exam)??{total:0,deep:0,pending:0};
   row.total++;
   if(deepProvaoLesson(topic))row.deep++;
   else row.pending++;
   counts.set(exam,row);
  }
 }
 assert.deepEqual([...counts.keys()].sort(),['enem','etec','fuvest','saresp','vunesp']);
 for(const [exam,row] of counts){
  assert.equal(row.deep+row.pending,row.total,exam+' must be fully audited');
  assert.ok(row.total>0,exam+' has no topics');
 }
 assert.ok((counts.get('saresp')?.total??0)>=364,'Cross-exam editorial topics may extend the Provão programme');
 assert.equal(counts.get('saresp')?.deep,provaoDepthAudit().coverage.deep_specific);
 console.log('EXAM_DEPTH_BY_INSTITUTION '+JSON.stringify(Object.fromEntries(counts)));
});

test('batch 34 adds five new exact nonoverlapping syllabus lessons with detailed multiple choice',()=>{
 const report=provaoDepthAudit();
 const cases=[
  ['Português','Elementos estruturais e processos de formação de palavras'],
  ['Português','Flexão nominal e flexão verbal (expressão de tempo, modo, aspecto e voz; correlação de tempos e…'],
  ['Biologia','Ausência de dominância, alelos letais e alelos múltiplos (polialelia)'],
  ['Física','Sistemas conservativos e não conservativos'],
  ['História','A Constituição de 1988: a promoção e proteção de direitos']
 ] as const;
 assert.equal(new Set(cases.map(([subject,name])=>subject+'\\0'+name)).size,5);
 const registrations=new Set(deepProvaoTopicKeys);
 assert.equal(registrations.size,deepProvaoTopicKeys.length,'Deep registrations must be unique');
 for(const [subject,name] of cases){
  const matching=curriculumTopics.filter(t=>t.subject===subject&&t.topic===name&&t.exams.includes('saresp'));
  assert.equal(matching.length,1,'Missing or ambiguous official topic: '+subject+'/'+name);
  const topic=matching[0];
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing original lesson '+subject+'/'+name);
  assert.equal(lesson.id,topic.id,'Curricular ID must remain stable');
  assert.deepEqual(starterLesson(topic),lesson,'Central course reader must resolve deep lesson');
  assert.ok(lesson.objective.length>=75);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(section=>section.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(task=>task.level),['basic','intermediate','advanced']);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  for(let n=0;n<3;n++){
   const section=lesson.sections[n];
   const task=lesson.tasks[n];
   assert.ok(section.explanation.length>=750);
   assert.ok(section.example.length>=180);
   assert.ok(section.steps.length>=3&&section.pitfall.length>=50);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
  assert.ok(!report.pending.some(item=>item.subject===subject&&item.topic===name));
 }
 assert.ok(report.coverage.deep_specific>=171,'Batch 34 must increase true Provão coverage by five, not shadow prior lessons');
});
