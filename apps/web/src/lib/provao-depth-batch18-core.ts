import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos; não oficiais e sem homologação docente. */
export const provaoDepthBatch18Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Equações químicas e balanceamento",
    "objective": "Interpretar e balancear equações químicas conservando átomos e cargas, distinguir coeficientes de índices e aplicar relações estequiométricas com verificação explícita.",
    "prerequisites": [
      "Símbolos e fórmulas químicas",
      "Conservação da matéria",
      "Proporções e multiplicação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Conservação de átomos e leitura da equação",
        "explanation": "Uma equação química representa reagentes à esquerda e produtos à direita, separados por seta. Os índices inferiores pertencem à fórmula da espécie e descrevem sua composição; os coeficientes estequiométricos indicam quantas unidades dessa espécie participam. Balancear é escolher coeficientes que conservem a quantidade de átomos de cada elemento, sem modificar fórmulas para forçar igualdade. Na reação de formação da água, H₂+O₂→H₂O está desbalanceada: há dois átomos de oxigênio à esquerda e um à direita. Escrevendo 2H₂+O₂→2H₂O, passam a existir quatro átomos de hidrogênio e dois de oxigênio em ambos os lados. A equação não descreve necessariamente uma etapa molecular única; frequentemente resume transformações que envolvem mecanismos intermediários. O estado físico, quando indicado por (s), (l), (g) ou (aq), altera a interpretação da reação, mas não o balanço atômico. Conservar massa não significa conservar o número de moléculas.",
        "example": "Para 2H₂+O₂→2H₂O, conte H: esquerda 2×2=4, direita 2×2=4; conte O: esquerda 1×2=2, direita 2×1=2. Os dois elementos estão conservados. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não altere definições ou fórmulas para ajustar uma resposta; confira os dados e o que está sendo representado.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Método algébrico e coeficientes mínimos",
        "explanation": "Em reações com vários compostos, atribuir incógnitas aos coeficientes transforma o balanço em um sistema linear. Na combustão completa do etanol, C₂H₆O+O₂→CO₂+H₂O, comece pelo carbono: dois átomos de C exigem 2CO₂. Seis H exigem 3H₂O. Os produtos contêm 4+3=7 átomos de oxigênio; um já vem do etanol, restando seis provenientes de 3O₂. A equação balanceada é C₂H₆O+3O₂→2CO₂+3H₂O. Esse raciocínio supõe combustão completa, não formação significativa de CO ou fuligem. Os coeficientes são razões de quantidade de matéria e podem ser multiplicados por qualquer fator comum sem mudar a proporção; por convenção, apresentam-se os menores inteiros positivos. Ajustar oxigênio ao final costuma simplificar combustões, mas não é uma regra universal para todos os sistemas.",
        "example": "Na reação C₃H₈+O₂→CO₂+H₂O, ajuste C: 3CO₂; H: 4H₂O; O nos produtos: 6+4=10 átomos, então 5O₂. Resultado C₃H₈+5O₂→3CO₂+4H₂O. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não generalize o exemplo sem verificar as condições de aplicação e a distinção entre grandezas ou processos.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Íons, carga elétrica e limites do balanço",
        "explanation": "Em equações iônicas, além dos átomos, a carga elétrica total deve ser conservada. A precipitação Ag⁺(aq)+Cl⁻(aq)→AgCl(s) tem carga zero em ambos os lados e conserva um átomo de prata e um de cloro. Em processos de oxirredução, balancear somente átomos pode produzir equações impossíveis porque elétrons são transferidos; o método de semirreações permite equilibrar massa e carga. Para Fe²⁺→Fe³⁺+e⁻, a carga da esquerda é +2 e a da direita é +3−1=+2. Equações balanceadas não informam velocidade, espontaneidade ou rendimento real: 100% de conversão é hipótese adicional. Uma reação reversível pode ter equilíbrio químico sem consumir completamente reagentes. Ao comparar equações, distinga conservação química de conservação de massa medida em recipiente aberto, onde gases podem escapar. A verificação final deve contar cada elemento e, quando aplicável, a carga total, antes de usar coeficientes em cálculos.",
        "example": "Na semirreação Fe²⁺→Fe³⁺+e⁻, verifique um Fe de cada lado e carga +2 à esquerda contra +3+(−1)=+2 à direita. O elétron não é um átomo, mas é necessário para conservar carga. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não confunda modelo explicativo com lei universal; examine exceções, evidências e limitações.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual equação está corretamente balanceada?",
        "options": [
          "H₂+O₂→H₂O",
          "2H₂+O₂→2H₂O",
          "H₂+2O₂→H₂O",
          "2H₂+2O₂→H₂O"
        ],
        "correctIndex": 1,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "A opção B conserva quatro átomos de H e dois de O em cada lado. Nas outras, a contagem de pelo menos um elemento não coincide. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Na combustão completa de um mol de propano, quantos mols de O₂ são necessários?",
        "options": [
          "3",
          "4",
          "5",
          "8"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "C₃H₈+5O₂→3CO₂+4H₂O. O balanço fornece 5 mol de O₂ por mol de propano quando a combustão é completa. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Na semirreação Fe²⁺→Fe³⁺+e⁻, a carga elétrica total:",
        "options": [
          "É conservada: +2 nos dois lados",
          "Aumenta de +2 para +3",
          "Desaparece",
          "Não precisa ser verificada"
        ],
        "correctIndex": 0,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "À direita, +3−1=+2, igual à esquerda. O elétron é indispensável ao balanço de carga. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Geometria molecular",
    "objective": "Prever geometria e ângulos moleculares pelo modelo RPECV, distinguir arranjo eletrônico e forma molecular e reconhecer limitações de moléculas reais.",
    "prerequisites": [
      "Estruturas de Lewis",
      "Ligações covalentes",
      "Pares eletrônicos ligantes e isolados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Domínios eletrônicos e RPECV",
        "explanation": "O modelo da repulsão dos pares eletrônicos da camada de valência, conhecido como RPECV ou VSEPR, organiza regiões de densidade eletrônica em torno de um átomo central para reduzir repulsões. Uma ligação simples, dupla ou tripla conta como um domínio de ligação na previsão básica da geometria, enquanto cada par isolado também conta como domínio. Dois domínios produzem arranjo linear, três produzem arranjo trigonal plano e quatro produzem arranjo tetraédrico. Em CO₂, o carbono central possui dois domínios de ligação e nenhum par isolado, portanto O=C=O é linear, com ângulo próximo de 180°. Em BF₃, o boro possui três domínios ligantes, arranjo trigonal plano e ângulos próximos de 120°. A estrutura de Lewis deve ser construída antes da geometria: escolher uma forma apenas pela fórmula molecular ignora pares isolados. O modelo fornece previsão aproximada e não substitui medidas espectroscópicas nem cálculos quânticos.",
        "example": "No CO₂, desenhe O=C=O; cada dupla conta como um domínio em torno de C. São dois domínios e zero pares isolados no centro: geometria linear, ângulo O–C–O de 180°. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não altere definições ou fórmulas para ajustar uma resposta; confira os dados e o que está sendo representado.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Pares isolados e ângulos reais",
        "explanation": "Arranjo eletrônico e geometria molecular não são sinônimos. Na amônia NH₃, o nitrogênio central tem três pares ligantes e um isolado, somando quatro domínios: arranjo eletrônico tetraédrico, mas geometria molecular piramidal trigonal. O ângulo H–N–H é aproximadamente 107°, menor que o tetraédrico ideal de 109,5°, devido às repulsões distintas entre pares. Na água H₂O, o oxigênio tem dois pares ligantes e dois isolados, também quatro domínios, mas a forma molecular é angular, com ângulo H–O–H de aproximadamente 104,5°. Pares isolados ocupam espaço eletrônico e alteram os ângulos, embora não apareçam como átomos na forma molecular. Em CH₄, quatro pares ligantes e nenhum isolado dão geometria tetraédrica com ângulos próximos de 109,5°. A regra simplificada não explica igualmente bem todos os compostos, sobretudo espécies com elétrons deslocalizados ou metais de transição.",
        "example": "Para NH₃, conte três ligações N–H e um par isolado em N. Quatro domínios definem arranjo tetraédrico; ao descrever apenas os núcleos, a forma é piramidal trigonal, não tetraédrica. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não generalize o exemplo sem verificar as condições de aplicação e a distinção entre grandezas ou processos.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Geometria, polaridade e exceções",
        "explanation": "A polaridade molecular depende tanto da polaridade das ligações quanto de sua orientação espacial. Em CO₂, as ligações C=O são polares, mas seus dipolos opostos se cancelam pela geometria linear; a molécula é apolar no conjunto. Em H₂O, as ligações O–H são polares e a geometria angular impede cancelamento, tornando a molécula polar. Em CCl₄, as quatro ligações C–Cl são polares, mas a simetria tetraédrica resulta em cancelamento dos vetores dipolo. Substituir um ligante por outro pode quebrar a simetria e mudar o dipolo resultante. O modelo RPECV pode ser estendido a cinco ou seis domínios, produzindo arranjos bipiramidal trigonal e octaédrico, mas hipervalência e distribuição eletrônica exigem cautela. A presença de ligação polar não basta para afirmar que a molécula inteira é polar. Para prever propriedades como solubilidade e ebulição, também é necessário considerar massa molecular e forças intermoleculares.",
        "example": "Compare CO₂ e H₂O: em CO₂, dois dipolos C=O de mesma intensidade em sentidos opostos se anulam; em H₂O, o ângulo de cerca de 104,5° impede cancelamento, dando dipolo resultante. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não confunda modelo explicativo com lei universal; examine exceções, evidências e limitações.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A geometria do CO₂ no modelo RPECV é:",
        "options": [
          "Angular",
          "Linear",
          "Piramidal trigonal",
          "Tetraédrica"
        ],
        "correctIndex": 1,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "O carbono tem dois domínios de ligação e nenhum par isolado, resultando em disposição linear de 180°. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "A geometria molecular do NH₃ é:",
        "options": [
          "Trigonal plana",
          "Linear",
          "Piramidal trigonal",
          "Angular"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "O nitrogênio possui três pares ligantes e um isolado; o arranjo eletrônico é tetraédrico, mas os átomos formam pirâmide trigonal. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Por que o CO₂ é apolar apesar das ligações C=O polares?",
        "options": [
          "As ligações não têm elétrons",
          "O carbono é metálico",
          "Toda molécula linear é polar",
          "Os dipolos opostos se cancelam pela simetria linear"
        ],
        "correctIndex": 3,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "Os vetores dipolo C=O têm sentidos opostos e mesma intensidade na geometria linear, produzindo momento dipolar resultante nulo. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Lei da gravitação universal de Newton",
    "objective": "Aplicar a gravitação universal a forças, campos e órbitas, distinguindo massa, peso, distância entre centros e aproximações de campo uniforme.",
    "prerequisites": [
      "Segunda lei de Newton",
      "Potências e notação científica",
      "Movimento circular"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Força gravitacional e lei do inverso do quadrado",
        "explanation": "A lei da gravitação universal de Newton estabelece que duas massas puntiformes se atraem com força de módulo F=Gm₁m₂/r², em que r é a distância entre seus centros e G é a constante gravitacional. Para corpos aproximadamente esféricos com distribuição de massa simétrica, a mesma expressão pode descrever a interação externa como se a massa estivesse concentrada no centro. A força é atrativa, atua ao longo da linha que une os centros e constitui um par ação-reação: os módulos sobre cada corpo são iguais, mas as acelerações podem ser diferentes porque as massas diferem. Se a distância dobra, a força cai a um quarto; se uma massa dobra, a força dobra, mantendo o restante fixo. Não se deve usar a distância entre superfícies como r. A gravitação newtoniana funciona muito bem em numerosas situações do ensino médio, mas não é a descrição mais completa em campos extremos, onde a relatividade geral é necessária.",
        "example": "Se duas massas de 2 kg e 3 kg estão separadas por 2 m, F=G×2×3/2²=1,5G N. Ao aumentar r para 4 m, F=G×6/16=0,375G N, exatamente um quarto do valor inicial. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não altere definições ou fórmulas para ajustar uma resposta; confira os dados e o que está sendo representado.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Campo gravitacional e peso",
        "explanation": "Campo gravitacional é força por unidade de massa de prova: g=F/m. Perto de um corpo esférico de massa M, fora de sua distribuição de massa, g=GM/r², orientado para o centro. O peso de um objeto é P=mg, enquanto sua massa mede inércia e não se altera apenas por deslocá-lo da Terra à Lua. Para um corpo de 5 kg em local onde g=10 m/s², o peso vale 50 N; em outro local onde g=2 m/s², vale 10 N, mas a massa permanece 5 kg. A aproximação g constante é útil para alturas pequenas em relação ao raio terrestre, porém em satélites e trajetórias espaciais a variação com r precisa ser considerada. A expressão g=GM/r² não pode ser aplicada sem cuidado no interior de planetas, pois a distribuição de massa importa. Queda livre ideal significa movimento apenas sob gravidade, desprezando resistência do ar, não ausência de força.",
        "example": "Um astronauta de massa 70 kg está em região com g=1,6 m/s². Calcule P=70×1,6=112 N. A massa continua 70 kg; o peso diminui porque o campo local é menor. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não generalize o exemplo sem verificar as condições de aplicação e a distinção entre grandezas ou processos.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Órbitas e velocidade orbital",
        "explanation": "Um satélite em órbita circular está em queda livre contínua: a gravidade fornece a aceleração centrípeta. Igualando GMm/r² a mv²/r, obtém-se v=√(GM/r), em que r é a distância ao centro do planeta, não a altitude sobre a superfície. A massa m do satélite cancela nessa aproximação, de modo que objetos de massas diferentes na mesma órbita circular ideal possuem a mesma velocidade orbital. Se o raio orbital quadruplica, a velocidade cai à metade. O período pode ser calculado por T=2πr/v, produzindo T² proporcional a r³ para órbitas em torno do mesmo corpo central. O modelo supõe massa central dominante, órbita circular e perturbações desprezíveis. Satélites reais podem ter órbitas elípticas e sofrer arrasto atmosférico, irregularidades gravitacionais e perturbações de outros corpos. Estar em órbita não significa que a força gravitacional desapareceu; a sensação de imponderabilidade decorre da queda livre compartilhada.",
        "example": "Para órbitas circulares de raios r e 4r em torno do mesmo planeta, v₁=√(GM/r) e v₂=√(GM/(4r))=v₁/2. A massa do satélite não aparece no resultado. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não confunda modelo explicativo com lei universal; examine exceções, evidências e limitações.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Se a distância entre duas massas puntiformes dobra, a força gravitacional:",
        "options": [
          "Dobra",
          "Cai à metade",
          "Cai a um quarto",
          "Quadruplica"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "F é inversamente proporcional a r². Substituir r por 2r divide a força por 4, mantendo as massas constantes. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Um corpo de 3 kg num local com g=4 m/s² tem peso de:",
        "options": [
          "0,75 N",
          "7 N",
          "12 N",
          "24 N"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "O peso é P=mg=3×4=12 N. A massa continua 3 kg independentemente do campo local. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Em órbita circular ideal de raio 4r, a velocidade orbital em comparação à de raio r é:",
        "options": [
          "Duas vezes maior",
          "A metade",
          "Quatro vezes maior",
          "Igual"
        ],
        "correctIndex": 1,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "Como v=√(GM/r), quadruplicar r divide v por √4=2. O resultado pressupõe mesmo corpo central e órbitas circulares. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Sucessão ecológica",
    "objective": "Interpretar sucessão primária e secundária, alterações na comunidade e fatores que limitam a ideia de clímax fixo, com exemplos de recuperação ambiental.",
    "prerequisites": [
      "Populações e comunidades",
      "Fotossíntese e decomposição",
      "Distúrbios ecológicos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Colonização, pioneiras e sucessão primária",
        "explanation": "Sucessão ecológica é a mudança na composição e nas interações de uma comunidade ao longo do tempo, influenciada por colonização, crescimento, competição, facilitação e perturbações. A sucessão primária ocorre em superfícies sem solo desenvolvido e sem comunidade anterior estabelecida, como rocha recém-exposta após recuo glacial. Microrganismos, líquens e plantas capazes de tolerar condições extremas podem contribuir para intemperismo e acúmulo de matéria orgânica, favorecendo espécies posteriores. Nem toda sucessão começa obrigatoriamente com líquens; a sequência depende de clima, substrato, propágulos e dispersores disponíveis. A presença de espécies pioneiras não significa que elas sejam menos evoluídas, apenas que possuem características adequadas às condições iniciais. A formação de solo pode levar muito tempo, e a velocidade da sucessão varia enormemente. É incorreto assumir que toda comunidade progride de modo linear para uma floresta: em ambientes áridos ou frios, outras formações podem ser persistentes.",
        "example": "Em rocha vulcânica recém-solidificada, não há solo prévio. Primeiro chegam organismos tolerantes, acumulam-se partículas e matéria orgânica e novas plantas conseguem se estabelecer. Classifique como sucessão primária pela ausência inicial de solo. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não altere definições ou fórmulas para ajustar uma resposta; confira os dados e o que está sendo representado.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Sucessão secundária e dinâmica pós-distúrbio",
        "explanation": "A sucessão secundária acontece após um distúrbio que remove parte da comunidade, mas preserva ao menos parte do solo ou de seus legados biológicos. Em uma área agrícola abandonada, sementes no banco do solo, raízes, microrganismos e espécies vindas de fragmentos próximos influenciam o retorno da vegetação. Gramíneas e herbáceas podem dominar inicialmente, seguidas de arbustos e árvores em determinados ambientes, mas essa ordem não é universal. Incêndios podem gerar trajetórias distintas conforme intensidade, frequência e adaptações das espécies; em savanas, fogo periódico integra processos ecológicos e não implica necessariamente degradação permanente. A velocidade da recuperação depende da fertilidade, da disponibilidade de água, da pressão de herbívoros, da conectividade e de novas perturbações. Comparar sucessão primária e secundária exige verificar a existência de solo e legados ecológicos, não apenas se há árvores no começo. O uso de espécies exóticas invasoras pode alterar profundamente a trajetória.",
        "example": "Um pasto abandonado mantém solo, sementes e microrganismos. A colonização por ervas e arbustos é sucessão secundária; compare com rocha exposta, onde o solo precisa se desenvolver primeiro. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não generalize o exemplo sem verificar as condições de aplicação e a distinção entre grandezas ou processos.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Diversidade, biomassa e clímax dinâmico",
        "explanation": "Ao longo de muitas trajetórias sucessionais, biomassa, estrutura vertical e complexidade de interações podem aumentar, mas diversidade de espécies e produtividade não crescem indefinidamente em todos os casos. A riqueza pode atingir máximo intermediário e diminuir se poucas espécies competitivamente dominantes se estabelecerem. O conceito histórico de clímax sugeria comunidade final relativamente estável, porém a ecologia contemporânea reconhece múltiplos estados possíveis, perturbações recorrentes e mudanças climáticas. Em restauração ecológica, plantar árvores não garante reconstrução de processos como dispersão, polinização e ciclagem de nutrientes; é preciso monitorar recrutamento, espécies nativas e funcionamento ecológico. Uma comunidade pode apresentar alta biomassa e baixa diversidade se dominada por monocultura. O sucesso da recuperação depende dos objetivos, da referência ecológica e da manutenção a longo prazo. Não confunda sucessão com evolução genética: sucessão altera a comunidade, enquanto evolução altera frequências hereditárias em populações.",
        "example": "Duas áreas têm biomassa igual; uma contém dez espécies nativas e regeneração natural, outra apenas uma árvore exótica plantada. A biomassa isolada não comprova restauração da comunidade nem de suas funções. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não confunda modelo explicativo com lei universal; examine exceções, evidências e limitações.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A sucessão primária se distingue por começar geralmente em:",
        "options": [
          "Área com solo e banco de sementes preservados",
          "Superfície sem solo desenvolvido",
          "Floresta madura intacta",
          "Pastagem abandonada com raízes"
        ],
        "correctIndex": 1,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "Sucessão primária inicia em substrato sem solo desenvolvido e comunidade anterior estabelecida. Pastagem abandonada tende a representar sucessão secundária. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Após abandono de lavoura com solo preservado, ocorre normalmente:",
        "options": [
          "Sucessão secundária",
          "Sucessão primária obrigatória",
          "Ausência de colonização",
          "Evolução instantânea de novas espécies"
        ],
        "correctIndex": 0,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "A preservação do solo e de legados biológicos caracteriza sucessão secundária. A sequência de espécies depende do ambiente e da dispersão. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre o clímax ecológico é mais adequada?",
        "options": [
          "Toda sucessão termina necessariamente em floresta",
          "A diversidade sempre cresce sem limite",
          "Comunidades podem apresentar estados dinâmicos e perturbações recorrentes",
          "Alta biomassa prova diversidade elevada"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "Ecossistemas não seguem obrigatoriamente uma única sequência até estado final fixo. Distúrbios, clima e interações podem manter estados alternativos. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Revolução Industrial",
    "objective": "Explicar a mecanização industrial e suas relações com energia, trabalho assalariado, urbanização e conflitos sociais, diferenciando ritmos regionais e fontes.",
    "prerequisites": [
      "Mercantilismo e comércio atlântico",
      "Artesanato e manufatura",
      "Estratificação social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Mecanização e condições da industrialização",
        "explanation": "A Primeira Revolução Industrial teve início na Grã-Bretanha na segunda metade do século XVIII, com mudanças na produção têxtil, na mineração, na siderurgia e no transporte. Máquinas de fiar e tecer ampliaram a produtividade em atividades específicas, enquanto o uso do carvão mineral e o aperfeiçoamento de máquinas a vapor favoreceram novas formas de energia mecânica. A industrialização não surgiu de uma única invenção: dependeu de mercados, capitais, infraestrutura, conhecimentos técnicos, transformações agrárias e instituições. A acumulação de recursos ligada ao comércio atlântico e ao colonialismo participou do contexto, mas sua importância relativa é objeto de pesquisa histórica e não deve ser reduzida a causa única. A produção fabril concentrou equipamentos e trabalhadores, alterando ritmos de trabalho em comparação com oficinas e trabalho domiciliar. Artesanato e manufatura não desapareceram imediatamente; coexistiram com fábricas por longos períodos. A cronologia britânica não se aplica de modo automático a outros países.",
        "example": "Compare uma oficina com cinco tecelões usando teares manuais e fábrica com teares mecanizados: a máquina aumenta produção por unidade de tempo, mas exige capital, energia, manutenção e organização diferente do trabalho. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não altere definições ou fórmulas para ajustar uma resposta; confira os dados e o que está sendo representado.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Trabalho, cidade e conflitos sociais",
        "explanation": "A expansão das fábricas alterou relações de trabalho e contribuiu para crescimento urbano em centros industriais. Jornadas longas, baixos salários, acidentes e emprego de mulheres e crianças marcaram muitos setores, embora condições variassem por região, atividade e período. A disciplina fabril buscava coordenar horários, máquinas e produtividade, contrastando com formas mais flexíveis de parte do trabalho doméstico. Trabalhadores organizaram associações, greves e campanhas por direitos, enfrentando frequentemente restrições legais. O ludismo envolveu ações de destruição de máquinas em contextos de conflito econômico e político; não deve ser descrito simplesmente como rejeição irracional a toda tecnologia. O cartismo, na Grã-Bretanha do século XIX, reivindicou reformas políticas, incluindo ampliação da participação eleitoral masculina. Urbanização rápida pressionou moradia, saneamento e abastecimento, mas também favoreceu redes de sociabilidade e mobilização. Fontes produzidas por patrões, reformadores e operários expressam posições distintas e exigem leitura contextual.",
        "example": "Ao analisar uma jornada fabril de 14 horas e um panfleto operário pedindo redução, identifique condição de trabalho e reivindicação. Não conclua que todos os trabalhadores viviam situação idêntica sem comparar setor e período. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não generalize o exemplo sem verificar as condições de aplicação e a distinção entre grandezas ou processos.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Difusão industrial, ambiente e interpretações",
        "explanation": "A industrialização difundiu-se de maneira desigual para regiões europeias, Estados Unidos e outras partes do mundo, combinando tecnologias, políticas econômicas e estruturas sociais locais. A chamada Segunda Revolução Industrial, especialmente do fim do século XIX, associou-se à eletricidade, ao petróleo, à química industrial e à produção de aço em larga escala, sem substituir instantaneamente o carvão ou o vapor. Ferrovias ampliaram circulação de mercadorias e pessoas, mas seus benefícios foram distribuídos de modo desigual. O uso intensivo de combustíveis fósseis contribuiu para poluição atmosférica e transformações ambientais duradouras. Não se deve interpretar a industrialização como progresso uniforme: crescimento de produtividade coexistiu com exploração, desigualdades e lutas por regulação. Também é anacrônico aplicar diretamente categorias atuais de emprego formal a todas as relações do século XVIII. Uma interpretação sólida articula indicadores de produção, relatos de trabalhadores, legislação e efeitos territoriais, evitando explicações monocausais.",
        "example": "Compare duas fontes: relatório empresarial sobre aumento de peças por hora e depoimento sobre acidentes. O primeiro informa produtividade; o segundo, custos humanos. Ambos são necessários para avaliar impactos da industrialização. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não confunda modelo explicativo com lei universal; examine exceções, evidências e limitações.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fonte energética teve papel central na industrialização britânica inicial?",
        "options": [
          "Energia nuclear",
          "Carvão mineral e vapor",
          "Painéis fotovoltaicos",
          "Baterias de lítio"
        ],
        "correctIndex": 1,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "Carvão e máquinas a vapor foram centrais em vários setores da industrialização inicial. As outras tecnologias pertencem a períodos posteriores. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "O cartismo britânico reivindicava principalmente:",
        "options": [
          "Retorno universal ao feudalismo",
          "Proibição definitiva de fábricas",
          "Reformas de participação política",
          "Expansão de servidão hereditária"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "O cartismo articulou demandas de reforma política, incluindo ampliação do sufrágio masculino e mudanças na representação. Não era um movimento de restauração feudal. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Qual interpretação histórica da industrialização é mais consistente?",
        "options": [
          "Produtividade maior garante condições de trabalho melhores imediatamente",
          "Máquinas eliminaram o artesanato no século XVIII",
          "Todas as regiões industrializaram ao mesmo tempo",
          "Mudanças técnicas coexistiram com conflitos trabalhistas e impactos ambientais"
        ],
        "correctIndex": 3,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "O processo combinou ganhos produtivos com desigualdades, mobilização social e custos ambientais, variando por região e período. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      }
    ]
  }
];
