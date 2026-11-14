import {test} from 'node:test';
import assert from 'node:assert/strict';
import {studyContentStatus,studyContentInventory} from './study-content-status.ts';
import {learningCatalogForExam} from './lesson-ai-links.ts';
import {learningLessons} from './learning-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {deepEnemLesson} from './enem-depth-batch01.ts';

test('uma aula canônica profunda é distinguida de metadados e introduções',()=>{
 const catalog=learningCatalogForExam('enem');
 const authored=catalog.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Análise combinatória');
 const planned=catalog.find(lesson=>lesson.subject==='Matemática'&&lesson.topic==='Ângulos e retas paralelas');
 const intro=learningLessons.find(lesson=>lesson.id==='math-percentages');
 assert.ok(authored&&planned&&intro);
 assert.equal(studyContentStatus(authored,'enem'),'authored');
 assert.equal(studyContentStatus(planned,'enem'),'planned');
 assert.equal(studyContentStatus(intro,'enem'),'introductory');
});

test('um ID ou escopo adulterado não pode ser apresentado como aula completa',()=>{
 const lesson=learningCatalogForExam('enem').find(lesson=>lesson.topic==='Análise combinatória');
 assert.ok(lesson);
 assert.equal(studyContentStatus({...lesson,id:'course-forged',curriculumId:'course-forged'},'enem'),'planned');
 assert.equal(studyContentStatus({...lesson,subject:'Biologia'},'enem'),'planned');
 assert.equal(studyContentStatus({...lesson,topic:'Análise combinatória e probabilidade'},'enem'),'planned');
});

test('o resumo reconcilia o catálogo sem transformar lacunas em aulas disponíveis',()=>{
 const catalog=learningCatalogForExam('enem');
 const inventory=studyContentInventory(catalog,'enem');
 assert.equal(inventory.total,catalog.length);
 assert.equal(inventory.authored+inventory.introductory+inventory.planned,inventory.total);
 assert.ok(inventory.authored>0&&inventory.planned>inventory.authored);
 assert.equal([...inventory.byId.values()].length,catalog.length);
 assert.ok([...inventory.byId.entries()].filter(([,status])=>status!=='planned').every(([id])=>catalog.some(lesson=>lesson.id===id)));
 const empty=studyContentInventory([],'enem');
 assert.equal(empty.total,0);
 assert.equal(empty.authored,0);
});

test('introduções antigas não escondem aulas aprofundadas que já existem',()=>{
 const catalog=learningCatalogForExam('enem');
 const inventory=studyContentInventory(catalog,'enem');
 for(const id of ['bio-vaccines','hist-industry','pt-cohesion']){
  assert.equal(inventory.byId.get(id),'authored',id+': abrir a fonte aprofundada mantendo o ID histórico');
  assert.ok(inventory.authoredTopicById.get(id));
  const target=inventory.authoredTopicById.get(id)!;
  assert.equal((deepProvaoLesson(target)??deepEnemLesson(target))?.id,target.id,'abrir o ID da fonte real, inclusive nos aliases revisados');
 }
});
