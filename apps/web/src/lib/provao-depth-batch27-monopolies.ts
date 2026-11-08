import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original, não oficial, sem homologação docente. */
export const provaoDepthBatch27Monopolies:readonly DeepTopicSpec[]=[
  {
    "subject": "História",
    "topicStart": "Avanço industrial e capitalismo monopolista",
    "objective": "Interpretar o avanço industrial do fim do século XIX, distinguir concentração horizontal e vertical, cartéis, trustes e holdings, e avaliar conflitos trabalhistas e respostas estatais com atenção às diferenças históricas.",
    "prerequisites": [
      "Primeira e Segunda Revoluções Industriais",
      "Capital, produtividade e mercado",
      "Industrialização e trabalho assalariado"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Segunda industrialização e escalas de produção",
        "explanation": "A chamada Segunda Revolução Industrial, em geral situada entre a segunda metade do século XIX e o início do século XX, expandiu setores como siderurgia, química, eletricidade, ferrovias e telecomunicações. Seu desenvolvimento não ocorreu da mesma maneira em todos os países nem substituiu imediatamente técnicas anteriores. Muitas atividades industriais passaram a demandar capital elevado para instalações, equipamentos, pesquisa, logística e matérias-primas. Firmas capazes de produzir grandes quantidades podiam reduzir custos médios em determinados setores, fenômeno conhecido como economia de escala. A concentração horizontal ocorre quando empresas do mesmo ramo se unem ou passam a ter comando comum; a integração vertical reúne diferentes etapas produtivas, da extração ao transporte e à venda. Esses processos ajudam a explicar a formação de grandes grupos, mas não significam que desapareceram todas as pequenas empresas ou que deixou de existir concorrência. Bancos, mercados financeiros e sociedades por ações ofereceram mecanismos importantes para reunir recursos. O termo capitalismo monopolista descreve uma tendência histórica à concentração e ao poder de mercado, não uma afirmação literal de que cada setor passou a ter um único produtor.",
        "example": "Uma siderúrgica compra uma siderúrgica concorrente: ocorre concentração horizontal, pois ambas realizam atividade semelhante. Se passa a controlar minas fornecedoras de minério e empresas de transporte, integra diferentes etapas da cadeia, exemplo de integração vertical.",
        "pitfall": "Não reduza toda a Segunda Revolução Industrial a uma inovação e não confunda empresa grande com monopólio automático sem analisar o mercado.",
        "steps": [
          "Situe as mudanças industriais no tempo.",
          "Compare concentração horizontal e vertical.",
          "Relacione escala, investimento e poder de mercado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Cartéis, trustes e holdings: mecanismos distintos",
        "explanation": "Cartel é um arranjo em que empresas juridicamente independentes coordenam condutas competitivas, por exemplo combinando preços, produção ou territórios de comercialização. Truste, em uso histórico relacionado ao fim do século XIX nos Estados Unidos, descreveu mecanismos de centralização de controle de empresas antes separadas e ganhou sentido mais amplo no debate público. Holding é uma sociedade cuja função relevante é deter participações de outras empresas e, quando possui controle suficiente, dirigir decisões corporativas. Os conceitos não são equivalentes: empresas de um cartel podem continuar sem propriedade comum, enquanto uma holding coordena negócios por meio de vínculos societários. A integração vertical pode existir dentro de uma única empresa ou de um grupo controlado por diversas sociedades. Esses mecanismos podem produzir ganhos de escala ou logística, mas também criar barreiras à entrada de concorrentes e ampliar o poder sobre fornecedores, consumidores ou trabalhadores. A existência de concentração, por si só, não demonstra que uma conduta específica viola a legislação de determinada época: normas e práticas variaram no tempo e entre países. Para analisar um caso, é necessário verificar contratos, participação de mercado, forma de controle e efeitos concretos.",
        "example": "Três refinarias independentes combinam vender pelo mesmo preço: há um cartel de preços. Se uma companhia adquire ações e passa a controlar as três refinarias, o mecanismo pode caracterizar uma holding. O efeito coordenador existe nos dois casos, mas a forma jurídica é distinta.",
        "pitfall": "Não usar cartel, truste e holding como sinônimos perfeitos: acordo entre concorrentes é diferente de controle societário ou administração centralizada.",
        "steps": [
          "Identifique autonomia e controle das empresas.",
          "Separe cartel, truste e holding por mecanismos.",
          "Interprete efeitos econômicos sem pressupor ilegalidade."
        ]
      },
      {
        "level": "advanced",
        "title": "Conflitos trabalhistas e respostas institucionais",
        "explanation": "A expansão da indústria e das grandes corporações reorganizou a vida urbana, os transportes, o trabalho assalariado e os mercados. Contudo, aumento da produtividade não implicou repartição automática dos ganhos econômicos. Jornadas prolongadas, acidentes, baixos salários e conflitos sobre organização sindical marcaram diferentes setores industriais, enquanto movimentos trabalhistas reivindicavam proteção e melhores condições. O crescimento de grupos poderosos também provocou debates sobre política tarifária, serviços ferroviários, regulação bancária e concorrência. Nos Estados Unidos, o Sherman Antitrust Act foi aprovado em 1890, como resposta institucional ao poder de combinações empresariais; sua existência não eliminou de imediato as concentrações e sua interpretação jurídica mudou com o tempo. Outros países adotaram trajetórias próprias de intervenção estatal e organização empresarial. Ao analisar um gráfico de produção industrial, é necessário distinguir crescimento agregado de bem-estar: produção mais alta não revela sozinha a distribuição de renda ou as condições de trabalho. Fontes sindicais, empresariais, estatísticas e legislativas devem ser confrontadas, considerando posições e interesses. As transformações industriais foram simultaneamente tecnológicas, sociais e políticas, além de produzir impactos ambientais que variaram por região.",
        "example": "Construa uma linha do tempo: expansão das grandes corporações no fim do século XIX; aprovação do Sherman Antitrust Act em 1890; disputas posteriores sobre sua aplicação. A aprovação de uma regra mostra reação política, mas não prova a eliminação imediata de trustes.",
        "pitfall": "Não apresentar regulação antitruste como solução instantânea para concentração e não inferir melhoria universal de salários apenas pelo crescimento da produção.",
        "steps": [
          "Avalie condições de trabalho e movimentos sociais.",
          "Contextualize legislação e debates sobre monopólios.",
          "Confronte indicadores de produção e distribuição de ganhos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma siderúrgica adquire minas que fornecem seu minério. O processo é:",
        "options": [
          "Integração vertical",
          "Cartel de preços",
          "Desconcentração econômica",
          "Concorrência perfeita"
        ],
        "correctIndex": 0,
        "hint": "Compare estruturas empresariais e localize os acontecimentos na cronologia.",
        "solution": "A empresa passa a controlar uma etapa anterior da cadeia produtiva, caracterizando integração vertical. Uma aquisição de siderúrgica concorrente seria horizontal; cartel envolve acordo de condutas entre empresas separadas."
      },
      {
        "level": "intermediate",
        "prompt": "Três empresas independentes combinam preços de venda. Isso caracteriza:",
        "options": [
          "Uma holding necessariamente",
          "Economia planificada",
          "Um cartel",
          "Descentralização do mercado"
        ],
        "correctIndex": 2,
        "hint": "Compare estruturas empresariais e localize os acontecimentos na cronologia.",
        "solution": "Acordos de preços entre concorrentes juridicamente independentes caracterizam cartel. Uma holding exerce controle por participações societárias, de modo que não é sinônimo de acordo comercial entre empresas separadas."
      },
      {
        "level": "advanced",
        "prompt": "Nos Estados Unidos, o Sherman Antitrust Act foi aprovado em:",
        "options": [
          "1776",
          "1848",
          "1917",
          "1890"
        ],
        "correctIndex": 3,
        "hint": "Compare estruturas empresariais e localize os acontecimentos na cronologia.",
        "solution": "O Sherman Antitrust Act data de 1890 e integra o contexto de debates sobre grandes combinações empresariais. Sua aprovação não extinguiu imediatamente a concentração econômica e seus efeitos dependem da aplicação histórica."
      }
    ]
  }
];
