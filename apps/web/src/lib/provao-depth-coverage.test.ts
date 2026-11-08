import {test} from 'node:test';
import assert from 'node:assert/strict';
import {curriculumTopics} from './curriculum-catalog.ts';
import {provaoTopics} from './provao-paulista.ts';
import {deepProvaoLesson,deepProvaoTopicKeys} from './provao-depth-lessons.ts';
import {lessonTaskChoice} from './lesson-multiple-choice.ts';
import {starterLesson} from './starter-lessons.ts';

/** Offline-only maturity audit: published Supabase overrides are not inspected here.
 * A starter scaffold is NOT a completed editorial lesson even when it uses a matched seed.
 */
type Coverage='deep_specific'|'specific_unverified'|'partial_support'|'introductory_only';
const allCurricula=new Map(curriculumTopics.map(topic=>[topic.subject+'\0'+topic.topic,topic] as const));
function category(lesson:ReturnType<typeof starterLesson>):Coverage{
 if(lesson.authorship.includes('módulo introdutório estruturado'))return 'introductory_only';
 if(lesson.supportTopic)return 'partial_support';
 if(lesson.authorship.includes('aula autoral aprofundada e específica'))return 'deep_specific';
 return 'specific_unverified';
}
export function provaoDepthAudit(){
 const uniq=new Map(provaoTopics.map(entry=>[entry.subject+'\0'+entry.topic,entry] as const));
 const coverage:Record<Coverage,number>={
  deep_specific:0,specific_unverified:0,partial_support:0,introductory_only:0
 };
 const bySubject=new Map<string,Record<Coverage,number>>();
 const pending:Array<{subject:string;topic:string;status:Coverage}>=[];
 for(const ref of uniq.values()){
  const topic=allCurricula.get(ref.subject+'\0'+ref.topic);
  if(!topic)throw new Error('MISSING_CURRICULUM_TOPIC '+ref.subject+' / '+ref.topic);
  const status=category(starterLesson(topic));
  coverage[status]++;
  if(!bySubject.has(ref.subject))bySubject.set(ref.subject,{deep_specific:0,specific_unverified:0,partial_support:0,introductory_only:0});
  bySubject.get(ref.subject)![status]++;
  if(status!=='deep_specific')pending.push({subject:ref.subject,topic:ref.topic,status});
 }
 return {total:uniq.size,coverage,bySubject:Object.fromEntries(bySubject),pending};
}
test('every deep syllabus registration is unique, with actionable duplicate diagnostics',()=>{
 const seen=new Set<string>();
 const duplicates:string[]=[];
 for(const key of deepProvaoTopicKeys){
  if(seen.has(key))duplicates.push(key);
  seen.add(key);
 }
 assert.deepEqual(duplicates,[],'Duplicate subject/topicStart registrations: '+duplicates.join('; '));
});
test('full three-grade Provão syllabus has an honest depth status for every unique topic',()=>{
 const report=provaoDepthAudit();
 assert.equal(report.total,364,'360 topic entries plus four writing assessment criteria');
 assert.equal(Object.values(report.coverage).reduce((sum,n)=>sum+n,0),report.total);
 assert.equal(report.coverage.deep_specific,deepProvaoTopicKeys.length);
 assert.ok(report.coverage.introductory_only>0,'Do not misrepresent incomplete classes as finished');
 assert.ok(report.pending.every(item=>item.status!=='deep_specific'));
 assert.equal(Object.values(report.bySubject).length,11,'Ten curricular subjects plus Redação rubric');
 console.log('PROVAO_DEPTH_AUDIT '+JSON.stringify({total:report.total,coverage:report.coverage,bySubject:report.bySubject,
  pendingExamples:report.pending.filter(x=>x.status==='introductory_only').slice(0,15)}));
});
test('all five examination paths use the same authored or introductory content contract',()=>{
 const statuses:Record<Coverage,number>={deep_specific:0,specific_unverified:0,partial_support:0,introductory_only:0};
 const exams=new Set<string>();
 for(const topic of curriculumTopics){
  for(const exam of topic.exams)exams.add(exam);
  const lesson=starterLesson(topic);
  assert.equal(lesson.id,topic.id);
  assert.equal(lesson.subject,topic.subject);
  assert.equal(lesson.topic,topic.topic);
  statuses[category(lesson)]++;
  if(deepProvaoLesson(topic))assert.equal(category(lesson),'deep_specific');
 }
 assert.deepEqual([...exams].sort(),['enem','etec','fuvest','saresp','vunesp']);
 console.log('ALL_EXAMS_DEPTH_AUDIT '+JSON.stringify({total:curriculumTopics.length,coverage:statuses,exams:[...exams].sort()}));
});

test('every deep lesson is assessed exclusively through verified four-option multiple choice',()=>{
 const checked=new Set<string>();
 for(const topic of curriculumTopics){
  const lesson=deepProvaoLesson(topic);
  if(!lesson)continue;
  const key=topic.subject+'\\0'+topic.topic;
  if(checked.has(key))continue;
  checked.add(key);
  assert.equal(lesson.sections.length,3,key+' must include three progressive stages');
  assert.ok(lesson.tasks.length>=3,key+' must have assessment at all stages');
  for(const level of ['basic','intermediate','advanced'] as const){
   assert.ok(lesson.tasks.some(task=>task.level===level),key+' missing '+level);
  }
  for(const task of lesson.tasks){
   assert.equal(task.options?.length,4,key+' has a non-objective task');
   assert.equal(new Set(task.options).size,4,key+' repeats an answer option');
   assert.ok(typeof task.correctIndex==='number'&&Number.isInteger(task.correctIndex)&&task.correctIndex>=0&&task.correctIndex<4,key+' has an invalid key');
   assert.ok(task.solution.length>=140,key+' has an insufficient commented correction');
   const choice=lessonTaskChoice(lesson,task);
   assert.equal(choice.source,'editorial');
   assert.equal(choice.correctIndex,task.correctIndex);
  }
 }
 assert.equal(checked.size,deepProvaoTopicKeys.length,'Every authored topic must be included in the full-catalog assessment audit');
});
