import {test} from 'node:test';
import assert from 'node:assert/strict';
import {learningLessons} from './learning-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {lessonExamTopics,linkedExamTopic,lessonGenerationPreset,validLessonAIReference,inferLegacyLessonId} from './lesson-ai-links.ts';

const institutions:ExamId[]=['enem','etec','fuvest','vunesp','saresp'];

test('every study topic has a server-validated generation preset',()=>{
 assert.ok(learningLessons.length>900);
 for(const lesson of learningLessons){
  const preset=lessonGenerationPreset(lesson.id);
  assert.ok(preset,`Missing topic bridge for ${lesson.id}`);
  assert.equal(preset?.subject,lesson.subject);
  assert.equal(validLessonAIReference(lesson.id,preset!.institution,preset!.subject,preset!.topic),true);
  for(const id of institutions){
   const topic=linkedExamTopic(lesson.id,id);
   if(topic)assert.ok(examBlueprints[id].subjects[lesson.subject]?.includes(topic));
  }
 }
 assert.equal(Object.keys(lessonExamTopics).length,learningLessons.length);
});

test('cross-subject and invented lesson tags are refused, never inferred from broad topics',()=>{
 assert.equal(validLessonAIReference('physics-motion','enem','Física','Movimento e forças'),false);
 assert.equal(validLessonAIReference('physics-motion','etec','Física','Movimento e unidades'),true);
 assert.equal(validLessonAIReference('physics-forces','enem','Física','Movimento e forças'),true);
 assert.equal(validLessonAIReference('bio-cells','enem','História','Citologia'),false);
 assert.equal(validLessonAIReference('unknown-lesson','enem','Biologia','Citologia'),false);
 assert.equal(inferLegacyLessonId('enem','Física','Movimento e forças'),null);
 assert.equal(inferLegacyLessonId('enem','Biologia','Citologia'),'bio-cells');
 assert.equal(inferLegacyLessonId('fuvest','Biologia','Fisiologia humana'),null);
 assert.equal(lessonGenerationPreset('not-registered'),null);
});
