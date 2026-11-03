import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lessonForPracticeFocus} from './lesson-practice-navigation.ts';

test('legacy practice shortcuts route to the exact authored lesson',()=>{
 const lesson=lessonForPracticeFocus({subject:'Matemática',topic:'Porcentagem',questionId:'q01'});
 assert.equal(lesson?.id,'math-percentages');
});
test('never infer a lesson from a mismatching subject, topic or question id',()=>{
 assert.equal(lessonForPracticeFocus({subject:'Física',topic:'Porcentagem',questionId:'q01'}),null);
 assert.equal(lessonForPracticeFocus({subject:'Matemática',topic:'Equações',questionId:'q01'}),null);
 assert.equal(lessonForPracticeFocus({subject:'Matemática',topic:'Porcentagem',questionId:'unknown'}),null);
});
