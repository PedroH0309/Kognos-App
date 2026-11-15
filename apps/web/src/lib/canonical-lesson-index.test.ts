import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import ts from 'typescript';
import {canonicalExamTopicMappings} from './canonical-lesson-reuse.ts';
import {canonicalLessonIndex} from './canonical-lesson-index.generated.ts';
import {indexedCanonicalTopicId} from './canonical-lesson-index.ts';
import {curriculumTopics} from './curriculum-catalog.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';

test('índice leve e fontes completas têm exatamente as mesmas referências por prova',()=>{
 const actual=canonicalLessonIndex.flatMap(([topicId,sourceId,exams])=>exams.map(exam=>[exam,topicId,sourceId].join(':'))).sort();
 const expected=canonicalExamTopicMappings().map(row=>[row.exam,row.examTopicId,row.canonicalId].join(':')).sort();
 assert.deepEqual(actual,expected,'execute scripts/curriculum/update-index.mjs após integrar aulas');
});

test('busca do navegador preserva aliases revisados e recusa identidades adulteradas',()=>{
 for(const row of canonicalExamTopicMappings()){
  const topic=curriculumTopics.find(item=>item.id===row.examTopicId)!;
  assert.equal(indexedCanonicalTopicId(row.exam,topic),row.canonicalId);
  assert.equal(indexedCanonicalTopicId(row.exam,{...topic,id:'course-forged'}),null);
  assert.equal(indexedCanonicalTopicId(row.exam,{...topic,subject:topic.subject+' outra'}),null);
  assert.equal(indexedCanonicalTopicId(row.exam,{...topic,topic:topic.topic+' completo'}),null);
  for(const exam of Object.keys(examBlueprints) as ExamId[]){
   if(!examBlueprints[exam].subjects[topic.subject]?.includes(topic.topic))assert.equal(indexedCanonicalTopicId(exam,topic),null);
  }
 }
});

test('inventário usado pelo navegador não importa o texto de todas as aulas',()=>{
 const base=dirname(fileURLToPath(import.meta.url)),seen=new Set<string>();
 function visit(path:string){
  if(seen.has(path))return;seen.add(path);
  assert.doesNotMatch(path,/canonical-lesson-reuse|enem-depth-|provao-depth-|starter-lessons|authored-lessons-stage|authored-curriculum-(?:batch|lessons)/,'texto completo no grafo cliente');
  const source=ts.createSourceFile(path,readFileSync(path,'utf8'),ts.ScriptTarget.Latest,true);
  for(const statement of source.statements){
   if(!ts.isImportDeclaration(statement)||!ts.isStringLiteral(statement.moduleSpecifier)||statement.importClause?.isTypeOnly)continue;
   const bindings=statement.importClause?.namedBindings;
   if(bindings&&ts.isNamedImports(bindings)&&bindings.elements.length>0&&bindings.elements.every(item=>item.isTypeOnly))continue;
   const name=statement.moduleSpecifier.text;
   if(!name.startsWith('.'))continue;
   const file=resolve(dirname(path),name);
   const target=[file,file+'.ts',file+'.tsx'].find(candidate=>existsSync(candidate)&&/\.tsx?$/.test(candidate));
   if(target)visit(target);
  }
 }
 visit(resolve(base,'study-content-status.ts'));
 assert.ok(seen.size>3);
});
