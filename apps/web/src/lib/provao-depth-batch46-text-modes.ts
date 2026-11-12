import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo autoral Kognos; não oficial; revisão docente pendente. */
export const provaoDepthBatch46TextModes:readonly DeepTopicSpec[] = [
  {
    "subject": "Português",
    "topicStart": "Modos de organização do texto: descrição, narração e dissertação",
    "objective": "Identificar sequências descritivas, narrativas e dissertativas pelo modo de organização predominante, reconhecendo textos híbridos e a função de cada sequência.",
    "prerequisites": [
      "Noções de interlocutor, finalidade e gênero",
      "Leitura de marcadores temporais e espaciais",
      "Relações entre fatos, características e argumentos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Descrição: representar características e construir uma cena",
        "explanation": "A descrição organiza um trecho ao destacar qualidades, partes, estados e relações espaciais de um objeto, pessoa, ambiente ou situação. Em vez de depender da sucessão de acontecimentos, ela orienta a atenção do leitor para aquilo que pode ser observado ou imaginado: “A sala estreita tinha janelas altas e paredes cobertas de mapas”. Adjetivos e locuções caracterizadoras são frequentes, mas a descrição não se limita a uma lista de adjetivos; verbos, comparações e seleção de detalhes também constroem a imagem. Compare uma ficha técnica de laboratório, que pode descrever dimensões para permitir identificação, com uma passagem literária em que a iluminação da sala sugere tensão. Ambas descrevem, mas os critérios de seleção e o efeito são diferentes. A descrição pode incorporar movimentos pontuais sem se transformar em narração: “O relógio oscilava lentamente na parede” retrata uma propriedade dinâmica da cena. Numa questão, procure o foco predominante: características de um referente, transformação de um estado por eventos sucessivos ou defesa de uma ideia. É inadequado afirmar que todo período no pretérito é narrativo; “A casa era antiga” continua podendo ser descritivo, pois apresenta uma condição, não uma sequência de ações.",
        "example": "Texto: “O corredor era comprido, iluminado por lâmpadas amareladas, e tinha três portas de madeira”. A resposta é descrição porque reúne relações espaciais e qualidades; nenhuma mudança temporal organiza os enunciados.",
        "pitfall": "Classificar qualquer frase com verbo de ação como narrativa, mesmo quando a ação serve apenas para caracterizar um estado.",
        "steps": [
          "Localize o referente central do trecho: espaço, pessoa, objeto ou situação.",
          "Marque informações que atribuem qualidades, partes, posições e estados.",
          "Justifique por que a organização privilegia caracterização, não sucessão de eventos."
        ]
      },
      {
        "level": "intermediate",
        "title": "Narração: acontecimentos, tempo e transformação",
        "explanation": "A narração se estrutura em torno de acontecimentos ligados por alguma sequência temporal ou causal. Elementos como personagens, espaço, tempo, conflito e desfecho podem aparecer, mas nem todos precisam ser explicitados em cada trecho. “Ao sair de casa, Lara percebeu que esquecia a chave; voltou, procurou na mochila e encontrou-a” apresenta mudança de situação, ordem de ações e resolução. Marcadores como “depois” e “na manhã seguinte” auxiliam a cronologia; entretanto, a relação entre eventos também pode ser inferida sem conectivos. É importante diferenciar a ordem dos fatos na história e a ordem em que o narrador os apresenta: um relato pode começar pelo resultado e retornar ao passado para explicar a causa. Descrições podem interromper a ação para situar um cenário, e diálogos podem desenvolver acontecimentos, mas a presença desses recursos não elimina o predomínio narrativo quando a progressão depende de eventos. Em provas, identificar verbos no pretérito é apenas uma pista; mais seguro é perguntar o que mudou entre o início e o fim do trecho. Uma reportagem que relata um acidente costuma mobilizar narração para expor etapas, mas pode incluir explicação técnica e descrição do local, demonstrando que gênero e sequência textual não são sinônimos.",
        "example": "“A luz apagou. Minutos depois, a equipe acionou o gerador e retomou a apresentação.” O encadeamento temporal e a transformação do problema inicial em solução sustentam a classificação narrativa.",
        "pitfall": "Confundir narração com gênero literário: notícias, depoimentos e relatórios podem narrar fatos sem serem contos.",
        "steps": [
          "Enumere acontecimentos na ordem em que aparecem no trecho.",
          "Identifique marcas temporais, participantes e mudanças de situação.",
          "Verifique se a sequência de eventos é o eixo organizador predominante."
        ]
      },
      {
        "level": "advanced",
        "title": "Dissertação: exposição, argumentação e mistura de sequências",
        "explanation": "Na organização dissertativa, as ideias se articulam por explicações, relações conceituais, comparações ou argumentos. Uma exposição busca esclarecer um tema: “A compostagem transforma resíduos orgânicos por ação de organismos decompositores”. Já uma dissertação argumentativa defende uma tese e apresenta razões: “A compostagem deve ser adotada nas escolas, pois diminui o volume de resíduos e favorece a educação ambiental”. Embora a palavra “dissertação” seja usada em ambos os casos, não se pode exigir uma opinião explícita em todo texto dissertativo. Em uma avaliação, investigue a finalidade global do trecho: informar como algo funciona, sustentar posição discutível ou narrar uma transformação de acontecimentos. A estrutura argumentativa pode conter dados, exemplos e refutações; um exemplo narrado é recurso de apoio e não muda automaticamente o modo predominante. Uma crônica pode começar descrevendo uma praça, narrar um encontro e terminar defendendo a importância de espaços públicos. Essa combinação exige observar a função de cada parte e o centro do projeto textual. Para classificar com rigor, não use só o tempo verbal ou a quantidade de adjetivos; compare a progressão do texto. Pergunte se cada frase acrescenta característica, evento ou razão, e se a conclusão depende de argumentos apresentados. Esse procedimento ajuda a distinguir sequência predominante e sequências encaixadas.",
        "example": "“A cidade tem poucas áreas verdes” descreve uma condição; “Na semana passada, moradores plantaram mudas” narra uma ação; “Por isso, ampliar parques é prioridade, porque melhora o conforto térmico” defende uma tese. Um mesmo artigo pode integrar os três trechos.",
        "pitfall": "Pressupor que dissertação sempre seja persuasiva ou que um texto com uma frase descritiva deixe de ser argumentativo.",
        "steps": [
          "Separe segmentos de caracterização, sucessão de ações e relações de ideias.",
          "Identifique possível tese, justificativas e objetivo explicativo.",
          "Determine a sequência predominante pela função no texto inteiro, não por uma palavra isolada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual trecho é predominantemente descritivo?",
        "options": [
          "“O sino tocou, e todos saíram às pressas.”",
          "“O pátio possuía árvores altas e bancos de pedra.”",
          "“Logo, é necessário reformar a quadra.”",
          "“Ontem, os alunos organizaram uma feira.”"
        ],
        "correctIndex": 1,
        "hint": "Procure o trecho que caracteriza um lugar sem encadear acontecimentos.",
        "solution": "B descreve características do pátio: árvores e bancos. A e D apresentam eventos em sequência temporal, e C expressa uma conclusão argumentativa. A escolha depende do eixo do trecho, não apenas da presença de substantivos."
      },
      {
        "level": "intermediate",
        "prompt": "Leia: “O alarme disparou; em seguida, a equipe evacuou o prédio e telefonou aos bombeiros”. O modo predominante é:",
        "options": [
          "Descritivo, pela aparência do prédio",
          "Dissertativo, por defender uma tese",
          "Narrativo, pelo encadeamento temporal de ações",
          "Expositivo, por definir um conceito técnico"
        ],
        "correctIndex": 2,
        "hint": "Identifique o que aconteceu primeiro e quais ações se seguiram.",
        "solution": "C é correta: disparo, evacuação e telefonema compõem eventos sucessivos. A não encontra caracterização de aparência; B não identifica posição defendida; D não encontra definição de conceito. Os marcadores temporais reforçam a narração."
      },
      {
        "level": "advanced",
        "prompt": "Um artigo apresenta a tese “A escola deve reduzir o desperdício”, expõe dados e depois conta um caso para ilustrá-los. Qual é a interpretação correta?",
        "options": [
          "O texto é predominantemente argumentativo e incorpora um exemplo narrativo",
          "A presença do caso torna o artigo integralmente narrativo",
          "Dados estatísticos anulam a possibilidade de defesa de tese",
          "A tese transforma todo trecho de exemplo em descrição"
        ],
        "correctIndex": 0,
        "hint": "Distinga o propósito global do artigo da função de uma sequência encaixada.",
        "solution": "A é adequada: o artigo defende uma proposta e usa um episódio narrado como evidência ilustrativa. B confunde parte e todo; C ignora que dados podem sustentar argumentos; D transforma, sem fundamento, narração em descrição."
      }
    ]
  }
];
