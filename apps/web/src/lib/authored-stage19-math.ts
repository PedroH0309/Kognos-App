import type {TopicSeed} from './authored-stage19-seed.ts';
export const stage19Math:TopicSeed[]=[
  {
    "subject": "Matemática",
    "topic": "MDC e MMC",
    "objective": "Calcular máximo divisor comum e mínimo múltiplo comum por decomposição, aplicando-os à simplificação de frações e sincronização de ciclos.",
    "chapters": [
      [
        "Divisores comuns",
        "Divisor de um inteiro positivo é outro inteiro que o divide sem resto. O MDC de dois valores positivos é o maior divisor compartilhado, útil para repartir quantidades em grupos iguais sem sobra. Não o confunda com o maior dos números comparados: para 12 e 18 o máximo divisor comum é 6.",
        "Uma escola distribui 12 lápis e 18 canetas em kits idênticos sem sobras: o máximo é seis kits, com dois lápis e três canetas por kit.",
        "O MDC de 12 e 18 vale 18 porque 18 é o maior número.",
        "Qual o MDC de 24 e 36?",
        "Procure fatores primos comuns com os menores expoentes.",
        "24=2³·3 e 36=2²·3²; os fatores comuns mínimos dão 2²·3=12.",
        "Dezoito nem sequer divide 12; o MDC deve dividir ambos os números e ser o maior com essa propriedade."
      ],
      [
        "Múltiplos e coincidências",
        "Um múltiplo de n pode ser escrito como k·n para inteiro k. O MMC positivo determina quando ciclos de períodos inteiros voltam a coincidir; em fatoração prima, conserva o maior expoente de cada primo. A interpretação requer mesma unidade de tempo, ou o encontro previsto será calculado incorretamente.",
        "Duas luzes piscam a cada 6 e 8 segundos, juntas no início; a próxima coincidência ocorre 24 segundos depois.",
        "MMC é obtido sempre pela multiplicação dos dois números, mesmo se compartilham fatores.",
        "Calcule o MMC de 12 e 18.",
        "Use todos os primos com maiores expoentes.",
        "12=2²·3 e 18=2·3². MMC=2²·3²=36.",
        "O produto é apenas um múltiplo comum; quando os fatores se repetem, normalmente não é o mínimo."
      ],
      [
        "Escolher operação pelo enunciado",
        "O MDC ajuda a maximizar o número de grupos idênticos sem sobras; o MMC encontra o primeiro instante comum de eventos periódicos. Ambos podem ser relacionados por MDC(a,b)·MMC(a,b)=a·b, para inteiros positivos. O objetivo do problema, e não a presença de dois números, determina a ferramenta.",
        "Para simplificar 18/24, divida ambos por MDC=6, obtendo 3/4; para reencontro de ciclos 18 e 24, use MMC=72.",
        "Todo problema com duas quantidades deve ser resolvido calculando o MMC.",
        "Dois ônibus partem juntos a cada 15 e 20 minutos. Quando voltam a partir juntos?",
        "Busque o menor múltiplo positivo comum.",
        "MMC(15,20)=60; a próxima partida simultânea ocorre em 60 minutos, se os períodos permanecem fixos.",
        "Repartição em grupos pede divisor comum, mas coincidência de períodos pede múltiplo comum."
      ]
    ],
    "situation": [
      "Uma escola tem 24 cadernos e 36 lápis para montar a maior quantidade possível de kits com a mesma composição, sem sobras; um aluno propõe usar MMC.",
      "Qual é o máximo de kits e por que se deve usar MDC, não MMC?",
      "MDC(24,36)=12. É possível montar doze kits de dois cadernos e três lápis; o MMC não responde à divisão em grupos sem sobras."
    ],
    "links": [
      [
        "Matemática",
        "Frações e operações",
        "Divisibilidade e MDC permitem simplificar frações, preservando a mesma razão numérica."
      ],
      [
        "Matemática",
        "Operações, divisibilidade e conjuntos numéricos",
        "Os fatores e divisores já estudados fundamentam procedimentos de cálculo de MDC e MMC."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Juros simples",
    "objective": "Calcular juros lineares sob taxa por período e distinguir capital, montante e prazo em contratos hipotéticos.",
    "chapters": [
      [
        "Capital, taxa e tempo",
        "No regime de juros simples, o juro de cada período é calculado sobre o capital inicial C e não sobre os juros acumulados. Com taxa i e número n de períodos compatíveis, J=C·i·n; montante M=C+J. Taxa de 2% ao mês corresponde a i=0,02 por mês, e não 2 na fórmula.",
        "Um empréstimo hipotético de R$ 1.000 a 2% ao mês durante três meses gera 1000×0,02×3=R$ 60 em juros simples.",
        "Taxa de 2% deve ser substituída por número 2, porque o sinal de porcentagem não altera a conta.",
        "Calcule o juro simples de R$ 600 a 1% ao mês em cinco meses.",
        "Converta 1% para 0,01.",
        "J=600×0,01×5=R$ 30. O montante final é R$ 630, sem outras taxas.",
        "2% representa 2/100; usar o número 2 isolado aumentaria o resultado cem vezes."
      ],
      [
        "Crescimento linear",
        "Mantendo capital e taxa, o acréscimo por período é constante: M(n)=C(1+in). Isso produz reta em gráfico montante versus tempo, diferentemente do regime composto. O juro não é valor pago necessariamente sem considerar parcelas, impostos ou encargos que não aparecem no modelo idealizado.",
        "Em capital de R$ 500 com taxa simples de 4% mensal, o montante cresce R$ 20 por mês no modelo sem amortização.",
        "Juros simples significam crescimento multiplicativo em que cada mês incide sobre o saldo já acrescido.",
        "Em três meses, quanto montam R$ 500 a 4% simples mensal?",
        "Calcule 20 reais de juros por mês.",
        "J=500×0,04×3=60 e M=R$ 560. O acréscimo foi linear: 20 reais a cada mês.",
        "Incidir juros sobre montante acumulado descreve capitalização composta, não o regime simples."
      ],
      [
        "Unidades e comparação de ofertas",
        "É essencial usar taxa e tempo no mesmo período. Para uma taxa mensal, 18 meses corresponde a n=18; duas taxas anunciadas com bases distintas não podem ser comparadas diretamente antes da conversão e das condições contratuais. O modelo didático exclui variações de taxa e outros custos que devem ser explicitados em decisões financeiras reais.",
        "Com taxa simples de 1% ao mês por um ano, use 12 períodos e obtenha juros de 12% do capital inicial, antes de encargos.",
        "É válido aplicar uma taxa mensal em uma fórmula com número de anos sem ajustar as unidades.",
        "Quanto rende R$ 2.000 a 1% simples mensal durante um ano?",
        "Um ano tem doze períodos mensais.",
        "J=2000×0,01×12=R$ 240; M=R$ 2.240. A conta usa doze meses.",
        "Taxa e duração devem compartilhar unidade, caso contrário o número de períodos fica inconsistente."
      ]
    ],
    "situation": [
      "Um anúncio diz que um valor de R$ 800 emprestado a juros simples de 3% por mês custará apenas R$ 24 de juro total após quatro meses.",
      "Qual juro total e montante resultam do cálculo, desconsiderando outros encargos?",
      "O acréscimo mensal é R$ 24, mas em quatro meses J=800×0,03×4=R$ 96; montante R$ 896."
    ],
    "links": [
      [
        "Matemática",
        "Juros compostos",
        "Comparar capitalização linear e composta revela por que o saldo acumulado altera a evolução da dívida."
      ],
      [
        "Matemática",
        "Função afim",
        "No regime simples, o montante varia linearmente com a quantidade de períodos."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Sistemas de equações",
    "objective": "Resolver sistemas lineares de duas incógnitas por substituição e eliminação, interpretando soluções no contexto.",
    "chapters": [
      [
        "Duas relações para duas incógnitas",
        "Um sistema requer que todas as equações sejam satisfeitas simultaneamente. Se x+y=10 e x−y=2, não basta encontrar qualquer par que some dez; ao combinar as condições, obtemos x=6 e y=4. A escolha de x e y deve ser apresentada com unidades e significado.",
        "Um pacote contém dez ingressos adultos e infantis; outra informação independente sobre quantidades pode permitir separar os totais.",
        "Se um par satisfaz a primeira equação, ele resolve o sistema mesmo falhando na segunda.",
        "Resolva x+y=10 e x−y=2.",
        "Some as duas equações para eliminar y.",
        "2x=12, então x=6; substituindo na primeira, y=4. Ambas são satisfeitas.",
        "O sistema exige compatibilidade simultânea; uma equação isolada admite muitos pares."
      ],
      [
        "Eliminação e substituição",
        "Na eliminação, multiplique equações por fatores convenientes e some ou subtraia para retirar uma variável. Na substituição, isole uma incógnita e coloque sua expressão na outra equação. Os dois métodos devem produzir o mesmo resultado quando as operações preservam a equivalência; sinais negativos exigem cuidado.",
        "De 2x+y=11 e x+y=7, subtraindo a segunda da primeira vem x=4, e então y=3.",
        "Ao subtrair equações, é permitido trocar sinais de um único termo e manter os demais.",
        "Resolva 2x+y=11 e x+y=7.",
        "Subtraia membro a membro.",
        "x=4 e y=3; 2×4+3=11 e 4+3=7.",
        "A subtração afeta todos os termos de um membro segundo as regras algébricas."
      ],
      [
        "Sistemas possíveis e impossíveis",
        "Duas retas podem se cruzar num ponto (solução única), coincidir (infinitas soluções) ou ser paralelas distintas (nenhuma solução). No contexto, mesmo uma solução algébrica única pode ser rejeitada se representa quantidade negativa de pessoas ou unidades fracionárias impossíveis. Sempre verifique a solução e suas restrições.",
        "x+y=3 e 2x+2y=6 representam a mesma reta e possuem infinitas soluções, não uma única.",
        "Todo sistema com duas equações e duas incógnitas possui necessariamente uma solução única.",
        "Classifique o sistema antes de concluir que o cálculo terá um par exclusivo.",
        "O sistema x+y=4 e x+y=7 tem solução?",
        "Compare os lados esquerdos idênticos.",
        "Não há solução, pois o mesmo x+y não pode ser simultaneamente quatro e sete.",
        "Equações contraditórias descrevem retas paralelas distintas e não possuem ponto comum."
      ]
    ],
    "situation": [
      "Uma lanchonete vende dois sanduíches e um suco por R$ 19, e um sanduíche e um suco por R$ 12. O atendente quer encontrar o preço de cada item, mas percebe dados insuficientes para três preços.",
      "Que informação é possível obter e por que não é possível determinar três preços individualmente?",
      "Subtraindo as compras, um sanduíche custa R$ 7. Restam suco + outro sanduíche = R$ 12, mas sem outra condição não se conhecem os dois preços separadamente."
    ],
    "links": [
      [
        "Matemática",
        "Equações do primeiro grau",
        "O isolamento e a preservação da igualdade são procedimentos usados nas etapas de substituição e eliminação."
      ],
      [
        "Matemática",
        "Função afim",
        "Cada equação linear de duas variáveis representa uma reta, e sua interseção explica a solução do sistema."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Média aritmética e ponderada",
    "objective": "Calcular e interpretar médias simples e ponderadas, considerando pesos, valores extremos e o conjunto de referência.",
    "chapters": [
      [
        "Média aritmética",
        "A média aritmética simples soma observações e divide pelo número de valores. É um resumo numérico que pode ser influenciado por valores extremos; não descreve obrigatoriamente a experiência da maioria. Antes de calcular, verifique unidades e quais registros realmente pertencem ao grupo.",
        "Notas 6, 8 e 10 têm média (6+8+10)/3=8, embora nenhuma dessas observações precise coincidir com a mediana de qualquer outro grupo.",
        "A média é sempre um valor observado por alguma pessoa do grupo pesquisado.",
        "Calcule a média de 4, 7 e 10.",
        "Some 21 e divida por três.",
        "A média é 7; nesse conjunto coincide com um valor observado, mas isso não ocorre necessariamente.",
        "A média pode assumir valor que não existe entre os registros; é uma medida de centro numérica."
      ],
      [
        "Média ponderada",
        "Quando as observações têm importâncias ou frequências diferentes, a média ponderada soma produtos valor×peso e divide pela soma dos pesos. Usar pesos sem normalização gera resultado incoerente. Um exame em que prova pesa três e trabalho pesa um deve considerar a proporção 3:1.",
        "Com prova 8 (peso 3) e tarefa 6 (peso 1), média=(8×3+6×1)/4=7,5.",
        "Na média ponderada, basta somar os produtos sem dividir pela soma dos pesos.",
        "Calcule média de 5 (peso 2) e 9 (peso 3).",
        "O peso total é cinco.",
        "(5×2+9×3)/5=37/5=7,4; a média respeita a proporção de importância.",
        "É necessário dividir pela soma dos pesos; o total de produtos não é uma média."
      ],
      [
        "Interpretação e limitação",
        "A média não revela, sozinha, dispersão ou desigualdade. Dois grupos podem ter mesma média e composições muito diferentes. Quando há extremos, compare mediana, amplitude e distribuição conforme a pergunta; se os dados são monetários, períodos e populações devem ser compatíveis.",
        "Rendas 1, 1 e 10 mil possuem média 4 mil e mediana 1 mil: a média sozinha sugere distribuição enganosa.",
        "Se duas turmas têm igual média, todos os estudantes obtiveram notas próximas.",
        "Compare conjuntos diferentes com igual média.",
        "As notas 2,8 e 5,5 têm a mesma média?",
        "Calcule média de cada par.",
        "Ambos os pares têm média 5, embora um seja disperso e outro constante.",
        "Igualdade de médias não implica igualdade da variância ou dos resultados individuais."
      ]
    ],
    "situation": [
      "Uma escola anuncia média de notas 7 na turma A e 7 na turma B, concluindo que todos aprenderam exatamente no mesmo nível. A primeira tem notas 7,7 e a segunda 4,10.",
      "Qual falha existe no uso isolado da média e o que pode complementar a comparação?",
      "As médias são iguais, mas a dispersão difere; distribuição, mediana, amplitude e resultados por habilidade complementam a análise."
    ],
    "links": [
      [
        "Sociologia",
        "Desigualdade de renda",
        "As medidas de tendência central podem esconder concentrações extremas na distribuição de recursos."
      ],
      [
        "Matemática",
        "Gráficos estatísticos e distribuição de frequências",
        "Representações de frequência ajudam a explicar por que grupos com médias iguais podem diferir muito."
      ]
    ]
  }
];
