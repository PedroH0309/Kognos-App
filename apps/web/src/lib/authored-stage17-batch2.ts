import type {Stage17Spec} from './authored-lessons-stage17.ts';
export const stage17Batch2:Stage17Spec[]=[
  {
    "subject": "Física",
    "topic": "Queda livre",
    "objective": "Aplicar equações do movimento vertical sob gravidade constante em modelos sem ar, avaliando sinais e limitações de medidas reais.",
    "sections": [
      {
        "title": "Quando a queda é livre no sentido físico",
        "explanation": "Queda livre é modelo de movimento de corpo sujeito apenas à força gravitacional, com outras forças desprezadas. Próximo à superfície terrestre, a aceleração gravitacional tem módulo aproximado de 9,8 m/s², às vezes arredondado para 10 m/s² nos exercícios. Se escolhemos o sentido para baixo como positivo e soltamos um objeto do repouso, v=gt e h=gt²/2 no intervalo apropriado. Se escolhemos para cima como positivo, a aceleração é negativa e os sinais precisam ser consistentes. O modelo não afirma que quaisquer objetos com formatos diferentes caem no mesmo tempo dentro do ar: resistência aerodinâmica depende de área, forma, velocidade e propriedades do fluido. Uma folha amassada pode se comportar de modo muito diferente de uma folha aberta, sem que a gravidade tenha desaparecido.",
        "example": "Uma bolinha solta por 2 s sob g=10 m/s², sem ar, teria rapidez de 20 m/s e deslocamento vertical de 20 m, pois h=10×2²/2.",
        "pitfall": "Confundir a aceleração gravitacional com velocidade constante ou afirmar que qualquer queda com resistência do ar é queda livre ideal.",
        "steps": [
          "Escolha o sentido positivo e registre se o objeto parte do repouso ou já possui velocidade.",
          "Declare a hipótese de resistência do ar desprezível antes de usar as equações."
        ]
      },
      {
        "title": "Relacionando altura, tempo e velocidade",
        "explanation": "Quando o corpo é solto do repouso e g é aproximadamente constante, a distância vertical h percorrida é gt²/2; isolando o tempo, t=√(2h/g). Portanto, o tempo cresce com a raiz quadrada da altura e não proporcionalmente a ela. A rapidez pode ser obtida por v=gt ou pela relação v²=2gh. Se houver velocidade inicial, não use automaticamente essas expressões reduzidas: o movimento uniforme variado exige incluir v₀. A unidade é importante: h em metros, t em segundos, g em m/s². Valores de queda muito altos podem exigir considerar variação de g e efeito do ar, e nenhuma conta escolar deve ser apresentada como avaliação de segurança de quedas reais de pessoas. O resultado é válido para um modelo delimitado e deve ser interpretado assim.",
        "example": "Para altura idealizada de 45 m e g=10 m/s², t=√(2×45/10)=3 s; a rapidez final seria de 30 m/s no modelo.",
        "pitfall": "Usar t=h/g ou esquecer de extrair raiz quadrada ao isolar o tempo de queda da fórmula.",
        "steps": [
          "Use h=gt²/2 com unidades coerentes e resolva a potência de t corretamente.",
          "Verifique o resultado por v=gt e confira se é compatível com a altura suposta."
        ]
      },
      {
        "title": "Lançamento vertical e ponto mais alto",
        "explanation": "Se uma bola é lançada verticalmente para cima, a velocidade pode diminuir até zero, enquanto a aceleração permanece dirigida para baixo em todo o intervalo. Com eixo positivo para cima, v=v₀−gt, e no ápice v=0, produzindo tsubida=v₀/g em modelo sem ar. A posição vertical pode ser escrita y=y₀+v₀t−gt²/2. Se a bola retornar à mesma altura inicial, o tempo de descida iguala o de subida na aproximação de aceleração constante sem arrasto; retornos a alturas diferentes não permitem duplicar o tempo indiscriminadamente. Uma aceleração não deixa de existir quando a velocidade momentânea é nula. O conceito é importante para interpretar gráficos e evitar associar sinal de velocidade automaticamente ao sentido da força resultante.",
        "example": "Uma bola lançada para cima a 20 m/s sob g=10 atinge o ápice após 2 s, quando a velocidade vale zero mas a aceleração continua −10 m/s².",
        "pitfall": "Concluir que a gravidade é zero no ponto mais alto ou aplicar simetria de tempos sem verificar as alturas inicial e final.",
        "steps": [
          "Use v=0 para localizar o instante do ápice mantendo a aceleração gravitacional.",
          "Compare posições inicial e final antes de inferir igualdade de tempos de subida e descida."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual o módulo aproximado da aceleração em queda livre próxima ao solo?",
        "hint": "Use 9,8 m/s² ou arredondamento escolar para 10.",
        "solution": "A gravidade produz aceleração de cerca de 9,8 m/s² para baixo, sob as condições aproximadas próximas à superfície terrestre."
      },
      {
        "level": "basic",
        "prompt": "Um objeto cai do repouso por 2 s com g=10. Qual sua rapidez no fim?",
        "hint": "Aplique v=gt com velocidade inicial nula.",
        "solution": "v=10×2=20 m/s para baixo, assumindo aceleração constante e ausência de resistência do ar."
      },
      {
        "level": "intermediate",
        "prompt": "Qual altura idealizada é percorrida em 3 s a partir do repouso com g=10?",
        "hint": "Use h=gt²/2.",
        "solution": "h=10×3²/2=45 m, dentro do modelo de queda sob ação exclusiva da gravidade."
      },
      {
        "level": "intermediate",
        "prompt": "Quanto tempo leva a queda ideal do repouso por 80 m, com g=10?",
        "hint": "Isole t na equação h=gt²/2.",
        "solution": "t=√(2×80/10)=√16=4 s. O cálculo ignora arrasto do ar e outras condições."
      },
      {
        "level": "advanced",
        "prompt": "Uma bola sobe com v₀=30 m/s e g=10. Encontre o tempo até o ápice.",
        "hint": "No ápice use v=0 e v=v₀−gt.",
        "solution": "0=30−10t, de modo que t=3 s. A aceleração continua dirigida para baixo."
      },
      {
        "level": "advanced",
        "prompt": "Por que duas folhas de formatos diferentes podem cair em tempos diferentes no ar?",
        "hint": "O arrasto depende da área e forma exposta.",
        "solution": "A resistência do ar altera a força resultante e pode variar com formato e velocidade; a previsão igualitária exige modelo sem ar."
      }
    ],
    "everyday": {
      "context": "Um vídeo escolar compara uma bola caindo e uma folha aberta; a folha chega depois. Um colega conclui que a gravidade não age sobre folhas por elas serem leves.",
      "question": "Como o arrasto do ar modifica o experimento sem contradizer o modelo ideal de queda livre?",
      "answer": "A gravidade age em ambos, mas a resistência do ar pode ser muito diferente. Em queda livre ideal, sem arrasto, a aceleração gravitacional seria aproximadamente igual.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Movimento uniformemente variado",
          "reason": "As equações de queda livre são aplicações do movimento com aceleração aproximadamente constante."
        },
        {
          "subject": "Física",
          "topic": "Leis de Newton",
          "reason": "As forças gravitacional e de arrasto explicam por que o movimento real pode divergir do modelo de queda livre."
        }
      ]
    }
  },
  {
    "subject": "Física",
    "topic": "Trabalho de uma força",
    "objective": "Calcular trabalho mecânico e relacioná-lo à energia cinética, identificando direção da força, deslocamento e trabalho resultante.",
    "sections": [
      {
        "title": "Trabalho depende de força e deslocamento",
        "explanation": "Na Física, trabalho de força constante relaciona força F, deslocamento d e o ângulo θ entre eles: W=F·d·cosθ. A unidade é o joule, equivalente a newton vezes metro. Se a força atua no sentido do deslocamento, o trabalho é positivo; no sentido contrário, negativo; perpendicular, o trabalho é zero. O termo não mede cansaço: segurar um objeto parado exige contração muscular, mas a força aplicada sobre o objeto realiza trabalho mecânico nulo quando não há deslocamento. É essencial indicar qual força está sendo analisada, pois várias forças podem atuar simultaneamente, produzindo trabalhos distintos. O cálculo básico supõe força constante e não descreve automaticamente trajetórias curvas ou forças que variam com posição. Os sinais são interpretação energética, não julgamento de força boa ou ruim.",
        "example": "Uma força horizontal de 20 N move carrinho por 4 m no mesmo sentido: W=20×4×cos0°=80 J.",
        "pitfall": "Multiplicar força por tempo como se fosse trabalho ou confundir esforço humano com trabalho mecânico no objeto.",
        "steps": [
          "Identifique força, deslocamento e ângulo entre as direções no trecho estudado.",
          "Utilize o cosseno do ângulo para determinar sinal e quantidade de trabalho."
        ]
      },
      {
        "title": "Forças resistentes e perpendiculares",
        "explanation": "Uma força de atrito que atua contra o deslocamento geralmente realiza trabalho negativo, convertendo parte da energia mecânica em outras formas, inclusive energia térmica. Se o atrito tem intensidade 5 N e o deslocamento é 3 m no sentido oposto, seu trabalho é −15 J. Uma força perpendicular ao deslocamento não realiza trabalho nessa situação, pois cos90°=0, mesmo quando altera a direção do movimento, como certas forças centrípetas em idealizações. A soma algébrica dos trabalhos das forças relevantes produz o trabalho resultante, que pode ser positivo, negativo ou nulo. Não se deve somar somente intensidades ou ignorar sinais. Para forças variáveis ou deslocamentos curvos, a definição geral utiliza análise por elementos de trajetória, além da fórmula elementar.",
        "example": "Uma caixa desliza 3 m para a direita sob atrito de 5 N para a esquerda; Watr=5×3×cos180°=−15 J.",
        "pitfall": "Concluir que toda força ativa transfere energia positivamente ou ignorar trabalho negativo do atrito.",
        "steps": [
          "Descreva o sentido de cada força relativamente ao deslocamento, não à página do desenho.",
          "Calcule e some trabalhos com sinais, distinguindo trabalho individual do resultante."
        ]
      },
      {
        "title": "Teorema da energia cinética",
        "explanation": "O trabalho da força resultante é igual à variação da energia cinética de uma partícula no modelo clássico: Wres=ΔEc=mvf²/2−mvi²/2. Como a velocidade aparece ao quadrado, dobrar a rapidez quadruplica a energia cinética para massa constante. Se forças realizam trabalhos opostos, a variação cinética depende da soma e não apenas do esforço motor. Durante frenagem, o atrito e outras forças podem diminuir energia cinética enquanto ocorrem transferências para energia térmica e outras formas. O teorema não afirma desaparecimento de energia; ele descreve quanto mudou a energia cinética daquele sistema. Para calcular com segurança, use massa em quilogramas, velocidades em m/s e diferencie trabalho de uma força de trabalho total.",
        "example": "Uma bola de 2 kg passa de 3 a 5 m/s; ΔEc=(2/2)(25−9)=16 J. O trabalho resultante no intervalo é +16 J.",
        "pitfall": "Igualar trabalho de uma força isolada à variação de energia cinética sem considerar outras forças que também atuam.",
        "steps": [
          "Calcule energia cinética antes e depois usando velocidades em m/s e massa em kg.",
          "Associe ΔEc à soma algébrica dos trabalhos das forças, inclusive resistivas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma força de 10 N produz deslocamento de 2 m no mesmo sentido. Qual trabalho?",
        "hint": "Use W=Fdcosθ, com θ=0°.",
        "solution": "W=10×2×1=20 J. O sinal é positivo porque força e deslocamento coincidem."
      },
      {
        "level": "basic",
        "prompt": "Qual trabalho de força perpendicular ao deslocamento, no modelo constante?",
        "hint": "O cosseno de noventa graus é zero.",
        "solution": "W=Fdcos90°=0, mesmo que a força possa alterar a direção do movimento."
      },
      {
        "level": "intermediate",
        "prompt": "O atrito de 4 N opõe-se ao deslocamento de 5 m. Calcule trabalho.",
        "hint": "Use cosseno de 180° igual a −1.",
        "solution": "W=4×5×(−1)=−20 J. O trabalho é negativo e representa força resistiva."
      },
      {
        "level": "intermediate",
        "prompt": "Uma força de 20 N faz ângulo de 60° com 3 m de deslocamento. Calcule W.",
        "hint": "Use cos60°=0,5 na fórmula.",
        "solution": "W=20×3×0,5=30 J. Somente a componente paralela ao deslocamento contribui."
      },
      {
        "level": "advanced",
        "prompt": "Um corpo de 2 kg acelera de 3 a 5 m/s. Qual trabalho resultante?",
        "hint": "Use m(vf²−vi²)/2.",
        "solution": "Wres=(2/2)(25−9)=16 J, diferença entre energias cinéticas final e inicial."
      },
      {
        "level": "advanced",
        "prompt": "Por que somar apenas trabalhos positivos pode errar a mudança de Ec?",
        "hint": "Atrito pode gerar trabalho negativo.",
        "solution": "A variação de energia cinética depende da soma algébrica de todos os trabalhos, incluindo parcelas negativas."
      }
    ],
    "everyday": {
      "context": "Uma pessoa empurra carrinho por quatro metros, mas o atrito resiste ao movimento. Um estudante usa apenas o trabalho da força aplicada para prever aumento de energia cinética.",
      "question": "Por que a previsão deve incluir trabalhos positivos e negativos das forças relevantes?",
      "answer": "O teorema Wresultante=ΔEc usa a soma algébrica dos trabalhos, incluindo trabalho negativo do atrito, e não somente o trabalho de empurrar.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Conservação da energia mecânica",
          "reason": "Trabalhos de forças conservativas e dissipativas explicam mudanças de energia cinética e mecânica."
        },
        {
          "subject": "Física",
          "topic": "Potência e consumo de energia elétrica",
          "reason": "Trabalho quantifica energia transferida por força, e potência descreve a taxa dessa transferência de energia."
        }
      ]
    }
  }
];
