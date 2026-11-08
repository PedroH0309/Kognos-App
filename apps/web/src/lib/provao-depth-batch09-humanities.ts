import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Ninth batch: original philosophy and sociology content, teacher review pending. */
export const provaoDepthBatch09Humanities:readonly DeepTopicSpec[]=[
  {
    "subject": "Filosofia",
    "topicStart": "As abordagens racionalistas e empiristas do conhecimento",
    "objective": "Contrastar racionalismo e empirismo na teoria do conhecimento, interpretar Descartes, Locke e Hume, e analisar indução, dedução, limites da experiência e justificação.",
    "prerequisites": [
      "Argumentação filosófica",
      "Dúvida e conhecimento",
      "Lógica básica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Razão, experiência e o problema da origem do conhecimento",
        "explanation": "A epistemologia pergunta como conhecemos e quais razões justificam nossas crenças. O racionalismo moderno atribui à razão um papel central na fundamentação de certos conhecimentos, enquanto o empirismo enfatiza a experiência sensível como origem de ideias e fonte de informação sobre o mundo. Essas são tendências filosóficas, não rótulos absolutos segundo os quais racionalistas nunca observam ou empiristas jamais raciocinam. René Descartes, no século XVII, propôs a dúvida metódica: suspender provisoriamente crenças suscetíveis de erro até encontrar algo indubitável. A consciência do próprio pensar é expressa no célebre argumento do cogito. John Locke, por sua vez, combateu a tese de ideias inatas e descreveu o entendimento como formado por ideias oriundas de sensação e reflexão. A oposição permite formular perguntas concretas: verdades matemáticas dependem de observação? Como justificamos afirmações sobre fatos futuros? Qual papel a linguagem exerce na formulação de conceitos? Um bom exercício não é escolher automaticamente entre razão e sentidos, mas identificar que tipo de justificação uma afirmação requer.",
        "example": "Considere \"2+3=5\" e \"A água desta torneira está fria\". A primeira afirmação pode ser justificada por relações aritméticas, sem testar uma torneira; a segunda depende de observação ou medida. O contraste ajuda a perceber por que filósofos discutem a relação entre estruturas racionais e evidência empírica.",
        "pitfall": "Não confunda racionalismo com opinião sem provas nem empirismo com recusa de pensar. Ambos exigem argumentos; divergem principalmente sobre fundamentos e fontes de conhecimento.",
        "steps": [
          "Formule a questão epistemológica e o tipo de afirmação em análise.",
          "Identifique o papel atribuído à razão e à experiência.",
          "Compare justificativas sem reduzir os autores a caricaturas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Descartes, Locke e a diferença entre certeza e observação",
        "explanation": "Descartes distingue conhecimentos sujeitos a erro sensorial de proposições que resistiriam à dúvida radical. Seu método procura fundamentos claros e distintos para o conhecimento; a dúvida não é necessariamente ceticismo definitivo, mas instrumento para encontrar certeza. Locke examina a origem das ideias e sustenta que os materiais do pensamento provêm da experiência, distinguindo sensação e reflexão sobre operações da própria mente. A comparação não se limita a dizer que um usa matemática e outro usa experimentos: envolve problemas sobre ideias inatas, consciência, evidência e limites de cada fonte. Em \"Penso, logo existo\", o ponto cartesiano é que duvidar já implica atividade pensante; não se trata de uma medição externa da existência. No empirismo lockeano, a experiência fornece conteúdo, mas a mente compara, combina e abstrai ideias. Para avaliar uma tese, separe origem psicológica de uma ideia e sua validade lógica: aprender uma regra por observação não demonstra que ela seja universalmente verdadeira. Essa distinção ajuda a evitar confusão entre descoberta, aprendizagem e justificação.",
        "example": "Uma criança observa três triângulos desenhados e aprende a reconhecer três lados. O exemplo descreve uma via empírica de aprendizagem. Já demonstrar uma propriedade geral de triângulos exige raciocínio com definições e hipóteses, e não apenas observar os três desenhos. A origem de um conceito e a prova de uma proposição são questões diferentes.",
        "pitfall": "Não afirme que a dúvida cartesiana prova que todos os sentidos são sempre falsos. A estratégia mostra a possibilidade de erro como razão para buscar um fundamento mais seguro.",
        "steps": [
          "Explique a função da dúvida metódica em Descartes.",
          "Diferencie sensação e reflexão em Locke.",
          "Separe aprendizagem de uma ideia e justificação de uma afirmação."
        ]
      },
      {
        "level": "advanced",
        "title": "Hume, indução e o alcance das previsões",
        "explanation": "David Hume aprofundou problemas empiristas ao investigar como inferimos relações causais. Observamos sucessões e conjunções constantes de eventos, mas a necessidade de que um acontecimento produza outro não é percebida como uma conexão sensível direta. Ao afirmar que o Sol nascerá amanhã porque nasceu repetidamente, usamos indução: partimos de observações passadas para expectativa futura. A conclusão pode ser razoável e muito bem sustentada, mas não decorre logicamente com necessidade absoluta das observações finitas. Esse é o problema da indução: justificar o princípio de que o futuro se assemelhará ao passado sem pressupor justamente aquilo que precisa ser demonstrado. Hume não recomenda abandonar toda ciência; descreve o papel do hábito e da experiência na formação de expectativas. Na ciência atual, previsões são avaliadas por modelos, medições, testes e revisão, não por certeza dedutiva de cada evento. Uma análise sofisticada diferencia validade dedutiva, força indutiva e probabilidade. A relação entre racionalismo e empirismo também motivou tentativas posteriores de síntese, como a filosofia crítica de Kant, que perguntou pelas condições de possibilidade da experiência e do conhecimento.",
        "example": "Uma fábrica testa cem peças de um lote e todas funcionam. É racional estimar boa qualidade do lote, mas não se segue dedutivamente que toda peça restante funcionará. A amostra sustenta uma inferência indutiva cuja força depende de seleção, tamanho e variabilidade. A certeza lógica seria uma conclusão indevida.",
        "pitfall": "Não interprete o problema da indução como demonstração de que toda previsão é inútil. Ele mostra a diferença entre inferência empiricamente forte e garantia lógica necessária.",
        "steps": [
          "Reconheça observações, hipótese geral e conclusão futura.",
          "Teste se a conclusão é dedutivamente necessária ou apenas provável.",
          "Discuta limites da amostra, do hábito e da justificação da indução."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual formulação expressa corretamente a diferença geral entre racionalismo e empirismo?",
        "options": [
          "O racionalismo valoriza fundamentos da razão; o empirismo destaca a experiência como origem do conhecimento.",
          "O racionalismo proíbe toda observação e o empirismo proíbe toda lógica.",
          "O empirismo defende apenas ideias inatas.",
          "Ambos negam que seja possível justificar qualquer crença."
        ],
        "correctIndex": 0,
        "hint": "Compare a função da razão com a origem empírica das ideias.",
        "solution": "A alternativa A está correta: racionalistas enfatizam fundamentos racionais e empiristas a experiência, sem que isso elimine o uso de raciocínio ou observação por qualquer corrente. As outras opções criam caricaturas ou teses incompatíveis."
      },
      {
        "level": "intermediate",
        "prompt": "Na dúvida metódica de Descartes, o ato de duvidar é importante porque:",
        "options": [
          "Mostra que todas as sensações são necessariamente falsas.",
          "Dispensa qualquer investigação racional.",
          "Evidencia a atividade de pensar mesmo quando outras crenças são postas em dúvida.",
          "Prova por experimento físico a inexistência do mundo exterior."
        ],
        "correctIndex": 2,
        "hint": "O que permanece implicado pelo próprio ato de duvidar?",
        "solution": "A alternativa C está correta: o sujeito que duvida está pensando, ponto central do cogito cartesiano. O argumento não é um experimento físico e não implica que toda percepção seja falsa."
      },
      {
        "level": "advanced",
        "prompt": "Por que, para Hume, observar repetidamente um evento não garante logicamente sua ocorrência futura?",
        "options": [
          "Porque eventos futuros são sempre impossíveis de prever com qualquer evidência.",
          "Porque a passagem do passado ao futuro envolve indução, não necessidade dedutiva.",
          "Porque todas as leis científicas são invenções arbitrárias.",
          "Porque a matemática elimina a experiência na investigação da natureza."
        ],
        "correctIndex": 1,
        "hint": "Uma regularidade observada não implica necessidade lógica universal.",
        "solution": "A alternativa B está correta: a expectativa futura baseada em regularidades passadas é indutiva. Pode ser fortemente sustentada, mas não possui a mesma necessidade de uma conclusão dedutiva válida."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topicStart": "Preconceitos, estereótipos e outras formas de discriminação social",
    "objective": "Distinguir estereótipos, preconceitos e discriminação, reconhecer mecanismos individuais e institucionais, e interpretar dados de desigualdade sem inferir causalidade ou intenção automaticamente.",
    "prerequisites": [
      "Socialização e identidade",
      "Cultura e relações sociais",
      "Instituições e direitos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estereótipo, preconceito e discriminação não são sinônimos",
        "explanation": "Um estereótipo é uma generalização simplificadora atribuída a pessoas percebidas como integrantes de um grupo. Pode assumir forma aparentemente positiva, mas ainda reduzir diferenças individuais e sustentar expectativas injustas. Preconceito refere-se a avaliação ou atitude prévia, frequentemente negativa, baseada em pertencimento presumido e não em exame individual adequado. Discriminação é tratamento desigual ou exclusão associados a critérios socialmente relevantes, como raça, gênero, origem, deficiência ou religião, conforme o contexto. Esses fenômenos se relacionam, mas não são idênticos: alguém pode reproduzir uma imagem estereotipada sem perceber suas implicações, e regras institucionais podem produzir resultados discriminatórios sem declaração explícita de hostilidade. A sociologia analisa como categorias sociais são aprendidas na família, na escola, na mídia e em organizações, e como afetam oportunidades. É importante distinguir uma descrição estatística de um julgamento sobre todos os indivíduos: médias de grupos não definem capacidades ou características de cada pessoa. Também não se deve confundir reconhecer desigualdades documentadas com atribuir automaticamente culpa individual a qualquer integrante de um grupo.",
        "example": "Uma empresa afirma que \"pessoas mais velhas não aprendem ferramentas digitais\" e deixa de convidar candidatos experientes para treinamento. A frase é um estereótipo generalizador; a avaliação negativa pode expressar preconceito; a exclusão concreta do treinamento configura uma prática discriminatória no exemplo.",
        "pitfall": "Não use preconceito, estereótipo e discriminação como palavras intercambiáveis. Identifique separadamente a generalização, a atitude avaliativa e a ação ou regra de tratamento desigual.",
        "steps": [
          "Identifique a generalização feita sobre o grupo.",
          "Distinga atitude ou julgamento de comportamento observável.",
          "Avalie consequências sobre acesso a direitos e oportunidades."
        ]
      },
      {
        "level": "intermediate",
        "title": "Desigualdade estrutural e práticas institucionais",
        "explanation": "Instituições estabelecem regras, critérios e rotinas que podem distribuir oportunidades de maneira desigual. Uma norma aparentemente neutra pode afetar grupos de modo diferente quando ignora barreiras pré-existentes, como acessibilidade, distância, renda ou acesso desigual à informação. A análise sociológica exige examinar resultados e mecanismos: uma diferença estatística entre grupos é um indício para investigação, mas não prova isoladamente discriminação ou uma causa específica. É preciso considerar população comparável, variáveis relevantes, critérios adotados e efeitos das decisões. Discriminação direta ocorre quando uma pessoa é tratada de forma menos favorável por uma característica protegida, em contexto jurídico aplicável; discriminação indireta pode surgir de critério aparentemente neutro que produz desvantagem desproporcional sem justificativa adequada. Termos legais variam conforme ordenamento e caso. Políticas de inclusão, transparência de critérios e canais de recurso podem reduzir barreiras, mas precisam ser avaliadas por indicadores concretos e participação das pessoas afetadas. O objetivo sociológico não é substituir evidência por impressão, e sim compreender como decisões individuais e estruturas sociais interagem.",
        "example": "Uma escola oferece inscrição para bolsas apenas por formulário online que não funciona com leitores de tela. Mesmo sem declaração de intenção de excluir, estudantes com deficiência visual podem enfrentar barreira concreta. Para investigar o problema, é necessário testar acessibilidade, verificar alternativas de inscrição e comparar taxas de participação.",
        "pitfall": "Não conclua que qualquer diferença de porcentagens prova, por si só, intenção discriminatória. Procure mecanismos, comparações adequadas e evidências sobre regras e consequências.",
        "steps": [
          "Identifique critérios institucionais e grupos potencialmente afetados.",
          "Verifique dados, comparabilidade e barreiras específicas.",
          "Proponha medidas e indicadores para avaliar se houve redução da exclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Interseccionalidade, mídia e leitura crítica de indicadores",
        "explanation": "Interseccionalidade é uma abordagem que examina como relações sociais e formas de desigualdade podem interagir, sem presumir que experiências sejam simplesmente a soma aritmética de categorias. A posição de uma pessoa no mercado de trabalho, por exemplo, pode envolver simultaneamente gênero, raça, classe, território e deficiência, com mecanismos diferentes conforme setor e região. Estudos sociológicos utilizam entrevistas, observação, séries históricas e indicadores quantitativos para identificar padrões e hipóteses. Uma notícia que divulga apenas porcentagem relativa pode esconder diferenças de tamanho de amostra; por outro lado, um caso individual não autoriza generalizar toda a população. Algoritmos de seleção também podem reproduzir padrões históricos se treinados em dados marcados por exclusão; isso exige auditoria de desempenho e impactos, e não a suposição de que tecnologia seja neutra ou inevitavelmente discriminatória. Ao comparar políticas, examine metas, critérios de elegibilidade, custos, resultados e efeitos imprevistos. A análise responsável evita atribuir intenções pessoais sem prova e evita apagar desigualdades persistentes por falta de ofensas explícitas.",
        "example": "Uma seleção automatizada usa dados de contratações passadas, em que candidatos de certas regiões tiveram menos oportunidades. Mesmo que o algoritmo não utilize explicitamente o nome da região, variáveis correlacionadas podem reproduzir diferenças. Uma auditoria deve testar resultados por grupos comparáveis e investigar variáveis, critérios e possíveis correções.",
        "pitfall": "Não trate correlação estatística como prova imediata de causa nem suponha que retirar uma variável sensível garanta ausência de efeitos desiguais. O mecanismo e os resultados precisam ser examinados.",
        "steps": [
          "Defina quais grupos e variáveis são relevantes para a hipótese.",
          "Compare evidências quantitativas e qualitativas, com atenção a amostras.",
          "Avalie mecanismos institucionais e possíveis intervenções verificáveis."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma empresa presume que pessoas mais velhas não aprendem tecnologia e por isso as exclui de um curso. A exclusão é exemplo de:",
        "options": [
          "Apenas uma medição neutra de desempenho.",
          "Uma relação de causalidade científica demonstrada.",
          "Uma opinião sem efeito institucional.",
          "Discriminação apoiada em estereótipo."
        ],
        "correctIndex": 3,
        "hint": "Distinga a crença generalizadora da ação de excluir.",
        "solution": "A alternativa D está correta: a generalização sobre idade é um estereótipo, e impedir acesso ao curso com base nela é uma prática discriminatória. Não há avaliação individual nem demonstração científica."
      },
      {
        "level": "intermediate",
        "prompt": "Uma regra escolar de inscrição online impede o uso de leitores de tela. Qual investigação é mais adequada?",
        "options": [
          "Afirmar que não há problema porque a regra é igual para todos.",
          "Verificar barreiras de acessibilidade, participação e alternativas oferecidas.",
          "Concluir que todos os funcionários tiveram intenção de excluir.",
          "Ignorar os efeitos por não haver ofensa explícita."
        ],
        "correctIndex": 1,
        "hint": "Uma regra aparentemente igual pode gerar barreiras concretas.",
        "solution": "A alternativa B está correta: a análise institucional considera acessibilidade real e efeitos sobre participação. Igualdade formal não garante ausência de barreiras, mas intenção individual também não deve ser presumida."
      },
      {
        "level": "advanced",
        "prompt": "Ao investigar possível viés em seleção automatizada, qual procedimento é mais rigoroso?",
        "options": [
          "Comparar resultados entre grupos adequados e investigar variáveis e mecanismos.",
          "Concluir que todo algoritmo é neutro por definição.",
          "Usar um único caso para inferir a situação de toda população.",
          "Retirar uma variável e declarar o sistema automaticamente justo."
        ],
        "correctIndex": 0,
        "hint": "A análise deve combinar evidência estatística e mecanismo causal.",
        "solution": "A alternativa A está correta: comparar grupos, testar resultados e examinar variáveis permite investigar possíveis efeitos discriminatórios. As demais respostas assumem neutralidade ou causalidade sem avaliação suficiente."
      }
    ]
  }
];
