import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseSection,CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {starterLesson} from './starter-lessons.ts';
import {provaoDepthBatch31Faraday} from './provao-depth-batch31-faraday.ts';
import {provaoDepthBatch31Capacitors} from './provao-depth-batch31-capacitors.ts';
import {provaoDepthBatch31ProtozoaFungi} from './provao-depth-batch31-protozoa-fungi.ts';
import {provaoDepthBatch31AbolitionImmigration} from './provao-depth-batch31-abolition-immigration.ts';
import {provaoDepthBatch31Imperialism} from './provao-depth-batch31-imperialism.ts';

const specs=[
 ...provaoDepthBatch31Faraday,...provaoDepthBatch31Capacitors,
 ...provaoDepthBatch31ProtozoaFungi,...provaoDepthBatch31AbolitionImmigration,
 ...provaoDepthBatch31Imperialism
];
const expected=[
 ['Física','Lei de Faraday-Neumann',[1,2,0]],
 ['Física','Capacitores. Associação de capacitores. Energia potencial elétrica armazenada em um capacitor.…',[1,2,0]],
 ['Biologia','Doenças humanas causadas por fungos e protozoários (amebíase, malária, doença de Chagas e…',[1,2,0]],
 ['História','Da mão de obra escrava à imigração',[1,2,0]],
 ['História','Ásia e África: imperialismo, neocolonialismo e resistência',[1,2,0]]
] as const;

test('batch 31: five distinct official Provão topics with rigorous original objective lessons',()=>{
 assert.equal(specs.length,5);
 assert.equal(new Set(specs.map(spec=>spec.subject+'\0'+spec.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicated deep topic registrations');
 for(const [subject,topicName,expectedKeys] of expected){
  const official=curriculumTopics.filter(topic=>topic.subject===subject&&topic.topic===topicName&&topic.exams.includes('saresp'));
  assert.equal(official.length,1,'Missing or ambiguous exact official topic: '+subject+' / '+topicName);
  const topic=official[0],spec=specs.find(s=>s.subject===subject&&s.topicStart===topicName);
  assert.ok(spec,'Missing specific authored spec '+topicName);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing specific resolved lesson '+topicName);
  assert.equal(lesson.id,topic.id,'Stable syllabus identifiers must remain unchanged');
  assert.equal(lesson.topic,topic.topic);
  assert.deepEqual(starterLesson(topic),lesson,'Do not bypass editorial fallback');
  assert.equal(lesson.objective,spec.objective,'Must select exact topic-specific lesson');
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.authorship.includes('aula autoral aprofundada e específica'));
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(t=>t.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.equal(section.title,spec.sections[i].title,'Must show the new authored module');
   assert.ok(section.explanation.length>=750,topicName+' explanation '+i);
   assert.ok(section.example.length>=180,topicName+' original worked example '+i);
   assert.ok(section.pitfall.length>=50,topicName+' limits and misconceptions '+i);
   assert.ok(section.steps.length>=3,topicName+' steps '+i);
   assert.equal(task.options?.length,4,'Four alternatives A-D only');
   assert.equal(new Set(task.options).size,4,'Four distinct alternatives');
   assert.equal(task.correctIndex,expectedKeys[i],topicName+' answer '+i);
   assert.equal(task.correctIndex,spec.tasks[i].correctIndex,'Must keep editorial answer');
   assert.ok(task.solution.length>=140,topicName+' correction '+i);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
