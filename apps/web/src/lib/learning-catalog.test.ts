import {test} from 'node:test';
import assert from 'node:assert/strict';
import {introductoryLessons,learningLessons,lessonsForSubject,learningSubjects,findLearningLesson,questionForLesson} from './learning-catalog.ts';
import {demoQuestions,type QuestionAttempt} from './demo-questions.ts';
import {evidenceForLesson,subjectProgress,recommendedNextLesson} from './learning-progress.ts';

test('every introductory lesson points at one real original demo question with matching topic and subject',()=>{
 assert.equal(introductoryLessons.length,80);
 assert.equal(learningSubjects.length,16);
 assert.equal(new Set(learningLessons.map(l=>l.id)).size,learningLessons.length);
 assert.equal(new Set(learningLessons.map(l=>l.questionId)).size,learningLessons.length);
 for(const lesson of introductoryLessons){
   const question=questionForLesson(lesson);
   assert.ok(question);
   assert.equal(question?.subject,lesson.subject);
   assert.equal(question?.topic,lesson.topic);
   assert.ok(lesson.explanation.length>50 && lesson.workedExample.length>35);
   for(const req of lesson.prerequisites)assert.ok(findLearningLesson(req),`Unknown prerequisite ${req}`);
 }
 assert.equal(demoQuestions.length,80);
});

test('coverages are based on distinct question attempts, not assumed mastery',()=>{
 const lesson=learningLessons[0];
 assert.equal(evidenceForLesson(lesson,[]),'not-started');
 const wrong:QuestionAttempt={questionId:lesson.questionId,answerIndex:0,subject:lesson.subject,correct:true,createdAt:'2026-10-01T10:00:00Z',mode:'practice'};
 assert.equal(evidenceForLesson(lesson,[wrong]),'review'); // ignore untrusted correct flag
 const right={...wrong,answerIndex:2,correct:false,createdAt:'2026-10-02T10:00:00Z'};
 assert.equal(evidenceForLesson(lesson,[right,wrong]),'correct-sample');
 const stats=subjectProgress('Matemática',[wrong,right]);
 assert.deepEqual(stats,{total:lessonsForSubject('Matemática').length,practiced:1,correct:1,review:0,coverage:Math.round(100/lessonsForSubject('Matemática').length)});
});

test('recommendation prioritizes review then foundational unattempted content',()=>{
 const wrong:QuestionAttempt={questionId:'q02',answerIndex:0,correct:false,subject:'Matemática',createdAt:'2026-10-01T10:00:00Z',mode:'practice'};
 assert.equal(recommendedNextLesson('Matemática',[wrong])?.questionId,'q02');
 assert.equal(recommendedNextLesson('Matemática',[])?.questionId,'q01');
 assert.equal(recommendedNextLesson('Inexistente',[]),null);
});
