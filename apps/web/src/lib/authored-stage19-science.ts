import type {AuthoredLessonSeed} from './authored-lesson-recipe.ts';
export const stage19Science:AuthoredLessonSeed[]=[
  {
    "subject": "Ciências",
    "topic": "Movimento e velocidade média",
    "objective": "Calcular velocidade média em trajetos simples, diferenciar deslocamento e distância e conferir unidades e intervalos de tempo.",
    "chapters": [
      [
        "Movimento depende de referencial",
        "Descrever movimento exige escolher referencial e indicar posições em instantes. Um objeto pode estar em repouso em relação a um ônibus e em movimento em relação ao solo. Distância percorrida mede extensão da trajetória, enquanto deslocamento indica variação de posição com direção e sinal em modelos unidimensionais.",
        "Uma pessoa sentada num ônibus mantém posição quase fixa em relação ao banco enquanto o ônibus se desloca na estrada.",
        "Um corpo possui a mesma situação de repouso ou movimento em qualquer referencial possível.",
        "Por que passageiro sentado pode estar em repouso e movimento ao mesmo tempo?",
        "Compare banco e rua como referências.",
        "Ele está em repouso em relação ao ônibus e em movimento em relação a um ponto fixo da estrada.",
        "Repouso e movimento são descrições relativas a referencial, não propriedades independentes de todo observador."
      ],
      [
        "Rapidez média e velocidade vetorial média",
        "Rapidez escalar média é distância total dividida pelo tempo total; velocidade vetorial média relaciona deslocamento ao intervalo. Numa ida e volta ao mesmo ponto, distância pode ser positiva, mas deslocamento total é zero. No ensino básico, muitos enunciados usam a expressão velocidade média para distância/tempo; leia definição e unidades do exercício.",
        "Uma pessoa vai 100 m até praça e volta 100 m em 200 s: rapidez média é 200/200=1 m/s; deslocamento total é zero.",
        "Em ida e volta ao ponto inicial, a distância percorrida total é sempre zero porque deslocamento é zero.",
        "Uma pessoa caminha 300 m em 5 minutos sem voltar. Calcule rapidez média.",
        "Converta cinco minutos em 300 segundos.",
        "Rapidez média=300/300=1 m/s. O cálculo usa distância total percorrida e tempo total do intervalo.",
        "Deslocamento e distância podem diferir; o retorno ao ponto inicial zera deslocamento, não extensão do trajeto."
      ],
      [
        "Unidades e comparação",
        "Para comparar velocidades, medidas devem estar em unidades compatíveis: km/h pode ser convertido para m/s dividindo o número por 3,6. Velocidade média não fornece todos os detalhes de pausas e acelerações durante viagem. A mesma média pode resultar de percursos com ritmos bastante diferentes.",
        "Um percurso de 120 km em duas horas possui rapidez média 60 km/h, ainda que o veículo tenha parado em parte da viagem.",
        "Rapidez média de 60 km/h significa que o veículo manteve exatamente 60 km/h em cada instante.",
        "Converta rapidez média de 36 km/h para m/s.",
        "Divida por 3,6.",
        "36/3,6=10 m/s. A conversão preserva a mesma rapidez expressa em unidades diferentes.",
        "A média resume intervalo completo e não indica ritmo instantâneo; paradas e acelerações podem ocorrer."
      ]
    ],
    "situation": [
      "Um estudante caminha 200 m até uma loja e retorna pelo mesmo caminho, em 8 minutos. Ele diz que a distância percorrida é zero porque terminou em casa.",
      "Qual a distância total, o deslocamento e a rapidez média em m/s?",
      "Distância=400 m, deslocamento=0 m e tempo=480 s; rapidez média=400/480≈0,83 m/s."
    ],
    "links": [
      [
        "Física",
        "Movimento uniforme",
        "Comparar movimento uniforme e trajetos reais ajuda a diferenciar rapidez instantânea, média e deslocamento."
      ],
      [
        "Física",
        "Sistema Internacional de Unidades",
        "Converter comprimento e tempo para m e s torna os cálculos de rapidez coerentes."
      ]
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Máquinas simples",
    "objective": "Compreender alavancas, roldanas e planos inclinados como máquinas que modificam força ou direção, sem criar energia.",
    "chapters": [
      [
        "Máquinas trocam força e deslocamento",
        "Máquinas simples podem modificar direção ou módulo da força aplicada, permitindo realizar tarefa de forma conveniente. Em modelos ideais, trabalho de entrada iguala trabalho de saída; reduzir força geralmente exige aumentar deslocamento da aplicação. Em máquinas reais há atrito e perdas energéticas.",
        "Uma rampa mais longa pode permitir elevar carga até certa altura com força menor que levantamento vertical direto, no modelo ideal.",
        "Uma rampa reduz força e distância simultaneamente e cria energia adicional sem nenhuma entrada.",
        "Por que uma rampa longa pode exigir força menor para atingir mesma altura?",
        "Considere força e percurso percorrido.",
        "O trabalho ideal é aproximadamente o mesmo para uma altura, mas a força aplicada pode ser menor quando atua por distância maior.",
        "Máquinas não criam energia; vantagem mecânica costuma trocar força por percurso e pode envolver perdas reais."
      ],
      [
        "Alavancas e momentos",
        "Uma alavanca gira ao redor de apoio e pode amplificar efeito da força conforme braços de alavanca. No equilíbrio simplificado, torques de sentidos opostos se compensam: F₁d₁=F₂d₂ para forças perpendiculares. O tipo de alavanca depende das posições de apoio, resistência e esforço; reconhecer a geometria é mais importante que decorar um objeto.",
        "Para equilibrar carga de 100 N a 0,2 m do apoio, força de 50 N pode atuar a 0,4 m no lado oposto.",
        "A distância da força ao apoio não altera em nada a capacidade de equilibrar uma alavanca.",
        "Qual força equilibra 80 N a 0,25 m do apoio com braço oposto de 0,5 m?",
        "Iguale os momentos: F×0,5=80×0,25.",
        "F=20/0,5=40 N no modelo de equilíbrio, com sentidos de torque opostos.",
        "O momento depende de força e distância perpendicular ao eixo; braços diferentes alteram força necessária."
      ],
      [
        "Roldanas e condições reais",
        "Roldanas fixas podem alterar direção de força, enquanto arranjos de roldanas móveis podem oferecer vantagem mecânica em modelos ideais. A análise precisa contar segmentos que sustentam carga, sem prometer redução mágica de trabalho. Atrito, massa de peças e deformações tornam eficiência real menor que ideal em muitas condições.",
        "Numa roldana fixa ideal, puxar corda para baixo pode elevar carga para cima com força de módulo semelhante ao peso.",
        "Uma única roldana fixa reduz obrigatoriamente a força aplicada à metade em qualquer arranjo.",
        "Qual vantagem típica uma roldana fixa simples oferece no modelo ideal?",
        "Considere mudança de direção, não multiplicação automática.",
        "Ela pode inverter a direção da força de tração, permitindo puxar para baixo ao erguer carga, sem reduzir necessariamente módulo.",
        "Uma roldana fixa isolada não proporciona automaticamente ganho de força; o efeito depende da configuração."
      ]
    ],
    "situation": [
      "Numa aula, alguém afirma que uma rampa e uma roldana produzem energia extra porque permitem levantar objetos com esforço mais confortável. A turma compara distâncias e forças.",
      "Como as máquinas simples podem facilitar tarefas sem violar conservação de energia?",
      "Elas podem modificar direção da força ou trocar maior percurso por menor força. Em modelos ideais, o trabalho se conserva; máquinas reais podem ter perdas."
    ],
    "links": [
      [
        "Física",
        "Trabalho de uma força",
        "O produto de força e deslocamento explica trocas idealizadas entre esforço e percurso em máquinas simples."
      ],
      [
        "Física",
        "Potência e rendimento",
        "A eficiência de máquinas reais relaciona energia útil e energia de entrada, com perdas."
      ]
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Vírus e prevenção de doenças",
    "objective": "Explicar estrutura básica de vírus, multiplicação dependente de células e medidas gerais de prevenção sem confundir vírus com bactérias.",
    "chapters": [
      [
        "Vírus não são células",
        "Vírus possuem material genético em estrutura proteica, e alguns apresentam envelope lipídico, variando entre grupos. Não têm organização celular como bactérias e dependem de mecanismos celulares de hospedeiro para replicar. A definição de vida para vírus é debatida em diferentes contextos, e não se deve classificá-los como bactérias pequenas.",
        "Uma partícula viral pode conter RNA e capsídeo, sem citoplasma, ribossomos ou metabolismo celular completo próprios.",
        "Vírus são bactérias microscópicas que se dividem sozinhas por bipartição em qualquer superfície.",
        "Por que vírus dependem de células para produzir novas partículas?",
        "Não possuem maquinaria celular completa.",
        "Eles utilizam componentes e processos da célula hospedeira para replicar material genético e produzir estruturas virais.",
        "Vírus não realizam divisão celular autônoma como bactérias; sua multiplicação depende de sistemas do hospedeiro."
      ],
      [
        "Transmissão e prevenção dependem do agente",
        "Vírus podem ser transmitidos por vias respiratórias, alimentos, água, vetores ou contato, conforme doença específica. Não há um único método de prevenção válido para todas as viroses. Higiene, ventilação, vacinação quando disponível e medidas de saúde pública têm papéis distintos conforme o agente e contexto.",
        "Uma doença viral respiratória exige avaliação de transmissão diferente de uma doença viral transmitida por vetor.",
        "Toda virose se transmite exclusivamente pelo ar, independentemente do vírus envolvido.",
        "Por que a prevenção de viroses deve começar pela via de transmissão?",
        "Considere ambiente e mecanismo de infecção.",
        "Porque intervenções eficazes variam conforme o modo de circulação do agente e os riscos do contexto.",
        "O termo virose abrange doenças muito distintas; suas medidas de prevenção não são todas idênticas."
      ],
      [
        "Vacinas e uso responsável de medicamentos",
        "Vacinas podem treinar respostas imunológicas e reduzir riscos de determinadas infecções ou formas graves, dependendo do imunizante e da doença. Antibióticos atuam contra bactérias por mecanismos específicos e não tratam automaticamente infecções virais. Tratamento de doenças requer orientação profissional, especialmente em sintomas importantes, e não deve ser improvisado com medicações.",
        "Uma infecção viral comum não é indicação automática de antibiótico, que precisa de avaliação médica quando apropriado.",
        "Antibióticos curam todos os vírus porque eliminam qualquer microrganismo no organismo.",
        "Por que antibióticos não servem como tratamento genérico de viroses?",
        "Compare estruturas e alvos celulares.",
        "Antibióticos comuns têm alvos em bactérias, ausentes em vírus; sua indicação depende do diagnóstico e da situação clínica.",
        "Vírus e bactérias diferem biologicamente; usar antibióticos sem indicação não garante benefício e pode gerar riscos."
      ]
    ],
    "situation": [
      "Uma mensagem nas redes recomenda antibiótico para qualquer quadro gripal, afirmando que vírus e bactérias são o mesmo tipo de célula e que medidas preventivas são idênticas.",
      "Quais diferenças biológicas e cuidados com prevenção tornam a mensagem incorreta?",
      "Vírus não são bactérias e dependem de células para replicar; antibióticos não combatem genericamente viroses, e prevenção varia conforme o agente."
    ],
    "links": [
      [
        "Biologia",
        "Seleção natural e adaptação",
        "Variação e seleção de variantes genéticas também influenciam a evolução de populações virais ao longo do tempo."
      ],
      [
        "Sociologia",
        "Métodos de pesquisa social",
        "Análises populacionais e métodos de coleta podem auxiliar avaliação de medidas de saúde pública com dados e limites explícitos."
      ]
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Sistema Solar",
    "objective": "Descrever organização do Sistema Solar, órbitas e escalas, diferenciando planetas, satélites e pequenos corpos sem confundir modelos e observações.",
    "chapters": [
      [
        "Objetos e organização orbital",
        "O Sistema Solar inclui o Sol, oito planetas reconhecidos na classificação atual, planetas anões, satélites naturais e pequenos corpos. Planetas orbitam o Sol e possuem características físicas distintas; luas orbitam outros corpos conforme relações gravitacionais. Desenhos didáticos frequentemente exageram tamanhos ou encurtam distâncias para caber numa página.",
        "Júpiter é planeta gigante gasoso com muitas luas, enquanto a Lua da Terra é satélite natural e não um planeta.",
        "A Lua é um dos oito planetas porque se move no espaço e pode ser vista à noite.",
        "Por que a Lua não é classificada como planeta do Sistema Solar?",
        "Observe qual corpo ela orbita diretamente.",
        "A Lua é satélite natural da Terra, embora o sistema Terra–Lua também se mova em torno do Sol.",
        "A classificação distingue tipos de corpos e suas relações orbitais; visibilidade no céu não torna um corpo planeta."
      ],
      [
        "Órbita e gravidade",
        "Gravidade participa do movimento orbital, que não requer força motora contínua empurrando o planeta para frente. As órbitas planetárias são aproximadamente elípticas e possuem diferentes períodos, distâncias e inclinações. Distâncias e forças variam com posição e massas; imaginar todas as órbitas como círculos idênticos gera erros de interpretação.",
        "A Terra leva aproximadamente um ano para completar uma translação ao redor do Sol, enquanto Marte leva mais tempo.",
        "Planetas se movem porque o Sol os empurra continuamente como motor em linha reta.",
        "Que interação física mantém a dinâmica orbital dos planetas?",
        "Considere atração gravitacional.",
        "A gravitação, combinada com a velocidade dos corpos, determina movimentos orbitais no modelo gravitacional.",
        "Movimento orbital não exige empurrão permanente do Sol; ele resulta da interação gravitacional e do estado de movimento."
      ],
      [
        "Escala e representações",
        "As distâncias no Sistema Solar são muito maiores que diâmetros dos planetas em modelos comuns, por isso desenhos precisam indicar quando não estão em escala. Unidade astronômica (UA) é distância convencional aproximada entre Terra e Sol; anos-luz são unidades de distância e não de tempo. A leitura crítica separa representação esquemática de medida observacional.",
        "Uma maquete com planetas do tamanho de bolas e distâncias de centímetros dificilmente preserva simultaneamente escala real de tamanhos e distâncias.",
        "Se um desenho mostra planetas próximos ao Sol, suas distâncias verdadeiras são proporcionalmente pequenas.",
        "Por que uma figura de livro pode mostrar tamanhos e distâncias fora de escala?",
        "Considere limites da página.",
        "Porque representar simultaneamente diâmetros e separações reais tornaria muitos corpos minúsculos ou fora do espaço disponível.",
        "Diagramas priorizam legibilidade; sem indicação de escala, não fornecem distâncias ou tamanhos proporcionais confiáveis."
      ]
    ],
    "situation": [
      "Uma ilustração mostra todos os planetas como bolas grandes muito próximas do Sol. Um estudante usa o desenho para estimar que a distância entre Terra e Marte é menor que o diâmetro da Terra.",
      "Por que a representação esquemática não permite essa comparação geométrica?",
      "Diagramas do Sistema Solar geralmente não mantêm tamanhos e distâncias na mesma escala; é necessário consultar medidas apropriadas."
    ],
    "links": [
      [
        "Matemática",
        "Potências e propriedades",
        "Potências de dez ajudam a representar distâncias astronômicas muito grandes ou pequenas."
      ],
      [
        "Física",
        "Sistema Internacional de Unidades",
        "A interpretação de distâncias e períodos astronômicos exige distinguir grandezas e converter unidades."
      ]
    ]
  }
];
