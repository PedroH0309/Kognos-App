/** Curated broad preparatory index. It is not a verbatim official syllabus:
 * individual skills and required readings must be checked against the linked
 * edition-specific documents. Keep this transparent in every UI.
 */
import type {ExamId} from './exam-blueprints.ts';
import type {StudentProfile} from './profile.ts';

const highSchool:Record<string,readonly string[]>={
 'Matemática':[
 'Operações, divisibilidade e conjuntos numéricos','Razões, escalas e proporcionalidade','Porcentagem e juros',
 'Potências, radicais e notação científica','Equações, inequações e sistemas','Produtos notáveis e fatoração',
 'Funções afim, quadrática e modular','Funções exponencial e logarítmica','Progressões aritmética e geométrica',
 'Trigonometria no triângulo e no círculo','Geometria plana e semelhança','Geometria espacial, áreas e volumes',
 'Geometria analítica: pontos, retas e circunferências','Vetores e matrizes','Determinantes e sistemas lineares',
 'Análise combinatória','Probabilidade e probabilidade condicional','Estatística descritiva e medidas de dispersão',
 'Leitura e construção de gráficos','Matemática financeira','Modelagem e resolução de problemas'
 ],
 'Português':[
 'Leitura, inferência e interpretação textual','Gêneros textuais e tipos de discurso','Variação linguística e norma-padrão',
 'Coesão, coerência e progressão temática','Semântica e figuras de linguagem','Funções da linguagem',
 'Ortografia, acentuação e pontuação','Morfologia e classes de palavras','Sintaxe da oração e do período',
 'Concordância, regência e crase','Vozes verbais e colocação pronominal','Intertextualidade e argumentação',
 'Linguagem verbal, visual e multimodal','Análise crítica de discursos'
 ],
 'Literatura':[
 'Gêneros literários e recursos estilísticos','Trovadorismo e Humanismo','Classicismo e Quinhentismo',
 'Barroco e Arcadismo','Romantismo e nacionalismo','Realismo e Naturalismo','Parnasianismo e Simbolismo',
 'Pré-modernismo','Modernismo: fases e autores','Literatura brasileira contemporânea',
 'Literatura africana de língua portuguesa','Literatura indígena e afro-brasileira','Leitura e análise de obras obrigatórias conforme edital'
 ],
 'Redação':[
 'Projeto de texto e tese','Estrutura dissertativo-argumentativa','Argumentos, repertório e evidências',
 'Coesão, coerência e progressão','Paragrafação e conectivos','Norma-padrão e revisão',
 'Proposta de intervenção e direitos humanos (ENEM)','Gêneros e critérios específicos por banca',
 'Planejamento, escrita, revisão e reescrita'
 ],
 'Inglês':[
 'Leitura e interpretação de textos','Estratégias de leitura e inferência','Vocabulário contextual e cognatos',
 'Gêneros e textos multimodais','Tempos e aspectos verbais','Modais e condicionais',
 'Pronomes, conectores e relações semânticas','Discurso direto e indireto','Uso de língua inglesa em contextos socioculturais'
 ],
 'Espanhol':[
 'Leitura e interpretação em espanhol','Cognatos, falsos cognatos e contexto',
 'Conectivos, pronomes e estruturas verbais','Diversidade cultural hispano-americana'
 ],
 'Física':[
 'Grandezas, unidades e análise dimensional','Cinemática escalar e vetorial','Leis de Newton e dinâmica',
 'Trabalho, energia e potência','Impulso, quantidade de movimento e colisões','Gravitação e movimentos orbitais',
 'Estática, torque e equilíbrio','Hidrostática e pressão','Termologia e escalas termométricas',
 'Calorimetria e mudanças de estado','Gases e termodinâmica','Ondas, som e acústica',
 'Óptica geométrica e instrumentos','Eletrostática e campo elétrico','Circuitos elétricos e resistores',
 'Magnetismo e indução eletromagnética','Energia, radiação e física moderna'
 ],
 'Química':[
 'Matéria, transformações e separação de misturas','Estrutura atômica e modelos','Tabela periódica e propriedades',
 'Ligações, geometria e polaridade molecular','Interações intermoleculares','Funções inorgânicas',
 'Reações e balanceamento','Mol, massas e estequiometria','Gases e soluções',
 'Concentrações e diluição','Termoquímica','Cinética química','Equilíbrio químico e pH',
 'Eletroquímica e pilhas','Radioatividade','Química orgânica: funções e nomenclatura',
 'Isomeria e reações orgânicas','Polímeros e biomoléculas','Química ambiental e processos industriais'
 ],
 'Biologia':[
 'Bioquímica celular e biomoléculas','Células, organelas e membranas','Metabolismo e respiração celular',
 'Fotossíntese','Mitose e meiose','DNA, RNA e síntese proteica','Genética mendeliana',
 'Hereditariedade, mutações e biotecnologia','Evolução e seleção natural','Origem da vida e diversidade',
 'Classificação dos seres vivos','Microbiologia: vírus, bactérias e fungos','Botânica e fisiologia vegetal',
 'Zoologia e anatomia comparada','Anatomia e fisiologia humana','Reprodução, embriologia e desenvolvimento',
 'Imunologia e vacinas','Ecologia, cadeias e ciclos biogeoquímicos',
 'Ecossistemas, biomas e conservação','Doenças, saúde pública e parasitoses'
 ],
 'História':[
 'Tempo histórico, fontes e historiografia','Antiguidade oriental e clássica','Feudalismo e mundo medieval',
 'Renascimento e Reformas religiosas','Expansão marítima e colonização','Iluminismo e revoluções modernas',
 'Revolução Industrial e trabalho','Brasil colonial e escravidão','Independência e Brasil Império',
 'Abolição e República brasileira','Primeira República e movimentos sociais','Era Vargas',
 'Guerras mundiais e totalitarismos','Guerra Fria e descolonização',
 'Ditadura militar e redemocratização','Brasil contemporâneo e Constituição',
 'História indígena, africana e afro-brasileira','História das Américas',
 'Movimentos sociais, gênero e direitos humanos'
 ],
 'Geografia':[
 'Orientação, coordenadas e cartografia','Escalas e representações espaciais',
 'Geologia e estrutura terrestre','Relevo, solos e recursos naturais',
 'Clima, massas de ar e mudanças climáticas','Hidrografia e recursos hídricos',
 'Vegetação e biomas do Brasil','População, migração e demografia','Urbanização e redes urbanas',
 'Agricultura, pecuária e questão agrária','Industrialização, energia e tecnologia',
 'Transportes, comércio e fluxos','Globalização e divisão internacional do trabalho',
 'Geopolítica e conflitos internacionais','Desigualdade socioespacial','Desenvolvimento sustentável e impactos ambientais'
 ],
 'Filosofia':[
 'Introdução à filosofia e argumentação','Filosofia antiga e ética clássica',
 'Filosofia medieval e modernidade','Racionalismo e empirismo','Iluminismo e Kant',
 'Ética, moral e justiça','Filosofia política e democracia','Conhecimento e ciência',
 'Lógica, falácias e linguagem','Filosofia contemporânea e tecnologia'
 ],
 'Sociologia':[
 'Surgimento da sociologia e métodos','Durkheim, Marx e Weber','Cultura, identidade e diversidade',
 'Socialização, instituições e família','Estratificação e desigualdade social',
 'Trabalho e transformações produtivas','Estado, poder e cidadania',
 'Movimentos sociais e direitos humanos','Mídias, ideologia e consumo',
 'Gênero, raça e relações sociais','Globalização e questões socioambientais'
 ],
 'Arte':[
 'Linguagens artísticas e leitura de imagens','História da arte e patrimônio cultural',
 'Arte brasileira e modernismo','Artes visuais, música, dança e teatro',
 'Indústria cultural e arte digital'
 ],
 'Educação Física':[
 'Corpo, movimento e saúde','Esporte, jogos e cultura corporal',
 'Atividade física e qualidade de vida','Práticas corporais e sociedade'
 ]
};
const fundamental:Record<string,readonly string[]>={
 'Matemática':[
 'Números naturais, inteiros, racionais e reais','Frações, decimais e porcentagens',
 'Razões, proporções e regra de três','Expressões algébricas e equações',
 'Sistemas de equações e problemas','Potenciação, radiciação e notação científica',
 'Geometria plana, perímetro e área','Geometria espacial e volume',
 'Semelhança e teorema de Pitágoras','Estatística, gráficos e tabelas','Probabilidade básica'
 ],
 'Português':[
 'Interpretação e inferências em textos','Gêneros textuais','Coesão e coerência',
 'Pontuação e ortografia','Classes de palavras','Sintaxe, concordância e regência',
 'Variação linguística','Figuras de linguagem e sentidos do texto','Literatura e produção textual'
 ],
 'Ciências':[
 'Matéria, substâncias e misturas','Mudanças de estado e transformações',
 'Átomos e tabela periódica introdutória','Força, movimento e energia',
 'Eletricidade e ondas','Células e seres vivos','Corpo humano e saúde',
 'Genética e evolução introdutórias','Ecologia, biomas e sustentabilidade',
 'Terra, Lua e Sistema Solar'
 ],
 'História':[
 'Povos antigos e medievais','Brasil indígena e colonização',
 'Escravidão, resistências e abolição','Independência, Império e República',
 'Revoluções e industrialização','Guerras mundiais e Guerra Fria',
 'Ditadura e democratização no Brasil','Direitos, cultura e cidadania'
 ],
 'Geografia':[
 'Mapas, escalas e coordenadas','Relevo, clima e vegetação','População e migrações',
 'Urbanização e industrialização','Campo e cidade','Regionalização do Brasil',
 'Globalização e geopolítica','Ambiente, água e sustentabilidade'
 ]
};

