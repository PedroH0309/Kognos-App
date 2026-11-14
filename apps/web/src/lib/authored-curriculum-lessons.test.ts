import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {authoredCurriculumSpecs,deepAuthoredCurriculumLesson} from './authored-curriculum-lessons.ts';
import {authoredCurriculumReviewRecords} from './authored-curriculum-batch03.ts';
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
