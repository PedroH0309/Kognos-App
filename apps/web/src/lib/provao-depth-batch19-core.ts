import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo original Kognos; não oficial e sem homologação docente. */
export const provaoDepthBatch19Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Eletronegatividade, polaridade de ligações e moléculas",
    "objective": "Analisar eletronegatividade e polaridade de ligações e moléculas, articulando geometria, vetores de dipolo, solubilidade e limites dos modelos químicos.",
    "prerequisites": [
      "Tabela periódica",
      "Ligações covalentes",
      "Geometria molecular"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Diferença de eletronegatividade e ligação",
        "explanation": "Eletronegatividade expressa a tendência relativa de um átomo atrair densidade eletrônica em uma ligação. Em uma ligação H–Cl, o cloro é mais eletronegativo e a distribuição de elétrons é desigual: a extremidade do cloro tem carga parcial negativa e a do hidrogênio, parcial positiva. A diferença de eletronegatividade é um indicador útil, mas não uma régua universal que classifique todas as ligações em categorias rígidas. Ligações covalentes polares podem ter caráter iônico parcial, e a natureza de uma ligação depende também da estrutura e do ambiente químico. Em H₂, átomos iguais têm eletronegatividade igual e a ligação é apolar. A presença de cargas parciais não significa que a molécula seja formada por íons H⁺ e Cl⁻ isolados. É necessário distinguir polaridade de ligação de polaridade da molécula inteira: esta última depende da soma vetorial dos dipolos e, portanto, da geometria. A eletronegatividade tende a aumentar em direção ao canto superior direito da tabela periódica, com exceções e restrições para certos elementos.",
        "example": "Compare H–H e H–Cl: em H–H os dois átomos atraem igualmente o par compartilhado; em H–Cl o cloro atrai mais, gerando dipolo dirigido para Cl. A conclusão é qualitativa, sem supor transferência integral de elétron. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não confunda definição com analogia; verifique o mecanismo envolvido e suas condições de validade.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Soma vetorial e geometria",
        "explanation": "A polaridade molecular resulta da combinação de dipolos de ligação e da distribuição espacial de cargas. Em CO₂, as duas ligações C=O são polares, mas a molécula linear apresenta dipolos de mesma intensidade e sentidos opostos; a soma é nula. Em H₂O, as ligações O–H também são polares, porém a geometria angular impede cancelamento, tornando a molécula polar. Essa diferença explica por que a frase 'tem ligação polar, logo é molécula polar' é falsa. Em BF₃, a geometria trigonal plana simétrica pode cancelar os três dipolos B–F, enquanto NH₃, piramidal, possui dipolo resultante. A análise deve começar pela estrutura de Lewis, identificar pares de elétrons não ligantes no átomo central, inferir geometria e então somar vetores. A existência de ressonância, conformações e interações com solventes pode exigir análise mais refinada. O desenho bidimensional de uma fórmula não representa necessariamente o arranjo tridimensional que determina a polaridade.",
        "example": "Em CO₂, desenhe O=C=O: os vetores das ligações apontam para oxigênios opostos e se cancelam. Em H₂O, o ângulo H–O–H é aproximadamente 104,5°, de modo que os vetores não se anulam. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não generalize um caso sem conferir hipóteses, escalas e propriedades envolvidas.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Solubilidade e limitações da regra",
        "explanation": "A polaridade influencia forças intermoleculares e a solubilidade, mas a expressão 'semelhante dissolve semelhante' é uma heurística, não uma lei absoluta. A água é polar e forma ligações de hidrogênio; compostos com grupos capazes de interagir fortemente com água podem apresentar boa solubilidade. Hidrocarbonetos apolares tendem a ter baixa solubilidade em água porque a mistura não compensa energeticamente a reorganização das interações do solvente. Entretanto, tamanho molecular, temperatura, entropia, ionização e estrutura também importam. Etanol possui grupo –OH polar e cadeia carbônica curta, sendo miscível com água; cadeias hidrocarbonadas maiores podem reduzir a solubilidade relativa de álcoois. Sais iônicos podem dissolver por hidratação dos íons, mesmo não sendo moléculas covalentes polares. A polaridade também não determina sozinha o ponto de ebulição, pois massa molar e área de contato alteram forças de dispersão. É preciso identificar o fenômeno observado antes de atribuí-lo a um único fator.",
        "example": "Compare etanol e hexano em água: o etanol interage por ligações de hidrogênio e é miscível; hexano é predominantemente apolar e forma duas fases. Isso não implica que toda substância com oxigênio seja miscível. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não transforme uma aproximação ou fonte isolada em verdade universal; confronte evidências e limites.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual ligação é apolar por envolver átomos idênticos?",
        "options": [
          "H–Cl",
          "O–H",
          "H–H",
          "C–O"
        ],
        "correctIndex": 2,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Na ligação H–H a eletronegatividade é igual nos dois átomos, então não há dipolo permanente de ligação. As demais envolvem elementos com atrações eletrônicas distintas. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "intermediate",
        "prompt": "Por que CO₂ pode ser apolar apesar de ligações polares?",
        "options": [
          "Porque não possui oxigênio",
          "Porque é linear e os dipolos se cancelam",
          "Porque todas as ligações duplas são apolares",
          "Porque é iônico"
        ],
        "correctIndex": 1,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "CO₂ é linear e simétrico: os vetores dipolares das ligações C=O têm sentidos opostos e resultante nula. O tipo de ligação isolada não determina o dipolo total. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre solubilidade é mais precisa?",
        "options": [
          "Polaridade é o único fator relevante",
          "Todo composto com oxigênio é miscível em água",
          "Hidrocarbonetos sempre formam íons em água",
          "Polaridade importa, mas tamanho, entropia e interações também influenciam"
        ],
        "correctIndex": 3,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "A solubilidade depende do balanço termodinâmico e das interações entre soluto e solvente. Polaridade é importante, mas não basta para prever todos os casos. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Interações do tipo íon-dipolo",
    "objective": "Explicar interações íon–dipolo em dissolução, hidratação e condução elétrica, diferenciando energia de rede, solvatação e fatores de solubilidade.",
    "prerequisites": [
      "Íons e cargas elétricas",
      "Polaridade molecular",
      "Soluções e energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Orientação das moléculas polares",
        "explanation": "A interação íon–dipolo ocorre entre uma espécie carregada e uma molécula com dipolo permanente. Na hidratação de Na⁺, a extremidade parcialmente negativa da água, associada ao oxigênio, tende a se orientar para o cátion. Ao redor de Cl⁻, as extremidades parcialmente positivas, associadas aos hidrogênios, orientam-se em direção ao ânion. A orientação resulta de atração eletrostática e é dinâmica: moléculas de água se movem e trocam posições na camada de hidratação. Essa interação não deve ser confundida com ligação covalente, porque a água não precisa compartilhar um novo par eletrônico com o íon para hidratá-lo. Tampouco se deve chamar toda interação entre moléculas de água de íon–dipolo: entre moléculas neutras polares atuam interações dipolo–dipolo e ligações de hidrogênio. Quanto maior a densidade de carga do íon, maior pode ser a intensidade da interação, embora geometria e estrutura do solvente também importem. Um desenho estático de camadas de solvatação é um modelo simplificado de um líquido em movimento.",
        "example": "Em solução aquosa de NaCl, desenhe Na⁺ com oxigênios de H₂O orientados para ele e Cl⁻ com hidrogênios voltados para o ânion. Identifique cargas parciais, não formação de moléculas NaOH ou HCl. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não confunda definição com analogia; verifique o mecanismo envolvido e suas condições de validade.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Competição entre rede e solvatação",
        "explanation": "A dissolução de um sólido iônico exige separar íons de sua rede cristalina e estabilizá-los no solvente. Separar os íons demanda energia, enquanto a hidratação geralmente libera energia; a variação de entalpia de dissolução depende do balanço entre esses efeitos e de outras contribuições. A espontaneidade, porém, depende da energia livre de Gibbs, ΔG=ΔH−TΔS, não apenas de o processo liberar calor. Por isso alguns sais se dissolvem absorvendo energia do ambiente e ainda assim apresentam solubilidade apreciável. A água, por ter elevado momento dipolar e alta constante dielétrica, favorece a estabilização de muitos íons, mas nem todo sal é muito solúvel: BaSO₄, por exemplo, possui solubilidade muito baixa. A solubilidade depende da rede, hidratação, entropia, temperatura e equilíbrio químico. Não é correto dizer que uma força íon–dipolo forte garante dissolução completa de qualquer composto iônico.",
        "example": "Ao dissolver um sal, identifique duas etapas conceituais: desagregar a rede iônica e hidratar os íons separados. Compare os custos e ganhos energéticos e considere ΔS antes de prever espontaneidade. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não generalize um caso sem conferir hipóteses, escalas e propriedades envolvidas.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Condução e propriedades coligativas",
        "explanation": "Um cristal sólido de NaCl não conduz eletricidade como solução aquosa porque seus íons estão presos a posições na rede. Quando o sal se dissolve, íons hidratados tornam-se móveis e transportam carga elétrica sob campo aplicado. A água pura tem condutividade muito menor que uma solução salina comum, mas não é perfeitamente isenta de íons. A concentração e mobilidade dos íons afetam a condutividade; duplicar a concentração não necessariamente duplica a condutividade em todas as faixas devido a interações entre íons. Na idealização de soluções diluídas, a dissociação de NaCl pode gerar aproximadamente duas partículas por unidade de fórmula, influenciando propriedades coligativas. Em soluções reais, pares iônicos e atividades tornam o comportamento menos ideal. A hidratação não neutraliza a carga do íon: Na⁺ continua carregado, embora cercado por moléculas de solvente. Para avaliar dissolução, transporte elétrico e osmose, é preciso distinguir partículas químicas de moléculas de água orientadas ao redor delas.",
        "example": "Compare NaCl sólido e NaCl(aq): no cristal, íons não se deslocam livremente; na solução, Na⁺ e Cl⁻ hidratados migram sob campo elétrico. A diferença de condução é mobilidade, não criação de elétrons livres. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não transforme uma aproximação ou fonte isolada em verdade universal; confronte evidências e limites.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na hidratação de Na⁺, qual região da água tende a apontar para o íon?",
        "options": [
          "Oxigênio parcialmente negativo",
          "Hidrogênios parcialmente positivos",
          "Nenhuma, água é apolar",
          "Ambas as extremidades com a mesma orientação"
        ],
        "correctIndex": 0,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Na água, o oxigênio apresenta carga parcial negativa e é atraído pelo cátion Na⁺. Para ânions, a orientação predominante é invertida. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "intermediate",
        "prompt": "Por que um sal pode dissolver mesmo com dissolução endotérmica?",
        "options": [
          "Porque ΔH positiva garante espontaneidade",
          "Porque energia livre inclui o termo entrópico TΔS",
          "Porque toda dissolução destrói íons",
          "Porque sais não possuem energia de rede"
        ],
        "correctIndex": 1,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "A espontaneidade depende de ΔG=ΔH−TΔS. Um ganho entrópico suficientemente favorável pode tornar ΔG negativa mesmo quando ΔH é positiva. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "advanced",
        "prompt": "Qual diferença explica a condução elétrica de NaCl(aq) em relação ao cristal sólido?",
        "options": [
          "Água transforma íons em elétrons",
          "NaCl sólido não possui cargas",
          "Íons ficam móveis na solução",
          "A água destrói os núcleos atômicos"
        ],
        "correctIndex": 2,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Na solução os íons hidratados podem migrar e transportar carga. No cristal os íons existem, mas estão presos à rede e não têm mobilidade comparável. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Forças: força gravitacional; força peso",
    "objective": "Distinguir peso, normal, tração e atrito em diagramas de corpo livre, aplicar as leis de Newton e reconhecer condições de equilíbrio e movimento.",
    "prerequisites": [
      "Vetores",
      "Segunda lei de Newton",
      "Referenciais inerciais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Peso, normal e pares de interação",
        "explanation": "Peso é a força gravitacional exercida sobre um corpo; perto da superfície terrestre, seu módulo é aproximadamente P=mg, onde g depende do local. A força normal é a interação de contato exercida por uma superfície, perpendicular a ela. Normal e peso não são um par de ação e reação, pois ambos atuam sobre o mesmo corpo; o par do peso é a força gravitacional que o corpo exerce sobre a Terra. Em um bloco em repouso sobre mesa horizontal sem outras forças verticais, N=P por equilíbrio, mas isso não vale automaticamente num elevador acelerado ou plano inclinado. Diagramas de corpo livre exigem escolher um corpo e desenhar somente forças externas que atuam nele. A massa é medida em quilogramas e não varia quando g muda; o peso, em newtons, muda com a intensidade do campo gravitacional. Confundir massa com peso e assumir N=mg em qualquer contexto produz erros em cálculos de atrito e aceleração.",
        "example": "Bloco de 5 kg em mesa horizontal, g=10 m/s²: P=5×10=50 N para baixo. Em repouso e sem outras forças verticais, N=50 N para cima; são forças diferentes que se equilibram. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não confunda definição com analogia; verifique o mecanismo envolvido e suas condições de validade.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Tração, atrito e segunda lei",
        "explanation": "Tração é a força transmitida por corda ou cabo ideal tensionado, dirigida ao longo do fio. Em uma corda ideal de massa desprezível passando por polia ideal, a tração pode ter o mesmo módulo em seus trechos, mas essa igualdade falha se massas e atritos relevantes não forem desprezíveis. O atrito estático se ajusta à necessidade de equilíbrio até seu valor máximo μsN; o cinético, em modelo aproximado, tem módulo μkN durante deslizamento. Um bloco de 4 kg puxado horizontalmente por 20 N sobre superfície com atrito cinético de 8 N possui resultante horizontal de 12 N e aceleração a=12/4=3 m/s². A força normal continua equilibrando o peso se não houver aceleração vertical. É essencial distinguir força aplicada de força resultante: a segunda é a soma vetorial de todas as forças. Atrito não aponta sempre para trás do movimento do centro de massa; sua direção se opõe ao deslizamento relativo ou à tendência de deslizamento no contato.",
        "example": "Bloco de 4 kg recebe tração horizontal de 20 N e atrito cinético de 8 N. Resultante=20−8=12 N; a=12/4=3 m/s². Verifique que N=P se a aceleração vertical é nula. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não generalize um caso sem conferir hipóteses, escalas e propriedades envolvidas.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Elevadores, inclinações e validade",
        "explanation": "Em elevador que acelera para cima, a força normal sobre uma pessoa pode exceder seu peso: N−mg=ma, logo N=m(g+a). Quando acelera para baixo, N=m(g−a), desde que o contato seja mantido; na queda livre ideal, N=0. Em plano inclinado de ângulo θ sem outras forças normais, N=mg cosθ, enquanto a componente do peso paralela ao plano é mg senθ. Essas equações exigem eixos apropriados e hipóteses explícitas sobre outras forças. A sensação de peso aparente relaciona-se à força normal, não a uma alteração instantânea da massa da pessoa. A terceira lei de Newton exige identificar dois corpos diferentes: mesa empurra bloco para cima, bloco empurra mesa para baixo com força de mesmo módulo e sentido oposto. As forças desse par não se cancelam no diagrama do bloco porque atuam em corpos diferentes. Modelos com cordas e polias ideais são aproximações; em problemas reais, inércia rotacional e atrito podem alterar resultados.",
        "example": "Pessoa de 60 kg em elevador com aceleração de 2 m/s² para cima, g=10: N=60(10+2)=720 N. O peso gravitacional continua 600 N; a diferença de 120 N causa a aceleração. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não transforme uma aproximação ou fonte isolada em verdade universal; confronte evidências e limites.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é o par de ação e reação da força normal da mesa sobre o bloco?",
        "options": [
          "O peso do bloco",
          "A força do bloco sobre a mesa",
          "A força da Terra sobre a mesa",
          "A força resultante no bloco"
        ],
        "correctIndex": 1,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Pela terceira lei, a reação à força da mesa sobre o bloco é a força do bloco sobre a mesa. Elas atuam em corpos diferentes e não se cancelam no diagrama do bloco. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "intermediate",
        "prompt": "Um bloco de 4 kg recebe 20 N à direita e atrito de 8 N à esquerda. Sua aceleração é:",
        "options": [
          "5 m/s²",
          "7 m/s²",
          "3 m/s²",
          "12 m/s²"
        ],
        "correctIndex": 2,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "A força resultante é 20−8=12 N. Pela segunda lei, a=Fresultante/m=12/4=3 m/s² para a direita. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "advanced",
        "prompt": "Pessoa de 60 kg em elevador acelerado para cima a 2 m/s², g=10. A normal é:",
        "options": [
          "480 N",
          "600 N",
          "620 N",
          "720 N"
        ],
        "correctIndex": 3,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Pela segunda lei vertical, N−mg=ma. Assim N=60(10+2)=720 N. O peso permanece 600 N, mas a normal aumenta. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Fisiologia dos animais: digestão, respiração, circulação e reprodução",
    "objective": "Integrar digestão, respiração, circulação e reprodução em animais, comparando estratégias fisiológicas e limites de generalizações entre grupos.",
    "prerequisites": [
      "Células e metabolismo",
      "Difusão e transporte",
      "Diversidade animal"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Digestão e absorção",
        "explanation": "Digestão transforma alimentos em moléculas assimiláveis por meio de processos mecânicos e químicos. Em vertebrados, enzimas hidrolíticas atuam em diferentes compartimentos do trato digestório, e a absorção intestinal transfere nutrientes para circulação sanguínea ou linfática. Amilases quebram amido, proteases degradam proteínas e lipases atuam sobre lipídios; bile não é enzima, mas emulsifica gorduras, ampliando a superfície disponível para lipases. Animais não compartilham necessariamente o mesmo aparelho digestório: cnidários apresentam cavidade gastrovascular com uma abertura, enquanto muitos outros grupos possuem tubo digestório completo com boca e ânus. Ruminantes dependem de comunidades microbianas que fermentam componentes vegetais difíceis de degradar diretamente. A presença de dentes ou estômago não basta para classificar uma dieta. O processo deve ser entendido em etapas: ingestão, processamento, absorção e eliminação, com diferenças adaptativas entre linhagens e ambientes.",
        "example": "Após refeição rica em gordura, a bile dispersa gotículas e lipases catalisam hidrólise. Diferencie emulsificação física de reação enzimática e explique por que maior área de contato facilita a digestão. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não confunda definição com analogia; verifique o mecanismo envolvido e suas condições de validade.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Trocas gasosas e transporte circulatório",
        "explanation": "Respiração fisiológica envolve troca de gases com o ambiente e transporte até tecidos; respiração celular é o processo metabólico que pode utilizar oxigênio para produzir ATP. Brânquias oferecem grande superfície para trocas em meio aquático, enquanto pulmões de vertebrados terrestres permitem trocas em superfícies internas úmidas. Insetos possuem sistema traqueal no qual o ar alcança tecidos por ramificações, de modo que a hemolinfa não desempenha necessariamente o papel principal de transportar oxigênio. Sistemas circulatórios fechados mantêm sangue em vasos, enquanto sistemas abertos fazem o fluido circular também por espaços corporais; nenhuma dessas categorias, isoladamente, determina eficiência em todas as condições. Em mamíferos, a circulação dupla separa circuitos pulmonar e sistêmico, e o sangue transporta gases, nutrientes e resíduos. A difusão depende de gradientes de pressão parcial, área e distância; movimentar ar ou água mantém esses gradientes. Confundir ventilação com produção de energia celular prejudica a compreensão do sistema.",
        "example": "Em um peixe, água passa pelas brânquias e oxigênio difunde-se para o sangue por gradiente. Compare com inseto, cujo sistema traqueal leva ar diretamente a tecidos, sem supor que ambos usam pulmões. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não generalize um caso sem conferir hipóteses, escalas e propriedades envolvidas.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Integração metabólica e reprodução",
        "explanation": "Digestão fornece substratos energéticos e matéria-prima; circulação distribui nutrientes e, em muitos animais, gases respiratórios; células utilizam esses recursos para manter funções e produzir ATP. A reprodução requer investimento energético e pode envolver fecundação externa ou interna, cuidado parental e diferentes modos de desenvolvimento. Uma espécie com alta produção de ovos não necessariamente apresenta maior sucesso reprodutivo, pois sobrevivência de descendentes e condições ambientais alteram o resultado. Em vertebrados, hormônios coordenam parte da maturação sexual e dos ciclos reprodutivos, mas os mecanismos diferem entre grupos. Animais ectotérmicos dependem fortemente de condições ambientais para regular temperatura corporal; endotermia exige gasto metabólico significativo para manter temperatura, e não significa independência completa do ambiente. A eficiência dos sistemas deve ser avaliada em conjunto com tamanho, habitat, dieta e história evolutiva. Evite explicar diversidade animal como uma sequência linear de organismos inferiores a superiores.",
        "example": "Compare um mamífero endotérmico e um réptil ectotérmico: o primeiro geralmente mantém temperatura por metabolismo com maior demanda energética; o segundo depende mais de fontes externas de calor. Nenhum é universalmente superior. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não transforme uma aproximação ou fonte isolada em verdade universal; confronte evidências e limites.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a função principal da bile na digestão?",
        "options": [
          "Quebrar proteínas como enzima",
          "Emulsificar lipídios, facilitando a ação de lipases",
          "Produzir ATP diretamente",
          "Absorver oxigênio"
        ],
        "correctIndex": 1,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "A bile emulsifica gorduras e aumenta a área de contato para lipases, mas não atua como enzima digestiva. Digestão química de lipídios envolve hidrólise catalisada. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "intermediate",
        "prompt": "Em muitos insetos, o oxigênio chega aos tecidos principalmente por:",
        "options": [
          "Hemoglobina no sangue",
          "Pulmões alveolares",
          "Sistema traqueal",
          "Brânquias"
        ],
        "correctIndex": 2,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Insetos possuem traqueias e traquíolas que conduzem ar até tecidos. A hemolinfa geralmente não é o principal meio de transporte de oxigênio. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "advanced",
        "prompt": "Qual comparação entre endotermia e ectotermia é adequada?",
        "options": [
          "Endotermia exige produção metabólica de calor e costuma ter maior custo energético",
          "Ectotermia significa ausência de metabolismo",
          "Endotermia elimina influência ambiental",
          "Todos os répteis são endotérmicos"
        ],
        "correctIndex": 0,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Endotérmicos produzem calor metabólico relevante para termorregulação, frequentemente com maior demanda energética. Ectotérmicos também metabolizam energia e são influenciados por ambiente. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Ocupação do litoral e do interior",
    "objective": "Analisar ocupação colonial do litoral e interior da América portuguesa, agentes, conflitos, rotas econômicas e resistências indígenas.",
    "prerequisites": [
      "Expansão marítima",
      "Povos indígenas no território",
      "Economia colonial"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Litoral, capitanias e alianças",
        "explanation": "A ocupação portuguesa da América não começou com controle uniforme de todo o território. No século XVI, iniciativas de exploração do pau-brasil, feitorias e alianças ou conflitos com diferentes povos indígenas concentraram-se em áreas litorâneas. A implantação de capitanias hereditárias em 1534 distribuiu direitos de administração e exploração a donatários, mas os resultados variaram conforme recursos, relações locais e resistência. A criação do governo-geral em 1549 buscou coordenar defesa e administração sem eliminar imediatamente as capitanias. A produção açucareira em partes do litoral nordestino articulou engenhos, comércio atlântico e trabalho compulsório, inclusive escravização indígena e africana. Os povos indígenas não constituíam um bloco homogêneo: tinham línguas, redes políticas e estratégias distintas, incluindo alianças, negociações e guerras. Mapas coloniais refletem pretensões de domínio e não provam ocupação efetiva de cada área representada. A análise deve distinguir presença costeira, soberania alegada e relações concretas no território.",
        "example": "Compare uma carta de doação de capitania com registro de aldeias indígenas: a carta expressa pretensão jurídica portuguesa, enquanto o registro mostra ocupação anterior e disputas. Não conclua que a terra estava desabitada. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não confunda definição com analogia; verifique o mecanismo envolvido e suas condições de validade.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Interiorização, bandeiras e pecuária",
        "explanation": "A expansão para o interior envolveu múltiplos processos e agentes: criação de gado, missões religiosas, expedições de apresamento indígena, busca de metais e redes de comércio. Bandeiras originadas em São Paulo percorreram áreas interiores, frequentemente capturando indígenas e atacando missões; descrevê-las apenas como expedições heroicas de descoberta apaga violência e resistências. A pecuária se expandiu por diferentes sertões, fornecendo animais de transporte, couro e alimentos para zonas produtoras, mas também provocou conflitos fundiários. Rios e caminhos terrestres conectaram núcleos distantes, sem criar ocupação contínua e homogênea. No século XVIII, mineração em Minas Gerais, Goiás e Mato Grosso intensificou migrações, mercados internos e fiscalização fiscal. O avanço colonial não foi um movimento unidirecional do litoral para o interior: havia circulações indígenas anteriores e interações entre regiões. A documentação deve ser confrontada com arqueologia, história indígena e geografia para evitar narrativa exclusivamente europeia.",
        "example": "Uma expedição bandeirante busca capturar indígenas enquanto tropeiros transportam mercadorias a uma zona mineradora. Identifique objetivos diferentes, efeitos sobre populações locais e redes de abastecimento conectadas. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não generalize um caso sem conferir hipóteses, escalas e propriedades envolvidas.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Fronteiras, tratados e agência indígena",
        "explanation": "A ocupação efetiva de partes do interior influenciou disputas de fronteira entre impérios ibéricos. O Tratado de Tordesilhas, de 1494, estabelecia uma linha de partilha diplomática, mas não descreve automaticamente a extensão das ocupações posteriores. O Tratado de Madri, de 1750, empregou em parte o princípio do uti possidetis, valorizando a ocupação efetiva, e envolveu negociações e conflitos sobre áreas disputadas. A resistência de povos indígenas, inclusive em missões e territórios atingidos por deslocamentos, foi central para esses processos. A noção de fronteira colonial não corresponde a linhas modernas fixas desde o início: envolvia jurisdições concorrentes, mobilidade e redes locais. A expansão territorial gerou escravização, epidemias, mudanças ambientais e reconfigurações políticas, mas não extinguiu a capacidade indígena de negociação e ação. Uma interpretação responsável compara mapas de diferentes datas, identifica interesses de seus autores e distingue tratados assinados de sua implementação concreta. A ocupação territorial não legitima retrospectivamente a violência colonial.",
        "example": "Compare mapas baseados em Tordesilhas e em acordos do século XVIII: identifique a diferença entre linha diplomática inicial e áreas ocupadas posteriormente. Relacione alterações a conflitos, negociação e presença indígena. Primeiro identifique os dados ou evidências, depois execute a inferência específica e finalmente confira o alcance e as condições da conclusão.",
        "pitfall": "Não transforme uma aproximação ou fonte isolada em verdade universal; confronte evidências e limites.",
        "steps": [
          "Identifique o fenômeno, os dados e os termos relevantes.",
          "Aplique o conceito ou cálculo específico, explicitando a relação causal.",
          "Confira o resultado e explique condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação sobre as capitanias hereditárias é correta?",
        "options": [
          "Garantiram ocupação homogênea do interior",
          "Eliminaram o governo-geral",
          "Distribuíram direitos de administração, com resultados variados",
          "Aboliram conflitos com povos indígenas"
        ],
        "correctIndex": 2,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "As capitanias concediam direitos a donatários, mas tiveram trajetórias distintas. Não implicaram controle integral do território nem ausência de conflitos. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "intermediate",
        "prompt": "As bandeiras paulistas estiveram associadas, entre outras práticas, a:",
        "options": [
          "Apresamento e escravização de indígenas",
          "Fim de toda exploração territorial",
          "Abolição imediata da escravidão",
          "Criação do Tratado de Tordesilhas"
        ],
        "correctIndex": 0,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "Muitas bandeiras realizaram apresamento indígena e ataques a missões, além de buscas por recursos. A narrativa exclusivamente heroica ignora coerção e resistências. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      },
      {
        "level": "advanced",
        "prompt": "Qual princípio foi relevante em negociações do Tratado de Madri (1750)?",
        "options": [
          "Sufrágio universal",
          "Autodeterminação colonial moderna",
          "Proibição de todas as fronteiras",
          "Uti possidetis, associado à ocupação efetiva"
        ],
        "correctIndex": 3,
        "hint": "Confira a definição, o contexto e os dados do enunciado.",
        "solution": "O princípio de ocupação efetiva orientou parte das negociações do Tratado de Madri. Isso não elimina conflitos, presença indígena ou dificuldades de aplicação dos acordos. As outras alternativas confundem conceitos, pressupostos ou relações e não respondem corretamente às condições propostas."
      }
    ]
  }
];
