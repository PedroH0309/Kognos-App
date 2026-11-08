import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original deeper science modules: thermochemistry, nuclear chemistry, optics, thermodynamics, translation. */
export const provaoDepthBatch03Science:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Conceito de entalpia e Lei de Hess",
    "objective": "Interpretar entalpia de reação, distinguir processos exotérmicos e endotérmicos e aplicar a Lei de Hess com sinais, proporções estequiométricas e estados físicos.",
    "prerequisites": [
      "Equações químicas balanceadas",
      "Energia e calor",
      "Operações com números positivos e negativos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Entalpia e variação de energia em uma reação",
        "explanation": "Entalpia, representada por H, é uma função de estado associada à energia de um sistema e ao produto pressão-volume. Em condições de pressão constante, quando somente trabalho de expansão é relevante, a variação de entalpia ΔH pode corresponder ao calor trocado pelo sistema. Em exercícios, costuma-se usar ΔH=H(produtos)−H(reagentes) para analisar o sinal. Um processo exotérmico libera energia térmica para o entorno e apresenta ΔH negativo; um endotérmico absorve energia, com ΔH positivo, nas condições adotadas.\n\nO sinal de ΔH não informa a velocidade da reação. Uma combustão pode liberar calor e ainda precisar de energia de ativação para começar. As transformações químicas também dependem dos estados físicos: produzir água líquida e água vapor não tem a mesma variação de entalpia, pois mudanças de fase envolvem energia. Indique sempre unidades, como kJ por quantidade correspondente à equação.\n\nNum perfil energético simplificado, uma reação exotérmica tem produtos em nível de entalpia menor que os reagentes. O pico representa a barreira de ativação, não a variação global. Uma reação endotérmica pode ter produtos com entalpia maior e ainda ocorrer sob condições apropriadas.",
        "example": "Uma reação tem entalpia dos reagentes de 180 kJ e dos produtos de 60 kJ no diagrama proposto. ΔH=60−180=−120 kJ para a reação conforme escrita. O valor negativo indica processo exotérmico. Se a equação química for invertida, o sinal passará a positivo.",
        "pitfall": "Não confunda ΔH com energia de ativação ou velocidade. Energia dos produtos abaixo da dos reagentes indica ΔH negativo; a altura do pico não substitui essa diferença.",
        "steps": [
          "Identifique condições, estados físicos e a equação química de referência.",
          "Subtraia H dos reagentes de H dos produtos com sinais corretos.",
          "Interprete ΔH negativo ou positivo em termos de energia do sistema."
        ]
      },
      {
        "level": "intermediate",
        "title": "Lei de Hess: somar caminhos sem alterar o resultado final",
        "explanation": "A Lei de Hess decorre do caráter de função de estado da entalpia: a variação global depende dos estados inicial e final, e não das etapas escolhidas para representar o processo. Isso permite somar equações termoquímicas para encontrar o ΔH de uma transformação que não foi medido diretamente. A soma só é válida quando as espécies químicas e seus estados físicos correspondem exatamente e as substâncias intermediárias se cancelam.\n\nAo inverter uma equação, inverta o sinal do ΔH; ao multiplicar a equação por um fator, multiplique também o ΔH pelo mesmo fator. Essas regras parecem algébricas porque as equações podem ser combinadas como relações formais de conservação da matéria, mas o significado físico permanece ligado à quantidade de reação representada. Não some dois números sem verificar se a reação-alvo realmente emerge da combinação.\n\nNa resolução, escreva todas as reações alinhadas, identifique o que precisa ser cancelado e verifique se aparecem os coeficientes corretos. A energia calculada acompanha a equação final, e não é um valor universal da substância isolada.",
        "example": "Considere A→B com ΔH=−50 kJ e B→C com ΔH=+20 kJ. Somando as etapas, B é intermediário e cancela, restando A→C. A variação final é −50+20=−30 kJ. Se a reação-alvo fosse C→A, o valor seria +30 kJ, pois a reação está invertida.",
        "pitfall": "Não some ΔH de equações que deixam espécies extras ou estados físicos incompatíveis. O cancelamento correto das substâncias é indispensável para aplicar a Lei de Hess.",
        "steps": [
          "Escreva a reação-alvo e compare reagentes e produtos com as etapas disponíveis.",
          "Inverta ou multiplique equações e aplique a mesma operação aos ΔH.",
          "Some, cancele intermediários e confira se a reação final corresponde à desejada."
        ]
      },
      {
        "level": "advanced",
        "title": "Formação padrão, combustão e consistência termodinâmica",
        "explanation": "Entalpia padrão de formação é a variação de entalpia associada à formação de um mol de uma substância a partir dos elementos em seus estados-padrão de referência. A entalpia de formação de elementos em seu estado padrão é definida como zero por convenção. Usando dados de formação, calcula-se ΔH°reação = ΣνΔH°f(produtos)−ΣνΔH°f(reagentes), com os coeficientes estequiométricos ν da equação balanceada.\n\nA fórmula exige usar valores referentes ao mesmo conjunto de condições padrão e estados físicos. CO₂(g) e H₂O(l) têm valores de formação distintos de H₂O(g), e isso afeta o resultado de combustões. A Lei de Hess permite combinar reações de formação como um caminho alternativo, mas não dispensa consistência de dados. Ao dobrar uma reação, a quantidade de matéria e o calor associado também dobram; por outro lado, ΔH por mol de reação depende da convenção adotada para essa equação.\n\nUma análise avançada distingue ΔH de espontaneidade. A reação exotérmica não é necessariamente espontânea em qualquer condição, pois a energia livre de Gibbs considera também entropia e temperatura. A Lei de Hess resolve balanços de entalpia, não questões de rapidez ou mecanismo de transformação.",
        "example": "Suponha, num exercício hipotético, ΔH°f(CO₂) = −394 kJ/mol e ΔH°f(CO) = −111 kJ/mol, com ΔH°f(O₂) = 0. Para CO + 1/2 O₂ → CO₂, ΔH° = −394 − (−111+0) = −283 kJ por mol de CO consumido.",
        "pitfall": "Não confunda os coeficientes de uma equação com massas em gramas. Os dados de formação são por mol e devem ser ponderados pelos coeficientes antes da subtração.",
        "steps": [
          "Balanceie a reação e identifique estados físicos de todas as espécies.",
          "Some entalpias de formação de produtos e reagentes ponderadas por coeficientes.",
          "Subtraia e interprete a unidade segundo a quantidade de reação considerada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma reação tem H(reagentes)=180 kJ e H(produtos)=60 kJ. Seu ΔH é:",
        "options": [
          "−120 kJ, exotérmica.",
          "+120 kJ, endotérmica.",
          "+240 kJ, exotérmica.",
          "0 kJ, sem troca energética."
        ],
        "correctIndex": 0,
        "hint": "Calcule H(produtos)−H(reagentes).",
        "solution": "A alternativa A está correta: 60−180=−120 kJ. O sinal negativo significa diminuição de entalpia do sistema, coerente com liberação de energia térmica no modelo proposto."
      },
      {
        "level": "intermediate",
        "prompt": "A→B tem ΔH=−50 kJ e B→C tem ΔH=+20 kJ. Para A→C, ΔH vale:",
        "options": [
          "+70 kJ",
          "−30 kJ",
          "−70 kJ",
          "+30 kJ"
        ],
        "correctIndex": 1,
        "hint": "Some os ΔH e cancele o intermediário B.",
        "solution": "A alternativa B está correta: pela Lei de Hess, A→B e B→C somam-se para produzir A→C, e ΔH=−50+20=−30 kJ. O sinal e a direção precisam ser preservados."
      },
      {
        "level": "advanced",
        "prompt": "Se a reação termoquímica X→Y com ΔH=−40 kJ é invertida e multiplicada por dois, qual ΔH corresponde a 2Y→2X?",
        "options": [
          "−80 kJ",
          "−20 kJ",
          "+80 kJ",
          "+40 kJ"
        ],
        "correctIndex": 2,
        "hint": "Inverter muda o sinal; multiplicar dobra o ΔH.",
        "solution": "A alternativa C está correta: Y→X tem ΔH=+40 kJ e 2Y→2X tem ΔH=+80 kJ. O calor está associado à extensão da reação representada pela equação escrita."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Reações nucleares: fissão e fusão nucleares",
    "objective": "Distinguir fissão, fusão e decaimento, conservar números de massa e atômico em equações nucleares, relacionar defeito de massa à energia e discutir condições e limites de aplicações energéticas.",
    "prerequisites": [
      "Prótons, nêutrons e isótopos",
      "Notação nuclear",
      "Conservação de carga e energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Mudanças no núcleo, não nas ligações químicas",
        "explanation": "Reações nucleares envolvem transformações no núcleo atômico e podem alterar a identidade dos núcleos participantes, ao contrário de reações químicas usuais, que rearranjam elétrons e ligações sem mudar o número de prótons. Fissão nuclear é a divisão de um núcleo pesado em fragmentos de menor massa, frequentemente acompanhada de nêutrons e liberação de energia. Fusão nuclear combina núcleos leves em um núcleo mais pesado, sob condições adequadas, também podendo liberar energia.\n\nA notação nuclear coloca o número de massa A (prótons+nêutrons) e o número atômico Z (prótons) junto ao símbolo do elemento. Em uma equação nuclear, é necessário conservar a soma dos números de massa e a carga elétrica, incluindo partículas emitidas. Essa conservação ajuda a identificar núcleos desconhecidos, mas não prova que uma reação seja fácil de realizar experimentalmente.\n\nEm processos nucleares, pequena diferença entre massas iniciais e finais pode corresponder a energia por E=Δmc², considerando a massa-energia do sistema. A liberação de energia não implica ausência de radiação ou de riscos; diferentes processos exigem contenção, medidas de segurança e análise ambiental.",
        "example": "Na fissão esquemática de um núcleo pesado após capturar um nêutron, aparecem dois núcleos menores e outros nêutrons. Ao conferir A e Z, conte também os nêutrons livres; ignorá-los faria parecer que a soma dos números de massa não se conserva.",
        "pitfall": "Não afirme que fissão e fusão são a mesma reação ou que radiação sempre significa explosão. A primeira divide núcleos pesados; a segunda combina núcleos leves, com condições e produtos diferentes.",
        "steps": [
          "Diferencie reações nucleares das químicas por mudança no núcleo.",
          "Identifique fissão, fusão e partículas envolvidas nas equações.",
          "Confira número de massa e carga no balanço."
        ]
      },
      {
        "level": "intermediate",
        "title": "Fissão em cadeia e condições de fusão",
        "explanation": "Em certos materiais físseis, a captura de nêutron pode provocar fissão e liberar mais nêutrons. Se parte deles desencadeia novas fissões, forma-se reação em cadeia. Uma reação sustentada requer condições relacionadas ao combustível, geometria, moderação, perdas de nêutrons e controle. Em reatores, sistemas de controle visam regular a reação; não se deve confundir funcionamento de reator com detonação nuclear.\n\nA fusão de núcleos leves enfrenta repulsão elétrica entre núcleos positivamente carregados, de modo que a reação exige temperaturas e condições de confinamento muito elevadas ou outros arranjos apropriados. No interior das estrelas, processos de fusão contribuem para sua produção energética. Projetos terrestres de fusão enfrentam desafios de confinamento de plasma, materiais e balanço energético global.\n\nEmbora ambas possam liberar energia, a comparação de tecnologias exige considerar combustível, rejeitos, segurança, custo, eficiência e estágio de desenvolvimento. Nenhum processo é classificado como universalmente seguro ou renovável apenas pela palavra “nuclear”. É necessário diferenciar a reação física do sistema tecnológico completo.",
        "example": "Em uma cadeia de fissão hipotética, cada evento libera dois nêutrons que podem causar novas fissões, mas nem todos são necessariamente absorvidos por combustível: alguns escapam ou são capturados por outros materiais. Por isso, multiplicar por dois a cada etapa é um modelo idealizado, não previsão automática de um reator real.",
        "pitfall": "Não conclua que toda reação em cadeia cresce indefinidamente; controle e perdas de nêutrons podem estabilizar ou interromper a sequência. Na fusão, alta liberação potencial não elimina exigências técnicas.",
        "steps": [
          "Reconheça a diferença entre reação física e dispositivo de controle.",
          "Relacione propagação de nêutrons à possibilidade de reação em cadeia.",
          "Compare condições e desafios tecnológicos da fusão com a fissão."
        ]
      },
      {
        "level": "advanced",
        "title": "Defeito de massa, rendimento e avaliação de impactos",
        "explanation": "A energia de ligação nuclear relaciona-se à diferença entre a massa total de constituintes separados e a massa do núcleo formado. Uma reação pode liberar energia quando os produtos apresentam energia total menor que os reagentes, respeitando conservação da massa-energia. A relação E=Δmc² utiliza diferença de massas no mesmo sistema de unidades; como c² é muito grande, pequenas diferenças podem corresponder a energias significativas.\n\nUma conta de ensino médio pode usar Δm=1,0×10⁻⁶ kg e c≈3,0×10⁸ m/s, resultando E≈9,0×10¹⁰ J. Isso representa energia equivalente de uma diferença de massa especificada, não valor típico obrigatório de toda reação nuclear. Em reações reais, o balanço inclui energias cinéticas, fótons, partículas emitidas e, quando pertinentes, outras formas de energia do sistema.\n\nAvaliar produção nuclear envolve mais do que a energia liberada por reação. É necessário considerar extração e processamento de materiais, projeto do sistema, resíduos, riscos operacionais, regulação e condições locais. Comparar impactos ambientais exige ciclo de vida e dados verificáveis; não é justificável concluir que uma tecnologia é totalmente livre de impactos ou que duas formas de energia são idênticas.",
        "example": "Num exercício, um sistema tem diferença de massa convertida de 2,0×10⁻⁷ kg. A energia correspondente é E=2,0×10⁻⁷×(3,0×10⁸)²=1,8×10¹⁰ J. A unidade resultante é joule, e o valor depende da diferença de massa assumida no enunciado.",
        "pitfall": "Não utilize gramas diretamente em E=Δmc² com c em m/s sem converter a quilogramas. Também não equipare energia física disponível a eletricidade entregue sem considerar eficiência.",
        "steps": [
          "Escreva a diferença de massa e converta para kg no SI.",
          "Calcule E=Δmc² e confira potência de dez e unidade.",
          "Diferencie energia física da reação de rendimento e impacto do sistema energético."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual descrição distingue corretamente fissão e fusão?",
        "options": [
          "Fissão divide núcleo pesado; fusão combina núcleos leves.",
          "Fissão combina átomos pelo compartilhamento de elétrons.",
          "Fusão é sempre uma transformação química comum.",
          "Ambas ocorrem apenas fora do núcleo."
        ],
        "correctIndex": 0,
        "hint": "A diferença central é o que acontece aos núcleos.",
        "solution": "A alternativa A está correta: fissão nuclear divide núcleos pesados em fragmentos e fusão combina núcleos leves, sob condições adequadas. As demais confundem reações nucleares com ligações eletrônicas."
      },
      {
        "level": "intermediate",
        "prompt": "Por que nêutrons liberados em fissões podem sustentar reação em cadeia?",
        "options": [
          "Porque todos os nêutrons inevitavelmente causam nova fissão.",
          "Porque alguns podem ser absorvidos por núcleos físseis e induzir novas fissões.",
          "Porque nêutrons são elétrons e atravessam fios metálicos.",
          "Porque a reação não depende de geometria ou combustível."
        ],
        "correctIndex": 1,
        "hint": "Considere captura de nêutrons, perdas e controle.",
        "solution": "A alternativa B está correta: nêutrons podem induzir novas fissões, mas perdas, absorção e condições de material determinam se a cadeia se sustenta. As demais negam propriedades e controles conhecidos."
      },
      {
        "level": "advanced",
        "prompt": "Uma diferença de massa de 1,0×10⁻⁶ kg corresponde a qual energia usando c=3,0×10⁸ m/s?",
        "options": [
          "3,0×10² J",
          "9,0×10⁸ J",
          "9,0×10¹⁰ J",
          "3,0×10¹⁴ J"
        ],
        "correctIndex": 2,
        "hint": "Use E=Δmc², elevando a velocidade da luz ao quadrado.",
        "solution": "A alternativa C está correta: E=(10⁻⁶)×(9×10¹⁶)=9×10¹⁰ J. Os demais resultados provêm de tratamento incorreto dos expoentes ou de não elevar c ao quadrado."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Primeira e segunda Leis da Termodinâmica",
    "objective": "Aplicar conservação da energia a sistemas térmicos, calcular ΔU=Q−W sob convenção explícita, distinguir calor e trabalho e interpretar limites da segunda lei e eficiência térmica.",
    "prerequisites": [
      "Calor, temperatura e energia interna",
      "Trabalho mecânico",
      "Transformações gasosas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "A primeira lei conserva energia, não calor",
        "explanation": "A primeira lei da termodinâmica expressa a conservação de energia em processos térmicos. Para um sistema fechado em que Q é o calor recebido pelo sistema e W é o trabalho realizado pelo sistema, uma forma comum é ΔU=Q−W, sendo U a energia interna. É indispensável declarar convenção de sinais, pois livros podem adotar W como trabalho sobre o sistema e escrever equação equivalente com sinais diferentes.\n\nCalor é transferência de energia motivada por diferença de temperatura; trabalho é outra forma de transferência de energia por forças e deslocamentos macroscópicos ou mecanismos equivalentes. O sistema pode receber calor e realizar trabalho sem que toda a energia recebida aumente sua energia interna. A energia interna é propriedade de estado; Q e W dependem do processo seguido.\n\nSe um gás recebe 500 J como calor e realiza 200 J de trabalho, sua energia interna aumenta 300 J. Um sistema pode também perder calor, indicado por Q negativo nessa convenção. O balanço é contábil, mas representa trocas físicas: isolamentos, pistões e paredes determinam que interações são permitidas.",
        "example": "Um gás recebe Q=600 J e realiza W=250 J empurrando um êmbolo. Com ΔU=Q−W, ΔU=350 J. Se o gás realizasse 700 J de trabalho recebendo os mesmos 600 J, ΔU seria −100 J: sua energia interna diminuiria.",
        "pitfall": "Não trate Q e W como quantidades armazenadas no gás. Energia interna é propriedade do sistema; calor e trabalho são modos de transferência entre sistema e entorno.",
        "steps": [
          "Delimite sistema e convenção de sinais para Q e W.",
          "Identifique entradas e saídas de energia durante o processo.",
          "Calcule ΔU e interprete o sinal fisicamente."
        ]
      },
      {
        "level": "intermediate",
        "title": "Transformações particulares e balanços de energia",
        "explanation": "Num processo isocórico de gás ideal, volume constante implica trabalho de expansão pΔV nulo no modelo elementar; assim, na ausência de outras formas de trabalho, ΔU=Q. Em transformação adiabática idealizada, Q=0; se o gás realiza trabalho positivo, sua energia interna diminui, portanto ΔU=−W. A ausência de calor não significa ausência de variação de temperatura.\n\nPara um gás ideal, a energia interna depende da temperatura, não diretamente do volume. Em transformação isotérmica de gás ideal, ΔU=0, de modo que Q=W com a convenção adotada; calor recebido pode converter-se integralmente em trabalho num único processo isotérmico, mas não constitui, sozinho, um ciclo capaz de produzir trabalho continuamente sem outras mudanças. As hipóteses sobre gás ideal e processo precisam ser indicadas.\n\nUm gráfico pressão-volume permite calcular o trabalho do gás como área sob a curva em processos quase estáticos apropriados. Para expansão a pressão constante, W=pΔV. Unidade correta: pascal vezes metro cúbico equivale a joule. Ler um gráfico sem verificar eixos e unidades pode produzir resultado incompatível com a física.",
        "example": "Um gás expande a pressão constante de 2,0×10⁵ Pa, variando volume de 0,003 para 0,005 m³. ΔV=0,002 m³ e W=pΔV=400 J. Se recebeu Q=700 J, então ΔU=700−400=300 J. A energia interna aumentou, embora parte do calor tenha sido transferida como trabalho.",
        "pitfall": "Não afirme que adiabática significa temperatura constante. Sem calor, ainda pode haver trabalho e variação de energia interna. Também não use fórmulas de gás ideal sem conferir hipóteses.",
        "steps": [
          "Identifique se processo é isocórico, isotérmico ou adiabático.",
          "Calcule trabalho do gás por pΔV quando pressão é constante.",
          "Utilize primeira lei e interprete energia interna de acordo com o processo."
        ]
      },
      {
        "level": "advanced",
        "title": "A segunda lei estabelece limites e direções",
        "explanation": "A segunda lei da termodinâmica introduz direção e limites para processos térmicos. Ela não contradiz a conservação de energia: mesmo que energia total seja conservada, nem toda energia térmica de uma única fonte pode ser transformada continuamente em trabalho útil num ciclo. Máquinas térmicas operam entre reservatórios de temperaturas diferentes, absorvendo calor de fonte quente e rejeitando parte a fonte fria.\n\nO rendimento de máquina térmica é η=W/Qh, e para um ciclo W=Qh−Qc, com Qc representando módulo do calor rejeitado. Portanto η=1−Qc/Qh. Uma máquina reversível ideal de Carnot entre temperaturas absolutas Th e Tc tem limite ηCarnot=1−Tc/Th, com ambas expressas em kelvin. Esse limite não descreve rendimento real obrigatório: atrito, perdas e irreversibilidades reduzem eficiência.\n\nA entropia fornece ferramenta para analisar irreversibilidade. Em processo espontâneo de sistema isolado, a entropia total não diminui; isso não significa que a entropia de cada subsistema precise sempre crescer. Um refrigerador realiza trabalho externo para transferir calor de uma região fria a outra mais quente, compatível com a segunda lei.",
        "example": "Uma máquina absorve 1000 J da fonte quente e rejeita 600 J à fria em cada ciclo. O trabalho é 400 J e o rendimento é 400/1000=0,40, ou 40%. Não é possível concluir, apenas desses valores, que a máquina seja reversível.",
        "pitfall": "Não calcule limite de Carnot com Celsius. Também não confunda rendimento de 40% com perda de 60% de energia: os 600 J foram transferidos à fonte fria, respeitando conservação.",
        "steps": [
          "Calcule trabalho e rendimento a partir de Qh e Qc.",
          "Para Carnot, converta temperaturas para kelvin antes de usar a fórmula.",
          "Explique por que conservação e irreversibilidade são leis complementares."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um gás recebe 500 J de calor e realiza 200 J de trabalho. Com ΔU=Q−W, qual ΔU?",
        "options": [
          "+300 J",
          "+700 J",
          "−300 J",
          "−700 J"
        ],
        "correctIndex": 0,
        "hint": "Subtraia o trabalho realizado pelo gás do calor recebido.",
        "solution": "A alternativa A está correta: ΔU=500−200=+300 J; o gás aumentou sua energia interna. Os demais resultados aplicam sinais de modo incompatível com a convenção fornecida."
      },
      {
        "level": "intermediate",
        "prompt": "Para uma transformação adiabática em sistema fechado, sem outras formas de trabalho, qual afirmação está correta?",
        "options": [
          "A temperatura fica necessariamente constante.",
          "Q=0, e o trabalho pode alterar a energia interna.",
          "A energia interna é sempre zero.",
          "O gás não pode realizar trabalho."
        ],
        "correctIndex": 1,
        "hint": "Adiabática significa ausência de calor transferido.",
        "solution": "A alternativa B está correta: Q=0 e ΔU=−W, pela convenção em que W é trabalho do sistema. A, C e D atribuem consequências não exigidas pela condição de ausência de calor."
      },
      {
        "level": "advanced",
        "prompt": "Uma máquina recebe 1000 J e rejeita 600 J em cada ciclo. Qual é seu rendimento?",
        "options": [
          "60%",
          "100%",
          "40%",
          "0%"
        ],
        "correctIndex": 2,
        "hint": "O trabalho é a diferença entre calor recebido e rejeitado.",
        "solution": "A alternativa C está correta: W=1000−600=400 J e η=400/1000=40%. As demais confundem o calor rejeitado com trabalho ou desconsideram o ciclo."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Fenômeno da refração. Índice de refração absoluto",
    "objective": "Explicar refração por mudança de velocidade da luz, aplicar índice absoluto e lei de Snell, interpretar direção do desvio, frequência conservada e condições de reflexão total interna.",
    "prerequisites": [
      "Ondas e frequência",
      "Ângulos e funções trigonométricas",
      "Propagação da luz"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "O que muda quando a luz atravessa meios",
        "explanation": "Refração é o fenômeno associado à mudança das propriedades de propagação de uma onda ao atravessar meios distintos. Para a luz, a velocidade de fase em meio transparente pode diferir da velocidade no vácuo. O índice de refração absoluto é n=c/v, onde c é a velocidade da luz no vácuo e v a velocidade de fase no meio para as condições consideradas. Valores usuais de n para meios transparentes são maiores que um, mas o comportamento óptico real pode depender da frequência.\n\nAo passar de ar para água, a luz pode mudar direção quando incide obliquamente. Se o raio entra num meio com índice maior, tende a aproximar-se da normal à superfície no modelo geométrico usual. Na incidência normal, direção não sofre desvio angular, embora velocidade e comprimento de onda possam mudar. A frequência da luz transmitida costuma permanecer determinada pela fonte; o comprimento se ajusta à nova velocidade.\n\nO fenômeno explica distorção aparente de objetos submersos e participa de lentes. Não significa que o objeto realmente tenha mudado de posição ou tamanho. A descrição precisa distinguir raio incidente, normal, ângulos e meio de origem e de destino.",
        "example": "Um raio entra da atmosfera em água num ângulo oblíquo. A água tem índice maior que o ar para luz visível comum, então o raio refratado tende a formar ângulo menor com a normal. Isso não é reflexão: parte da luz atravessa a interface.",
        "pitfall": "Não meça ângulos em relação à superfície quando a lei de Snell usa a normal. Também não diga que a frequência necessariamente diminui ao entrar em meio mais refringente.",
        "steps": [
          "Desenhe interface e normal antes de indicar os ângulos.",
          "Compare índices de origem e destino para prever o desvio.",
          "Diferencie mudança de velocidade e comprimento de onda de frequência."
        ]
      },
      {
        "level": "intermediate",
        "title": "Lei de Snell e cálculo de ângulos",
        "explanation": "A lei de Snell-Descartes descreve, em condições apropriadas, a relação n₁ senθ₁ = n₂ senθ₂, com θ medidos a partir da normal. A expressão permite calcular ângulo refratado ou índice desconhecido quando as demais grandezas são fornecidas. Se n₂>n₁ para a situação considerada, senθ₂<senθ₁, de modo que o raio refratado aproxima-se da normal, salvo particularidades do fenômeno.\n\nUm exercício pode fornecer sen30°=0,5 e n₁=1,0, n₂=1,5. Nesse caso, senθ₂=(1,0/1,5)×0,5=1/3; θ₂ é aproximadamente 19,5°. Não basta dividir o ângulo de 30° por 1,5: a lei envolve senos dos ângulos, não os ângulos diretamente. A mesma equação se aplica à incidência em sentido inverso sob hipóteses equivalentes.\n\nO índice também se relaciona ao comprimento de onda no meio: como f é mantida, λ=v/f. Se a velocidade cai, λ cai proporcionalmente. Questões com diferentes comprimentos de onda devem considerar dispersão quando explicitada; um índice único pode ser aproximação limitada.",
        "example": "A luz vai do ar (n=1,0) para um líquido (n=1,5), incidindo a 30° da normal. Aplicando Snell: 1,0×0,5 = 1,5×senθ₂, logo senθ₂=1/3 e θ₂≈19,5°. A direção fica mais próxima da normal, conforme esperado para um índice maior.",
        "pitfall": "Não substitua senθ por θ em graus. A razão dos índices altera o seno do ângulo, e calculadoras devem estar configuradas no modo angular coerente.",
        "steps": [
          "Identifique índices e ângulos, sempre em relação à normal.",
          "Isole seno do ângulo procurado na lei de Snell.",
          "Verifique se o desvio calculado é coerente com o índice relativo."
        ]
      },
      {
        "level": "advanced",
        "title": "Ângulo limite, reflexão total e aplicações",
        "explanation": "Quando a luz passa de meio de maior índice para outro de menor índice, o ângulo refratado pode tornar-se maior que o de incidência. Existe um ângulo de incidência limite θc para o qual o raio transmitido seria rasante à interface: senθc=n₂/n₁ para n₁>n₂, no modelo de dois meios transparentes. Para ângulos de incidência superiores ao limite, a reflexão total interna ocorre em condições apropriadas.\n\nEm uma interface vidro-ar com índices aproximados 1,5 e 1,0, senθc=1/1,5=2/3, então θc≈41,8°. Para incidência abaixo desse limite, há refração transmitida; acima dele, ocorre reflexão total interna no modelo geométrico. A luz pode apresentar efeitos adicionais reais como ondas evanescentes próximos à interface, mas a questão escolar costuma trabalhar o modelo de raios.\n\nFibras ópticas podem guiar luz graças a condições de índice entre núcleo e revestimento e reflexão total interna, considerando também modos de propagação e perdas. O fenômeno não é exclusivo de tecnologia digital, aparecendo em instrumentos ópticos e observações naturais. Interprete sempre qual é o meio de incidência: do menor para o maior índice não ocorre reflexão total pela mesma condição.",
        "example": "Uma luz sai de vidro com n=1,5 para ar com n=1,0. A condição de limite é senθc=1/1,5≈0,667, resultando θc≈41,8°. Se a incidência, medida da normal, for 50°, o modelo prevê reflexão total interna; a 30°, existe raio refratado.",
        "pitfall": "Não use fórmula de ângulo limite ao passar de índice menor para maior. A condição de reflexão total depende da direção do percurso e do índice relativo dos meios.",
        "steps": [
          "Confirme que a luz sai do meio de maior índice.",
          "Calcule senθc=n₂/n₁ e determine o ângulo limite.",
          "Compare o ângulo de incidência com θc e interprete o resultado físico."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Ao passar obliquamente de ar para água, com índice maior, a luz normalmente:",
        "options": [
          "Aproxima-se da normal à interface.",
          "Afasta-se sempre da normal.",
          "Perde toda sua frequência.",
          "Não muda nenhuma característica."
        ],
        "correctIndex": 0,
        "hint": "Compare os índices e a normal.",
        "solution": "A alternativa A está correta: no modelo geométrico, entrar em meio mais refringente diminui o ângulo com a normal. A frequência não precisa mudar; velocidade e comprimento de onda mudam."
      },
      {
        "level": "intermediate",
        "prompt": "Com n₁=1, senθ₁=0,5 e n₂=1,5, o valor de senθ₂ é:",
        "options": [
          "0,75",
          "1/3",
          "1,5",
          "0"
        ],
        "correctIndex": 1,
        "hint": "Use n₁senθ₁=n₂senθ₂.",
        "solution": "A alternativa B está correta: senθ₂=(1×0,5)/1,5=1/3. As demais não satisfazem a equação de Snell nas condições dadas. O raio passa para um meio de índice maior e seu ângulo com a normal diminui."
      },
      {
        "level": "advanced",
        "prompt": "Quando pode ocorrer reflexão total interna num modelo óptico ideal?",
        "options": [
          "Na passagem de menor para maior índice, em qualquer ângulo.",
          "Somente com incidência normal.",
          "Na passagem de maior para menor índice, acima do ângulo limite.",
          "Sempre que o índice dos meios é igual."
        ],
        "correctIndex": 2,
        "hint": "Verifique sentido do raio e a condição do ângulo.",
        "solution": "A alternativa C está correta: é necessário ir do meio mais refringente para o menos refringente e incidir com ângulo superior ao limite. As demais ignoram as condições de Snell."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Código genético e síntese proteica",
    "objective": "Explicar transcrição, processamento de RNA quando aplicável, código genético, códon e anticódon, etapas de tradução e efeitos potenciais de mutações sobre sequências proteicas.",
    "prerequisites": [
      "DNA e RNA",
      "Nucleotídeos e bases",
      "Ribossomos e aminoácidos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Do DNA à sequência de aminoácidos",
        "explanation": "A informação genética é expressa, em numerosos genes, pela produção de RNA a partir de DNA e pela síntese de polipeptídeos. Transcrição utiliza uma fita de DNA como molde para formar RNA complementar, segundo regras de pareamento. Em células eucarióticas, transcritos de muitos genes codificadores passam por processamento como remoção de íntrons antes de serem traduzidos; em procariontes, a organização e o acoplamento entre processos diferem.\n\nTradução ocorre em ribossomos que leem a sequência de RNA mensageiro em grupos de três nucleotídeos chamados códons. Cada códon especifica um aminoácido ou uma instrução de término, conforme o código genético. O códon AUG costuma funcionar como sinal de início e codifica metionina; UAA, UAG e UGA são códons de parada no código padrão. Esse código é degenerado: aminoácidos diferentes não precisam ter o mesmo número de códons.\n\nAs proteínas são cadeias de aminoácidos cuja sequência influencia dobramento e função, mas nem todo RNA produzido será traduzido: há RNAs com funções regulatórias e estruturais. Também não é correto afirmar que um gene sempre produz exatamente uma proteína simples; processamento, regulação e modificações posteriores podem ampliar diversidade.",
        "example": "Considere o RNA mensageiro 5′-AUG-GCU-UAA-3′. No código genético padrão, AUG codifica metionina e inicia tradução; GCU codifica alanina; UAA sinaliza término. O polipeptídeo exemplificado possui metionina e alanina antes da parada.",
        "pitfall": "Não interprete UAA como aminoácido ou leia códons em fita errada sem indicar orientação. A tradução utiliza RNA mensageiro lido em sentido 5′→3′.",
        "steps": [
          "Diferencie transcrição de tradução por molécula molde e produto.",
          "Divida RNA mensageiro em trincas na orientação apropriada.",
          "Identifique códon de início, aminoácidos e sinal de término."
        ]
      },
      {
        "level": "intermediate",
        "title": "Ribossomos, tRNA e progressão da tradução",
        "explanation": "No ribossomo, RNAs transportadores levam aminoácidos ligados a moléculas específicas e participam do reconhecimento de códons por meio de anticódons. Enzimas responsáveis por carregar tRNAs garantem, de maneira geral, que cada transportador receba o aminoácido apropriado. O ribossomo favorece a formação de ligações peptídicas e avança ao longo do RNA mensageiro, alongando a cadeia.\n\nA tradução é frequentemente descrita em iniciação, elongação e terminação. Na iniciação, componentes do ribossomo reconhecem contexto de início e estabelecem quadro de leitura. Durante elongação, novos aminoácidos são adicionados segundo a sequência de códons. No códon de parada, fatores de liberação participam da terminação; não há tRNA comum que adicione um aminoácido equivalente ao sinal de término.\n\nO quadro de leitura é crucial. Inserir ou retirar um nucleotídeo em região codificadora pode deslocar a leitura a partir da alteração, modificando várias trincas posteriores; alterações de três nucleotídeos podem preservar a divisão em códons, embora ainda causem consequências biológicas. O efeito depende de posição, tipo de mutação e contexto de expressão.",
        "example": "A sequência AUG-GAA-CCU-UAG é lida em trincas: AUG (metionina), GAA (ácido glutâmico), CCU (prolina) e UAG (parada), no código padrão. Se uma base for removida logo após AUG, a divisão das trincas seguintes muda e pode alterar todo o trecho codificado.",
        "pitfall": "Não confunda anticódon do tRNA com códon do mRNA, nem suponha que ribossomos interpretam cada base isoladamente. O quadro de leitura em trincas governa a sequência.",
        "steps": [
          "Localize início e mantenha o mesmo quadro de leitura entre códons.",
          "Descreva o papel de ribossomo, tRNA e formação de ligações peptídicas.",
          "Identifique término e diferencie códons de aminoácidos de códons de parada."
        ]
      },
      {
        "level": "advanced",
        "title": "Mutação silenciosa, missense e nonsense",
        "explanation": "Mutações pontuais em regiões codificadoras podem alterar um códon. Uma substituição sinônima, ou silenciosa em termos da sequência proteica, resulta no mesmo aminoácido porque o código genético é degenerado. Uma substituição missense troca o aminoácido; uma nonsense cria códon de parada prematuro. A consequência para a função de proteína varia conforme posição, estrutura e importância biológica do resíduo.\n\nInserções ou deleções que não sejam múltiplos de três nucleotídeos podem mudar o quadro de leitura, ocasionando alterações em vários códons. Isso é chamado frameshift. Entretanto, nem toda mutação produz doença e nem toda mudança na proteína altera função de modo relevante. Também existem mutações fora de regiões codificadoras, que podem influenciar expressão de genes.\n\nPara interpretar exercícios, compare sequências antes e depois, traduza na direção correta e identifique a mudança específica. Um enunciado que apresenta DNA fita molde exige complementaridade para obter mRNA; um enunciado que apresenta fita codificante utiliza sequência correspondente ao mRNA com T substituído por U. Não é válido assumir automaticamente qual fita foi fornecida.",
        "example": "No código padrão, GAA e GAG codificam ácido glutâmico. A alteração GAA→GAG não muda esse aminoácido na sequência; já GAA→UAA cria um códon de parada. O efeito sobre a proteína depende de onde o códon está e do que ocorre depois.",
        "pitfall": "Não confunda mutação silenciosa no nível proteico com ausência absoluta de efeitos celulares. Alterações podem influenciar estabilidade do RNA ou regulação, dependendo do contexto.",
        "steps": [
          "Identifique a natureza e a orientação da sequência fornecida.",
          "Traduza códons antes e depois da mudança.",
          "Classifique a alteração e explique limites da previsão funcional."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No código genético padrão, qual é o papel de UAA no RNA mensageiro?",
        "options": [
          "Codifica um aminoácido de início.",
          "Codifica metionina.",
          "Sinaliza término da tradução.",
          "É sempre uma sequência exclusiva de DNA."
        ],
        "correctIndex": 2,
        "hint": "Há códons que encerram síntese sem adicionar aminoácido.",
        "solution": "A alternativa C está correta: UAA é um códon de parada no código padrão. AUG é o principal códon de início usual e codifica metionina; UAA não codifica um aminoácido."
      },
      {
        "level": "intermediate",
        "prompt": "O que ocorre em um frameshift causado por deleção de um nucleotídeo numa região codificadora?",
        "options": [
          "Apenas uma ligação peptídica é removida, sem alterar leitura.",
          "Os códons seguintes podem ser reorganizados, mudando vários aminoácidos.",
          "A sequência sempre permanece idêntica por redundância do código.",
          "O ribossomo automaticamente ignora a alteração e recupera a leitura."
        ],
        "correctIndex": 1,
        "hint": "Trincas dependem do alinhamento inicial da leitura.",
        "solution": "A alternativa B está correta: remover uma base altera a divisão em trincas dos nucleotídeos subsequentes, podendo modificar muitos aminoácidos ou introduzir parada prematura. As outras opções garantem invariância injustificada."
      },
      {
        "level": "advanced",
        "prompt": "GAA e GAG codificam o mesmo aminoácido no código padrão. A troca GAA→GAG é:",
        "options": [
          "Mutação necessariamente nonsense.",
          "Sempre um deslocamento de quadro de leitura.",
          "Obrigatoriamente uma nova proteína funcional.",
          "Substituição sinônima na sequência proteica, com possíveis efeitos contextuais."
        ],
        "correctIndex": 3,
        "hint": "Três nucleotídeos continuam presentes, e o aminoácido não muda.",
        "solution": "A alternativa D está correta: a mudança de códon preserva o aminoácido codificado. Não se trata de frameshift ou parada obrigatória, embora contextos celulares específicos possam apresentar outros efeitos."
      }
    ]
  }
];
