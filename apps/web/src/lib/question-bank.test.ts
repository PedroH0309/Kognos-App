import {demoQuestions} from './demo-questions.ts';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {filterDemoQuestions,demoTopics} from './question-bank.ts';

test('filters by subject, topic and difficulty without returning unrelated items',()=>{
 const result=filterDemoQuestions({subject:'Biologia',topic:'Citologia',difficulty:'Básica',search:''});
 assert.equal(result.length,1);
 assert.equal(result[0].id,'q14');
 assert.equal(filterDemoQuestions({subject:'Biologia',topic:'Citologia',difficulty:'Avançada',search:''}).length,0);
});
test('search is case-insensitive and topic options follow the subject',()=>{
 const upper=filterDemoQuestions({subject:'Todas',topic:'Todos',difficulty:'Todas',search:'ESCALA'});
 assert.ok(upper.some(q=>q.id==='q19'));
 assert.deepEqual(upper,filterDemoQuestions({subject:'Todas',topic:'Todos',difficulty:'Todas',search:'escala'}));
 assert.deepEqual(demoTopics('Biologia'),['Todos',...demoQuestions.filter(q=>q.subject==='Biologia').map(q=>q.topic)]);
});