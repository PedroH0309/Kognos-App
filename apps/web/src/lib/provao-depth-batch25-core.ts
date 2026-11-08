import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral Kognos, não oficial; sem homologação docente. */
export const provaoDepthBatch25Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Estado físico e propriedades dos materiais",
    "objective": "Compreender e aplicar criticamente estado físico e propriedades dos materiais, interpretando evidências, construindo representações, resolvendo situações quantitativas ou qualitativas e explicitando hipóteses e limites de cada modelo.",
    "prerequisites": [
      "Modelo particulado da matéria",
      "Temperatura e energia cinética",
      "Massa, volume e densidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: estados e propriedades",
        "explanation": "Sólidos, líquidos e gases diferem principalmente pela mobilidade e organização de suas partículas, não pela existência de partículas diferentes em cada estado. Em um sólido cristalino, as unidades ocupam posições médias relativamente fixas e vibram; num líquido, permanecem próximas, mas se rearranjam; num gás, encontram-se muito mais afastadas e se deslocam pelo recipiente. Uma mesma substância, como água pura, pode aparecer nos três estados. Densidade é a razão entre massa e volume, ρ=m/V; ela não equivale ao peso nem determina isoladamente o estado físico. Temperatura caracteriza o estado térmico e se relaciona à agitação microscópica, enquanto calor é energia transferida devido a diferença de temperatura. Fusão e ebulição dependem da pressão e da composição: água pura ferve aproximadamente a 100 °C sob pressão de 1 atm, não em qualquer altitude. Substâncias puras frequentemente exibem patamares de temperatura durante mudanças de fase a pressão constante; misturas podem apresentar intervalos. O modelo particulado explica expansão e compressibilidade sem sugerir que as moléculas cresçam quando aquecidas.",
        "example": "Um bloco de 270 g ocupa 100 cm³. Primeiro identifique massa e volume; em seguida calcule ρ=270/100=2,70 g/cm³; por fim converta, se necessário, para 2700 kg/m³. A razão descreve a amostra na temperatura medida, não sua composição química por si só.",
        "pitfall": "Não confundir propriedades observáveis com explicações microscópicas e condições de medida.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: aquecimento e curvas de fase",
        "explanation": "Uma curva de aquecimento relaciona energia fornecida, temperatura e mudanças de fase. Antes da fusão, aquecer um sólido aumenta sua temperatura conforme Q=m c ΔT, se o calor específico puder ser tratado como constante. Durante a fusão de uma substância pura sob pressão constante, a energia Q=m L_f é usada para vencer parte das interações responsáveis pela estrutura sólida; a temperatura fica aproximadamente constante enquanto coexistem fases. Após a fusão, o líquido volta a aquecer. Na vaporização, Q=m L_v corresponde à mudança de fase e não deve ser somado como se fosse aumento de temperatura. A quantidade de energia depende da massa, do calor específico e do calor latente, grandezas distintas. A pressão altera os pontos de transição e a presença de impurezas pode modificar a forma da curva. A evaporação ocorre na superfície mesmo abaixo da ebulição; ebulição envolve formação de bolhas de vapor no interior do líquido. Em problemas reais, perdas de energia para o ambiente precisam ser consideradas, e não se pode inferir que toda energia elétrica se converteu em calor da amostra.",
        "example": "Para fundir 50 g de gelo já a 0 °C, use L_f≈334 J/g. Passo 1: identifique que não há aquecimento prévio; passo 2: calcule Q=50×334=16 700 J; passo 3: observe que a temperatura permanece próxima de 0 °C durante a fusão ideal a 1 atm.",
        "pitfall": "Não substituir análise de unidades e hipóteses por fórmulas memorizadas.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: pressão, gases e anomalias",
        "explanation": "No modelo ideal, um gás obedece PV=nRT, desde que sua densidade seja baixa e interações intermoleculares sejam desprezíveis na aproximação. Se a quantidade de gás e a temperatura absoluta permanecerem constantes, duplicar a pressão reduz o volume à metade. Essa relação não vale literalmente para líquidos, cujos volumes variam muito menos sob compressão. A densidade de um material também pode mudar com temperatura e pressão; por isso tabelas devem informar condições de medida. A água apresenta uma particularidade importante: o gelo comum é menos denso que a água líquida próxima de 4 °C, porque a rede cristalina forma estrutura mais aberta. Não se deve extrapolar a regra de que sólidos sempre afundam em seus líquidos. Diagramas de fase permitem localizar regiões de estabilidade de sólido, líquido e vapor e pontos em que coexistem fases; o ponto triplo não é sinônimo de ponto de ebulição. O ponto crítico encerra a fronteira líquido-vapor, mas não torna todos os fluidos iguais. A validade de PV=nRT e de modelos de fase deve ser explicitada antes de usar números experimentais.",
        "example": "Uma seringa contém 60 mL de ar a 1 atm e temperatura constante. Comprima lentamente até 2 atm: P1V1=P2V2; V2=(1×60)/2=30 mL. A conclusão supõe gás aproximadamente ideal, ausência de vazamentos e temperatura constante.",
        "pitfall": "Não extrapolar resultados idealizados sem examinar condições e limitações.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual propriedade corresponde à razão entre massa e volume?",
        "options": [
          "Calor específico",
          "Densidade",
          "Temperatura",
          "Ponto de fusão"
        ],
        "correctIndex": 1,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Densidade é ρ=m/V. Calor específico relaciona energia, massa e variação de temperatura; temperatura caracteriza o estado térmico; ponto de fusão descreve uma transição sob condições definidas."
      },
      {
        "level": "intermediate",
        "prompt": "Quanto calor ideal é necessário para fundir 50 g de gelo a 0 °C se Lf=334 J/g?",
        "options": [
          "334 J",
          "6 680 J",
          "16 700 J",
          "33 400 J"
        ],
        "correctIndex": 2,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "A mudança de fase requer Q=mLf=50 g×334 J/g=16 700 J. Não se usa Q=mcΔT porque o gelo já está na temperatura de fusão e a etapa ideal não eleva sua temperatura."
      },
      {
        "level": "advanced",
        "prompt": "A temperatura constante, um gás ideal passa de 1 atm e 60 mL para 2 atm. Qual o novo volume?",
        "options": [
          "15 mL",
          "30 mL",
          "60 mL",
          "120 mL"
        ],
        "correctIndex": 1,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Pela lei de Boyle, P1V1=P2V2; V2=1×60/2=30 mL. Essa conclusão depende de temperatura e quantidade de gás constantes e da adequação do modelo ideal."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Fórmulas químicas: fórmula mínima, fórmula centesimal, fórmula molecular",
    "objective": "Compreender e aplicar criticamente fórmulas químicas: fórmula mínima, fórmula centesimal, fórmula molecular, interpretando evidências, construindo representações, resolvendo situações quantitativas ou qualitativas e explicitando hipóteses e limites de cada modelo.",
    "prerequisites": [
      "Massa molar e mol",
      "Proporções entre números inteiros",
      "Símbolos e índices químicos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: três representações de composição",
        "explanation": "A fórmula molecular registra o número efetivo de átomos de cada elemento em uma molécula, como C₆H₁₂O₆ para a glicose. A fórmula mínima, ou empírica, registra a menor proporção inteira entre os elementos: CH₂O para a mesma substância. A fórmula centesimal expressa a participação percentual em massa de cada elemento e não informa diretamente a conectividade dos átomos. Uma substância pode compartilhar fórmula mínima com outras moléculas de massas molares diferentes. Para obter porcentagens em massa, multiplique a quantidade de átomos pela massa atômica de cada elemento, some para encontrar a massa molar e divida a contribuição de cada elemento pelo total. A proporção em massa não coincide necessariamente com a proporção em número de átomos: oxigênio contribui mais massa por átomo que hidrogênio. Fórmulas moleculares são apropriadas para entidades moleculares discretas; compostos iônicos são representados por fórmulas unitárias que expressam razões de íons, não moléculas isoladas. Resultados dependem de massas atômicas aproximadas e de arredondamentos, que devem ser informados.",
        "example": "Para H₂O, considere H=1 e O=16 g/mol. Passo 1: calcule M=2×1+16=18 g/mol; passo 2: %H=(2/18)×100≈11,1%; passo 3: %O=(16/18)×100≈88,9%. A soma é aproximadamente 100%.",
        "pitfall": "Não confundir propriedades observáveis com explicações microscópicas e condições de medida.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: composição percentual para fórmula mínima",
        "explanation": "Uma análise elementar fornece massas relativas ou percentuais. Para inferir fórmula mínima, suponha uma amostra de 100 g: cada porcentagem vira numericamente uma massa em gramas. Divida cada massa pela massa molar atômica correspondente para obter quantidades de matéria. Em seguida, divida todos os valores pelo menor número de mols; se surgir uma fração simples, multiplique toda a proporção pelo mesmo inteiro para obter índices inteiros. É incorreto arredondar arbitrariamente 1,5 para 2 sem avaliar a razão real e a precisão da medida. Impurezas, elementos não detectados e percentuais arredondados podem tornar a inferência ambígua. A fórmula mínima determina somente uma razão; não distingue isômeros e não permite, sozinha, identificar uma substância. Também não se deve trocar índices de uma fórmula por coeficientes de reação: índices fazem parte da identidade representada, enquanto coeficientes indicam quantidades relativas de entidades. A validade do procedimento exige que a composição percentual inclua todos os elementos considerados e que as massas estejam em base comparável.",
        "example": "Uma amostra contém 40,0% C, 6,7% H e 53,3% O. Em 100 g: n(C)=40/12≈3,33; n(H)=6,7/1≈6,7; n(O)=53,3/16≈3,33. Divida pelo menor: 1:2:1. A fórmula mínima aproximada é CH₂O.",
        "pitfall": "Não substituir análise de unidades e hipóteses por fórmulas memorizadas.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: fórmula molecular e massa molar",
        "explanation": "A fórmula molecular é um múltiplo inteiro da fórmula mínima quando se trata de moléculas discretas. Calcule primeiro a massa da unidade empírica; depois divida a massa molar molecular medida pela massa da fórmula mínima. O quociente deve ser aproximadamente um inteiro positivo, respeitando a incerteza experimental. Para CH₂O, a massa empírica é 12+2+16=30 g/mol. Se a massa molar da molécula for 180 g/mol, o fator é 180/30=6 e a fórmula molecular é C₆H₁₂O₆. Se o quociente não for próximo de inteiro, reavalie dados, pureza, unidade e hipóteses. Mesmo uma fórmula molecular correta não revela a estrutura tridimensional ou os grupos funcionais: glicose e frutose compartilham C₆H₁₂O₆ e apresentam propriedades diferentes. Em compostos iônicos, falar de massa de uma molécula de NaCl induz erro; utiliza-se massa molar da unidade de fórmula. A representação química precisa corresponder ao tipo de espécie, ao objetivo analítico e à escala da observação.",
        "example": "Dada fórmula mínima CH₂O e massa molar 60 g/mol: massa mínima=30 g/mol; fator=60/30=2; multiplique todos os índices por 2 e obtenha C₂H₄O₂. A fórmula não determina se a substância é ácido acético ou outro isômero.",
        "pitfall": "Não extrapolar resultados idealizados sem examinar condições e limitações.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a fórmula mínima de C₆H₁₂O₆?",
        "options": [
          "C₆H₁₂O₆",
          "CH₂O",
          "C₂H₆O",
          "CHO₂"
        ],
        "correctIndex": 1,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Divida os índices 6,12,6 pelo máximo divisor comum 6: a razão mínima é C:H:O=1:2:1, portanto CH₂O. A fórmula mínima não indica quantos grupos CH₂O compõem cada molécula."
      },
      {
        "level": "intermediate",
        "prompt": "Uma substância tem 40% C, 6,7% H e 53,3% O. Qual fórmula mínima aproximada?",
        "options": [
          "CO₂",
          "C₂H₂O",
          "CH₂O",
          "CH₄O"
        ],
        "correctIndex": 2,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Em 100 g, n(C)=40/12≈3,33; n(H)=6,7/1≈6,7; n(O)=53,3/16≈3,33. Dividindo por 3,33, resulta aproximadamente 1:2:1, ou CH₂O."
      },
      {
        "level": "advanced",
        "prompt": "Uma molécula tem fórmula mínima CH₂O (30 g/mol) e massa molar 180 g/mol. Qual é a fórmula molecular?",
        "options": [
          "CH₂O",
          "C₂H₄O₂",
          "C₃H₆O₃",
          "C₆H₁₂O₆"
        ],
        "correctIndex": 3,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "O fator entre massa molar molecular e massa da fórmula mínima é 180/30=6. Multiplique todos os índices de CH₂O por 6: C₆H₁₂O₆. Isso não identifica um isômero específico."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Segurança na aquisição, armazenagem e utilização de produtos químicos domésticos",
    "objective": "Compreender e aplicar criticamente segurança na aquisição, armazenagem e utilização de produtos químicos domésticos, interpretando evidências, construindo representações, resolvendo situações quantitativas ou qualitativas e explicitando hipóteses e limites de cada modelo.",
    "prerequisites": [
      "Leitura de rótulos e pictogramas",
      "Misturas e reações químicas",
      "Concentração e exposição"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: perigo, exposição e rótulos",
        "explanation": "Perigo é a capacidade intrínseca de um produto provocar dano; risco depende também de dose, via de exposição, duração e condições de uso. Um desinfetante pode ser eficaz quando utilizado conforme o rótulo, mas inadequado se aplicado em ambiente sem ventilação ou em concentração diferente da indicada. Rótulos e fichas de dados de segurança identificam ingredientes relevantes, advertências, incompatibilidades, primeiros socorros e descarte. Pictogramas de corrosivo, inflamável ou irritante comunicam categorias de perigo, não uma previsão de que todo contato causará o mesmo efeito. Produtos de limpeza não devem ser transferidos para garrafas de bebida nem armazenados sem identificação. Crianças e animais não devem ter acesso a recipientes; guardar em embalagem original, fechada e longe de alimentos reduz confusão e contaminação. O fato de um produto ser vendido livremente ou ter origem natural não garante inocuidade. O uso responsável envolve seguir a diluição expressamente indicada pelo fabricante e nunca improvisar combinações de substâncias. O foco é prevenção e reconhecimento de sinais de exposição, não experimentação doméstica de reações.",
        "example": "Uma embalagem indica 'usar 10 mL por litro de água'. Para preparar 2 L segundo essa instrução, multiplique 10×2=20 mL do produto, usando recipiente adequado. A conta só se aplica a esse rótulo específico; não é recomendação universal de diluição.",
        "pitfall": "Não confundir propriedades observáveis com explicações microscópicas e condições de medida.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: incompatibilidades e ventilação",
        "explanation": "Hipoclorito de sódio presente em algumas águas sanitárias pode reagir perigosamente com produtos ácidos, liberando gases tóxicos; misturas com amônia também podem produzir vapores nocivos. Portanto, nunca combine água sanitária com limpadores de vaso sanitário, desincrustantes, amoníaco ou outros produtos. Mesmo dois produtos vendidos como 'limpeza' podem ter composições incompatíveis. Fragrância agradável não é indicador de ausência de substâncias irritantes. Ventilação, proteção de pele quando indicada, manutenção da embalagem original e respeito ao tempo de contato descrito no rótulo são medidas distintas e complementares. Para escolher um produto, identifique finalidade, superfície, instruções e advertências; uma concentração maior não significa automaticamente maior eficácia e pode danificar superfícies. Se ocorrer exposição a vapores, afaste-se da fonte e procure orientação de serviços de emergência ou centro de intoxicações; não tente neutralizar misturas adicionando outros reagentes. O princípio químico é que reatividade depende da identidade das espécies e do meio, não apenas da marca comercial ou da cor do líquido.",
        "example": "Ao comparar dois frascos, um de água sanitária e outro de limpador ácido, identifique as classes de substâncias pelo rótulo; reconheça a incompatibilidade; mantenha usos separados sem mistura. Não execute reação para testar o aviso: o procedimento seguro é evitar a exposição.",
        "pitfall": "Não substituir análise de unidades e hipóteses por fórmulas memorizadas.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: descarte, dose e avaliação de risco",
        "explanation": "A avaliação de risco doméstico combina perigo do produto, concentração, quantidade utilizada, frequência, ventilação e vulnerabilidade das pessoas expostas. Uma mesma substância pode apresentar efeitos diferentes por ingestão, contato com pele ou inalação, de modo que recomendações de primeiros socorros devem seguir o rótulo e orientações oficiais, sem tratamentos improvisados. Resíduos de tintas, solventes, pilhas, medicamentos e certos pesticidas não devem ser despejados indiscriminadamente na rede de esgoto: o destino adequado depende da categoria e da coleta disponível no município. Embalagens contaminadas não devem ser reutilizadas para armazenar água ou alimentos. Diluir um resíduo não elimina sua massa nem torna automaticamente permitido seu descarte; apenas altera sua concentração. Em análise quantitativa, concentração C=m/V descreve massa de soluto por volume, mas não substitui avaliação toxicológica ou limite regulatório. A comunicação científica deve separar perigo, probabilidade de exposição e medidas de controle; expressões como '100% seguro' ignoram contextos e podem estimular uso inadequado.",
        "example": "Uma solução contém 5 g de substância em 500 mL: C=5/0,5=10 g/L. Se apenas se adiciona água até 1 L, C=5/1=5 g/L, mas a massa total de substância continua 5 g. Diluição não é neutralização nem autorização de descarte.",
        "pitfall": "Não extrapolar resultados idealizados sem examinar condições e limitações.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual conduta reduz o risco de ingestão acidental de produto de limpeza?",
        "options": [
          "Transferi-lo para garrafa de refrigerante",
          "Armazená-lo na embalagem original identificada e fora do alcance de crianças",
          "Retirar o rótulo após a compra",
          "Misturá-lo com outro produto para reduzir o cheiro"
        ],
        "correctIndex": 1,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "A embalagem original e o rótulo preservam identificação, advertências e instruções; manter fora do alcance de crianças reduz exposição acidental. Transferência, perda do rótulo e misturas aumentam o risco."
      },
      {
        "level": "intermediate",
        "prompt": "Por que não se deve misturar água sanitária e limpadores ácidos?",
        "options": [
          "Porque toda mistura neutraliza os dois produtos",
          "Porque sempre se forma apenas água",
          "Porque podem ser liberados gases tóxicos",
          "Porque o hipoclorito vira açúcar"
        ],
        "correctIndex": 2,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Produtos com hipoclorito podem reagir com ácidos e liberar gases perigosos. Não se deve tentar confirmar isso experimentalmente; a conduta correta é manter os produtos separados e seguir os rótulos."
      },
      {
        "level": "advanced",
        "prompt": "Uma solução contém 5 g de soluto em 0,5 L. Ao diluir para 1 L, sem perder soluto, o que ocorre?",
        "options": [
          "A concentração cai de 10 para 5 g/L e a massa permanece 5 g",
          "A massa cai de 5 para 2,5 g",
          "A concentração permanece 10 g/L",
          "O soluto é necessariamente neutralizado"
        ],
        "correctIndex": 0,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Inicialmente C=5/0,5=10 g/L. Após adicionar solvente até 1 L, C=5/1=5 g/L, enquanto a massa de soluto permanece 5 g. Diluição não é reação de neutralização."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Óxidos e a chuva ácida",
    "objective": "Compreender e aplicar criticamente óxidos e a chuva ácida, interpretando evidências, construindo representações, resolvendo situações quantitativas ou qualitativas e explicitando hipóteses e limites de cada modelo.",
    "prerequisites": [
      "Óxidos e reações com água",
      "Escala de pH",
      "Combustão e emissões atmosféricas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: formação e química da deposição ácida",
        "explanation": "Chuva naturalmente apresenta alguma acidez porque dióxido de carbono dissolvido forma pequenas quantidades de ácido carbônico; isso não significa automaticamente poluição. A deposição ácida intensificada está associada sobretudo a emissões de dióxido de enxofre (SO₂) e óxidos de nitrogênio (NOₓ), provenientes de processos industriais, geração de energia e combustão em veículos. Na atmosfera, essas espécies podem sofrer oxidação e reagir com água, formando ácidos como sulfúrico e nítrico. Uma representação simplificada é SO₃ + H₂O → H₂SO₄, mas ela não descreve todas as etapas atmosféricas. A expressão 'chuva ácida' abrange deposição úmida e deve ser distinguida de deposição seca de gases e partículas. Nem todo óxido reage do mesmo modo: CO não é classificado como óxido ácido típico nas condições usuais. É inadequado atribuir a chuva ácida apenas ao CO₂ ou confundi-la com o aquecimento global, embora processos de combustão possam contribuir para ambos por mecanismos distintos. A química exige identificar reagentes, produtos, fontes de emissão e escalas de transporte atmosférico.",
        "example": "Na reação simplificada SO₃ + H₂O → H₂SO₄, conte S=1, H=2 e O=4 em ambos os lados. Identifique o óxido ácido, a água e o ácido produzido; a equação balanceada é um modelo de etapa, não a descrição completa da atmosfera.",
        "pitfall": "Não confundir propriedades observáveis com explicações microscópicas e condições de medida.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: impactos e interpretação de pH",
        "explanation": "A escala de pH é logarítmica: pH=−log₁₀ a(H⁺), com aproximação escolar [H⁺] para soluções diluídas. Reduzir o pH de 5 para 4 corresponde aproximadamente a multiplicar por dez a atividade de íons hidrogênio, não a um aumento de apenas 20% na acidez. A deposição ácida pode acidificar lagos e solos, mobilizar certos metais e afetar organismos aquáticos e vegetação. Rochas carbonáticas e argamassas podem reagir com ácidos, favorecendo desgaste de monumentos. A magnitude do impacto depende da capacidade de tamponamento do solo e da água, da frequência de deposição e das características do ecossistema; não é igual em todas as regiões. Em interpretação de dados, distinga medição de pH da atribuição causal: uma única amostra ácida não identifica qual fonte emitiu os poluentes. Comparações precisam considerar local, época, método de coleta e possíveis interferências. Uma solução de pH menor não implica, isoladamente, maior volume de chuva ou maior massa total de ácido depositada.",
        "example": "Duas amostras apresentam pH 5 e pH 4. Passo 1: calcule diferença de uma unidade; passo 2: use a escala logarítmica 10¹; passo 3: conclua que a segunda tem atividade de H⁺ aproximadamente dez vezes maior, sob a aproximação de solução diluída.",
        "pitfall": "Não substituir análise de unidades e hipóteses por fórmulas memorizadas.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: controle de emissões e limites",
        "explanation": "Reduzir chuva ácida exige atuar sobre precursores, não apenas tratar consequências após a precipitação. Dessulfurização de gases de combustão pode capturar SO₂; combustíveis com menor teor de enxofre diminuem uma fonte importante. Sistemas catalíticos e controle da combustão podem reduzir emissões de NOₓ, mas desempenho depende do processo e da manutenção. O uso de calcário para neutralizar corpos d'água acidificados pode elevar o pH localmente, sem eliminar as fontes atmosféricas de poluentes. Uma neutralização idealizada é CaCO₃ + 2H⁺ → Ca²⁺ + CO₂ + H₂O; essa equação ajuda a calcular capacidade estequiométrica, mas não incorpora toda a química de solos e lagos. Avaliar políticas públicas requer medir emissões, deposição e resposta ecológica ao longo do tempo. A concentração de poluente no ar não é idêntica à massa depositada em uma bacia hidrográfica. Modelos atmosféricos precisam de meteorologia e transporte, pois emissões podem produzir efeitos distantes de suas fontes. Soluções técnicas devem explicitar custo, eficiência e condições de operação.",
        "example": "Considere 0,10 mol de H⁺ em um modelo de neutralização com CaCO₃. A proporção é 2 mol H⁺ para 1 mol CaCO₃; logo são necessários 0,050 mol de carbonato. Com M≈100 g/mol, massa ideal≈5,0 g, desconsiderando impurezas e reações paralelas.",
        "pitfall": "Não extrapolar resultados idealizados sem examinar condições e limitações.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quais emissões estão mais diretamente associadas à intensificação da deposição ácida?",
        "options": [
          "SO₂ e NOₓ",
          "Apenas O₂ e N₂",
          "Somente vapor de água",
          "Apenas argônio"
        ],
        "correctIndex": 0,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "SO₂ e óxidos de nitrogênio podem ser transformados na atmosfera em espécies ácidas. O₂, N₂, vapor de água e argônio não explicam isoladamente a deposição ácida antropogênica."
      },
      {
        "level": "intermediate",
        "prompt": "Uma amostra de chuva tem pH 4 e outra pH 5. Aproximadamente qual a razão de atividade de H⁺?",
        "options": [
          "A amostra pH 5 tem dez vezes mais",
          "As atividades são iguais",
          "A amostra pH 4 tem dez vezes mais",
          "A amostra pH 4 tem duas vezes mais"
        ],
        "correctIndex": 2,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Como pH é logarítmico, uma unidade de diferença corresponde a fator dez na atividade de H⁺. Portanto a amostra pH 4 é aproximadamente dez vezes mais ácida nesse critério."
      },
      {
        "level": "advanced",
        "prompt": "Na reação CaCO₃ + 2H⁺ → Ca²⁺ + CO₂ + H₂O, quantos mols de CaCO₃ neutralizam idealmente 0,10 mol de H⁺?",
        "options": [
          "0,20 mol",
          "0,10 mol",
          "0,005 mol",
          "0,050 mol"
        ],
        "correctIndex": 3,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "A estequiometria exige 1 mol de CaCO₃ para cada 2 mol de H⁺. Divida 0,10 por 2: 0,050 mol. O valor é teórico e não representa automaticamente a dose adequada em ambiente natural."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Tratamento de água",
    "objective": "Compreender e aplicar criticamente tratamento de água, interpretando evidências, construindo representações, resolvendo situações quantitativas ou qualitativas e explicitando hipóteses e limites de cada modelo.",
    "prerequisites": [
      "Misturas e partículas em suspensão",
      "Microrganismos e saúde pública",
      "Separação física e reações químicas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: etapas de potabilização",
        "explanation": "Água visualmente transparente não é necessariamente potável: pode conter microrganismos, contaminantes dissolvidos e substâncias sem cor ou odor perceptíveis. Em estações convencionais, coagulação desestabiliza partículas coloidais, floculação favorece agregados maiores e decantação permite sedimentação dos flocos. A filtração retém parte das partículas remanescentes. Desinfecção busca inativar microrganismos patogênicos, frequentemente com compostos clorados, enquanto o controle de pH e outras etapas dependem da qualidade da água bruta e dos padrões sanitários. Nem toda estação usa exatamente a mesma sequência: mananciais, tecnologias e requisitos locais determinam adaptações. Filtrar não equivale a desinfetar; ferver não remove necessariamente sais ou contaminantes químicos dissolvidos. A potabilidade requer análises laboratoriais e atendimento a normas, não simples aparência. A água distribuída ainda depende da integridade da rede e do armazenamento doméstico. É essencial distinguir tratamento de água para consumo de tratamento de esgoto, que têm objetivos, cargas de contaminantes e processos diferentes.",
        "example": "Considere água turva com partículas finas. Passo 1: coagulação facilita a união das partículas; passo 2: floculação forma agregados; passo 3: decantação e filtração removem sólidos. A desinfecção continua necessária para controle microbiológico.",
        "pitfall": "Não confundir propriedades observáveis com explicações microscópicas e condições de medida.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: concentração e eficiência de remoção",
        "explanation": "Eficiência percentual de remoção compara concentração inicial e final de um parâmetro: η=(C_i−C_f)/C_i×100%, desde que ambas as concentrações estejam na mesma unidade e representem amostras comparáveis. Uma redução de turbidez não comprova remoção de todos os microrganismos ou contaminantes dissolvidos. A desinfecção depende de dose, tempo de contato, temperatura, pH e qualidade da água; mais reagente nem sempre produz melhor resultado, podendo gerar efeitos indesejáveis. A presença de matéria orgânica pode consumir desinfetante, por isso indicadores operacionais precisam ser monitorados. Em avaliações escolares, evite inferir potabilidade a partir de um único parâmetro: uma amostra com baixa turbidez pode ainda ter contaminação microbiológica. Coleta, transporte e preservação de amostras afetam a confiabilidade das medições. Na distribuição, pressão e integridade da rede também influenciam risco de recontaminação. A comparação entre métodos exige especificar qual contaminante se deseja remover e quais limites regulatórios se aplicam.",
        "example": "Uma etapa reduz turbidez de 40 para 4 unidades. Passo 1: diferença=40−4=36; passo 2: razão=36/40=0,9; passo 3: eficiência de remoção da turbidez=90%. Não conclua que 90% de todos os poluentes foram removidos.",
        "pitfall": "Não substituir análise de unidades e hipóteses por fórmulas memorizadas.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: contaminantes dissolvidos e barreiras múltiplas",
        "explanation": "A lógica de múltiplas barreiras combina proteção do manancial, processos de tratamento, desinfecção e monitoramento da distribuição. Carvão ativado pode adsorver determinados compostos orgânicos e reduzir gosto e odor, mas não remove universalmente todos os sais. Membranas de osmose reversa podem reter diversos íons dissolvidos, porém demandam pressão, energia e manejo do concentrado; sua aplicação não substitui automaticamente todas as etapas sanitárias. A remoção de nitrato, arsênio ou outros contaminantes depende da espécie química e do processo selecionado. O controle de subprodutos de desinfecção exige equilibrar segurança microbiológica e qualidade química, conforme regulamentação. Proteger nascentes e reduzir lançamento de esgoto pode diminuir carga de contaminantes antes da estação, mas não dispensa verificação da água tratada. O tratamento de água é um sistema de engenharia sujeito a variação sazonal, falhas operacionais e critérios de qualidade definidos por normas; não existe método doméstico único que garanta segurança para qualquer fonte. A escolha tecnológica deve considerar vazão, composição, manutenção e destinação de resíduos gerados.",
        "example": "Uma água contém 20 mg/L de soluto dissolvido em 100 L: massa=20×100=2000 mg=2 g. Uma etapa que remova 75% deixa 0,5 g, equivalentes a 5 mg/L no mesmo volume. A conta só vale para esse soluto, com volume final aproximadamente constante.",
        "pitfall": "Não extrapolar resultados idealizados sem examinar condições e limitações.",
        "steps": [
          "Identifique o sistema, as espécies e as condições declaradas.",
          "Aplique a definição ou o modelo e registre cada cálculo ou inferência.",
          "Verifique unidades, coerência, alternativas e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual etapa do tratamento convencional favorece a formação de agregados maiores de partículas?",
        "options": [
          "Evaporação",
          "Floculação",
          "Destilação fracionada",
          "Eletrólise"
        ],
        "correctIndex": 1,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "Na floculação, partículas desestabilizadas na coagulação se agrupam em flocos maiores, facilitando decantação. A etapa não substitui desinfecção nem assegura ausência de contaminantes dissolvidos."
      },
      {
        "level": "intermediate",
        "prompt": "A turbidez cai de 40 para 4 unidades. Qual a eficiência de remoção desse parâmetro?",
        "options": [
          "10%",
          "36%",
          "90%",
          "99%"
        ],
        "correctIndex": 2,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "A eficiência é (40−4)/40×100%=90%. Esse percentual vale apenas para turbidez medida; não comprova remoção de 90% de microrganismos, sais ou outros contaminantes."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação descreve corretamente o tratamento de água?",
        "options": [
          "Filtração comum elimina necessariamente todos os íons dissolvidos",
          "Água transparente é sempre potável",
          "Ferver água remove obrigatoriamente metais dissolvidos",
          "Potabilidade depende de múltiplas barreiras e monitoramento de parâmetros"
        ],
        "correctIndex": 3,
        "hint": "Releia o modelo da etapa, identifique suas condições e descarte alternativas incompatíveis com os dados.",
        "solution": "O tratamento e a distribuição seguros dependem de proteção do manancial, operações adequadas, desinfecção e verificação sanitária. Aparência, filtração isolada e fervura não garantem remoção de todos os contaminantes químicos."
      }
    ]
  }
];
