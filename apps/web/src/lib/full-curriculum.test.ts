import {localStudyGuide} from './offline-study-guide.ts';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {examBlueprints,studySubjectsForExam,validateGenerationRequest,type ExamId} from './exam-blueprints.ts';
import {learningLessons,introductoryLessons} from './learning-catalog.ts';
import {learningCatalogForExam,linkedExamTopic,validLessonAIReference} from './lesson-ai-links.ts';
import {topicForLegacyLesson} from './curriculum-catalog.ts';
import {aggregateAIStudyProgress} from './ai-study-progress.ts';
import {connectedSubjectProgress} from './connected-learning.ts';

test('every registered exam topic is visible, openable and accepted for AI practice',()=>{
 for(const exam of Object.keys(examBlueprints) as ExamId[]){
  const catalog=learningCatalogForExam(exam);
  for(const [subject,topics] of Object.entries(studySubjectsForExam(exam)))for(const topic of topics){
   const lesson=catalog.find(l=>l.subject===subject&&l.topic===topic);
   assert.ok(lesson,`${exam}: ${subject} / ${topic}`);
   const practiceTopic=linkedExamTopic(lesson.id,exam);
   assert.ok(practiceTopic);
   assert.ok(validLessonAIReference(lesson.id,exam,subject,practiceTopic));
   assert.ok(validateGenerationRequest({institution:exam,subject,topic:practiceTopic,lessonId:lesson.id,difficulty:'basic',count:3}));
   assert.ok(topicForLegacyLesson(lesson.id));
  }
 }
 assert.equal(new Set(learningLessons.map(l=>l.id)).size,learningLessons.length);
 assert.equal(introductoryLessons.length,80);
});

test('new topics record server-regraded practice in the same progress pipeline',()=>{
 const lesson=learningLessons.find(l=>l.curriculumId&&l.exams?.includes('enem'))!;
 const progress=aggregateAIStudyProgress([{id:'new-topic-question',lesson_id:lesson.id,institution:'enem',subject:lesson.subject,topic:lesson.topic,correct_index:2}],
 [{question_id:'new-topic-question',answer_index:2,created_at:'2026-11-03T10:00:00Z',mode:'practice'}]);
 assert.equal(progress.unlinkedAttempts,0);
 assert.equal(progress.lessons[0].lessonId,lesson.id);
 const summary=connectedSubjectProgress(lesson.subject,[],progress,learningCatalogForExam('enem'));
 assert.equal(summary.practiced,1);
 assert.equal(summary.aiCorrect,1);
 assert.equal(localStudyGuide('explique esta aula',{kind:'lesson',lessonId:lesson.id}),null);
 assert.equal(lesson.explanation,''); // outline metadata must never impersonate a completed lesson
});

test('exam scope changes totals without deleting historical lesson IDs',()=>{
 const etec=learningCatalogForExam('etec');
 assert.ok(etec.some(l=>l.subject==='Ciências'&&l.topic==='Sistema Solar'));
 assert.ok(!etec.some(l=>l.topic==='Leitura obrigatória FUVEST 2027: Nebulosas — Narcisa Amália'));
 assert.ok(learningLessons.some(l=>l.id==='math-percentages'));
 assert.ok(learningCatalogForExam(null).length>etec.length);
});
