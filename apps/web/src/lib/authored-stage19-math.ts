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
    "topic": "Mediana e moda",
    "objective": "Calcular mediana e moda em conjuntos numéricos, interpretando distribuições assimétricas e diferenças em relação à média.",
    "chapters": [
      [
        "Mediana após ordenar",
        "A mediana é valor central de dados ordenados. Para quantidade ímpar, corresponde à posição intermediária; para quantidade par, utiliza a média dos dois valores centrais. Sua interpretação depende de registros incluídos e permite resumir distribuições em que extremos distorcem a média. Não se deve selecionar o número central antes de ordenar os valores.",
        "Nas rendas hipotéticas 1000, 1200 e 9000 reais, a mediana é 1200, enquanto a média é cerca de 3733,33.",
        "A mediana é sempre o maior número de um conjunto porque representa o valor mais importante.",
        "Qual a mediana de 9, 2, 5, 8 e 3?",
        "Ordene os cinco números e escolha o terceiro.",
        "Ordenando 2,3,5,8,9, a posição central é 5, que corresponde à mediana.",
        "A mediana depende da posição dos dados ordenados; um extremo não ocupa necessariamente a posição central."
      ],
      [
        "Tamanho par e moda",
        "Quando há número par de registros, a mediana é a média dos dois centrais ordenados. A moda é o valor ou categoria de maior frequência; pode não existir moda única, ocorrer empate ou haver diferentes modas. Média, mediana e moda respondem a perguntas distintas, e a variável pode até ser qualitativa.",
        "Para 1,2,2,4 a mediana é (2+2)/2=2, e a moda também é 2 porque aparece mais vezes.",
        "Todo conjunto de dados possui uma única moda, e ela sempre coincide com a mediana.",
        "Encontre moda da lista 2,3,3,4,4,5.",
        "Conte a frequência de cada valor.",
        "A lista é bimodal: 3 e 4 aparecem duas vezes, enquanto os outros aparecem uma vez.",
        "A moda exige identificar frequências máximas, e pode haver empate em vez de um único valor."
      ],
      [
        "Distribuição e escolha da medida",
        "A mediana é menos influenciada por valores extremos que a média, mas não mostra sozinha dispersão. Em uma comparação de rendas, medidas centrais precisam ser acompanhadas de universo, unidade e período; em categorias não ordenáveis, a mediana nem sempre faz sentido. A moda pode representar tamanho de roupa mais vendido, mesmo sem média aritmética aplicável.",
        "Em tamanhos P,P,M,M,M,G, a moda é M; calcular média numérica dessas letras não seria procedimento adequado.",
        "A mediana e a moda substituem todos os gráficos porque revelam cada detalhe da distribuição.",
        "Por que moda é apropriada para identificar tamanho de camiseta mais vendido?",
        "A variável é categoria com frequências.",
        "Porque a moda identifica a categoria mais frequente, sem exigir média numérica de letras.",
        "Uma medida central resume informação, mas não revela todos os valores nem a dispersão."
      ]
    ],
    "situation": [
      "Uma cantina analisa tempos de fila de 2, 3, 3, 4 e 25 minutos. A média é elevada pela espera excepcional de 25 minutos, e o funcionário afirma que o atendimento típico demora sempre 7,4 minutos.",
      "Qual é a mediana e a moda dos tempos e por que ajudam a interpretar o conjunto?",
      "A mediana é 3 minutos e a moda também é 3 minutos. O valor extremo de 25 eleva a média, que não representa cada atendimento."
    ],
    "links": [
      [
        "Matemática",
        "Média aritmética e ponderada",
        "A comparação entre média e mediana mostra como valores extremos podem alterar medidas de tendência central de maneira diferente."
      ],
      [
        "Sociologia",
        "Desigualdade de renda",
        "Mediana e média de rendimentos podem divergir quando há concentração de renda, exigindo interpretação cuidadosa."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Variância e desvio padrão",
    "objective": "Calcular variância populacional e desvio padrão de dados simples e interpretar dispersão com unidades apropriadas.",
    "chapters": [
      [
        "Desvios em relação à média",
        "Dispersão mostra quão distantes os valores ficam de medida central. A variância populacional usa a média dos quadrados dos desvios em relação à média aritmética, evitando cancelamento entre desvios positivos e negativos. Ela requer conjunto de dados quantitativos e unidade ao quadrado, não a mesma unidade original da variável.",
        "Para observações 2,4,6, a média é 4, os desvios são −2,0,2 e a soma dos quadrados dos desvios é 8.",
        "Basta somar desvios simples em relação à média para medir variação, pois eles nunca se anulam.",
        "Para valores 1,3,5, qual soma dos quadrados dos desvios em relação à média?",
        "A média é 3; calcule (1−3)²+(3−3)²+(5−3)².",
        "A soma é 4+0+4=8, porque os desvios foram elevados ao quadrado antes da soma.",
        "Os desvios simples em torno da média somam zero; os quadrados permitem medir magnitude da dispersão."
      ],
      [
        "Variância populacional e amostral",
        "Para população finita de N observações, a variância é a soma dos quadrados dos desvios dividida por N. Uma estimativa amostral convencional usa denominador n−1 em certas situações, e confundir os dois casos muda o resultado. Antes da conta, identifique se a questão define população ou amostra.",
        "Para a população 2,4,6, média=4 e variância populacional=(4+0+4)/3=8/3 unidades².",
        "Todas as variâncias devem ser divididas por n−1, inclusive quando o problema fornece a população inteira.",
        "Qual variância populacional de 0 e 4?",
        "A média é 2 e o denominador é N=2.",
        "A soma dos quadrados dos desvios é 4+4=8; variância populacional=8/2=4.",
        "O denominador deve corresponder ao conceito solicitado: população completa não usa automaticamente n−1."
      ],
      [
        "Desvio padrão e comparação",
        "O desvio padrão é a raiz quadrada da variância e volta à unidade original da variável, facilitando interpretação. Dois grupos podem ter mesma média e desvios padrão diferentes, mas isso não prova automaticamente causa da diferença. Para comparar contextos, considere unidades, amostras e escala, inclusive quando há valores extremos.",
        "As turmas com notas [5,5] e [2,8] têm média 5, mas o segundo conjunto apresenta maior desvio padrão.",
        "Se duas turmas têm a mesma média, seus desvios padrão são obrigatoriamente idênticos.",
        "Compare desvio padrão populacional de [5,5] e [2,8].",
        "Ambos têm média 5; calcule os quadrados dos desvios.",
        "[5,5] tem desvio padrão 0; [2,8] tem variância 9 e desvio padrão 3, em pontos de nota.",
        "A igualdade da média não determina a dispersão; o desvio padrão resume as distâncias em relação a ela."
      ]
    ],
    "situation": [
      "Duas turmas apresentam média 5 numa avaliação. Na turma A, os estudantes tiveram 5 e 5; na turma B, 2 e 8. Um coordenador afirma que as duas turmas apresentam variação igual.",
      "Qual desvio padrão populacional de cada turma e o que a comparação revela?",
      "A turma A tem desvio padrão 0; a B tem variância 9 e desvio padrão 3, embora as médias sejam iguais. Os resultados são ilustrativos."
    ],
    "links": [
      [
        "Matemática",
        "Média aritmética e ponderada",
        "A média é o centro utilizado para calcular os desvios que entram na variância e no desvio padrão."
      ],
      [
        "Matemática",
        "Mediana e moda",
        "A comparação entre medidas de posição e dispersão mostra por que um único resumo estatístico é insuficiente."
      ]
    ]
  }
];
