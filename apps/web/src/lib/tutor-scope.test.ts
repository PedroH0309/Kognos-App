import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 tutorScopeReply,enforcePedagogicalTutorAnswer,
 PEDAGOGICAL_CODE_REPLY,PEDAGOGICAL_OFF_TOPIC_REPLY,PEDAGOGICAL_OUTPUT_REPLY
} from './tutor-scope.ts';

test('refuses copy-paste Java Hello World and other executable source requests',()=>{
 const requests=[
  'me de uma linha de codigo em java rodando hello world',
  'Me dê uma linha de código em Java rodando Hello World',
  'Gere um código Python que imprima Hello World',
  'Escreva um script em JavaScript',
  'Crie um app funcionando',
  'Monte um site em HTML',
  'Faça um programa em Java que calcule a média',
  'Me envie um trecho de código de um algoritmo',
  'Pode me dar um exemplo de código pronto?',
 ];
 for(const prompt of requests)
  assert.equal(tutorScopeReply(prompt),PEDAGOGICAL_CODE_REPLY,prompt);
});

test('does not block genuine conceptual or school questions, including programming education',()=>{
 const learning=[
  'Como interpretar melhor o enunciado de uma questão?',
  'O que é porcentagem e como resolver uma questão?',
  'Pode me explicar o que significa uma variável em Java?',
  'Qual é a diferença entre Python e Java?',
  'Me dê uma explicação sobre o código genético',
  'Crie cinco questões de equação do segundo grau para eu praticar',
  'Explique o conceito de loops sem usar código',
  'Dê um exemplo resolvido de física',
  'O que é a função das mitocôndrias?',
  'Como organizar minha rotina de estudos?',
 ];
 for(const prompt of learning)assert.equal(tutorScopeReply(prompt),null,prompt);
});

test('declines obvious unrelated entertainment, weather and turnkey coursework',()=>{
 for(const prompt of [
  'Conte uma piada',
  'Qual a previsão do tempo hoje?',
  'Me dê uma receita de bolo',
  'Faça minha redação completa',
  'Escreva minha redação inteira',
  'Me dê uma playlist para treinar'
 ])assert.equal(tutorScopeReply(prompt),PEDAGOGICAL_OFF_TOPIC_REPLY,prompt);
});

test('does not show executable snippets or Markdown code fences even if model ignores the prompt',()=>{
 const snippets=[
  '\x60\x60\x60java\nclass Main { public static void main(String[] args) {} }\n\x60\x60\x60',
  'System.out.println("Hello, world!");',
  'console.log("Hello world");',
  'def hello():\n    print("hello")',
  '<html><body>Oi</body></html>',
 ];
 for(const content of snippets)assert.equal(enforcePedagogicalTutorAnswer(content),PEDAGOGICAL_OUTPUT_REPLY);
 assert.equal(enforcePedagogicalTutorAnswer('Uma variável armazena um valor; pense nela como uma caixa com nome.'),'Uma variável armazena um valor; pense nela como uma caixa com nome.');
});

test('ignores empty input and only redirects obvious non-pedagogical tasks',()=>{
 assert.equal(tutorScopeReply(''),null);
 assert.equal(tutorScopeReply('Me ajuda a estudar para o ENEM?'),null);
});
