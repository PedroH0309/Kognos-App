import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolveContentLesson,type LessonPublication} from './content-lesson-resolution.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {canonicalLessonForExam,reviewedSemanticAliases} from './canonical-lesson-reuse.ts';
import {starterLesson} from './starter-lessons.ts';
import {parseCourseDocument} from './course-content.ts';

const alias=reviewedSemanticAliases[0];
const target=curriculumTopics.find(topic=>topic.id===alias.targetTopicId)!;
const source=canonicalLessonForExam(alias.exams[0],target)!;
const published=(lesson:unknown,revision=7):LessonPublication=>({published:lesson,published_revision:revision,archived:false});
const loader=(rows:Record<string,LessonPublication>,reads:string[]=[])=>async(id:string)=>{reads.push(id);return rows[id]??null;};

test('abertura direta do alias entrega a mesma fonte aprofundada do inventário',async()=>{
 const result=await resolveContentLesson(target.id);
 assert.equal(result.status,'available');if(result.status!=='available')return;
 assert.equal(result.topic?.id,target.id);
 assert.strictEqual(result.lesson,source);
 assert.equal(result.revision,null);
 assert.equal(result.published,false);
});

test('publicação própria do alvo tem prioridade e não depende da fonte do alias',async()=>{
 const own={...starterLesson(target),review:'editor' as const};const reads:string[]=[];
 const result=await resolveContentLesson(target.id,loader({[target.id]:published(own,9),[source.id]:{...published(source),archived:true}},reads));
 assert.equal(result.status,'available');if(result.status!=='available')return;
 assert.deepEqual(result.lesson,parseCourseDocument(own));assert.equal(result.revision,9);assert.equal(result.published,true);
 assert.deepEqual(reads,[target.id]);
});

test('fonte publicada atualizada fornece seu conteúdo e revisão ao alias',async()=>{
 const updated={...source,objective:'Objetivo editorial atualizado da fonte canônica.'};
 const result=await resolveContentLesson(target.id,loader({[source.id]:published(updated,12)}));
 assert.equal(result.status,'available');if(result.status!=='available')return;
 assert.deepEqual(result.lesson,parseCourseDocument(updated));assert.equal(result.revision,12);assert.equal(result.published,true);
});

test('retirada do alvo ou da fonte impede ressuscitar conteúdo offline',async()=>{
 for(const id of [target.id,source.id])for(const row of [{...published(source),archived:true},{published:null,published_revision:null,archived:false}]){
  const result=await resolveContentLesson(target.id,loader({[id]:row}));
  assert.equal(result.status,'withdrawn');
 }
});

test('fonte inválida ou com identidade alterada não cai silenciosamente no fallback',async()=>{
 for(const document of [{kind:'lesson'}, {...source,id:'course-unrelated'}, {...source,topic:'Outro escopo'}]){
  assert.equal((await resolveContentLesson(target.id,loader({[source.id]:published(document)}))).status,'invalid');
 }
 assert.equal((await resolveContentLesson(target.id,loader({[target.id]:published({kind:'question'})}))).status,'invalid');
});

test('erro de leitura não libera fonte embutida e não é mascarado como ausência',async()=>{
 for(const failedId of [target.id,source.id])
  await assert.rejects(resolveContentLesson(target.id,async id=>{if(id===failedId)throw new Error('read failed');return null;}),/read failed/);
});

test('publicação fora do catálogo continua disponível sem inventar um vínculo curricular',async()=>{
 const external={...source,id:'course-external'};
 const result=await resolveContentLesson(external.id,loader({[external.id]:published(external,11)}));
 assert.equal(result.status,'available');if(result.status!=='available')return;
 assert.equal(result.topic,null);assert.equal(result.lesson.id,external.id);assert.equal(result.revision,11);
});

test('aula exata não busca outra fonte; ID desconhecido continua ausente',async()=>{
 const reads:string[]=[];const result=await resolveContentLesson(source.id,loader({},reads));
 assert.equal(result.status,'available');if(result.status==='available')assert.equal(result.lesson.id,source.id);
 assert.deepEqual(reads,[source.id]);
 assert.equal((await resolveContentLesson('course-unknown')).status,'missing');
});
