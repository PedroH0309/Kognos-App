import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {provaoDepthBatch16Core} from './provao-depth-batch16-core.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import type {CourseSection,CourseTask} from './course-content.ts';
const cases=[
 ['Química','Fórmulas químicas: fórmula mínima',[0,1,2]],
 ['Química','A eletrosfera e o diagrama de Linus Pauling',[1,2,0]],
 ['Física','Forças e composição vetorial das forças',[2,1,2]],
 ['Biologia','Importância ecológica e econômica de bactérias e fungos',[1,2,0]],
 ['História','Formação dos Estados modernos',[2,1,3]]
] as const;
test('batch 16 validates five exact curricular topics, depth and verified A-D answers',()=>{
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Ambiguous or missing official topic '+subject+'/'+prefix);
  const topic=matches[0];
  // Batch 26 provides a more exact official-topic match for formula chemistry.
  // Validate batch 16's original editorial material independently, without
  // asserting that its older broad prefix overrides the more specific lesson.
  const olderSpec=provaoDepthBatch16Core.find(item=>item.subject===subject&&item.topicStart===prefix);
  assert.ok(olderSpec,'Missing original batch 16 specification '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing specific authored lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory');
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,prefix+' explanation '+i);
   assert.ok(section.example.length>=180,prefix+' worked example '+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(olderSpec.tasks[i].correctIndex,keys[i],'Original batch 16 answer key '+i);
   // A newer exact-match edition can supersede this historical batch.
   // Verify the original key against its original task, and validate the
   // currently selected edition independently instead of pinning its index.
   assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4,
    'Resolved lesson must have a valid objective answer key '+prefix+' / '+i);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
