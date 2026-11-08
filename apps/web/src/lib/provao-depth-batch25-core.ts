import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral Kognos, não oficial; sem homologação docente. */
export const provaoDepthBatch25Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Propriedade de substâncias moleculares, iônicas e metálicas",
    "objective": "Investigar propriedade de substâncias moleculares, iônicas e metálicas com modelos físicos e químicos consistentes, identificando propriedades, realizando inferências e cálculos, confrontando alternativas e explicitando condições de validade e limitações experimentais.",
    "prerequisites": [
      "Ligações iônica, covalente e metálica",
      "Rede cristalina e moléculas",
      "Condutividade e solubilidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: estrutura e propriedades",
        "explanation": "Substâncias iônicas são constituídas por cátions e ânions organizados em redes cristalinas, e não por moléculas individuais de sal. A atração eletrostática em todas as direções ajuda a explicar pontos de fusão frequentemente elevados e fragilidade de cristais: ao deslocar planos da rede, íons de mesma carga podem ficar próximos e gerar repulsão. Substâncias moleculares apresentam entidades discretas e propriedades que dependem tanto das ligações internas quanto das forças entre moléculas. Água e dióxido de carbono são moleculares, mas diferem em polaridade e comportamento físico; não se deve inferir o ponto de ebulição apenas pela massa molar. Metais exibem rede de átomos ou cátions com elétrons deslocalizados, modelo que explica condução elétrica no sólido e maleabilidade. Essas são tendências, não definições por uma única propriedade. Diamante e grafite são redes covalentes, não moléculas pequenas; suas propriedades mostram por que classificação simplista entre iônico, molecular e metálico tem exceções. A condutividade depende de portadores móveis e condições de medida, não apenas da presença de elétrons.",
        "example": "Compare NaCl sólido e fundido. No cristal sólido, os íons estão presos em posições médias e não conduzem bem; no fundido, os íons se movem e transportam carga. A ligação continua iônica em ambos os estados.",
        "pitfall": "Confundir mecanismo microscópico com aparência macroscópica ou classificação isolada.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: condutividade e dissolução",
        "explanation": "A água destilada possui condutividade baixa em comparação com uma solução aquosa de cloreto de sódio, porque a dissolução de NaCl disponibiliza íons móveis. Açúcar pode dissolver-se em água sem produzir quantidades comparáveis de íons, já que moléculas de sacarose permanecem predominantemente intactas; dissolver não é sinônimo de ionizar. Um fio de cobre sólido conduz porque elétrons se deslocam pela estrutura metálica, mecanismo distinto do transporte iônico em solução. A condutividade depende da concentração de espécies móveis, temperatura e geometria da amostra; por isso não é correto classificar todas as soluções como bons condutores. Sais insolúveis não geram automaticamente soluções concentradas. Compostos covalentes podem formar íons ao reagir com água, como ácidos fortes em condições adequadas, e a ligação covalente não impede toda condutividade. A comparação deve separar o tipo de ligação, a estrutura da substância e o estado físico em que a propriedade foi medida. Testes elétricos reais exigem equipamentos seguros e não devem envolver rede elétrica doméstica.",
        "example": "Em três amostras, compare NaCl sólido, NaCl dissolvido e sacarose dissolvida. Identifique os portadores de carga: íons fixos, íons móveis e moléculas neutras. Preveja que a solução salina conduza mais que a açucarada sob condições semelhantes.",
        "pitfall": "Ignorar concentração, carga, unidade ou estado físico ao aplicar uma regra.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: estrutura e ponto de fusão",
        "explanation": "O ponto de fusão depende da energia necessária para alterar a organização do material. Em sólidos iônicos, a rede eletrostática costuma exigir energia elevada; em sólidos moleculares, a fusão frequentemente envolve vencer interações intermoleculares, sem romper todas as ligações covalentes internas. Metais variam amplamente em ponto de fusão, e não há regra universal de que qualquer metal derreta acima de qualquer sal. Materiais de rede covalente, como diamante, apresentam estruturas muito extensas e não podem ser explicados como conjuntos de moléculas pequenas mantidas apenas por forças fracas. Para uma escolha tecnológica, considere resistência, ductilidade, corrosão, condutividade e temperatura de trabalho. Uma cerâmica iônica pode resistir a altas temperaturas e ainda ser frágil sob impacto; cobre pode conduzir e deformar sem quebrar facilmente. A classificação química orienta hipóteses, mas resultados experimentais e composição real definem a adequação. Impurezas, defeitos cristalinos e ligas alteram propriedades, portanto não extrapole de uma substância pura para qualquer produto comercial.",
        "example": "Para escolher um material de fio, compare cobre metálico, sal sólido e vidro molecular ou de rede. Passo 1: identifique portadores de carga; passo 2: avalie ductilidade; passo 3: selecione cobre para o núcleo condutor, considerando isolamento externo.",
        "pitfall": "Generalizar o modelo simplificado sem considerar exceções e condições reais.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação explica por que NaCl sólido conduz pouco?",
        "options": [
          "Não existem íons no sólido",
          "Os íons estão pouco móveis na rede cristalina",
          "Todo sólido é molecular",
          "Os elétrons de valência desaparecem"
        ],
        "correctIndex": 1,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "O NaCl sólido contém íons, mas estes não possuem mobilidade translacional suficiente para transportar corrente de forma eficiente. Fundido ou dissolvido, íons móveis permitem condução."
      },
      {
        "level": "intermediate",
        "prompt": "Qual amostra tende a conduzir melhor, em condições semelhantes?",
        "options": [
          "Solução aquosa de sacarose",
          "NaCl sólido",
          "Solução aquosa de NaCl",
          "Água destilada"
        ],
        "correctIndex": 2,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "NaCl dissolvido fornece Na⁺ e Cl⁻ móveis; sacarose permanece majoritariamente molecular e água destilada tem poucos íons. A condutividade depende também da concentração e da temperatura."
      },
      {
        "level": "advanced",
        "prompt": "Por que cobre é usado como núcleo de fios elétricos?",
        "options": [
          "Porque é um sal iônico fundido",
          "Porque não contém elétrons",
          "Porque é sempre isolante",
          "Porque conduz no estado sólido e pode ser conformado em fios"
        ],
        "correctIndex": 3,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "A estrutura metálica do cobre permite mobilidade de elétrons e ductilidade, viabilizando fios. Resistência à corrosão, custo e isolamento também importam no projeto, mas não substituem essas propriedades."
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
        "example": "Para H₂O, considere H=1 e O=16 g/mol. Passo 1: calcule M=2×1+16=18 g/mol; passo 2: %H=(2/18)×100≈11,1%; passo 3: %O=(16/18)×100≈88,9%. A soma é aproximadamente 100%. A verificação final confronta o resultado com as unidades e com a hipótese de composição integral da amostra.",
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
        "example": "Uma amostra contém 40,0% C, 6,7% H e 53,3% O. Em 100 g: n(C)=40/12≈3,33; n(H)=6,7/1≈6,7; n(O)=53,3/16≈3,33. Divida pelo menor: 1:2:1. A fórmula mínima aproximada é CH₂O. A verificação final confronta o resultado com as unidades e com a hipótese de composição integral da amostra.",
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
        "solution": "Em 100 g, n(C)=40/12≈3,33; n(H)=6,7/1≈6,7; n(O)=53,3/16≈3,33. Dividindo por 3,33, resulta aproximadamente 1:2:1, ou CH₂O. A soma das porcentagens é aproximadamente 100%, e os arredondamentos não alteram a razão inteira inferida."
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
    "topicStart": "Solubilidade e temperatura de ebulição",
    "objective": "Analisar solubilidade e temperatura de ebulição por meio de conceitos científicos específicos, cálculos e interpretação de evidências, distinguindo modelos ideais, aplicações e exceções com justificativas verificáveis.",
    "prerequisites": [
      "Soluções e misturas homogêneas",
      "Forças intermoleculares",
      "Temperatura e pressão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: solubilidade e saturação",
        "explanation": "Solubilidade é a quantidade máxima de soluto que pode dissolver-se em determinada quantidade de solvente sob condições especificadas, quando se estabelece equilíbrio com a fase não dissolvida. Em água, a solubilidade de sólidos varia com temperatura e com a identidade das espécies; não há regra universal de que aquecer sempre aumenta a solubilidade de qualquer substância. Solução insaturada contém menos soluto que o limite de equilíbrio; saturada está no limite; supersaturada pode conter temporariamente mais soluto que o valor de equilíbrio e tende a ser instável frente a perturbações. Velocidade de dissolução é conceito diferente: agitação e redução do tamanho dos cristais podem acelerar a dissolução sem necessariamente mudar a solubilidade de equilíbrio. Para gases dissolvidos, aumento de pressão parcial frequentemente aumenta a solubilidade na aproximação da lei de Henry, desde que não haja reação relevante e que a temperatura seja constante. A composição do solvente, o pH e reações químicas podem modificar o equilíbrio. A curva de solubilidade deve ser lida com suas unidades e temperatura, não como porcentagem automaticamente.",
        "example": "Um sal apresenta solubilidade de 30 g por 100 g de água a 20 °C. Em 200 g de água, o máximo no modelo é 60 g. Se forem adicionados 70 g, 10 g permanecem não dissolvidos em equilíbrio, admitindo tempo suficiente.",
        "pitfall": "Não confundir definições científicas com exemplos ou analogias isoladas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: ebulição e pressão externa",
        "explanation": "Um líquido entra em ebulição quando sua pressão de vapor alcança a pressão externa, permitindo a formação de bolhas estáveis no interior. Ao diminuir a pressão atmosférica, a temperatura de ebulição da água diminui; por isso, em altitudes elevadas, a água pode ferver abaixo de 100 °C. Ao aumentar a pressão externa em equipamento apropriado, a temperatura de ebulição sobe. Evaporação, diferentemente, pode ocorrer na superfície a temperaturas inferiores ao ponto de ebulição. Solutos não voláteis dissolvidos podem elevar a temperatura de ebulição do solvente, um efeito coligativo que depende aproximadamente da concentração de partículas em soluções diluídas ideais. Não se deve confundir temperatura de ebulição com quantidade de calor fornecida: aquecer mais rapidamente reduz o tempo até a ebulição, mas não altera necessariamente a temperatura de ebulição sob pressão constante. Misturas podem apresentar intervalos de ebulição e composição do vapor diferente da do líquido. Uma interpretação correta informa pressão, composição e aproximações.",
        "example": "Duas panelas com água pura estão a pressões externas diferentes. Primeiro identifique que a ebulição ocorre quando pressão de vapor iguala a externa; depois compare: sob menor pressão, a temperatura de ebulição é menor; por fim, explique a consequência para o cozimento.",
        "pitfall": "Não aplicar fórmulas sem unidades e condições explícitas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: partículas dissolvidas e separações",
        "explanation": "A elevação ebuliométrica ideal pode ser aproximada por ΔT_b=iK_b m, onde m é a molalidade, K_b a constante do solvente e i um fator de partículas efetivas. A expressão pressupõe solução suficientemente diluída e comportamento próximo do ideal; para eletrólitos reais, associação iônica e interações alteram i. O efeito não significa que qualquer sal possa ser adicionado indefinidamente: a solubilidade limita a composição e precipitação pode ocorrer. A destilação utiliza diferenças de volatilidade e equilíbrio líquido-vapor para separar componentes, mas uma única etapa não garante pureza completa. Misturas azeotrópicas são exemplos de limitação da destilação simples sob pressão fixa. Para analisar uma solução, separe três grandezas: quantidade dissolvida no equilíbrio, rapidez de dissolução e temperatura de ebulição. Alterar a temperatura pode mudar simultaneamente essas propriedades, mas por mecanismos distintos. Em aplicações industriais, pressão, energia necessária e corrosão também influenciam a escolha de separação, sem que a fórmula coligativa substitua dados experimentais.",
        "example": "Para solução ideal não eletrolítica com m=0,50 mol/kg e Kb=0,512 °C kg/mol, use i=1. Calcule ΔTb=1×0,512×0,50=0,256 °C. A 1 atm, estime ebulição da água em 100,256 °C, se a aproximação for válida.",
        "pitfall": "Não generalizar modelos aproximados a sistemas reais sem verificar exceções.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma solução saturada de um sólido significa que:",
        "options": [
          "Não há soluto presente",
          "Atingiu o limite de dissolução de equilíbrio nas condições dadas",
          "Todo soluto evaporou",
          "Não existem partículas dissolvidas"
        ],
        "correctIndex": 1,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "Saturação indica o limite de solubilidade sob temperatura e composição definidas, com equilíbrio entre soluto dissolvido e fase excedente quando presente. Não significa ausência de soluto."
      },
      {
        "level": "intermediate",
        "prompt": "Por que água ferve a temperatura menor em altitude elevada?",
        "options": [
          "Porque sua massa molar diminui",
          "Porque a água se transforma em outro elemento",
          "Porque a pressão externa é menor",
          "Porque a pressão de vapor deixa de existir"
        ],
        "correctIndex": 2,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A ebulição ocorre quando a pressão de vapor iguala a pressão externa. Em altitude elevada, a pressão atmosférica menor é alcançada a temperatura mais baixa, sem alterar a identidade química da água."
      },
      {
        "level": "advanced",
        "prompt": "Para ΔTb=iKbm com i=1, Kb=0,512 e m=0,50, qual a elevação estimada?",
        "options": [
          "0,0256 °C",
          "1,024 °C",
          "0,512 °C",
          "0,256 °C"
        ],
        "correctIndex": 3,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "Multiplique i×Kb×m: 1×0,512×0,50=0,256 °C. A relação aproxima uma solução ideal diluída com soluto não volátil; não se aplica indiscriminadamente a qualquer concentração."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Noção de monômeros e polímeros",
    "objective": "Analisar noção de monômeros e polímeros por meio de conceitos científicos específicos, cálculos e interpretação de evidências, distinguindo modelos ideais, aplicações e exceções com justificativas verificáveis.",
    "prerequisites": [
      "Ligações covalentes",
      "Moléculas orgânicas",
      "Reações de síntese e conservação de massa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: unidades repetitivas e macromoléculas",
        "explanation": "Polímeros são macromoléculas formadas por muitas unidades estruturais repetitivas; monômeros são moléculas capazes de participar da formação de cadeias ou redes poliméricas. No polietileno, unidades derivadas do eteno formam uma cadeia com repetição aproximada –CH₂–CH₂–, mas a molécula de eteno C₂H₄ possui uma ligação dupla que é transformada na polimerização por adição. O grau de polimerização corresponde aproximadamente ao número de unidades repetitivas por cadeia e influencia a massa molar, que normalmente se distribui entre diferentes comprimentos. Polímeros naturais incluem celulose e proteínas, enquanto muitos plásticos comerciais são sintéticos; a origem natural não garante biodegradação rápida e a origem sintética não determina toxicidade por si só. Polímero, plástico e resina não são sinônimos perfeitos: aditivos, cargas e processamento alteram propriedades do produto. Cadeias lineares, ramificadas e reticuladas exibem mobilidade e comportamento mecânico distintos. A estrutura química e as interações entre cadeias explicam melhor o material que apenas sua aparência.",
        "example": "No eteno CH₂=CH₂, identifique a dupla ligação. Na adição, ela se transforma em ligações simples que unem unidades; escreva n CH₂=CH₂ → [–CH₂–CH₂–]n. A proporção atômica é preservada no modelo de adição.",
        "pitfall": "Não confundir definições científicas com exemplos ou analogias isoladas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: adição, condensação e propriedades",
        "explanation": "Polimerização por adição une monômeros insaturados sem gerar obrigatoriamente pequenas moléculas como subprodutos em cada etapa; o polietileno é um exemplo escolar. Na polimerização por condensação, reações entre grupos funcionais podem formar ligações e liberar pequenas moléculas, como água, em sistemas específicos. Poliésteres e poliamidas ilustram a importância da química dos grupos funcionais. Não se deve classificar todo polímero por um único mecanismo sem conhecer sua rota de síntese. Termoplásticos podem amolecer e ser reprocessados sob aquecimento em condições adequadas, enquanto termorrígidos fortemente reticulados não fundem como cadeias independentes e podem degradar com calor excessivo. A presença de plastificantes e o grau de cristalinidade alteram flexibilidade e resistência. Reciclagem mecânica pode degradar cadeias ou acumular contaminantes, e identificação do tipo de polímero é necessária antes de misturar resíduos. A decisão sobre uso depende de propriedades, exposição e infraestrutura de coleta.",
        "example": "Compare um recipiente de polietileno e uma peça de resina epóxi reticulada. Identifique cadeias mais móveis no termoplástico e rede de ligações no termorrígido; preveja maior facilidade de remoldagem do primeiro, sem supor que todo aquecimento seja seguro.",
        "pitfall": "Não aplicar fórmulas sem unidades e condições explícitas.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: massa molar e destino ambiental",
        "explanation": "Em uma cadeia ideal com n unidades repetitivas de massa molar M₀, a massa molar aproximada é M≈nM₀, desprezando a contribuição de grupos terminais. Para polietileno, a unidade C₂H₄ tem massa molar aproximada de 28 g/mol; uma cadeia ideal com 1000 unidades apresenta M≈28 000 g/mol. Materiais reais contêm distribuições de tamanhos e podem ser caracterizados por médias numéricas e ponderais, que não são intercambiáveis. A durabilidade química de um polímero pode ser vantajosa em equipamentos e problemática em descarte; degradação por luz, oxidação e ação microbiana depende de ligações, aditivos e ambiente. Fragmentar plástico em partículas menores não demonstra mineralização completa em CO₂, água e biomassa. Biodegradabilidade, compostabilidade industrial e reciclabilidade são categorias distintas, sujeitas a critérios e infraestrutura. Avaliar impacto exige considerar extração de matéria-prima, fabricação, uso, coleta e destino final, sem declarar que qualquer material é sempre superior.",
        "example": "Para 1000 unidades de C₂H₄, M₀=2×12+4×1=28 g/mol. Multiplique n×M₀=1000×28=28 000 g/mol. O cálculo aproxima uma cadeia ideal, desconsiderando grupos terminais e distribuição de massas.",
        "pitfall": "Não generalizar modelos aproximados a sistemas reais sem verificar exceções.",
        "steps": [
          "Identifique espécies, dados e condições do caso.",
          "Aplique a definição, a proporção ou o modelo passo a passo.",
          "Confira a resposta, unidades e condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a unidade repetitiva aproximada do polietileno?",
        "options": [
          "–CH₂–CH₂–",
          "–Na–Cl–",
          "–SiO₂–H₂O–",
          "–Fe–O–"
        ],
        "correctIndex": 0,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A polimerização por adição do eteno forma cadeias de unidades –CH₂–CH₂–. NaCl é composto iônico e as outras opções não representam a unidade repetitiva do polietileno."
      },
      {
        "level": "intermediate",
        "prompt": "Qual característica distingue frequentemente um termorrígido fortemente reticulado?",
        "options": [
          "Pode sempre ser remoldado sem alteração",
          "Não contém ligações covalentes",
          "Não funde como cadeias independentes e pode degradar com aquecimento",
          "É obrigatoriamente biodegradável"
        ],
        "correctIndex": 2,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A rede covalente reticulada restringe o escoamento das cadeias, ao contrário de muitos termoplásticos. Aquecimento excessivo pode provocar degradação, não simples fusão reversível."
      },
      {
        "level": "advanced",
        "prompt": "Qual massa molar aproximada tem uma cadeia ideal com 1000 unidades C₂H₄ (28 g/mol)?",
        "options": [
          "280 g/mol",
          "2 800 g/mol",
          "280 000 g/mol",
          "28 000 g/mol"
        ],
        "correctIndex": 3,
        "hint": "Relacione o enunciado ao mecanismo e descarte alternativas que contradigam as hipóteses.",
        "solution": "A massa molar aproximada é n×M₀=1000×28=28 000 g/mol, desprezando grupos terminais. Polímeros reais têm distribuição de comprimentos, então a amostra não possui necessariamente uma única massa molar."
      }
    ]
  }
];
