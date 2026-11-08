import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Tenth batch: cartography and applied ethics, with original three-level MCQ pedagogy. */
export const provaoDepthBatch10GeoEthics:readonly DeepTopicSpec[]=[
  {
    "subject": "Geografia",
    "topicStart": "A cartografia como recurso para a compreensão espacial dos fenômenos geográficos",
    "objective": "Interpretar mapas, escala, legenda, orientação, projeções e representação temática, com cálculo de distâncias e avaliação crítica das distorções cartográficas.",
    "prerequisites": [
      "Razão e proporção",
      "Pontos cardeais",
      "Leitura de gráficos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Mapa, escala e orientação: linguagem espacial",
        "explanation": "Cartografia é o conjunto de conhecimentos e técnicas usados para representar espacialmente fenômenos. Um mapa seleciona informações e emprega símbolos, cores, convenções e escala, portanto não é uma cópia neutra ou completa da realidade. A legenda explica o significado dos símbolos e a orientação permite interpretar direções; o norte indicado em muitos mapas é uma convenção de referência, não uma garantia de que toda imagem esteja orientada da mesma forma. A escala numérica 1:100.000 significa que uma unidade medida no mapa corresponde a cem mil unidades iguais no terreno. Assim, um centímetro no papel representa cem mil centímetros reais, isto é, um quilômetro. Escalas com denominadores menores, como 1:10.000, representam áreas menores com maior detalhamento, quando se compara um mapa de mesmo tamanho físico; denominadores maiores reduzem o detalhamento disponível. A escala gráfica apresenta segmentos marcados com distâncias e pode continuar útil quando o mapa é ampliado ou reduzido proporcionalmente, desde que a barra seja redimensionada junto. Uma representação adequada também precisa de título, fonte e data, sobretudo quando apresenta dados que mudam no tempo.",
        "example": "Em um mapa de escala 1:200.000, duas cidades estão separadas por 3 cm. A distância horizontal aproximada no terreno é 3×200.000=600.000 cm, ou 6 km. A distância real de viagem pode ser maior, pois estradas contornam obstáculos e não seguem necessariamente uma linha reta.",
        "pitfall": "Não confunda escala grande com denominador grande: 1:10.000 é uma escala maior que 1:1.000.000. Também não interprete distância em linha reta como percurso rodoviário obrigatório.",
        "steps": [
          "Leia título, legenda, orientação, fonte e data.",
          "Converta a razão de escala para unidades coerentes.",
          "Distinga distância cartográfica de distância efetiva de deslocamento."
        ]
      },
      {
        "level": "intermediate",
        "title": "Projeções e representações temáticas",
        "explanation": "A superfície curva da Terra não pode ser projetada num plano sem distorções de forma, área, distância ou direção. Projeções cartográficas adotam compromissos diferentes. A projeção de Mercator é conforme, preservando ângulos locais, mas amplia intensamente áreas em altas latitudes; não é adequada para comparar diretamente tamanhos relativos de países. Projeções equivalentes preservam áreas, mas distorcem formas; projeções equidistantes conservam determinadas distâncias a partir de pontos ou linhas de referência, não todas as distâncias do mapa. Mapas temáticos representam distribuição de fenômenos como densidade populacional, precipitação e renda. Em mapas coropléticos, cores aplicadas a unidades territoriais costumam representar taxas ou proporções; usar números absolutos pode induzir interpretações enganosas quando regiões têm populações muito diferentes. O leitor deve conferir classes, intervalos, fonte e unidade. Uma região pintada com tom mais intenso não é necessariamente maior em quantidade absoluta: pode apresentar apenas maior taxa por habitante. A cartografia crítica questiona escolhas de classificação e projeção, pois elas influenciam a percepção visual de desigualdades.",
        "example": "Imagine duas cidades: A tem 100 ocorrências entre 10.000 moradores, e B tem 200 ocorrências entre 100.000. A taxa por mil habitantes é 10 em A e 2 em B. Embora B tenha mais ocorrências absolutas, A apresenta taxa proporcionalmente maior. Um mapa de risco comparável deve explicitar a variável e a unidade.",
        "pitfall": "Não conclua que a projeção de Mercator conserva áreas por manter formas locais. Tampouco compare taxas e totais absolutos como se fossem o mesmo indicador territorial.",
        "steps": [
          "Identifique qual propriedade a projeção privilegia.",
          "Leia a variável temática e sua unidade de medida.",
          "Compare regiões com indicadores normalizados quando necessário."
        ]
      },
      {
        "level": "advanced",
        "title": "Coordenadas, escala e limites das inferências espaciais",
        "explanation": "Latitude mede posição angular ao norte ou sul do Equador, e longitude mede posição a leste ou oeste do meridiano de referência. Essas coordenadas localizam pontos, mas não fornecem diretamente altitude, distância de percurso ou condições sociais do território. Sistemas de informações geográficas combinam camadas de dados, como relevo, redes de transporte, cobertura vegetal e população, permitindo analisar relações espaciais. Uma sobreposição cartográfica pode revelar correlação entre áreas de risco e ocupação urbana, mas não comprova sozinha causalidade; é preciso investigar histórico de ocupação, drenagem, declividade e condições socioeconômicas. Escala de análise também importa: uma média municipal pode esconder bairros muito diferentes, fenômeno relacionado ao problema da unidade espacial modificável. Comparar mapas de anos diferentes requer conferir metodologia, limites territoriais e categorias. Em imagens de satélite, a resolução espacial limita o tamanho dos objetos distinguíveis, e a resolução temporal condiciona a frequência de observações. Portanto, o mapa deve ser tratado como argumento visual baseado em dados, com potencialidades e limites explicitados.",
        "example": "Um município apresenta taxa média de arborização de 40%, mas um mapa por bairro mostra setores com 10% e outros com 70%. A média municipal não descreve adequadamente a exposição local ao calor. Cruzar cobertura vegetal com temperatura de superfície pode sugerir hipóteses, mas a explicação exige considerar materiais urbanos, horário e relevo.",
        "pitfall": "Não infira causa apenas porque duas camadas geográficas se sobrepõem. Correlações espaciais podem refletir fatores de confusão e a agregação por município pode esconder desigualdades internas.",
        "steps": [
          "Defina coordenadas, recorte espacial e período dos dados.",
          "Compare camadas com unidades e resoluções compatíveis.",
          "Distinga padrões observados de hipóteses causais que exigem outras evidências."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um mapa na escala 1:200.000, a distância de 3 cm corresponde a aproximadamente:",
        "options": [
          "600 m",
          "3 km",
          "6 km",
          "60 km"
        ],
        "correctIndex": 2,
        "hint": "Converta centímetros reais em quilômetros após multiplicar pela escala.",
        "solution": "A alternativa C está correta: 3×200.000=600.000 cm, equivalentes a 6.000 m ou 6 km. O cálculo representa distância horizontal no terreno, não necessariamente a extensão de uma estrada."
      },
      {
        "level": "intermediate",
        "prompt": "Por que Mercator não é a melhor projeção para comparar a área de países?",
        "options": [
          "Porque amplia áreas em altas latitudes, embora preserve ângulos locais.",
          "Porque não permite representar longitudes.",
          "Porque elimina todas as distorções de forma.",
          "Porque transforma todos os países em áreas iguais."
        ],
        "correctIndex": 0,
        "hint": "Compare preservação de ângulos com preservação de áreas.",
        "solution": "A alternativa A está correta: Mercator é conforme e distorce áreas, sobretudo próximo aos polos. Projeções equivalentes são preferíveis para comparação visual de tamanhos territoriais."
      },
      {
        "level": "advanced",
        "prompt": "Um mapa municipal mostra arborização média de 40%, mas bairros variam de 10% a 70%. Qual conclusão é mais adequada?",
        "options": [
          "Todos os bairros possuem exatamente 40% de arborização.",
          "A média prova que a arborização não afeta o ambiente.",
          "A diferença entre bairros comprova uma única causa social.",
          "A agregação municipal pode ocultar desigualdades espaciais importantes."
        ],
        "correctIndex": 3,
        "hint": "Uma média não representa necessariamente cada unidade interna.",
        "solution": "A alternativa D está correta: a média municipal pode esconder variação local relevante. Para explicar causas e efeitos, é necessário examinar dados por bairro e outras variáveis ambientais e sociais."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topicStart": "Questões éticas contemporâneas",
    "objective": "Aplicar perspectivas consequencialistas, deontológicas e da ética das virtudes a dilemas atuais, distinguindo descrição factual, juízo moral e justificação argumentativa.",
    "prerequisites": [
      "Ética e moral",
      "Argumentos e premissas",
      "Direitos e deveres"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ética, moral e justificativa de decisões",
        "explanation": "Moral pode designar conjuntos de normas, valores e costumes que orientam condutas em grupos e sociedades. Ética, no uso filosófico, investiga criticamente fundamentos e justificações desses valores e das ações. A diferença não é rígida em todos os autores, mas ajuda a separar seguir uma regra de examinar por que ela deveria valer. Em um dilema, dizer que uma ação é comum descreve um comportamento; afirmar que ela é correta envolve julgamento normativo. Popularidade não prova legitimidade moral. Uma boa análise identifica quem é afetado, quais consequências podem ocorrer, que direitos e deveres estão envolvidos e quais valores entram em conflito. Por exemplo, publicar uma fotografia de colega sem consentimento pode parecer inofensivo para quem publica, mas envolve privacidade, autonomia e possíveis danos. O problema não se resolve somente pela intenção de divertir: é necessário considerar perspectivas dos envolvidos e critérios públicos de justificativa. Argumentar eticamente exige premissas explícitas, evidências relevantes e coerência entre casos semelhantes. A reflexão filosófica não elimina desacordos, mas permite reconhecer pressupostos e avaliar razões.",
        "example": "Um estudante encontra o celular de outra pessoa e considera mantê-lo porque ninguém viu. A afirmação \"ninguém viu\" descreve ausência de testemunhas, mas não justifica moralmente apropriar-se do objeto. Uma análise ética examina propriedade, confiança, possíveis danos e dever de devolução, independentemente da chance de punição.",
        "pitfall": "Não confunda o fato de uma conduta ser frequente com a conclusão de que ela é moralmente correta. Também não use apenas a intenção declarada para ignorar consequências previsíveis.",
        "steps": [
          "Separe descrição factual de julgamento moral.",
          "Identifique pessoas afetadas, valores e possíveis danos.",
          "Formule uma justificativa que possa ser debatida publicamente."
        ]
      },
      {
        "level": "intermediate",
        "title": "Consequências, deveres e caráter: três lentes éticas",
        "explanation": "Teorias éticas oferecem critérios diferentes para avaliar ações. Perspectivas consequencialistas atribuem peso central aos resultados das decisões; uma formulação utilitarista considera efeitos sobre bem-estar agregado, embora existam divergências sobre como medi-lo. Perspectivas deontológicas enfatizam deveres, princípios e restrições que não podem ser descartados apenas por vantagens esperadas. A ética das virtudes, associada à tradição aristotélica e a releituras atuais, considera disposições de caráter, prudência e formação de hábitos que orientam boas escolhas. Essas abordagens não devem ser confundidas com slogans: consequencialismo não significa automaticamente \"vale tudo\"; deontologia não dispensa reflexão sobre conflitos entre deveres; virtudes não equivalem a reputação pública. Em uma decisão escolar sobre compartilhar dados pessoais para prevenir riscos, uma análise consequencialista examina benefícios e danos prováveis, uma deontológica considera direitos à privacidade e deveres institucionais, e uma abordagem das virtudes pergunta como prudência e responsabilidade orientam a decisão. Diferentes teorias podem concordar em uma conclusão por justificações distintas.",
        "example": "Uma escola propõe publicar as notas individuais de todos para incentivar estudos. Pela lente consequencialista, avaliam-se efeitos sobre aprendizagem, exposição e ansiedade; pela deontológica, privacidade e respeito aos estudantes; pela ética das virtudes, prudência, justiça e cuidado na formação da comunidade. A mesma proposta recebe perguntas distintas.",
        "pitfall": "Não reduza teorias complexas a fórmulas automáticas. Uma ação com benefício aparente pode ferir direitos, e uma regra abstrata pode exigir interpretação cuidadosa em situações concretas.",
        "steps": [
          "Defina o critério principal de cada perspectiva ética.",
          "Aplique as três lentes ao mesmo dilema com evidências.",
          "Compare convergências, divergências e limitações das justificações."
        ]
      },
      {
        "level": "advanced",
        "title": "Tecnologia, responsabilidade e incerteza moral",
        "explanation": "Dilemas éticos contemporâneos incluem inteligência artificial, privacidade, justiça ambiental, saúde e distribuição de riscos. Em sistemas automatizados, eficiência não é critério suficiente: decisões podem afetar direitos, produzir erros assimétricos e limitar possibilidade de contestação. Uma análise responsável examina transparência, proporcionalidade, proteção de dados, revisão humana e reparação. Em políticas ambientais, efeitos sobre gerações futuras criam problemas de responsabilidade intergeracional, pois pessoas ainda não nascidas não podem participar diretamente da decisão atual. A incerteza científica exige distinguir riscos conhecidos, hipóteses e cenários; precaução não significa paralisar qualquer inovação, mas considerar gravidade, reversibilidade e alternativas proporcionais. O raciocínio ético pode integrar consequências, direitos e virtudes sem fingir que as teorias são idênticas. É importante também separar a legalidade de uma prática de sua justificação moral: algo pode ser permitido e ainda merecer crítica ética, ou ser socialmente aprovado apesar de violar direitos. Em questões objetivas, a melhor alternativa frequentemente é a que reconhece tensões reais e propõe critérios verificáveis, em vez de uma resposta absoluta sem fundamentação.",
        "example": "Uma prefeitura cogita usar reconhecimento facial em todas as escolas. Antes de decidir, deveria avaliar necessidade, precisão, vieses, proteção de dados, alternativas menos invasivas e mecanismos de recurso. Um possível ganho de controle de acesso não elimina automaticamente o dever de respeitar privacidade e reduzir riscos de erro.",
        "pitfall": "Não conclua que uma tecnologia é ética apenas por ser legal, moderna ou eficiente. Avaliar impactos, direitos e mecanismos de correção é parte indispensável da justificativa.",
        "steps": [
          "Identifique riscos, benefícios, direitos e grupos afetados.",
          "Compare alternativas e evidências, incluindo incertezas e reversibilidade.",
          "Proponha critérios de governança, revisão e responsabilização."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual frase apresenta um juízo moral, e não apenas uma descrição factual?",
        "options": [
          "Muitos estudantes utilizam redes sociais.",
          "O uso de redes sociais cresceu na escola.",
          "O aplicativo foi lançado no ano passado.",
          "É injusto divulgar dados pessoais sem consentimento."
        ],
        "correctIndex": 3,
        "hint": "Procure uma avaliação normativa como justo ou injusto.",
        "solution": "A alternativa D está correta: afirmar que uma prática é injusta envolve avaliação moral. As demais frases descrevem comportamentos ou acontecimentos, sujeitos a verificação empírica."
      },
      {
        "level": "intermediate",
        "prompt": "Uma análise deontológica sobre divulgar notas individuais enfatizaria principalmente:",
        "options": [
          "O número de visualizações da publicação.",
          "Os direitos à privacidade e os deveres de respeito aos estudantes.",
          "A popularidade da iniciativa entre os colegas.",
          "A velocidade do software usado para divulgar notas."
        ],
        "correctIndex": 1,
        "hint": "A deontologia enfatiza deveres e princípios.",
        "solution": "A alternativa B está correta: direitos e deveres são centrais na avaliação deontológica. Popularidade, velocidade ou visualizações não substituem a justificação por princípios."
      },
      {
        "level": "advanced",
        "prompt": "Ao avaliar reconhecimento facial em escolas, qual postura é eticamente mais fundamentada?",
        "options": [
          "Analisar necessidade, precisão, privacidade, alternativas e possibilidade de contestação.",
          "Adotar automaticamente porque a tecnologia é recente.",
          "Rejeitar toda avaliação de riscos por ser uma questão apenas técnica.",
          "Aceitar qualquer uso desde que reduza custos, sem examinar direitos."
        ],
        "correctIndex": 0,
        "hint": "Considere efeitos e direitos, além de mecanismos de revisão.",
        "solution": "A alternativa A está correta: uma avaliação ética robusta considera benefícios, riscos, direitos, alternativas e prestação de contas. As outras opções usam um critério único e ignoram consequências relevantes."
      }
    ]
  }
];
