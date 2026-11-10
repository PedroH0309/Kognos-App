import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {provaoDepthBatch17Core} from './provao-depth-batch17-core.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[
 ['Química','Tratamento de água',[1,1,2]],
 ['Física','Velocidade e Aceleração: escalar média e instantânea',[1,2,3]],
 ['Biologia','Noções básicas de reprodução assexuada e sexuada dos animais',[1,2,3]],
 ['História','Mercantilismo e colonização',[1,0,2]],
 ['Química','Óxidos e a chuva ácida',[0,2,1]]
] as const;
test('batch 17 exact five topics, pedagogical depth, objective keys and unchanged IDs',()=>{
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous topic '+subject+' / '+prefix);
  const topic=matches[0];const lesson=deepProvaoLesson(topic);
  const historical=provaoDepthBatch17Core.find(spec=>spec.subject===subject&&spec.topicStart===prefix);
  assert.ok(historical,'Missing historical batch 17 source '+prefix);
  assert.ok(lesson,'Missing lesson '+prefix);
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
   assert.equal(historical.tasks[i].correctIndex,keys[i], 'Original batch 17 key '+prefix+'/'+i);
   assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4,
    'Current editorial answer index invalid '+prefix+'/'+i);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
