import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildRegistryModule,fingerprint,lessonPrompt,parseResponse,responseText,validateGenerated} from '../scripts/content-generation-core.mjs';

const topic={id:'matematica-fracoes-e-operacoes',subject:'Matemática',topic:'Frações e operações',exams:['enem','fuvest']};
const section=(level,index)=>({
 level,title:'Fundamentos sólidos de frações '+index,
 explanation:('Uma fração representa uma divisão cujo denominador não é zero. Para somar duas frações, igualamos denominadores e preservamos numeradores proporcionais. ').repeat(6)+' Etapa didática distinta '+index+'.',
 steps:['Identifique todos os denominadores presentes.','Calcule um múltiplo comum e reescreva cada parcela.','Efetue a operação, simplifique e confira o resultado.'],
 example:('Para calcular 1/3 + 1/4, use 12 como denominador comum: 4/12 + 3/12 = 7/12. Isso corresponde a uma soma de partes fracionárias e não a 2/7. ').repeat(2)+' Exemplo do estágio '+index+'.',
 pitfall:'Somar os denominadores diretamente altera o significado das partes do inteiro e gera resultado incorreto.'
});
const task=(level,n)=>({
 level,prompt:'No problema original '+n+', calcule a soma de 1/3 com 1/4 e justifique por que os denominadores não podem ser somados diretamente.',
 hint:'Procure um múltiplo comum para os denominadores 3 e 4 antes de calcular o resultado.',
 solution:'O denominador comum mínimo é 12. Escreva 1/3 como 4/12 e 1/4 como 3/12; adicione os numeradores, obtendo 7/12. A divisão em doze partes iguais torna possível a soma das duas frações.'
});
const valid=()=>({
 objective:'Interpretar frações e efetuar operações com denominadores diferentes sem perder o significado das partes da unidade.',
 prerequisites:[],sections:['basic','intermediate','advanced'].map(section),
 tasks:['basic','basic','intermediate','intermediate','advanced','advanced'].map(task)
});

test('Generated lesson requires full subject-specific content, three levels and six graduated tasks',()=>{
 const out=validateGenerated(topic,valid(),['https://www.gov.br/inep/']);
 assert.equal(out.ok,true,out.issues.join(', '));
 assert.equal(out.lesson.review,'introductory');
 assert.equal(out.lesson.tasks.length,6);
 assert.equal(out.lesson.authorship.includes('revisão docente pendente'),true);
 assert.equal(out.lesson.id,topic.id);
});
test('Fail closed when lessons are incomplete, answers too short or examples duplicated',()=>{
 const wrong=valid();
 wrong.tasks[2].solution='Resposta: 2';
 wrong.sections[1].example=wrong.sections[0].example;
 assert.equal(validateGenerated(topic,wrong).ok,false);
 const bad=validateGenerated(topic,wrong);
 assert.ok(bad.issues.includes('task-2-solution'));
 assert.ok(bad.issues.includes('duplicate-example'));
});
test('Model response fields cannot override official metadata',()=>{
 const draft=valid();
 draft.review='editor';draft.id='forged';draft.sourceUrls=['http://insecure.local'];draft.authorship='assinado por professor';
 const result=validateGenerated(topic,draft,['https://www.gov.br/inep/']);
 assert.equal(result.ok,true);
 assert.equal(result.lesson.id,topic.id);
 assert.equal(result.lesson.review,'introductory');
 assert.equal(result.lesson.sourceUrls[0],'https://www.gov.br/inep/');
 assert.notEqual(result.lesson.authorship,draft.authorship);
});
test('Prompt respects topic, no claims of official exam or educator approval',()=>{
 const prompt=lessonPrompt(topic,{description:'Frações e equivalência','unit':'Números'});
 assert.match(prompt,/Frações e operações/);
 assert.match(prompt,/Frações e equivalência/);
 assert.match(prompt,/NÃO copiar questões oficiais/);
 assert.match(prompt,/JSON/);
});
test('Providers decode JSON and no arbitrary response or non-JSON passes',()=>{
 assert.deepEqual(parseResponse('{"sections":[]}'),{sections:[]});
 assert.throws(()=>parseResponse('texto sem JSON'));
 assert.equal(responseText({candidates:[{content:{parts:[{text:'{"a":1}'}]}}]},'gemini'),'{"a":1}');
 assert.equal(responseText({choices:[{message:{content:'{"b":2}'}}]},'groq'),'{"b":2}');
 assert.throws(()=>responseText({},'gemini'));
});
test('Stable registry build rejects repeated IDs and snapshots original sources',()=>{
 const l=validateGenerated(topic,valid()).lesson;
 const module=buildRegistryModule([l]);
 assert.match(module,/generatedLesson/);
 assert.match(module,/matematica-fracoes-e-operacoes/);
 assert.equal(fingerprint(l),fingerprint({...l,subject:'Algebra'}));
 assert.throws(()=>buildRegistryModule([l,l]),/Duplicated lesson ID/);
});
