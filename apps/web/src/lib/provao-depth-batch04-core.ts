import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Authorial grammar, geometry and citizenship classes. */
export const provaoDepthBatch04Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Português",
    "topicStart": "Classes de palavras: substantivo, artigo",
    "objective": "Reconhecer classes gramaticais conforme forma, função e contexto, diferenciar classes variáveis e invariáveis, interpretar mudança de categoria e aplicar análise morfossintática em enunciados reais.",
    "prerequisites": [
      "Palavra e sentido",
      "Frase e oração",
      "Gênero e número"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Classes variáveis: nomear, determinar e qualificar",
        "explanation": "Classes de palavras agrupam unidades linguísticas por propriedades formais e funcionais, não apenas por sua posição num dicionário. Substantivos podem nomear seres, lugares, processos e ideias: “escola”, “alegria” e “viagem”. Artigos determinam substantivos com valores discursivos, como “uma escola” e “a escola”, cuja diferença pode sinalizar apresentação ou retomada de referente. Adjetivos caracterizam ou especificam nomes, e numerais exprimem quantificação ou ordenação em certos usos.\n\nPronomes podem retomar, substituir ou acompanhar substantivos, contribuindo para coesão textual. Em “Mariana trouxe seu caderno. Ela o entregou”, “ela” e “o” retomam referentes anteriores, mas a interpretação depende do contexto. Verbos expressam eventos, estados e processos, flexionando-se em pessoa, número, tempo, modo e, em diferentes construções, aspecto e voz. Essas classes, em geral, admitem alguma flexão.\n\nA análise de classes se completa quando observamos função na frase. Em “o jantar terminou cedo”, “jantar” funciona como substantivo; em “vamos jantar”, funciona como verbo. Portanto, a mesma sequência de letras pode pertencer a classes distintas conforme estrutura e sentido.",
        "example": "Compare “O olhar dela era atento” e “Ela vai olhar a paisagem”. Na primeira frase, artigo o acompanha “olhar”, que funciona como substantivo. Na segunda, “olhar” é verbo no infinitivo, ligado a “vai”. A classificação depende da construção, não apenas da palavra isolada.",
        "pitfall": "Não classifique toda palavra terminada em -mente como substantivo nem todo termo que nomeia qualidade como adjetivo. Use critérios morfológicos e sintáticos combinados.",
        "steps": [
          "Localize a palavra e observe termos que a acompanham.",
          "Verifique flexão e posição na estrutura, além do significado.",
          "Teste a função em mais de um enunciado para evitar classificação mecânica."
        ]
      },
      {
        "level": "intermediate",
        "title": "Advérbio, preposição, conjunção e interjeição",
        "explanation": "Advérbios modificam, em muitos usos, verbos, adjetivos, outros advérbios ou o enunciado como um todo: “falou lentamente”, “muito difícil”, “provavelmente, sairemos”. Em regra, advérbios são invariáveis, mas o português apresenta fenômenos de gradação e usos variados que precisam ser descritos com cuidado. A palavra “muito” pode funcionar como intensificador invariável em “muito feliz” ou como determinante variável em “muitas pessoas”.\n\nPreposições estabelecem relações entre termos: de, a, com e para podem expressar origem, destino, instrumento e outras ideias conforme contexto. Conjunções conectam orações ou termos coordenados, indicando adição, oposição, causa, condição e concessão; “porque” introduz causa em muitos enunciados, “embora” introduz concessão e “mas” pode marcar contraste. Interjeições exprimem reações e valores expressivos, como “Nossa!” ou “Ah!”, mas não substituem análise da situação comunicativa.\n\nÉ importante reconhecer locuções: “de repente” pode funcionar como locução adverbial, enquanto “à medida que” pode conectar orações com valor proporcional. Uma palavra isolada não determina todas as relações de sentido; a oração e o gênero importam.",
        "example": "Em “Ela chegou muito cedo, mas saiu rapidamente”, “muito” modifica “cedo”, que é advérbio temporal, e “rapidamente” indica modo. “Mas” liga orações com contraste. Em “Muitas pessoas chegaram”, “muitas” acompanha substantivo e apresenta flexão no plural.",
        "pitfall": "Não confunda preposição e conjunção simplesmente porque ambas ligam elementos. Preposições ligam termos ou estruturas; conjunções podem articular orações com valores lógico-discursivos distintos.",
        "steps": [
          "Identifique a relação de sentido expressa no enunciado.",
          "Verifique se o termo modifica palavra, conecta oração ou exprime reação.",
          "Considere locuções e o uso específico antes de atribuir classe."
        ]
      },
      {
        "level": "advanced",
        "title": "Substantivação e mudança de classe em contexto",
        "explanation": "Uma classe gramatical pode ser reconhecida pela função efetiva no enunciado. Na substantivação, elementos de outra classe ocupam posição nominal: “o belo” e “o amanhã” podem funcionar como substantivos em contextos específicos. Essa análise mostra que classificação gramatical não é simples memorização de significados fixos. Em português, flexão, determinantes, possibilidade de plural e posição na frase oferecem pistas.\n\nEm “Eles trabalham bastante”, “bastante” modifica o verbo, funcionando como advérbio; em “Existem bastantes razões”, a palavra modifica o substantivo no uso variável admitido pela norma-padrão. Em “O não foi definitivo”, “não” participa de substantivação por meio do artigo. O julgamento da classe deve ser feito com referência à organização da oração e ao efeito discursivo.\n\nExames podem solicitar classes de palavras para fundamentar coesão, concordância e interpretação. Ao reconhecer pronome referencial, por exemplo, determine o antecedente para não atribuir ação ao participante errado. Em textos literários, mudanças de classe também produzem efeitos estilísticos, tornando substantivos aquilo que normalmente é qualidade ou circunstância. A classificação deve servir à compreensão do texto.",
        "example": "Compare “O difícil chegou depois” com “A questão era difícil”. No primeiro, “o difícil” substantiva uma qualidade para tratá-la como entidade no discurso; no segundo, “difícil” modifica ou predica sobre “questão”. O efeito varia de acordo com função sintática e contexto.",
        "pitfall": "Evite supor que a categoria de uma palavra seja imutável em qualquer frase. Ao mesmo tempo, não mude a classificação sem evidência de função ou estrutura no enunciado.",
        "steps": [
          "Localize determinantes, flexões e funções nominais ou verbais.",
          "Compare duas ocorrências da mesma palavra em contextos diferentes.",
          "Explique como a classificação influencia sentido, concordância ou coesão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em “O jantar terminou cedo”, a palavra “jantar” funciona como:",
        "options": [
          "Verbo no infinitivo.",
          "Substantivo, introduzido por artigo.",
          "Advérbio de modo.",
          "Conjunção temporal."
        ],
        "correctIndex": 1,
        "hint": "Veja o artigo que antecede a palavra.",
        "solution": "A alternativa B está correta: “o” determina “jantar”, que ocupa posição nominal como núcleo do sujeito. Em “vamos jantar”, a mesma sequência atuaria como verbo."
      },
      {
        "level": "intermediate",
        "prompt": "Na frase “Ela chegou muito cedo”, “muito” funciona como:",
        "options": [
          "Pronome pessoal.",
          "Substantivo.",
          "Advérbio intensificador de “cedo”.",
          "Artigo definido."
        ],
        "correctIndex": 2,
        "hint": "Observe o que a palavra modifica.",
        "solution": "A alternativa C está correta: “muito” intensifica “cedo”, formando uma relação adverbial. Não acompanha substantivo nem substitui participante da oração nesse contexto."
      },
      {
        "level": "advanced",
        "prompt": "A diferença entre “bastante” em “trabalhou bastante” e “bastantes pessoas chegaram” é que:",
        "options": [
          "O primeiro é verbo, o segundo advérbio.",
          "Ambos são sempre substantivos.",
          "O primeiro é artigo e o segundo conjunção.",
          "O primeiro é advérbio invariável; o segundo acompanha substantivo e flexiona."
        ],
        "correctIndex": 3,
        "hint": "Compare flexão e palavra modificada.",
        "solution": "A alternativa D é correta: “trabalhou bastante” usa advérbio; “bastantes pessoas” usa determinante variável associado ao nome, admitido na norma-padrão. As demais atribuem classes incompatíveis às construções."
      }
    ]
  },
  {
    "subject": "Português",
    "topicStart": "Frase, oração e período",
    "objective": "Distinguir frase, oração e período, identificar verbos e locuções, reconhecer período simples e composto e analisar coordenação e subordinação em textos.",
    "prerequisites": [
      "Verbos e locuções verbais",
      "Pontuação",
      "Classes gramaticais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Frase não é sinônimo de oração",
        "explanation": "Frase é um enunciado capaz de produzir sentido numa situação comunicativa, podendo ser nominal ou verbal. “Silêncio!” e “Boa noite!” são frases sem verbo expresso. Oração é uma unidade organizada em torno de verbo ou locução verbal e pode integrar enunciados maiores. Período é uma sequência sintática delimitada por pausa final ou pontuação pertinente, composta por uma ou mais orações em sua análise escolar.\n\nEm “Choveu ontem.” temos uma frase verbal, uma oração e um período simples. Em “Quando choveu, as ruas alagaram.” há duas orações (“quando choveu” e “as ruas alagaram”) dentro do mesmo período composto. Contar letras ou vírgulas não determina quantas orações existem. O número de núcleos verbais — considerados corretamente em locuções — é uma pista importante.\n\nUma locução verbal como “vai estudar” funciona como um único núcleo verbal para fins de contagem de orações no uso apresentado. É preciso distinguir “vai estudar” de dois verbos de orações diferentes articuladas, como “saiu e estudou”. A análise sintática serve à compreensão das relações de sentido, não apenas à contagem de estruturas.",
        "example": "Em “Que dia lindo!”, não há verbo expresso: é frase nominal. Em “O dia amanheceu lindo”, há oração com verbo “amanheceu”. Em “O dia amanheceu lindo e todos saíram”, encontramos duas orações no mesmo período, ligadas por “e”.",
        "pitfall": "Não conclua que toda frase precisa de verbo. Também não conte “vai estudar” como duas orações só porque há dois verbos escritos: trata-se de locução verbal.",
        "steps": [
          "Localize o enunciado e verifique se há verbo ou locução.",
          "Conte núcleos oracionais, não vírgulas ou palavras.",
          "Distinga frase nominal, período simples e composto."
        ]
      },
      {
        "level": "intermediate",
        "title": "Coordenação: orações com autonomia sintática",
        "explanation": "Coordenação articula orações que não desempenham, entre si, a função sintática de um termo de outra oração. Elas podem ser assindéticas, quando não ligadas por conjunção explícita, ou sindéticas, quando conectadas por conjunções coordenativas. Valores comuns incluem adição, oposição, alternância, conclusão e explicação, conforme construção.\n\nEm “Estudou bastante, mas ficou nervosa”, a conjunção “mas” marca contraste entre duas informações, sem tornar uma oração sujeito ou complemento sintático da outra. Em “Ele chegou e abriu a janela”, “e” indica adição/sequência no contexto. Classificar conjunções não implica que sempre expressem uma única relação independente do uso.\n\nUm texto pode apresentar orações coordenadas por vírgulas e ponto e vírgula: “O céu escureceu; o vento aumentou; começou a chover”. O valor de sequência é construído pelo contexto, mesmo sem conectivos. A análise de coordenação também ajuda a evitar períodos muito longos sem estrutura clara, mas não existe regra segundo a qual só períodos simples são corretos.",
        "example": "Em “A turma revisou a matéria, porém a prova exigia aplicação”, “porém” introduz oração coordenada adversativa. O contraste está entre a revisão realizada e a exigência da prova; não significa que a revisão tenha sido necessariamente inútil.",
        "pitfall": "Não classifique todas as conjunções pelo som ou posição: identifique relação entre ideias e autonomia sintática. Algumas palavras podem ter usos diferentes em estruturas distintas.",
        "steps": [
          "Localize núcleos verbais e limites das orações.",
          "Verifique se existe relação de dependência sintática entre elas.",
          "Classifique conectivos a partir do valor real no enunciado."
        ]
      },
      {
        "level": "advanced",
        "title": "Subordinação e relações de sentido no período",
        "explanation": "Uma oração subordinada integra a estrutura de outra, podendo exercer função nominal, adjetiva ou adverbial. Em “Espero que a aula comece”, “que a aula comece” funciona como complemento do verbo esperar no uso dado, numa oração subordinada substantiva. Em “O livro que comprei chegou”, “que comprei” caracteriza “livro”, atuando como oração adjetiva. A função define a análise, não apenas a presença da palavra “que”.\n\nOrações adverbiais exprimem relações como causa, condição, concessão e tempo: “Se chover, ficaremos em casa” expressa condição; “Embora chova, sairemos” expressa concessão. A escolha entre “porque”, “embora” e “se” altera a estrutura lógica. Identificar uma oração subordinada exige perguntar que papel ela ocupa no conjunto do período e qual relação de sentido estabelece.\n\nEm leitura e revisão, a pontuação pode contribuir para diferenciar orações adjetivas restritivas de explicativas em exemplos apropriados. “Os alunos que estudaram passaram” seleciona subconjunto; “Os alunos, que estudaram, passaram” apresenta uma informação explicativa sobre grupo já determinado. A interpretação depende da situação comunicativa e não de uma vírgula isolada sem contexto.",
        "example": "Compare “Os pesquisadores que publicaram os dados foram reconhecidos” com “Os pesquisadores, que publicaram os dados, foram reconhecidos”. A primeira estrutura pode restringir quais pesquisadores são tratados; a segunda acrescenta informação explicativa sobre um conjunto identificado.",
        "pitfall": "Não suponha que toda oração iniciada por “que” seja subordinada substantiva: ela pode funcionar como adjetiva ou ter outra análise. A função sintática é decisiva.",
        "steps": [
          "Divida o período em orações e identifique seus núcleos verbais.",
          "Determine qual oração exerce função na estrutura de outra.",
          "Examine conectivos e pontuação para interpretar relações e restrições."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "“Que noite agradável!” é um exemplo de:",
        "options": [
          "Frase nominal sem verbo expresso.",
          "Período composto com duas orações.",
          "Oração subordinada temporal.",
          "Locução verbal com dois verbos."
        ],
        "correctIndex": 0,
        "hint": "Procure verbo no enunciado.",
        "solution": "A alternativa A está correta: o enunciado comunica sentido sem verbo expresso, caracterizando frase nominal. As demais atribuem estruturas verbais inexistentes."
      },
      {
        "level": "intermediate",
        "prompt": "Em “Estudou, mas ficou nervosa”, a relação entre orações é de:",
        "options": [
          "Subordinação causal.",
          "Coordenação adversativa.",
          "Subordinação temporal.",
          "Coordenação alternativa."
        ],
        "correctIndex": 1,
        "hint": "A palavra “mas” marca contraste.",
        "solution": "A alternativa B está correta: as duas orações são coordenadas e “mas” estabelece oposição ou contraste. Não há função sintática subordinada na segunda oração."
      },
      {
        "level": "advanced",
        "prompt": "Em “O livro que comprei chegou”, “que comprei” funciona como:",
        "options": [
          "Oração principal.",
          "Oração subordinada adverbial causal.",
          "Oração subordinada adjetiva que caracteriza “livro”.",
          "Oração coordenada sindética conclusiva."
        ],
        "correctIndex": 2,
        "hint": "Verifique qual substantivo o trecho modifica.",
        "solution": "A alternativa C está correta: “que comprei” restringe ou caracteriza o referente “livro”, funcionando como oração adjetiva. Não indica causa nem conclusão independente."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Áreas de polígonos",
    "objective": "Derivar e aplicar áreas de triângulos, paralelogramos, trapézios e figuras compostas, reconhecer unidades quadradas e resolver problemas de decomposição e reconfiguração geométrica.",
    "prerequisites": [
      "Comprimentos e unidades",
      "Multiplicação",
      "Figuras planas e altura relativa à base"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Área mede superfície, não contorno",
        "explanation": "Área é a medida de uma região plana, expressa em unidades quadradas como cm² ou m². Perímetro mede o comprimento do contorno, com unidades lineares. Para um retângulo de comprimento b e altura h, A=bh; um paralelogramo pode ser recortado e reorganizado em retângulo de mesma base e altura perpendicular, justificando também A=bh. Inclinar lados sem mudar base e altura não altera a área do paralelogramo.\n\nO triângulo com base b e altura correspondente h tem A=bh/2, pois dois triângulos congruentes podem compor um paralelogramo sob construção adequada. A altura é distância perpendicular à reta da base, que pode ficar fora da região em triângulos obtusângulos. Não é correto substituir automaticamente um lado inclinado pela altura.\n\nUnidades precisam acompanhar o cálculo. Se a base mede 8 cm e a altura 5 cm, a área do triângulo é 8×5/2=20 cm². Um erro comum é responder 20 cm, unidade de comprimento, ou multiplicar por dois em vez de dividir.",
        "example": "Um terreno triangular tem base de 12 m e altura de 7 m. Sua área é (12×7)/2=42 m². Se uma cerca contorna a região, o comprimento de cerca dependerá dos três lados e não pode ser calculado apenas a partir da área.",
        "pitfall": "Não confunda altura com lado oblíquo. A fórmula A=bh/2 usa altura perpendicular à base escolhida, e a resposta final deve apresentar unidade ao quadrado.",
        "steps": [
          "Identifique qual região precisa ter área calculada.",
          "Escolha base e altura perpendicular com unidades equivalentes.",
          "Aplique a relação correta e confira unidade e ordem de grandeza."
        ]
      },
      {
        "level": "intermediate",
        "title": "Trapézios e decomposição de figuras",
        "explanation": "Um trapézio com bases paralelas B e b e altura h possui área A=(B+b)h/2. Uma justificativa geométrica pode reunir dois trapézios congruentes para formar paralelogramo com base B+b e altura h, de área (B+b)h. O trapézio corresponde à metade da região formada. O valor não depende de os lados laterais serem iguais, mas é preciso conhecer a altura perpendicular.\n\nFiguras compostas podem ser decompostas em retângulos, triângulos e trapézios ou calculadas por subtração da área de recortes. O método de decomposição não deve criar sobreposição nem deixar lacunas. Para uma região em forma de L, pode ser mais simples calcular área de retângulo maior e retirar retângulo ausente.\n\nQuando medidas estão em unidades diferentes, converta antes de combinar. Uma figura com lados em cm e m exige colocá-los numa mesma unidade, evitando resultados como “cm×m” sem interpretação correta. Se o desenho está fora de escala, a figura visual não substitui os comprimentos informados.",
        "example": "Um trapézio tem bases 10 cm e 6 cm e altura 4 cm. A=(10+6)×4/2=32 cm². Se houver abertura retangular de área 8 cm² que não se sobrepõe às bordas, a região remanescente mede 32−8=24 cm².",
        "pitfall": "Não multiplique apenas a diferença das bases pela altura para obter área. A fórmula usa a soma das bases, e decomposições precisam evitar contar regiões duas vezes.",
        "steps": [
          "Escolha fórmula para cada região simples da figura.",
          "Some áreas não sobrepostas ou subtraia recortes do total.",
          "Confirme consistência de unidades e compare com a região desenhada."
        ]
      },
      {
        "level": "advanced",
        "title": "Reconfiguração, semelhança e otimização geométrica",
        "explanation": "Duas figuras semelhantes têm comprimentos correspondentes em razão k e áreas em razão k². Se um triângulo é ampliado por fator 3 em todas as dimensões, sua área cresce por fator 9, e não apenas 3. Isso decorre de a área depender do produto de duas medidas de comprimento. A razão entre volumes de sólidos semelhantes, por outro lado, envolve potência cúbica, não quadrática.\n\nDecomposição e reconfiguração permitem deduzir áreas sem decorar muitas fórmulas. Um polígono irregular pode ser dividido em triângulos cujas bases e alturas são conhecidas; quando faltam comprimentos, relações geométricas e semelhança podem ajudar. O cálculo deve respeitar orientação e evitar sobreposição entre peças. Em geometria analítica, área pode ser deduzida de coordenadas em condições específicas.\n\nProblemas de custo de piso, tinta ou cobertura exigem converter unidades e acrescentar perdas ou margens somente se o enunciado fornecer critério. Se o preço é por metro quadrado, calcular perímetro não fornece valor adequado. Em análise crítica, avalie se a medida apresentada é suficiente para determinar a área de maneira única.",
        "example": "Um jardim triangular tem base 6 m e altura 4 m, área 12 m². Ao ampliar todas as medidas lineares por 1,5, a base torna-se 9 m e a altura 6 m, área 27 m². A razão é 27/12=2,25=1,5², ilustrando a lei de escala quadrática.",
        "pitfall": "Não confunda fator de ampliação linear com aumento proporcional de área. Uma ampliação linear de 50% aumenta a área em 125%, se a figura permanecer semelhante.",
        "steps": [
          "Determine se a figura mudou por semelhança ou por transformação sem preservação de forma.",
          "Use decomposição ou razão de áreas k² conforme o caso.",
          "Verifique se há dados suficientes e interprete unidades no contexto do problema."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a área de triângulo de base 8 cm e altura perpendicular 5 cm?",
        "options": [
          "13 cm²",
          "40 cm²",
          "20 cm²",
          "20 cm"
        ],
        "correctIndex": 2,
        "hint": "A=base×altura/2.",
        "solution": "A alternativa C está correta: 8×5/2=20 cm². A soma de comprimentos não determina área, 40 cm² esquece a divisão por dois e 20 cm tem unidade de comprimento."
      },
      {
        "level": "intermediate",
        "prompt": "Um trapézio tem bases 10 cm e 6 cm e altura 4 cm. Sua área vale:",
        "options": [
          "32 cm²",
          "16 cm²",
          "24 cm²",
          "64 cm²"
        ],
        "correctIndex": 0,
        "hint": "Some as bases e multiplique pela altura, dividindo por dois.",
        "solution": "A alternativa A está correta: (10+6)×4/2=32 cm². As demais resultam de operações incompletas com bases ou altura. A fórmula utiliza a soma das duas bases paralelas, multiplicada pela altura perpendicular e dividida por dois."
      },
      {
        "level": "advanced",
        "prompt": "Uma figura semelhante à original tem comprimentos multiplicados por 3. A área fica:",
        "options": [
          "Três vezes maior.",
          "Seis vezes maior.",
          "Vinte e sete vezes maior.",
          "Nove vezes maior."
        ],
        "correctIndex": 3,
        "hint": "Área envolve duas dimensões lineares.",
        "solution": "A alternativa D está correta: a área de figuras semelhantes varia com o quadrado do fator, 3²=9. Três é razão linear e vinte e sete é razão volumétrica de sólidos semelhantes."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topicStart": "A Filosofia e o filosofar",
    "objective": "Distinguir questionamento filosófico de opinião espontânea, mito e investigação científica, desenvolver conceitos, argumentos e objeções e explicar origens e transformações da reflexão filosófica.",
    "prerequisites": [
      "Leitura e interpretação",
      "Conceitos de justificativa e evidência",
      "Noções de ética e lógica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Filosofar é investigar pressupostos e razões",
        "explanation": "Filosofia é uma atividade de investigação crítica sobre conceitos e problemas relativos a conhecimento, realidade, valor, linguagem, política e existência. Filosofar não é apenas expressar opinião livremente: uma afirmação filosófica procura apresentar razões, examinar pressupostos e lidar com objeções. Perguntas como “O que torna uma lei justa?” exigem identificar critérios e argumentos, não somente escolher aquilo de que gostamos.\n\nA filosofia antiga grega tornou-se referência histórica importante da tradição ocidental, mas formas de reflexão crítica também existiram em muitas sociedades. Mito e filosofia não devem ser tratados como escala em que um povo seria menos inteligente: narrativas míticas e argumentos filosóficos podem cumprir funções sociais diferentes. No debate filosófico, conceitos são analisados com foco em coerência, justificações e implicações.\n\nUma pergunta empírica como “Qual a temperatura da água?” pode ser respondida por medição, enquanto “O que caracteriza uma boa explicação científica?” envolve critérios conceituais e epistemológicos. Filosofia e ciência podem dialogar: não são atividades necessariamente incompatíveis ou que se substituem integralmente.",
        "example": "Num debate escolar, alguém diz “uma regra é justa porque todos obedecem”. Filosofar exige questionar se obediência garante justiça, propor um critério e testar casos de regras obedecidas mas discriminatórias. Isso amplia a reflexão além de opinião inicial.",
        "pitfall": "Não conclua que qualquer dúvida ou opinião seja automaticamente argumento filosófico. É necessário explicitar razões e examinar consequências, em vez de apenas repetir preferências pessoais.",
        "steps": [
          "Formule problema filosófico com termo central definido.",
          "Apresente tese e justificativa em premissas reconhecíveis.",
          "Considere pelo menos uma objeção ou contraexemplo relevante."
        ]
      },
      {
        "level": "intermediate",
        "title": "Conceitos, premissas e validade de argumentos",
        "explanation": "Um argumento reúne premissas que procuram sustentar uma conclusão. A validade lógica refere-se à relação entre premissas e conclusão: se uma inferência é válida, não pode ter premissas verdadeiras e conclusão falsa no mesmo modelo lógico. Isso não garante que suas premissas sejam de fato verdadeiras. Uma conclusão pode ser plausível e, ainda assim, decorrer de raciocínio inválido ou insuficientemente fundamentado.\n\nNo silogismo “Todos os mamíferos são vertebrados; todos os cães são mamíferos; logo, todos os cães são vertebrados”, a conclusão decorre das premissas. Já “Todos os estudantes são leitores; Ana é leitora; logo, Ana é estudante” comete erro lógico, pois pode haver leitores que não são estudantes. Identificar uma falácia exige examinar estrutura e contexto, não apenas discordar do resultado.\n\nA filosofia questiona também o significado de conceitos como verdade, causa, liberdade e identidade. Uma discussão pode parecer um desacordo factual, mas esconder definições distintas. Separar conceito, argumento e exemplo permite avaliar posições rivais de modo mais rigoroso e evitar ataques pessoais que não respondem às razões apresentadas.",
        "example": "Se alguém afirma “Todo cientista usa evidências; Joana usa evidências; portanto, Joana é cientista”, a inferência não é válida: usar evidências não é característica exclusiva de cientistas. A conclusão poderia ser verdadeira, mas não é demonstrada pelas premissas dadas.",
        "pitfall": "Não confunda validade com verdade das premissas. Uma inferência pode ser formalmente válida e partir de fatos falsos, ou ter conclusão verdadeira sem que o argumento a prove.",
        "steps": [
          "Separe as frases que funcionam como premissas e conclusão.",
          "Teste se a conclusão decorre necessariamente das premissas.",
          "Questione ambiguidades conceituais e evidências de cada proposição."
        ]
      },
      {
        "level": "advanced",
        "title": "Ética, conhecimento e limites das explicações",
        "explanation": "A filosofia contemporânea dialoga com ciência, arte, religião, tecnologia e política, formulando perguntas sobre pressupostos e implicações de práticas sociais. Em ética, investiga-se o que torna ações justificáveis; em epistemologia, como se obtêm e se avaliam conhecimentos; em filosofia política, por que autoridades e instituições seriam legítimas. As áreas se cruzam, mas utilizam problemas e métodos próprios.\n\nUma análise filosófica madura admite que divergências podem persistir mesmo após clarificação dos fatos, especialmente quando valores ou princípios entram em conflito. Isso não significa que todas as respostas sejam igualmente justificadas. É possível comparar posições por coerência, consistência com evidências, consequências e capacidade de responder a objeções. Evite o relativismo indiscriminado de afirmar que nada pode ser criticado.\n\nAo discutir uso de inteligência artificial em decisões públicas, por exemplo, precisamos de informações técnicas sobre modelos, mas também de argumentos sobre justiça, responsabilidade e transparência. A filosofia ajuda a formular critérios que a medição isolada não define. A reflexão deve distinguir fatos verificáveis de juízos normativos e identificar quem é afetado pelas decisões.",
        "example": "Uma escola usa algoritmo para selecionar candidatos. Medir taxa de acerto é tarefa empírica; perguntar se é justo usar dados que reproduzem desigualdades anteriores é problema ético. Uma avaliação completa precisa tanto de indicadores técnicos quanto de critérios normativos.",
        "pitfall": "Não use reflexão filosófica como desculpa para dispensar evidências. A investigação crítica exige separar dados, definições, inferências e valores, sem reduzir uma parte à outra.",
        "steps": [
          "Formule problema que una dados empíricos e critérios normativos quando apropriado.",
          "Compare perspectivas por coerência, evidências e consequências.",
          "Explique limites da conclusão e as questões que permanecem abertas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual atividade caracteriza melhor investigação filosófica?",
        "options": [
          "Repetir opinião sem justificá-la.",
          "Formular conceitos, justificar afirmações e examinar objeções.",
          "Apenas decorar nomes de filósofos.",
          "Substituir toda medição científica por preferências."
        ],
        "correctIndex": 1,
        "hint": "Filosofar exige razões e exame crítico.",
        "solution": "A alternativa B está correta: investigação filosófica formula problemas, analisa conceitos e avalia justificações. As outras opções reduzem reflexão a repetição, memória isolada ou desprezo por evidências."
      },
      {
        "level": "intermediate",
        "prompt": "“Todos os gatos são mamíferos; Bia é mamífero; logo, Bia é gato.” O erro consiste em:",
        "options": [
          "Aplicar corretamente um silogismo válido.",
          "Usar duas premissas verdadeiras impossíveis.",
          "Concluir pertença a um subconjunto apenas pela pertença ao conjunto maior.",
          "Usar uma conclusão que decorre obrigatoriamente das premissas."
        ],
        "correctIndex": 2,
        "hint": "Ser mamífero não basta para ser gato.",
        "solution": "A alternativa C está correta: a inferência afirma o consequente de forma inadequada, pois muitos mamíferos não são gatos. A conclusão não decorre necessariamente das premissas."
      },
      {
        "level": "advanced",
        "prompt": "Ao avaliar algoritmo de seleção, qual questão é propriamente ética?",
        "options": [
          "Quantos megabytes o programa ocupa?",
          "Quantas candidaturas foram processadas?",
          "Qual linguagem de programação foi utilizada?",
          "É justo utilizar critérios que podem reproduzir discriminações históricas?"
        ],
        "correctIndex": 3,
        "hint": "Distingua descrição técnica e avaliação normativa.",
        "solution": "A alternativa D é correta: investiga justiça e possível discriminação de uma decisão. As demais são questões técnicas ou quantitativas, relevantes mas não equivalentes ao problema ético formulado."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topicStart": "A representação e os partidos políticos",
    "objective": "Analisar democracia representativa, eleições, partidos, representação social, instituições, participação e mecanismos de responsabilização pública e distinguir voto de participação política ampla.",
    "prerequisites": [
      "Estado e cidadania",
      "Instituições políticas",
      "Participação social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Representar é agir politicamente em nome de outros",
        "explanation": "A democracia representativa organiza parte das decisões coletivas por representantes escolhidos segundo regras eleitorais e institucionais. O voto é instrumento importante de escolha e responsabilização, mas representação não significa que todo cidadão participe diretamente de cada decisão. Regras eleitorais, mandatos, competências de poderes e direitos de participação variam de um sistema político para outro.\n\nPartidos políticos são organizações que articulam projetos, candidaturas e disputas pelo poder institucional. Podem abrigar correntes internas diversas e construir alianças, e não devem ser vistos como conjuntos inteiramente homogêneos. Uma candidatura é distinta do partido a que está vinculada, e a participação política também ocorre por associações, conselhos, movimentos sociais e debates públicos.\n\nA representação exige relação entre representantes e representados: programas anunciados, decisões tomadas, canais de comunicação e mecanismos de controle. Para avaliar um processo, considere quem pode votar e concorrer, como são organizados distritos ou circunscrições e se direitos de expressão e oposição são protegidos.",
        "example": "Numa eleição de representantes de turma, estudantes escolhem dois colegas para negociar decisões com direção. Esses representantes não se tornam donos da vontade de cada aluno; devem ouvir demandas e prestar contas sobre as propostas encaminhadas.",
        "pitfall": "Não confunda eleições periódicas com garantia automática de igualdade de influência política. Informação, recursos, organização e instituições também moldam participação e representação.",
        "steps": [
          "Identifique quem representa quem e por qual regra.",
          "Diferencie partido, candidato, eleitor e outras formas de organização política.",
          "Examine como representantes prestam contas aos representados."
        ]
      },
      {
        "level": "intermediate",
        "title": "Sistemas eleitorais e pluralismo político",
        "explanation": "Sistemas eleitorais transformam votos em mandatos segundo regras distintas. Em sistemas majoritários, pode vencer o candidato mais votado num distrito ou sob condições específicas; em sistemas proporcionais, a distribuição de cadeiras procura refletir proporcionalidade de votos entre listas e partidos, conforme fórmulas e cláusulas locais. Não se deve aplicar uma regra de outro país ou eleição sem examinar o sistema utilizado.\n\nRepresentatividade também pode ser estudada por desigualdades de acesso a candidaturas e cargos. Grupos sociais podem estar sub-representados em relação à participação na população, por barreiras econômicas, históricas e institucionais. Medir apenas número de cadeiras não informa todas as causas nem prova automaticamente que cada representante defenderá os mesmos interesses de um grupo.\n\nPartidos podem organizar debate público, votar leis e fiscalizar governos, mas práticas como clientelismo e falta de transparência podem comprometer confiança política. Uma análise sociológica compara instituições, recursos e comportamentos, evitando concluir que todo cidadão que vota em certo partido possui opiniões idênticas às de seus dirigentes.",
        "example": "Uma eleição escolar tem três chapas e quarenta lugares em conselho. Um sistema proporcional hipotético poderia distribuir cadeiras conforme votos das chapas, enquanto um sistema majoritário poderia atribuir vitória a uma única chapa conforme regras. O resultado depende do método institucional adotado.",
        "pitfall": "Não identifique proporcionalidade eleitoral com divisão perfeitamente exata de mandatos sem verificar regras de arredondamento, cláusulas e fórmula. Cada eleição possui legislação própria.",
        "steps": [
          "Identifique se a regra eleitoral é majoritária, proporcional ou outra.",
          "Examine como votos se transformam em mandatos segundo o sistema.",
          "Avalie barreiras e desigualdades de representação sem generalizações."
        ]
      },
      {
        "level": "advanced",
        "title": "Prestação de contas, participação e qualidade democrática",
        "explanation": "A qualidade de representação depende de mecanismos de responsabilização, transparência, direitos de oposição e possibilidades de participação entre eleições. Consultas públicas, imprensa independente, controle institucional e organizações civis podem ajudar a fiscalizar mandatos. Entretanto, a existência formal de um conselho ou consulta não garante influência efetiva nas decisões; é necessário observar acesso, desenho e consequências de cada mecanismo.\n\nA ação política inclui disputa por narrativas e circulação de informação. Plataformas digitais podem ampliar mobilização e também facilitar desinformação, campanhas artificiais ou desigualdade de alcance. Avaliar uma alegação sobre desempenho político exige verificar fontes, orçamento, competências institucionais e período. Um parlamentar, por exemplo, não controla sozinho toda política pública de um município ou país.\n\nPluralismo político supõe possibilidade de divergência e competição de projetos dentro de regras que protejam direitos fundamentais. A análise sociológica deve diferenciar crítica legítima a partidos de deslegitimação de grupos por identidade, reconhecendo o papel de instituições na gestão de conflitos. Melhorar representação envolve mecanismos coletivos, não apenas preferência por um indivíduo.",
        "example": "Uma prefeitura realiza consulta online sobre transportes, mas apenas moradores com acesso digital conseguem participar. O número de respostas pode ser alto e ainda assim não representar todas as necessidades. Avaliar a consulta requer estudar quem participou e como decisões incorporaram as propostas.",
        "pitfall": "Não confunda grande número de curtidas com apoio eleitoral comprovado ou qualidade democrática. Indicadores de participação precisam de amostragem, contexto e ligação com decisões reais.",
        "steps": [
          "Identifique canais de prestação de contas e seus limites.",
          "Compare participação formal e capacidade efetiva de influência.",
          "Avalie representatividade usando fontes, regras e dados contextualizados."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação descreve uma função típica de partidos políticos?",
        "options": [
          "Organizar candidaturas e projetos para disputar representação institucional.",
          "Impedir que cidadãos participem de qualquer debate.",
          "Substituir automaticamente todas as organizações civis.",
          "Governar sempre sem regras eleitorais."
        ],
        "correctIndex": 0,
        "hint": "Partidos articulam projetos e candidaturas.",
        "solution": "A alternativa A está correta: partidos participam da organização da disputa por cargos e de projetos políticos. As demais descrevem restrições não inerentes à função partidária."
      },
      {
        "level": "intermediate",
        "prompt": "O que distingue, em linhas gerais, um sistema proporcional de um majoritário?",
        "options": [
          "Ambos distribuem cadeiras sempre do mesmo modo.",
          "O proporcional procura relacionar cadeiras às proporções de votos, conforme regras específicas.",
          "O majoritário proíbe candidaturas individuais em todos os países.",
          "O proporcional desconsidera completamente os votos."
        ],
        "correctIndex": 1,
        "hint": "Observe como votos se convertem em representação.",
        "solution": "A alternativa B está correta: sistemas proporcionais buscam refletir a distribuição de votos em cadeiras segundo fórmulas, enquanto sistemas majoritários privilegiam escolhas de vencedores em regras específicas."
      },
      {
        "level": "advanced",
        "prompt": "Uma consulta pública online recebe muitas respostas, mas exclui moradores sem internet. Qual problema principal a análise deve considerar?",
        "options": [
          "O número de respostas garante representação de toda a cidade.",
          "A consulta não pode produzir qualquer informação útil.",
          "A cobertura digital desigual pode limitar a representatividade dos participantes.",
          "Todos os participantes possuem opiniões idênticas."
        ],
        "correctIndex": 2,
        "hint": "Pense em quem teve oportunidade real de participar.",
        "solution": "A alternativa C reconhece viés de acesso e necessidade de avaliar quem participou. As outras extrapolam o número de respostas ou desconsideram sua informação sem investigação."
      }
    ]
  }
];
