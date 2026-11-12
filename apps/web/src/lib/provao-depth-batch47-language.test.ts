import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {courseId} from './curriculum-id.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {provaoTopics} from './provao-paulista.ts';
import {canonicalLessonForExam,officialProvaoCanonicalGradeMappings,officialProvaoGradeCoverage} from './canonical-lesson-reuse.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

const expectedTitles=[
 'Relação do texto com seu contexto histórico e cultural',
 'Intertextualidade e interdiscursividade',
 'Interação entre texto verbal e não verbal',
 'Períodos literário: Barroco',
 'Análise literária: gêneros literários (poema e conto); elementos de composição; recursos…'
] as const;
const expectedCodes=['4.5','4.6','4.7','5.1.1','5.2.1'];
const expectedRows=[3,3,3,3,6];

test('batch 47 authors five exact official themes with validated depth and unique MCQs',()=>{
 const seenPrompts=new Set<string>();
 const seenOfficialCodes=new Set<string>();
 assert.equal(new Set(expectedTitles).size,5);
 for(const [topicIndex,title] of expectedTitles.entries()){
  const official=provaoTopics.filter(row=>row.subject==='Português'&&row.topic===title);
  assert.equal(official.length,expectedRows[topicIndex]);
  assert.deepEqual([...new Set(official.map(row=>row.grade))],[1,2,3]);
  assert.ok(official.some(row=>row.code===expectedCodes[topicIndex]));
  for(const row of official)seenOfficialCodes.add(row.grade+':'+row.code);
  assert.ok(deepProvaoTopicKeys.includes('Português · '+title));
  const id=courseId('Português',title);
  const topic=curriculumTopics.find(row=>row.id===id&&row.subject==='Português'&&row.topic===title);
  assert.ok(topic,'Historical topic ID must remain unchanged');
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Deep lesson absent: '+title);
  assert.equal(lesson.id,id);
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  assert.ok(lesson.prerequisites.length>=3);
  assert.match(lesson.authorship,/autoral aprofundada/);
  assert.match(lesson.authorship,/revisão docente pendente/);
  assert.match(lesson.license,/não oficial/);
  for(const [i,section] of lesson.sections.entries()){
   assert.equal(section.level,['basic','intermediate','advanced'][i]);
   assert.ok(section.explanation.length>=750,'Lesson section too short: '+title+'/'+i);
   assert.ok(section.example.length>=70);
   assert.ok(section.pitfall.length>=25);
   assert.equal(section.steps.length,3);
   assert.ok(section.steps.every(step=>step.length>=25));
  }
  for(const [i,task] of lesson.tasks.entries()){
   assert.equal(task.level,['basic','intermediate','advanced'][i]);
   assert.ok(task.options,'All tasks must be objective A–D');
   assert.equal(task.options.length,4);
   assert.equal(new Set(task.options).size,4,'Duplicated alternatives: '+title);
   const key=task.correctIndex;
   assert.ok(key!==undefined&&Number.isInteger(key)&&key>=0&&key<4);
   assert.ok(task.options[key].trim().length>0);
   assert.ok(task.prompt.length>=40);
   assert.ok(task.hint.length>=50);
   assert.ok(task.solution.length>=100);
   assert.equal(seenPrompts.has(task.prompt),false,'Repeated question prompt across themes');
   seenPrompts.add(task.prompt);
  }
 }
 assert.equal(seenPrompts.size,15);
 assert.ok(seenOfficialCodes.size>=15);
});

test('batch 47 reuses one authored canonical per official title across all valid grade codes',()=>{
 const mappings=officialProvaoCanonicalGradeMappings();
 const coverage=officialProvaoGradeCoverage();
 for(const [index,title] of expectedTitles.entries()){
  const canonicalId=courseId('Português',title);
  const refs=mappings.filter(row=>row.subject==='Português'&&row.officialTitle===title);
  assert.equal(refs.length,expectedRows[index]);
  assert.deepEqual([...new Set(refs.map(row=>row.grade))],[1,2,3]);
  assert.equal(new Set(refs.map(row=>row.canonicalId)).size,1);
  assert.equal(refs[0].canonicalId,canonicalId);
  for(const ref of refs){
   assert.strictEqual(ref.lesson.sections,refs[0].lesson.sections);
   assert.strictEqual(ref.lesson.tasks,refs[0].lesson.tasks);
   assert.ok(ref.officialCode);
   assert.ok(coverage.find(item=>item.grade===ref.grade)?.uniqueCanonicalDeepIds.includes(canonicalId));
  }
  const curriculum=curriculumTopics.find(topic=>topic.id===canonicalId);
  assert.ok(curriculum);
  const editorial=canonicalLessonForExam('saresp',curriculum);
  assert.ok(editorial);
  assert.equal(editorial.id,canonicalId);
  assert.strictEqual(editorial.sections,refs[0].lesson.sections);
  assert.strictEqual(editorial.tasks,refs[0].lesson.tasks);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   if(examBlueprints[exam].subjects.Português?.includes(title))continue;
   assert.equal(canonicalLessonForExam(exam,curriculum),null,
    'An unrelated exam must not inherit a Provão title: '+exam+'/'+title);
  }
 }
});
