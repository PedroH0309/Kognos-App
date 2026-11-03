import {test} from 'node:test';
import assert from 'node:assert/strict';
import {developCourse} from './course-generator.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
const topic=curriculumTopics[0];
const levels=['basic','intermediate','advanced'];
const fixture=()=>({id:'untrusted-id',topic:'untrusted-topic',videos:[{videoId:'invented'}],objective:'Objetivo de teste de contrato do gerador.',prerequisites:[],sections:levels.map(level=>({level,title:'Etapa da aula',explanation:Array(110).fill('palavra').join(' '),steps:['Identifique os dados.','Verifique as relações.'],example:'Este exemplo de teste verifica a estrutura, sem avaliar a correção pedagógica de uma aula real.',pitfall:'Confira as unidades e hipóteses.'})),tasks:levels.map(level=>({level,prompt:'Enunciado autoral de teste de contrato.',hint:'Considere primeiro os dados.',solution:'A resolução é avaliada em outra chamada ao provedor.'}))});
test('course pipeline validates both responses and fixes identity/provenance on the server',async t=>{
 const keys=['GROQ_API_KEY','AI_GENERATE_PROVIDER','AI_REVIEW_PROVIDER','AI_REVIEW_FALLBACK_PROVIDER','AI_GENERATE_FALLBACK_PROVIDER'];const old=Object.fromEntries(keys.map(k=>[k,process.env[k]]));const oldFetch=globalThis.fetch;
 process.env.GROQ_API_KEY='unit-test-placeholder';process.env.AI_GENERATE_PROVIDER='groq';process.env.AI_REVIEW_PROVIDER='groq';process.env.AI_REVIEW_FALLBACK_PROVIDER='none';process.env.AI_GENERATE_FALLBACK_PROVIDER='none';
 let calls:string[]=[];let draft:unknown=fixture();let verdict:unknown={approved:true,issues:[]};
 globalThis.fetch=async(input,init)=>{calls.push(String(init?.body));const payload=calls.length===1?draft:verdict;return new Response(JSON.stringify({choices:[{finish_reason:'stop',message:{content:JSON.stringify(payload)}}]}),{headers:{'Content-Type':'application/json'}});};
 try{
  await t.test('only a complete separately reviewed response is returned',async()=>{calls=[];const course=await developCourse(topic);assert.equal(calls.length,2);assert.equal(course.id,topic.id);assert.equal(course.topic,topic.topic);assert.equal(course.review,'ai_reviewed');assert.ok(course.videos.every(v=>v.videoId!=='invented'));assert.match(calls[1],/avaliador independente/);});
  await t.test('short explanations stop before review',async()=>{calls=[];draft={...fixture(),sections:fixture().sections.map(s=>({...s,explanation:'Texto curto.'}))};await assert.rejects(developCourse(topic),/INCOMPLETE_COURSE/);assert.equal(calls.length,1);});
  await t.test('negative review blocks publication',async()=>{calls=[];draft=fixture();verdict={approved:false,issues:['Erro conceitual']};await assert.rejects(developCourse(topic),/COURSE_REVIEW_REJECTED/);assert.equal(calls.length,2);});
  await t.test('contradictory approval with unresolved issues also blocks publication',async()=>{calls=[];verdict={approved:true,issues:['Resposta incorreta']};await assert.rejects(developCourse(topic),/COURSE_REVIEW_REJECTED/);});
 }finally{globalThis.fetch=oldFetch;for(const key of keys){if(old[key]===undefined)delete process.env[key];else process.env[key]=old[key];}}
});
