import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral Kognos, não oficial; sem homologação docente. */
export const provaoDepthBatch25Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Propriedade de substâncias moleculares, iônicas e metálicas",
    "objective": "Investigar propriedade de substâncias moleculares, iônicas e metálicas com modelos físicos e químicos consistentes, identificando propriedades, realizando inferências e cálculos, confrontando alternativas e explicitando condições de validade e limitações experimentais.",
    "prerequisites": [
      "Ligações iônica, covalente e metálica",
      "Rede cristalina e moléculas",
      "Condutividade e solubilidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: estrutura e propriedades",
        "explanation": "Substâncias iônicas são constituídas por cátions e ânions organizados em redes cristalinas, e não por moléculas individuais de sal. A atração eletrostática em todas as direções ajuda a explicar pontos de fusão frequentemente elevados e fragilidade de cristais: ao deslocar planos da rede, íons de mesma carga podem ficar próximos e gerar repulsão. Substâncias moleculares apresentam entidades discretas e propriedades que dependem tanto das ligações internas quanto das forças entre moléculas. Água e dióxido de carbono são moleculares, mas diferem em polaridade e comportamento físico; não se deve inferir o ponto de ebulição apenas pela massa molar. Metais exibem rede de átomos ou cátions com elétrons deslocalizados, modelo que explica condução elétrica no sólido e maleabilidade. Essas são tendências, não definições por uma única propriedade. Diamante e grafite são redes covalentes, não moléculas pequenas; suas propriedades mostram por que classificação simplista entre iônico, molecular e metálico tem exceções. A condutividade depende de portadores móveis e condições de medida, não apenas da presença de elétrons.",
        "example": "Compare NaCl sólido e fundido. No cristal sólido, os íons estão presos em posições médias e não conduzem bem; no fundido, os íons se movem e transportam carga. A ligação continua iônica em ambos os estados.",
        "pitfall": "Confundir mecanismo microscópico com aparência macroscópica ou classificação isolada.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: condutividade e dissolução",
        "explanation": "A água destilada possui condutividade baixa em comparação com uma solução aquosa de cloreto de sódio, porque a dissolução de NaCl disponibiliza íons móveis. Açúcar pode dissolver-se em água sem produzir quantidades comparáveis de íons, já que moléculas de sacarose permanecem predominantemente intactas; dissolver não é sinônimo de ionizar. Um fio de cobre sólido conduz porque elétrons se deslocam pela estrutura metálica, mecanismo distinto do transporte iônico em solução. A condutividade depende da concentração de espécies móveis, temperatura e geometria da amostra; por isso não é correto classificar todas as soluções como bons condutores. Sais insolúveis não geram automaticamente soluções concentradas. Compostos covalentes podem formar íons ao reagir com água, como ácidos fortes em condições adequadas, e a ligação covalente não impede toda condutividade. A comparação deve separar o tipo de ligação, a estrutura da substância e o estado físico em que a propriedade foi medida. Testes elétricos reais exigem equipamentos seguros e não devem envolver rede elétrica doméstica.",
        "example": "Em três amostras, compare NaCl sólido, NaCl dissolvido e sacarose dissolvida. Identifique os portadores de carga: íons fixos, íons móveis e moléculas neutras. Preveja que a solução salina conduza mais que a açucarada sob condições semelhantes.",
        "pitfall": "Ignorar concentração, carga, unidade ou estado físico ao aplicar uma regra.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: estrutura e ponto de fusão",
        "explanation": "O ponto de fusão depende da energia necessária para alterar a organização do material. Em sólidos iônicos, a rede eletrostática costuma exigir energia elevada; em sólidos moleculares, a fusão frequentemente envolve vencer interações intermoleculares, sem romper todas as ligações covalentes internas. Metais variam amplamente em ponto de fusão, e não há regra universal de que qualquer metal derreta acima de qualquer sal. Materiais de rede covalente, como diamante, apresentam estruturas muito extensas e não podem ser explicados como conjuntos de moléculas pequenas mantidas apenas por forças fracas. Para uma escolha tecnológica, considere resistência, ductilidade, corrosão, condutividade e temperatura de trabalho. Uma cerâmica iônica pode resistir a altas temperaturas e ainda ser frágil sob impacto; cobre pode conduzir e deformar sem quebrar facilmente. A classificação química orienta hipóteses, mas resultados experimentais e composição real definem a adequação. Impurezas, defeitos cristalinos e ligas alteram propriedades, portanto não extrapole de uma substância pura para qualquer produto comercial.",
        "example": "Para escolher um material de fio, compare cobre metálico, sal sólido e vidro molecular ou de rede. Passo 1: identifique portadores de carga; passo 2: avalie ductilidade; passo 3: selecione cobre para o núcleo condutor, considerando isolamento externo.",
        "pitfall": "Generalizar o modelo simplificado sem considerar exceções e condições reais.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação explica por que NaCl sólido conduz pouco?",
        "options": [
          "Não existem íons no sólido",
          "Os íons estão pouco móveis na rede cristalina",
          "Todo sólido é molecular",
          "Os elétrons de valência desaparecem"
        ],
        "correctIndex": 1,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "O NaCl sólido contém íons, mas estes não possuem mobilidade translacional suficiente para transportar corrente de forma eficiente. Fundido ou dissolvido, íons móveis permitem condução."
      },
      {
        "level": "intermediate",
        "prompt": "Qual amostra tende a conduzir melhor, em condições semelhantes?",
        "options": [
          "Solução aquosa de sacarose",
          "NaCl sólido",
          "Solução aquosa de NaCl",
          "Água destilada"
        ],
        "correctIndex": 2,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "NaCl dissolvido fornece Na⁺ e Cl⁻ móveis; sacarose permanece majoritariamente molecular e água destilada tem poucos íons. A condutividade depende também da concentração e da temperatura."
      },
      {
        "level": "advanced",
        "prompt": "Por que cobre é usado como núcleo de fios elétricos?",
        "options": [
          "Porque é um sal iônico fundido",
          "Porque não contém elétrons",
          "Porque é sempre isolante",
          "Porque conduz no estado sólido e pode ser conformado em fios"
        ],
        "correctIndex": 3,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "A estrutura metálica do cobre permite mobilidade de elétrons e ductilidade, viabilizando fios. Resistência à corrosão, custo e isolamento também importam no projeto, mas não substituem essas propriedades."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Propriedades físicas dos compostos orgânicos",
    "objective": "Identificar e comparar propriedades físicas dos compostos orgânicos mediante estruturas, propriedades, exemplos resolvidos e interpretação crítica de condições experimentais, reconhecendo exceções e evitando generalizações indevidas.",
    "prerequisites": [
      "Polaridade de ligações e moléculas",
      "Forças intermoleculares",
      "Cadeias carbônicas e grupos funcionais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: estrutura e propriedades orgânicas",
        "explanation": "Compostos orgânicos apresentam propriedades físicas que dependem de massa molar, forma molecular, polaridade e forças intermoleculares. Hidrocarbonetos como hexano são predominantemente apolares e interagem principalmente por forças de dispersão; álcoois de cadeia curta, como etanol, possuem grupo hidroxila e podem estabelecer ligações de hidrogênio com água. A presença de oxigênio não garante, sozinha, solubilidade ilimitada: a parte hidrocarbonada apolar também influencia o balanço de interações. Em séries homólogas de alcanos não ramificados, o aumento do comprimento da cadeia costuma elevar a temperatura de ebulição devido à maior polarizabilidade e superfície de contato. Ramificações podem reduzir a área efetiva de contato e alterar o ponto de ebulição de isômeros. Solubilidade em água e em solventes orgânicos depende das interações entre soluto e solvente, não de uma regra absoluta de que 'orgânico não dissolve em água'. A volatilidade está ligada à tendência de passar à fase vapor sob condições dadas e não equivale diretamente a inflamabilidade. Para comparar materiais, declare pressão, temperatura e identidade dos isômeros.",
        "example": "Compare etanol e hexano em água. O etanol apresenta grupo –OH e forma ligações de hidrogênio; o hexano é apolar e tem solubilidade muito baixa. Identifique primeiro os grupos, depois as interações e por fim a previsão.",
        "pitfall": "Não inferir uma função ou propriedade apenas da fórmula molecular.",
        "steps": [
          "Identifique a estrutura e os dados disponíveis.",
          "Aplique o conceito e justifique cada inferência.",
          "Confira condições, alternativas e possíveis exceções."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: pontos de ebulição e isomeria",
        "explanation": "Isômeros possuem a mesma fórmula molecular, mas diferentes conectividades ou arranjos espaciais e podem exibir propriedades físicas distintas. O pentano normal, o isopentano e o neopentano compartilham C₅H₁₂, porém diferem em ramificação; o neopentano, mais compacto, apresenta ponto de ebulição menor que o pentano normal em condições comparáveis. A explicação envolve superfície de contato e interações de dispersão, não alteração da massa molar, que é igual para os três. Já entre álcoois e éteres de mesma fórmula molecular, ligações de hidrogênio entre moléculas de álcool podem elevar significativamente a temperatura de ebulição. A capacidade de formar ligações de hidrogênio como doador exige hidrogênio ligado a N, O ou F em contextos apropriados; possuir oxigênio na fórmula não torna automaticamente a molécula doadora. A densidade dos compostos orgânicos varia e não deve ser inferida apenas de serem líquidos. Ao interpretar tabelas, verifique se os valores são medidos na mesma pressão e se a amostra é pura.",
        "example": "Para C₂H₆O, compare etanol CH₃CH₂OH e dimetil éter CH₃OCH₃. Primeiro reconheça a mesma massa molar; depois note que etanol doa ligações de hidrogênio; conclua que seu ponto de ebulição é maior, sob pressão igual.",
        "pitfall": "Não confundir grupo estrutural com comportamento absoluto em qualquer condição.",
        "steps": [
          "Identifique a estrutura e os dados disponíveis.",
          "Aplique o conceito e justifique cada inferência.",
          "Confira condições, alternativas e possíveis exceções."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: partição, volatilidade e segurança",
        "explanation": "O coeficiente de partição entre duas fases imiscíveis descreve a distribuição de um soluto em equilíbrio e depende de temperatura, ionização e identidade dos solventes. Compostos orgânicos com grupos ionizáveis podem mudar drasticamente de solubilidade quando o pH altera a forma carregada; por isso uma classificação binária entre polar e apolar é insuficiente para ácidos carboxílicos e aminas. A volatilidade influencia exposição por inalação, mas toxicidade depende da substância, dose e via de contato; nunca se deve cheirar diretamente solventes para identificá-los. Em separações, destilação explora diferenças de volatilidade, extração líquido-líquido explora partição e cromatografia depende de interações com fases móvel e estacionária. Esses métodos não são intercambiáveis em qualquer mistura. Ao escolher um solvente industrial, considere solubilização, segurança, inflamabilidade, impacto ambiental e recuperação. Um líquido com ponto de ebulição menor não é necessariamente menos perigoso, nem uma molécula mais polar será sempre mais solúvel em qualquer solvente.",
        "example": "Considere ácido benzoico em água: em meio básico, a forma benzoato carregada tende a dissolver-se melhor na fase aquosa que a forma neutra. Identifique a ionização, compare as interações e ressalve que o equilíbrio depende do pH e do solvente.",
        "pitfall": "Não extrapolar tendência química sem considerar solvente, estrutura e ambiente.",
        "steps": [
          "Identifique a estrutura e os dados disponíveis.",
          "Aplique o conceito e justifique cada inferência.",
          "Confira condições, alternativas e possíveis exceções."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que etanol mistura-se bem com água, ao contrário do hexano?",
        "options": [
          "Porque etanol é um metal",
          "Porque o grupo –OH do etanol permite ligações de hidrogênio com água",
          "Porque hexano possui carga iônica permanente",
          "Porque etanol não contém carbono"
        ],
        "correctIndex": 1,
        "hint": "Observe a conectividade e as propriedades discutidas no capítulo.",
        "solution": "O grupo hidroxila do etanol estabelece ligações de hidrogênio com água; hexano é predominantemente apolar e tem baixa afinidade pelo solvente polar. Massa e temperatura também influenciam, mas não substituem esse mecanismo."
      },
      {
        "level": "intermediate",
        "prompt": "Por que pentano e neopentano podem ter pontos de ebulição diferentes?",
        "options": [
          "Porque possuem números distintos de átomos de carbono",
          "Porque o neopentano é iônico",
          "Porque a ramificação modifica contato molecular e dispersão",
          "Porque a fórmula molecular do neopentano contém oxigênio"
        ],
        "correctIndex": 2,
        "hint": "Observe a conectividade e as propriedades discutidas no capítulo.",
        "solution": "Ambos são C₅H₁₂, mas suas formas diferem. A maior ramificação do neopentano reduz o contato intermolecular efetivo, influenciando forças de dispersão e temperatura de ebulição."
      },
      {
        "level": "advanced",
        "prompt": "Qual mudança tende a aumentar a solubilidade aquosa de um ácido carboxílico fraco?",
        "options": [
          "Reduzir necessariamente a pressão atmosférica",
          "Remover toda a água",
          "Aumentar sempre a cadeia apolar",
          "Formar sua espécie carboxilato carregada em meio básico"
        ],
        "correctIndex": 3,
        "hint": "Observe a conectividade e as propriedades discutidas no capítulo.",
        "solution": "A desprotonação em meio básico forma carboxilato, espécie carregada que interage fortemente com água. A conclusão depende de pH e estrutura molecular, e não significa solubilidade infinita."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Principais radicais funcionais e funções orgânicas",
    "objective": "Identificar e comparar principais radicais funcionais e funções orgânicas mediante estruturas, propriedades, exemplos resolvidos e interpretação crítica de condições experimentais, reconhecendo exceções e evitando generalizações indevidas.",
    "prerequisites": [
      "Representação de fórmulas estruturais",
      "Ligações covalentes e valência do carbono",
      "Polaridade e grupos funcionais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: grupos funcionais e nomenclatura",
        "explanation": "Função orgânica é uma classe de compostos identificada por grupos estruturais característicos que influenciam reatividade e propriedades. Álcoois possuem grupo hidroxila ligado a carbono saturado; fenóis têm –OH ligado diretamente a anel aromático, distinção que altera acidez e reatividade. Aldeídos apresentam carbonila terminal –CHO, enquanto cetonas possuem carbonila entre carbonos. Ácidos carboxílicos contêm –COOH e ésteres contêm –COO– entre fragmentos carbônicos; é incorreto classificar todo composto com oxigênio como álcool. Aminas derivam formalmente de amônia por substituição de hidrogênios por grupos orgânicos; amidas possuem nitrogênio ligado ao carbono de uma carbonila. Éteres exibem ligação C–O–C. A nomenclatura sistemática identifica cadeia principal, posição de insaturações e grupos prioritários, mas reconhecer a função exige observar conectividade, não apenas contar elementos. Uma mesma molécula pode ter múltiplas funções, como aminoácidos com amina e ácido carboxílico. Fórmulas moleculares isoladas não determinam qual função está presente, pois isômeros podem diferir funcionalmente.",
        "example": "Na estrutura CH₃CH₂OH, identifique –OH ligado a carbono saturado: álcool. Em CH₃COOH, identifique –C(=O)OH: ácido carboxílico. Em CH₃OCH₃, oxigênio liga dois carbonos: éter. Não classifique apenas pela presença de O.",
        "pitfall": "Não inferir uma função ou propriedade apenas da fórmula molecular.",
        "steps": [
          "Identifique a estrutura e os dados disponíveis.",
          "Aplique o conceito e justifique cada inferência.",
          "Confira condições, alternativas e possíveis exceções."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: comparar reatividade e propriedades",
        "explanation": "Ácidos carboxílicos podem doar próton em água e formar carboxilatos, enquanto álcoois comuns são muito menos ácidos nas mesmas condições. Aminas frequentemente atuam como bases por causa do par de elétrons não ligante do nitrogênio; amidas são menos básicas devido à deslocalização eletrônica associada à carbonila. Aldeídos podem sofrer oxidação a ácidos carboxílicos em condições apropriadas, enquanto cetonas comuns resistem a oxidação branda, distinção usada em testes químicos controlados. Ésteres podem sofrer hidrólise, produzindo ácido e álcool ou espécies correspondentes dependendo do meio. A presença de carbonila não basta para afirmar que toda molécula reage da mesma forma: aldeídos, cetonas, ácidos, ésteres e amidas diferem em substituintes e mecanismo. Propriedades físicas também mudam: álcoois e ácidos podem formar ligações de hidrogênio, enquanto éteres atuam como aceptores mas não doadores típicos. Ao resolver exercícios, primeiro localize o grupo, depois verifique sua posição e só então aplique tendência de reatividade.",
        "example": "Compare CH₃CHO e CH₃COCH₃. O primeiro possui carbonila terminal com H ligado ao carbono carbonílico: aldeído. O segundo possui carbonila entre carbonos: cetona. Identifique a estrutura antes de inferir comportamento químico.",
        "pitfall": "Não confundir grupo estrutural com comportamento absoluto em qualquer condição.",
        "steps": [
          "Identifique a estrutura e os dados disponíveis.",
          "Aplique o conceito e justifique cada inferência.",
          "Confira condições, alternativas e possíveis exceções."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: moléculas multifuncionais e isomeria",
        "explanation": "Moléculas multifuncionais exigem identificar todos os grupos presentes e reconhecer que um pode modificar o comportamento de outro. Ácido lático, CH₃CH(OH)COOH, contém simultaneamente hidroxila alcoólica e ácido carboxílico; sua fórmula não deve ser reduzida à classificação única de álcool. Um aminoácido simples pode existir predominantemente como zwitteríon em certa faixa de pH, com amônio positivo e carboxilato negativo na mesma molécula, o que altera solubilidade e comportamento ácido-base. Isomeria de função ocorre quando compostos compartilham fórmula molecular mas possuem grupos funcionais distintos, como etanol e dimetil éter (C₂H₆O). A prioridade de sufixos na nomenclatura não significa que outros grupos desapareçam da estrutura. Em síntese orgânica, prever produtos exige considerar reagentes, condições e mecanismos; reconhecer uma função é necessário, mas não suficiente para prever rendimento e seletividade. Uma classificação confiável registra conectividade, protonação, estereoquímica quando relevante e condições experimentais.",
        "example": "Para CH₃CH(OH)COOH, marque o carbono que carrega –OH e o grupo terminal –COOH. Identifique álcool e ácido carboxílico; conte três carbonos. A dupla função explica por que um único rótulo é insuficiente para descrever a molécula.",
        "pitfall": "Não extrapolar tendência química sem considerar solvente, estrutura e ambiente.",
        "steps": [
          "Identifique a estrutura e os dados disponíveis.",
          "Aplique o conceito e justifique cada inferência.",
          "Confira condições, alternativas e possíveis exceções."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual função apresenta o grupo –COOH?",
        "options": [
          "Éter",
          "Ácido carboxílico",
          "Cetona",
          "Amina"
        ],
        "correctIndex": 1,
        "hint": "Observe a conectividade e as propriedades discutidas no capítulo.",
        "solution": "O grupo –C(=O)OH define um ácido carboxílico. Éteres têm C–O–C, cetonas carbonila entre carbonos e aminas contêm nitrogênio com ligações características."
      },
      {
        "level": "intermediate",
        "prompt": "Qual estrutura representa uma cetona?",
        "options": [
          "CH₃CH₂OH",
          "CH₃CHO",
          "CH₃COCH₃",
          "CH₃COOH"
        ],
        "correctIndex": 2,
        "hint": "Observe a conectividade e as propriedades discutidas no capítulo.",
        "solution": "CH₃COCH₃ apresenta carbonila ligada a dois carbonos, característica de cetona. As outras estruturas representam álcool, aldeído e ácido carboxílico, respectivamente."
      },
      {
        "level": "advanced",
        "prompt": "Quais funções aparecem em CH₃CH(OH)COOH?",
        "options": [
          "Apenas éter",
          "Cetona e éster",
          "Apenas amina",
          "Álcool e ácido carboxílico"
        ],
        "correctIndex": 3,
        "hint": "Observe a conectividade e as propriedades discutidas no capítulo.",
        "solution": "A hidroxila –OH ligada a carbono saturado caracteriza álcool; o grupo –COOH caracteriza ácido carboxílico. A molécula é multifuncional, e os dois grupos devem ser identificados."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Solubilidade e temperatura de ebulição",
    "objective": "Analisar solubilidade e temperatura de ebulição por meio de conceitos científicos específicos, cálculos e interpretação de evidências, distinguindo modelos ideais, aplicações e exceções com justificativas verificáveis.",
    "prerequisites": [
      "Soluções e misturas homogêneas",
      "Forças intermoleculares",
      "Temperatura e pressão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: solubilidade e saturação",
        "explanation": "Solubilidade é a quantidade máxima de soluto que pode dissolver-se em determinada quantidade de solvente sob condições especificadas, quando se estabelece equilíbrio com a fase não dissolvida. Em água, a solubilidade de sólidos varia com temperatura e com a identidade das espécies; não há regra universal de que aquecer sempre aumenta a solubilidade de qualquer substância. Solução insaturada contém menos soluto que o limite de equilíbrio; saturada está no limite; supersaturada pode conter temporariamente mais soluto que o valor de equilíbrio e tende a ser instável frente a perturbações. Velocidade de dissolução é conceito diferente: agitação e redução do tamanho dos cristais podem acelerar a dissolução sem necessariamente mudar a solubilidade de equilíbrio. Para gases dissolvidos, aumento de pressão parcial frequentemente aumenta a solubilidade na aproximação da lei de Henry, desde que não haja reação relevante e que a temperatura seja constante. A composição do solvente, o pH e reações químicas podem modificar o equilíbrio. A curva de solubilidade deve ser lida com suas unidades e temperatura, não como porcentagem automaticamente.",
        "example": "Um sal apresenta solubilidade de 30 g por 100 g de água a 20 °C. Em 200 g de água, o máximo no modelo é 60 g. Se forem adicionados 70 g, 10 g permanecem não dissolvidos em equilíbrio, admitindo tempo suficiente.",
        "pitfall": "Não confundir definições científicas com exemplos ou analogias isoladas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: ebulição e pressão externa",
        "explanation": "Um líquido entra em ebulição quando sua pressão de vapor alcança a pressão externa, permitindo a formação de bolhas estáveis no interior. Ao diminuir a pressão atmosférica, a temperatura de ebulição da água diminui; por isso, em altitudes elevadas, a água pode ferver abaixo de 100 °C. Ao aumentar a pressão externa em equipamento apropriado, a temperatura de ebulição sobe. Evaporação, diferentemente, pode ocorrer na superfície a temperaturas inferiores ao ponto de ebulição. Solutos não voláteis dissolvidos podem elevar a temperatura de ebulição do solvente, um efeito coligativo que depende aproximadamente da concentração de partículas em soluções diluídas ideais. Não se deve confundir temperatura de ebulição com quantidade de calor fornecida: aquecer mais rapidamente reduz o tempo até a ebulição, mas não altera necessariamente a temperatura de ebulição sob pressão constante. Misturas podem apresentar intervalos de ebulição e composição do vapor diferente da do líquido. Uma interpretação correta informa pressão, composição e aproximações.",
        "example": "Duas panelas com água pura estão a pressões externas diferentes. Primeiro identifique que a ebulição ocorre quando pressão de vapor iguala a externa; depois compare: sob menor pressão, a temperatura de ebulição é menor; por fim, explique a consequência para o cozimento.",
        "pitfall": "Não aplicar fórmulas sem unidades e condições explícitas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: partículas dissolvidas e separações",
        "explanation": "A elevação ebuliométrica ideal pode ser aproximada por ΔT_b=iK_b m, onde m é a molalidade, K_b a constante do solvente e i um fator de partículas efetivas. A expressão pressupõe solução suficientemente diluída e comportamento próximo do ideal; para eletrólitos reais, associação iônica e interações alteram i. O efeito não significa que qualquer sal possa ser adicionado indefinidamente: a solubilidade limita a composição e precipitação pode ocorrer. A destilação utiliza diferenças de volatilidade e equilíbrio líquido-vapor para separar componentes, mas uma única etapa não garante pureza completa. Misturas azeotrópicas são exemplos de limitação da destilação simples sob pressão fixa. Para analisar uma solução, separe três grandezas: quantidade dissolvida no equilíbrio, rapidez de dissolução e temperatura de ebulição. Alterar a temperatura pode mudar simultaneamente essas propriedades, mas por mecanismos distintos. Em aplicações industriais, pressão, energia necessária e corrosão também influenciam a escolha de separação, sem que a fórmula coligativa substitua dados experimentais.",
        "example": "Para solução ideal não eletrolítica com m=0,50 mol/kg e Kb=0,512 °C kg/mol, use i=1. Calcule ΔTb=1×0,512×0,50=0,256 °C. A 1 atm, estime ebulição da água em 100,256 °C, se a aproximação for válida.",
        "pitfall": "Não generalizar modelos aproximados a sistemas reais sem verificar exceções.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma solução saturada de um sólido significa que:",
        "options": [
          "Não há soluto presente",
          "Atingiu o limite de dissolução de equilíbrio nas condições dadas",
          "Todo soluto evaporou",
          "Não existem partículas dissolvidas"
        ],
        "correctIndex": 1,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "Saturação indica o limite de solubilidade sob temperatura e composição definidas, com equilíbrio entre soluto dissolvido e fase excedente quando presente. Não significa ausência de soluto."
      },
      {
        "level": "intermediate",
        "prompt": "Por que água ferve a temperatura menor em altitude elevada?",
        "options": [
          "Porque sua massa molar diminui",
          "Porque a água se transforma em outro elemento",
          "Porque a pressão externa é menor",
          "Porque a pressão de vapor deixa de existir"
        ],
        "correctIndex": 2,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A ebulição ocorre quando a pressão de vapor iguala a pressão externa. Em altitude elevada, a pressão atmosférica menor é alcançada a temperatura mais baixa, sem alterar a identidade química da água."
      },
      {
        "level": "advanced",
        "prompt": "Para ΔTb=iKbm com i=1, Kb=0,512 e m=0,50, qual a elevação estimada?",
        "options": [
          "0,0256 °C",
          "1,024 °C",
          "0,512 °C",
          "0,256 °C"
        ],
        "correctIndex": 3,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "Multiplique i×Kb×m: 1×0,512×0,50=0,256 °C. A relação aproxima uma solução ideal diluída com soluto não volátil; não se aplica indiscriminadamente a qualquer concentração."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Noção de monômeros e polímeros",
    "objective": "Analisar noção de monômeros e polímeros por meio de conceitos científicos específicos, cálculos e interpretação de evidências, distinguindo modelos ideais, aplicações e exceções com justificativas verificáveis.",
    "prerequisites": [
      "Ligações covalentes",
      "Moléculas orgânicas",
      "Reações de síntese e conservação de massa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: unidades repetitivas e macromoléculas",
        "explanation": "Polímeros são macromoléculas formadas por muitas unidades estruturais repetitivas; monômeros são moléculas capazes de participar da formação de cadeias ou redes poliméricas. No polietileno, unidades derivadas do eteno formam uma cadeia com repetição aproximada –CH₂–CH₂–, mas a molécula de eteno C₂H₄ possui uma ligação dupla que é transformada na polimerização por adição. O grau de polimerização corresponde aproximadamente ao número de unidades repetitivas por cadeia e influencia a massa molar, que normalmente se distribui entre diferentes comprimentos. Polímeros naturais incluem celulose e proteínas, enquanto muitos plásticos comerciais são sintéticos; a origem natural não garante biodegradação rápida e a origem sintética não determina toxicidade por si só. Polímero, plástico e resina não são sinônimos perfeitos: aditivos, cargas e processamento alteram propriedades do produto. Cadeias lineares, ramificadas e reticuladas exibem mobilidade e comportamento mecânico distintos. A estrutura química e as interações entre cadeias explicam melhor o material que apenas sua aparência.",
        "example": "No eteno CH₂=CH₂, identifique a dupla ligação. Na adição, ela se transforma em ligações simples que unem unidades; escreva n CH₂=CH₂ → [–CH₂–CH₂–]n. A proporção atômica é preservada no modelo de adição.",
        "pitfall": "Não confundir definições científicas com exemplos ou analogias isoladas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: adição, condensação e propriedades",
        "explanation": "Polimerização por adição une monômeros insaturados sem gerar obrigatoriamente pequenas moléculas como subprodutos em cada etapa; o polietileno é um exemplo escolar. Na polimerização por condensação, reações entre grupos funcionais podem formar ligações e liberar pequenas moléculas, como água, em sistemas específicos. Poliésteres e poliamidas ilustram a importância da química dos grupos funcionais. Não se deve classificar todo polímero por um único mecanismo sem conhecer sua rota de síntese. Termoplásticos podem amolecer e ser reprocessados sob aquecimento em condições adequadas, enquanto termorrígidos fortemente reticulados não fundem como cadeias independentes e podem degradar com calor excessivo. A presença de plastificantes e o grau de cristalinidade alteram flexibilidade e resistência. Reciclagem mecânica pode degradar cadeias ou acumular contaminantes, e identificação do tipo de polímero é necessária antes de misturar resíduos. A decisão sobre uso depende de propriedades, exposição e infraestrutura de coleta.",
        "example": "Compare um recipiente de polietileno e uma peça de resina epóxi reticulada. Identifique cadeias mais móveis no termoplástico e rede de ligações no termorrígido; preveja maior facilidade de remoldagem do primeiro, sem supor que todo aquecimento seja seguro.",
        "pitfall": "Não aplicar fórmulas sem unidades e condições explícitas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: massa molar e destino ambiental",
        "explanation": "Em uma cadeia ideal com n unidades repetitivas de massa molar M₀, a massa molar aproximada é M≈nM₀, desprezando a contribuição de grupos terminais. Para polietileno, a unidade C₂H₄ tem massa molar aproximada de 28 g/mol; uma cadeia ideal com 1000 unidades apresenta M≈28 000 g/mol. Materiais reais contêm distribuições de tamanhos e podem ser caracterizados por médias numéricas e ponderais, que não são intercambiáveis. A durabilidade química de um polímero pode ser vantajosa em equipamentos e problemática em descarte; degradação por luz, oxidação e ação microbiana depende de ligações, aditivos e ambiente. Fragmentar plástico em partículas menores não demonstra mineralização completa em CO₂, água e biomassa. Biodegradabilidade, compostabilidade industrial e reciclabilidade são categorias distintas, sujeitas a critérios e infraestrutura. Avaliar impacto exige considerar extração de matéria-prima, fabricação, uso, coleta e destino final, sem declarar que qualquer material é sempre superior.",
        "example": "Para 1000 unidades de C₂H₄, M₀=2×12+4×1=28 g/mol. Multiplique n×M₀=1000×28=28 000 g/mol. O cálculo aproxima uma cadeia ideal, desconsiderando grupos terminais e distribuição de massas.",
        "pitfall": "Não generalizar modelos aproximados a sistemas reais sem verificar exceções.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a unidade repetitiva aproximada do polietileno?",
        "options": [
          "–CH₂–CH₂–",
          "–Na–Cl–",
          "–SiO₂–H₂O–",
          "–Fe–O–"
        ],
        "correctIndex": 0,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A polimerização por adição do eteno forma cadeias de unidades –CH₂–CH₂–. NaCl é composto iônico e as outras opções não representam a unidade repetitiva do polietileno."
      },
      {
        "level": "intermediate",
        "prompt": "Qual característica distingue frequentemente um termorrígido fortemente reticulado?",
        "options": [
          "Pode sempre ser remoldado sem alteração",
          "Não contém ligações covalentes",
          "Não funde como cadeias independentes e pode degradar com aquecimento",
          "É obrigatoriamente biodegradável"
        ],
        "correctIndex": 2,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A rede covalente reticulada restringe o escoamento das cadeias, ao contrário de muitos termoplásticos. Aquecimento excessivo pode provocar degradação, não simples fusão reversível."
      },
      {
        "level": "advanced",
        "prompt": "Qual massa molar aproximada tem uma cadeia ideal com 1000 unidades C₂H₄ (28 g/mol)?",
        "options": [
          "280 g/mol",
          "2 800 g/mol",
          "280 000 g/mol",
          "28 000 g/mol"
        ],
        "correctIndex": 3,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A massa molar aproximada é n×M₀=1000×28=28 000 g/mol, desprezando grupos terminais. Polímeros reais têm distribuição de comprimentos, então a amostra não possui necessariamente uma única massa molar."
      }
    ]
  }
];
