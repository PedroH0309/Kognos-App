import type {AuthoredLessonSeed} from './authored-lesson-recipe.ts';
export const stage19Math:AuthoredLessonSeed[]=[
  {
    "subject": "Matemática",
    "topic": "MDC e MMC",
    "objective": "Calcular máximo divisor comum e mínimo múltiplo comum e selecionar corretamente qual deles resolve problemas de agrupamento e periodicidade.",
    "chapters": [
      [
        "Divisores e máximo divisor comum",
        "O máximo divisor comum (MDC) de dois inteiros positivos é o maior número que divide ambos sem deixar resto. A decomposição em fatores primos permite escolher os fatores comuns com os menores expoentes. Esse procedimento é útil para repartir quantidades em grupos iguais sem sobras, desde que a pergunta realmente peça a maior dimensão possível.",
        "Para 18 e 24, os divisores comuns incluem 1, 2, 3 e 6; assim MDC(18,24)=6. É possível formar seis grupos com três e quatro objetos, respectivamente.",
        "MDC é sempre o maior número presente entre as quantidades originais.",
        "Calcule o MDC de 30 e 42 pela fatoração em primos.",
        "30=2×3×5 e 42=2×3×7.",
        "Os fatores comuns são 2 e 3; o produto é 6. Portanto, MDC(30,42)=6, o maior divisor de ambos.",
        "O MDC deve dividir todas as quantidades, não ser simplesmente o maior termo da lista. Em geral, não ultrapassa o menor número considerado."
      ],
      [
        "Múltiplos e mínimo múltiplo comum",
        "O mínimo múltiplo comum (MMC) é o menor inteiro positivo que aparece na sequência de múltiplos de todas as quantidades. Na decomposição, escolhem-se todos os fatores primos presentes, com os maiores expoentes. O MMC é útil quando ciclos periódicos precisam coincidir, e não quando queremos formar o maior grupo divisível.",
        "Dois alarmes disparam a cada 6 e 8 minutos; se tocaram juntos agora, repetem a coincidência depois de MMC(6,8)=24 minutos.",
        "O MMC é obtido multiplicando os números sempre, sem considerar fatores repetidos.",
        "Se dois eventos se repetem a cada 12 e 18 dias, quando coincidirão de novo?",
        "Calcule MMC(12,18) usando fatores de 2 e 3.",
        "12=2²×3 e 18=2×3². MMC=2²×3²=36 dias, pois é o menor múltiplo comum positivo.",
        "A multiplicação direta de dois valores fornece múltiplo comum, mas pode não ser o menor quando eles compartilham fatores."
      ],
      [
        "Escolha o instrumento adequado",
        "A escolha entre MDC e MMC depende da estrutura do problema. Repartição em grupos iguais com quantidade máxima costuma indicar MDC; repetição sincronizada e encontros de ciclos podem indicar MMC. Alguns problemas exigem interpretação adicional, como o instante inicial, limites positivos ou exigência de usar todos os itens. Confira o resultado nas condições originais, não só na fatoração.",
        "Para distribuir 20 lápis e 30 canetas em kits idênticos sem sobras, o máximo de kits é MDC(20,30)=10, cada um com dois lápis e três canetas.",
        "Todo problema que menciona dois números deve ser resolvido com MMC, por ser um múltiplo comum.",
        "Uma escola fará kits iguais com 28 borrachas e 42 lápis; qual máximo de kits?",
        "A questão solicita maior quantidade de grupos sem sobra.",
        "MDC(28,42)=14. Cada kit tem 28/14=2 borrachas e 42/14=3 lápis. A regra exige usar integralmente as duas quantidades.",
        "O agrupamento exige divisor comum de todas as quantidades. MMC resolveria encontro de períodos, não o máximo de kits sem sobras."
      ]
    ],
    "situation": [
      "Uma escola dispõe de 24 cadernos e 36 canetas e pretende montar a maior quantidade possível de kits idênticos, usando todos os materiais sem sobras. Um aluno sugere multiplicar 24 por 36.",
      "Quantos kits podem ser montados e por que o cálculo é feito com MDC, e não multiplicação direta?",
      "MDC(24,36)=12. São 12 kits com dois cadernos e três canetas cada; o número de kits deve dividir ambas as quantidades."
    ],
    "links": [
      [
        "Matemática",
        "Frações e operações",
        "Fatoração e múltiplos comuns ajudam a construir denominadores para somar e subtrair frações."
      ],
      [
        "Matemática",
        "Operações, divisibilidade e conjuntos numéricos",
        "Critérios de divisibilidade e fatores primos sustentam os algoritmos de MDC e MMC."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Juros simples",
    "objective": "Calcular capital, taxa, tempo e montante em juros simples, distinguindo evolução linear de capitalização composta e taxas incompatíveis.",
    "chapters": [
      [
        "Juros sobre o capital inicial",
        "No regime de juros simples, a taxa incide sobre o capital inicial C a cada período: J=C·i·t, quando taxa i e tempo t usam unidades compatíveis. O montante é M=C+J. Trata-se de modelo matemático para determinadas operações e exercícios; tarifas e encargos reais podem exigir outras regras contratuais.",
        "Capital de R$ 500 a 2% ao mês durante 3 meses produz J=500×0,02×3=R$ 30 e M=R$ 530.",
        "Juros simples são calculados a cada mês sobre o saldo já acrescido dos juros anteriores.",
        "Calcule os juros de R$ 800 a 1,5% ao mês por quatro meses.",
        "Converta 1,5% para 0,015 e use J=C·i·t.",
        "J=800×0,015×4=R$ 48. O montante, sem outros encargos, é R$ 848. O valor final não incorpora tarifas adicionais.",
        "No regime simples, cada período gera a mesma parcela calculada sobre C inicial; juros sobre juros caracterizam outro regime."
      ],
      [
        "Taxa e tempo precisam corresponder",
        "A taxa possui unidade temporal. Uma taxa de 12% ao ano não pode ser multiplicada diretamente por seis meses usando t=6 sem conversão. Em exercícios de equivalência proporcional de juros simples, seis meses representam meio ano, mas em aplicações reais a convenção de dias e encargos deve ser explicitada. Identifique sempre a base temporal antes de substituir na fórmula.",
        "Para C=1000, i=12% ao ano e t=6 meses=0,5 ano, J=1000×0,12×0,5=R$ 60.",
        "Se a taxa é anual e o prazo é de seis meses, basta usar t=6 na fórmula sem ajustar unidades.",
        "Calcule J de R$ 2000 a 10% ao ano por 18 meses em juros simples.",
        "Dezoito meses equivalem a 1,5 ano.",
        "J=2000×0,10×1,5=R$ 300. O montante é R$ 2300 no modelo, sem encargos.",
        "Taxa anual multiplicada por número de meses sem conversão superestima o juro. O tempo e a taxa devem compartilhar a mesma unidade."
      ],
      [
        "Diferença para juros compostos",
        "No regime composto, cada período altera a base de cálculo: M=C(1+i)^t. Em juros simples, M=C(1+it), então o crescimento do saldo é linear para taxa fixa. Comparar valores ajuda a decidir qual modelo descreve a proposta. Não conclua que juros simples sempre são menores em qualquer condição: isso depende de taxa, tempo e sinal, e contratos devem ser examinados.",
        "Com R$ 1000 a 10% por dois anos, juros simples geram R$ 1200; compostos geram 1000×1,1²=R$ 1210.",
        "Juros simples e compostos dão exatamente o mesmo saldo para qualquer prazo e taxa positiva.",
        "Compare os montantes de R$ 100 a 10% por dois períodos nos dois regimes.",
        "Simples: C(1+2i). Compostos: C(1+i)².",
        "Simples: 100×1,2=120; compostos: 100×1,1²=121. Os regimes diferem porque a base de cálculo muda.",
        "A capitalização composta acrescenta juros ao principal nos períodos seguintes; por isso a evolução não é linear como em juros simples."
      ]
    ],
    "situation": [
      "Um comércio oferece parcelamento hipotético de R$ 600 com juros simples de 2% ao mês por cinco meses, sem outras tarifas. Um cliente calcula juros sobre cada saldo crescente.",
      "Qual será o juro total no modelo informado e por que a base não muda a cada mês?",
      "J=600×0,02×5=R$ 60, montante R$ 660. Juros simples usam o capital inicial R$ 600 em todos os períodos."
    ],
    "links": [
      [
        "Matemática",
        "Juros compostos",
        "Comparar expressões linear e exponencial evita confundir juros sobre capital inicial com capitalização de saldo."
      ],
      [
        "Matemática",
        "Função afim",
        "Com taxa fixa em juros simples, montante em função do tempo é uma função afim no modelo."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Sistemas de equações",
    "objective": "Modelar problemas com duas incógnitas por sistemas lineares, resolver por substituição ou eliminação e interpretar consistência do resultado.",
    "chapters": [
      [
        "Duas incógnitas e duas restrições",
        "Um sistema reúne equações que precisam ser verdadeiras simultaneamente. Para duas incógnitas x e y, duas relações independentes costumam determinar um par solução único, mas também podem representar retas paralelas ou coincidentes. A modelagem exige indicar o que cada letra representa e manter unidades consistentes.",
        "Dois ingressos adultos e um infantil custam R$ 50; um adulto e um infantil custam R$ 30. Representamos 2a+i=50 e a+i=30.",
        "Cada equação de um sistema pode usar um valor diferente para a mesma incógnita.",
        "Monte um sistema se dois cadernos e uma caneta custam 17 reais, e um caderno e uma caneta 10 reais.",
        "Use c para caderno e p para caneta.",
        "As equações são 2c+p=17 e c+p=10; o mesmo c e o mesmo p devem satisfazer ambas.",
        "Uma solução de sistema é um conjunto comum de valores. Resolver as equações separadamente sem coordená-las não garante consistência."
      ],
      [
        "Substituição e eliminação",
        "Na substituição, uma equação é isolada para uma incógnita e inserida na outra. Na eliminação, combinam-se equações de modo a cancelar uma incógnita, mantendo equivalência. Ambas devem produzir o mesmo resultado para sistemas com solução única. É necessário aplicar operações aos dois membros para não alterar a solução indevidamente.",
        "Subtraindo a+i=30 de 2a+i=50, obtemos a=20; então i=10, satisfazendo os dois preços.",
        "Somar duas equações permite apagar qualquer incógnita sem analisar coeficientes e sinais.",
        "Resolva x+y=11 e x−y=3, apresentando a eliminação e a verificação.",
        "Some as equações para eliminar y.",
        "2x=14, então x=7 e y=4. A verificação dá 7+4=11 e 7−4=3.",
        "A eliminação só ocorre quando os coeficientes se cancelam. É preciso preparar as equações com multiplicações válidas quando necessário."
      ],
      [
        "Interpretação gráfica e casos especiais",
        "Cada equação linear de duas variáveis pode representar uma reta no plano. Se as retas se cruzam, há solução única; se são paralelas distintas, nenhuma; se coincidem, infinitas soluções. A contagem de equações não garante solução única. Ao modelar compras, número negativo pode ser matematicamente possível mas economicamente inadequado.",
        "x+y=4 e 2x+2y=8 descrevem a mesma reta e possuem infinitos pares, ao contrário de duas retas distintas paralelas.",
        "Todo sistema com duas equações e duas incógnitas possui exatamente uma solução.",
        "Classifique x+y=5 e 2x+2y=12 quanto ao número de soluções.",
        "Multiplique a primeira equação por dois.",
        "A primeira implica 2x+2y=10, incompatível com 12; as retas são paralelas distintas e não existe solução comum.",
        "Duas equações podem ser proporcionais ou incompatíveis; a quantidade de incógnitas não basta para assegurar interseção."
      ]
    ],
    "situation": [
      "Na bilheteria, dois ingressos adultos e um infantil custam R$ 50, enquanto um ingresso de cada tipo custa R$ 30. A turma quer descobrir os dois preços, sem inventar valores.",
      "Quanto custa cada ingresso e por que os preços precisam satisfazer ambas as compras?",
      "Se a e i são preços, 2a+i=50 e a+i=30. Subtraindo, a=20 e i=10; ambos os totais são satisfeitos."
    ],
    "links": [
      [
        "Matemática",
        "Equações do primeiro grau",
        "O isolamento de incógnitas e as operações equivalentes são usados em substituição e eliminação."
      ],
      [
        "Matemática",
        "Função afim",
        "Um sistema de duas equações lineares pode ser interpretado graficamente pela interseção das retas."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Teorema de Pitágoras",
    "objective": "Aplicar a relação pitagórica a triângulos retângulos, verificar hipóteses e modelar distâncias geométricas sem confundir hipotenusa e catetos.",
    "chapters": [
      [
        "A relação exige ângulo reto",
        "Num triângulo retângulo, os catetos formam o ângulo de 90° e a hipotenusa fica diante dele. O teorema afirma a²+b²=c², sendo c a hipotenusa. Não se aplica automaticamente a qualquer triângulo; reconhecer o ângulo reto é parte da resolução. As medidas devem estar na mesma unidade.",
        "Em triângulo de catetos 3 m e 4 m, hipotenusa mede √(9+16)=5 m, conforme relação 3-4-5.",
        "O lado maior é sempre hipotenusa de qualquer triângulo, mesmo que não haja ângulo reto.",
        "Encontre hipotenusa se os catetos medem 6 cm e 8 cm.",
        "Some os quadrados e extraia raiz positiva.",
        "c²=36+64=100, então c=10 cm. Como comprimento é positivo, usamos raiz positiva.",
        "Hipotenusa é conceito próprio do triângulo retângulo, oposta ao ângulo de 90°, não nome de qualquer lado grande."
      ],
      [
        "Encontrar cateto exige subtração de quadrados",
        "Quando a hipotenusa e um cateto são conhecidos, isole o quadrado do outro cateto: a²=c²−b². A raiz deve representar comprimento não negativo, e c precisa ser o maior lado. Não se deve subtrair os comprimentos antes de elevar ao quadrado, pois isso altera a relação geométrica.",
        "Se hipotenusa mede 13 e um cateto 5, o outro é √(169−25)=√144=12 unidades.",
        "O cateto desconhecido sempre corresponde à hipotenusa menos o outro cateto.",
        "Determine cateto de triângulo retângulo com hipotenusa 17 e outro cateto 8.",
        "Calcule √(17²−8²). Considere os lados do triângulo retângulo.",
        "√(289−64)=√225=15. Os lados 8, 15 e 17 satisfazem 8²+15²=17².",
        "Não se subtraem diretamente os lados. O teorema relaciona quadrados dos comprimentos, e só depois se extrai raiz."
      ],
      [
        "Distância no plano e uso de modelos",
        "Coordenadas cartesianas permitem calcular distância entre dois pontos por diferenças horizontal e vertical, formando triângulo retângulo auxiliar: d=√[(Δx)²+(Δy)²]. Essa distância é linha reta no plano euclidiano; o caminho real percorrido pode ser maior por obstáculos. É preciso diferenciar distância geométrica, deslocamento e rota urbana.",
        "De (1,2) a (5,5), temos Δx=4, Δy=3 e distância direta 5 unidades, não necessariamente caminho de ruas.",
        "A distância em linha reta é sempre igual à distância percorrida por ruas entre dois endereços.",
        "Calcule distância de (0,0) até (6,8) em um plano de mesma escala.",
        "Use as diferenças nos dois eixos como catetos.",
        "d=√(6²+8²)=√100=10 unidades. A relação vale no plano com eixos ortogonais e escala coerente.",
        "Uma rota urbana pode contornar quarteirões; a relação pitagórica fornece distância direta entre posições no modelo geométrico."
      ]
    ],
    "situation": [
      "Uma escada de 5 metros está apoiada numa parede, com a base a 3 metros da parede. Suponha parede e chão perpendiculares e escada rígida, sem tratar isso como orientação de instalação.",
      "Qual altura alcançada pela ponta da escada no modelo geométrico e qual é a hipotenusa?",
      "A escada é a hipotenusa: h²+3²=5², então h²=16 e h=4 metros. A segurança real depende de outros fatores."
    ],
    "links": [
      [
        "Matemática",
        "Equações do segundo grau",
        "A extração de raízes e a solução de equações quadráticas aparece no isolamento de comprimentos."
      ],
      [
        "Matemática",
        "Potências e propriedades",
        "Quadrados e raízes são operações indispensáveis para aplicar e verificar a igualdade pitagórica."
      ]
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Razão e proporção",
    "objective": "Comparar grandezas por razões com unidades coerentes, resolver proporções e reconhecer quando relações são ou não diretamente proporcionais.",
    "chapters": [
      [
        "Razão compara duas grandezas",
        "Razão entre a e b, com b diferente de zero, é quociente a/b com interpretação dependente de unidades. Comparar 2 litros por pessoa ou 3 livros para 5 estudantes descreve relações, não apenas frações isoladas. Antes de simplificar, identifique grandezas e converta unidades se necessário; razão entre comprimentos pode ser adimensional quando unidades coincidem.",
        "Uma mistura didática tem 2 copos de concentrado para 6 de água; a razão concentrado/água é 2/6=1/3, não 2/8.",
        "A razão entre duas quantidades é sempre obtida somando-as e depois dividindo por dois.",
        "Qual razão entre 8 bicicletas e 20 estudantes, na ordem bicicletas por estudantes?",
        "Escreva 8/20 e simplifique.",
        "A razão é 8/20=2/5 bicicleta por estudante no contexto, sem afirmar que cada aluno recebe uma fração física de bicicleta.",
        "Razão compara mediante quociente e depende da ordem; média aritmética e soma não descrevem a mesma relação."
      ],
      [
        "Proporções preservam razões",
        "Uma proporção estabelece igualdade entre duas razões a/b=c/d, com denominadores não nulos. A multiplicação cruzada ad=bc pode ser usada para encontrar incógnitas, mas não substitui a interpretação de unidades e correspondência entre grandezas. Em grandezas diretamente proporcionais, o quociente entre valores correspondentes permanece constante em condições definidas.",
        "Se 3 pacotes custam R$ 15 e o preço por pacote não muda, 5 pacotes custam R$ 25 porque 15/3=25/5=5.",
        "Qualquer relação crescente entre duas variáveis é automaticamente uma proporção direta.",
        "Se 4 cadernos custam R$ 28 com preço unitário fixo, quanto custam 7?",
        "Preço unitário é 28/4 reais.",
        "Cada caderno custa R$ 7, portanto sete custam 7×7=R$ 49 no modelo diretamente proporcional.",
        "Crescimento simultâneo não basta: a proporcionalidade direta exige razão constante, o que pode falhar sob taxas fixas e descontos."
      ],
      [
        "Proporcionalidade e escala",
        "Escalas, receitas e taxas usam razões, mas precisam de unidades e hipóteses. Um mapa com escala 1:100.000 representa um centímetro no papel para cem mil centímetros reais sob essa definição. Se houver cobrança fixa além do preço variável, custo total deixa de ser diretamente proporcional à quantidade, embora ainda possa ser função afim.",
        "Uma tarifa de R$ 10 de adesão mais R$ 2 por ingresso não é diretamente proporcional ao número de ingressos por causa do termo fixo.",
        "Toda expressão y=ax+b, com quaisquer valores de b, representa proporcionalidade direta entre x e y.",
        "Uma mapa em escala 1:50.000 mostra 3 cm de distância. Quantos quilômetros representa?",
        "Multiplique três por cinquenta mil centímetros e converta.",
        "3×50.000=150.000 cm=1.500 m=1,5 km na escala indicada, considerando medida em linha no mapa.",
        "A escala é relação proporcional entre distâncias correspondentes, mas custos com termo fixo não possuem razão y/x constante."
      ]
    ],
    "situation": [
      "Uma feira cobra R$ 10 de entrada e R$ 5 por atividade. Um aluno afirma que o custo de seis atividades é três vezes o custo de duas, porque a quantidade triplicou.",
      "Qual é o custo real em cada caso e por que a cobrança fixa impede proporção direta?",
      "Duas atividades custam 10+2×5=R$ 20; seis custam 10+6×5=R$ 40, apenas o dobro, devido à entrada fixa."
    ],
    "links": [
      [
        "Matemática",
        "Frações e operações",
        "Simplificação de frações e equivalência de quocientes são fundamentos para representar razões."
      ],
      [
        "Matemática",
        "Regra de três simples",
        "O cálculo de valores correspondentes na regra de três exige identificar a relação de proporcionalidade aplicável."
      ]
    ]
  }
];
