/** Kognos Human Sciences Stage 5.
 * Topic-limited, authored exercises. Not official exam items, historical documents,
 * maps of real places, or measures of a student's graded proficiency.
 */
export type HumanitiesKind =
 'history-timeline'|'history-evidence'|'history-causality'|
 'geography-cartography'|'geography-landscape'|'geography-indicators'|
 'philosophy-logic'|'philosophy-knowledge'|'philosophy-ethics'|
 'sociology-work'|'sociology-culture'|'sociology-citizenship';
export type HumanitiesTopic={subject:string;topic:string;unit?:string;description?:string};
const fold=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function resolveHumanitiesLab({subject,topic,unit='',description=''}:HumanitiesTopic):HumanitiesKind|null{
 const group=fold(subject).trim(),text=fold(topic+' '+description),chapter=fold(unit);
 if(group==='historia'){
  if(/fonte historica|narrativa|memoria|identidade nacional|escravismo|resistencia|diversidade cultural|patrimonio cultural|cultura/.test(text))return 'history-evidence';
  if(/revolucao industrial|industrializac|capitalismo|imperialismo|colonizac|trabalho|desigualdade|comercio|migrac|escravidao/.test(text))return 'history-causality';
  if(/revolucao|republic|estado novo|guerra|golpe|ditadura|redemocratiz|constituic|independencia|emancipacao|periodo|governo|crise|imperio|direitos humanos|nazifascismo|descolonizac/.test(text)||/brasil republica|mundo contemporaneo/.test(chapter))return 'history-timeline';
  return null;
 }
 if(group==='geografia'){
  if(/cartograf|escala cartografica|representacao grafica|sistema de informacoes geograficas|fotografias aereas|satelites|projecao/.test(text)||chapter.includes('cartografia'))return 'geography-cartography';
  if(/populac|urbaniz|desigualdade|renda|riqueza|setores da economia|trabalho|dependencia|divisao territorial|concentracao espacial|cidade|metropoliz|cidadania/.test(text))return 'geography-indicators';
  if(/ambienta|paisagens|relevo|veget|bioma|hidrograf|erosao|climat|territori|espaco geogra|espaco agrario|agronegocio|fronteiras|redes geograficas|regioes|pais(es|s)/.test(text))return 'geography-landscape';
  return null;
 }
 if(group==='filosofia'){
  if(/etica|moralidade|bioetica|alteridade|empatia|direitos humanos|meio ambiente/.test(text))return 'philosophy-ethics';
  if(/conhecimento|senso comum|cientifico|racionalis|empiris|epistemolog/.test(text))return 'philosophy-knowledge';
  if(/filosof|contratualismo|politica|ciencia e sociedade|reflexao filosofica/.test(text))return 'philosophy-logic';
  return null;
 }
 if(group==='sociologia'){
  if(/trabalho|classes sociais|divisao do trabalho|tecnologias|escravidao contemporanea/.test(text)||chapter.includes('trabalho'))return 'sociology-work';
  if(/cultura|etnocentr|relativism|identidad|estereotip|discriminac|preconceito|industria cultural|consumismo/.test(text)||chapter.includes('cultura'))return 'sociology-culture';
  if(/estado|cidadania|politic|partidos|movimentos sociais|participac|direitos sociais|relacoes sociais|ser social/.test(text)||chapter.includes('estado'))return 'sociology-citizenship';
  return null;
 }
 return null;
}

