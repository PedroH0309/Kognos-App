import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch09:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Porcentagem e juros",
    "objective": "Calcular porcentagens e variações com bases explícitas, distinguir juros simples e compostos e comparar taxas e poder de compra em modelos com períodos e hipóteses definidos.",
    "prerequisites": [
      "Operações com frações, decimais e potências",
      "Identificação de razões e bases de comparação",
      "Conversão entre unidades de tempo compatíveis"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Porcentagem, base e mudanças sucessivas",
        "explanation": "Porcentagem expressa uma razão em centésimos: p% corresponde a p/100. Para encontrar uma parte de um total, multiplique a base por essa razão; para descobrir a porcentagem, divida parte por base não nula e multiplique por 100. Identificar a base é essencial: um mesmo valor absoluto pode representar porcentagens diferentes sobre totais diferentes. Para uma base inicial positiva V0 e valor final V1, a variação relativa é (V1 − V0)/V0; o sinal informa aumento ou redução. Se desejar expressar o módulo de uma redução, use (V0 − V1)/V0 e diga que se trata de redução. Pontos percentuais medem diferença entre taxas ou proporções já expressas em porcentagem, não a mesma coisa que variação relativa. Passar de 20% para 25% são cinco pontos percentuais e aumento relativo de 25% sobre 20%. Aumentar um valor em a% multiplica por 1 + a/100; descontar d% multiplica por 1 − d/100. Em mudanças sucessivas sobre o saldo corrente, multiplique os fatores em vez de simplesmente somar taxas. Um aumento e uma redução iguais geralmente não se anulam, pois as bases mudam. Com fatores fixos e sem outras condições, a ordem desses fatores não altera o produto; não se deve inventar dependência de ordem nesse modelo. Taxas aplicadas a bases diferentes ou cobranças fixas exigem descrição própria. Evite arredondar em etapas intermediárias se o problema pede arredondamento apenas no final.",
        "steps": [
          "Defina qual quantidade é a base de cada razão.",
          "Converta porcentagem em fator multiplicativo quando houver mudança.",
          "Diferencie pontos percentuais e variação relativa.",
          "Multiplique fatores sucessivos e arredonde conforme a precisão solicitada."
        ],
        "example": "Comparação autoral: uma quantidade passa de 30 para 36, aumento de 6/30 = 20%. Voltar de 36 para 30 exige redução de 6/36 ≈ 16,67%, e não 20%. Os seis elementos de diferença são os mesmos, mas as bases de comparação mudaram. Não há pesquisa ou preço real sendo relatado.",
        "pitfall": "Cancelar taxas sucessivas sem considerar a base, confundir pontos percentuais com variação relativa ou afirmar que fatores fixos deixam de ser comutativos."
      },
      {
        "level": "intermediate",
        "title": "Capital, juros e regime de cálculo",
        "explanation": "Capital C é o valor inicial no modelo; juros J são o acréscimo calculado e montante M é C + J. Em juros simples com taxa fixa i por período e duração n compatível, J = C i n e M = C(1 + i n): a base dos juros permanece o capital inicial. No composto discreto, sem entradas ou saídas e com taxa fixa por período, cada saldo incorpora a capitalização anterior: M = C(1 + i)^n e J = M − C. Taxa de 1% entra como 0,01, não como 1. Os modelos não são definidos apenas por prazo curto ou longo, nem se conclui o regime de uma operação real só por ela ser bancária. O problema precisa dizer como a taxa e a capitalização funcionam. Taxas variáveis também exigem regime explícito: no composto, usam-se os fatores correspondentes aos períodos; no simples, preserva-se a base estipulada e somam-se os acréscimos pertinentes. Não se troca automaticamente de simples para composto só porque uma taxa mudou. Em taxas positivas, capital positivo e número inteiro de períodos maior que um, os dois modelos usuais podem ser comparados sob os mesmos dados; a diferença decorre das bases de capitalização. Aportes, retiradas, pagamentos, tarifas e tributos não estão contidos automaticamente nessas duas fórmulas básicas. Uma simulação com dados inventados é exercício matemático, não promessa de rendimento ou descrição completa de um contrato. Antes de resolver, registre unidade temporal, taxa efetiva por período e política de arredondamento.",
        "steps": [
          "Separe capital, juros e montante.",
          "Identifique o regime e alinhe unidade da taxa e duração.",
          "Use i em forma decimal e aplique a fórmula nas hipóteses dadas.",
          "Confira fluxo de valores e arredonde apenas como o enunciado determina."
        ],
        "example": "Modelo autoral de juros simples: C = R$ 1.000,00, i = 2% ao mês e n = 3 meses, sem outros custos. J = 1000·0,02·3 = R$ 60,00 e M = R$ 1.060,00. O acréscimo de cada mês nesse modelo é R$ 20,00, sem capitalizar o juro anterior. Isso não afirma que um produto financeiro real use esse regime.",
        "pitfall": "Usar 1 em vez de 0,01 para 1%, confundir J e M, deduzir regime pelo prazo ou aplicar fórmula sem considerar pagamentos e outros fluxos."
      },
      {
        "level": "advanced",
        "title": "Taxas equivalentes e variação do poder de compra",
        "explanation": "Taxas compostas equivalentes produzem o mesmo fator acumulado no mesmo intervalo. Se i_m é efetiva mensal constante, a efetiva em doze meses é (1 + i_m)^12 − 1; não se multiplica simplesmente por doze para obter equivalência composta exata. Uma taxa anual anunciada sem dizer se é efetiva ou nominal e qual a capitalização pode ser insuficiente para calcular o saldo. Em uma convenção de taxa nominal anual proporcional com capitalização mensal explicitada, pode-se obter a taxa mensal pela divisão por doze; essa convenção não se aplica automaticamente a toda taxa rotulada anual. O termo nominal também é usado na comparação com inflação para indicar variação monetária sem descontar a mudança de preços; leia em que sentido ele aparece. Para um saldo que cresce pela taxa nominal i e um índice de preços que varia pela inflação π no mesmo período, o fator de poder de compra em relação àquela cesta é (1 + i)/(1 + π), com denominador positivo. A variação real é esse fator menos 1. Subtrair i − π é aproximação em certas condições, não igualdade exata geral. A cesta e o período de referência precisam estar definidos; um índice agregado não descreve necessariamente todos os gastos de cada pessoa. Comparações também devem declarar se taxas e saldos já incluem custos e tributos. Nenhum exercício de taxa equivalente elimina risco, garante renda ou recomenda uma aplicação; estamos interpretando relações matemáticas com premissas fornecidas.",
        "steps": [
          "Identifique se a taxa é efetiva, nominal proporcional ou nominal frente à inflação.",
          "Iguale intervalos pelos fatores compostos apropriados.",
          "Compare saldo monetário e índice de preços do mesmo período.",
          "Diferencie expressão exata e aproximação e declare custos ou dados ausentes."
        ],
        "example": "Conversão autoral: uma taxa efetiva de 1% ao mês, constante por doze meses, dá fator 1,01^12 ≈ 1,126825 e taxa efetiva de cerca de 12,68% em doze meses. A soma 12·1% = 12% não fornece equivalência composta exata. A conta não informa qual rendimento será oferecido ou realizado por instituição alguma.",
        "pitfall": "Dividir uma taxa anual efetiva por doze como regra geral, chamar i − inflação de resultado sempre exato ou comparar taxas de períodos diferentes sem conversão."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Preço fictício em um exercício autoral: preço inicial de R$ 200, seguido de desconto de 15% e depois acréscimo de 15% sobre o preço já descontado. Sem outros valores, qual é o preço final em reais, com duas casas decimais?",
        "hint": "Aplique primeiro o fator 0,85 e depois 1,15; o acréscimo usa a base já alterada.",
        "options": [
          "R$ 200,00",
          "R$ 230,00",
          "R$ 195,50",
          "R$ 170,00"
        ],
        "correctIndex": 2,
        "solution": "C: 200·0,85 = 170 e 170·1,15 = 195,50. A supõe cancelamento de taxas iguais sem considerar bases sucessivas. B aplica só o acréscimo ao preço inicial, 200·1,15 = 230. D aplica só o desconto. No modelo com fatores fixos, a ordem da multiplicação não muda o produto; o erro não é trocar ordem, mas somar taxas como se incidissem sobre a mesma base."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral: capital de R$ 2000 com taxa de 1,0% ao mês em juros compostos, por 6 meses. Não há aportes, retiradas, tarifas ou tributos. Capitalize a cada mês e arredonde somente o montante final para duas casas decimais. Qual é esse montante?",
        "hint": "Use 2000·(1,01)^6 e não a expressão linear dos juros simples.",
        "options": [
          "R$ 2.123,04",
          "R$ 2.120,00",
          "R$ 2.006,00",
          "R$ 3.200,00"
        ],
        "correctIndex": 0,
        "solution": "A: M = 2000·1,01^6 ≈ 2123,040301, logo R$ 2.123,04. B corresponde a juros simples com os mesmos dados: 2000·(1 + 0,01·6) = 2120. C soma seis unidades monetárias ao capital, o que não aplica 1% mensal. D não satisfaz a fórmula com taxa 0,01; por exemplo, 3200 seria resultado simples com 10% mensais por seis meses, dados diferentes. O valor é resultado do modelo, não previsão de mercado."
      },
      {
        "level": "advanced",
        "prompt": "Cenário matemático fictício: no mesmo ano, um saldo tem variação nominal de 6% e a cesta de referência apresenta inflação de 5%. Os valores fornecidos já delimitam o saldo considerado, sem outros custos. Qual é a variação real do poder de compra em relação à cesta, aproximada a duas casas decimais em porcentagem?",
        "hint": "Divida o fator de crescimento monetário 1,06 pelo fator de preços 1,05 e depois subtraia 1.",
        "options": [
          "1,00%",
          "6,00%",
          "−0,95%",
          "0,95%"
        ],
        "correctIndex": 3,
        "solution": "D: (1,06/1,05 − 1)·100 ≈ 0,95238095%, ou 0,95%. A usa a diferença de seis e cinco pontos percentuais como se fosse a variação real exata. B ignora a mudança dos preços. C inverte o sinal: o saldo cresceu mais que a cesta no cenário dado. A comparação se refere àquela cesta e período, sem garantir poder de compra individual para qualquer conjunto de despesas."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Semântica e figuras de linguagem",
    "objective": "Interpretar sentidos de palavras em contexto, distinguir relações semânticas e figuras de linguagem e justificar inferências com marcas textuais, sem transformar leituras possíveis em certezas sobre a intenção de quem escreve.",
    "prerequisites": [
      "Leitura de frases e pequenos textos",
      "Identificação de contexto, interlocutores e finalidade comunicativa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Sentidos, relações entre palavras e contexto",
        "explanation": "Semântica estuda a significação; na leitura, o sentido de uma palavra precisa ser examinado na frase e na situação comunicativa. O dicionário registra acepções e usos, mas não escolhe sozinho qual deles está ativo em cada texto. Uma palavra pode ter sentidos relacionados, fenômeno chamado polissemia. Formas iguais também podem corresponder a palavras de sentidos e histórias distintos, discutidas como homônimos; a separação pode depender da análise lexicográfica, portanto a grafia isolada não resolve tudo. Denotação e conotação são distinções úteis para observar emprego referencial e associações ou valores evocados, sem afirmar que toda palavra possui uma única referência fixa e universal. Um emprego figurado pode ser convencional e fácil de compreender; sentido literal não equivale automaticamente a verdade, e linguagem figurada não equivale a mentira. Sinonímia envolve proximidade de sentido em determinado contexto, não substituição irrestrita em qualquer frase. Antônimos expressam oposição, mas há diferenças: entre quente e frio cabem graus; uma oposição classificatória pode funcionar de outro modo. A ambiguidade permite mais de uma leitura e pode surgir do léxico ou da organização sintática. Ela pode ser um problema de precisão ou um recurso intencional, conforme gênero e finalidade. Para interpretar, compare as leituras com as palavras vizinhas, o assunto e a situação; não associe obrigatoriamente uma emoção a uma palavra sem pista textual. Uma descrição de céu sem nuvens, por exemplo, não informa sozinha o estado emocional de uma personagem.",
        "steps": [
          "Localize a expressão e leia o enunciado completo.",
          "Liste acepções pertinentes sem confundir possibilidade com certeza.",
          "Use o contexto para comparar as leituras e as relações entre palavras.",
          "Explique o sentido construído e indique limites da interpretação."
        ],
        "example": "Microtexto autoral: “O fotógrafo sentou no banco da praça; depois passou no banco para pagar uma conta.” O complemento “da praça” seleciona um assento; a finalidade de pagar uma conta seleciona a instituição financeira. A repetição gráfica não obriga a atribuir o mesmo referente às duas ocorrências.",
        "pitfall": "Tratar a primeira acepção do dicionário como resposta automática ou afirmar que duas palavras próximas podem ser trocadas em qualquer construção."
      },
      {
        "level": "intermediate",
        "title": "Figuras de linguagem e seus efeitos",
        "explanation": "Figuras de linguagem ajudam a construir imagens, avaliações, ritmos e modos de apresentar uma experiência. Metáfora aproxima domínios por uma relação de semelhança ou analogia construída no contexto, sem exigir comparação explícita. Comparação estabelece essa aproximação de forma expressa, frequentemente com termos como “como”; a presença da palavra como, porém, não basta, pois ela tem outras funções. Metonímia explora associação ou contiguidade, como autor por obra, recipiente por conteúdo ou instituição pelas pessoas que nela atuam. A associação precisa ser demonstrada no enunciado: não se inventa um vínculo convencional só para encaixar um rótulo. Personificação atribui ações ou características humanas a entidades não humanas; pode coexistir com outras figuras, conforme o recorte de análise. Hipérbole intensifica por exagero, enquanto eufemismo apresenta de modo atenuado algo potencialmente desagradável; nenhum deles produz sempre o mesmo efeito em todos os gêneros. Antítese aproxima termos ou ideias opostos; paradoxo articula uma aparente contradição que exige interpretação. Sinestesia aproxima impressões de campos sensoriais distintos. Ironia depende de pistas que permitam afastar o sentido visado de uma leitura direta, muitas vezes por contraste entre avaliação e situação; não é sinônimo obrigatório de sarcasmo ou ofensa. Identificar a figura é parte da análise, não sua conclusão. Explique o que ela destaca e como participa do texto. Recursos podem coexistir; quando uma questão pede o predominante, considere o trecho e o aspecto delimitado em vez de afirmar que toda frase aceita apenas um nome.",
        "steps": [
          "Identifique qual relação de sentido a expressão estabelece.",
          "Diferencie analogia e associação entre referentes.",
          "Procure contraste, exagero, atenuação ou aproximação sensorial.",
          "Relacione o recurso ao efeito sustentado pelo contexto."
        ],
        "example": "Microtexto autoral: “A saudade era uma mala que ele carregava sem alça.” A mala organiza metaforicamente a saudade como peso difícil de transportar; a frase não informa massa física de um sentimento. Já em “No café, bebeu duas xícaras e devolveu as peças vazias ao balcão”, o recipiente designa a bebida consumida, numa associação metonímica sustentada pelo contexto.",
        "pitfall": "Dar apenas o nome da figura, inventar uma relação entre termos ou tomar a leitura figurada como erro factual que precisa ser corrigido."
      },
      {
        "level": "advanced",
        "title": "Inferências, ironia e limites da interpretação",
        "explanation": "Compreender um texto também exige relacionar o que é dito a informações contextuais. Uma inferência pode ser bem apoiada sem estar expressa literalmente; isso não autoriza acrescentar detalhes sem evidência. Na análise pragmática, implicatura conversacional designa um sentido comunicado indiretamente e recuperável pelas condições da interação. Ela se distingue de uma conclusão que decorre necessariamente do conteúdo afirmado. Certas implicaturas podem ser canceladas por uma continuação compatível, o que ajuda a avaliar seu caráter contextual, embora não funcione como teste mecânico para todo fenômeno. O princípio de cooperação e as máximas de Grice constituem uma proposta teórica importante para explicar essas interpretações, não uma regra segundo a qual toda pessoa é sincera ou toda leitura depende de obediência consciente a máximas. Outras abordagens também discutem intenção, relevância e contexto. Ironia pode comunicar uma avaliação diferente da expressão literal: a discrepância precisa ser sustentada por pistas, como um elogio em situação claramente malsucedida. Não é possível inferir a emoção exata de quem fala, sua biografia ou uma opinião permanente a partir de uma frase isolada. Ambiguidades de escopo da negação também pedem cuidado: negar uma ação ou negar a razão alegada para ela não são necessariamente a mesma leitura. Em textos argumentativos e publicitários, observe ainda quais associações são estimuladas, quais informações ficam implícitas e que leitura alternativa permanece possível. Uma resposta sólida aponta as marcas que a sustentam e separa informação explícita, inferência plausível e extrapolação.",
        "steps": [
          "Separe o conteúdo expresso das conclusões inferidas.",
          "Localize pistas da situação e do encadeamento textual.",
          "Teste uma leitura alternativa ou continuação compatível.",
          "Justifique a conclusão e não atribua intenções sem evidência."
        ],
        "example": "Diálogo autoral: “Você vai participar da reunião das dez?” “Nesse horário estarei no ônibus, sem conexão.” É plausível entender que a pessoa não participará on-line naquele momento; isso não foi dito com essas palavras. A continuação “mas acompanharei a gravação depois” esclarece outra possibilidade sem tornar falsa a informação sobre o ônibus.",
        "pitfall": "Confundir inferência contextual com consequência necessária, pressupor sarcasmo em todo elogio ou transformar a ambiguidade de uma frase em prova de uma única intenção."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Microtexto autoral: “O relatório traz dados claros; na fotografia anexada, o céu está claro.” Considerando as duas ocorrências de claro, qual leitura se sustenta pelo contexto?",
        "hint": "Compare o que pode ser compreensível em um relatório com a característica visual descrita na fotografia.",
        "options": [
          "As duas ocorrências descrevem obrigatoriamente a cor branca dos objetos.",
          "A repetição de claro prova que o relatório e o céu têm o mesmo referente.",
          "No relatório, claro sugere compreensão ou apresentação nítida; na fotografia, descreve uma condição visual do céu.",
          "A frase demonstra que o autor está feliz, pois claro sempre indica alegria."
        ],
        "correctIndex": 2,
        "solution": "C é a leitura apoiada pelos contextos: dados claros podem ser compreensíveis ou apresentados com nitidez, enquanto céu claro tem emprego visual. A impõe cor branca a contextos que não a exigem. B confunde repetição lexical com identidade de referente. D atribui uma emoção sem evidência e universaliza uma associação. Não é necessário supor que o céu não tenha nenhuma nuvem ou que o relatório não possa ter problemas."
      },
      {
        "level": "intermediate",
        "prompt": "Microtexto autoral: “Na mostra, o visitante contemplou um Portinari emprestado pelo museu.” O complemento sobre o empréstimo e a situação da mostra orientam qual análise de um Portinari?",
        "hint": "Investigue a associação entre o nome do artista e aquilo que pode ser contemplado e emprestado em uma mostra.",
        "options": [
          "Comparação explícita entre o visitante e o artista, construída pela palavra um.",
          "Metonímia do autor pela obra, pois o contexto aponta para uma produção de Portinari.",
          "Hipérbole que informa que o artista possuía tamanho físico extraordinário.",
          "Personificação de uma parede, à qual se atribui capacidade humana de contemplação."
        ],
        "correctIndex": 1,
        "solution": "B: o nome do autor designa uma obra sua, relação de associação sustentada pela mostra e pelo empréstimo do museu. Não há comparação entre visitante e artista, como diz A; o artigo não realiza essa comparação. C introduz tamanho extraordinário ausente do texto. D inventa parede e desloca a ação, praticada pelo visitante. O enunciado é didático e autoral, sem alegar um empréstimo real ou identificar uma obra histórica específica."
      },
      {
        "level": "advanced",
        "prompt": "Cena autoral: a impressora enguiça pela terceira vez, atrasando a entrega. Ao ver o aviso de falha, alguém comenta: “Que eficiência exemplar!” Qual interpretação tem melhor apoio nas pistas da cena?",
        "hint": "Compare a avaliação positiva das palavras com a repetição da falha e o atraso explicitados no enunciado.",
        "options": [
          "Ironia: o elogio literal contrasta com as falhas, permitindo ler uma crítica à eficiência naquela situação.",
          "Confirmação técnica de que a impressora ultrapassou uma meta de produtividade medida em laboratório.",
          "Prova de que a pessoa sempre odeia tecnologia, em todos os ambientes e períodos de sua vida.",
          "Declaração literal de desempenho excelente, pois o contexto nunca modifica a leitura de um elogio."
        ],
        "correctIndex": 0,
        "solution": "A: a terceira falha e o atraso sustentam um afastamento da leitura literal do elogio, permitindo entender crítica irônica à situação. B acrescenta laboratório, medidas e meta que não aparecem. C extrapola da cena para uma disposição permanente da pessoa. D ignora o contraste contextual. O trecho permite essa interpretação irônica sem provar uma emoção exata, sarcasmo agressivo ou uma opinião geral sobre todas as tecnologias."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Parnasianismo e Simbolismo",
    "objective": "Comparar tendências do Parnasianismo e do Simbolismo no Brasil, relacionando trabalho formal, imagens, musicalidade e sugestão, com análise de textos e sem reduzir autores ou poemas a regras absolutas de uma escola.",
    "prerequisites": [
      "Noções de verso, estrofe, rima e eu lírico",
      "Leitura de metáforas e imagens sensoriais",
      "Contexto geral da literatura brasileira do século XIX"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Parnasianismo: trabalho formal e diversidade",
        "explanation": "O Parnasianismo brasileiro ganhou destaque nas últimas décadas do século XIX, em diálogo com a poesia francesa e outras tradições. Olavo Bilac, Alberto de Oliveira e Raimundo Correia são referências centrais, mas não resumem todos os autores ou as diferenças entre as obras. A valorização do trabalho formal envolve elaboração do verso, escolha vocabular, métrica, rimas e organização da composição. A comparação do poeta com um artesão e a aproximação entre poesia e artes visuais ajudam a compreender esse programa estético. A expressão arte pela arte costuma sintetizar a defesa da autonomia artística; não prova, entretanto, que cada poema seja indiferente à experiência humana nem que todo escritor tenha abandonado posições políticas. Bilac, por exemplo, atuou publicamente em campanhas cívicas e escreveu poesia lírica. Sua publicação Poesias, de 1888, é importante para a trajetória do autor, não a data de nascimento de todo o movimento. Descrição de objetos, referências clássicas e preferência por formas fixas aparecem com frequência, mas frequência não é obrigação sem exceção. O soneto não pertence exclusivamente ao Parnasianismo, e rigor formal tampouco implica ausência de amor, sofrimento ou reflexão. Para analisar um poema, observe como a seleção de imagens e a disposição dos versos produzem um efeito, em vez de apenas localizar palavras difíceis. Se o texto completo não foi fornecido, não invente um esquema de rimas ou uma contagem de sílabas. A escansão depende da leitura poética, de encontros vocálicos e da última sílaba tônica do verso, não da simples soma das sílabas gramaticais de todas as palavras.",
        "steps": [
          "Situe autor e obra sem transformar datas em fronteiras rígidas.",
          "Examine organização, imagens e escolhas vocabulares.",
          "Analise métrica e rimas apenas com versos disponíveis.",
          "Diferencie uma tendência estética de uma regra universal."
        ],
        "example": "Situação autoral de leitura: uma turma encontra um poema sobre um vaso, com descrição das curvas e vocabulário cuidadosamente selecionado. Esses elementos permitem investigar trabalho plástico e elaboração formal. Não bastam, isoladamente, para atribuir autoria a Alberto de Oliveira nem para garantir que todo poema sobre objetos seja parnasiano.",
        "pitfall": "Confundir cuidado formal com ausência total de sentimentos ou supor que a forma soneto identifique sozinha o movimento e a autoria."
      },
      {
        "level": "intermediate",
        "title": "Simbolismo: musicalidade, imagens e sugestão",
        "explanation": "O Simbolismo se consolidou no final do século XIX e valorizou recursos capazes de sugerir experiências que não se esgotam numa descrição direta. No Brasil, Missal e Broquéis, publicados por Cruz e Sousa em 1893, são marcos convencionais do movimento; Missal reúne poemas em prosa, enquanto Broquéis apresenta poesia em versos. Alphonsus de Guimaraens também é um nome importante da produção simbolista brasileira. Musicalidade, recorrência de sons, imagens sensoriais, atmosferas de sonho, espiritualidade e exploração do mundo interior aparecem em diferentes combinações. Não é correto concluir que todos os poemas possuam os mesmos temas ou que a religiosidade seja uma exigência formal da escola. Aliteração envolve recorrência de sons consonantais; assonância, de sons vocálicos. Elas precisam ser reconhecidas pelo som e pelo efeito no contexto, sem reduzir qualquer repetição de letra a um recurso expressivo significativo. Sinestesia aproxima campos sensoriais distintos, como uma qualidade tátil aplicada a uma impressão sonora. Sugestão não equivale a ausência de sentido: uma interpretação deve conversar com as imagens, as relações entre palavras e o encadeamento do poema. Também não se deve definir todo símbolo como um código de tradução fixa ou toda alegoria como um fenômeno simples e sem ambiguidade. As tradições críticas discutem esses conceitos de maneiras diferentes. Muitos simbolistas empregaram sonetos, versos metrificados e rimas; por isso, associar o movimento à abolição obrigatória da técnica é um erro. Os mesmos recursos formais podem sustentar efeitos distintos conforme a construção do texto.",
        "steps": [
          "Reconheça imagens e campos sensoriais efetivamente presentes.",
          "Observe a recorrência sonora e seu papel no trecho.",
          "Relacione musicalidade e sugestão a leituras sustentáveis.",
          "Evite usar sonho ou soneto como classificação automática."
        ],
        "example": "Microtexto autoral didático, sem atribuição histórica: “Na neblina, o sino espalha um frio de prata.” A impressão sonora do sino se aproxima do frio e de uma imagem de brilho, sugerindo uma atmosfera em vez de fornecer apenas localização e horário. É possível analisar essa associação sensorial sem alegar que o verso pertence a Cruz e Sousa.",
        "pitfall": "Afirmar que o Simbolismo exige verso livre ou que qualquer associação pessoal do leitor vale, mesmo sem apoio nas palavras do texto."
      },
      {
        "level": "advanced",
        "title": "Comparar textos sem transformar escolas em opostos absolutos",
        "explanation": "Movimentos literários são categorias históricas e críticas que ajudam a organizar comparações; não são recipientes impermeáveis. Parnasianismo e Simbolismo coexistiram no Brasil, e suas obras podem compartilhar formas fixas, elaboração sonora e imagens. O contraste escolar entre maior ênfase na plasticidade e maior ênfase na sugestão é útil como ponto de partida, mas não substitui a análise de poemas específicos. Um soneto simbolista pode apresentar métrica rigorosa, e um poema parnasiano pode tratar de amor ou sofrimento. Não há fundamento para declarar toda produção romântica espontânea e sem técnica, toda obra naturalista socialmente engajada ou todo texto simbolista indiferente à realidade. Contextos sociais e posições dos autores precisam ser investigados com fontes e obras. Em Cruz e Sousa, a condição de escritor negro no Brasil pós-abolição integra questões históricas relevantes, mas não autoriza transformar imagens de cor em diagnóstico psicológico ou numa única chave explicativa de toda a sua poesia. Na comparação, descreva primeiro o que cada texto faz: foco descritivo, organização das imagens, sons, presença do eu lírico e modo de sugerir ou nomear experiências. Depois relacione os achados a tendências, deixando explícito o que o recorte permite concluir. A data de publicação ou um adjetivo isolado não prova filiação estética. Microtextos didáticos podem ajudar a testar diferenças de efeito, desde que identificados como criações atuais e não como documentos de época. A leitura mais consistente combina evidência textual, autoria verificada, contexto e reconhecimento dos limites de uma classificação, evitando uma narrativa de substituição imediata e completa entre movimentos.",
        "steps": [
          "Compare trechos com atenção ao efeito predominante.",
          "Registre os elementos comuns e as diferenças observáveis.",
          "Relacione os achados a tendências historicamente contextualizadas.",
          "Explique limites e não invente intenção ou filiação com base em um traço."
        ],
        "example": "Comparação autoral: dois leitores encontram sonetos com rimas regulares. Num deles, a descrição de uma peça de cerâmica orienta o olhar; no outro, sons recorrentes e imagens de sonho organizam a experiência. A forma compartilhada não elimina a diferença de efeitos, mas nenhum desses resumos, sozinho, comprova data, autoria ou movimento de um poema real.",
        "pitfall": "Construir uma oposição entre técnica e emoção, ou afirmar que o surgimento do Simbolismo fez desaparecer imediatamente toda produção parnasiana."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Ao estudar Parnasianismo, uma turma lê que Olavo Bilac trabalhou cuidadosamente formas fixas e também escreveu poesia amorosa. Qual conclusão é compatível com essas informações e com os limites de uma classificação literária?",
        "hint": "Uma tendência de elaboração formal não exclui necessariamente um tema afetivo; não transforme ênfase estética em proibição.",
        "options": [
          "A presença de amor torna impossível relacionar qualquer poema de Bilac ao Parnasianismo.",
          "Todo soneto, de qualquer período ou autor, pertence obrigatoriamente à mesma escola parnasiana.",
          "O trabalho formal pode coexistir com temas amorosos; tendências de uma escola não apagam a diversidade das obras.",
          "A informação demonstra que nenhum poeta parnasiano se preocupava com rima, ritmo ou seleção vocabular."
        ],
        "correctIndex": 2,
        "solution": "C: forma elaborada e tema amoroso não são incompatíveis. A cria uma proibição inexistente a partir de uma tendência. B transforma o soneto, forma usada em vários períodos, em propriedade exclusiva de um movimento. D nega a valorização formal informada pelo enunciado. A análise de uma obra depende do texto e do contexto, não de uma lista de características tratadas como condições obrigatórias para todos os poemas."
      },
      {
        "level": "intermediate",
        "prompt": "Microtexto autoral didático, sem autoria histórica: “A voz de veludo atravessa a sala.” No contexto de análise de imagens sensoriais, que recurso se evidencia em voz de veludo?",
        "hint": "Observe a qualidade habitualmente percebida pelo tato que foi aproximada de uma impressão auditiva.",
        "options": [
          "Descrição científica de que a voz é um tecido sólido formado por fibras visíveis.",
          "Sinestesia, pela associação entre impressão auditiva e qualidade tátil sugerida pelo veludo.",
          "Prova documental de que o fragmento foi publicado em Broquéis em 1893.",
          "Regra segundo a qual toda palavra relacionada à audição produz obrigatoriamente uma rima."
        ],
        "correctIndex": 1,
        "solution": "B: a voz, percebida auditivamente, é aproximada da maciez tátil do veludo; essa combinação sensorial permite falar em sinestesia no recorte pedido. Pode também ser discutida a transferência metafórica, sem que isso invalide o aspecto sensorial delimitado. A literaliza a imagem. C atribui uma origem histórica explicitamente negada. D confunde campo sensorial com correspondência sonora entre terminações de versos."
      },
      {
        "level": "advanced",
        "prompt": "Uma ficha de leitura descreve dois poemas completos já examinados: ambos são sonetos com rimas regulares. No primeiro predomina a composição visual de um objeto; no segundo, imagens sensoriais e atmosfera de sonho. Qual análise evita uma oposição simplista entre Parnasianismo e Simbolismo?",
        "hint": "Separe forma compartilhada e efeitos predominantes; um resumo de recursos não basta para autenticar autoria ou filiação.",
        "options": [
          "O segundo não pode apresentar tendências simbolistas, porque qualquer soneto é exclusivamente parnasiano.",
          "O primeiro não tem significado, já que a descrição de objetos elimina necessariamente qualquer experiência humana.",
          "A regularidade das rimas prova que os dois poemas têm o mesmo autor e foram publicados no mesmo ano.",
          "Formas fixas podem servir a efeitos diferentes; a comparação pode discutir tendências sem deduzir autoria ou filiação apenas desses traços."
        ],
        "correctIndex": 3,
        "solution": "D: soneto e rima regular não determinam sozinhos um movimento; diferenças de imagens e efeitos permitem uma comparação contextualizada, sem autenticar autoria. A impõe exclusividade falsa ao soneto. B confunde descrição de objetos com ausência de significado. C infere identidade de autor e data sem fonte. O recorte permite investigar proximidades estéticas, mas não substitui a consulta às obras, à autoria e à história de circulação."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Proposta de intervenção e direitos humanos (ENEM)",
    "objective": "Elaborar e revisar propostas de intervenção articuladas ao problema discutido no ENEM, com ação explícita, responsáveis e execução compreensíveis, respeito aos direitos humanos e distinção entre orientação de escrita e nota oficial.",
    "prerequisites": [
      "Delimitação de tema e tese em texto argumentativo",
      "Relação entre problema, argumentos e conclusão",
      "Leitura crítica de propostas e consequências para as pessoas envolvidas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Do problema discutido a uma ação explícita",
        "explanation": "Esta aula focaliza a redação do ENEM; não transfere seus critérios automaticamente para FUVEST, VUNESP ou outros processos seletivos. A Competência V avalia uma proposta de intervenção para o problema abordado, com respeito aos direitos humanos. A cartilha de 2026 diferencia indicar uma medida de apenas reconhecer uma carência. Na prática de escrita, comece delimitando o problema que seu desenvolvimento realmente explicou. Se o argumento trata de dificuldade de acesso, a conclusão precisa mostrar como a medida proposta atua sobre essa dificuldade; inserir uma frase sobre assunto próximo pode deixar o raciocínio incompleto. Um procedimento editorial útil é escrever, num rascunho, três linhas: obstáculo, mecanismo que o mantém e ação capaz de enfrentá-lo. Esse procedimento é uma estratégia de estudo do Kognos, não um formulário oficial ou uma exigência de três linhas na prova. Compare depois o verbo da proposta com os termos do diagnóstico: descrever que um serviço falta não informa o que alguém deve fazer. Também não basta acrescentar um conectivo conclusivo a uma descrição para transformá-la em medida. Uma intervenção pode reconhecer limites e ainda assim afirmar claramente o que recomenda. Não invente uma política já existente, uma lei ou uma estatística para dar aparência de autoridade ao parágrafo. Nos exercícios desta aula, cenários e ações são hipotéticos; servem para testar coerência, não para relatar resultados de programas reais.",
        "steps": [
          "Retome o problema delimitado no desenvolvimento.",
          "Identifique a barreira sobre a qual pretende agir.",
          "Formule o que deve ser feito com um verbo claro.",
          "Confira se a frase recomenda uma medida ou apenas descreve a situação."
        ],
        "example": "Rascunho autoral: o texto discutiu que orientações escolares chegam somente por mensagens em um aplicativo. Escrever “há falhas de comunicação” descreve o problema. Recomendar que a escola disponibilize também avisos impressos em local de circulação apresenta uma medida; ainda é possível explicar responsáveis, execução e objetivo.",
        "pitfall": "Apresentar somente uma constatação ou inserir uma conclusão pronta que não responde ao problema efetivamente desenvolvido."
      },
      {
        "level": "intermediate",
        "title": "Responsabilidade, execução e detalhamento",
        "explanation": "A cartilha orienta explicitar ação, agente, meio de execução, efeito ou finalidade e detalhamento. Como estratégia de revisão, transforme esses elementos em perguntas sobre seu próprio parágrafo, sem depender da repetição de palavras como agente e finalidade no texto final. Quem pode realizar a medida no cenário descrito? O que essa pessoa, grupo ou instituição fará? Por qual procedimento? Para enfrentar qual obstáculo? Que informação torna a proposta mais compreensível? Essa leitura ajuda a descobrir lacunas e contradições. Dizer que alguém informará pessoas que não têm acesso a mensagens exclusivamente por uma nova mensagem no mesmo canal, por exemplo, pode conservar a barreira diagnosticada. O agente deve ter relação plausível com a ação; nomear uma autoridade conhecida não demonstra por si só que ela pode executar qualquer tarefa. Detalhar não significa acumular instituições, siglas ou valores inventados. Um esclarecimento sobre público, funcionamento ou etapa de execução pode tornar o raciocínio mais preciso. As medidas não precisam prometer eliminar definitivamente um fenômeno social complexo; explique a contribuição pretendida e diferencie objetivo de resultado já comprovado. Depois, revise se pronomes e conectivos mantêm os responsáveis identificáveis. A presença de cinco rótulos não garante 200 pontos: articulação, clareza e avaliação do texto continuam necessárias. Tampouco esta atividade atribui nota oficial; ela fornece critérios para o estudante analisar e melhorar sua redação.",
        "steps": [
          "Identifique quem executa a ação e por que o agente é pertinente.",
          "Explique o procedimento de execução sem manter a barreira inicial.",
          "Relacione a finalidade ao argumento desenvolvido.",
          "Acrescente informação esclarecedora e elimine promessas ou dados inventados."
        ],
        "example": "Proposta autoral para circulação de livros: a equipe de uma biblioteca comunitária deve organizar empréstimos em um ponto móvel, com calendário divulgado no bairro, para alcançar leitores distantes da sede; cada visita terá horário público de retirada e devolução. O calendário e o funcionamento ajudam a explicar a execução, sem afirmar que o projeto exista ou já tenha resultados.",
        "pitfall": "Nomear instituições ou repetir os cinco elementos como fórmula decorada, sem explicar como a medida enfrenta a barreira discutida."
      },
      {
        "level": "advanced",
        "title": "Direitos humanos e revisão das consequências",
        "explanation": "Respeitar direitos humanos exige observar o que a medida faz às pessoas, e não apenas acrescentar a expressão dignidade humana no fim de um parágrafo. A Declaração Universal afirma igualdade em dignidade e direitos e rejeita discriminação e tortura. Na revisão de uma proposta, pergunte quem será incluído, quem pode ser impedido de participar e se os meios recomendados negam proteção a algum grupo. Combater um problema não justifica sugerir violência, humilhação ou retirada arbitrária de direitos das pessoas acusadas de praticá-lo. No ENEM, proposta que desrespeita os direitos humanos recebe zero na Competência V; isso não significa automaticamente zero na redação inteira, que possui outras regras de avaliação e anulação. É preciso distinguir esses âmbitos ao estudar, sem minimizar a gravidade de uma violação. Como prática editorial, releia o parágrafo pela perspectiva de uma pessoa afetada: ela consegue acessar a ação proposta? Há uma alternativa para quem não dispõe do recurso exigido? O texto confunde escolha funcional de acessibilidade com obrigação de revelar diagnóstico de saúde? Não é necessário coletar ou inventar informações pessoais para construir um exemplo inclusivo. Em seguida, confronte a proposta com a tese: uma solução pode ter aparência detalhada e ainda contradizer os argumentos. Evite concluir que uma medida é adequada só porque tem muitos componentes. Uma revisão responsável verifica vínculo com o problema, meios, consequências e clareza, preservando o caráter de proposta a ser avaliada, sem prometer execução real ou pontuação oficial.",
        "steps": [
          "Examine os efeitos da medida sobre todas as pessoas envolvidas.",
          "Rejeite violência, discriminação e privação arbitrária de direitos.",
          "Diferencie a avaliação da Competência V das regras de anulação total.",
          "Revise a coerência entre tese, intervenção e condições de acesso."
        ],
        "example": "Cenário autoral: uma atividade cultural aceita inscrição apenas por formulário digital. A equipe pode oferecer também inscrição assistida no local e permitir escolha de formato acessível para os avisos. Essa alternativa enfrenta a barreira de acesso sem condicionar participação à revelação de diagnóstico e sem prometer que uma única medida resolverá toda desigualdade cultural.",
        "pitfall": "Considerar suficiente escrever direitos humanos enquanto a própria medida exclui, humilha ou incentiva violência contra pessoas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num treino autoral de redação do ENEM sobre barreiras ao acesso à leitura, o desenvolvimento aborda a dificuldade de usar uma biblioteca. A conclusão diz somente: “Faltam horários de atendimento compatíveis com a rotina dos moradores.” O que essa frase apresenta, sem acrescentar informações que não estão nela?",
        "hint": "Observe se o enunciado recomenda uma medida ou apenas reconhece a existência de uma carência.",
        "options": [
          "Uma medida detalhada, pois qualquer frase com a palavra atendimento indica necessariamente uma ação futura.",
          "Uma constatação; sozinha, não constitui uma ação proposta para enfrentar a carência descrita.",
          "Uma garantia de nota máxima na Competência V, independentemente do restante da redação.",
          "Um relato verificado de que a biblioteca já ampliou seus horários e mediu os resultados."
        ],
        "correctIndex": 1,
        "solution": "B: a frase reconhece incompatibilidade de horários, mas não recomenda explicitamente uma ação para mudá-la. A transforma a menção a atendimento em proposta sem fundamento. C inventa garantia de pontuação. D acrescenta execução e medição inexistentes. Uma revisão poderia recomendar uma medida coerente e esclarecer quem a realizaria; a formulação atual não contém essas informações."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: o desenvolvimento argumenta que parte dos moradores não tem conexão à internet para agendar um serviço comunitário. Qual proposta enfrenta diretamente essa barreira, com execução compreensível, sem excluir quem está desconectado?",
        "hint": "Compare os meios sugeridos com a falta de conexão identificada como obstáculo no próprio cenário.",
        "options": [
          "A equipe do serviço deve oferecer canal presencial de agendamento em horário divulgado no bairro, além do digital, para permitir acesso também a quem não tem conexão.",
          "A equipe deve aceitar apenas agendamento on-line e divulgar essa regra exclusivamente pelo mesmo aplicativo que os moradores não conseguem acessar.",
          "Os moradores sem internet devem perder o direito de usar o serviço, pois excluir esse público é o objetivo necessário de todo agendamento.",
          "Uma autoridade indeterminada deve resolver tudo de algum modo, sem definir medida, procedimento ou relação com o acesso."
        ],
        "correctIndex": 0,
        "solution": "A oferece alternativa compatível com a barreira, identifica equipe responsável, meio e finalidade. B preserva a exigência de conexão que motivou o problema. C substitui inclusão por exclusão e não responde adequadamente ao objetivo. D não permite compreender a execução. O cenário é hipotético; a alternativa não declara que esse serviço exista nem promete eliminar todas as dificuldades de acesso."
      },
      {
        "level": "advanced",
        "prompt": "Na revisão de uma redação do ENEM, identifica-se uma proposta de intervenção que incita violência contra um grupo social. Qual distinção sobre a avaliação está correta segundo a orientação de 2026, sem inventar pontuação para as demais competências?",
        "hint": "Separe a penalidade específica na competência da intervenção das outras situações que podem anular um texto inteiro.",
        "options": [
          "A simples presença de um agente e de um meio torna aceitável qualquer medida violenta.",
          "A proposta recebe automaticamente 200 pontos se usar a expressão direitos humanos ao final.",
          "A violência não interfere na Competência V quando a redação tem conectivos variados.",
          "A proposta recebe zero na Competência V; isso não significa automaticamente zero na redação inteira."
        ],
        "correctIndex": 3,
        "solution": "D distingue os âmbitos: a violação implica zero na competência que avalia a intervenção, sem deduzir automaticamente a nota total ou as demais competências. A trata detalhamento como licença para violência. B transforma uma expressão em garantia de pontuação. C confunde recursos de coesão com respeito aos direitos humanos. Outras regras podem levar à anulação total, mas não se presume nenhuma delas apenas com os dados deste item."
      }
    ]
  }
];

