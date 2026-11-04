import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 resolveHumanitiesLab,historicalTimelines,chronologicalOrder,sourceScenarios,
 historyCauseCards,groundKilometers,fictionalMap,layerValue,indicatorPercentage,
 argumentSchemes,checkArgument,evidenceExamples,evaluateEvidence,presenceChecklist
} from './humanities-labs.ts';
import {provaoTopics} from './provao-paulista.ts';

const resolve=(subject:string,topic:string,unit='')=>resolveHumanitiesLab({subject,topic,unit});
test('Disciplines select specific experiences and never borrow another subject’s lab',()=>{
 assert.equal(resolve('História','O movimento republicano e a Proclamação da República'),'history-timeline');
 assert.equal(resolve('História','Diversidade cultural'),'history-evidence');
 assert.equal(resolve('História','Revolução Industrial'),'history-causality');
 assert.equal(resolve('Geografia','A cartografia como recurso para a compreensão espacial'),'geography-cartography');
 assert.equal(resolve('Geografia','A dinâmica da água na superfície terrestre (hidrografia)'),'geography-landscape');
 assert.equal(resolve('Geografia','A análise geográfica da população mundial e brasileira'),'geography-indicators');
 assert.equal(resolve('Filosofia','A Filosofia e o filosofar: natureza e especificidade da reflexão filosófica'),'philosophy-logic');
 assert.equal(resolve('Filosofia','As relações entre o senso comum e o conhecimento científico'),'philosophy-knowledge');
 assert.equal(resolve('Filosofia','A Bioética e os novos horizontes da moralidade'),'philosophy-ethics');
 assert.equal(resolve('Sociologia','O trabalho e a constituição das relações sociais'),'sociology-work');
 assert.equal(resolve('Sociologia','Pluralismo cultural: a persistência do etnocentrismo'),'sociology-culture');
 assert.equal(resolve('Sociologia','Movimentos sociais e novas formas de participação política'),'sociology-citizenship');
 assert.equal(resolve('Química','O trabalho e a constituição das relações sociais'),null);
 assert.equal(resolve('Português','Movimentos sociais e novas formas de participação política'),null);
 assert.equal(resolve('Matemática','Revolução Industrial'),null);
 assert.equal(resolve('História','Representações matemáticas de funções'),null);
});

test('Timeline milestones are distinct, ordered, attributable and explicitly bounded',()=>{
 assert.equal(historicalTimelines.length,2);
 for(const timeline of historicalTimelines){
  assert.equal(timeline.milestones.length,6);
  assert.deepEqual([...timeline.milestones].map(x=>x.year),[...timeline.milestones].map(x=>x.year).sort((a,b)=>a-b));
  for(const event of timeline.milestones){
   assert.ok(event.label.length>5);
   assert.ok(event.context.length>30);
   assert.ok(event.reference.length>=4);
  }
  assert.equal(chronologicalOrder(timeline.milestones,[0,1,2,3,4,5]),true);
  assert.equal(chronologicalOrder(timeline.milestones,[2,0,4,1,5,3]),false);
  assert.equal(chronologicalOrder(timeline.milestones,[0,0,1,2,3,4]),false);
 }
 assert.equal(historicalTimelines[0].milestones.find(x=>x.year===1988)?.label,'Constituição de 1988');
 assert.equal(historicalTimelines[1].milestones.find(x=>x.year===1948)?.label,'Declaração Universal dos Direitos Humanos');
 assert.ok(sourceScenarios.every(s=>/fict[ií]ci|inventado|simulad/i.test(s.origin)));
 assert.equal(historyCauseCards.length,3);
});

test('Cartographic scale returns kilometers and rejects invalid maps',()=>{
 assert.equal(groundKilometers(4,100000),4);
 assert.equal(groundKilometers(2.5,25000),0.625);
 assert.equal(groundKilometers(0,50000),0);
 assert.equal(groundKilometers(-2,50000),null);
 assert.equal(groundKilometers(2,0),null);
 assert.equal(groundKilometers(Infinity,100000),null);
});
test('Fictional thematic grid is bounded to its defined legend',()=>{
 assert.equal(fictionalMap.length,16);
 assert.equal(new Set(fictionalMap.map(c=>c.id)).size,16);
 for(const item of fictionalMap){
  for(const layer of ['relief','green','services'] as const){
   const value=layerValue(item,layer);
   assert.ok(Number.isInteger(value)&&value>=0&&value<=4);
  }
 }
});
test('Sociodemographic indicator returns only valid sample proportions',()=>{
 assert.equal(indicatorPercentage(48,80),60);
 assert.equal(indicatorPercentage(0,100),0);
 assert.equal(indicatorPercentage(100,100),100);
 assert.equal(indicatorPercentage(101,100),null);
 assert.equal(indicatorPercentage(-1,100),null);
 assert.equal(indicatorPercentage(20,0),null);
});

test('Logic feedback is tied to explicit formal rule examples, not arbitrary text scoring',()=>{
 assert.equal(argumentSchemes.length,4);
 assert.equal(new Set(argumentSchemes.map(x=>x.id)).size,4);
 assert.ok(argumentSchemes.some(x=>x.valid));
 assert.ok(argumentSchemes.some(x=>!x.valid));
 for(const scheme of argumentSchemes){
  assert.equal(checkArgument(scheme.id,scheme.valid)?.correct,true);
  assert.equal(checkArgument(scheme.id,!scheme.valid)?.correct,false);
  assert.ok((checkArgument(scheme.id,scheme.valid)?.explanation.length??0)>20);
 }
 assert.equal(checkArgument('unsupported',true),null);
});
test('Social inquiry distinguishes observation, hypothesis and interpretation',()=>{
 assert.equal(evidenceExamples.length,3);
 assert.deepEqual(new Set(evidenceExamples.map(x=>x.category)),new Set(['observacao','hipotese','interpretacao']));
 for(const item of evidenceExamples){
  assert.equal(evaluateEvidence(item.id,item.category)?.correct,true);
  assert.ok((evaluateEvidence(item.id,item.category)?.explanation.length??0)>15);
 }
 assert.equal(evaluateEvidence('unknown','observacao'),null);
});
test('Free-text inquiry uses local checklists but never issues official grades',()=>{
 assert.deepEqual(presenceChecklist({hypothesis:'',source:'Um documento identificado'}),{
  done:['source'],missing:['hypothesis'],score:null
 });
});
test('Official Provão Paulista curriculum has representative examples for each of 12 labs',()=>{
 const official=provaoTopics.filter(x=>['História','Geografia','Filosofia','Sociologia'].includes(x.subject));
 assert.ok(official.length>=200);
 for(const kind of [
 'history-timeline','history-evidence','history-causality',
 'geography-cartography','geography-landscape','geography-indicators',
 'philosophy-logic','philosophy-knowledge','philosophy-ethics',
 'sociology-work','sociology-culture','sociology-citizenship'
 ]){
  assert.ok(official.some(row=>resolveHumanitiesLab({
   subject:row.subject,topic:row.topic,unit:row.unit,description:row.description
  })===kind),'No official topic matches '+kind);
 }
 assert.ok(official.some(row=>resolveHumanitiesLab({
  subject:row.subject,topic:row.topic,unit:row.unit,description:row.description
 })===null),'Unexpectedly claiming every topic is covered in detail');
});
