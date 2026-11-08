import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original, não oficial e sem homologação docente. */
export const provaoDepthBatch30Dispersion:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Fenômeno da dispersão luminosa e a refração da luz na atmosfera. 9.Ondulatória",
    "objective": "Explicar a dispersão espectral em prismas, a origem geométrica das cores do arco-íris e os efeitos de refração atmosférica e miragens, aplicando v=c/n sem confundir frequência, índice e trajetória.",
    "prerequisites": [
      "Leis de Snell-Descartes e índice de refração",
      "Frequência, comprimento de onda e velocidade da luz",
      "Propagação de raios e formação de imagens aparentes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dispersão em prismas: índice, frequência e comprimento de onda",
        "explanation": "Dispersão luminosa é a variação do índice de refração de um meio com a frequência ou o comprimento de onda da luz. Em muitos vidros transparentes sob condições usuais ocorre dispersão normal: a luz violeta apresenta índice de refração ligeiramente maior do que a vermelha e, por isso, propaga-se com velocidade de fase menor no vidro e tende a sofrer maior desvio por um prisma. A luz branca contém componentes de diferentes frequências; um prisma pode separá-las espacialmente porque cada frequência segue direção refratada um pouco distinta nas interfaces. A lei de Snell-Descartes n₁sen(i)=n₂sen(r) aplica-se a cada componente com o índice apropriado. A frequência não muda quando a luz atravessa uma interface estacionária, mas sua velocidade v=c/n e seu comprimento de onda λ=v/f mudam. A cor percebida está relacionada à frequência da luz, de modo que reduzir o comprimento de onda em um meio não significa, por si só, transformar luz vermelha em violeta. A descrição exige atenção à faixa espectral e ao material: a ordem de índices pode variar em regimes de dispersão anômala e em meios absorventes. Separar dispersão de reflexão especular e difração ajuda a compreender por que um prisma não produz o espectro simplesmente por 'pintar' a luz.",
        "example": "Uma componente luminosa tem frequência f=5,0×10¹⁴ Hz e atravessa um vidro com n=1,50. A velocidade no vidro é v=3,0×10⁸/1,50=2,0×10⁸ m/s. O comprimento de onda dentro do vidro é λ=v/f=4,0×10⁻⁷ m=400 nm; a frequência continua 5,0×10¹⁴ Hz.",
        "pitfall": "Não afirmar que a frequência se altera ao atravessar um prisma estacionário, nem tratar índices de refração como iguais para todas as cores quando há dispersão.",
        "steps": [
          "Identifique os índices de refração de cada componente espectral.",
          "Use v=c/n e λ=v/f mantendo f inalterada.",
          "Compare os desvios de raios com índices apropriados."
        ]
      },
      {
        "level": "intermediate",
        "title": "Arco-íris e separação angular por gotas de água",
        "explanation": "O arco-íris primário resulta da combinação de refração, dispersão e reflexão interna da luz solar em gotas aproximadamente esféricas de água. Um raio de luz entra na gota e é refratado, percorre seu interior, sofre uma reflexão interna e sai por nova refração. Como o índice da água varia com o comprimento de onda, as cores emergem com direções preferenciais distintas. Para um observador em geometria ideal, o arco primário apresenta o vermelho na região externa, com raio angular aproximado de 42° em torno do ponto antissolar, e o violeta na interna, perto de 40°. Esses valores são aproximados e dependem de condições como distribuição de gotas, geometria e espectro luminoso; não são 'ângulos do prisma' de uma gota desenhada de qualquer maneira. O arco secundário envolve em geral duas reflexões internas e apresenta ordem de cores invertida em relação ao primário, além de ser mais fraco. O fenômeno não corresponde a uma faixa colorida fixa em um local do céu: cada observador recebe luz de um conjunto de gotas em direções específicas. É importante não confundir dispersão na gota, relacionada à dependência do índice com a cor, com espalhamento na atmosfera, importante para a aparência azulada do céu.",
        "example": "Considere, em aproximação didática, um raio angular de 42° para a borda vermelha do arco primário e 40° para a violeta. A separação angular é 42°−40°=2°. Como o vermelho está mais distante do ponto antissolar, ele aparece externamente; isso não mede a largura física de uma gota.",
        "pitfall": "Não atribuir o arco-íris apenas à reflexão ou apenas à dispersão: refração na entrada e saída e reflexão interna compõem o percurso.",
        "steps": [
          "Trace entrada, reflexão interna e saída do raio em uma gota.",
          "Associe cada componente espectral a seu índice e direção de emergência.",
          "Interprete a ordem das cores a partir do ponto antissolar."
        ]
      },
      {
        "level": "advanced",
        "title": "Refração atmosférica, horizonte e miragens",
        "explanation": "A atmosfera não apresenta índice de refração perfeitamente uniforme: pressão, densidade, composição e temperatura variam no espaço. O ar mais denso tende a ter índice um pouco maior em condições comparáveis. Quando um raio de luz atravessa gradientes de índice, sua direção pode mudar gradualmente, gerando refração atmosférica. Próximo ao horizonte, a posição aparente de astros pode ficar acima da direção geométrica correspondente, fenômeno relevante para a observação do Sol no nascer e no pôr. A intensidade do efeito depende das condições atmosféricas e da altura observada, portanto não se deve aplicar uma correção universal fixa. Em superfícies muito aquecidas, como asfalto, camadas de ar próximo ao solo podem ter densidade e índice menores que o ar mais frio acima. O trajeto curvo da luz pode fazer o observador ver imagens distorcidas do céu próximo ao chão, no fenômeno conhecido como miragem inferior. Esse efeito é diferente da dispersão espectral que separa cores e também não deve ser confundido com o espalhamento que contribui para a cor do céu. Para comparar índices, a relação v=c/n permite afirmar que a velocidade de fase é maior na camada de menor índice; a trajetória completa depende do perfil contínuo dos índices, não apenas de dois números isolados. A análise geográfica e óptica exige distinguir posição real e aparente.",
        "example": "Em uma simplificação, ar aquecido próximo ao asfalto tem n=1,0002 e ar mais frio acima tem n=1,0003. A relação das velocidades é v_quente/v_frio=n_frio/n_quente≈1,0003/1,0002≈1,0001. Assim a luz tem velocidade de fase ligeiramente maior perto do solo, favorecendo curvatura do trajeto em um gradiente contínuo.",
        "pitfall": "Não confundir refração atmosférica, causada por gradientes de índice, com espalhamento molecular, nem presumir que uma miragem seja água real no asfalto.",
        "steps": [
          "Identifique o gradiente de densidade e índice na atmosfera.",
          "Relacione maior índice a menor velocidade de fase.",
          "Distinga curvatura do raio, dispersão de cores e espalhamento."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num vidro em dispersão normal, a componente violeta geralmente:",
        "options": [
          "Tem velocidade maior e índice menor que a vermelha",
          "Tem índice maior e velocidade menor que a vermelha",
          "Muda sua frequência ao entrar no vidro",
          "Não sofre refração em uma interface oblíqua"
        ],
        "correctIndex": 1,
        "hint": "Distinga a mudança de velocidade da mudança de frequência e identifique a geometria de raios.",
        "solution": "Em dispersão normal, o índice do vidro é maior para a componente violeta; como v=c/n, sua velocidade de fase é menor. A frequência permanece determinada pela fonte ao cruzar uma interface estacionária."
      },
      {
        "level": "intermediate",
        "prompt": "No arco-íris primário ideal, qual ordem relativa de cores é correta?",
        "options": [
          "Violeta fora e vermelho dentro",
          "Todas as cores emergem exatamente no mesmo ângulo",
          "A ordem depende apenas da cor do solo",
          "Vermelho fora e violeta dentro"
        ],
        "correctIndex": 3,
        "hint": "Distinga a mudança de velocidade da mudança de frequência e identifique a geometria de raios.",
        "solution": "No arco primário, a região vermelha ocorre a raio angular aproximado de 42° do ponto antissolar, maior que o do violeta, próximo a 40°. Por isso vermelho aparece externamente e violeta internamente."
      },
      {
        "level": "advanced",
        "prompt": "Um observador vê uma miragem sobre asfalto muito quente. A explicação adequada envolve:",
        "options": [
          "Gradientes de índice no ar que curvam raios e alteram posições aparentes",
          "Água acumulada obrigatoriamente na estrada",
          "Mudança de frequência luminosa por contato com o chão",
          "Apenas difração sem alteração de direção"
        ],
        "correctIndex": 0,
        "hint": "Distinga a mudança de velocidade da mudança de frequência e identifique a geometria de raios.",
        "solution": "O ar muito quente perto do solo pode ter densidade e índice menores que camadas superiores, fazendo a trajetória luminosa curvar. A miragem não exige água sobre a estrada e não resulta de uma frequência que muda sozinha."
      }
    ]
  }
];