export const authoredCurriculumBatch09ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Porcentagem e juros",
    "contentSha256": "4eee1ef9988a2bb0c0e4bbea795336f970da566ec4f7f1c70fc5e66b32ab3987",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/prealgebra-2e/pages/6-2-solve-general-applications-of-percent",
      "https://openstax.org/books/college-algebra-2e/pages/6-1-exponential-functions",
      "https://www.bcb.gov.br/content/cidadaniafinanceira/documentos_cidadania/Informacoes_gerais/glossario_cidadania_financeira.pdf",
      "https://www.caixa.gov.br/educacao-financeira/voce/juros-inflacao/Paginas/default.aspx",
      "https://www.ibge.gov.br/explica/inflacao.php"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Aplicação correta de fatores multiplicativos sequenciais: 200 × 0,85 = 170, então 170 × 1,15 = 195,50; distratores A (R$ 200,00), B (R$ 230,00) e D (R$ 170,00) representam erros de cancelamento indevido de taxas, aplicação de apenas o acréscimo ou apenas o desconto sobre a base inicial."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Cálculo de juros compostos: 2000 × (1,01)^6 ≈ 2123,0403, arredondado para R$ 2.123,04; opção B (R$ 2.120,00) corresponde erroneamente a juros simples com mesmos dados (2000 × (1 + 0,01·6)), opção C (R$ 2.006,00) soma unidades monetárias sem aplicar a taxa mensal, opção D (R$ 3.200,00) seria resultado com taxa de 10% ao mês por seis meses em juros simples."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A variação real é (1,06/1,05 − 1) × 100 ≈ 0,95238%, portanto 0,95%, índice 3. A usa a diferença de taxas como igualdade exata; B ignora os preços; C troca o sinal da resposta correta. A divisão inversa produziria aproximadamente −0,94%, não exatamente o distrator −0,95%, e não deve ser confundida com simples inversão do sinal."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Semântica e figuras de linguagem",
    "contentSha256": "ec8101fd9b92bc1d980a65dcf008267c0a84c9d67341423223e2a710f44dcc69",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://michaelis.uol.com.br/moderno-portugues/busca/portugues-brasileiro/metafora/",
      "https://michaelis.uol.com.br/moderno-portugues/busca/portugues-brasileiro/metonimia",
      "https://www.institutoclaro.org.br/educacao/para-ensinar/planos-de-aula/figuras-semanticas/",
      "https://plato.stanford.edu/entries/implicature/",
      "https://www.scielo.br/j/alfa/a/qTxqBmXZ7dYSDKr9QKJGSYp/?lang=pt"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A resolução independente confirma que a opção C (índice 2) é a única que suporta o contexto: no relatório, 'claro' sugere compreensão ou apresentação nítida; na fotografia, descreve condição visual do céu. As outras opções cometem falácios: A impõe cor branca a contextos que não a exigem, B confunde repetição lexical com identidade de referente, D atribui emoção sem evidência e universaliza associação."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A resolução independente confirma que a opção B (índice 1) é a única que suporta o contexto: o nome do autor 'Portinari' designa uma obra sua através de associação sustentada pela mostra e empréstimo do museu. As outras opções cometem erros: A inventa comparação entre visitante e artista inexistente no texto, C introduz tamanho físico extraordinário não mencionado, D desloca a ação de contemplação para uma parede."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A resolução independente confirma que a opção A (índice 0) é a única que suporta o contraste contextual: a falha repetida da impressora e o atraso sustentam uma crítica irônica ao elogio 'Que eficiência exemplar!'. As outras opções erram: B acrescenta laboratório, medidas e meta ausentes do enunciado, C extrapola para disposição permanente da pessoa além da cena, D ignora completamente o contraste contextual que viabiliza a leitura irônica."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Parnasianismo e Simbolismo",
    "contentSha256": "bc06632f79927262407e38364acea25b047db21598d90f66ceec11163e4a4f3c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.academia.org.br/academicos/olavo-bilac/biografia",
      "https://bndigital.bn.gov.br/dossies/periodicos-literatura/personagens-periodicos-literatura/olavo-bilac/",
      "https://digital.bbm.usp.br/handle/bbm/3957?locale=pt_BR",
      "https://www.sistemademuseus.mg.gov.br/museus-de-minas/museus-estaduais/museu-casa-alphonsus-de-guimaraes/",
      "https://www.gov.br/casaruibarbosa/pt-br/centrais-de-conteudo/publicacoes/pdfs/copy6_of_INVENTRIODOARQUIVOCRUZESOUSA_PDF_2021.pdf",
      "https://www.gov.br/bn/pt-br/central-de-conteudos/producao/publicacoes/colecoes/publicacoes-avulsas/parnasianismo-2013-roteiro-da-poesia-brasileira"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa C é correta porque estabelece compatibilidade entre formalidade e temas afetivos, reconhecendo que tendências de escola não apagam diversidade das obras; o distrator A cria proibição inexistente a partir de uma tendência; o distrator B transforma soneto em propriedade exclusiva de um movimento, o que é falso; o distrator D nega a valorização formal informada pelo enunciado. A resolução independente considera o texto e o contexto, não lista de características tratadas como condições obrigatórias para todos os poemas."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A alternativa B é correta porque a combinação de impressão auditiva com qualidade tátil sugerida por 'veludo' evidencia sinestesia no recorte solicitado; o distrator A reduz a voz a tecido sólido visível, ignorando o aspecto sensorial auditivo; o distrator C atribui origem histórica explicitamente negada pelo texto autoral didático sem reivindicação histórica; o distrator D confunde campo sensorial com correspondência sonora entre terminações de versos. A análise deve basear-se nas palavras do texto e não em regras universais não especificadas."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa D é correta porque forma fixa e rima regular não determinam sozinhas um movimento literário; diferenças de imagens e efeitos permitem comparação contextualizada sem autenticar autoria ou filiação; o distrator A impõe exclusividade falsa ao soneto; o distrator B confunde descrição de objetos com ausência de significado; o distrator C identidade de autor e data sem fonte. A leitura consistente combina evidência textual, autoria verificada, contexto e reconhecimento de limites de classificação, evitando narrativa de substituição imediata e completa entre movimentos."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Proposta de intervenção e direitos humanos (ENEM)",
    "contentSha256": "5e360ea91d2d3762cd5350960a1543437b40502ce365a6d2285e9c7290945652",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
      "https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/cartilha_enem_2026.pdf",
      "https://www.unicef.org/brazil/declaracao-universal-dos-direitos-humanos"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A questão basic_0 pede identificar o que a frase \"Faltam horários de atendimento compatíveis com a rotina dos moradores\" apresenta sem acrescentar informações externas. A alternativa B (correctIndex 1) está correta pois a frase apenas reconhece a carência de horários compatíveis, sem recomendar ação explícita para enfrentá-la - constitui constatação, não proposta. A alternativa A é inválida porque qualquer frase com a palavra \"atendimento\" não necessariamente indica ação futura. A alternativa C inventa garantia de nota máxima. A alternativa D acrescenta execução e medição inexistentes no enunciado."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A questão intermediate_1 apresenta cenário de moradores sem internet para agendamento de serviço comunitário. A alternativa A (correctIndex 0) enfrenta diretamente a barreira ao oferecer canal presencial de agendamento em horário divulgado no bairro, complementando o digital e permitindo acesso a quem não tem conexão. A alternativa B preserva a barreira ao exigir conexão que motivou o problema. C substitui inclusão por exclusão, não respondendo ao objetivo. D não define medida, procedimento ou relação com o acesso, deixando a execução indeterminada."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A questão advanced_2 pede distinguir a avaliação correta segundo orientação 2026 sobre proposta que incita violência contra grupo social, sem inventar pontuação para outras competências. A alternativa D (correctIndex 3) está correta pois a proposta recebe zero na Competência V (avaliação da intervenção) sem isso significar automaticamente zero na redação inteira, conforme orientação de 2026 que distingue a penalidade específica da competência das outras regras de anulação. As alternativas A, B e C são inválidas: A confunde detalhe com licença para violência, B transforma expressão \"direitos humanos\" em garantia de pontuação, C confunde recursos coesivos com respeito a direitos humanos."
      }
    ]
  }
] as const;
