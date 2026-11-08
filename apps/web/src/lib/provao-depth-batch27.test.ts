import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseSection,CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch27Optics} from './provao-depth-batch27-optics.ts';
import {provaoDepthBatch27Waves} from './provao-depth-batch27-waves.ts';
import {provaoDepthBatch27Investigation} from './provao-depth-batch27-investigation.ts';
import {provaoDepthBatch27Destiny} from './provao-depth-batch27-destiny.ts';
import {provaoDepthBatch27Monopolies} from './provao-depth-batch27-monopolies.ts';

const specs=[...provaoDepthBatch27Optics,...provaoDepthBatch27Waves,...provaoDepthBatch27Investigation,
 ...provaoDepthBatch27Destiny,...provaoDepthBatch27Monopolies];
const expected=[
 ['Física','Dioptro plano. Ângulo limite e reflexão total da luz',[2,1,3]],
 ['Física','Propagação de um pulso em meios unidimensionais. Lei de Taylor. Ondas planas e esféricas',[1,2,0]],
 ['Biologia','Procedimentos sistemáticos de investigação (elaboração de hipóteses, experimentação e…',[1,2,0]],
 ['História','A ideologia do Destino Manifesto',[2,1,3]],
 ['História','Avanço industrial e capitalismo monopolista',[0,2,3]]
] as const;

test('batch 27: five distinct official-syllabus lessons, original depth and verified multiple-choice keys',()=>{
 assert.equal(specs.length,5);
 assert.equal(new Set(specs.map(s=>s.subject+'\0'+s.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicate registrations');
 for(const [subject,prefix,correctKeys] of expected){
  const matching=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matching.length,1,'Missing or ambiguous official topic: '+subject+'/'+prefix);
  const topic=matching[0];
  const spec=specs.find(s=>s.subject===subject&&s.topicStart===prefix);
  assert.ok(spec,'Missing spec: '+prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing resolved lesson: '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.topic,topic.topic);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('aula autoral aprofundada e específica'));
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(x=>x.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(x=>x.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i],task:CourseTask=lesson.tasks[i];
   assert.equal(section.title,spec.sections[i].title,'Exact authored match required for '+prefix);
   assert.ok(section.explanation.length>=750,prefix+' chapter '+i+' explanatory text');
   assert.ok(section.example.length>=180,prefix+' chapter '+i+' worked example');
   assert.ok(section.pitfall.length>=50,prefix+' chapter '+i+' limits and misconceptions');
   assert.ok(section.steps.length>=3,prefix+' chapter '+i+' procedural steps');
   assert.equal(task.options?.length,4);
   assert.equal(new Set(task.options).size,4);
   assert.equal(task.correctIndex,correctKeys[i],prefix+' answer '+i);
   assert.equal(task.correctIndex,spec.tasks[i].correctIndex,prefix+' editorial key '+i);
   assert.ok(task.solution.length>=140,prefix+' chapter '+i+' explanation of answer');
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
