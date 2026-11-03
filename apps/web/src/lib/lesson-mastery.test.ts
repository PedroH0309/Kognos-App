import {test} from 'node:test';
import assert from 'node:assert/strict';
import {assessLessonMastery} from './lesson-mastery.ts';
const sequence=[...Array(3).fill('basic'),...Array(4).fill('intermediate'),...Array(3).fill('advanced')] as ('basic'|'intermediate'|'advanced')[];
test('mastery needs high-level success, not only a correct basic question',()=>{
 const weak=assessLessonMastery(sequence.map((difficulty,i)=>({difficulty,correct:i<3})));
 assert.equal(weak.label,'precisa reforçar');
 assert.equal(weak.basic,3);assert.equal(weak.advanced,0);
});
test('full graded sequence with advanced success yields initial evidence, never definitive mastery',()=>{
 const good=assessLessonMastery(sequence.map((difficulty,i)=>({difficulty,correct:i!==3&&i!==7})));
 assert.equal(good.label,'evidência inicial de domínio');
 assert.equal(good.accuracy,80);
 assert.match(good.nextStep,/uma sessão não prova domínio/);
});
test('partial results cannot qualify as mastered',()=>{
 const partial=assessLessonMastery([{difficulty:'advanced',correct:true}]);
 assert.notEqual(partial.label,'evidência inicial de domínio');
});
