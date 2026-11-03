import {test} from 'node:test';
import assert from 'node:assert/strict';
import {learningLessons,findLearningLesson,questionForLesson} from './learning-catalog.ts';
import {expandedLessons} from './learning-expansion.ts';
import {demoQuestions,type QuestionAttempt} from './demo-questions.ts';
import {lessonGenerationPreset,validLessonAIReference,linkedExamTopic} from './lesson-ai-links.ts';
import {validateGenerationRequest} from './exam-blueprints.ts';
import {selectBaselineQuestions,reviewItems} from './adaptive-review.ts';
import {subjectProgress} from './learning-progress.ts';
import {buildVerifiedLessonContext,parseKogStudyContext} from './kog-study-context.ts';

test('expanded lessons have usable exercises, prerequisite order and valid AI requests',()=>{
 for(const lesson of expandedLessons){
  const index=learningLessons.findIndex(item=>item.id===lesson.id);
  for(const prerequisite of lesson.prerequisites){
   const base=learningLessons.findIndex(item=>item.id===prerequisite);
   assert.ok(base>=0&&base<index,`${lesson.id}: missing or cyclic prerequisite`);
   assert.equal(findLearningLesson(prerequisite)?.subject,lesson.subject);
  }
  const question=questionForLesson(lesson)!;
  assert.equal(new Set(question.options).size,4);
  assert.ok(question.options.every(option=>option.trim().length>0));
  assert.ok(question.explanation.length>30);
  const preset=lessonGenerationPreset(lesson.id)!;
  assert.ok(validateGenerationRequest({...preset,difficulty:'intermediate',count:1}));
  assert.ok(validLessonAIReference(lesson.id,preset.institution,lesson.subject,preset.topic));
  assert.ok(parseKogStudyContext({kind:'lesson',lessonId:lesson.id}));
  assert.ok(buildVerifiedLessonContext(lesson).includes(lesson.explanation));
 }
});

test('new practice reaches progress and spaced review using canonical answer keys',()=>{
 const lesson=findLearningLesson('geo-water')!;
 const question=questionForLesson(lesson)!;
 const attempt:QuestionAttempt={questionId:question.id,answerIndex:question.correct,correct:false,subject:'forged',createdAt:'2026-11-03T12:00:00Z',mode:'practice'};
 const progress=subjectProgress('Geografia',[attempt]);
 assert.equal(progress.practiced,1);
 assert.equal(progress.correct,1);
 const review=reviewItems([attempt],new Date('2026-11-03T14:00:00Z')).find(item=>item.lesson.id===lesson.id)!;
 assert.equal(review.lastCorrect,true);
 assert.equal(review.status,'scheduled');
});

test('baseline keeps original IDs and answers despite the larger bank',()=>{
 const baseline=selectBaselineQuestions();
 assert.deepEqual(baseline.map(q=>q.id),Array.from({length:20},(_,i)=>`q${String(i+1).padStart(2,'0')}`));
 assert.deepEqual(baseline.map(q=>q.correct),[2,1,2,2,2,1,2,1,1,2,1,2,3,1,2,2,2,0,1,0]);
 assert.equal(demoQuestions.length,80);
});

test('exam bridges retain grade and subject boundaries',()=>{
 assert.ok(linkedExamTopic('geo-water','vunesp'));
 assert.ok(linkedExamTopic('math-ratios','etec'));
 assert.ok(linkedExamTopic('science-earth','saresp'));
 assert.equal(linkedExamTopic('writing-intervention','etec'),null);
 assert.equal(linkedExamTopic('physics-circuits','saresp'),null);
 assert.equal(validLessonAIReference('science-matter','enem','Química','Matéria, substâncias e misturas'),false);
});
