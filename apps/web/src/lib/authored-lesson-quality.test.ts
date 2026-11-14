import {test} from 'node:test';
import assert from 'node:assert/strict';
import {authoredEnemDeepBatch02} from './enem-depth-batch02.ts';
import {authoredLessonQualityIssues} from './authored-lesson-quality.ts';

test('o contrato comum aceita as cinco aulas já conferidas sem reduzir os limites',()=>{
 for(const lesson of authoredEnemDeepBatch02)assert.deepEqual(authoredLessonQualityIssues(lesson),[],lesson.topic);
});

test('rascunhos curtos, genéricos ou sem método não passam pela extensão do título',()=>{
 const lesson=structuredClone(authoredEnemDeepBatch02[0]);
 lesson.sections[0].explanation='Conteúdo em desenvolvimento. '+lesson.topic;
 lesson.sections[1].steps=[];
 lesson.sections[2].example='Exemplo a escrever.';
 const errors=authoredLessonQualityIssues(lesson);
 assert.ok(errors.some(error=>error.includes('sections.0.explanation')));
 assert.ok(errors.some(error=>error.includes('sections.1.steps')));
 assert.ok(errors.some(error=>error.includes('sections.2.example')));
});

test('formatos devolvidos incorretamente pelo Claude são recusados sem conversão silenciosa',()=>{
 assert.ok(authoredLessonQualityIssues(null).length);
 const lesson=structuredClone(authoredEnemDeepBatch02[0]) as unknown as Record<string,unknown>;
 lesson.sections=[{level:'basic',steps:'passo 1; passo 2; passo 3'}];
 assert.ok(authoredLessonQualityIssues(lesson).some(error=>error.includes('sections')));
});

test('alternativas ambíguas, ausência de figura e índice inválido impedem aceitação',()=>{
 const lesson=structuredClone(authoredEnemDeepBatch02[0]);
 lesson.tasks[0].options=['58°','58°','122°','90°'];
 lesson.tasks[1].correctIndex=4;
 lesson.tasks[2].prompt='Na figura abaixo, descubra o ângulo marcado por x.';
 const errors=authoredLessonQualityIssues(lesson);
 assert.ok(errors.some(error=>error.includes('tasks.0.options')));
 assert.ok(errors.some(error=>error.includes('tasks.1.correctIndex')));
 assert.ok(errors.some(error=>error.includes('tasks.2.prompt')));
});

test('ordem dos níveis, questões recicladas e repetição de capítulos são recusadas',()=>{
 const lesson=structuredClone(authoredEnemDeepBatch02[0]);
 lesson.sections[1].level='basic';
 lesson.sections[2].explanation=lesson.sections[0].explanation;
 lesson.tasks[1].prompt=lesson.tasks[0].prompt;
 assert.ok(authoredLessonQualityIssues(lesson).length>=3);
});

test('palavras corrompidas por mistura de alfabetos são recusadas sem proibir referências isoladas',()=>{
 for(const broken of ['estratégias de 설득ção','um retrato似 apresentado']){
  const lesson=structuredClone(authoredEnemDeepBatch02[0]);lesson.sections[0].explanation+=' '+broken;
  assert.ok(authoredLessonQualityIssues(lesson).some(error=>error.includes('sections.0.explanation')&&error.includes('alfabetos')));
 }
 const lesson=structuredClone(authoredEnemDeepBatch02[0]);
 lesson.sections[0].example+=' Referência linguística isolada e identificada: 漢字.';
 assert.deepEqual(authoredLessonQualityIssues(lesson),[]);
});
