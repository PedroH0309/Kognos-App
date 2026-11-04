import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 sequenceModel,proportionalityValue,exponentialValue,logarithmValue,
 countWays,solveLinearSystem,solidMetrics,convertMeasure,periodicValue,
 numberSetExamples
} from './math-labs-extended.ts';
import {resolveMathLab} from './math-labs.ts';

test('arithmetic and geometric progressions return terms, general term and sums',()=>{
 assert.deepEqual(sequenceModel('arithmetic',3,2,4),{terms:[3,5,7,9],nth:9,sum:24});
 assert.deepEqual(sequenceModel('geometric',2,3,4),{terms:[2,6,18,54],nth:54,sum:80});
 assert.deepEqual(sequenceModel('geometric',5,1,3),{terms:[5,5,5],nth:5,sum:15});
 assert.equal(sequenceModel('arithmetic',1,1,0),null);
});
test('ratios and direct, inverse, quadratic proportionality honor positive and zero domain',()=>{
 assert.equal(proportionalityValue('direct',4,3),12);
 assert.equal(proportionalityValue('inverse',12,3),4);
 assert.equal(proportionalityValue('quadratic',3,4),48);
 assert.equal(proportionalityValue('inverse',12,0),null);
});
test('exponentials and logarithms respect base and argument domains',()=>{
 assert.equal(exponentialValue(2,3),8);
 assert.equal(logarithmValue(2,8),3);
 assert.equal(exponentialValue(1,2),null);
 assert.equal(logarithmValue(1,2),null);
 assert.equal(logarithmValue(2,0),null);
});
test('counting distinguishes product, permutation, arrangement and combination',()=>{
 assert.equal(countWays('product',4,3),12);
 assert.equal(countWays('permutation',5,2),120);
 assert.equal(countWays('arrangement',5,2),20);
 assert.equal(countWays('combination',5,2),10);
 assert.equal(countWays('combination',5,7),null);
});
test('linear system solver distinguishes unique, parallel, and coincident lines',()=>{
 assert.deepEqual(solveLinearSystem(1,1,5,1,-1,1),{kind:'unique',x:3,y:2});
 assert.equal(solveLinearSystem(1,1,2,2,2,4).kind,'coincident');
 assert.equal(solveLinearSystem(1,1,2,2,2,5).kind,'parallel');
});
test('three-dimensional solids return real volumes and total surface areas',()=>{
 assert.deepEqual(solidMetrics('cube',2,2,2),{volume:8,area:24});
 assert.deepEqual(solidMetrics('prism',2,3,4),{volume:24,area:52});
 assert.ok(Math.abs(solidMetrics('cylinder',2,3,0).volume-12*Math.PI)<1e-9);
 assert.ok(Math.abs(solidMetrics('cone',2,3,0).volume-4*Math.PI)<1e-9);
});
test('SI conversions preserve physical dimensions and factor correctness',()=>{
 assert.equal(convertMeasure('length',1,'km','m'),1000);
 assert.equal(convertMeasure('mass',2,'kg','g'),2000);
 assert.equal(convertMeasure('time',1,'h','s'),3600);
 assert.equal(convertMeasure('capacity',2,'L','mL'),2000);
 assert.equal(convertMeasure('length',1,'kg','m'),null);
});
test('periodic waves use degrees and correct amplitudes and phase',()=>{
 assert.ok(Math.abs(periodicValue('sine',2,360,0,90)-2)<1e-10);
 assert.ok(Math.abs(periodicValue('cosine',2,360,0,0)-2)<1e-10);
 assert.ok(Math.abs(periodicValue('sine',2,360,90,90))<1e-10);
});
test('number-set examples do not claim that arbitrary decimals are irrational',()=>{
 const pi=numberSetExamples.find(x=>x.label==='π');
 const sqrt2=numberSetExamples.find(x=>x.label==='√2');
 assert.ok(pi?.groups.includes('Irracionais'));
 assert.ok(sqrt2?.groups.includes('Irracionais'));
 assert.ok(numberSetExamples.find(x=>x.label==='−3')?.groups.includes('Inteiros'));
});
test('specific matches override overly broad old math categories',()=>{
 const lab=(topic:string,unit='')=>resolveMathLab({subject:'Matemática',topic,unit});
 assert.equal(lab('Notação científica'),'scientific');
 assert.equal(lab('Porcentagem, taxas e índices'),'percentage');
 assert.equal(lab('Equações e problemas'),'equations');
 assert.equal(lab('Funções e gráficos'),'functions');
 assert.equal(lab('Geometria plana e semelhança'),'geometry');
 assert.equal(lab('Probabilidade e combinatória'),'probability');
 assert.equal(lab('Estatística descritiva'),'statistics');
 assert.equal(lab('Trigonometria no triângulo retângulo'),'trigonometry');
 assert.equal(lab('Números naturais, inteiros, racionais e reais'),'number-sets');
 assert.equal(lab('Razões, proporcionalidade direta e inversa'),'proportion');
 assert.equal(lab('Relação entre grandezas: velocidade, densidade','Funções'),'proportion');
 assert.equal(lab('Progressões aritméticas e geométricas'),'sequences');
 assert.equal(lab('Função exponencial e função logarítmica','Funções'),'exponential-log');
 assert.equal(lab('Arranjos, permutações e combinações simples'),'combinatorics');
 assert.equal(lab('Resolução e discussão de um sistema linear'),'linear-systems');
 assert.equal(lab('Poliedros e corpos redondos - cálculo de áreas, volume e capacidade','Geometria espacial'),'solids');
 assert.equal(lab('Vistas ortogonais e representação plana de uma figura espacial'),'solids');
 assert.equal(lab('Sistema Internacional de Medidas: principais unidades e conversões'),'unit-conversion');
 assert.equal(lab('Funções seno e cosseno: representação algébrica e gráfica','Trigonometria'),'periodic-waves');
 assert.equal(lab('Arcos e ângulos: medidas, relações entre arcos','Trigonometria'),'periodic-waves');
 assert.equal(lab('Seno, cosseno e tangente em triângulos retângulos'),'trigonometry');
 assert.equal(resolveMathLab({subject:'Química',topic:'Função exponencial'}),null);
});
