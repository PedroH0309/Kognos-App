import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original chemistry, biology and history lessons. Teacher review is still pending. */
export const provaoDepthBatch06ScienceHistory:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Modelos atômicos de Dalton, Thomson, Rutherford e Bohr",
    "objective": "Relacionar hipóteses atômicas a evidências de composição química, raios catódicos, espalhamento de partículas alfa e espectros de emissão, distinguindo os limites de Dalton, Thomson, Rutherford e Bohr.",
    "prerequisites": [
      "Elementos químicos",
      "Átomos e partículas",
      "Carga elétrica e energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dalton e Thomson: a ciência revisa modelos com novas evidências",
        "explanation": "Modelos científicos são explicações que relacionam observações e hipóteses verificáveis, e não fotografias exatas da matéria. A teoria de Dalton, no início do século XIX, organizava átomos de cada elemento e combinações em proporções definidas, ajudando a interpretar leis ponderais. Porém a ideia de átomos absolutamente indivisíveis e de mesma massa para todo átomo de um elemento foi modificada com a descoberta de partículas subatômicas e isótopos. O modelo de Dalton continua útil em representações simplificadas de equações químicas, mas não explica a estrutura interna dos átomos. Experimentos com raios catódicos mostraram que existiam partículas negativas menores que o átomo, identificadas como elétrons por J. J. Thomson. Seu modelo situava essas cargas numa distribuição positiva, explicando a neutralidade global numa hipótese de átomo divisível. A evidência de elétrons não demonstrava ainda um núcleo pequeno. É importante distinguir o que cada modelo propôs do que cientistas descobriram mais tarde. A evolução do conhecimento ocorre por evidências e revisão de explicações, não por uma sequência na qual todos os modelos anteriores estariam inteiramente sem valor.",
        "example": "Em um composto, a proporção entre massas de elementos mantém valor definido em condições iguais. Dalton interpretava essa regularidade por combinação de unidades atômicas. Já no tubo de raios catódicos, partículas desviadas em campos elétricos evidenciaram portadores de carga menores que o átomo; isso levou à rejeição da indivisibilidade absoluta e ao modelo de Thomson.",
        "pitfall": "Não atribua a Dalton o conhecimento dos elétrons nem a Thomson a descoberta do núcleo concentrado. Cada teoria deve ser vinculada à sua evidência experimental e às limitações que ainda possuía.",
        "steps": [
          "Localize a observação que o modelo procurava explicar.",
          "Associe Dalton às proporções químicas e Thomson aos elétrons.",
          "Identifique qual evidência tornou insuficiente a indivisibilidade absoluta."
        ]
      },
      {
        "level": "intermediate",
        "title": "Rutherford e o espalhamento de partículas alfa",
        "explanation": "Na experiência de espalhamento de partículas alfa por lâminas finas de metal, a maioria das partículas atravessava com desvio pequeno, enquanto uma minoria apresentava desvios fortes. Os resultados, obtidos por colaboradores como Geiger e Marsden e interpretados por Rutherford, eram difíceis de conciliar com carga positiva difundida uniformemente por todo o átomo. Rutherford propôs concentração de grande parte da carga positiva e da massa numa região central muito pequena, o núcleo, com elétrons presentes em região muito mais extensa. A explicação dos desvios intensos depende principalmente da repulsão elétrica entre partículas alfa positivas e o centro positivo, não de uma colisão mecânica simples com bolinha sólida. A interpretação é um exemplo de inferência científica: observam-se trajetórias e propõe-se uma estrutura que as explique. Esse modelo, porém, apresentava dificuldades clássicas para justificar estabilidade dos elétrons e espectros de linhas. Não se deve imaginar que o modelo nuclear seja literalmente um sistema solar em miniatura; essa representação tem limites. O próximo avanço teórico buscaria explicar a estabilidade e a energia emitida em transições atômicas.",
        "example": "Pense em um feixe de milhares de partículas alfa incidindo numa lâmina fina: quase todas seguem aproximadamente em frente, mas poucas têm grande desvio. A passagem predominante sugere que grande parte da região atômica não apresenta concentração elevada de carga positiva; a repulsão intensa de algumas indica centro pequeno e fortemente carregado.",
        "pitfall": "Não diga que o experimento provou órbitas circulares determinadas para os elétrons. Ele fundamentou um núcleo positivo pequeno, mas não resolveu a descrição quântica da eletrosfera.",
        "steps": [
          "Separe observação do feixe e inferência sobre o átomo.",
          "Relacione grandes deflexões à concentração de carga positiva.",
          "Explique por que a estrutura de Thomson não descrevia bem o padrão observado."
        ]
      },
      {
        "level": "advanced",
        "title": "Bohr, saltos energéticos e os limites das órbitas",
        "explanation": "Bohr propôs, em 1913, um modelo de estados de energia permitidos para explicar o espectro do hidrogênio e sua estabilidade no contexto da época. Na apresentação escolar, elétrons ocupam níveis discretos e podem absorver ou emitir radiação ao mudar entre esses estados. A energia do fóton é E=hf, proporcional à frequência f; a energia de transição corresponde à diferença entre os níveis, tomando módulo positivo para o fóton emitido. Uma descida do estado −1,5 eV ao estado −3,4 eV corresponde à emissão de 1,9 eV, pois o átomo diminui sua energia. Essa descrição permite entender por que certas linhas espectrais aparecem em frequências determinadas, e não em qualquer valor contínuo. O modelo de Bohr tem aplicações relevantes em sistemas hidrogenoides, mas não é teoria completa de átomos multieletrônicos. Na mecânica quântica moderna, orbitais são descrições probabilísticas de estados eletrônicos, não caminhos circulares exatos fotografáveis. A compreensão rigorosa distingue energia quantizada, emissão e absorção, e o domínio de validade histórico do modelo.",
        "example": "Considere o elétron num nível de −1,5 eV que passa a −3,4 eV. A energia do átomo muda em −3,4−(−1,5)=−1,9 eV. Essa diferença negativa significa perda de energia do átomo e emissão de fóton com energia positiva de 1,9 eV. Para realizar a transição contrária, o átomo precisaria absorver a energia correspondente.",
        "pitfall": "Não confunda orbital de mecânica quântica com trajetória circular rígida. O modelo de Bohr explica transições em contextos específicos, mas não descreve perfeitamente todos os elementos e ligações químicas.",
        "steps": [
          "Identifique os dois níveis de energia e o sentido da transição.",
          "Calcule a diferença e tome módulo positivo para a energia do fóton.",
          "Confronte o modelo de Bohr com a noção moderna de orbital e seus limites."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual evidência levou Thomson a propor um átomo divisível?",
        "options": [
          "A observação de elétrons em raios catódicos.",
          "A descoberta do núcleo por espalhamento alfa.",
          "A formulação de orbitais quânticos.",
          "A observação do espectro solar por Bohr."
        ],
        "correctIndex": 0,
        "hint": "O modelo de Thomson incorpora partículas negativas menores que o átomo.",
        "solution": "A alternativa A está correta: raios catódicos demonstraram partículas de carga negativa, levando a um modelo atômico divisível. Rutherford e Bohr trabalharam com outros dados, posteriormente."
      },
      {
        "level": "intermediate",
        "prompt": "O raro espalhamento intenso de partículas alfa foi interpretado por Rutherford como evidência de:",
        "options": [
          "Carga positiva homogênea em todo o volume.",
          "Ausência de estrutura no átomo.",
          "Uma região nuclear pequena e de carga positiva concentrada.",
          "Elétrons que não exercem interação elétrica."
        ],
        "correctIndex": 2,
        "hint": "A maioria das partículas passava quase sem desvio, mas uma pequena fração era fortemente repelida.",
        "solution": "A alternativa C está correta: o núcleo concentra carga positiva e explica desvios intensos raros. Os distratores são incompatíveis com a natureza do espalhamento e com a interpretação nuclear."
      },
      {
        "level": "advanced",
        "prompt": "Um átomo passa de −1,5 eV para −3,4 eV. Qual energia pode ter o fóton emitido?",
        "options": [
          "−4,9 eV",
          "1,9 eV",
          "−1,9 eV",
          "4,9 eV"
        ],
        "correctIndex": 1,
        "hint": "A energia do fóton emitido é o módulo da diferença entre os níveis.",
        "solution": "A alternativa B está correta: ΔE do átomo é −1,9 eV e o fóton leva 1,9 eV. Energia de fóton não é negativa; 4,9 eV resultaria da soma equivocada dos módulos dos níveis."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Divisões celulares: compreensão das funções da mitose e da meiose",
    "objective": "Distinguir as etapas e finalidades de mitose e meiose, reconhecer a replicação do DNA e as separações de homólogos e cromátides, calcular ploidia e explicar recombinação, segregação e não disjunção.",
    "prerequisites": [
      "DNA, cromossomos e cromátides",
      "Ciclo celular",
      "Diploidia e haploidia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Replicação de DNA não dobra a contagem de cromossomos",
        "explanation": "Antes da divisão celular, uma célula pode duplicar seu DNA na fase S da intérfase. Cada cromossomo passa a possuir duas cromátides-irmãs unidas na região centromérica. Pelo critério escolar de contar cromossomos por centrômero, uma célula 2n=8 após replicação continua com oito cromossomos, agora duplicados, contendo 16 cromátides. A distinção é essencial para não confundir quantidade de DNA e número de cromossomos. A mitose distribui cromátides-irmãs entre células-filhas em processos de crescimento, renovação e outras funções. Em condições usuais, produz células com mesma ploidia da célula de origem. As fases didáticas incluem prófase, metáfase, anáfase e telófase; o processo de citocinese separa o citoplasma e não deve ser confundido automaticamente com cada etapa nuclear. Em células animais e vegetais, os mecanismos de citocinese apresentam diferenças. A mitose não implica que todas as células-filhas serão para sempre geneticamente idênticas, pois mutações e alterações podem ocorrer. O ponto fundamental é acompanhar o que se separa e como se conserva o número cromossômico habitual.",
        "example": "Uma célula somática hipotética tem 2n=8. Antes da fase S, possui oito cromossomos com uma cromátide cada. Após replicação, tem oito cromossomos com duas cromátides, totalizando 16 cromátides. Depois da mitose e citocinese usuais, cada uma das duas células-filhas volta a apresentar 2n=8 com cromossomos não duplicados em G1.",
        "pitfall": "Não responda que replicar DNA transforma automaticamente 2n=8 em 2n=16. A quantidade de moléculas de DNA aumenta, mas a ploidia e a contagem cromossômica convencional permanecem até a segregação.",
        "steps": [
          "Defina a ploidia inicial e a etapa do ciclo celular.",
          "Acompanhe cromossomos e cromátides separadamente.",
          "Identifique o produto da mitose, sem confundir divisão nuclear e citocinese."
        ]
      },
      {
        "level": "intermediate",
        "title": "Meiose I e II: duas separações com funções diferentes",
        "explanation": "A meiose participa de ciclos sexuais de numerosos eucariotos, reduzindo o número de conjuntos cromossômicos de 2n para n. O DNA é replicado antes de iniciar as divisões, mas não há nova duplicação geral entre meiose I e II. Na primeira divisão, cromossomos homólogos emparelham-se e separam-se para polos distintos, diminuindo a ploidia. Na segunda, normalmente se separam cromátides-irmãs, de modo semelhante ao mecanismo de separação da mitose, mas em células já haploides. Durante prófase I pode ocorrer recombinação entre cromátides não irmãs, chamada crossing-over, que reorganiza variantes herdadas. A orientação aleatória de pares de homólogos na metáfase I contribui para segregação independente, conforme localização dos genes. Esses processos ajudam a explicar diversidade genética, mas não significam que cada gameta terá obrigatoriamente uma mutação nova. Em meioses simétricas, uma célula inicial pode produzir quatro células haploides; em formação de óvulos animais, a distribuição de citoplasma e os produtos funcionais diferem. Para uma célula 2n=6, cada produto usual possui n=3 após as duas divisões.",
        "example": "Considere três pares de cromossomos homólogos, ou 2n=6. Após fase S, há seis cromossomos duplicados, totalizando doze cromátides. Na anáfase I, homólogos migram a polos opostos: os núcleos ficam n=3, com cromossomos ainda duplicados. Na anáfase II, cromátides separam-se e o resultado típico é quatro células n=3.",
        "pitfall": "Não diga que na meiose I ocorre a separação usual das cromátides-irmãs: a redução da ploidia decorre da separação dos homólogos. Também não confunda crossing-over com mutação obrigatória.",
        "steps": [
          "Representar cada par de homólogos antes da divisão e a replicação prévia.",
          "Seguir os homólogos na meiose I e verificar a redução de ploidia.",
          "Seguir as cromátides na meiose II e registrar os produtos haploides."
        ]
      },
      {
        "level": "advanced",
        "title": "Segregação, recombinação e não disjunção",
        "explanation": "As leis de Mendel ganham explicação cromossômica na meiose. Alelos localizados em homólogos diferentes podem separar-se em gametas distintos; pares de cromossomos com orientação independente oferecem combinações diferentes, segundo hipóteses adequadas. Para n pares de homólogos, a contagem idealizada de combinações por orientação independente é 2ⁿ, sem considerar crossing-over. Isso não quer dizer que uma única meiose produzirá 2ⁿ gametas: são possibilidades entre eventos, não número de produtos numa divisão específica. Genes próximos no mesmo cromossomo podem estar ligados e ter proporções de recombinação diferentes das esperadas para segregação independente. Não disjunção é falha de separação de homólogos na meiose I ou de cromátides na meiose II e pode gerar células com cromossomos a mais ou a menos. Um gameta n+1 fecundado por gameta n produz zigoto 2n+1, uma aneuploidia cuja consequência depende do cromossomo e da espécie. As alterações não devem ser interpretadas como resultados invariáveis nem como diagnósticos de indivíduos a partir de uma ilustração. A interpretação de esquemas exige reconhecer estágio, número de cromossomos e relações com o ciclo celular.",
        "example": "Em organismo hipotético 2n=4 há dois pares de homólogos; sem recombinação, há 2²=4 combinações possíveis de origem dos cromossomos em gametas entre meioses diferentes. Se ocorrer não disjunção de um par na meiose I, alguns produtos poderão receber cromossomo extra e outros ficar sem aquele cromossomo. O padrão final depende de qual divisão falhou.",
        "pitfall": "Não use 2ⁿ como número exato de células produzidas por uma única meiose. Também não trate aneuploidia como um efeito único independente do tipo cromossômico e do organismo.",
        "steps": [
          "Associe cada par de homólogos aos alelos que segregam.",
          "Diferencie variação por orientação independente e por recombinação.",
          "Determine em que divisão ocorreu não disjunção antes de calcular os gametas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Após a fase S, uma célula 2n=8 possui normalmente:",
        "options": [
          "16 cromossomos não duplicados.",
          "4 cromossomos duplicados.",
          "8 cromossomos não replicados.",
          "8 cromossomos, cada um com duas cromátides."
        ],
        "correctIndex": 3,
        "hint": "A replicação duplica DNA e forma cromátides, não duplica a ploidia.",
        "solution": "A alternativa D está correta: há oito cromossomos duplicados, ou 16 cromátides, antes da divisão. A e B confundem número de cromossomos e cromátides; C ignora a replicação."
      },
      {
        "level": "intermediate",
        "prompt": "Na anáfase I da meiose, qual separação é característica?",
        "options": [
          "Cromátides-irmãs, exclusivamente.",
          "Cromossomos homólogos.",
          "Ribossomos e RNAs.",
          "Membranas nucleares completas na telófase II."
        ],
        "correctIndex": 1,
        "hint": "A primeira divisão é reducional.",
        "solution": "A alternativa B está correta: pares de homólogos são separados, produzindo redução da ploidia. A separação habitual de cromátides-irmãs ocorre na meiose II; as demais não descrevem o evento."
      },
      {
        "level": "advanced",
        "prompt": "Um gameta com n+1 cromossomos se une a outro de n. Qual será a ploidia numérica esperada do zigoto?",
        "options": [
          "n−1",
          "4n",
          "2n+1",
          "2n−1"
        ],
        "correctIndex": 2,
        "hint": "Some a contribuição cromossômica dos gametas.",
        "solution": "A alternativa C está correta: (n+1)+n=2n+1, uma aneuploidia. As demais opções não resultam dessa soma. O efeito biológico concreto depende de qual cromossomo foi envolvido."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "O Regime Civil-Militar",
    "objective": "Analisar a ruptura política de 1964 no Brasil, os Atos Institucionais e o AI-5, a repressão, a resistência e o modelo econômico, e situar a abertura, a anistia, as Diretas Já e a Constituição de 1988.",
    "prerequisites": [
      "História republicana brasileira",
      "Guerra Fria",
      "Democracia e direitos políticos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "1964: golpe, participação civil e poder de exceção",
        "explanation": "Em 1964, o presidente João Goulart foi deposto por um golpe que envolveu setores militares e civis e interrompeu a ordem constitucional brasileira. A crise ocorreu num ambiente de disputas políticas, debates sobre reformas de base, oposição de segmentos econômicos e sociais e tensões da Guerra Fria. Explicá-la exige examinar a ação de grupos diferentes, não tratar uma única manifestação como causa suficiente. O novo regime aumentou o controle das Forças Armadas sobre o Estado e utilizou mecanismos de exceção para restringir oposição política. O Ato Institucional nº 1, de abril de 1964, abriu caminho para cassações de mandatos e suspensão de direitos, além de transformações na relação entre governo e instituições representativas. A existência de certas eleições durante a ditadura não significa plena liberdade eleitoral ou competição equivalente à de uma democracia. Para ler documentos do período, distinga a justificativa oficial, como defesa de ordem, de seus efeitos verificáveis sobre direitos, imprensa, sindicatos e participação. Uma análise histórica conecta atos legais, experiências de perseguidos e transformações institucionais.",
        "example": "Compare o quadro anterior ao golpe, com João Goulart na Presidência, e o posterior, quando instrumentos excepcionais permitiram cassar direitos e mandatos. A deposição foi ruptura política, e não alternância eleitoral regular. Ao analisar fonte oficial que defende a medida como solução para uma crise, pergunte quais garantias foram suspensas e quem perdeu capacidade de oposição.",
        "pitfall": "Não confunda a manutenção formal de Congresso e eleições para certos cargos com garantia de democracia. O regime restringiu liberdades e utilizou mecanismos de exceção mesmo quando instituições continuavam existindo.",
        "steps": [
          "Situe atores, reformas e conflitos anteriores a 1964.",
          "Identifique a deposição do presidente e medidas políticas posteriores.",
          "Diferencie discurso oficial e consequências institucionais concretas."
        ]
      },
      {
        "level": "intermediate",
        "title": "AI-5, censura, resistência e crescimento econômico",
        "explanation": "O Ato Institucional nº 5, editado em dezembro de 1968, intensificou a concentração de poder e a repressão, permitindo medidas como fechamento do Congresso e restrição de garantias. A ditadura exerceu censura sobre imprensa, artes e meios de comunicação, e agentes do Estado praticaram prisões arbitrárias, tortura e desaparecimentos forçados. Esses acontecimentos são objeto de investigações históricas e oficiais e precisam ser descritos sem relativização. A oposição ao regime assumiu formas diversas, incluindo manifestações estudantis, mobilizações de trabalhadores, atividades parlamentares, iniciativas religiosas e artísticas e grupos que aderiram à luta armada; não havia uma única organização ou estratégia. No mesmo período, houve crescimento econômico acelerado no chamado milagre econômico, aproximadamente entre 1968 e 1973. Crescimento de produto agregado não representa distribuição igual de renda nem elimina a existência de censura ou perseguição. Ao comparar índices econômicos e notícias, observe anos, valores, inflação, salários e grupos atingidos. É possível analisar a política econômica criticamente sem confundir os mecanismos econômicos com a avaliação dos direitos humanos.",
        "example": "Uma prova apresenta três fontes: um jornal com trecho censurado, um decreto de 1968 e um gráfico de crescimento do PIB. O decreto aponta instrumentos de exceção, a censura evidencia limites de expressão, e o PIB informa produção econômica agregada. Nenhuma dessas fontes autoriza deduzir que o crescimento eliminou desigualdades ou que a repressão não ocorreu.",
        "pitfall": "Não coloque o AI-5 na data do golpe inicial: ele foi editado em dezembro de 1968. Também não trate a existência de crescimento econômico como prova de legitimidade democrática ou respeito a direitos.",
        "steps": [
          "Construa linha do tempo entre golpe, AI-5 e período de crescimento.",
          "Distinga censura, resistência e diferentes grupos afetados.",
          "Leia dados econômicos sem inferir distribuição de renda ou ausência de repressão."
        ]
      },
      {
        "level": "advanced",
        "title": "Abertura, Diretas Já e a transição institucional",
        "explanation": "Na segunda metade dos anos 1970, processos de abertura política foram impulsionados por pressões sociais e disputas dentro do regime. A transição não foi linear nem eliminou de imediato formas de controle. Organizações civis, sindicatos, estudantes e familiares de perseguidos mobilizaram-se por direitos, eleições e responsabilização. A Lei da Anistia de 1979 marcou parte desse processo, mas seu alcance e sua interpretação jurídica sobre violações de direitos humanos permanecem temas de debate. Em 1984, o movimento Diretas Já reivindicou eleições diretas para a Presidência. Apesar da grande mobilização, a proposta de emenda constitucional não foi aprovada pelo Congresso naquele momento. A escolha presidencial de 1985 ocorreu indiretamente por Colégio Eleitoral: Tancredo Neves foi eleito, mas faleceu antes de assumir, e José Sarney tornou-se presidente. A Constituição de 1988 consolidou novo marco institucional e ampliou garantias e direitos no processo de redemocratização. Esses fatos precisam ser distinguidos: mobilização por voto direto, eleição indireta de transição e elaboração constitucional são etapas relacionadas, mas diferentes.",
        "example": "Organize os marcos: Lei da Anistia em 1979; campanha Diretas Já em 1984; eleição presidencial indireta em 1985, com escolha de Tancredo Neves e posse de José Sarney; Constituição de 1988. A sequência demonstra que campanha por eleição direta não significa que o presidente de 1985 tenha sido eleito diretamente pela população.",
        "pitfall": "Não afirme que Tancredo Neves tomou posse como presidente nem que Diretas Já garantiu eleição direta em 1985. Tancredo foi eleito indiretamente, morreu antes da posse, e a Constituição veio apenas em 1988.",
        "steps": [
          "Compare cronologicamente anistia, mobilização e transição.",
          "Verifique o mecanismo eleitoral efetivo de 1985.",
          "Diferencie o fim do regime e a consolidação constitucional posterior."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual acontecimento caracteriza o golpe brasileiro de 1964?",
        "options": [
          "Eleição presidencial direta de Tancredo Neves.",
          "Deposição do presidente João Goulart e ruptura da ordem constitucional.",
          "Promulgação da Constituição de 1988.",
          "Aprovação do voto direto para presidente em 1985."
        ],
        "correctIndex": 1,
        "hint": "Observe a substituição do governo constitucional por um regime de exceção.",
        "solution": "A alternativa B está correta: a deposição de Goulart em 1964 deu início à ditadura com participação de setores civis e militares. As outras opções mencionam processos posteriores ou incorretos."
      },
      {
        "level": "intermediate",
        "prompt": "Qual medida de 1968 intensificou instrumentos repressivos e a concentração de poder?",
        "options": [
          "Ato Institucional nº 5.",
          "Constituição de 1988.",
          "Lei da Anistia de 1979.",
          "Plano Real de 1994."
        ],
        "correctIndex": 0,
        "hint": "Procure o ato institucional editado em dezembro de 1968.",
        "solution": "A alternativa A está correta: o AI-5 ampliou instrumentos de exceção e restrições políticas. Constituição, anistia e Plano Real são marcos de outros períodos e finalidades."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre as Diretas Já e a sucessão presidencial de 1985 é correta?",
        "options": [
          "A eleição direta presidencial ocorreu em 1985 após aprovação da emenda.",
          "A Constituição de 1988 foi promulgada antes da campanha.",
          "A mobilização de 1984 não resultou em eleição direta em 1985, que ocorreu por Colégio Eleitoral.",
          "Tancredo Neves exerceu integralmente o mandato até 1988."
        ],
        "correctIndex": 2,
        "hint": "Diferencie reivindicação popular e procedimento constitucional efetivo na transição.",
        "solution": "A alternativa C está correta: a emenda das diretas não foi aprovada e a eleição de 1985 foi indireta. Tancredo morreu antes de tomar posse, e a Constituição foi promulgada em 1988."
      }
    ]
  }
];
