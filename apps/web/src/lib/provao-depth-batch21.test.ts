import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {provaoDepthBatch21Core} from './provao-depth-batch21-core.ts';
const cases=[
 ['Química','Estado físico e propriedades dos materiais',[1,2,0]],
 ['Física','Referencial inercial. Movimentos retilíneos. Situações de equilíbrio',[1,2,3]],
 ['Biologia','Método científico',[0,2,3]],
 ['História','Diversidade religiosa: paganismo, judaísmo, cristianismo e islamismo',[1,2,3]],
 ['Química','Segurança na aquisição, armazenagem e utilização de produtos químicos domésticos de produtos',[0,2,3]]
] as const;
test('batch 21: five unique exact Provão topics with original deep lessons and objective answer keys',()=>{
 assert.equal(provaoDepthBatch21Core.length,5);
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,'No duplicate deep topic registrations');
 for(const [subject,prefix,keys] of cases){
  const matches=curriculumTopics.filter(t=>t.subject===subject&&t.topic.startsWith(prefix)&&t.exams.includes('saresp'));
  assert.equal(matches.length,1,'Missing or ambiguous topic '+subject+'/'+prefix);
  const topic=matches[0];const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing authored lesson '+prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.ok(lesson.authorship.includes('sem homologação docente'));
  assert.ok(lesson.objective.length>=100);
  assert.ok(lesson.prerequisites.length>=3);
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const s=lesson.sections[i],q=lesson.tasks[i];
   assert.ok(s.explanation.length>=750,prefix+' chapter '+i);
   assert.ok(s.example.length>=180,prefix+' worked example '+i);
   assert.ok(s.pitfall.length>=50&&s.steps.length>=3);
   assert.equal(q.options?.length,4);
   assert.equal(new Set(q.options).size,4);
   assert.equal(q.correctIndex,keys[i]);
   assert.ok(q.solution.length>=140);
   assert.equal(lessonTaskChoice(lesson,q).source,'editorial');
  }
 }
});
