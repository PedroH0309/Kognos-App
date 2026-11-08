import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {deepProvaoLesson} from './provao-depth-lessons.ts';
import {starterLesson} from './starter-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';

const targets=[
 {subject:'Física',prefix:'Leis de Newton: Princípio da inércia',answers:[2,0,3]},
 {subject:'Matemática',prefix:'Função quadrática: Conceitos e resolução de problemas',answers:[1,3,0]},
 {subject:'Química',prefix:'Modelos atômicos de Dalton, Thomson, Rutherford e Bohr',answers:[0,2,1]},
 {subject:'Biologia',prefix:'Divisões celulares: compreensão das funções da mitose e da meiose',answers:[3,1,2]},
 {subject:'História',prefix:'O Regime Civil-Militar',answers:[1,0,2]}
] as const;

test('batch 06 has exact official identifiers, progressive original theory and objective assessments',()=>{
 for(const target of targets){
  const topic=curriculumTopics.find(t=>t.subject===target.subject&&t.topic.startsWith(target.prefix)&&t.exams.includes('saresp'));
  assert.ok(topic,target.subject+' missing official Provão curriculum item');
  const lesson=deepProvaoLesson(topic);
  assert.ok(lesson,target.subject+' not loaded into the common lesson resolver');
  assert.equal(lesson.id,topic.id,'Must preserve the original curriculum ID for every student');
  assert.deepEqual(starterLesson(topic),lesson,'Every exam path must select the same authored lesson');
  assert.equal(lesson.review,'introductory','No fraudulent teacher approval');
  assert.ok(lesson.authorship.includes('revisão docente pendente'));
  assert.deepEqual(lesson.sections.map(s=>s.level),['basic','intermediate','advanced']);
  assert.deepEqual(lesson.tasks.map(q=>q.level),['basic','intermediate','advanced']);
  for(let i=0;i<3;i++){
   const section=lesson.sections[i],q=lesson.tasks[i];
   assert.ok(section.explanation.length>=750&&section.example.length>=180&&section.pitfall.length>=50&&section.steps.length>=3,target.subject+' '+i+' lacks didactic depth');
   assert.equal(q.options?.length,4,target.subject+' must remain only multiple choice');
   assert.equal(new Set(q.options).size,4);
   assert.equal(q.correctIndex,target.answers[i],'Editorial answer key must be stable');
   assert.ok(q.solution.length>=140,'Every alternative needs an explanatory answer');
   assert.equal(lessonTaskChoice(lesson,q).source,'editorial','Do not fabricate options for authored tasks');
  }
 }
});
