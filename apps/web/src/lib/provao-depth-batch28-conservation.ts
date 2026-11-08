import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral Kognos original, não oficial, sem homologação docente. */
export const provaoDepthBatch28Conservation:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Conservação biológica (unidades de conservação)",
    "objective": "Explicar objetivos e categorias gerais de unidades de conservação, analisar fragmentação e corredores ecológicos e interpretar indicadores de monitoramento, conectando biodiversidade, território e limites de inferência.",
    "prerequisites": [
      "Ecologia: população, comunidade e nicho",
      "Biodiversidade, habitats e relações ecológicas",
      "Porcentagens, amostragem e leitura de dados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Biodiversidade, conservação in situ e categorias de proteção",
        "explanation": "Conservar biodiversidade significa manter organismos, diversidade genética, comunidades ecológicas e processos ambientais que sustentam sua continuidade. Não se trata apenas de contar espécies carismáticas ou cercar uma porção de terra: conservação depende da qualidade do habitat, conectividade, manutenção de relações ecológicas e redução de pressões humanas. A conservação in situ protege populações em seus ambientes naturais; estratégias ex situ, como bancos de sementes e reprodução sob manejo, podem complementar essa proteção, mas não substituem automaticamente ecossistemas funcionais. No Brasil, o Sistema Nacional de Unidades de Conservação organiza unidades em dois grandes grupos: Proteção Integral e Uso Sustentável. As unidades de Proteção Integral priorizam a preservação da natureza com usos predominantemente indiretos dos recursos, sujeitos a regras de cada categoria. As de Uso Sustentável procuram compatibilizar conservação com formas reguladas de aproveitamento de recursos naturais, sem equivaler a exploração irrestrita. Um parque nacional e uma reserva extrativista representam finalidades e regimes distintos; em ambos, gestão, fiscalização e participação das comunidades atingidas influenciam a efetividade. As categorias legais não garantem automaticamente a sobrevivência das populações sem recursos e gestão adequados.",
        "example": "Imagine uma região com vegetação nativa ameaçada: o município estuda uma unidade de Proteção Integral e outra de Uso Sustentável. A primeira prioriza proteger habitats e autoriza apenas usos compatíveis previstos nas regras; a segunda pode admitir extrativismo regulamentado, sem permitir desmatamento livre.",
        "pitfall": "Não confunda conservação in situ com manutenção de animais apenas em cativeiro, nem interprete 'Uso Sustentável' como autorização genérica para qualquer exploração econômica.",
        "steps": [
          "Identifique que componentes de biodiversidade precisam ser conservados.",
          "Distinga conservação in situ, ex situ e categorias de unidade.",
          "Verifique regras de manejo, atividades permitidas e pressão sobre habitats."
        ]
      },
      {
        "level": "intermediate",
        "title": "Fragmentação, efeito de borda e corredores ecológicos",
        "explanation": "Quando uma floresta contínua é dividida em fragmentos por estradas, pastos ou cidades, sua área pode diminuir e a proporção de bordas expostas ao vento, à luz e ao ressecamento aumenta. O chamado efeito de borda altera microclima, disponibilidade de recursos e interações ecológicas, podendo favorecer certas espécies generalistas e prejudicar organismos de interior florestal. A fragmentação também pode reduzir fluxo gênico quando indivíduos deixam de circular entre populações, ampliando efeitos de deriva genética e endogamia em grupos pequenos. Um corredor ecológico ou mosaico de áreas permeáveis pode facilitar movimentos e dispersão, mas sua eficiência depende da espécie, largura, vegetação e obstáculos; uma faixa verde desenhada no mapa não garante conectividade funcional. A restauração precisa priorizar ambientes adequados e considerar a matriz de paisagem, e não apenas aumentar um número abstrato de hectares. Para planejar, usam-se indicadores como área total, área de habitat efetivo, conectividade, pressão humana e registros de espécies. Reintroduções mal avaliadas podem espalhar doenças ou causar impactos indesejados. Uma reserva isolada pode continuar vulnerável sem ações em seu entorno, mesmo quando formalmente protegida.",
        "example": "Uma paisagem possui 600 hectares de habitat, dos quais 25% estão degradados. Calcule 0,25×600=150 hectares degradados; restam 450 hectares não classificados como degradados por esse critério. Restaurar 150 hectares pode aumentar a área, mas a conectividade ainda precisa ser avaliada.",
        "pitfall": "Não assumir que duas áreas com a mesma soma de hectares oferecem a mesma conectividade; forma, isolamento, borda e qualidade do habitat alteram os resultados.",
        "steps": [
          "Quantifique habitat total, degradado e remanescente com unidades.",
          "Examine bordas, barreiras e capacidade de dispersão das espécies.",
          "Proponha conectividade ou restauração e declare limites do indicador de área."
        ]
      },
      {
        "level": "advanced",
        "title": "Monitoramento da efetividade, populações e dimensão social",
        "explanation": "A criação formal de uma unidade de conservação é apenas o início da proteção. Sua efetividade deve ser monitorada por indicadores compatíveis com os objetivos definidos: ocupação de sítios, abundância estimada, diversidade de espécies, regeneração vegetal, presença de invasoras, conectividade e qualidade da água, entre outros. Contagens absolutas precisam levar em conta esforço de amostragem e probabilidade de detecção. Se dez trilhas são pesquisadas num ano e vinte no seguinte, encontrar mais animais não demonstra por si só crescimento da população. Ocupação mede a proporção de locais em que uma espécie é detectada ou estimada presente, e não equivale ao número de indivíduos. Mudanças no indicador podem refletir variação sazonal, métodos distintos ou ameaças externas. O planejamento adaptativo usa os resultados para revisar manejo, fiscalização e restauração, evitando transformar metas arbitrárias em evidências. A conservação também tem dimensão social: decisões precisam considerar participação, direitos territoriais, conhecimento de comunidades locais e conflitos distributivos, conforme o caso. A existência de atividades sustentáveis requer regras claras, avaliação de impactos e condições de acompanhamento. A avaliação de sucesso integra dados biológicos e condições concretas de gestão, nunca só a extensão nominal da unidade.",
        "example": "Com protocolo igual, uma espécie foi detectada em 12 dos 20 pontos amostrados no ano A e em 15 dos 20 no B. As proporções observadas são 60% e 75%, aumento de 15 pontos percentuais. Isso não prova aumento da abundância de indivíduos sem avaliar detectabilidade e outros dados.",
        "pitfall": "Não confunda ocupação de pontos com tamanho populacional ou melhorias de conservação, e não compare censos realizados com métodos ou esforços diferentes como se fossem equivalentes.",
        "steps": [
          "Defina indicador e protocolo com esforço comparável.",
          "Calcule proporções e registre limitações de detecção.",
          "Interprete a tendência junto às ameaças e à gestão territorial."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Sobre unidades de conservação no Brasil, a distinção geral correta é:",
        "options": [
          "Proteção Integral permite exploração irrestrita de recursos",
          "Uso Sustentável proíbe toda atividade humana sem exceção",
          "Proteção Integral prioriza preservação e Uso Sustentável admite usos regulados compatíveis",
          "Todas as categorias têm regras idênticas"
        ],
        "correctIndex": 2,
        "hint": "Distinga mecanismo ecológico, categoria de gestão e interpretação numérica.",
        "solution": "O grupo de Proteção Integral prioriza a conservação com usos predominantemente indiretos, enquanto o de Uso Sustentável permite determinadas atividades reguladas e compatíveis. Isso não equivale à exploração sem controle nem dispensa regras próprias."
      },
      {
        "level": "intermediate",
        "prompt": "De 600 hectares de habitat, 25% estão degradados. A área degradada é:",
        "options": [
          "450 ha",
          "150 ha",
          "25 ha",
          "600 ha"
        ],
        "correctIndex": 1,
        "hint": "Distinga mecanismo ecológico, categoria de gestão e interpretação numérica.",
        "solution": "Converta 25% para 0,25 e multiplique pela área total: 600×0,25=150 hectares. Os outros 450 hectares não integram a fração degradada segundo o critério utilizado, mas sua qualidade e conectividade precisam de avaliação."
      },
      {
        "level": "advanced",
        "prompt": "Uma espécie é detectada em 12/20 pontos num ano e 15/20 no seguinte. A conclusão correta é:",
        "options": [
          "A taxa observada aumentou 15 pontos percentuais, mas isso não prova crescimento populacional",
          "O número de indivíduos aumentou exatamente 25%",
          "A abundância total duplicou",
          "A unidade eliminou todas as ameaças"
        ],
        "correctIndex": 0,
        "hint": "Distinga mecanismo ecológico, categoria de gestão e interpretação numérica.",
        "solution": "As proporções de pontos com detecção são 60% e 75%, diferença de 15 pontos percentuais. Ocupação observada não mede diretamente número de indivíduos, e inferências sobre crescimento dependem de protocolo, detecção e contexto."
      }
    ]
  }
];
