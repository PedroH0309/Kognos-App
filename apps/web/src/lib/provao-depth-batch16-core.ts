import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo original Kognos, não oficial e sem homologação docente. */
export const provaoDepthBatch16Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Fórmulas químicas: fórmula mínima",
    "objective": "Analisar fórmulas empíricas e moleculares por meio de conceitos precisos, exemplos demonstrados e interpretação de situações reais, distinguindo pressupostos, consequências e erros frequentes de modo verificável.",
    "prerequisites": [
      "Razões e porcentagens",
      "Massa molar",
      "Quantidade de matéria"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Composição percentual e razão molar",
        "explanation": "Uma fórmula molecular informa a quantidade de átomos de cada elemento em uma molécula; a fórmula mínima expressa apenas a menor razão inteira entre eles. Para obter a fórmula mínima de uma análise percentual, imagine 100 g de amostra, transforme cada massa em mol usando massas atômicas e divida todos os valores pelo menor número de mol. Essa divisão é indispensável: comparar massas diretamente confunde átomos pesados e leves. Para uma substância com 40,0% de carbono, 6,7% de hidrogênio e 53,3% de oxigênio, obtêm-se aproximadamente 3,33 mol de C, 6,7 mol de H e 3,33 mol de O. A razão é 1:2:1, portanto CH₂O. O procedimento pressupõe composição percentual confiável, substância pura e identificação de todos os elementos. Fórmula mínima não identifica, sozinha, uma molécula específica: glicose e formaldeído compartilham a razão CH₂O, mas apresentam propriedades e estruturas distintas.",
        "example": "Em 100 g com 24 g de C e 4 g de H, calcule 24/12=2 mol C e 4/1=4 mol H; divida por 2 e obtenha CH₂. A fórmula é mínima, não necessariamente molecular. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não confunda a definição operacional com uma analogia; verifique a condição de validade e as unidades ou evidências usadas.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Conversão para fórmula molecular",
        "explanation": "A fórmula molecular deve ser um múltiplo inteiro da fórmula mínima quando a espécie possui moléculas discretas. Primeiro calcule a massa da unidade empírica, depois divida a massa molar experimental por essa massa. Se a fórmula mínima é CH₂O, sua massa aproximada é 12+2+16=30 g/mol. Para massa molar medida de 180 g/mol, o fator é 180/30=6, resultando em C₆H₁₂O₆. Um fator não inteiro pode indicar arredondamentos de análise, massas incorretas ou hipótese inadequada de substância pura; não se deve arredondar indiscriminadamente para forçar uma resposta. Em compostos iônicos como NaCl, fala-se preferencialmente em unidade de fórmula, pois não há moléculas isoladas de NaCl na rede cristalina. A fórmula centesimal, por sua vez, descreve porcentagens em massa e não substitui a informação sobre número de átomos. Distinguir esses níveis de representação evita confundir composição, identidade e estrutura.",
        "example": "Para fórmula mínima NO₂ (massa 46 g/mol) e massa molar 92 g/mol, calcule 92/46=2; multiplique os índices de NO₂ por 2 e encontre N₂O₄. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não aplique a regra de um caso a outro sem conferir o que mudou e quais condições permanecem.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Limites analíticos e hidratos",
        "explanation": "Análises de combustão frequentemente medem CO₂ e H₂O produzidos para inferir carbono e hidrogênio da amostra. Cada mol de CO₂ contém um mol de átomos de carbono, e cada mol de H₂O contém dois mols de átomos de hidrogênio. Se a amostra contém apenas C, H e O, o oxigênio pode ser calculado por diferença entre a massa total e as massas atribuídas a C e H; se houver nitrogênio, enxofre ou outros elementos, essa diferença não é válida. Hidratos acrescentam água em proporções definidas, como CuSO₄·5H₂O, e a água de cristalização integra a composição da amostra. Em uma análise real, incerteza de balança e perdas durante aquecimento afetam a razão molar calculada. Fórmulas empíricas não demonstram conectividade entre átomos: compostos isômeros podem compartilhar fórmula molecular. É necessário combinar dados de composição com espectrometria, propriedades e estrutura para identificar a substância com segurança.",
        "example": "Se 0,10 mol de um hidrato perde 0,50 mol de H₂O ao aquecer, divida 0,50 por 0,10=5: há cinco moléculas de água por unidade de fórmula, desde que a perda seja somente água. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não trate um modelo simplificado como universal; procure evidências, exceções e limites da conclusão.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma análise indica 12 g de C e 4 g de H. Qual é a fórmula mínima?",
        "options": [
          "CH₄",
          "C₂H₄",
          "CH₂",
          "C₄H"
        ],
        "correctIndex": 0,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "12/12=1 mol de C; 4/1=4 mol de H. A razão inteira mínima é 1:4, logo CH₄. As demais opções não preservam a razão molar da análise. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "intermediate",
        "prompt": "Uma substância tem fórmula mínima CH₂O e massa molar 60 g/mol. Sua fórmula molecular é:",
        "options": [
          "CH₂O",
          "C₂H₄O₂",
          "C₃H₆O₃",
          "CH₄O"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "A massa de CH₂O é 30 g/mol. O fator 60/30=2 multiplica cada índice, produzindo C₂H₄O₂; não se somam índices nem se altera apenas o hidrogênio. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "advanced",
        "prompt": "Na combustão de composto contendo apenas C, H e O, qual procedimento permite inferir a massa de oxigênio original?",
        "options": [
          "Somar as massas de CO₂ e H₂O",
          "Usar apenas a massa de CO₂",
          "Subtrair da massa inicial as massas de C e H calculadas",
          "Igualar oxigênio a carbono"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "Como a amostra contém exclusivamente C, H e O, a conservação da massa permite obter m(O)=m(amostra)−m(C)−m(H). O oxigênio dos produtos também pode vir do O₂ usado na combustão. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "A eletrosfera e o diagrama de Linus Pauling",
    "objective": "Analisar distribuição eletrônica por meio de conceitos precisos, exemplos demonstrados e interpretação de situações reais, distinguindo pressupostos, consequências e erros frequentes de modo verificável.",
    "prerequisites": [
      "Número atômico e íons",
      "Subníveis s, p, d, f",
      "Princípio de exclusão de Pauli"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Orbitais, subníveis e capacidade",
        "explanation": "A eletrosfera é descrita por estados quânticos, não por órbitas planetárias rígidas. Um orbital comporta no máximo dois elétrons com spins opostos, conforme o princípio de exclusão de Pauli. Os subníveis s, p, d e f comportam respectivamente 2, 6, 10 e 14 elétrons, pois possuem 1, 3, 5 e 7 orbitais. O diagrama de diagonais de Linus Pauling é um recurso mnemônico para a ordem de preenchimento aproximada de átomos neutros em estado fundamental: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Para o sódio neutro, Z=11, a configuração é 1s²2s²2p⁶3s¹. A soma dos expoentes precisa resultar em onze. A distribuição por camadas é 2,8,1, mas camadas e subníveis são conceitos diferentes; a camada de maior número quântico principal não é necessariamente o último subnível preenchido. O diagrama não substitui as regras de Pauli e Hund e contém exceções importantes entre metais de transição.",
        "example": "Para Mg neutro (Z=12), distribua 2 em 1s, 2 em 2s, 6 em 2p e 2 em 3s: 1s²2s²2p⁶3s². Some 2+2+6+2=12. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não confunda a definição operacional com uma analogia; verifique a condição de validade e as unidades ou evidências usadas.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Elétrons de valência e íons",
        "explanation": "A configuração eletrônica ajuda a localizar períodos e famílias representativas. O número quântico principal mais elevado ocupado indica o período em átomos representativos, enquanto a ocupação de s e p da camada externa explica tendências de valência. Cloro neutro, Z=17, possui 1s²2s²2p⁶3s²3p⁵: sete elétrons na camada n=3. Ao formar Cl⁻, ganha um elétron e passa a ter dezoito elétrons, mesma configuração eletrônica do argônio, sem mudar o número de prótons. O cálcio neutro termina em 4s² e Ca²⁺ perde esses dois elétrons, adquirindo configuração de argônio. Em cátions de metais de transição, elétrons do subnível ns são retirados antes dos elétrons (n−1)d, mesmo quando ns foi preenchido primeiro. É incorreto concluir que espécies isoeletrônicas são o mesmo elemento: a identidade química depende de Z, não apenas do número de elétrons.",
        "example": "Para Ca (Z=20), escreva [Ar]4s²; Ca²⁺ perde dois elétrons de 4s e fica [Ar], com 18 elétrons e ainda 20 prótons. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não aplique a regra de um caso a outro sem conferir o que mudou e quais condições permanecem.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Exceções e alcance do diagrama",
        "explanation": "O preenchimento efetivo resulta de energias orbitais próximas, repulsões eletrônicas e estabilizações de configurações específicas. Por isso, o cromo neutro é usualmente representado por [Ar]3d⁵4s¹, e não [Ar]3d⁴4s²; o cobre é [Ar]3d¹⁰4s¹, e não [Ar]3d⁹4s². Esses casos mostram que o diagrama de diagonais não é uma lei absoluta. A regra de Hund orienta ocupar orbitais degenerados individualmente com spins paralelos antes do pareamento, o que explica o desenho de caixas do subnível p. Ao construir um cátion de ferro, Fe neutro é [Ar]3d⁶4s² e Fe²⁺ é [Ar]3d⁶, porque os elétrons 4s são removidos primeiro. A notação abreviada com gás nobre facilita a leitura, mas exige verificar o total de elétrons e a carga. Configuração de estado excitado ou ambiente de ligação química pode exigir descrição diferente da de átomo neutro isolado.",
        "example": "Para Fe²⁺, parta de Fe (Z=26): [Ar]3d⁶4s². Retire dois elétrons de 4s; resta [Ar]3d⁶, com 24 elétrons. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não trate um modelo simplificado como universal; procure evidências, exceções e limites da conclusão.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual a capacidade máxima do subnível p?",
        "options": [
          "2 elétrons",
          "6 elétrons",
          "10 elétrons",
          "14 elétrons"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "O subnível p contém três orbitais; cada orbital comporta dois elétrons, totalizando 3×2=6. As capacidades 2, 10 e 14 correspondem a s, d e f. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos elétrons tem Ca²⁺, se Z=20?",
        "options": [
          "22",
          "20",
          "18",
          "2"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "O átomo neutro possui 20 elétrons. A carga +2 indica perda de dois, restando 18 elétrons; o núcleo mantém 20 prótons. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "advanced",
        "prompt": "Qual é a configuração abreviada correta de Fe²⁺?",
        "options": [
          "[Ar]3d⁶",
          "[Ar]3d⁴4s²",
          "[Ar]3d⁶4s²",
          "[Ar]3d⁸"
        ],
        "correctIndex": 0,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "Ferro neutro é [Ar]3d⁶4s². Na formação de Fe²⁺ removem-se os dois elétrons 4s, resultando em [Ar]3d⁶; o diagrama de preenchimento não determina a ordem de remoção. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Forças e composição vetorial das forças",
    "objective": "Analisar composição de forças por meio de conceitos precisos, exemplos demonstrados e interpretação de situações reais, distinguindo pressupostos, consequências e erros frequentes de modo verificável.",
    "prerequisites": [
      "Vetores e eixos cartesianos",
      "Trigonometria básica",
      "Segunda lei de Newton"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Força como grandeza vetorial",
        "explanation": "Força possui módulo, direção e sentido. Duas forças de 5 N aplicadas em sentidos opostos na mesma reta produzem resultante nula, ao passo que duas forças perpendiculares de 3 N e 4 N produzem módulo resultante 5 N pelo teorema de Pitágoras. Somar apenas módulos é válido somente quando as forças são colineares e apontam no mesmo sentido. O diagrama de corpo livre deve mostrar exclusivamente forças que atuam sobre o corpo escolhido: peso, normal, tração, atrito e outras interações identificadas. A força resultante é a soma vetorial de todas elas, não uma força adicional desenhada no corpo. Para eixos ortogonais, calcule Rx=ΣFx e Ry=ΣFy, então R=√(Rx²+Ry²). O sinal das componentes depende da orientação escolhida. Uma resultante nula indica aceleração nula em referencial inercial, mas não implica repouso: o corpo pode manter velocidade constante diferente de zero.",
        "example": "Uma caixa recebe 8 N para a direita e 3 N para a esquerda. Escolha direita positiva: Rx=+8−3=+5 N. A resultante é 5 N para a direita. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não confunda a definição operacional com uma analogia; verifique a condição de validade e as unidades ou evidências usadas.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Decomposição em eixos",
        "explanation": "Para uma força F que faz ângulo θ com o eixo horizontal positivo, as componentes são Fx=F cosθ e Fy=F senθ, desde que o ângulo tenha sido medido a partir desse eixo. Se o ângulo é medido em relação à vertical, seno e cosseno trocam de papel nas componentes correspondentes. Em plano inclinado de ângulo θ, o peso mg pode ser decomposto em mg senθ paralelo ao plano e mg cosθ perpendicular ao plano; a força normal não é sempre igual a mg. Em superfície sem aceleração perpendicular e sem outras forças nessa direção, N=mg cosθ. Para um bloco de 2 kg num plano de 30° com g=10 m/s², a componente paralela do peso é 20×0,5=10 N. A decomposição é uma ferramenta de cálculo e não cria novas forças físicas. Antes de aplicar F=ma, escolha os eixos que simplificam as restrições do movimento.",
        "example": "Bloco de 2 kg em plano liso a 30°, g=10: P=20 N; P∥=20 sen30°=10 N e P⊥=20 cos30°≈17,3 N. Assim N≈17,3 N. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não aplique a regra de um caso a outro sem conferir o que mudou e quais condições permanecem.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Equilíbrio, atrito e interpretação",
        "explanation": "Equilíbrio translacional exige ΣFx=0 e ΣFy=0 em referencial inercial. Para uma placa suspensa por dois cabos simétricos que formam 30° com a horizontal, as componentes horizontais das trações se cancelam e as verticais somam o peso: 2T sen30°=P, logo T=P. Em sistemas assimétricos, as duas trações não são necessariamente iguais. O atrito estático se ajusta até um limite fₑ≤μₑN; não se deve assumir fₑ=μₑN em toda situação. Já o atrito cinético é frequentemente modelado por f𝚌=μ𝚌N, em condições aproximadas de deslizamento. Uma força resultante constante produz aceleração constante para massa constante, mas uma força individual constante pode ser compensada por outras. A análise exige identificar o corpo, os contatos e a possibilidade de aceleração em cada eixo antes de escrever equações.",
        "example": "Uma placa de peso 100 N é sustentada por dois cabos simétricos a 30° da horizontal: 2T sen30°=100, então T=100 N em cada cabo. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não trate um modelo simplificado como universal; procure evidências, exceções e limites da conclusão.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Forças perpendiculares de 6 N e 8 N têm resultante de módulo:",
        "options": [
          "14 N",
          "2 N",
          "10 N",
          "48 N"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "Como as forças são ortogonais, R=√(6²+8²)=√100=10 N. Somar módulos daria 14 N apenas para forças colineares no mesmo sentido. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "intermediate",
        "prompt": "Em plano inclinado liso de 30°, a componente do peso paralela ao plano é:",
        "options": [
          "mg cos30°",
          "mg sen30°",
          "mg",
          "zero"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "Com os eixos paralelo e perpendicular ao plano, a projeção paralela do peso é mg senθ. A componente mg cosθ é perpendicular e determina a normal quando não há outras forças normais. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "advanced",
        "prompt": "Dois cabos idênticos sustentam 100 N formando 30° com a horizontal, simetricamente. A tração em cada cabo é:",
        "options": [
          "50 N",
          "200 N",
          "100 N",
          "25 N"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "O equilíbrio vertical requer 2T sen30°=100 N. Como sen30°=0,5, resulta T=100 N. As componentes horizontais se anulam pela simetria. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Importância ecológica e econômica de bactérias e fungos",
    "objective": "Analisar papel ecológico de microrganismos por meio de conceitos precisos, exemplos demonstrados e interpretação de situações reais, distinguindo pressupostos, consequências e erros frequentes de modo verificável.",
    "prerequisites": [
      "Ciclos biogeoquímicos",
      "Metabolismo e decomposição",
      "Relações ecológicas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Decomposição e ciclagem de nutrientes",
        "explanation": "Bactérias e fungos incluem decompositores que degradam matéria orgânica morta e liberam nutrientes de volta ao ambiente. A decomposição não é o mesmo que fotossíntese: organismos heterotróficos obtêm carbono e energia de compostos orgânicos, enquanto produtores fotossintéticos fixam carbono inorgânico usando energia luminosa. Fungos apresentam hifas e, em muitos grupos, micélio que amplia a superfície de absorção; bactérias possuem grande diversidade metabólica, incluindo formas decompositoras, autotróficas e simbióticas. Na serapilheira de uma floresta, enzimas extracelulares fragmentam polímeros como celulose e proteínas; a mineralização converte parte dos nutrientes em formas inorgânicas reutilizáveis. A velocidade do processo depende de temperatura, umidade, oxigênio e composição do material. Afirmar que todos os microrganismos causam doenças ignora sua contribuição à fertilidade do solo e à produtividade de ecossistemas.",
        "example": "Em uma composteira aerada, restos vegetais são degradados por fungos e bactérias; a massa orgânica diminui e nutrientes são incorporados ao composto. Sem oxigenação adequada, predominam rotas anaeróbias distintas. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não confunda a definição operacional com uma analogia; verifique a condição de validade e as unidades ou evidências usadas.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Simbioses e aplicações produtivas",
        "explanation": "Micorrizas são associações entre fungos e raízes de plantas: as hifas ampliam o acesso a água e minerais, sobretudo fósforo, enquanto o fungo recebe compostos orgânicos da planta. Nem toda associação é igualmente benéfica em qualquer ambiente; seu efeito depende de espécies e disponibilidade de nutrientes. Bactérias fixadoras de nitrogênio, como rizóbios em nódulos de certas leguminosas, convertem N₂ atmosférico em formas assimiláveis mediante gasto energético. Isso não significa que toda bactéria do solo fixe nitrogênio. Na indústria, leveduras realizam fermentação alcoólica produzindo etanol e CO₂; bactérias lácticas convertem açúcares principalmente em ácido láctico. Pães crescem pela retenção do CO₂ produzido, enquanto iogurtes dependem da acidificação do leite por culturas bacterianas. Identificar organismo, substrato e produto impede atribuir qualquer fermentação ao mesmo processo.",
        "example": "Em massa de pão com levedura, glicose é metabolizada e produz CO₂, que forma bolhas; o etanol também é produzido e parte evapora no forno. Bactérias lácticas são usadas em iogurte, não nessa fermentação alcoólica. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não aplique a regra de um caso a outro sem conferir o que mudou e quais condições permanecem.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Patogenicidade, antibióticos e limites",
        "explanation": "Microrganismos podem ser patógenos, comensais ou mutualistas; essa classificação depende da interação com o hospedeiro e do contexto. Antibióticos atuam contra bactérias suscetíveis, mas não tratam infecções virais e não são antifúngicos universais. A resistência bacteriana resulta de variantes genéticas selecionadas sob exposição ao antimicrobiano; o antibiótico não cria intencionalmente a mutação necessária, mas favorece a sobrevivência de linhagens resistentes. Fungos também podem causar micoses ou produzir toxinas, ao mesmo tempo que espécies selecionadas são utilizadas para obter enzimas, alimentos e moléculas terapêuticas. Penicilina foi descoberta a partir de fungos do gênero Penicillium, mas sua produção industrial envolve controle de linhagens e condições de cultivo. Em biorremediação, a degradação microbiana de poluentes depende da composição química e de condições ambientais; nem todo contaminante pode ser eliminado rapidamente. Benefício econômico não elimina exigências de biossegurança.",
        "example": "Em cultura bacteriana com células sensíveis e resistentes, o antibiótico reduz as sensíveis e aumenta a proporção de resistentes sobreviventes. Isso é seleção, não prova de que cada bactéria aprendeu a resistir. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não trate um modelo simplificado como universal; procure evidências, exceções e limites da conclusão.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual função ecológica é típica de muitos fungos e bactérias decompositores?",
        "options": [
          "Fixar toda a energia solar",
          "Mineralizar nutrientes da matéria orgânica",
          "Impedir qualquer ciclo de nutrientes",
          "Produzir apenas oxigênio"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "Decompositores degradam matéria orgânica e liberam nutrientes, possibilitando sua reutilização. Não são todos fotossintéticos e não bloqueiam os ciclos biogeoquímicos. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "intermediate",
        "prompt": "Na produção de pão com levedura, qual produto favorece o crescimento da massa?",
        "options": [
          "Oxigênio consumido",
          "Ácido clorídrico",
          "Dióxido de carbono",
          "Nitrogênio atmosférico"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "A fermentação alcoólica da levedura produz CO₂ e etanol. O gás retido na rede da massa forma bolhas e promove seu crescimento; não se trata de liberação de oxigênio. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "advanced",
        "prompt": "Por que o uso inadequado de antibióticos favorece resistência bacteriana?",
        "options": [
          "Seleciona variantes resistentes já existentes ou surgidas na população",
          "Transforma vírus em bactérias",
          "Elimina mutações hereditárias",
          "Faz todas as bactérias se tornarem fungos"
        ],
        "correctIndex": 0,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "O antibiótico exerce pressão seletiva: linhagens suscetíveis diminuem e resistentes sobrevivem e se reproduzem. A seleção altera frequências genéticas, não transforma espécies em outros reinos. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Formação dos Estados modernos",
    "objective": "Analisar centralização política europeia por meio de conceitos precisos, exemplos demonstrados e interpretação de situações reais, distinguindo pressupostos, consequências e erros frequentes de modo verificável.",
    "prerequisites": [
      "Feudalismo e relações de suserania",
      "Crise do século XIV",
      "Leitura crítica de fontes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Fragmentação medieval e centralização",
        "explanation": "A formação de monarquias territoriais na Europa ocidental ocorreu de maneira desigual entre os séculos finais da Idade Média e o início da Modernidade. Não foi uma substituição instantânea de feudos por Estados nacionais contemporâneos. Reis ampliaram mecanismos de arrecadação, justiça e administração ao negociar e disputar autoridade com nobres, cidades, instituições religiosas e assembleias. A expansão do comércio e o crescimento urbano aumentaram recursos tributáveis, mas também criaram grupos interessados em regras mais previsíveis para circulação de mercadorias. Na França, a Guerra dos Cem Anos contribuiu para a reorganização militar e fiscal da monarquia; na Inglaterra, conflitos dinásticos e instituições parlamentares produziram trajetória distinta. O termo Estado moderno designa processos de concentração de poderes e institucionalização, não democracia representativa nem igualdade jurídica universal. Comparar casos evita transformar uma experiência particular em lei histórica para todo o continente.",
        "example": "Compare uma cobrança feudal local com imposto régio: no primeiro caso, o senhor arrecada dentro de sua jurisdição; no segundo, a Coroa amplia arrecadação territorial e precisa de agentes e registros para administrá-la. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não confunda a definição operacional com uma analogia; verifique a condição de validade e as unidades ou evidências usadas.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Tributação, exércitos e legitimidade",
        "explanation": "Monarquias fortaleceram tribunais, burocracias e formas de financiamento para sustentar guerras e administração. Exércitos mais permanentes e artilharia elevaram custos, incentivando tributos regulares e negociações com elites econômicas. Isso não eliminou imediatamente mercenários nem privilégios nobiliárquicos. A legitimidade podia ser fundamentada em dinastias, religião, direito e pactos com corpos políticos. Na Península Ibérica, a união dinástica de Castela e Aragão em 1469 não criou de imediato um Estado administrativamente uniforme: instituições e leis distintas persistiram. Em Portugal, processos de centralização e expansão ultramarina combinaram interesses régios, comerciais e religiosos. É incorreto afirmar que a burguesia simplesmente comprou a monarquia ou que reis governaram sempre sem limites; relações entre Coroa, cidades e nobreza variaram no tempo e no espaço. A leitura de documentos fiscais e cartas régias ajuda a distinguir pretensões do monarca de poder efetivamente exercido.",
        "example": "Uma carta régia autoriza cobrança em uma cidade, mas o conselho local negocia isenções. Primeiro identifique a reivindicação da Coroa; depois a resistência local; conclua que centralização e autonomia coexistiam. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não aplique a regra de um caso a outro sem conferir o que mudou e quais condições permanecem.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Absolutismo, soberania e anacronismo",
        "explanation": "O absolutismo é um modelo histórico de concentração de autoridade associado a algumas monarquias europeias, mas sua aplicação deve considerar limites práticos e institucionais. Luís XIV tornou-se símbolo da monarquia francesa centralizada; ainda assim, privilégios fiscais, parlamentos judiciais e elites locais condicionavam a implementação de decisões. Teóricos como Jean Bodin formularam argumentos sobre soberania, enquanto Thomas Hobbes, em outro contexto, defendeu poder soberano forte para superar a guerra civil. Esses autores não descrevem de maneira idêntica todos os reinos. A centralização também se relacionou ao colonialismo e à exploração de territórios ultramarinos, mas não explica sozinha a expansão marítima. O conceito de nação política contemporânea não deve ser projetado automaticamente sobre súditos do século XVI, cuja identificação podia ser local, dinástica ou religiosa. Uma interpretação histórica consistente distingue discurso de legitimação, estrutura administrativa e experiência concreta de diferentes grupos sociais.",
        "example": "Ao analisar um retrato de Luís XIV, separe símbolo de autoridade (vestes e insígnias) de prova de controle efetivo. Confronte a imagem com registros fiscais e conflitos locais antes de concluir que seu poder era ilimitado. Primeiro identifique os dados, depois execute as relações descritas e finalmente confira o alcance da conclusão e a consistência do resultado no contexto.",
        "pitfall": "Não trate um modelo simplificado como universal; procure evidências, exceções e limites da conclusão.",
        "steps": [
          "Identifique o problema e os dados ou evidências disponíveis.",
          "Aplique a relação específica e justifique as etapas intermediárias.",
          "Confira o resultado, as condições de validade e o erro mais provável."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual processo contribuiu para a formação de monarquias territoriais europeias?",
        "options": [
          "Extinção imediata de toda nobreza",
          "Abolição universal de impostos",
          "Ampliação da administração e arrecadação régias",
          "Criação de sufrágio universal"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "A concentração de justiça, tributação e administração sob a Coroa foi gradual e negociada. Nobres continuaram influentes, e sufrágio universal não caracterizou essas monarquias. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "intermediate",
        "prompt": "A união dinástica de Castela e Aragão significou:",
        "options": [
          "Unificação imediata de todas as leis e instituições",
          "Associação de coroas com permanência de instituições distintas",
          "Fim de qualquer poder local",
          "Criação de república parlamentar"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "A união das coroas não eliminou de imediato a diversidade jurídica e institucional dos territórios. A centralização política foi um processo desigual, não um ato único de uniformização. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      },
      {
        "level": "advanced",
        "prompt": "Qual cuidado é essencial ao estudar o absolutismo?",
        "options": [
          "Tomar propaganda régia como prova de poder sem limites",
          "Aplicar conceito atual de cidadania universal ao século XVI",
          "Ignorar conflitos com elites locais",
          "Confrontar discurso de soberania com limites institucionais concretos"
        ],
        "correctIndex": 3,
        "hint": "Identifique a definição aplicável e confira as condições antes de escolher.",
        "solution": "A alternativa D é correta: representações do soberano e teorias de autoridade devem ser comparadas com impostos, privilégios e resistências efetivas. Absolutismo não equivale a controle ilimitado de cada aspecto da sociedade. Confira o enunciado, a relação usada e por que os distratores não satisfazem as condições indicadas."
      }
    ]
  }
];
