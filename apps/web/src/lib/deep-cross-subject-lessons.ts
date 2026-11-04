/** Original, discipline-specific offline teaching. Not teacher-certified.
 * Other topics continue using the honest introductory fallback until authored.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseSection,CourseTask,CourseLevel} from './course-content.ts';
import {examBlueprints} from './exam-blueprints.ts';
type Chapter={title:string;explanation:string;example:string;pitfall:string};
type LessonSpec={subject:string;topic:string;objective:string;sections:Chapter[];tasks:[CourseLevel,string,string,string][]};
const lessons:LessonSpec[] = [
  {
    "subject": "Física",
    "topic": "Velocidade média e instantânea",
    "objective": "Relacionar deslocamento, distância percorrida, intervalo de tempo e velocidade; diferenciar rapidez média da velocidade vetorial e interpretar a inclinação de gráficos posição-tempo.",
    "sections": [
      {
        "title": "Velocidade, trajetória e referencial",
        "explanation": "O movimento é descrito em relação a um referencial. A posição indica onde o corpo se encontra; o deslocamento é a diferença entre posição final e inicial, enquanto a distância percorrida soma os comprimentos do caminho. Em uma dimensão, a velocidade média vetorial é Δs/Δt e pode ser positiva ou negativa. A rapidez média é a distância total dividida pelo tempo, sempre não negativa. Quando o objeto retorna ao ponto inicial, o deslocamento é zero, mesmo que a distância percorrida seja grande. O SI usa metros e segundos, de modo que velocidade tem unidade m/s. Para converter km/h em m/s, divida por 3,6.",
        "example": "Um ciclista sai do km 2, vai ao km 8 e retorna ao km 5 em 30 minutos. O deslocamento é 5−2=3 km, mas a distância total é 6+3=9 km. A velocidade média orientada é 3/0,5=6 km/h, e a rapidez média é 9/0,5=18 km/h. Confundir as duas apagaria a informação sobre o caminho.",
        "pitfall": "Dividir a distância pelo tempo e chamar o resultado de velocidade vetorial quando houve mudança de direção ou retorno."
      },
      {
        "title": "Gráficos e velocidade instantânea",
        "explanation": "No gráfico posição versus tempo, a inclinação de uma reta secante entre dois instantes representa a velocidade média naquele intervalo. Se o gráfico é uma reta, a velocidade é constante; caso seja uma curva diferenciável, a velocidade instantânea corresponde à inclinação da tangente no instante considerado, expressa por ds/dt. Em um gráfico velocidade versus tempo, a área orientada sob a curva fornece o deslocamento, e não a distância automaticamente: trechos de velocidade negativa subtraem da área algébrica. A velocidade instantânea pode ser zero no instante de inversão de sentido, embora o corpo continue sua trajetória.",
        "example": "Se s(t)=2t², com s em metros e t em segundos, entre t=1 s e t=3 s temos s(1)=2 e s(3)=18; a velocidade média é (18−2)/(3−1)=8 m/s. Pela derivada, v(t)=4t, então a velocidade instantânea em t=3 s é 12 m/s: média e instantânea diferem.",
        "pitfall": "Interpretar diretamente a altura do gráfico posição-tempo como velocidade ou assumir que a velocidade instantânea é sempre igual à média."
      },
      {
        "title": "Problemas com etapas e limites de modelos",
        "explanation": "Para um percurso em etapas, a média correta depende dos intervalos de tempo e não é, em geral, a média aritmética das velocidades. Em trajetos de distâncias iguais, a rapidez média é a média harmônica de duas rapidez constantes positivas: 2v1v2/(v1+v2). Já em trajetos com tempos iguais, a rapidez média é a média aritmética, desde que se use distância total. Na prática, acelerações, paradas e variações de trajeto exigem separar os trechos. Um gráfico pode indicar uma velocidade negativa sem significar que a rapidez seja negativa: o sinal apenas representa orientação.",
        "example": "Um carro percorre 60 km a 30 km/h e depois 60 km a 60 km/h. O primeiro trecho demora 2 h, o segundo 1 h. A rapidez média é 120/3=40 km/h; calcular (30+60)/2=45 km/h seria incorreto. Se os tempos fossem iguais, o resultado da rapidez média seria diferente.",
        "pitfall": "Calcular média simples das velocidades de etapas com tempos desiguais ou confundir sinal da velocidade com sinal da rapidez."
      }
    ],
    "tasks": [
      [
        "basic",
        "Um corredor sai da posição 10 m e chega à posição 70 m em 12 s. Calcule o deslocamento e a velocidade média orientada.",
        "Use posição final menos inicial.",
        "Δs=70−10=60 m. O intervalo é Δt=12 s. Logo v_m=Δs/Δt=60/12=5 m/s, positiva no sentido escolhido para o eixo."
      ],
      [
        "basic",
        "Converta 72 km/h para m/s e explique a transformação de unidades.",
        "Um quilômetro vale mil metros e uma hora contém 3600 segundos.",
        "72 km/h =72×1000/3600 m/s=72/3,6=20 m/s. A conversão reduz o valor numérico porque m/s é uma unidade maior que km/h."
      ],
      [
        "intermediate",
        "Uma pessoa caminha 400 m para leste e 100 m para oeste em cinco minutos. Determine a rapidez média e a velocidade média orientada.",
        "Distância e deslocamento são diferentes; converta minutos para segundos.",
        "A distância é 500 m; deslocamento, adotando leste positivo, é 300 m. Em 300 s, rapidez média=500/300≈1,67 m/s; velocidade média=300/300=1 m/s para leste."
      ],
      [
        "intermediate",
        "Para s(t)=5t+2, com t em segundos, encontre a velocidade no intervalo entre 2 e 6 segundos.",
        "Calcule as posições e a inclinação da reta.",
        "s(2)=12 m e s(6)=32 m; Δs=20 m e Δt=4 s. A velocidade média é 5 m/s; como s(t) é linear, a velocidade instantânea também é 5 m/s em todo o intervalo."
      ],
      [
        "advanced",
        "Um ônibus percorre 90 km em 1,5 h e depois 30 km em 1 h. Qual a rapidez média total?",
        "Divida a distância total pelo tempo total, não faça média direta de duas taxas.",
        "A distância total é 90+30=120 km. O tempo total é 1,5+1=2,5 h. A rapidez média=120/2,5=48 km/h; a média das velocidades de cada etapa não é adequada."
      ],
      [
        "advanced",
        "Um objeto segue s(t)=t²−6t, em metros e segundos. Determine a velocidade instantânea em t=3 s e interprete.",
        "Use a derivada de s(t); observe a mudança de direção.",
        "v(t)=ds/dt=2t−6. Em t=3 s, v=0 m/s, que identifica o instante em que o objeto para momentaneamente e inverte o sentido do movimento conforme a parábola da posição."
      ]
    ]
  },
  {
    "subject": "Química",
    "topic": "Mol e constante de Avogadro",
    "objective": "Interpretar a quantidade de matéria em mol, converter entre partículas, mol e massa e aplicar a constante de Avogadro com unidades coerentes.",
    "sections": [
      {
        "title": "O mol como unidade de quantidade de matéria",
        "explanation": "Quantidade de matéria não é massa nem volume: mede o número de entidades elementares especificadas (átomos, moléculas, íons ou outras). Um mol contém exatamente 6,02214076 × 10²³ entidades, valor da constante de Avogadro em mol⁻¹. A grandeza n, em mol, relaciona-se à contagem N pela expressão N=n×N_A. Especificar a entidade é indispensável: um mol de moléculas de água contém um mol de moléculas de H₂O, mas dois mols de átomos de hidrogênio e um mol de átomos de oxigênio. A contagem microscópica, enorme, não pode ser confundida com massa medida em gramas.",
        "example": "Se uma amostra contém 0,5 mol de moléculas de CO₂, ela contém 0,5×6,02214076×10²³ ≈3,011×10²³ moléculas. Como cada molécula tem um átomo de carbono e dois de oxigênio, a amostra possui aproximadamente 6,022×10²³ átomos de oxigênio.",
        "pitfall": "Multiplicar pela constante de Avogadro sem dizer se a entidade contada é molécula, átomo, íon ou unidade de fórmula."
      },
      {
        "title": "Massa molar e conversões",
        "explanation": "A massa molar M relaciona massa m e quantidade de matéria n pela expressão n=m/M. Sua unidade usual é g/mol. As massas molares aproximadas podem ser obtidas somando massas atômicas da fórmula: H≈1 g/mol, O≈16 g/mol e C≈12 g/mol; logo H₂O tem M≈18 g/mol e CO₂ tem M≈44 g/mol. A unidade confirma a operação: gramas divididos por g/mol produzem mols. Para converter massa em moléculas, primeiro calcule mols e depois multiplique por N_A. Ao resolver problemas quantitativos, não confunda coeficientes de equação química com índices dos elementos na fórmula.",
        "example": "Uma amostra de 36 g de água possui n=36/18=2 mol de H₂O. Isso corresponde a cerca de 2×6,022×10²³=1,2044×10²⁴ moléculas. A contagem de átomos de hidrogênio é o dobro: aproximadamente 2,4088×10²⁴ átomos.",
        "pitfall": "Usar a massa molar de um átomo isolado para uma molécula inteira ou não cancelar unidades durante as conversões."
      },
      {
        "title": "Proporções e interpretação molecular",
        "explanation": "Em fórmulas químicas, os índices indicam a proporção de átomos por entidade; em equações balanceadas, os coeficientes representam proporções em mol entre espécies. Assim, na reação 2H₂+O₂→2H₂O, dois mols de H₂ reagem estequiometricamente com um mol de O₂, produzindo dois mols de H₂O, desde que a transformação considerada seja completa e não haja outras limitações. A conservação dos átomos é verificada em ambos os lados. Para determinar quantidades de moléculas e massa de produto, converta cada grandeza ao longo de uma cadeia de relações justificadas.",
        "example": "Pela reação 2H₂+O₂→2H₂O, 4 mol de H₂ exigem 2 mol de O₂ e podem produzir 4 mol de H₂O, com reagentes adequados. Isso representa 4×18=72 g de água. As relações vêm da equação balanceada, não de uma comparação direta das massas de H₂ e H₂O.",
        "pitfall": "Ler o coeficiente 2 em 2H₂ como dois átomos por molécula ou assumir que coeficientes descrevem massas iguais."
      }
    ],
    "tasks": [
      [
        "basic",
        "Quantas moléculas existem em 3 mol de CO₂? Escreva o cálculo com unidades.",
        "Multiplique a quantidade em mol pela constante de Avogadro.",
        "N=n×N_A=3 mol×6,022×10²³ mol⁻¹≈1,807×10²⁴ moléculas de CO₂. A unidade mol é cancelada."
      ],
      [
        "basic",
        "Qual a massa molar do H₂SO₄ usando H=1, S=32 e O=16 g/mol?",
        "Some as contribuições de todos os índices da fórmula.",
        "M(H₂SO₄)=2×1+1×32+4×16=2+32+64=98 g/mol. Essa massa corresponde a um mol de moléculas de ácido sulfúrico."
      ],
      [
        "intermediate",
        "Quantos mols de água existem em uma amostra de 90 g? Considere M(H₂O)=18 g/mol.",
        "Divida massa por massa molar.",
        "n=m/M=(90 g)/(18 g/mol)=5 mol. O valor indica quantidade de moléculas em mol, não contagem de átomos."
      ],
      [
        "intermediate",
        "Calcule o número aproximado de átomos de oxigênio presentes em 1 mol de CO₂.",
        "Cada molécula de CO₂ contém dois átomos de oxigênio.",
        "Um mol de CO₂ contém N_A moléculas. Como há dois átomos de oxigênio em cada molécula, existem 2N_A≈1,2044×10²⁴ átomos de oxigênio."
      ],
      [
        "advanced",
        "Na reação 2H₂+O₂→2H₂O, determine quantos mols de O₂ são exigidos para reagir com 6 mol de H₂.",
        "Use a proporção dos coeficientes estequiométricos.",
        "A relação H₂:O₂ é 2:1; para 6 mol de H₂, a quantidade necessária de O₂ é 6/2=3 mol. A conclusão supõe reação completa e reagentes adequados."
      ],
      [
        "advanced",
        "Quantos gramas de CO₂ correspondem a 1,5×10²³ moléculas? Use N_A≈6×10²³ e M=44 g/mol.",
        "Converta primeiro moléculas em mols, depois mols em massa.",
        "n=N/N_A=1,5×10²³/(6×10²³)=0,25 mol. A massa é m=nM=0,25×44=11 g de CO₂."
      ]
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Membrana plasmática e transporte",
    "objective": "Relacionar a organização da membrana celular com permeabilidade seletiva, difusão, osmose e transporte ativo; analisar efeitos de meios hipotônicos e hipertônicos.",
    "sections": [
      {
        "title": "Bicamada lipídica e permeabilidade",
        "explanation": "A membrana plasmática delimita a célula e controla trocas com o ambiente. O modelo do mosaico fluido descreve uma bicamada de fosfolipídios com proteínas integradas ou associadas. As regiões hidrofílicas dos fosfolipídios voltam-se aos meios aquosos; as caudas hidrofóbicas ficam voltadas para o interior da bicamada. Pequenas moléculas apolares, como O₂, atravessam com relativa facilidade; íons e moléculas polares geralmente dependem de canais, carreadores ou outros mecanismos. Colesterol, nas membranas animais, e a composição lipídica influenciam fluidez. A permeabilidade seletiva não significa vedação absoluta.",
        "example": "Uma célula precisa absorver glicose, molécula polar. Em muitos tecidos, proteínas transportadoras GLUT permitem sua difusão facilitada seguindo o gradiente; o O₂ pode atravessar diretamente a bicamada. Ambos entram na célula, mas por mecanismos diferentes por causa das propriedades químicas.",
        "pitfall": "Imaginar a membrana como uma parede rígida ou supor que todas as substâncias atravessam livremente a bicamada."
      },
      {
        "title": "Difusão, osmose e gradientes",
        "explanation": "A difusão simples ocorre sem gasto direto de ATP, a favor de um gradiente de concentração ou eletroquímico. Na difusão facilitada, proteínas específicas mediam a passagem, mas o fluxo continua passivo. A osmose refere-se ao movimento líquido de água por uma membrana semipermeável, em resposta a diferenças de potencial hídrico e concentração de solutos. Em uma abordagem simplificada, uma célula animal em meio hipotônico tende a ganhar água e pode sofrer lise; em meio hipertônico tende a perder água e encolher. Células vegetais têm parede celular que contribui para a turgescência em meio hipotônico.",
        "example": "Uma hemácia colocada em meio muito hipotônico pode absorver água até se romper, enquanto em solução hipertônica perde água e se torna crenada. Já uma célula vegetal tende a ficar túrgida em meio hipotônico pela resistência da parede, não porque a membrana deixa de permitir passagem de água.",
        "pitfall": "Afirmar que na osmose o soluto atravessa para o lado de maior concentração; o processo envolve deslocamento de água e depende da permeabilidade da membrana."
      },
      {
        "title": "Bombas, transporte ativo e comunicação",
        "explanation": "O transporte ativo movimenta solutos contra gradientes e exige energia direta ou indiretamente. A bomba Na⁺/K⁺-ATPase de células animais hidrolisa ATP para transportar, por ciclo típico, três íons Na⁺ para fora e dois K⁺ para dentro, ajudando a manter gradientes essenciais à excitabilidade celular. Transportes secundários acoplam o fluxo favorável de um soluto ao movimento desfavorável de outro. Endocitose e exocitose envolvem vesículas e são importantes para entrada de partículas e secreção. Receptores de membrana também integram sinais químicos a respostas intracelulares.",
        "example": "A bomba Na⁺/K⁺ pode manter uma concentração elevada de K⁺ no citoplasma e de Na⁺ fora da célula, embora os gradientes favoreçam movimentos opostos. A glicose pode entrar com Na⁺ por cotransportadores em células intestinais; a energia imediata deriva do gradiente de Na⁺ mantido pela bomba.",
        "pitfall": "Considerar difusão facilitada como ativa apenas porque utiliza uma proteína; o critério central é a direção do fluxo e a fonte de energia."
      }
    ],
    "tasks": [
      [
        "basic",
        "Descreva a orientação das regiões hidrofílicas e hidrofóbicas dos fosfolipídios na membrana.",
        "Lembre que o interior e o exterior da célula contêm água.",
        "As cabeças hidrofílicas se orientam para os meios aquosos interno e externo; as caudas hidrofóbicas ficam frente a frente no interior da bicamada, formando barreira a muitos solutos polares."
      ],
      [
        "basic",
        "O que diferencia difusão simples de difusão facilitada? Ambas precisam de ATP?",
        "Observe o papel das proteínas transportadoras.",
        "Na simples, a passagem pode ocorrer diretamente pela bicamada; na facilitada, proteínas específicas fornecem passagem. Ambas são passivas, a favor do gradiente, sem gasto direto de ATP."
      ],
      [
        "intermediate",
        "Explique por que uma hemácia pode inchar em uma solução muito hipotônica.",
        "Compare o potencial osmótico de água dentro e fora da célula.",
        "Em meio hipotônico, há fluxo líquido de água para dentro da hemácia pela membrana. A célula incha e pode sofrer lise, pois não possui parede celular resistente como a de uma célula vegetal."
      ],
      [
        "intermediate",
        "Compare o comportamento de uma célula vegetal e uma célula animal colocadas em água relativamente hipotônica.",
        "Considere a presença de parede celular nas plantas.",
        "Ambas tendem a receber água; a animal pode se romper em condições extremas, enquanto a vegetal desenvolve pressão de turgor e a parede celular ajuda a limitar o aumento do volume."
      ],
      [
        "advanced",
        "Qual a estequiometria típica de transporte da Na⁺/K⁺-ATPase por ciclo e qual fonte energética é usada?",
        "A bomba faz transporte ativo primário.",
        "Por ciclo típico, a Na⁺/K⁺-ATPase transporta 3 Na⁺ para fora e 2 K⁺ para dentro, usando energia da hidrólise de ATP para manter gradientes eletroquímicos."
      ],
      [
        "advanced",
        "Por que o cotransporte de glicose com sódio no intestino é chamado de transporte ativo secundário?",
        "Analise de onde vem a energia para levar glicose contra seu gradiente.",
        "O Na⁺ entra a favor de seu gradiente e fornece energia ao transporte acoplado de glicose, que pode ocorrer contra seu gradiente. A bomba Na⁺/K⁺ mantém o gradiente, consumindo ATP indiretamente."
      ]
    ]
  },
  {
    "subject": "História",
    "topic": "Revolução Industrial",
    "objective": "Analisar causas e transformações da industrialização britânica, mudanças nas relações de trabalho, tecnologia, urbanização e movimentos de resistência, sem reduzir o processo a invenções isoladas.",
    "sections": [
      {
        "title": "Condições históricas da industrialização",
        "explanation": "A primeira Revolução Industrial iniciou-se na Grã-Bretanha, especialmente na segunda metade do século XVIII, e envolveu transformações graduais na produção têxtil, energia, transportes e organização do trabalho. A expansão das redes comerciais, disponibilidade de carvão, acumulação e mobilização de capitais, mudanças agrárias, mercados e instituições contribuíram para criar condições favoráveis. Não existe uma causa única: o papel do comércio atlântico e da exploração colonial integra os debates historiográficos. A fábrica reuniu trabalhadores e máquinas, reorganizando tempo, disciplina e controle do processo produtivo.",
        "example": "A fiação e a tecelagem, antes amplamente realizadas em oficinas e domicílios, passaram progressivamente a utilizar máquinas e força hidráulica ou a vapor em unidades fabris. Isso elevou a produtividade em determinados setores, mas não significou que todas as formas artesanais desapareceram imediatamente.",
        "pitfall": "Afirmar que uma única máquina ou um inventor isolado 'criou' a industrialização, ignorando fatores econômicos, sociais e políticos."
      },
      {
        "title": "Trabalho assalariado, cidade e desigualdade",
        "explanation": "A industrialização intensificou o assalariamento, a divisão do trabalho e a expansão de centros urbanos, com grandes diferenças regionais e cronológicas. Jornadas extensas, acidentes, trabalho infantil e condições sanitárias precárias foram problemas amplamente documentados em determinados contextos. O crescimento da produção não trouxe benefícios imediatos e iguais a todos. As transformações agrícolas e demográficas contribuíram para a mobilização de mão de obra, mas migrações e condições urbanas não se explicam exclusivamente por um fator. A experiência de operários, mulheres e crianças variou de acordo com setor e período.",
        "example": "Uma família que migra do campo para uma cidade industrial pode passar a depender de salários pagos por jornada em uma fábrica. A nova rotina submete o trabalho a horários e regras empresariais; se a renda é baixa, crianças e outros familiares podem ser pressionados a trabalhar, conforme as circunstâncias da época.",
        "pitfall": "Tratar toda a população trabalhadora britânica como se tivesse a mesma trajetória e ignorar diferenças de gênero, idade, região e período."
      },
      {
        "title": "Conflitos e transformação política",
        "explanation": "Trabalhadores criaram estratégias de resistência e organização: associações de ajuda mútua, protestos contra máquinas e condições de trabalho, sindicatos e movimentos por direitos políticos. O ludismo, do início do século XIX, não pode ser reduzido a simples 'medo da tecnologia', pois também expressava conflitos sobre salários, emprego e controle da produção. O cartismo mobilizou reivindicações por participação política na Grã-Bretanha. Reformas fabris e legislação trabalhista surgiram em disputas sociais ao longo do século XIX. Novas etapas industriais ampliaram uso de aço, eletricidade e indústria química, mas tiveram cronologias próprias.",
        "example": "Em uma análise de fonte, um panfleto operário contra a redução de salários e um discurso de um empresário favorável à mecanização expressam interesses diferentes. Comparar autoria, público-alvo, contexto e objetivos ajuda a compreender o conflito sem supor que qualquer documento represente todos os trabalhadores.",
        "pitfall": "Confundir a primeira fase industrial do século XVIII com a expansão da eletricidade e do petróleo, característica de transformações posteriores."
      }
    ],
    "tasks": [
      [
        "basic",
        "Indique duas condições que favoreceram a industrialização britânica no século XVIII e explique por que não basta citar a máquina a vapor.",
        "Considere energia, comércio, capital, recursos e relações de trabalho.",
        "O carvão e as redes comerciais e financeiras foram condições relevantes, articuladas a mudanças agrárias e técnicas. A máquina a vapor foi importante, mas seu uso ocorreu dentro de processos econômicos e sociais já em transformação."
      ],
      [
        "basic",
        "Explique uma mudança na organização do trabalho com o avanço das fábricas.",
        "Compare produção domiciliar e rotina fabril.",
        "A fábrica reuniu trabalhadores e equipamentos sob horários e disciplina mais uniformes, ampliando a divisão de tarefas e o controle empresarial. A mudança não ocorreu ao mesmo tempo em todos os setores."
      ],
      [
        "intermediate",
        "Por que aumento da produtividade industrial não significa melhoria imediata de vida para todos?",
        "Considere distribuição da renda, jornadas e moradia.",
        "A produção total podia crescer enquanto operários mantinham salários baixos, longas jornadas e riscos à saúde. Os ganhos econômicos foram distribuídos de modo desigual e alterados por conflitos sociais e reformas graduais."
      ],
      [
        "intermediate",
        "Explique por que a urbanização industrial deve ser analisada junto às transformações agrárias.",
        "Examine migrações e mudanças nas oportunidades de trabalho.",
        "Transformações no campo e pressões demográficas ampliaram a disponibilidade de mão de obra, e novas indústrias atraíram trabalhadores para cidades. As causas variavam e envolviam também mercado, instituições e redes familiares."
      ],
      [
        "advanced",
        "Interprete criticamente a afirmação: 'O ludismo demonstrou que os trabalhadores eram contra qualquer inovação'.",
        "Considere as relações de poder e os efeitos concretos das máquinas.",
        "A afirmação é reducionista. Muitos protestos ludistas relacionavam mecanização a redução de salários, perda de autonomia e piora das condições de trabalho; as ações ocorreram em contextos específicos, não como oposição abstrata a toda tecnologia."
      ],
      [
        "advanced",
        "Compare o papel de empresários e trabalhadores na industrialização sem supor um único interesse em cada grupo.",
        "Analise interesses de classe, diferenças internas e fontes.",
        "Investidores podiam buscar ampliação da produtividade e dos lucros; trabalhadores lutavam por renda, segurança e direitos. Porém, havia divergências internas entre ramos, empresas e categorias, exigindo estudo de documentos e condições concretas."
      ]
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Coordenadas geográficas",
    "objective": "Localizar pontos por latitude e longitude, reconhecer hemisférios e interpretar coordenadas e referências cartográficas sem confundir paralelos e meridianos.",
    "sections": [
      {
        "title": "Latitude, longitude e hemisférios",
        "explanation": "Coordenadas geográficas indicam posições na superfície terrestre por valores angulares. A latitude mede a distância angular em relação à linha do Equador e varia de 0° a 90° norte ou sul. A longitude mede a distância angular em relação ao meridiano de Greenwich e varia de 0° a 180° leste ou oeste. Paralelos são linhas de latitude constante; meridianos ligam os polos e indicam longitude constante. Os valores não são distâncias lineares diretas: um grau de longitude corresponde a distâncias diferentes conforme a latitude, aproximando-se de zero perto dos polos. Sempre indique hemisfério ou sinais corretamente.",
        "example": "Uma localização 23° S, 46° O está ao sul do Equador e a oeste de Greenwich. A latitude é 23° sul, não 46°; a longitude é 46° oeste, não 23°. Em representação com sinais, pode-se escrever aproximadamente latitude −23° e longitude −46°.",
        "pitfall": "Trocar o sentido de latitude e longitude ou assumir que cada grau de longitude equivale à mesma distância em qualquer lugar da Terra."
      },
      {
        "title": "Leitura de mapas e precisão",
        "explanation": "Uma grade cartográfica mostra paralelos e meridianos que permitem estimar coordenadas de pontos. A posição depende da projeção e da escala do mapa; linhas podem aparecer curvas em certas projeções. Graus podem ser subdivididos em minutos (1°=60′) e segundos (1′=60″), ou representados em graus decimais. Assim, 23°30′S equivale a 23,5°S, não a 23,30°S. Sistemas de navegação usam referências geodésicas: duas coordenadas com referenciais diferentes não devem ser tratadas automaticamente como idênticas em medições de alta precisão.",
        "example": "Converta 12°15′ N para graus decimais. Quinze minutos são 15/60=0,25 grau; a latitude é 12,25° N. Para 45°30′ O, a longitude é 45,5° O ou −45,5° em representação assinada.",
        "pitfall": "Converter 30 minutos para 0,30 grau em vez de 0,5 grau ou omitir a indicação de hemisfério."
      },
      {
        "title": "Aplicações e limites das coordenadas",
        "explanation": "Latitude e longitude são usadas em localização, logística, cartografia temática e navegação, mas não determinam sozinhas altitude, endereço ou distância percorrida. Uma rota depende do relevo, dos meios de transporte e dos trajetos disponíveis. A longitude também ajuda a compreender fusos horários, embora os fusos legais não coincidam exatamente com meridianos a cada 15°. Em atividades escolares, compare posições relativas: valores de latitude maiores em módulo significam estar mais longe do Equador, enquanto longitudes indicam separação angular em relação a Greenwich.",
        "example": "Ponto A em 10° N e ponto B em 30° N, ambos no mesmo meridiano, estão no hemisfério norte; B fica mais distante da linha do Equador. Se outro ponto está em 10° S, ele está em hemisfério diferente de A, embora ambos possuam 10° de latitude em módulo.",
        "pitfall": "Usar coordenadas como se fossem um endereço completo ou supor que fusos horários civis seguem exatamente faixas geométricas de 15°."
      }
    ],
    "tasks": [
      [
        "basic",
        "O que representam a latitude de 20° S e a longitude de 40° O de um ponto?",
        "Identifique o Equador e Greenwich como referências.",
        "Latitude de 20° S significa 20 graus angulares ao sul do Equador; longitude de 40° O significa 40 graus a oeste do meridiano de Greenwich."
      ],
      [
        "basic",
        "Diferencie paralelos de meridianos em relação às coordenadas.",
        "Um é usado para latitude e o outro para longitude.",
        "Paralelos são linhas de latitude constante, paralelas ao Equador. Meridianos ligam os polos e correspondem a longitudes constantes."
      ],
      [
        "intermediate",
        "Converta 15°30′ S para graus decimais assinados.",
        "Divida os minutos por 60 e aplique o sinal do hemisfério.",
        "30′=30/60=0,5°. Logo 15°30′ S=15,5° S, representado por −15,5° na convenção assinada para latitude."
      ],
      [
        "intermediate",
        "Entre 5° N e 50° N, qual ponto está mais distante do Equador? Explique.",
        "Compare o módulo das latitudes.",
        "O ponto a 50° N está angularmente mais distante do Equador do que o ponto a 5° N. Ambos pertencem ao hemisfério norte."
      ],
      [
        "advanced",
        "Por que um grau de longitude não representa a mesma distância em todos os paralelos?",
        "Pense no tamanho dos círculos paralelos ao Equador.",
        "Os paralelos diminuem de comprimento à medida que se aproximam dos polos. Assim, para uma mesma diferença angular de longitude, a distância leste-oeste é menor em latitudes elevadas."
      ],
      [
        "advanced",
        "Um aluno afirma que 12°30′ equivale a 12,30° decimais. Corrija o cálculo e explique.",
        "Minutos angulares têm base 60, e não base 100.",
        "12°30′=12+30/60=12,5°. O valor 12,30° decimal representa 12 graus mais 0,30 grau, ou 12°18′, e portanto não é equivalente."
      ]
    ]
  },
  {
    "subject": "Português",
    "topic": "Informações explícitas e inferências",
    "objective": "Distinguir enunciados literalmente apresentados de inferências justificadas, reconhecer limites de interpretação e sustentar respostas com evidências textuais.",
    "sections": [
      {
        "title": "Informação explícita e pista textual",
        "explanation": "Informações explícitas estão formuladas diretamente no texto, ainda que em linguagem indireta ou por meio de sinônimos. Localizá-las exige observar sujeito, verbos, marcadores temporais, relações de negação e termos que delimitam a afirmação. Em uma notícia, por exemplo, 'parte das escolas' não significa 'todas as escolas'; 'pode ocorrer' não garante que ocorreu. A compreensão também depende de referentes: na frase 'Ana encontrou Bia quando ela saiu da biblioteca', o pronome 'ela' pode exigir contexto para desfazer ambiguidade. O leitor deve reproduzir fielmente o alcance das afirmações, sem ampliá-las por opinião própria.",
        "example": "Texto original: 'A prefeitura informou que três unidades de saúde ampliarão o horário a partir de maio.' Informação explícita: três unidades foram anunciadas para ampliar o horário a partir de maio. Não se afirma que todos os postos da cidade mudarão, nem que a ampliação já começou antes de maio.",
        "pitfall": "Substituir qualificadores como 'alguns', 'poderá' e 'segundo a fonte' por afirmações universais ou certezas que o texto não oferece."
      },
      {
        "title": "Inferência lógica e pressupostos",
        "explanation": "Inferir é construir uma conclusão não declarada literalmente, apoiada em sinais do texto e compatível com o contexto. Inferência não é adivinhação nem conhecimento externo arbitrário. Pressupostos podem ser acionados por expressões específicas: dizer que 'Joana voltou a estudar' pressupõe que ela já estudava antes e interrompeu a atividade. Já 'Joana estudou novamente' evidencia repetição, mas seu contexto pode ser distinto. Na interpretação, o candidato precisa justificar a conclusão por um conjunto de evidências; uma leitura possível não equivale automaticamente à única leitura aceitável. Marcas de ironia e modalidade também podem mudar o sentido de frases aparentemente diretas.",
        "example": "Frase original: 'Apesar do céu escuro, os alunos permaneceram na quadra.' O conectivo 'apesar de' contrasta o céu escuro com a permanência dos alunos. É razoável inferir que havia expectativa de interromper a atividade, mas não é possível afirmar que começou a chover ou que a escola dispensou as turmas.",
        "pitfall": "Tratar uma hipótese plausível como fato confirmado, sobretudo quando depende de informações ausentes da passagem."
      },
      {
        "title": "Evidências, contexto e alternativas de prova",
        "explanation": "Questões de interpretação frequentemente oferecem alternativas que contêm palavras do texto, mas mudam relações lógicas. A resposta exige cotejar cada proposição com o trecho de apoio, distinguir paráfrase legítima de distorção e identificar conectivos de causa, concessão, conclusão e condição. Também é importante separar voz do autor, fala citada e opinião atribuída a terceiros. Uma frase como 'O pesquisador considera provável a mudança' não equivale a 'O estudo provou a mudança'. A compreensão global articula título, gênero, intenção comunicativa e detalhes, sem abandonar o rigor local da leitura.",
        "example": "Trecho: 'Se o projeto receber recursos, a escola poderá abrir mais duas turmas.' A alternativa 'A abertura depende da obtenção de recursos e ainda é apenas uma possibilidade' preserva a condição e a modalidade. A alternativa 'A escola abriu duas turmas porque recebeu recursos' inventa um fato consumado.",
        "pitfall": "Escolher alternativas por repetirem termos do enunciado sem conferir tempo verbal, modalidade e relações condicionais."
      }
    ],
    "tasks": [
      [
        "basic",
        "No enunciado 'Dois laboratórios estarão abertos aos sábados em dezembro', indique exatamente o que é informado.",
        "Atente para quantidade, período e tempo verbal.",
        "A frase informa que dois laboratórios estarão abertos aos sábados durante dezembro. Ela não diz que funcionarão todos os dias nem que serão abertos antes de dezembro."
      ],
      [
        "basic",
        "A frase 'Marina voltou a praticar natação' permite identificar um pressuposto? Explique.",
        "Observe o verbo 'voltar' e sua implicação temporal.",
        "Sim. A expressão pressupõe que Marina já praticava natação anteriormente e interrompeu essa prática. A frase não informa o motivo nem a duração da pausa."
      ],
      [
        "intermediate",
        "Interprete 'Embora o ônibus estivesse atrasado, o grupo chegou no horário' sem acrescentar fatos.",
        "Identifique a relação expressa por 'embora'.",
        "Há contraste entre o atraso do ônibus e a chegada do grupo no horário previsto. Não se sabe por que foi possível chegar a tempo, e não há base para concluir que usaram outro transporte."
      ],
      [
        "intermediate",
        "Diante de 'A empresa cogita ampliar o serviço', é correto afirmar 'A empresa já ampliou o serviço'? Justifique.",
        "Compare possibilidade ou intenção com realização comprovada.",
        "Não. 'Cogita' expressa consideração de uma possibilidade, sem indicar implementação. A alternativa altera a modalidade e transforma uma hipótese ou plano em fato consumado."
      ],
      [
        "advanced",
        "Compare 'O autor afirma que o plano funciona' e 'Segundo o gestor, o plano funciona'. O que muda na atribuição?",
        "Separe voz de quem escreve de fala relatada.",
        "Na primeira frase, a afirmação é atribuída diretamente ao autor. Na segunda, o autor relata a avaliação do gestor; isso não demonstra por si só que o narrador a endosse nem que haja comprovação independente."
      ],
      [
        "advanced",
        "Analise a afirmação: 'O estudo sugere uma relação entre sono e desempenho'; seria correto dizer que provou causalidade?",
        "Diferencie relação observada, sugestão e relação causal.",
        "Não. O verbo 'sugere' marca evidência limitada, e 'relação' pode ser associação sem prova causal. Para sustentar causalidade seriam necessários métodos e controles adicionais, não mencionados no enunciado."
      ]
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Narrador e foco narrativo",
    "objective": "Identificar vozes narrativas, focalização, grau de conhecimento e confiabilidade do narrador, relacionando escolhas formais aos efeitos de leitura.",
    "sections": [
      {
        "title": "Quem narra e quem percebe",
        "explanation": "O narrador é uma construção textual, não deve ser confundido automaticamente com o autor real. Narrativas podem apresentar narrador-personagem, que participa da história e costuma usar a primeira pessoa, ou narrador externo, que relata acontecimentos em terceira pessoa. Foco narrativo não é apenas pessoa gramatical: interessa saber por meio de qual consciência o leitor percebe fatos, emoções e limites de conhecimento. Uma terceira pessoa pode acompanhar de perto apenas uma personagem, restringindo o acesso a informações de outras. Já um narrador onisciente pode apresentar pensamentos de vários personagens, mas essa capacidade depende da técnica empregada.",
        "example": "Texto original A: 'Escondi a carta antes de entrar; temi que Clara a encontrasse.' Quem narra participa da ação e relata seu medo. Texto B: 'Clara viu o envelope, mas não percebeu que seu irmão escondia a carta.' O segundo narrador relata informações sobre personagens distintos que talvez nenhum dos dois reúna integralmente.",
        "pitfall": "Classificar toda narrativa em terceira pessoa como onisciente ou atribuir ao escritor real as opiniões do narrador ficcional."
      },
      {
        "title": "Focalização interna, externa e múltipla",
        "explanation": "A focalização interna privilegia a perspectiva de uma personagem, mesmo quando a história é contada em terceira pessoa: o leitor acompanha seus pensamentos, memórias e dúvidas. A focalização externa apresenta comportamentos observáveis sem acesso direto ao interior dos personagens. Uma obra pode alternar pontos de vista, produzindo versões contrastantes de um mesmo evento. O narrador pode omitir dados, antecipar acontecimentos ou recorrer a fluxo de consciência e discurso indireto livre. Analisar a técnica exige observar marcas textuais de percepção, julgamento, modalidade e acesso a pensamentos.",
        "example": "Trecho original: 'O relógio marcou sete. Paulo olhou para a porta, sem saber se alguém viria.' A terceira pessoa se aproxima da expectativa de Paulo. Se o texto dissesse apenas 'Paulo olhou para a porta e ajeitou o casaco', poderíamos reconhecer observação externa, sem a mesma indicação de seu estado mental.",
        "pitfall": "Supor que 'focalização interna' exige obrigatoriamente o pronome 'eu' ou que todo acesso a pensamento autoriza narrador onisciente."
      },
      {
        "title": "Narrador não confiável e efeitos de sentido",
        "explanation": "Narradores podem apresentar lembranças contraditórias, justificar seus atos, interpretar equivocadamente outros personagens ou esconder informações. Essa possibilidade constrói o chamado narrador não confiável, cuja versão precisa ser confrontada com outros indícios da obra. Não confiável não significa necessariamente mentiroso: limitações de memória, preconceito e incompreensão também afetam o relato. Em provas, é relevante distinguir acontecimento narrado, avaliação do narrador e pista que sugere uma interpretação alternativa. A escolha do ponto de vista pode criar suspense, empatia, ironia e ambiguidades deliberadas.",
        "example": "Texto original: 'Nunca gostei de exageros — apenas contei a todos, dez vezes, como fui injustiçado.' A insistência hiperbólica pode convidar o leitor a questionar a imagem de moderação construída pelo narrador. A leitura crítica identifica a tensão sem concluir que todos os fatos do relato sejam falsos.",
        "pitfall": "Tratar qualquer contradição textual como erro do autor, sem considerar a possibilidade de construção intencional de uma voz narrativa."
      }
    ],
    "tasks": [
      [
        "basic",
        "No trecho 'Abri a janela e ouvi a chuva', identifique o tipo de narrador e uma evidência textual.",
        "Observe a flexão do verbo 'abrir'.",
        "O narrador participa da cena e fala em primeira pessoa, evidenciada por 'abri' e 'ouvi'. É um narrador-personagem, embora o trecho não revele sua importância na trama."
      ],
      [
        "basic",
        "É correto afirmar que o narrador de um romance representa necessariamente a opinião do autor?",
        "Diferencie pessoa histórica e construção literária.",
        "Não. O autor real cria a narrativa, enquanto o narrador é uma voz textual com escolhas, limites e valores próprios. Suas posições podem divergir das intenções interpretadas do autor."
      ],
      [
        "intermediate",
        "Leia 'Lia entrou na sala e pensou que ninguém a esperava'. Que indício sugere focalização interna?",
        "Identifique o acesso ao pensamento de uma personagem.",
        "A expressão 'pensou que ninguém a esperava' informa um estado mental de Lia. A terceira pessoa aproxima a narração de sua percepção e não prova acesso aos pensamentos de todos."
      ],
      [
        "intermediate",
        "Qual a diferença entre 'O homem fechou a porta' e 'O homem fechou a porta, aliviado por estar só'?",
        "Compare ação observável com informação de estado interior.",
        "O primeiro enunciado relata um comportamento visível; o segundo acrescenta estado interior e motivo associado. A focalização e o grau de acesso narrativo se ampliam."
      ],
      [
        "advanced",
        "Um narrador diz ser imparcial, mas descreve apenas defeitos de quem discorda dele. Como analisar sua confiabilidade?",
        "Confronte autodescrição e escolhas linguísticas.",
        "Há discrepância entre a autodeclaração de imparcialidade e a seleção unilateral de traços negativos. A análise deve confrontar outras pistas e não assumir automaticamente a verdade de seu relato."
      ],
      [
        "advanced",
        "Por que alternar narradores pode modificar nossa avaliação de um conflito ficcional?",
        "Considere informação e interesses de cada perspectiva.",
        "Cada narrador dispõe de memórias, informações e valores distintos. A alternância pode revelar omissões e contradições, ampliando a interpretação e impedindo que uma única versão seja tomada como definitiva."
      ]
    ]
  },
  {
    "subject": "Redação",
    "topic": "Formulação de tese",
    "objective": "Construir teses pertinentes, delimitadas e defensáveis para textos argumentativos, articulando recorte temático, posicionamento e eixos de desenvolvimento.",
    "sections": [
      {
        "title": "Tema, problema e tese",
        "explanation": "A proposta de redação delimita uma questão, mas não oferece necessariamente uma tese pronta. Tese é o posicionamento central que o texto defenderá mediante razões e evidências. Ao ler o tema, identifique o substantivo principal, os recortes sociais e temporais, o gênero pedido e possíveis restrições de comando. Uma tese precisa ser discutível e específica: 'A educação é importante' tende a ser vaga, enquanto 'A desigualdade de acesso a recursos digitais agrava diferenças de aprendizagem entre escolas' estabelece uma relação que pode ser investigada. A tese não deve antecipar dados fabricados ou conclusões que o desenvolvimento não sustentará.",
        "example": "Tema hipotético: 'Desafios para ampliar a leitura entre adolescentes'. Tese genérica: 'Ler faz bem'. Tese produtiva: 'A ampliação do acesso a bibliotecas e a mediação de leitura nas escolas são condições decisivas para formar hábitos leitores entre adolescentes'. Ela indica dois eixos concretos para argumentação.",
        "pitfall": "Confundir repetição do tema com tese, escrever uma declaração indiscutível ou abrir mais ideias do que o desenvolvimento será capaz de sustentar."
      },
      {
        "title": "Recorte e eixos argumentativos",
        "explanation": "Uma tese pode organizar dois ou três eixos complementares, desde que cada um seja desenvolvido com explicação causal, exemplos e evidências confiáveis. O recorte é essencial: falar de 'violência' em geral pode ultrapassar uma proposta sobre violência no ambiente escolar. A formulação também deve separar causas, consequências e propostas de intervenção; a tese não precisa listar soluções detalhadas antes da argumentação. O autor pode assumir posição nuançada, reconhecendo limites e exceções, sem perder clareza. Conectivos e escolhas verbais devem refletir a força real das alegações: 'contribui para' não equivale sempre a 'determina'.",
        "example": "Tema: 'Uso de tecnologia na aprendizagem'. Tese equilibrada: 'Tecnologias educacionais podem ampliar oportunidades, mas seu impacto depende de formação docente e acesso equitativo'. O primeiro desenvolvimento pode discutir formação e uso pedagógico; o segundo, desigualdades de infraestrutura e conexão.",
        "pitfall": "Anunciar dois argumentos na tese e desenvolver assuntos não relacionados, provocando quebra de progressão textual."
      },
      {
        "title": "Qualidade da tese e revisão",
        "explanation": "Uma tese sólida enfrenta três testes: pertinência ao tema, justificabilidade pelas evidências disponíveis e organização coerente do texto. Releia o comando e pergunte: 'o meu posicionamento realmente responde ao problema proposto?'; 'meus parágrafos comprovam cada parte dele?'; 'há generalização indevida ou contradição?' Em redações do ENEM, a discussão deve dialogar com o tema e os critérios da prova, mas o texto não deve usar repertório decorativo ou inventar estatísticas. Redação é construção argumentativa: reescrever a tese após produzir os parágrafos pode ser necessário para manter a unidade. Em gêneros diferentes, a posição pode ser apresentada por estratégias distintas.",
        "example": "Tese inicial: 'O transporte público é ruim porque ninguém investe'. Após analisar dados de infraestrutura e gestão, versão mais precisa: 'A insuficiência de investimento contínuo e as falhas de planejamento comprometem a qualidade do transporte público em diferentes centros urbanos'. A revisão diminui a generalização e explicita mecanismos discutíveis.",
        "pitfall": "Manter uma tese absoluta, como 'sempre' ou 'nunca', sem provas que sustentem universalidade e desconsiderar argumentos contrários."
      }
    ],
    "tasks": [
      [
        "basic",
        "Transforme a frase vaga 'A internet é importante' em uma tese sobre educação digital com posicionamento definido.",
        "Delimite público, problema e relação causal.",
        "Exemplo de tese: 'O acesso desigual à internet prejudica oportunidades de aprendizagem de estudantes de escolas públicas, exigindo políticas de conectividade e formação digital'. A frase indica posição e recorte."
      ],
      [
        "basic",
        "Identifique a diferença entre tema e tese no assunto 'Acesso a bibliotecas escolares'.",
        "O tema indica assunto; a tese apresenta julgamento defensável.",
        "Tema é o eixo 'acesso a bibliotecas escolares'. Uma tese possível é 'A ampliação de bibliotecas e de programas de mediação fortalece a formação leitora', porque sustenta uma posição passível de argumentação."
      ],
      [
        "intermediate",
        "Escreva uma tese com dois eixos para o tema hipotético 'Desinformação nas redes sociais'.",
        "Escolha duas dimensões complementares e sustentáveis.",
        "Exemplo: 'A redução da desinformação exige alfabetização midiática e maior transparência nos mecanismos de circulação de conteúdos'. Os eixos são formação crítica dos usuários e responsabilidade informacional das plataformas."
      ],
      [
        "intermediate",
        "Explique por que a tese 'Todos os jovens deixam de ler por causa do celular' é argumentativamente frágil.",
        "Avalie universalizações e causalidade não demonstrada.",
        "A afirmação usa 'todos' e atribui uma causa única sem evidência. Uma versão mais defensável pode discutir como padrões de uso digital influenciam práticas de leitura em grupos específicos."
      ],
      [
        "advanced",
        "Analise se 'A educação deve melhorar' é suficiente como tese em redação sobre evasão escolar.",
        "Verifique se responde ao problema proposto e permite eixos concretos.",
        "É insuficiente: não delimita evasão, causas nem posicionamento específico. Melhor: 'A precariedade das condições de permanência e a baixa articulação entre escola e famílias dificultam a redução da evasão escolar'."
      ],
      [
        "advanced",
        "Uma redação defende que a mobilidade urbana depende de planejamento, mas os parágrafos tratam somente de poluição. Como revisar a tese ou o desenvolvimento?",
        "Compare promessa argumentativa e provas efetivamente apresentadas.",
        "O texto está desalinhado. Pode reformular o desenvolvimento para discutir infraestrutura e integração de transportes, ou restringir a tese aos efeitos ambientais do planejamento, mantendo coerência entre partes."
      ]
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Skimming e scanning",
    "objective": "Distinguir estratégias de leitura global e localização pontual de informações em inglês e aplicá-las a textos com finalidade comunicativa identificável.",
    "sections": [
      {
        "title": "Leitura global: skimming",
        "explanation": "Skimming é uma leitura rápida para compreender tema geral, gênero, propósito e organização de um texto sem traduzir cada palavra. Leitores observam título, subtítulos, primeiras frases de parágrafos, destaques tipográficos, imagens e conclusão. Em uma notícia sobre energia solar, reconhecer termos recorrentes como 'solar panels', 'costs' e 'households' ajuda a identificar a ideia central mesmo que algumas palavras sejam desconhecidas. O processo não autoriza inventar detalhes: skimming permite formular uma hipótese sobre a mensagem global, que precisa ser confirmada pela leitura cuidadosa quando uma questão exige precisão.",
        "example": "Texto original: 'New bike lanes open downtown. The city says the routes will connect schools and parks. Officials expect more residents to cycle.' Uma leitura global identifica o tema — ciclovias urbanas — e o propósito informativo, sem precisar traduzir palavra por palavra a estrutura inteira.",
        "pitfall": "Usar skimming como justificativa para não ler trechos necessários ao responder uma questão sobre número, condição ou negação."
      },
      {
        "title": "Busca pontual: scanning",
        "explanation": "Scanning consiste em percorrer visualmente um texto para localizar uma informação específica, como data, horário, preço, porcentagem, nome próprio ou termo equivalente ao enunciado. Antes de buscar, identifique a categoria da informação: se a pergunta contém 'when', procure marcadores temporais; se contém 'how much', números e moeda; se pergunta 'where', expressões de lugar. Porém, o texto pode usar paráfrases em vez das palavras exatas da pergunta. Após localizar o trecho, leia a frase completa e o entorno para evitar erros com palavras como 'not', 'unless', 'before' e 'after'.",
        "example": "Aviso original: 'The museum is open Tuesday to Sunday, 9 a.m. to 5 p.m. Admission is free on Wednesdays.' Para 'When is admission free?', scanning localiza 'Wednesdays'; uma leitura de contexto confirma que o benefício não vale todos os dias.",
        "pitfall": "Achar uma palavra isolada parecida com a da pergunta e ignorar modificadores que alteram seu sentido."
      },
      {
        "title": "Escolha estratégica e inferência contextual",
        "explanation": "Skimming e scanning são complementares. Primeiro, a leitura global indica o mapa do texto; depois, a leitura seletiva localiza dados. Questões de inferência e intenção do autor exigem leitura mais profunda: identificar apenas números não resolve uma pergunta sobre posicionamento. Em exames, cognatos podem ajudar, mas falsos cognatos como 'actually' (na verdade) e 'library' (biblioteca) pedem atenção. A estrutura sintática, conectores ('however', 'therefore', 'although') e o gênero orientam uma leitura eficiente e fundamentada. Uma estratégia só funciona quando corresponde ao tipo de pergunta.",
        "example": "Um e-mail informa: 'Although the workshop is free, participants must register by Friday.' Skimming mostra que o texto trata de uma oficina; scanning identifica o prazo 'Friday'. A leitura contextual de 'although' e 'must' esclarece que a gratuidade não elimina a obrigação de inscrição.",
        "pitfall": "Substituir análise contextual por tradução mecânica ou tratar uma estratégia de busca pontual como resposta suficiente a questões argumentativas."
      }
    ],
    "tasks": [
      [
        "basic",
        "Leia 'Library opens at 8 a.m. on Monday'. Qual estratégia permite localizar rapidamente o horário e qual é a resposta?",
        "Procure informação pontual de hora.",
        "Use scanning para localizar '8 a.m.'. A abertura é às oito da manhã na segunda-feira. 'Library' significa biblioteca, não livraria."
      ],
      [
        "basic",
        "Um texto tem título 'How cities save water' e subtítulos sobre consumo e desperdício. Qual estratégia usar primeiro para identificar o tema?",
        "Observe a finalidade da leitura global.",
        "Skimming ajuda a reconhecer que o texto trata de economia de água em cidades, utilizando título e subtítulos. Depois uma leitura mais detalhada pode localizar os argumentos."
      ],
      [
        "intermediate",
        "No aviso 'Classes start on September 12, not September 10', qual é a data correta?",
        "Atenção à negação antes da primeira data.",
        "A data correta é 12 de setembro. Scanning localiza as duas datas, mas a leitura da frase inteira mostra que 'not September 10' nega a primeira possibilidade."
      ],
      [
        "intermediate",
        "Interprete 'The event is free, but registration is required' sem distorcer a condição.",
        "Leia o conectivo 'but' e o adjetivo 'required'.",
        "O evento é gratuito, mas a inscrição é obrigatória. O contraste indica que gratuidade não significa acesso sem registro."
      ],
      [
        "advanced",
        "Por que scanning sozinho não responde bem à pergunta 'What is the author's attitude toward the policy?'",
        "A questão pede atitude e não um dado pontual.",
        "A atitude do autor exige analisar escolhas lexicais, estrutura argumentativa e contexto. Scanning pode localizar marcas relevantes, mas não substitui compreensão global e interpretação."
      ],
      [
        "advanced",
        "No trecho 'Although sales increased, profits fell due to higher costs', qual é a relação principal?",
        "Reconheça oposição e causalidade.",
        "As vendas cresceram, mas os lucros caíram por causa dos custos maiores. 'Although' expressa concessão e 'due to' indica causa; a leitura cuidadosa evita concluir que vendas e lucros aumentaram juntos."
      ]
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Cognatos e falsos cognatos em espanhol",
    "objective": "Reconhecer semelhanças lexicais verdadeiras e enganosas entre espanhol e português, usando contexto para interpretar significados e evitar tradução mecânica.",
    "sections": [
      {
        "title": "Cognatos e semelhança entre línguas",
        "explanation": "Português e espanhol compartilham raízes latinas e muitos vocábulos próximos, como 'importante', 'familia' e 'universidad'. Essas semelhanças facilitam hipóteses de leitura, mas cognato não significa equivalência perfeita em todos os contextos. Palavras podem mudar de significado conforme a região, o registro e a situação comunicativa. A interpretação confiável considera oração completa, gênero textual e relações semânticas. Nem toda palavra com grafia parecida tem a mesma acepção, e nem toda palavra diferente é semanticamente distante. Um leitor competente verifica hipóteses antes de responder questões de vestibular.",
        "example": "Na frase original 'La universidad anunció nuevas becas para estudiantes', 'universidad' e 'estudiantes' são palavras transparentes ou próximas do português. 'Becas', porém, significa bolsas de estudo, informação que pode ser inferida pelo contexto acadêmico e não por semelhança gráfica imediata.",
        "pitfall": "Usar a aparência de uma única palavra como prova absoluta de seu significado, sem examinar relações sintáticas e contextuais."
      },
      {
        "title": "Falsos cognatos frequentes",
        "explanation": "Falsos cognatos, também chamados falsos amigos, são palavras semelhantes na forma, mas que possuem sentidos diferentes. 'Embarazada' geralmente significa grávida, e não embaraçada; 'apellido' é sobrenome; 'oficina' costuma ser escritório, e não oficina mecânica; 'exquisito' pode significar delicioso ou requintado. O uso depende do contexto e da variedade regional. Em vez de decorar listas desconectadas, analise situações em que um sentido faz mais sentido que outro. O próprio contexto pode apresentar pistas sem exigir tradução palavra por palavra.",
        "example": "Frase original: 'En la oficina, Ana escribió su apellido en el formulario.' Tradução contextual: 'No escritório, Ana escreveu seu sobrenome no formulário'. Traduzir 'oficina' como local de conserto e 'apellido' como apelido geraria uma leitura equivocada.",
        "pitfall": "Traduzir 'embarazada' como envergonhada ou 'apellido' como apelido mesmo quando o contexto indica gravidez e identificação civil."
      },
      {
        "title": "Estratégias de inferência e variação regional",
        "explanation": "Ao encontrar um termo desconhecido, identifique a classe gramatical e as palavras com que se relaciona. Em 'El profesor corrigió las respuestas', o verbo 'corrigió' e o objeto 'respuestas' orientam a interpretação. Observe também variedades do espanhol: 'ordenador' é comum na Espanha para computador, enquanto 'computadora' é frequente em outras regiões; ambas podem aparecer em textos legítimos. Evite tratar uma variedade como universal. Nas provas, o objetivo é compreender o sentido relevante na passagem, não substituir cada palavra por um equivalente fixo. Se necessário, contraste duas hipóteses de tradução e escolha a coerente.",
        "example": "Trecho original: 'El conductor paró el carro frente al colegio.' Dependendo da variedade, 'carro' pode referir-se a automóvel, enquanto 'colegio' indica instituição de ensino. A cena de um motorista parando diante de uma escola ajuda a resolver o sentido sem depender de falsa equivalência com 'colégio' apenas.",
        "pitfall": "Supor que o espanhol de uma região esgota a língua ou ignorar que um mesmo vocábulo pode ter sentidos diferentes conforme a comunidade."
      }
    ],
    "tasks": [
      [
        "basic",
        "Traduza o sentido de 'apellido' em 'Escriba su apellido en el formulario'.",
        "Considere a informação solicitada em documentos.",
        "'Apellido' significa sobrenome, portanto a instrução pede escrever o sobrenome no formulário. Não pede um apelido informal."
      ],
      [
        "basic",
        "Qual é o sentido habitual de 'embarazada' em espanhol? Explique o falso cognato.",
        "Compare a forma com o uso real da palavra.",
        "'Embarazada' significa grávida. A semelhança com 'embaraçada' do português pode enganar, mas os sentidos usuais são diferentes."
      ],
      [
        "intermediate",
        "Em 'El médico trabaja en una oficina', qual interpretação de 'oficina' é mais natural no contexto?",
        "Diferencie local administrativo de local de reparos.",
        "Em espanhol, 'oficina' normalmente indica escritório ou sala de trabalho administrativo. A frase não descreve necessariamente uma oficina mecânica."
      ],
      [
        "intermediate",
        "Por que 'exquisito' não deve ser traduzido automaticamente por 'esquisito'?",
        "Pense no contexto de avaliação de comida.",
        "'Exquisito' pode descrever algo delicioso, refinado ou requintado; não significa necessariamente estranho. A interpretação deve observar o que está sendo qualificado."
      ],
      [
        "advanced",
        "Explique como a frase 'La empresa ofrece becas a alumnos' permite inferir 'becas'.",
        "Identifique contexto de estudantes e benefício oferecido.",
        "'Becas' significa bolsas de estudo no contexto acadêmico. A associação entre empresa, oferta e alunos orienta a interpretação, sem depender de uma tradução literal equivocada."
      ],
      [
        "advanced",
        "Analise duas palavras para computador usadas em variedades do espanhol e o cuidado necessário na leitura.",
        "Variedades regionais legítimas podem usar formas diferentes.",
        "'Ordenador' aparece com frequência na Espanha, enquanto 'computadora' é comum em diversos países latino-americanos. Ambas podem nomear computador, e a variante deve ser interpretada pelo contexto."
      ]
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Sócrates e os sofistas",
    "objective": "Diferenciar aspectos da investigação socrática e do ensino sofístico no contexto ateniense, considerando fontes, argumentação, retórica e limites de generalização.",
    "sections": [
      {
        "title": "Atenas, debate público e educação",
        "explanation": "No século V a.C., a vida pública de Atenas incentivou debates sobre educação, virtude, política e uso da palavra. Sofistas como Protágoras e Górgias atuavam como professores e especialistas em argumentação, frequentemente recebendo remuneração, mas constituíam um grupo heterogêneo. Sócrates, conhecido sobretudo por relatos de Platão e Xenofonte, tornou-se associado à investigação das definições e ao exame crítico de crenças. Não é adequado representar todos os sofistas como enganadores, pois parte desse retrato provém de adversários filosóficos. Também não possuímos textos escritos diretamente por Sócrates, o que impõe cautela histórica na atribuição de teses.",
        "example": "Imagine uma assembleia debatendo se uma lei é justa. Um professor de retórica pode treinar cidadãos para defender argumentos eficazmente em público; uma investigação socrática perguntaria o que significa 'justiça', procurando inconsistências nas respostas. São práticas que podem se cruzar, e não categorias totalmente isoladas.",
        "pitfall": "Repetir a fórmula 'Sócrates buscava a verdade e todos os sofistas defendiam mentiras', sem considerar a diversidade intelectual e a parcialidade das fontes."
      },
      {
        "title": "Pergunta, refutação e aporia",
        "explanation": "A conversação socrática frequentemente começa com uma pergunta conceitual: 'O que é coragem?' ou 'O que é virtude?'. O interlocutor oferece definição, Sócrates testa sua consistência por exemplos e contraexemplos e a resposta pode chegar a uma aporia, uma dificuldade assumida sem solução definitiva. O procedimento de exame e refutação é por vezes chamado elenchus. A ironia socrática e a maiêutica aparecem em interpretações posteriores e diálogos específicos; não se deve tratá-las como roteiro rígido de todas as conversas históricas. O valor filosófico reside em reconhecer pressupostos e revisar afirmações contraditórias.",
        "example": "Se alguém define coragem como 'não sentir medo', pode-se apresentar o caso de quem reconhece o perigo, sente medo e ainda assim age para proteger outra pessoa. O contraexemplo mostra que a definição inicial é insuficiente e precisa ser refinada, não que toda coragem tenha sido definitivamente definida.",
        "pitfall": "Entender que a refutação automática de uma definição prova sua negação absoluta ou que todo diálogo socrático alcança consenso final."
      },
      {
        "title": "Retórica, relativismo e crítica das fontes",
        "explanation": "Protágoras é associado à conhecida formulação de que o ser humano é medida das coisas, frequentemente interpretada no debate sobre relativismo; o sentido preciso exige análise das fontes antigas e de seus contextos. Górgias discutiu potência da linguagem e persuasão, mostrando como o discurso pode influenciar crenças. Sócrates aparece em diálogos platônicos questionando a relação entre persuasão, conhecimento e virtude. Na leitura filosófica, diferencie argumento válido, argumento persuasivo e conhecimento justificado; um discurso pode persuadir sem demonstrar. Compare reconstruções historiográficas e evite atribuir a todos os sofistas uma mesma doutrina.",
        "example": "Num tribunal hipotético, duas falas podem emocionar o público com intensidade diferente. Uma análise retórica descreve recursos de persuasão; uma análise lógica pergunta se as conclusões decorrem das premissas e quais evidências sustentam as acusações. O efeito persuasivo, por si só, não assegura verdade.",
        "pitfall": "Confundir habilidade retórica com prova lógica e reproduzir avaliações de Platão sobre sofistas como fatos neutros e incontestados."
      }
    ],
    "tasks": [
      [
        "basic",
        "Qual problema histórico surge ao afirmar com certeza que Sócrates escreveu determinada obra?",
        "Considere a transmissão de seus ensinamentos.",
        "Não há obras filosóficas escritas por Sócrates preservadas como sua autoria; grande parte de nossas informações vem de relatos de outros autores, especialmente Platão e Xenofonte. As atribuições exigem cautela."
      ],
      [
        "basic",
        "Explique por que os sofistas não devem ser tratados como um grupo intelectualmente uniforme.",
        "Compare interesses e autores distintos.",
        "'Sofistas' designa figuras diferentes, com métodos e ideias próprios, como Protágoras e Górgias. Reuni-los em uma única doutrina ignora divergências e efeitos de fontes adversariais."
      ],
      [
        "intermediate",
        "Um aluno define justiça como 'fazer sempre o que a maioria decide'. Proponha uma pergunta socrática que teste a definição.",
        "Use um contraexemplo que desafie a universalidade.",
        "Uma pergunta possível é: 'Se a maioria decidir punir um inocente, a decisão ainda será justa?' O contraexemplo força o aluno a repensar se a vontade majoritária basta como critério de justiça."
      ],
      [
        "intermediate",
        "Por que chegar a uma aporia não representa necessariamente fracasso filosófico?",
        "O objetivo pode ser expor pressupostos inconsistentes.",
        "A aporia mostra que a resposta inicial enfrenta dificuldades e que conceitos aparentemente claros exigem investigação. Reconhecer limites do próprio conhecimento pode orientar novas perguntas."
      ],
      [
        "advanced",
        "Diferencie persuasão de demonstração em uma discussão pública.",
        "Avalie conexão lógica entre premissas e conclusão.",
        "Persuasão descreve o efeito de convencer um público; demonstração requer relação justificável entre premissas, argumentos e conclusão. Um discurso emocional pode persuadir sem estabelecer validade ou verdade."
      ],
      [
        "advanced",
        "Analise a dificuldade de reconstruir a posição histórica dos sofistas a partir de diálogos platônicos.",
        "Identifique autoria, intenção e perspectiva da fonte.",
        "Diálogos de Platão são textos filosófico-literários com escolhas de representação. Eles fornecem evidências importantes, mas podem valorizar a perspectiva socrática e criticar adversários; precisam ser confrontados com outras fontes."
      ]
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Durkheim: fato social e solidariedade",
    "objective": "Explicar fato social e seus atributos, diferenciar solidariedade mecânica e orgânica e relacionar divisão social do trabalho, instituições e integração social.",
    "sections": [
      {
        "title": "Fatos sociais e método sociológico",
        "explanation": "Émile Durkheim definiu fatos sociais como modos de agir, pensar e sentir externos aos indivíduos e dotados de poder de coerção, além de apresentarem generalidade no interior de uma coletividade. Leis, sistemas escolares e convenções de linguagem podem ser analisados sociologicamente porque antecedem o indivíduo e orientam comportamentos por sanções ou expectativas. 'Coerção' não se limita à força policial: inclui pressões difusas como reprovação social. Em As Regras do Método Sociológico, Durkheim defendeu tratar fatos sociais como coisas, isto é, investigá-los como objetos com critérios e evidências, em vez de reduzi-los a impressões subjetivas.",
        "example": "Uma escola estabelece horários e regras de frequência antes da matrícula de um aluno. A instituição organiza sua conduta e pode aplicar consequências por atrasos. A regra não depende da vontade isolada do aluno e representa um exemplo didático de pressão social institucionalizada.",
        "pitfall": "Supor que fato social só existe quando há polícia ou que todo hábito individual, por ser repetido, é automaticamente fato social."
      },
      {
        "title": "Solidariedade mecânica e orgânica",
        "explanation": "Na teoria durkheimiana, solidariedade designa os vínculos que integram uma sociedade. Solidariedade mecânica predominaria em contextos de menor diferenciação funcional, nos quais semelhanças de crenças e práticas sustentam forte consciência coletiva. Solidariedade orgânica está relacionada a maior divisão do trabalho e interdependência entre funções especializadas: pessoas dependem de atividades de outras para manter a vida social. Não se trata de superioridade moral automática de um tipo; são categorias analíticas para comparar formas de coesão. A associação entre organização social e tipos de direito também integra o argumento de Durkheim.",
        "example": "Em uma sociedade com funções produtivas pouco diferenciadas, a coesão pode estar ligada a crenças e costumes compartilhados. Em uma cidade moderna, agricultores, profissionais de saúde, professores, transportadores e técnicos exercem funções distintas, mas dependem reciprocamente do trabalho uns dos outros.",
        "pitfall": "Interpretar solidariedade mecânica como máquinas ou orgânica como biologia literal; os nomes são analogias sociológicas de formas de integração."
      },
      {
        "title": "Anomia, diferenciação e crítica",
        "explanation": "A crescente especialização pode intensificar interdependências, mas também gerar desregulação quando normas e expectativas não acompanham as transformações sociais; Durkheim relacionou esse risco à anomia. A integração não resulta automaticamente da divisão do trabalho: é preciso examinar instituições, regras, conflitos e desigualdades. Em A Divisão do Trabalho Social, a questão central inclui o que mantém grupos coesos em meio à diferenciação. Em análises atuais, suas categorias podem ser comparadas a interpretações de conflito e poder de outras tradições sociológicas; a aplicação deve evitar tratar mudanças históricas complexas como evolução linear inevitável.",
        "example": "Quando uma atividade econômica se transforma rapidamente, pessoas podem enfrentar regras pouco claras sobre direitos e obrigações. O caso hipotético ajuda a discutir anomia como enfraquecimento de orientação normativa, mas não prova que todo conflito moderno resulte de falta de normas.",
        "pitfall": "Reduzir anomia a ausência absoluta de leis ou afirmar que mais especialização elimina automaticamente desigualdades e conflitos sociais."
      }
    ],
    "tasks": [
      [
        "basic",
        "Explique exterioridade e coerção de um fato social usando um exemplo escolar.",
        "Pense em regras existentes antes da chegada do estudante.",
        "O regulamento escolar existe antes da matrícula do aluno e expressa exterioridade; expectativas de frequência e sanções por descumprimento ilustram coerção social e institucional, sem depender apenas de força física."
      ],
      [
        "basic",
        "Por que um gosto individual não é necessariamente um fato social para Durkheim?",
        "Procure generalidade, exterioridade e coerção.",
        "Uma preferência isolada não apresenta necessariamente origem exterior, generalidade ou pressão coletiva. Para caracterizar fato social é preciso analisar padrões compartilhados e mecanismos sociais de imposição."
      ],
      [
        "intermediate",
        "Compare solidariedade mecânica e orgânica em termos de integração.",
        "Diferencie semelhança coletiva de especialização funcional.",
        "A mecânica se fundamenta em semelhanças de crenças e práticas, enquanto a orgânica decorre sobretudo da interdependência entre funções sociais diferenciadas. São modelos analíticos, não rótulos de valor."
      ],
      [
        "intermediate",
        "Explique por que a divisão do trabalho pode gerar interdependência.",
        "Considere funções especializadas que dependem umas das outras.",
        "Em uma sociedade complexa, ninguém produz isoladamente todos os bens e serviços que utiliza. As funções especializadas criam relações de dependência recíproca entre pessoas e organizações."
      ],
      [
        "advanced",
        "Uma transformação econômica rápida desorganiza expectativas sobre direitos e deveres. Qual conceito durkheimiano ajuda a analisar o problema?",
        "Considere a insuficiência de normas reguladoras.",
        "Anomia designa um estado de regulação social fragilizada ou inadequada. O conceito permite analisar problemas de integração quando normas e instituições não acompanham transformações, mas exige contexto empírico."
      ],
      [
        "advanced",
        "Por que é incorreto concluir que a solidariedade orgânica elimina conflitos e desigualdades?",
        "Diferencie interdependência de harmonia completa.",
        "A especialização aumenta dependências, mas não impede assimetrias de poder, conflitos distributivos e fragilidades normativas. A coesão precisa ser examinada juntamente com formas concretas de regulação e desigualdade."
      ]
    ]
  },
  {
    "subject": "Arte",
    "topic": "Elementos visuais: ponto, linha, cor, forma e textura",
    "objective": "Descrever e analisar ponto, linha, cor, forma e textura em produções visuais, relacionando composição, contraste, técnica e efeitos expressivos.",
    "sections": [
      {
        "title": "Ponto, linha e construção visual",
        "explanation": "O ponto pode marcar posição, criar ritmo e organizar áreas de concentração no campo visual. A linha estabelece direção, delimita contornos e conduz o olhar; linhas verticais, horizontais ou diagonais produzem relações compositivas distintas, embora nenhum significado seja universal. Formas podem ser geométricas ou orgânicas e se organizar por repetição, sobreposição e contraste. Em uma obra, esses elementos interagem com escala, espaço negativo e enquadramento. Análise visual é descrição fundamentada antes de interpretação pessoal: identificar o que realmente aparece ajuda a justificar efeitos de movimento, equilíbrio, tensão ou repouso.",
        "example": "Imagine um cartaz original com uma única linha diagonal espessa, vários pontos pequenos no canto inferior e um círculo grande no topo. A diagonal direciona o olhar, os pontos criam ritmo e o círculo pode funcionar como foco compositivo pela escala. O efeito deve ser analisado dentro do contexto do cartaz.",
        "pitfall": "Afirmar que toda diagonal 'significa violência' ou que um ponto isolado possui o mesmo sentido em qualquer obra, sem examinar a composição."
      },
      {
        "title": "Cor, luz e relações cromáticas",
        "explanation": "Cor envolve tonalidade, saturação e luminosidade. Relações entre cores podem estabelecer contraste, continuidade, hierarquia e atmosfera; cores complementares, como pares opostos em certas rodas cromáticas, produzem contraste notável, mas sua percepção depende de materiais, iluminação e contexto cultural. Em produção digital, as cores são frequentemente representadas por componentes RGB de luz; pigmentos de impressão usam sistemas de mistura subtrativa, como CMYK, com propriedades práticas diferentes. Uma imagem de baixa saturação pode sugerir outra atmosfera que a mesma composição em cores intensas, sem que haja interpretação única ou obrigatória.",
        "example": "Um infográfico original coloca títulos em azul-escuro sobre fundo claro e dados-chave em laranja de forte contraste. A diferença de luminosidade e tonalidade orienta a hierarquia de leitura. Se o título e o fundo tivessem contraste insuficiente, a legibilidade diminuiria, independentemente do gosto estético.",
        "pitfall": "Confundir modelos físicos de luz e pigmento ou reduzir interpretações cromáticas a regras universais como 'vermelho sempre significa perigo'."
      },
      {
        "title": "Textura, materialidade e leitura crítica",
        "explanation": "Textura pode ser tátil, relacionada à superfície real do objeto, ou visual, simulada por marcas, fotografias e padrões. Em pintura, gravura, fotografia ou design digital, técnicas distintas produzem sugestões de rugosidade, brilho ou profundidade. A composição também depende da relação entre elementos e propósito comunicativo: uma obra pode questionar convenções ou produzir ambiguidade. Ao analisar uma imagem, descreva escolhas de cor, forma, linha e textura, proponha hipóteses de função e busque evidências no suporte e no contexto. Interpretar não equivale a inventar intenção do artista sem fonte.",
        "example": "Um desenho feito com hachuras cruzadas pode criar a aparência visual de uma parede rugosa mesmo em papel liso. A textura percebida é simulada por linhas e variações de densidade. Em uma escultura de madeira entalhada, a textura também pode ser efetivamente tátil.",
        "pitfall": "Tratar textura visual representada como se necessariamente fosse textura física da superfície ou atribuir mensagem única sem suporte."
      }
    ],
    "tasks": [
      [
        "basic",
        "Defina um possível papel da linha diagonal na composição de um cartaz visual.",
        "Analise direção e condução do olhar.",
        "Uma linha diagonal pode produzir direção, orientar o percurso visual e criar tensão compositiva. O efeito não é fixo e depende do contexto, espessura e relação com outros elementos."
      ],
      [
        "basic",
        "Explique a diferença entre forma geométrica e forma orgânica numa ilustração.",
        "Observe regularidade e contornos.",
        "Formas geométricas são frequentemente construídas por relações matemáticas reconhecíveis, como círculos e triângulos. Formas orgânicas tendem a ter contornos irregulares ou associados a configurações naturais."
      ],
      [
        "intermediate",
        "Como o contraste de luminosidade contribui para a leitura de um infográfico?",
        "Considere distinção entre texto e fundo.",
        "Diferenças adequadas de luminosidade entre texto e fundo aumentam a legibilidade e a hierarquia. Um contraste muito baixo pode tornar informações difíceis de perceber, sobretudo para alguns leitores."
      ],
      [
        "intermediate",
        "Por que RGB e CMYK não descrevem exatamente o mesmo processo físico de mistura de cores?",
        "Um sistema parte da luz; o outro, de pigmentos e tintas.",
        "RGB modela combinação aditiva de luz em telas, enquanto CMYK é usado em processos de impressão com tintas que absorvem e refletem luz. As gamas e resultados práticos não são idênticos."
      ],
      [
        "advanced",
        "Compare textura tátil e textura visual em uma escultura de madeira e uma fotografia de madeira.",
        "Diferencie relevo da superfície real e aparência registrada.",
        "Na escultura, o relevo pode ser tocado e produzir sensação tátil. Na fotografia, a textura de madeira é representada visualmente por contrastes e detalhes, embora o papel ou a tela possam ser lisos."
      ],
      [
        "advanced",
        "Uma imagem usa círculos repetidos, fundo escuro e um ponto brilhante isolado. Proponha uma leitura visual fundamentada sem alegar intenção comprovada.",
        "Descreva escala, repetição e contraste antes da hipótese.",
        "A repetição de círculos cria ritmo; o fundo escuro destaca o ponto brilhante por contraste, sugerindo foco de atenção. Essa análise descreve efeitos visuais possíveis, não prova uma mensagem autoral definitiva."
      ]
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esportes coletivos e individuais",
    "objective": "Comparar organização tática, regras, habilidades motoras e cooperação em esportes coletivos e individuais, considerando inclusão, ética e diferentes contextos de prática.",
    "sections": [
      {
        "title": "Classificação, regras e práticas esportivas",
        "explanation": "Uma distinção didática frequente separa modalidades individuais, como atletismo em provas de corrida, e coletivas, como voleibol e basquetebol. Essa classificação não explica tudo: atletas individuais participam de equipes técnicas e competições por equipe, enquanto esportes coletivos requerem decisões e habilidades pessoais. Cada modalidade possui regras sobre espaço, pontuação, tempo e interação entre participantes. Entender o funcionamento básico é necessário antes de avaliar desempenho. Algumas modalidades envolvem interação direta com adversários, outras funcionam por comparação de marcas, tempos ou pontuações sem disputa simultânea de bola.",
        "example": "No voleibol, uma equipe costuma organizar recepção, levantamento e ataque dentro das regras de contatos, promovendo interdependência entre jogadores. Numa prova de salto em distância, a marca individual depende de técnica e condições da execução; ambos exigem planejamento, treino e regras, mas a organização competitiva difere.",
        "pitfall": "Afirmar que atletas de esportes individuais não cooperam com ninguém ou que jogadores de esportes coletivos não respondem individualmente por decisões."
      },
      {
        "title": "Tática, técnica e tomada de decisão",
        "explanation": "Técnica corresponde a maneiras de executar gestos motores, enquanto tática envolve escolhas adequadas à situação, aos colegas, adversários e objetivos. No basquetebol, controlar a bola e arremessar são ações técnicas, mas decidir quando passar, infiltrar ou lançar depende da leitura tática. Em modalidades individuais, a distribuição de esforço durante uma corrida e a escolha do momento para acelerar também envolvem planejamento tático. O desempenho é influenciado por preparação física, condições de treino e contexto, mas estratégias não garantem vitória. A prática pedagógica pode adaptar regras e materiais para promover participação.",
        "example": "Em um jogo de futsal, um atleta sem a bola se desloca para abrir uma linha de passe; essa movimentação favorece a solução coletiva do problema ofensivo. Em uma prova de 800 metros, um corredor pode controlar o ritmo das primeiras voltas para evitar fadiga prematura e completar melhor a distância.",
        "pitfall": "Confundir habilidade técnica com escolha tática ou atribuir uma derrota apenas ao esforço individual, ignorando condições e decisões coletivas."
      },
      {
        "title": "Inclusão, ética e cultura corporal",
        "explanation": "Esportes são práticas culturais com significados que ultrapassam recordes e resultados. Regras adaptadas, formatos cooperativos e materiais acessíveis permitem diferentes formas de participação, inclusive de pessoas com deficiência. O respeito a adversários, arbitragem e colegas integra a ética esportiva; fair play não exige ausência de competitividade, mas compromisso com regras e dignidade dos participantes. A mídia e a lógica de alto rendimento influenciam a visibilidade de modalidades e atletas, mas a educação física escolar busca também aprendizagem, saúde, sociabilidade e acesso ao lazer. Nenhuma modalidade deve ser associada a um único gênero ou padrão corporal.",
        "example": "Uma turma adapta o voleibol com bola mais leve, campo reduzido e possibilidade de contato adicional durante uma atividade introdutória. O objetivo pedagógico é ampliar participação e aprendizagem de posicionamento e cooperação, sem alegar que essas regras são as oficiais de competições federadas.",
        "pitfall": "Tratar resultados de alto rendimento como sinônimo automático de saúde ou excluir praticantes por diferenças de capacidade, gênero ou experiência."
      }
    ],
    "tasks": [
      [
        "basic",
        "Dê um exemplo de esporte coletivo e individual e justifique a classificação.",
        "Considere organização da competição e participação direta de equipes.",
        "O voleibol é coletivo porque equipes organizam conjuntamente as ações de jogo. O salto em distância é uma modalidade individual de atletismo, embora o atleta possa contar com equipe técnica e competir por pontos coletivos."
      ],
      [
        "basic",
        "Diferencie técnica e tática usando o basquetebol.",
        "Compare execução de gesto e decisão situacional.",
        "Arremessar com controle corporal é uma ação técnica. Decidir passar a bola a um colega livre em vez de arremessar sob marcação é uma escolha tática dependente do contexto do jogo."
      ],
      [
        "intermediate",
        "Por que deslocamento sem a bola é importante em esportes coletivos?",
        "Considere organização do espaço e opções de passe.",
        "Movimentos sem a bola podem abrir linhas de passe, ocupar espaços livres e desequilibrar marcações. Eles contribuem para a organização coletiva mesmo sem produzir imediatamente um ponto."
      ],
      [
        "intermediate",
        "Uma prova de corrida individual pode exigir estratégia? Dê um exemplo.",
        "Pense na distribuição do ritmo ao longo do percurso.",
        "Sim. Um corredor pode controlar o ritmo nos primeiros quilômetros para administrar esforço e acelerar no trecho final. A estratégia depende da distância, do condicionamento e das condições da prova."
      ],
      [
        "advanced",
        "Explique uma adaptação de regra que favoreça participação numa aula de voleibol e delimite seu objetivo.",
        "Diferencie atividade escolar de competição oficial.",
        "Permitir um contato extra por equipe ou usar bola mais leve pode ampliar oportunidades de recepção e cooperação entre iniciantes. A regra adaptada serve à aprendizagem, não representa regra oficial federada."
      ],
      [
        "advanced",
        "Por que é inadequado avaliar saúde de um estudante apenas por seu desempenho esportivo?",
        "Considere fatores biológicos, sociais e de acesso.",
        "Desempenho depende de treinamento, modalidade, contexto e múltiplas condições. Saúde é multidimensional e não se reduz a recordes, força ou aparência corporal, exigindo avaliação mais ampla."
      ]
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Estados físicos e mudanças de estado",
    "objective": "Explicar sólidos, líquidos e gases pelo modelo de partículas e identificar fusão, vaporização, condensação, solidificação e sublimação, relacionando calor, temperatura e pressão.",
    "sections": [
      {
        "title": "Modelos de partículas nos estados físicos",
        "explanation": "No modelo corpuscular, a matéria é constituída por partículas em movimento e com interações entre si. Nos sólidos, as partículas em geral mantêm posições relativas e vibram; líquidos têm volume aproximadamente definido e assumem forma do recipiente; gases ocupam o volume disponível, podendo ser comprimidos de modo significativo. O comportamento de diferentes substâncias depende de interações e condições de pressão e temperatura. O modelo escolar é uma simplificação: não significa que partículas sejam pequenas esferas rígidas ou que deixem de se mover em um sólido. Compressibilidade e distância média entre partículas ajudam a explicar diferenças observáveis.",
        "example": "Ao colocar água líquida em copos de formatos diferentes, ela muda de forma, mas mantém aproximadamente o volume. O ar em uma seringa tampada pode reduzir seu volume com pressão no êmbolo, porque um gás possui maior compressibilidade nas condições comuns.",
        "pitfall": "Afirmar que as partículas de um sólido ficam completamente imóveis ou que os gases não têm massa."
      },
      {
        "title": "Mudanças de estado e energia",
        "explanation": "Fusão é passagem de sólido para líquido; solidificação, de líquido para sólido. Vaporização é passagem de líquido para gás e pode ocorrer por evaporação ou ebulição; condensação é o processo inverso. Sublimação é passagem direta sólido-gás, e deposição ou ressublimação o sentido inverso. Durante uma mudança de fase de uma substância pura em condições de pressão controlada, a energia transferida pode modificar interações entre partículas sem aumentar a temperatura enquanto coexistem as fases. Isso explica por que a água pura em ebulição à pressão atmosférica padrão pode manter temperatura aproximadamente constante apesar do fornecimento de calor.",
        "example": "O gelo retirado do congelador aquece até atingir a temperatura de fusão, depois parte da energia recebida transforma gelo em água líquida. Quando todo o gelo derrete, novo aquecimento pode elevar a temperatura do líquido. O processo depende da pressão, do material e das condições do sistema.",
        "pitfall": "Confundir evaporação com ebulição: evaporação pode ocorrer na superfície em diferentes temperaturas; ebulição envolve formação de bolhas no líquido sob condições apropriadas."
      },
      {
        "title": "Temperatura, pressão e situações cotidianas",
        "explanation": "A pressão externa altera a temperatura de ebulição: em altitudes elevadas, onde a pressão atmosférica é menor, a água geralmente ferve a temperaturas inferiores à de ebulição ao nível do mar. Panelas de pressão elevam a pressão interna e permitem maior temperatura de ebulição. A condensação de vapor de água pode formar gotículas em superfícies frias, o que é diferente de 'água saindo do vidro'. Não confunda calor, energia transferida por diferença de temperatura, com temperatura, que é uma propriedade de estado relacionada ao comportamento térmico do sistema. Curvas de aquecimento permitem distinguir aquecimento em uma fase de transições.",
        "example": "Ao aproximar um copo muito frio de ar úmido, gotículas podem aparecer do lado de fora. O vapor presente no ar encontra a superfície fria, perde energia e condensa. Essa água não atravessou o vidro; sua origem é a umidade do ambiente.",
        "pitfall": "Afirmar que toda água ferve exatamente a 100 °C independentemente da pressão, altitude e composição."
      }
    ],
    "tasks": [
      [
        "basic",
        "Como variam forma e volume de um líquido comum quando é colocado em recipientes diferentes?",
        "Compare sólido, líquido e gás.",
        "Um líquido assume a forma da porção do recipiente que ocupa, mas mantém aproximadamente seu volume em condições normais. Isso difere do gás, que tende a preencher todo o volume disponível."
      ],
      [
        "basic",
        "Identifique as mudanças: gelo vira água; vapor vira gotículas; água vira gelo.",
        "Use o sentido de cada transformação.",
        "Gelo para água é fusão; vapor para gotículas é condensação ou liquefação; água para gelo é solidificação. São mudanças de estado físico, sem alterar a fórmula da água."
      ],
      [
        "intermediate",
        "Diferencie evaporação e ebulição sem afirmar que só uma delas depende de energia.",
        "Uma ocorre na superfície; outra envolve bolhas no líquido.",
        "Evaporação ocorre na superfície mesmo sem atingir o ponto de ebulição; ebulição é vaporização com formação de bolhas no interior do líquido sob condições apropriadas. Ambas envolvem processos energéticos."
      ],
      [
        "intermediate",
        "Por que a temperatura pode permanecer constante enquanto gelo puro derrete em condições controladas?",
        "Considere energia usada para mudar a fase.",
        "Durante a fusão em condições de pressão definidas, energia fornecida é absorvida na transformação de fase, modificando interações entre partículas. Enquanto coexistem sólido e líquido, a temperatura pode ficar aproximadamente constante."
      ],
      [
        "advanced",
        "Por que a água pode ferver abaixo de 100 °C em lugares de grande altitude?",
        "Pense na pressão atmosférica.",
        "Em altitude elevada, a pressão atmosférica em geral diminui. A ebulição ocorre quando a pressão de vapor permite formação sustentada de bolhas; assim, a temperatura de ebulição da água pode ser menor."
      ],
      [
        "advanced",
        "De onde vêm gotículas que aparecem na parte externa de um copo com líquido muito frio?",
        "Identifique a presença de vapor de água no ar.",
        "O vapor de água do ar esfria ao entrar em contato com a superfície do copo e pode condensar, formando gotículas. A água não atravessa o vidro; vem da umidade atmosférica."
      ]
    ]
  },
  {
    "subject": "Português",
    "topic": "Coesão referencial",
    "objective": "Identificar e empregar mecanismos de retomada e antecipação de referentes em textos, eliminando ambiguidades e reconhecendo seus efeitos de progressão.",
    "sections": [
      {
        "title": "Referentes, retomadas e cadeias coesivas",
        "explanation": "A coesão referencial permite que um texto mantenha a continuidade de seus participantes e ideias sem repetir o mesmo nome continuamente. Um referente pode ser introduzido por um sintagma nominal, como “uma pesquisadora”, e retomado por pronome, elipse, sinônimo contextual ou expressão descritiva. Em “Uma pesquisadora publicou o relatório. Ela apresentou os dados”, o pronome “ela” retoma “uma pesquisadora”: é uma anáfora. A referência não depende apenas da proximidade física das palavras, mas de concordância e de compatibilidade semântica. Também há catáfora, quando um termo antecipa informação que virá adiante, como em “Só desejo isto: concluir o trabalho”.",
        "example": "Texto original: “Marina adotou um cachorro. O animal era idoso, mas ela o levou para casa.” A expressão “o animal” retoma “um cachorro”; “ela” retoma “Marina”; “o” retoma o cachorro. A cadeia evita repetições e preserva participantes distintos.",
        "pitfall": "Pressupor que um pronome sempre retoma o substantivo mais próximo, mesmo quando a concordância ou o sentido apontam para outro referente."
      },
      {
        "title": "Substituição lexical, elipse e ambiguidade",
        "explanation": "Além de pronomes, nomes podem ser retomados por expressões mais gerais ou específicas, como “o veículo” depois de “um ônibus”, desde que o contexto sustente a equivalência. Uma elipse omite um termo recuperável: “Ana leu o artigo; Bruno, a resenha” omite o verbo “leu” no segundo segmento. Essas estratégias ajudam a evitar repetição excessiva, mas não tornam qualquer substituição correta: chamar “uma promessa” de “a conquista” altera a avaliação do fato. Ambiguidade referencial surge quando dois antecedentes são plausíveis. Para corrigi-la, é possível repetir o nome ou reestruturar a ordem dos termos, sobretudo em textos informativos que exigem precisão.",
        "example": "“Lívia falou com Clara quando ela chegou.” Sem contexto, “ela” pode indicar Lívia ou Clara. Uma reescrita desambiguadora é “Quando Clara chegou, Lívia falou com ela”, se a chegada foi de Clara. Se foi de Lívia, escreva “Ao chegar, Lívia falou com Clara”.",
        "pitfall": "Substituir uma expressão por outra de valor avaliativo diferente ou deixar pronomes com dois antecedentes igualmente possíveis."
      },
      {
        "title": "Progressão informacional e efeito argumentativo",
        "explanation": "Uma cadeia referencial também pode contribuir para a argumentação. Ao retomar um projeto como “a iniciativa” ou “a proposta controversa”, o autor não apenas economiza palavras: ele pode orientar a avaliação do leitor. É preciso distinguir retomada neutra, categorização e julgamento embutido na escolha lexical. Em questões de interpretação, localize o antecedente e verifique se a substituição conserva sentido, número, gênero e perspectiva. A coesão referencial interage com a coerência, mas não a garante: um texto pode retomar nomes corretamente e ainda apresentar contradições. A análise deve considerar o gênero textual e os efeitos de sentido de cada opção.",
        "example": "Original: “A prefeitura propôs reorganizar linhas de ônibus. A medida será debatida na próxima semana.” “A medida” retoma a proposta. Reescrever “A solução definitiva será debatida” adiciona certeza e julgamento que não estavam na primeira frase.",
        "pitfall": "Classificar toda repetição como erro ou imaginar que uma cadeia de pronomes bem construída garante que o texto seja logicamente coerente."
      }
    ],
    "tasks": [
      [
        "basic",
        "Na frase “João viu um documentário. Ele recomendou o filme aos amigos”, indique o antecedente de “ele”.",
        "Procure o sujeito humano compatível com o pronome.",
        "O pronome pessoal “ele” retoma João, que é o participante humano introduzido na primeira frase. A retomada evita repetir seu nome e mantém a referência ao recomendador."
      ],
      [
        "basic",
        "Explique o que é uma anáfora usando um exemplo próprio com retomada pronominal.",
        "Introduza o referente antes do elemento que o retoma.",
        "Na frase original “A professora chegou. Ela iniciou a aula”, “ela” retoma “a professora”. Isso é anáfora porque a referência aponta para um termo já apresentado no discurso."
      ],
      [
        "intermediate",
        "Reescreva “Paula visitou Bianca quando ela ficou doente” deixando claro que Bianca estava doente.",
        "Use nome próprio ou uma oração temporal que elimine a dupla interpretação.",
        "Uma solução é “Quando Bianca ficou doente, Paula foi visitá-la”. O nome “Bianca” é associado diretamente à doença, e “-la” retoma a pessoa visitada, eliminando a ambiguidade pretendida."
      ],
      [
        "intermediate",
        "Em “A empresa anunciou mudanças. A iniciativa começará em abril”, explique a retomada lexical.",
        "Observe a expressão usada na segunda frase.",
        "“A iniciativa” retoma as mudanças anunciadas, funcionando como expressão nominal resumidora. O leitor compreende que a implementação das mudanças está prevista para abril."
      ],
      [
        "advanced",
        "Analise por que trocar “a proposta” por “a decisão acertada” pode alterar a argumentação em um texto jornalístico.",
        "Considere os valores avaliativos embutidos nos substantivos.",
        "“A proposta” pode apresentar um projeto em discussão, enquanto “a decisão acertada” pressupõe aprovação e pode sugerir que a decisão já foi tomada. A troca não é apenas coesiva; altera o posicionamento."
      ],
      [
        "advanced",
        "No trecho “O pesquisador leu o artigo e a aluna, o relatório”, identifique o termo elíptico e explique o efeito.",
        "Reconstrua a segunda oração com o verbo omitido.",
        "O verbo “leu” está omitido após “a aluna”: “a aluna leu o relatório”. A elipse mantém o paralelismo entre ações e evita repetir um verbo recuperável no contexto."
      ]
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Romantismo: poesia e gerações",
    "objective": "Reconhecer os três conjuntos didáticos de tendências da poesia romântica brasileira e analisar seus recursos, contextos históricos e limitações classificatórias.",
    "sections": [
      {
        "title": "Romantismo brasileiro e nacionalismo",
        "explanation": "O Romantismo brasileiro se consolidou no século XIX, em um cenário posterior à Independência, articulando imaginação, subjetividade e construção de imagens da nação. Na poesia, Gonçalves Dias é frequentemente associado à tendência indianista e nacionalista, em que paisagens, memória e figuras indígenas foram mobilizadas como símbolos de identidade. Essas representações não são documentos etnográficos neutros: idealizam grupos indígenas e devem ser discutidas criticamente, considerando silenciamentos e a visão de autores letrados da época. O eu lírico não se confunde necessariamente com a biografia do poeta. A divisão em três gerações é útil para estudo, mas não resume toda a diversidade da produção romântica.",
        "example": "Num poema original de estudo, um eu lírico distante de sua terra afirma: “Na memória, o rio parece mais vasto do que ao vê-lo”. A nostalgia e a idealização da paisagem lembram procedimentos de construção afetiva da pátria, sem copiar poemas históricos.",
        "pitfall": "Tratar a representação idealizada do indígena como descrição fiel da pluralidade dos povos originários ou reduzir toda a primeira geração a um único tema."
      },
      {
        "title": "Ultrarromantismo e interioridade",
        "explanation": "A chamada segunda geração costuma receber o nome de ultrarromântica e enfatiza estados emocionais intensos, idealização amorosa, solidão, fantasia, tédio, sofrimento e reflexões sobre morte. Álvares de Azevedo é referência importante dessa tendência, embora sua escrita também contenha ironia e contrastes entre idealização e cotidiano. O termo “mal do século” é uma convenção crítica, não diagnóstico de todos os autores ou personagens. O estudo precisa observar recursos de linguagem, imagens simbólicas, apóstrofes e a construção de uma voz lírica. É incorreto deduzir que todo sentimento enunciado foi vivido exatamente como narrado pelo poeta.",
        "example": "Versos originais: “Na janela escura, invento a estrela que não vi; / amo o nome que o vento disse, não a pessoa que perdi.” A distância entre objeto real e construção imaginária ilustra a idealização afetiva e a centralidade da interioridade.",
        "pitfall": "Confundir o eu lírico com o autor e interpretar toda imagem sombria como prova de experiência biográfica verdadeira."
      },
      {
        "title": "Condoreirismo e crítica social",
        "explanation": "A terceira tendência é frequentemente chamada condoreira e associada à eloquência, ao tom público e a temas de liberdade, justiça e denúncia de violências. Castro Alves é central nas discussões sobre poesia abolicionista, especialmente na crítica à escravidão. Metáforas amplas, apelos ao leitor, hipérboles e imagens de grande escala buscam produzir impacto coletivo. É fundamental relacionar a obra ao debate abolicionista do século XIX, sem supor que todos os textos tiveram idêntica posição política ou que a abolição tenha resultado apenas da atuação intelectual. A categoria “geração” não indica fronteiras rígidas: autores e procedimentos podem se sobrepor.",
        "example": "Verso original: “Que cidade celebra a luz, se mantém a porta fechada a quem trabalha sem liberdade?” O uso de interrogação retórica e oposição entre celebração e injustiça exemplifica uma poesia voltada à crítica pública.",
        "pitfall": "Interpretar a poesia abolicionista como relato que explica sozinho o fim da escravidão ou memorizar nomes de gerações sem analisar recursos do texto."
      }
    ],
    "tasks": [
      [
        "basic",
        "Associe o indianismo e a idealização da paisagem ao contexto de formação de identidade nacional no Brasil do século XIX.",
        "Considere o período posterior à Independência.",
        "O projeto de representar símbolos da nação favoreceu a idealização da natureza e de figuras indígenas. Essa construção, porém, expressava escolhas literárias e visões sociais, não um retrato neutro de todos os povos indígenas."
      ],
      [
        "basic",
        "Explique por que eu lírico e poeta não devem ser confundidos na leitura de um poema romântico.",
        "Separe voz construída no texto e pessoa histórica.",
        "O eu lírico é a instância de enunciação do poema; suas emoções e experiências podem ser inventadas ou transformadas artisticamente. Não há autorização para tomá-las como autobiografia sem evidências adicionais."
      ],
      [
        "intermediate",
        "Um poema fala de amor impossível, fantasia e solidão noturna. Que tendência romântica ele poderia exemplificar, e qual cuidado é necessário?",
        "Lembre da associação didática com ultrarromantismo.",
        "O conjunto de imagens aproxima o poema da tendência ultrarromântica. Entretanto, classificar com segurança exige observar linguagem, contexto e obra; temas isolados podem aparecer em autores distintos."
      ],
      [
        "intermediate",
        "Compare a finalidade predominante de um poema nacionalista e de um poema ultrarromântico.",
        "Observe construção de identidade coletiva e foco na interioridade.",
        "O nacionalista tende a valorizar símbolos culturais ou paisagísticos de uma comunidade; o ultrarromântico costuma enfatizar conflitos afetivos e subjetivos. As categorias são tendências e podem coexistir."
      ],
      [
        "advanced",
        "Uma leitura diz que os indígenas românticos são representações históricas exatas. Avalie criticamente essa afirmação.",
        "Reflita sobre idealização e posição social dos autores.",
        "A literatura indianista usa convenções estéticas e projetos nacionais que podem idealizar ou estereotipar indígenas. Ela é relevante como documento de mentalidades e linguagem, mas não substitui fontes indígenas e históricas."
      ],
      [
        "advanced",
        "Analise como uma pergunta retórica poderia intensificar uma crítica abolicionista em poesia condoreira.",
        "Considere efeitos de interpelação do leitor.",
        "Uma pergunta retórica pode confrontar o leitor com uma contradição moral, estimulando julgamento e indignação. A força persuasiva deriva da forma e do contexto, não equivale automaticamente a prova histórica."
      ]
    ]
  },
  {
    "subject": "Redação",
    "topic": "Repertório sociocultural produtivo",
    "objective": "Selecionar, contextualizar e relacionar conhecimentos históricos, científicos e culturais a uma tese, distinguindo repertório produtivo de referência decorativa.",
    "sections": [
      {
        "title": "O que torna o repertório pertinente",
        "explanation": "Em textos argumentativos, repertório sociocultural é o uso de conhecimentos, fatos, conceitos, pesquisas ou obras para iluminar uma questão. Ele não equivale à quantidade de nomes famosos citados. Um repertório produtivo precisa ser pertinente ao tema e integrado ao raciocínio do parágrafo: a referência ajuda a explicar um mecanismo, sustentar uma comparação ou qualificar um argumento. É legítimo usar conhecimentos escolares bem compreendidos, como cidadania na Constituição, urbanização ou transformações do trabalho, mas sem atribuir dados ou frases que não se conhecem. O foco está no vínculo entre repertório, tese e análise desenvolvida.",
        "example": "Tema hipotético: acesso à água potável. Referência pertinente: conceitos de saneamento e saúde pública. A frase “A ausência de coleta e tratamento adequados pode aumentar riscos de doenças transmitidas pela água” fundamenta um mecanismo; citar um cientista sem relacioná-lo ao problema seria apenas adorno.",
        "pitfall": "Inserir autor, série ou dado estatístico ao acaso para parecer culto, sem explicar o que esse elemento demonstra no argumento."
      },
      {
        "title": "Contextualização e integração no parágrafo",
        "explanation": "Um desenvolvimento consistente apresenta ideia central, evidência ou repertório e análise que explicita a relação entre ambos. A referência precisa ser apresentada com precisão suficiente para que o leitor compreenda seu papel, mesmo sem conhecer a obra citada. Comparações históricas exigem reconhecer diferenças de época; conceitos científicos devem ser usados nas condições em que valem. Evite um parágrafo composto apenas de citação e conclusão vaga. Também não basta acrescentar “isso mostra que”: explique a relação causal, social ou interpretativa e conecte-a ao problema delimitado pela tese.",
        "example": "Tese: planejamento urbano influencia acesso à escola. Desenvolvimento possível: “A segregação socioespacial distribui moradias e serviços de forma desigual. Quando escolas e transportes se concentram em certas áreas, estudantes de bairros afastados podem enfrentar deslocamentos longos. Isso cria obstáculos de permanência escolar.” O conceito está integrado à explicação.",
        "pitfall": "Apresentar um conceito verdadeiro e concluir algo que não decorre dele ou comparar períodos diferentes sem reconhecer limitações."
      },
      {
        "title": "Fontes confiáveis, ética e revisão",
        "explanation": "A redação não exige decorar números exatos a qualquer custo. Se não houver segurança sobre um dado, prefira uma análise qualitativa correta ou uma fonte cuja informação possa ser verificada. Citações literais só devem aparecer quando a formulação e a autoria forem conhecidas; caso contrário, uma paráfrase conceitual fiel é mais segura. Durante a revisão, pergunte se a referência fortalece um argumento concreto e se foi desenvolvida em pelo menos uma frase de análise. Critérios de correção variam por exame e gênero: no ENEM, repertório legitimado, pertinente e produtivo dialoga com a avaliação argumentativa, mas não garante por si só nota máxima.",
        "example": "Versão fraca: “Segundo um grande pensador, educação é tudo. Portanto, precisamos melhorar.” Versão mais forte: “A aprendizagem depende também de condições de acesso e permanência. Assim, investimento em transporte escolar e apoio pedagógico pode reduzir barreiras que não se resolvem apenas com motivação individual.”",
        "pitfall": "Inventar citações ou porcentagens e supor que mencionar uma instituição renomada, sem fonte nem análise, torna o argumento automaticamente válido."
      }
    ],
    "tasks": [
      [
        "basic",
        "Explique a diferença entre referência decorativa e repertório produtivo em uma redação sobre mobilidade urbana.",
        "Pergunte se o repertório ajuda a justificar a tese.",
        "Uma menção decorativa aparece sem análise. Um repertório produtivo, como o conceito de segregação socioespacial, explica por que áreas periféricas podem enfrentar maiores dificuldades de acesso a transporte e serviços."
      ],
      [
        "basic",
        "Escolha um conceito escolar útil para discutir saneamento básico e justifique sua pertinência.",
        "Relacione saneamento a saúde pública.",
        "O conceito de transmissão de doenças por água contaminada pode sustentar a importância de tratamento de água e esgoto. Ele é pertinente porque ajuda a explicar consequências da infraestrutura insuficiente."
      ],
      [
        "intermediate",
        "Melhore o trecho “A revolução industrial existiu e hoje o trabalho é difícil” usando comparação historicamente cuidadosa.",
        "Conecte mudanças laborais a um problema específico.",
        "Uma versão melhor: “A industrialização ampliou novas formas de organização do trabalho; hoje, a discussão sobre jornadas e proteção social mostra que mudanças tecnológicas continuam exigindo análise das condições laborais.”"
      ],
      [
        "intermediate",
        "Por que uma estatística sem fonte verificável pode enfraquecer a argumentação?",
        "Considere precisão e credibilidade.",
        "Um número sem origem ou contexto pode ser inventado, desatualizado ou inadequado ao recorte. É preferível usar dado verificável ou formular uma análise qualitativa fundamentada sem falsa exatidão."
      ],
      [
        "advanced",
        "Analise o problema de usar uma citação falsa de um filósofo famoso como prova em redação.",
        "Avalie autoridade, verificabilidade e coerência.",
        "A citação inventada compromete a credibilidade e não fornece evidência real. Mesmo uma citação verdadeira precisaria ser contextualizada e relacionada às premissas do argumento."
      ],
      [
        "advanced",
        "Construa um parágrafo breve que articule desigualdade digital e permanência escolar sem recorrer a dado inventado.",
        "Formule tese parcial, mecanismo e consequência.",
        "Exemplo: “A conectividade desigual restringe o acesso a pesquisas, plataformas e comunicação escolar. Para estudantes sem internet estável, tarefas digitais podem representar obstáculos adicionais, evidenciando a necessidade de alternativas inclusivas.”"
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Leis de Newton",
    "objective": "Identificar forças reais e aplicar as três leis de Newton em referenciais aproximadamente inerciais, analisando forças resultantes, diagramas de corpo livre e pares ação-reação.",
    "sections": [
      {
        "title": "Primeira lei e interpretação da inércia",
        "explanation": "A primeira lei estabelece que um corpo permanece em repouso ou em movimento retilíneo uniforme se a força resultante sobre ele for nula, em um referencial inercial. A inércia não é uma força: é a propriedade de resistir a alterações do estado de movimento, ligada à massa. Força é interação capaz de alterar velocidade ou deformar corpos; uma velocidade constante não requer força resultante constante. Para construir um diagrama de corpo livre, isole um único objeto e desenhe somente forças que atuam nele, como peso, normal, tração e atrito. Direção e sentido devem ser explícitos; o cancelamento de duas forças depende de módulos iguais e orientações opostas sobre o mesmo corpo.",
        "example": "Um livro de 2 kg permanece parado sobre uma mesa horizontal. Adotando g≈10 m/s², seu peso é 20 N para baixo. Se não há outras forças verticais, a normal da mesa é de 20 N para cima; a resultante é zero. O livro não está 'sem forças': há equilíbrio.",
        "pitfall": "Afirmar que um corpo em movimento precisa de uma força no sentido da velocidade ou representar pares ação-reação no diagrama de um só corpo."
      },
      {
        "title": "Segunda lei, massa e aceleração",
        "explanation": "A segunda lei relaciona força resultante e aceleração pela equação vetorial ΣF = m·a, para massa constante em referencial inercial. No SI, uma força de 1 N corresponde a 1 kg·m/s². A aceleração aponta na direção da resultante, não necessariamente na direção da velocidade; um corpo que freia pode ter aceleração oposta ao movimento. É essencial decompor forças em eixos, conferir unidades e determinar qual corpo está sendo analisado. O peso é a força gravitacional próxima à superfície da Terra, aproximadamente P=mg, enquanto a massa expressa inércia e não varia com o valor local de g. A normal não é automaticamente igual ao peso: depende das outras forças e da aceleração perpendicular à superfície.",
        "example": "Um carrinho de 4 kg recebe força horizontal de 30 N à direita e atrito de 10 N à esquerda. A resultante horizontal é 20 N à direita. Pela segunda lei, a=20/4=5 m/s² à direita. O cálculo não implica que a velocidade inicial era zero nem define a distância sem mais dados.",
        "pitfall": "Usar a força aplicada isoladamente em ΣF=ma quando existem outras forças ou supor que normal e peso são sempre iguais."
      },
      {
        "title": "Terceira lei, interações e situações combinadas",
        "explanation": "A terceira lei diz que as forças de interação entre dois corpos aparecem em pares de mesma intensidade e direção, sentidos opostos, aplicadas a corpos diferentes. Assim, a força que o pé exerce no chão e a força que o chão exerce no pé formam um par ação-reação e não se cancelam no diagrama de um único corpo. Em problemas com sistemas de blocos, analise primeiro o sistema para descobrir a aceleração comum e depois cada bloco para obter forças internas, desde que as hipóteses de contato e movimento sejam válidas. Diferencie atrito estático, que se ajusta até um limite, de atrito cinético, que atua durante deslizamento conforme o modelo usado. A regra física deve ser aplicada com condições claras, não apenas por memorização de fórmula.",
        "example": "Dois blocos de 2 kg e 3 kg, em contato sobre superfície horizontal sem atrito, são empurrados juntos por 20 N. A aceleração do conjunto é 20/(2+3)=4 m/s². Para acelerar o bloco de 3 kg, o contato deve exercer 3×4=12 N nele. A reação de 12 N age sobre o bloco de 2 kg.",
        "pitfall": "Dizer que peso e força normal são um par da terceira lei: ambos atuam no mesmo corpo e, portanto, não constituem par ação-reação."
      }
    ],
    "tasks": [
      [
        "basic",
        "Um corpo está em movimento retilíneo com velocidade constante. O que se pode afirmar sobre a força resultante em referencial inercial?",
        "Recorde a primeira lei de Newton.",
        "A força resultante é nula, pois a aceleração é zero. O corpo pode continuar com velocidade não nula sem precisar de uma resultante na direção do movimento."
      ],
      [
        "basic",
        "Calcule o módulo do peso de um objeto de 6 kg próximo à Terra, adotando g=10 m/s².",
        "Use o módulo P=mg e indique unidade.",
        "P=6×10=60 N. A força peso aponta verticalmente para baixo. A massa continua 6 kg; o peso é a força gravitacional e se mede em newtons."
      ],
      [
        "intermediate",
        "Um bloco de 5 kg recebe forças horizontais de 18 N para a direita e 8 N para a esquerda. Determine a aceleração.",
        "Subtraia forças opostas antes de aplicar a segunda lei.",
        "ΣF=18−8=10 N à direita. Pela segunda lei, a=ΣF/m=10/5=2 m/s² à direita, supondo que nenhuma outra força horizontal atue."
      ],
      [
        "intermediate",
        "Um elevador acelera para cima. A normal sobre uma pessoa é maior, menor ou igual ao peso dela? Justifique.",
        "Adote o eixo vertical positivo para cima.",
        "Pela segunda lei, N−mg=ma. Como a>0, N=mg+ma e portanto a normal supera o peso. A igualdade só valeria se a aceleração vertical fosse zero."
      ],
      [
        "advanced",
        "Um estudante diz que o livro não cai porque o peso e a normal são forças de ação-reação. Corrija o argumento.",
        "Pares da terceira lei atuam em objetos diferentes.",
        "Peso e normal podem se equilibrar, mas ambos agem no livro, portanto não formam par ação-reação. A reação ao peso do livro é a atração gravitacional do livro sobre a Terra; a reação à normal age sobre a mesa."
      ],
      [
        "advanced",
        "Dois blocos de massas 2 kg e 3 kg são puxados por 15 N em superfície sem atrito. Qual a aceleração conjunta?",
        "Trate os dois blocos como um sistema sem atrito.",
        "A massa total é 5 kg. Considerando a força externa resultante de 15 N, a=15/5=3 m/s². Forças internas entre blocos não alteram a resultante do sistema."
      ]
    ]
  },
  {
    "subject": "Química",
    "topic": "Cálculo estequiométrico",
    "objective": "Resolver relações entre massas, mols e partículas a partir de equações químicas corretamente balanceadas, incluindo reagente limitante e rendimento.",
    "sections": [
      {
        "title": "Balanceamento e proporção de mols",
        "explanation": "A estequiometria usa a conservação dos átomos para estabelecer proporções entre espécies em uma reação. Primeiro é preciso escrever e balancear a equação; coeficientes indicam proporções de quantidade de matéria, não igualdades diretas de massa. Na reação 2H₂ + O₂ → 2H₂O, dois mols de hidrogênio molecular reagem com um mol de oxigênio molecular para formar dois mols de água, no caso ideal descrito. A fórmula química fornece a quantidade de átomos por entidade: o índice 2 de H₂ não é o coeficiente da reação. Converter entre massa e mol exige massa molar M, usando n=m/M; para converter mols em entidades, multiplique por N_A. Problemas exigem unidade e espécie explicitadas.",
        "example": "Considere 4 mol de H₂ reagindo com O₂ suficiente segundo 2H₂+O₂→2H₂O. A razão H₂:H₂O é 2:2, portanto podem formar-se 4 mol de H₂O. Com massa molar 18 g/mol, a massa de água correspondente é 4×18=72 g, sob reação completa.",
        "pitfall": "Comparar números em gramas diretamente com coeficientes em mol ou alterar índices das fórmulas para tentar balancear a equação."
      },
      {
        "title": "Reagente limitante e excesso",
        "explanation": "Quando dois reagentes são fornecidos em proporções diferentes das estequiométricas, um se esgota primeiro e limita a quantidade máxima de produto. É preciso converter massas em mols, dividir a quantidade disponível pelo coeficiente da espécie e comparar os valores: o menor avanço teórico determina o reagente limitante. O outro permanece em excesso se não houver reações paralelas. Não se escolhe o limitante apenas pela menor massa ou pelo menor número de mols isoladamente: coeficientes importam. Após identificar o limitante, calcule o produto pelo coeficiente correspondente e, se solicitado, a quantidade de reagente que sobra. O resultado teórico pressupõe conversão completa do limitante.",
        "example": "Para N₂+3H₂→2NH₃, suponha 2 mol de N₂ e 3 mol de H₂. Cada 1 mol de N₂ exige 3 mol de H₂; logo H₂ limita a reação e só 1 mol de N₂ reage. Formam-se 2 mol de NH₃ e sobra 1 mol de N₂, assumindo conversão completa.",
        "pitfall": "Declarar limitante o reagente de menor massa, sem considerar as proporções da reação balanceada."
      },
      {
        "title": "Rendimento, pureza e interpretação",
        "explanation": "O rendimento percentual compara a quantidade efetivamente obtida com a quantidade teórica: η = quantidade real/quantidade teórica ×100%. A pureza indica a fração de substância ativa em uma amostra: se 100 g de sólido têm 80% de pureza em massa, somente 80 g correspondem ao reagente especificado. Em problemas simples, calcule a massa pura antes de converter para mols e aplique o rendimento após obter o produto teórico. Essas porcentagens descrevem aspectos diferentes e não devem ser usadas como se fossem a mesma grandeza. Em laboratório ou indústria, perdas de produto e reações incompletas podem afetar o resultado, mas não se deve inventar mecanismos quando o problema não os informa.",
        "example": "Uma reação prevê produzir teoricamente 50 g de sólido e fornece 40 g coletados. O rendimento é 40/50×100%=80%. Se uma etapa anterior começasse com 100 g de reagente com 90% de pureza, seriam apenas 90 g de reagente ativo para o cálculo estequiométrico.",
        "pitfall": "Aplicar rendimento antes de identificar o produto teórico ou usar massa da mistura inteira como se fosse massa de reagente puro."
      }
    ],
    "tasks": [
      [
        "basic",
        "Na reação 2H₂ + O₂ → 2H₂O, quantos mols de O₂ são necessários para reagir com 8 mol de H₂?",
        "Observe a razão dos coeficientes 2:1.",
        "Para cada 2 mol de H₂ é necessário 1 mol de O₂. Com 8 mol de H₂, o oxigênio exigido é 8×(1/2)=4 mol, supondo a transformação representada."
      ],
      [
        "basic",
        "Calcule quantos mols existem em 44 g de CO₂ com massa molar igual a 44 g/mol.",
        "Use n=m/M antes de aplicar coeficientes.",
        "A quantidade de matéria é n=44 g/(44 g/mol)=1 mol de CO₂. O cálculo não depende de uma reação, apenas da relação entre massa e massa molar."
      ],
      [
        "intermediate",
        "Na reação N₂ + 3H₂ → 2NH₃, com 2 mol de N₂ e 3 mol de H₂, identifique o limitante e o produto teórico.",
        "Compare os reagentes com os coeficientes balanceados.",
        "H₂ é limitante porque 3 mol de H₂ reagem com somente 1 mol de N₂. Produzem-se 2 mol de NH₃ e sobra 1 mol de N₂, no modelo de conversão completa."
      ],
      [
        "intermediate",
        "Um reagente sólido de massa 200 g tem pureza de 75%. Qual massa deve entrar no cálculo como substância reativa?",
        "Converta a porcentagem para fração decimal.",
        "A massa de substância pura é 200×0,75=150 g. Os 50 g restantes pertencem a outras substâncias e não devem ser contados como reagente ativo."
      ],
      [
        "advanced",
        "Uma reação prevê 80 g de produto, mas são coletados 68 g. Calcule o rendimento percentual e interprete.",
        "Divida massa real pela massa teórica.",
        "η=(68/80)×100%=85%. O resultado indica que o produto isolado representa 85% da previsão teórica; não especifica a causa das perdas."
      ],
      [
        "advanced",
        "Na reação 2Mg + O₂ → 2MgO, com 48 g de Mg e 64 g de O₂, identifique o reagente limitante. Use Mg=24 g/mol e O₂=32 g/mol.",
        "Converta massas em mols e compare com os coeficientes.",
        "48 g de Mg são 2 mol e 64 g de O₂ são 2 mol. Para 2 mol de Mg, apenas 1 mol de O₂ é necessário. Assim, Mg limita a reação e sobra 1 mol de O₂."
      ]
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Ciclo celular e mitose",
    "objective": "Relacionar intérfase, replicação do DNA, etapas da mitose e citocinese à manutenção de células somáticas e à estabilidade da informação genética.",
    "sections": [
      {
        "title": "Interfase e preparação para divisão",
        "explanation": "O ciclo celular inclui a intérfase e a fase M, composta por divisão nuclear e geralmente citocinese. Na intérfase, G1 envolve crescimento e atividades metabólicas; durante S ocorre replicação do DNA; em G2 há preparação adicional para divisão. Algumas células saem do ciclo proliferativo e permanecem em G0 por períodos variáveis. Ao final da fase S, o número de cromossomos definido por centrômeros não necessariamente dobra, mas cada cromossomo replicado possui duas cromátides-irmãs. Pontos de controle participam da regulação e ajudam a evitar divisão com danos graves ao DNA. O processo pode variar entre tipos celulares, por isso representações escolares são esquemas úteis, não descrições exaustivas.",
        "example": "Uma célula humana somática diploide tem 46 cromossomos em G1. Depois da fase S, continua com 46 cromossomos replicados, que possuem 92 cromátides ao todo. O conteúdo de DNA dobrou, mas o número de cromossomos, pela contagem de centrômeros, ainda é 46.",
        "pitfall": "Dizer que a replicação na fase S transforma uma célula humana com 46 cromossomos em uma célula com 92 cromossomos antes da separação das cromátides."
      },
      {
        "title": "Fases da mitose e separação cromossômica",
        "explanation": "Na prófase os cromossomos se condensam e ocorre organização do fuso; eventos de ruptura do envelope nuclear são frequentemente tratados como prometáfase em descrições mais detalhadas. Na metáfase, cromossomos se alinham na região equatorial e se conectam ao aparato de segregação por cinetócoros. Na anáfase, cromátides-irmãs se separam e migram para polos opostos, passando a ser consideradas cromossomos-filhos independentes. Na telófase, cromossomos chegam aos polos e núcleos se reorganizam. A citocinese divide o citoplasma, por mecanismos distintos em células animais e vegetais. Não há pareamento de cromossomos homólogos como evento característico da mitose, diferentemente da meiose I.",
        "example": "Se uma célula com 2n=4 cromossomos conclui a fase S e passa pela mitose com segregação correta, cada novo núcleo recebe quatro cromossomos. A mitose conserva o conjunto cromossômico nuclear; não reduz 2n a n.",
        "pitfall": "Confundir separação de cromátides-irmãs da mitose com separação de homólogos da primeira divisão meiótica."
      },
      {
        "title": "Funções biológicas e falhas de controle",
        "explanation": "A mitose contribui para crescimento, renovação de tecidos e reprodução assexuada de determinados organismos, embora esses processos envolvam outras etapas e regulações. A estabilidade genética depende de replicação e segregação adequadas, não de identidade absoluta em todos os casos: mutações podem ocorrer. Em tecidos multicelulares, sinais internos e externos regulam proliferação e morte celular. Alterações em genes de controle do ciclo celular podem favorecer proliferação desordenada, elemento importante da biologia do câncer, mas um tumor não é consequência automática de uma única mutação. Para interpretar microscopia, observe cromossomos condensados, alinhamento, migração e reorganização nuclear em vez de decorar apenas nomes das fases.",
        "example": "Uma ferida superficial pode desencadear sinais que estimulam proliferação de células em tecidos envolvidos na reparação. A mitose fornece novas células para substituição, enquanto diferenciação, migração e outras respostas celulares também participam do reparo.",
        "pitfall": "Afirmar que toda divisão mitótica gera organismos novos ou que células-filhas nunca apresentam mutações."
      }
    ],
    "tasks": [
      [
        "basic",
        "Em que fase da intérfase ocorre a duplicação do DNA e qual é sua consequência para cromátides?",
        "Identifique as fases G1, S e G2.",
        "A duplicação do DNA ocorre na fase S. Após a replicação, cada cromossomo usualmente possui duas cromátides-irmãs associadas, que serão separadas durante a divisão."
      ],
      [
        "basic",
        "Qual evento nuclear caracteriza a metáfase da mitose?",
        "Pense no posicionamento dos cromossomos antes da segregação.",
        "Na metáfase, cromossomos replicados se alinham na região equatorial e estabelecem conexões com o fuso. Esse alinhamento precede a separação das cromátides."
      ],
      [
        "intermediate",
        "Uma célula humana tem 46 cromossomos em G1. Quantos cromossomos e cromátides possui após S, antes da anáfase?",
        "Conte cromossomos pelos centrômeros e cromátides pelo DNA replicado.",
        "Depois da fase S há 46 cromossomos duplicados, cada um com duas cromátides-irmãs, totalizando 92 cromátides. O DNA dobrou, mas não a contagem de centrômeros."
      ],
      [
        "intermediate",
        "Por que a citocinese não deve ser confundida com a separação de cromátides?",
        "Diferencie núcleo e citoplasma.",
        "Separar cromátides-irmãs é evento da anáfase da mitose nuclear. A citocinese é a divisão do citoplasma em duas células, frequentemente coordenada com a telófase."
      ],
      [
        "advanced",
        "Compare o resultado cromossômico de uma mitose típica com a redução cromossômica da meiose.",
        "Considere ploidia das células-filhas.",
        "Na mitose, os novos núcleos conservam a ploidia nuclear de partida, se a segregação ocorrer corretamente. A meiose inclui duas divisões e reduz a ploidia, formando células haploides em organismos diploides."
      ],
      [
        "advanced",
        "Por que erros de controle do ciclo celular podem contribuir para câncer, sem serem a causa única em todos os casos?",
        "Analise proliferação, mutação e mecanismos regulatórios.",
        "Alterações em genes reguladores podem permitir proliferação inadequada e outras vantagens celulares. A formação e progressão de tumores são processos multifatoriais que envolvem diversos eventos genéticos e contextuais."
      ]
    ]
  },
  {
    "subject": "História",
    "topic": "Era Vargas",
    "objective": "Relacionar a Revolução de 1930, o governo provisório, a constitucionalização de 1934, o Estado Novo e as políticas trabalhistas aos conflitos sociais e políticos do Brasil.",
    "sections": [
      {
        "title": "1930, crise oligárquica e governo provisório",
        "explanation": "A chegada de Getúlio Vargas ao poder em 1930 ocorreu num contexto de disputas entre elites estaduais, crise de 1929, descontentamentos militares e conflitos sobre a sucessão presidencial. O movimento que depôs Washington Luís encerrou a Primeira República, mas não representou participação política uniforme de toda a população. No Governo Provisório (1930–1934), Vargas centralizou decisões federais e nomeou interventores para estados, redefinindo relações entre poder central e grupos regionais. A Revolução Constitucionalista de 1932, com forte mobilização em São Paulo, contestou aspectos dessa centralização e exigiu uma nova constituição. A Assembleia Constituinte aprovou a Constituição de 1934, que ampliou disposições sociais e reorganizou regras eleitorais.",
        "example": "Um quadro cronológico original pode distinguir 1930, ruptura política e início do governo provisório; 1932, conflito constitucionalista; e 1934, nova Constituição. Assim se evita afirmar que a ditadura do Estado Novo foi instituída imediatamente após 1930.",
        "pitfall": "Tratar o movimento de 1930 como revolução social homogênea ou dizer que a Constituição de 1934 foi promulgada logo no dia da deposição de Washington Luís."
      },
      {
        "title": "Constituição de 1934 e Estado Novo",
        "explanation": "Após a Constituição de 1934, Vargas passou a governar em fase constitucional, mas o ambiente político permaneceu polarizado. A Ação Integralista Brasileira e a Aliança Nacional Libertadora expressaram projetos distintos, enquanto conflitos sociais e anticomunismo influenciaram decisões do governo. Em 1937, Vargas implantou o Estado Novo, regime autoritário que fechou o Congresso, cancelou eleições e impôs uma nova constituição. A propaganda oficial se fortaleceu, notadamente por meio do Departamento de Imprensa e Propaganda (DIP), criado em 1939, e a censura restringiu a oposição. A centralização política combinou projetos de industrialização e intervenção estatal com supressão de liberdades; ambos os aspectos precisam integrar a análise.",
        "example": "Compare dois documentos hipotéticos: um discurso oficial que exalta unidade nacional e uma manifestação censurada que denuncia falta de eleições. O primeiro ajuda a compreender a propaganda do regime; o segundo mostra limites da participação política sob a ditadura.",
        "pitfall": "Classificar o Estado Novo como regime plenamente democrático por ter implementado medidas trabalhistas ou confundir 1934 com a constituição autoritária de 1937."
      },
      {
        "title": "Legislação trabalhista, industrialização e desfecho",
        "explanation": "Durante o período, o Estado expandiu sua atuação em relações de trabalho e na economia. A Consolidação das Leis do Trabalho (CLT), de 1943, reuniu e sistematizou normas trabalhistas existentes, mas a extensão de direitos variou entre categorias e não significou proteção universal imediata aos trabalhadores rurais. O governo buscou fortalecer setores industriais estratégicos e a presença do Estado na economia, como demonstra a criação da Companhia Siderúrgica Nacional. Vargas combinou aproximação política com o trabalho urbano organizado e mecanismos de controle sindical. Em 1945, pressões pela redemocratização e transformações ligadas ao fim da Segunda Guerra levaram à sua deposição. Seu retorno à presidência por eleição em 1951 pertence a outro período, que não deve ser confundido com 1930–1945.",
        "example": "Ao analisar a CLT de 1943, um estudante pode identificar direitos e regulação das relações de emprego urbano, mas também perguntar quais trabalhadores foram efetivamente abrangidos e como o Estado controlava organizações sindicais naquele contexto.",
        "pitfall": "Afirmar que Vargas criou do zero todos os direitos trabalhistas ou que a CLT garantiu as mesmas proteções a todas as atividades e regiões brasileiras."
      }
    ],
    "tasks": [
      [
        "basic",
        "Organize cronologicamente: Constituição de 1934, movimento de 1930 e Estado Novo de 1937.",
        "Use os anos para separar fases políticas.",
        "A sequência correta é 1930, ruptura da Primeira República; 1934, nova Constituição; 1937, implantação do Estado Novo. Esses eventos representam fases distintas do governo Vargas."
      ],
      [
        "basic",
        "Que conflito em 1932 pressionou o governo Vargas por constitucionalização?",
        "Considere o movimento de São Paulo.",
        "A Revolução Constitucionalista de 1932, com participação especialmente forte em São Paulo, contestou a centralização do governo e reivindicou uma nova organização constitucional."
      ],
      [
        "intermediate",
        "Explique por que o Estado Novo pode ser caracterizado como ditadura.",
        "Observe instituições representativas e liberdades civis.",
        "O Estado Novo fechou o Congresso, suprimiu eleições e censurou a oposição, concentrando poder no Executivo. Essas características configuram autoritarismo, apesar de medidas de modernização econômica."
      ],
      [
        "intermediate",
        "Qual foi o papel da CLT de 1943, e por que ela não deve ser descrita como proteção universal imediata?",
        "Diferencie sistematização legal e alcance social.",
        "A CLT reuniu e sistematizou legislação trabalhista e estabeleceu regras para relações de trabalho. Sua cobertura e aplicação variavam; muitos trabalhadores rurais não receberam as mesmas garantias naquele contexto."
      ],
      [
        "advanced",
        "Compare modernização industrial e controle político durante o Estado Novo sem tratar um aspecto como justificativa do outro.",
        "Considere economia e liberdades políticas separadamente.",
        "O regime impulsionou políticas de industrialização e intervenção estatal, mas simultaneamente restringiu direitos políticos e expressão. O avanço econômico não transforma censura ou fechamento do Congresso em instituições democráticas."
      ],
      [
        "advanced",
        "Por que a presidência iniciada em 1951 não deve ser chamada de continuação direta do Estado Novo?",
        "Reconheça a deposição de 1945 e a eleição posterior.",
        "Vargas foi deposto em 1945, houve reorganização política e ele voltou à presidência por eleição em 1951. Trata-se de outro contexto institucional, distinto da ditadura de 1937–1945."
      ]
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Fusos horários",
    "objective": "Calcular diferenças de horário a partir da rotação terrestre e da longitude, distinguindo hora solar teórica, hora legal e mudanças de data.",
    "sections": [
      {
        "title": "Rotação, meridianos e 15 graus por hora",
        "explanation": "A Terra realiza uma rotação completa de aproximadamente 360° em cerca de 24 horas, o que corresponde a 15° de longitude por hora ou a 1° a cada quatro minutos em um modelo geométrico simplificado. Localidades a leste tendem a apresentar horário solar mais adiantado que localidades a oeste, pois alcançam posições relativas ao Sol antes no movimento de rotação. Esse raciocínio é útil para cálculos escolares de hora solar, mas não descreve automaticamente os fusos civis de cada país. A hora legal segue decisões administrativas, fronteiras políticas e mudanças legislativas; um município pode usar o horário de uma zona cujo meridiano central não coincide com sua longitude.",
        "example": "Duas localidades hipotéticas no mesmo paralelo, em 30° O e 45° O, estão separadas por 15° de longitude. No modelo de hora solar, o ponto a 30° O está uma hora adiantado em relação ao de 45° O porque fica mais a leste.",
        "pitfall": "Confundir o cálculo geométrico por meridianos com a hora oficial de qualquer cidade ou somar horas quando se desloca para oeste."
      },
      {
        "title": "UTC, fuso civil e conversão de horários",
        "explanation": "UTC é um padrão de referência para horários globais. Um local com fuso UTC−3 apresenta, em condições fixas, três horas a menos que UTC; UTC+2 indica duas horas a mais. Para converter de UTC−3 para UTC+2, acrescente cinco horas, pois +2−(−3)=5. Se o resultado ultrapassar 24 h ou ficar negativo, ajuste também o dia. Horários de verão e decisões oficiais podem alterar offsets ao longo do tempo, por isso a data é importante em situações reais. A diferença entre offsets civis não precisa ser de uma hora inteira em todos os países. Em exercícios, use sempre os fusos fornecidos pelo enunciado quando ele especificar convenções simplificadas.",
        "example": "Se uma reunião ocorre às 20h de terça-feira em UTC−3 e outra localidade usa UTC+2 na mesma data, o horário correspondente é 01h de quarta-feira. O cálculo é 20+5=25, isto é, 01h do dia seguinte.",
        "pitfall": "Calcular apenas o horário no relógio sem verificar mudança de data ou considerar UTC−3 como três horas à frente de UTC."
      },
      {
        "title": "Linha Internacional de Data e casos reais",
        "explanation": "A Linha Internacional de Data aproxima-se do antimeridiano de 180°, mas faz desvios para respeitar decisões e territórios. Cruzá-la pode exigir alteração de data civil, dependendo do sentido de deslocamento. Isso não significa mudar a duração física do dia experimentado por uma pessoa; a mudança é uma convenção de calendário para coordenar horários globais. Em uma viagem real, passagens aéreas, fusos legais e duração do trajeto precisam ser considerados conjuntamente. A diferença de longitude ajuda a entender a distribuição aproximada dos horários, porém não permite inferir a hora atual de qualquer país sem consultar sua regra legal para a data específica.",
        "example": "Um viajante parte de uma localidade em UTC+12 às 10h de segunda-feira e se comunica com outra em UTC−10 no mesmo instante. Pelo modelo de offsets, a segunda localidade está 22 horas atrás, logo são 12h de domingo; o calendário local é diferente.",
        "pitfall": "Afirmar que a linha de data coincide integralmente com o meridiano de 180° ou aplicar um offset atual a eventos históricos sem conferir mudanças legais."
      }
    ],
    "tasks": [
      [
        "basic",
        "No modelo de hora solar, qual diferença corresponde a 45° de longitude?",
        "Use 15° para cada hora.",
        "Como 45°/15° por hora = 3 horas, duas localidades separadas por 45° de longitude apresentam diferença de aproximadamente 3 horas solares, no modelo simplificado."
      ],
      [
        "basic",
        "Em um horário civil fixo UTC−3, que horas são quando UTC marca 18h do mesmo dia?",
        "Subtraia três horas de UTC.",
        "Em UTC−3, 18h UTC correspondem a 15h do mesmo dia. O sinal negativo indica atraso em relação à referência, não antecipação."
      ],
      [
        "intermediate",
        "Quando são 22h em UTC−3, que horas são em UTC+2 no mesmo instante?",
        "A diferença entre os offsets é de cinco horas.",
        "Some cinco horas a 22h: são 03h do dia seguinte em UTC+2. O horário e a data devem ser ajustados conjuntamente."
      ],
      [
        "intermediate",
        "No modelo de hora solar, qual local fica mais adiantado: 60° O ou 30° O? Em quanto tempo?",
        "Mais a leste significa menos graus a oeste.",
        "30° O está mais a leste que 60° O. A diferença de 30° equivale a aproximadamente duas horas solares; 30° O está duas horas adiantado nesse modelo."
      ],
      [
        "advanced",
        "Uma chamada começa às 23h de segunda-feira em UTC+1. Qual é o horário equivalente em UTC−4?",
        "Calcule o destino menos a origem: −4−(+1).",
        "O fuso de destino está cinco horas atrás: 23−5=18h. Portanto, são 18h da mesma segunda-feira em UTC−4, supondo offsets fixos."
      ],
      [
        "advanced",
        "Explique por que 15° de diferença de longitude não garantem exatamente uma hora de diferença nos relógios oficiais.",
        "Diferencie horário solar e hora legal.",
        "A divisão em 15° é aproximação geométrica de hora solar. Fusos oficiais seguem fronteiras e decisões políticas; há offsets fracionários e mudanças sazonais ou históricas."
      ]
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Aristóteles e a lógica",
    "objective": "Identificar a estrutura de argumentos categóricos na tradição aristotélica e distinguir validade, verdade de premissas, inferência e falácias.",
    "sections": [
      {
        "title": "Proposição, termo e argumento",
        "explanation": "Na tradição associada a Aristóteles, a lógica investiga formas de raciocínio e condições pelas quais conclusões seguem de premissas. Um argumento não é uma afirmação isolada: contém uma ou mais premissas e uma conclusão. Na análise categórica, proposições podem relacionar classes, como “Todo A é B”, “Nenhum A é B” ou “Algum A é B”. É fundamental distinguir estrutura de conteúdo: uma inferência pode ser válida mesmo quando alguma premissa é falsa; validade diz respeito à impossibilidade de premissas verdadeiras acompanharem conclusão falsa naquela forma. Termos como “todo” e “algum” determinam a quantidade lógica da afirmação. A lógica antiga possui escopo próprio e não se confunde com toda a lógica formal moderna.",
        "example": "Premissas: “Todos os mamíferos são vertebrados” e “Todas as baleias são mamíferos”. Conclusão: “Todas as baleias são vertebrados”. O termo médio “mamíferos” conecta as classes; aceitar as premissas obriga a conclusão dentro dessa forma.",
        "pitfall": "Achar que um argumento com conclusão factual verdadeira é necessariamente válido, mesmo que essa conclusão não decorra das premissas."
      },
      {
        "title": "Silogismo categórico e formas válidas",
        "explanation": "Um silogismo categórico clássico articula duas premissas e uma conclusão envolvendo três termos: maior, menor e médio. O termo médio aparece nas premissas e estabelece a ligação inferencial, mas não precisa aparecer na conclusão. Um padrão válido conhecido é: todo M é P; todo S é M; portanto, todo S é P. Porém, não basta reunir três frases com “todo” para obter validade. A distribuição dos termos e a quantidade das proposições importam; a existência de membros nas classes também deve ser tratada com cuidado em interpretações modernas. A análise escolar pode começar por diagramas de conjuntos para visualizar inclusão e exclusão, evitando confiar somente na familiaridade verbal das frases.",
        "example": "“Todos os felinos são mamíferos. Todos os tigres são felinos. Logo, todos os tigres são mamíferos.” Nos conjuntos, a classe dos tigres está contida na dos felinos, que está contida na dos mamíferos. A transitividade da inclusão sustenta a conclusão.",
        "pitfall": "Inverter uma inclusão sem justificativa: de “Todos os cães são mamíferos” não segue que “Todos os mamíferos são cães”."
      },
      {
        "title": "Falácias, validade e argumentos cotidianos",
        "explanation": "Uma falácia formal acontece quando a estrutura inferencial não garante a conclusão. Por exemplo: “Se chove, a rua molha; a rua molhou; logo choveu” afirma o consequente e ignora explicações alternativas, como limpeza da rua. Essa forma é melhor estudada pela lógica proposicional, mas ajuda a diferenciar raciocínio válido de persuasão aparente. Na tradição aristotélica, a relação entre lógica, demonstração e conhecimento também envolve conteúdo das premissas e explicação das causas. Para avaliar um argumento, primeiro organize premissas e conclusão; em seguida teste se haveria um caso com premissas verdadeiras e conclusão falsa. Separadamente, investigue se as premissas têm sustentação factual.",
        "example": "Argumento inválido: “Todos os pássaros são animais. Todos os cães são animais. Logo, todos os cães são pássaros.” As premissas são verdadeiras, mas a conclusão falsa. A estrutura não liga a classe dos cães à dos pássaros, apenas ao conjunto amplo dos animais.",
        "pitfall": "Confundir uma fala convincente com uma dedução válida ou rejeitar um argumento formalmente válido só porque sua conclusão parece incomum."
      }
    ],
    "tasks": [
      [
        "basic",
        "Identifique premissas e conclusão: “Todo quadrado é retângulo; esta figura é quadrado; logo, é retângulo”.",
        "Localize a afirmação introduzida por “logo”.",
        "As premissas são “Todo quadrado é retângulo” e “Esta figura é quadrado”. A conclusão é “Esta figura é retângulo”, que segue logicamente da inclusão."
      ],
      [
        "basic",
        "Explique a diferença entre validade lógica e verdade factual de uma premissa.",
        "Uma propriedade pertence à estrutura; outra, ao conteúdo.",
        "Validade significa que não é possível ter todas as premissas verdadeiras e a conclusão falsa naquela forma. Verdade factual avalia cada afirmação sobre o mundo."
      ],
      [
        "intermediate",
        "Conclua validamente: “Todos os violinos são instrumentos de corda; todos os instrumentos de corda são instrumentos musicais”.",
        "Use inclusão transitiva.",
        "A conclusão é “Todos os violinos são instrumentos musicais”. Se a classe dos violinos está contida na de instrumentos de corda, que está na de instrumentos musicais, a inclusão final segue."
      ],
      [
        "intermediate",
        "Avalie “Todos os cães são mamíferos; todos os gatos são mamíferos; portanto todos os gatos são cães”.",
        "Compartilhar uma classe ampla não garante inclusão entre subclasses.",
        "O raciocínio é inválido. As duas premissas apenas incluem cães e gatos na classe dos mamíferos; não estabelecem que uma dessas subclasses esteja contida na outra."
      ],
      [
        "advanced",
        "Por que “Se estudo, melhoro; melhorei; logo, estudei” não é uma inferência garantida?",
        "Procure outros motivos possíveis para melhorar.",
        "A forma afirma o consequente: a melhoria pode ter outras causas. Saber que estudar é suficiente sob uma condição não prova que tenha sido a causa exclusiva da melhoria."
      ],
      [
        "advanced",
        "Como testar se uma conclusão decorre de premissas categóricas sem depender apenas da intuição?",
        "Desenhe classes e procure um contraexemplo.",
        "Representações de conjuntos e análise dos termos permitem verificar se todas as situações compatíveis com as premissas obrigam a conclusão. Um contraexemplo com premissas verdadeiras e conclusão falsa refuta a validade."
      ]
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Weber: ação social e dominação",
    "objective": "Definir ação social na sociologia compreensiva e distinguir tipos ideais de ação e fundamentos de legitimidade da dominação em Weber.",
    "sections": [
      {
        "title": "Ação social e sentido atribuído",
        "explanation": "Para Max Weber, a ação social é uma conduta humana à qual o agente atribui sentido e que se orienta pelo comportamento de outras pessoas, real ou esperado. Nem todo movimento corporal é ação social: um espirro involuntário não possui necessariamente orientação pelo outro; acenar para cumprimentar alguém pode possuir. A sociologia compreensiva busca interpretar os sentidos e também explicar relações causais, evitando reduzir o indivíduo a uma causa psicológica única. Weber construiu tipos ideais como instrumentos analíticos: são modelos acentuados de traços de fenômenos que ajudam a comparar situações reais, não retratos exatos de qualquer pessoa ou julgamento moral de comportamento.",
        "example": "Um estudante estuda para ser aprovado e atender às expectativas da família; pode haver orientação a fins e a outras pessoas. Outro estudante abre um guarda-chuva apenas por reflexo ao sentir água; sem sentido dirigido ao comportamento alheio, a descrição não demonstra ação social.",
        "pitfall": "Interpretar qualquer comportamento humano como ação social no sentido weberiano, sem identificar orientação significativa ao outro."
      },
      {
        "title": "Quatro tipos de orientação da ação",
        "explanation": "A tipologia de Weber distingue ação racional com relação a fins, quando meios são calculados para alcançar objetivos; racional com relação a valores, quando a ação se orienta por convicção independentemente dos resultados; afetiva, quando predomina a expressão de emoções; e tradicional, quando o hábito e costumes conduzem a conduta. São tipos ideais, e uma mesma situação pode combinar motivações. Classificar requer compreender o sentido atribuído, não apenas olhar o movimento externo. Doações podem ser orientadas por valor religioso, cálculo de reconhecimento público, emoção diante de sofrimento ou tradição familiar. O observador não deve deduzir o motivo com certeza sem evidências.",
        "example": "Uma pessoa participa de manifestação porque considera a causa moralmente obrigatória, mesmo prevendo custos pessoais: o caso sugere orientação por valores. Outra pode participar visando contatos profissionais: nesse cenário hipotético, a orientação a fins ganha destaque.",
        "pitfall": "Supor que uma ação possui sempre um único tipo puro ou atribuir motivações internas a pessoas reais sem evidência."
      },
      {
        "title": "Dominação legítima, Estado e burocracia",
        "explanation": "Dominação, em Weber, envolve a probabilidade de que ordens encontrem obediência em determinado grupo. A estabilidade dessa obediência pode se apoiar em legitimidade tradicional, ligada ao costume; carismática, baseada na devoção a qualidades atribuídas a um líder; ou legal-racional, vinculada a regras impessoais e cargos instituídos. São novamente tipos ideais que podem se misturar em casos concretos. A burocracia moderna se associa à autoridade legal-racional, com competências definidas, hierarquia administrativa e registro documental. Seu funcionamento pode trazer previsibilidade, mas também gerar rigidez e problemas de responsabilidade. Weber não descreve toda obediência como justa, nem defende que qualquer autoridade existente seja legítima moralmente.",
        "example": "Num concurso para um cargo público, a autoridade de quem assume decorre formalmente das regras e competências do cargo, não de relações familiares ou admiração pessoal. Esse exemplo ajuda a distinguir dominação legal-racional de legitimidades tradicional e carismática.",
        "pitfall": "Confundir 'legítima' na análise sociológica com aprovação ética automática ou tratar o tipo carismático como mero sinônimo de simpatia pessoal."
      }
    ],
    "tasks": [
      [
        "basic",
        "Explique por que cumprimentar alguém pode constituir ação social, enquanto um espirro involuntário geralmente não.",
        "Considere sentido subjetivo e orientação ao comportamento de outra pessoa.",
        "Um cumprimento possui sentido dirigido ao outro e considera uma interação. O espirro involuntário, isoladamente, não é orientado significativamente ao comportamento de alguém."
      ],
      [
        "basic",
        "O que é um tipo ideal na metodologia de Weber?",
        "É um instrumento de comparação, não uma pessoa exemplar.",
        "Um tipo ideal é um modelo analítico construído enfatizando certos traços de fenômenos. Serve para interpretar realidades complexas, sem exigir que casos concretos correspondam perfeitamente ao modelo."
      ],
      [
        "intermediate",
        "Uma pessoa escolhe o caminho mais rápido para chegar a uma entrevista. Qual orientação da ação tende a predominar?",
        "Ela compara meios para alcançar um objetivo.",
        "Predomina a ação racional com relação a fins: calcula-se o meio mais eficiente para atingir o objetivo. Essa leitura depende do sentido hipotético apresentado no enunciado."
      ],
      [
        "intermediate",
        "Uma pessoa mantém um costume familiar mesmo sem considerar suas consequências. Qual tipo de ação isso exemplifica?",
        "Procure hábitos transmitidos e repetidos.",
        "O caso se aproxima da ação tradicional, orientada pelo hábito e pelo costume. Em situações concretas, outras razões podem coexistir, mas o enunciado enfatiza tradição."
      ],
      [
        "advanced",
        "Diferencie dominação tradicional e legal-racional usando exemplos de fundamento da autoridade.",
        "Compare costume com regras impessoais.",
        "A tradicional apoia-se no reconhecimento de costumes antigos e posições herdadas. A legal-racional apoia-se em normas formais e competências de cargos, como numa administração pública."
      ],
      [
        "advanced",
        "Por que uma organização burocrática pode ser previsível e ao mesmo tempo rígida?",
        "Relacione regras escritas, hierarquia e flexibilidade.",
        "Competências e procedimentos definidos favorecem previsibilidade e continuidade, mas podem produzir excesso de formalismo e dificuldade de adaptação. Trata-se de possibilidades analíticas, não de resultados universais."
      ]
    ]
  },
  {
    "subject": "Arte",
    "topic": "Fotografia, cinema e audiovisual",
    "objective": "Analisar enquadramento, planos, luz, montagem e som em produções audiovisuais, distinguindo registro, construção narrativa e interpretação.",
    "sections": [
      {
        "title": "Fotografia: enquadramento e luz",
        "explanation": "Fotografia registra uma distribuição luminosa por meio de um dispositivo técnico, mas não é cópia neutra e completa da realidade. O enquadramento seleciona o que entra e o que fica fora da imagem; ângulo, distância, foco e iluminação alteram a percepção. Um plano geral situa ambientes, enquanto um close-up destaca detalhes, sem que existam efeitos psicológicos universais. A direção da luz pode produzir sombras que enfatizam textura e volume; contraste e cor participam da linguagem visual. Para analisar uma fotografia, descreva primeiro elementos observáveis, depois proponha interpretações vinculadas ao contexto de produção e circulação. Também considere direitos de imagem e consentimento quando pessoas são fotografadas.",
        "example": "Imagine duas fotografias originais de uma praça: um plano aberto mostra árvores, calçadas e circulação de pessoas; um close-up de uma mão plantando uma muda concentra atenção no gesto. As duas registram o mesmo espaço, mas constroem narrativas visuais diferentes pela seleção de informação.",
        "pitfall": "Afirmar que uma fotografia não envolve escolhas autorais por ter sido produzida com câmera ou supor que um enquadramento sempre comunica a mesma emoção."
      },
      {
        "title": "Cinema: plano, cena, sequência e montagem",
        "explanation": "No audiovisual, o plano corresponde a um trecho contínuo de imagem entre cortes, enquanto uma cena organiza ações em situação dramática e uma sequência pode reunir cenas relacionadas. A montagem define a ordem, a duração e a relação entre imagens, criando continuidade, contraste, simultaneidade ou ruptura temporal. A interpretação de um mesmo plano pode mudar conforme o que aparece antes e depois dele. Movimento de câmera, profundidade de campo e posição dos atores também orientam o olhar. Uma análise cuidadosa identifica escolhas materiais concretas, sem inventar intenções de diretores ou reduzir a linguagem cinematográfica a fórmulas rígidas.",
        "example": "Um curta mostra primeiro um prato vazio, depois o rosto preocupado de uma personagem e, por fim, uma cozinha fechada. A montagem convida à inferência de falta de alimento ou dificuldade de acesso, embora nenhum plano isolado conte toda a situação.",
        "pitfall": "Confundir plano com cena ou interpretar cortes como simples erros de gravação, ignorando suas funções na construção do sentido."
      },
      {
        "title": "Som, narrativa e leitura crítica das imagens",
        "explanation": "A trilha sonora, diálogos, ruídos ambientes e silêncio integram a produção de significado. Som diegético pertence ao universo da narrativa — por exemplo, uma rádio ouvida pelos personagens — enquanto som não diegético pode ser música acrescentada para o público. Essa distinção é analítica: a relação entre som e imagem pode ser ambígua. Documentários também envolvem escolhas de edição, entrevista, duração e ordem das cenas, apesar do compromisso com referências a acontecimentos reais. Ao avaliar um produto audiovisual, pergunte de onde vieram imagens, quem fala, que contexto foi omitido e se há manipulação ou uso não autorizado.",
        "example": "Em uma cena, uma personagem fecha a porta e a música dramática continua mesmo sem fonte sonora na história: a trilha provavelmente é não diegética. Se um rádio tocando aparece dentro do quarto, seu som pertence ao espaço narrativo.",
        "pitfall": "Supor que todo documentário é neutro por usar imagens reais ou que toda música ouvida pelo espectador é necessariamente ouvida pelos personagens."
      }
    ],
    "tasks": [
      [
        "basic",
        "Qual a diferença fundamental entre enquadramento aberto e close-up na análise de uma fotografia?",
        "Observe quantidade de contexto visual disponível.",
        "O enquadramento aberto apresenta mais relações espaciais e elementos ambientais; o close-up destaca um detalhe ou expressão. Ambos são escolhas de linguagem, não garantias de uma interpretação única."
      ],
      [
        "basic",
        "Explique por que uma fotografia não é um registro totalmente neutro.",
        "Pense no que fica fora do quadro.",
        "Quem fotografa escolhe perspectiva, recorte, luz e momento do registro. Essas decisões tornam certos elementos visíveis e omitem outros, influenciando a leitura da imagem."
      ],
      [
        "intermediate",
        "Defina plano e cena e indique por que não são sinônimos no cinema.",
        "Um se relaciona a tomadas contínuas; outro, a unidades dramáticas.",
        "Plano é um trecho contínuo de imagem entre cortes; cena organiza ações em uma situação narrativa, podendo conter vários planos. Uma sequência pode reunir diferentes cenas."
      ],
      [
        "intermediate",
        "Como a montagem pode modificar o sentido de uma expressão facial filmada?",
        "Considere imagens anteriores e posteriores ao rosto.",
        "Um rosto neutro pode parecer preocupado, interessado ou satisfeito conforme as imagens adjacentes. A montagem cria relações de sentido que vão além do conteúdo de um único plano."
      ],
      [
        "advanced",
        "Classifique o som de um rádio presente na sala da personagem e uma trilha sonora que só o público escuta.",
        "Diferencie a fonte sonora dentro e fora do universo da narrativa.",
        "O rádio da sala produz som diegético, integrante do mundo ficcional. A trilha acrescentada apenas para o espectador é não diegética, mesmo que também influencie emoções e interpretações."
      ],
      [
        "advanced",
        "Que perguntas críticas ajudam a analisar a credibilidade de um documentário com imagens reais?",
        "Investigue autoria, seleção e contexto.",
        "É preciso observar origem das imagens, recortes de edição, fontes entrevistadas, informações omitidas e possível distorção contextual. Usar imagens reais não elimina escolhas narrativas nem garante neutralidade."
      ]
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Preconceito e inclusão no esporte",
    "objective": "Identificar barreiras sociais e estruturais à participação esportiva e propor adaptações responsáveis que ampliem inclusão sem reduzir pessoas a estereótipos.",
    "sections": [
      {
        "title": "Acesso e barreiras à participação",
        "explanation": "O esporte é prática cultural e direito de participação, mas as oportunidades não se distribuem igualmente. Barreiras podem envolver renda, disponibilidade de espaços, transporte, equipamentos, horários, normas de gênero, discriminação e acessibilidade. Preconceitos contra pessoas com deficiência, mulheres, pessoas de determinados grupos sociais ou iniciantes podem afastar participantes e restringir trajetórias esportivas. A análise deve distinguir capacidade individual de oportunidades sociais: desempenho não pode ser usado como medida universal de valor de uma pessoa. Na escola, observar quem participa efetivamente, quem recebe incentivo e quais regras excluem pessoas é parte do trabalho pedagógico.",
        "example": "Uma escola possui somente uma quadra com atividades sempre organizadas para a mesma equipe. Estudantes iniciantes podem permanecer sem participação real. Rodízio planejado, grupos variados e metas cooperativas podem ampliar oportunidades sem apagar objetivos de aprendizagem.",
        "pitfall": "Afirmar que excluir participantes por experiência ou corpo é necessário para qualquer prática esportiva, confundindo alto rendimento com educação física escolar."
      },
      {
        "title": "Adaptações, acessibilidade e justiça",
        "explanation": "Incluir não significa simplesmente colocar todos no mesmo espaço e manter condições que impedem parte do grupo de jogar. Adaptações podem envolver equipamento, tamanho da quadra, tempo de participação, comunicação visual ou sonora e regras ajustadas à atividade. A escolha precisa considerar segurança, autonomia e preferências dos participantes, sem impor práticas como se toda pessoa com determinada deficiência tivesse necessidades idênticas. Em modalidades paralímpicas, classificações esportivas e regulamentos próprios procuram organizar disputas justas, mas variam por modalidade. Em contexto escolar, uma adaptação pode ser pedagogicamente legítima sem equivaler a regra oficial da federação.",
        "example": "Numa aula de vôlei para iniciantes, o professor reduz a altura da rede e usa bola mais leve; em outra atividade, orientações visuais e sinais combinados complementam avisos sonoros. O objetivo é ampliar acesso à tomada de decisão e à cooperação.",
        "pitfall": "Presumir que basta mudar uma regra para produzir inclusão, sem ouvir os participantes nem observar se a adaptação resolveu a barreira concreta."
      },
      {
        "title": "Respeito, mídia e protagonismo",
        "explanation": "O fair play envolve respeito a regras, adversários, arbitragem e integridade dos participantes, mas ações de inclusão também dependem de instituições, equipes e políticas públicas. A representação na mídia pode valorizar atletas e ampliar visibilidade de modalidades, embora também reforce estereótipos quando reduz pessoas a histórias de superação ou aparência física. A análise crítica pergunta quem aparece, quais condições de treino são mostradas, quem é ouvido e quais desigualdades permanecem invisíveis. Projetos de esporte comunitário devem considerar continuidade, segurança, acesso e participação na decisão, não apenas eventos pontuais.",
        "example": "Uma reportagem descreve uma atleta exclusivamente como 'exemplo de superação', omitindo treinamento, técnica e resultados esportivos. Uma abordagem mais completa mostra suas estratégias de competição, contexto da modalidade e barreiras de acesso sem apagar a pessoa como atleta.",
        "pitfall": "Confundir representatividade com mera presença simbólica ou tratar respeito individual como solução completa de desigualdades estruturais."
      }
    ],
    "tasks": [
      [
        "basic",
        "Cite duas barreiras distintas que podem impedir estudantes de participar de atividades esportivas.",
        "Considere recursos materiais e atitudes sociais.",
        "Falta de transporte e equipamentos é barreira material; discriminação por deficiência ou gênero é barreira social. Ambas podem restringir participação mesmo quando há interesse e disposição."
      ],
      [
        "basic",
        "Por que alto desempenho competitivo não deve ser o único critério de acesso a aulas de educação física?",
        "Diferencie objetivos escolares e alto rendimento.",
        "A educação física escolar visa aprendizagem, participação, saúde e cultura corporal. Exigir desempenho elevado como condição de acesso exclui iniciantes e restringe esses objetivos pedagógicos."
      ],
      [
        "intermediate",
        "Proponha uma adaptação para uma aula com jogadores iniciantes em voleibol e explique o objetivo.",
        "Pense em rede, bola e oportunidade de contato.",
        "Usar bola mais leve ou reduzir a altura da rede pode facilitar recepção e ataque iniciais, ampliando envolvimento dos estudantes. A escolha deve ser avaliada com os participantes e a segurança."
      ],
      [
        "intermediate",
        "Como diferenciar uma adaptação pedagógica de uma alteração oficial em competição federada?",
        "Observe finalidade da prática e regulamento.",
        "Na aula, regras podem ser ajustadas para favorecer aprendizagem e inclusão. Em competição oficial, aplicam-se regulamentos específicos; uma adaptação escolar não altera automaticamente a regra federada."
      ],
      [
        "advanced",
        "Analise o limite de uma reportagem que só apresenta uma atleta com deficiência como símbolo de superação.",
        "Considere a identidade esportiva e o treinamento da atleta.",
        "A reportagem pode invisibilizar competência técnica, preparação e resultados da atleta, transformando sua trajetória em estereótipo. Uma cobertura mais completa mostra a modalidade e a própria voz da participante."
      ],
      [
        "advanced",
        "Por que a inclusão esportiva exige mais do que pedir que os colegas respeitem uns aos outros?",
        "Considere infraestrutura, recursos e políticas organizacionais.",
        "O respeito é necessário, mas barreiras materiais, horários, transporte e falta de adaptação também restringem acesso. A inclusão exige medidas concretas e acompanhamento de sua eficácia."
      ]
    ]
  }
];
const lookup=new Map(lessons.map(item=>[item.subject+'\0'+item.topic,item]));
export const deepCrossSubjectTopics=lessons.map(({subject,topic})=>({subject,topic}));
export function deepCrossSubjectLesson(topic:CurriculumTopic):CourseLesson|null{
 const spec=lookup.get(topic.subject+'\0'+topic.topic);
 if(!spec)return null;
 const levels:CourseLevel[]=['basic','intermediate','advanced'];
 const sections:CourseSection[]=spec.sections.map((s,i)=>({
  level:levels[i],title:s.title,
  explanation:(i===0?'Este é um módulo introdutório pré-carregado, ampliado com conteúdo autoral específico. Revisão docente pendente.\n\n':'')+s.explanation,
  steps:['Defina os conceitos e hipóteses relacionados a '+topic.topic+'.',
   'Analise o exemplo resolvido e identifique cada passo do raciocínio.',
   'Compare a resolução com o erro frequente e justifique o resultado.'],
  example:s.example,pitfall:s.pitfall
 }));
 const tasks:CourseTask[]=spec.tasks.map(([level,prompt,hint,solution])=>({level,prompt,hint,solution}));
 const sourceUrls=[...new Set(topic.exams.map(exam=>examBlueprints[exam]?.sourceUrl).filter((x):x is string=>Boolean(x?.startsWith('https://'))))];
 return {kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:spec.objective,prerequisites:[],sections,tasks,videos:[],
  authorship:'Kognos — aula autoral específica; sem homologação docente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'};
}
