import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral Kognos, não oficial, sem homologação docente. */
export const provaoDepthBatch20Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Atmosfera terrestre: composição e características",
    "objective": "Interpretar composição, pressão e estratificação da atmosfera, distinguindo gases majoritários, traços e variações ambientais.",
    "prerequisites": [
      "Misturas gasosas",
      "Pressão e temperatura",
      "Ciclos biogeoquímicos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Composição do ar seco",
        "explanation": "A atmosfera é uma mistura gasosa, não uma substância pura. No ar seco próximo à superfície, o nitrogênio molecular representa aproximadamente 78% em volume, o oxigênio cerca de 21% e o argônio aproximadamente 0,93%; dióxido de carbono e outros gases aparecem em proporções menores e variáveis. O vapor de água é excluído dessas porcentagens de ar seco porque sua quantidade muda bastante com temperatura, umidade e condições meteorológicas. A fração volumétrica de um gás ideal aproxima sua fração molar, de modo que, em 100 mol de ar seco típico, cerca de 78 mol são N₂. Isso não significa que o nitrogênio seja quimicamente inexistente no ciclo da vida: certas bactérias fixam N₂, enquanto plantas absorvem principalmente compostos nitrogenados disponíveis. Oxigênio atmosférico é indispensável à respiração aeróbia de muitos organismos, mas o gás ozônio O₃ possui efeitos diferentes conforme a altitude. Evite confundir quantidade relativa com toxicidade ou contribuição climática.",
        "example": "Em 200 mol de ar seco com 21% molar de O₂, calcule n(O₂)=0,21×200=42 mol. A aproximação supõe mistura homogênea e proporção molar válida; umidade não foi incluída. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Não confunda grandezas, conceitos e representações: explicite a condição de validade.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Pressão parcial e altitude",
        "explanation": "Em uma mistura ideal, a lei de Dalton relaciona a pressão parcial de um gás à sua fração molar: pᵢ=xᵢPtotal. Se a pressão total é 100 kPa e a fração molar de oxigênio é 0,21, a pressão parcial aproximada de O₂ é 21 kPa. Ao subir uma montanha, a composição percentual dos gases majoritários permanece aproximadamente semelhante na troposfera, mas a pressão atmosférica diminui; portanto, a pressão parcial de oxigênio também cai. Isso explica por que respirar em altitude pode ser mais difícil sem que o ar passe a conter necessariamente uma porcentagem muito menor de O₂. A pressão resulta do peso da coluna de ar e de condições dinâmicas; não diminui de forma perfeitamente linear com altitude. A temperatura e a umidade também influenciam densidade e distribuição dos gases. Para aplicar Dalton, é necessário indicar se a pressão é total e se a mistura pode ser aproximada por gases ideais.",
        "example": "A 80 kPa, mantendo x(O₂)=0,21, obtenha p(O₂)=0,21×80=16,8 kPa. Compare com 21 kPa ao nível de 100 kPa: a fração é igual, mas a pressão parcial é menor. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Uma regra não substitui a identificação de dados, mecanismos e exceções do caso.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Camadas, ozônio e efeito estufa",
        "explanation": "A troposfera concentra a maior parte da massa atmosférica e a dinâmica meteorológica; a estratosfera contém uma região com concentração relativamente elevada de ozônio, que absorve parte importante da radiação ultravioleta solar. O ozônio próximo à superfície, em contraste, pode atuar como poluente fotoquímico prejudicial à saúde. Gases de efeito estufa, como vapor de água, CO₂ e CH₄, absorvem e reemitem radiação infravermelha em faixas espectrais específicas; sua relevância climática não é proporcional apenas à abundância volumétrica. Nitrogênio e oxigênio, apesar de majoritários, não são os principais responsáveis pelo efeito estufa terrestre. A camada de ozônio e o efeito estufa são processos físicos diferentes, embora ambos envolvam radiação. A redução de ozônio estratosférico foi associada a substâncias destruidoras de ozônio e demanda políticas específicas; não deve ser tratada como sinônimo do aquecimento global. Uma análise correta compara altitude, espécie química e faixa de radiação.",
        "example": "Ao comparar O₃ estratosférico com O₃ troposférico, identifique a mesma fórmula química, mas contextos e efeitos distintos: proteção contra UV em altitude e poluição oxidante próxima ao solo. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Evite generalizações: considere incertezas, alternativas e limites do modelo.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual gás é mais abundante no ar seco próximo à superfície?",
        "options": [
          "Oxigênio",
          "Dióxido de carbono",
          "Nitrogênio",
          "Argônio"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "N₂ representa aproximadamente 78% do ar seco, enquanto O₂ corresponde a cerca de 21%. CO₂ é minoritário e argônio fica próximo de 0,93%. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "intermediate",
        "prompt": "Com pressão total de 80 kPa e fração molar de O₂ igual a 0,21, sua pressão parcial ideal é:",
        "options": [
          "16,8 kPa",
          "80 kPa",
          "38,1 kPa",
          "0,21 kPa"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "Pela lei de Dalton, p(O₂)=x(O₂)×P=0,21×80=16,8 kPa. O resultado exige fração molar e pressão total compatíveis. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação distingue corretamente ozônio e efeito estufa?",
        "options": [
          "O ozônio troposférico é sempre benéfico",
          "O efeito estufa depende apenas do N₂",
          "A camada de ozônio é sinônimo de aquecimento global",
          "Ozônio estratosférico absorve UV, enquanto gases-estufa interagem com infravermelho"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "O₃ estratosférico absorve radiação ultravioleta; gases-estufa absorvem e reemitem infravermelho. São mecanismos diferentes e não devem ser confundidos. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Interações da água com outras substâncias",
    "objective": "Explicar solvatação, ligações de hidrogênio, polaridade e limites da dissolução de substâncias na água.",
    "prerequisites": [
      "Geometria molecular",
      "Polaridade",
      "Ligações químicas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Polaridade e solvatação",
        "explanation": "A molécula de água apresenta geometria angular e distribuição desigual de cargas, com dipolo elétrico permanente. O oxigênio, mais eletronegativo, atrai maior densidade eletrônica, tornando a região próxima a ele parcialmente negativa e as regiões dos hidrogênios parcialmente positivas. Na dissolução de NaCl, moléculas de água orientam suas regiões parcialmente negativas em direção a Na⁺ e as parcialmente positivas em direção a Cl⁻. Esse arranjo forma camadas de hidratação e estabiliza íons dispersos, mas não implica que a ligação covalente O–H seja quebrada. A dissolução depende do balanço energético e entrópico entre romper interações do soluto, reorganizar água e formar novas interações. Por isso, nem todo sal se dissolve facilmente, apesar da polaridade da água. A expressão popular “semelhante dissolve semelhante” é um guia qualitativo, não lei absoluta. Solubilidade deve ser verificada em temperatura e pressão especificadas.",
        "example": "Ao adicionar NaCl à água, represente Na⁺ rodeado por oxigênios da água e Cl⁻ rodeado por hidrogênios. Identifique interação íon–dipolo e não formação de novas moléculas de NaCl(aq). Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Não confunda grandezas, conceitos e representações: explicite a condição de validade.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Ligações de hidrogênio e miscibilidade",
        "explanation": "Moléculas de água estabelecem extensa rede dinâmica de ligações de hidrogênio, interações intermoleculares associadas a H ligado a O, N ou F e pares de elétrons disponíveis em moléculas vizinhas. Etanol possui grupo –OH capaz de interagir por ligações de hidrogênio com a água, o que favorece sua miscibilidade em ampla faixa de composição. Óleos são compostos majoritariamente por regiões apolares; misturá-los à água exige reorganização desfavorável de interações e, em geral, gera fases separadas. O fato de uma molécula possuir uma pequena parte polar não garante solubilidade ilimitada: cadeias carbônicas longas podem dominar o comportamento. Detergentes possuem regiões hidrofílicas e hidrofóbicas; em concentrações apropriadas formam micelas que ajudam a dispersar materiais oleosos. Uma emulsão não é necessariamente uma solução molecular homogênea e pode requerer estabilização. Compare sempre estrutura do soluto, temperatura e concentração.",
        "example": "Etanol e água se misturam devido às interações entre grupos –OH e H₂O. Já óleo vegetal forma fase separada; um surfactante pode criar dispersão em micelas, sem transformar o óleo em íons. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Uma regra não substitui a identificação de dados, mecanismos e exceções do caso.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Dissolução, temperatura e limites",
        "explanation": "Dissolver uma substância não equivale automaticamente a reagir quimicamente com ela. Sacarose pode se dispersar em moléculas hidratadas sem se converter em íons; ácido clorídrico em água, por outro lado, apresenta ionização e formação de espécies hidratadas. Gases como CO₂ têm solubilidade que depende de pressão parcial e temperatura; para muitos gases, o aumento de temperatura diminui a solubilidade, embora existam exceções e equilíbrios químicos acoplados. Em bebidas carbonatadas, abrir a garrafa reduz a pressão parcial de CO₂ acima do líquido, favorecendo sua saída na forma de bolhas. Sais sólidos podem ter respostas distintas à temperatura, de modo que não se deve afirmar que todo soluto fica mais solúvel ao aquecer. A água também pode participar de hidrólise ou reações ácido-base; o contexto determina se ela atua apenas como solvente ou reagente. Uma análise quantitativa deve diferenciar concentração, solubilidade de equilíbrio e velocidade de dissolução.",
        "example": "Uma garrafa fechada contém CO₂ dissolvido sob alta pressão parcial. Ao abrir, a pressão cai e parte do gás escapa; a mudança de equilíbrio explica bolhas, sem exigir aquecimento do líquido. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Evite generalizações: considere incertezas, alternativas e limites do modelo.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual orientação de moléculas de água ao redor de Na⁺ é esperada?",
        "options": [
          "Hidrogênios apontam para o cátion",
          "Oxigênios apontam para o cátion",
          "Água perde todo dipolo",
          "Água forma ligação metálica"
        ],
        "correctIndex": 1,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "A região do oxigênio tem carga parcial negativa e se orienta em direção ao cátion Na⁺. Trata-se de interação íon–dipolo. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "intermediate",
        "prompt": "Por que etanol é miscível com água?",
        "options": [
          "Porque é sal iônico",
          "Porque não possui carbono",
          "Porque seu grupo –OH estabelece ligações de hidrogênio com água",
          "Porque toda molécula orgânica é miscível"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "O grupo hidroxila permite interações de hidrogênio entre etanol e água. A miscibilidade depende do conjunto da estrutura, não de toda substância orgânica ser solúvel. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "advanced",
        "prompt": "Ao abrir uma bebida gaseificada, o CO₂ tende a escapar porque:",
        "options": [
          "Sua pressão parcial de equilíbrio acima do líquido diminui",
          "A água vira óleo",
          "O gás se transforma em oxigênio",
          "A solubilidade aumenta infinitamente"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "A queda de pressão parcial de CO₂ desloca o equilíbrio de dissolução, favorecendo saída do gás. O fenômeno não converte CO₂ em O₂. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Sistemas geocêntrico e heliocêntrico. Leis de Kepler",
    "objective": "Relacionar modelos históricos de movimento planetário às leis empíricas de Kepler, com cálculo de períodos e limites de referenciais.",
    "prerequisites": [
      "Movimento circular",
      "Razões e potências",
      "Gravitação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Modelos históricos e observação",
        "explanation": "Modelos geocêntricos colocavam a Terra como referência central para descrever movimentos aparentes dos astros; o sistema ptolomaico utilizava deferentes e epiciclos para ajustar posições observadas, incluindo movimentos retrógrados aparentes. O heliocentrismo de Copérnico reorganizou a descrição colocando o Sol próximo ao centro dos movimentos planetários, mas inicialmente também preservou hipóteses de movimentos circulares. É inadequado dizer que um modelo histórico foi abandonado apenas por ser visualmente mais complicado: previsões observacionais, instrumentos e argumentos físicos foram decisivos ao longo do tempo. Observações de fases de Vênus e satélites de Júpiter por Galileu enfraqueceram certas interpretações geocêntricas tradicionais, embora não provassem isoladamente todos os detalhes do modelo copernicano. Tycho Brahe reuniu medidas de alta precisão que Kepler usou para formular leis de órbitas elípticas. Referenciais geocêntricos continuam úteis em cálculos locais, sem implicar que a Terra esteja imóvel no Universo.",
        "example": "No movimento retrógrado aparente de Marte, compare posições relativas de Terra e Marte em suas órbitas. A Terra ultrapassa Marte em certos intervalos, alterando a direção aparente do planeta no céu. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Não confunda grandezas, conceitos e representações: explicite a condição de validade.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Primeira e segunda leis de Kepler",
        "explanation": "A primeira lei de Kepler afirma que planetas descrevem aproximadamente órbitas elípticas com o Sol em um dos focos, não no centro geométrico de cada elipse. Em uma órbita elíptica, a distância ao Sol varia entre periélio e afélio. A segunda lei diz que a linha que une planeta e Sol varre áreas iguais em intervalos de tempo iguais. Isso implica maior velocidade orbital perto do periélio e menor perto do afélio; não significa que o planeta percorra comprimentos iguais de trajetória em tempos iguais. Para uma órbita circular ideal, a velocidade pode ter módulo constante e as duas leis continuam compatíveis como caso particular de excentricidade zero. As leis descrevem aproximações de sistemas dominados pela gravitação solar; perturbações por outros corpos produzem desvios mensuráveis. A noção de área varrida liga-se à conservação do momento angular no problema de força central, oferecendo explicação dinâmica posterior à descrição empírica de Kepler.",
        "example": "Um planeta varre área de 2 unidades em 10 dias perto do periélio. Pela segunda lei, em outros 10 dias varre também 2 unidades de área, embora percorra comprimentos de arco diferentes. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Uma regra não substitui a identificação de dados, mecanismos e exceções do caso.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Terceira lei e alcance da relação",
        "explanation": "Para corpos que orbitam aproximadamente o mesmo centro gravitacional dominante, a terceira lei de Kepler estabelece T² proporcional a a³, em que T é período orbital e a é semieixo maior. Comparando duas órbitas em torno do Sol, T₂/T₁=(a₂/a₁)^(3/2). Se um planeta tem semieixo maior quatro vezes o terrestre, seu período ideal é 4^(3/2)=8 anos terrestres. A expressão não autoriza comparar diretamente satélites em torno de planetas de massas muito diferentes sem ajustar a constante gravitacional. Pela dinâmica newtoniana, T²=4π²a³/[G(M+m)] no problema ideal de dois corpos, aproximadamente 4π²a³/(GM) quando a massa central domina. A terceira lei não determina por si só a excentricidade da órbita. Para cálculos de vestibular, confira unidades, mesmo corpo central e hipótese de perturbações desprezíveis antes de aplicar a razão.",
        "example": "Se a órbita B tem a=9 unidades e a órbita A tem a=1 em torno do mesmo Sol, T_B/T_A=9^(3/2)=27. Não use a razão de raios de corpos centrais diferentes. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Evite generalizações: considere incertezas, alternativas e limites do modelo.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual observação ajudou a questionar modelos geocêntricos tradicionais?",
        "options": [
          "Fases de Vênus e satélites de Júpiter",
          "Existência de montanhas terrestres",
          "Mudança das estações somente",
          "Movimento das marés apenas"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "Fases de Vênus e luas de Júpiter mostraram configurações incompatíveis com certas interpretações tradicionais, mas não demonstraram isoladamente todos os detalhes do heliocentrismo. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "intermediate",
        "prompt": "Segundo Kepler, em tempos iguais um planeta varre:",
        "options": [
          "Arcos de mesmo comprimento sempre",
          "Áreas iguais em torno do foco solar",
          "Ângulos centrais iguais sempre",
          "Distâncias iguais ao Sol"
        ],
        "correctIndex": 1,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "A segunda lei refere-se à área varrida pela linha planeta–Sol, não ao comprimento de arco. A velocidade orbital aumenta perto do periélio. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "advanced",
        "prompt": "Para órbitas em torno do mesmo Sol, se a₂=4a₁, então T₂/T₁ é:",
        "options": [
          "2",
          "4",
          "16",
          "8"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "Pela terceira lei, (T₂/T₁)²=(a₂/a₁)³=4³=64; portanto T₂/T₁=8. A relação exige o mesmo centro gravitacional dominante. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Evidências da evolução biológica",
    "objective": "Interpretar evidências fósseis, anatômicas, moleculares e biogeográficas, distinguindo ancestralidade comum e convergência.",
    "prerequisites": [
      "Hereditariedade",
      "Seleção natural",
      "Tempo geológico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Fósseis e sucessão temporal",
        "explanation": "Fósseis são restos, marcas ou vestígios preservados de organismos do passado. A distribuição estratigráfica de fósseis, combinada com datações relativas e radiométricas adequadas, permite reconstruir sucessões de formas de vida e ambientes antigos. Em condições geológicas não perturbadas, camadas inferiores tendem a ser mais antigas, mas dobramentos, falhas e retrabalhamento podem alterar a sequência aparente. A datação radiométrica mede transformações isotópicas em materiais apropriados e exige conhecer sistema, meia-vida e condições de fechamento; nem todo fóssil é datado diretamente. Séries de fósseis podem revelar mudanças morfológicas e combinações de características, como em linhagens de vertebrados, mas o registro é incompleto e depende de condições de fossilização. A ausência de fóssil em uma camada não prova ausência absoluta da espécie naquela época. Uma inferência evolutiva robusta confronta fósseis com anatomia, genética e contexto geológico.",
        "example": "Em duas camadas não perturbadas, a camada inferior contém um fóssil e a superior outro. Infira ordem relativa de deposição, mas não atribua idade numérica sem método de datação apropriado. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Não confunda grandezas, conceitos e representações: explicite a condição de validade.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Homologia, analogia e ancestralidade",
        "explanation": "Estruturas homólogas compartilham origem evolutiva, ainda que possam desempenhar funções diferentes; os membros anteriores de humanos, morcegos e baleias possuem correspondências ósseas que sustentam ancestralidade comum. Estruturas análogas realizam funções semelhantes, mas surgem por trajetórias evolutivas distintas; asas de insetos e asas de aves ilustram convergência funcional. Uma estrutura pode ser homóloga em determinado nível de organização e apresentar adaptações específicas em outro, portanto a classificação exige delimitar a comparação. Órgãos vestigiais são estruturas reduzidas ou modificadas em relação a funções ancestrais; não precisam ser totalmente inúteis. A embriologia comparada revela padrões compartilhados de desenvolvimento, mas não significa que cada embrião repita literalmente estágios adultos dos ancestrais. A evolução não é uma escada rumo à perfeição, e organismos atuais não descendem uns dos outros necessariamente: podem compartilhar ancestrais extintos.",
        "example": "Compare braço humano e nadadeira de baleia: identifique úmero, rádio e ulna em arranjos modificados. A correspondência estrutural sugere homologia, embora as funções de manipulação e natação sejam diferentes. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Uma regra não substitui a identificação de dados, mecanismos e exceções do caso.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: DNA, filogenia e biogeografia",
        "explanation": "Sequências de DNA e proteínas fornecem caracteres independentes para comparar linhagens. Em geral, semelhanças moleculares herdadas de ancestral comum podem sustentar parentesco, mas taxas de mutação variam e convergência, seleção e transferência horizontal de genes podem complicar análises. Árvores filogenéticas são hipóteses testáveis construídas com dados e métodos explícitos, não escalas de valor ou progresso. A distribuição geográfica também fornece evidências: espécies insulares frequentemente se relacionam a linhagens de regiões próximas, com divergências associadas a isolamento, dispersão e seleção. A deriva continental ajuda a explicar padrões de grupos antigos em continentes hoje separados. Uma semelhança superficial isolada não basta para afirmar parentesco próximo; é necessário considerar múltiplos caracteres e ancestralidade dos estados observados. A evolução biológica descreve mudanças hereditárias em populações ao longo de gerações e não depende de indivíduos adquirirem características por vontade.",
        "example": "Duas espécies insulares compartilham variantes de DNA com uma linhagem continental próxima. Compare sequências e distribuição geográfica para propor ancestralidade comum e colonização; avalie alternativas antes de declarar parentesco certo. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Evite generalizações: considere incertezas, alternativas e limites do modelo.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que a posição de fósseis em camadas não perturbadas permite inferir diretamente?",
        "options": [
          "Idade absoluta em anos",
          "Ordem relativa de deposição",
          "Identidade genética completa",
          "Taxa exata de mutação"
        ],
        "correctIndex": 1,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "A superposição geológica permite inferir idade relativa em sequência não perturbada. Idade absoluta requer métodos de datação adequados. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "intermediate",
        "prompt": "Membro anterior humano e nadadeira de baleia são exemplo de:",
        "options": [
          "Estruturas homólogas",
          "Estruturas sem qualquer origem comum",
          "Asas análogas de insetos",
          "Mutação somática"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "Correspondências ósseas revelam origem evolutiva compartilhada apesar de funções distintas. Isso caracteriza homologia, não mera analogia funcional. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "advanced",
        "prompt": "Qual abordagem fortalece hipótese de parentesco evolutivo?",
        "options": [
          "Somente semelhança de cor",
          "Ordenar espécies por complexidade",
          "Confrontar sequências moleculares, anatomia e distribuição geográfica",
          "Ignorar dados contraditórios"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "Evidências independentes permitem testar hipóteses de ancestralidade comum. Cor isolada e escala de complexidade não demonstram parentesco, e dados contraditórios devem ser examinados. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Aspectos políticos e socioculturais do Antigo Regime",
    "objective": "Examinar hierarquias estamentais, monarquias, privilégios e práticas culturais do Antigo Regime, distinguindo norma e experiência social.",
    "prerequisites": [
      "Monarquias modernas",
      "Mercantilismo",
      "Estratificação social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Ordens, privilégios e hierarquias",
        "explanation": "A expressão Antigo Regime designa características políticas e sociais de diversas monarquias europeias antes das transformações revolucionárias dos séculos XVIII e XIX, especialmente na França. A sociedade francesa era frequentemente descrita em três ordens ou estados: clero, nobreza e terceiro estado. Essa classificação jurídica não significava homogeneidade econômica: o terceiro estado incluía camponeses, trabalhadores urbanos e burgueses de diferentes rendas; também existiam desigualdades dentro do clero e da nobreza. Privilégios fiscais, acesso a cargos e direitos senhoriais variavam por região e instituição. O poder monárquico dependia de arrecadação, redes de patronagem, oficiais e negociação com grupos influentes, não de uma capacidade ilimitada de governar sem intermediários. Comparar ordens jurídicas e posições econômicas ajuda a entender por que riqueza e privilégio não coincidiam sempre. O conceito não deve ser aplicado mecanicamente a todos os países e séculos.",
        "example": "Um comerciante rico do terceiro estado podia pagar certos tributos dos quais um nobre menos rico era isento. Compare riqueza econômica e privilégio jurídico para explicar a desigualdade estamental. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Não confunda grandezas, conceitos e representações: explicite a condição de validade.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Corte, religião e representação",
        "explanation": "A corte funcionava como espaço de sociabilidade, disputa de prestígio e acesso ao soberano. Em Versalhes, cerimônias e etiqueta contribuíam para organizar relações entre o rei e elites nobiliárquicas; esses rituais não eliminavam interesses locais nem conflitos políticos. Igrejas e autoridades religiosas influenciavam educação, assistência e legitimação do poder, mas havia divergências confessionais, tensões com monarquias e diferenças regionais. Artes, arquitetura e festas públicas podiam representar hierarquia e autoridade, ao mesmo tempo que grupos populares desenvolviam práticas culturais próprias. Fontes visuais de corte devem ser lidas como representações interessadas, não fotografias neutras de toda a sociedade. O luxo da nobreza não descreve a experiência material da maioria camponesa, que variava segundo colheitas, obrigações e acesso à terra. A cultura política do Antigo Regime combinava tradição, negociação, resistência e mudanças graduais.",
        "example": "Em retrato régio com coroa, manto e cetro, identifique símbolos de legitimidade. Depois compare com registros de impostos e protestos para avaliar limites concretos da autoridade representada. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Uma regra não substitui a identificação de dados, mecanismos e exceções do caso.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Crises fiscais e transformações",
        "explanation": "Guerras, endividamento estatal, desigualdade tributária e dificuldades de abastecimento contribuíram para tensões em monarquias do século XVIII, embora as causas variassem entre países. Na França, o peso fiscal distribuído de forma desigual e a convocação dos Estados Gerais em 1789 expuseram conflitos sobre representação e soberania. A Revolução Francesa questionou privilégios jurídicos e abriu processos de transformação, mas mudanças políticas não eliminaram imediatamente desigualdades econômicas, violência ou exclusões. Ideias iluministas ofereceram linguagens de crítica à autoridade e aos privilégios, sem que todos os pensadores defendessem projetos idênticos. A análise histórica deve distinguir fatores estruturais, eventos desencadeadores e decisões de agentes, evitando explicar revoluções por uma causa única. Também é inadequado presumir que toda monarquia europeia caiu ao mesmo tempo ou seguiu o modelo francês. Uma comparação rigorosa observa instituições, fiscalidade e participação social em cada caso.",
        "example": "Em 1789, a reunião dos Estados Gerais evidenciou disputa sobre votação por ordem ou por cabeça. Explique como regras de representação poderiam preservar ou contestar privilégios sem reduzir o conflito apenas à falta de alimentos. Confira as hipóteses e identifique a evidência ou relação que autoriza a conclusão, sem extrapolar para contextos distintos.",
        "pitfall": "Evite generalizações: considere incertezas, alternativas e limites do modelo.",
        "steps": [
          "Identifique a situação, os dados e a questão central.",
          "Aplique as relações e explique cada inferência.",
          "Confira hipóteses, resultados e limites do raciocínio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na França do Antigo Regime, o terceiro estado incluía:",
        "options": [
          "Somente nobres",
          "Somente membros do clero",
          "Camponeses, trabalhadores e burgueses",
          "Apenas militares"
        ],
        "correctIndex": 2,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "O terceiro estado reunia grupos social e economicamente diversos fora das ordens privilegiadas de clero e nobreza. Não era uma classe econômica homogênea. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "intermediate",
        "prompt": "Uma função política de cerimônias em Versalhes era:",
        "options": [
          "Organizar prestígio e relações de acesso à monarquia",
          "Abolir privilégios fiscais",
          "Garantir voto universal",
          "Eliminar conflitos regionais"
        ],
        "correctIndex": 0,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "A etiqueta de corte estruturava prestígio e relações de patronagem, mas não eliminava interesses locais nem instituía democracia universal. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      },
      {
        "level": "advanced",
        "prompt": "Qual fator contribuiu para tensões na França de 1789?",
        "options": [
          "Distribuição fiscal igualitária já consolidada",
          "Ausência de dívida estatal",
          "Fim de qualquer privilégio nobre",
          "Endividamento e desigualdades tributárias"
        ],
        "correctIndex": 3,
        "hint": "Identifique os conceitos pertinentes e compare os distratores com as condições dadas.",
        "solution": "Crises fiscais, dívida e distribuição desigual de obrigações alimentaram conflitos políticos. Os privilégios ainda eram contestados, não previamente abolidos. Os demais itens não atendem à definição, aos dados ou à relação causal descrita, e por isso não resolvem corretamente a situação proposta."
      }
    ]
  }
];
