import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original Provão batch 12; editorial material, teacher review pending. */
export const provaoDepthBatch12StemHistory:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Cálculos estequiométricos: massa, volume, quantidade de matéria",
    "objective": "Compreender e aplicar estequiometria e mol com justificativa, condições de validade e análise de erros.",
    "prerequisites": [
      "Leitura de enunciados",
      "Raciocínio proporcional e interpretação de evidências",
      "Conhecimentos introdutórios da disciplina"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Estequiometria e mol",
        "explanation": "Uma equação balanceada fornece razões entre quantidades de matéria, não diretamente entre massas. Um mol contém 6,022×10²³ entidades; a massa molar em g/mol relaciona massa e mol por n=m/M. Em reações completas, os coeficientes expressam proporções de partículas e de mols. Para H₂ + Cl₂ → 2 HCl, um mol de hidrogênio consome um mol de cloro e produz dois mols de HCl. Antes de calcular, confirme fórmulas, estados, reagentes e balanceamento. A massa total se conserva em sistema fechado, mas massas individuais dos reagentes não precisam ser iguais. A identificação de reagente limitante exige comparar mols disponíveis divididos pelos coeficientes. A conversão entre volume de gás e mol exige informar temperatura e pressão, pois não existe um volume molar universal independente das condições.",
        "example": "Para 4 g de H₂ (M=2 g/mol) e Cl₂ em excesso: n(H₂)=4/2=2 mol; a razão 1:2 produz 4 mol de HCl. Com M(HCl)=36,5 g/mol, massa teórica=146 g. Esse valor supõe conversão completa, reagente puro e ausência de perdas.",
        "pitfall": "Confundir coeficientes com razões de massas ou usar 22,4 L/mol em quaisquer condições gera erros sistemáticos.",
        "steps": [
          "Identifique as grandezas e hipóteses do enunciado.",
          "Escolha o modelo ou conceito e justifique sua validade.",
          "Calcule ou interprete com unidades e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: decisões e relações",
        "explanation": "Uma equação balanceada fornece razões entre quantidades de matéria, não diretamente entre massas. Um mol contém 6,022×10²³ entidades; a massa molar em g/mol relaciona massa e mol por n=m/M. Em reações completas, os coeficientes expressam proporções de partículas e de mols. Para H₂ + Cl₂ → 2 HCl, um mol de hidrogênio consome um mol de cloro e produz dois mols de HCl. Antes de calcular, confirme fórmulas, estados, reagentes e balanceamento. A massa total se conserva em sistema fechado, mas massas individuais dos reagentes não precisam ser iguais. A identificação de reagente limitante exige comparar mols disponíveis divididos pelos coeficientes. A conversão entre volume de gás e mol exige informar temperatura e pressão, pois não existe um volume molar universal independente das condições. A aplicação exige comparar situações próximas que produzem resultados diferentes: um dado numérico isolado não basta para inferir mecanismo, e uma definição não substitui a análise de condições iniciais. Quando houver medida, converta unidades antes de operar e registre a interpretação física, química, biológica ou histórica. Considere se o resultado é uma previsão teórica, uma evidência observada ou uma explicação causal. Compare também o caso idealizado com o que ocorreria se a hipótese central deixasse de valer. Em problemas contextualizados, leia todas as restrições e não transfira automaticamente uma proporção ou uma relação de outro sistema. Uma equação balanceada fornece razões entre quantidades de matéria, não diretamente entre massas. Um mol contém 6,022×10²³ entidades; a massa molar em g/mol relaciona massa e mol por n=m/M. Em reações completas, os coefi",
        "example": "Considere 4 mol de H₂ e 3 mol de Cl₂ na reação H₂+Cl₂→2HCl. Dividindo mols disponíveis por coeficiente: H₂ 4/1=4 e Cl₂ 3/1=3. Cl₂ limita a reação: são consumidos 3 mol de H₂, restando 1 mol; formam-se 6 mol de HCl. A análise compara disponibilidades em mol, não massas.",
        "pitfall": "Confundir coeficientes com razões de massas ou usar 22,4 L/mol em quaisquer condições gera erros sistemáticos.",
        "steps": [
          "Leia o problema e separe dados de hipóteses.",
          "Desenvolva a aplicação com uma sequência explícita de inferências.",
          "Teste se a conclusão permanece válida quando muda uma condição."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: limites, evidências e exceções",
        "explanation": "Uma equação balanceada fornece razões entre quantidades de matéria, não diretamente entre massas. Um mol contém 6,022×10²³ entidades; a massa molar em g/mol relaciona massa e mol por n=m/M. Em reações completas, os coeficientes expressam proporções de partículas e de mols. Para H₂ + Cl₂ → 2 HCl, um mol de hidrogênio consome um mol de cloro e produz dois mols de HCl. Antes de calcular, confirme fórmulas, estados, reagentes e balanceamento. A massa total se conserva em sistema fechado, mas massas individuais dos reagentes não precisam ser iguais. A identificação de reagente limitante exige comparar mols disponíveis divididos pelos coeficientes. A conversão entre volume de gás e mol exige informar temperatura e pressão, pois não existe um volume molar universal independente das condições. A avaliação avançada exige reconhecer o domínio de validade do modelo e os fatores que introduzem incerteza. Não se deve confundir correlação e causalidade, nem deduzir uma regra universal a partir de um caso particular. Um resultado calculado pode ser teoricamente correto sob hipóteses ideais e ainda diferir de medidas reais por perdas, variabilidade ou condições não controladas. Ao comparar interpretações concorrentes, verifique quais evidências sustentam cada uma e quais dados adicionais poderiam discriminá-las. A explicação precisa deixar claro o que é pressuposto, o que foi demonstrado e o que permanece condicionado.  de reagente limitante exige comparar mols disponíveis divididos pelos coeficientes. A conversão entre volume de gás e mol exige informar temperatura e pressão, pois não existe um volume molar universal independente das condições.",
        "example": "Para 73 g de HCl (M=36,5 g/mol), n=73/36,5=2 mol. Pela equação H₂+Cl₂→2HCl, são necessários 1 mol de H₂ e 1 mol de Cl₂, ou 2 g e 71 g, respectivamente. O balanço 2+71=73 g verifica conservação da massa, supondo reagentes puros e reação completa.",
        "pitfall": "Confundir coeficientes com razões de massas ou usar 22,4 L/mol em quaisquer condições gera erros sistemáticos.",
        "steps": [
          "Explicite limites e exceções do modelo.",
          "Confronte uma inferência alternativa com os dados disponíveis.",
          "Indique a condição que tornaria a conclusão diferente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Para H₂ + Cl₂ → 2 HCl, 1 mol de H₂ produz, com Cl₂ em excesso:",
        "options": [
          "1 mol de HCl",
          "2 mol de HCl",
          "0,5 mol de HCl",
          "4 mol de HCl"
        ],
        "correctIndex": 1,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "A razão é 1:2: um mol de H₂ produz dois mols de HCl, supondo reação completa e cloro em excesso. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Qual massa de HCl se forma teoricamente de 2 mol de H₂ e Cl₂ em excesso? M(HCl)=36,5 g/mol.",
        "options": [
          "36,5 g",
          "73 g",
          "146 g",
          "292 g"
        ],
        "correctIndex": 2,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "Dois mols de H₂ produzem quatro mols de HCl; 4×36,5=146 g, com rendimento teórico de 100%. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Em uma reação balanceada, o reagente limitante é identificado corretamente por:",
        "options": [
          "Maior massa disponível",
          "Menor massa molar",
          "Maior coeficiente",
          "Menor razão entre mols disponíveis e coeficiente estequiométrico"
        ],
        "correctIndex": 3,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "Dividir a quantidade disponível de cada reagente pelo respectivo coeficiente identifica qual é consumido primeiro na proporção da reação. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Movimentos uniformes e uniformemente variados. Suas funções horárias",
    "objective": "Compreender e aplicar movimento uniforme e acelerado com justificativa, condições de validade e análise de erros.",
    "prerequisites": [
      "Leitura de enunciados",
      "Raciocínio proporcional e interpretação de evidências",
      "Conhecimentos introdutórios da disciplina"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Movimento uniforme e acelerado",
        "explanation": "No movimento retilíneo uniforme (MRU), a velocidade escalar algébrica é constante e a posição obedece s=s₀+vt. No movimento uniformemente variado (MUV), a aceleração é constante: v=v₀+at e s=s₀+v₀t+at²/2. A equação de Torricelli v²=v₀²+2aΔs elimina o tempo, mas só vale com aceleração constante ao longo do trecho. Velocidade negativa indica sentido relativo ao eixo escolhido, não necessariamente redução do módulo. A aceleração contrária à velocidade reduz a rapidez; quando têm mesmo sinal, aumenta. Em queda livre próxima da superfície terrestre e desprezando resistência do ar, usa-se aceleração gravitacional aproximadamente constante. Gráficos posição-tempo têm inclinação relacionada à velocidade; gráficos velocidade-tempo têm inclinação igual à aceleração e área algébrica igual ao deslocamento.",
        "example": "Um ciclista parte com v₀=2 m/s e acelera a 3 m/s² durante 4 s: v=2+3·4=14 m/s; Δs=2·4+(3·16)/2=32 m. A rapidez final não pode ser calculada por MRU porque a velocidade varia.",
        "pitfall": "Usar distância total no lugar de deslocamento ou aplicar Torricelli com aceleração variável sem justificativa invalida o resultado.",
        "steps": [
          "Identifique as grandezas e hipóteses do enunciado.",
          "Escolha o modelo ou conceito e justifique sua validade.",
          "Calcule ou interprete com unidades e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: decisões e relações",
        "explanation": "No movimento retilíneo uniforme (MRU), a velocidade escalar algébrica é constante e a posição obedece s=s₀+vt. No movimento uniformemente variado (MUV), a aceleração é constante: v=v₀+at e s=s₀+v₀t+at²/2. A equação de Torricelli v²=v₀²+2aΔs elimina o tempo, mas só vale com aceleração constante ao longo do trecho. Velocidade negativa indica sentido relativo ao eixo escolhido, não necessariamente redução do módulo. A aceleração contrária à velocidade reduz a rapidez; quando têm mesmo sinal, aumenta. Em queda livre próxima da superfície terrestre e desprezando resistência do ar, usa-se aceleração gravitacional aproximadamente constante. Gráficos posição-tempo têm inclinação relacionada à velocidade; gráficos velocidade-tempo têm inclinação igual à aceleração e área algébrica igual ao deslocamento. A aplicação exige comparar situações próximas que produzem resultados diferentes: um dado numérico isolado não basta para inferir mecanismo, e uma definição não substitui a análise de condições iniciais. Quando houver medida, converta unidades antes de operar e registre a interpretação física, química, biológica ou histórica. Considere se o resultado é uma previsão teórica, uma evidência observada ou uma explicação causal. Compare também o caso idealizado com o que ocorreria se a hipótese central deixasse de valer. Em problemas contextualizados, leia todas as restrições e não transfira automaticamente uma proporção ou uma relação de outro sistema. No movimento retilíneo uniforme (MRU), a velocidade escalar algébrica é constante e a posição obedece s=s₀+vt. No movimento uniformemente variado (MUV), a aceleração é constante: v=v₀+at e s=s₀+v₀t+at²/2. A equação de To",
        "example": "Um trem mantém velocidade constante de 15 m/s por 12 s. Aplicando MRU, Δs=15·12=180 m. No gráfico velocidade-tempo, a área do retângulo de base 12 s e altura 15 m/s também é 180 m. O cálculo supõe referencial fixo e velocidade constante nesse intervalo.",
        "pitfall": "Usar distância total no lugar de deslocamento ou aplicar Torricelli com aceleração variável sem justificativa invalida o resultado.",
        "steps": [
          "Leia o problema e separe dados de hipóteses.",
          "Desenvolva a aplicação com uma sequência explícita de inferências.",
          "Teste se a conclusão permanece válida quando muda uma condição."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: limites, evidências e exceções",
        "explanation": "No movimento retilíneo uniforme (MRU), a velocidade escalar algébrica é constante e a posição obedece s=s₀+vt. No movimento uniformemente variado (MUV), a aceleração é constante: v=v₀+at e s=s₀+v₀t+at²/2. A equação de Torricelli v²=v₀²+2aΔs elimina o tempo, mas só vale com aceleração constante ao longo do trecho. Velocidade negativa indica sentido relativo ao eixo escolhido, não necessariamente redução do módulo. A aceleração contrária à velocidade reduz a rapidez; quando têm mesmo sinal, aumenta. Em queda livre próxima da superfície terrestre e desprezando resistência do ar, usa-se aceleração gravitacional aproximadamente constante. Gráficos posição-tempo têm inclinação relacionada à velocidade; gráficos velocidade-tempo têm inclinação igual à aceleração e área algébrica igual ao deslocamento. A avaliação avançada exige reconhecer o domínio de validade do modelo e os fatores que introduzem incerteza. Não se deve confundir correlação e causalidade, nem deduzir uma regra universal a partir de um caso particular. Um resultado calculado pode ser teoricamente correto sob hipóteses ideais e ainda diferir de medidas reais por perdas, variabilidade ou condições não controladas. Ao comparar interpretações concorrentes, verifique quais evidências sustentam cada uma e quais dados adicionais poderiam discriminá-las. A explicação precisa deixar claro o que é pressuposto, o que foi demonstrado e o que permanece condicionado.  do ar, usa-se aceleração gravitacional aproximadamente constante. Gráficos posição-tempo têm inclinação relacionada à velocidade; gráficos velocidade-tempo têm inclinação igual à aceleração e área algébrica igual ao deslocamento.",
        "example": "Um carro com v₀=20 m/s freia com a=−5 m/s² até parar. Pela equação v=v₀+at, 0=20−5t, logo t=4 s. Por Torricelli, 0²=20²+2(−5)Δs; Δs=40 m. O sinal negativo da aceleração indica oposição à velocidade inicial, e o resultado exige desaceleração constante.",
        "pitfall": "Usar distância total no lugar de deslocamento ou aplicar Torricelli com aceleração variável sem justificativa invalida o resultado.",
        "steps": [
          "Explicite limites e exceções do modelo.",
          "Confronte uma inferência alternativa com os dados disponíveis.",
          "Indique a condição que tornaria a conclusão diferente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um móvel percorre MRU com v=5 m/s por 4 s. Seu deslocamento é:",
        "options": [
          "20 m",
          "9 m",
          "1,25 m",
          "40 m"
        ],
        "correctIndex": 0,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "Em MRU, Δs=v·t=5×4=20 m; a expressão pressupõe velocidade constante no intervalo. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Com v₀=2 m/s, a=3 m/s² e t=4 s, a velocidade final é:",
        "options": [
          "8 m/s",
          "14 m/s",
          "20 m/s",
          "32 m/s"
        ],
        "correctIndex": 1,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "A equação v=v₀+at resulta em 2+3×4=14 m/s, pois a aceleração é constante. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Qual informação é obtida pela área algébrica sob o gráfico velocidade × tempo?",
        "options": [
          "A aceleração instantânea",
          "A distância sempre positiva",
          "O deslocamento",
          "A massa do móvel"
        ],
        "correctIndex": 2,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "A integral temporal da velocidade fornece deslocamento, com sinal; a distância total soma os módulos dos deslocamentos. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "A 1ª e 2ª Lei de Gregor Mendel",
    "objective": "Compreender e aplicar segregação e assortimento independente com justificativa, condições de validade e análise de erros.",
    "prerequisites": [
      "Leitura de enunciados",
      "Raciocínio proporcional e interpretação de evidências",
      "Conhecimentos introdutórios da disciplina"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Segregação e assortimento independente",
        "explanation": "Na primeira lei de Mendel, os dois alelos de um gene em organismo diploide segregam na formação de gametas; um heterozigoto Aa produz, em condições mendelianas simples, gametas A e a em proporções iguais. Dominância descreve a expressão do fenótipo heterozigoto, não a frequência de transmissão. Em Aa×Aa, o quadro de Punnett fornece AA, Aa, Aa e aa: razão genotípica 1:2:1 e fenotípica 3:1 apenas se A for completamente dominante e não houver fatores adicionais. A segunda lei descreve distribuição independente de pares de alelos de genes não ligados, ou suficientemente afastados para recombinação aproximar independência. Para AaBb, gametas AB, Ab, aB e ab têm proporções iguais sob as hipóteses adequadas. Genes próximos no mesmo cromossomo podem apresentar ligação gênica, tornando inadequada a proporção 9:3:3:1.",
        "example": "Em Aa×aa, o primeiro genitor gera A e a; o segundo só a. Descendentes possíveis: Aa e aa, cada um com probabilidade de 1/2. Se A domina a, metade expressa o fenótipo dominante. Não se deve presumir qual característica é dominante sem enunciado.",
        "pitfall": "A proporção 9:3:3:1 não vale automaticamente para genes ligados, herança ligada ao sexo, epistasia ou dominância incompleta.",
        "steps": [
          "Identifique as grandezas e hipóteses do enunciado.",
          "Escolha o modelo ou conceito e justifique sua validade.",
          "Calcule ou interprete com unidades e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: decisões e relações",
        "explanation": "Na primeira lei de Mendel, os dois alelos de um gene em organismo diploide segregam na formação de gametas; um heterozigoto Aa produz, em condições mendelianas simples, gametas A e a em proporções iguais. Dominância descreve a expressão do fenótipo heterozigoto, não a frequência de transmissão. Em Aa×Aa, o quadro de Punnett fornece AA, Aa, Aa e aa: razão genotípica 1:2:1 e fenotípica 3:1 apenas se A for completamente dominante e não houver fatores adicionais. A segunda lei descreve distribuição independente de pares de alelos de genes não ligados, ou suficientemente afastados para recombinação aproximar independência. Para AaBb, gametas AB, Ab, aB e ab têm proporções iguais sob as hipóteses adequadas. Genes próximos no mesmo cromossomo podem apresentar ligação gênica, tornando inadequada a proporção 9:3:3:1. A aplicação exige comparar situações próximas que produzem resultados diferentes: um dado numérico isolado não basta para inferir mecanismo, e uma definição não substitui a análise de condições iniciais. Quando houver medida, converta unidades antes de operar e registre a interpretação física, química, biológica ou histórica. Considere se o resultado é uma previsão teórica, uma evidência observada ou uma explicação causal. Compare também o caso idealizado com o que ocorreria se a hipótese central deixasse de valer. Em problemas contextualizados, leia todas as restrições e não transfira automaticamente uma proporção ou uma relação de outro sistema. Na primeira lei de Mendel, os dois alelos de um gene em organismo diploide segregam na formação de gametas; um heterozigoto Aa produz, em condições mendelianas simples, gametas A e a em proporções iguais. Dominância desc",
        "example": "Em Aa×Aa, cada genitor fornece A ou a com probabilidade 1/2. As combinações AA, Aa, aA e aa têm probabilidade 1/4 cada; agregando os heterozigotos, a razão genotípica é 1:2:1. Se A apresenta dominância completa, três de quatro combinações têm fenótipo dominante.",
        "pitfall": "A proporção 9:3:3:1 não vale automaticamente para genes ligados, herança ligada ao sexo, epistasia ou dominância incompleta.",
        "steps": [
          "Leia o problema e separe dados de hipóteses.",
          "Desenvolva a aplicação com uma sequência explícita de inferências.",
          "Teste se a conclusão permanece válida quando muda uma condição."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: limites, evidências e exceções",
        "explanation": "Na primeira lei de Mendel, os dois alelos de um gene em organismo diploide segregam na formação de gametas; um heterozigoto Aa produz, em condições mendelianas simples, gametas A e a em proporções iguais. Dominância descreve a expressão do fenótipo heterozigoto, não a frequência de transmissão. Em Aa×Aa, o quadro de Punnett fornece AA, Aa, Aa e aa: razão genotípica 1:2:1 e fenotípica 3:1 apenas se A for completamente dominante e não houver fatores adicionais. A segunda lei descreve distribuição independente de pares de alelos de genes não ligados, ou suficientemente afastados para recombinação aproximar independência. Para AaBb, gametas AB, Ab, aB e ab têm proporções iguais sob as hipóteses adequadas. Genes próximos no mesmo cromossomo podem apresentar ligação gênica, tornando inadequada a proporção 9:3:3:1. A avaliação avançada exige reconhecer o domínio de validade do modelo e os fatores que introduzem incerteza. Não se deve confundir correlação e causalidade, nem deduzir uma regra universal a partir de um caso particular. Um resultado calculado pode ser teoricamente correto sob hipóteses ideais e ainda diferir de medidas reais por perdas, variabilidade ou condições não controladas. Ao comparar interpretações concorrentes, verifique quais evidências sustentam cada uma e quais dados adicionais poderiam discriminá-las. A explicação precisa deixar claro o que é pressuposto, o que foi demonstrado e o que permanece condicionado. ecombinação aproximar independência. Para AaBb, gametas AB, Ab, aB e ab têm proporções iguais sob as hipóteses adequadas. Genes próximos no mesmo cromossomo podem apresentar ligação gênica, tornando inadequada a proporção 9:3:3:1.",
        "example": "Em AaBb×aabb com genes independentes, o primeiro genitor produz AB, Ab, aB e ab com 1/4 cada; o segundo produz apenas ab. Os descendentes AaBb, Aabb, aaBb e aabb ocorrem na razão 1:1:1:1. Se houver ligação gênica, essa igualdade pode deixar de valer.",
        "pitfall": "A proporção 9:3:3:1 não vale automaticamente para genes ligados, herança ligada ao sexo, epistasia ou dominância incompleta.",
        "steps": [
          "Explicite limites e exceções do modelo.",
          "Confronte uma inferência alternativa com os dados disponíveis.",
          "Indique a condição que tornaria a conclusão diferente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No cruzamento Aa×aa, qual é a chance de um descendente aa?",
        "options": [
          "0%",
          "25%",
          "75%",
          "50%"
        ],
        "correctIndex": 3,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "O genitor Aa produz gametas A e a em proporções iguais; o genitor aa fornece a, gerando metade aa. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Em Aa×Aa, sob dominância completa, a razão genotípica é:",
        "options": [
          "1:2:1",
          "3:1",
          "9:3:3:1",
          "1:1"
        ],
        "correctIndex": 0,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "O quadro de Punnett gera AA, Aa, Aa e aa: um homozigoto dominante, dois heterozigotos e um recessivo. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "A proporção fenotípica 9:3:3:1 exige principalmente:",
        "options": [
          "Genes obrigatoriamente ligados",
          "Segregação independente e dominância completa nos dois loci",
          "Ausência de meiose",
          "Um único gene com três alelos"
        ],
        "correctIndex": 1,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "O padrão clássico do diibridismo pressupõe dois loci com segregação independente, dominância completa e outras condições mendelianas simples. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Getúlio Vargas: do governo provisório ao Estado Novo",
    "objective": "Compreender e aplicar era vargas e autoritarismo com justificativa, condições de validade e análise de erros.",
    "prerequisites": [
      "Leitura de enunciados",
      "Raciocínio proporcional e interpretação de evidências",
      "Conhecimentos introdutórios da disciplina"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Era Vargas e autoritarismo",
        "explanation": "A Revolução de 1930 encerrou a Primeira República e levou Getúlio Vargas ao governo provisório, em contexto de disputas oligárquicas, crise econômica e contestação do arranjo político anterior. A centralização federal alterou relações com elites estaduais; interventores substituíram parte das lideranças regionais. A Revolução Constitucionalista de 1932, em São Paulo, reivindicou constitucionalização e envolveu também disputas políticas locais. A Constituição de 1934 instituiu novas regras, incluindo voto secreto e direitos trabalhistas, e Vargas foi eleito indiretamente pela Assembleia Constituinte. Em 1937, o golpe do Estado Novo fechou o Congresso, impôs nova Constituição autoritária e ampliou censura e repressão. A legislação trabalhista, consolidada na CLT em 1943, coexistiu com controle estatal de sindicatos e restrições à autonomia política. Portanto, políticas sociais não apagam o caráter ditatorial do regime.",
        "example": "Organize os marcos: 1930, governo provisório; 1932, movimento constitucionalista; 1934, Constituição e eleição indireta; 1937, golpe e Estado Novo; 1943, CLT. A sequência ajuda a distinguir reformas institucionais de ruptura autoritária.",
        "pitfall": "Confundir 1934 com eleição presidencial direta ou descrever todo o período 1930–1945 como democracia contínua produz cronologia falsa.",
        "steps": [
          "Identifique as grandezas e hipóteses do enunciado.",
          "Escolha o modelo ou conceito e justifique sua validade.",
          "Calcule ou interprete com unidades e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: decisões e relações",
        "explanation": "A Revolução de 1930 encerrou a Primeira República e levou Getúlio Vargas ao governo provisório, em contexto de disputas oligárquicas, crise econômica e contestação do arranjo político anterior. A centralização federal alterou relações com elites estaduais; interventores substituíram parte das lideranças regionais. A Revolução Constitucionalista de 1932, em São Paulo, reivindicou constitucionalização e envolveu também disputas políticas locais. A Constituição de 1934 instituiu novas regras, incluindo voto secreto e direitos trabalhistas, e Vargas foi eleito indiretamente pela Assembleia Constituinte. Em 1937, o golpe do Estado Novo fechou o Congresso, impôs nova Constituição autoritária e ampliou censura e repressão. A legislação trabalhista, consolidada na CLT em 1943, coexistiu com controle estatal de sindicatos e restrições à autonomia política. Portanto, políticas sociais não apagam o caráter ditatorial do regime. A aplicação exige comparar situações próximas que produzem resultados diferentes: um dado numérico isolado não basta para inferir mecanismo, e uma definição não substitui a análise de condições iniciais. Quando houver medida, converta unidades antes de operar e registre a interpretação física, química, biológica ou histórica. Considere se o resultado é uma previsão teórica, uma evidência observada ou uma explicação causal. Compare também o caso idealizado com o que ocorreria se a hipótese central deixasse de valer. Em problemas contextualizados, leia todas as restrições e não transfira automaticamente uma proporção ou uma relação de outro sistema. A Revolução de 1930 encerrou a Primeira República e levou Getúlio Vargas ao governo provisório, em contexto de disputas oligárquicas, crise econômica e contestação do arranjo político anterior. A centralização federal al",
        "example": "Compare 1934 e 1937: a Constituição de 1934 resultou de processo constituinte e estabeleceu regras para o período constitucional; em 1937 Vargas executou um golpe, dissolveu o Congresso e impôs uma nova carta. A mudança não é mera reforma eleitoral: representa ruptura da ordem constitucional.",
        "pitfall": "Confundir 1934 com eleição presidencial direta ou descrever todo o período 1930–1945 como democracia contínua produz cronologia falsa.",
        "steps": [
          "Leia o problema e separe dados de hipóteses.",
          "Desenvolva a aplicação com uma sequência explícita de inferências.",
          "Teste se a conclusão permanece válida quando muda uma condição."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: limites, evidências e exceções",
        "explanation": "A Revolução de 1930 encerrou a Primeira República e levou Getúlio Vargas ao governo provisório, em contexto de disputas oligárquicas, crise econômica e contestação do arranjo político anterior. A centralização federal alterou relações com elites estaduais; interventores substituíram parte das lideranças regionais. A Revolução Constitucionalista de 1932, em São Paulo, reivindicou constitucionalização e envolveu também disputas políticas locais. A Constituição de 1934 instituiu novas regras, incluindo voto secreto e direitos trabalhistas, e Vargas foi eleito indiretamente pela Assembleia Constituinte. Em 1937, o golpe do Estado Novo fechou o Congresso, impôs nova Constituição autoritária e ampliou censura e repressão. A legislação trabalhista, consolidada na CLT em 1943, coexistiu com controle estatal de sindicatos e restrições à autonomia política. Portanto, políticas sociais não apagam o caráter ditatorial do regime. A avaliação avançada exige reconhecer o domínio de validade do modelo e os fatores que introduzem incerteza. Não se deve confundir correlação e causalidade, nem deduzir uma regra universal a partir de um caso particular. Um resultado calculado pode ser teoricamente correto sob hipóteses ideais e ainda diferir de medidas reais por perdas, variabilidade ou condições não controladas. Ao comparar interpretações concorrentes, verifique quais evidências sustentam cada uma e quais dados adicionais poderiam discriminá-las. A explicação precisa deixar claro o que é pressuposto, o que foi demonstrado e o que permanece condicionado. liou censura e repressão. A legislação trabalhista, consolidada na CLT em 1943, coexistiu com controle estatal de sindicatos e restrições à autonomia política. Portanto, políticas sociais não apagam o caráter ditatorial do regime.",
        "example": "Uma manchete diz: 'A CLT de 1943 prova que o Estado Novo era democrático'. Teste a inferência: a CLT reuniu normas trabalhistas, mas o regime censurava a imprensa, reprimia opositores e controlava sindicatos. A existência de legislação social não demonstra pluralismo político nem eleições livres.",
        "pitfall": "Confundir 1934 com eleição presidencial direta ou descrever todo o período 1930–1945 como democracia contínua produz cronologia falsa.",
        "steps": [
          "Explicite limites e exceções do modelo.",
          "Confronte uma inferência alternativa com os dados disponíveis.",
          "Indique a condição que tornaria a conclusão diferente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual evento marca o início do Estado Novo?",
        "options": [
          "Revolução de 1930",
          "Constituição de 1934",
          "Golpe de 1937",
          "Promulgação da CLT em 1943"
        ],
        "correctIndex": 2,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "O Estado Novo começou com o golpe de 1937, fechamento do Congresso e instauração de regime autoritário. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "A Constituição de 1934 foi seguida por:",
        "options": [
          "Eleição presidencial direta de Vargas",
          "Fim imediato da legislação trabalhista",
          "Golpe militar de 1964",
          "Eleição indireta de Vargas pela Constituinte"
        ],
        "correctIndex": 3,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "Após a Constituição de 1934, Vargas foi eleito indiretamente pela Assembleia Constituinte; não houve eleição presidencial direta nesse momento. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Qual interpretação é historicamente adequada sobre o Estado Novo?",
        "options": [
          "Legislação trabalhista coexistiu com censura, repressão e controle sindical",
          "A CLT extinguiu o autoritarismo",
          "O Congresso permaneceu livremente funcionando",
          "Não houve centralização do poder federal"
        ],
        "correctIndex": 0,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "O Estado Novo combinou consolidação de direitos trabalhistas com regime ditatorial, censura, repressão e tutela estatal sobre sindicatos. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Solubilidade e concentrações (porcentagem, ppm, g/L, mol/L",
    "objective": "Compreender e aplicar concentração e solubilidade com justificativa, condições de validade e análise de erros.",
    "prerequisites": [
      "Leitura de enunciados",
      "Raciocínio proporcional e interpretação de evidências",
      "Conhecimentos introdutórios da disciplina"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Concentração e solubilidade",
        "explanation": "Concentração expressa a quantidade de soluto por quantidade de solução ou solvente, conforme a grandeza. A concentração comum C=m_soluto/V_solução é expressa em g/L; molaridade c=n_soluto/V_solução em mol/L. Fração mássica é m_soluto/m_solução, e porcentagem em massa multiplica essa razão por 100. Ppm em massa corresponde a uma parte de soluto por milhão de partes de solução, frequentemente mg/kg em soluções diluídas; mg/L só aproxima ppm quando a densidade da solução é próxima de 1 kg/L. Solubilidade é o limite de dissolução em condições específicas de temperatura, pressão e natureza das substâncias, não sinônimo de concentração. Uma solução insaturada está abaixo do limite; saturada está no equilíbrio de solubilidade; supersaturada pode ser metastável. Dissolver mais sólido que o limite não significa necessariamente maior concentração dissolvida.",
        "example": "Dissolva 5,85 g de NaCl (M=58,5 g/mol) e complete a solução até 0,500 L: n=0,100 mol e c=0,100/0,500=0,200 mol/L; C=5,85/0,500=11,7 g/L. O volume final é o da solução, não o volume de água inicialmente medido.",
        "pitfall": "Não use massa do solvente como massa da solução em porcentagem m/m, nem trate ppm como mg/L sem verificar a densidade.",
        "steps": [
          "Identifique as grandezas e hipóteses do enunciado.",
          "Escolha o modelo ou conceito e justifique sua validade.",
          "Calcule ou interprete com unidades e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: decisões e relações",
        "explanation": "Concentração expressa a quantidade de soluto por quantidade de solução ou solvente, conforme a grandeza. A concentração comum C=m_soluto/V_solução é expressa em g/L; molaridade c=n_soluto/V_solução em mol/L. Fração mássica é m_soluto/m_solução, e porcentagem em massa multiplica essa razão por 100. Ppm em massa corresponde a uma parte de soluto por milhão de partes de solução, frequentemente mg/kg em soluções diluídas; mg/L só aproxima ppm quando a densidade da solução é próxima de 1 kg/L. Solubilidade é o limite de dissolução em condições específicas de temperatura, pressão e natureza das substâncias, não sinônimo de concentração. Uma solução insaturada está abaixo do limite; saturada está no equilíbrio de solubilidade; supersaturada pode ser metastável. Dissolver mais sólido que o limite não significa necessariamente maior concentração dissolvida. A aplicação exige comparar situações próximas que produzem resultados diferentes: um dado numérico isolado não basta para inferir mecanismo, e uma definição não substitui a análise de condições iniciais. Quando houver medida, converta unidades antes de operar e registre a interpretação física, química, biológica ou histórica. Considere se o resultado é uma previsão teórica, uma evidência observada ou uma explicação causal. Compare também o caso idealizado com o que ocorreria se a hipótese central deixasse de valer. Em problemas contextualizados, leia todas as restrições e não transfira automaticamente uma proporção ou uma relação de outro sistema. Concentração expressa a quantidade de soluto por quantidade de solução ou solvente, conforme a grandeza. A concentração comum C=m_soluto/V_solução é expressa em g/L; molaridade c=n_soluto/V_solução em mol/L. Fração mássi",
        "example": "Uma solução contém 20 g de soluto em 250 mL de solução. Converta 250 mL para 0,250 L e calcule C=20/0,250=80 g/L. Se forem retirados 50 mL de solução homogênea, essa alíquota contém 80×0,050=4 g de soluto, supondo ausência de reação ou precipitação.",
        "pitfall": "Não use massa do solvente como massa da solução em porcentagem m/m, nem trate ppm como mg/L sem verificar a densidade.",
        "steps": [
          "Leia o problema e separe dados de hipóteses.",
          "Desenvolva a aplicação com uma sequência explícita de inferências.",
          "Teste se a conclusão permanece válida quando muda uma condição."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: limites, evidências e exceções",
        "explanation": "Concentração expressa a quantidade de soluto por quantidade de solução ou solvente, conforme a grandeza. A concentração comum C=m_soluto/V_solução é expressa em g/L; molaridade c=n_soluto/V_solução em mol/L. Fração mássica é m_soluto/m_solução, e porcentagem em massa multiplica essa razão por 100. Ppm em massa corresponde a uma parte de soluto por milhão de partes de solução, frequentemente mg/kg em soluções diluídas; mg/L só aproxima ppm quando a densidade da solução é próxima de 1 kg/L. Solubilidade é o limite de dissolução em condições específicas de temperatura, pressão e natureza das substâncias, não sinônimo de concentração. Uma solução insaturada está abaixo do limite; saturada está no equilíbrio de solubilidade; supersaturada pode ser metastável. Dissolver mais sólido que o limite não significa necessariamente maior concentração dissolvida. A avaliação avançada exige reconhecer o domínio de validade do modelo e os fatores que introduzem incerteza. Não se deve confundir correlação e causalidade, nem deduzir uma regra universal a partir de um caso particular. Um resultado calculado pode ser teoricamente correto sob hipóteses ideais e ainda diferir de medidas reais por perdas, variabilidade ou condições não controladas. Ao comparar interpretações concorrentes, verifique quais evidências sustentam cada uma e quais dados adicionais poderiam discriminá-las. A explicação precisa deixar claro o que é pressuposto, o que foi demonstrado e o que permanece condicionado. ntração. Uma solução insaturada está abaixo do limite; saturada está no equilíbrio de solubilidade; supersaturada pode ser metastável. Dissolver mais sólido que o limite não significa necessariamente maior concentração dissolvida.",
        "example": "Uma solução aquosa diluída tem 3 mg de soluto por litro e densidade aproximada de 1 kg/L. Assim 1 L de solução tem massa de cerca de 1 kg, e 3 mg/L ≈3 mg/kg=3 ppm em massa. Se a densidade for muito diferente, é necessário converter usando a massa real da solução.",
        "pitfall": "Não use massa do solvente como massa da solução em porcentagem m/m, nem trate ppm como mg/L sem verificar a densidade.",
        "steps": [
          "Explicite limites e exceções do modelo.",
          "Confronte uma inferência alternativa com os dados disponíveis.",
          "Indique a condição que tornaria a conclusão diferente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma solução contém 10 g de soluto em volume final de 2 L. Sua concentração comum é:",
        "options": [
          "20 g/L",
          "5 g/L",
          "0,2 g/L",
          "12 g/L"
        ],
        "correctIndex": 1,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "C=m/V=10/2=5 g/L. O denominador é o volume final da solução, não necessariamente do solvente. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "5,85 g de NaCl (58,5 g/mol) em 0,5 L de solução correspondem a:",
        "options": [
          "0,10 mol/L",
          "1,0 mol/L",
          "0,20 mol/L",
          "2,0 mol/L"
        ],
        "correctIndex": 2,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "n=5,85/58,5=0,10 mol; c=n/V=0,10/0,50=0,20 mol/L. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Em que condição 1 mg/L é aproximadamente igual a 1 ppm em massa?",
        "options": [
          "Sempre, para qualquer líquido",
          "Somente se o soluto for sólido",
          "Somente se a temperatura for 0 °C",
          "Quando a densidade da solução é próxima de 1 kg/L"
        ],
        "correctIndex": 3,
        "hint": "Identifique as hipóteses e compare as alternativas antes de decidir.",
        "solution": "Um litro pesa aproximadamente um quilograma apenas quando a densidade está perto de 1 kg/L; assim mg/L aproxima mg/kg, equivalente a ppm em massa. As demais opções não respeitam a definição, o cálculo ou a cronologia estabelecida no enunciado."
      }
    ]
  }
];
