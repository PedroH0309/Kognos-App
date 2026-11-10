import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original Kognos, não oficial e sem homologação docente. */
export const provaoDepthBatch45Physics:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Velocidade e Aceleração: escalar média e instantânea; vetorial média e instantânea",
    "objective": "Distinguir deslocamento, distância percorrida, velocidade vetorial média, rapidez média e aceleração em intervalos e instantes.",
    "prerequisites": [
      "Referencial e orientação da trajetória",
      "Unidades SI",
      "Variação de grandezas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Distância não é deslocamento",
        "explanation": "A rapidez média é a distância total dividida pelo intervalo de tempo; já a velocidade vetorial média é o deslocamento dividido pelo mesmo intervalo. Em uma trajetória retilínea orientada, deslocamento é posição final menos posição inicial, podendo ser negativo. A velocidade vetorial média indica direção e sentido, e não apenas quanto o móvel percorreu. Para um percurso de ida e volta, a distância é positiva, mas o deslocamento pode ser zero. Isso não significa que o corpo esteve parado. Ao converter km/h para m/s, divida por 3,6, porque um quilômetro contém mil metros e uma hora contém 3600 segundos. Uma velocidade instantânea requer o limite da razão entre deslocamento e tempo quando o intervalo tende a zero; não pode ser obtida simplesmente da distância total em uma viagem irregular.",
        "example": "Uma pessoa anda 60 m para leste e retorna 20 m para oeste em 20 s: distância=80 m, deslocamento=+40 m, rapidez média=4 m/s e velocidade média=+2 m/s para leste.",
        "pitfall": "Confundir distância com deslocamento ou omitir o sinal do eixo.",
        "steps": [
          "Calcule a distância somando 60+20=80 m. Verifique que a distância total e o deslocamento podem ter valores diferentes.",
          "Calcule deslocamento algébrico 60−20=+40 m. Verifique que a distância total e o deslocamento podem ter valores diferentes.",
          "Divida cada grandeza por 20 s e compare 4 m/s com +2 m/s."
        ]
      },
      {
        "level": "intermediate",
        "title": "Velocidade instantânea e inclinação",
        "explanation": "A velocidade instantânea de um móvel retilíneo é a inclinação da tangente ao gráfico posição versus tempo. Para movimento uniforme, essa inclinação é constante; para movimento acelerado, ela varia. O valor absoluto da velocidade é a rapidez instantânea. Um gráfico que cresce tem velocidade positiva no referencial escolhido, mas não significa necessariamente aceleração positiva: uma reta crescente possui aceleração nula. Se x(t)=2+3t−t² no SI, a derivada é v(t)=3−2t, portanto o corpo para instantaneamente em t=1,5 s antes de inverter o sentido. O modelo vale no intervalo em que a função descreve o movimento; extrapolá-lo indefinidamente pode produzir previsões fisicamente impossíveis. Em trajetórias curvas, a velocidade é tangente à trajetória, e um gráfico escalar isolado não revela toda a direção espacial.",
        "example": "Para x(t)=2+3t−t², obtenha v(t)=3−2t; em t=1 s, v=+1 m/s; em t=2 s, v=−1 m/s. O sinal indica inversão do sentido.",
        "pitfall": "Tratar posição positiva como velocidade positiva ou confundir tangente com secante.",
        "steps": [
          "Derive termo a termo: d(2)/dt=0, d(3t)/dt=3 e d(−t²)/dt=−2t.",
          "Substitua t=1 e t=2 para obter velocidades +1 e −1 m/s.",
          "Localize v=0 em 1,5 s e explique a inversão do movimento."
        ]
      },
      {
        "level": "advanced",
        "title": "Aceleração e mudança de direção",
        "explanation": "A aceleração vetorial média é a variação do vetor velocidade dividida pelo tempo. Em uma dimensão, a=(vf−vi)/Δt; o sinal depende da orientação do eixo e não informa isoladamente se o corpo ganha rapidez. Quando velocidade e aceleração têm o mesmo sinal, o módulo da velocidade aumenta; quando têm sinais opostos, diminui. Em movimento circular uniforme, a rapidez pode ser constante e a aceleração não ser nula: a direção do vetor velocidade muda continuamente e a aceleração centrípeta aponta para o centro. Para um intervalo curto, a aceleração instantânea é a derivada temporal da velocidade. Unidades corretas são m/s², não m/s. Frenagem, curvas e lançamentos exigem tratar componentes vetoriais separadamente, sem substituir a análise por uma única regra verbal de 'acelerar'.",
        "example": "Um veículo passa de +20 m/s a +8 m/s em 4 s: a=(8−20)/4=−3 m/s². Como v é positiva e a negativa, o módulo diminui.",
        "pitfall": "Aceleração negativa não significa necessariamente diminuir a rapidez: depende do sinal da velocidade.",
        "steps": [
          "Registre vi=+20 m/s, vf=+8 m/s e Δt=4 s. Use m/s² e compare o sinal de aceleração com o da velocidade.",
          "Calcule Δv=−12 m/s e a=−12/4=−3 m/s². Use m/s² e compare o sinal de aceleração com o da velocidade.",
          "Compare os sinais de v e a para concluir que há desaceleração nesse eixo."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma pessoa caminha 60 m para leste e 20 m para oeste em 20 s. Qual é sua velocidade média orientada para leste?",
        "options": [
          "4 m/s",
          "2 m/s",
          "−2 m/s",
          "0 m/s"
        ],
        "correctIndex": 1,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "O deslocamento é +60−20=+40 m. Dividindo pelos 20 s, a velocidade média é +2 m/s, para leste. Os 80 m percorridos servem para rapidez média, não para velocidade vetorial média. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "intermediate",
        "prompt": "Se x(t)=2+3t−t² em metros, qual a velocidade em t=2 s?",
        "options": [
          "+7 m/s",
          "+1 m/s",
          "−1 m/s",
          "−4 m/s"
        ],
        "correctIndex": 2,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "A derivada da posição fornece v(t)=3−2t. Substituindo t=2 s, v=3−4=−1 m/s. O sinal negativo indica deslocamento instantâneo no sentido oposto ao eixo positivo. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "advanced",
        "prompt": "Um carro reduz sua velocidade de +20 para +8 m/s em 4 s. Qual sua aceleração média?",
        "options": [
          "−3 m/s²",
          "+3 m/s²",
          "−7 m/s²",
          "+7 m/s²"
        ],
        "correctIndex": 0,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Pela definição de aceleração média, Δv/Δt=(8−20)/4=−12/4=−3 m/s². Como o veículo ainda se desloca no sentido positivo, a aceleração negativa corresponde a uma redução de rapidez. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Representação gráfica, em função do tempo, do espaço, da velocidade escalar e da aceleração…",
    "objective": "Interpretar declives, áreas algébricas e descontinuidades em gráficos cinemáticos sem confundir as grandezas representadas.",
    "prerequisites": [
      "Eixos cartesianos",
      "Unidades e sinais",
      "Movimento retilíneo"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Gráfico posição-tempo",
        "explanation": "O gráfico da posição x em função do tempo não é um desenho da estrada percorrida: ele representa como a coordenada do móvel varia no referencial adotado. Sua inclinação média entre dois instantes é Δx/Δt, isto é, velocidade média; a inclinação da tangente representa velocidade instantânea quando existe derivada. Um trecho horizontal significa posição constante e velocidade zero. Uma reta inclinada significa velocidade constante, mesmo que o gráfico esteja acima ou abaixo do eixo horizontal. Uma curva pode representar aceleração, mas é necessário avaliar como a inclinação varia. O cruzamento de dois gráficos de posição no mesmo instante indica encontro na mesma coordenada, desde que ambos compartilhem o mesmo referencial. Gráficos em diferentes escalas não devem ser comparados pela aparência da inclinação sem conferir as unidades.",
        "example": "Entre (t=0,x=5 m) e (t=4 s,x=17 m), a inclinação é (17−5)/4=3 m/s; a posição inicial de 5 m não entra no numerador da velocidade.",
        "pitfall": "Ler a altura do gráfico como velocidade, quando a altura representa posição.",
        "steps": [
          "Leia as coordenadas (0 s,5 m) e (4 s,17 m). Leia o valor da grandeza no eixo vertical antes de calcular a inclinação.",
          "Calcule Δx=12 m e Δt=4 s; a inclinação é 3 m/s.",
          "Interprete a inclinação positiva como movimento no sentido positivo."
        ]
      },
      {
        "level": "intermediate",
        "title": "Área no gráfico velocidade-tempo",
        "explanation": "Em um gráfico v versus t, a inclinação fornece aceleração, enquanto a área algébrica entre curva e eixo do tempo fornece deslocamento. Áreas abaixo do eixo são negativas; somar seus módulos calcula distância percorrida somente quando o movimento é unidimensional e a velocidade escalar com sinal descreve o sentido. Uma reta horizontal acima do eixo representa velocidade constante e aceleração nula, embora o móvel esteja se deslocando. Para velocidade que cresce linearmente, a área pode ser calculada por trapézio ou soma de retângulo e triângulo. É indispensável conferir unidades: (m/s)×s=m. Uma curva que cruza o eixo v=0 marca inversão do sentido se o sinal realmente muda, mas não exige que a posição seja zero naquele instante. A conclusão exige explicitar qual variável é mantida constante, distinguir observação de modelo e conferir dimensionalmente os resultados. A interpretação deve ser feita no referencial e intervalo indicados, pois trocar essas condições altera as grandezas envolvidas. Em uma resolução, primeiro identifique dados e hipótese física, depois escolha a relação quantitativa adequada e por fim compare o resultado com o significado dos sinais e unidades.",
        "example": "Um móvel tem v=+4 m/s de 0 a 3 s e v=−2 m/s de 3 a 5 s: deslocamento=4×3−2×2=+8 m; distância=12+4=16 m.",
        "pitfall": "Somar áreas negativas como positivas ao calcular deslocamento.",
        "steps": [
          "Separe os intervalos: 0–3 s e 3–5 s. A área abaixo do eixo deve ser contabilizada com sinal negativo.",
          "Calcule as áreas algébricas +12 m e −4 m. A área abaixo do eixo deve ser contabilizada com sinal negativo.",
          "Some para deslocamento +8 m e some módulos para distância 16 m."
        ]
      },
      {
        "level": "advanced",
        "title": "Área no gráfico aceleração-tempo",
        "explanation": "A área algébrica sob o gráfico aceleração versus tempo corresponde à variação da velocidade, não ao deslocamento. Se a aceleração é constante em um intervalo, Δv=aΔt; para encontrar a velocidade final é necessário conhecer a inicial. Um gráfico a(t) horizontal em zero significa velocidade constante, mas não necessariamente velocidade nula. Quando a aceleração muda de sinal, a velocidade pode continuar positiva, desde que a redução ainda não a leve a zero. O deslocamento exigiria integrar a velocidade, de modo que não se pode inferir a posição final apenas da área de a(t). A interpretação de gráficos com saltos requer distinguir valores pontuais, limites laterais e intervalos finitos. Em situações reais, mudanças abruptas são idealizações e devem ser usadas somente na escala temporal proposta.",
        "example": "Se a=+2 m/s² por 3 s e depois a=−1 m/s² por 4 s, Δv=+6−4=+2 m/s. Para v0=5 m/s, vf=7 m/s. A integração da aceleração fornece variação de velocidade, não posição.",
        "pitfall": "Confundir a área sob a(t) com distância percorrida.",
        "steps": [
          "Calcule Δv1=2×3=+6 m/s. A integração da aceleração fornece variação de velocidade, não posição.",
          "Calcule Δv2=−1×4=−4 m/s. A integração da aceleração fornece variação de velocidade, não posição.",
          "Some Δv=+2 m/s e acrescente v0=5 m/s para vf=7 m/s."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No gráfico x(t), a posição muda de 5 m para 17 m entre 0 e 4 s. Qual é a inclinação da secante?",
        "options": [
          "12 m/s",
          "4 m/s",
          "3 m/s",
          "5 m/s"
        ],
        "correctIndex": 2,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "A inclinação é a variação da posição dividida pelo tempo: (17−5)/(4−0)=12/4=3 m/s. O valor corresponde à velocidade média no intervalo, e não à posição inicial. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "intermediate",
        "prompt": "Em v(t), há +4 m/s por 3 s e −2 m/s por 2 s. Qual é o deslocamento total?",
        "options": [
          "+16 m",
          "+8 m",
          "−8 m",
          "+4 m"
        ],
        "correctIndex": 1,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "A área algébrica do primeiro retângulo é +12 m; a do segundo é −4 m. A soma resulta +8 m. A distância total é 16 m, mas não é a grandeza pedida. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "advanced",
        "prompt": "Se a(t)=+2 m/s² por 3 s e depois −1 m/s² por 4 s, com v0=5 m/s, qual vf?",
        "options": [
          "3 m/s",
          "5 m/s",
          "7 m/s",
          "11 m/s"
        ],
        "correctIndex": 2,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "A variação da velocidade é a área algébrica: (+2×3)+(−1×4)=+2 m/s. Somando à velocidade inicial de 5 m/s, a final é 7 m/s. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Referencial inercial. Movimentos retilíneos. Situações de equilíbrio",
    "objective": "Distinguir referenciais inerciais de acelerados e aplicar soma vetorial de forças a repouso e movimento retilíneo uniforme.",
    "prerequisites": [
      "Vetores",
      "Leis de Newton",
      "Velocidade relativa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "O que é um referencial inercial",
        "explanation": "Um referencial é inercial quando nele um corpo sujeito a força resultante nula mantém velocidade vetorial constante. Isso inclui repouso como caso particular, mas não exige que todo objeto observado esteja parado. Referenciais em translação retilínea uniforme entre si são igualmente inerciais na mecânica clássica. Já um ônibus que freia ou faz curva é um referencial acelerado; um passageiro pode perceber tendência a avançar ou deslocar-se lateralmente mesmo sem uma força horizontal adicional nessa direção. Para aplicar a segunda lei de Newton diretamente na forma ΣF=ma, deve-se identificar um referencial aproximadamente inercial, como o solo em muitos exercícios escolares de curta duração. A rotação da Terra torna essa aproximação limitada em fenômenos de grande escala ou alta precisão, como circulação atmosférica.",
        "example": "Em um trem que segue a 20 m/s constantes em linha reta, uma mala parada no piso permanece em repouso em relação ao trem e move-se a 20 m/s em relação ao solo, sem contradição.",
        "pitfall": "Confundir repouso relativo com ausência absoluta de movimento.",
        "steps": [
          "Escolha os referenciais trem e solo e fixe o sentido positivo.",
          "No trem, registre velocidade da mala igual a zero se não desliza.",
          "No solo, some 20 m/s de translação à velocidade relativa nula."
        ]
      },
      {
        "level": "intermediate",
        "title": "Equilíbrio e resultante",
        "explanation": "Equilíbrio translacional significa aceleração vetorial nula e, em referencial inercial, força resultante igual a zero. Pode ocorrer com corpo parado ou em movimento retilíneo uniforme. Em uma caixa apoiada sobre mesa horizontal, o peso aponta para baixo e a força normal para cima; quando não há outras forças verticais e não existe aceleração vertical, seus módulos são iguais. Isso não faz das duas forças um par ação-reação: ambas atuam sobre a caixa, enquanto pares da terceira lei atuam em corpos distintos. Se houver força horizontal de 12 N para a direita e atrito de 12 N para a esquerda, a caixa pode manter velocidade constante. Em rampas, a normal geralmente não coincide com o peso, pois deve-se decompor a gravidade em componentes paralela e perpendicular ao plano.",
        "example": "Uma caixa recebe força de 12 N à direita e atrito de 12 N à esquerda. A resultante horizontal é zero; se já se movia, continua com velocidade constante no modelo.",
        "pitfall": "Afirmar que força resultante zero implica necessariamente velocidade zero.",
        "steps": [
          "Liste as forças horizontais e seus sentidos. O cancelamento de forças não determina a velocidade inicial.",
          "Some algebricamente +12−12=0 N. O cancelamento de forças não determina a velocidade inicial.",
          "Use a=ΣF/m=0 para concluir velocidade constante, não repouso obrigatório."
        ]
      },
      {
        "level": "advanced",
        "title": "Aceleração aparente e força fictícia",
        "explanation": "Dentro de um veículo que acelera, o observador preso ao veículo usa um referencial não inercial. Para explicar por que um objeto parece deslocar-se para trás em relação ao banco, pode-se introduzir uma força fictícia −ma_ref no referencial acelerado. Essa força não corresponde a uma interação física adicional exercida por outro corpo; é um artifício matemático que permite escrever equações relativas ao veículo. No referencial aproximadamente inercial do solo, a explicação usa apenas forças reais e a inércia do objeto. A força fictícia não deve ser confundida com a força de atrito que efetivamente acelera uma mala apoiada no piso. Em curvas, efeitos centrífugos percebidos pelos passageiros também dependem da escolha do referencial. A aproximação é válida na mecânica newtoniana, com acelerações e velocidades usuais.",
        "example": "Um ônibus acelera a +2 m/s² e uma massa de 3 kg é analisada no referencial do ônibus: a força fictícia é −3×2=−6 N, apontando para trás.",
        "pitfall": "Tratar força fictícia como uma interação real ou usar o mesmo diagrama nos dois referenciais.",
        "steps": [
          "Defina a aceleração do ônibus +2 m/s² e massa de 3 kg.",
          "Calcule F_fict=−m a_ref=−6 N no referencial acelerado.",
          "Diferencie essa representação da análise no solo, sem força fictícia."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma mala permanece parada no piso de trem que se move a 20 m/s constantes. Sua velocidade relativa ao solo é:",
        "options": [
          "0 m/s",
          "10 m/s",
          "20 m/s",
          "40 m/s"
        ],
        "correctIndex": 2,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "A mala tem velocidade relativa ao trem nula. Somando a velocidade do trem em relação ao solo, 20 m/s, obtemos 20 m/s para a mala. Repouso é sempre relativo a um referencial. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "intermediate",
        "prompt": "Uma caixa recebe 12 N à direita e atrito de 12 N à esquerda. Em referencial inercial, sua aceleração é:",
        "options": [
          "0 m/s²",
          "12 m/s²",
          "24 m/s²",
          "−12 m/s²"
        ],
        "correctIndex": 0,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "As forças horizontais se cancelam: ΣF=12−12=0 N. Pela segunda lei, a=ΣF/m=0 para massa positiva. A caixa pode estar em repouso ou mover-se com velocidade constante. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "advanced",
        "prompt": "No ônibus acelerado a +2 m/s², a força fictícia sobre 3 kg no referencial do ônibus vale:",
        "options": [
          "+6 N",
          "−6 N",
          "+1,5 N",
          "−1,5 N"
        ],
        "correctIndex": 1,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Em um referencial acelerado em translação, F_fict=−m a_ref. Para 3 kg e +2 m/s², o resultado é −6 N, sentido oposto à aceleração do ônibus. Não é uma interação física extra. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Sistemas geocêntrico e heliocêntrico. Leis de Kepler",
    "objective": "Comparar modelos históricos e aplicar leis de Kepler a órbitas elípticas, áreas varridas e períodos orbitais.",
    "prerequisites": [
      "Gravitação",
      "Geometria de elipses",
      "Razões e potências"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Modelos e evidências históricas",
        "explanation": "O geocentrismo clássico descrevia movimentos celestes tomando a Terra como referência central, enquanto o heliocentrismo copernicano colocava o Sol próximo do centro dos movimentos planetários conhecidos. Não basta declarar que um desenho é verdadeiro e outro falso: diferentes sistemas de coordenadas podem descrever posições aparentes, mas modelos físicos diferem em simplicidade explicativa e previsão. O movimento retrógrado aparente de Marte pode ser explicado pelo movimento relativo entre Terra e Marte em órbitas ao redor do Sol, sem que Marte precise inverter seu movimento orbital. Observações telescópicas, como fases de Vênus, desafiaram versões tradicionais do modelo ptolomaico; sozinhas não distinguem todos os modelos alternativos históricos, como o ticônico. Kepler substituiu círculos ideais por elipses ajustadas a dados precisos de Tycho Brahe. Hoje o movimento é tratado gravitacionalmente, e o Sol também se move em torno do baricentro do sistema.",
        "example": "Quando a Terra ultrapassa Marte em sua órbita, a direção da linha de visada muda e Marte pode parecer recuar diante das estrelas; isso é movimento aparente, não inversão de órbita.",
        "pitfall": "Afirmar que retrógrado significa que Marte fisicamente inverte a órbita.",
        "steps": [
          "Identifique os movimentos orbitais de Terra e Marte em torno do Sol.",
          "Compare as posições relativas antes e depois da ultrapassagem terrestre.",
          "Diferencie o deslocamento aparente no céu do movimento real de Marte."
        ]
      },
      {
        "level": "intermediate",
        "title": "Primeira e segunda leis",
        "explanation": "A primeira lei de Kepler afirma que um planeta percorre uma elipse com o Sol em um dos focos, no modelo de dois corpos em que a massa solar domina. O Sol não ocupa necessariamente o centro geométrico da elipse. A segunda lei afirma que o segmento que liga planeta e Sol varre áreas iguais em intervalos de tempo iguais; consequentemente, o planeta move-se mais rapidamente próximo do periélio e mais lentamente perto do afélio. Essa variação é compatível com conservação do momento angular sob força central, e não exige um impulso adicional no periélio. Para uma elipse de semieixo maior a e excentricidade e, as distâncias ao foco nos extremos são a(1−e) e a(1+e). Em órbitas quase circulares, a diferença de velocidades é pequena, mas não se deve confundir a lei das áreas com distância igual percorrida em tempos iguais.",
        "example": "Para a=10 unidades e e=0,2, periélio=10(1−0,2)=8 e afélio=10(1+0,2)=12 unidades; a velocidade é maior no periélio.",
        "pitfall": "Confundir foco com centro da elipse ou supor rapidez orbital constante.",
        "steps": [
          "Identifique semieixo maior a=10 e excentricidade e=0,2.",
          "Calcule distâncias extremas 8 e 12 com a(1±e).",
          "Relacione maior rapidez ao periélio pela lei das áreas."
        ]
      },
      {
        "level": "advanced",
        "title": "Terceira lei e comparação orbital",
        "explanation": "A terceira lei de Kepler, para corpos orbitando a mesma massa central com massas desprezíveis, estabelece T² proporcional a a³. Assim, (T2/T1)²=(a2/a1)³; o semieixo maior, não a distância instantânea ao Sol, entra na relação. Se uma órbita tem semieixo maior quatro vezes maior que outra, o período é oito vezes maior, pois 4³=64 e a raiz quadrada é 8. No sistema solar, a aproximação funciona bem para planetas, mas correções aparecem quando massas dos corpos são relevantes ou perturbações de outros planetas não podem ser ignoradas. A forma newtoniana de dois corpos é T²=4π²a³/[G(M+m)], esclarecendo a dependência da massa total. Não se deve comparar diretamente períodos de satélites que orbitam corpos centrais diferentes sem ajustar as massas.",
        "example": "Duas órbitas ao redor da mesma estrela têm a2=4a1. Então T2/T1=(4)^(3/2)=8: se T1=1 ano, T2=8 anos. A relação entre períodos vale para órbitas ao redor da mesma massa central.",
        "pitfall": "Usar o raio de periélio no lugar do semieixo maior ou aplicar a razão a estrelas diferentes.",
        "steps": [
          "Escreva T2²/T1²=a2³/a1³ para a mesma massa central.",
          "Substitua a2/a1=4 e calcule a razão quadrática 64.",
          "Extraia a raiz positiva e obtenha T2/T1=8. A relação entre períodos vale para órbitas ao redor da mesma massa central."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O aparente movimento retrógrado de Marte pode ser explicado por:",
        "options": [
          "Marte parar de orbitar",
          "Terra ultrapassar Marte em sua órbita",
          "Sol inverter o sentido da gravidade",
          "Marte passar a orbitar a Terra"
        ],
        "correctIndex": 1,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Quando a Terra ultrapassa Marte, a direção da linha de visada muda e a posição aparente de Marte pode recuar diante do fundo estelar. Marte continua orbitando no mesmo sentido; o efeito é geométrico. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "intermediate",
        "prompt": "Em uma órbita com a=10 e e=0,2, qual a distância de periélio ao foco?",
        "options": [
          "12",
          "10",
          "8",
          "2"
        ],
        "correctIndex": 2,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "A distância mínima ao foco é a(1−e). Substituindo a=10 e e=0,2, obtemos 10×0,8=8 unidades. O valor 12 corresponde ao afélio, a distância máxima. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "advanced",
        "prompt": "Se o semieixo maior de uma órbita é quatro vezes o de outra em torno da mesma estrela, o período é:",
        "options": [
          "2 vezes maior",
          "4 vezes maior",
          "16 vezes maior",
          "8 vezes maior"
        ],
        "correctIndex": 3,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Pela terceira lei de Kepler, (T2/T1)²=(a2/a1)³=4³=64. Portanto T2/T1=√64=8, sob a hipótese de mesma massa central e órbitas keplerianas. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Lei da gravitação universal de Newton. Campo gravitacional",
    "objective": "Calcular forças e campos gravitacionais e distinguir dependência de massa, distância, altitude e superposição.",
    "prerequisites": [
      "Forças vetoriais",
      "Potências e notação científica",
      "Lei de Newton"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Força entre massas",
        "explanation": "A gravitação universal de Newton afirma que duas massas puntiformes exercem forças atrativas de módulos iguais F=Gm1m2/r², orientadas ao longo da linha que une seus centros. Para corpos esfericamente simétricos e sem sobreposição, pode-se tratar a atração externa como se a massa estivesse concentrada no centro. A distância r é entre centros, não a altura acima da superfície isoladamente. Se r dobra, a força cai para um quarto, mantendo massas constantes. As forças entre os corpos constituem um par ação-reação: têm módulos iguais e sentidos opostos, mas atuam em corpos diferentes e portanto não se anulam no diagrama de um único corpo. A constante G tem unidades N·m²/kg² e é universal no modelo. A aproximação newtoniana é adequada a muitos problemas escolares, mas requer correções relativísticas em campos intensos ou medições de alta precisão.",
        "example": "Duas massas de 2 kg e 3 kg estão separadas por 2 m. Com G=6,67×10⁻¹¹, F=G×6/4≈1,00×10⁻¹⁰ N. A força gravitacional é atrativa e usa a distância entre centros.",
        "pitfall": "Medir r entre superfícies quando a fórmula requer distância entre centros.",
        "steps": [
          "Multiplique as massas: 2×3=6 kg². A força gravitacional é atrativa e usa a distância entre centros.",
          "Eleve a distância ao quadrado: 2²=4 m². A força gravitacional é atrativa e usa a distância entre centros.",
          "Calcule G×6/4≈1,00×10⁻¹⁰ N e indique atração mútua."
        ]
      },
      {
        "level": "intermediate",
        "title": "Campo e aceleração gravitacional",
        "explanation": "O campo gravitacional produzido por uma massa esférica M a distância r de seu centro tem módulo g=GM/r² e aponta para a massa. Uma massa de teste m sofre força F=mg, portanto sua aceleração de queda livre ideal independe de m quando se despreza resistência do ar e outras forças. O peso é uma força, medido em newtons; a massa é medida em quilogramas e não muda ao transportar o corpo da Terra para outro astro. Próximo à superfície terrestre, usa-se g≈9,8 m/s² como aproximação, mas o valor varia com latitude, altitude e distribuição de massa. Em altitude h, a distância correta é R+h; não se substitui r por h. O campo é uma grandeza vetorial, e a soma de campos de várias massas exige considerar direções e sentidos, não apenas somar módulos. A conclusão exige explicitar qual variável é mantida constante, distinguir observação de modelo e conferir dimensionalmente os resultados. A interpretação deve ser feita no referencial e intervalo indicados, pois trocar essas condições altera as grandezas envolvidas. Em uma resolução, primeiro identifique dados e hipótese física, depois escolha a relação quantitativa adequada e por fim compare o resultado com o significado dos sinais e unidades.",
        "example": "Se um planeta tem massa igual à da Terra e raio duas vezes maior, o campo na superfície é g'=GM/(2R)²=g/4≈2,45 m/s².",
        "pitfall": "Confundir massa com peso ou supor g constante em qualquer altitude.",
        "steps": [
          "Escreva g=GM/r² e identifique r=2R. O raio do planeta entra ao quadrado na expressão do campo.",
          "Compare g'/g=R²/(2R)²=1/4. O raio do planeta entra ao quadrado na expressão do campo.",
          "Use g terrestre 9,8 para obter g'=2,45 m/s². O raio do planeta entra ao quadrado na expressão do campo."
        ]
      },
      {
        "level": "advanced",
        "title": "Superposição e limites do modelo",
        "explanation": "Quando há várias massas, o campo gravitacional resultante em um ponto é a soma vetorial dos campos produzidos individualmente. Entre duas massas iguais, em pontos equidistantes sobre a linha que as une, os campos podem cancelar-se porque apontam em sentidos opostos; fora dessa geometria, não basta comparar módulos. A energia potencial gravitacional de duas massas puntiformes pode ser escrita U=−Gm1m2/r com zero escolhido no infinito, e o sinal negativo reflete a natureza atrativa do sistema ligado. Essa energia não é a mesma coisa que o potencial gravitacional por unidade de massa, φ=−GM/r. A expressão aproximada U=mgh só é válida quando g é aproximadamente constante ao longo do deslocamento, isto é, para alturas pequenas em comparação ao raio do astro. Para satélites, o campo gravitacional não desaparece: ele fornece a aceleração centrípeta da órbita.",
        "example": "Duas massas iguais M estão em x=−a e x=+a. No ponto médio x=0, cada campo tem módulo GM/a², mas os sentidos são opostos, logo o campo resultante é zero.",
        "pitfall": "Afirmar que campo zero no ponto médio significa ausência de forças entre as massas.",
        "steps": [
          "Calcule a distância a de cada massa até o ponto médio.",
          "Determine o módulo GM/a² de cada contribuição.",
          "Some os vetores opostos e conclua g_resultante=0 nesse ponto."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Duas massas de 2 kg e 3 kg estão a 2 m. Com G=6,67×10⁻¹¹ SI, qual a força?",
        "options": [
          "1,00×10⁻¹⁰ N",
          "4,00×10⁻¹⁰ N",
          "6,67×10⁻¹¹ N",
          "1,00×10⁻⁹ N"
        ],
        "correctIndex": 0,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Pela lei universal, F=Gm1m2/r²=6,67×10⁻¹¹×(2×3)/4≈1,00×10⁻¹⁰ N. A força é atrativa e cada corpo recebe uma força de mesmo módulo e sentido oposto. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "intermediate",
        "prompt": "Se um planeta tem a massa da Terra e o dobro do raio, o campo gravitacional na superfície será:",
        "options": [
          "4g",
          "2g",
          "g/2",
          "g/4"
        ],
        "correctIndex": 3,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Na superfície, g=GM/R². Mantendo M e substituindo R por 2R, obtemos g'=GM/(4R²)=g/4. O resultado supõe distribuição esférica e a mesma massa total. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      },
      {
        "level": "advanced",
        "prompt": "Duas massas iguais estão em posições simétricas. No ponto médio entre elas, o campo gravitacional é:",
        "options": [
          "Duas vezes o de cada massa",
          "Zero por cancelamento vetorial",
          "Zero porque G se anula",
          "Infinito por superposição"
        ],
        "correctIndex": 1,
        "hint": "Identifique a grandeza solicitada, as hipóteses e as unidades antes de escolher a alternativa.",
        "solution": "Cada massa gera no ponto médio um campo de módulo GM/a², mas as direções são opostas. A soma vetorial é nula exatamente no ponto médio, embora cada campo individual não seja zero. Verifique a condição do enunciado e descarte as alternativas que confundem as grandezas físicas."
      }
    ]
  }
];
