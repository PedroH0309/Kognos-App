/**
 * Kognos Stage 4 — authored language practice and ungraded writing planners.
 * All excerpts, questions and feedback are original Kognos material.
 * This is not an extraction of any protected exam or competitor material.
 */
export type LanguageLabKind='pt-reading'|'pt-grammar'|'pt-cohesion'|
 'en-reading'|'en-modals'|'en-reference'|
 'essay-theme'|'essay-structure'|'essay-cohesion'|'essay-intervention';
export type LanguageTopic={subject:string;topic:string;unit?:string;description?:string};
const fold=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

export function resolveLanguageLab({subject,topic,description='',unit=''}:LanguageTopic):LanguageLabKind|null{
 const group=fold(subject.trim());
 const text=fold(topic+' '+description);
 const chapter=fold(unit);
 if(group==='portugues'){
  if(/coesao|coerencia|conectiv|coordenac|subordinac|articulac(ao|oes) do texto|articulac(ao|oes) de oracoes/.test(text))return 'pt-cohesion';
  if(/concordancia|classes de palavras|classe de palavras|flexao nominal|flexao verbal|morfossintax|regencia nominal|regencia verbal/.test(text)||chapter==='morfossintaxe')return 'pt-grammar';
  if(/interpretac|compreensao|significac|denotac|conotac|figuras de linguagem|generos literarios|genero textual|intertextualidade|relac(ao|oes) do texto|discursos?:|leitura de texto|interacao entre texto/.test(text))return 'pt-reading';
  return null;
 }
 if(group==='ingles'){
  if(/referencia textual|elementos de coesao|pronomes|sinonimias/.test(text))return 'en-reference';
  if(/verbos modais|itens lexicais|marcadores discursivos|conectivos|significado de itens/.test(text))return 'en-modals';
  if(/compreensao|localizac(ao|oes) de informac|ideias expressas|sentido geral|genero textual|perspectivas|critica de textos|relacoes entre imagens/.test(text)||chapter==='leitura e interpretacao')return 'en-reading';
  return null;
 }
 if(group==='redacao'){
  if(/intervencao|direitos humanos/.test(text))return 'essay-intervention';
  if(/coesao|norma-padrao|concordancia|ortografia|pontuac/.test(text))return 'essay-cohesion';
  if(/estrutura dissertativo|argumentativa|coerencia|tese|argumentos|conclusao/.test(text))return 'essay-structure';
  if(/atendimento ao tema|compreensao.*tema|proposta de redacao|delimitac(ao|oes) do tema/.test(text))return 'essay-theme';
 }
 return null;
}

