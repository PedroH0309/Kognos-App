import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 resolveMathLab,scientificDecimal,calculateScientific,percentageScenario,
 solveLinear,solveQuadratic,evaluatePolynomial,geometryMetrics,
 probability,descriptiveStatistics,trigTriangle
} from './math-labs.ts';

const math=(topic:string,unit='')=>resolveMathLab({subject:'Matemática',topic,unit});
test('Math curriculum selects the correct lab without interfering with other subjects',()=>{
 assert.equal(math('Notação científica'),'scientific');
 assert.equal(math('Porcentagem, taxas e índices'),'percentage');
 assert.equal(math('Equações e problemas'),'equations');
 assert.equal(math('Função quadrática: conceitos'),'functions');
 assert.equal(math('Geometria plana e semelhança'),'geometry');
 assert.equal(math('Probabilidade e combinatória'),'probability');
 assert.equal(math('Estatística descritiva'),'statistics');
 assert.equal(math('Trigonometria no triângulo retângulo'),'trigonometry');
 assert.equal(math('Gráfico de funções expressas por uma sentença','Funções'),'functions');
 assert.equal(math('Introdução a polinômios','Funções'),'functions');
 assert.equal(math('Leitura de gráficos'),'statistics');
 assert.equal(math('Números naturais'),null);
 assert.equal(resolveMathLab({subject:'Química',topic:'Equações químicas'}),null);
 assert.equal(resolveMathLab({subject:'Física',topic:'Notação científica'}),null);
});

test('Scientific notation formats decimal movement without incorrect floating padding',()=>{
 assert.equal(scientificDecimal(3.2,-3),'0,0032');
 assert.equal(scientificDecimal(4.5,4),'45000');
 assert.equal(scientificDecimal(-1.25,2),'-125');
 assert.equal(calculateScientific(3.2,3,4,2,'multiply').result,1280000);
 assert.equal(calculateScientific(3.2,3,4,2,'divide').result,8);
 assert.ok(Math.abs(calculateScientific(3.2,3,4,2,'add').result-3600)<1e-8);
});
test('Percentage simulations use original reference amount and both modes',()=>{
 assert.equal(percentageScenario(120,10,'discount').total,108);
 assert.equal(percentageScenario(120,10,'increase').total,132);
 assert.equal(percentageScenario(120,10,'discount').difference,12);
});
test('Equations distinguish linear, double root, no real root, and a=0',()=>{
 assert.equal(solveLinear(2,-12)?.root,6);
 assert.equal(solveLinear(0,4),null);
 assert.deepEqual(solveQuadratic(1,-5,6)?.roots,[2,3]);
 assert.deepEqual(solveQuadratic(1,2,1)?.roots,[-1]);
 assert.deepEqual(solveQuadratic(1,0,1)?.roots,[]);
 assert.equal(solveQuadratic(0,2,1),null);
 assert.equal(evaluatePolynomial('linear',2,3,100,4),11);
 assert.equal(evaluatePolynomial('quadratic',1,0,-9,3),0);
});
test('Geometric quantities use consistent valid dimensions',()=>{
 assert.equal(geometryMetrics('rectangle',4,3).area,12);
 assert.equal(geometryMetrics('rectangle',4,3).perimeter,14);
 assert.equal(geometryMetrics('right-triangle',3,4).perimeter,12);
 assert.ok(Math.abs(geometryMetrics('circle',2,1).area-4*Math.PI)<1e-10);
});
test('Probability is bounded and requires a nonempty urn',()=>{
 assert.equal(probability(2,3)?.percent,40);
 assert.equal(probability(0,5)?.percent,0);
 assert.equal(probability(0,0),null);
});
test('Descriptive statistics find central tendency and population deviation',()=>{
 const r=descriptiveStatistics([1,2,2,5]);
 assert.equal(r?.mean,2.5);
 assert.equal(r?.median,2);
 assert.deepEqual(r?.modes,[2]);
 assert.equal(r?.range,4);
 assert.equal(descriptiveStatistics([]),null);
 assert.deepEqual(descriptiveStatistics([1,2,3])?.modes,[]);
});
test('Trig relationships respect 90 degree tangent boundary',()=>{
 const r=trigTriangle(30,10);
 assert.ok(Math.abs(r.opposite-5)<1e-9);
 assert.ok(Math.abs(r.adjacent-5*Math.sqrt(3))<1e-9);
 assert.ok(Math.abs(r.sin-0.5)<1e-9);
 assert.equal(trigTriangle(90,10).tan,null);
});
