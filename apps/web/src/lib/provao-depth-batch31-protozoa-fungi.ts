import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo autoral Kognos, não oficial, sem homologação docente ou função clínica. */
export const provaoDepthBatch31ProtozoaFungi:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Doenças humanas causadas por fungos e protozoários (amebíase, malária, doença de Chagas e…",
    "objective": "Distinguir agentes etiológicos e vias de transmissão de protozooses e micoses, interpretar indicadores epidemiológicos e relacionar medidas preventivas aos ciclos biológicos sem confundir sinais clínicos com diagnóstico.",
    "prerequisites": [
      "Classificação biológica de fungos e protozoários",
      "Relações entre hospedeiro, agente etiológico e vetor",
      "Porcentagens, proporções e medidas de frequência"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Protozooses: agentes, transmissão e etapas do ciclo",
        "explanation": "As protozooses são infecções causadas por organismos eucariontes unicelulares de diferentes grupos; classificá-las apenas como doenças transmitidas por insetos é incorreto. A amebíase intestinal, causada por Entamoeba histolytica, pode ocorrer após ingestão de cistos em água ou alimentos contaminados por material fecal. Já a malária envolve espécies do gênero Plasmodium e, em sua via clássica de transmissão, a picada de fêmeas infectadas do mosquito Anopheles; o mosquito atua como vetor biológico, não como agente etiológico da infecção humana. A doença de Chagas é causada por Trypanosoma cruzi e pode ser transmitida quando formas infectantes presentes nas fezes de triatomíneos alcançam mucosas ou lesões na pele. A picada do inseto, por si só, não é a principal explicação desse mecanismo, e existem também vias oral, congênita e transfusional em contextos específicos. Para investigar uma doença, deve-se separar o microrganismo causador, o reservatório, o vetor quando existente e a porta de entrada. O ciclo de transmissão determina medidas preventivas adequadas, como saneamento e segurança da água na amebíase, controle vetorial e vigilância na malária e em Chagas. Uma mesma febre não permite diagnosticar automaticamente qualquer uma dessas infecções.",
        "example": "Em uma região, relatam-se 30 casos de uma infecção transmitida por alimentos e água com cistos de E. histolytica. O mecanismo é fecal-oral, não transmissão obrigatória pela picada de mosquito. O exemplo orienta a prevenção para água, higiene e saneamento, não para repelentes como medida principal.",
        "pitfall": "Não confunda mosquito Anopheles com Plasmodium, nem atribua a infecção chagásica principalmente à saliva do barbeiro; identifique o mecanismo de entrada.",
        "steps": [
          "Relacione cada doença ao agente etiológico nomeado.",
          "Identifique a via de transmissão e o vetor quando houver.",
          "Selecione prevenção coerente com o ciclo real, sem inferir diagnóstico."
        ]
      },
      {
        "level": "intermediate",
        "title": "Fungos patogênicos, micoses e diagnóstico responsável",
        "explanation": "Fungos constituem um reino de seres eucariontes heterotróficos que pode incluir leveduras e organismos filamentosos, muitos deles com função ecológica importante. Algumas espécies, porém, causam micoses superficiais, cutâneas ou sistêmicas sob circunstâncias próprias. Dermatofitoses, como certas tinhas, afetam tecidos queratinizados; fungos dermatófitos utilizam componentes da pele, cabelos ou unhas como substrato. Candidíase pode envolver leveduras do gênero Candida, que em determinados locais também podem integrar a microbiota, tornando o contexto biológico e clínico relevante. A transmissão e o risco variam entre agentes: não se deve afirmar que toda micose é transmitida exclusivamente por contato com outra pessoa, pois existem fontes ambientais e fatores do próprio hospedeiro. Diferenciar fungos de protozoários impede escolher indiscriminadamente medidas de prevenção ou agentes terapêuticos. Condições de umidade, integridade de barreiras, resposta imunológica e exposição podem influenciar risco, mas observar uma lesão cutânea não estabelece o agente por aparência. Em pesquisas populacionais, medidas de casos devem indicar período, denominador e critérios diagnósticos. O estudo escolar não substitui avaliação profissional nem autoriza prescrever medicamentos a partir de uma hipótese.",
        "example": "Em uma amostra escolar, 12 de 240 pessoas relatam lesões de pele, sem diagnóstico etiológico confirmado. A proporção é 12/240=0,05=5%. Ela expressa relatos de lesão, não prevalência comprovada de dermatofitose, pois outras causas podem produzir sintomas parecidos.",
        "pitfall": "Não atribuir toda coceira a fungos, nem chamar Candida de protozoário. Dados de sintomas sem confirmação não identificam o agente causador.",
        "steps": [
          "Diferencie fungos e protozoários pela classificação biológica.",
          "Associe micose ao tecido afetado e às possíveis fontes de exposição.",
          "Interprete dados e limitações diagnósticas sem prescrever tratamento."
        ]
      },
      {
        "level": "advanced",
        "title": "Epidemiologia, prevenção e comparação entre vetores",
        "explanation": "A interpretação epidemiológica exige distinguir incidência, medida de casos novos em determinado intervalo, e prevalência, quantidade de casos existentes em uma população num momento ou período definido. Para comparar regiões, o denominador importa: cem casos numa cidade de um milhão de habitantes não têm a mesma frequência populacional que cem casos em dez mil habitantes. Mesmo taxas aparentes podem depender de testagem, notificações, mobilidade, sazonalidade e acesso ao sistema de saúde. No caso da malária, o controle de mosquitos vetores e a prevenção de exposição são relevantes, mas o ciclo também envolve parasitas no sangue humano e etapas no inseto, razão pela qual uma abordagem isolada pode ser insuficiente. A doença de Chagas exige vigilância de triatomíneos, cuidado com alimentos em situações de risco e investigação de outras vias pertinentes. Na amebíase, água potável, higiene e saneamento reduzem exposição fecal-oral. Para micoses, medidas específicas dependem do agente, do local de acometimento e das circunstâncias. A categorização 'doenças tropicais' não fornece, sozinha, a via de transmissão de cada infecção. A prevenção coletiva fundamenta-se em ciclos conhecidos e dados epidemiológicos, enquanto sintomas individuais exigem assistência de saúde quando necessário.",
        "example": "Uma cidade A detecta 80 novos casos em 20.000 habitantes num ano; a incidência anual simplificada é 80/20.000×1.000=4 por mil. Na cidade B, 120 em 60.000 equivalem a 2 por mil. Embora B tenha mais casos absolutos, A tem taxa maior, assumindo critérios comparáveis.",
        "pitfall": "Não comparar risco apenas pelo número absoluto de casos, nem extrapolar uma estratégia de controle de mosquito para infecções de via exclusivamente fecal-oral.",
        "steps": [
          "Defina casos novos, período e população sob risco.",
          "Calcule taxas com denominadores e unidades explícitas.",
          "Associe intervenção preventiva ao agente e à transmissão demonstrada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na doença de Chagas, o agente etiológico e uma via clássica de infecção são:",
        "options": [
          "Plasmodium e picada de Anopheles",
          "Trypanosoma cruzi e contato com fezes infectantes de triatomíneos",
          "Entamoeba histolytica e inalação de esporos",
          "Candida e água contaminada por cistos"
        ],
        "correctIndex": 1,
        "hint": "Compare agente causador, mecanismo de transmissão e denominador epidemiológico.",
        "solution": "A doença de Chagas é causada por Trypanosoma cruzi. Uma via clássica ocorre quando material fecal infectante de triatomíneos alcança mucosas ou lesões cutâneas, e não simplesmente pela saliva do inseto."
      },
      {
        "level": "intermediate",
        "prompt": "Em 240 pessoas, 12 relatam lesões cutâneas sem exame etiológico. O que os dados permitem afirmar?",
        "options": [
          "Há 12 casos confirmados de dermatofitose",
          "A incidência anual de micose é 50%",
          "5% relataram lesão, mas não há comprovação de causa fúngica",
          "Todas as lesões foram produzidas por Candida"
        ],
        "correctIndex": 2,
        "hint": "Compare agente causador, mecanismo de transmissão e denominador epidemiológico.",
        "solution": "A proporção de relatos é 12/240=0,05=5%. Como não houve confirmação etiológica, não se pode declarar que todos os relatos são infecções fúngicas; sintomas semelhantes podem resultar de causas diferentes."
      },
      {
        "level": "advanced",
        "prompt": "Cidade A: 80 casos novos/20.000 habitantes; B: 120/60.000 no ano. Qual taxa anual por mil é maior?",
        "options": [
          "A, com 4 por mil, contra 2 por mil de B",
          "B, porque tem 120 casos absolutos",
          "As duas têm 6 por mil",
          "Não se pode calcular qualquer taxa com denominadores"
        ],
        "correctIndex": 0,
        "hint": "Compare agente causador, mecanismo de transmissão e denominador epidemiológico.",
        "solution": "A taxa simplificada de A é 80/20.000×1.000=4 por mil, e a de B é 120/60.000×1.000=2 por mil. Números absolutos maiores não implicam necessariamente maior incidência proporcional."
      }
    ]
  }
];
