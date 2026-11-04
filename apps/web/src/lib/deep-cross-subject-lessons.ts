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
  authorship:'Kognos — aula autoral específica, revisão docente pendente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'};
}
