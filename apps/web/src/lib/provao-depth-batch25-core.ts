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
    "topicStart": "Interações do tipo íon-dipolo",
    "objective": "Investigar interações do tipo íon-dipolo com modelos físicos e químicos consistentes, identificando propriedades, realizando inferências e cálculos, confrontando alternativas e explicitando condições de validade e limitações experimentais.",
    "prerequisites": [
      "Íons e cargas elétricas",
      "Polaridade molecular",
      "Dissolução e hidratação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: atração entre íon e molécula polar",
        "explanation": "Interações íon-dipolo ocorrem entre uma espécie eletricamente carregada, como Na⁺ ou Cl⁻, e uma molécula com momento de dipolo permanente, como H₂O. A molécula de água possui geometria angular e distribuição desigual de carga: a região próxima ao oxigênio apresenta carga parcial negativa, enquanto as regiões próximas aos hidrogênios são parcialmente positivas. Por isso, moléculas de água tendem a orientar o oxigênio em direção a cátions e os hidrogênios em direção a ânions. Trata-se de interação eletrostática entre partículas, não de formação obrigatória de uma nova ligação covalente com cada íon. A intensidade depende da carga, tamanho do íon, polaridade do solvente e distância entre espécies. Não se deve confundir íon-dipolo com dipolo-dipolo, que envolve duas moléculas polares neutras, nem com ligação iônica em um cristal. A hidratação de íons contribui para a estabilização de espécies dissolvidas e ajuda a explicar por que muitos sais podem se dispersar em água. Contudo, a presença dessa interação não garante solubilidade ilimitada.",
        "example": "Ao dissolver NaCl em água, represente Na⁺ cercado por moléculas orientadas com O voltado ao cátion e Cl⁻ cercado por moléculas com H voltado ao ânion. Verifique os sinais das cargas parciais antes de desenhar a orientação.",
        "pitfall": "Confundir mecanismo microscópico com aparência macroscópica ou classificação isolada.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: dissolução e balanço energético",
        "explanation": "Dissolver um sólido iônico envolve competir com as interações da rede cristalina e formar novas interações entre íons e solvente. A separação dos íons exige energia, enquanto sua solvatação pode liberar energia; o balanço influencia a entalpia de dissolução. Mesmo que a dissolução absorva calor, ela pode ser espontânea se a variação de energia livre favorecer o processo, porque entropia também importa. Não se pode prever solubilidade apenas dizendo que a água é polar: algumas redes cristalinas são muito estáveis e pouco solúveis, como ocorre com certos sais. Em solução, íons hidratados participam da condução elétrica; moléculas neutras de açúcar, embora interajam com água, não se comportam como eletrólitos fortes. A expressão 'semelhante dissolve semelhante' é uma heurística, não uma lei que substitua análise de rede, solvatação, temperatura e equilíbrio. Em problemas quantitativos, a concentração molar mede mols por litro de solução, não por litro de solvente puro. Identifique sempre qual espécie está sendo contada e se a dissolução foi completa.",
        "example": "Dissolva 0,20 mol de NaCl e complete para 0,50 L de solução, admitindo dissociação completa. Calcule c(NaCl)=0,20/0,50=0,40 mol/L; então c(Na⁺)=c(Cl⁻)=0,40 mol/L, desconsiderando outras fontes de íons.",
        "pitfall": "Ignorar concentração, carga, unidade ou estado físico ao aplicar uma regra.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: carga, raio e seletividade",
        "explanation": "A força de interação íon-dipolo depende do campo elétrico do íon e da orientação da molécula polar. Íons pequenos e altamente carregados costumam apresentar hidratação intensa, mas o comportamento real depende também da estrutura do solvente e da energia de desidratação necessária para outras reações. Íons hidratados têm tamanho efetivo diferente do raio cristalográfico; por isso mobilidade em solução não segue necessariamente a mesma ordem dos raios iônicos isolados. A água pode estabilizar íons e alterar equilíbrios químicos, incluindo dissociação de ácidos e precipitação de sais. Uma solução saturada está em equilíbrio dinâmico entre dissolução e recristalização, não significa que as partículas deixaram de se mover. Em separações químicas, selecionar solventes ou agentes complexantes modifica a estabilidade relativa de espécies, mas não transforma qualquer sal em solúvel. Ao interpretar experimentos, distinga energia de rede, energia de solvatação e efeitos entrópicos. O modelo íon-dipolo explica uma contribuição essencial, não todas as forças presentes numa solução concentrada.",
        "example": "Uma solução contém 0,10 mol de CaCl₂ em 1,0 L, supondo dissociação completa. Há 0,10 mol/L de Ca²⁺ e 0,20 mol/L de Cl⁻; a hidratação orienta o oxigênio da água ao redor do cátion e os hidrogênios ao redor dos ânions.",
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
        "prompt": "Como a água tende a orientar-se ao redor de Na⁺?",
        "options": [
          "Com o oxigênio parcialmente negativo voltado ao cátion",
          "Com os hidrogênios parcialmente positivos voltados ao cátion",
          "Sem orientação preferencial possível",
          "Com átomos de sódio covalentemente ligados à água"
        ],
        "correctIndex": 0,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "Na água, a região do oxigênio é parcialmente negativa e é atraída pelo Na⁺. A orientação favorece hidratação por interação íon-dipolo, sem exigir nova ligação covalente com cada molécula."
      },
      {
        "level": "intermediate",
        "prompt": "Dissolver 0,20 mol de NaCl em 0,50 L de solução dá qual concentração formal?",
        "options": [
          "0,10 mol/L",
          "0,20 mol/L",
          "0,40 mol/L",
          "2,50 mol/L"
        ],
        "correctIndex": 2,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "Concentração molar é n/V: 0,20 mol/0,50 L=0,40 mol/L. A conta pressupõe volume final de solução de 0,50 L, e não apenas volume inicial de água."
      },
      {
        "level": "advanced",
        "prompt": "Em 1 L de solução com 0,10 mol de CaCl₂ totalmente dissociado, qual é [Cl⁻]?",
        "options": [
          "0,05 mol/L",
          "0,10 mol/L",
          "0,15 mol/L",
          "0,20 mol/L"
        ],
        "correctIndex": 3,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "Cada unidade de fórmula CaCl₂ fornece dois íons Cl⁻. Logo 0,10 mol de sal gera 0,20 mol de Cl⁻ em 1 L, resultando 0,20 mol/L no modelo de dissociação completa."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "A eletrosfera e o diagrama de Linus Pauling",
    "objective": "Investigar a eletrosfera e o diagrama de linus pauling com modelos físicos e químicos consistentes, identificando propriedades, realizando inferências e cálculos, confrontando alternativas e explicitando condições de validade e limitações experimentais.",
    "prerequisites": [
      "Número atômico e elétrons",
      "Subníveis s, p, d e f",
      "Princípio da exclusão de Pauli"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: distribuição em subníveis",
        "explanation": "A eletrosfera é descrita por estados eletrônicos quantizados, e não por elétrons girando em órbitas planetárias clássicas. Em uma abordagem escolar, níveis principais n e subníveis s, p, d e f organizam a distribuição eletrônica. Um subnível s comporta até 2 elétrons, p até 6, d até 10 e f até 14, porque cada orbital admite no máximo dois elétrons com spins opostos. O diagrama de Linus Pauling é um recurso mnemônico para a ordem aproximada de preenchimento de subníveis em átomos neutros no estado fundamental. A sequência começa 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. O princípio de Aufbau orienta o preenchimento de estados de menor energia, mas a energia relativa dos subníveis depende do átomo e de sua configuração. O princípio de Pauli e a regra de Hund complementam a distribuição: orbitais degenerados recebem elétrons desemparelhados antes de emparelhar. O diagrama não determina sozinho geometria orbital, ligações químicas ou comportamento de qualquer íon.",
        "example": "Para oxigênio neutro (Z=8), distribua 8 elétrons: 1s² recebe 2; 2s² recebe 2; restam 4 para 2p⁴. A soma dos expoentes 2+2+4=8 confere com Z. No 2p, aplique Hund antes de emparelhar.",
        "pitfall": "Confundir mecanismo microscópico com aparência macroscópica ou classificação isolada.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: átomos, íons e elétrons de valência",
        "explanation": "Em um átomo neutro, número de elétrons é igual ao número atômico Z. Para formar um cátion, removem-se elétrons; para formar um ânion, adicionam-se. Sódio neutro (Z=11) tem configuração 1s² 2s² 2p⁶ 3s¹; o cátion Na⁺ perde o elétron 3s, ficando com 10 elétrons. Cloro neutro (Z=17) termina em 3s² 3p⁵ e Cl⁻ ganha um elétron, terminando em 3p⁶. A contagem de elétrons não deve ser confundida com o número de prótons, que permanece constante numa ionização comum. Em elementos representativos, a camada mais externa auxilia na previsão de valência, mas a reatividade não se reduz mecanicamente à busca de octeto. Íons de metais de transição exigem cuidado: após preencher 4s antes de 3d em átomos neutros, elétrons 4s são geralmente removidos primeiro na formação de cátions. Exceções à ordem simples de preenchimento também existem em alguns átomos neutros, como cromo e cobre. Declare sempre se a espécie é neutra ou ionizada.",
        "example": "Para Na⁺, comece com Z=11 e 11 elétrons no átomo neutro. Remova um elétron para a carga +1, restando 10; distribua 1s² 2s² 2p⁶. Não altere Z, pois ionização não transforma sódio em neônio.",
        "pitfall": "Ignorar concentração, carga, unidade ou estado físico ao aplicar uma regra.",
        "steps": [
          "Identifique a espécie, os dados e o estado físico ou carga.",
          "Aplique a regra, modelo ou cálculo e justifique os passos.",
          "Confira conservação, unidades, alternativas e limites do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Hund, Pauli e exceções",
        "explanation": "Orbitais de um mesmo subnível p possuem três orientações espaciais no modelo atômico, cada uma admitindo até dois elétrons. Pela regra de Hund, elétrons ocupam inicialmente orbitais degenerados separados com spins paralelos antes de emparelhar; assim, em 2p³ do nitrogênio, há três elétrons desemparelhados. Em 2p⁴ do oxigênio, um orbital passa a conter par, restando dois elétrons desemparelhados. A exclusão de Pauli impede que dois elétrons do mesmo átomo compartilhem os quatro números quânticos. Configurações como Cr [Ar] 3d⁵ 4s¹ e Cu [Ar] 3d¹⁰ 4s¹ mostram limitações do preenchimento mecânico, relacionadas a diferenças pequenas de energia e estabilização eletrônica. A ordem energética muda em íons e em ambientes de ligação, portanto o diagrama escolar não é uma tabela universal de energias. Magnetismo, espectros e propriedades químicas exigem modelos adicionais. Ao resolver exercícios, confirme soma dos elétrons, carga, capacidade de subníveis e existência de exceções conhecidas antes de aceitar uma distribuição.",
        "example": "Para N neutro (Z=7), obtenha 1s² 2s² 2p³. Distribua os três elétrons p em três orbitais separados, conforme Hund; conte três desemparelhados. Para O (Z=8), 2p⁴ exige um par e dois desemparelhados.",
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
        "prompt": "Qual a configuração fundamental aproximada do oxigênio neutro (Z=8)?",
        "options": [
          "1s² 2s² 2p⁴",
          "1s² 2s⁶",
          "1s² 2p⁶",
          "1s² 2s² 3s⁴"
        ],
        "correctIndex": 0,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "O oxigênio neutro possui 8 elétrons. Preencha 1s², 2s² e 2p⁴, somando 2+2+4=8; as outras opções excedem capacidades ou ignoram a ordem escolar de preenchimento."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos elétrons há em Na⁺ se Z=11?",
        "options": [
          "12",
          "11",
          "10",
          "9"
        ],
        "correctIndex": 2,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "Um átomo neutro de Na tem 11 elétrons; a carga +1 significa perda de um elétron, restando 10. O número de prótons continua 11, pois a ionização não altera o elemento."
      },
      {
        "level": "advanced",
        "prompt": "Quantos elétrons desemparelhados há no nitrogênio neutro (Z=7) no estado fundamental?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 3,
        "hint": "Identifique as espécies e o mecanismo, depois compare cada alternativa com o modelo e os dados.",
        "solution": "A configuração 1s² 2s² 2p³ tem três elétrons no subnível p. Pela regra de Hund, ocupam separadamente os três orbitais p, produzindo três elétrons desemparelhados."
      }
    ]
  }
];
