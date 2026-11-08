import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original, não oficial e sem homologação docente. */
export const provaoDepthBatch30Organics:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "As características gerais dos compostos orgânicos",
    "objective": "Interpretar ligações e geometrias dos compostos orgânicos, classificar cadeias e funções por conectividade, comparar forças intermoleculares e resolver o balanceamento e a estequiometria de uma combustão completa.",
    "prerequisites": [
      "Valência do carbono e ligação covalente",
      "Fórmulas moleculares e estruturais",
      "Balanceamento, mol e interações intermoleculares"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tetravalência, ligações e estruturas de carbono",
        "explanation": "O carbono integra grande variedade de compostos graças à possibilidade de formar quatro ligações covalentes e estabelecer cadeias com outros carbonos. Em moléculas orgânicas comuns, os quatro elétrons de valência participam de ligações simples, duplas ou triplas respeitando a contagem de ligações de cada átomo. O metano, CH₄, apresenta carbono com quatro ligações simples e geometria aproximadamente tetraédrica. O eteno, C₂H₄, possui ligação dupla C=C e geometria aproximadamente trigonal plana em torno de cada carbono; o etino, C₂H₂, possui ligação tripla e arranjo aproximadamente linear. Ligações simples carbono-carbono contêm uma ligação σ; uma dupla tem uma σ e uma π; uma tripla possui uma σ e duas π. Essa estrutura ajuda a compreender diferenças de rotação, rigidez e reatividade, mas não significa que todos os compostos que contêm carbono sejam classificados automaticamente como orgânicos: CO₂, CO, carbonatos e alguns outros são estudados tradicionalmente como inorgânicos. Fórmula molecular registra quantidades de átomos, enquanto fórmula estrutural indica como se conectam; moléculas distintas podem compartilhar fórmula, caso da isomeria, que exige análise separada. A geometria e os grupos substituintes precisam ser considerados antes de predizer propriedades ou classificar reações.",
        "example": "Compare CH₄, C₂H₄ e C₂H₂: no metano cada C faz quatro ligações simples; no eteno cada carbono faz duas ligações C–H e uma dupla C=C; no etino, cada carbono faz uma C–H e uma tripla C≡C. O total de ligações de cada carbono permanece compatível com valência quatro.",
        "pitfall": "Não interpretar uma dupla como duas ligações σ independentes e não classificar automaticamente todo composto de carbono, como CO₂, como orgânico.",
        "steps": [
          "Conte átomos e verifique a valência usual do carbono.",
          "Identifique ligações simples, duplas ou triplas e componentes σ/π.",
          "Associe as ligações às geometrias aproximadas e à representação estrutural."
        ]
      },
      {
        "level": "intermediate",
        "title": "Cadeias carbônicas, heteroátomos e funções",
        "explanation": "Uma cadeia orgânica pode ser aberta ou fechada, normal ou ramificada, saturada ou insaturada, e homogênea ou heterogênea segundo a presença de heteroátomos entre carbonos da cadeia. Saturação, na classificação escolar usual, diz respeito à ausência de ligações múltiplas carbono-carbono; a presença de ligação C=O não transforma automaticamente uma cadeia carbonada em insaturada. Uma cadeia CH₃–CH₂–CH₃ é aberta, normal, saturada e homogênea. Em CH₃–O–CH₂–CH₃, o oxigênio interrompe a sequência entre carbonos, tornando a cadeia heterogênea; já a hidroxila de CH₃–CH₂–OH não fica entre dois carbonos, portanto não torna a cadeia heterogênea por esse critério. Grupos funcionais permitem reconhecer comportamentos semelhantes: álcoois apresentam hidroxila em carbono saturado, éteres têm ligação R–O–R', aldeídos possuem grupo carbonila terminal adequado e ácidos carboxílicos contêm –COOH. É preciso examinar a conectividade real, não apenas contar símbolos químicos. Compostos de função diferente podem apresentar mesma fórmula molecular, e o tipo de cadeia não determina sozinho todas as propriedades físicas. Classificações são ferramentas para raciocinar e devem ser aplicadas com definições precisas.",
        "example": "Examine CH₃–O–CH₂–CH₃ e CH₃–CH₂–OH. No primeiro, o oxigênio fica entre dois fragmentos carbônicos; a cadeia é heterogênea e a função é éter. No segundo, o oxigênio pertence à hidroxila terminal, sem interromper a cadeia de dois carbonos; a função é álcool.",
        "pitfall": "Não confundir presença de oxigênio em uma função terminal com heteroátomo inserido entre carbonos, nem usar C=O isoladamente para marcar cadeia insaturada.",
        "steps": [
          "Localize a sequência de carbonos e seus pontos de ramificação.",
          "Diferencie ligações múltiplas C–C de carbonilas C=O.",
          "Identifique grupo funcional e posição de heteroátomos na cadeia."
        ]
      },
      {
        "level": "advanced",
        "title": "Polaridade, forças intermoleculares e combustão",
        "explanation": "As propriedades de compostos orgânicos dependem de tamanho, forma, polaridade e forças intermoleculares, não apenas da quantidade de carbonos. Hidrocarbonetos formados praticamente só por C e H tendem a ser pouco polares e apresentam como contribuição importante forças de dispersão de London. Álcoois de moléculas pequenas podem formar ligações de hidrogênio com a água devido ao grupo –OH, o que favorece sua solubilidade; aumentar significativamente a cadeia apolar pode diminuir essa miscibilidade, ainda que o grupo funcional permaneça igual. Comparações de pontos de ebulição exigem observar massa, ramificação e grupos funcionais simultaneamente. Na combustão completa de um hidrocarboneto ou composto orgânico que contém C, H e O, os produtos ideais em oxigênio suficiente são CO₂ e H₂O, respeitando a conservação de átomos; com oxigênio insuficiente pode haver CO e carbono particulado, entre outros produtos. Uma equação balanceada permite calcular quantidade de CO₂ formada, mas não garante o mecanismo ou as emissões reais de um motor. A ideia de que compostos 'orgânicos' são sempre naturais, inofensivos ou biodegradáveis é falsa: a origem natural ou sintética não determina isoladamente toxicidade e persistência ambiental. Esse conjunto de conceitos permite explicar propriedades e processos com hipóteses explícitas.",
        "example": "Balanceie a combustão completa do etanol C₂H₆O: C₂H₆O+3O₂→2CO₂+3H₂O. Há 2 carbonos, 6 hidrogênios e 7 oxigênios em ambos os lados. Um mol de etanol, consumido completamente com O₂ suficiente, gera teoricamente 2 mol de CO₂ e 3 mol de H₂O.",
        "pitfall": "Não presumir que todo álcool seja ilimitadamente solúvel em água ou que todo composto orgânico seja seguro por ser 'natural'; combustão completa exige oxigênio suficiente.",
        "steps": [
          "Analise polaridade, grupo funcional e tamanho da cadeia.",
          "Balanceie carbono, hidrogênio e oxigênio na combustão.",
          "Verifique as condições materiais antes de generalizar solubilidade ou emissões."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma ligação dupla carbono-carbono (C=C), há:",
        "options": [
          "Duas ligações π sem componente σ",
          "Duas ligações σ e nenhuma π",
          "Uma ligação σ e uma ligação π",
          "Uma ligação tripla com três componentes π"
        ],
        "correctIndex": 2,
        "hint": "Identifique ligações e grupos funcionais antes de calcular ou classificar.",
        "solution": "A ligação dupla C=C possui uma componente sigma, que integra o eixo internuclear, e uma componente pi, associada à sobreposição lateral. A tripla tem uma sigma e duas pi; essa distinção fundamenta a estrutura dos alcenos."
      },
      {
        "level": "intermediate",
        "prompt": "Qual das substâncias apresenta oxigênio inserido entre carbonos, formando cadeia heterogênea?",
        "options": [
          "CH₃CH₂OH",
          "CH₃OCH₂CH₃",
          "CH₃CH₂CH₃",
          "CH₃CH=CH₂"
        ],
        "correctIndex": 1,
        "hint": "Identifique ligações e grupos funcionais antes de calcular ou classificar.",
        "solution": "Na estrutura CH₃–O–CH₂–CH₃, o átomo de oxigênio se encontra entre dois grupos que contêm carbono e integra a cadeia, caracterizando éter e cadeia heterogênea. Em etanol, a hidroxila é terminal e não interrompe a sequência carbônica."
      },
      {
        "level": "advanced",
        "prompt": "Na combustão completa balanceada de 1 mol de etanol C₂H₆O, formam-se teoricamente:",
        "options": [
          "1 mol de CO₂ e 1 mol de H₂O",
          "2 mol de CO₂ e 2 mol de H₂O",
          "3 mol de CO₂ e 2 mol de H₂O",
          "2 mol de CO₂ e 3 mol de H₂O"
        ],
        "correctIndex": 3,
        "hint": "Identifique ligações e grupos funcionais antes de calcular ou classificar.",
        "solution": "A equação balanceada é C₂H₆O+3O₂→2CO₂+3H₂O. A conservação dos dois carbonos exige dois mols de CO₂ e os seis hidrogênios produzem três mols de H₂O para cada mol de combustível em combustão completa."
      }
    ]
  }
];
