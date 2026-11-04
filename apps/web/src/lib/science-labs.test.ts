import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolveScienceLab,motionAt,waveProperties,circuitValues,temperatureScales,atomModel,
 waterStoichiometry,dilutionModel,phProperties,punnettCross,logisticPopulation,
 trophicEnergy,cellCyclePhase} from './science-labs.ts';
import {provaoTopics} from './provao-paulista.ts';

test('Physics topics select only a relevant representative experiment',()=>{
 const lab=(topic:string,unit='')=>resolveScienceLab({subject:'Física',topic,unit});
 assert.equal(lab('Velocidade e Aceleração: média e instantânea','Cinemática.'),'motion');
 assert.equal(lab('Movimentos uniformes e uniformemente variados'),'motion');
 assert.equal(lab('Comprimento de onda, período e frequência de uma onda'),'waves');
 assert.equal(lab('Resistores. Primeira Lei de Ohm'),'circuits');
 assert.equal(lab('Escalas termométricas Celsius, Fahrenheit e Kelvin'),'thermal');
 assert.equal(lab('Lei da gravitação universal de Newton'),null);
 assert.equal(lab('Efeito Doppler'),null);
});
test('Chemistry and Biology topics route narrowly without mislabeling unrelated subjects',()=>{
 const lab=(subject:string,topic:string)=>resolveScienceLab({subject,topic});
 assert.equal(lab('Química','Cálculos estequiométricos: massa e mol'),'stoichiometry');
 assert.equal(lab('Química','Número atômico e de massa. Isótopos'),'atom');
 assert.equal(lab('Química','Operações envolvendo soluções (diluições e misturas)'),'solutions');
 assert.equal(lab('Química','Produto iônico da água e escalas de pH e pOH'),'ph');
 assert.equal(lab('Biologia','A 1ª e 2ª Lei de Gregor Mendel'),'genetics');
 assert.equal(lab('Biologia','Pirâmides ecológicas'),'trophic');
 assert.equal(lab('Biologia','Fatores que regulam o tamanho das populações'),'population');
 assert.equal(lab('Biologia','Divisões celulares: mitose e meiose'),'cell-cycle');
 assert.equal(lab('Biologia','Doenças humanas causadas por fungos'),null);
 assert.equal(lab('Química','Isomeria plana e espacial'),null);
 assert.equal(lab('Português','Escalas termométricas'),null);
 assert.equal(lab('Matemática','Probabilidade e combinatória'),null);
});

test('Physics calculations are dimensionally consistent',()=>{
 assert.deepEqual(motionAt(5,2,4),{position:36,velocity:13});
 assert.equal(waveProperties(5,2)?.speed,10);
 assert.equal(waveProperties(5,2)?.period,0.2);
 assert.equal(waveProperties(0,2),null);
 assert.equal(circuitValues(12,4,'single')?.current,3);
 assert.equal(circuitValues(12,4,'series')?.current,1.5);
 assert.equal(circuitValues(12,4,'parallel')?.current,6);
 assert.equal(circuitValues(12,4,'single')?.power,36);
 const temp=temperatureScales(0);
 assert.equal(temp.kelvin,273.15);
 assert.equal(temp.fahrenheit,32);
 assert.equal(temperatureScales(-274),null);
});
test('Chemical models enforce atomic bookkeeping, limiting reagent and conservation in dilution',()=>{
 assert.deepEqual(atomModel(6,6,0),{protons:6,neutrons:6,electrons:6,massNumber:12,charge:0});
 assert.equal(atomModel(6,6,7),null);
 const reaction=waterStoichiometry(4,3);
 assert.ok(reaction);
 assert.equal(reaction?.waterMoles,4);
 assert.equal(reaction?.oxygenRemaining,1);
 assert.equal(reaction?.hydrogenRemaining,0);
 assert.equal(waterStoichiometry(-2,3),null);
 const dilution=dilutionModel(2,100,500);
 assert.equal(dilution?.finalMolarity,0.4);
 assert.equal(dilution?.soluteMillimoles,200);
 assert.equal(dilutionModel(1,500,100),null);
 const ph=phProperties(1e-7);
 assert.ok(ph);
 assert.ok(Math.abs(ph!.ph-7)<1e-10);
 assert.ok(Math.abs(ph!.poh-7)<1e-10);
 assert.equal(phProperties(0),null);
});
test('Biology uses probabilities and models, not claims of deterministic outcomes',()=>{
 const genetics=punnettCross('Aa','Aa');
 assert.ok(genetics);
 assert.equal(genetics!.genotypes.AA,1);
 assert.equal(genetics!.genotypes.Aa,2);
 assert.equal(genetics!.genotypes.aa,1);
 assert.equal(genetics!.dominantFraction,0.75);
 assert.equal(punnettCross('AO','Aa'),null);
 const model=logisticPopulation(10,100,0.3,0);
 assert.equal(model,10);
 assert.ok(logisticPopulation(10,100,0.3,10)!>model!);
 assert.ok(logisticPopulation(10,100,0.3,100)!<=100);
 assert.equal(logisticPopulation(10,0,0.3,10),null);
 assert.deepEqual(trophicEnergy(1000,10),[1000,100,10,1]);
 assert.equal(trophicEnergy(1000,0),null);
 assert.equal(cellCyclePhase('G1').dnaContent,'2C');
 assert.equal(cellCyclePhase('S').dnaContent,'2C → 4C');
 assert.equal(cellCyclePhase('M').dnaContent,'4C → 2C por célula-filha');
});
test('Official syllabus has verified examples of each new family without pretending exhaustive coverage',()=>{
 const official=provaoTopics.filter(x=>['Física','Química','Biologia'].includes(x.subject));
 for(const kind of ['motion','waves','circuits','thermal','atom','stoichiometry',
  'solutions','ph','genetics','trophic','population','cell-cycle']){
  assert.ok(official.some(x=>resolveScienceLab({subject:x.subject,topic:x.topic,description:x.description,unit:x.unit})===kind),kind+' has no official example');
 }
 assert.ok(official.some(x=>resolveScienceLab({subject:x.subject,topic:x.topic,unit:x.unit,description:x.description})===null),
 'Topics outside specialized modules must retain the general exploration rather than a misleading simulator');
});
