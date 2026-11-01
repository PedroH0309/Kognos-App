import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildTutorSystemPrompt, sanitizeHistory, validateTutorMessage } from './tutor.ts';
import { defaultForDyslexia, defaultForTDAH, initialProfile, normalizeProfile } from './profile.ts';

test('perfil impede atributos desconhecidos e remove valores indevidos',()=>{
 const p=normalizeProfile({...initialProfile,nickname:'X'.repeat(70),dailyMinutes:9999,goal:'unknown',adaptations:['short_blocks','x']});
 assert.equal(p.nickname.length,60);assert.equal(p.dailyMinutes,480);assert.equal(p.goal,'enem');assert.deepEqual(p.adaptations,['short_blocks']);
});
test('TDAH/dislexia viram preferências funcionais sem rotular aluno no prompt',()=>{
 const p={...initialProfile,adaptations:[...defaultForDyslexia,...defaultForTDAH]};
 const prompt=buildTutorSystemPrompt(p,'Física');
 assert.match(prompt,/Blocos curtos/);assert.match(prompt,/Mais espaçamento/);assert.match(prompt,/disciplina escolhida: Física/);
 assert.doesNotMatch(prompt, /O aluno tem TDAH/);
});
test('valida tamanho e conteúdo das perguntas',()=>{
 assert.equal(validateTutorMessage(''), 'Escreva uma pergunta para o tutor.');
 assert.equal(validateTutorMessage('oi'),null);
 assert.match(validateTutorMessage('a'.repeat(3001))??'', /Máximo/);
});
test('histórico de IA não permite papéis system e limita conteúdo',()=>{
 const history=sanitizeHistory([{role:'system',content:'hack'},{role:'user',content:'como calcular?'},{role:'assistant',content:'olá'}]);
 assert.equal(history.length,2);assert.equal(history[0].role,'user');
});

test('Kog follows teaching guidelines and does not repeat prior consent requirement',()=>{
 const prompt=buildTutorSystemPrompt(initialProfile,'Química','CONTEXTO VERIFICADO: questão EM ANDAMENTO');
 assert.match(prompt,/explique do simples/i);
 assert.match(prompt,/mini exercício/i);
 assert.match(prompt,/não revele a alternativa correta/i);
 assert.match(prompt,/NVIDIA/);
 assert.doesNotMatch(prompt,/somente com autorização explícita/);
 assert.match(prompt,/CONTEXTO VERIFICADO/);
});