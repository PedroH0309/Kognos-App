import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {parseCourseDocument} from './course-content.ts';
import {starterCoverage,starterCoverageCounts,starterLesson,authoredStarterPatternCount,availableStarterSubjects} from './starter-lessons.ts';

test('All curriculum entries across five examinations open a complete offline three-part teaching scaffold',()=>{
 assert.ok(curriculumTopics.length>250,'Expected cross-exam catalog, not a small demo');
 const failures:string[]=[];
 const ids=new Set<string>();
 const exams=new Set<string>();
 const subjects=new Set<string>();
 for(const topic of curriculumTopics){
  const lesson=starterLesson(topic);
  for(const exam of topic.exams)exams.add(exam);
  subjects.add(topic.subject);
  if(!parseCourseDocument(lesson))failures.push(topic.subject+': '+topic.topic+' ('+topic.id+')');
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.kind,'lesson');
  assert.equal(lesson.review,'introductory');
  assert.equal(lesson.sections.length,3);
  assert.equal(lesson.tasks.length,3);
  assert.equal(lesson.topic,topic.topic);
  assert.equal(lesson.subject,topic.subject);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.sections.every(section=>section.explanation.includes('Este é um módulo introdutório')||section.level!=='basic'));
  assert.ok(!ids.has(lesson.id),'Duplicate topic ID '+lesson.id);
  ids.add(lesson.id);
 }
 assert.deepEqual([...exams].sort(),['enem','etec','fuvest','saresp','vunesp']);
 assert.ok(subjects.size>=14);
 assert.deepEqual(failures.slice(0,15),[],'Invalid complete starter documents: '+failures.length);
});
test('Coverage is real, with curated, themed and guided levels disclosed separately',()=>{
 const counts=starterCoverageCounts(curriculumTopics);
 assert.equal(counts.curated+counts.thematic+counts.guided,curriculumTopics.length);
 assert.ok(counts.thematic>50,'Themed explanatory modules should have substantive presence');
 assert.ok(counts.guided>=0);
 assert.ok(authoredStarterPatternCount>=40);
 assert.ok(availableStarterSubjects.length>=16);
 for(const topic of curriculumTopics){
  assert.ok(['curated','thematic','guided'].includes(starterCoverage(topic)));
 }
});
test('Science and mathematics seeds include original subject-specific solved practice',()=>{
 const sampleTopics=[
  ['Matemática','Notação científica','6 × 10^5'],
  ['Matemática','Porcentagem','R$ 100'],
  ['Física','Corrente elétrica','10 V'],
  ['Química','Estequiometria','2 mol'],
  ['Biologia','Mitose e meiose','23 cromossomos'],
  ['Geografia','Escala cartográfica','1 km'],
  ['História','Independência brasileira','1888'],
  ['Português','Intertextualidade e interdiscursividade','paráfrase']
 ];
 for(const [subject,topic,needle] of sampleTopics){
  const fake={id:'lesson-test',subject,topic,exams:['enem'] as (typeof curriculumTopics)[number]['exams']};
  const lesson=starterLesson(fake);
  assert.equal(starterCoverage(fake),'thematic',subject+' / '+topic);
  const text=lesson.sections.map(x=>x.explanation+' '+x.example).join(' ')+' '+
   lesson.tasks.map(x=>x.solution).join(' ');
  assert.ok(text.toLocaleLowerCase('pt-BR').includes(needle.toLocaleLowerCase('pt-BR')),
   subject+' / '+topic+' missing verified concept: '+needle);
 }
});