export type LanguageExercise={
 id:string;tag:string;text:string;question:string;
 options:readonly [string,string,string];correct:0|1|2;evidence:string;
};
/** Authored exemplars, not real exam questions or an evaluation of the selected official topic. */
export const readingExercises:readonly LanguageExercise[]=[
 {id:'pt-explicit',tag:'Informação explícita',text:'O bairro inaugurou uma biblioteca comunitária na antiga estação. Segundo os organizadores, o espaço abrirá às terças e quintas-feiras. A primeira atividade será uma oficina gratuita de leitura.',
  question:'Em quais dias a biblioteca estará aberta?',options:['Segundas e sextas','Terças e quintas','Todos os dias'],correct:1,evidence:'O segundo período informa expressamente que o espaço abrirá às terças e quintas-feiras.'},
 {id:'pt-inference',tag:'Inferência fundamentada',text:'Ao chegar à praça, Lia encontrou os bancos molhados e algumas poças sob as árvores. Guardou o guarda-chuva fechado e seguiu para a escola.',
  question:'Qual conclusão é sustentada pelo cenário descrito?',options:['Havia sinais de chuva recente','Lia estava atrasada','A praça ficará fechada'],correct:0,evidence:'Bancos molhados e poças sustentam a hipótese de chuva recente. Não há informação sobre atraso ou fechamento.'},
 {id:'pt-figurative',tag:'Linguagem figurada',text:'Quando o resultado da pesquisa apareceu na tela, uma montanha de perguntas tomou conta da sala. Os estudantes começaram a comparar hipóteses.',
  question:'Qual sentido assume “uma montanha de perguntas”?',options:['Uma formação geográfica dentro da sala','Muitas dúvidas e questões','O resultado foi apagado'],correct:1,evidence:'A expressão é figurada e indica grande quantidade. O contexto menciona estudantes comparando hipóteses.'}
];
export const grammarExercises:readonly LanguageExercise[]=[
 {id:'pt-agreement',tag:'Concordância verbal',text:'Um grupo de estudantes apresentou os resultados do projeto. A equipe explicou as etapas ao público e respondeu às perguntas com cuidado.',
  question:'Qual frase mantém a concordância entre sujeito e verbo?',options:['Os estudantes apresentou o projeto.','As equipes explicou as etapas.','Os estudantes apresentaram o projeto.'],correct:2,evidence:'O sujeito plural “os estudantes” pede o verbo no plural: “apresentaram”.'},
 {id:'pt-classes',tag:'Classes de palavras',text:'A jovem pesquisadora organizou cuidadosamente os dados coletados na escola. Seu relatório foi apresentado à comunidade.',
  question:'No contexto, qual é a classe da palavra “cuidadosamente”?',options:['Advérbio','Substantivo','Artigo'],correct:0,evidence:'“Cuidadosamente” modifica o verbo “organizou”, expressando modo: é um advérbio.'},
 {id:'pt-verb',tag:'Flexão verbal',text:'Ontem os alunos revisaram os registros. Hoje eles discutem os resultados. Amanhã apresentarão o projeto aos colegas.',
  question:'Qual verbo está no futuro do presente?',options:['revisaram','discutem','apresentarão'],correct:2,evidence:'“Apresentarão” indica ação futura em relação ao momento da enunciação; “ontem” e “hoje” situam as demais ações.'}
];
export const englishExercises:readonly LanguageExercise[]=[
 {id:'en-purpose',tag:'Reading purpose',text:'The community center will open a free reading club on Saturday. Students can sign up online until Friday. The program welcomes beginners and advanced readers.',
  question:'What is the main purpose of the text?',options:['To announce a reading program','To describe a past competition','To review a novel'],correct:0,evidence:'The text announces a new club, gives the schedule and tells readers how to register.'},
 {id:'en-inference',tag:'Read for evidence',text:'Maya arrived at the bus stop carrying a heavy coat. She checked the weather report twice and noticed that the temperature would drop by evening.',
  question:'Why is Maya probably carrying a heavy coat?',options:['Because she is traveling overseas','Because the weather is expected to be colder','Because she lost her umbrella'],correct:1,evidence:'The evidence is “the temperature would drop by evening”; the other choices are not mentioned.'},
 {id:'en-fact-opinion',tag:'Fact and opinion',text:'The new science museum opened on Monday and offers three interactive rooms. In my opinion, the astronomy room is the most interesting part of the visit.',
  question:'Which statement expresses an opinion?',options:['The museum opened on Monday','There are three interactive rooms','The astronomy room is the most interesting'],correct:2,evidence:'The clause introduced by “In my opinion” is a personal evaluation, not a verifiable date or count.'}
];
export const modalExercises:readonly LanguageExercise[]=[
 {id:'en-must',tag:'Obligation',text:'Visitors must wear safety goggles in the laboratory. They may leave their bags in the storage area, but they should follow the instructor’s directions.',
  question:'What does “must” express in this context?',options:['An obligation','A possibility','A past habit'],correct:0,evidence:'“Must wear” expresses a requirement. “May” expresses permission; “should” expresses advice.'},
 {id:'en-may',tag:'Permission',text:'Students may borrow a tablet after registering their names. They must return it before closing time.',
  question:'What does “may borrow” mean?',options:['They borrowed it yesterday','They have permission to borrow it','They are prohibited from borrowing it'],correct:1,evidence:'“May” grants permission in this sentence. “Must” imposes a separate obligation.'},
 {id:'en-however',tag:'Discourse marker',text:'The first experiment was inexpensive. However, it required more time than the team had planned.',
  question:'Which relationship does “However” establish?',options:['Cause','Addition','Contrast'],correct:2,evidence:'“However” introduces an opposing consideration: low cost versus greater time required.'}
];
export const referenceExercises:readonly LanguageExercise[]=[
 {id:'en-they',tag:'Pronoun reference',text:'The volunteers painted the school walls and cleaned the courtyard. They finished the work before sunset.',
  question:'What does “They” refer to?',options:['The volunteers','The school walls','The courtyard'],correct:0,evidence:'The plural subject “the volunteers” performs both actions and is resumed by “They”.'},
 {id:'en-it',tag:'Textual reference',text:'A new public library opened downtown. It offers study rooms and free internet access.',
  question:'What does “It” refer to?',options:['Downtown','The new public library','Internet access'],correct:1,evidence:'“It” refers back to the singular noun phrase “a new public library”.'},
 {id:'en-this',tag:'Demonstrative cohesion',text:'The city installed new bicycle lanes across the center. This change encouraged more people to cycle to work.',
  question:'What does “This change” refer to?',options:['Cycling to work','The city’s population','The installation of bicycle lanes'],correct:2,evidence:'The demonstrative noun phrase summarizes the action described in the preceding sentence.'}
];

export function validateChoice(exercise:LanguageExercise,optionIndex:number){
 if(!Number.isInteger(optionIndex)||optionIndex<0||optionIndex>=exercise.options.length)return null;
 return {correct:optionIndex===exercise.correct,explanation:exercise.evidence,correctIndex:exercise.correct};
}
export function orderedParagraph(blocks:readonly string[],order:readonly number[]):string[]|null{
 if(blocks.length===0||blocks.length!==order.length)return null;
 if(order.some(i=>!Number.isInteger(i)||i<0||i>=blocks.length))return null;
 if(new Set(order).size!==blocks.length)return null;
 return order.map(i=>blocks[i]);
}
type ArgumentFields={thesis:string;reason:string;evidence:string;connection:string};
type InterventionFields={agent:string;action:string;means:string;effect:string;detail:string};
function checkFields<T extends Record<string,string>>(values:T):{present:(keyof T)[];missing:(keyof T)[];grade:null}{
 const keys=Object.keys(values) as (keyof T)[];
 return {present:keys.filter(k=>values[k].trim().length>0),
 missing:keys.filter(k=>values[k].trim().length===0),grade:null};
}
export function argumentChecklist(input:ArgumentFields){return checkFields(input);}
export function interventionChecklist(input:InterventionFields){return checkFields(input);}
export function sourceStatus(kind:LanguageLabKind):string{
 return kind.startsWith('essay-')?'Exercício autoral de planejamento, sem correção oficial':
 'Questões autorais de treinamento; não são itens oficiais nem estimativas de nota';
}
