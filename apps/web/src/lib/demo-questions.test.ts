import {test} from 'node:test';import assert from 'node:assert/strict';
import {demoQuestions,statsFromAttempts} from './demo-questions.ts';
test('questões demonstrativas têm IDs únicos e alternativas válidas',()=>{
 assert.equal(demoQuestions.length,20);assert.equal(new Set(demoQuestions.map(q=>q.id)).size,20);
 for(const q of demoQuestions){assert.equal(q.options.length,4);assert.ok(q.correct>=0&&q.correct<4);assert.ok(q.explanation.length>15);}
});
test('estatísticas são derivadas de respostas existentes, não fictícias',()=>{
 assert.deepEqual(statsFromAttempts([]),{answered:0,correct:0,accuracy:null});
 assert.deepEqual(statsFromAttempts([{questionId:'1',subject:'Física',correct:true,answerIndex:0,createdAt:'x',mode:'practice'},{questionId:'2',subject:'Física',correct:false,answerIndex:0,createdAt:'x',mode:'mock'}]),{answered:2,correct:1,accuracy:50});
});
