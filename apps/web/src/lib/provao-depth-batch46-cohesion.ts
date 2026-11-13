import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo autoral Kognos; não oficial; revisão docente pendente. */
export const provaoDepthBatch46Cohesion:readonly DeepTopicSpec[] = [
  {
    "subject": "Português",
    "topicStart": "Estratégias de articulação do texto: mecanismos de coesão (coesão lexical, referencial e…",
    "objective": "Reconhecer coesão referencial, lexical e sequencial; interpretar conectivos e manter coerência ao ligar enunciados sem confundir continuidade formal e consistência de sentido.",
    "prerequisites": [
      "Identificação de referentes e pronomes",
      "Relações de causa, contraste e conclusão",
      "Leitura de sequência de frases e parágrafos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Retomadas referenciais e continuidade do tema",
        "explanation": "A coesão referencial permite acompanhar de quem ou do que um texto fala. Um referente pode ser retomado por pronome, expressão nominal, elipse ou outro recurso que evite repetições desnecessárias. Em “A pesquisadora apresentou um estudo. Ela explicou os resultados”, o pronome “ela” retoma “a pesquisadora”, não “um estudo”, porque concordância e sentido orientam a interpretação. Nem toda retomada é pronominal: “O projeto foi apresentado. A iniciativa receberá recursos” substitui o nome por uma expressão de valor equivalente no contexto, sem repetir exatamente as mesmas palavras. Para resolver uma questão, encontre o termo anterior mais compatível com a retomada e avalie o efeito da substituição. Um pronome com dois possíveis antecedentes pode gerar ambiguidade; nesse caso, reescrever o enunciado com o nome do referente restaura clareza. A coesão não garante sozinha a coerência: mesmo um texto com pronomes corretamente conectados pode afirmar ideias contraditórias. Além disso, algumas expressões introduzem informação nova sem ter um antecedente específico. É necessário distinguir retomada, introdução de participante e interpretação dependente do contexto, em vez de pressupor que toda palavra repetida serve à mesma função.",
        "example": "“O museu reabriu após a reforma. O espaço recebeu centenas de visitantes.” A expressão “o espaço” retoma “o museu”. Para testar, substitua-a por “o museu”: a segunda frase mantém o sentido. Já “centenas de visitantes” introduz um novo grupo.",
        "pitfall": "Escolher automaticamente o substantivo mais próximo como antecedente, ignorando concordância e coerência semântica.",
        "steps": [
          "Identifique os sintagmas ou pronomes que retomam elementos anteriores.",
          "Localize os antecedentes possíveis e confronte gênero, número e sentido.",
          "Reescreva o trecho com o antecedente explícito para testar a interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Coesão lexical e relações entre enunciados",
        "explanation": "Um texto também progride ao estabelecer relações de significado entre palavras e ideias. A coesão lexical envolve repetições necessárias, termos mais gerais, relações de especificação e substituições lexicais contextualmente adequadas. Ao escrever “Uma árvore caiu na avenida. A planta bloqueou a passagem”, a retomada por “a planta” conserva o referente, mas pode soar menos precisa do que “o tronco” caso o foco seja o obstáculo. A escolha afeta como o leitor constrói a cena. Na coesão sequencial, conectivos explicitam relações argumentativas: “porque” tende a indicar causa ou justificativa; “portanto”, conclusão; “embora”, concessão; “porém”, contraste. Não basta decorar uma lista: a mesma expressão pode cumprir funções distintas conforme o enunciado e a posição. Compare “Houve chuva, por isso o evento foi adiado” com “Houve chuva, apesar disso o evento ocorreu”. O primeiro apresenta consequência, o segundo destaca quebra de expectativa. Em itens de substituição de conectivo, mantenha a relação lógica indicada, a pontuação e a estrutura sintática. Trocar “apesar de” por “por causa de” transforma concessão em causalidade, mesmo que as duas construções contenham a mesma informação de fundo.",
        "example": "“O bairro recebeu novas ciclovias; contudo, o número de acidentes ainda preocupa.” “Contudo” contrasta a melhoria com o problema persistente. Substituí-lo por “portanto” sugeriria que as ciclovias causaram diretamente os acidentes, relação que o período não afirma.",
        "pitfall": "Tratar conectivos como sinônimos por ocuparem a mesma posição ou repetir termos sem verificar a progressão temática.",
        "steps": [
          "Identifique a relação entre os dois segmentos: causa, consequência, contraste ou concessão.",
          "Teste a substituição preservando a organização sintática do período.",
          "Verifique se a nova ligação mantém o sentido e não introduz causalidade indevida."
        ]
      },
      {
        "level": "advanced",
        "title": "Coerência global, progressão e revisão argumentativa",
        "explanation": "A coerência é a construção de um sentido global compatível com os dados do texto e com pressupostos relevantes da situação. Ela depende de organização temática, consistência temporal, encadeamento de ideias e informações que o leitor consegue integrar. A presença de conectivos é útil, mas não corrige contradições: “A biblioteca estará fechada amanhã; portanto, todos os serviços presenciais funcionarão normalmente amanhã” mantém um conector de conclusão, porém cria incompatibilidade entre o fechamento e o funcionamento integral. Já um texto pode ser coerente com poucos conectivos, como instruções curtas apresentadas em sequência lógica. Para revisar uma argumentação, identifique tese, razões e exemplos, e observe se cada parágrafo acrescenta algo, em vez de repetir a tese com novas palavras. Coesão lexical excessiva pode produzir monotonia; substituições descuidadas podem criar ambiguidades. Também é preciso acompanhar referentes em textos multimodais, em que legenda, imagem e gráfico se complementam: “esses números” só será uma referência adequada se houver dados identificáveis no suporte. Em questões de reorganização de parágrafos, dê prioridade a pistas de introdução de referentes, progressão do geral para o específico e conclusão sustentada, não apenas a marcadores como “primeiro” e “finalmente”. A sequência coerente permite ao leitor reconstruir o raciocínio sem inventar pontes lógicas.",
        "example": "Sequência proposta: (1) “Por isso, a equipe decidiu reduzir o consumo”; (2) “A escola percebeu aumento no gasto de água”; (3) “A medida incluiu inspeção dos vazamentos”. A ordem 2–1–3 introduz o problema, registra a decisão e especifica a ação.",
        "pitfall": "Confundir texto muito conectado com texto coerente e aceitar uma conclusão que não decorre das premissas.",
        "steps": [
          "Resuma o tema central de cada segmento e localize a informação nova.",
          "Verifique a ordem de introdução, retomada, justificativa e conclusão.",
          "Releia o conjunto buscando contradições, saltos de causa e referentes ambíguos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em “A escola abriu uma biblioteca. O espaço ficará disponível aos sábados”, o termo “O espaço” retoma:",
        "options": [
          "Os sábados citados no período",
          "A disponibilidade do serviço",
          "A escola como instituição inteira",
          "A biblioteca recém-aberta"
        ],
        "correctIndex": 3,
        "hint": "Substitua “O espaço” pelo antecedente físico que pode permanecer aberto aos sábados.",
        "solution": "D é correta: a biblioteca é o espaço inaugurado e retomado pela expressão. A, B e C não preservam a mesma referência específica; a instituição inteira não é necessariamente o local cujo funcionamento aos sábados está sendo anunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Complete com conectivo que preserve a oposição: “O curso recebeu boas avaliações; ___, a participação caiu no segundo mês”.",
        "options": [
          "entretanto",
          "porque",
          "portanto",
          "à medida que"
        ],
        "correctIndex": 0,
        "hint": "A segunda informação contraria a expectativa criada pela primeira.",
        "solution": "A é a opção correta: “entretanto” marca contraste entre boas avaliações e queda na participação. “Porque” introduziria justificativa, “portanto” conclusão e “à medida que” proporção temporal; nenhuma dessas relações é sustentada pelo período."
      },
      {
        "level": "advanced",
        "prompt": "Qual sequência produz maior coerência para um parágrafo sobre desperdício de água? I. “Por isso, a escola criou uma campanha.” II. “O consumo aumentou sem explicação.” III. “A campanha incluiu vistoria de torneiras.”",
        "options": [
          "I–III–II",
          "II–I–III",
          "III–II–I",
          "II–III–I"
        ],
        "correctIndex": 1,
        "hint": "Apresente o problema antes da consequência indicada por “Por isso”, e explique a campanha depois de nomeá-la.",
        "solution": "B, II–I–III, inicia pelo aumento de consumo, apresenta a decisão como consequência e detalha a campanha posteriormente. A antecipa a consequência sem contexto; C começa por campanha não introduzida; D descreve uma campanha antes de informar que ela foi criada."
      }
    ]
  }
];
