import type {TopicSeed} from './authored-stage19-seed.ts';
export const stage19Physics:TopicSeed[]=[
  {
    "subject": "Física",
    "topic": "Aceleração",
    "objective": "Calcular aceleração média e interpretar sua direção e seu sinal, distinguindo velocidade de variação de velocidade.",
    "chapters": [
      [
        "Aceleração mede mudança de velocidade",
        "Aceleração média é Δv/Δt e sua unidade SI é m/s². Um corpo pode estar se movendo rapidamente sem acelerar, caso a velocidade permaneça constante em direção e módulo. Em uma dimensão, os sinais de velocidade e aceleração dependem do sentido positivo escolhido.",
        "Um veículo passa de 4 m/s a 16 m/s em seis segundos, com aceleração média (16−4)/6=2 m/s².",
        "Velocidade alta significa necessariamente aceleração alta naquele instante.",
        "Um carro muda de 6 para 18 m/s em quatro segundos. Calcule a aceleração média.",
        "Divida a variação 12 pela duração quatro.",
        "A aceleração média é 3 m/s², considerando o mesmo eixo e unidades SI.",
        "Velocidade caracteriza movimento; aceleração caracteriza como essa velocidade varia."
      ],
      [
        "Sinais e desaceleração",
        "Quando aceleração e velocidade têm sinais opostos no movimento retilíneo, o módulo da velocidade diminui naquele intervalo; com sinais iguais, pode aumentar. Aceleração negativa não significa obrigatoriamente frear, pois o veículo pode se mover no sentido negativo e ganhar velocidade em módulo.",
        "Um móvel com v=−8 m/s e a=−2 m/s² aumenta a rapidez no sentido negativo do eixo.",
        "Toda aceleração negativa corresponde a desaceleração, independentemente do sentido da velocidade.",
        "Um móvel tem v=−10 m/s e a=−1 m/s². O módulo da velocidade tende a aumentar?",
        "Observe que os dois sinais são iguais.",
        "Sim, a velocidade se torna mais negativa e seu módulo cresce, no modelo de aceleração constante.",
        "O sinal da aceleração depende do eixo; diminuição do módulo depende da combinação dos sinais."
      ],
      [
        "Gráficos e consistência",
        "Num gráfico velocidade×tempo, a inclinação entre pontos determina aceleração média; área algébrica representa deslocamento. Aceleração constante produz uma reta para v(t), mas a posição pode variar de forma quadrática. Não confunda a inclinação com altura da curva nem interprete o número sem sua unidade.",
        "Se a velocidade cresce linearmente de 0 a 12 m/s em três segundos, a inclinação é 4 m/s².",
        "A área de um gráfico v×t representa sempre aceleração e a inclinação representa distância.",
        "Calcule aceleração para gráfico com v=2 m/s em t=0 e v=10 m/s em t=4.",
        "Use a inclinação Δv/Δt.",
        "a=(10−2)/4=2 m/s²; o resultado indica crescimento uniforme no intervalo.",
        "Inclinação de v×t fornece aceleração, enquanto sua área algébrica fornece deslocamento."
      ]
    ],
    "situation": [
      "Um estudante vê velocímetro marcar 80 km/h e conclui que a aceleração do ônibus vale 80 km/h, sem observar se sua velocidade muda.",
      "Qual informação adicional é necessária para determinar aceleração média?",
      "É preciso conhecer variação de velocidade em determinado intervalo de tempo; velocidade isolada não fornece aceleração."
    ],
    "links": [
      [
        "Física",
        "Movimento uniformemente variado",
        "No MUV a aceleração é constante e aparece nas relações da velocidade e do deslocamento."
      ],
      [
        "Física",
        "Gráficos de posição, velocidade e aceleração",
        "A inclinação do gráfico velocidade versus tempo permite medir aceleração."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Movimento uniforme",
    "objective": "Interpretar deslocamento e velocidade constante em trajetória retilínea, distinguindo posição inicial de distância percorrida.",
    "chapters": [
      [
        "Função horária do MU",
        "Em movimento retilíneo uniforme, a velocidade vetorial é constante e a posição segue s=s₀+vt no referencial adotado. O movimento pode ocorrer no sentido positivo ou negativo; posição inicial não precisa ser zero. O modelo simplifica situações reais e deve ser aplicado onde a velocidade permanece aproximadamente constante.",
        "Uma pessoa começa em s₀=10 m e caminha no eixo positivo a 2 m/s por 5 s: posição final s=20 m.",
        "A fórmula s=vt serve sempre mesmo quando a posição inicial é diferente de zero.",
        "Para s₀=−3 m e v=4 m/s, qual posição após 2 s?",
        "Use s=s₀+vt.",
        "s=−3+4×2=5 m. O valor inicial faz parte da expressão.",
        "O deslocamento é vt, mas a posição final inclui a posição de referência inicial."
      ],
      [
        "Sentido e deslocamento",
        "Deslocamento é posição final menos posição inicial, podendo ser negativo. A distância percorrida é extensão do caminho e não é negativa. No MU retilíneo com sentido fixo, a distância corresponde ao módulo do deslocamento; em movimentos com inversões, essa igualdade pode não ocorrer.",
        "Uma pessoa desloca-se de 15 m para 5 m num eixo e apresenta Δs=−10 m, embora percorra 10 m.",
        "Deslocamento negativo prova que a pessoa andou uma distância negativa.",
        "Se s₀=12 e s=−8, calcule deslocamento.",
        "Subtraia posição inicial da final.",
        "Δs=−8−12=−20 m; o sinal mostra sentido do eixo e não distância física negativa.",
        "Distância é não negativa; o sinal de deslocamento indica orientação."
      ],
      [
        "Gráficos e encontro",
        "A reta de posição versus tempo tem inclinação v. Dois móveis uniformes podem encontrar-se quando suas funções de posição se igualam num mesmo instante, desde que o resultado seja fisicamente pertinente. Retas paralelas e distintas em gráfico s×t não indicam encontro em qualquer tempo.",
        "A: s=2t e B: s=20−3t; igualando 2t=20−3t resulta t=4 s e s=8 m.",
        "Se dois gráficos de posição se aproximam visualmente, os móveis se encontram independentemente das escalas.",
        "Quando A: s=5t e B: s=30−t se encontram?",
        "Iguale as posições.",
        "5t=30−t, logo t=5 s e s=25 m.",
        "O encontro exige igualdade de posições no mesmo tempo, não apenas linhas desenhadas próximas."
      ]
    ],
    "situation": [
      "Um aplicativo mostra dois ciclistas em reta: A parte do marco zero a 5 m/s e B do marco 30 m no sentido contrário, a 1 m/s.",
      "Em que instante e posição eles se encontram no modelo uniforme?",
      "sA=5t e sB=30−t; t=5 s, posição 25 m a partir da origem."
    ],
    "links": [
      [
        "Física",
        "Velocidade média e instantânea",
        "A velocidade constante é caso particular em que velocidade média e instantânea coincidem no intervalo."
      ],
      [
        "Matemática",
        "Função afim",
        "A função s(t)=s₀+vt é uma reta cuja inclinação representa a velocidade."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Peso, normal e tração",
    "objective": "Desenhar diagramas de forças diferenciando força peso, reação normal e tração em cabos ideais.",
    "chapters": [
      [
        "Peso é interação gravitacional",
        "O peso é força gravitacional exercida sobre o corpo; próximo à Terra, no modelo uniforme, seu módulo é P=mg. A massa é propriedade medida em quilogramas, enquanto o peso é força em newtons. Alterar a gravidade muda o peso sem mudar necessariamente a massa de um objeto.",
        "Uma caixa de 3 kg perto da superfície terrestre, com g≈10 m/s², tem peso aproximado de 30 N.",
        "Massa e peso são a mesma grandeza, ambos medidos em quilogramas.",
        "Determine o peso aproximado de 5 kg com g=10 m/s².",
        "Multiplique massa por aceleração gravitacional.",
        "P=5×10=50 N; a resposta deve ser força expressa em newtons.",
        "Massa mede quantidade inercial de matéria no modelo; peso é força dependente da gravidade."
      ],
      [
        "Normal não é sempre igual ao peso",
        "A força normal é componente perpendicular de contato exercida por superfície; em apoio horizontal em repouso, sem outras forças verticais, pode ter módulo mg. Em plano inclinado ou elevador acelerado, a normal pode diferir de mg. O valor deve resultar de um diagrama de forças, não de regra universal.",
        "Num plano inclinado de ângulo θ sem outras forças perpendiculares, N=mg cosθ, menor que mg para 0<θ<90°.",
        "A normal é sempre igual ao peso, inclusive com aceleração vertical ou plano inclinado.",
        "Qual normal para bloco de peso 20 N num plano de 60°, sem outras forças perpendiculares?",
        "Use N=P cos60°.",
        "N=20×0,5=10 N no modelo indicado.",
        "O módulo da normal depende das forças perpendiculares e da geometria de contato."
      ],
      [
        "Tração e equilíbrio",
        "A tração de fio ideal transmite força ao longo de seu comprimento, com direção da corda. Em sistema de corpo suspenso parado, a tração pode equilibrar o peso, mas em aceleração vertical pode ser maior ou menor. Duas forças com módulos iguais não formam par ação-reação se atuam no mesmo corpo.",
        "Uma massa de 2 kg suspensa em repouso por cabo vertical ideal possui tração aproximada de 20 N para g=10.",
        "A tração em qualquer cabo vale sempre o peso do objeto, mesmo se há aceleração.",
        "Uma massa de 2 kg sobe com aceleração de 1 m/s²; qual tração no fio ideal com g=10?",
        "Aplique T−mg=ma.",
        "T=2(10+1)=22 N, pois o corpo acelera para cima.",
        "Em movimento acelerado a resultante não é nula; a tração não precisa igualar o peso."
      ]
    ],
    "situation": [
      "Um elevador acelera para cima enquanto uma balança mede força normal sobre pessoa; um estudante diz que o visor deve indicar sempre a mesma força por ter massa constante.",
      "Por que o valor normal pode mudar mesmo sem alterar a massa corporal?",
      "A segunda lei de Newton determina N−mg=ma, então N=m(g+a) quando acelera para cima, superior ao peso."
    ],
    "links": [
      [
        "Física",
        "Leis de Newton",
        "A segunda lei permite calcular forças resultantes e distinguir equilíbrio de aceleração."
      ],
      [
        "Física",
        "Força de atrito",
        "A força normal influencia o limite de atrito em modelos usuais de contato."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Energia cinética",
    "objective": "Calcular energia cinética translacional e interpretar dependência quadrática da velocidade.",
    "chapters": [
      [
        "Energia do movimento",
        "A energia cinética translacional de corpo de massa m com rapidez v vale Ec=mv²/2 no modelo clássico. Usa-se kg e m/s para obter joules; o sinal da velocidade não torna a energia negativa porque v² é não negativo. O valor relaciona estado de movimento em referencial escolhido.",
        "Um carrinho de 2 kg a 3 m/s tem Ec=2×9/2=9 J.",
        "Velocidade negativa implica energia cinética negativa, pois movimento tem direção.",
        "Qual Ec de corpo com 4 kg e rapidez 5 m/s?",
        "Use Ec=mv²/2.",
        "Ec=4×25/2=50 joules, independentemente do sinal atribuído à velocidade.",
        "Energia cinética depende do quadrado da rapidez, não da orientação positiva ou negativa do eixo."
      ],
      [
        "Efeito da massa e da rapidez",
        "Mantendo velocidade, duplicar massa duplica a energia; mantendo massa, duplicar rapidez quadruplica energia cinética. Em colisões e frenagens, isso explica por que aumentar velocidade pode ampliar energia a dissipar, embora riscos reais envolvam diversas variáveis.",
        "Um veículo com mesma massa a 20 m/s possui quatro vezes Ec de quando viaja a 10 m/s.",
        "Dobrar a velocidade aumenta a energia cinética somente duas vezes.",
        "Se um corpo passa de 3 para 6 m/s, qual relação entre as energias?",
        "Compare os quadrados de três e seis.",
        "Ec final/Ec inicial=6²/3²=36/9=4; a energia quadruplica.",
        "A dependência é quadrática na rapidez: multiplicar v por k multiplica Ec por k²."
      ],
      [
        "Trabalho e variação energética",
        "Pelo teorema trabalho-energia, o trabalho da força resultante equivale à variação da energia cinética translacional em situações clássicas apropriadas. Se o corpo reduz velocidade, a energia cinética diminui e trabalho resultante é negativo. A energia total não desaparece: pode ser transformada em energia térmica, som e deformações.",
        "Freios reduzem energia cinética do veículo transferindo energia para outras formas, principalmente térmica.",
        "Quando freios param um objeto, a energia do movimento é destruída e deixa de existir no universo.",
        "Um corpo passa de Ec=100 J para Ec=30 J. Qual trabalho resultante?",
        "Calcule ΔEc.",
        "Wresultante=30−100=−70 J, sinal de redução de energia cinética.",
        "O trabalho resultante altera a energia cinética; a conservação energética completa exige considerar outras formas."
      ]
    ],
    "situation": [
      "Dois carrinhos de igual massa movem-se a 2 m/s e 4 m/s; um aluno afirma que o segundo possui o dobro da energia cinética.",
      "Qual a relação correta entre suas energias e que propriedade matemática explica isso?",
      "Ec é proporcional a v²: o segundo possui quatro vezes a energia cinética, não duas."
    ],
    "links": [
      [
        "Física",
        "Conservação da energia mecânica",
        "A transformação entre energia cinética e potencial é fundamental à conservação em sistemas ideais."
      ],
      [
        "Física",
        "Trabalho de uma força",
        "O trabalho da resultante pode ser calculado pela variação da energia cinética."
      ]
    ]
  }
];
