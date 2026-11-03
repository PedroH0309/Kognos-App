import {test} from 'node:test';
import assert from 'node:assert/strict';
import {recoveryTargetsFromGradedSession,recoveryTargetForQuestion} from './lesson-recovery.ts';
import type {GradedRecoveryQuestion} from './lesson-recovery.ts';

const one:GradedRecoveryQuestion={id:'q1',lesson_id:'math-percentages',
 institution:'enem',subject:'Matemática',topic:'Porcentagem e razão'};
test('verified lesson links produce a narrow minilesson, not an unrelated broad topic',()=>{
 const item=recoveryTargetForQuestion(one);
 assert.equal(item.lessonId,'math-percentages');
 assert.equal(item.topic,'Porcentagem');
 assert.match(item.explanation??'',/Por cento/);
 assert.ok(item.commonMistake);
});
test('invalid and cross-subject lesson links cannot fabricate an authored lesson',()=>{
 const invalid=recoveryTargetForQuestion({...one,id:'q2',lesson_id:'physics-motion'});
 assert.equal(invalid.lessonId,null);
 assert.equal(invalid.topic,'Porcentagem e razão');
 assert.equal(invalid.objective,null);
});
test('only authenticated correction results supplied by the caller become recovery targets',()=>{
 const grades=[{correct:false},{correct:false},{correct:true}];
 const result=recoveryTargetsFromGradedSession([
  one,{...one,id:'q2'},{...one,id:'q3'}
 ],grades);
 assert.equal(result.length,1);
 assert.equal(result[0].wrongCount,2);
 assert.equal(result[0].questionId,'q1');
 assert.deepEqual(recoveryTargetsFromGradedSession([one],[]),[]);
 assert.deepEqual(recoveryTargetsFromGradedSession([one],[{correct:true}]),[]);
});
test('independent mistaken topics remain separate and are sorted by frequency',()=>{
 const other:GradedRecoveryQuestion={id:'other',lesson_id:'bio-cells',
  institution:'enem',subject:'Biologia',topic:'Citologia'};
 const result=recoveryTargetsFromGradedSession([other,one,one,one],
  [{correct:false},{correct:false},{correct:false},{correct:false}]);
 assert.deepEqual(result.map(x=>x.wrongCount),[3,1]);
 assert.deepEqual(result.map(x=>x.topic),['Porcentagem','Citologia']);
});
