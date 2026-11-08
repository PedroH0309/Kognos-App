import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original, não oficial, sem homologação docente. */
export const provaoDepthBatch27Investigation:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Procedimentos sistemáticos de investigação (elaboração de hipóteses, experimentação e…",
    "objective": "Planejar e analisar investigações biológicas com hipóteses testáveis, controles, réplicas, variáveis operacionais e inferência responsável, interpretando taxas e distinguindo simulação, associação e causalidade.",
    "prerequisites": [
      "Método científico e registro de observações",
      "Razões, porcentagens e gráficos",
      "Variabilidade de organismos e amostragem"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Problema, hipótese e variáveis operacionais",
        "explanation": "Uma investigação biológica começa com uma pergunta delimitada e com a formulação de hipótese que produza uma previsão observável. Dizer que uma planta 'gosta de sol' não especifica uma relação testável; afirmar que mudas de mesma espécie, expostas a duas intensidades luminosas distintas, apresentarão diferenças de crescimento em catorze dias já permite planejar medidas. A variável independente é a condição manipulada, enquanto a dependente é a resposta observada, como a variação da altura. Temperatura, água, tipo de solo e idade das mudas precisam ser controlados ou monitorados para reduzir explicações alternativas. Uma previsão antecede a coleta, e o dado é o registro efetivamente observado; confundir as duas coisas permite ajustar a narrativa ao resultado. Uma hipótese não precisa ser confirmada para que a pesquisa seja informativa: um resultado divergente pode revelar erro na previsão ou limitação do protocolo. Métodos observacionais e simulações também têm valor, mas em geral não oferecem automaticamente a mesma inferência causal que um experimento controlado. O pesquisador deve registrar materiais, critérios e condições para permitir análise independente e repetição responsável.",
        "example": "Pergunta: salinidade afeta germinação? Distribua 60 sementes do mesmo lote em grupos de 20, sob 0%, 1% e 3% de sal. Mantenha iluminação, substrato e temperatura semelhantes. Após sete dias, conte sementes germinadas em cada grupo e compare proporções.",
        "pitfall": "Não trate uma opinião como hipótese operacionalizada; especifique variável manipulada, medida dependente, duração e condições comparáveis.",
        "steps": [
          "Formule uma pergunta mensurável.",
          "Separe hipótese, previsão e variáveis.",
          "Planeje observações e critérios de registro."
        ]
      },
      {
        "level": "intermediate",
        "title": "Controles, aleatorização e réplicas independentes",
        "explanation": "Um experimento busca isolar a influência de um fator, não eliminar toda a variabilidade dos seres vivos. Um controle sem tratamento relevante permite comparar o que ocorreria em condições de referência; um grupo de controle ainda deve receber os demais cuidados previstos no protocolo. Distribuição aleatória das unidades experimentais ajuda a evitar que plantas maiores, animais mais velhos ou amostras de uma única origem se concentrem em um grupo. Replicação biológica exige unidades independentes: medir dez folhas de uma única árvore não equivale a estudar dez árvores. Repetir a medição com o mesmo instrumento aumenta informações sobre precisão, mas não resolve a falta de unidades biológicas independentes. O avaliador pode ser cegado para reduzir viés de observação quando a resposta exige julgamento. Proporções exigem denominadores conhecidos: se germinam 18 de 20 sementes no controle e 12 de 20 no tratamento, os percentuais são 90% e 60%, respectivamente, diferença de 30 pontos percentuais. Esses números descrevem uma amostra; não garantem que o mesmo efeito ocorrerá em toda espécie, estação ou laboratório. Um desenho experimental adequado também prevê como registrar exclusões, perdas e dados inesperados.",
        "example": "Um ensaio compara 20 sementes sem sal e 20 com sal. No controle germinam 18: 18/20=0,90=90%. No tratamento germinam 12: 12/20=0,60=60%. A diferença é de 30 pontos percentuais. Verifique se eram sementes independentes e comparáveis.",
        "pitfall": "Não confunda três medições de um mesmo indivíduo com três réplicas independentes, nem confunda redução relativa percentual com diferença em pontos percentuais.",
        "steps": [
          "Defina controle e unidade experimental.",
          "Identifique réplicas e distribuição aleatória.",
          "Compare taxas com denominadores explícitos."
        ]
      },
      {
        "level": "advanced",
        "title": "Interpretação, simulação e limites da causalidade",
        "explanation": "A conclusão de uma investigação precisa responder à pergunta na extensão sustentada pelas evidências. Correlação não é prova automática de causalidade: dois fenômenos podem variar juntos devido a um terceiro fator. Em lagos, fósforo elevado e proliferação de algas podem estar associados, mas temperatura, circulação da água, chuva e alterações ecológicas precisam ser consideradas antes de atribuir uma causa exclusiva. Uma simulação computacional calcula consequências de um conjunto de equações e parâmetros; seus gráficos não constituem uma observação independente do ambiente real. Para avaliar sua validade, é necessário comparar previsões com medições, investigar sensibilidade a parâmetros e reconhecer condições em que o modelo deixa de funcionar. Apresentações responsáveis identificam eixos, unidades, tamanho amostral, incerteza e critérios de exclusão de dados. Uma média sem informações sobre variação pode esconder comportamentos muito diferentes. Resultados contrários à hipótese devem ser registrados, não removidos para aparentar confirmação. A investigação biológica ainda envolve ética: procedimentos com seres vivos e pessoas dependem das normas e autorizações pertinentes. A revisão pública de métodos e resultados faz parte de um processo científico corrigível.",
        "example": "Em 30 lagos, maior concentração de fósforo acompanha maior biomassa de algas. A observação indica associação nessa amostra; não comprova por si que fósforo é a causa única. Compare também temperatura, disponibilidade de luz e época do ano, e busque novos dados independentes.",
        "pitfall": "Não trate simulações como provas empíricas nem converta uma correlação entre variáveis em causalidade exclusiva sem considerar confundidores e amostragem.",
        "steps": [
          "Separe evidência observacional e hipótese causal.",
          "Avalie confundidores e limites da simulação.",
          "Apresente conclusões com incerteza e validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Ao variar a concentração de sal e medir germinação, a concentração de sal é a variável:",
        "options": [
          "Dependente",
          "Independente",
          "Resposta final",
          "Controle estatístico"
        ],
        "correctIndex": 1,
        "hint": "Identifique qual informação foi manipulada e qual foi observada.",
        "solution": "A salinidade é a condição que o pesquisador manipula e, por isso, constitui a variável independente. A germinação é o resultado medido, isto é, a variável dependente. Os demais fatores devem permanecer comparáveis."
      },
      {
        "level": "intermediate",
        "prompt": "Germinando 18/20 sementes no controle e 12/20 no tratamento, a diferença de taxas é:",
        "options": [
          "6%",
          "20 pontos percentuais",
          "30 pontos percentuais",
          "50 pontos percentuais"
        ],
        "correctIndex": 2,
        "hint": "Identifique qual informação foi manipulada e qual foi observada.",
        "solution": "As taxas são 18/20=90% e 12/20=60%. A subtração 90%-60% produz 30 pontos percentuais. Uma porcentagem de redução relativa teria outro denominador, por isso as duas medidas não devem ser confundidas."
      },
      {
        "level": "advanced",
        "prompt": "Sobre uma simulação de crescimento populacional, é correto afirmar:",
        "options": [
          "Depende de hipóteses e deve ser comparada a dados reais",
          "Prova a taxa futura da população sem observação",
          "Dispensa amostragem independente",
          "Confirma automaticamente a causalidade"
        ],
        "correctIndex": 0,
        "hint": "Identifique qual informação foi manipulada e qual foi observada.",
        "solution": "Uma simulação fornece resultados condicionais ao modelo escolhido. Para avaliar seu poder explicativo, é indispensável confrontá-la com observações independentes e examinar hipóteses, parâmetros e condições de validade."
      }
    ]
  }
];
