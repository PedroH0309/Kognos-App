/** Versioned *orientation* maps, not machine-ingested official syllabi. */
export type ExamId = 'enem'|'etec'|'fuvest'|'saresp'|'vunesp';
export type Difficulty = 'basic'|'intermediate'|'advanced';
export const difficulties: Record<Difficulty,string> = {basic:'Básica',intermediate:'Intermediária',advanced:'Avançada'};
export const examBlueprints: Record<ExamId,{
  label:string; edition:string; sourceTitle:string; sourceUrl:string; sourceCheckedOn:string;
  subjects:Record<string, readonly string[]>;
  notice:string;
}> = {
  enem:{
    label:'ENEM',edition:'Matriz de Referência 2026',sourceTitle:'Matrizes de Referência do Enem — Inep',
    sourceUrl:'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem',sourceCheckedOn:'2026-11-01',
    subjects:{
      Matemática:['Porcentagem e razão','Funções e gráficos','Probabilidade e estatística','Geometria e medidas'],
      Português:['Interpretação de textos','Gêneros e linguagens','Argumentação e coesão'],
      Física:['Movimento e forças','Trabalho e energia','Eletricidade cotidiana'],
      Química:['Estrutura atômica','Ligações químicas','Soluções e concentração','Química ambiental'],
      Biologia:['Citologia','Genética e hereditariedade','Ecologia e impactos ambientais'],
      História:['Brasil colonial','Industrialização e trabalho','Cidadania e direitos'],
      Geografia:['Cartografia','Clima e ambiente','Urbanização e globalização']
    },
    notice:'Os assuntos são um roteiro editorial ilustrativo do Kognos. Confira competências, habilidades e objetos de conhecimento na matriz oficial; não são promessas de cobrança.'
  },
  etec:{
    label:'Vestibulinho ETEC',edition:'Vestibulinho 2026/2027 — referência da edição',sourceTitle:'Vestibulinho Etec — Informações oficiais sobre o exame',
    sourceUrl:'https://vestibulinho.etec.sp.gov.br/duvidas-frequentes/',sourceCheckedOn:'2026-11-01',
    subjects:{
      Matemática:['Porcentagem e proporções','Equações e problemas','Leitura de gráficos','Geometria básica'],
      Português:['Interpretação de textos','Concordância','Classes gramaticais'],
      Física:['Movimento e unidades','Força e energia'],
      Química:['Misturas e separação','Estrutura da matéria'],
      Biologia:['Ecologia','Célula e saúde'],
      História:['História do Brasil','Industrialização'],
      Geografia:['Mapas e escalas','Meio ambiente e clima']
    },
    notice:'Roteiro editorial preliminar, não uma matriz oficial de conteúdos. Verifique modalidade, edital e prova anterior. O formato e o número de questões dependem da seleção.'
  },
  saresp:{
    label:'SARESP — São Paulo',edition:'Orientação de estudos — conferir série e edição',
    sourceTitle:'Secretaria de Educação SP — SARESP',sourceUrl:'https://atendimento.educacao.sp.gov.br/knowledgebase/article/SED-01822/pt-br',sourceCheckedOn:'2026-11-02',
    subjects:{
      Matemática:['Porcentagem e proporção','Equações e problemas','Leitura de gráficos','Geometria'],
      Português:['Interpretação de textos','Gêneros textuais','Argumentação e linguagem'],
      Ciências:['Fenômenos naturais','Ecologia e ambiente','Matéria e energia']
    },
    notice:'SARESP é avaliação de rendimento escolar, não vestibular. Este é um roteiro orientativo autoral: conteúdo e disciplinas variam com o ano/série e a edição; confira o material oficial da Secretaria.'
  },
  vunesp:{
    label:'VUNESP — estilo de banca',edition:'Roteiro preparatório por edital',
    sourceTitle:'Fundação VUNESP — Concursos, Vestibulares e Avaliações',sourceUrl:'https://www.vunesp.com.br/',sourceCheckedOn:'2026-11-02',
    subjects:{
      Matemática:['Equações e problemas','Porcentagem e proporções','Funções e gráficos','Probabilidade'],
      Português:['Interpretação de textos','Sintaxe e concordância','Análise de argumentos'],
      Física:['Mecânica','Eletricidade','Energia'],
      Química:['Estrutura atômica','Reações químicas','Soluções'],
      Biologia:['Citologia','Ecologia','Genética'],
      História:['História do Brasil','Transformações econômicas','Cidadania'],
      Geografia:['Cartografia','Questões ambientais','Dinâmicas territoriais']
    },
    notice:'VUNESP organiza diferentes provas, não possui matriz única. Escolha o concurso ou vestibular e consulte seu edital. As questões geradas pela IA são autorais, apenas orientadas pelo estilo, e NÃO são cadernos oficiais da VUNESP.'
  },
  fuvest:{
    label:'FUVEST / USP',edition:'Programa do Vestibular 2027',sourceTitle:'FUVEST — Programa do Vestibular 2027',
    sourceUrl:'https://www.fuvest.br/',sourceCheckedOn:'2026-11-01',
    subjects:{
      Matemática:['Funções e modelagem','Geometria analítica','Probabilidade e combinatória'],
      Português:['Interpretação e literatura','Gramática em contexto','Análise argumentativa'],
      Física:['Mecânica','Eletromagnetismo','Energia e termodinâmica'],
      Química:['Estequiometria','Ligações e reações','Equilíbrio químico'],
      Biologia:['Genética','Ecologia','Fisiologia humana'],
      História:['Brasil e América','Revoluções e conflitos','História social'],
      Geografia:['Climatologia','Geopolítica','Dinâmicas socioespaciais']
    },
    notice:'Temas editoriais exemplificativos. Consulte a íntegra do Programa FUVEST 2027, incluindo leituras obrigatórias e regras da fase escolhida.'
  }
};
export type GenerationRequest={institution:ExamId;subject:string;topic:string;difficulty:Difficulty;count:number;sourceTopicId?:string;lessonId?:string;variation?:number};
export function validateGenerationRequest(value:unknown):GenerationRequest|null {
 if(!value||typeof value!=='object'||Array.isArray(value))return null;
 const v=value as Record<string,unknown>;
 if(typeof v.institution!=='string'||!Object.hasOwn(examBlueprints,v.institution))return null;
 const institution=v.institution as ExamId;const b=examBlueprints[institution];
 if(typeof v.subject!=='string'||!Object.hasOwn(b.subjects,v.subject))return null;
 const lessonId=typeof v.lessonId==='string'&&/^[a-z]+-[a-z0-9-]{3,75}$/.test(v.lessonId)?v.lessonId:undefined;
 if(v.lessonId!==undefined&&!lessonId)return null;
 const variation=Number.isInteger(v.variation)&&typeof v.variation==='number'&&v.variation>=0&&v.variation<=31?v.variation:undefined;
 if(v.variation!==undefined&&variation===undefined)return null;
 const sourceTopicId=typeof v.sourceTopicId==='string'&&/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(v.sourceTopicId)&&v.sourceTopicId.length===36?v.sourceTopicId:undefined;
 if(v.sourceTopicId!==undefined&&!sourceTopicId)return null;
 if(typeof v.topic!=='string'||v.topic.length>110||v.topic.trim().length<4||(!b.subjects[v.subject].includes(v.topic)&&!sourceTopicId))return null;
 if(v.difficulty!=='basic'&&v.difficulty!=='intermediate'&&v.difficulty!=='advanced')return null;
 if(!Number.isInteger(v.count)||Number(v.count)<1||Number(v.count)>5)return null;
 return {institution,subject:v.subject,topic:v.topic,difficulty:v.difficulty,count:v.count as number,...(sourceTopicId?{sourceTopicId}:{}),...(lessonId?{lessonId}:{}),...(variation!==undefined?{variation}:{})};
}