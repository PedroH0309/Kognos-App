import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoTopics} from './provao-paulista.ts';
import {courseId} from './curriculum-id.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {officialProvaoCanonicalGradeMappings,officialProvaoGradeCoverage,canonicalLessonForExam} from './canonical-lesson-reuse.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

const expectedTitles=[
 'Distinção entre variedades linguísticas: categorias sociais e contextos de comunicação;…',
 'Níveis de significação do texto: significação explícita e significação implícita; denotação e…',
 'Estratégias de articulação do texto: mecanismos de coesão (coesão lexical, referencial e…',
 'Modos de organização do texto: descrição, narração e dissertação',
 'Citação de discursos: discurso direto, discurso indireto e discurso indireto livre'
] as const;

test('batch 46 provides five distinct official Provão Portuguese lessons with three deep objective chapters',()=>{
 assert.equal(new Set(expectedTitles).size,5);
 const seenPrompts=new Set<string>();
 for(const topicTitle of expectedTitles){
  const official=provaoTopics.filter(row=>row.subject==='Português'&&row.topic===topicTitle);
  assert.deepEqual(official.map(row=>row.grade),[1,2,3],
   'Exact official syllabus identity must exist in every grade: '+topicTitle);
  assert.ok(deepProvaoTopicKeys.includes('Português · '+topicTitle));
  const id=courseId('Português',topicTitle);
  const topic=curriculumTopics.find(row=>row.id===id&&row.subject==='Português'&&row.topic===topicTitle);
  assert.ok(topic,'Historical curriculum topic remains registered');
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing authored deep lesson for '+topicTitle);
  assert.equal(lesson.id,id);
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  assert.equal(lesson.prerequisites.length>=3,true);
  assert.match(lesson.authorship,/autoral aprofundada/);
  assert.match(lesson.authorship,/revisão docente pendente/);
  assert.match(lesson.license,/não oficial/);
  for(const [index,section] of lesson.sections.entries()){
   assert.equal(section.level,['basic','intermediate','advanced'][index]);
   assert.ok(section.explanation.length>=750,topicTitle+' chapter '+index+' was too short');
   assert.ok(section.example.length>=70);
   assert.ok(section.pitfall.length>=25);
   assert.equal(section.steps.length,3);
   assert.ok(section.steps.every(step=>step.length>=25));
  }
  for(const [index,task] of lesson.tasks.entries()){
   assert.equal(task.level,['basic','intermediate','advanced'][index]);
   assert.ok(task.options);
   assert.equal(task.options.length,4,'Every exercise must have A–D choices');
   assert.equal(new Set(task.options).size,4,'No duplicate alternatives');
   const correct=task.correctIndex;
   assert.ok(correct!==undefined&&Number.isInteger(correct)&&correct>=0&&correct<4);
   assert.ok(task.hint.length>=50);
   assert.ok(task.solution.length>=100);
   assert.ok(!seenPrompts.has(task.prompt),'Each prompt must be authorial and distinct');
   seenPrompts.add(task.prompt);
  }
 }
 assert.equal(seenPrompts.size,15);
});

test('batch 46 shares one canonical lesson across Provão grades 1–3 without granting unrelated exams coverage',()=>{
 const mappings=officialProvaoCanonicalGradeMappings();
 const gradeCoverage=officialProvaoGradeCoverage();
 for(const title of expectedTitles){
  const id=courseId('Português',title);
  const gradeRefs=mappings.filter(row=>row.subject==='Português'&&row.officialTitle===title);
  assert.deepEqual(gradeRefs.map(row=>row.grade),[1,2,3]);
  assert.equal(new Set(gradeRefs.map(row=>row.canonicalId)).size,1);
  assert.equal(gradeRefs[0].canonicalId,id);
  for(const ref of gradeRefs){
   assert.strictEqual(ref.lesson.sections,gradeRefs[0].lesson.sections);
   assert.strictEqual(ref.lesson.tasks,gradeRefs[0].lesson.tasks);
   assert.ok(ref.officialCode);
   assert.ok(gradeCoverage.find(item=>item.grade===ref.grade)?.uniqueCanonicalDeepIds.includes(id));
  }
  const curriculum=curriculumTopics.find(topic=>topic.id===id);
  assert.ok(curriculum);
  const editorial=canonicalLessonForExam('saresp',curriculum);
  assert.ok(editorial);
  assert.equal(editorial.id,id);
  assert.strictEqual(editorial.sections,gradeRefs[0].lesson.sections);
  assert.strictEqual(editorial.tasks,gradeRefs[0].lesson.tasks);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   if(examBlueprints[exam].subjects.Português?.includes(title))continue;
   assert.equal(canonicalLessonForExam(exam,curriculum),null,
    'Unregistered exam inherited a Provão lesson: '+exam+'/'+title);
  }
 }
});
