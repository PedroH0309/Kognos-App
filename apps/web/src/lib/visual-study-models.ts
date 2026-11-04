/** Interactive visual learning models. No grades, generated facts or persistence.
 * A conceptual diagram is an organizational scaffold, not a complete subject lesson.
 */
export type CellType='animal'|'plant'|'prokaryote';
export type CellPart='membrane'|'wall'|'cytoplasm'|'nucleus'|'mitochondria'|'chloroplast'|'vacuole'|'ribosomes'|'dna';
export const cellKinds:readonly {id:CellType;label:string}[]=[
 {id:'animal',label:'Célula animal'},{id:'plant',label:'Célula vegetal'},{id:'prokaryote',label:'Célula procarionte'}
];
export const parts:Record<CellPart,{label:string;function:string}>={
 membrane:{label:'Membrana plasmática',function:'Delimita a célula e participa da seleção de substâncias que entram e saem.'},
 wall:{label:'Parede celular',function:'Fornece sustentação e proteção em células vegetais e em muitas procariontes; tem composição distinta nesses grupos.'},
 cytoplasm:{label:'Citoplasma',function:'Região interna que abriga componentes celulares e muitas reações químicas.'},
 nucleus:{label:'Núcleo',function:'Compartimento com envoltório nuclear que abriga a maior parte do DNA em células eucarióticas.'},
 mitochondria:{label:'Mitocôndrias',function:'Organelas envolvidas na produção de ATP durante a respiração celular e em outras funções metabólicas.'},
 chloroplast:{label:'Cloroplastos',function:'Organelas presentes em muitas células vegetais, relacionadas à fotossíntese.'},
 vacuole:{label:'Vacúolo central',function:'Armazena substâncias, participa da manutenção do turgor e de funções de reciclagem celular.'},
 ribosomes:{label:'Ribossomos',function:'Complexos responsáveis pela síntese de proteínas, presentes em células procarióticas e eucarióticas.'},
 dna:{label:'DNA no nucleoide',function:'Nas procariontes, o material genético principal está numa região chamada nucleoide, sem membrana nuclear.'}
};
export const cellParts:Record<CellType,readonly CellPart[]>={
 animal:['membrane','cytoplasm','nucleus','mitochondria','ribosomes'],
 plant:['wall','membrane','cytoplasm','nucleus','mitochondria','chloroplast','vacuole','ribosomes'],
 prokaryote:['wall','membrane','cytoplasm','dna','ribosomes']
};
export function cellPartAvailable(type:CellType,part:CellPart){return cellParts[type].includes(part);}
export function isCellStructureTopic(subject:string,topic:string,description=''){
 if(subject.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()!=='biologia')return false;
 const raw=(topic+' '+description).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 return /organizacao celular|celulas? procariontes?|celulas? eucariontes?|celulas? animal|celulas? vegetal|organel|membrana plasmatica|envoltorios celulares|citoplasm|estruturas celulares|celula eucarionte/.test(raw);
}
export type TextRelation='quote'|'paraphrase'|'allusion';
export const originalText='No fim da tarde, a praça ganhou novas árvores e mais lugares de sombra.';
export const intertextExamples:Record<TextRelation,{label:string;excerpt:string;explanation:string;shared:string}>={
 quote:{label:'Citação direta',excerpt:'O boletim recuperou a frase: “a praça ganhou novas árvores e mais lugares de sombra”.',explanation:'O trecho entre aspas é reproduzido literalmente a partir do texto original criado para este exercício.',shared:'a praça ganhou novas árvores e mais lugares de sombra'},
 paraphrase:{label:'Paráfrase',excerpt:'O informativo anunciou que foram plantadas árvores e criados espaços sombreados na praça.',explanation:'A ideia central foi retomada com outras palavras, sem reprodução literal.',shared:'árvores e criados espaços sombreados'},
 allusion:{label:'Alusão',excerpt:'Agora, ao cair da tarde, até a praça parece vestir um teto de folhas.',explanation:'O segundo texto evoca o cenário do primeiro por imagens, sem transcrever a frase original.',shared:'teto de folhas'}
};
export type DiscourseView='news'|'scientific'|'campaign';
export const discourseExamples:Record<DiscourseView,{label:string;text:string;focus:string}>={
 news:{label:'Notícia',text:'Moradores relatam a implantação de áreas sombreadas na praça do bairro.',focus:'Relato de um acontecimento público, com atribuição de informação aos moradores.'},
 scientific:{label:'Divulgação científica',text:'A presença de árvores pode reduzir a exposição direta à radiação solar em parte da praça, dependendo da cobertura vegetal.',focus:'Explicação condicional de um fenômeno; demanda medições para avaliar efeitos concretos.'},
 campaign:{label:'Campanha comunitária',text:'Cuide das árvores da praça: preservar espaços verdes é uma responsabilidade compartilhada.',focus:'Discurso persuasivo que busca mobilizar comportamentos coletivos.'}
};
export function isIntertextTopic(subject:string,topic:string){
 const raw=topic.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 return subject==='Português'&&(/intertextual|interdiscursiv/.test(raw));
}
export function modelLine(a:number,b:number,x:number){
 if(![a,b,x].every(Number.isFinite))return null;
 const y=a*x+b;return Number.isFinite(y)?y:null;
}
