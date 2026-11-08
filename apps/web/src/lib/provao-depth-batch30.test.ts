import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseSection,CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch29Isomerism} from './provao-depth-batch29-isomerism.ts';
import {provaoDepthBatch29Eclipses} from './provao-depth-batch29-eclipses.ts';
import {provaoDepthBatch29Virology} from './provao-depth-batch29-virology.ts';
import {provaoDepthBatch30Organics} from './provao-depth-batch30-organics.ts';
import {provaoDepthBatch30Dispersion} from './provao-depth-batch30-dispersion.ts';

const specs=[
 ...provaoDepthBatch29Isomerism,
 ...provaoDepthBatch29Eclipses,
 ...provaoDepthBatch29Virology,
 ...provaoDepthBatch30Organics,
 ...provaoDepthBatch30Dispersion
];
const expected=[
 ['Química','Isomeria plana e espacial (geométrica e óptica)',[2,1,3]],
 ['Física','Eclipses. Sombra e penumbra. Câmara escura de orifício',[0,3,1]],
 ['Biologia','Vírus: reconhecimento das características e sua importância em contextos relacionados à saúde e…',[1,0,2]],
 ['Química','As características gerais dos compostos orgânicos',[3,2,0]],
 ['Física','Fenômeno da dispersão luminosa e a refração da luz na atmosfera. 9.Ondulatória',[1,3,0]]
] as const;

test('batch 30: five added exact official syllabi with deep authored chapters and verified objective keys',()=>{
 assert.equal(specs.length,5);
 assert.equal(new Set(specs.map(s=>s.subject+'\0'+s.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicate depth registration');
 for(const [subject,name,keys] of expected){
  const official=curriculumTopics.filter(t=>t.subject===subject&&t.topic===name&&t.exams.includes('saresp'));
  assert.equal(official.length,1,'Missing or ambiguous official topic: '+subject+' / '+name);
  const topic=official[0];
  const spec=specs.find(s=>s.subject===subject&&s.topicStart===name);
  assert.ok(spec,'Missing specific content: '+name);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing resolved lesson '+name);
  assert.equal(lesson.id,topic.id,'Preserve stable curriculum IDs');
  assert.equal(lesson.topic,topic.topic);
  assert.deepEqual(starterLesson(topic),lesson,'Do not disrupt editorial fallback');
  assert.ok(lesson.authorship.includes('aula autoral aprofundada e específica'));
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100,'Specific objective '+name);
  assert.ok(lesson.prerequisites.length>=3,'Prerequisites '+name);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i];
   const task:CourseTask=lesson.tasks[i];
   assert.equal(section.title,spec.sections[i].title,'Exact authored chapter resolution '+name);
   assert.ok(section.explanation.length>=750,name+' explanatory chapter '+i);
   assert.ok(section.example.length>=180,name+' worked example '+i);
   assert.ok(section.pitfall.length>=50,name+' misconceptions and caveats '+i);
   assert.ok(section.steps.length>=3,name+' progressive steps '+i);
   assert.equal(task.options?.length,4,name+' A-D four-option assessment '+i);
   assert.equal(new Set(task.options).size,4,name+' distinct options '+i);
   assert.equal(task.correctIndex,keys[i],name+' verified key '+i);
   assert.equal(task.correctIndex,spec.tasks[i].correctIndex,name+' authorial key '+i);
   assert.ok(task.solution.length>=140,name+' detailed explanation '+i);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
