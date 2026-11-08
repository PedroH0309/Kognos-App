import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoDepthBatch24Core} from './provao-depth-batch24-core.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

test('batch 24: five distinct chemistry lessons with original worked examples and objective assessments',()=>{
 assert.equal(provaoDepthBatch24Core.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'Duplicate deep topic registrations');
 for(const spec of provaoDepthBatch24Core){
  const matches=curriculumTopics.filter(t=>t.subject===spec.subject&&t.topic.startsWith(spec.topicStart)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official syllabus topic: '+spec.topicStart);
  const lesson=deepProvaoLesson(matches[0]);
  assert.ok(lesson);assert.equal(lesson.id,matches[0].id);
  assert.deepEqual(starterLesson(matches[0]),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const s=lesson.sections[i],q:CourseTask=lesson.tasks[i];
   assert.ok(s.explanation.length>=750,spec.topicStart+' short explanation '+i);
   assert.ok(s.example.length>=180,spec.topicStart+' short worked example '+i);
   assert.ok(s.steps.length>=3&&s.pitfall.length>=50);
   assert.equal(q.options?.length,4);
   assert.equal(new Set(q.options).size,4);
   assert.ok(typeof q.correctIndex==='number'&&Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<4);
   assert.ok(q.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,q).source,'editorial');
  }
 }
});