export const officialSyllabusSources:Record<ExamId,{title:string;url:string;edition:string;note:string}>={
 enem:{title:'Inep — Matrizes de Referência ENEM',url:'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem',edition:'2026',note:'Confira competências, habilidades, objetos de conhecimento e cartilha de redação.'},
 fuvest:{title:'FUVEST — Programa do Vestibular da USP',url:'https://www.fuvest.br/',edition:'2027',note:'Consulte o programa PDF e a lista atual de obras obrigatórias; ambas podem variar por edição.'},
 vunesp:{title:'VUNESP — Vestibular UNESP 2027',url:'https://www.vunesp.com.br/VNSP2514',edition:'UNESP 2027 (referência)',note:'VUNESP organiza vários exames. Confirme qual vestibular e edital se aplicam; este roteiro é do ensino médio.'},
 etec:{title:'Vestibulinho ETEC — Manual e documentação',url:'https://vestibulinho.etec.sp.gov.br/documentos/',edition:'Verificar semestre e modalidade',note:'A base é dos anos finais do ensino fundamental; modalidades técnicas podem cobrar outros conteúdos.'},
 saresp:{title:'Secretaria de Educação SP — Matrizes e Currículo Paulista',url:'https://atendimento.educacao.sp.gov.br/knowledgebase/article/SED-08378/pt-br',edition:'Verificar série e ano',note:'SARESP não é vestibular. Matérias e habilidades dependem da série e do ano de aplicação.'}
};
/** Study coverage: union with the original, already supported generation topics. */
export function expandExamSubjects(exam:ExamId,original:Record<string,readonly string[]>):Record<string,readonly string[]>{
 const group=exam==='etec'||exam==='saresp'?fundamental:highSchool;
 const result:Record<string,readonly string[]>={};
 for(const [subject,topics] of Object.entries(group)){
  // Do not invent a secondary-school syllabus for an unspecified SARESP grade.
  if(exam==='saresp'&&!['Português','Matemática','Ciências'].includes(subject))continue;
  result[subject]=[...new Set([...(original[subject]||[]),...topics])];
 }
 for(const [subject,topics] of Object.entries(original))if(!result[subject])
  result[subject]=[...new Set(topics)];
 return result;
}
export function examForStudent(profile:Pick<StudentProfile,'goal'|'targetName'|'examFocus'>):ExamId|null{
 if(profile.examFocus)return profile.examFocus;
 if(profile.goal==='enem')return 'enem';
 if(profile.goal==='etec')return 'etec';
 const target=profile.targetName.toLowerCase();
 if(/fuvest|usp/.test(target))return 'fuvest';
 if(/unesp|vunesp/.test(target))return 'vunesp';
 if(/saresp|prov[aã]o paulista/.test(target))return 'saresp';
 return null;
}
export function activeSyllabi(profile:Pick<StudentProfile,'goal'|'targetName'|'examFocus'|'syllabusExams'>):ExamId[]{
 const primary=examForStudent(profile);
 return [...new Set([...(profile.syllabusExams||[]),...(primary?[primary]:[])])];
}
export function mergedSyllabus(exams:readonly ExamId[]):Record<string,readonly string[]>{
 const output:Record<string,string[]>={};
 for(const exam of exams){
  for(const [subject,topics] of Object.entries(expandExamSubjects(exam,{}))){
   const collected=output[subject]||[];
   output[subject]=[...new Set([...collected,...topics])];
  }
 }
 return output;
}
