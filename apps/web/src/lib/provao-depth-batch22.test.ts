import type {CourseTask} from './course-content.ts';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch22Core} from './provao-depth-batch22-core.ts';
const cases=[
 ['Química','Gases do efeito estufa',[1,2,3]],
 ['Física','O modelo do gás ideal',[1,2,3]],
 ['Biologia','Poluição ambiental e os impactos da intervenção humana:',[1,2,3]],
 ['História','O escravismo na Grécia e em Roma',[1,2,3]],
 ['Química','Energia de ativação',[1,2,3]]
] as const;
test('batch 22: five unique authored topics, substantial progressive explanations and objective questions',()=>{
 assert.equal(provaoDepthBatch22Core.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicate authored topic registrations');
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous syllabus topic '+subject+' / '+prefix);
  const topic=matches[0];
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i];
   const task: CourseTask=lesson.tasks[i];
   assert.ok(section.explanation.length>=750,prefix+' explanation '+i);
   assert.ok(section.example.length>=180,prefix+' example '+i);
   assert.ok(section.pitfall.length>=50&&section.steps.length>=3);
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,keys[i]);
   assert.ok(task.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
