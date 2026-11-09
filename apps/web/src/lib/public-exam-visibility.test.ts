import {test} from 'node:test';
import assert from 'node:assert/strict';
import {examBlueprints,publicExamEntries,publicExamIds,isPublicExam} from './exam-blueprints.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {activeSyllabi,examForStudent} from './exam-syllabus.ts';
import {initialProfile,normalizeProfile} from './profile.ts';
import {learningCatalogForExam} from './lesson-ai-links.ts';

test('ETEC is no longer a public study track, while historic blueprint still exists',()=>{
 assert.ok(examBlueprints.etec.subjects.Matemática?.length);
 assert.deepEqual(publicExamIds,['enem','fuvest','saresp','vunesp']);
 assert.equal(isPublicExam('etec'),false);
 assert.equal(isPublicExam('enem'),true);
 assert.deepEqual(publicExamEntries().map(([id])=>id),publicExamIds);
 assert.ok(!publicExamEntries().some(([id,b])=>id==='etec'||b.label.includes('ETEC')));
});
test('historical curriculum retains stable ETEC IDs but all other exam content remains reachable',()=>{
 assert.ok(curriculumTopics.length>0);
 assert.ok(curriculumTopics.some(topic=>topic.exams.includes('etec')));
 for(const [id,blueprint] of publicExamEntries()){
  for(const [subject,topics] of Object.entries(blueprint.subjects)){
   for(const topic of topics)assert.ok(
    curriculumTopics.some(item=>item.subject===subject&&item.topic===topic&&item.exams.includes(id)),
    id+' / '+subject+' / '+topic
   );
  }
 }
});
test('legacy ETEC profile data is readable but no longer drives visible exam selection',()=>{
 const oldProfile=normalizeProfile({...initialProfile,goal:'etec',examFocus:'etec',syllabusExams:['etec','enem']});
 assert.equal(oldProfile.examFocus,'etec');
 assert.deepEqual(oldProfile.syllabusExams,['etec','enem']);
 assert.equal(examForStudent(oldProfile),null);
 assert.deepEqual(activeSyllabi(oldProfile),['enem']);
 assert.equal(examForStudent({...oldProfile,examFocus:'fuvest'}),'fuvest');
});
test('general lessons retain other exam content, without ETEC-exclusive generated entries',()=>{
 const all=learningCatalogForExam(null);
 assert.ok(all.length>0);
 assert.ok(all.every(lesson=>!lesson.curriculumId||lesson.exams?.some(exam=>exam!=='etec')));
 // Legacy ETEC topics remain addressable for historical data, not discoverable in general view.
 assert.ok(learningCatalogForExam('etec').length>0);
});
