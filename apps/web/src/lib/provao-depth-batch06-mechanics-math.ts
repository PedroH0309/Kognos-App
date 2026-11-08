import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original physics and mathematics lessons; no teacher approval claimed. */
export const provaoDepthBatch06MechanicsMath:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Leis de Newton: Princípio da inércia",
    "objective": "Investigar as três leis de Newton, construir diagramas de corpo livre e relacionar força resultante, massa, aceleração e pares de interação em exemplos numéricos e situações cotidianas.",
    "prerequisites": [
      "Aceleração e velocidade",
      "Soma vetorial",
      "Massa, força e unidades SI"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Lei da inércia: resultante nula não significa repouso",
        "explanation": "A primeira lei de Newton estabelece que, em referencial inercial, um corpo permanece em repouso ou em movimento retilíneo uniforme quando a força resultante externa é nula. A inércia é uma propriedade associada à massa e não uma força adicional que empurra o corpo. Para reconhecer a primeira lei, pergunte se a velocidade está mudando: um carro que percorre trecho reto com velocidade constante possui aceleração zero, mesmo que motor, resistência do ar e atrito exerçam forças não nulas. Essas forças podem se equilibrar. Um corpo que está deslizando não precisa de força para continuar deslizando idealmente; uma força resultante é necessária para mudar sua velocidade ou direção. Distinga a força resultante, obtida pela soma vetorial, da lista de forças presentes. Em uma caixa apoiada num piso, peso para baixo e normal para cima podem se equilibrar verticalmente; em movimento horizontal uniforme, empurrão e atrito podem se equilibrar horizontalmente. O esquema de forças externas ajuda a explicar o movimento sem inventar uma seta de \"força do movimento\".",
        "example": "Uma caixa de 5 kg desloca-se a 2 m/s para a direita em piso horizontal. Alguém aplica força horizontal de 18 N para a direita e o atrito atua com 18 N à esquerda. A resultante é 18−18=0 N; a aceleração é zero, e a caixa continua em linha reta a 2 m/s se as condições forem mantidas. A massa não é usada para determinar a velocidade nesse caso.",
        "pitfall": "Evite inferir que resultante nula implica velocidade nula. Também não desenhe uma força para cada direção de movimento: velocidade não é força, e forças podem existir sem provocar aceleração.",
        "steps": [
          "Escolha um corpo e um referencial aproximadamente inercial.",
          "Desenhe todas as forças externas e some os componentes em cada eixo.",
          "Conclua se a velocidade permanece constante ou muda pela resultante."
        ]
      },
      {
        "level": "intermediate",
        "title": "Segunda lei: a aceleração depende da soma vetorial",
        "explanation": "No modelo escolar com massa constante, a segunda lei é ΣF = ma. Essa é uma igualdade vetorial: a direção e o sentido da aceleração são determinados pela resultante de todas as forças externas, não apenas pela maior força desenhada. Unidade de força é newton, definido como kg·m/s². Para duas forças colineares opostas de módulos 30 N e 10 N, a resultante tem módulo 20 N no sentido da força maior. Se o objeto tem massa 4 kg, sua aceleração é 5 m/s². Aumentar a massa mantendo a mesma resultante diminui a aceleração. O peso P=mg é uma força e depende de g, enquanto a massa é propriedade inercial expressa em quilogramas; não são sinônimos. A força normal é perpendicular à superfície e nem sempre vale mg, como ocorre em planos inclinados e elevadores acelerados. Para resolver situações com atrito e inclinação, desenhe eixos apropriados, decomponha os vetores e identifique se a força de atrito é estática ou cinética segundo o problema. A conta só é confiável depois que a resultante está correta.",
        "example": "Bloco de 4 kg recebe empurrão de 30 N para a direita e força de atrito de 10 N para a esquerda. Escolhendo direita como positiva, ΣFₓ=+30−10=+20 N, portanto aₓ=20/4=+5 m/s². Se parte do repouso e a aceleração é constante por 2 s, v=0+5×2=10 m/s, usando dados e hipóteses informados.",
        "pitfall": "Não utilize a força aplicada de 30 N diretamente em F=ma sem antes subtrair o atrito de 10 N. A aceleração é causada pela resultante, e o sinal indica sentido no eixo escolhido.",
        "steps": [
          "Defina o sentido positivo e desenhe forças externas.",
          "Calcule a resultante com sinais e unidades.",
          "Use a=ΣF/m e confira se o sentido é fisicamente coerente."
        ]
      },
      {
        "level": "advanced",
        "title": "Terceira lei: ação e reação em corpos diferentes",
        "explanation": "A terceira lei estabelece que duas forças de interação entre corpos diferentes têm mesma intensidade, direção e sentidos opostos. Se a mão empurra a parede, a parede exerce na mão uma força oposta de mesmo módulo; não é necessário que ambos acelerem da mesma maneira. As forças de ação e reação não se cancelam no diagrama de um único corpo porque atuam em corpos distintos. Quando uma caixa está parada no piso, peso e normal são forças que atuam sobre a caixa e podem se equilibrar, mas não constituem par da terceira lei. A reação ao peso é a força gravitacional que a caixa exerce sobre a Terra; a reação à normal é a força que a caixa exerce sobre o piso. Em problemas de dois blocos, distinguir forças internas e externas é essencial. As forças que blocos exercem entre si cancelam-se quando calculamos a resultante do sistema completo, embora devam aparecer nos diagramas individuais. Essa diferença permite analisar cordas, colisões, propulsão e equilíbrio sem misturar interações. A terceira lei não diz que forças produzem acelerações iguais, pois a segunda lei também envolve a massa de cada objeto.",
        "example": "Dois patinadores, A de 50 kg e B de 75 kg, empurram-se com forças horizontais de 150 N de intensidade, desprezando atrito. Pela terceira lei, A recebe 150 N em um sentido e B recebe 150 N no oposto. Pela segunda, os módulos das acelerações são 150/50=3 m/s² para A e 150/75=2 m/s² para B. Forças iguais não significam acelerações iguais.",
        "pitfall": "Não confunda par de ação e reação com forças em equilíbrio sobre o mesmo corpo. O par sempre pertence a dois corpos e pode produzir acelerações distintas devido a suas massas.",
        "steps": [
          "Identifique os dois objetos da interação e uma força aplicada a cada um.",
          "Desenhe um diagrama de corpo livre separado para cada objeto.",
          "Relacione igualdade de módulos das forças a acelerações calculadas individualmente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma caixa desliza em linha reta a velocidade constante, sob forças que se compensam. Qual conclusão é correta?",
        "options": [
          "A força resultante é necessariamente maior que zero.",
          "A velocidade obrigatoriamente passa a zero.",
          "A aceleração é zero, embora existam forças atuando.",
          "A inércia é uma força que age na direção do movimento."
        ],
        "correctIndex": 2,
        "hint": "A primeira lei trata de aceleração nula, não de ausência de velocidade.",
        "solution": "A alternativa C está correta: forças externas podem existir e somar zero, produzindo aceleração nula. As outras confundem velocidade e força ou consideram inércia uma força separada."
      },
      {
        "level": "intermediate",
        "prompt": "Um bloco de 4 kg recebe 30 N à direita e 10 N à esquerda. Qual a aceleração?",
        "options": [
          "5 m/s² para a direita.",
          "10 m/s² para a direita.",
          "7,5 m/s² para a direita.",
          "5 m/s² para a esquerda."
        ],
        "correctIndex": 0,
        "hint": "Some forças antes de aplicar ΣF=ma.",
        "solution": "A alternativa A está correta: resultante é 30−10=20 N à direita, então a=20/4=5 m/s². As demais respostas ignoram a força contrária ou invertem seu sentido."
      },
      {
        "level": "advanced",
        "prompt": "Qual é o par de ação e reação da força normal que o piso exerce sobre uma caixa?",
        "options": [
          "O peso da caixa, também dirigido para baixo.",
          "O atrito sobre a caixa, paralelo ao piso.",
          "A força gravitacional da caixa sobre a Terra.",
          "A força que a caixa exerce sobre o piso."
        ],
        "correctIndex": 3,
        "hint": "As forças de um par atuam em objetos diferentes.",
        "solution": "A alternativa D está correta: piso sobre caixa e caixa sobre piso são forças recíprocas de contato. Peso e atrito atuam na caixa, enquanto a força gravitacional sobre a Terra é reação ao peso."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Função quadrática: Conceitos e resolução de problemas",
    "objective": "Explicar f(x)=ax²+bx+c e o formato de seu gráfico, resolver equações por fatoração, completamento de quadrado e discriminante, interpretar vértices e otimizar modelos com domínio contextual.",
    "prerequisites": [
      "Operações com números reais",
      "Equações de primeiro grau",
      "Plano cartesiano",
      "Potências"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Concavidade, interceptos e zeros da parábola",
        "explanation": "Uma função quadrática real tem forma f(x)=ax²+bx+c, com a≠0. Seu gráfico é uma parábola; se a é positivo, a concavidade é para cima, e se a é negativo, é para baixo. O valor f(0)=c fornece o ponto em que o gráfico encontra o eixo vertical. Zeros são soluções de f(x)=0 e correspondem às interseções com o eixo horizontal, quando existem. Para f(x)=x²−5x+6, podemos usar fatoração: (x−2)(x−3)=0, logo x=2 ou x=3. Conferir a expansão, x²−5x+6, evita aceitar fatoração incorreta. A forma do gráfico oferece pistas, mas não substitui cálculo quando a representação é esquemática ou está fora de escala. O domínio algébrico de um polinômio quadrático sobre os reais é todo R; já uma aplicação física pode exigir restrições, como comprimentos positivos ou tempo não negativo. Um valor matematicamente permitido pode não fazer sentido no problema real. A parábola pode ter duas interseções reais, tocar o eixo uma vez ou não cruzá-lo, conforme o discriminante.",
        "example": "Considere f(x)=x²−5x+6. Como a=1, a concavidade é para cima; como c=6, o gráfico passa por (0,6). Fatorando em (x−2)(x−3), temos f(2)=0 e f(3)=0. O desenho coerente cruza o eixo horizontal em (2,0) e (3,0). Não há necessidade de estimar as raízes a olho quando a expressão é conhecida.",
        "pitfall": "Não conclua que toda parábola tem duas raízes reais distintas. O gráfico pode apenas tangenciar o eixo horizontal, ou estar todo acima ou abaixo dele.",
        "steps": [
          "Identifique a, b e c, verificando a≠0.",
          "Encontre intercepto vertical e zeros por fatoração ou outro método.",
          "Compare a conclusão algébrica com a concavidade e o contexto."
        ]
      },
      {
        "level": "intermediate",
        "title": "Discriminante, Bhaskara e completamento de quadrados",
        "explanation": "Para ax²+bx+c=0, com a≠0, defina Δ=b²−4ac. A fórmula quadrática fornece x=(−b±√Δ)/(2a). Quando Δ>0, há duas raízes reais diferentes; Δ=0 produz uma raiz real dupla; Δ<0 significa nenhuma raiz real, embora possa haver raízes complexas. A fórmula pode ser deduzida por completamento do quadrado e por isso não deve ser aplicada sem reconhecer seus termos. No exemplo x²−6x+5=0, adicionar 9 aos dois lados transforma x²−6x+9=4, isto é, (x−3)²=4. Logo x−3=±2 e x=1 ou 5. Pela fórmula, Δ=36−20=16 e x=(6±4)/2, obtendo o mesmo resultado. Esse confronto entre métodos ensina a detectar erros de sinal e de fatoração. O eixo de simetria x_v=−b/(2a) é a média das raízes quando ambas existem, e a ordenada y_v=f(x_v)=−Δ/(4a). A posição do vértice completa a leitura do gráfico, mas não substitui as restrições de domínio de uma aplicação prática.",
        "example": "Resolva 2x²−4x−6=0: Δ=(−4)²−4·2·(−6)=16+48=64. Portanto x=[4±8]/4. A soma fornece x=3; a diferença fornece x=−1. Verificação: f(3)=18−12−6=0 e f(−1)=2+4−6=0. O mesmo par surge ao dividir a equação por dois e fatorar (x−3)(x+1).",
        "pitfall": "Não distribua radical por subtração: √(b²−4ac) não é igual a √b²−√4ac em geral. Além disso, o sinal de b deve ser mantido entre parênteses.",
        "steps": [
          "Calcule Δ usando coeficientes com sinais explícitos.",
          "Aplique a fórmula e simplifique os dois valores possíveis.",
          "Substitua cada raiz na equação original e confira o resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Vértice como máximo ou mínimo e modelagem de áreas",
        "explanation": "O vértice fornece ponto de mínimo quando a>0 e de máximo quando a<0. Para f(x)=−2x²+12x+5, a<0 e o ponto de máximo está em x_v=−12/(2·−2)=3, com valor f(3)=−18+36+5=23. O resultado tem significado matemático mesmo sem contexto, mas em problemas aplicados devemos identificar a grandeza representada e sua unidade. Se x é tempo e f é altura, interpretar 23 como altura máxima só é justificável dentro do intervalo em que o modelo físico é válido. Em otimização geométrica, condições de contorno importam. Para retângulo com perímetro 20 m, um lado x implica outro lado 10−x; a área é A(x)=x(10−x)=−x²+10x, com 0<x<10. Seu máximo ocorre em x=5, gerando área 25 m², caso em que o retângulo é quadrado. Zeros da função, posição do vértice e valores admissíveis são perguntas diferentes. Modelos quadráticos aproximam situações específicas, não descrevem automaticamente qualquer fenômeno fora dos dados analisados.",
        "example": "Um terreno retangular possui 20 m de perímetro. Se um lado tem comprimento x, outro mede 10−x. A área A(x)=−x²+10x é máxima em x_v=−10/(2·−1)=5. Substituindo, A(5)=5·5=25 m², com ambos os lados positivos. Os zeros x=0 e x=10 não são respostas de área máxima, pois representam figuras degeneradas.",
        "pitfall": "Não confunda zeros com o vértice. Encontrar A(x)=0 indica área nula, enquanto otimizar exige avaliar o extremo da parábola e checar o domínio físico.",
        "steps": [
          "Construa a função com unidades e restrições corretas.",
          "Calcule x_v=−b/(2a) e y_v=f(x_v).",
          "Verifique que o extremo está no domínio admissível e interprete a resposta."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quais são os zeros de f(x)=x²−5x+6?",
        "options": [
          "−2 e −3",
          "2 e 3",
          "1 e 6",
          "−1 e −6"
        ],
        "correctIndex": 1,
        "hint": "Fatore procurando números que somem cinco e multipliquem seis, com sinais apropriados.",
        "solution": "A alternativa B está correta: x²−5x+6=(x−2)(x−3), portanto os zeros são 2 e 3. As outras opções não reproduzem o coeficiente linear −5 na expansão."
      },
      {
        "level": "intermediate",
        "prompt": "Resolva x²−6x+5=0 no conjunto dos números reais.",
        "options": [
          "−1 e −5",
          "3 e 3",
          "Não possui raízes reais.",
          "1 e 5"
        ],
        "correctIndex": 3,
        "hint": "Complete o quadrado ou aplique Δ=16.",
        "solution": "A alternativa D está correta: (x−1)(x−5)=0, logo x=1 e x=5. Pelo discriminante Δ=16, x=(6±4)/2 confirma as duas raízes."
      },
      {
        "level": "advanced",
        "prompt": "Um retângulo tem perímetro de 20 m e lados x e 10−x. Qual sua área máxima?",
        "options": [
          "25 m²",
          "50 m²",
          "20 m²",
          "10 m²"
        ],
        "correctIndex": 0,
        "hint": "A área é A(x)=−x²+10x, uma parábola de concavidade para baixo.",
        "solution": "A alternativa A está correta: o vértice ocorre em x=5, levando a lados de 5 m e área 25 m². As demais quantidades não são o máximo sob a restrição 0<x<10."
      }
    ]
  }
];
