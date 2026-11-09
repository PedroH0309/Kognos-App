import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provaoTopics} from './provao-paulista.ts';
import {deepProvaoTopicKeys} from './provao-depth-lessons.ts';

/** Inventory only: registrations are not proof of pedagogical depth or teacher approval. */
test('editorial pending inventory exposes exact Provão targets without duplicate registrations',()=>{
 const registered=deepProvaoTopicKeys.map(key=>{
  const delimiter=key.indexOf(' · ');
  assert.ok(delimiter>0,'Malformed registration: '+key);
  return {key,subject:key.slice(0,delimiter),prefix:key.slice(delimiter+3)};
 });
 assert.equal(new Set(deepProvaoTopicKeys).size,deepProvaoTopicKeys.length,
  'Duplicate editorial registrations must be resolved before adding another batch');
 const unique=new Map(provaoTopics.map(topic=>[topic.subject+'\0'+topic.topic,topic] as const));
 const pending:Array<{subject:string;topic:string;code:string;grade:number}>=[],
       overlaps:Array<{subject:string;topic:string;matches:string[]}>=[],
       matched=new Set<string>();
 for(const topic of unique.values()){
  const candidates=registered.filter(spec=>spec.subject===topic.subject&&topic.topic.startsWith(spec.prefix));
  if(candidates.length===0){
   pending.push({subject:topic.subject,topic:topic.topic,code:topic.code,grade:topic.grade});
  }else{
   const exact=candidates.find(spec=>spec.prefix===topic.topic);
   matched.add((exact??candidates[0]).key);
   if(candidates.length>1)overlaps.push({subject:topic.subject,topic:topic.topic,matches:candidates.map(x=>x.key)});
  }
 }
 const orphan=registered.filter(spec=>!Array.from(unique.values()).some(t=>t.subject===spec.subject&&t.topic.startsWith(spec.prefix))).map(x=>x.key);
 // Aggregate the actionable backlog without treating registered prefixes as teacher-reviewed lessons.
 const bySubject=Object.fromEntries([...new Set(unique.values().map(x=>x.subject))].sort((a,b)=>a.localeCompare(b,'pt-BR')).map(subject=>{
  const rows=[...unique.values()].filter(x=>x.subject===subject);
  const uncovered=rows.filter(x=>!registered.some(s=>s.subject===subject&&x.topic.startsWith(s.prefix)));
  return [subject,{total:rows.length,registered:rows.length-uncovered.length,pending:uncovered.length}];
 }));
 const priority=['Química','Física','Biologia','História'];
 pending.sort((a,b)=>{
  const ai=priority.indexOf(a.subject),bi=priority.indexOf(b.subject);
  return (ai<0?99:ai)-(bi<0?99:bi)||a.subject.localeCompare(b.subject,'pt-BR')||a.grade-b.grade||a.topic.localeCompare(b.topic,'pt-BR');
 });
 console.log('PROVAO_PENDING_EXACT_INVENTORY '+JSON.stringify({total:unique.size,registered:registered.length,matched:matched.size,pending,bySubject,overlaps,orphan}));
 assert.equal(Object.values(bySubject).reduce((sum,row)=>sum+row.pending,0),pending.length,
  'Subject pending counts must reconcile with the exact inventory');
 assert.equal(Object.values(bySubject).reduce((sum,row)=>sum+row.total,0),unique.size,
  'Subject totals must reconcile with the syllabus');
 assert.equal(unique.size,364,'The Provão syllabus includes 360 topics and four writing criteria');
 assert.equal(pending.length+Array.from(unique.values()).filter(t=>registered.some(s=>s.subject===t.subject&&t.topic.startsWith(s.prefix))).length,unique.size);
});
