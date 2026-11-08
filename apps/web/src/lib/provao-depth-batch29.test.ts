import {test} from 'node:test';
import assert from 'node:assert/strict';
import type {CourseSection,CourseTask} from './course-content.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {starterLesson} from './starter-lessons.ts';
import {provaoDepthBatch29Water} from './provao-depth-batch29-water.ts';
import {provaoDepthBatch29GasWork} from './provao-depth-batch29-gas-work.ts';
import {provaoDepthBatch29Nutrition} from './provao-depth-batch29-nutrition.ts';
import {provaoDepthBatch29Coffee} from './provao-depth-batch29-coffee.ts';
import {provaoDepthBatch29SocialIdeas} from './provao-depth-batch29-social-ideas.ts';

const specs=[
 ...provaoDepthBatch29Water,...provaoDepthBatch29GasWork,
 ...provaoDepthBatch29Nutrition,...provaoDepthBatch29Coffee,...provaoDepthBatch29SocialIdeas
];
const expected=[
 ['Química','Ligação, estrutura, propriedades físicas e químicas da água',[2,1,3]],
 ['Física','Trabalho realizado pelas forças exercidas por um gás. Energia interna. Transformações cíclicas',[1,2,0]],
 ['Biologia','Alimentos e nutrição; segurança alimentar; ação das substâncias psicoativas (drogas) no sistema…',[2,1,0]],
 ['História','A ascensão do café e a primeira industrialização',[2,1,3]],
 ['História','Ideias sociais e projetos revolucionários',[2,1,0]]
] as const;

test('batch 29: five official Provão lessons have exact matches, progressive chapters and objective keys',()=>{
 assert.equal(specs.length,5);
 assert.equal(new Set(specs.map(spec=>spec.subject+'\0'+spec.topicStart)).size,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length);
 for(const [subject,name,keys] of expected){
  const topics=curriculumTopics.filter(topic=>topic.subject===subject&&topic.topic===name&&topic.exams.includes('saresp'));
  assert.equal(topics.length,1,'Missing exact official Provão topic '+subject+' / '+name);
  const topic=topics[0];
  const spec=specs.find(item=>item.subject===subject&&item.topicStart===name);
  assert.ok(spec,'Missing authored topic '+name);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing editorial resolver entry '+name);
  assert.equal(lesson.id,topic.id,'Stable curriculum ID must be preserved');
  assert.equal(lesson.topic,topic.topic);
  assert.deepEqual(starterLesson(topic),lesson,'Existing editorial fallback must be preserved');
  assert.equal(lesson.objective,spec.objective,'Must serve the new topic-specific objective');
  assert.ok(lesson.authorship.includes('aula autoral aprofundada e específica'));
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.license.includes('não oficial'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(section=>section.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(task=>task.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section:CourseSection=lesson.sections[i];
   const task:CourseTask=lesson.tasks[i];
   assert.equal(section.title,spec.sections[i].title,'Verify specific authored lesson and not a broad prefix match');
   assert.ok(section.explanation.length>=750,name+' explanation '+i);
   assert.ok(section.example.length>=180,name+' resolved example '+i);
   assert.ok(section.pitfall.length>=50,name+' misconceptions and scope '+i);
   assert.ok(section.steps.length>=3,name+' progressive operations '+i);
   assert.equal(task.options?.length,4,'Only A–D alternatives are permitted');
   assert.equal(new Set(task.options).size,4,'Alternatives must differ');
   assert.equal(task.correctIndex,keys[i],name+' answer key '+i);
   assert.equal(task.correctIndex,spec.tasks[i].correctIndex,name+' editorial source key '+i);
   assert.ok(task.solution.length>=140,name+' objective correction '+i);
   assert.equal(lessonTaskChoice(lesson,task).source,'editorial');
  }
 }
});
