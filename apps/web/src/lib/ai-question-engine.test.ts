import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createAndReviewQuestionBatch} from './nvidia-question-engine.ts';

const keys=['GROQ_API_KEY','GEMINI_API_KEY','AI_GENERATE_PROVIDER','AI_GENERATE_MODEL',
 'AI_REVIEW_PROVIDER','AI_REVIEW_MODEL'];
function configure(){
 const previous=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
 process.env.GROQ_API_KEY='test-key-groq';
 process.env.GEMINI_API_KEY='test-key-gemini';
 process.env.AI_GENERATE_PROVIDER='groq';
 process.env.AI_GENERATE_MODEL='openai/gpt-oss-120b';
 process.env.AI_REVIEW_PROVIDER='gemini';
 process.env.AI_REVIEW_MODEL='gemini-3.1-flash-lite';
 return()=>{for(const k of keys){const value=previous[k];if(value===undefined)delete process.env[k];else process.env[k]=value;}};
}
const questions=Array.from({length:5},(_,index)=>({
 prompt:`Uma loja aplicou um desconto de vinte por cento sobre o preço de uma mercadoria do lote ${index+1}. Qual é o valor final?`,
 options:['R$ 12,00','R$ 14,00','R$ 16,00','R$ 18,00','R$ 20,00'],
 correct_index:3,
 explanation:'O estudante deve calcular vinte por cento do preço original e depois subtrair o desconto. A alternativa D representa o resultado correto neste exercício.'
}));
const response=(content:string)=>new Response(JSON.stringify({
 choices:[{message:{content},finish_reason:'stop'}]
}),{status:200,headers:{'Content-Type':'application/json'}});
const approved=(size:number)=>JSON.stringify({reviews:Array.from({length:size},(_,index)=>({
 index,approved:true,correct_index:3,reason:'O resultado correto corresponde à alternativa D.'
}))});

test('one generation plus a targeted incomplete review recovers five verified questions',async()=>{
 const restore=configure(),originalFetch=globalThis.fetch;
 const calls:{host:string;body:any}[]=[];
 globalThis.fetch=async (url,init)=>{
  const host=String(url);
  const body=JSON.parse(String(init?.body));
  calls.push({host,body});
  if(calls.length===1)return response(JSON.stringify({questions}));
  if(calls.length===2)return response(approved(1));
  if(calls.length===3)return response(approved(4));
  throw new Error('Unexpected provider request');
 };
 try{
  const result=await createAndReviewQuestionBatch({
   institution:'enem',subject:'Matemática',topic:'Porcentagem e razão',difficulty:'intermediate',count:5,variation:2
  });
  assert.equal(result.approved.length,5);
  assert.equal(result.diagnostics.generated,5);
  assert.equal(result.diagnostics.missingReview,0);
  assert.equal(result.diagnostics.answerDisagreements,0);
  assert.equal(calls.length,3);
  assert.match(calls[0].host,/api.groq.com/);
  assert.match(calls[1].host,/generativelanguage.googleapis.com/);
  assert.match(calls[2].host,/generativelanguage.googleapis.com/);
  assert.match(calls[0].body.messages[1].content,/Abordagem sugerida/);
  const followup=JSON.parse(calls[2].body.messages[1].content.split('independentemente:\\n')[1]);
  assert.equal(followup.length,4);
  assert.deepEqual(followup.map((item:any)=>item.index),[0,1,2,3]);
  // No reference answers are sent to the independent review model.
  for(const item of followup){
   assert.equal(item.correct_index,undefined);
   assert.equal(item.explanation,undefined);
  }
 }finally{globalThis.fetch=originalFetch;restore();}
});

test('genuinely rejected or disputed questions remain unapproved',async()=>{
 const restore=configure(),originalFetch=globalThis.fetch;let call=0;
 globalThis.fetch=async()=>{
  call++;
  if(call===1)return response(JSON.stringify({questions:questions.slice(0,2)}));
  return response(JSON.stringify({reviews:[
   {index:0,approved:false,correct_index:3,reason:'Ambiguidade detectada'},
   {index:1,approved:true,correct_index:2,reason:'Gabarito divergente'}
  ]}));
 };
 try{
  const result=await createAndReviewQuestionBatch({
   institution:'enem',subject:'Matemática',topic:'Porcentagem e razão',difficulty:'intermediate',count:2
  });
  assert.equal(result.approved.length,0);
  assert.equal(result.diagnostics.pedagogicallyRejected,1);
  assert.equal(result.diagnostics.answerDisagreements,1);
  assert.equal(call,2);
 }finally{globalThis.fetch=originalFetch;restore();}
});
