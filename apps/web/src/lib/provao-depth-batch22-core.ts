import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material original Kognos, não oficial, sem homologação docente. */
export const provaoDepthBatch22Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Gases do efeito estufa",
    "objective": "Explicar absorção infravermelha, forçamento radiativo e distinção entre efeito estufa natural e intensificação antrópica com interpretações quantitativas.",
    "prerequisites": [
      "Espectro eletromagnético",
      "Estrutura molecular",
      "Balanço de energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Radiação e moléculas",
        "explanation": "A superfície terrestre recebe principalmente radiação solar de onda curta e emite energia predominantemente no infravermelho térmico. Certas moléculas atmosféricas, como CO₂, CH₄ e vapor de água, possuem modos vibracionais que interagem com faixas do infravermelho, absorvendo e reemitindo radiação em diferentes direções. O mecanismo não é simplesmente uma tampa que impede toda saída de calor: a atmosfera continua emitindo energia para o espaço, e o equilíbrio depende da altitude e da temperatura de emissão. N₂ e O₂, apesar de majoritários, absorvem pouco nas principais bandas infravermelhas porque suas vibrações homonucleares não geram a variação de momento dipolar exigida para a absorção vibracional elétrica dominante. O efeito estufa natural torna a superfície mais quente do que seria sem esses gases. Aumentar concentrações altera o balanço radiativo e induz aquecimento até novo equilíbrio, com respostas de nuvens, gelo e vapor. O papel climático de um gás não se mede apenas pela fração volumétrica que ocupa.",
        "example": "Considere 100 mol de ar seco com cerca de 0,04 mol de CO₂, enquanto há aproximadamente 78 mol de N₂. A menor abundância não implica efeito radiativo nulo: compare propriedades espectroscópicas, não apenas quantidade. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Evite confundir definição operacional com generalização sem evidências: observe o contexto e as exceções.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Concentração e emissões",
        "explanation": "Concentração em partes por milhão em volume pode ser aproximada pela fração molar multiplicada por 10⁶ para misturas gasosas ideais. Assim, 420 ppm de CO₂ correspondem a 420 moléculas por milhão de moléculas de ar seco em média, ou fração molar 0,000420. Essa unidade não informa diretamente a massa total emitida nem a temperatura global: a concentração resulta de emissões, remoções e circulação do carbono. CO₂ pode permanecer influenciando o sistema climático por longos períodos porque parte de sua perturbação é removida lentamente; metano tem vida atmosférica média menor, mas absorção e efeitos indiretos relevantes. Vapor de água atua sobretudo como retroalimentação climática: ar aquecido pode sustentar mais vapor, ampliando o aquecimento inicial. É erro interpretar a expressão potencial de aquecimento global como uma propriedade fixa independente do horizonte temporal; métricas dependem de período e método. A comparação de fontes emissoras precisa distinguir massa, espécie química e tempo considerado.",
        "example": "Para converter 420 ppm em porcentagem volumétrica, divida por 10.000: 420 ppm = 0,042%. A transformação é de unidade, não previsão direta de aumento de temperatura. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Antes de aplicar uma fórmula ou comparar fontes, confirme variáveis controladas e condições de validade.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Balanço radiativo e limites",
        "explanation": "No balanço energético planetário, a radiação solar absorvida deve, em média de longo prazo, igualar a energia infravermelha emitida para o espaço quando o sistema está em equilíbrio. Se um aumento de gases de efeito estufa reduz inicialmente a emissão para o espaço à temperatura anterior, surge desequilíbrio energético positivo. A superfície e a troposfera aquecem até que a emissão e os processos de retroalimentação reequilibrem os fluxos. O forçamento radiativo é expresso em W/m², potência por área, não em graus Celsius; a resposta térmica depende da sensibilidade climática e da dinâmica dos oceanos. O aquecimento não é uniforme em todos os lugares ou estações, e variações meteorológicas de curto prazo não invalidam tendências climáticas de décadas. Também não se deve confundir efeito estufa com destruição da camada de ozônio, embora ambos envolvam química atmosférica. Modelos incluem absorção espectral, nuvens, aerossóis, oceanos e superfícies, e suas projeções carregam intervalos de incerteza explícitos.",
        "example": "Se o sistema absorve em média 240 W/m² e emite 238 W/m², a diferença é +2 W/m². Há ganho líquido de energia até que fluxos e temperaturas se ajustem; o valor não significa aumento imediato de 2 °C. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Não confunda associação com causalidade nem extrapole modelos além das condições de análise.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que CO₂ pode influenciar o infravermelho apesar de menos abundante que N₂?",
        "options": [
          "Porque todas as moléculas absorvem igualmente",
          "Porque apresenta modos vibracionais ativos no infravermelho",
          "Porque bloqueia toda a luz visível",
          "Porque não participa do ciclo do carbono"
        ],
        "correctIndex": 1,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "O CO₂ possui vibrações que interagem com radiação infravermelha; a abundância relativa não substitui a análise espectroscópica. N₂ homonuclear tem absorção vibracional elétrica dominante muito menor. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "intermediate",
        "prompt": "420 ppm de CO₂ equivalem aproximadamente a:",
        "options": [
          "42%",
          "4,2%",
          "0,042%",
          "0,000042%"
        ],
        "correctIndex": 2,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "Um por cento equivale a 10.000 ppm. Dividindo 420 por 10.000, obtém-se 0,042%. A conversão não permite inferir isoladamente a temperatura global. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "advanced",
        "prompt": "Se o planeta absorve 240 W/m² e emite 238 W/m², inicialmente:",
        "options": [
          "Perde 2 W/m²",
          "Está em equilíbrio exato",
          "Esfria 2 °C por segundo",
          "Acumula energia líquida a 2 W/m²"
        ],
        "correctIndex": 3,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "O fluxo líquido é 240−238=+2 W/m². A unidade representa potência por área, não temperatura. O desequilíbrio pode alterar a energia armazenada e a temperatura até novo equilíbrio. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "O modelo do gás ideal",
    "objective": "Aplicar pV=nRT em condições apropriadas, distinguir temperatura absoluta, pressão e limitações de gases reais, resolvendo transformações quantitativas.",
    "prerequisites": [
      "Mol e massa molar",
      "Pressão e volume",
      "Temperatura Kelvin"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Hipóteses do gás ideal",
        "explanation": "O gás ideal é um modelo no qual partículas são tratadas como pontuais, sem volume próprio significativo e sem forças intermoleculares persistentes, exceto colisões idealizadas. As colisões são elásticas e a pressão macroscópica decorre da transferência de quantidade de movimento das partículas às paredes. O modelo aproxima melhor gases pouco densos e suficientemente afastados de condições de condensação; não é descrição exata de qualquer gás em qualquer pressão. Temperatura termodinâmica, em kelvin, relaciona-se à energia cinética translacional média das partículas de um gás ideal. Para gás monoatômico clássico, a energia cinética média por partícula é 3kBT/2. A equação de estado pV=nRT conecta pressão, volume, quantidade de matéria e temperatura absoluta. Usar temperatura em Celsius diretamente na equação gera erro, pois zero Celsius não corresponde a ausência de energia térmica. Também é necessário compatibilizar unidades de pressão, volume e a constante R.",
        "example": "Um gás com n=1 mol, T=300 K e V=0,0249 m³, usando R=8,31 J/(mol·K), apresenta p=nRT/V≈100.120 Pa, aproximadamente 1,0×10⁵ Pa. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Evite confundir definição operacional com generalização sem evidências: observe o contexto e as exceções.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Transformações e proporções",
        "explanation": "Com quantidade de matéria constante, pV/T permanece constante para um gás ideal. Em transformação isotérmica, T é constante e pressão é inversamente proporcional ao volume: comprimir de 4 L para 2 L dobra a pressão, se o modelo continuar válido. Em transformação isobárica, V/T é constante; em transformação isovolumétrica, p/T é constante. A relação deve usar kelvin e pressão absoluta, não pressão manométrica sem correção. Um recipiente rígido e fechado aquecido de 300 K a 450 K terá pressão multiplicada por 1,5 no modelo ideal, mas isso pressupõe ausência de vazamentos e quantidade de gás constante. A Lei de Avogadro descreve que volumes iguais de gases ideais sob mesma pressão e temperatura contêm quantidades iguais de matéria. Transformações rápidas podem não ser isotérmicas porque a troca de calor com o ambiente pode ser insuficiente. Antes de aplicar proporções, identifique qual grandeza permanece constante e qual muda.",
        "example": "Em recipiente rígido, p₁=100 kPa, T₁=300 K, T₂=450 K. Pela relação p₂=p₁T₂/T₁, p₂=100×450/300=150 kPa. Volume e quantidade de matéria devem permanecer constantes. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Antes de aplicar uma fórmula ou comparar fontes, confirme variáveis controladas e condições de validade.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Desvios e interpretação molecular",
        "explanation": "Gases reais se desviam da equação ideal porque moléculas ocupam volume e exercem forças de atração e repulsão. Em pressão elevada, o volume molecular deixa de ser desprezível; perto da liquefação, atrações intermoleculares podem influenciar significativamente a pressão. Uma forma de expressar desvio é o fator de compressibilidade Z=pV/(nRT), igual a 1 para gás ideal. Z diferente de 1 não implica que o experimento esteja errado; pode indicar limitações do modelo. A equação de van der Waals introduz correções para volume excluído e atrações, mas também é aproximação. A expansão livre de gás ideal em sistema isolado não altera sua energia interna; já para gases reais, interações podem modificar a temperatura. O modelo microscópico permite explicar qualitativamente pressão e temperatura, mas não substitui avaliação experimental da composição, faixa de pressão e proximidade da mudança de fase. Compare previsão e observação antes de extrapolar.",
        "example": "Se pV=2490 J e nRT=2493 J, Z=2490/2493≈0,999, muito próximo de 1. Em outra condição Z=0,85, o comportamento apresenta desvio relevante da idealidade. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Não confunda associação com causalidade nem extrapole modelos além das condições de análise.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual temperatura deve ser usada em pV=nRT?",
        "options": [
          "Celsius diretamente",
          "Kelvin",
          "Fahrenheit diretamente",
          "Qualquer escala sem conversão"
        ],
        "correctIndex": 1,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A equação de estado utiliza temperatura absoluta em kelvin. Celsius não pode ser inserido sem conversão porque o zero da escala não é o zero termodinâmico. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "intermediate",
        "prompt": "Em volume constante, um gás ideal passa de 300 K para 600 K. A pressão:",
        "options": [
          "Cai pela metade",
          "Permanece igual",
          "Dobra",
          "Quadruplica"
        ],
        "correctIndex": 2,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "Com V e n constantes, p/T é constante. Portanto p₂/p₁=T₂/T₁=600/300=2. A temperatura deve ser absoluta. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "advanced",
        "prompt": "Para um gás ideal, Z=pV/(nRT) vale:",
        "options": [
          "0",
          "−1",
          "Depende sempre da massa molar",
          "1"
        ],
        "correctIndex": 3,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A própria equação de estado ideal é pV=nRT; dividindo ambos os lados por nRT obtém-se Z=1. Desvios experimentais podem indicar comportamento real não ideal. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Poluição ambiental e os impactos da intervenção humana:",
    "objective": "Relacionar poluentes atmosféricos, aquáticos e do solo a mecanismos ecológicos e indicadores mensuráveis, distinguindo fontes, efeitos e mitigação.",
    "prerequisites": [
      "Cadeias alimentares",
      "Ciclos biogeoquímicos",
      "Ecossistemas aquáticos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Fontes e vias de exposição",
        "explanation": "Poluição ambiental ocorre quando substâncias, energia ou agentes introduzidos no ambiente alteram condições e causam impactos sobre organismos ou processos ecológicos. No ar, material particulado fino pode penetrar no sistema respiratório; óxidos de nitrogênio e compostos orgânicos voláteis participam de reações fotoquímicas que formam ozônio troposférico. O ozônio próximo ao solo é poluente, diferentemente do papel protetor do ozônio estratosférico contra parte da radiação ultravioleta. Na água, efluentes orgânicos elevam a demanda bioquímica de oxigênio (DBO) porque microrganismos consomem oxigênio ao degradar matéria orgânica. No solo, metais persistentes podem se acumular e contaminar cadeias alimentares. Ruído e luz artificial também podem alterar comportamento animal sem adicionar uma substância química. É essencial distinguir fonte, transporte, concentração, dose e resposta biológica. Uma mesma substância pode produzir riscos distintos conforme forma química, tempo de exposição e organismo considerado.",
        "example": "Um rio recebe esgoto orgânico: bactérias aeróbias degradam matéria orgânica e consomem oxigênio dissolvido. A previsão é queda de oxigênio em trechos afetados, não aumento automático de oxigênio por haver mais alimento. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Evite confundir definição operacional com generalização sem evidências: observe o contexto e as exceções.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Eutrofização e bioacumulação",
        "explanation": "Excesso de nitrogênio e fósforo em corpos d'água pode favorecer crescimento de algas e cianobactérias, processo associado à eutrofização. A proliferação pode reduzir a penetração de luz e, após a morte de biomassa, a decomposição consome oxigênio, provocando hipóxia e mortalidade de organismos aquáticos. Nem toda floração implica toxinas, mas algumas cianobactérias produzem compostos nocivos. Bioacumulação descreve aumento de concentração de um contaminante em um organismo ao longo do tempo; biomagnificação descreve aumento de concentração em níveis tróficos sucessivos para substâncias persistentes e pouco eliminadas. Não se deve afirmar que todo poluente biomagnifica: a tendência depende de persistência, absorção, metabolismo e excreção. Indicadores como oxigênio dissolvido, turbidez, nutrientes e composição de espécies fornecem evidências complementares. Uma única medição isolada não caracteriza todo um ecossistema; a interpretação exige comparação temporal e espacial, além de controle de sazonalidade.",
        "example": "Em um lago, nutrientes sobem após lançamento de fertilizantes. Observam-se algas abundantes e oxigênio noturno baixo. A sequência plausível envolve crescimento de biomassa e respiração/decomposição, mas exige medições para confirmar a causa. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Antes de aplicar uma fórmula ou comparar fontes, confirme variáveis controladas e condições de validade.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Avaliação de impacto e soluções",
        "explanation": "Intervenções ambientais devem ser avaliadas por evidências de redução de fonte e exposição, não apenas por aparência visual de limpeza. Tratamento de esgoto com remoção de matéria orgânica e nutrientes pode reduzir DBO e eutrofização; controle de emissões industriais e veiculares reduz determinados precursores de poluição atmosférica. A recuperação de mata ciliar pode diminuir erosão e entrada de sedimentos, mas não substitui saneamento básico. Monitoramento requer indicadores com unidades, locais de amostragem e periodicidade: oxigênio dissolvido pode ser expresso em mg/L e comparado sob condições ambientais semelhantes. A escolha de intervenção também considera custos, efeitos secundários, justiça ambiental e grupos mais expostos. Correlação entre uma indústria e piora de qualidade da água não prova isoladamente a fonte; é necessário avaliar montante, jusante, outras descargas e histórico. Redução na concentração de um poluente não garante recuperação imediata da biodiversidade, pois habitats e comunidades podem responder lentamente. Projetos sérios registram incertezas e indicadores de acompanhamento.",
        "example": "Um trecho apresenta OD de 3 mg/L antes do tratamento e 6 mg/L depois, em medições comparáveis. A diferença é +3 mg/L; é evidência favorável, mas não prova isoladamente recuperação total de espécies ou exclusão de outras causas. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Não confunda associação com causalidade nem extrapole modelos além das condições de análise.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que esgoto orgânico pode reduzir oxigênio dissolvido em um rio?",
        "options": [
          "Porque toda matéria orgânica libera oxigênio",
          "Porque decompositores aeróbios consomem oxigênio",
          "Porque nitrogênio é sempre tóxico",
          "Porque o rio deixa de ter água"
        ],
        "correctIndex": 1,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A decomposição aeróbia de matéria orgânica aumenta a demanda bioquímica de oxigênio e pode reduzir o oxigênio dissolvido disponível aos organismos aquáticos. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "intermediate",
        "prompt": "O aumento de concentração de poluente persistente ao longo de níveis tróficos chama-se:",
        "options": [
          "Evaporação",
          "Mutação",
          "Biomagnificação",
          "Fixação de nitrogênio"
        ],
        "correctIndex": 2,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "Biomagnificação refere-se ao aumento de concentração entre níveis tróficos; bioacumulação ocorre no organismo ao longo do tempo. Nem toda substância apresenta esse comportamento. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "advanced",
        "prompt": "OD passa de 3 mg/L para 6 mg/L após intervenção, sob condições comparáveis. Qual interpretação é mais adequada?",
        "options": [
          "O ecossistema está integralmente recuperado",
          "O poluente foi totalmente eliminado",
          "A biodiversidade dobrou necessariamente",
          "Houve aumento de 3 mg/L, mas são necessários outros indicadores"
        ],
        "correctIndex": 3,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A diferença observada é 6−3=3 mg/L. Ela pode ser favorável, porém não comprova recuperação de toda a comunidade biológica nem estabelece sozinha a causa da mudança. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "O escravismo na Grécia e em Roma",
    "objective": "Comparar formas de escravização no mundo greco-romano, suas bases jurídicas e econômicas e os limites das fontes disponíveis.",
    "prerequisites": [
      "Polis grega",
      "República e Império Romano",
      "Análise de fontes históricas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Escravidão e cidadania",
        "explanation": "Nas sociedades greco-romanas, escravidão designava condições jurídicas de sujeição em que pessoas eram tratadas como propriedade ou submetidas ao domínio de senhores, com direitos severamente restringidos. A escravidão não era equivalente a trabalho assalariado e não pode ser reduzida a uma única ocupação: pessoas escravizadas podiam atuar em agricultura, mineração, serviços domésticos, oficinas e administração, conforme região e período. Em Atenas clássica, a cidadania política era restrita a uma parcela da população masculina livre; mulheres, estrangeiros residentes e escravizados estavam excluídos de participação plena nas instituições democráticas. Em Roma, estatutos jurídicos diferenciavam livres, libertos e escravizados, e a manumissão podia modificar a condição legal de alguns indivíduos, sem apagar desigualdades. A origem do cativeiro incluía guerra, comércio e nascimento em certas condições. É anacrônico supor que todos os habitantes de uma polis participavam da democracia ou que o sistema escravista tinha a mesma estrutura em toda a Antiguidade.",
        "example": "Compare um cidadão ateniense participante da assembleia e uma pessoa escravizada na mesma cidade: ambos vivem na polis, mas apenas o primeiro integra o corpo político. A distinção exige analisar estatuto jurídico, não apenas local de residência. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Evite confundir definição operacional com generalização sem evidências: observe o contexto e as exceções.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Economia e resistências",
        "explanation": "A expansão territorial romana ampliou a circulação de cativos de guerra, embora a importância econômica da escravidão variasse entre épocas e regiões. Grandes propriedades rurais, mineração e serviços urbanos podiam empregar trabalho escravizado; ao mesmo tempo, trabalhadores livres e arrendatários coexistiam com esses sistemas. O trabalho escravizado não significa ausência de conhecimento técnico ou especialização: alguns cativos exerciam tarefas qualificadas, mas permaneciam sujeitos à coerção e à possibilidade de violência. Resistências incluíam fugas, negociações, sabotagens e revoltas, como a liderada por Espártaco no século I a.C. A existência de revoltas não autoriza concluir que todos os escravizados tinham objetivos políticos idênticos. Fontes escritas de elites frequentemente descrevem pessoas escravizadas pelo ponto de vista dos proprietários; inscrições funerárias e evidências materiais ajudam a ampliar a análise. A economia romana não deve ser descrita como sustentada exclusivamente por escravidão em todos os setores e períodos.",
        "example": "Ao comparar uma fazenda romana com oficinas urbanas, identifique trabalhadores livres e escravizados em cada contexto. Uma revolta documentada indica resistência real, mas não permite estimar automaticamente a experiência de todos os cativos. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Antes de aplicar uma fórmula ou comparar fontes, confirme variáveis controladas e condições de validade.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Comparação histórica e fontes",
        "explanation": "A escravidão antiga precisa ser estudada em seus próprios contextos sem naturalizá-la nem confundi-la com sistemas posteriores. A escravidão atlântica moderna desenvolveu articulações específicas entre colonialismo, tráfico transoceânico e racialização hereditária, enquanto na Antiguidade greco-romana a captura em guerra, a condição jurídica e o comércio operavam em configurações diferentes. A comparação identifica permanências da coerção e diferenças de escala, legislação e ideologias, evitando equivalências simplistas. Documentos legais mostram normas e categorias, mas não necessariamente a experiência cotidiana de quem estava submetido ao domínio; relatos literários podem reforçar estereótipos de elite. Inscrições, artefatos, restos arqueológicos e registros de libertação permitem cruzamento crítico. Nem toda alforria implicava igualdade social, e a condição de liberto podia manter obrigações ou estigmas. A análise histórica exige identificar autor, público, finalidade e lacunas de cada fonte antes de afirmar que uma prática era universal.",
        "example": "Uma inscrição sobre alforria demonstra mudança de estatuto de um indivíduo, não abolição geral da escravidão. Confronte-a com normas e evidências de trabalho para avaliar oportunidades e limitações dos libertos. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Não confunda associação com causalidade nem extrapole modelos além das condições de análise.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na Atenas clássica, a cidadania política plena:",
        "options": [
          "Incluía todos os habitantes",
          "Era restrita a parte dos homens livres cidadãos",
          "Era garantida a todos os escravizados",
          "Não tinha relação com assembleias"
        ],
        "correctIndex": 1,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A democracia ateniense restringia a participação política a homens livres reconhecidos como cidadãos. Mulheres, estrangeiros residentes e escravizados estavam excluídos da cidadania plena. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "intermediate",
        "prompt": "Qual afirmação descreve adequadamente o trabalho escravizado em Roma?",
        "options": [
          "Ocorreu apenas na mineração",
          "Eliminou todo trabalho livre",
          "Coexistiu com trabalho livre em diferentes atividades",
          "Foi abolido após a revolta de Espártaco"
        ],
        "correctIndex": 2,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "Pessoas escravizadas trabalhavam em diversos setores, enquanto trabalhadores livres também participavam da economia. A revolta de Espártaco não extinguiu a instituição. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "advanced",
        "prompt": "Ao comparar escravidão antiga e atlântica moderna, o historiador deve:",
        "options": [
          "Tratá-las como sistemas idênticos",
          "Ignorar violência e coerção",
          "Usar apenas relatos de proprietários",
          "Analisar permanências e diferenças de contexto, escala e ideologia"
        ],
        "correctIndex": 3,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "Ambos os sistemas envolveram coerção, mas seus contextos jurídicos, políticos, econômicos e ideológicos diferiram. A comparação crítica evita anacronismos e confronta fontes diversas. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Energia de ativação",
    "objective": "Interpretar barreiras energéticas, perfis de reação e ação de catalisadores sem confundir cinética, equilíbrio e variação de entalpia.",
    "prerequisites": [
      "Cinética química",
      "Energia e entalpia",
      "Colisões moleculares"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Barreira energética e colisões",
        "explanation": "A energia de ativação é um parâmetro associado à barreira energética que deve ser superada ao longo de um caminho reacional para que a transformação ocorra. Em modelos simples de colisão, não basta que partículas se encontrem: energia e orientação apropriadas são necessárias para formar produtos. Uma reação pode liberar energia no balanço global e ainda assim ser lenta, pois exotermicidade não elimina a barreira cinética. O estado de transição representa uma configuração de energia elevada ao longo da coordenada de reação, e não um intermediário estável isolável em todas as situações. Um perfil de energia distingue energia dos reagentes, energia dos produtos e máximo associado à barreira. A diferença entre produtos e reagentes relaciona-se à variação de entalpia sob condições adequadas, enquanto a barreira controla aspectos da rapidez. Diferentes mecanismos podem possuir várias etapas e barreiras; não se deve supor que um único pico descreva qualquer reação real. Temperatura, catalisadores e composição podem afetar a rapidez por mecanismos distintos.",
        "example": "Num perfil com reagentes a 40 kJ/mol, máximo a 100 kJ/mol e produtos a 10 kJ/mol, Ea direta=100−40=60 kJ/mol e ΔH=10−40=−30 kJ/mol: reação exotérmica, mas com barreira. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Evite confundir definição operacional com generalização sem evidências: observe o contexto e as exceções.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Temperatura e Arrhenius",
        "explanation": "Para muitas reações em intervalo limitado de temperatura, a constante de velocidade pode ser aproximada pela equação de Arrhenius k=A exp(−Ea/RT), em que Ea é energia de ativação aparente, R é constante dos gases e T é temperatura absoluta. Se Ea for positiva e A aproximadamente constante, elevar T aumenta k. A relação não diz que todas as reações dobram de rapidez a cada 10 °C; esse atalho depende de reação e faixa de temperatura. A constante k também não equivale diretamente à velocidade instantânea quando concentrações variam: a lei de velocidade inclui as concentrações e ordens de reação determinadas experimentalmente. O gráfico de ln k contra 1/T pode aproximar uma reta com inclinação −Ea/R, se o mecanismo e os parâmetros forem adequadamente constantes. Reações complexas podem apresentar comportamento não linear ou energia de ativação aparente variável. Unidades precisam ser coerentes: Ea em J/mol quando R=8,314 J/(mol·K).",
        "example": "Se Ea=50.000 J/mol, R=8,314 e T passa de 300 K para 310 K, ln(k₂/k₁)=Ea/R×(1/300−1/310)≈0,647; portanto k₂/k₁≈1,91, não exatamente 2 por regra universal. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Antes de aplicar uma fórmula ou comparar fontes, confirme variáveis controladas e condições de validade.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Catalisadores e equilíbrio",
        "explanation": "Catalisadores oferecem caminhos reacionais alternativos com barreiras de ativação menores, elevando a velocidade de aproximação ao equilíbrio sem alterar a variação de energia livre padrão entre reagentes e produtos. Para uma reação reversível, o catalisador acelera tanto a transformação direta quanto a inversa de modo compatível com a mesma constante de equilíbrio termodinâmica; não desloca sozinho a composição de equilíbrio. Em um perfil idealizado, reagentes a 20 kJ/mol, produtos a 50 kJ/mol e máximo sem catalisador a 110 kJ/mol fornecem Ea direta=90 kJ/mol. Se o caminho catalisado tiver máximo a 70 kJ/mol, Ea direta cai a 50 kJ/mol, mas ΔH permanece +30 kJ/mol. Catalisadores podem sofrer desativação e participar de etapas intermediárias, embora sejam regenerados no ciclo catalítico global idealizado. Enzimas são catalisadores biológicos sujeitos a condições de pH e temperatura. Não se deve afirmar que catalisadores tornam reações espontâneas ou que alteram a energia dos produtos.",
        "example": "Reagentes a 20, produtos a 50 e pico catalisado a 70 kJ/mol: Ea direta=70−20=50 kJ/mol e ΔH=50−20=+30 kJ/mol. O catalisador diminui a barreira, não torna a reação exotérmica. O procedimento exige interpretar dados, unidades e hipóteses antes de generalizar a conclusão.",
        "pitfall": "Não confunda associação com causalidade nem extrapole modelos além das condições de análise.",
        "steps": [
          "Identifique o conceito e a pergunta específica.",
          "Relacione evidências ou grandezas e execute o raciocínio.",
          "Confira o resultado, unidades, limites e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Reação exotérmica pode ser lenta porque:",
        "options": [
          "Exotermicidade exige equilíbrio imediato",
          "Pode existir barreira de ativação elevada",
          "Energia de ativação é sempre negativa",
          "Produtos não possuem energia"
        ],
        "correctIndex": 1,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A variação de entalpia negativa não informa sozinha a rapidez. Uma barreira de ativação elevada pode tornar a reação lenta mesmo quando há liberação global de energia. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "intermediate",
        "prompt": "Com reagentes a 40 e pico a 100 kJ/mol, a Ea direta é:",
        "options": [
          "140 kJ/mol",
          "−60 kJ/mol",
          "60 kJ/mol",
          "40 kJ/mol"
        ],
        "correctIndex": 2,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "A barreira direta é a diferença entre o máximo do perfil e a energia dos reagentes: Ea=100−40=60 kJ/mol. Não se usa energia dos produtos nessa subtração. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      },
      {
        "level": "advanced",
        "prompt": "Um catalisador, por si só, em reação reversível:",
        "options": [
          "Altera a constante de equilíbrio",
          "Torna ΔH necessariamente negativo",
          "Impede a reação inversa",
          "Reduz barreiras e acelera chegada ao mesmo equilíbrio"
        ],
        "correctIndex": 3,
        "hint": "Identifique a condição científica ou histórica decisiva e confira as alternativas.",
        "solution": "Catalisadores fornecem caminhos alternativos e aceleram processos direto e inverso, mas não alteram o equilíbrio termodinâmico nem a diferença de energia entre reagentes e produtos. As demais opções violam definições, hipóteses ou relações que sustentam a solução correta."
      }
    ]
  }
];
