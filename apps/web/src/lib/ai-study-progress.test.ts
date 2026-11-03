import {test} from 'node:test';
import assert from 'node:assert/strict';
import {aggregateAIStudyProgress,type PrivateAIQuestionRow,type PrivateAIAttemptRow} from './ai-study-progress.ts';
const question=(id:string,lesson_id:string|null,topic='Porcentagem e razão'):PrivateAIQuestionRow=>({id,lesson_id,institution:'enem',subject:'Matemática',topic,correct_index:2});
const attempt=(question_id:string,answer_index:number,created_at:string,mode='practice'):PrivateAIAttemptRow=>({question_id,answer_index,created_at,mode});

test('aggregates distinct generated items and recomputes correctness from private keys',()=>{
 const q=[question('one','math-percentages'),question('two','math-percentages')];
 const a=[attempt('one',0,'2026-11-01T10:00:00Z'),attempt('one',2,'2026-11-02T10:00:00Z'),attempt('two',2,'2026-11-03T10:00:00Z','mock')];
 const result=aggregateAIStudyProgress(q,a);
 assert.equal(result.totalAttempts,3);
 assert.equal(result.unlinkedAttempts,0);
 assert.deepEqual(result.lessons,[{lessonId:'math-percentages',attempts:3,distinctQuestions:2,correct:2,incorrect:1,practice:2,mock:1,lastCorrect:true,lastAttemptAt:'2026-11-03T10:00:00Z'}]);
 assert.equal(JSON.stringify(result).includes('correct_index'),false);
 assert.equal(JSON.stringify(result).includes('answer_index'),false);
});

test('legacy questions with broad topics are deliberately excluded; invalid explicit ids never silently remap',()=>{
 const qs=[question('old',null,'Porcentagem e razão'),question('exact',null,'Porcentagem e razão'),question('unknown','math-equations'),question('ambiguous',null,'Geometria e medidas')];
 const a=[attempt('old',0,'2026-11-01T10:00:00Z'),attempt('exact',2,'2026-11-01T10:30:00Z'),attempt('unknown',2,'2026-11-01T11:00:00Z'),attempt('ambiguous',2,'2026-11-01T12:00:00Z')];
 const result=aggregateAIStudyProgress(qs,a,true);
 assert.equal(result.sampleLimited,true);
 assert.equal(result.lessons.length,0);
 assert.equal(result.unlinkedAttempts,4);
});

test('ignores malformed answer indices and timestamps, without claiming measured mastery',()=>{
 const r=aggregateAIStudyProgress([question('one','math-percentages')],[attempt('one',-1,'2026-11-01T10:00:00Z'),attempt('one',2,'broken'),attempt('one',1,'2026-11-02T10:00:00Z')]);
 assert.equal(r.totalAttempts,1);
 assert.equal(r.lessons[0].lastCorrect,false);
 assert.equal(r.lessons[0].incorrect,1);
});

test('skill evolution uses only server-regraded practice attempts with validated difficulty',()=>{
 const qs=[{...question('basic','math-percentages'),difficulty:'basic' as const},
  {...question('advanced','math-percentages'),difficulty:'advanced' as const},
  {...question('invalid','math-equations'),difficulty:'basic' as const}];
 const records=[attempt('basic',2,'2026-11-02T10:00:00Z'),
  attempt('advanced',1,'2026-11-02T10:05:00Z'),
  attempt('basic',0,'2026-11-03T10:00:00Z','mock'),
  attempt('invalid',2,'2026-11-03T10:05:00Z')];
 const progress=aggregateAIStudyProgress(qs,records);
 const skill=progress.skillEvolution.find(item=>item.lessonId==='math-percentages');
 assert.ok(skill);
 assert.equal(skill.blocks.length,1);
 assert.equal(skill.blocks[0].answered,2);
 assert.equal(skill.blocks[0].correct,1);
 assert.equal(skill.blocks[0].difficulty.basic.correct,1);
 assert.equal(skill.blocks[0].difficulty.advanced.correct,0);
 assert.equal(skill.changePoints,null);
 assert.equal(JSON.stringify(progress).includes('answer_index'),false);
 assert.equal(JSON.stringify(progress).includes('correct_index'),false);
 assert.equal(JSON.stringify(progress).includes('questionId'),false);
 assert.equal(progress.unlinkedAttempts,1);
});
