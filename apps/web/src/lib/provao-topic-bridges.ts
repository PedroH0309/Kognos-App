/** Correspondências editoriais estritas: usam uma aula autoral real existente,
 * mas identificam claramente quando ela é APENAS UM RECORTE do tópico oficial.
 * Nunca aplicar por similaridade automatizada ou marcar como homologação.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import {findProvaoTopic} from './provao-paulista.ts';
import {deepMathLesson} from './deep-math-lessons.ts';
import {deepCrossSubjectLesson} from './deep-cross-subject-lessons.ts';
import {stage13Lesson} from './authored-lessons-stage13.ts';
import {stage14Lesson} from './authored-lessons-stage14.ts';
import {stage15Lesson} from './authored-lessons-stage15.ts';
import {stage16Lesson} from './authored-lessons-stage16.ts';
import {stage17Lesson} from './authored-lessons-stage17.ts';
type Bridge={subject:string;includes:string;to:string;from?:string};
const links:readonly Bridge[]=[
 // Português e literatura: interpretação, funcionamento da língua e história literária.
 {subject:'Português',includes:'distinção entre variedades linguísticas',to:'Variação regional, social e histórica'},
 {subject:'Português',includes:'níveis de significação do texto',to:'Informações explícitas e inferências'},
 {subject:'Português',includes:'estratégias de articulação do texto',to:'Coesão sequencial e conectivos'},
 {subject:'Português',includes:'conectivos: função sintática',to:'Coesão sequencial e conectivos'},
 {subject:'Português',includes:'períodos literário: barroco',to:'Barroco brasileiro',from:'Literatura'},
 {subject:'Português',includes:'períodos literário: romantismo',to:'Romantismo: poesia e gerações',from:'Literatura'},
 {subject:'Português',includes:'períodos literário: realismo',to:'Realismo brasileiro',from:'Literatura'},
 {subject:'Português',includes:'períodos literário: modernismo',to:'Modernismo: primeira geração',from:'Literatura'},
 {subject:'Português',includes:'análise literária: gêneros literários (conto e crônica)',to:'Narrador e foco narrativo',from:'Literatura'},
 {subject:'Português',includes:'relação do texto literário com seu contexto histórico e cultural',to:'Realismo brasileiro',from:'Literatura'},
 // Inglês: competências de leitura e vocabulário em contexto.
 {subject:'Inglês',includes:'compreensão do sentido geral',to:'Skimming e scanning'},
 {subject:'Inglês',includes:'compreensão de ideias expressas em trechos',to:'Skimming e scanning'},
 {subject:'Inglês',includes:'localização de informação específica',to:'Skimming e scanning'},
 {subject:'Inglês',includes:'compreensão crítica de textos',to:'Fato, opinião e desinformação em textos em inglês'},
 {subject:'Inglês',includes:'identificação do significado de itens lexicais',to:'Verbos modais'},
 {subject:'Inglês',includes:'identificação da referência textual',to:'Skimming e scanning'},
 // Matemática: o tópico de apoio pode tratar apenas uma habilidade do item.
 {subject:'Matemática',includes:'números naturais, inteiros, racionais e reais',to:'Operações, divisibilidade e conjuntos numéricos'},
 {subject:'Matemática',includes:'razões, proporcionalidade direta e inversa',to:'Razões, escalas e proporcionalidade'},
 {subject:'Matemática',includes:'porcentagem, taxas e índices',to:'Porcentagem e juros'},
 {subject:'Matemática',includes:'relação entre grandezas: velocidade',to:'Razões, escalas e proporcionalidade'},
 {subject:'Matemática',includes:'taxa de variação: crescimento linear',to:'Equações do primeiro grau'},
 {subject:'Matemática',includes:'função polinomial do 1º grau',to:'Equações do primeiro grau'},
 {subject:'Matemática',includes:'função quadrática:',to:'Função quadrática'},
 {subject:'Matemática',includes:'pontos de máximo e mínimo em funções quadráticas',to:'Função quadrática'},
 {subject:'Matemática',includes:'notação científica',to:'Potências, radicais e notação científica'},
 {subject:'Matemática',includes:'sequências: noção de sequência',to:'Progressão aritmética'},
 {subject:'Matemática',includes:'eventos dependentes e independentes',to:'Probabilidade condicional'},
 {subject:'Matemática',includes:'probabilidade da união e da intersecção',to:'Probabilidade condicional'},
 {subject:'Matemática',includes:'resolução e discussão de um sistema linear',to:'Equações, inequações e sistemas'},
 {subject:'Matemática',includes:'representação algébrica e gráfica de um sistema',to:'Equações, inequações e sistemas'},
 {subject:'Matemática',includes:'medidas de tendência central',to:'Média aritmética e ponderada'},
 // Física: modelos em que a aula detalhada aborda um recorte conhecido.
 {subject:'Física',includes:'velocidade e aceleração:',to:'Velocidade média e instantânea'},
 {subject:'Física',includes:'representação gráfica, em função do tempo',to:'Velocidade média e instantânea'},
 {subject:'Física',includes:'movimentos uniformes e uniformemente variados',to:'Movimento uniformemente variado'},
 {subject:'Física',includes:'forças e composição vetorial',to:'Leis de Newton'},
 {subject:'Física',includes:'leis de newton:',to:'Leis de Newton'},
 {subject:'Física',includes:'referencial inercial',to:'Leis de Newton'},
 {subject:'Física',includes:'forças: força gravitacional',to:'Leis de Newton'},
 {subject:'Física',includes:'trabalho realizado por forças conservativas',to:'Trabalho de uma força'},
 {subject:'Física',includes:'energia mecânica: energia cinética',to:'Conservação da energia mecânica'},
 {subject:'Física',includes:'sistemas conservativos e não conservativos',to:'Conservação da energia mecânica'},
 {subject:'Física',includes:'calor como forma de energia em trânsito',to:'Calor sensível e capacidade térmica'},
 {subject:'Física',includes:'potência elétrica. efeito joule',to:'Potência e consumo de energia elétrica'},
 // Química: cálculos e modelos definidos, sem atribuir ao apoio o escopo todo.
 {subject:'Química',includes:'equações químicas e balanceamento',to:'Reações químicas e balanceamento'},
 {subject:'Química',includes:'aspectos quantitativos das transformações químicas',to:'Cálculo estequiométrico'},
 {subject:'Química',includes:'lei de lavoisier e lei de proust',to:'Reações químicas e balanceamento'},
 {subject:'Química',includes:'cálculos estequiométricos:',to:'Cálculo estequiométrico'},
 {subject:'Química',includes:'modelos atômicos de dalton',to:'Modelos atômicos'},
 {subject:'Química',includes:'ligação covalente, ligação iônica e ligação metálica',to:'Ligação covalente'},
 {subject:'Química',includes:'geometria molecular',to:'Ligação covalente'},
 {subject:'Química',includes:'solubilidade e concentrações',to:'Concentração comum e molaridade'},
 {subject:'Química',includes:'operações envolvendo soluções',to:'Concentração comum e molaridade'},
 {subject:'Química',includes:'equilíbrio químico',to:'Equilíbrio químico e constantes'},
 {subject:'Química',includes:'caracterização dos sistemas em equilíbrio',to:'Equilíbrio químico e constantes'},
 {subject:'Química',includes:'constantes de equilíbrio',to:'Equilíbrio químico e constantes'},
 {subject:'Química',includes:'produto iônico da água',to:'pH e pOH'},
 // Biologia: as áreas relacionadas são módulos parciais, não a aula integral.
 {subject:'Biologia',includes:'envoltórios celulares; membrana plasmática',to:'Membrana plasmática e transporte'},
 {subject:'Biologia',includes:'metabolismo energético: energia para a vida',to:'Fotossíntese e quimiossíntese'},
 {subject:'Biologia',includes:'a 1ª e 2ª lei de gregor mendel',to:'Primeira lei de Mendel'},
 {subject:'Biologia',includes:'conceitos básicos de genética',to:'Primeira lei de Mendel'},
 {subject:'Biologia',includes:'divisões celulares: compreensão das funções da mitose',to:'Ciclo celular e mitose'},
 {subject:'Biologia',includes:'estrutura molecular do dna e do rna',to:'Duplicação do DNA'},
 {subject:'Biologia',includes:'principais componentes citoplasmáticos',to:'Células e organelas',from:'Ciências'},
 {subject:'Biologia',includes:'pirâmides ecológicas',to:'Cadeias e teias alimentares',from:'Ciências'},
 {subject:'Biologia',includes:'ciclos biogeoquímicos',to:'Ciclos da água e do carbono',from:'Ciências'},
 // História: cronologia, causas e transformação institucional.
 {subject:'História',includes:'revolução industrial',to:'Revolução Industrial'},
 {subject:'História',includes:'getúlio vargas:',to:'Era Vargas'},
 {subject:'História',includes:'primeira república:',to:'Primeira República brasileira'},
 {subject:'História',includes:'redemocratização:',to:'Redemocratização e Constituição de 1988'},
 {subject:'História',includes:'constituição de 1988:',to:'Redemocratização e Constituição de 1988'},
 {subject:'História',includes:'da mão de obra escrava à imigração',to:'Abolição e pós-abolição'},
 {subject:'História',includes:'escravidão e outras formas de trabalho',to:'Tráfico atlântico e resistências'},
 {subject:'História',includes:'iluminismo e liberalismo',to:'Iluminismo'},
 {subject:'História',includes:'o movimento republicano e a proclamação',to:'Primeira República brasileira'},
 // Geografia: recorte específico de interpretação geográfica.
 {subject:'Geografia',includes:'mudanças climáticas',to:'Mudanças climáticas globais'},
 {subject:'Geografia',includes:'a questão urbana mundo e no brasil',to:'Urbanização brasileira'},
 {subject:'Geografia',includes:'problemas urbanos e desigualdades',to:'Segregação socioespacial'},
 {subject:'Geografia',includes:'as desigualdades socioeconômicas',to:'Segregação socioespacial'},
 {subject:'Geografia',includes:'a concentração espacial da riqueza',to:'Segregação socioespacial'},
 {subject:'Geografia',includes:'a cartografia como recurso',to:'Escalas cartográficas'},
 {subject:'Geografia',includes:'a dinâmica da água na superfície terrestre',to:'Bacias hidrográficas brasileiras'},
 // Filosofia e Sociologia: conceitos e argumentos autorais.
 {subject:'Filosofia',includes:'questões éticas contemporâneas',to:'Ética e moral'},
 {subject:'Filosofia',includes:'a bioética e os novos horizontes',to:'Ética e moral'},
 {subject:'Filosofia',includes:'o contratualismo clássico',to:'Contratualismo: Hobbes, Locke e Rousseau'},
 {subject:'Filosofia',includes:'as relações entre o senso comum e o conhecimento científico',to:'Filosofia da ciência'},
 {subject:'Filosofia',includes:'as abordagens racionalistas e empiristas',to:'Filosofia da ciência'},
 {subject:'Sociologia',includes:'o ser humano como ser social',to:'Socialização e instituições sociais'},
 {subject:'Sociologia',includes:'as relações sociais e os processos de construção',to:'Socialização e instituições sociais'},
 {subject:'Sociologia',includes:'preconceitos, estereótipos',to:'Racismo estrutural e relações étnico-raciais'},
 {subject:'Sociologia',includes:'o trabalho e a constituição das relações sociais',to:'Trabalho e divisão social'},
 {subject:'Sociologia',includes:'classes sociais, divisão do trabalho',to:'Marx: classes sociais e conflito'},
 {subject:'Sociologia',includes:'o impacto das novas tecnologias nas relações de trabalho',to:'Trabalho e divisão social'},
 {subject:'Sociologia',includes:'pluralismo cultural:',to:'Cultura e etnocentrismo'},
 {subject:'Sociologia',includes:'consumismo, indústria cultural',to:'Indústria cultural e cultura de massa'},
 {subject:'Sociologia',includes:'cidadania: direitos sociais',to:'Socialização e instituições sociais'}
];
const fold=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
const authors=[deepMathLesson,deepCrossSubjectLesson,stage17Lesson,stage16Lesson,stage15Lesson,stage14Lesson,stage13Lesson];
export function supportingProvaoLesson(topic:CurriculumTopic):CourseLesson|null{
 const ref=findProvaoTopic(topic.subject,topic.topic);
 if(!ref)return null;
 const text=fold(ref.description);
 for(const bridge of links){
  if(bridge.subject!==topic.subject||!text.includes(fold(bridge.includes)))continue;
  const synthetic={...topic,subject:bridge.from??topic.subject,topic:bridge.to};
  const original=authors.map(author=>author(synthetic)).find((entry):entry is CourseLesson=>Boolean(entry));
  if(!original)continue;
  return {...original,id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
   objective:original.objective,review:'introductory',
   supportTopic:(bridge.from??topic.subject)+' · '+bridge.to,
   authorship:'Kognos — material autoral de apoio correlato; correspondência parcial com o programa, sem homologação docente'};
 }
 return null;
}
export function hasSupportingProvaoLesson(topic:CurriculumTopic){
 const ref=findProvaoTopic(topic.subject,topic.topic);
 return Boolean(ref&&links.some(bridge=>bridge.subject===topic.subject&&fold(ref.description).includes(fold(bridge.includes))));
}
