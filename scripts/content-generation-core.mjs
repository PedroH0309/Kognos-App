import {createHash} from 'node:crypto';

export const LEVELS=['basic','intermediate','advanced'];
export const MIN_SECTION_EXPLANATION=650;
export const MIN_EXAMPLE_LENGTH=170;
export const MIN_SOLUTION_LENGTH=125;
const maxLength={objective:1200,explanation:16000,example:10000,pitfall:1500,prompt:4000,hint:2000,solution:8000};
const validText=(v,min,max)=>typeof v==='string'&&v.trim().length>=min&&v.length<=max;
const collapse=(x)=>x.normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
const placeholders=/\[(?:INSERIR|EXEMPLO|CONTE[ÚU]DO|RESPOSTA|PREENCHER|TEMA|T[ÓO]PICO)\]|lorem ipsum|como um modelo de linguagem|não possuo (?:dados|informa[cç][oõ]es)/i;
const prefix=[
 'Você é um autor didático de material original em português brasileiro.',
 'Escreva EXCLUSIVAMENTE um objeto JSON válido (sem Markdown) com as chaves objective, prerequisites, sections, tasks.',
 'sections deve ter exatamente três objetos na ordem basic, intermediate, advanced. Cada um contém level,title,explanation,steps (mínimo 3),example,pitfall.',
 'tasks deve ter exatamente seis objetos, dois por dificuldade, cada um contém level,prompt,hint,solution.',
 'REGRAS:',
 '- Cada explanation tem no mínimo 650 caracteres, example 170 caracteres, pitfall 45 caracteres e cada passo 18 caracteres.',
 '- Cada prompt possui pelo menos 55 caracteres, cada hint 25 e cada solution comentada 125 caracteres.',
 '- Construa conceitos, fatos, fórmulas e problemas matematicamente e cientificamente corretos. Confira os cálculos e o gabarito.',
 '- Não reciclar o mesmo exemplo nem o mesmo exercício entre seções. Não gerar texto genérico repetitivo.',
 '- Para disciplinas qualitativas: analisar textos ORIGINAIS, evidências, argumentos, fontes e contrapontos, sem inventar citações ou atribuições.',
 '- NÃO copiar questões oficiais nem trechos de livros protegidos. NÃO inventar referência, página, vídeo, citação, resultado de experimento ou homologação docente.',
 '- Não citar um exame como prova da cobrança de determinado tema. NÃO gerar metadados de publicação ou revisão; são fornecidos pelo servidor.',
 '- Se o título for abreviado, utilizar a descrição curricular somente como contexto, sem apresentar uma abreviação como programa completo.',
 '- O objetivo, os exemplos e as tarefas devem ensinar ESTE tema, nunca um panorama genérico da disciplina.'
].join('\n');

