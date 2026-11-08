import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch19Core} from './provao-depth-batch19-core.ts';
test('batch 19: five distinct specific syllabus lessons with original substantial progressive content and verified MCQs',()=>{
 assert.equal(provaoDepthBatch19Core.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicate deep syllabus registrations');
 for(const spec of provaoDepthBatch19Core){
  const matches=curriculumTopics.filter(t=>t.subject===spec.subject&&t.topic.startsWith(spec.topicStart)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official topic '+spec.topicStart);
  const topic=matches[0];const lesson=deepProvaoLesson(topic);
  assert.ok(lesson);assert.equal(lesson.id,topic.id);assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const s=lesson.sections[i];const q: (typeof lesson.tasks)[number]=lesson.tasks[i];
   assert.ok(s.explanation.length>=750,spec.topicStart+' short explanation '+i);
   assert.ok(s.example.length>=180,spec.topicStart+' short example '+i);
   assert.ok(s.pitfall.length>=50&&s.steps.length>=3);
   assert.equal(q.options?.length,4);assert.equal(new Set(q.options).size,4);
   assert.ok(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<4);
   assert.ok(q.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,q).source,'editorial');
  }
 }
});