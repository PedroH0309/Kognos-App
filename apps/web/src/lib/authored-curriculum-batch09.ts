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
  },
  {
    "subject": "Inglês",
    "topic": "Pronomes, conectores e relações semânticas",
    "objective": "Reconhecer referências pronominais e relações de causa, contraste, condição, finalidade e sequência em textos em inglês, escolhendo formas compatíveis com a construção e justificando interpretações pelo contexto.",
    "prerequisites": [
      "Identificação de sujeito, verbo e complemento",
      "Leitura de orações simples em inglês",
      "Reconhecimento de contexto e referentes de um pequeno texto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pronomes e referências no texto",
        "explanation": "Pronomes podem retomar elementos do discurso ou apontar participantes da situação, mas nem todo pronome substitui um substantivo mencionado anteriormente. I e you, por exemplo, identificam participantes a partir de quem fala e de quem é interpelado. Em construções usuais do inglês padrão, formas de sujeito incluem I, you, he, she, it, we e they; formas de objeto incluem me, you, him, her, it, us e them. A função na construção orienta a escolha, não a simples proximidade de and. A coordenação pode reunir sujeitos ou objetos: observe o verbo e, quando houver, a preposição que rege o grupo. O inglês também usa it sem um referente nominal, por exemplo em expressões meteorológicas. They pode ter referência plural ou singular, como ao retomar uma pessoa de gênero não informado; continua combinando com formas verbais como they are, e não they is no padrão em estudo. O contexto decide a referência: dois nomes compatíveis antes de um pronome podem gerar ambiguidade que a gramática isolada não elimina. Demonstrativos como this e that também podem retomar uma situação ou ideia, e não apenas um objeto físico. Na leitura, procure evidências em vez de aplicar a regra falsa de que o pronome sempre retoma o nome imediatamente anterior. Distinguir o padrão formal de variações de uso ajuda a revisar uma resposta sem julgar a capacidade do falante. As frases desta aula são criações didáticas, não transcrições de prova ou de uma pesquisa real.",
        "steps": [
          "Localize o pronome e sua função na construção.",
          "Verifique participantes, referentes e possíveis ambiguidades.",
          "Escolha forma de sujeito ou objeto conforme a estrutura.",
          "Justifique a retomada com pistas do texto, sem regra de proximidade automática."
        ],
        "example": "Microtexto autoral: “The volunteers brought the boxes. We thanked them at the door.” A ação de agradecer orienta them para os voluntários, não para boxes só porque esse nome está mais perto. Em “It is windy outside”, it preenche a posição de sujeito sem nomear um objeto que esteja ventando.",
        "pitfall": "Escolher I ou me apenas porque aparece and, proibir they singular ou atribuir automaticamente todo pronome ao substantivo mais próximo."
      },
      {
        "level": "intermediate",
        "title": "Posse, reflexividade e encadeamento",
        "explanation": "Em leitura e revisão, diferencie formas possessivas que acompanham um nome e formas que ocupam a posição de um grupo nominal. My, your, her, our e their acompanham nomes; mine, yours, hers, ours e theirs podem aparecer sem repetir o objeto possuído. His tem a mesma forma nesses dois usos. Essas formas não recebem apóstrofo de posse: its e a contração it’s têm funções diferentes. Pronomes reflexivos como myself, herself e themselves podem indicar que sujeito e objeto correspondem à mesma entidade em uma construção apropriada. Também têm uso enfático, destacando quem realiza uma ação. Não devem ser usados como substitutos supostamente mais formais de qualquer objeto; a construção e o sentido precisam ser examinados. A ligação entre orações também exige observar estrutura. Because apresenta uma oração que fornece causa ou razão; because of é seguido por grupo nominal ou construção nominal apropriada. But coordena elementos em contraste. Although e even though introduzem concessão com estrutura subordinada; despite pode ser seguido por nome, pronome ou forma em -ing, e também pela construção the fact that com oração. However pode ligar ideias contrastantes, mas não tem exatamente a mesma distribuição sintática de but; na escrita, pontuação e posição precisam ser revisadas. Saber a tradução aproximada não basta para trocar conectores mecanicamente. Primeiro identifique a relação entre as ideias e depois confira se a estrutura escolhida se mantém gramatical e preserva o sentido.",
        "steps": [
          "Veja se o possessivo acompanha nome ou substitui o grupo nominal.",
          "Diferencie reflexividade e ênfase pela construção.",
          "Identifique a relação semântica entre as orações.",
          "Confira complementos e pontuação antes de substituir conectores."
        ],
        "example": "Microtexto autoral: “This notebook is mine; the blue one is hers.” Mine e hers evitam repetir os grupos possessivos completos. Compare ainda “Rita prepared the slides herself” e “Rita introduced herself”: no primeiro, a forma destaca Rita como responsável; no segundo, refere-se à própria pessoa apresentada.",
        "pitfall": "Confundir my e mine, usar reflexivo como objeto formal genérico ou trocar although e despite sem ajustar a construção que os segue."
      },
      {
        "level": "advanced",
        "title": "Relações semânticas e inferências limitadas",
        "explanation": "Conectores orientam relações, mas seu valor deve ser confirmado no enunciado completo. Since pode introduzir uma razão ou marcar início temporal; while pode apresentar simultaneidade ou contraste. Provided that apresenta condição, não uma concessão por definição. Even if introduz condição concessiva ou hipótese que não impede o resultado, enquanto even though normalmente apresenta uma circunstância tomada como factual no enunciado concessivo. Finalidade pode aparecer com so that ou in order to, com estruturas diferentes; uma intenção não prova que o resultado foi alcançado. Portanto, leia o tempo verbal e o contexto antes de transformar um objetivo em fato. Thus e therefore podem marcar resultado ou conclusão; não existe regra geral de que um signifique consequência imediata e o outro prova demonstrada. Marcadores de sequência como meanwhile ou subsequently ajudam a organizar eventos, mas sequência não comprova causalidade. Uma frase pode ser gramatical com mais de um conector e produzir leituras diferentes: itens de escolha precisam delimitar qual relação deve ser preservada. Na interpretação, combine essas pistas com referências pronominais. Se duas pessoas compatíveis são mencionadas e nada desfaz a ambiguidade de her, não invente certeza sobre o referente. Outra cautela é não acrescentar uma relação de causa apenas porque uma oração vem depois da outra. As conclusões devem distinguir o que foi dito, o que é plausível e o que depende de informação ausente. Essa revisão simultânea de forma e sentido serve à leitura de vários gêneros, sem afirmar frequência de questões numa prova específica sem levantamento.",
        "steps": [
          "Classifique a relação pedida e verifique sentidos alternativos do conector.",
          "Diferencie finalidade, hipótese, fato e resultado comprovado.",
          "Confira a referência pronominal com todas as pistas disponíveis.",
          "Descarte inferências que dependam de dados não fornecidos."
        ],
        "example": "Microtexto autoral: “Lia saved a copy so that she could edit it later.” O texto fornece uma finalidade: editar depois. Não afirma que a edição realmente ocorreu. “Lia saved a copy; subsequently, the network failed” apresenta sequência, mas não demonstra que salvar o arquivo causou a falha da rede.",
        "pitfall": "Tratar finalidade como resultado confirmado, provided that como concessão ou sequência temporal como prova automática de causa."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Frase autoral para revisão no inglês padrão: “The coordinator sent the schedule to Ana and ___.” Para incluir a pessoa que fala como destinatária, qual forma completa o grupo regido por to?",
        "hint": "O grupo é complemento da preposição to; a presença de and não muda sua função para sujeito.",
        "options": [
          "I",
          "mine",
          "me",
          "myself"
        ],
        "correctIndex": 2,
        "solution": "C: to Ana and me apresenta os destinatários; me é a forma de objeto pertinente à primeira pessoa. A usaria a forma de sujeito no complemento preposicional. B é possessivo independente e não identifica a pessoa como destinatária nessa construção. D não é um substituto formal genérico de me e não corresponde reflexivamente ao sujeito the coordinator. A frase completa preserva sujeito, verbo e complemento."
      },
      {
        "level": "intermediate",
        "prompt": "Complete a frase autoral preservando expressamente a relação de concessão: “___ the room was small, it accommodated the entire group.” Qual opção se ajusta também à oração the room was small?",
        "hint": "A circunstância de a sala ser pequena contrasta com o resultado; a lacuna vem antes de uma oração com sujeito e verbo.",
        "options": [
          "Because of",
          "Despite",
          "Therefore",
          "Although"
        ],
        "correctIndex": 3,
        "solution": "D: although introduz a oração concessiva, contrastando o tamanho reduzido com a acomodação do grupo. A e B exigiriam outra construção, como um grupo nominal ou the fact that antes da oração; não se encaixam diretamente aqui. C marca conclusão ou consequência e não funciona como subordinador nessa posição. A relação pedida delimita o exercício, sem supor que todos os conectores sejam intercambiáveis."
      },
      {
        "level": "advanced",
        "prompt": "Microtexto autoral: “A participant left their badge at the desk. If they return before six, the staff will give it back to them.” Qual interpretação mantém as referências e a condição expressas, sem acrescentar um acontecimento?",
        "hint": "They pode retomar uma pessoa no singular; a oração com if apresenta uma condição, não confirma seu cumprimento.",
        "options": [
          "They/them retoma a pessoa participante e it, o crachá; a devolução está condicionada ao retorno antes das seis, que não é confirmado.",
          "They retoma necessariamente vários participantes; a palavra a comprova que o texto perdeu toda possibilidade de interpretação.",
          "It retoma a equipe e them retoma o crachá; o texto afirma que ambos já retornaram antes das seis.",
          "A presença de if prova que a pessoa retornou antes das seis e recebeu o crachá naquele momento."
        ],
        "correctIndex": 0,
        "solution": "A preserva os referentes: singular they/them aponta para a participant, enquanto it retoma badge. A oração com if condiciona a devolução ao retorno no prazo e não relata que a condição tenha ocorrido. B ignora o uso singular de they. C inverte os referentes e inventa retorno. D trata uma condição como fato já realizado. O texto não informa gênero, retorno efetivo ou entrega já concluída."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Cognatos e falsos cognatos em espanhol",
    "objective": "Usar semelhanças entre espanhol e português como pistas de leitura, reconhecer falsos amigos e selecionar acepções pelo contexto, distinguindo parentesco histórico, sentido atual e variação regional sem regras de tradução automáticas.",
    "prerequisites": [
      "Leitura de frases simples em espanhol",
      "Identificação de substantivos, adjetivos e verbos",
      "Consulta de acepções e marcas de uso em dicionário"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Semelhança é uma pista, não uma tradução pronta",
        "explanation": "Português e espanhol compartilham muitas palavras próximas na forma e no sentido, o que pode ajudar a compreender um texto. Na prática pedagógica, cognatos ou palavras afins costumam designar esses apoios de leitura. Em linguística histórica, a noção de cognato envolve parentesco de origem: semelhança gráfica isolada não demonstra essa relação. A expressão falsos cognatos é usada com frequência no ensino para tratar de falsos amigos, mas as distinções terminológicas importam. Palavras historicamente aparentadas podem ter desenvolvido sentidos diferentes; palavras semelhantes também podem induzir uma tradução inadequada em certo contexto sem serem incompatíveis em todos os usos. Por isso, a estratégia principal não é decorar que uma palavra nunca corresponde à outra, mas observar a acepção ativada no enunciado. Compare a palavra com seus complementos, com o gênero do texto e com o assunto. Um termo de calendário, por exemplo, não deve ser traduzido como verbo português apenas porque as letras coincidem. A categoria gramatical e a construção também fornecem evidência. Uma lista bilíngue serve de alerta inicial, mas não substitui leitura nem consulta a dicionário. Ao elaborar uma resposta, indique o sentido naquele trecho e separe essa conclusão de afirmações sobre toda a língua. Não invente uma etimologia para justificar uma equivalência nem conclua que palavras de origem comum mantêm obrigatoriamente todos os mesmos significados atuais.",
        "steps": [
          "Leia a frase inteira e identifique a categoria da palavra.",
          "Use a semelhança com o português como hipótese inicial.",
          "Teste a hipótese contra complementos e assunto do texto.",
          "Confirme acepção e marcas de uso antes de generalizar."
        ],
        "example": "Microtexto autoral: “La fecha de entrega aparece al final del formulario.” Entrega e formulario ajudam a compreender o tema. Fecha funciona como substantivo referente à data, não como a forma verbal portuguesa fecha; essa interpretação decorre da construção la fecha de entrega e do contexto de um formulário.",
        "pitfall": "Confundir aparência com parentesco etimológico comprovado ou trocar uma palavra por sua semelhante portuguesa sem conferir classe e contexto."
      },
      {
        "level": "intermediate",
        "title": "Escolher acepções em frases completas",
        "explanation": "A leitura de falsos amigos exige distinguir diferença de sentido e diferença de uso. Em espanhol, largo pode indicar comprimento ou duração; não deve ser traduzido automaticamente como largo no sentido português de grande largura. Os complementos e adjetivos associados ajudam a decidir: uma passagem pode ser comprida e estreita ao mesmo tempo. Oficina, em contextos administrativos, corresponde a escritório ou repartição; taller é comum para local de reparações, trabalho manual ou atividade formativa. Isso não autoriza afirmar que oficina jamais teve ou possa ter outro uso, pois dicionários registram história e variedades. Carpeta pode designar uma pasta para papéis ou um diretório informático. O mesmo verbete também registra usos regionais relacionados a tapetes sobre móveis, entre outras acepções; portanto, a proibição universal de qualquer relação com tapete é inadequada. Uma tradução correta de um aviso digital não precisa listar todos os sentidos do verbete: precisa escolher o que combina com os arquivos e as ações descritas. Na revisão, construa uma paráfrase simples na língua do texto e depois formule uma tradução natural em português. Se a tradução muda o tipo de objeto, o lugar ou a ação sem pista, volte à frase. Exemplos didáticos devem ser identificados como criações, não apresentados como avisos reais de instituições. Assim o estudante aprende um procedimento de interpretação e não apenas uma coleção de equivalências para memorizar.",
        "steps": [
          "Localize os termos que restringem a acepção.",
          "Diferencie comprimento, largura, lugar e objeto conforme o contexto.",
          "Consulte marcas regionais ou históricas quando a hipótese exigir.",
          "Faça uma paráfrase e confira se ela preserva a ação descrita."
        ],
        "example": "Microtexto autoral: “El taller de cerámica tendrá dos encuentros; la inscripción se hará en línea.” Taller designa aqui uma atividade formativa de cerâmica, não um talher de mesa. A referência a encontros e inscrição apoia a leitura, sem que se deduza endereço, preço ou instituição responsável ausentes do aviso.",
        "pitfall": "Transformar uma equivalência útil num contexto em regra sem exceção ou traduzir o objeto sem perceber as ações e complementos que o definem."
      },
      {
        "level": "advanced",
        "title": "Variação, limites do dicionário e revisão crítica",
        "explanation": "Um verbete registra acepções, marcas de área, região e uso, mas não escolhe sozinho o sentido de uma ocorrência. A primeira acepção não é resposta obrigatória para todo texto; tampouco o registro de uma acepção garante que ela seja a mais provável em qualquer país e gênero. Ao revisar uma lista de falsos amigos, pergunte qual par de línguas está sendo comparado, em qual contexto e com qual evidência. Um contraste espanhol-inglês não deve ser importado automaticamente para espanhol-português. Também evite declarar que uma palavra nunca pode ter certo significado quando o dicionário registra esse uso. Suceso, por exemplo, tem acepções de acontecimento, fato delituoso ou acidente, mas também registra êxito ou resultado de um negócio; a afirmação de que jamais pode aproximar-se de sucesso é excessiva. Isso não significa que se deva traduzir qualquer ocorrência como sucesso: uma notícia sobre um acidente pede outra leitura. A estratégia mais segura combina pistas locais e verificação lexical. Um relato pode deixar informação insuficiente para decidir entre duas acepções; nesse caso, reconhecer a incerteza é melhor que inventar detalhes. Anote no seu repertório a expressão em contexto, uma paráfrase e uma situação em que outra acepção seria adequada. Esse registro é uma ferramenta de estudo autoral, não exigência de uma banca. Ao responder, não extrapole para autoria, localização, resultado de evento ou intenção permanente do falante. A leitura deve preservar o que a frase informa e distinguir hipótese de tradução, acepção documentada e conclusão sustentada.",
        "steps": [
          "Identifique o par de línguas e o contexto de comparação.",
          "Leia acepções e marcas sem impor sempre a primeira.",
          "Teste generalizações como nunca e sempre com evidência lexical.",
          "Registre limites da tradução e evite completar lacunas com fatos inventados."
        ],
        "example": "Situação autoral: uma estudante escreve na sua lista “suceso nunca significa sucesso”. Ao consultar o verbete, encontra também uma acepção ligada a êxito ou resultado. Ela deve corrigir a regra absoluta, mas continuar lendo cada ocorrência no contexto: o registro dessa acepção não transforma toda notícia de um acontecimento em notícia de um resultado favorável.",
        "pitfall": "Usar o dicionário para legitimar qualquer tradução em qualquer frase ou negar sentidos documentados para manter uma lista decorada."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Microtexto autoral em espanhol: “El pasillo es largo y estrecho.” Qual tradução preserva o contraste entre as dimensões indicado pelos adjetivos?",
        "hint": "Estrecho restringe a largura; observe como largo se refere ao comprimento nesta descrição.",
        "options": [
          "O corredor é largo e espaçoso.",
          "O corredor é curto e largo.",
          "O corredor é comprido e estreito.",
          "O corredor está fechado e sem iluminação."
        ],
        "correctIndex": 2,
        "solution": "C preserva as duas características: largo indica comprimento e estrecho, pouca largura. A troca o comprimento por largura e contradiz estrecho. B troca ambas as relações. D acrescenta fechamento e falta de iluminação, informações ausentes. A interpretação está delimitada pela descrição; não fornece medidas numéricas, localização ou condição de uso do corredor."
      },
      {
        "level": "intermediate",
        "prompt": "Aviso autoral em espanhol: “Entregue los formularios en la oficina de atención al público; las reparaciones de bicicletas se hacen en el taller del patio.” Qual leitura distingue os locais conforme as atividades indicadas?",
        "hint": "Observe atendimento e formulários no primeiro local, reparações no segundo, sem traduzir apenas pela semelhança gráfica.",
        "options": [
          "Os formulários devem ser entregues no atendimento administrativo; as bicicletas são reparadas na oficina do pátio.",
          "Os formulários devem ser entregues a um talher de mesa; as bicicletas são reparadas em uma folha de papel.",
          "A palavra oficina comprova que ambos os locais são exclusivamente salas de conserto de veículos.",
          "O aviso informa obrigatoriamente que o atendimento e as reparações são gratuitos e ocorrem no mesmo horário."
        ],
        "correctIndex": 0,
        "solution": "A combina as atividades e os sentidos: oficina de atención al público é atendimento administrativo, e taller, no trecho de reparações, é oficina de conserto. B usa falsas equivalências sem compatibilidade com as ações. C ignora a especificação administrativa e transforma um uso possível numa regra exclusiva. D inventa preço e horário. O aviso não relata um estabelecimento real nem fornece essas condições."
      },
      {
        "level": "advanced",
        "prompt": "Instrução autoral de um exercício digital: “Abra la carpeta de proyectos y guarde el archivo revisado dentro de ella.” Qual interpretação é sustentada pelo contexto sem transformar essa acepção em regra universal?",
        "hint": "Guarde el archivo e exercício digital apontam para organização de arquivos; isso não elimina outras acepções registradas no verbete.",
        "options": [
          "Carpeta deve significar um tapete de chão em qualquer região, mesmo quando o texto fala de um arquivo digital.",
          "O trecho exige transportar uma pasta física até um escritório, embora nenhuma dessas ações seja mencionada.",
          "A frase prova que carpeta nunca tem qualquer acepção fora da informática, em todo o espanhol.",
          "Carpeta indica uma pasta ou diretório digital neste contexto; a leitura não exclui outros sentidos da palavra em outros usos."
        ],
        "correctIndex": 3,
        "solution": "D seleciona a acepção informática compatível com guardar arquivo num exercício digital e limita a conclusão ao contexto. A impõe tapete a uma operação digital. B acrescenta transporte físico e escritório. C transforma a acepção escolhida numa exclusividade falsa. A tarefa não exige negar sentidos regionais ou históricos do verbete para interpretar corretamente essa instrução."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Trabalho, energia e potência",
    "objective": "Calcular trabalho de forças, relacionar trabalho resultante à variação da energia cinética e analisar energia mecânica, dissipação, potência e rendimento em modelos com sistema, referencial e hipóteses explícitos.",
    "prerequisites": [
      "Vetores e decomposição de forças",
      "Unidades do SI e operações com potências e raízes",
      "Leitura de movimento e forças no modelo de partícula"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Trabalho depende de força e deslocamento",
        "explanation": "Trabalho mecânico é uma transferência de energia associada à atuação de força durante deslocamento. No modelo de partícula, para força constante e deslocamento retilíneo, W = F d cos θ, com θ entre força e deslocamento. A fórmula não usa apenas os módulos: a projeção da força na direção do movimento importa. Uma força pode atuar sem realizar trabalho naquele deslocamento, como quando é perpendicular a ele. Trabalho positivo, negativo ou nulo refere-se à contribuição da força examinada. Um trabalho negativo de uma força isolada não demonstra redução da rapidez se outras forças realizam trabalho positivo maior. A unidade no SI é joule, equivalente a newton vezes metro; potência, medida em watt, é outra grandeza. Quando a força varia ao longo de um percurso retilíneo, o trabalho pode ser encontrado pela área algébrica sob a curva da componente da força na direção do movimento em função da posição. Áreas abaixo do eixo contribuem negativamente; somar apenas áreas positivas altera a transferência líquida. Não confunda um gráfico força versus tempo, relacionado a impulso, com força versus posição. Em trajetórias gerais, considera-se a contribuição da força ao longo de pequenos deslocamentos; a expressão constante não deve ser aplicada globalmente sem conferir suas hipóteses. Especifique também o referencial: deslocamentos, velocidades e trabalho não são números independentes da descrição adotada. Nos exercícios desta aula, usamos um referencial inercial e o regime clássico não relativístico.",
        "steps": [
          "Escolha o corpo, o referencial e a força examinada.",
          "Identifique o deslocamento e o ângulo pertinente.",
          "Confira se a força é constante ou se há informação por trechos.",
          "Calcule a contribuição com sinal e unidade, sem confundi-la com potência."
        ],
        "example": "Cálculo autoral: uma força horizontal constante de 12 N atua no mesmo sentido de um deslocamento retilíneo de 3 m. O trabalho dessa força é 12·3·cos 0° = 36 J. Se outra força atua perpendicularmente a esse deslocamento, sua contribuição de trabalho é zero nesse modelo, sem que isso prove ausência de força.",
        "pitfall": "Usar Fd sem a projeção, calcular trabalho pela área de força versus tempo ou confundir contribuição negativa de uma força com trabalho resultante negativo."
      },
      {
        "level": "intermediate",
        "title": "Energia cinética, potencial e dissipação",
        "explanation": "Para uma partícula de massa constante no regime clássico, K = m v²/2. O teorema trabalho–energia relaciona o trabalho da força resultante, ou a soma dos trabalhos das forças sobre a partícula, à variação de sua energia cinética: Wresultante = Kfinal − Kinicial. Não substitua essa soma pelo trabalho de uma única força quando outras também contribuem. A energia cinética depende do referencial; dentro de uma resolução, todas as velocidades precisam pertencer à mesma descrição. Uma força conservativa permite associar energia potencial à configuração, com Wconservativa = −ΔU. Para gravidade aproximadamente uniforme perto da superfície, ΔUg = m g Δh; para mola ideal no regime da lei de Hooke, Uel = k x²/2 com referência na posição sem deformação. A referência de potencial pode ser escolhida, mas diferenças devem permanecer consistentes. A energia mecânica considerada é K + U. Se as demais contribuições de trabalho forem nulas, ela se conserva; com forças não conservativas ou transferências adicionais, é necessário incluir esses termos. Não conte duas vezes o mesmo efeito, usando simultaneamente o trabalho da gravidade e a variação de potencial para representá-lo no mesmo balanço. Atrito pode transformar energia mecânica em energia interna e transferir energia entre corpos; dizer que a energia total foi destruída é incorreto. Para um sistema extenso com rotação, deformação ou aquecimento, a simples expressão da energia cinética de translação não descreve automaticamente todas as formas de energia. As hipóteses de partícula e pista fixa devem ser respeitadas.",
        "steps": [
          "Defina quais formas de energia e quais corpos compõem o sistema.",
          "Escolha trabalho resultante ou balanço de energia sem dupla contagem.",
          "Inclua dissipação e transferências conforme os dados.",
          "Encontre a grandeza pedida e confira a possibilidade física do resultado."
        ],
        "example": "Modelo autoral: uma mola ideal de constante 200 N/m é comprimida 0,10 m dentro do regime de Hooke. Sua energia potencial elástica é 200·0,10²/2 = 1 J. Se depois transfere integralmente essa energia a uma partícula inicialmente em repouso, sem outras variações ou perdas, o ganho de energia cinética é 1 J; com dissipação, o balanço precisa incluir essa parcela.",
        "pitfall": "Conservar energia mecânica mesmo com dissipação não contabilizada, contar gravidade duas vezes ou tratar energia interna como energia que deixou de existir."
      },
      {
        "level": "advanced",
        "title": "Potência, rendimento e fronteiras do sistema",
        "explanation": "Potência mede a taxa de transferência ou transformação de energia. A potência média associada a um trabalho é W/Δt no intervalo considerado; potência instantânea não é necessariamente igual à média. Para uma força aplicada a uma partícula, sua potência instantânea é o produto escalar F·v, com a velocidade no mesmo referencial. A unidade watt corresponde a joule por segundo. Um mesmo trabalho realizado em menos tempo exige maior potência média, mas não necessariamente maior energia útil total. Quilowatt-hora é unidade de energia: 1 kWh = 3,6 milhões de joules; não é unidade de potência. Em conversão energética, rendimento precisa declarar entrada e saída útil: η = Eútil/Eentrada ou, em regime e intervalo compatíveis, Pútil/Pentrada. Não compare energia total de entrada com potência de saída sem compatibilizar tempo e unidades. Para o conversor definido dessa forma, as parcelas de energia da entrada se distribuem entre saída útil e outras saídas ou variações internas; um rendimento de 80% não significa criação de energia nem exige que o restante desapareça. A energia elétrica consumida por um elevador, por exemplo, não é automaticamente igual ao aumento da energia potencial da carga: há perdas e outras partes do equipamento a considerar. Um exercício pode definir um modelo simplificado com rendimento global fornecido e variação cinética nula entre início e fim, mas isso deve ficar explícito. A potência de entrada necessária é obtida dividindo a útil por η, não multiplicando-a. Não confunda esse rendimento com coeficientes de desempenho de refrigeradores ou bombas de calor, que usam outra razão e outra definição de útil.",
        "steps": [
          "Identifique intervalo, energia ou trabalho e fronteira do conversor.",
          "Separe potência média e instantânea.",
          "Expresse o rendimento como razão de grandezas compatíveis.",
          "Calcule a entrada e confira se ela cobre a saída útil no modelo declarado."
        ],
        "example": "Modelo autoral: um equipamento entrega 100 J de trabalho útil em 5 s, logo sua potência útil média é 20 W. Se o rendimento no mesmo intervalo é 50%, a entrada é 200 J, ou 40 W de potência média. Os outros 100 J precisam ser contabilizados em saídas não úteis ou variações internas definidas, e não como energia destruída.",
        "pitfall": "Multiplicar potência útil pelo rendimento para encontrar entrada, usar kWh como potência ou comparar médias de intervalos diferentes sem compatibilização."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral de partícula em referencial inercial: uma força constante de 50 N mantém ângulo de 60° com um deslocamento retilíneo de 4 m. Calcule somente o trabalho dessa força, sem inferir o trabalho resultante de outras forças. Use cos 60° = 0,5.",
        "hint": "Projete a força sobre o deslocamento antes de multiplicar; a questão não fornece o trabalho das demais forças.",
        "options": [
          "200 J, que é necessariamente o trabalho resultante de todas as forças.",
          "100 J, para o trabalho dessa força.",
          "−100 J, pois qualquer força oblíqua retira energia cinética.",
          "50 W, pois trabalho e potência têm a mesma unidade."
        ],
        "correctIndex": 1,
        "solution": "B: W = 50·4·0,5 = 100 J. A ignora a projeção e ainda atribui o resultado ao conjunto das forças sem dados. C troca indevidamente o sinal: o cosseno dado é positivo. D usa watt, unidade de potência, e sequer há intervalo temporal. O valor calculado é a contribuição da força especificada, não uma afirmação sobre a variação cinética sem conhecer as demais contribuições."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: uma partícula de massa 2 kg parte do repouso e desce um desnível de 5 m em pista fixa. Use g = 10 m/s². A força normal é perpendicular ao movimento e não realiza trabalho; o atrito atua dissipando 20 J da energia mecânica durante a descida. Não há outras transferências. Qual a energia cinética final e o módulo da velocidade final?",
        "hint": "O potencial gravitacional diminui; subtraia a parcela dissipada e depois use K = mv²/2, no modelo de partícula.",
        "options": [
          "100 J; aproximadamente 10,00 m/s.",
          "120 J; aproximadamente 10,95 m/s.",
          "80 J; aproximadamente 8,94 m/s.",
          "20 J; aproximadamente 4,47 m/s."
        ],
        "correctIndex": 2,
        "solution": "C: a diminuição do potencial é 2·10·5 = 100 J. Descontados 20 J de dissipação, Kfinal = 80 J. Assim, v = √(2·80/2) = √80 ≈ 8,94 m/s. A ignora o atrito. B soma a dissipação como se fosse fornecimento. D confunde a energia dissipada com a cinética que resta. A energia não foi destruída: os 20 J correspondem à transformação para formas não mecânicas no balanço declarado."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral de elevação: uma carga de 200 kg sobe uma altura de 6 m em 15 s, com g = 10 m/s². A carga começa e termina em repouso. Considere útil apenas o aumento de energia potencial gravitacional e rendimento global de 80% entre essa saída e a energia de entrada no mesmo intervalo, incluindo os demais efeitos do equipamento. Quais as potências médias útil e de entrada?",
        "hint": "Calcule mgh dividido pelo tempo e depois divida a potência útil pelo rendimento escrito como fração.",
        "options": [
          "800 W úteis e 1000 W de entrada.",
          "800 W úteis e 640 W de entrada.",
          "12000 W úteis e 15000 W de entrada.",
          "1000 W úteis e 800 W de entrada."
        ],
        "correctIndex": 0,
        "solution": "A: Eútil = 200·10·6 = 12000 J e Pútil = 12000/15 = 800 W. Como η = 0,80 = Pútil/Pentrada, Pentrada = 800/0,80 = 1000 W. B multiplica pela eficiência, produzindo entrada menor que a saída útil. C trata energia em joules como potência sem dividir pelo tempo. D inverte útil e entrada. A variação cinética nula e o rendimento global definem o modelo, sem descrever um equipamento comercial real."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Tabela periódica e propriedades",
    "objective": "Relacionar organização da tabela e configuração eletrônica a tendências de propriedades, comparar átomos e íons e interpretar dados de ionização sem transformar regularidades em regras sem exceção.",
    "prerequisites": [
      "Número atômico, carga e contagem de elétrons",
      "Configuração eletrônica no estado fundamental",
      "Leitura de tabelas e comparação de razões"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Organização por número atômico e configuração",
        "explanation": "A tabela periódica moderna organiza elementos por número atômico crescente, isto é, pelo número de prótons, e não simplesmente pela massa atômica. Períodos são as linhas e grupos, numerados de 1 a 18, são as colunas na apresentação usual. Semelhanças de configuração eletrônica ajudam a explicar padrões químicos, mas pertencer ao mesmo grupo não torna todos os elementos idênticos. O hidrogênio, por exemplo, ocupa uma posição particular e não deve ser tratado como metal alcalino comum apenas por estar acima do grupo 1. Para elementos representativos nos estados fundamentais usuais, a ocupação mais externa permite relacionar configuração a grupo e período. Configurações ns2 np1 até ns2 np6 correspondem aos grupos 13 a 18; o hélio é uma exceção importante à leitura simplificada de oito elétrons, com 1s2 no grupo 18. Os blocos s, p, d e f ajudam a representar padrões de preenchimento, sem supor que um diagrama de ordem energética seja exato para todo átomo e íon. As séries mostradas separadamente na parte inferior pertencem aos períodos da tabela, não a períodos extras criados pela impressão. Ao ler uma célula, diferencie número atômico, símbolo e peso atômico. Um número de massa entre colchetes não deve ser confundido automaticamente com uma média isotópica. A formação de um íon muda o número de elétrons, não o número atômico: perder elétrons não desloca o elemento para a identidade de outro. Antes de aplicar uma tendência, identifique se os dados dizem respeito a átomo neutro, cátion ou ânion.",
        "steps": [
          "Identifique número atômico, símbolo e natureza do valor de massa.",
          "Diferencie átomo neutro e íon pela contagem de elétrons.",
          "Relacione configuração, período e grupo dentro do escopo aplicável.",
          "Confira exceções e não transforme posição em identidade de propriedades."
        ],
        "example": "Exemplo autoral: o sódio neutro, Z = 11, tem configuração 1s2 2s2 2p6 3s1 no estado fundamental. O maior nível ocupado é n = 3, e a configuração externa 3s1 é compatível com período 3 e grupo 1. O íon Na+ tem dez elétrons, mas continua sendo sódio, pois mantém onze prótons.",
        "pitfall": "Ordenar a tabela pela massa, confundir mudança de carga com mudança de elemento ou aplicar a regra de oito elétrons ao hélio sem ressalva."
      },
      {
        "level": "intermediate",
        "title": "Raios e energia de ionização: tendências explicadas",
        "explanation": "O átomo não possui uma borda rígida única; raio covalente, metálico e de van der Waals são definições operacionais diferentes. Compare valores do mesmo tipo em condições compatíveis, em vez de tratar qualquer número chamado raio como diretamente equivalente a outro. Em tendências usuais, raios atômicos aumentam ao descer um grupo e tendem a diminuir ao avançar num período, com participação de níveis ocupados, blindagem e atração nuclear efetiva. Essas ideias não autorizam uma seta sem exceções para qualquer conjunto de espécies. Para um mesmo elemento, cátions usuais tendem a ser menores que o átomo neutro, e ânions maiores, nas comparações pertinentes. Em séries isoeletrônicas comparáveis, com o mesmo número e padrão de ocupação de elétrons, o aumento de Z intensifica a atração nuclear e tende a reduzir o raio. Não compare apenas o sinal da carga quando os números de elétrons e configurações forem diferentes. A primeira energia de ionização refere-se à remoção de um elétron de uma espécie gasosa inicialmente neutra no estado definido; ionizações seguintes removem elétrons de íons sucessivamente mais positivos. São processos distintos, não repetição do mesmo estado inicial. As primeiras energias tendem a aumentar ao longo de um período e diminuir ao descer um grupo, mas diferenças de subnível e emparelhamento produzem desvios. Be/B e N/O são exemplos clássicos que impedem uma regra estritamente crescente. A explicação deve considerar a estrutura eletrônica, não apenas a distância visual na tabela.",
        "steps": [
          "Confira espécie e definição do raio comparado.",
          "Conte elétrons e identifique uma série isoeletrônica quando houver.",
          "Relacione níveis, blindagem e atração nuclear sem setas universais.",
          "Distingua primeira ionização de remoções sucessivas e observe desvios."
        ],
        "example": "Comparação autoral de espécies reais: ao passar de um átomo de magnésio a Mg2+, são removidos dois elétrons, preservando Z = 12. Na comparação apropriada, o cátion é menor que o átomo neutro; isso não permite concluir que todo cátion de qualquer elemento seja menor que todo átomo de qualquer outro elemento.",
        "pitfall": "Tratar todos os raios como a mesma medida ou usar a carga isoladamente para ordenar espécies sem verificar elétrons e estrutura."
      },
      {
        "level": "advanced",
        "title": "Afinidade, eletronegatividade e interpretação de dados",
        "explanation": "Afinidade eletrônica e eletronegatividade são grandezas relacionadas à estrutura, mas não sinônimos. Para discutir captura de elétron por átomo gasoso, declare o processo e a convenção de sinal: a variação de energia da captura exotérmica é negativa, enquanto tabelas que informam energia liberada podem apresentar seu módulo positivo. Sem essa indicação, dizer apenas maior afinidade pode confundir sinais e comparações. Eletronegatividade descreve a tendência de atrair densidade eletrônica em ligação; na escala relativa de Pauling, os valores são adimensionais e não se confundem com energia de um elétron capturado por átomo isolado. Tendências gerais podem orientar uma hipótese, mas gases nobres, estados de oxidação, escalas e condições exigem cuidado; não atribua zero universal aos gases nobres nem use uma única seta para toda propriedade. Pontos de fusão, densidade e reatividade não obedecem todos ao mesmo padrão simples. A interpretação de energias sucessivas de ionização oferece outro tipo de evidência. Em um modelo de elemento representativo, um salto acentuado depois de remover os elétrons externos sugere o início da remoção de elétrons de camada interna. É necessário explicitar esse modelo e não deduzir automaticamente a identidade exata do elemento de quatro números inventados. Dados didáticos devem ser rotulados como tais, sem parecer uma medição atribuída a laboratório real. Ao responder, descreva o que o padrão permite inferir e o que continua indeterminado. Use configuração e definições para justificar a tendência, e consulte dados experimentais quando uma comparação específica ultrapassar o alcance do modelo.",
        "steps": [
          "Diferencie processo de captura e atração em uma ligação.",
          "Confira unidades, escala e convenção de sinal.",
          "Localize saltos nos dados sucessivos e explicite o modelo.",
          "Separe inferência sobre elétrons externos de identificação exata não fornecida."
        ],
        "example": "Exemplo autoral de leitura de tendência: N e O estão no mesmo período, mas a primeira ionização do oxigênio é menor que a do nitrogênio. A ocupação 2p3 do nitrogênio e o emparelhamento em 2p4 no oxigênio ajudam a explicar a exceção. Não se deve corrigir o dado real para forçar uma seta crescente da esquerda para a direita.",
        "pitfall": "Confundir energia de captura com eletronegatividade, ignorar sinais ou inferir nome e massa de um elemento apenas de um salto qualitativo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um átomo neutro em estado fundamental tem configuração 1s2 2s2 2p6 3s2 3p4. Usando a organização usual dos elementos representativos, qual alternativa relaciona número atômico, período e grupo?",
        "hint": "Some os elétrons para obter Z do átomo neutro; depois identifique o maior nível ocupado e a configuração externa s/p.",
        "options": [
          "Z = 14; período 4; grupo 3.",
          "Z = 16; período 3; grupo 16.",
          "Z = 18; período 3; grupo 18.",
          "Z = 16; período 4; grupo 6."
        ],
        "correctIndex": 1,
        "solution": "B: a soma é 2 + 2 + 6 + 2 + 4 = 16 elétrons, iguais ao número de prótons no átomo neutro. O maior n ocupado é 3, portanto período 3. A configuração externa 3s2 3p4 tem seis elétrons e corresponde ao grupo 16 dos representativos. A erra soma e posição; C confunde com camada p completa; D confunde ocupação ou índice com período e usa a numeração de grupo sem o padrão 1–18 explicitado."
      },
      {
        "level": "intermediate",
        "prompt": "Compare os raios das espécies isoeletrônicas O2− (Z = 8), F− (Z = 9), Na+ (Z = 11) e Mg2+ (Z = 12), no modelo usual de comparação de raios iônicos. Qual ordem crescente é compatível com a mesma ocupação de dez elétrons e a atração nuclear?",
        "hint": "Confira elétrons = Z menos a carga algébrica; na série comparável, maior Z tende a produzir menor raio.",
        "options": [
          "O2− < F− < Na+ < Mg2+.",
          "Na+ < Mg2+ < O2− < F−.",
          "F− < O2− < Mg2+ < Na+.",
          "Mg2+ < Na+ < F− < O2−."
        ],
        "correctIndex": 3,
        "solution": "D: todas as espécies têm dez elétrons. Com ocupação comparável, a maior carga nuclear atrai mais intensamente a distribuição eletrônica, resultando na ordem crescente Mg2+ < Na+ < F− < O2−. A inverte a tendência. B troca a ordem dentro de ambos os pares e não segue Z. C também troca as relações entre os ânions e entre os cátions. A comparação não afirma que sinais de carga sozinhos ordenem qualquer conjunto de íons."
      },
      {
        "level": "advanced",
        "prompt": "Tabela numérica exclusivamente didática, sem alegação de medição de elemento real: E1 = 600, E2 = 1200, E3 = 8000 e E4 = 11000 kJ/mol para ionizações sucessivas de X. No modelo proposto, X é representativo, possui pelo menos quatro elétrons e o salto principal marca a passagem da camada de valência para uma interna. Qual inferência é compatível com essas hipóteses?",
        "hint": "Compare os aumentos sucessivos e localize depois de quantas remoções aparece o salto principal, sem inventar identidade exata para X.",
        "options": [
          "Há evidência de duas remoções de valência antes do salto, compatível com grupo 2 no modelo, sem identificar o elemento exato.",
          "O salto após E2 prova que X tem oito elétrons de valência e pertence ao grupo 18.",
          "Os valores demonstram que X tem exatamente dois elétrons totais e permitem uma quarta ionização do mesmo átomo.",
          "A lista informa automaticamente o nome, a massa atômica e a composição isotópica de X."
        ],
        "correctIndex": 0,
        "solution": "A: o maior salto relativo está de 1200 para 8000, depois da segunda remoção. Pelas hipóteses explicitadas, duas remoções envolvem valência e a terceira alcança camada interna, compatível com grupo 2 no modelo representativo. B transforma o número do salto em oito elétrons sem razão. C contradiz a existência de pelo menos quatro elétrons e das quatro etapas. D inventa identificação e propriedades não fornecidas. Os números são autorais e não devem ser citados como dados experimentais."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Fotossíntese",
    "objective": "Explicar conversão de energia, origem do oxigênio e fixação de carbono na fotossíntese oxigênica, calcular balanços didáticos do ciclo de Calvin e comparar estratégias C3, C4 e CAM com hipóteses e limites explícitos.",
    "prerequisites": [
      "Estrutura de células e cloroplastos",
      "Oxidação, redução e função de ATP e transportadores de elétrons",
      "Leitura de equações e proporções entre moléculas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Luz, matéria e compartimentos",
        "explanation": "Fotossíntese converte energia luminosa em energia química e permite incorporar carbono inorgânico em compostos orgânicos. Nesta aula, o foco é a fotossíntese oxigênica de plantas, algas e cianobactérias; existem formas bacterianas anoxigênicas com outros doadores de elétrons, por isso não se deve reduzir toda fotossíntese a um único esquema. Em plantas e algas, o cloroplasto possui membranas dos tilacoides e estroma. Cianobactérias realizam fotossíntese sem possuir cloroplastos: são procariontes. O carbono incorporado aos carboidratos provém do CO2, enquanto o O2 liberado na fotossíntese oxigênica se origina da água oxidada. Uma equação global simplificada não revela sozinha essa origem nem todas as etapas do processo. A luz fornece energia; não cria os átomos de carbono e não substitui água ou nutrientes minerais. Pigmentos absorvem luz em faixas diferentes, e a cor observada depende também de reflexão e transmissão. Não se deve afirmar que uma folha verde não possa utilizar nenhum fóton da faixa verde. As plantas também realizam respiração celular, inclusive quando iluminadas; o saldo de troca gasosa reúne processos simultâneos e não identifica isoladamente a taxa de cada um. Da mesma forma, todas as células de uma planta não precisam realizar fotossíntese: tecidos de raiz frequentemente recebem compostos produzidos em partes fotossintéticas. A leitura de um experimento precisa delimitar organismo, material, luz, intervalo e o que foi efetivamente medido.",
        "steps": [
          "Identifique organismo e tipo de fotossíntese em discussão.",
          "Separe fonte de energia e fontes de matéria.",
          "Localize tilacoides e estroma quando houver cloroplastos.",
          "Diferencie produção fotossintética e saldo de processos simultâneos."
        ],
        "example": "Situação autoral: duas amostras de um mesmo tecido vegetal são mantidas sob condições controladas, uma iluminada e outra no escuro. Uma diferença de troca de CO2 pode apoiar investigação da fotossíntese, mas não permite afirmar que o tecido iluminado deixou de respirar. São necessárias as condições e o significado da medição antes de interpretar o saldo.",
        "pitfall": "Atribuir o O2 liberado ao CO2, tratar luz como fonte de carbono ou concluir que plantas só respiram durante a noite."
      },
      {
        "level": "intermediate",
        "title": "Etapas fotoquímicas e saldo do ciclo de Calvin",
        "explanation": "Nas membranas dos tilacoides, pigmentos e complexos de transporte participam da conversão de energia. No fluxo linear da fotossíntese oxigênica, o fotossistema II precede o I no caminho dos elétrons; os números refletem a história da identificação, não a ordem do fluxo. A oxidação da água repõe elétrons e libera O2. O transporte contribui para um gradiente de prótons, e a ATP sintase produz ATP no lado voltado ao estroma; a redução de NADP+ fornece NADPH. Fluxos cíclicos associados ao fotossistema I podem contribuir para ATP sem produção líquida de NADPH ou liberação de O2 por esse fluxo isolado. No estroma, o ciclo de Calvin incorpora CO2, reduz intermediários e regenera o aceptor RuBP. A Rubisco catalisa a carboxilação; ATP e NADPH sustentam etapas de redução e regeneração. No balanço didático usual, fixar três moléculas de CO2 permite saída líquida de um G3P de três carbonos, consumindo nove ATP e seis NADPH. Parte dos intermediários permanece na regeneração: não confunda produção bruta de moléculas intermediárias com saldo disponível para outras sínteses. Dois G3P líquidos podem fornecer carbono para formar uma hexose por reações adicionais, mas o ciclo não libera diretamente uma molécula de glicose a cada CO2 incorporado. A expressão reações independentes de luz não significa que funcionem somente à noite ou que sejam independentes dos produtos e da regulação associados à fase fotoquímica. Esses números são o balanço do modelo especificado, não uma taxa universal de produção de uma folha.",
        "steps": [
          "Trace o fluxo linear e diferencie água, O2, ATP e NADPH.",
          "Relacione gradiente de prótons à síntese de ATP.",
          "Separe fixação, redução e regeneração no ciclo.",
          "Calcule saldo líquido de G3P e consumo no modelo, sem somar intermediários regenerados."
        ],
        "example": "Cálculo autoral no modelo indicado: para a fixação de nove moléculas de CO2, três conjuntos de três CO2 permitem saldo de três G3P e requerem 27 ATP e 18 NADPH. Esse cálculo não inclui custos adicionais de transporte, manutenção, fotorrespiração ou mecanismos de concentração de carbono; não descreve uma medição de produtividade de cultivo.",
        "pitfall": "Contar todo G3P formado como saída líquida, trocar a ordem dos fotossistemas ou tratar o ciclo de Calvin como processo obrigatório e exclusivamente noturno."
      },
      {
        "level": "advanced",
        "title": "Limitações, fotorrespiração e estratégias C3, C4 e CAM",
        "explanation": "A Rubisco pode atuar em reações com CO2 ou com O2. Sua atividade oxigenase inicia a fotorrespiração, processo que consome recursos e pode reduzir a assimilação líquida de carbono. Ele não é sinônimo da respiração mitocondrial usual. Disponibilidade de CO2, temperatura, luz, água e abertura estomática influenciam o funcionamento da folha; aumentar apenas um fator não garante crescimento indefinido. Uma curva de saturação ou um saldo gasoso precisa ser lido nas condições definidas. Na via C3, o primeiro produto estável da carboxilação pela Rubisco tem três carbonos. Em plantas C4, uma fixação inicial por PEP carboxilase e posteriores etapas de liberação de CO2 ajudam a concentrá-lo próximo da Rubisco; na organização típica, há separação espacial entre etapas em células diferentes. Isso requer energia adicional e não elimina o ciclo de Calvin. Em CAM, no padrão clássico, a captação noturna com fixação inicial e armazenamento em ácidos é separada temporalmente da liberação diurna de CO2 e de sua assimilação pelo ciclo. Essa estratégia pode reduzir perda de água, mas há variações e modalidades facultativas; não se deve afirmar que todos os estômatos de toda planta CAM estão abertos apenas durante toda noite em qualquer condição. C4 e CAM não são certificados de superioridade universal: vantagens dependem do ambiente e dos custos. Para interpretar um cenário, identifique se o enunciado descreve separação espacial, temporal ou apenas fechamento estomático eventual. Um único dado de horário, sem mecanismo ou contexto, não autentica espécie nem prova toda a sua fisiologia.",
        "steps": [
          "Diferencie fotorrespiração e respiração celular.",
          "Leia limitações ambientais sem atribuir resultado a um fator isolado.",
          "Compare separação espacial típica C4 e temporal clássica CAM.",
          "Avalie quais conclusões o padrão fornecido permite, sem identificar espécie sem dados."
        ],
        "example": "Comparação autoral: num esquema didático C4, o CO2 é inicialmente incorporado em uma célula e depois concentrado próximo da Rubisco em outra. A separação é espacial. Isso não informa por si só produção por hectare, uso total de água ou vantagem em todo ambiente; tais comparações precisam de dados e condições.",
        "pitfall": "Dizer que C4 e CAM dispensam Calvin, confundir fechamento ocasional de estômatos com prova de CAM ou declarar uma via sempre superior em qualquer ambiente."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Experimento mental autoral, sem relato de pesquisa real: na fotossíntese oxigênica, fornece-se água marcada com 18O, mantendo inicialmente o CO2 sem essa marcação. Considerando a origem direta do oxigênio molecular liberado e desconsiderando trocas isotópicas posteriores, qual previsão se sustenta?",
        "hint": "Identifique qual molécula é oxidada para repor elétrons na etapa que libera o oxigênio molecular.",
        "options": [
          "O O2 liberado incorpora a marcação, pois seu oxigênio se origina diretamente da água.",
          "A marcação só pode aparecer no O2 se o CO2 inicial também estiver marcado, pois todo O2 vem diretamente dele.",
          "A luz transforma átomos de hidrogênio em 18O, independentemente dos átomos presentes na água.",
          "O ensaio demonstra que cianobactérias precisam possuir cloroplastos para oxidar água."
        ],
        "correctIndex": 0,
        "solution": "A: na fotossíntese oxigênica, o O2 liberado se origina da oxidação da água; o modelo prevê a marcação no oxigênio molecular. B atribui origem direta ao CO2, contrariando o processo. C inventa transmutação nuclear como função da luz. D conclui presença de cloroplastos em procariontes sem fundamento. O recorte trata da origem direta e exclui trocas posteriores, sem alegar que a marcação jamais possa aparecer em outras moléculas."
      },
      {
        "level": "intermediate",
        "prompt": "Balanço autoral do ciclo de Calvin: considere a fixação de 6 CO2, com regeneração de RuBP e saída líquida de um G3P para cada três CO2. Adote nove ATP e seis NADPH consumidos para cada G3P líquido, sem custos adicionais de transporte, manutenção, fotorrespiração ou concentração de carbono. Qual saldo e consumo são compatíveis?",
        "hint": "Conte conjuntos de três CO2 e multiplique o saldo líquido e os dois consumos por esse número.",
        "options": [
          "6 G3P líquidos, 6 ATP e 6 NADPH no modelo.",
          "1 G3P líquido, 9 ATP e 6 NADPH no modelo.",
          "2 G3P líquidos, 18 ATP e 12 NADPH no modelo.",
          "12 G3P líquidos, 18 ATP e 12 NADPH no modelo."
        ],
        "correctIndex": 2,
        "solution": "C: seis CO2 correspondem a dois conjuntos de três. O saldo é dois G3P líquidos e o consumo é 2·9 = 18 ATP e 2·6 = 12 NADPH. A confunde fixação com saída e erra consumo. B conta só um conjunto. D confunde intermediários brutos com saldo após regeneração. Dois G3P fornecem seis carbonos para sínteses adicionais; isso não afirma liberação direta de glicose pelo ciclo nem rendimento de uma planta real."
      },
      {
        "level": "advanced",
        "prompt": "Padrão didático explicitamente clássico: uma planta capta CO2 à noite, incorpora-o inicialmente em ácidos orgânicos e os armazena. Durante o dia, libera esse CO2 internamente para o ciclo de Calvin enquanto reduz a abertura dos estômatos. Que estratégia e separação entre etapas esse esquema descreve, sem identificar uma espécie?",
        "hint": "A distinção depende de quando ocorrem a fixação inicial e a posterior disponibilização de CO2, não de locais obrigatoriamente diferentes.",
        "options": [
          "C4, com eliminação completa do ciclo de Calvin e de toda necessidade de ATP.",
          "C3, com prova de que a Rubisco jamais participa da assimilação de carbono.",
          "Respiração mitocondrial exclusiva, sem qualquer incorporação fotossintética de carbono.",
          "CAM, com separação temporal entre fixação inicial e disponibilização posterior de CO2 para Calvin."
        ],
        "correctIndex": 3,
        "solution": "D reconhece a separação temporal do padrão CAM descrito. A confunde essa organização com a separação espacial típica C4 e ainda nega indevidamente Calvin e custos energéticos. B exclui a Rubisco sem base e ignora a organização descrita. C troca o processo por respiração exclusiva. O esquema não determina espécie, produtividade ou comportamento estomático em toda condição; a palavra clássico delimita o padrão analisado."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Renascimento e Reformas religiosas",
    "objective": "Relacionar transformações culturais do Renascimento e pluralização religiosa dos séculos XVI e XVII, distinguindo humanismo, correntes reformistas, renovação católica e limites dos acordos confessionais por meio de contexto e fontes.",
    "prerequisites": [
      "Diversidade política e religiosa da Europa medieval",
      "Noções de fonte histórica, instituição e interpretação",
      "Localização dos séculos XIV a XVII e dos principais espaços europeus"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Renascimento, humanismo e patronato",
        "explanation": "Renascimento é uma categoria usada para estudar transformações culturais que ganharam força em cidades italianas desde o século XIV e circularam com ritmos diversos por outros espaços europeus. Não foi um nascimento da cultura depois de uma Idade Média sem conhecimento: houve continuidades, apropriações e disputas. O humanismo valorizou estudo e crítica de textos gregos e latinos e práticas ligadas à gramática, retórica, poesia, história e filosofia moral. Não constitui uma única doutrina política ou uma negação obrigatória do cristianismo. Humanistas trabalharam para governos urbanos, famílias governantes e autoridades eclesiásticas; o estudo de autores antigos podia servir a projetos religiosos e políticos diferentes. Mecenato e patronato envolviam recursos, prestígio e interesses de quem encomendava obras; não provam liberdade artística irrestrita nem adesão automática de toda a população aos mesmos ideais. As artes exploraram observação, representação do corpo, espaço e repertórios clássicos, convivendo com temas cristãos e tradições anteriores. Inovações não apareceram de modo uniforme em todas as obras. A impressão com tipos móveis difundida na Europa a partir do século XV ampliou possibilidades de circulação, mas não tornou todos alfabetizados ou eliminou censura, preço e barreiras linguísticas. É necessário distinguir essa história europeia de afirmações falsas sobre invenção mundial da impressão. Ao analisar uma obra ou documento, verifique produção, destinatários e circulação; uma imagem mitológica isolada não demonstra que seu autor ou patrocinador rejeitasse toda crença religiosa.",
        "steps": [
          "Situe tempo e lugar sem uma oposição entre trevas e luz.",
          "Relacione estudo de fontes clássicas e práticas humanistas.",
          "Examine quem patrocina, produz e recebe a obra.",
          "Compare mudanças e continuidades com evidências específicas."
        ],
        "example": "Comparação autoral de situações possíveis: uma mesma residência encomenda uma imagem devocional e outra de tema mitológico. A variedade de temas permite investigar repertórios, usos e patronato, mas não comprova abandono de toda crença religiosa. Para uma conclusão sobre obras históricas específicas, seria preciso identificar autores, datas, contratos e circulação, não inventá-los a partir deste cenário.",
        "pitfall": "Tratar humanismo como ateísmo obrigatório ou tomar Renascimento como ruptura completa e simultânea com toda tradição medieval."
      },
      {
        "level": "intermediate",
        "title": "Reformas protestantes e trajetórias distintas",
        "explanation": "As Reformas do século XVI envolveram disputas sobre doutrina, práticas religiosas e autoridade, articuladas a interesses políticos e sociais. A controvérsia das 95 teses de Lutero em 1517 é um marco, não o primeiro questionamento cristão nem uma separação institucional já concluída naquele instante. A crítica às indulgências precisa distinguir a doutrina católica sobre penas temporais e os abusos de pregação e arrecadação; reduzi-la a uma compra oficialmente simples de perdão de qualquer pecado distorce o debate. Lutero desenvolveu posições sobre justificação pela fé e autoridade das Escrituras; isso não equivale a negar toda importância ética às ações ou a eliminar toda organização eclesiástica. Correntes reformadas associadas a outros líderes apresentaram diferenças sobre sacramentos, governo religioso e salvação. A expansão não foi fruto apenas de convicção individual ou apenas de cálculo financeiro: autoridades territoriais, comunidades, pregadores e redes de impressão atuaram de maneiras diversas. Na Inglaterra, o Ato de Supremacia de 1534 reconheceu Henrique VIII como chefe da Igreja inglesa e rompeu a jurisdição papal. Isso não tornou imediatamente a doutrina inglesa idêntica à luterana; houve mudanças e conflitos posteriores, incluindo restauração católica sob Maria e reorganização sob Elizabeth. Ato de 1559 e configuração de 1534 não são o mesmo documento. Não confunda ainda cristianismo ocidental latino com toda a diversidade religiosa europeia: comunidades judaicas, muçulmanas, cristãs orientais e outras populações não desaparecem porque o recorte da aula examina rupturas com Roma.",
        "steps": [
          "Separe marco inicial, desenvolvimento doutrinário e ruptura institucional.",
          "Diferencie crítica religiosa e apropriação política sem reduzir uma à outra.",
          "Compare correntes protestantes e a trajetória inglesa.",
          "Use datas e fontes para evitar tratar processos diferentes como um único acontecimento."
        ],
        "example": "Cenário autoral: autoridades de uma cidade apoiam um pregador reformista, mas parte da comunidade contesta uma medida sobre bens eclesiásticos. O apoio institucional não prova unanimidade dos habitantes nem demonstra que todos compartilhem os mesmos motivos. A análise precisa distinguir autoridades, grupos sociais, práticas e argumentos.",
        "pitfall": "Afirmar que todos os reformadores defendiam exatamente a mesma doutrina ou que romper a autoridade de Roma tornava automaticamente um reino luterano."
      },
      {
        "level": "advanced",
        "title": "Renovação católica, acordos e limites da coexistência",
        "explanation": "A renovação católica reuniu iniciativas anteriores e posteriores às rupturas protestantes, com reformas internas e reação ao desafio confessional. O Concílio de Trento, realizado em etapas entre 1545 e 1563, reafirmou posições doutrinárias católicas e estabeleceu medidas disciplinares e de formação, incluindo seminários. Não criou em 1563 toda a educação religiosa nem fundou a Companhia de Jesus: a aprovação papal dessa ordem ocorreu em 1540, antes da abertura do concílio. Educação e missões tiveram diferentes relações com expansão europeia e poderes locais; não devem ser descritas como encontro cultural sempre pacífico nem como experiência idêntica em todo lugar. Conflitos confessionais envolveram também dinastias, territórios e alianças, sem que religião fosse apenas uma máscara sem significado para os agentes. A Paz de Augsburgo de 1555 organizou uma coexistência limitada entre catolicismo e adesão à Confissão de Augsburgo no Sacro Império. Não garantiu liberdade individual universal nem incluiu todas as confissões; a autoridade de reforma territorial tinha exceções e condições. A reserva eclesiástica e regras para situações particulares impedem resumir o acordo como imposição uniforme e sem limites por qualquer governante sobre todas as pessoas. Em 1648, os acordos de Vestfália ampliaram o reconhecimento à confissão reformada, sem criar instantaneamente um mundo de Estados laicos ou direitos iguais para todos. A análise histórica deve distinguir regra escrita, implementação e experiência de minorias. Mudança cultural e pluralização confessional não levam automaticamente a tolerância moderna; convivência, perseguição e negociação coexistiram.",
        "steps": [
          "Diferencie renovação interna e reação às rupturas.",
          "Confira cronologia de concílio, ordem religiosa e decisão institucional.",
          "Delimite sujeitos e confissões abrangidos por um acordo.",
          "Distinga norma, prática e liberdade contemporânea sem narrativa de progresso inevitável."
        ],
        "example": "Comparação cronológica autoral com marcos documentados: a aprovação papal da Companhia de Jesus ocorreu em 1540, e Trento abriu em 1545. A ordem já existia antes do concílio; sua atuação posterior na renovação católica não permite atribuir ao concílio a aprovação inicial. A sequência ajuda a evitar confundir participação num processo e criação institucional.",
        "pitfall": "Confundir acordo confessional restrito com liberdade religiosa universal ou atribuir a Trento instituições que já existiam antes dele."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário didático autoral: um estudioso do século XV compara versões latinas de uma obra antiga para preparar uma edição encomendada por uma autoridade eclesiástica. Qual interpretação evita opor automaticamente humanismo e cristianismo?",
        "hint": "Considere a prática de leitura e comparação de fontes clássicas e a diversidade dos vínculos institucionais dos humanistas.",
        "options": [
          "A comparação de textos clássicos e o patronato religioso podem coexistir; o cenário não prova abandono obrigatório da fé.",
          "O uso de latim demonstra que o estudioso rejeita todos os autores antigos e nunca realiza trabalho filológico.",
          "Qualquer encomenda religiosa torna impossível estudar os clássicos em qualquer período ou instituição.",
          "O cenário comprova o nome do estudioso e o título de um poema de Petrarca, mesmo sem essas informações."
        ],
        "correctIndex": 0,
        "solution": "A reconhece compatibilidade entre estudo dos clássicos e vínculo religioso, sem transformar humanismo em ateísmo obrigatório. B nega a atividade de comparação descrita. C impõe uma incompatibilidade universal ausente da história. D inventa identificação e obra que o cenário não fornece. O caso é autoral e não deve ser citado como documento de uma encomenda real."
      },
      {
        "level": "intermediate",
        "prompt": "Resumo autoral para estudo de documento real: o Ato de Supremacia inglês de 1534 reconheceu Henrique VIII como chefe da Igreja da Inglaterra, rompendo a jurisdição papal no reino. O que essa mudança permite concluir, sem atribuir automaticamente doutrina idêntica à de Lutero?",
        "hint": "Diferencie reorganização da autoridade eclesiástica e identidade completa de crenças entre correntes religiosas.",
        "options": [
          "A decisão prova que todos os ingleses passaram imediatamente a defender exatamente a mesma teologia luterana.",
          "O ato encerrou todas as disputas religiosas inglesas e assegurou tolerância universal para os séculos seguintes.",
          "O ato reorganizou a autoridade religiosa em torno da monarquia; a trajetória doutrinária inglesa exige análise adicional.",
          "A data de 1534 demonstra que o documento foi aprovado durante o reinado de Elizabeth, sem relação com Henrique VIII."
        ],
        "correctIndex": 2,
        "solution": "C corresponde à mudança de jurisdição descrita e evita concluir igualdade completa com o luteranismo. A confunde autoridade e doutrina e universaliza adesão popular. B inventa fim de conflitos e tolerância universal. D troca o reinado e confunde marcos de 1534 e 1559. A fonte parlamentar é real; o resumo didático não é uma citação literal do ato."
      },
      {
        "level": "advanced",
        "prompt": "Ao comparar políticas confessionais do século XVI, uma ficha autoral registra que a Paz de Augsburgo de 1555 abrangia catolicismo e Confissão de Augsburgo, excluindo outras confissões e prevendo condições e exceções. Qual avaliação é compatível com esse recorte?",
        "hint": "Verifique a diferença entre reconhecimento restrito de coexistência e direito individual universal de escolher qualquer religião.",
        "options": [
          "O acordo garantia imediatamente a todas as pessoas igualdade de direitos religiosos, sem qualquer exclusão.",
          "A existência de duas confissões no acordo demonstra que todos os territórios europeus se tornaram Estados laicos.",
          "As exceções são irrelevantes: qualquer governante podia impor qualquer religião a todos sem limites ou condições.",
          "Tratava-se de coexistência confessional limitada, que não equivale à liberdade religiosa individual universal."
        ],
        "correctIndex": 3,
        "solution": "D distingue o âmbito restrito do acordo de uma garantia universal. A contradiz exclusões e condições. B transforma um arranjo do Sacro Império numa laicização de toda a Europa. C apaga as exceções expressamente indicadas e amplia o alcance para qualquer religião. O texto normativo e sua aplicação histórica também precisam ser diferenciados: a existência do acordo não comprova experiências idênticas para todas as populações."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Clima, massas de ar e mudanças climáticas",
    "objective": "Distinguir tempo e clima, relacionar fatores geográficos, massas de ar e frentes às condições atmosféricas e interpretar evidências de mudanças climáticas e frequências sem previsões inventadas ou atribuição causal por um dado isolado.",
    "prerequisites": [
      "Latitude, altitude e leitura de localização geográfica",
      "Noções de temperatura, umidade, pressão e precipitação",
      "Porcentagens, comparação de frequências e identificação de fonte e período"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tempo, clima e referências de comparação",
        "explanation": "Tempo descreve condições atmosféricas em um lugar e intervalo, como chuva numa tarde ou queda de temperatura durante uma frente. Clima envolve a distribuição dessas condições em períodos mais longos, incluindo médias, variabilidade, sazonalidade e extremos; não é apenas o tempo de um dia repetido. Normais climatológicas padronizadas costumam usar períodos consecutivos de trinta anos, como 1991–2020, com regras de cálculo, qualidade e disponibilidade de dados. Uma tabela de trinta números incompletos não se torna automaticamente uma normal válida. O INMET disponibiliza normais de diferentes períodos; comparar valores exige conferir estação, variável, unidade, método e base temporal. Uma média não informa sozinha frequência de dias extremos nem garante a condição de amanhã. Temperatura, umidade, pressão, vento e precipitação são elementos observados, enquanto latitude, altitude, relevo, circulação oceânica, distância do mar e cobertura da superfície ajudam a explicar padrões. A influência de um fator depende dos demais: altitude não fornece uma taxa universal e exata de resfriamento para toda situação atmosférica, e litoral não significa sempre chuva. A água e a terra respondem de maneira diferente ao aquecimento, contribuindo para contrastes de amplitude térmica, mas um diagnóstico regional requer dados. Na leitura de climogramas, diferencie temperatura média e precipitação acumulada; somar temperaturas mensais não produz temperatura média anual, e a altura de uma barra de chuva não deve ser lida como grau Celsius. Um evento local frio não refuta por si só uma tendência de temperatura média global.",
        "steps": [
          "Identifique lugar, intervalo e variável observada.",
          "Diferencie descrição de um evento e estatística climática.",
          "Confira período de referência, unidade e qualidade da série.",
          "Relacione elementos e fatores sem usar uma única regra universal."
        ],
        "example": "Situação autoral: duas cidades têm a mesma média anual de temperatura, mas uma concentra chuva em poucos meses e a outra tem precipitação distribuída. A média térmica compartilhada não demonstra climas idênticos. Para comparar, a turma precisa de distribuição sazonal, extremos, relevo e período dos dados, sem inventar valores ausentes.",
        "pitfall": "Usar um dia como prova de todo um clima, confundir unidades num climograma ou tratar uma normal como previsão garantida para amanhã."
      },
      {
        "level": "intermediate",
        "title": "Massas de ar, transformações e frentes",
        "explanation": "Uma massa de ar é um grande volume com características de temperatura e umidade relativamente homogêneas, adquiridas em sua região de origem e modificadas durante o deslocamento. Rótulos de origem não garantem propriedades imutáveis em qualquer trajetória. Na nomenclatura internacional usual, cP indica continental polar e cT, continental tropical; trocar essas letras altera o significado. No estudo escolar do Brasil, aparecem mEc, equatorial continental; mEa, equatorial atlântica; mTa, tropical atlântica; mTc, tropical continental; e mPa, polar atlântica. Essas convenções precisam ser reconhecidas no material fornecido, sem misturar esquemas. A mEc pode ser quente e úmida apesar da origem continental amazônica, com participação da evapotranspiração e da disponibilidade de água; por isso continental não equivale a seca sem exceção. A mTc costuma ser descrita como quente e seca, enquanto massas atlânticas transportam umidade em contextos próprios. Incursões de ar de origem polar podem provocar resfriamento em partes do Brasil, inclusive friagem na Amazônia, mas um termômetro isolado não identifica toda a origem e trajetória. Frentes são zonas de transição: numa frente fria, ar relativamente frio avança substituindo ar mais quente; numa quente ocorre a configuração inversa de avanço. Umidade, estabilidade, relevo e dinâmica influenciam nuvens, chuva e vento. Não há queda fixa de temperatura nem prazo universal de cessação da chuva após toda frente fria. Sistemas de alta pressão também não garantem temperatura amena, céu limpo ou ausência de riscos em toda circunstância.",
        "steps": [
          "Confira a convenção de siglas e a região de origem.",
          "Considere como superfície e trajetória modificam temperatura e umidade.",
          "Identifique qual massa avança e qual é substituída na frente.",
          "Evite prever intensidade e duração sem dados da situação."
        ],
        "example": "Cenário autoral: um volume de ar frio e inicialmente seco permanece sobre um oceano relativamente mais quente e ganha umidade. Sua história de deslocamento ajuda a explicar a mudança; não se deve manter uma propriedade de origem como se fosse impossível modificá-la nem concluir chuva de duração exata sem outros dados.",
        "pitfall": "Chamar cT de polar continental, afirmar que toda massa continental é seca ou converter uma frente em previsão numérica fixa sem observações."
      },
      {
        "level": "advanced",
        "title": "Mudanças climáticas, atribuição e leitura de frequências",
        "explanation": "Mudanças climáticas são alterações persistentes em propriedades do sistema climático e podem envolver causas naturais e humanas. Variabilidade natural também atua em várias escalas, não apenas no tempo curto e sem qualquer oscilação prolongada. Para o aquecimento global recente, o AR6 do IPCC atribui de forma inequívoca a influência humana, principalmente às emissões de gases de efeito estufa. O relatório de síntese de 2023 apresenta cerca de 1,1 °C de aquecimento em 2011–2020 em relação a 1850–1900; esse número tem período e referência definidos, não é uma leitura de qualquer ano posterior. O efeito estufa envolve absorção e emissão de radiação infravermelha; sua intensificação não é a mesma coisa que buraco na camada de ozônio. Mudanças em gases, aerossóis, uso do solo e outros componentes alteram o balanço energético de modos que exigem análise. Cenários são trajetórias condicionadas a hipóteses, não previsões únicas inevitáveis. O aquecimento pode alterar probabilidades e intensidades de extremos, mas atribuir um evento específico exige métodos, dados e definição do evento; não se inventa um fator de aumento para todo o planeta. Ao comparar frequências, mantenha limiar, duração, amostragem e unidades compatíveis. Uma razão de frequências observadas em dois conjuntos não prova sozinha a causa da diferença nem fornece automaticamente um período de retorno confiável. Mitigação procura limitar causas, como emissões; adaptação procura reduzir danos e vulnerabilidades. São ações complementares e contextualizadas, sem garantia de que uma única medida elimine todo risco.",
        "steps": [
          "Confira período, referência e alcance de uma conclusão climática.",
          "Diferencie evidência de influência humana global e atribuição de evento específico.",
          "Compare frequências com limiar e amostragem definidos.",
          "Separe cenários, observações e ações de mitigação ou adaptação."
        ],
        "example": "Comparação autoral de medidas: reduzir emissões de uma atividade atua sobre uma causa do aquecimento; ajustar drenagem urbana a riscos de inundação atua sobre vulnerabilidades e impactos. Uma ação pode combinar objetivos, mas classificar essas funções não comprova sua eficácia num município específico sem dados, projeto e avaliação.",
        "pitfall": "Trocar o período de um número do IPCC, tratar cenário como certeza ou deduzir causa e retorno universal de um evento a partir de uma pequena amostra."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um comentário autoral afirma: “Hoje fez frio na minha cidade; logo, a média global não pode estar aumentando.” Qual avaliação respeita a diferença entre tempo local e tendência climática global?",
        "hint": "Observe a diferença de escala espacial e temporal entre uma observação diária e uma série de médias globais.",
        "options": [
          "O comentário é conclusivo, pois uma única observação local determina a temperatura média de todo o planeta por décadas.",
          "O frio observado pode ser real, mas esse dado isolado não refuta uma tendência da média global avaliada em séries e escalas apropriadas.",
          "Uma tendência global implica necessariamente que nunca volte a ocorrer nenhum dia frio em nenhum lugar.",
          "Não é possível estudar clima com observações, apenas com opinião individual sobre as estações do ano."
        ],
        "correctIndex": 1,
        "solution": "B separa as escalas: um evento local frio pode coexistir com aumento de médias globais de longo prazo. A transforma um ponto em medida do planeta inteiro; C converte tendência estatística em proibição de toda ocorrência fria; D nega o papel de observações e análise. A resposta não confirma uma série local não fornecida nem exige negar o dia frio para reconhecer a tendência global."
      },
      {
        "level": "intermediate",
        "prompt": "No esquema escolar brasileiro de massas de ar, a mEc tem origem continental amazônica e pode ser quente e úmida. Qual explicação evita a regra equivocada de que continental significa sempre seca?",
        "hint": "Considere condições da superfície e disponibilidade de água, além do nome usado para indicar a região de origem.",
        "options": [
          "A origem continental obriga que a massa não contenha vapor de água em nenhuma situação.",
          "A sigla mEc demonstra que a massa se origina obrigatoriamente sobre gelo polar e nunca muda no trajeto.",
          "Toda umidade prova origem exclusivamente oceânica, sendo impossível contribuição da vegetação continental.",
          "Água disponível e evapotranspiração na região de origem ajudam a explicar a umidade; rótulo continental não é proibição universal de ar úmido."
        ],
        "correctIndex": 3,
        "solution": "D relaciona as características às condições amazônicas e evita a generalização indevida. A trata continental como ausência obrigatória de vapor; B troca origem equatorial por polar e nega transformações; C elimina fontes continentais de umidade sem fundamento. A explicação não afirma intensidade de chuva, caminho ou horário de uma massa real sem dados; esclarece o alcance do esquema usado."
      },
      {
        "level": "advanced",
        "prompt": "Exercício estatístico autoral, sem dados de estação ou projeção real: sob o mesmo limiar fixo de calor e procedimento de contagem, primeira amostra: 8 dias em 100; segunda amostra: 20 dias em 100. Qual comparação descritiva é correta, sem concluir causa climática apenas desses números?",
        "hint": "Divida cada contagem pelo tamanho da amostra e compare as duas frequências; razão não é demonstração automática de causa.",
        "options": [
          "A frequência observada é 2,5 vezes a inicial; os dados isolados não demonstram a causa da diferença.",
          "A frequência observada é 20 vezes a inicial e prova a mesma alteração em todos os continentes.",
          "O número 20 demonstra retorno exato de um evento a cada vinte anos, independentemente da unidade observada.",
          "As amostras provam que todo dia acima do limiar foi causado exclusivamente pela passagem de uma frente fria."
        ],
        "correctIndex": 0,
        "solution": "A: as frequências observadas são 8/100 = 0,08 e 20/100 = 0,20. A razão é 0,20/0,08 = 2,5. B confunde a contagem com a razão e extrapola globalmente. C troca dias observados por período de retorno em anos sem modelo. D atribui uma causa exclusiva ausente dos dados. A comparação é descritiva do exercício; não estima sozinha tendência de uma região, probabilidade futura ou atribuição de evento real."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia política e democracia",
    "objective": "Analisar justificações da autoridade política e da democracia, distinguir poder de fato e legitimidade normativa e comparar consentimento, representação, participação e deliberação com atenção a direitos, desigualdades e possibilidade de contestação.",
    "prerequisites": [
      "Identificação de tese, argumento e objeção",
      "Distinção entre descrição de fatos e avaliação normativa",
      "Noções de instituição, regra e participação coletiva"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Poder, autoridade e legitimidade",
        "explanation": "A filosofia política examina como justificar instituições, direitos, decisões coletivas e o exercício do poder. Ela se relaciona à ética, que também pode tratar de justiça e relações sociais; não há uma separação simples entre moral apenas individual e política apenas coletiva. Poder de fato envolve capacidade de produzir efeitos e obter obediência. A questão normativa da autoridade pergunta quando alguém tem direito de impor decisões e que obrigações poderiam justificar a obediência. Aceitação social, tradição e eficácia podem ajudar a explicar por que um poder se mantém, mas não demonstram automaticamente que ele seja moralmente legítimo. O termo legitimidade é usado de modos diferentes em análises sociológicas e filosóficas; é necessário indicar qual sentido está em discussão. Estado e governo também não são sinônimos: na organização estatal moderna, instituições e ordem política não se reduzem ao conjunto de dirigentes de um mandato. Isso não significa que o Estado seja imutável ou que exista uma definição única para todos os períodos e teorias. Democracia relaciona-se à participação em decisões coletivas sob alguma forma de igualdade política, mas há disputas sobre procedimentos, inclusão e limites. A democracia ateniense e as democracias representativas atuais não têm a mesma escala nem a mesma composição do corpo de cidadãos; exclusões históricas impedem tratá-las como modelos idênticos de participação universal. Para argumentar, separe uma descrição institucional de uma defesa normativa e pergunte quais razões apoiam a passagem de uma para a outra.",
        "steps": [
          "Identifique se a afirmação descreve poder ou procura justificá-lo.",
          "Diferencie obediência obtida e direito de comandar.",
          "Esclareça o sentido de legitimidade e o modelo de instituição.",
          "Examine quem participa e quem fica excluído da decisão."
        ],
        "example": "Caso autoral: uma associação esportiva aprova regras para seus integrantes. Isso não a transforma automaticamente em Estado nem justifica impor a mesma regra a toda a população de um território. A comparação ajuda a perguntar por âmbito, adesão e autoridade sem concluir que qualquer organização com um dirigente tenha a mesma natureza política.",
        "pitfall": "Concluir que obediência, popularidade ou eficácia demonstram por si sós justiça, ou usar Estado e governo como nomes intercambiáveis em qualquer contexto."
      },
      {
        "level": "intermediate",
        "title": "Justificações do poder e modelos de contrato",
        "explanation": "Teorias de contrato social usam problemas de acordo, segurança, direitos e liberdade para discutir autoridade. Não devem ser lidas como prova de que toda sociedade nasceu de uma reunião real com assinatura de todos. Em Hobbes, a insegurança de uma condição sem poder comum fundamenta a defesa de uma autoridade capaz de garantir paz; o soberano não precisa ser um monarca em toda formulação, e o tema da autopreservação impede resumir sua teoria como renúncia sem qualquer ressalva à vida. Em Locke, governo por consentimento e proteção de direitos se articulam a limites do poder e condições de resistência quando a confiança política é rompida. Isso não equivale a atribuir ao autor todas as instituições ou inclusões das democracias atuais; a história das teorias exige contexto e crítica. Em Rousseau, soberania do povo e vontade geral envolvem orientação ao interesse comum; vontade geral não é simplesmente soma de desejos particulares nem qualquer decisão majoritária tomada em condições arbitrárias. Soberania e governo possuem funções distintas na obra. Essas posições não são três descrições idênticas de um mesmo contrato: divergem sobre autoridade, liberdade e papel dos governados. Comparar autores exige identificar o problema, as premissas e as condições de cada argumento. Também permite questionar limites: que consentimento conta, como lidar com desigualdades e quem é incluído como participante? A existência de uma tradição influente não resolve essas questões por autoridade do nome. Uma resposta filosófica deve apresentar razões e objeções, sem converter um resumo didático em citação literal ou em consenso entre todos os pensadores.",
        "steps": [
          "Localize o problema que cada teoria pretende resolver.",
          "Diferencie acordo justificativo e relato histórico comprovado.",
          "Compare segurança, direitos e liberdade sem igualar os autores.",
          "Formule uma objeção sobre consentimento, limites ou inclusão."
        ],
        "example": "Comparação autoral de argumentos: uma posição sustenta que segurança exige poder comum; outra enfatiza que o exercício do governo deve permanecer limitado por direitos. Identificar essa diferença é mais útil que escrever apenas “ambos falam em contrato”. O resumo não autentica palavras literais de um autor nem elimina a necessidade de ler condições e contexto de sua obra.",
        "pitfall": "Tratar contrato como certidão histórica de origem de todo Estado ou interpretar vontade geral como autorização automática para qualquer desejo da maioria."
      },
      {
        "level": "advanced",
        "title": "Representação, participação e deliberação democrática",
        "explanation": "Teorias democráticas podem justificar procedimentos por igualdade política, liberdade, qualidade de decisões ou outras razões, e discordam sobre como equilibrá-las. Representação, participação e deliberação não são necessariamente regimes que se excluem: uma ordem representativa pode incluir conselhos, consultas e outros espaços de participação. O papel e o poder de decisão de cada mecanismo dependem de seu desenho; a mera existência de uma reunião não garante inclusão. Mandatos e calendários eleitorais variam, de modo que quatro anos não define toda democracia. Competição real e possibilidade de substituição dos dirigentes também não significam troca obrigatória a cada eleição. Perspectivas deliberativas valorizam troca de razões em condições de liberdade e igualdade, sem exigir que toda decisão resulte em unanimidade ou dispensar votação quando o desacordo persiste. Na vertente neorrepublicana, liberdade como não dominação chama atenção ao poder arbitrário ou não controlado, mesmo quando não há interferência efetiva em cada momento. Igualdade formal de voto pode coexistir com desigualdade de voz, acesso à informação e capacidade de influenciar a agenda. Em democracias constitucionais, a vontade majoritária precisa ser analisada junto a direitos e condições de contestação; vitória eleitoral não torna qualquer medida justa ou democraticamente aceitável. Erosão democrática pode envolver restrições graduais à oposição e aos controles institucionais, sem um único roteiro universal ou uma causa isolada suficiente. Autonomia judicial, informação, participação e fiscalização importam, mas não autorizam afirmar que toda nomeação de magistrado seja captura ou que um órgão sozinho garanta a democracia.",
        "steps": [
          "Diferencie representação, participação e troca de razões.",
          "Examine regras de acesso, agenda e decisão de cada mecanismo.",
          "Analise maiorias junto a direitos e contestação.",
          "Procure evidências de restrição institucional sem roteiros ou causas automáticas."
        ],
        "example": "Situação autoral: uma consulta pública recebe propostas e publica respostas justificadas, mas parte da população não consegue acessar seu único canal digital. A existência formal de consulta não demonstra participação em condições iguais; o caso permite discutir acesso e desenho do procedimento sem afirmar resultados de um programa real ou exigir exposição de dados pessoais.",
        "pitfall": "Equiparar contagem de votos a legitimidade ilimitada, impor unanimidade a toda deliberação ou supor que tecnologia e eleições isoladas garantam inclusão."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário autoral: um governante obtém obediência por medo. Um observador conclui: “Como consegue ser obedecido, possui necessariamente o direito moral de governar.” Qual problema há na inferência?",
        "hint": "Diferencie capacidade de obter um comportamento e justificação normativa do direito de impor decisões.",
        "options": [
          "Ela demonstra que qualquer uso de força é aceito unanimemente por todas as pessoas afetadas.",
          "Ela prova que ninguém obedece a instituições por razões diferentes do medo.",
          "Ela transforma poder de fato em legitimidade normativa sem apresentar uma justificação suficiente dessa passagem.",
          "Ela confirma que a existência de um território torna moralmente correta qualquer decisão tomada nele."
        ],
        "correctIndex": 2,
        "solution": "C identifica a passagem não justificada: obter obediência demonstra capacidade efetiva, não por si só direito moral de governar. A inventa aceitação unânime; B universaliza um motivo que pertence apenas ao cenário; D usa localização como garantia de correção. A análise não estabelece automaticamente qual teoria de legitimidade é verdadeira; mostra que a conclusão precisa de razões adicionais."
      },
      {
        "level": "intermediate",
        "prompt": "Numa comparação autoral de teorias contratualistas, uma estudante afirma: “Se Hobbes, Locke e Rousseau usam a ideia de contrato, então defendem a mesma autoridade sem limites e descrevem a assinatura real que originou todos os Estados.” Qual revisão é adequada?",
        "hint": "Observe a diferença entre recurso de justificação, condições de autoridade e relato histórico documentado.",
        "options": [
          "Contrato significa sempre um documento real preservado, ainda que não exista qualquer fonte apresentada.",
          "As teorias diferem sobre poder, direitos e liberdade; contrato não é prova automática de uma assinatura histórica universal.",
          "A referência a contrato demonstra que Locke e Rousseau rejeitam toda participação dos governados em qualquer forma política.",
          "Os três autores afirmam que toda vontade particular de um governante é idêntica ao interesse comum."
        ],
        "correctIndex": 1,
        "solution": "B preserva as diferenças teóricas e evita confundir argumento de justificação com evidência de um acontecimento histórico universal. A exige um documento sem fonte. C apaga consentimento e soberania popular das discussões pertinentes. D iguala vontade particular e interesse comum e atribui uma tese uniforme sem apoio. A revisão não precisa afirmar que os três autores concordam em todos os limites ou instituições."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral em uma democracia constitucional: após vencer uma eleição competitiva, uma maioria propõe impedir que grupos de oposição se organizem e concorram novamente. Qual análise considera tanto a decisão eleitoral quanto as condições de contestação democrática?",
        "hint": "A possibilidade de disputar futuras decisões e a proteção de direitos não se esgotam na contagem da última eleição.",
        "options": [
          "A vitória torna toda medida da maioria automaticamente justa, sem necessidade de examinar direitos ou regras futuras.",
          "Eleição competitiva exige que o mesmo grupo seja proibido de governar de novo, independentemente das regras e da preferência dos eleitores.",
          "Qualquer desacordo demonstra que a população deve deixar de votar para que exista deliberação.",
          "A vitória não autoriza suprimir automaticamente direitos e competição futura; a proposta ameaça condições de contestação democrática."
        ],
        "correctIndex": 3,
        "solution": "D examina o limite da autorização eleitoral: impedir organização e concorrência futura da oposição ameaça condições que permitem contestação e participação. A transforma maioria em poder ilimitado. B confunde possibilidade de substituição com troca obrigatória. C opõe desacordo e voto sem fundamento. O caso é didático, não diagnóstico de um país ou orientação eleitoral dirigida a pessoas específicas."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Estado, poder e cidadania",
    "objective": "Analisar Estado, governo, poder e dominação como relações sociais, distinguir tipos de legitimidade e dimensões da cidadania e investigar diferenças entre reconhecimento formal, participação e acesso efetivo a direitos.",
    "prerequisites": [
      "Instituições, normas e relações sociais",
      "Distinção entre descrição sociológica e avaliação moral",
      "Leitura de situações coletivas sem generalizar de um indivíduo para toda população"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estado, governo e relações de poder",
        "explanation": "Poder não aparece somente no Estado: empresas, famílias, associações, meios de comunicação e movimentos também podem influenciar ações e decisões. Na análise sociológica, é importante observar recursos, regras, posições e possibilidades de resistência, em vez de atribuir toda influência à personalidade de um dirigente. Estado e governo não são nomes equivalentes. No estudo do Estado moderno, examinamos instituições e organização territorial da autoridade; governo refere-se ao exercício da direção política em uma configuração institucional e período, sem esgotar o conjunto estatal. Também é preciso distinguir Estado, sociedade e nação: identidades culturais e vínculos políticos não se sobrepõem de modo automático em todos os casos. Na formulação de Weber, o Estado moderno reivindica o monopólio do uso legítimo da força física em determinado território. Isso não significa que nenhuma violência privada exista nem que todo ato praticado por um agente estatal seja justo. A reivindicação de legitimidade e as condições de autorização devem ser analisadas; até usos de força por particulares podem ser submetidos a regras estatais. A definição descreve um problema de organização da dominação, não uma aprovação moral de toda coerção. Relações de classe, burocracias, interesses e disputas ajudam a investigar decisões públicas. Teorias sociológicas diferem sobre como esses elementos se articulam, e a presença de uma instituição formal não comprova neutralidade de todos os seus efeitos. Pergunte quem decide, com quais recursos, sob quais regras e sobre quem a decisão incide.",
        "steps": [
          "Identifique os agentes e os recursos que permitem influenciar decisões.",
          "Diferencie instituições estatais e direção governamental.",
          "Examine reivindicação de legitimidade e regras de coerção.",
          "Evite confundir descrição de poder com aprovação moral automática."
        ],
        "example": "Caso autoral: uma grande empresa altera as condições de acesso a um serviço privado e afeta a rotina de um bairro. Isso permite analisar poder econômico e relações sociais, mas não transforma automaticamente a empresa em Estado. Seria necessário distinguir influência, organização territorial da autoridade e regras que enquadram a atividade.",
        "pitfall": "Afirmar que só o governo exerce poder, que qualquer organização influente é um Estado ou que a definição de Weber aprova toda violência estatal."
      },
      {
        "level": "intermediate",
        "title": "Dominação e tipos de legitimidade",
        "explanation": "Weber distingue poder em sentido amplo e dominação relacionada à probabilidade de encontrar obediência a determinadas ordens. A crença na legitimidade ajuda a explicar a estabilidade de relações de comando, mas não é prova de correção moral do ponto de vista de toda teoria ética. Os tipos tradicional, carismático e racional-legal são instrumentos analíticos, não uma sequência obrigatória pela qual todas as sociedades passam. Na dominação tradicional, a validade é apoiada no costume reconhecido. Na carismática, seguidores atribuem qualidades extraordinárias a uma liderança; carisma não significa apenas simpatia, fama ou capacidade técnica objetivamente comprovada. Na racional-legal, a obediência se dirige a regras e competências de cargos; a pessoa exerce autoridade segundo uma ordem impessoal, não por possuir um poder pessoal sem limites. Nenhum desses tipos demonstra sozinho que o regime seja democrático. Uma administração pode apresentar procedimentos burocráticos sem garantir igualdade política ou respeito efetivo a direitos. Casos históricos combinam fundamentos e mudam com disputas e institucionalização; encontrar uma regra escrita não exclui toda tradição ou apelo carismático. Na pesquisa, procure o motivo alegado para obedecer, a organização do comando e as condições de contestação. Não deduza o tipo de legitimidade apenas de roupa, idade ou aparência de uma pessoa. Tampouco se conclui aceitação unânime a partir de uma manifestação pública: obediência pode envolver interesse, hábito, medo e crenças diferentes entre os participantes. A análise precisa de evidências situadas e reconhecimento desses limites.",
        "steps": [
          "Identifique a razão invocada para obedecer.",
          "Compare costume, atribuição pessoal extraordinária e competência de cargo.",
          "Considere combinações e mudanças em vez de fases universais.",
          "Separe crença de legitimidade e avaliação ética das decisões."
        ],
        "example": "Situação autoral: a direção de uma organização procura justificar uma decisão tanto por uma norma de competência quanto por um costume antigo do grupo. A coexistência dessas razões permite investigar combinação de fundamentos; não é necessário forçar toda a situação a um único tipo puro nem concluir que o conteúdo da decisão seja justo apenas por haver uma norma.",
        "pitfall": "Definir carisma como ser agradável, considerar burocracia prova de democracia ou transformar tipos ideais em etapas inevitáveis de evolução."
      },
      {
        "level": "advanced",
        "title": "Cidadania, direitos e desigualdade de participação",
        "explanation": "Cidadania envolve pertencimento político, direitos, deveres e formas de participação, com trajetórias históricas de inclusão, conflito e exclusão. Uma distinção associada a T. H. Marshall separa dimensões civis, políticas e sociais. Direitos civis dizem respeito a liberdades e garantias, como acesso à justiça; políticos envolvem participação no exercício do poder; sociais dizem respeito a condições de bem-estar e participação na vida social. Essa classificação é uma ferramenta analítica, não uma ordem cronológica obrigatória para todos os países. A discussão de percursos nacionais, como a de José Murilo de Carvalho para o Brasil, exige contexto em vez de aplicar mecanicamente a sequência inglesa. Reconhecimento formal e efetivação também diferem: uma previsão pode existir e seu exercício encontrar barreiras econômicas, territoriais, institucionais ou discriminatórias. A Constituição brasileira de 1988 inclui cidadania e dignidade da pessoa humana entre seus fundamentos; isso não significa que todas as desigualdades tenham sido eliminadas pela promulgação. Direitos humanos não se reduzem a direitos eleitorais de nacionais: a dignidade das pessoas não depende de comprovar participação numa eleição. Ao investigar desigualdade, identifique regra, acesso, recursos e resultados, sem concluir uma causa exclusiva com poucos dados. Participação inclui organização coletiva, acompanhamento e contestação, além do voto, conforme os mecanismos de cada contexto. Uma atividade aberta formalmente pode continuar inacessível a parte da população. Essa diferença não demonstra que o direito nunca existiu; mostra a necessidade de analisar condições efetivas, práticas institucionais e disputas por reconhecimento e implementação.",
        "steps": [
          "Diferencie dimensões civis, políticas e sociais com exemplos pertinentes.",
          "Situe a trajetória histórica sem sequência universal.",
          "Separe previsão formal e condições concretas de exercício.",
          "Investigue barreiras e evidências sem atribuir uma causa isolada sem dados."
        ],
        "example": "Cenário autoral: há previsão de oferta educacional, mas estudantes de uma área rural enfrentam transporte irregular e grande distância. O caso permite discutir condições de exercício de um direito social; não comprova inexistência da previsão nem uma causa única para todas as desigualdades educacionais do país. É preciso investigar infraestrutura, organização e experiência dos grupos envolvidos.",
        "pitfall": "Reduzir cidadania a votar, supor que um direito escrito se realiza automaticamente ou aplicar a cronologia de um país como lei de toda sociedade."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Numa análise autoral do Estado moderno, uma estudante diz: “Se o Estado reivindica o monopólio do uso legítimo da força, então toda violência de qualquer agente estatal é moralmente correta.” Qual avaliação evita confundir definição sociológica e aprovação moral?",
        "hint": "Reivindicação de legitimidade e organização da coerção não demonstram automaticamente justiça de cada ato concreto.",
        "options": [
          "A conclusão é necessária, pois o cargo de um agente torna correta qualquer ação que ele pratique.",
          "A frase prova que nenhuma violência privada jamais ocorre num território com Estado.",
          "A formulação permite investigar autoridade e autorização, mas não aprova moralmente todo ato de violência estatal.",
          "A existência de coerção demonstra que Estado, governo e empresa privada são sempre a mesma instituição."
        ],
        "correctIndex": 2,
        "solution": "C preserva o sentido analítico e rejeita a passagem automática para aprovação moral. A transforma cargo em licença ilimitada; B confunde reivindicação de monopólio legítimo com inexistência empírica de violência privada; D apaga distinções institucionais. Para examinar um ato concreto, é necessário investigar regras, contexto e critérios de avaliação, sem concluir tudo de uma definição."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: numa repartição, o atendimento é autorizado por uma norma que define as competências do cargo, e a obrigação permanece quando muda a pessoa que o ocupa. Qual fundamento de dominação é enfatizado nesse recorte weberiano?",
        "hint": "O enunciado destaca regras e competências impessoais, e não costume ancestral ou qualidades extraordinárias de uma pessoa.",
        "options": [
          "Racional-legal, pela autoridade vinculada às regras e competências do cargo no recorte descrito.",
          "Carismático, pois qualquer servidor se torna extraordinário simplesmente por ocupar um cargo.",
          "Tradicional, porque toda regra escrita deriva necessariamente de um costume ancestral imutável.",
          "Ausência completa de autoridade, pois trocar o ocupante extingue necessariamente qualquer instituição."
        ],
        "correctIndex": 0,
        "solution": "A identifica o fundamento enfatizado: competência definida por regra e continuidade institucional independente da pessoa. B confunde cargo com reconhecimento carismático. C transforma toda regra escrita em tradição e ignora o critério do enunciado. D contradiz a continuidade descrita. A classificação do recorte não prova que não existam outros fundamentos no caso completo, nem certifica qualidade ou justiça do atendimento."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: um conselho permite formalmente que todos os integrantes apresentem propostas. Na prática, reuniões em horário único e ausência de tradução impedem parte deles de acompanhar a discussão. Qual conclusão é sustentada sem inventar o motivo de cada ausência?",
        "hint": "Compare a possibilidade prevista pela regra e as condições concretas de participação que o próprio cenário informa.",
        "options": [
          "A abertura formal garante participação efetiva idêntica, ainda que existam barreiras descritas.",
          "As ausências demonstram obrigatoriamente desinteresse pessoal e incapacidade de todos os integrantes afetados.",
          "A regra não pode existir, pois qualquer dificuldade prática elimina automaticamente todo reconhecimento formal.",
          "O direito formal de apresentar propostas pode coexistir com barreiras à participação efetiva; é preciso investigar e enfrentar essas condições."
        ],
        "correctIndex": 3,
        "solution": "D distingue reconhecimento e exercício. O cenário informa obstáculos de horário e linguagem, permitindo investigar desigualdade de participação sem atribuir desinteresse ou incapacidade. A nega as barreiras; B inventa motivos e estereotipa os afetados; C confunde implementação imperfeita com inexistência de regra. A análise é sociológica e didática, sem apresentar levantamento real nem solicitar dados pessoais dos estudantes."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Perspectiva e composição visual",
    "objective": "Analisar recursos de profundidade e organização visual, distinguir perspectiva linear e atmosférica e justificar escolhas de composição com evidências, sem regras universais de beleza ou interpretações psicológicas sem fonte.",
    "prerequisites": [
      "Linhas paralelas, formas e planos",
      "Diferença entre espaço representado e superfície do suporte",
      "Contraste de valor, cor e escala visual"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Profundidade e perspectiva linear",
        "explanation": "Uma imagem plana pode sugerir profundidade por sobreposição, variação de tamanho aparente, posição, modelagem e construção perspectiva. Esses recursos precisam ser interpretados juntos: um objeto desenhado menor não está necessariamente mais distante se seu tamanho físico for diferente. Perspectiva linear, no modelo central ideal, relaciona um ponto de vista, um plano de imagem e direções espaciais. Na configuração usual de um ponto para um ambiente ou objeto alinhado ao plano da imagem, as linhas paralelas de profundidade convergem para o mesmo ponto de fuga. Não significa que todas as linhas desenhadas convirjam para ele. Linhas paralelas ao plano da imagem permanecem paralelas nessa projeção; uma fachada frontal não tem de ser deformada para obedecer a um ponto destinado ao recuo. No modelo usual com plano de imagem vertical e vista horizontal, a linha do horizonte corresponde ao nível dos olhos para as direções horizontais e pode ser definida mesmo em um interior sem céu visível. O ponto de fuga não precisa estar no centro da folha, pois enquadramento e ponto de vista são escolhas. Para construir uma caixa frontal simples, desenhe a face, prolongue as direções de profundidade para o ponto de fuga e determine o término do volume; não conecte todos os cantos a um ponto como se todas as direções espaciais fossem iguais. Também não se conclui que qualquer face lateral resultante será necessariamente um paralelogramo. A construção é um recurso de representação, não uma obrigação para toda forma de arte.",
        "steps": [
          "Identifique quais pistas sugerem distância e quais dependem de tamanho físico.",
          "Defina ponto de vista, plano de imagem e configuração usada.",
          "Separe linhas de recuo e linhas paralelas ao plano da imagem.",
          "Confira coerência entre as famílias de direções sem convergir tudo."
        ],
        "example": "Descrição autoral autossuficiente: um círculo interrompe parte do contorno de um quadrado, cobrindo-o. A sobreposição sugere o círculo à frente nesse arranjo, mesmo sem linhas de fuga. Isso não prova distância métrica nem tamanho físico dos objetos; demonstra uma pista de ordem espacial na representação.",
        "pitfall": "Mandar todas as linhas para o mesmo ponto, exigir céu visível para definir horizonte ou tomar tamanho desenhado como medida automática de distância."
      },
      {
        "level": "intermediate",
        "title": "Direções de fuga e perspectiva atmosférica",
        "explanation": "Quando uma caixa é vista de canto na configuração usual de dois pontos, duas famílias de arestas horizontais, paralelas dentro de cada família, convergem para pontos distintos sobre o horizonte. As verticais permanecem paralelas no modelo com plano de imagem vertical e vista horizontal. Não se deve medir automaticamente noventa graus entre os pontos desenhados: a relação entre direções do objeto e sua projeção depende do ponto de vista. Em configurações de três pontos, a direção vertical também pode ter um ponto de fuga finito, que não fica obrigatoriamente na mesma linha dos pontos de fuga horizontais. A expressão um, dois ou três pontos descreve uma organização de direções principais, não um limite universal para todos os objetos de uma cena complexa. Perspectiva atmosférica usa mudanças de contraste, cor e nitidez para sugerir distância, relacionadas à presença da atmosfera no caminho da luz. Objetos distantes podem parecer menos definidos e com contraste reduzido, mas não existe obrigação de que todos sejam sempre azuis ou mais claros em qualquer iluminação e condição. Perspectivas linear e atmosférica podem combinar-se ou ser exploradas separadamente; uma paisagem não precisa exibir construção geométrica explícita para sugerir profundidade. Projeções paralelas, como certas axonometrias, têm outra lógica e não são necessariamente erros de perspectiva linear. A escolha de um sistema pode responder a função, tradição, intenção documentada ou experimentação. Sem a obra e seu contexto, não se deduz inferioridade técnica ou cultural por ausência de um ponto de fuga central.",
        "steps": [
          "Agrupe arestas por direção espacial antes de localizar fugas.",
          "Confira as hipóteses que mantêm verticais paralelas.",
          "Diferencie construção geométrica e efeitos atmosféricos.",
          "Analise o sistema empregado sem impor um único padrão a toda obra."
        ],
        "example": "Comparação autoral: numa paisagem descrita, a montanha próxima tem contorno bem definido, enquanto uma serra distante perde contraste sob névoa. A gradação permite discutir perspectiva atmosférica sem precisar inventar uma grade de fuga. Outra condição de iluminação poderia alterar cores e contrastes, portanto a descrição não cria uma regra de azul obrigatório para toda distância.",
        "pitfall": "Colocar obrigatoriamente os três pontos no horizonte, exigir pontos separados por noventa graus na folha ou tratar perspectiva atmosférica como convergência de linhas pela cor."
      },
      {
        "level": "advanced",
        "title": "Composição, hierarquia e interpretação",
        "explanation": "Composição envolve relações entre elementos no suporte: distribuição, escala, enquadramento, contraste, repetição, ritmo, equilíbrio, áreas ocupadas e espaços entre formas. Equilíbrio visual não é uma medida do estado emocional de quem criou a imagem. Simetria, assimetria e arranjos radiais podem organizar pesos visuais de maneiras diferentes, e nenhuma solução é obrigatoriamente melhor para toda finalidade. Um elemento pode ganhar destaque por tamanho, valor, cor, isolamento ou posição; a leitura ainda depende de contexto, experiência e tarefa do observador. Não se deve afirmar que um recurso controla de forma idêntica o olhar de todas as pessoas. A regra dos terços é uma orientação de composição que divide a área em três faixas horizontais e três verticais; suas interseções podem servir como lugares de experimentação. Não é lei biológica, não exige excluir o centro e não garante máximo impacto. Proporção áurea também não constitui certificado universal de beleza ou intenção de um artista. Para analisar uma composição, descreva primeiro as relações presentes e depois formule uma interpretação justificada. Um enquadramento pode omitir informações, produzir tensão ou destacar uma figura, mas o efeito percebido não prova sozinho a intenção documentada. Reorganizar uma composição e comparar alternativas é uma prática de estudo útil: explicite o que mudou e que hipótese de leitura pretende testar. Um resultado visual não permite diagnosticar saúde, personalidade ou pertencimento cultural de uma pessoa. A análise crítica admite pluralidade de soluções sustentadas pela obra.",
        "steps": [
          "Descreva escala, contraste, distribuição e enquadramento.",
          "Identifique uma hipótese de hierarquia visual com pistas concretas.",
          "Compare alternativas sem transformar guias em leis.",
          "Separe efeito percebido, interpretação e intenção documentada."
        ],
        "example": "Situação autoral de projeto: um cartaz usa título grande, informações menores e ampla margem vazia. Em uma revisão, a equipe reduz o título e aproxima os blocos de texto. Comparar as versões permite discutir hierarquia e espaço, sem declarar que uma delas seja universalmente bela ou que todos os públicos sigam o mesmo percurso de leitura.",
        "pitfall": "Declarar o centro um erro obrigatório, usar terços como garantia de beleza ou deduzir intenção e diagnóstico psicológico apenas do arranjo visual."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Descrição autoral de desenho, com vista horizontal e plano da imagem vertical: um corredor reto tem linhas de profundidade paralelas que convergem para um ponto no horizonte. As arestas horizontais frontais são paralelas ao plano da imagem. O que mantém coerência na construção usual de um ponto?",
        "hint": "Separe a família de linhas de recuo das linhas que permanecem paralelas ao plano da imagem.",
        "options": [
          "Convergir também toda aresta frontal ao mesmo ponto, porque qualquer linha deve terminar nele.",
          "Manter o recuo convergente e as horizontais frontais paralelas entre si, sem exigir ponto de fuga no centro da folha.",
          "Colocar o horizonte abaixo dos olhos porque não há céu visível dentro do corredor.",
          "Concluir que o desenho informa automaticamente comprimento real e material de todas as paredes."
        ],
        "correctIndex": 1,
        "solution": "B preserva a distinção das direções no modelo dado: o recuo converge, enquanto as horizontais frontais paralelas ao plano da imagem permanecem paralelas. A mistura famílias de direções. C confunde horizonte geométrico com céu visível. D inventa escala métrica e material. O enunciado contém todas as relações necessárias, sem depender de uma figura ausente."
      },
      {
        "level": "intermediate",
        "prompt": "Descrição autoral de uma caixa vista de canto: duas famílias de arestas horizontais convergem para dois pontos diferentes no horizonte, e as arestas verticais permanecem paralelas. Qual análise corresponde ao modelo usual com vista horizontal, sem impor propriedades de outra configuração?",
        "hint": "Considere quais duas direções têm fugas finitas e qual direção permanece paralela nessa projeção.",
        "options": [
          "É obrigatoriamente perspectiva atmosférica, pois cor e nitidez são as únicas relações descritas.",
          "Todas as arestas devem convergir para um único ponto para que qualquer representação espacial seja possível.",
          "A descrição prova que os dois pontos precisam formar noventa graus medidos sobre a folha.",
          "É compatível com perspectiva de dois pontos no modelo dado; não exige um terceiro ponto vertical finito."
        ],
        "correctIndex": 3,
        "solution": "D corresponde às duas direções horizontais com fugas distintas e às verticais paralelas sob as hipóteses descritas. A invoca gradação atmosférica que não aparece. B impõe um único ponto a todas as direções. C confunde relações espaciais e sua projeção na folha. A resposta identifica a configuração, sem afirmar que todo objeto de qualquer cena tenha apenas esses pontos."
      },
      {
        "level": "advanced",
        "prompt": "Descrição autoral: uma imagem organiza um círculo central e formas equivalentes dispostas simetricamente dos dois lados. Um comentário afirma: “Está errada porque todo elemento principal deve ficar fora do centro, nos terços.” Qual avaliação é mais consistente?",
        "hint": "Guias de composição oferecem possibilidades; examine se o comentário transforma uma orientação em proibição universal.",
        "options": [
          "A centralização e a simetria podem ser escolhas compositivas; os terços não constituem uma lei que torne esse arranjo automaticamente errado.",
          "O comentário demonstra uma lei biológica segundo a qual nenhum observador consegue olhar para o centro.",
          "A simetria prova que a pessoa autora possui um diagnóstico psicológico específico, mesmo sem contexto.",
          "A regra dos terços garante o mesmo máximo impacto para toda obra, público e finalidade, sem necessidade de análise."
        ],
        "correctIndex": 0,
        "solution": "A reconhece a pluralidade de soluções e rejeita a proibição universal. B inventa uma lei de percepção; C infere diagnóstico sem evidência; D transforma uma orientação em garantia absoluta. O círculo central e a simetria são relações descritas no caso, mas não permitem provar beleza universal ou intenção da autoria sem outras informações."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esportes coletivos e individuais",
    "objective": "Distinguir a organização individual e coletiva em provas e modalidades, relacionar regras a decisões táticas e avaliar adaptações escolares com participação, segurança e critérios explícitos.",
    "prerequisites": [
      "Noção de regra e objetivo de jogo",
      "Observação de cooperação e oposição em práticas corporais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Classificar a prova, não apenas o nome do esporte",
        "explanation": "Para distinguir organização individual e coletiva, comece pela prova ou formato efetivamente disputado. Numa prova individual, o resultado competitivo é atribuído à atuação do participante; isso não significa ausência de orientação, apoio, treinamento compartilhado ou interação com adversários. Numa organização coletiva, parceiros coordenam ações para um resultado comum. A presença de várias pessoas no mesmo local não basta para tornar a disputa coletiva: corredores podem competir entre si em uma prova individual. Por outro lado, o nome atletismo não permite classificar automaticamente todas as suas provas como individuais, pois há revezamentos por equipes. Também é preciso especificar simples ou duplas ao discutir o tênis. A existência de um gesto executado por uma pessoa de cada vez não elimina a cooperação de uma equipe. Outro critério é a lógica do confronto: podem ser comparadas marcas, precisão, composição de movimentos, disputa territorial, devolução sobre rede ou parede, campo e taco ou combate. Esses critérios não equivalem simplesmente ao número de participantes. Futebol e voleibol envolvem equipes, mas apresentam problemas de jogo distintos; o voleibol não se torna esporte de invasão só por ser coletivo. As classificações são ferramentas para estudar demandas da atividade, e não rankings de valor. Não se conclui que uma categoria desenvolva obrigatoriamente solidariedade enquanto a outra produza egoísmo, nem que uma seja sempre mais fácil. Para sustentar uma classificação, informe participantes, relações de cooperação ou oposição, objetivo e modo de estabelecer o resultado.",
        "steps": [
          "Identifique a prova ou formato específico.",
          "Observe se há parceiros com resultado comum ou competidores individuais.",
          "Descreva objetivo, oposição e critério de resultado.",
          "Explique a classificação sem atribuir virtudes ou defeitos automáticos."
        ],
        "example": "Cenário autoral: participantes treinam juntos para uma disputa de arremesso de peso, ajudam a organizar o material e depois têm suas marcas individuais comparadas. A cooperação na preparação é real, mas não transforma por si só o formato competitivo em uma disputa por equipes. A distância alcançada, e não a proximidade de um alvo, fundamenta o critério de marca.",
        "pitfall": "Classificar pelo simples número de pessoas presentes ou supor que todo esporte com equipe tenha a mesma lógica territorial."
      },
      {
        "level": "intermediate",
        "title": "Técnica, tática e estratégia em contexto",
        "explanation": "Técnica refere-se aos modos de executar ações, enquanto tática envolve escolhas diante das condições concretas da disputa; estratégia pode designar um plano mais amplo para organizar a atuação. As definições têm usos variados, mas a distinção ajuda a explicar por que executar um movimento corretamente não garante escolher o melhor momento de empregá-lo. Em atividades coletivas, ocupar espaços, oferecer apoio, comunicar-se e coordenar coberturas são problemas relacionados às regras e às ações de parceiros e adversários. Em uma disputa individual com oponente direto, também há decisões sobre colocação, ritmo, antecipação e escolha de ações. Portanto, individual não significa ausência de tática. A solução depende do cenário: passar, avançar ou finalizar não são receitas universais sem observar linhas disponíveis e oposição. Um plano não dispensa ajustes durante a disputa. Regras alteram oportunidades, restrições e critérios de sucesso; transportar uma solução de uma modalidade a outra sem conferir essas condições pode ser inadequado. Também é necessário diferenciar um indicador e uma conclusão: contar passes não prova sozinho qualidade de participação ou eficiência em qualquer jogo. Para analisar um episódio, descreva o estado da disputa, as alternativas disponíveis e o motivo da escolha, admitindo informações que faltam. Uma atividade escolar pode simplificar espaço ou quantidade de participantes para destacar determinado problema tático. A simplificação precisa ser anunciada como adaptação da atividade, sem ser apresentada automaticamente como regulamento oficial de competição. Comparar situações ajuda a formular hipóteses, mas um lance isolado não permite inferir todas as capacidades de uma pessoa.",
        "steps": [
          "Descreva regras e situação antes de escolher uma ação.",
          "Separe execução técnica, decisão situada e plano geral.",
          "Identifique parceiros, adversários e alternativas disponíveis.",
          "Justifique a decisão e reconheça limites das informações."
        ],
        "example": "Situação autoral: em uma partida de tênis de simples, a pessoa que recebe a bola observa o adversário deslocado para um lado e considera direcionar a devolução ao espaço aberto. A decisão é tática mesmo sem parceiro na quadra. Sua execução depende de técnica e condições do lance, sem garantia de ponto ou prescrição de um golpe universal.",
        "pitfall": "Afirmar que só equipes usam tática ou que uma única contagem de ações demonstra qualidade em qualquer modalidade."
      },
      {
        "level": "advanced",
        "title": "Adaptações, participação e avaliação crítica",
        "explanation": "No contexto escolar, uma adaptação pode ajustar espaço, material, comunicação, tempo ou organização para tornar a experiência acessível e coerente com o objetivo de aprendizagem. A decisão deve considerar segurança, condições reais de participação e clareza das regras. Adaptar não significa que toda mudança preserve automaticamente a mesma lógica do esporte: é preciso identificar o que permanece e o que muda. Uma tarefa de prática pode destacar um fundamento sem reproduzir uma competição oficial. Regras acordadas precisam ser conhecidas e aplicadas com critérios compreensíveis, com possibilidade de discutir efeitos e rever barreiras. Igualdade formal de instrução não garante acesso equivalente se sinais ou materiais não puderem ser percebidos ou utilizados. É possível oferecer explicações por diferentes meios e perguntar quais recursos funcionais ajudam a participação, sem exigir exposição de diagnósticos ou classificar pessoas por supostas incapacidades. A avaliação pode observar compreensão das regras, justificativa das decisões, cooperação quando pertinente e reflexão sobre a experiência, em vez de reduzir toda aprendizagem ao placar. Vitória não comprova por si só respeito, inclusão ou qualidade de ensino. Também não há garantia de que qualquer atividade esportiva produza os mesmos benefícios em todas as condições. Dados sobre desempenho precisam de finalidade clara e interpretação contextual; não se deve converter um número isolado em diagnóstico ou criar vigilância pessoal como requisito da aula. A análise crítica inclui quem consegue participar, quais condições favorecem ou dificultam o objetivo e como testar uma alternativa sem estigmatizar participantes.",
        "steps": [
          "Defina o objetivo pedagógico e a barreira observável.",
          "Escolha ajustes funcionais e explicite quais regras mudaram.",
          "Confira segurança e compreensão com a turma.",
          "Avalie participação e aprendizagem para rever a proposta."
        ],
        "example": "Proposta autoral: em uma atividade escolar de acertar alvos, a turma experimenta bolas de tamanhos diferentes e compara facilidade de manipulação e critérios de pontuação previamente combinados. A experiência permite discutir materiais e acessibilidade; não é automaticamente uma regra oficial de uma modalidade nem um teste clínico de quem participa.",
        "pitfall": "Chamar qualquer adaptação de regra oficial, exigir diagnóstico como entrada na atividade ou usar vitória como única prova de aprendizagem."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma comparação autoral, há uma corrida de 100 metros com classificação individual e um revezamento 4 × 100 metros com resultado por equipe. Qual interpretação evita classificar todas as provas apenas pelo nome atletismo?",
        "hint": "Observe a unidade à qual o resultado é atribuído e a existência de parceiros na prova descrita.",
        "options": [
          "As duas provas são coletivas apenas porque várias pessoas estão presentes na pista.",
          "Todo atletismo é individual, portanto o resultado de um revezamento não pode pertencer à equipe.",
          "A primeira tem organização individual; o revezamento envolve parceiros com resultado comum, exigindo especificar a prova.",
          "Qualquer treinamento em grupo transforma automaticamente a corrida individual em revezamento."
        ],
        "correctIndex": 2,
        "solution": "C distingue os formatos descritos e o resultado comum dos parceiros no revezamento. A confunde presença simultânea com equipe. B generaliza o nome da modalidade e contradiz o cenário. D confunde organização do treinamento com a prova disputada. A classificação exige explicitar a situação, sem negar cooperação e apoio fora de uma competição individual."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral de jogo escolar de invasão: quem está com a bola tem a passagem direta bloqueada, mas observa uma colega desmarcada e uma linha de passe livre. Qual decisão considera as informações dadas, sem prometer sucesso automático?",
        "hint": "Relacione a oposição existente e a alternativa de apoio descrita, em vez de impor uma ação única a todos os lances.",
        "options": [
          "Considerar o passe à colega livre como alternativa para manter a ação coletiva, observando mudanças na defesa antes da execução.",
          "Finalizar obrigatoriamente através do bloqueio, pois qualquer passe demonstra ausência de técnica.",
          "Ignorar a colega porque a presença de um portador da bola transforma todo jogo de invasão em individual.",
          "Garantir que qualquer passe resultará em ponto, independentemente de deslocamentos e execução."
        ],
        "correctIndex": 0,
        "solution": "A utiliza o apoio e a linha disponível como elementos de decisão situada, sem garantir resultado. B impõe uma finalização sem considerar oposição. C confunde ação de um participante com organização da disputa. D transforma uma oportunidade em certeza. A leitura pode mudar durante o lance e deve respeitar as regras da atividade, não uma receita aplicável a qualquer esporte."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: uma atividade comunica o início de cada rodada apenas por som. Parte da turma relata dificuldade para perceber o sinal. Qual encaminhamento enfrenta a barreira sem exigir exposição de diagnósticos pessoais?",
        "hint": "Compare mudar o recurso de comunicação, excluir participantes e coletar informações clínicas desnecessárias ao objetivo.",
        "options": [
          "Manter apenas o som porque oferecer a mesma instrução garante acesso idêntico a qualquer pessoa.",
          "Excluir quem não percebe o sinal e usar somente o placar dos demais como medida de inclusão.",
          "Exigir que cada estudante publique um diagnóstico antes de discutir qualquer recurso da atividade.",
          "Combinar sinais por mais de um meio, verificar sua compreensão e ajustar a proposta a partir das necessidades funcionais relatadas."
        ],
        "correctIndex": 3,
        "solution": "D enfrenta a barreira de comunicação por ajustes funcionais e conferência de compreensão, sem tornar informação clínica uma condição de participação. A ignora o obstáculo descrito. B exclui e confunde placar com inclusão. C exige exposição desnecessária. A escolha dos recursos deve ser construída com atenção à segurança e às condições reais da atividade."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Corpo humano e saúde",
    "objective": "Relacionar níveis de organização e integração dos sistemas humanos, interpretar regulação por retroalimentação e analisar ações de saúde com atenção às condições sociais e à qualidade das evidências.",
    "prerequisites": [
      "Célula como unidade dos seres vivos",
      "Trocas de matéria e energia",
      "Diferença entre observação e conclusão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Organização e integração do organismo",
        "explanation": "O corpo humano pode ser estudado em níveis de organização, incluindo células, tecidos, órgãos e sistemas. Um órgão reúne diferentes tecidos e participa de funções em conjunto com outras estruturas; a divisão em sistemas é uma ferramenta de estudo, não a existência de compartimentos independentes. O sistema digestório transforma alimentos e permite absorver substâncias; digestão e absorção não são sinônimos. A primeira envolve processamento mecânico e químico, enquanto a segunda corresponde à passagem de substâncias através do epitélio para o meio interno. Grande parte da absorção de nutrientes ocorre no intestino delgado, e a circulação participa de sua distribuição. O sistema respiratório realiza trocas gasosas: nos pulmões, oxigênio pode passar dos alvéolos ao sangue, e dióxido de carbono segue no sentido contrário, conforme os gradientes. Ventilar os pulmões e realizar respiração celular também são processos diferentes. A circulação conecta regiões do organismo, mas o coração não é o local que produz todo o oxigênio transportado. Rins, vias urinárias, sistemas nervoso e endócrino e outros componentes participam da manutenção e coordenação do organismo. Ao explicar uma função, siga os caminhos e as relações necessários, sem atribuir tudo a um único órgão. Listar nomes ajuda a reconhecer estruturas, mas compreender exige relacioná-las a processos. Um esquema didático deve informar o que suas setas representam: circulação de matéria, comunicação ou sequência de eventos não são relações intercambiáveis.",
        "steps": [
          "Identifique o nível de organização da estrutura.",
          "Relacione órgãos e sistemas sem isolá-los.",
          "Diferencie transformação, absorção e transporte.",
          "Explique o significado de cada conexão no esquema."
        ],
        "example": "Esquema autoral descrito: depois da digestão de amido, moléculas de glicose podem ser absorvidas no intestino delgado e distribuídas pela circulação. O alimento não atravessa inteiro até cada célula. O exemplo conecta processamento, passagem pelo epitélio e transporte, sem afirmar que todos os nutrientes sigam exatamente a mesma rota.",
        "pitfall": "Confundir ventilação com respiração celular, absorção com digestão ou tratar cada sistema como independente dos demais."
      },
      {
        "level": "intermediate",
        "title": "Homeostase e mecanismos de regulação",
        "explanation": "Homeostase designa a manutenção dinâmica de condições internas em faixas compatíveis com o funcionamento do organismo. Não significa imobilidade nem que todas as variáveis tenham um único valor exato em qualquer pessoa e circunstância. Em um modelo de retroalimentação negativa, uma mudança é detectada, a informação participa de um processo de integração e a resposta tende a contrariar o desvio. Negativa não significa moralmente ruim: descreve a relação entre resposta e mudança inicial. Na regulação térmica, a evaporação do suor pode contribuir para a perda de calor; sua eficácia depende de condições ambientais, e não se conclui que suar sempre mantenha qualquer pessoa segura. Sistemas nervoso e endócrino participam da coordenação por diferentes formas de sinalização. A integração permite ajustar processos em vez de exigir que cada órgão funcione isoladamente. Retroalimentação positiva amplifica uma mudança em um circuito, como em etapas da coagulação; não é sinônimo de boa saúde ou de controle universalmente desejável. Seu estudo requer considerar contexto e mecanismos que limitam o processo. Para interpretar um modelo, identifique variável, mudança inicial, resposta e efeito, e verifique se a resposta reduz ou reforça a mudança. Uma representação simplificada não contém toda a complexidade do corpo. Dados isolados, sem método e contexto, não permitem diagnosticar alguém. Exercícios de regulação podem usar variáveis fictícias e relações declaradas, sem pedir medidas pessoais ou produzir conclusões clínicas.",
        "steps": [
          "Identifique qual variável o modelo acompanha.",
          "Separe mudança inicial, detecção e resposta.",
          "Verifique se a resposta contraria ou amplifica a mudança.",
          "Reconheça limites do modelo e evite diagnóstico por dado isolado."
        ],
        "example": "Analogia autoral não biológica: um reservatório possui sensor que aciona entrada de água quando o nível cai e a interrompe quando ele retorna à faixa prevista. A resposta contraria a redução inicial, ilustrando retroalimentação negativa. O reservatório não reproduz toda a fisiologia humana; serve apenas para explicitar a relação de controle.",
        "pitfall": "Interpretar negativa como prejudicial, positiva como benéfica ou homeostase como ausência completa de variação."
      },
      {
        "level": "advanced",
        "title": "Saúde, prevenção e condições de vida",
        "explanation": "A saúde envolve processos biológicos e condições de vida, incluindo moradia, saneamento, educação, trabalho e acesso a recursos e serviços. Uma explicação que atribui toda diferença de saúde apenas à vontade individual ignora barreiras e desigualdades. Ações coletivas e cuidado individual podem complementar-se; observar um fator de risco em um grupo não determina o destino de cada pessoa nem autoriza estereótipos. Na prevenção de infecções, vacinas estimulam respostas imunes específicas e podem produzir memória imunológica. Elas não são antibióticos e não constituem garantia absoluta de proteção idêntica para todas as pessoas e doenças. Antibióticos têm ação contra bactérias suscetíveis, não são tratamento geral de infecções virais. Resistência antimicrobiana diz respeito à capacidade de microrganismos de não responder aos medicamentos, e não a uma pessoa ficar simplesmente acostumada ao produto. Essas distinções são conceitos de educação científica, sem prescrever medicamento, dose ou calendário individual. Para avaliar uma afirmação sobre saúde, confira autoria, data, método e se o resultado realmente sustenta a conclusão. Um relato isolado não demonstra eficácia universal; uma comparação entre grupos pode envolver diferenças que precisam ser investigadas. Em um projeto escolar, é possível estudar infraestrutura pública e informações oficiais sem coletar diagnósticos dos colegas. A pergunta de pesquisa deve ser necessária, respeitosa e proporcional. Conclusões sobre problemas coletivos exigem dados adequados e atenção às condições reais de acesso às medidas propostas.",
        "steps": [
          "Distinga mecanismos biológicos e condições sociais relacionadas à saúde.",
          "Diferencie vacinação, antibiótico e resistência microbiana.",
          "Confira fonte, método e alcance da conclusão.",
          "Escolha dados necessários sem expor informações clínicas de colegas."
        ],
        "example": "Análise autoral de uma mensagem fictícia: um anúncio diz que um único produto substitui todas as vacinas e garante proteção para qualquer infecção. A turma verifica quem publicou, quais evidências foram apresentadas e se a conclusão excede os resultados. A promessa universal não decorre da simples presença de um depoimento, e a atividade não prescreve produto nem solicita informações clínicas dos estudantes.",
        "pitfall": "Culpar pessoas por toda desigualdade, prometer prevenção infalível ou apresentar resistência antimicrobiana como hábito do corpo ao medicamento."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Descrição autoral: em um esquema de troca gasosa pulmonar, uma seta deve indicar o trajeto de oxigênio do ar alveolar para o sangue. Qual leitura relaciona corretamente sistemas e processos?",
        "hint": "Diferencie troca entre alvéolos e sangue, transporte circulatório e uso de oxigênio pelas células.",
        "options": [
          "O coração produz todo o oxigênio do organismo, portanto o ar não participa da troca pulmonar.",
          "O oxigênio passa dos alvéolos ao sangue e pode ser transportado pela circulação aos tecidos; isso não equivale ao movimento de ventilação.",
          "Os alvéolos digerem alimentos inteiros e os enviam sem transformação diretamente a cada célula.",
          "A existência de pulmões demonstra que sistema respiratório e circulação nunca precisam interagir."
        ],
        "correctIndex": 1,
        "solution": "B relaciona troca pulmonar e transporte, distinguindo-os da entrada e saída de ar. A atribui produção de oxigênio ao coração. C mistura digestão e trocas gasosas. D nega a integração dos sistemas. A descrição oferece o trajeto necessário sem depender de uma imagem ausente e não confunde ventilação com reações celulares."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo didático fictício: quando uma variável interna X aumenta acima da faixa de referência, um mecanismo é acionado e sua resposta reduz X em direção à faixa. Sem inferir um diagnóstico, qual relação caracteriza o circuito descrito?",
        "hint": "Compare o sentido da mudança inicial e o efeito da resposta, sem atribuir valor moral aos termos.",
        "options": [
          "Retroalimentação positiva, porque toda resposta que ajuda o organismo necessariamente amplifica X.",
          "Ausência de regulação, porque regular exige que X jamais possa variar em nenhuma circunstância.",
          "Retroalimentação negativa, pois a resposta contraria o aumento inicial de X no modelo.",
          "Diagnóstico obrigatório de uma doença específica, mesmo sem saber qual variável X representa."
        ],
        "correctIndex": 2,
        "solution": "C identifica a relação de oposição ao desvio inicial: X sobe e a resposta reduz X em direção à faixa. A confunde utilidade com sinal da retroalimentação. B define homeostase como imobilidade. D inventa diagnóstico sem variável e contexto clínico. O exercício avalia um modelo de controle e não uma condição pessoal do estudante."
      },
      {
        "level": "advanced",
        "prompt": "Cenário autoral: um bairro tem oferta irregular de água tratada. Um comentário conclui que qualquer diferença de saúde decorre exclusivamente da falta de vontade de seus moradores. Qual avaliação respeita as informações e os limites da evidência?",
        "hint": "Considere a barreira de infraestrutura descrita sem transformar uma observação em causa única ou diagnóstico de cada morador.",
        "options": [
          "A conclusão é excessiva: infraestrutura e acesso são condições relevantes a investigar, e os dados não justificam culpar moradores nem diagnosticar indivíduos.",
          "O comentário está demonstrado porque condições de moradia e saneamento nunca se relacionam à saúde.",
          "A informação basta para afirmar que todas as pessoas do bairro têm exatamente a mesma doença.",
          "Qualquer dificuldade de infraestrutura prova que ações coletivas são inúteis e que só resta avaliar a vontade pessoal."
        ],
        "correctIndex": 0,
        "solution": "A reconhece uma condição social relevante e o limite causal do cenário. B descarta determinantes sem fundamento. C inventa diagnóstico universal. D converte uma barreira em prova de inutilidade de ações coletivas. Investigar abastecimento, condições de vida e acesso é compatível com responsabilidade pública e evita estereótipos, sem atribuir causa clínica individual."
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
  },
  {
    "subject": "Inglês",
    "topic": "Pronomes, conectores e relações semânticas",
    "contentSha256": "94aa6ecda393d742187668787e951c026701bf52b14213a811a7d7522700fdfe",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/personal-pronouns",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/possessives-pronouns",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/reflexive-pronouns",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/contrasting-ideas-although-despite-others",
      "https://dictionary.cambridge.org/grammar/british-grammar/conjunctions",
      "https://dictionary.cambridge.org/grammar/british-grammar/even-if-even-though"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "The preposition 'to' requires an object pronoun; 'me' is the correct object form for first person singular, while 'I' is a subject form. The presence of 'and' does not change the preposition's grammatical requirement."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Although introduces a concessive clause contrasting the room's small size with the group's accommodation. 'Because of' and 'despite' require different syntactic structures, and 'therefore' marks consequence, not concession."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Singular 'they/them' correctly references the singular 'participant' without gender specification, while 'it' refers to 'badge'. The 'if' clause presents a conditional, not a confirmed action, and the text does not state the condition was met or the badge was returned."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Cognatos e falsos cognatos em espanhol",
    "contentSha256": "469adca60192338d2eafe80588e5a96723502e5d5edb34b4879550484bcc19d2",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://cvc.cervantes.es/ensenanza/biblioteca_ELE/diccio_ele/diccionario/falsosamigos.htm",
      "https://revistas.udc.es/index.php/rlex/article/download/rlex.2006.12.0.4772/g4772_pdf",
      "https://dle.rae.es/fecha",
      "https://dle.rae.es/largo",
      "https://dle.rae.es/oficina",
      "https://dle.rae.es/taller",
      "https://dle.rae.es/carpeta",
      "https://dle.rae.es/suceso"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "No texto “El pasillo es largo y estrecho”, C preserva comprimento e pouca largura: corredor comprido e estreito. A muda comprimento para largura e adiciona espaço, B inverte as dimensões e D acrescenta fechamento e iluminação. A justificativa depende do enunciado completo, sem generalizar toda ocorrência do adjetivo."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A distingue atendimento administrativo em oficina de atención al público e local de reparações em taller del patio. B introduz talher e folha de papel, incompatíveis com as ações, sem que esses termos sejam falsos cognatos de formularios e reparaciones como o parecer alegou. C impõe conserto como sentido exclusivo; D inventa gratuidade e horário. Os complementos sustentam a leitura correta."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "D seleciona pasta ou diretório digital para carpeta em “Abra la carpeta de proyectos y guarde el archivo revisado dentro de ella”. A impõe tapete de chão à operação digital, B adiciona transporte e escritório e C nega todas as outras acepções registradas. O contexto permite essa leitura sem uma regra universal para a palavra."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Trabalho, energia e potência",
    "contentSha256": "0ee67966af73495cef11c47c4ba1e12dfdd64c5712cfb7a02cbf75d35a3d4e89",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics-2e/pages/7-1-work-the-scientific-definition",
      "https://openstax.org/books/college-physics-2e/pages/7-2-kinetic-energy-and-the-work-energy-theorem",
      "https://openstax.org/books/college-physics-2e/pages/7-4-conservative-forces-and-potential-energy",
      "https://openstax.org/books/college-physics-2e/pages/7-7-power"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Na questão básica, o trabalho da força é calculado como W = Fd cosθ = 50·4·cos60° = 50·4·0,5 = 100 J. A opção correta é 100 J, referente ao trabalho dessa força exclusivamente, sem inferir o trabalho resultante de outras forças. Os distratores incorretas consideram o trabalho resultante sem dados (200 J), sinalização indevida (−100 J) ou confundem trabalho com potência (50 W). A resolução independente confirma a projeção da força e a unidade correta, atendendo ao prompt que pede somente o trabalho da força especificada."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Na questão intermediária, a diminuição do potencial gravitacional é mgh = 2·10·5 = 100 J. Subtraindo a dissipação por atrito de 20 J obtém-se Kfinal = 80 J. A velocidade final é √(2·80/2) = √80 ≈ 8,94 m/s. A opção correta é 80 J. As outras opções ignoram o atrito (100 J), somam indevidamente a dissipação como energia fornecida (120 J) ou a confundem com a energia cinética final (20 J). A resolução independente segue o balanço energético: diminuição do potencial menos dissipação igual à variação da energia cinética."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Na questão avançada, a potência útil média é Pútil = mgh / t = 200·10·6 / 15 = 12000 / 15 = 800 W. Com eficiência η = 0,80 = Pútil / Pentrada, a potência de entrada é Pentrada = 800 / 0,80 = 1000 W. A opção correta é a primeira, que apresenta 800 W úteis e 1000 W de entrada. Os distratores B, C e D cometem erros de operação: B multiplica útil por eficiência, C trata energia em joules como potência sem dividir pelo tempo, D inverte útil e entrada. A resolução independente usa o modelo simplificado de rendimento global declarado e variação cinética nula entre início e fim."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Tabela periódica e propriedades",
    "contentSha256": "dbbe3596eae89a56f8d916b41713fc7a6d1ab029d3c4e8ed67b6cca6002bda52",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://iupac.org/what-we-do/periodic-table-of-elements/",
      "https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations",
      "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties",
      "https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding",
      "https://goldbook.iupac.org/terms/view/I03199",
      "https://goldbook.iupac.org/terms/view/E01977"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A questão básica pede relacionar a configuração 1s2 2s2 2p6 3s2 3p4 ao número atômico, período e grupo. A soma dos elétrons (2+2+6+2+4=16) dá Z=16; o maior nível ocupado n=3 indica período 3; a configuração externa 3s2 3p4 corresponde ao grupo 16 dos representativos. A alternativa de índice 1 apresenta Z=16, período 3, grupo 16, correta; as demais contêm erros de soma, período inadequado ou numeração de grupo inconsistente com o padrão 1-18."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A questão intermediária pede ordenar raios crescentes das espécies isoeletrônicas O2− (Z=8), F− (Z=9), Na+ (Z=11) e Mg2+ (Z=12). Todas possuem 10 elétrons. Na série isoeletrônica, maior número atômico Z implica maior atração nuclear e raio menor, produzindo a ordem Mg2+ < Na+ < F− < O2−. A alternativa de índice 3 apresenta exatamente esta ordem crescente compatível com a atração nuclear e ocupação eletrônica comparável."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A questão avançada apresenta dados didáticos de ionizações sucessivas E1=600, E2=1200, E3=8000, E4=11000 kJ/mol. O maior salto relativo ocorre de E2 (1200) para E3 (8000), após duas remoções de elétrons. Pelo modelo proposto, duas remoções envolvem elétrons de valência e a terceira alcança camada interna, compatível com grupo 2 no modelo representativo, sem identificar o elemento X. A alternativa de índice 0 expressa essa inferência corretamente, enquanto as outras transformam saltos em identidades ou números de elétrons não suportados pelos dados ou contradizem o pré-requisito de pelo menos quatro elétrons."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Fotossíntese",
    "contentSha256": "3477880c5db829c44dc95133fa85029a442045bd10ebd4802790f7719a2abbbb",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis",
      "https://openstax.org/books/biology-2e/pages/8-2-the-light-dependent-reactions-of-photosynthesis",
      "https://openstax.org/books/biology-2e/pages/8-3-using-light-energy-to-make-organic-molecules",
      "https://www.monash.edu/student-academic-success/biology/photosynthesis/photosynthesis-in-c3,-c4-and-cam-plants"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A questão propõe experimento mental com água marcada 18O para distinguir a origem do oxigênio molecular na fotossíntese; a resposta correta (índice 0) afirma que o O2 incorpora a marcação pois seu oxigênio se origina da água, alinhando-se ao conhecimento estabelecido sobre fotólise da água, enquanto as outras opções atribuem erroneamente a origem ao CO2, invocam transmutação nuclear pela luz ou afirmam erroneamente que cianobactérias precisam de cloroplastos, afirmação factualmente incorreta; o gabarito e a solução corrigem esse ponto, mantendo a precisão conceitual."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "O enunciado pede balanço didático do ciclo de Calvin para fixação de 6 moléculas de CO2; a alternativa correta (índice 2) indica 2 G3P líquidos, 18 ATP e 12 NADPH, que resulta da multiplicação do balanço de 3 CO2 (1 G3P líquido, 9 ATP, 6 NADPH) por 2 conjuntos, conforme a explicação da solução; as opções restantes erram ao contar G3P brutos, considerar apenas um conjunto ou confundir intermediários regenerados com saída líquida, comprometendo o objetivo de cálculo de balanço líquido."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A questão descreve padrão didático explicitamente clássico de uma planta que captura CO2 à noite, o incorpora em ácidos orgânicos e os armazena, liberando-o internamente para o ciclo de Calvin durante o dia com redução da abertura dos estômatos; a alternativa correta (índice 3) identifica essa estratégia como CAM, com separação temporal entre fixação inicial e disponibilização posterior de CO2 para Calvin, diferentemente do C4 de separação espacial e das respostas erradas que afirmam eliminação completa do ciclo de Calvin, prova de que a Rubisco jamais participa da assimilação de carbono ou respiração mitocondrial exclusiva, reforçando que o padrão clássico não determina espécie nem comportamento estomático em toda condição."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Renascimento e Reformas religiosas",
    "contentSha256": "dfe8a94e307c20d3eb0727a66552d4da4c0c465ddcb7ae3031d356c6f7189740",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://wwws.loc.gov/exhibits/vatican/humanism.html",
      "https://dcc.newberry.org/?p=18521",
      "https://openstax.org/books/world-history-volume-2/pages/5-1-the-protestant-reformation",
      "https://www.parliament.uk/about/living-heritage/transformingsociety/private-lives/religion/collections/common-prayer/act-of-supremacy/",
      "https://history.hanover.edu/texts/engref/er79.html",
      "https://germanhistorydocs.org/en/from-the-reformations-to-the-thirty-years-war-1500-1648/ghdi%3Adocument-4386",
      "https://www.vatican.va/content/paul-vi/en/speeches/1963/documents/hf_p-vi_spe_19631104_seminari.html",
      "https://www.jesuits.global/2021/09/26/on-27-september-1540-the-society-of-jesus-received-papal-approval/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A comparação de textos clássicos e o patronato religioso podem coexistir; o cenário não prova abandono obrigatório da fé. O gabarito A está correto pois reconhece essa compatibilidade sem transformar humanismo em ateísmo obrigatório, enquanto os distratores B, C e D invertem ou exageram limitações não presentes no texto da aula."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "O Ato de Supremacia de 1534 reorganizou autoridade religiosa em torno da monarquia; a trajetória doutrinária inglesa exige análise adicional. O gabarito C está correto pois descreve a mudança de jurisdição sem concluir igualdade completa com o luteranismo, enquanto os distratores A, B e D invertem fatos históricos ou atribuem consequências não previstas no documento original."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Tratava-se de coexistência confessional limitada, que não equivale à liberdade religiosa individual universal. O gabarito D está correto pois distingue o âmbito restrito do acordo de uma garantia universal, enquanto os distratores A, B e C exageram ou invertem o alcance e as condições da Paz de Augsburgo, contradizendo o recorte da aula."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Clima, massas de ar e mudanças climáticas",
    "contentSha256": "2a3170e7140896f31830e4816b8a02c7b04663c4c23dace35b8a1908375d8870",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://portal.inmet.gov.br/servicos/normais-climatol%C3%B3gicas",
      "https://portal.inmet.gov.br/uploads/normais/NORMAISCLIMATOLOGICAS.pdf",
      "https://www.ncei.noaa.gov/products/wmo-climate-normals",
      "https://www.noaa.gov/jetstream/synoptic/air-masses",
      "https://www.weather.gov/lmk/basic-fronts",
      "https://www.ufsm.br/app/uploads/sites/413/2018/12/arte_meteorologia_aplicada.pdf",
      "https://www.ipcc.ch/report/ar6/syr/longer-report/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A resposta correta (índice 1) fundamenta que um evento frio local, embora real, não invalida uma tendência de aquecimento global medida em séries e escalas apropriadas; a explicação rejeita a ideia de que um dado isolado determine a temperatura média do planeta por décadas, e também nega que tendência global impeça completamente dias frios em algum lugar."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A opção correta (índice 3) explica que a massa mEc, apesar da origem continental amazônica, pode ser quente e úmida devido à disponibilidade de água e evapotranspiração na região, desconstruindo a equivocada regra de que 'continental' significa sempre seca; as outras opções incorretamente transferem propriedades de origem ou negam transformações durante o deslocamento."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opção correta (índice 0) compara as duas frequências observadas (8/100 e 20/100), calculando razão de 2,5 vezes, mas explicitamente alerta que essa razão isolada não demonstra causa climática, nem período de retorno automático, evitando conclusões não suportadas pelos dados do exercício."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia política e democracia",
    "contentSha256": "fb10ccf0f8f3a4e63071772aa37aa913dd8db7434ad28ff6bf347bf22db4c2aa",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://plato.stanford.edu/entries/democracy/",
      "https://plato.stanford.edu/entries/authority/",
      "https://plato.stanford.edu/entries/hobbes-moral/",
      "https://www.gutenberg.org/cache/epub/7370/pg7370-images.html",
      "https://plato.stanford.edu/entries/rousseau/",
      "https://plato.stanford.edu/entries/republicanism/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A questão básica apresenta um cenário de governante obedecido por medo e pede o problema na inferência de direito moral de governar. A alternativa correta (índice 2) identifica a passagem não justificada de poder de fato para legitimidade normativa, enquanto as distratores 0, 1 e 3 introduzem alegações de aceitação unânime, universalização de motivo ou territorialidade como fonte de correção, que não abordam o núcleo do problema."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A questão intermediária pede revisão de afirmação sobre Hobbes, Locke e Rousseau defendendo autoridade sem limites e assinatura real de todos os Estados. A alternativa correta (índice 1) preserva as diferenças teóricas entre os autores e afirma que contrato não é prova automática de assinatura histórica universal, enquanto as outras opções incorretamente afirmam que contrato significa documento real preservado, que Locke e Rousseau rejeitam participação política ou que todos igualam vontade particular a interesse comum."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A questão avançada situa-se em democracia constitucional após eleição competitiva, onde maioria propõe impedir oposição de se organizar e concorrer. A alternativa correta (índice 3) examina o limite da autorização eleitoral, afirmando que vitória não autoriza suprimir direitos e competição futura, ameaçando condições de contestação democrática. As distratores 0, 1 e 2 transformam maioria em poder ilimitado, confundem proibição com obrigação ou opõem desacordo ao voto sem fundamento."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Estado, poder e cidadania",
    "contentSha256": "6b1f43a017ff1c56a375ee764671c32beba1b80308e22b42f347da9a7cb08f06",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-sociology-3e/pages/17-1-power-and-authority",
      "https://openstax.org/books/introduction-sociology-3e/pages/17-2-forms-of-government",
      "https://periodicos.fgv.br/reh/article/view/2029",
      "https://www.tse.jus.br/legislacao/codigo-eleitoral/constituicao-federal/constituicao-da-republica-federativa-do-brasil",
      "https://www.unicef.org/brazil/declaracao-universal-dos-direitos-humanos"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Questão solicita avaliação que distinga definição sociológica de aprovação moral de violência estatal; a opção correta (Índice 2) preserva caráter analítico ao afirmar que a formulação permite investigar autoridade e autorização, mas não aprova moralmente todo ato de violência estatal, rejeitando a passagem automática para justiça; distractores A, B e D cometem os erros de transformar cargo em licença ilimitada, confundir monopólio legítimo com inexistência empírica de violência privada e apagar distinções institucionais entre Estado, governo e empresa privada."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Questão pede identificar o fundamento weberiano de dominação baseado em regras e competências de cargo, independentemente da pessoa que o ocupa; a opção correta (Índice 0) racional-legal, pela autoridade vinculada às regras e competências do cargo no recorte descrito, garantindo continuidade institucional; distractores B, C e D cometem equívocos de confundir cargo com reconhecimento carismático, toda regra escrita com tradição ancestral imutável e trocar ocupante com extinção da instituição."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Questão situa coerência entre abertura formal e barreiras efetivas de participação em contexto de conselho; a opção correta (Índice 3) distingue direito formal de condições concretas de exercício, afirmando que o direito pode coexistir com barreiras e é preciso investigar e enfrentá-las; distractores A, B e D negam as barreiras descritas, inventam motivos de ausência baseados em estereótipos e confundem implementação imperfeita com inexistência de reconhecimento formal."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Perspectiva e composição visual",
    "contentSha256": "a25f9662fcafb63efc80fff7f456445f80ff2c9993c65481d396d2023681f06e",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.nationalgallery.org.uk/paintings/glossary/perspective",
      "https://www.nationalgallery.org.uk/paintings/glossary/vanishing-point",
      "https://www.nationalgallery.org.uk/paintings/glossary/aerial-perspective",
      "https://www.mos.org/leonardo/activities/perspective.html",
      "https://www.getty.edu/education/teachers/building_lessons/principles_design.pdf",
      "https://www.getty.edu/education/k-12-learning/describe-listen-draw/vocabulary-for-describing-an-artwork/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A questão 1 avalia a compreensão de perspectiva de um ponto em corredor; a opção correta (Índice 1) mantém a coerência ao preservar linhas de recuo convergentes e horizontais frontais paralelas ao plano da imagem, diferentemente das distrações que incorretamente convergem todas as linhas ao mesmo ponto ou inferem escala métrica automática, o que configuraria falácia de representação espacial."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A questão 2 foca em caixa vista de canto com duas fugas horizontais; a resposta correta (Índice 3) identifica a configuração como perspectiva de dois pontos compatível com verticalidade paralela, ao contrário das opções que impõem regras de ângulos de noventa graus entre pontos de fuga ou atmosfera atmosférica obrigatória, que seriam inferências espaciais inválidas."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A questão 3 apresenta círculo central simetrizado com comentário sobre regra dos terços; a opção correta (Índice 0) reconhece que centralização e simetria são escolhas composicionais, não proibidas universalmente pela regra dos terços, ao contrário das outras opções que inventam leis biológicas ou garantias de impacto máximo sem fonte documentada."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esportes coletivos e individuais",
    "contentSha256": "f5ba74e15b139ed3c3b9e1464d256112c51bc8a10629ef02f565ff231ff00a64",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://basenacionalcomum.mec.gov.br/images/BNCC_20dez_site.pdf",
      "https://worldathletics.org/competitions/world-athletics-relays/world-athletics-relays-7216920/key-info",
      "https://www.world.tennis/en/about-us/governance/rules-and-regulations/?type=rules"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A opção correta distingue organizações individuais e coletivas pelo resultado atribuído, enquanto as distratores cometem erros como confundir presença com equipe (A), generalizar o nome da modalidade (B) ou confundir treinamento com competição (D)."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A opção correta utiliza apoio e linha livre como elementos de decisão tática sem garantir sucesso, ao contrário de B que impõe finalização sem considerar oposição, C que confunde ação individual com disputa coletiva e D que transforma oportunidade em certeza independente de execução."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A opção correta combina múltiplos meios de sinalização e verifica compreensão funcional, ao contrário de A que mantém apenas som, B que exclui participantes e C que exige diagnóstico desnecessário, todos falhando em enfrentar a barreira de comunicação sem estigmatizar."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Corpo humano e saúde",
    "contentSha256": "00ac781c418a8b929c062de8dd4216dbf790bc04b1c41b6b32dcf6fc286176e5",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-2-structural-organization-of-the-human-body",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-7-chemical-digestion-and-absorption-a-closer-look",
      "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-5-homeostasis",
      "https://www.who.int/health-topics/social-determinants-of-health",
      "https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination",
      "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção correta identifica o trajeto de oxigênio dos alvéolos ao sangue e seu transporte circulatório, distinguindo explicitamente da ventilação, enquanto as distratores atribuem produção de oxigênio ao coração (0), misturam digestão com trocas gasosas (2) ou negam integração sistêmica (3)."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A opção correta identifica a retroalimentação negativa como relação em que a resposta contrarie o aumento inicial da variável X, enquanto as distratores confundem utilidade com sinal da retroalimentação (0), definem homeostase como imobilidade (1) ou inventam diagnóstico clínico sem contexto (3)."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opção correta reconhece que a conclusão de que diferenças de saúde decorrem exclusivamente da vontade dos moradores é excessiva, afirmando que infraestrutura e acesso são condições relevantes, enquanto as distratores descartam determinações sociais sem fundamento (1), inventam diagnóstico universal (2) ou convertem barreiras em prova de ineficácia das ações coletivas (3)."
      }
    ]
  }
] as const;
