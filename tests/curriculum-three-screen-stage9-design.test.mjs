import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('The Estudos entry renders subject selector before topic list and dedicated lesson, not the old grid',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 const flow=read('apps/web/src/components/CurriculumStudyFlow.tsx');
 assert.match(room,/export default function CurriculumRoom\(props:CurriculumRoomProps\)/);
 assert.match(room,/if\(props\.embedded\)return <EmbeddedCurriculumRoom/);
 assert.match(room,/<CurriculumStudyFlow/);
 assert.match(flow,/step==='subjects'/);
 assert.match(flow,/step==='topics'/);
 assert.match(flow,/step==='lesson'/);
 assert.match(flow,/k-curriculum-subject-grid/);
 assert.match(flow,/k-curriculum-topic-list/);
 assert.match(flow,/k-curriculum-dedicated-reader/);
 assert.match(flow,/curriculumSubjects\(scoped\)/);
 assert.match(flow,/curriculumSubjectTopics\(scoped,subject\)/);
 assert.match(flow,/renderLesson\(current,setActivitiesAnswered,openRelatedTopic\)/);
 assert.match(flow,/function openRelatedTopic\(topicId:string\)/);
 assert.match(room,/onNavigateTopic=\{onRelatedTopic\}/);
});
test('Each lesson has all existing reading/practice/explanation/material/evolution options',()=>{
 const room=read('apps/web/src/components/CurriculumRoom.tsx');
 for(const phrase of ['Aula em texto','Atividades','Explicações','Materiais','Evolução']){
  assert.ok(room.includes(phrase),'Missing '+phrase);
 }
 assert.match(room,/SkillEvolutionPanel/);
 assert.match(room,/onGenerateAI\(detail\.topic\.legacyLessonId\|\|detail\.topic\.id,true\)/);
 assert.match(room,/onActivityProgress=\{pane==='activities'\?onActivityProgress:undefined\}/);
 assert.match(room,/readerTab==='materials'&&findProvaoTopic/);
 assert.match(room,/readerTab==='materials'&&<details className="course-reference"/);
});
test('The next lesson button unlocks only after reading confirmation and nonempty authored activity drafts',()=>{
 const flow=read('apps/web/src/components/CurriculumStudyFlow.tsx');
 const reader=read('apps/web/src/components/TopicLessonSections.tsx');
 assert.match(flow,/canFinishLesson\(hasLesson,readingConfirmed,activitiesAnswered,true\)/);
 assert.match(flow,/disabled=\{hasLesson&&!ready\}/);
 assert.match(flow,/Prosseguir para a próxima aula/);
 assert.match(flow,/Pular tema sem aula/);
 assert.match(flow,/Concluí a leitura de toda a aula/);
 assert.match(reader,/exerciseIds\.every\(key=>Boolean\(next\[key\]\?\.trim\(\)\)\)/);
 assert.match(reader,/onActivityProgress\?\./);
 assert.match(reader,/não correção/);
 assert.doesNotMatch(reader,/recordAttempt\(|\/api\/ai-questions\/submit/);
});
test('Curriculum navigation is responsive and no nested oversized lesson frame remains',()=>{
 const css=read('apps/web/src/app/kognos-curriculum-flow-stage9.css');
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/grid-template-columns:1fr/);
 assert.match(css,/scroll-margin-top/);
 assert.match(css,/k-curriculum-dedicated-reader/);
 assert.match(css,/overflow:visible!important/);
 assert.match(css,/k-curriculum-subject-card/);
 assert.match(css,/k-curriculum-topic-row/);
 assert.match(css,/focus-visible/);
 assert.match(css,/prefers-reduced-motion/);
 assert.match(read('apps/web/src/app/layout.tsx'),/kognos-curriculum-flow-stage9\.css/);
});
