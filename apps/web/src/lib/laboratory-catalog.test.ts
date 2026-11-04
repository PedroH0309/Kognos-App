import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {describeLaboratory} from './laboratory-catalog.ts';

test('Curated curricular topics are discoverable from a separate all-subject lab catalog',()=>{
 const subjects=new Set(curriculumTopics.map(t=>t.subject));
 for(const subject of ['Matemática','Química','Física','Biologia','Português','Inglês',
 'História','Geografia','Filosofia','Sociologia','Redação']){
  assert.ok(subjects.has(subject),'Missing curriculum subject '+subject);
 }
 assert.ok(curriculumTopics.length>200);
 const ids=new Set(curriculumTopics.map(x=>x.id));
 assert.equal(ids.size,curriculumTopics.length);
});
test('Known specialist lessons route to their own simulator, without a blanket claim about other lessons',()=>{
 const cases=[
  ['Matemática','Notação científica','math'],
  ['Matemática','Funções quadráticas e gráficos','math'],
  ['Química','Geometria molecular','science'],
  ['Química','Balanceamento de equações químicas','science'],
  ['Biologia','Organização celular dos seres vivos','science'],
  ['Português','Intertextualidade e interdiscursividade','language'],
  ['História','Proclamação da República','humanities']
 ] as const;
 for(const [subject,topic,kind] of cases){
  const result=describeLaboratory({subject,topic});
  assert.equal(result.status,'specialized',subject+' / '+topic);
  assert.equal(result.kind,kind);
  assert.ok(result.models>=1);
 }
 for(const subject of ['Física','Química','Português','Sociologia']){
  const result=describeLaboratory({subject,topic:'Tópico hipotético sem mapeamento autoral'});
  assert.equal(result.status,'general');
  assert.equal(result.kind,'concept');
 }
 assert.equal(describeLaboratory({subject:'Química',topic:'Intertextualidade e interdiscursividade'}).status,'general');
});
test('General visual routes never report fabricated specialist coverage',()=>{
 const methods=curriculumTopics.map(topic=>({...topic,...describeLaboratory(topic)}));
 assert.ok(methods.some(x=>x.status==='specialized'));
 assert.ok(methods.some(x=>x.status==='general'));
 assert.ok(methods.every(x=>x.models>=1));
 for(const row of methods.filter(x=>x.status==='general')){
  assert.equal(row.kind,'concept');
  assert.match(row.description,/Mapa visual/);
 }
});
