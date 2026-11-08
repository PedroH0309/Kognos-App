import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material original Kognos; não oficial, sem revisão ou homologação docente. */
export const provaoDepthBatch33Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Velocidade e Aceleração: escalar média e instantânea; vetorial média e instantânea",
    "objective": "Distinguir distância, deslocamento, velocidade escalar e vetorial, aceleração média e instantânea, com unidades e sinais coerentes.",
    "prerequisites": [
      "Unidades SI",
      "Vetores e eixos orientados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Distância percorrida, deslocamento e velocidade",
        "explanation": "A posição x é medida em relação a uma origem e um eixo orientado. Deslocamento é Δx=xfinal−xinicial e pode ser positivo, negativo ou nulo; distância percorrida é o comprimento total do caminho e nunca é negativa. A velocidade vetorial média é Δr/Δt, enquanto a rapidez média é distância total/Δt. Em movimento retilíneo, a componente algébrica da velocidade média é Δx/Δt. Se alguém caminha 30 m para leste e 10 m para oeste, percorre 40 m mas termina 20 m a leste do ponto inicial. Em 10 s, rapidez média é 4 m/s e velocidade média no eixo leste positivo é +2 m/s. O sentido escolhido importa para o sinal, mas não altera o fenômeno físico. Essas médias não descrevem obrigatoriamente a velocidade em cada instante; paradas e retornos podem produzir médias pequenas apesar de velocidades instantâneas altas.",
        "example": "Percurso de 30 m a leste e 10 m a oeste em 10 s: distância=40 m; deslocamento=+20 m; rapidez média=40/10=4 m/s; velocidade média=20/10=+2 m/s. A sequência de cálculo explicita a orientação do eixo, a unidade e a interpretação do sinal; o resultado só vale nas hipóteses descritas.",
        "pitfall": "Não substitua deslocamento por distância quando a questão pedir velocidade vetorial média.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "intermediate",
        "title": "Velocidade instantânea e aceleração",
        "explanation": "A velocidade instantânea corresponde ao limite de Δx/Δt quando o intervalo tende a zero, ou à inclinação da tangente no gráfico posição-tempo. A aceleração média é Δv/Δt e a instantânea é a taxa de variação da velocidade no instante. Em movimento retilíneo com aceleração constante, v=v0+at e x=x0+v0t+at²/2; essas expressões exigem um referencial aproximadamente inercial e a hipótese de aceleração constante. Se v0=3 m/s e a=2 m/s² durante 4 s, a velocidade final é 11 m/s e o deslocamento é 3·4+2·16/2=28 m. Aceleração positiva não significa necessariamente aumento da rapidez: um corpo com velocidade negativa e aceleração positiva pode estar desacelerando. Em gráficos v×t, a inclinação representa aceleração e a área algébrica representa deslocamento, não distância total quando há inversão de sentido.",
        "example": "Para v0=3 m/s, a=2 m/s² e t=4 s: v=3+2·4=11 m/s; Δx=3·4+(2·16)/2=28 m. A sequência de cálculo explicita a orientação do eixo, a unidade e a interpretação do sinal; o resultado só vale nas hipóteses descritas.",
        "pitfall": "Não use área algébrica de v×t como distância percorrida se o gráfico atravessa o zero.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      },
      {
        "level": "advanced",
        "title": "Vetores, curvas e limites de interpretação",
        "explanation": "Em duas dimensões, velocidade e aceleração são vetores: v=(vx,vy) e a=(ax,ay). A magnitude de v é √(vx²+vy²), enquanto sua direção depende das componentes. Uma trajetória circular uniforme mantém a rapidez constante, mas altera continuamente a direção de v; portanto, existe aceleração centrípeta de módulo v²/R, dirigida para o centro. Se v=6 m/s e R=3 m, a=36/3=12 m/s² mesmo sem mudança de rapidez. A aceleração tangencial, quando presente, modifica o módulo da velocidade, ao passo que a componente normal modifica a direção. Um GPS pode estimar velocidade por amostragens discretas, mas a aproximação de derivadas depende da resolução temporal e dos erros de posição. A interpretação física exige distinguir vetor de módulo, movimento em linha reta de movimento curvo e taxa média de taxa instantânea.",
        "example": "Em curva circular com rapidez 6 m/s e raio 3 m: aceleração centrípeta=6²/3=12 m/s², apontando para o centro. A sequência de cálculo explicita a orientação do eixo, a unidade e a interpretação do sinal; o resultado só vale nas hipóteses descritas.",
        "pitfall": "Não afirme que aceleração é zero apenas porque o velocímetro mostra rapidez constante.",
        "steps": [
          "Identifique as grandezas e conceitos pertinentes ao caso.",
          "Resolva o exemplo justificando cada etapa e hipótese.",
          "Confira condições de validade e descarte a interpretação equivocada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Após 30 m para leste e 10 m para oeste, o deslocamento é:",
        "options": [
          "40 m leste",
          "20 m leste",
          "20 m oeste",
          "0 m"
        ],
        "correctIndex": 1,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "O deslocamento é a soma algébrica: +30−10=+20 m. O procedimento diferencia grandeza escalar de componente vetorial e evita confundir a média com a taxa instantânea."
      },
      {
        "level": "intermediate",
        "prompt": "Com v0=3 m/s, a=2 m/s² e t=4 s, a velocidade é:",
        "options": [
          "5 m/s",
          "8 m/s",
          "11 m/s",
          "24 m/s"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "Pela equação v=v0+at=3+2·4=11 m/s. O procedimento diferencia grandeza escalar de componente vetorial e evita confundir a média com a taxa instantânea."
      },
      {
        "level": "advanced",
        "prompt": "Corpo em movimento circular uniforme possui:",
        "options": [
          "Aceleração nula",
          "Aceleração tangencial obrigatória",
          "Aceleração centrípeta",
          "Velocidade vetorial constante"
        ],
        "correctIndex": 2,
        "hint": "Compare as hipóteses e use o procedimento do capítulo correspondente.",
        "solution": "A direção da velocidade muda; existe aceleração normal dirigida ao centro. O procedimento diferencia grandeza escalar de componente vetorial e evita confundir a média com a taxa instantânea."
      }
    ]
  }
];
