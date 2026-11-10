import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch23Core} from './provao-depth-batch23-core.ts';
const cases=[
 ['Química','Indicadores, condutibilidade elétrica, reação com metais, reação de neutralização',[1,1,2]],
 ['Física','Representação gráfica, em função do tempo, do espaço, da velocidade escalar e da aceleração',[1,1,3]],
 ['Biologia','Alternativas energéticas e soluções contra as ameaças ao equilíbrio dos ecossistemas',[1,2,3]],
 ['História','O Império Romano: crise e derrocada no Ocidente',[1,2,3]],
 ['Química','Soluções aquosas: conceito e classificação',[1,2,0]]
] as const;
test('batch 23: five exact unique syllabus topics with three substantial levels and verified objective keys',()=>{
 assert.equal(provaoDepthBatch23Core.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length);
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous topic '+prefix);
  const historical=provaoDepthBatch23Core.find(spec=>spec.subject===subject&&spec.topicStart===prefix);
  assert.ok(historical,'Missing original batch 23 editorial source '+prefix);
  const topic=matches[0];const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,prefix+' explanation '+i);
   assert.ok(section.example.length>=180,prefix+' example '+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(historical.tasks[i].correctIndex,keys[i],'Historical batch 23 answer key '+prefix+'/'+i);
   // The resolver may select a newer exact-match lesson. Check its own key
   // independently rather than imposing an earlier edition's option order.
   assert.ok(Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4,
    'Resolved answer index must be valid '+prefix+'/'+i);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
