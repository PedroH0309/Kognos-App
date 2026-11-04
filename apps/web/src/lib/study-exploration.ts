import type {CourseLesson} from './course-content.ts';
import type {LearningLesson} from './learning-catalog.ts';

export type ExplorerMaterial = {
 subject:string;
 topic:string;
 unit?:string;
 description?:string;
 lesson?:CourseLesson|null;
 introduction?:LearningLesson|null;
};
export type ContentMaturity='published'|'introduction'|'outline';

export type StudyMethod={
 title:string;
 promptLabels:readonly [string,string,string];
 questions:readonly [string,string,string];
};

// Prompts describe a *method*, not fictional facts or simulated official exercises.
// The selected topic and existing editorial material supply the actual content.
const methods:Record<string,StudyMethod>={
 'Matemática':{title:'Resolver e conferir',promptLabels:['Dados e incógnitas','Estratégia','Verificação'],questions:[
  'Quais são os dados, unidades e valores desconhecidos deste assunto?',
  'Qual procedimento você usaria e por que ele se aplica?',
  'Como verificar o resultado por substituição, estimativa ou outra representação?']},
 'Português':{title:'Ler e justificar',promptLabels:['Trecho ou conceito','Interpretação','Evidência textual'],questions:[
  'Qual palavra, trecho ou conceito merece análise neste assunto?',
  'O que o contexto permite concluir sem extrapolar o texto?',
  'Que elemento linguístico ou evidência sustenta sua interpretação?']},
 'Inglês':{title:'Interpretar pelo contexto',promptLabels:['Expressão em inglês','Sentido no contexto','Evidência'],questions:[
  'Qual expressão ou estrutura em inglês você precisa compreender?',
  'Que significado ela assume no contexto em que aparece?',
  'Que pistas do texto justificam sua interpretação?']},
 'Física':{title:'Modelar um fenômeno',promptLabels:['Grandezas e unidades','Relação física','Conferência'],questions:[
  'Quais grandezas, unidades e condições descrevem este fenômeno?',
  'Que relação física permite explicar ou calcular o que acontece?',
  'A resposta é coerente com unidades, sinais e valores limite?']},
 'Química':{title:'Representar e explicar',promptLabels:['Espécies e condições','Transformação ou modelo','Conservação e evidência'],questions:[
  'Quais substâncias, partículas ou condições estão envolvidas?',
  'Qual modelo explica a estrutura ou transformação estudada?',
  'O que deve ser conservado ou observado para conferir o raciocínio?']},
 'Biologia':{title:'Relacionar estrutura e função',promptLabels:['Estruturas e organismos','Processo biológico','Consequência e evidência'],questions:[
  'Quais estruturas, seres ou componentes participam deste assunto?',
  'Como ocorre o processo ou a relação entre esses componentes?',
  'Que consequência ou observação sustentaria a explicação?']},
 'História':{title:'Investigar relações históricas',promptLabels:['Contexto e período','Agentes e processos','Fontes e consequências'],questions:[
  'Qual contexto, período e local são relevantes para este tema?',
  'Que grupos, decisões ou transformações precisam ser relacionados?',
  'Que fonte ou consequência ajuda a sustentar a interpretação histórica?']},
 'Geografia':{title:'Analisar relações espaciais',promptLabels:['Localização e escala','Processos no espaço','Impactos e evidências'],questions:[
  'Em que território e escala o fenômeno pode ser estudado?',
  'Quais fatores naturais, sociais ou econômicos interagem?',
  'Que dado, mapa ou indicador permitiria avaliar os efeitos?']},
 'Filosofia':{title:'Reconstruir argumentos',promptLabels:['Problema filosófico','Tese e razões','Objeção ou limite'],questions:[
  'Qual pergunta ou conceito organiza este problema filosófico?',
  'Que tese e razões precisam ser examinadas?',
  'Que objeção, pressuposto ou limite merece discussão?']},
 'Sociologia':{title:'Examinar fenômenos sociais',promptLabels:['Fenômeno e contexto','Conceitos e agentes','Dados e contrapontos'],questions:[
  'Que prática, instituição ou relação social está em análise?',
  'Quais conceitos e grupos ajudam a explicar esse fenômeno?',
  'Que evidência, divergência ou recorte social precisaria ser considerado?']},
};
const defaultMethod:StudyMethod={title:'Investigar com evidências',promptLabels:['Questão central','Relações relevantes','Evidências'],questions:[
 'Que problema ou conceito é central neste tema?',
 'Quais relações e explicações precisariam ser investigadas?',
 'Que fonte, exemplo ou teste ajudaria a verificar sua interpretação?']};

export function studyMethodForSubject(subject:string):StudyMethod{
 return methods[subject]??defaultMethod;
}
export const supportedExplorerSubjects=Object.keys(methods);

export function contentMaturity(input:ExplorerMaterial):ContentMaturity{
 if(input.lesson)return 'published';
 if(input.introduction)return 'introduction';
 return 'outline';
}

function uniqueEntries(items:string[]):string[]{
 const seen=new Set<string>();
 return items.map(item=>item.trim()).filter(item=>{
  if(!item)return false;
  const key=item.normalize('NFKD').toLocaleLowerCase('pt-BR');
  if(seen.has(key))return false;
  seen.add(key);return true;
 });
}

/** Reference extracts come exclusively from existing curriculum or lesson data. */
export function referenceCards(input:ExplorerMaterial):string[]{
 const raw=(input.description||input.lesson?.objective||input.introduction?.objective||input.topic).trim();
 const parts=raw.split(/(?<=[.;!?])\s+/u).map(part=>part.trim()).filter(Boolean);
 return uniqueEntries([...(input.unit?[input.unit]:[]),...parts]).slice(0,8);
}

export function explorerSourceLabel(input:ExplorerMaterial):string{
 return input.description?.trim()?'Descrição curricular registrada':
  input.lesson?'Objetivo da aula desenvolvida':
  input.introduction?'Objetivo da introdução':
  'Tema cadastrado — conteúdo em desenvolvimento';
}

export function explorerChallenge(input:ExplorerMaterial):{
 prompt:string;hint:string|null;answerReference:string|null;hasVerifiedSolution:boolean;
}{
 if(input.lesson){
  const task=input.lesson.tasks[0];
  if(task)return {prompt:task.prompt,hint:task.hint,answerReference:task.solution,hasVerifiedSolution:true};
 }
 if(input.introduction){
  return {prompt:input.introduction.check,hint:null,answerReference:input.introduction.workedExample,hasVerifiedSolution:false};
 }
 return {
  prompt:'Formule uma pergunta específica sobre "'+input.topic+'" e descreva qual material ou evidência você precisaria estudar para respondê-la.',
  hint:null,answerReference:null,hasVerifiedSolution:false
 };
}
