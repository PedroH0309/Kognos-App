import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[["Química","Equações químicas e balanceamento",[1,2,0]],["Química","Geometria molecular",[1,2,3]],["Física","Lei da gravitação universal de Newton",[2,2,1]],["Biologia","Sucessão ecológica",[1,0,2]],["História","Revolução Industrial",[1,2,3]]] as const;
test('batch 18 exact catalog identity, progressive lessons and verified objective answers',()=>{
 for(const [subject,prefix,answers] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous official topic '+subject+' '+prefix);
  const topic=matches[0],lesson=deepProvaoLesson(topic);
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
   assert.equal(task.correctIndex,answers[i]);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
