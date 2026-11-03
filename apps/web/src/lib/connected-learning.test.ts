import {test} from 'node:test';
import assert from 'node:assert/strict';
import {connectedCatalogProgress,connectedSubjectProgress,connectedLessonEvidence} from './connected-learning.ts';
import {findLearningLesson} from './learning-catalog.ts';
import type {AIStudyProgress} from './ai-study-progress.ts';
import type {QuestionAttempt} from './demo-questions.ts';
const attempt:QuestionAttempt={questionId:'q01',answerIndex:0,subject:'Matemática',createdAt:'2026-11-01T10:00:00Z',mode:'practice',correct:true};
const progress:AIStudyProgress={lessons:[{lessonId:'math-percentages',attempts:3,distinctQuestions:2,correct:1,incorrect:2,practice:3,mock:0,lastCorrect:false,lastAttemptAt:'2026-11-02T11:00:00Z'},{lessonId:'math-functions',attempts:1,distinctQuestions:1,correct:1,incorrect:0,practice:1,mock:0,lastCorrect:true,lastAttemptAt:'2026-11-02T11:00:00Z'}],totalAttempts:4,unlinkedAttempts:0,sampleLimited:false};

test('AI and demonstration attempts share topic coverage without double counting',()=>{
 const catalog=connectedCatalogProgress([attempt],progress);
 assert.equal(catalog.practiced,2);
 assert.equal(catalog.aiAttempts,4);
 assert.equal(catalog.review,1);
 const subject=connectedSubjectProgress('Matemática',[attempt],progress);
 assert.equal(subject.practiced,2);
 assert.equal(subject.aiQuestions,3);
 assert.equal(subject.next?.id,'math-percentages');
});

test('lesson with AI attempts is practiced but does not receive a mastery label',()=>{
 const lesson=findLearningLesson('math-functions')!;
 const x=connectedLessonEvidence(lesson,[],progress);
 assert.equal(x.practiced,true);
 assert.equal(x.demo,'not-started');
 assert.equal(x.hasAI,true);
 assert.equal(x.review,false);
 assert.equal(connectedSubjectProgress('Biologia',[],null).practiced,0);
});