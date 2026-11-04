import {test} from 'node:test';
import assert from 'node:assert/strict';
import {verifiedPhETSimulations,simulationForTopic,allowNonCommercialPhET} from './third-party-simulations.ts';
import {molecules,moleculeById,atomStyle} from './native-molecule-models.ts';
import {resolveScienceLab} from './science-labs.ts';

test('All curated external simulators have verified fixed official HTTPS pt_BR routes',()=>{
 const items=Object.values(verifiedPhETSimulations);
 assert.equal(items.length,8);
 assert.equal(new Set(items.map(x=>x.url)).size,items.length);
 for(const item of items){
  const url=new URL(item.url);
  assert.equal(url.protocol,'https:');
  assert.equal(url.hostname,'phet.colorado.edu');
  assert.equal(url.pathname,'/sims/html/'+item.id+'/latest/'+item.id+'_pt_BR.html');
  assert.equal(item.license,'CC BY-NC 4.0');
  assert.ok(item.learningGoal.length>15);
 }
});
test('Math and Chemistry only offer simulations for relevant topics, not broad subject labels',()=>{
 const select=(subject:string,topic:string)=>simulationForTopic({subject,topic}).map(x=>x.id);
 assert.deepEqual(select('Matemática','Funções quadráticas e gráficos'),['graphing-quadratics']);
 assert.deepEqual(select('Matemática','Área e perímetro de figuras geométricas'),['area-builder']);
 assert.deepEqual(select('Matemática','Operações com frações'),['fractions-intro']);
 assert.deepEqual(select('Química','Geometria molecular e ligações covalentes'),['molecule-shapes']);
 assert.deepEqual(select('Química','Modelos atômicos e número de massa'),['build-an-atom']);
 assert.deepEqual(select('Química','Balanceamento de equações químicas'),['balancing-chemical-equations']);
 assert.deepEqual(select('Química','Cálculos estequiométricos'),['reactants-products-and-leftovers']);
 assert.deepEqual(select('Química','Escala de pH'),['ph-scale']);
 assert.deepEqual(select('Português','Geometria molecular'),[]);
 assert.deepEqual(select('Física','Lei de Ohm'),[]);
 assert.deepEqual(select('Matemática','Intertextualidade'),[]);
});
test('A production app does not load noncommercial-only embeds without explicit attestation',()=>{
 assert.equal(allowNonCommercialPhET(undefined,false),false);
 assert.equal(allowNonCommercialPhET('unknown',false),false);
 assert.equal(allowNonCommercialPhET('noncommercial-confirmed',false),true);
 assert.equal(allowNonCommercialPhET(undefined,true),true);
});
test('3D native chemistry model holds four distinct molecules with sound connectivity',()=>{
 assert.equal(molecules.length,4);
 assert.deepEqual(new Set(molecules.map(x=>x.id)),new Set(['water','carbon-dioxide','methane','ammonia']));
 for(const molecule of molecules){
  assert.ok(molecule.atoms.length>=3);
  assert.ok(molecule.bonds.length>=2);
  assert.equal(moleculeById(molecule.id),molecule);
  assert.ok(molecule.explanation.length>30);
  for(const atom of molecule.atoms){
   assert.ok(atom.element in atomStyle);
   assert.equal(atom.at.length,3);
   assert.ok(atom.at.every(Number.isFinite));
  }
  for(const [first,second] of molecule.bonds){
   assert.ok(first>=0&&first<molecule.atoms.length);
   assert.ok(second>=0&&second<molecule.atoms.length);
   assert.notEqual(first,second);
  }
 }
});
test('Illustrative water and ammonia geometry agree with their named bond angles',()=>{
 function angle(id:string,first:number,center:number,second:number){
  const model=moleculeById(id);if(!model)throw new Error('missing');
  const a=model.atoms[first].at,b=model.atoms[center].at,c=model.atoms[second].at;
  const ab=a.map((v,i)=>v-b[i]),cb=c.map((v,i)=>v-b[i]);
  const dot=ab.reduce((sum,v,i)=>sum+v*cb[i],0);
  const norms=Math.hypot(...ab)*Math.hypot(...cb);
  return Math.acos(Math.max(-1,Math.min(1,dot/norms)))*180/Math.PI;
 }
 assert.ok(Math.abs(angle('water',1,0,2)-104.5)<1);
 assert.ok(Math.abs(angle('carbon-dioxide',1,0,2)-180)<.01);
 assert.ok(Math.abs(angle('methane',1,0,2)-109.5)<1);
 assert.ok(Math.abs(angle('ammonia',1,0,2)-107)<1);
 assert.equal(resolveScienceLab({subject:'Química',topic:'Geometria molecular'}),'molecules-3d');
 assert.notEqual(resolveScienceLab({subject:'Biologia',topic:'Geometria molecular'}),'molecules-3d');
});
