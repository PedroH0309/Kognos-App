import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
const cases=[
 {subject:'Química',prefix:'Lei de Lavoisier e Lei de Proust',answers:[2,0,2]},
 {subject:'Física',prefix:'Potência elétrica. Efeito joule. Consumo de energia elétrica. O quilowatt-hora',answers:[2,1,0]},
 {subject:'Biologia',prefix:'Ciclos biogeoquímicos: água, oxigênio, carbono e nitrogênio',answers:[1,0,3]},
 {subject:'História',prefix:'Primeira República: política, economia e movimentos sociais',answers:[1,2,0]},
 {subject:'Química',prefix:'Produto iônico da água e escalas de pH e pOH',answers:[0,2,3]}
] as const;
test('batch 11: five exact syllabus topics, 15 substantive chapters and 15 original objective answer keys',()=>{
 for(const item of cases){
  const topic=curriculumTopics.find(t=>t.subject===item.subject&&t.topic.startsWith(item.prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,'Missing official topic '+item.subject+' '+item.prefix);
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,'Missing deep lesson '+item.prefix);
  assert.equal(lesson.id,topic.id);
  assert.deepEqual(starterLesson(topic),lesson);
  assert.equal(lesson.review,'introductory');
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const s=lesson.sections[i],q=lesson.tasks[i];
   assert.ok(s.explanation.length>=750,'Insufficient specific explanation '+item.prefix+' '+i);
   assert.ok(s.example.length>=180,'Missing worked example '+item.prefix+' '+i);
   assert.ok(s.pitfall.length>=50&&s.steps.length>=3,'Missing pitfalls or process '+item.prefix);
   assert.equal(q.options?.length,4);
   assert.equal(new Set(q.options).size,4);
   assert.equal(q.correctIndex,item.answers[i]);
   assert.ok(q.solution.length>=140,'Missing commented correction '+item.prefix);
   assert.equal(lessonTaskChoice(lesson,q).source,'editorial');
  }
 }
});
