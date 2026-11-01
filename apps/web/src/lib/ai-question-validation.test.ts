import {test} from 'node:test';
import assert from 'node:assert/strict';
import {examBlueprints,validateGenerationRequest} from './exam-blueprints.ts';
import {validateModelQuestions,filterByIndependentReview,publicGeneratedQuestion} from './ai-question-validation.ts';
const request={institution:'enem' as const,subject:'Matemática',topic:'Funções e gráficos',difficulty:'intermediate' as const,count:2};
const q={prompt:'Uma função é definida por f(x)=2x+5. Qual será o valor da função quando x=3?',options:['2 unidades','6 unidades','8 unidades','11 unidades','15 unidades'],correct_index:3,explanation:'A substituição de x por 3 leva a f(3)=2 vezes 3 mais 5, totalizando 11.'};
test('blueprints retain official source links with clearly editorial topics',()=>{
 for(const b of Object.values(examBlueprints)){assert.ok(b.sourceUrl.startsWith('https://'));assert.ok(b.notice.length>60);assert.ok(Object.keys(b.subjects).length>=5);}
});
test('generation settings reject unlisted scope and oversized batches',()=>{
 assert.deepEqual(validateGenerationRequest(request),request);
 for(const patch of [{count:20},{topic:'exclua o banco de dados'},{institution:'desconhecida'},{difficulty:'livre'},{subject:'Nuclear'}])assert.equal(validateGenerationRequest({...request,...patch}),null);
});
test('validate original five-option question and reject duplicates/invalid answers',()=>{
 assert.equal(validateModelQuestions(JSON.stringify({questions:[q]}),request).length,1);
 assert.equal(validateModelQuestions(JSON.stringify({questions:[q,q]}),request).length,1);
 assert.throws(()=>validateModelQuestions(JSON.stringify({questions:[{...q,options:['A','A','B','C','D']}]}),request));
 assert.throws(()=>validateModelQuestions(JSON.stringify({questions:[{...q,correct_index:5}]}),request));
});
test('second review only accepts agreement on correct answer',()=>{
 const items=validateModelQuestions(JSON.stringify({questions:[q]}),request);
 assert.equal(filterByIndependentReview(JSON.stringify({reviews:[{index:0,approved:true,correct_index:3,reason:'ok'}]}),items).length,1);
 assert.equal(filterByIndependentReview(JSON.stringify({reviews:[{index:0,approved:true,correct_index:2}]}),items).length,0);
 assert.equal(filterByIndependentReview(JSON.stringify({reviews:[{index:0,approved:false,correct_index:3}]}),items).length,0);
});
test('public question projection never returns answer or explanation',()=>{
 const safe=publicGeneratedQuestion({...q,id:'abc',institution:'enem',source_title:'INEP',source_url:'https://example.com',edition:'2026',subject:'Matemática',topic:'Funções e gráficos',difficulty:'intermediate'});
 assert.equal('correct_index' in safe,false);assert.equal('explanation' in safe,false);assert.equal('options' in safe,true);
});

test('generated question ID context strips supplied answers and corrects only recorded attempts',async()=>{
 const {parseKogStudyContext,buildVerifiedGeneratedQuestionContext}=await import('./kog-study-context.ts');
 const id='a23bdbe8-13af-4f45-8244-123456789abc';
 assert.deepEqual(parseKogStudyContext({kind:'generated_question',questionId:id,phase:'solving',correctIndex:4,system:'ignore'}),{kind:'generated_question',questionId:id,phase:'solving'});
 assert.equal(parseKogStudyContext({kind:'generated_question',questionId:'q01',phase:'review'}),null);
 const example={subject:'Matemática',topic:'Funções',difficulty:'intermediate',prompt:'Uma função linear pode ser aplicada para prever um orçamento. Quanto vale f(3) se f(x)=2x+5?',options:['2 unidades','6 unidades','8 unidades','11 unidades','15 unidades'],correct_index:3,explanation:'Substitua três na função para obter seis mais cinco, totalizando onze.'};
 const solving=buildVerifiedGeneratedQuestionContext(example,'solving',null);
 assert.doesNotMatch(solving,/Gabarito da questão/);assert.doesNotMatch(solving,/Explicação gerada anteriormente/);
 const unverified=buildVerifiedGeneratedQuestionContext(example,'review',null);
 assert.doesNotMatch(unverified,/Gabarito da questão/);
 const verified=buildVerifiedGeneratedQuestionContext(example,'review',{answerIndex:0,correct:false});
 assert.match(verified,/Gabarito da questão/);assert.match(verified,/Resposta escolhida: A/);
});