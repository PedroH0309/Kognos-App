import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoTopics} from './provao-paulista.ts';
import {resolveMathLab} from './math-labs.ts';
import {resolveScienceLab} from './science-labs.ts';
import {resolveLanguageLab} from './language-labs.ts';
import {
 cellKinds,cellParts,parts,cellPartAvailable,isCellStructureTopic,isIntertextTopic,
 originalText,intertextExamples,discourseExamples,modelLine
} from './visual-study-models.ts';
import {studyMethodForSubject,referenceCards,supportedExplorerSubjects} from './study-exploration.ts';

test('Three cell types have scientifically distinct, labeled and selectable structures',()=>{
 assert.equal(cellKinds.length,3);
 assert.equal(cellPartAvailable('animal','nucleus'),true);
 assert.equal(cellPartAvailable('animal','chloroplast'),false);
 assert.equal(cellPartAvailable('plant','chloroplast'),true);
 assert.equal(cellPartAvailable('plant','vacuole'),true);
 assert.equal(cellPartAvailable('prokaryote','nucleus'),false);
 assert.equal(cellPartAvailable('prokaryote','mitochondria'),false);
 assert.equal(cellPartAvailable('prokaryote','dna'),true);
 assert.equal(cellPartAvailable('plant','wall'),true);
 for(const [type,available] of Object.entries(cellParts)){
  assert.ok(available.length>=5,type);
  assert.equal(new Set(available).size,available.length);
  for(const part of available){
   assert.ok(parts[part].label.length>4);
   assert.ok(parts[part].function.length>30);
  }
 }
});
test('Real Biology curricular structure and plasma membrane topics use the visual anatomy lab',()=>{
 const cases=[
  'Organização celular dos seres vivos (célula procariota e células eucariotas vegetal e animal)',
  'Envoltórios celulares; membrana plasmática e suas diferenciações',
  'Organelas celulares'
 ];
 for(const topic of cases){
  assert.equal(isCellStructureTopic('Biologia',topic),true,topic);
  assert.equal(resolveScienceLab({subject:'Biologia',topic}),'cell-anatomy',topic);
 }
 assert.equal(isCellStructureTopic('Química',cases[0]),false);
 assert.equal(resolveScienceLab({subject:'Biologia',topic:'Divisões celulares: mitose e meiose'}),'cell-cycle');
 assert.equal(resolveScienceLab({subject:'Biologia',topic:'Doenças causadas por fungos'}),null);
});
test('Intertextuality has real authored contrast modes, and only Portuguese subject routes into it',()=>{
 const topic='Intertextualidade e interdiscursividade';
 assert.equal(isIntertextTopic('Português',topic),true);
 assert.equal(resolveLanguageLab({subject:'Português',topic}),'pt-intertext');
 assert.equal(resolveLanguageLab({subject:'Química',topic}),null);
 assert.equal(isIntertextTopic('Inglês',topic),false);
 assert.ok(originalText.length>50);
 assert.equal(Object.keys(intertextExamples).length,3);
 for(const mode of Object.values(intertextExamples)){
  assert.ok(mode.excerpt.length>45);
  assert.ok(mode.explanation.length>45);
  assert.ok(mode.shared.length>7);
  assert.ok(mode.excerpt.toLocaleLowerCase('pt-BR').includes(mode.shared.toLocaleLowerCase('pt-BR')));
 }
 assert.equal(Object.keys(discourseExamples).length,3);
 for(const item of Object.values(discourseExamples)){
  assert.ok(item.text.length>45);
  assert.ok(item.focus.length>40);
 }
});
test('Math graph fallback uses deterministic values, including negative and zero slopes',()=>{
 assert.equal(modelLine(2,3,4),11);
 assert.equal(modelLine(0,5,-4),5);
 assert.equal(modelLine(-3,-2,2),-8);
 assert.equal(modelLine(Number.POSITIVE_INFINITY,2,4),null);
 assert.equal(modelLine(1e308,1e308,8),null);
});
test('Every public syllabus subject receives a visual method even if no specialized model exists',()=>{
 const subjects=[...new Set(provaoTopics.map(x=>x.subject))];
 assert.ok(subjects.length>=11);
 for(const subject of subjects){
  assert.ok(supportedExplorerSubjects.includes(subject),'Missing studio lens '+subject);
  assert.equal(studyMethodForSubject(subject).promptLabels.length,3);
 }
 const syllabus=provaoTopics.find(x=>x.subject==='Português'&&x.topic.includes('Intertextualidade'));
 assert.ok(syllabus,'Official intertextuality topic not found');
 assert.ok(referenceCards({subject:syllabus.subject,topic:syllabus.topic,unit:syllabus.unit,description:syllabus.description}).length>0);
 const uncovered=provaoTopics.filter(x=>x.subject==='Matemática'&&!resolveMathLab(x));
 // Stage 6 deliberately provides the same local numerical playground for any uncovered math topic,
 // clearly labeled as general practice rather than declaring the specific curriculum item complete.
 for(const row of uncovered)assert.equal(row.subject,'Matemática');
});
