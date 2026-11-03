import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lessonPracticeGenerationRequest} from './lesson-ai-links.ts';
import {newQuestionsForSelectedLesson} from './lesson-practice-session.ts';
const generated=(lessonId:string,subject='Matemática',topic='Porcentagem e razão')=>({
 id:'new-question-001',lesson_id:lessonId,institution:'enem',subject,topic,
 difficulty:'intermediate',prompt:'Uma turma registrou os valores e precisa calcular a porcentagem do aumento no preço total.',
 options:['20%','10%','30%','40%','50%'],review_status:'auto_reviewed',
 edition:'2026',source_title:'Matriz referência',source_url:'https://www.gov.br/inep',
 created_at:'2026-11-03T16:00:00Z'
});
test('one click uses a server-validated three-question scope for the exact lesson',()=>{
 const preset=lessonPracticeGenerationRequest('math-percentages',1);
 assert.ok(preset);
 assert.deepEqual({...preset},{lessonId:'math-percentages',institution:'enem',subject:'Matemática',topic:'Porcentagem e razão',difficulty:'intermediate',count:3,variation:0});
 assert.equal(lessonPracticeGenerationRequest('math-percentages',2)?.variation,1);
 assert.equal(lessonPracticeGenerationRequest('invalid-lesson',1),null);
 assert.equal(lessonPracticeGenerationRequest('math-percentages',0),null);
});
test('only newly returned questions with the exact lesson and independent review may start a session',()=>{
 const preset=lessonPracticeGenerationRequest('math-percentages',1)!;
 const good=generated('math-percentages');
 const result=newQuestionsForSelectedLesson({questions:[
  good,{...good,id:'other',lesson_id:'math-functions'},
  {...good,id:'other2',subject:'Física'},
  {...good,id:'other3',review_status:'pending'},
  {...good,id:'other4',correct_index:1},
  good
 ]},preset);
 assert.deepEqual(result.map(q=>q.id),['new-question-001','other4']);
 assert.equal((result[0] as unknown as Record<string,unknown>).correct_index,undefined,
 'The client must not receive a private answer key');
 assert.deepEqual(newQuestionsForSelectedLesson({questions:[generated('math-functions')]},preset),[]);
 assert.deepEqual(newQuestionsForSelectedLesson({questions:null},preset),[]);
});
test('a partial but verified batch can be practiced without reusing old bank entries',()=>{
 const preset=lessonPracticeGenerationRequest('math-percentages',3)!;
 assert.equal(newQuestionsForSelectedLesson({questions:[generated('math-percentages')]},preset).length,1);
});
