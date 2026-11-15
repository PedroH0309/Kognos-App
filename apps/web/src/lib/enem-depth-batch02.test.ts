import {test} from 'node:test';
import assert from 'node:assert/strict';
import {authoredEnemDeepBatch02,deepEnemFoundationsLesson} from './enem-depth-batch02.ts';
import {authoredEnemDeepBatch01} from './enem-depth-batch01.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {canonicalLessonForExam,canonicalCoverageByExam} from './canonical-lesson-reuse.ts';
import {starterLesson,starterCoverage} from './starter-lessons.ts';

const titles=['Ângulos e retas paralelas','Áreas de figuras planas','Circunferência e círculo','Expressões algébricas','Razão e proporção'];

test('cinco lacunas reais recebem aulas originais completas nos três níveis',()=>{
 assert.deepEqual(authoredEnemDeepBatch02.map(lesson=>lesson.topic),titles);
 const previous=new Set(authoredEnemDeepBatch01.map(lesson=>lesson.subject+'\0'+lesson.topic));
 for(const spec of authoredEnemDeepBatch02){
  assert.equal(spec.subject,'Matemática');
  assert.ok(!previous.has(spec.subject+'\0'+spec.topic),'não duplicar autoria existente');
  const topic=curriculumTopics.find(topic=>topic.subject===spec.subject&&topic.topic===spec.topic);
  assert.ok(topic&&topic.exams.includes('enem'));
  const lesson=deepEnemFoundationsLesson(topic);
  assert.ok(lesson&&parseCourseDocument(lesson));
  assert.match(lesson.authorship,/original.*revisão pedagógica humana pendente/);
  assert.match(lesson.license,/autoral.*não oficial/);
  assert.equal(lesson.review,'introductory');
  assert.ok(lesson.sourceUrls.length>0&&lesson.sourceUrls.every(url=>url.startsWith('https://')));
  assert.equal(lesson.sections.length,3);
  assert.deepEqual(lesson.sections.map(section=>section.level),['basic','intermediate','advanced']);
  for(const section of lesson.sections){
   assert.ok(section.explanation.length>=750,spec.topic+': explicação substancial');
   assert.ok(section.steps.length>=3,spec.topic+': método explícito');
   assert.ok(section.example.length>=60,spec.topic+': exemplo resolvido');
   assert.ok(section.pitfall.length>=25,spec.topic+': erro frequente específico');
  }
  assert.equal(lesson.tasks.length,3);
  assert.deepEqual(lesson.tasks.map(task=>task.level),['basic','intermediate','advanced']);
  const choices=new Set<string>();
  assert.equal(new Set(lesson.tasks.map(task=>task.prompt)).size,3);
  for(const task of lesson.tasks){
   assert.ok(task.options);
   assert.equal(task.options.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<=3);
   assert.ok(task.hint.length>=40&&task.solution.length>=100);
   for(const choice of task.options){assert.ok(!choices.has(choice),'alternativa reciclada: '+choice);choices.add(choice);}
  }
 }
});

test('gabaritos numéricos e domínio conferem com cálculos independentes',()=>{
 const choice=(title:string,index:number)=>{
  const task=authoredEnemDeepBatch02.find(spec=>spec.topic===title)?.tasks[index];
  assert.ok(task&&task.options&&typeof task.correctIndex==='number');
  return task.options[task.correctIndex];
 };
 const br=(n:number)=>n.toLocaleString('pt-BR');
 assert.equal(choice(titles[0],0),`58°, ${180-58}° e ${180-58}°`);
 const x=(180-12+28)/(3+5);
 assert.equal(choice(titles[0],1),`x = ${br(x)}; ${br(3*x+12)}° e ${br(5*x-28)}°`);
 const a=(20+10)/(3-2),y=(180-(2*a+20)+20)/4;
 assert.equal(choice(titles[0],2),`x = ${a}; y = ${y}`);
 assert.equal(choice(titles[1],0),`${br(25*18*100**2)} cm²`);
 assert.equal(choice(titles[1],1),`${br((10+22)*12/2*3**2)} cm²`);
 assert.equal((24*18/2),6**2*6);
 assert.equal(choice(titles[1],2),'24√6 cm');
 assert.equal(choice(titles[2],0),`${br(3.14*70*50/100)} m`);
 assert.equal(choice(titles[2],1),`${Math.round((343/5)/14**2*360)}°`);
 assert.match(authoredEnemDeepBatch02[2].tasks[1].prompt,/343π\/5/);
 assert.equal(choice(titles[2],2),br((30**2-18**2)/(20**2-12**2)));
 assert.equal(choice(titles[3],0),`${(2*4+3)*(4-1)} m²`);
 assert.equal(choice(titles[3],1),`${3*2-2*4+5}x - ${3*5+2*3+5*2}`);
 assert.equal(choice(titles[3],2),'(x-2)/(x+2), preservando x ≠ 2 e x ≠ -2');
 for(const value of [-4,0,1,3,5]){
  assert.equal((value**2-4*value+4)/(value**2-4),(value-2)/(value+2));
 }
 assert.equal(choice(titles[4],0),`${br(6.4*50000/100000)} km`);
 assert.equal(choice(titles[4],1),`${8*15/10-8} operários`);
 assert.equal(choice(titles[4],2),`${(14-8)/(2.4-1.9)} km`);
});

test('a API editorial recebe as aulas ENEM aprofundadas em vez do roteiro genérico',()=>{
 for(const spec of [...authoredEnemDeepBatch01,...authoredEnemDeepBatch02]){
  const topic=curriculumTopics.find(topic=>topic.subject===spec.subject&&topic.topic===spec.topic);
  assert.ok(topic);
  const delivered=starterLesson(topic);
  assert.equal(starterCoverage(topic),'thematic');
  assert.equal(delivered.id,topic.id);
  assert.deepEqual(delivered.sections,spec.sections);
  assert.deepEqual(delivered.tasks,spec.tasks);
  assert.match(delivered.authorship,/sem homologação docente/);
 }
});

test('aulas são compartilhadas somente entre exames que registram o escopo literal',()=>{
 const coverage=canonicalCoverageByExam();
 for(const spec of authoredEnemDeepBatch02){
  const topic=curriculumTopics.find(topic=>topic.subject===spec.subject&&topic.topic===spec.topic)!;
  const source=canonicalLessonForExam('enem',topic);
  assert.ok(source,'a aula precisa estar integrada ao resolvedor usado pelo app');
  assert.equal(source.id,topic.id);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   const expected=examBlueprints[exam].subjects[spec.subject]?.includes(spec.topic);
   if(expected){
    assert.strictEqual(canonicalLessonForExam(exam,topic),source,'uma única fonte, sem cópias por prova');
    assert.ok(coverage[exam].canonicalIds.includes(topic.id));
   }else assert.equal(canonicalLessonForExam(exam,topic),null);
  }
  assert.equal(deepEnemFoundationsLesson({...topic,id:topic.id+'-fake'}),null);
  assert.equal(canonicalLessonForExam('enem',{...topic,subject:'Biologia'}),null);
  assert.equal(canonicalLessonForExam('enem',{...topic,topic:topic.topic+' completo'}),null);
 }
});
