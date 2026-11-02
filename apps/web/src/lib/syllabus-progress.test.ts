import {test} from 'node:test';
import assert from 'node:assert/strict';
import {syllabusProgress,normalizedStudyText,taskCoversSyllabusTopic} from './syllabus-progress.ts';
import type {StudyTask} from './cloud-study-model.ts';

const make=(id:string,subject:string,title:string,done=false):StudyTask=>({
 id,date:'2026-11-02',subject,title,done,minutes:25,kind:'suggested'
});
test('study progress distinguishes planned, studied and topics awaiting review',()=>{
 const plan=[
  make('a','Física','Estudar Física: Eletrostática e campo elétrico · conceito e exemplo'),
  make('b','Matemática','Estudar Matemática: Funções exponencial e logarítmica · questões',true),
  make('c','Biologia','Estudar Biologia: Genética mendeliana · conceito',true)
 ];
 const catalog={
  Física:['Eletrostática e campo elétrico','Circuitos elétricos e resistores'],
  Matemática:['Funções exponencial e logarítmica'],
  Biologia:['Genética mendeliana']
 };
 const problems=[{subject:'Biologia',topic:'Genética mendeliana',incorrect:2,lastWrong:true}];
 const result=syllabusProgress(catalog,plan,problems);
 assert.deepEqual([result.total,result.planned,result.studied,result.review],[4,1,1,1]);
 const bySubject=new Map(result.subjects.map(x=>[x.subject,x]));
 assert.equal(bySubject.get('Física')?.topics[1].state,'not_started');
 assert.equal(bySubject.get('Biologia')?.topics[0].state,'review');
 assert.equal(bySubject.get('Biologia')?.topics[0].completed,1);
});
test('matches accents, avoids wrong subjects, supports deliberately truncated long titles',()=>{
 const task=make('1','Literatura','Revisar Literatura: Leitura obrigatória FUVEST 2027: Opúsculo Humanitário — Nísia Floresta · questões',true);
 assert.equal(taskCoversSyllabusTopic(task,'Literatura','Leitura obrigatória FUVEST 2027: Opúsculo Humanitário — Nísia Floresta'),true);
 assert.equal(taskCoversSyllabusTopic(task,'Português','Leitura obrigatória FUVEST 2027: Opúsculo Humanitário — Nísia Floresta'),false);
 assert.equal(normalizedStudyText('Física e Química'),'fisica e quimica');
});
test('zero completed tasks is not mistaken for academic mastery',()=>{
 const result=syllabusProgress({História:['Brasil colonial']},[],[]);
 assert.deepEqual([result.total,result.studied,result.planned,result.review],[1,0,0,0]);
 assert.equal(result.subjects[0].topics[0].state,'not_started');
});

test('different FUVEST compulsory books must not share a studied state',()=>{
 const first='Leitura obrigatória FUVEST 2027: Opúsculo Humanitário — Nísia Floresta';
 const second='Leitura obrigatória FUVEST 2027: Nebulosas — Narcisa Amália';
 const task=make('fuvest1','Literatura','Estudar Literatura: '+first+' · conceito e exemplo',true);
 assert.equal(taskCoversSyllabusTopic(task,'Literatura',first),true);
 assert.equal(taskCoversSyllabusTopic(task,'Literatura',second),false);
 const progress=syllabusProgress({Literatura:[first,second]},[task],[]);
 assert.deepEqual(progress.subjects[0].topics.map(item=>item.state),['studied','not_started']);
});
test('only a substantial prefix of truly truncated topic titles counts',()=>{
 const topic='Uma explicação extensa de métodos de contagem, arranjos, combinações e análise probabilística aplicada a situações de tomada de decisão';
 const title=('Estudar Matemática: '+topic+' · conceito e exemplo').slice(0,120);
 const task=make('long','Matemática',title,true);
 assert.equal(title.length,120);
 assert.equal(taskCoversSyllabusTopic(task,'Matemática',topic),true);
 assert.equal(taskCoversSyllabusTopic(task,'Matemática',topic.replace('arranjos','integrais')),false);
 assert.equal(taskCoversSyllabusTopic(make('manual','Matemática',topic,true),'Matemática',topic),true);
});
