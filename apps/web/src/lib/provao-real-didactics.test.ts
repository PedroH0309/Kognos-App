import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoTopics} from './provao-paulista.ts';
import {starterCoverage,starterLesson} from './starter-lessons.ts';
import {parseCourseDocument} from './course-content.ts';

const read=(path:string)=>readFileSync(new URL('../../../../'+path,import.meta.url),'utf8');
const find=(subject:string,part:string)=>{
 const row=provaoTopics.find(item=>item.subject===subject&&item.description.includes(part));
 assert.ok(row,'Missing syllabus fixture '+subject+' / '+part);
 const topic=curriculumTopics.find(item=>item.subject===subject&&item.topic===row.topic);
 assert.ok(topic,'Missing curriculum topic '+subject+' / '+part);
 return topic;
};
test('All Provão Paulista entries retain stable identifiers and valid introductory or authored material',()=>{
 const seen=new Set<string>();
 let reviewedOrSupported=0,guided=0;
 for(const topic of curriculumTopics.filter(t=>t.exams.includes('saresp'))){
  const lesson=starterLesson(topic);
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.subject,topic.subject);
  assert.equal(lesson.topic,topic.topic);
  assert.equal(lesson.sections.length,3);
  assert.ok(parseCourseDocument(lesson),'Invalid content: '+topic.id);
  assert.ok(!seen.has(topic.id));
  seen.add(topic.id);
  if(lesson.supportTopic||lesson.authorship.includes('aula autoral'))reviewedOrSupported++;
  else guided++;
 }
 assert.ok(seen.size>=360,'Expected the whole three-grade syllabus');
 assert.ok(reviewedOrSupported>=60,'Meaningful existing authored materials must be reused where explicitly aligned');
 assert.ok(guided>0,'Do not misrepresent the whole syllabus as individually written or teacher approved');
});
test('The prior thin Ecology placeholder is replaced by a subject-specific substantial lesson',()=>{
 const topic=find('Biologia','Principais conceitos de Ecologia');
 const lesson=starterLesson(topic);
 assert.match(lesson.authorship,/aula autoral específica/);
 assert.ok(!lesson.supportTopic,'Ecology content must be specifically written, not bridged');
 assert.match(lesson.sections[0].explanation,/população/);
 assert.match(lesson.sections[0].explanation,/hábitat/);
 assert.match(lesson.sections[1].explanation,/teia alimentar/);
 assert.match(lesson.sections[1].explanation,/decompositores/);
 assert.match(lesson.sections[2].explanation,/PPL = PPB/);
 assert.match(lesson.sections[2].explanation,/10%/);
 assert.ok(lesson.sections.every(section=>section.explanation.length>1100));
 assert.equal(lesson.tasks.length,6);
 for(const level of ['basic','intermediate','advanced'] as const)assert.equal(lesson.tasks.filter(t=>t.level===level).length,2);
 assert.ok(lesson.tasks.every(task=>task.solution.length>120));
 assert.equal(starterCoverage(topic),'thematic');
});
test('Bridges expose partial coverage explicitly and never impersonate complete syllabus review',()=>{
 const eq=find('Química','Equilíbrio químico');
 const lesson=starterLesson(eq);
 assert.match(lesson.supportTopic??'',/Equilíbrio químico e constantes/);
 assert.match(lesson.authorship,/correspondência parcial/);
 assert.match(lesson.review,/introductory/);
 assert.ok(lesson.sections[0].explanation.length>80);
 assert.equal(lesson.id,eq.id);
 const scopes=read('apps/web/src/components/UniversalLessonReader.tsx');
 assert.match(scopes,/Apoio temático parcial/);
 assert.match(scopes,/lesson\.supportTopic/);
 assert.match(scopes,/outros pontos previstos no edital/);
});
test('All unexpanded lessons are identified as study guides rather than fictional complete courses',()=>{
 const topic=find('Geografia','Os países e as regiões geográficas');
 const lesson=starterLesson(topic);
 assert.match(lesson.authorship,/módulo introdutório estruturado/);
 assert.equal(lesson.syllabusScope,'Os países e as regiões geográficas.');
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 assert.match(reader,/isGenericStarter\?<GuidedIntro/);
 assert.match(reader,/Aula completa pendente|aula completa pendente/);
 assert.match(reader,/Esta é uma introdução/);
 assert.match(reader,/Nenhuma nota ou domínio foi atribuído/);
 assert.doesNotMatch(read('apps/web/src/lib/provao-topic-bridges.ts'),/includes:'poliedros e corpos redondos'/);
});
test('Energy-flow simulation is interactive, didactic and makes no misleading universal claim',()=>{
 const reader=read('apps/web/src/components/UniversalLessonReader.tsx');
 const sim=read('apps/web/src/components/science/EcologyEnergyLab.tsx');
 assert.match(reader,/<EcologyEnergyLab\/>/);
 assert.match(sim,/type="range"/);
 assert.match(sim,/transfer\/100/);
 assert.match(sim,/não é uma eficiência universal/);
 assert.doesNotMatch(sim,/fetch\(|contentRequest\(|supabase|localStorage/);
});
