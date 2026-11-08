import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos, não oficiais, sem homologação docente. */
export const provaoDepthBatch21Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Estado físico e propriedades dos materiais",
    "objective": "Distinguir estados físicos, mudanças de fase e propriedades intensivas e extensivas, resolvendo situações com curvas de aquecimento e identificação de materiais.",
    "prerequisites": [
      "Estrutura da matéria",
      "Temperatura e energia",
      "Massa e volume"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Estados físicos e modelo de partículas",
        "explanation": "Sólidos apresentam organização e mobilidade de partículas que sustentam forma própria em condições comuns; líquidos escoam e mantêm volume aproximadamente definido; gases se expandem para ocupar o recipiente. Essas descrições são modelos macroscópicos, não regras absolutas: sólidos podem deformar, líquidos são pouco compressíveis e gases reais desviam do modelo ideal. Em substâncias moleculares, a fusão envolve superar parte das interações intermoleculares, não romper necessariamente ligações covalentes dentro das moléculas. Água líquida e gelo continuam sendo H₂O. Temperatura está relacionada à distribuição de energias das partículas, mas não é sinônimo de calor: calor é transferência de energia entre sistemas por diferença de temperatura. Pressão também modifica as condições de mudança de fase. Em recipientes abertos ao nível do mar, água pura ferve perto de 100 °C, mas esse valor muda com pressão e impurezas. Uma classificação adequada exige informar temperatura, pressão e composição da amostra.",
        "example": "Um cubo de gelo a 0 °C funde e forma água líquida: a composição permanece H₂O. O que muda é a organização das moléculas e a energia associada às interações, não o número de átomos por molécula. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Não confunda modelo e fenômeno: identifique quais evidências justificam a definição utilizada.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Densidade, fusão e ebulição",
        "explanation": "Densidade é a razão entre massa e volume, ρ=m/V, e depende da temperatura e da pressão, sobretudo em gases. Uma amostra homogênea de 54 g que ocupa 20 cm³ possui densidade de 2,7 g/cm³. Densidade é propriedade intensiva: dobrar massa e volume mantendo as mesmas condições não a altera. Massa e volume são extensivos porque dependem da quantidade de material. Uma substância pura sob pressão constante pode apresentar patamar de temperatura durante fusão ou ebulição, pois energia transferida é usada na mudança de fase. Misturas podem apresentar intervalos de mudança de fase, embora existam exceções como azeótropos e misturas eutéticas. Na vaporização, ebulição ocorre com formação de bolhas no interior do líquido, enquanto evaporação pode ocorrer na superfície abaixo do ponto de ebulição. Comparar materiais exige medir sob condições controladas e não atribuir identidade com base em um único parâmetro.",
        "example": "Um bloco tem massa de 81 g e volume de 30 cm³. Calcule ρ=81/30=2,7 g/cm³. Um segundo bloco do mesmo material com massa 162 g e volume 60 cm³ mantém a mesma densidade. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Evite aplicar relações fora das condições declaradas; verifique unidades, variáveis e contexto.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Curvas de aquecimento e energia latente",
        "explanation": "Numa curva de aquecimento, trechos inclinados indicam variação de temperatura, enquanto patamares de uma substância pura em pressão fixa podem representar mudanças de fase. Durante aquecimento sem mudança de fase, Q=mcΔT, em que c é calor específico e m é massa. Durante transição de fase idealizada, Q=mL, sendo L o calor latente da transição. Não se deve somar indiscriminadamente temperaturas em Celsius como se fossem energias. Se 0,20 kg de gelo a 0 °C funde integralmente e o calor latente de fusão é 334 kJ/kg, a energia necessária é Q=0,20×334=66,8 kJ, desprezando perdas. A energia recebida não implica aumento de temperatura durante a fusão idealizada. Substâncias impuras, pressão variável e transferência de calor não uniforme podem alterar o perfil observado. A curva é uma evidência experimental que deve ser interpretada com informações sobre composição e pressão.",
        "example": "Para fundir 0,50 kg de gelo a 0 °C, use L=334 kJ/kg: Q=mL=0,50×334=167 kJ. O cálculo pressupõe fusão completa sem aquecer a água produzida nem perdas térmicas. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Uma conclusão precisa explicitar limitações e possíveis alternativas, sem generalização automática.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um material homogêneo tem 60 g e volume de 20 cm³. Sua densidade é:",
        "options": [
          "0,33 g/cm³",
          "3,0 g/cm³",
          "40 g/cm³",
          "1200 g/cm³"
        ],
        "correctIndex": 1,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Pela definição ρ=m/V, ρ=60/20=3,0 g/cm³. Não se divide volume por massa nem se multiplica as duas grandezas. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "intermediate",
        "prompt": "Durante a fusão de gelo puro a pressão constante, a energia recebida serve principalmente para:",
        "options": [
          "Aumentar necessariamente a temperatura em cada instante",
          "Alterar a composição H₂O",
          "Promover a mudança de fase sem aumento idealizado de temperatura",
          "Criar novos átomos"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "No patamar de fusão, a energia é empregada na transição de fase; a composição química permanece H₂O e a temperatura pode permanecer constante sob condições ideais. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "advanced",
        "prompt": "Para fundir 0,10 kg de gelo a 0 °C com L=334 kJ/kg, a energia é:",
        "options": [
          "33,4 kJ",
          "3,34 kJ",
          "3340 kJ",
          "0,334 kJ"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Q=mL=0,10×334=33,4 kJ. A fórmula vale para fusão sem variação adicional de temperatura e sem perdas de energia. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Referencial inercial. Movimentos retilíneos. Situações de equilíbrio",
    "objective": "Relacionar referenciais, princípio da inércia e equilíbrio translacional, distinguindo movimento uniforme, repouso e forças fictícias.",
    "prerequisites": [
      "Vetores e forças",
      "Leis de Newton",
      "Velocidade e aceleração"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Referenciais e princípio da inércia",
        "explanation": "Movimento é descrito relativamente a um referencial, que inclui uma escolha de origem, orientação e medida de tempo. Um passageiro sentado está em repouso em relação ao ônibus, mas pode mover-se em relação à rua. Referenciais inerciais são aqueles nos quais um corpo livre de força resultante mantém velocidade vetorial constante. A primeira lei de Newton não exige que corpos sem forças estejam parados: movimento retilíneo uniforme também satisfaz a condição de resultante nula. Um ônibus que segue em linha reta com velocidade constante pode ser tratado aproximadamente como inercial; ao frear ou fazer curva, o referencial do veículo passa a acelerar e exige cuidado na aplicação direta de F=ma. Em escalas escolares, o solo terrestre costuma ser aproximação de referencial inercial, embora a Terra gire e se mova. Não se deve confundir escolha de referencial com alteração física das interações: o peso do passageiro não desaparece porque ele está sentado no ônibus.",
        "example": "Um passageiro sentado em ônibus a 15 m/s em linha reta tem velocidade 0 em relação ao banco e aproximadamente 15 m/s em relação ao solo. Declare o referencial antes de dizer que ele está parado. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Não confunda modelo e fenômeno: identifique quais evidências justificam a definição utilizada.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Equilíbrio e diagramas de corpo livre",
        "explanation": "Em um referencial inercial, equilíbrio translacional significa soma vetorial das forças igual a zero. Para um livro de massa 2 kg em repouso sobre mesa horizontal, com g=10 m/s² e sem outras forças verticais, peso de 20 N para baixo e normal de 20 N para cima se equilibram. Essas forças atuam no mesmo corpo, mas não formam par de ação e reação: o par do peso é a atração exercida pelo livro sobre a Terra; o par da normal é a força do livro sobre a mesa. Se o livro desliza em linha reta com velocidade constante, a resultante também é zero, embora exista movimento. Quando uma corda puxa o corpo horizontalmente e há atrito, o equilíbrio pode exigir tração e atrito de mesmo módulo e sentidos opostos. A normal nem sempre equivale ao peso, pois outras forças verticais ou inclinação alteram seu valor. Antes de calcular, desenhe apenas forças externas sobre o corpo escolhido.",
        "example": "Livro de 2 kg sobre mesa, g=10: P=mg=20 N para baixo. Como a aceleração vertical é zero e não há outras forças verticais, N−P=0, então N=20 N para cima. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Evite aplicar relações fora das condições declaradas; verifique unidades, variáveis e contexto.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Referenciais acelerados e forças aparentes",
        "explanation": "Em um referencial que acelera em relação a um inercial, a descrição do movimento pode incluir forças fictícias para recuperar uma forma conveniente das equações. Ao frear, passageiros tendem a continuar seu movimento anterior por inércia; a sensação de projeção para frente não exige uma força real misteriosa atuando nessa direção. Em um elevador que acelera para cima, a normal sobre uma pessoa de massa m é N=m(g+a), desde que permaneça em contato com o piso e o eixo positivo seja para cima. Se acelera para baixo com módulo a menor que g, N=m(g−a); em queda livre idealizada, N tende a zero. O peso gravitacional mg não muda por causa da aceleração do elevador nessa aproximação, mas o peso aparente, associado à normal, muda. É essencial distinguir aceleração do referencial, força resultante e leitura da balança. A interpretação deve declarar o referencial e não aplicar fórmulas sem conferir o sentido da aceleração.",
        "example": "Pessoa de 60 kg em elevador que acelera para cima a 2 m/s², g=10: N−600=60×2, logo N=720 N. A balança lê força normal maior que o peso gravitacional de 600 N. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Uma conclusão precisa explicitar limitações e possíveis alternativas, sem generalização automática.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em referencial inercial, um corpo com força resultante nula:",
        "options": [
          "Deve estar em repouso",
          "Pode mover-se com velocidade constante",
          "Deve acelerar",
          "Deve girar sempre"
        ],
        "correctIndex": 1,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Pela primeira lei de Newton, a velocidade vetorial permanece constante quando a força resultante é zero. Isso inclui repouso e movimento retilíneo uniforme. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "intermediate",
        "prompt": "Livro de 3 kg repousa sobre mesa horizontal, g=10 m/s², sem outras forças verticais. A normal é:",
        "options": [
          "3 N",
          "10 N",
          "30 N",
          "300 N"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Peso P=mg=3×10=30 N. Como não há aceleração vertical nem outras forças nessa direção, a normal equilibra o peso: N=30 N. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "advanced",
        "prompt": "Pessoa de 50 kg em elevador com aceleração para cima de 2 m/s², g=10. A normal é:",
        "options": [
          "400 N",
          "500 N",
          "520 N",
          "600 N"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "N−mg=ma, portanto N=50×(10+2)=600 N. O peso gravitacional continua 500 N, mas a leitura da balança aumenta durante a aceleração. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Método científico",
    "objective": "Avaliar hipóteses, variáveis, controles e inferências em investigações biológicas, distinguindo associação de causalidade.",
    "prerequisites": [
      "Observação e medidas",
      "Variáveis e proporções",
      "Interpretação de gráficos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Perguntas, hipóteses e previsões",
        "explanation": "Uma investigação científica começa com pergunta delimitada e hipótese que possa gerar previsões confrontáveis com observações. Hipótese não é sinônimo de palpite sem fundamento, nem uma teoria científica é apenas hipótese que ainda não foi provada. Teorias integram explicações sustentadas por evidências e continuam abertas a revisão. Em estudo sobre germinação, uma hipótese pode propor que a disponibilidade de água influencia a porcentagem de sementes germinadas. Uma previsão operacional seria: lotes de mesma espécie, sob temperatura e luz equivalentes, terão germinação distinta se receberem quantidades diferentes de água. A pergunta deve especificar espécie, tempo e medida de germinação. A ciência não exige sempre laboratório; estudos observacionais podem ser rigorosos, mas têm limites próprios para inferência causal. Uma hipótese pode ser refutada por dados sem que isso signifique que a pesquisa fracassou. O objetivo é construir explicações testáveis e comunicáveis, com incerteza explícita.",
        "example": "Pergunta: água influencia germinação? Defina dois lotes de 30 sementes iguais, um com umidade adequada e outro sem água, sob mesma temperatura. Compare percentuais após sete dias e registre condições, não apenas impressões. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Não confunda modelo e fenômeno: identifique quais evidências justificam a definição utilizada.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Variáveis, controles e repetição",
        "explanation": "A variável independente é o fator manipulado pelo pesquisador em um experimento controlado, enquanto a dependente é o resultado medido. Temperatura, luminosidade e tipo de semente podem atuar como variáveis de confusão se mudarem junto com a quantidade de água. Um grupo controle oferece referência para comparar efeitos, mas controle não significa necessariamente ausência de qualquer tratamento: pode ser o procedimento padrão. Repetições independentes ajudam a estimar variação e reduzir a influência de eventos ocasionais. Medir cem sementes na mesma bandeja não equivale necessariamente a cem réplicas independentes, pois compartilham ambiente; isso é pseudorreplicação quando a unidade experimental real é a bandeja. Aleatorização da distribuição dos tratamentos e padronização das medidas diminuem vieses. Resultados de um experimento dependem de amostragem, precisão dos instrumentos e condições ambientais. Mesmo quando uma diferença aparece, é preciso avaliar sua magnitude, variabilidade e possíveis explicações alternativas.",
        "example": "Em 4 bandejas por tratamento, com 25 sementes cada, a unidade experimental pode ser a bandeja. Calcule a taxa de germinação de cada bandeja e compare as distribuições, em vez de fingir que 100 sementes são réplicas totalmente independentes. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Evite aplicar relações fora das condições declaradas; verifique unidades, variáveis e contexto.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Correlação, causalidade e revisão por pares",
        "explanation": "Uma correlação estatística descreve associação entre variáveis, mas não demonstra sozinha que uma causa a outra. Em estudo observacional, maior incidência de doença em locais poluídos pode refletir exposição, mas fatores como idade, renda e acesso a serviços de saúde também precisam ser considerados. Experimentos controlados, estudos longitudinais e triangulação de evidências podem fortalecer inferências causais, cada um com limites éticos e metodológicos. Valor de p, quando usado, não representa probabilidade de a hipótese ser verdadeira e não mede sozinho relevância biológica. Intervalos de confiança e tamanho de efeito acrescentam informação sobre precisão e magnitude. A revisão por pares busca detectar falhas, mas não garante infalibilidade; replicação e transparência dos métodos permitem reavaliação independente. A ética impede expor participantes ou animais a riscos injustificados, mesmo quando um experimento poderia gerar dados. Comunicar limitações faz parte do resultado científico e evita transformar uma associação provisória em certeza universal.",
        "example": "Duas regiões apresentam poluição e asma em níveis diferentes. Antes de concluir causalidade, verifique idade, tabagismo e acesso ao diagnóstico. A correlação inicial orienta hipótese, mas não resolve fatores de confusão. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Uma conclusão precisa explicitar limitações e possíveis alternativas, sem generalização automática.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em experimento sobre luz e crescimento vegetal, a altura medida é:",
        "options": [
          "Variável dependente",
          "Variável independente",
          "Grupo controle",
          "Hipótese nula"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Se o pesquisador manipula a luz e mede a altura, a altura é a variável dependente. Luz é a variável independente e o grupo controle fornece referência. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "intermediate",
        "prompt": "Oito bandejas recebem dois tratamentos, quatro por tratamento. Qual unidade experimental é mais apropriada?",
        "options": [
          "Cada folha individual",
          "Cada medida repetida da mesma planta",
          "Cada bandeja tratada independentemente",
          "Cada fotografia tirada"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Se o tratamento é aplicado por bandeja, cada bandeja é uma unidade experimental independente. Tratar sementes da mesma bandeja como réplicas independentes pode gerar pseudorreplicação. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "advanced",
        "prompt": "Uma correlação entre poluição e asma permite concluir que:",
        "options": [
          "A poluição é a única causa possível",
          "Não existe relação possível",
          "A hipótese já está provada sem controles",
          "Há associação que exige avaliação de confundidores e outras evidências"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Correlação não estabelece causalidade isoladamente. É necessário investigar variáveis de confusão, temporalidade e evidências complementares antes de sustentar uma explicação causal. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Diversidade religiosa: paganismo, judaísmo, cristianismo e islamismo",
    "objective": "Analisar tradições religiosas no mundo antigo e medieval, suas transformações históricas e convivências e conflitos sem reduzir grupos a estereótipos.",
    "prerequisites": [
      "Antiguidade mediterrânea",
      "Império Romano",
      "Leitura de fontes históricas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Tradições e contextos históricos",
        "explanation": "O termo paganismo foi usado em diferentes contextos, especialmente por autores cristãos, para classificar tradições religiosas diversas; não designa uma religião única com doutrina uniforme. No Mediterrâneo antigo coexistiram cultos cívicos, domésticos e mistéricos com múltiplas divindades e práticas locais. O judaísmo desenvolveu tradições monoteístas, textos e instituições ao longo de processos históricos complexos no Oriente Próximo. O cristianismo surgiu no século I em contexto judaico sob domínio romano e se diversificou em comunidades e interpretações distintas. O islamismo surgiu no século VII na Península Arábica e expandiu-se por redes políticas, comerciais e culturais. É incorreto projetar fronteiras nacionais atuais sobre comunidades antigas ou supor que todas as pessoas de uma tradição compartilhassem práticas idênticas. Historiadores utilizam inscrições, documentos, arquitetura, arte e tradições textuais, distinguindo testemunhos de época e interpretações posteriores. O estudo histórico descreve contextos e mudanças sem julgar a verdade teológica de crenças.",
        "example": "Uma inscrição romana dedicada a divindade local e um texto cristão do mesmo período podem revelar práticas coexistentes. Identifique autor, data e finalidade de cada fonte antes de generalizar a religião de toda a população. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Não confunda modelo e fenômeno: identifique quais evidências justificam a definição utilizada.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Impérios, instituições e circulação cultural",
        "explanation": "A relação entre religião e poder político mudou ao longo dos séculos. O cristianismo, inicialmente minoritário no Império Romano, obteve tolerância legal no início do século IV e depois ganhou posição institucional privilegiada, sem que práticas anteriores desaparecessem imediatamente. O judaísmo manteve comunidades em múltiplas regiões, com tradições intelectuais e religiosas variadas. Em sociedades islâmicas medievais, centros urbanos como Bagdá e Córdoba abrigaram circulação de conhecimentos em filosofia, matemática e medicina, envolvendo pessoas de diferentes origens. Esses processos não significaram convivência sempre pacífica: existiram restrições, disputas e episódios de violência. Também não se pode reduzir expansão religiosa a conquista militar, pois comércio, migrações, redes familiares e produção intelectual tiveram papéis distintos conforme região e época. A comparação histórica exige separar textos normativos de práticas sociais e reconhecer assimetrias de poder. Instituições religiosas influenciaram calendários, educação, direito e assistência em contextos específicos.",
        "example": "Compare um decreto imperial sobre culto com registros de prática local. A norma mostra o que autoridades pretendiam; os registros permitem investigar como comunidades efetivamente responderam, inclusive com continuidades e resistências. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Evite aplicar relações fora das condições declaradas; verifique unidades, variáveis e contexto.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Fontes, convivência e anacronismos",
        "explanation": "As categorias judaísmo, cristianismo e islamismo reúnem tradições internamente diversas, com escolas interpretativas e transformações históricas. A convivência entre comunidades religiosas na Península Ibérica medieval variou entre cidades e períodos, incluindo cooperação intelectual e comercial, desigualdades legais e conflitos. Não é rigoroso idealizar toda a região como tolerante nem descrevê-la como guerra religiosa permanente. Fontes de governantes, líderes religiosos e cronistas podem omitir experiências de mulheres, camponeses e minorias, exigindo confronto com registros materiais e documentação local. Ao interpretar episódios de perseguição, é preciso analisar também disputas territoriais, fiscais e políticas, sem atribuir cada conflito exclusivamente à religião. Termos contemporâneos como cidadania laica, liberdade religiosa e identidade nacional não podem ser transportados automaticamente para instituições medievais. O estudo comparativo responsável preserva a diferença entre crença, instituição, prática e representação do outro, evitando estereótipos e explicações monocausais.",
        "example": "Se um cronista descreve conflito como disputa religiosa, confronte o relato com impostos, alianças e controle territorial. A fonte pode refletir perspectiva legítima, mas não necessariamente explicar sozinha todas as causas do episódio. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Uma conclusão precisa explicitar limitações e possíveis alternativas, sem generalização automática.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Historicamente, o termo paganismo:",
        "options": [
          "Designa uma religião única e uniforme",
          "Foi usado para classificar tradições religiosas diversas",
          "Surgiu como nome do islamismo",
          "É sinônimo de judaísmo"
        ],
        "correctIndex": 1,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Paganismo foi empregado em certos contextos, especialmente cristãos, para agrupar tradições variadas. Não representa uma doutrina única compartilhada por todos esses grupos. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "intermediate",
        "prompt": "O cristianismo surgiu originalmente:",
        "options": [
          "No século VII na Península Arábica",
          "Na Europa do século XVIII",
          "No século I em contexto judaico sob domínio romano",
          "Na Mesopotâmia pré-histórica"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "O cristianismo surgiu no século I em contexto judaico do Império Romano. O islamismo teve origem no século VII na Península Arábica, e as outras opções são anacrônicas. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "advanced",
        "prompt": "Para estudar convivência religiosa medieval, o procedimento mais rigoroso é:",
        "options": [
          "Supor tolerância uniforme em todos os lugares",
          "Supor conflito permanente sem exceções",
          "Usar apenas uma crônica como prova definitiva",
          "Comparar fontes e distinguir normas, práticas e contextos locais"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "A convivência variou conforme época e região. Comparar fontes e instituições permite identificar cooperação, restrições e conflitos sem idealização ou generalização indevida. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Segurança na aquisição, armazenagem e utilização de produtos químicos domésticos de produtos",
    "objective": "Avaliar riscos de produtos químicos domésticos a partir de rótulos, incompatibilidades e rotas de exposição, sem propor misturas perigosas.",
    "prerequisites": [
      "Ácidos e bases",
      "Concentração e diluição",
      "Leitura de rótulos e pictogramas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Perigo, risco e rotulagem",
        "explanation": "Perigo é a capacidade intrínseca de uma substância ou mistura causar dano, enquanto risco depende também da probabilidade e intensidade de exposição. Produtos domésticos podem conter oxidantes, ácidos, bases e solventes, e sua segurança não pode ser inferida apenas de cheiro ou aparência. Rótulos e fichas de segurança identificam composição, pictogramas, advertências e procedimentos adequados de armazenamento. Uma solução concentrada costuma exigir precauções diferentes de uma formulação diluída, mas mesmo produtos de uso comum podem causar queimaduras ou intoxicações. A expressão natural não garante ausência de perigo químico. A compra responsável considera embalagem original íntegra, instruções legíveis, finalidade do produto e proteção de crianças e animais. A manipulação deve seguir orientações do fabricante, com ventilação e proteção apropriadas quando indicadas. Transferir líquidos para garrafas de bebida aumenta risco de ingestão acidental e perde informações essenciais. A análise científica distingue classe de perigo, via de exposição e medida preventiva.",
        "example": "Compare dois frascos do mesmo produto com concentrações diferentes e rótulos completos. Identifique primeiro o perigo indicado e depois a exposição prevista; não conclua que a solução diluída é automaticamente inofensiva. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Não confunda modelo e fenômeno: identifique quais evidências justificam a definição utilizada.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Incompatibilidades e armazenamento",
        "explanation": "Misturar produtos de limpeza sem indicação expressa do fabricante é perigoso. Água sanitária, que contém espécies oxidantes derivadas de hipoclorito, não deve ser combinada com produtos ácidos ou amoniacais, pois podem ocorrer liberações de gases tóxicos. Não é necessário reproduzir a mistura para reconhecer o risco; a prevenção é a medida correta. Ácidos e bases fortes podem causar lesões por contato, e solventes inflamáveis exigem afastamento de fontes de ignição. Produtos devem permanecer em embalagens originais fechadas, em local compatível com as condições de temperatura e ventilação recomendadas, separados de alimentos e fora do alcance de crianças. A ordem de adição em procedimentos laboratoriais depende de protocolo específico e não deve ser extrapolada para misturas domésticas. Em caso de exposição, orientações de emergência devem seguir rótulo, serviço de saúde ou centro de informações toxicológicas; não se deve improvisar neutralizações sobre a pele ou provocar vômito. A incompatibilidade é propriedade química que orienta prevenção.",
        "example": "Se dois produtos exibem advertências de incompatibilidade, mantenha-os separados e utilize cada um apenas conforme o rótulo. O procedimento seguro não é testar se a mistura libera gás, mas evitar a combinação. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Evite aplicar relações fora das condições declaradas; verifique unidades, variáveis e contexto.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Concentração, descarte e interpretação de dados",
        "explanation": "A concentração influencia a quantidade de soluto disponível por volume, mas não resume sozinha o risco, que também depende de toxicidade, tempo de contato e via de exposição. Uma solução de 2% em massa contém 2 g de soluto por 100 g de solução; isso não equivale necessariamente a 2 g por 100 mL, pois densidade pode diferir de 1 g/mL. Diluição pode reduzir concentração, mas não neutraliza automaticamente propriedades oxidantes, inflamáveis ou corrosivas. Resíduos domésticos devem seguir orientações locais de coleta e descarte, especialmente para tintas, solventes, pesticidas e baterias; despejar tudo no ralo pode afetar tubulações e ecossistemas. Em situações de acidente, o primeiro passo é interromper a exposição com segurança e buscar orientação apropriada, não tentar uma reação química corretiva improvisada. Uma avaliação de risco responsável documenta produto, concentração, quantidade, local e pessoas potencialmente expostas sem recomendar experimentos perigosos.",
        "example": "Em 500 g de solução a 2% em massa, m(soluto)=0,02×500=10 g. O cálculo não autoriza misturar o produto com outro nem determina por si só se a exposição é segura. Confira a hipótese adotada, as condições experimentais e a interpretação final antes de extrapolar o resultado.",
        "pitfall": "Uma conclusão precisa explicitar limitações e possíveis alternativas, sem generalização automática.",
        "steps": [
          "Identifique grandezas, contexto e pergunta central.",
          "Resolva o caso com os conceitos específicos apresentados.",
          "Interprete o resultado e verifique validade, evidências e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a diferença correta entre perigo e risco?",
        "options": [
          "Perigo é dano possível intrínseco; risco depende também da exposição",
          "São sempre sinônimos perfeitos",
          "Risco independe da exposição",
          "Perigo existe apenas em laboratório"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Perigo descreve capacidade de causar dano. Risco considera a possibilidade e as condições de exposição, portanto varia com concentração, uso e medidas preventivas. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "intermediate",
        "prompt": "Qual conduta é adequada com água sanitária e limpador ácido?",
        "options": [
          "Misturar para aumentar a limpeza",
          "Testar mistura em local fechado",
          "Não misturar e seguir as instruções dos rótulos",
          "Aquecer a mistura antes de usar"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Produtos com hipoclorito podem liberar gases tóxicos ao contato com ácidos. A conduta segura é não misturá-los, não realizar testes e seguir as instruções do fabricante. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      },
      {
        "level": "advanced",
        "prompt": "Em 250 g de solução a 4% em massa, a massa de soluto é:",
        "options": [
          "1 g",
          "4 g",
          "100 g",
          "10 g"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos relevantes e confira os dados e as condições.",
        "solution": "Porcentagem em massa é m(soluto)/m(solução)×100. Assim 0,04×250=10 g. O resultado não determina isoladamente a segurança do produto. Os demais distratores desconsideram uma definição, relação quantitativa ou condição histórica/científica relevante."
      }
    ]
  }
];
