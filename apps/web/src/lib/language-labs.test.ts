import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 resolveLanguageLab,readingExercises,grammarExercises,englishExercises,
 validateChoice,orderedParagraph,argumentChecklist,interventionChecklist,sourceStatus
} from './language-labs.ts';
import {provaoTopics} from './provao-paulista.ts';

test('Language router uses subject and precise topic, not the whole broad discipline',()=>{
 const pt=(topic:string,unit='')=>resolveLanguageLab({subject:'Português',topic,unit});
 const en=(topic:string)=>resolveLanguageLab({subject:'Inglês',topic});
 const essay=(topic:string)=>resolveLanguageLab({subject:'Redação',topic});
 assert.equal(pt('Níveis de significação do texto: significação explícita e implícita'),'pt-reading');
 assert.equal(pt('Concordância nominal e concordância verbal'),'pt-grammar');
 assert.equal(pt('Classes de palavras: substantivo, artigo e pronome'),'pt-grammar');
 assert.equal(pt('Coordenação e subordinação. Conectivos'),'pt-cohesion');
 assert.equal(pt('Coesão lexical e referencial'),'pt-cohesion');
 assert.equal(pt('Períodos literários: Barroco'),null);
 assert.equal(en('Compreensão do sentido geral e/ou do propósito do texto'),'en-reading');
 assert.equal(en('Identificação do significado de itens lexicais, dentre eles verbos modais'),'en-modals');
 assert.equal(en('Identificação da referência textual de elementos de coesão tais como pronomes'),'en-reference');
 assert.equal(essay('Redação: compreensão e atendimento ao tema'),'essay-theme');
 assert.equal(essay('Redação: estrutura dissertativo-argumentativa e coerência'),'essay-structure');
 assert.equal(essay('Redação: coesão textual e norma-padrão'),'essay-cohesion');
 assert.equal(essay('Redação: proposta de intervenção e direitos humanos'),'essay-intervention');
 assert.equal(resolveLanguageLab({subject:'Física',topic:'Concordância verbal'}),null);
 assert.equal(resolveLanguageLab({subject:'Química',topic:'Interpretação de texto'}),null);
 assert.equal(resolveLanguageLab({subject:'Matemática',topic:'Funções e gráficos'}),null);
});

test('Exercises are authored, have bounded answer keys and evidence-specific feedback',()=>{
 for(const [label,items] of Object.entries({pt:readingExercises,grammar:grammarExercises,en:englishExercises})){
  assert.ok(items.length>=3,label);
  for(const item of items){
   assert.ok(item.text.length>=50,item.id);
   assert.equal(item.options.length,3);
   assert.ok(Number.isInteger(item.correct));
   assert.ok(item.correct>=0&&item.correct<item.options.length);
   assert.ok(item.evidence.length>18,item.id);
   assert.equal(validateChoice(item,item.correct)?.correct,true);
   for(const i of item.options.keys()){
    assert.equal(validateChoice(item,i)?.correct,i===item.correct);
   }
   assert.equal(validateChoice(item,-1),null);
   assert.equal(validateChoice(item,3),null);
  }
 }
});

test('Ordered paragraph preserves all unique blocks and never silently invents content',()=>{
 const blocks=['Situação inicial','Evidência','Síntese'];
 assert.deepEqual(orderedParagraph(blocks,[0,1,2]),blocks);
 assert.deepEqual(orderedParagraph(blocks,[1,0,2]),['Evidência','Situação inicial','Síntese']);
 assert.equal(orderedParagraph(blocks,[0,0,2]),null);
 assert.equal(orderedParagraph(blocks,[0,2]),null);
});

test('Argument and intervention checklists are reflective, not official automatic scoring',()=>{
 const argument=argumentChecklist({thesis:'',reason:'Dados recentes',evidence:'Uma pesquisa',connection:''});
 assert.deepEqual(argument.present,['reason','evidence']);
 assert.deepEqual(argument.missing,['thesis','connection']);
 const intervention=interventionChecklist({agent:'Escola',action:'Oferecer oficinas',means:'Em aulas abertas',effect:'Melhorar a leitura',detail:''});
 assert.deepEqual(intervention.missing,['detail']);
 assert.equal(intervention.grade,null);
 assert.equal(sourceStatus('essay-theme'),'Exercício autoral de planejamento, sem correção oficial');
});

test('Provão Paulista 2026 Portuguese and English entries retain honest coverage',()=>{
 const official=provaoTopics.filter(t=>['Português','Inglês','Redação'].includes(t.subject));
 const covered=official.filter(t=>resolveLanguageLab({subject:t.subject,topic:t.topic,description:t.description,unit:t.unit})!==null);
 assert.ok(covered.length>40,'Expected at least 40 matching series-specific items');
 assert.ok(official.some(t=>t.subject==='Português'&&resolveLanguageLab({subject:t.subject,topic:t.topic,description:t.description,unit:t.unit})===null),
  'Literature and other topics without a bespoke lab must stay in general exploration');
 for(const subject of ['Português','Inglês','Redação']){
  assert.ok(covered.some(t=>t.subject===subject),subject);
 }
});
