import {test} from 'node:test';
import assert from 'node:assert/strict';
import {completeExamTopicCatalog} from './exam-blueprints.ts';
import {syllabusWithVerifiedTopics,confirmedTopic,type VerifiedStudyTopic} from './verified-study-catalog.ts';
import {createPersonalizedStudyWeek} from './personalized-study-cycle.ts';
import {initialProfile} from './profile.ts';

const verified:VerifiedStudyTopic={
 id:'c59f3a80-d80b-4e2b-a711-27d2fbb77e40',
 institution:'fuvest',subject:'Matemática',
 topic:'Modelagem matemática de transportes urbanos aplicada à mobilidade',
 edition:'Programa FUVEST 2027',sourceTitle:'Programa oficial da FUVEST 2027',
 sourceUrl:'https://www.fuvest.br/wp-content/uploads/fuvest2027-programa-vestibular.pdf',
 evidence:'Analisar modelos matemáticos e suas aplicações na interpretação de fenômenos.'
};

test("approved topics expand only the student\u0027s selected exams",()=>{
 const initial=completeExamTopicCatalog(['fuvest']);
 const merged=syllabusWithVerifiedTopics(initial,['fuvest'],[verified]);
 assert.ok(merged.Matemática.includes(verified.topic));
 assert.deepEqual(syllabusWithVerifiedTopics(initial,['enem'],[verified]),initial);
 assert.equal(confirmedTopic([verified],['fuvest'],'Matemática',verified.topic)?.id,verified.id);
 assert.equal(confirmedTopic([verified],['enem'],'Matemática',verified.topic),null);
 assert.equal(confirmedTopic([verified],['fuvest'],'Biologia',verified.topic),null);
});
test('verified topics can be selected to review concrete weekly exam mistakes',()=>{
 const profile={...initialProfile,examFocus:'fuvest' as const,syllabusExams:['fuvest' as const],
  weeklyDays:[1],dailyMinutes:55,sessionMinutes:25};
 const wrong=[{subject:'Matemática',topic:verified.topic,attempts:4,incorrect:4,lastWrong:true}];
 const tasks=createPersonalizedStudyWeek(profile,[],[],null,new Date(2026,10,2,12),
  (()=>{let n=0;return()=>String(++n)})(),wrong,[verified]);
 assert.ok(tasks.some(t=>t.subject==='Matemática'&&t.title.includes('Modelagem matemática de transportes urbanos')));
 assert.ok(tasks.some(t=>t.title.startsWith('Revisar Matemática:')));
 assert.ok(tasks.reduce((sum,t)=>sum+t.minutes,0)<=55);
});