export function lessonPrompt(topic,{description='',unit=''}={}){
 if(!topic||typeof topic.subject!=='string'||typeof topic.topic!=='string')throw new TypeError('Topic invalid');
 return [prefix,'DISCIPLINA: '+topic.subject,'TEMA EXATO: '+topic.topic,
  'UNIDADE: '+String(unit).slice(0,250),'DESCRIÇÃO CURRICULAR: '+String(description).slice(0,1400),
  'ROTEIROS ASSOCIADOS: '+(Array.isArray(topic.exams)?topic.exams.join(', '):''),
  'Retorne apenas JSON válido; o conteúdo precisa ensinar o tema específico acima.'].join('\n\n');
}
export function responseText(payload,provider){
 if(provider==='gemini'){
  const v=payload?.candidates?.[0]?.content?.parts?.map(p=>p?.text||'').join('');
  if(typeof v!=='string'||!v.trim())throw Error('Resposta Gemini vazia ou bloqueada');
  return v;
 }
 if(provider==='groq'){
  const v=payload?.choices?.[0]?.message?.content;
  if(typeof v!=='string'||!v.trim())throw Error('Resposta Groq vazia');
  return v;
 }
 throw Error('Provedor inválido');
}
export function parseResponse(text){
 if(typeof text!=='string')throw new TypeError('Model output is not a string');
 const value=JSON.parse(text.trim());
 if(!value||typeof value!=='object'||Array.isArray(value))throw Error('JSON must be an object');
 return value;
}
export function validateGenerated(topic,draft,sourceUrls=[]){
 const issues=[];
 if(!topic||typeof topic.id!=='string'||!/^[a-z][a-z0-9-]{2,90}$/.test(topic.id)||!Array.isArray(topic.exams)||typeof topic.subject!=='string'||typeof topic.topic!=='string')return {ok:false,issues:['invalid-topic']};
 if(!draft||typeof draft!=='object'||Array.isArray(draft))return {ok:false,issues:['invalid-document']};
 if(!validText(draft.objective,40,maxLength.objective))issues.push('objective-too-short');
 if(!Array.isArray(draft.prerequisites)||draft.prerequisites.length>20||!draft.prerequisites.every(v=>validText(v,1,1000)))issues.push('prerequisites-invalid');
 if(!Array.isArray(draft.sections)||draft.sections.length!==3)issues.push('sections-count');
 if(!Array.isArray(draft.tasks)||draft.tasks.length!==6)issues.push('tasks-count');
 const explanations=new Set(),examples=new Set(),prompts=new Set();
 for(const [i,s] of (Array.isArray(draft.sections)?draft.sections:[]).entries()){
  const where='section-'+i;
  if(s?.level!==LEVELS[i])issues.push(where+'-level');
  if(!validText(s?.title,7,180))issues.push(where+'-title');
  if(!validText(s?.explanation,MIN_SECTION_EXPLANATION,maxLength.explanation))issues.push(where+'-explanation');
  if(!validText(s?.example,MIN_EXAMPLE_LENGTH,maxLength.example))issues.push(where+'-example');
  if(!validText(s?.pitfall,45,maxLength.pitfall))issues.push(where+'-pitfall');
  if(!Array.isArray(s?.steps)||s.steps.length<3||s.steps.length>12||!s.steps.every(v=>validText(v,18,1000)))issues.push(where+'-steps');
  for(const [v,label,set] of [[s?.explanation,'explanation',explanations],[s?.example,'example',examples]]){
   if(typeof v==='string'){const k=collapse(v);if(set.has(k))issues.push('duplicate-'+label);set.add(k);if(placeholders.test(v))issues.push(where+'-placeholder');}
  }
 }
 for(const level of LEVELS)if((Array.isArray(draft.tasks)?draft.tasks:[]).filter(t=>t?.level===level).length!==2)issues.push('task-distribution-'+level);
 for(const [i,t] of (Array.isArray(draft.tasks)?draft.tasks:[]).entries()){
  const where='task-'+i;
  if(!LEVELS.includes(t?.level))issues.push(where+'-level');
  if(!validText(t?.prompt,55,maxLength.prompt))issues.push(where+'-prompt');
  if(!validText(t?.hint,25,maxLength.hint))issues.push(where+'-hint');
  if(!validText(t?.solution,MIN_SOLUTION_LENGTH,maxLength.solution))issues.push(where+'-solution');
  const value=[t?.prompt,t?.hint,t?.solution].filter(v=>typeof v==='string').join(' ');
  if(placeholders.test(value))issues.push(where+'-placeholder');
  if(typeof t?.prompt==='string'){
   const k=collapse(t.prompt);
   if(prompts.has(k))issues.push('duplicate-task');prompts.add(k);
  }
 }
 if(sourceUrls.some(x=>typeof x!=='string'||!x.startsWith('https://')))issues.push('sources-invalid');
 if(issues.length)return {ok:false,issues};
 const lesson={
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,
  exams:[...topic.exams],objective:draft.objective.trim(),prerequisites:draft.prerequisites,
  sections:draft.sections,tasks:draft.tasks,videos:[],
  authorship:'Kognos — aula aprofundada produzida com assistência de IA; revisão docente pendente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls:[...new Set(sourceUrls)].slice(0,12),review:'introductory'
 };
 return {ok:true,issues:[],lesson};
}
export function fingerprint(lesson){
 const s=lesson.sections.map(x=>collapse(x.explanation+' '+x.example)).join('|');
 return createHash('sha256').update(s).digest('hex');
}
export function buildRegistryModule(documents){
 const sorted=[...documents].sort((a,b)=>a.id.localeCompare(b.id,'pt-BR'));
 const ids=new Set();
 for(const doc of sorted){
  if(ids.has(doc.id))throw Error('Duplicated lesson ID: '+doc.id);
  ids.add(doc.id);
 }
 const header=[
  '// GENERATED OFFLINE CONTENT. Do not hand-edit; run the batch authoring CLI.',
  '// These texts are NOT certified teacher-reviewed or official exam questions.',
  "import type {CourseLesson} from './course-content.ts';",
  'const generated:Record<string,CourseLesson> = '
 ].join('\n');
 return header+JSON.stringify(Object.fromEntries(sorted.map(v=>[v.id,v])),null,2)+
  ";\nexport const generatedLessonIds=Object.keys(generated);\n"+
  "export function generatedLesson(id:string):CourseLesson|null{return generated[id]??null;}\n";
}