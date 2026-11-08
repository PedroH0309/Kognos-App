import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material original Kognos; não oficial, sem revisão ou homologação docente. */
export const provaoDepthBatch33Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Tratamento de água",
    "objective": "Explicar coagulação, floculação, decantação, filtração e desinfecção e interpretar resultados sem confundir potabilidade com transparência.",
    "prerequisites": [
      "Misturas e métodos de separação",
      "Microrganismos e transmissão hídrica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da água bruta à remoção de partículas",
        "explanation": "Água de manancial pode carregar argila coloidal, matéria orgânica, microrganismos e solutos dissolvidos. A coagulação usa reagentes adequados, como sais de alumínio ou ferro, para desestabilizar partículas que normalmente se repelem. Na floculação, mistura mais lenta favorece encontros e formação de agregados maiores. A decantação permite que flocos sedimentem sob gravidade, mas não garante remoção de sais dissolvidos nem de todos os patógenos. Turbidez é uma medida relacionada ao espalhamento da luz por partículas; água visualmente límpida pode conter contaminantes invisíveis. A sequência depende da qualidade da água bruta e do projeto da estação: nem todo sistema aplica exatamente as mesmas etapas. Para decidir se o tratamento foi adequado, é preciso medir parâmetros físicos, químicos e microbiológicos, em vez de observar somente a cor.",
        "example": "Uma amostra de 10 L contém 0,8 g de sólidos suspensos; após sedimentação restam 0,2 g. Remoção=(0,8−0,2)/0,8=0,75, isto é, 75% da massa inicial, sem afirmar eliminação de micróbios.",
        "pitfall": "Não interprete 75% de sólidos removidos como 75% de todos os contaminantes removidos.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "intermediate",
        "title": "Filtração, desinfecção e controle operacional",
        "explanation": "Após a clarificação, filtros granulares retêm partículas remanescentes por mecanismos combinados de interceptação, sedimentação em poros e adesão. Filtros exigem manutenção e retrolavagem conforme o projeto; sua eficiência não é ilimitada. A desinfecção visa inativar microrganismos patogênicos. A cloração é frequente porque pode manter residual na rede, mas dose, tempo de contato, pH, temperatura e demanda de cloro alteram a eficácia. O residual livre não equivale à concentração inicialmente adicionada: parte reage com compostos presentes na água. Etapas adicionais, como ajuste de pH e fluoretação quando regulamentada, têm objetivos próprios e não substituem o controle microbiológico. A água tratada ainda pode ser contaminada em reservatórios ou tubulações inadequados. Assim, amostragem na saída da estação e na distribuição é parte essencial do sistema de abastecimento.",
        "example": "Se foram adicionados 2,0 mg/L de cloro e a demanda medida consumiu 1,4 mg/L, o residual idealizado é 0,6 mg/L. A subtração não comprova, isoladamente, tempo de contato ou segurança microbiológica.",
        "pitfall": "Não trate o residual calculado como prova automática de potabilidade; a norma aplicável exige outros indicadores.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "advanced",
        "title": "Limites da potabilização e avaliação de risco",
        "explanation": "Tratamento convencional foi desenvolvido principalmente para controlar turbidez e riscos microbiológicos, mas contaminantes específicos podem exigir processos adicionais. Carvão ativado pode adsorver certos compostos orgânicos; membranas e troca iônica podem remover determinados solutos conforme suas propriedades e condições de operação. Nenhuma tecnologia é universal: uma membrana pode concentrar contaminantes em um rejeito que precisa de destino seguro. Em enchentes, a turbidez elevada e a contaminação fecal aumentam a necessidade de controle; ferver água pode inativar muitos agentes biológicos, mas não remove metais ou sais dissolvidos e pode até concentrá-los pela evaporação. Avaliar potabilidade requer confrontar resultados laboratoriais com padrões vigentes, considerando incerteza analítica, frequência de amostragem e pontos de coleta. O raciocínio correto distingue perigo identificado, exposição efetiva e eficácia demonstrada de cada barreira de tratamento.",
        "example": "Em 1000 L com 3 mg/L de um soluto, há 3000 mg. Se um processo remove 80% da massa sem variar o volume final, restam 600 mg ou 0,6 mg/L; a hipótese de volume constante é indispensável.",
        "pitfall": "Não conclua que uma água é segura apenas porque um único parâmetro caiu abaixo de um valor escolhido arbitrariamente.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual etapa agrega partículas finas em flocos maiores? ",
        "options": [
          "Destilação",
          "Floculação",
          "Evaporação",
          "Eletrólise"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A floculação promove o crescimento de agregados após a desestabilização das partículas."
      },
      {
        "level": "intermediate",
        "prompt": "Dose inicial de 2,0 mg/L e consumo de 1,4 mg/L: residual idealizado?",
        "options": [
          "3,4 mg/L",
          "1,4 mg/L",
          "0,6 mg/L",
          "0,0 mg/L"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "Residual=2,0−1,4=0,6 mg/L; ainda é preciso verificar os demais requisitos sanitários."
      },
      {
        "level": "advanced",
        "prompt": "Por que ferver não resolve toda contaminação química?",
        "options": [
          "Porque cria metais",
          "Porque não remove necessariamente solutos dissolvidos",
          "Porque sempre aumenta microrganismos",
          "Porque elimina todos os sais"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A fervura inativa muitos microrganismos, mas sais e metais não voláteis podem permanecer."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Velocidade e Aceleração: escalar média e instantânea; vetorial média e instantânea",
    "objective": "Distinguir distância, deslocamento, velocidade escalar e vetorial, aceleração média e instantânea, com unidades e sinais coerentes.",
    "prerequisites": [
      "Unidades SI",
      "Vetores e eixos orientados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Distância percorrida, deslocamento e velocidade",
        "explanation": "A posição x é medida em relação a uma origem e um eixo orientado. Deslocamento é Δx=xfinal−xinicial e pode ser positivo, negativo ou nulo; distância percorrida é o comprimento total do caminho e nunca é negativa. A velocidade vetorial média é Δr/Δt, enquanto a rapidez média é distância total/Δt. Em movimento retilíneo, a componente algébrica da velocidade média é Δx/Δt. Se alguém caminha 30 m para leste e 10 m para oeste, percorre 40 m mas termina 20 m a leste do ponto inicial. Em 10 s, rapidez média é 4 m/s e velocidade média no eixo leste positivo é +2 m/s. O sentido escolhido importa para o sinal, mas não altera o fenômeno físico. Essas médias não descrevem obrigatoriamente a velocidade em cada instante; paradas e retornos podem produzir médias pequenas apesar de velocidades instantâneas altas.",
        "example": "Percurso de 30 m a leste e 10 m a oeste em 10 s: distância=40 m; deslocamento=+20 m; rapidez média=40/10=4 m/s; velocidade média=20/10=+2 m/s.",
        "pitfall": "Não substitua deslocamento por distância quando a questão pedir velocidade vetorial média.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "intermediate",
        "title": "Velocidade instantânea e aceleração",
        "explanation": "A velocidade instantânea corresponde ao limite de Δx/Δt quando o intervalo tende a zero, ou à inclinação da tangente no gráfico posição-tempo. A aceleração média é Δv/Δt e a instantânea é a taxa de variação da velocidade no instante. Em movimento retilíneo com aceleração constante, v=v0+at e x=x0+v0t+at²/2; essas expressões exigem um referencial aproximadamente inercial e a hipótese de aceleração constante. Se v0=3 m/s e a=2 m/s² durante 4 s, a velocidade final é 11 m/s e o deslocamento é 3·4+2·16/2=28 m. Aceleração positiva não significa necessariamente aumento da rapidez: um corpo com velocidade negativa e aceleração positiva pode estar desacelerando. Em gráficos v×t, a inclinação representa aceleração e a área algébrica representa deslocamento, não distância total quando há inversão de sentido.",
        "example": "Para v0=3 m/s, a=2 m/s² e t=4 s: v=3+2·4=11 m/s; Δx=3·4+(2·16)/2=28 m.",
        "pitfall": "Não use área algébrica de v×t como distância percorrida se o gráfico atravessa o zero.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "advanced",
        "title": "Vetores, curvas e limites de interpretação",
        "explanation": "Em duas dimensões, velocidade e aceleração são vetores: v=(vx,vy) e a=(ax,ay). A magnitude de v é √(vx²+vy²), enquanto sua direção depende das componentes. Uma trajetória circular uniforme mantém a rapidez constante, mas altera continuamente a direção de v; portanto, existe aceleração centrípeta de módulo v²/R, dirigida para o centro. Se v=6 m/s e R=3 m, a=36/3=12 m/s² mesmo sem mudança de rapidez. A aceleração tangencial, quando presente, modifica o módulo da velocidade, ao passo que a componente normal modifica a direção. Um GPS pode estimar velocidade por amostragens discretas, mas a aproximação de derivadas depende da resolução temporal e dos erros de posição. A interpretação física exige distinguir vetor de módulo, movimento em linha reta de movimento curvo e taxa média de taxa instantânea.",
        "example": "Em curva circular com rapidez 6 m/s e raio 3 m: aceleração centrípeta=6²/3=12 m/s², apontando para o centro.",
        "pitfall": "Não afirme que aceleração é zero apenas porque o velocímetro mostra rapidez constante.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Após 30 m para leste e 10 m para oeste, o deslocamento é:",
        "options": [
          "40 m leste",
          "20 m leste",
          "20 m oeste",
          "0 m"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "O deslocamento é a soma algébrica: +30−10=+20 m."
      },
      {
        "level": "intermediate",
        "prompt": "Com v0=3 m/s, a=2 m/s² e t=4 s, a velocidade é:",
        "options": [
          "5 m/s",
          "8 m/s",
          "11 m/s",
          "24 m/s"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "Pela equação v=v0+at=3+2·4=11 m/s."
      },
      {
        "level": "advanced",
        "prompt": "Corpo em movimento circular uniforme possui:",
        "options": [
          "Aceleração nula",
          "Aceleração tangencial obrigatória",
          "Aceleração centrípeta",
          "Velocidade vetorial constante"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A direção da velocidade muda; existe aceleração normal dirigida ao centro."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Importância ecológica e econômica de bactérias e fungos",
    "objective": "Relacionar decomposição, ciclos de nutrientes, fermentação, simbioses e aplicações industriais sem generalizar patogenicidade.",
    "prerequisites": [
      "Células procarióticas e eucarióticas",
      "Ciclos biogeoquímicos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Diversidade celular e decomposição",
        "explanation": "Bactérias são organismos celulares procarióticos, enquanto fungos são eucarióticos e incluem leveduras unicelulares e formas filamentosas. Ambos podem atuar como decompositores, secretando enzimas que degradam moléculas orgânicas complexas e liberam compostos mais simples, reutilizados por outros organismos. A decomposição transforma matéria, não cria nutrientes do nada: carbono retorna ao ambiente em diferentes formas e elementos minerais podem ser disponibilizados no solo. Fungos não realizam fotossíntese e obtêm carbono de matéria orgânica; bactérias apresentam diversidade metabólica muito maior, incluindo formas fotossintetizantes e quimiossintetizantes. A velocidade de decomposição depende de temperatura, umidade, oxigênio, composição do substrato e comunidade microbiana. Um tronco úmido pode degradar mais rapidamente que outro muito seco, mas isso não autoriza uma taxa universal. Patógenos são apenas parte da diversidade desses grupos.",
        "example": "Em uma composteira, 5 kg de resíduos tornam-se 3 kg de material sólido ao final do período. A diferença de 2 kg não foi simplesmente 'destruída': parte do carbono saiu como gases e água pode ter evaporado; é necessário balanço de massa completo.",
        "pitfall": "Não confunda perda de massa sólida com desaparecimento da matéria ou com liberação exclusiva de CO₂.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "intermediate",
        "title": "Fermentação, alimentos e aplicações",
        "explanation": "Leveduras como Saccharomyces cerevisiae convertem açúcares em etanol e dióxido de carbono em condições adequadas, processo usado em panificação e bebidas fermentadas. Em pão, o CO₂ retido na massa contribui para sua expansão; o etanol tende a evaporar durante o cozimento. Bactérias ácido-lácticas convertem carboidratos em ácidos orgânicos, reduzindo o pH e contribuindo para características de alimentos fermentados. A equação simplificada da fermentação alcoólica é C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. Assim, 1 mol de glicose pode produzir teoricamente 2 mol de CO₂, desde que a reação siga essa estequiometria e o rendimento seja ideal. Na prática, biomassa celular, subprodutos, temperatura e disponibilidade de substrato reduzem ou alteram o rendimento. Produção industrial de enzimas, antibióticos e ácidos orgânicos também usa microrganismos selecionados, com controles de contaminação e qualidade.",
        "example": "Para 0,5 mol de glicose consumida integralmente pela reação ideal, CO₂ teórico=2·0,5=1,0 mol; não se deve afirmar que esse é o rendimento real de qualquer fermentador.",
        "pitfall": "Não atribua toda fermentação a fungos: bactérias também fermentam, com produtos e rotas diferentes.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "advanced",
        "title": "Simbioses, nitrogênio e biossegurança",
        "explanation": "Micorrizas associam fungos às raízes de muitas plantas; as hifas ampliam a exploração do solo e podem facilitar aquisição de nutrientes, enquanto a planta fornece compostos de carbono. A intensidade do benefício depende da espécie e do ambiente, e a relação não deve ser descrita como invariavelmente vantajosa em toda condição. Algumas bactérias fixadoras de nitrogênio convertem N₂ atmosférico em formas biologicamente assimiláveis mediante enzimas específicas e gasto energético; isso não significa que toda bactéria do solo fixe nitrogênio. Outras participam de nitrificação e desnitrificação, processos distintos com impactos sobre fertilidade e emissões gasosas. Na agricultura, inoculantes microbianos exigem compatibilidade com cultura, solo e manejo. Em saúde e alimentos, boas práticas de higiene, temperatura e conservação são essenciais porque espécies úteis coexistem com microrganismos deteriorantes e patogênicos. Classificar um micróbio como 'bom' ou 'ruim' sem contexto ecológico é cientificamente inadequado.",
        "example": "Em uma cultura que recebe inoculante fixador, compare parcelas equivalentes com e sem inoculação, controlando irrigação e adubação. Maior crescimento isolado não prova causalidade sem repetição e controle de variáveis.",
        "pitfall": "Não conclua que todo fungo forma micorriza ou que toda bactéria fixa nitrogênio.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual diferença celular correta?",
        "options": [
          "Bactérias e fungos são procariontes",
          "Fungos são eucariontes e bactérias procariontes",
          "Fungos não possuem células",
          "Bactérias possuem núcleo membranoso"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "Fungos têm organização eucariótica; bactérias não possuem núcleo delimitado por membrana."
      },
      {
        "level": "intermediate",
        "prompt": "Na fermentação alcoólica ideal, 0,5 mol de glicose forma:",
        "options": [
          "0,25 mol CO₂",
          "0,5 mol CO₂",
          "1,0 mol CO₂",
          "2,0 mol CO₂"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A proporção estequiométrica é 1 mol de glicose para 2 mol de CO₂."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre fixação biológica de nitrogênio é correta?",
        "options": [
          "Todo fungo fixa N₂",
          "Todas as bactérias fixam N₂",
          "Algumas bactérias fixam N₂ com gasto energético",
          "Plantas convertem N₂ sem organismos associados em qualquer condição"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A fixação depende de microrganismos e enzimas específicas, com custo energético."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Formação dos Estados modernos",
    "objective": "Analisar centralização monárquica, fiscalidade, burocracia e negociações com elites na Europa sem reduzir o processo a poder absoluto imediato.",
    "prerequisites": [
      "Feudalismo e relações de vassalagem",
      "Expansão comercial medieval"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fragmentação política e centralização",
        "explanation": "Na Europa medieval, a autoridade política era distribuída entre monarcas, senhores territoriais, cidades e instituições religiosas. A formação de monarquias mais centralizadas entre o fim da Idade Média e o início da Modernidade não ocorreu de modo simultâneo nem uniforme. Guerras, disputas sucessórias, crescimento das atividades mercantis e reorganização da arrecadação favoreceram a criação de instituições capazes de administrar territórios mais extensos. A monarquia francesa fortaleceu instrumentos fiscais e militares ao longo de conflitos prolongados, enquanto a experiência inglesa incluiu mecanismos parlamentares de negociação tributária. A expressão 'Estado moderno' designa processos históricos de consolidação institucional e pretensões de soberania, não uma data única de fundação nem a extinção imediata de poderes locais. As relações entre rei, nobres, clero e cidades foram frequentemente negociadas e conflituosas.",
        "example": "Compare duas fontes: um decreto real de cobrança e uma petição urbana contestando o imposto. Primeiro identifique o agente que reivindica autoridade; depois observe a resistência; por fim conclua que centralização não eliminou negociação política.",
        "pitfall": "Não descreva a passagem do feudalismo ao Estado moderno como substituição instantânea e idêntica em todos os países.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "intermediate",
        "title": "Exércitos, impostos e burocracia",
        "explanation": "Manter tropas e administrar justiça demandava receitas regulares, o que estimulou sistemas de tributação e agentes especializados. Exércitos permanentes cresceram em importância, embora contingentes mercenários e forças locais continuassem presentes em diferentes contextos. Conselhos, tribunais e funcionários da Coroa ajudaram a registrar decisões, executar ordens e arbitrar conflitos; porém sua capacidade efetiva variava conforme distâncias, comunicações e resistência regional. Na França, a monarquia expandiu recursos administrativos em interação com privilégios de ordens e províncias; na Inglaterra, a autorização de tributos frequentemente envolveu o Parlamento. A centralização política não equivale necessariamente a uniformização jurídica completa. O fortalecimento fiscal também podia gerar revoltas, evidenciando que arrecadação e legitimidade estavam conectadas. Para analisar o processo, é útil distinguir intenção normativa, recursos disponíveis e cumprimento real das determinações.",
        "example": "Um rei ordena imposto nacional, mas duas províncias mantêm isenções e uma assembleia condiciona sua aprovação. Passo 1: identifique a pretensão central; passo 2: localize limites institucionais; passo 3: conclua que o alcance da medida é desigual.",
        "pitfall": "Não use a existência de um decreto como prova de que todos os súditos o cumpriram.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "advanced",
        "title": "Soberania, diplomacia e limites do absolutismo",
        "explanation": "Pensadores da soberania, como Jean Bodin, formularam argumentos sobre a autoridade suprema do poder político em contextos de guerras civis e conflitos religiosos. A doutrina absolutista justificava ampla autoridade monárquica, mas seu vocabulário não deve ser confundido com controle irrestrito e comprovado de todas as relações sociais. Privilégios corporativos, jurisdições locais, interesses nobiliárquicos, capacidade de arrecadação e pressões externas impunham limites concretos. A diplomacia permanente e os conflitos entre dinastias também participaram da consolidação de unidades políticas. Portugal e Espanha tiveram trajetórias próprias, ligadas à expansão marítima e a múltiplos domínios territoriais. A comparação entre casos revela que centralização, absolutismo, formação de identidades políticas e construção de fronteiras são processos relacionados, mas não sinônimos. A historiografia contemporânea evita narrativas lineares que tratem o Estado nacional atual como destino inevitável de todas as sociedades.",
        "example": "Ao comparar França e Inglaterra, separe três critérios: quem autorizava tributos, como se recrutavam tropas e quais tribunais tinham competência. A partir das diferenças, rejeite a conclusão simplista de que toda monarquia centralizada era idêntica.",
        "pitfall": "Não projete o conceito contemporâneo de Estado-nação sobre todas as monarquias dos séculos XV a XVII.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A centralização monárquica europeia foi:",
        "options": [
          "Instantânea e uniforme",
          "Processual, desigual e negociada",
          "Idêntica em toda a Europa",
          "Sem relação com fiscalidade"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "As trajetórias variaram e envolveram conflitos, instituições e negociação com poderes locais."
      },
      {
        "level": "intermediate",
        "prompt": "A existência de um decreto tributário prova que:",
        "options": [
          "A cobrança foi universal",
          "Não havia resistência",
          "O rei pretendia exercer autoridade, mas é preciso verificar sua execução",
          "Todos os privilégios foram extintos"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A norma revela pretensão política; execução exige evidência adicional."
      },
      {
        "level": "advanced",
        "prompt": "Qual comparação histórica é mais adequada?",
        "options": [
          "Toda centralização produziu o mesmo absolutismo",
          "O Parlamento inglês e os privilégios franceses mostram limites institucionais distintos",
          "Estados modernos não possuíam diplomacia",
          "Soberania significa ausência de qualquer conflito"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "Experiências distintas mostram que autoridade e limites políticos variavam."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Óxidos e a chuva ácida",
    "objective": "Explicar a formação de ácidos atmosféricos a partir de óxidos de enxofre e nitrogênio e distinguir chuva naturalmente ácida de deposição intensificada por poluição.",
    "prerequisites": [
      "Óxidos e reações químicas",
      "Ácidos, bases e escala de pH"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Óxidos atmosféricos e acidez natural",
        "explanation": "A atmosfera contém dióxido de carbono, que pode dissolver-se na água e participar de equilíbrios que formam ácido carbônico; por isso, a chuva em equilíbrio com CO₂ atmosférico já pode apresentar pH inferior a 7. A expressão chuva ácida costuma designar precipitação com acidez aumentada, frequentemente associada a emissões de dióxido de enxofre e óxidos de nitrogênio. SO₂ pode ser emitido na queima de combustíveis contendo enxofre e em processos naturais; NO e NO₂ podem se formar em combustões de alta temperatura e também por processos naturais. Reações atmosféricas envolvendo oxidantes e água produzem espécies ácidas, como sulfatos e nitratos. O pH é logarítmico: pH=−log₁₀[H₃O⁺] como aproximação para soluções diluídas, mas atividades químicas são a descrição mais rigorosa. Atribuir qualquer pH abaixo de 7 exclusivamente à indústria é incorreto.",
        "example": "Para amostra idealizada com [H₃O⁺]=10⁻⁵ mol/L, pH≈5; com 10⁻⁴ mol/L, pH≈4. A segunda tem cerca de dez vezes maior concentração de H₃O⁺, não apenas 'um pouco' mais.",
        "pitfall": "Não confunda chuva naturalmente levemente ácida com a intensificação causada por poluentes.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "intermediate",
        "title": "Rotas químicas e impactos ambientais",
        "explanation": "A oxidação de SO₂ a espécies contendo enxofre em estado de oxidação mais elevado pode ocorrer por diferentes vias atmosféricas, incluindo reações em gotículas e em fase gasosa. O ácido sulfúrico e o ácido nítrico contribuem para deposição ácida úmida e seca. Uma representação global simplificada para formação de ácido sulfúrico é 2 SO₂+O₂+2 H₂O→2 H₂SO₄, mas ela não descreve todas as etapas cinéticas reais da atmosfera. A deposição ácida pode mobilizar determinados metais no solo, alterar a química de lagos e acelerar deterioração de materiais calcários. O carbonato de cálcio reage com ácido, liberando dióxido de carbono em condições apropriadas; isso ajuda a compreender danos a monumentos, mas o desgaste real depende também de umidade, porosidade e composição do material. A origem dos poluentes pode estar distante do local onde ocorre a deposição, em função de ventos e transformação química.",
        "example": "Na reação CaCO₃+2 H⁺→Ca²⁺+CO₂+H₂O, 1 mol de CaCO₃ consome 2 mol de H⁺. Para 0,10 mol de CaCO₃, são necessários 0,20 mol de H⁺ na estequiometria ideal.",
        "pitfall": "Não confunda equação global balanceada com mecanismo atmosférico de uma única etapa.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "advanced",
        "title": "Monitoramento, prevenção e limites",
        "explanation": "Reduzir emissões de SO₂ e NOₓ na fonte é uma estratégia central de mitigação. Dessulfurização de gases, combustíveis com menor teor de enxofre, controle de combustão e sistemas catalíticos podem reduzir diferentes precursores, mas não funcionam de forma intercambiável em qualquer instalação. Monitoramento precisa combinar inventários de emissões, medições atmosféricas e composição da precipitação; uma amostra isolada de pH não identifica necessariamente qual fonte provocou o problema. A neutralização de corpos d'água com materiais alcalinos pode atenuar impactos locais em certas condições, mas não substitui redução de emissões e requer avaliação ecológica. Comparações entre locais devem considerar volume de chuva, estação do ano e transporte regional de poluentes. A concentração de íons e a quantidade total depositada são medidas distintas: chuva mais volumosa com concentração menor pode transportar massa total maior de contaminantes.",
        "example": "Uma chuva deposita 2 mg/L de sulfato em 1000 L coletados: massa=2000 mg=2 g. Outra com 1 mg/L em 3000 L deposita 3 g, apesar da concentração menor.",
        "pitfall": "Não use apenas concentração para concluir qual episódio produziu maior carga total de deposição.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que chuva não poluída pode ter pH inferior a 7?",
        "options": [
          "Devido ao CO₂ dissolvido e equilíbrios associados",
          "Porque toda água contém ácido sulfúrico industrial",
          "Porque água pura sempre tem pH 3",
          "Porque oxigênio é ácido forte"
        ],
        "correctIndex": 0,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "CO₂ dissolvido participa de equilíbrios ácido-base que tornam a chuva naturalmente levemente ácida."
      },
      {
        "level": "intermediate",
        "prompt": "Na reação CaCO₃+2 H⁺→Ca²⁺+CO₂+H₂O, 0,10 mol de CaCO₃ consome:",
        "options": [
          "0,05 mol H⁺",
          "0,10 mol H⁺",
          "0,20 mol H⁺",
          "2,0 mol H⁺"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A proporção é 1:2; 0,10×2=0,20 mol de H⁺."
      },
      {
        "level": "advanced",
        "prompt": "Qual episódio deposita maior massa de sulfato?",
        "options": [
          "2 mg/L em 1000 L",
          "1 mg/L em 3000 L",
          "Ambos 1 g",
          "Não é possível calcular com os dados"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "O primeiro deposita 2 g; o segundo 3 g, apesar da menor concentração."
      }
    ]
  }
];
