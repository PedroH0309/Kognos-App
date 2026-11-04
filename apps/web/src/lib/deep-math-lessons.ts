import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseSection,CourseTask} from './course-content.ts';
import {examBlueprints} from './exam-blueprints.ts';

/**
 * Stage 11, mathematics batch 1: individually authored lessons.
 * These lessons are substantial offline teaching content, but are NOT
 * certified teacher-reviewed, official exam material, or published editorial records.
 * Published / archived Supabase documents retain priority in the content API.
 */
type MathLessonSpec={
 objective:string;
 prerequisites:string[];
 sections:CourseSection[];
 tasks:CourseTask[];
};
const mathLessonSpecs:Record<string,MathLessonSpec>={
  "Operações, divisibilidade e conjuntos numéricos": {
    "objective": "Distinguir conjuntos numéricos, operar com frações e inteiros e empregar critérios de divisibilidade, MDC e MMC em problemas contextualizados.",
    "prerequisites": [],
    "sections": [
      {
        "level": "basic",
        "title": "Conjuntos, reta numérica e operações",
        "explanation": "Os números naturais N = {0, 1, 2, ...} servem à contagem; os inteiros Z incluem negativos; os racionais Q podem ser escritos como a/b, com a e b inteiros e b diferente de zero. Os irracionais, como √2 e π, não têm representação decimal finita ou periódica. Os reais R reúnem racionais e irracionais. Assim, N está contido em Z, que está contido em Q, que está contido em R.\n\nFrações equivalentes representam a mesma quantidade: 2/3 = 4/6. Para somar frações, use denominador comum; para multiplicá-las, multiplique numeradores e denominadores, simplificando quando possível. A ordem das operações é: agrupamentos, potências/raízes, multiplicações/divisões e adições/subtrações, respeitando a ordem da esquerda para a direita em operações da mesma prioridade. Na reta, quanto mais à direita, maior o número.",
        "steps": [
          "Classifique um número pela definição, sem confundir raiz com irracionalidade: √9 = 3 é inteiro.",
          "Compare negativos na reta: −2 é maior que −5.",
          "Para somar frações, obtenha denominador comum e simplifique o resultado."
        ],
        "example": "Resolva −3 + 2 × (5 − 8/2). Primeiro 8/2 = 4; então 5 − 4 = 1; depois 2 × 1 = 2; por fim −3 + 2 = −1. Para 2/3 + 5/6, escreva 2/3 = 4/6; soma = 9/6 = 3/2.",
        "pitfall": "Confundir −3² = −9 com (−3)² = 9; ou somar numeradores e denominadores de frações."
      },
      {
        "level": "intermediate",
        "title": "Divisibilidade, fatoração, MDC e MMC",
        "explanation": "Um inteiro a é divisível por b não nulo quando a/b é inteiro. Um número primo tem exatamente dois divisores positivos distintos: 1 e ele próprio. A decomposição em fatores primos permite calcular o máximo divisor comum (MDC) e o mínimo múltiplo comum (MMC). Para o MDC, escolha os fatores comuns com menores expoentes; para o MMC, todos os fatores presentes com maiores expoentes.\n\nO MDC resolve situações de repartição em grupos iguais do maior tamanho possível, sem sobras. O MMC resolve reencontros de ciclos ou escolha de denominador comum. Os critérios rápidos ajudam: divisibilidade por 2 exige algarismo final par; por 3, soma dos algarismos múltipla de 3; por 5, final 0 ou 5. Todo número inteiro positivo maior que 1 admite fatoração prima única, desconsiderada a ordem.",
        "steps": [
          "Fatore cada inteiro usando somente números primos.",
          "Para maximizar o tamanho de grupos sem resto, calcule o MDC.",
          "Para sincronizar intervalos ou somar frações, calcule o MMC."
        ],
        "example": "Calcule MDC e MMC de 18 e 24: 18 = 2 × 3²; 24 = 2³ × 3. MDC = 2 × 3 = 6; MMC = 2³ × 3² = 72. Se duas lâmpadas piscam a cada 18 s e 24 s, sincronizam novamente após 72 s, supondo que partiram juntas.",
        "pitfall": "Confundir máximo divisor comum com mínimo múltiplo comum: o MDC de 18 e 24 não pode ser 72, pois 72 não divide ambos."
      },
      {
        "level": "advanced",
        "title": "Problemas com restrições e justificativas",
        "explanation": "Em problemas de divisibilidade, a escolha de MDC ou MMC precisa ser sustentada pelo enunciado, não por palavras decoradas. Quando a pergunta trata da maior medida que divide várias quantidades, pense em divisor; quando trata do primeiro instante comum de ciclos, pense em múltiplo. Antes de aplicar a regra, identifique grandezas, unidades e condições iniciais.\n\nA igualdade a = bq + r, com 0 ≤ r < |b| para b não nulo, descreve divisão euclidiana e permite testar restos. O argumento de paridade também é útil: a soma de dois pares é par; a soma de um par e um ímpar é ímpar. Em qualquer resolução, confira se a resposta satisfaz simultaneamente todas as condições.",
        "steps": [
          "Traduza cada restrição verbal em uma propriedade numérica.",
          "Resolva usando fatoração, resto ou paridade e depois teste a resposta.",
          "Explique por que uma escolha alternativa não atende ao enunciado."
        ],
        "example": "Uma escola dispõe de 84 lápis e 60 borrachas para montar o maior número possível de kits idênticos, sem sobras e contendo ambos os itens. O número de kits deve dividir 84 e 60; MDC(84,60)=12. Cada kit terá 84/12=7 lápis e 60/12=5 borrachas. O MMC, nesse caso, não resolveria o objetivo.",
        "pitfall": "Aplicar o MMC quando o problema pede quantidade máxima de grupos ou ignorar que o resto deve ser menor que o divisor."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Classifique −7, 0, 3/4 e √16 no menor dos conjuntos N, Z, Q ou irracionais que os contém.",
        "hint": "Calcule √16 e recorde a inclusão N ⊂ Z ⊂ Q.",
        "solution": "−7 é inteiro (Z); 0 é natural (N), adotando N a partir do zero; 3/4 é racional (Q) e não inteiro; √16 = 4 é natural (N). Nenhum dos quatro é irracional."
      },
      {
        "level": "basic",
        "prompt": "Calcule 5/6 − 1/4 e apresente o resultado irredutível.",
        "hint": "Encontre o MMC de 6 e 4 antes de subtrair.",
        "solution": "MMC(6,4)=12; 5/6=10/12 e 1/4=3/12. Assim 10/12−3/12=7/12, já irredutível."
      },
      {
        "level": "intermediate",
        "prompt": "Determine MDC(48,60) e MMC(48,60), justificando pela fatoração.",
        "hint": "Escreva 48 e 60 como produtos de potências de primos.",
        "solution": "48=2⁴×3 e 60=2²×3×5. MDC=2²×3=12; MMC=2⁴×3×5=240. Conferência: 48×60 = 12×240 = 2880."
      },
      {
        "level": "intermediate",
        "prompt": "Dois alarmes tocam a cada 12 e 20 minutos. Se tocaram juntos às 08:00, quando tocarão juntos novamente?",
        "hint": "Procure o menor múltiplo positivo comum a 12 e 20.",
        "solution": "12=2²×3; 20=2²×5. MMC=2²×3×5=60 minutos. Logo tocarão juntos novamente às 09:00."
      },
      {
        "level": "advanced",
        "prompt": "Com 90 fichas azuis e 126 vermelhas, qual o maior número de pacotes iguais, sem sobras, contendo fichas das duas cores? Quantas fichas de cada cor irão em cada pacote?",
        "hint": "O número de pacotes deve ser divisor comum de 90 e 126.",
        "solution": "90=2×3²×5 e 126=2×3²×7. MDC=18 pacotes. Cada um terá 90/18=5 fichas azuis e 126/18=7 vermelhas."
      },
      {
        "level": "advanced",
        "prompt": "Um inteiro positivo deixa resto 2 quando dividido por 5. Qual o menor desses inteiros que é maior que 20? Explique pela divisão euclidiana.",
        "hint": "Escreva n=5q+2 e imponha n>20.",
        "solution": "n=5q+2. Para n>20, q>18/5=3,6, logo o menor inteiro q é 4. n=5×4+2=22. Dividindo 22 por 5, o quociente é 4 e o resto é 2."
      }
    ]
  },
  "Razões, escalas e proporcionalidade": {
    "objective": "Interpretar razões com unidades, identificar proporcionalidade direta e inversa e aplicar escalas e variação quadrática com verificação dimensional.",
    "prerequisites": [],
    "sections": [
      {
        "level": "basic",
        "title": "Razões e proporções com significado",
        "explanation": "Uma razão a/b compara duas quantidades com b diferente de zero. Se as grandezas possuem a mesma unidade, podemos construir uma razão adimensional, como 3 meninas para 5 meninos. Se as unidades diferem, a razão pode indicar taxa: velocidade média em km/h ou densidade em habitantes/km². Uma proporção a/b=c/d, com b e d não nulos, implica ad=bc.\n\nGrandezas diretamente proporcionais satisfazem y=kx: ao dobrar x, y dobra. É necessário verificar constância de y/x, e não apenas perceber que ambas crescem. Em tabelas e gráficos, uma proporcionalidade direta passa pela origem; uma função afim y=ax+b com b≠0 não é diretamente proporcional.",
        "steps": [
          "Identifique as grandezas e escreva uma razão com unidades adequadas.",
          "Confira se o quociente entre grandezas é constante.",
          "Em uma proporção, use produtos cruzados somente depois de estabelecer relações equivalentes."
        ],
        "example": "Se 4 kg de arroz custam R$ 28 e o preço por quilo é constante, cada quilo custa R$ 7. Para 7 kg, 7×7=R$ 49. A relação y=7x é direta e passa pela origem.",
        "pitfall": "Considerar toda relação crescente como proporcional: y=3x+10 cresce, mas y/x não é constante."
      },
      {
        "level": "intermediate",
        "title": "Escalas e proporcionalidade inversa",
        "explanation": "A escala 1:n significa que 1 unidade no desenho representa n unidades reais, desde que ambas sejam expressas na mesma unidade. A escala 1:50 000 converte 1 cm no mapa em 50 000 cm no terreno, isto é, 500 m. Áreas não variam linearmente com a escala: se comprimentos são multiplicados por k, áreas são multiplicadas por k².\n\nDuas grandezas são inversamente proporcionais quando xy=k, com k constante. Dobrar a quantidade de máquinas equivalentes pode reduzir à metade o tempo necessário, se a quantidade de trabalho, a eficiência e as demais condições permanecerem iguais. Não é correto assumir proporcionalidade inversa em qualquer processo real.",
        "steps": [
          "Converta desenho e realidade para a mesma unidade antes de calcular.",
          "Para relação inversa, confira se o produto xy se mantém.",
          "Reveja hipóteses: a produtividade total precisa permanecer comparável."
        ],
        "example": "Em mapa 1:25 000, 3,2 cm equivalem a 3,2×25 000=80 000 cm, ou 800 m. Em uma obra fixa, 6 pessoas concluem o trabalho em 10 dias; 12 pessoas igualmente produtivas levariam 5 dias, pois 6×10=12×5.",
        "pitfall": "Confundir escala linear com escala de área: ampliar o lado de um quadrado por 3 multiplica sua área por 9."
      },
      {
        "level": "advanced",
        "title": "Proporcionalidade quadrática e modelos",
        "explanation": "Nem toda dependência numérica é direta ou inversa. Em y=kx², duplicar x quadruplica y; para x positivo, y/x² é constante, não y/x. Esse modelo surge em áreas semelhantes e em relações simplificadas da Física. Também é possível combinar proporcionalidades, como y=kx/z, mantendo a interpretação das unidades.\n\nPara escolher o modelo, analise uma tabela de pares ordenados. Se y/x é constante, teste direta; se xy é constante, teste inversa; se y/x² é constante, teste quadrática. Uma tabela pequena pode sugerir um modelo, mas não prova causalidade fora das hipóteses do problema.",
        "steps": [
          "Monte três colunas: y/x, x×y e y/x², quando válidas.",
          "Compare constantes e unidades em todos os pares.",
          "Formule uma previsão e teste-a em outro ponto, sem extrapolar indiscriminadamente."
        ],
        "example": "A área de quadrados de lados 2, 4 e 6 cm é 4, 16 e 36 cm². O quociente A/l² vale 1 em todos os casos. Se o lado de 6 cm passar para 9 cm, a área será 81 cm², e não 54 cm².",
        "pitfall": "Aplicar regra de três simples numa dependência quadrática ou esquecer a conversão cm² ↔ m²."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma receita para 3 pessoas usa 450 g de farinha. Mantidas as proporções, quanto se usa para 8 pessoas?",
        "hint": "Calcule a quantidade por pessoa antes de multiplicar.",
        "solution": "450/3=150 g por pessoa; para 8 pessoas são 8×150=1200 g, ou 1,2 kg."
      },
      {
        "level": "basic",
        "prompt": "Uma corrida de 150 km levou 2 h e 30 min. Qual foi a velocidade média em km/h?",
        "hint": "Converta 30 minutos para 0,5 hora.",
        "solution": "O tempo é 2,5 h. Velocidade média=150 km/2,5 h=60 km/h."
      },
      {
        "level": "intermediate",
        "prompt": "Em escala 1:100 000, dois pontos estão a 4,5 cm. Determine a distância real em quilômetros.",
        "hint": "Converta 450 000 cm para quilômetros.",
        "solution": "4,5×100 000=450 000 cm. Como 100 000 cm=1 km, a distância é 4,5 km."
      },
      {
        "level": "intermediate",
        "prompt": "Oito torneiras idênticas enchem um reservatório em 6 horas. Sob vazão constante, quanto tempo levariam 12 torneiras?",
        "hint": "O produto entre número de torneiras e tempo deve permanecer constante.",
        "solution": "8×6=48 torneira-horas. Com 12 torneiras, o tempo é 48/12=4 horas."
      },
      {
        "level": "advanced",
        "prompt": "A área de uma figura semelhante cresce com o quadrado do fator de escala. Se um quadrado de lado 5 cm tem área 25 cm², qual é a área quando o lado aumenta 40%?",
        "hint": "Multiplique o lado por 1,4 e a área por (1,4)².",
        "solution": "Novo lado: 5×1,4=7 cm. Nova área: 7²=49 cm². Pela razão, 25×1,4²=25×1,96=49 cm²; aumento da área de 96%."
      },
      {
        "level": "advanced",
        "prompt": "Uma tabela apresenta x=2,4,6 e y=12,6,4. Identifique a proporcionalidade e estime y quando x=8.",
        "hint": "Verifique se x×y é constante.",
        "solution": "Os produtos são 2×12=24, 4×6=24 e 6×4=24. A relação é inversa: y=24/x. Para x=8, y=3."
      }
    ]
  },
  "Porcentagem e juros": {
    "objective": "Calcular percentuais, aumentos e descontos sucessivos e comparar juros simples e compostos sem confundir bases de cálculo e períodos.",
    "prerequisites": [],
    "sections": [
      {
        "level": "basic",
        "title": "Taxas percentuais e fatores de variação",
        "explanation": "Uma porcentagem p% representa p/100 de uma quantidade. Para calcular 15% de R$ 240, multiplique 240×0,15. Um aumento de p% usa fator (1+p/100); um desconto, (1−p/100). Variação percentual=(valor final−valor inicial)/valor inicial×100%, desde que o valor inicial não seja zero.\n\nA base de cálculo é decisiva. Um aumento de 20% seguido de redução de 20% não retorna à origem, porque a segunda variação atua sobre um valor maior. Em taxas sucessivas, multiplicam-se os fatores; as porcentagens não são simplesmente somadas.",
        "steps": [
          "Identifique qual valor é a base de cada taxa.",
          "Converta cada percentual em fator multiplicativo.",
          "Multiplique os fatores sucessivos e confira a variação líquida."
        ],
        "example": "Uma mochila de R$ 250 recebe desconto de 12%. Primeiro, 250×0,12=30; o preço passa a R$ 220. Se depois sofrer aumento de 10%, 220×1,10=R$ 242. A variação total foi −R$ 8, ou −3,2% em relação ao preço inicial.",
        "pitfall": "Somar taxas de variações consecutivas como se a base permanecesse fixa ou calcular percentuais sobre o valor errado."
      },
      {
        "level": "intermediate",
        "title": "Juros simples e compostos",
        "explanation": "Juros representam remuneração ou custo por uso de capital ao longo do tempo. Em juros simples, os juros de cada período usam a mesma base inicial: J=C×i×t e M=C(1+it). Em juros compostos, cada período incorpora os juros ao saldo: M=C(1+i)^t. C é capital inicial, i é taxa por período, t é número de períodos e M é montante.\n\nTaxa e tempo precisam usar unidades compatíveis. Uma taxa mensal de 2% por 3 meses corresponde a i=0,02 e t=3; não se deve misturar 2% ao mês com tempo medido em anos sem conversão apropriada. Em taxas efetivas compostas, a conversão entre períodos depende da capitalização: a taxa anual equivalente a 2% ao mês é (1,02)^12−1, não 24% exatos.",
        "steps": [
          "Defina capital, taxa efetiva, período e regime de juros.",
          "Selecione J=C×i×t ou M=C(1+i)^t com justificativa.",
          "Calcule o montante e subtraia o principal se a questão pedir apenas juros."
        ],
        "example": "Um capital de R$ 1000 rende 2% ao mês por 3 meses. Juros simples: M=1000(1+0,02×3)=R$ 1060. Compostos: M=1000×1,02³=R$ 1061,208, aproximadamente R$ 1061,21. O regime composto rende R$ 1,21 a mais nesse caso.",
        "pitfall": "Usar t=12 para uma aplicação de um ano com taxa anual, ou arredondar resultados intermediários cedo demais."
      },
      {
        "level": "advanced",
        "title": "Comparação de propostas e índices",
        "explanation": "Para comparar propostas financeiras, considere não apenas taxas anunciadas, mas periodicidade, capitalização, tarifas e horizonte de tempo. Mesmo sem custos adicionais, taxas nominais de períodos diferentes não são diretamente comparáveis. Em taxas efetivas compostas, fatores se encadeiam: o fator de 5% seguido de 3% é 1,05×1,03=1,0815, uma alta de 8,15%.\n\nUm índice-base de 100 facilita comparação de aumentos relativos, mas não indica valores absolutos sem conhecer a base inicial. Ao interpretar descontos e inflação, explicite o período analisado e não trate uma taxa observada como previsão garantida.",
        "steps": [
          "Normalize ofertas para um mesmo horizonte e regime.",
          "Use fatores acumulados para comparar trajetórias de preços.",
          "Interprete o resultado no contexto e declare hipóteses e limitações."
        ],
        "example": "Loja A vende por R$ 400 com dois descontos sucessivos de 10% e 5%: 400×0,90×0,95=R$ 342. Loja B oferece 15% de desconto único: 400×0,85=R$ 340. A oferta B é R$ 2 mais barata; os dois descontos de A equivalem a 14,5%.",
        "pitfall": "Afirmar que 10%+5% em sequência equivale a 15% de desconto único; a base do segundo desconto já mudou."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Calcule 18% de R$ 350.",
        "hint": "Transforme 18% em 0,18.",
        "solution": "350×0,18=R$ 63. Como conferência, 10% são R$ 35 e 8% são R$ 28; total R$ 63."
      },
      {
        "level": "basic",
        "prompt": "Um valor de R$ 200 cresce 25% e depois cai 20%. Qual é o valor final e a variação percentual total?",
        "hint": "Utilize os fatores 1,25 e 0,80.",
        "solution": "200×1,25×0,80=R$ 200. A variação líquida é 0%; as taxas se anulam neste par particular porque 1,25×0,80=1."
      },
      {
        "level": "intermediate",
        "prompt": "R$ 1500 são aplicados a juros simples de 3% ao mês por 4 meses. Determine juros e montante.",
        "hint": "Use J=C×i×t com i=0,03.",
        "solution": "J=1500×0,03×4=R$ 180. Montante M=1500+180=R$ 1680."
      },
      {
        "level": "intermediate",
        "prompt": "R$ 2000 são aplicados a juros compostos de 5% ao ano por 2 anos. Qual é o montante?",
        "hint": "Multiplique pelo fator 1,05 duas vezes.",
        "solution": "M=2000×(1,05)²=2000×1,1025=R$ 2205. Os juros totais são R$ 205."
      },
      {
        "level": "advanced",
        "prompt": "Qual taxa efetiva acumulada resulta de aumento de 8% seguido de desconto de 5%?",
        "hint": "Multiplique os fatores; não some as porcentagens.",
        "solution": "Fator acumulado =1,08×0,95=1,026. Portanto, a variação final é aumento de 2,6%, calculada sobre a base inicial."
      },
      {
        "level": "advanced",
        "prompt": "Um investimento rende 1% ao mês com capitalização composta. Qual a taxa efetiva de 12 meses, aproximadamente?",
        "hint": "Use (1+0,01)^12−1 e interprete.",
        "solution": "Taxa efetiva=(1,01)^12−1 ≈ 0,126825, ou aproximadamente 12,68% ao ano. Não é exatamente 12% porque há juros sobre juros."
      }
    ]
  },
  "Potências, radicais e notação científica": {
    "objective": "Aplicar corretamente leis de potências, simplificar radicais e realizar operações com notação científica respeitando sinais, restrições e ordem de grandeza.",
    "prerequisites": [],
    "sections": [
      {
        "level": "basic",
        "title": "Potências e propriedades válidas",
        "explanation": "Para base a real e expoente natural n, a^n representa multiplicação repetida. Para a≠0, a⁰=1 e a^(−n)=1/a^n. Para expoentes inteiros e bases admissíveis, a^m×a^n=a^(m+n) e a^m/a^n=a^(m−n) quando a≠0. Uma potência de produto distribui: (ab)^n=a^n b^n, mas a potência de soma não: (a+b)²=a²+2ab+b².\n\nSinais e parênteses importam: (−2)^4=16, mas −2^4=−16 pela prioridade da potenciação. Em divisão de potências de mesma base, apenas subtraia expoentes quando o denominador não for zero.",
        "steps": [
          "Observe parênteses e o sinal da base.",
          "Escolha somente propriedades compatíveis com a operação.",
          "Verifique a resposta substituindo valores simples quando houver dúvida."
        ],
        "example": "Simplifique (2³×2⁵)/2⁴. Some expoentes no produto: 2⁸; divida: 2^(8−4)=2⁴=16. Outra forma é calcular 8×32/16=16, confirmando a regra.",
        "pitfall": "Transformar (a+b)² em a²+b² ou dizer que a⁰=1 quando a=0, caso indeterminado nesta convenção."
      },
      {
        "level": "intermediate",
        "title": "Radiciação e expoentes fracionários",
        "explanation": "A raiz quadrada principal √a, para a≥0 nos reais, é o número não negativo cujo quadrado é a. Por isso, √(x²)=|x|, não necessariamente x. Para a,b≥0, √(ab)=√a√b; entretanto √(a+b) não é igual a √a+√b em geral. Raízes cúbicas reais permitem radicandos negativos: ∛(−8)=−2.\n\nAo simplificar √72, fatoramos 72=36×2 e obtemos 6√2. Quando se racionaliza 1/√2, multiplica-se numerador e denominador por √2, produzindo √2/2. Em expressões algébricas, antes de usar propriedades de raiz, confira o domínio para não introduzir resultados não reais.",
        "steps": [
          "Fatore o radicando para extrair quadrados perfeitos.",
          "Use √(x²)=|x| ao lidar com variáveis reais.",
          "Cheque domínios e equações originais, especialmente após elevar ao quadrado."
        ],
        "example": "Resolva √50+√8: √50=5√2 e √8=2√2, então a soma é 7√2. O resultado não é √58 porque raízes não se somam dentro de um radical.",
        "pitfall": "Ignorar o valor absoluto em √(x²) ou distribuir uma raiz por uma soma."
      },
      {
        "level": "advanced",
        "title": "Notação científica e ordens de grandeza",
        "explanation": "A notação científica escreve um número não nulo como a×10^n, em que 1≤|a|<10 e n é inteiro. Por exemplo, 0,000036=3,6×10^(−5). Ao multiplicar, multiplique coeficientes e some expoentes; ao dividir, divida coeficientes e subtraia expoentes. Normalize o coeficiente ao final. Para somar, é indispensável expressar as parcelas sob a mesma potência de dez.\n\nA ordem de grandeza é uma estimativa da escala, não um valor exato. Em problemas com medições, o número de algarismos significativos e as unidades devem ser coerentes com a precisão fornecida. Distinguir erro de potência de dez evita resultados milhares de vezes maiores ou menores.",
        "steps": [
          "Converta cada número para coeficiente normalizado vezes potência de dez.",
          "Escolha a regra da operação, alinhando expoentes em somas.",
          "Retorne ao contexto para conferir unidades, dimensão e ordem de grandeza."
        ],
        "example": "Calcule (6×10^5)÷(3×10^(−2)): 6/3=2 e 5−(−2)=7. Resultado 2×10^7. Para 2×10³+5×10², reescreva 5×10²=0,5×10³; soma 2,5×10³.",
        "pitfall": "Somar expoentes ao adicionar números em notação científica ou esquecer que subtrair expoente negativo aumenta a potência."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Calcule (3²×3⁴)/3³.",
        "hint": "Some expoentes do numerador e subtraia o do denominador.",
        "solution": "3^(2+4−3)=3³=27, pois o denominador é diferente de zero."
      },
      {
        "level": "basic",
        "prompt": "Qual a diferença entre (−4)² e −4²?",
        "hint": "Observe o alcance do expoente e os parênteses.",
        "solution": "(−4)²=(−4)×(−4)=16; −4²=−(4²)=−16. O expoente só inclui o sinal negativo quando a base está entre parênteses."
      },
      {
        "level": "intermediate",
        "prompt": "Simplifique √98−√8.",
        "hint": "Fatore 98=49×2 e 8=4×2.",
        "solution": "√98=7√2 e √8=2√2. Portanto √98−√8=5√2."
      },
      {
        "level": "intermediate",
        "prompt": "Simplifique √(x²) para x=−7. Explique por que o resultado não é x.",
        "hint": "A raiz quadrada principal é não negativa.",
        "solution": "√((−7)²)=√49=7=|−7|. A identidade geral nos reais é √(x²)=|x|."
      },
      {
        "level": "advanced",
        "prompt": "Escreva 0,00072 e 5 400 000 em notação científica e calcule seu produto.",
        "hint": "Normalize os coeficientes e some os expoentes.",
        "solution": "0,00072=7,2×10^(−4); 5 400 000=5,4×10^6. Produto=38,88×10²=3,888×10³=3888."
      },
      {
        "level": "advanced",
        "prompt": "Calcule (9×10^7)÷(3×10³) e explique o expoente final.",
        "hint": "Na divisão de potências de dez, subtraia os expoentes.",
        "solution": "9/3=3; 7−3=4. Resultado 3×10⁴=30 000. A operação está definida porque o denominador não é zero."
      }
    ]
  },
  "Equações, inequações e sistemas": {
    "objective": "Resolver equações e inequações lineares e sistemas 2×2, interpretar seus conjuntos-solução e verificar a validade das respostas em situações contextualizadas.",
    "prerequisites": [],
    "sections": [
      {
        "level": "basic",
        "title": "Igualdade, incógnitas e equivalência",
        "explanation": "Uma equação afirma igualdade entre expressões que podem conter incógnitas. Resolver é obter todos os valores do domínio que tornam a igualdade verdadeira. Somar ou subtrair a mesma quantidade em ambos os membros preserva soluções; multiplicar ou dividir por um número não nulo também. Em uma equação linear ax+b=c, com a≠0, isolamos x=(c−b)/a.\n\nParênteses exigem distributividade: 3(x−2)=3x−6. Frações podem ser eliminadas multiplicando ambos os lados por um múltiplo comum não nulo dos denominadores. Substituir o resultado na equação original é uma verificação simples e importante.",
        "steps": [
          "Expanda parênteses e reduza termos semelhantes com cuidado.",
          "Isole a incógnita com operações equivalentes nos dois membros.",
          "Substitua o valor na igualdade original e confirme."
        ],
        "example": "Resolva 4(x−2)+3=19: 4x−8+3=19, então 4x−5=19; 4x=24; x=6. Verificação: 4(6−2)+3=16+3=19.",
        "pitfall": "Distribuir incorretamente o sinal negativo ou dividir por uma expressão que pode ser zero sem considerar essa restrição."
      },
      {
        "level": "intermediate",
        "title": "Inequações e interpretação da reta",
        "explanation": "Uma inequação busca valores que tornam verdadeira uma comparação como 2x+1<7. Podemos somar ou subtrair o mesmo número dos dois membros; porém, ao multiplicar ou dividir por um valor negativo, o sentido da desigualdade se inverte. Ao multiplicar por expressão cujo sinal é desconhecido, é necessário analisar casos em vez de inverter automaticamente.\n\nO conjunto solução pode ser descrito por intervalo: x≤3 representa (−∞,3]. A bolinha fechada na reta inclui o extremo; a aberta o exclui. Em problemas, restrições físicas podem limitar o domínio, por exemplo quando x representa quantidade não negativa de objetos.",
        "steps": [
          "Isole a variável e inverta o comparador somente se dividir ou multiplicar por negativo.",
          "Represente o intervalo com a inclusão correta do extremo.",
          "Teste um valor que deve satisfazer e outro que não deve."
        ],
        "example": "Resolva −3x+6≥15: subtraia 6 dos dois membros, obtendo −3x≥9. Divida por −3 e inverta o sinal: x≤−3. Teste x=−4: −3(−4)+6=18≥15, verdadeiro.",
        "pitfall": "Esquecer de inverter a desigualdade ao dividir por negativo ou usar parênteses quando o extremo deve ser incluído."
      },
      {
        "level": "advanced",
        "title": "Sistemas e modelagem de problemas",
        "explanation": "Um sistema linear 2×2 reúne duas equações que precisam ser satisfeitas simultaneamente. Podemos resolver por substituição, adição/eliminações ou interpretação gráfica. Se as duas retas se cruzam, há solução única; se coincidem, infinitas; se são paralelas distintas, nenhuma. A conclusão depende da consistência das equações.\n\nNa modelagem, defina claramente as incógnitas e unidades antes de criar equações. Verifique se a solução algébrica atende às condições do enunciado, como inteiros não negativos em contagens. Às vezes a álgebra produz um número correto para as equações, mas inválido para a situação real.",
        "steps": [
          "Declare o que cada variável representa, com unidades.",
          "Monte duas equações independentes e resolva por eliminação ou substituição.",
          "Confira ambas as equações e as restrições contextuais."
        ],
        "example": "Uma papelaria vende 2 cadernos e 1 caneta por R$ 19; 1 caderno e 2 canetas por R$ 14. Se c e p são preços, 2c+p=19 e c+2p=14. Da primeira, p=19−2c. Substituindo: c+38−4c=14; −3c=−24, logo c=8 e p=3. Verificação: 16+3=19 e 8+6=14.",
        "pitfall": "Concluir que uma solução satisfaz o sistema depois de conferir apenas uma das equações."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Resolva 5(x−1)=2x+16 e verifique por substituição.",
        "hint": "Distribua o 5 antes de reunir os termos em x.",
        "solution": "5x−5=2x+16 ⇒ 3x=21 ⇒ x=7. Verificação: esquerda=5(7−1)=30; direita=2×7+16=30."
      },
      {
        "level": "basic",
        "prompt": "Resolva x/3+2=7.",
        "hint": "Subtraia 2 dos dois membros e multiplique por 3.",
        "solution": "x/3=5 ⇒ x=15. Verificação: 15/3+2=5+2=7."
      },
      {
        "level": "intermediate",
        "prompt": "Resolva −2x+5<13 e represente o conjunto solução por intervalo.",
        "hint": "Ao dividir por −2, inverta o sinal.",
        "solution": "−2x<8 ⇒ x>−4. Intervalo (−4,+∞), com extremo −4 não incluído."
      },
      {
        "level": "intermediate",
        "prompt": "Determine os valores reais de x que satisfazem 3x−4≤2x+6.",
        "hint": "Reúna os termos em x em um membro e as constantes em outro.",
        "solution": "3x−2x≤6+4, logo x≤10. Intervalo (−∞,10]; x=10 satisfaz a igualdade."
      },
      {
        "level": "advanced",
        "prompt": "Resolva o sistema x+y=11 e 2x−y=7 e confira as respostas.",
        "hint": "Some as duas equações para eliminar y.",
        "solution": "Somando: 3x=18 ⇒ x=6. Logo y=11−6=5. Verificação: 6+5=11 e 2×6−5=7."
      },
      {
        "level": "advanced",
        "prompt": "Uma sessão de cinema vendeu 40 ingressos, uns inteiros a R$ 20 e outros meias a R$ 10. A receita foi R$ 620. Quantos ingressos de cada tipo foram vendidos?",
        "hint": "Defina i+m=40 e 20i+10m=620.",
        "solution": "De i+m=40, m=40−i. Então 20i+10(40−i)=620 ⇒ 10i=220 ⇒ i=22 e m=18. Conferência: 22+18=40; 22×20+18×10=620 reais."
      }
    ]
  }
};

export const deepMathTopicNames=Object.keys(mathLessonSpecs);

export function deepMathLesson(topic:CurriculumTopic):CourseLesson|null{
 if(topic.subject!=='Matemática')return null;
 const spec=Object.hasOwn(mathLessonSpecs,topic.topic)?mathLessonSpecs[topic.topic]:null;
 if(!spec)return null;
 // Keep the unreviewed provenance transparent, even as depth improves.
 const sections=spec.sections.map((section,index)=>index===0?{
  ...section,
  explanation:'Este é um módulo introdutório pré-carregado, ampliado com aula autoral específica e exercícios resolvidos; revisão docente pendente.\n\n'+section.explanation
 }:section);
 const sourceUrls=[...new Set(topic.exams.map(exam=>examBlueprints[exam]?.sourceUrl)
  .filter((url):url is string=>Boolean(url&&url.startsWith('https://'))))];
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:spec.objective,prerequisites:spec.prerequisites,sections,tasks:spec.tasks,
  videos:[],authorship:'Kognos — aula autoral aprofundada; sem homologação docente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'
 };
}
