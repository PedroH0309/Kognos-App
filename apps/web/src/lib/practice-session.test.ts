import {test} from 'node:test';
import assert from 'node:assert/strict';
import {demoQuestions,type QuestionAttempt} from './demo-questions.ts';
import {practiceSessionSummary} from './practice-session.ts';
test('short-session summary does not confuse lifetime and current session',()=>{
 const q=demoQuestions[0];
 const a:QuestionAttempt={questionId:q.id,subject:q.subject,answerIndex:(q.correct+1)%5,correct:true,mode:'practice',createdAt:new Date().toISOString()};
 assert.deepEqual(practiceSessionSummary([q],[a]),{total:1,answered:1,correct:0,accuracy:0});
});
test('question reference answer is authoritative even if browser correct flag is false',()=>{
 const q=demoQuestions[1];
 const a:QuestionAttempt={questionId:q.id,subject:q.subject,answerIndex:q.correct,correct:false,mode:'practice',createdAt:new Date().toISOString()};
 assert.equal(practiceSessionSummary([q],[a]).correct,1);
});