export type HistoricalMilestone={year:number;label:string;context:string;reference:string};
export const historicalTimelines:{
 id:string;label:string;milestones:readonly HistoricalMilestone[]
}[]=[
 {id:'brazil',label:'Brasil: República e direitos',milestones:[
  {year:1888,label:'Lei Áurea',context:'Abolição formal da escravidão no Brasil; não significou acesso automático à terra, renda ou cidadania para a população liberta.',reference:'Lei nº 3.353, de 13 de maio de 1888'},
  {year:1889,label:'Proclamação da República',context:'Fim do Império e início da República brasileira; a participação política continuou restrita.',reference:'15 de novembro de 1889'},
  {year:1930,label:'Movimento de 1930',context:'Ruptura político-institucional que encerrou a Primeira República e levou Getúlio Vargas ao governo.',reference:'Brasil, outubro de 1930'},
  {year:1964,label:'Golpe de 1964',context:'Ruptura da ordem democrática e início da ditadura militar brasileira.',reference:'Brasil, 31 de março–1º de abril de 1964'},
  {year:1985,label:'Fim do regime militar',context:'Transição para um governo civil, com desafios de democratização.',reference:'Brasil, 1985'},
  {year:1988,label:'Constituição de 1988',context:'Promulgada a Constituição brasileira que ampliou garantias e direitos.',reference:'5 de outubro de 1988'}
 ]},
 {id:'world',label:'Mundo: revoluções e direitos',milestones:[
  {year:1789,label:'Revolução Francesa',context:'Início do processo revolucionário que contestou o Antigo Regime na França.',reference:'França, 1789'},
  {year:1917,label:'Revoluções Russas',context:'Revoluções de fevereiro e outubro transformaram o governo e a organização política da Rússia.',reference:'Rússia, 1917'},
  {year:1945,label:'Fim da Segunda Guerra Mundial',context:'Encerramento da guerra na Europa e no Pacífico, com transformações geopolíticas.',reference:'1945'},
  {year:1948,label:'Declaração Universal dos Direitos Humanos',context:'A Assembleia Geral da ONU adotou a Declaração Universal.',reference:'ONU, Resolução 217 A (III), 10 de dezembro de 1948'},
  {year:1989,label:'Queda do Muro de Berlim',context:'Marco simbólico de mudanças nas relações entre blocos durante o fim da Guerra Fria.',reference:'Berlim, 9 de novembro de 1989'},
  {year:1991,label:'Dissolução da URSS',context:'Encerramento formal da União Soviética e reorganização geopolítica.',reference:'Dezembro de 1991'}
 ]}
];
export function chronologicalOrder(items:readonly HistoricalMilestone[],indices:readonly number[]):boolean{
 return indices.length===items.length&&new Set(indices).size===items.length&&
  indices.every((v,i)=>Number.isInteger(v)&&v>=0&&v<items.length&&(i===0||items[indices[i-1]].year<=items[v].year));
}

export type SourceScenario={id:string;topic:string;origin:string;excerpt:string;claim:string;notes:string};
export const sourceScenarios:readonly SourceScenario[]=[
 {id:'hist-letter',topic:'Narrativas históricas',origin:'Trecho fictício de um diário escolar contemporâneo, produzido pelo Kognos; NÃO é documento histórico.',excerpt:'“Ao visitar o museu, ouvi duas versões diferentes sobre o mesmo acontecimento. Uma destacava decisões de governantes; a outra mostrava relatos de trabalhadores.”',claim:'Uma narrativa é suficiente para representar todas as experiências de um período.',notes:'Não. Toda narrativa seleciona vozes e perspectivas; coteje contextos, autoria e fontes distintas.'},
 {id:'hist-poster',topic:'Propaganda e representação',origin:'Texto didático inventado pelo Kognos, não anúncio de época.',excerpt:'“A cidade mudou muito. Todos ganharam as mesmas oportunidades com as novas fábricas.”',claim:'O texto demonstra que os benefícios da industrialização foram iguais para todas as pessoas.',notes:'Não. Trata-se de afirmação geral sem dados; pergunte quem escreveu, para quem, em qual contexto, e confronte evidências sobre desigualdades.'},
 {id:'hist-memory',topic:'Memória e interpretação',origin:'Situação simulada e autoral, sem atribuição a entrevistados reais.',excerpt:'“Minha lembrança da praça não coincide com a fotografia daquele ano. Acho que preciso consultar outras fontes antes de tirar uma conclusão.”',claim:'Uma lembrança e uma fotografia sempre produzem interpretações idênticas.',notes:'Não. Memória e registro fotográfico têm limites, enquadramentos e condições de produção diferentes.'}
];
export const historyCauseCards=[
 {id:'condition',label:'Condições e antecedentes',explanation:'Identifique processos estruturais anteriores ao evento. Não são uma causa única ou inevitável.'},
 {id:'event',label:'Transformações e decisões',explanation:'Descreva atores, conflitos, escolhas e acontecimentos, sem reduzir o processo a uma pessoa.'},
 {id:'consequences',label:'Consequências e permanências',explanation:'Distinga mudanças imediatas, efeitos de longo prazo e elementos que permaneceram.'}
] as const;

