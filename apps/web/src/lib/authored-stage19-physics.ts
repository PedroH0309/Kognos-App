import type {AuthoredLessonSeed} from './authored-lesson-recipe.ts';
export const stage19Physics:AuthoredLessonSeed[]=[
  {
    "subject": "Física",
    "topic": "Movimento uniforme",
    "objective": "Interpretar deslocamento, velocidade constante e gráficos de posição no tempo no movimento uniforme, explicitando referencial e unidades.",
    "chapters": [
      [
        "Posição e referencial",
        "Movimento uniforme descreve posição variando linearmente no tempo num referencial escolhido, com velocidade vetorial constante em uma dimensão. A relação s=s₀+vt usa posições e velocidade com sinais definidos por eixo, sem pressupor que s₀ é zero. A velocidade não informa por si todo caminho percorrido, pois depende de direção e trajetória.",
        "Um móvel parte da marca 10 m e segue a 3 m/s no sentido positivo; após 4 s está em s=10+3×4=22 m.",
        "No movimento uniforme, a posição inicial precisa ser sempre zero.",
        "Determine s após 5 s para s₀=−4 m e v=2 m/s.",
        "Substitua s=s₀+vt, preservando o sinal negativo.",
        "s=−4+2×5=6 m. O corpo cruza a origem em t=2 s, apesar de começar em posição negativa.",
        "A posição inicial é relativa ao referencial e pode ser positiva, nula ou negativa; MU exige velocidade constante, não origem fixa."
      ],
      [
        "Velocidade e sentido",
        "Velocidade média é Δs/Δt e pode ser negativa conforme o sentido do eixo. Em movimento uniforme retilíneo ela coincide com a velocidade instantânea em todo intervalo. O módulo positivo da velocidade é rapidez escalar; distinguir sinais evita confundir deslocamento e distância total percorrida. Um móvel com v negativo não está necessariamente freando.",
        "Um carro se desloca de s=40 m a s=10 m em 5 s: v=(10−40)/5=−6 m/s no eixo escolhido.",
        "Velocidade negativa prova que o móvel está desacelerando.",
        "Calcule velocidade de s=5 m para s=−15 m em 4 s.",
        "Divida deslocamento negativo por tempo positivo.",
        "v=(−15−5)/4=−5 m/s. O módulo da velocidade é 5 m/s e o sentido é negativo.",
        "Sinal de velocidade informa sentido no referencial; desaceleração depende da mudança do módulo da velocidade, não do sinal isolado."
      ],
      [
        "Gráficos e encontros de móveis",
        "O gráfico s×t do MU é uma reta de inclinação v, enquanto v×t é linha horizontal. Para encontrar encontro de dois móveis no mesmo eixo, igualamos suas posições no mesmo instante e verificamos o domínio. Duas trajetórias com a mesma marca de posição em momentos diferentes não representam encontro físico.",
        "A parte de s_A=2t e s_B=20−3t encontra-se quando 2t=20−3t, logo t=4 s, posição 8 m.",
        "Ruas que se cruzam garantem encontro entre móveis mesmo em instantes diferentes.",
        "Dois móveis têm s_A=5t e s_B=30−t; quando estão na mesma posição?",
        "Iguale 5t=30−t.",
        "6t=30, portanto t=5 s e s=25 m. A igualdade é simultânea e usa o mesmo referencial.",
        "Um encontro exige posições iguais no mesmo instante; cruzamento espacial de trajetórias não basta se os tempos forem diferentes."
      ]
    ],
    "situation": [
      "Dois ciclistas movem-se numa ciclovia retilínea com velocidades constantes: o primeiro sai do marco zero a 4 m/s, e o segundo inicia no marco 30 m deslocando-se no sentido contrário a 2 m/s.",
      "Em que instante e posição os ciclistas se encontram no modelo, e por que as posições devem ser igualadas?",
      "s₁=4t e s₂=30−2t. Igualando, 6t=30, então t=5 s e posição 20 m, supondo mesmo instante inicial."
    ],
    "links": [
      [
        "Física",
        "Gráficos de posição, velocidade e aceleração",
        "No movimento uniforme, s×t é reta de inclinação constante, e o gráfico v×t mantém valor fixo."
      ],
      [
        "Matemática",
        "Função afim",
        "A equação horária s=s₀+vt é função afim do tempo, com coeficiente angular representando velocidade."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Energia cinética",
    "objective": "Calcular energia cinética translacional e explicar sua dependência quadrática da rapidez, reconhecendo referência e limites do modelo clássico.",
    "chapters": [
      [
        "Energia associada ao movimento",
        "A energia cinética translacional de corpo no modelo clássico é K=mv²/2, onde m é massa e v é módulo da velocidade em m/s. A unidade é joule (J). Como há quadrado da velocidade, trocar o sentido do movimento não torna K negativa; o valor depende do referencial usado para medir a rapidez.",
        "Uma bola de 2 kg a 3 m/s possui K=2×9/2=9 J, independentemente do sentido do eixo.",
        "Energia cinética fica negativa quando a velocidade aponta para o sentido negativo do eixo.",
        "Calcule K de um corpo de 4 kg com velocidade de módulo 5 m/s.",
        "Use v²=25 e multiplique por m/2.",
        "K=4×25/2=50 J. A energia cinética é não negativa para massa positiva no modelo.",
        "O quadrado elimina o sinal de v; K mede energia de movimento no referencial adotado, não orientação do deslocamento."
      ],
      [
        "Dobrar velocidade não dobra energia",
        "Para massa constante, energia cinética varia com v². Ao dobrar rapidez, K quadruplica; ao triplicar, aumenta por fator nove. É incorreto fazer extrapolações sobre acidentes apenas a partir de K: gravidade, deformação e sistemas de proteção também interferem nos efeitos de impactos.",
        "Uma mesma bicicleta a 6 m/s tem quatro vezes a energia cinética que teria a 3 m/s, desprezando outras variáveis.",
        "Dobrar a rapidez aumenta a energia cinética apenas duas vezes.",
        "Compare a razão entre quadrados das velocidades.",
        "Um carrinho passa de 2 para 6 m/s mantendo massa; como varia K?",
        "A razão das velocidades é três.",
        "A energia cinética multiplica por 3²=9, pois K é proporcional ao quadrado de v quando m não muda.",
        "A proporcionalidade quadrática torna o efeito da rapidez não linear; não use a razão simples de velocidades para K."
      ],
      [
        "Trabalho e variação da energia",
        "O teorema trabalho–energia afirma que o trabalho total da força resultante é igual à variação de energia cinética de uma partícula no modelo considerado. Um trabalho negativo pode reduzir K, mas não significa energia cinética negativa. Atrito, força aplicada e outras interações devem ser contabilizados em sua contribuição ao trabalho total.",
        "Se a energia cinética muda de 30 J para 10 J, a soma dos trabalhos das forças é −20 J.",
        "Qualquer força que atue por tempo positivo realiza trabalho positivo no corpo.",
        "Calcule trabalho resultante se K inicial é 15 J e final é 45 J.",
        "Use W_total=K_final−K_inicial.",
        "W_total=45−15=30 J, indicando ganho líquido de energia cinética nesse intervalo.",
        "Trabalho depende da força e do deslocamento; uma força pode realizar trabalho negativo, nulo ou positivo conforme a situação."
      ]
    ],
    "situation": [
      "Um carrinho experimental de massa constante aumenta sua velocidade de 2 m/s para 4 m/s. Um estudante afirma que o dobro de velocidade exige apenas o dobro da energia cinética.",
      "Qual é a razão entre as energias e como a expressão matemática explica o resultado?",
      "K_f/K_i=(4²)/(2²)=16/4=4. Com massa fixa, duplicar rapidez quadruplica a energia cinética."
    ],
    "links": [
      [
        "Física",
        "Conservação da energia mecânica",
        "A energia cinética integra a energia mecânica e pode transformar-se em potencial sob condições adequadas."
      ],
      [
        "Física",
        "Trabalho de uma força",
        "O trabalho resultante pode ser relacionado à variação da energia cinética pelo teorema trabalho–energia."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Potência e rendimento",
    "objective": "Distinguir energia, potência e rendimento, calcular taxas de transferência de energia e comparar máquinas sem extrapolações irreais.",
    "chapters": [
      [
        "Potência mede taxa de transferência",
        "Potência média é energia transferida ou trabalho realizado por unidade de tempo: P=ΔE/Δt. A unidade watt (W) corresponde a joule por segundo. Energia e potência não são sinônimos; duas máquinas podem realizar o mesmo trabalho, mas uma em tempo menor apresenta maior potência média.",
        "Um elevador idealizado transfere 6000 J em 20 s: P=6000/20=300 W de potência média.",
        "Uma potência de 500 W significa que o aparelho possui exatamente 500 J de energia.",
        "Calcule potência média para transferência de 900 J em 3 s.",
        "Divida energia por tempo em segundos.",
        "P=900/3=300 W, isto é, trezentos joules transferidos por segundo em média.",
        "Watt é unidade de taxa energética; joule mede quantidade de energia. Potência maior não descreve, sozinha, consumo total."
      ],
      [
        "Rendimento e perdas",
        "Rendimento energético é a razão entre energia ou potência útil e entrada correspondente, η=E_útil/E_total para intervalo compatível. Em máquinas reais, parte da energia pode ser dissipada em calor, som e outras formas; a energia total é conservada, mas nem toda é convertida no efeito desejado. Rendimento de 80% não significa desaparecimento de 20% da energia.",
        "Um dispositivo recebe 1000 J e disponibiliza 750 J no efeito útil; η=750/1000=75%.",
        "Rendimento de 75% significa que os outros 25% da energia foram destruídos fisicamente.",
        "Identifique entrada, saída útil e outras transferências.",
        "Uma máquina recebe 2000 J e entrega 1500 J úteis; calcule η.",
        "Divida 1500 por 2000 e converta a porcentagem.",
        "η=0,75=75%. Os 500 J restantes correspondem a outras transferências ou transformações no modelo.",
        "Energia não é destruída pela baixa eficiência: é transformada em formas que não compõem a saída útil definida."
      ],
      [
        "Consumo depende de potência e duração",
        "Para potência aproximadamente constante, energia transferida é E=P·t. Na conta de eletricidade, quilowatt-hora é unidade de energia, e não de potência: 1 kWh=3,6×10⁶ J. Comparações de consumo precisam do tempo efetivo de uso e da potência do equipamento, além de tarifas e eventuais parcelas extras.",
        "Um aparelho de 1 kW ligado por 2 h usa 2 kWh, enquanto outro de 2 kW ligado por 0,5 h usa 1 kWh.",
        "O aparelho de maior potência sempre consome mais energia total, independentemente do tempo ligado.",
        "Calcule consumo de equipamento de 500 W usado por quatro horas.",
        "Converta 500 W para 0,5 kW.",
        "E=0,5 kW×4 h=2 kWh, sem outros consumos ou variações do equipamento.",
        "Potência maior não determina consumo total sem duração; kWh mede energia acumulada e não potência instantânea."
      ]
    ],
    "situation": [
      "Duas máquinas produzem a mesma transformação útil de 1200 J. A máquina A leva 4 s e a B leva 12 s, sob condições idênticas. Um aluno confunde potência com energia entregue.",
      "Qual potência média de cada máquina e por que maior potência não significa maior energia útil nesse caso?",
      "A tem P=1200/4=300 W; B tem P=1200/12=100 W. Ambas entregam 1200 J úteis, mas A faz isso em menos tempo."
    ],
    "links": [
      [
        "Física",
        "Trabalho de uma força",
        "Trabalho é energia transferida por ação de força e fornece numerador para cálculo de potência mecânica média."
      ],
      [
        "Física",
        "Energia cinética",
        "Variações de energia cinética podem resultar de trabalho realizado por forças durante certo intervalo."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Impulso e quantidade de movimento",
    "objective": "Calcular momento linear e impulso, aplicar o teorema impulso–quantidade de movimento e interpretar tempo de colisão com segurança.",
    "chapters": [
      [
        "Momento linear é vetorial",
        "A quantidade de movimento de uma partícula é p=mv, produto da massa pela velocidade vetorial. Seu sinal numa dimensão depende do eixo, e a unidade SI é kg·m/s. Um corpo com velocidade no sentido negativo possui momento negativo naquele eixo, embora a massa seja positiva. Não confunda quantidade de movimento com energia cinética.",
        "Uma bola de 0,5 kg com velocidade de +8 m/s tem p=+4 kg·m/s; na direção oposta teria −4 kg·m/s.",
        "Quantidade de movimento não depende do sentido porque massa é sempre positiva.",
        "Determine p de um móvel de 3 kg a −4 m/s.",
        "Multiplique massa e velocidade com sinal.",
        "p=3×(−4)=−12 kg·m/s, orientado para o sentido negativo do eixo.",
        "O momento linear é vetorial: a massa positiva multiplica a velocidade com direção e sentido, que não podem ser apagados."
      ],
      [
        "Impulso varia o momento",
        "O impulso de uma força resultante durante intervalo é I=Δp, e para força constante I=F·Δt. A mesma variação de momento pode ocorrer sob forças médias diferentes conforme o tempo de interação; essa ideia ajuda a entender dispositivos de proteção sem oferecer instruções de colisão arriscada.",
        "Uma força constante de 10 N atua por 0,2 s numa direção: o impulso é 2 N·s no modelo.",
        "Uma colisão mais longa sempre exige maior força para produzir a mesma mudança de velocidade.",
        "Use I=Δp e considere sinal do eixo.",
        "Uma bola de 1 kg muda velocidade de +3 para −2 m/s. Qual impulso resultante?",
        "I=m(v_final−v_inicial).",
        "I=1×(−2−3)=−5 N·s. O impulso aponta no sentido negativo escolhido.",
        "Para mesma variação de momento, aumentar o intervalo de interação pode reduzir módulo de força média, não elevá-lo necessariamente."
      ],
      [
        "Conservação exige sistema isolado",
        "Num sistema com impulso externo resultante nulo ou desprezível, o momento linear total se conserva. Isso não obriga energia cinética a se conservar em colisão inelástica. Para aplicar a regra, defina sistema, eixos, momentos inicial e final; forças internas entre corpos não alteram o momento total do sistema isolado.",
        "Dois carrinhos de massas iguais, um a 2 m/s e outro parado, têm momento total inicial de 2m em unidades compatíveis.",
        "Toda colisão conserva integralmente a energia cinética, assim como o momento, em qualquer sistema.",
        "Qual grandeza se conserva numa colisão isolada mesmo com deformações?",
        "Distinga momento linear de energia cinética.",
        "O momento linear total conserva-se se o impulso externo resultante for desprezível; energia cinética pode transformar-se.",
        "A conservação do momento decorre do sistema isolado; energia cinética só permanece constante em colisões elásticas ideais."
      ]
    ],
    "situation": [
      "Um laboratório apresenta gráfico de força média em impactos que produzem a mesma mudança de momento. Uma interação dura 0,1 s, e outra 0,5 s, sem orientação de reproduzir colisões.",
      "Como a duração influencia a força média necessária para produzir o mesmo impulso?",
      "Como F_média=Δp/Δt na direção considerada, a interação cinco vezes mais longa requer força média de módulo cinco vezes menor para mesmo Δp."
    ],
    "links": [
      [
        "Física",
        "Leis de Newton",
        "A relação entre força resultante e variação do momento linear aprofunda a segunda lei de Newton."
      ],
      [
        "Física",
        "Movimento uniformemente variado",
        "Quando a aceleração é constante em modelo de massa fixa, a variação de velocidade ajuda a calcular impulso."
      ]
    ]
  }
];
