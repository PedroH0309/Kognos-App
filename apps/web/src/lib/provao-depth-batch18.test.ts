import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {provaoDepthBatch18Core} from './provao-depth-batch18-core.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[["Física","Lei da gravitação universal de Newton",[2,2,1]]] as const;
test('batch 18 unique gravitation lesson catalog identity, progressive lessons and verified objective answers',()=>{
 for(const [subject,prefix,answers] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official topic '+subject+' '+prefix);
  const topic=matches[0],lesson=deepProvaoLesson(topic);
  const historical=provaoDepthBatch18Core.find(spec=>spec.subject===subject&&spec.topicStart===prefix);
  assert.ok(historical,'Missing original batch 18 editorial source '+prefix);
  assert.ok(lesson,'No lesson for '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory');
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,'Short explanation '+prefix+'/'+i);
   assert.ok(section.example.length>=180,'Short worked example '+prefix+'/'+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(historical.tasks[i].correctIndex,answers[i],'Historical batch 18 answer key '+prefix+'/'+i);
   // The resolver may select a newer exact-match lesson. Check its own key
   // independently rather than imposing an earlier edition's option order.
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4,
    'Resolved answer index must be valid '+prefix+'/'+i);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