export function groundKilometers(mapCentimeters:number,scaleDenominator:number):number|null{
 if(!Number.isFinite(mapCentimeters)||!Number.isFinite(scaleDenominator)||
  mapCentimeters<0||scaleDenominator<=0)return null;
 return mapCentimeters*scaleDenominator/100000;
}
export type GridCell={id:string;relief:number;green:number;services:number};
export const fictionalMap:readonly GridCell[]=Array.from({length:16},(_,i)=>({
 id:'Q'+(i+1),relief:(i*7+3)%5,green:(i*3+2)%5,services:(i*11+1)%5
}));
export type SpatialLayer='relief'|'green'|'services';
export function layerValue(cell:GridCell,layer:SpatialLayer){return cell[layer];}
export function indicatorPercentage(part:number,total:number):number|null{
 if(!Number.isFinite(part)||!Number.isFinite(total)||total<=0||part<0||part>total)return null;
 return part/total*100;
}

export type ArgumentScheme={id:string;premises:[string,string];conclusion:string;valid:boolean;explanation:string};
export const argumentSchemes:readonly ArgumentScheme[]=[
 {id:'valid-chain',premises:['Todos os elementos de A pertencem a B.','Todos os elementos de B pertencem a C.'],conclusion:'Todos os elementos de A pertencem a C.',valid:true,explanation:'A inclusão de conjuntos é transitiva: A ⊆ B e B ⊆ C implicam A ⊆ C.'},
 {id:'invalid-affirm',premises:['Se um objeto pertence a A, então pertence a B.','O objeto pertence a B.'],conclusion:'Portanto, o objeto pertence a A.',valid:false,explanation:'Afirmar o consequente não estabelece a condição inicial. B pode incluir elementos que não são A.'},
 {id:'valid-contrapositive',premises:['Se uma proposição P é verdadeira, então Q é verdadeira.','Q é falsa.'],conclusion:'Logo, P é falsa.',valid:true,explanation:'Modus tollens: P → Q e ¬Q implicam ¬P.'},
 {id:'invalid-general',premises:['Alguns membros de A pertencem a B.','Todos os membros de B pertencem a C.'],conclusion:'Todos os membros de A pertencem a C.',valid:false,explanation:'Uma premissa particular não autoriza concluir algo universal sobre A.'}
];
export function checkArgument(id:string,choice:boolean):{correct:boolean;explanation:string}|null{
 const item=argumentSchemes.find(x=>x.id===id);
 return item?{correct:item.valid===choice,explanation:item.explanation}:null;
}
export type EvidenceCategory='observacao'|'hipotese'|'interpretacao';
export const evidenceExamples:{id:string;text:string;category:EvidenceCategory;explanation:string}[]=[
 {id:'observation',text:'Em uma amostra de 80 questionários simulados, 48 respostas indicaram uso semanal de transporte coletivo.',category:'observacao',explanation:'É uma contagem declarada dentro de um conjunto fictício; não descreve a população real.'},
 {id:'hypothesis',text:'Uma hipótese é que a ampliação de rotas de ônibus possa aumentar a frequência de uso.',category:'hipotese',explanation:'É uma explicação testável que exigiria observação e métodos apropriados.'},
 {id:'interpretation',text:'Esses números sugerem uma presença relevante do transporte coletivo nesta amostra.',category:'interpretacao',explanation:'É uma leitura contextual dos números, limitada pela amostra simulada.'}
];
export function evaluateEvidence(id:string,category:EvidenceCategory){
 const item=evidenceExamples.find(x=>x.id===id);
 return item?{correct:item.category===category,explanation:item.explanation}:null;
}
export function presenceChecklist(items:Record<string,string>){
 const entries=Object.entries(items);
 return {done:entries.filter(([,value])=>value.trim().length>0).map(([key])=>key),
  missing:entries.filter(([,value])=>!value.trim()).map(([key])=>key),
  score:null as null};
}
