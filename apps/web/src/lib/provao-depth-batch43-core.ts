import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo original Kognos, não oficial e sem homologação docente. */
export const provaoDepthBatch43Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Nível sonoro. Decibel. Efeito Doppler",
    "objective": "Interpretar níveis sonoros logarítmicos e deslocamento Doppler com fonte e observador em movimento, explicitando limites do modelo clássico.",
    "prerequisites": [
      "Frequência e comprimento de onda",
      "Logaritmos decimais",
      "Velocidade relativa e propagação do som"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Intensidade e escala decibel",
        "explanation": "Intensidade sonora I é potência média transportada por unidade de área perpendicular à propagação, medida em W/m². Para uma onda aproximadamente esférica sem perdas significativas, a potência se distribui por área 4πr² e a intensidade decai aproximadamente com 1/r². O nível de intensidade sonora é β=10 log10(I/I0), com referência convencional I0=10⁻¹² W/m². Essa escala é logarítmica: multiplicar a intensidade por 10 acrescenta 10 dB, e dobrá-la acrescenta aproximadamente 3 dB. O decibel não é unidade de potência absoluta e duas fontes de 60 dB independentes e comparáveis não somam aritmeticamente 120 dB. Nível de pressão sonora, mais comum em medições ambientais, usa outra definição envolvendo pressão eficaz e referência apropriada; não se deve misturar fórmulas sem indicar a grandeza. A percepção de volume depende de frequência, duração e sensibilidade auditiva, portanto dB e sensação subjetiva não são equivalentes.",
        "example": "Se I=10⁻⁶ W/m², divida pela referência 10⁻¹² e obtenha razão 10⁶. Em seguida β=10 log10(10⁶)=60 dB. Se a intensidade subir a 10⁻⁵ W/m², a razão passa a 10⁷ e o nível será 70 dB: dez vezes mais intensidade, não dez vezes a sensação de volume.",
        "pitfall": "Não somar decibéis como números lineares nem confundir nível de intensidade com nível de pressão sem referência.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Combinação de fontes e distância",
        "explanation": "Para fontes independentes de mesma intensidade, as intensidades médias podem ser somadas antes de aplicar o logaritmo: Itotal=I1+I2. Assim, duas fontes de 60 dB, cada uma com I=10⁻⁶ W/m² na mesma referência, geram 2×10⁻⁶ W/m² e βtotal≈63 dB, sob hipóteses de independência e condições comparáveis. Para uma fonte pontual isotrópica no campo livre, dobrar a distância reduz a intensidade a um quarto, correspondendo a cerca de −6 dB. Paredes, reflexão, absorção atmosférica e direcionalidade podem alterar fortemente esse resultado. Em medições reais, a ponderação A, indicada por dB(A), aproxima a sensibilidade auditiva por frequência e não deve ser tratada como idêntica a dB sem ponderação. Uma exposição sonora não pode ser julgada apenas pelo pico de intensidade: duração e espectro também importam. Quando a questão fornece níveis de várias fontes, transforme em intensidades ou use a diferença logarítmica antes de combinar.",
        "example": "Duas caixas independentes produzem 60 dB cada em um ponto. Converta cada nível: I=10⁻¹²×10⁶=10⁻⁶ W/m². Some I=2×10⁻⁶; então β=10log10(2×10⁶)=10(0,301+6)≈63,0 dB. O cálculo não vale para interferência coerente arbitrária.",
        "pitfall": "Não usar 60+60=120 dB: a operação física correta é somar intensidades, não seus logaritmos.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Doppler para som",
        "explanation": "O efeito Doppler é a alteração da frequência observada quando há movimento relativo entre fonte e observador em relação ao meio de propagação. Para som em meio estacionário, com velocidades colineares, uma convenção útil é fobs=femit(v±vo)/(v∓vs): no numerador use sinal que aumenta a frequência quando o observador se aproxima; no denominador use sinal que aumenta a frequência quando a fonte se aproxima. As velocidades vo e vs são medidas em relação ao ar e a fórmula clássica pressupõe velocidades subsônicas e propagação aproximadamente uniforme. Aproximação eleva frequência percebida; afastamento a reduz. O movimento da fonte altera o espaçamento das frentes de onda no meio, enquanto o observador móvel altera a taxa de encontro com frentes. Isso explica por que os dois movimentos não são intercambiáveis em todas as situações. Para luz, o efeito Doppler exige tratamento relativístico em velocidades relevantes e não depende de meio material como o som.",
        "example": "Uma ambulância emite 600 Hz e aproxima-se de observador parado a 20 m/s; considere v=340 m/s no ar. Como a fonte se aproxima, use fobs=600×340/(340−20)=637,5 Hz. Verifique que o denominador ficou menor e a frequência aumentou, coerente com a aproximação.",
        "pitfall": "Não escolher sinais apenas pela palavra 'movimento': determine aproximação ou afastamento e quem se move em relação ao meio.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A intensidade sonora cresce de 10⁻⁶ para 10⁻⁵ W/m². Qual mudança no nível?",
        "options": [
          "+10 dB",
          "+1 dB",
          "+100 dB",
          "−10 dB"
        ],
        "correctIndex": 0,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "A razão das intensidades é 10. Pela definição Δβ=10log10(10)=+10 dB. A escala é logarítmica, portanto multiplicar a intensidade por dez não multiplica o nível por dez."
      },
      {
        "level": "intermediate",
        "prompt": "Duas fontes independentes de 60 dB cada atuam no mesmo ponto. Qual nível aproximado?",
        "options": [
          "120 dB",
          "66 dB",
          "63 dB",
          "30 dB"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Cada fonte possui intensidade I0×10⁶. Somando duas intensidades independentes resulta 2I; o aumento é 10log10(2)≈3 dB. Logo o nível conjunto é aproximadamente 63 dB."
      },
      {
        "level": "advanced",
        "prompt": "Fonte de 600 Hz aproxima-se a 20 m/s de observador parado; som a 340 m/s. Frequência recebida?",
        "options": [
          "565 Hz",
          "600 Hz",
          "620 Hz",
          "637,5 Hz"
        ],
        "correctIndex": 3,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Para fonte aproximando-se, f'=f v/(v−vs)=600×340/(340−20)=637,5 Hz. A redução do espaçamento entre frentes eleva a frequência percebida; o modelo pressupõe ar estacionário."
      }
    ]
  }
];
