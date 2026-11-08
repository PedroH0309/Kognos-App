import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos: conteúdo original e não oficial, sem homologação docente. */
export const provaoDepthBatch31Faraday:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Lei de Faraday-Neumann",
    "objective": "Calcular fluxo magnético orientado e força eletromotriz média por variação do fluxo, interpretar a oposição prevista pela lei de Lenz e explicar aplicações em bobinas e geradores respeitando convenções e limitações físicas.",
    "prerequisites": [
      "Campo magnético uniforme e unidade tesla",
      "Geometria de áreas, cosseno e ângulo com a normal",
      "Corrente elétrica, resistência e lei de Ohm"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fluxo magnético, área orientada e variação temporal",
        "explanation": "O fluxo magnético por uma espira plana é a grandeza que combina campo magnético, área e orientação da superfície. Em campo uniforme, escreve-se Φ_B=B·A·cosθ, em que θ é o ângulo entre o vetor campo B e o vetor normal ao plano da espira, não o ângulo com a superfície. A unidade do fluxo é o weber (Wb), equivalente a tesla vezes metro quadrado. Uma espira pode ter fluxo positivo, negativo ou nulo conforme se adote uma orientação para sua normal: o sinal expressa convenção geométrica, não quantidade de 'linhas de campo presas' materialmente. Se a espira gira com B constante, cosθ muda e o fluxo varia; se B muda mantendo a espira fixa, também há variação. Uma espira paralela às linhas de campo tem normal perpendicular a B e fluxo nulo, embora o campo no local não seja zero. É essa variação do fluxo ao longo do tempo que interessa à indução eletromagnética. Não basta afirmar que existe um ímã próximo ou que existe campo magnético para concluir que haverá força eletromotriz induzida. A lei vale para a superfície delimitada pelo circuito escolhido; campos não uniformes exigem calcular a integral sobre a área, em vez de multiplicar valores médios sem justificativa.",
        "example": "Uma espira de área A=0,020 m² está num campo uniforme B=0,50 T. Se a normal à espira faz 60° com o campo, Φ_B=B·A·cos60°=0,50×0,020×0,50=0,0050 Wb. Se a normal passa a 90°, o fluxo cai para zero mesmo sem mudar o módulo de B.",
        "pitfall": "Não confunda o ângulo com a normal e o ângulo com o plano; campo presente não implica indução quando o fluxo permanece constante.",
        "steps": [
          "Desenhe o plano da espira, sua normal e o campo B.",
          "Converta área para m² e aplique Φ=B·A·cosθ.",
          "Distinga fluxo constante, nulo e fluxo variável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Lei de Faraday-Neumann e fem média",
        "explanation": "A lei de Faraday-Neumann relaciona a força eletromotriz induzida à rapidez de variação do fluxo magnético concatenado por um circuito. Para uma bobina de N espiras equivalentes, a fem média é ε_média=−N·ΔΦ_B/Δt; de forma instantânea, sob condições adequadas, ε=−N·dΦ_B/dt. A unidade de força eletromotriz é volt, pois 1 Wb/s corresponde a 1 V. O sinal negativo envolve a convenção de orientação da espira e traduz a lei de Lenz: a corrente induzida, se o circuito estiver fechado, tende a produzir efeito magnético que se opõe à variação de fluxo que a originou. Não significa que a corrente sempre produza campo oposto ao campo externo; se o fluxo externo diminui, a resposta induzida tenta sustentá-lo. Uma fem induzida pode aparecer em um circuito aberto sem corrente contínua de circulação, porque o trajeto está interrompido. A fem depende de N e da variação de fluxo por tempo, não apenas do valor final de campo. Aproximar a fem por uma diferença finita supõe que se pretende a média no intervalo informado, e não necessariamente o valor instante a instante. Em circuitos reais, resistência e outras propriedades determinam a corrente resultante.",
        "example": "Uma bobina com 50 espiras apresenta fluxo por espira que cresce de 0,010 Wb a 0,030 Wb em 0,20 s. O módulo da fem média é N|ΔΦ|/Δt=50×0,020/0,20=5,0 V. O sinal depende da normal escolhida e não deve ser interpretado como módulo negativo de tensão.",
        "pitfall": "Não multiplique fluxo por espira por N duas vezes; a fem é resultado da variação temporal e pode existir sem corrente se o circuito estiver aberto.",
        "steps": [
          "Calcule ΔΦ por espira e confirme a unidade Wb.",
          "Multiplique por N e divida pelo intervalo de tempo.",
          "Interprete o sentido pela lei de Lenz e a corrente pela condição do circuito."
        ]
      },
      {
        "level": "advanced",
        "title": "Lei de Lenz, conservação de energia e geradores",
        "explanation": "O sentido da indução é determinado pela oposição à mudança de fluxo, em consonância com a conservação de energia. Quando o polo norte de um ímã se aproxima de uma bobina, o fluxo magnético através dela pode aumentar; a corrente induzida tende a produzir um campo que dificulte essa aproximação. Para manter o movimento, um agente externo precisa realizar trabalho, o que explica a origem da energia elétrica obtida, sem criação gratuita de energia. Um gerador utiliza movimento relativo e variação do fluxo em bobinas para induzir força eletromotriz. Se a espira gira em campo uniforme, o fluxo pode variar como Φ=B·A·cos(ωt), e seu módulo de fem ideal tende a variar senoidalmente. A expressão exige campo uniforme, velocidade angular constante e geometria apropriada. A lei de Lenz não garante, sozinha, qual será o valor da corrente: em circuitos resistivos simples pode-se usar I≈|ε|/R, mas indutâncias e variações rápidas exigem análise de circuito mais completa. Em um experimento, afastar um ímã ou inverter seu polo pode inverter o sentido induzido; parar o ímã com fluxo estável elimina essa fem por movimento. Efeitos de campos elétricos induzidos não podem ser reduzidos a eletrostática com potencial único em qualquer percurso fechado.",
        "example": "Uma bobina gera fem média de módulo 6,0 V por variação de fluxo e tem resistência total de 3,0 Ω. No modelo resistivo simples, I=|ε|/R=6,0/3,0=2,0 A. Se o ímã parar em posição fixa e o fluxo não variar, ε cai a zero mesmo que B seja intenso.",
        "pitfall": "Não afirme que a corrente induzida sempre se opõe ao campo original: ela se opõe à variação do fluxo, e a magnitude da corrente depende do circuito.",
        "steps": [
          "Reconheça se o fluxo cresce ou decresce.",
          "Determine a resposta magnética que se opõe a essa mudança.",
          "Relacione trabalho mecânico, fem e eventual corrente respeitando as hipóteses."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma espira de 0,020 m² está em campo de 0,50 T. Sua normal forma 60° com B. O fluxo é:",
        "options": [
          "0,010 Wb",
          "0,0050 Wb",
          "0,020 Wb",
          "0 Wb"
        ],
        "correctIndex": 1,
        "hint": "Identifique fluxo por espira, variação no tempo e orientação antes de calcular.",
        "solution": "O fluxo uniforme é Φ=B·A·cosθ. Como cos60°=0,5, Φ=0,50×0,020×0,5=0,0050 Wb. O ângulo é medido entre o campo magnético e a normal à superfície, não entre B e o plano."
      },
      {
        "level": "intermediate",
        "prompt": "Uma bobina de 50 espiras tem ΔΦ=0,020 Wb por espira em 0,20 s. O módulo da fem média vale:",
        "options": [
          "0,10 V",
          "0,50 V",
          "5,0 V",
          "50 V"
        ],
        "correctIndex": 2,
        "hint": "Identifique fluxo por espira, variação no tempo e orientação antes de calcular.",
        "solution": "Aplicando Faraday-Neumann ao módulo da fem média, N|ΔΦ|/Δt=50×0,020/0,20=5,0 V. O sinal orientado depende da convenção de normal e do sentido de circulação; a pergunta solicita o módulo."
      },
      {
        "level": "advanced",
        "prompt": "Se o fluxo externo através de uma espira fechada aumenta, a corrente induzida tende a:",
        "options": [
          "Produzir efeito magnético contrário ao aumento desse fluxo",
          "Aumentar ainda mais o fluxo por definição",
          "Ser nula sempre que B for diferente de zero",
          "Ter sentido independente do sinal de ΔΦ"
        ],
        "correctIndex": 0,
        "hint": "Identifique fluxo por espira, variação no tempo e orientação antes de calcular.",
        "solution": "A lei de Lenz determina que o efeito da corrente induzida se oponha à variação que a gerou, em consonância com a conservação de energia. Não implica oposição automática ao campo total em todas as situações."
      }
    ]
  }
];
