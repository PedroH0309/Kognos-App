import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch07:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Operações, divisibilidade e conjuntos numéricos",
    "objective": "Classificar números reais, operar com sinais e frações e resolver problemas de divisibilidade, fatoração, MDC, MMC e restos, verificando condições e alternativas por cálculos independentes.",
    "prerequisites": [
      "Adição, multiplicação e divisão de números inteiros",
      "Leitura de frações e potências",
      "Noções de múltiplo, divisor e comparação de números"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conjuntos numéricos, sinais e operações",
        "explanation": "Adotaremos nesta aula N = {0,1,2,...}; outras convenções excluem zero e devem ser declaradas. Os inteiros Z incluem negativos, zero e positivos. Um racional pode ser escrito como p/q, com p e q inteiros e q diferente de zero; inteiros também são racionais. Decimais finitos ou infinitos periódicos representam racionais. Irracionais são reais que não admitem essa forma, com representação decimal infinita não periódica; uma aproximação decimal finita de um irracional não é o próprio número exato. Os reais R reúnem racionais e irracionais, com N contido em Z, Z em Q e Q em R. Uma raiz não é automaticamente irracional: √25 = 5. O símbolo √a indica a raiz principal não negativa quando a é real não negativo; √(a²) = |a| para a real. Subtrair é somar o oposto, e dividir por um número não nulo é multiplicar por seu inverso. Para somar frações, use denominadores comuns: não some denominadores diretamente. Adição e multiplicação de reais são comutativas e associativas, mas subtração e divisão não são em geral. A distributividade dá a(b+c) = ab+ac. Respeite agrupamentos e precedência: potências antes de multiplicações e divisões, que são resolvidas na ordem em que aparecem; depois adições e subtrações. Parênteses mudam a base: (−3)² = 9, enquanto −3² = −9. A divisão por zero não está definida nos reais. Conhecer o conjunto evita afirmar fechamento indevido: subtrair naturais pode produzir um inteiro negativo e dividir inteiros pode produzir racional não inteiro.",
        "steps": [
          "Declare a convenção de naturais e classifique cada número sem excluir inteiros de Q.",
          "Separe valor exato e aproximação e examine o radicando antes de classificar a raiz.",
          "Use opostos, inversos não nulos e denominadores comuns nas operações.",
          "Respeite parênteses, precedência e conjunto em que o resultado deve pertencer."
        ],
        "example": "Exemplo original: −3/4 + 5/6 = −9/12 + 10/12 = 1/12, um racional não inteiro. Já √25 = 5 pertence a N, Z, Q e R pela convenção adotada. Essas classificações são inclusivas; não é necessário escolher apenas um conjunto e negar a pertença aos maiores.",
        "pitfall": "Somar denominadores, excluir números inteiros dos racionais, chamar toda raiz de irracional ou ignorar a diferença entre sinal externo e base entre parênteses."
      },
      {
        "level": "intermediate",
        "title": "Divisibilidade, primos e fatoração com condições",
        "explanation": "Para inteiros a e b com a diferente de zero, dizer que a divide b significa existir inteiro k com b = a×k; nesse caso a divisão é exata. Na divisão euclidiana de um inteiro por um divisor positivo d, escreve-se b = dq+r, com resto 0 ≤ r < d. O resto não pode ser igual ao divisor. Para inteiros positivos, critérios decimais facilitam testes: por 2, último algarismo par; por 3 ou 9, soma dos algarismos divisível pelo respectivo número; por 4, número formado pelos dois últimos algarismos divisível por 4; por 5, final 0 ou 5; por 6, divisibilidade por 2 e por 3; por 8, três últimos algarismos divisíveis por 8; por 10, final 0. Para 11, a diferença entre somas de algarismos em posições alternadas deve ser múltipla de 11, incluindo zero. Um número primo é inteiro positivo maior que 1 com exatamente dois divisores positivos: 1 e ele mesmo; 1 não é primo nem composto. Um composto positivo maior que 1 possui outros divisores. Todo inteiro maior que 1 admite fatoração em primos única salvo a ordem dos fatores. Registre multiplicidades com expoentes: 72 = 2³×3². Testar primalidade pode exigir procurar divisores primos até a raiz quadrada, pois um composto tem pelo menos um divisor primo não maior que ela. Isso não significa que todo número ímpar seja primo nem que passar apenas nos testes de 2, 3 e 5 prove primalidade de um número qualquer. Potências preservam fatores repetidos; nas leis usuais de expoentes inteiros, explicite base não nula quando houver divisão ou expoente negativo.",
        "steps": [
          "Escreva produto ou divisão com resto para testar a relação exata.",
          "Escolha um critério adequado à base decimal e ao divisor solicitado.",
          "Separe primo, composto e o caso particular do número 1.",
          "Fatore até obter apenas primos e confira o produto e as multiplicidades."
        ],
        "example": "Exemplo distinto: 2034 é par e a soma de seus algarismos é 9, então é divisível por 2 e por 3, logo por 6. A divisão 2034 = 6×339 confirma resto zero. Isso não o torna primo; os fatores encontrados já mostram que ele é composto.",
        "pitfall": "Aceitar 1 como primo, concluir primalidade apenas por ser ímpar ou usar resto igual ou maior que o divisor positivo."
      },
      {
        "level": "advanced",
        "title": "MDC, MMC, ciclos e compatibilidade de restos",
        "explanation": "Para inteiros positivos, o máximo divisor comum, MDC, é o maior divisor positivo compartilhado; o mínimo múltiplo comum, MMC, é o menor múltiplo positivo compartilhado. Pela fatoração, o MDC usa os fatores comuns com menores expoentes; o MMC usa todos os fatores necessários com os maiores expoentes. Para dois números positivos, MDC(a,b)×MMC(a,b) = a×b. A identidade ajuda a encontrar um candidato, mas as condições de um problema ainda precisam ser verificadas: nem qualquer trio de dados forma uma configuração possível. O algoritmo de Euclides permite calcular MDC por divisões sucessivas: o MDC de a e b é igual ao de b e do resto, repetindo até chegar a resto zero; o último resto não nulo é o MDC. Em partilhas em grupos idênticos, sem sobras, a quantidade de grupos divide cada total e seu máximo pode ser encontrado pelo MDC. Em ciclos que começam simultaneamente, o próximo reencontro após o início pode ser encontrado pelo MMC dos períodos. Se os eventos têm fases iniciais diferentes, usar somente o MMC dos períodos não resolve automaticamente o instante do encontro. Restrições de restos permitem tratar tais diferenças: por exemplo, números que deixam resto 1 ao dividir por 4 seguem 1,5,9,13,...; depois devem ser testadas as outras condições. Para módulos positivos, x ≡ r (mod d) indica que d divide x−r, mas não é preciso invocar uma lista de teoremas avançados para conferir casos pequenos. A menor solução positiva exige testar candidatos menores ou justificar a estrutura das soluções, e não apenas encontrar um número que funcione.",
        "steps": [
          "Decida se o problema pede divisor comum, múltiplo comum ou compatibilidade de restos.",
          "Calcule MDC e MMC e confira a identidade para dois números positivos.",
          "Em ciclos, verifique o ponto inicial e as fases antes de usar MMC.",
          "Teste todas as condições e justifique a menor solução, refutando as alternativas."
        ],
        "example": "Exemplo autoral: 60 = 2²×3×5 e 84 = 2²×3×7 dão MDC = 12 e MMC = 420; 12×420 = 60×84 = 5040. No algoritmo de Euclides, 84 = 60+24, 60 = 2×24+12 e 24 = 2×12 confirmam MDC 12. Para dois sinais iniciados juntos com períodos de 6 e 8 minutos, o próximo encontro ocorre após MMC(6,8) = 24 minutos.",
        "pitfall": "Confundir máximo divisor e mínimo múltiplo, tratar identidade do produto como verificação suficiente de dados incompatíveis ou usar MMC sem conferir a fase inicial dos ciclos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Considere os valores exatos √16, −7/3, 0, √2, 4,5, −√9 e 2/5. Quantos pertencem ao conjunto dos números racionais Q?",
        "hint": "Inteiros e decimais finitos também podem ser escritos como frações de inteiros; examine o resultado de cada raiz.",
        "solution": "B conta seis: √16 = 4, −7/3, 0 = 0/1, 4,5 = 9/2, −√9 = −3 e 2/5 são racionais. √2 é o único irracional da lista. A exclui dois racionais; D exclui um; C inclui indevidamente √2. A classificação usa os valores exatos, sem substituir a raiz irracional por uma aproximação finita.",
        "options": [
          "4",
          "6",
          "7",
          "5"
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Sejam a e b números inteiros positivos tais que MDC(a,b) = 12 e MMC(a,b) = 720. Se a = 60, qual é b? Confira as duas condições, além da identidade do produto.",
        "hint": "Calcule o candidato por MDC×MMC = a×b e depois determine o MDC e o MMC efetivos do par encontrado.",
        "solution": "D obtém b = 12×720/60 = 144. Como 60 = 2²×3×5 e 144 = 2⁴×3², o MDC é 12 e o MMC é 720. Para A, b = 120, o MDC é 60 e o MMC 120. Para B, b = 180, são 60 e 180. Para C, b = 240, são 60 e 240. Nenhum dos três satisfaz as duas condições fornecidas.",
        "options": [
          "120",
          "180",
          "240",
          "144"
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Qual é o menor inteiro positivo que deixa resto 2 na divisão por 3, resto 3 na divisão por 5 e resto 2 na divisão por 7?",
        "hint": "Liste candidatos com o resto solicitado ao dividir por 5 e teste as outras duas condições, verificando também que não há solução positiva menor.",
        "solution": "A indica 23: 23 = 3×7+2 = 5×4+3 = 7×3+2. Os candidatos positivos menores que 23 com resto 3 por 5 são 3,8,13 e 18. Apenas 8 deixa resto 2 por 3, mas por 7 deixa resto 1. Logo 23 é o menor. B, 53, deixa resto 4 por 7; C, 38, deixa resto 3; D, 68, deixa resto 5. Todos esses três atendem os restos por 3 e por 5, mas falham na terceira condição.",
        "options": [
          "23",
          "53",
          "38",
          "68"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Gêneros textuais e tipos de discurso",
    "objective": "Distinguir gênero, organização textual e formas de relato de vozes, analisar finalidades e condições de circulação e justificar interpretações por marcas e contexto, sem classificações rígidas ou atribuições inventadas.",
    "prerequisites": [
      "Leitura de enunciados e identificação de finalidade",
      "Noções de narrador, autor e personagem",
      "Reconhecimento de pronomes, tempos verbais e referências de tempo"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Gênero e modos de organização: perguntas diferentes",
        "explanation": "Gêneros textuais são formas historicamente reconhecíveis de participar de situações comunicativas, como notícia, entrevista, receita, carta de leitor, anúncio e resenha. Sua identificação considera finalidade, participantes, composição e circulação; não se reduz a uma palavra ou ao endereço digital. Um mesmo gênero pode aparecer em papel ou em meio digital, com adaptações. Tipos ou sequências textuais descrevem modos de organizar o dizer. Para esta análise didática, utilizaremos estas sequências: narração encadeia acontecimentos; descrição caracteriza seres, espaços e estados; exposição explica informações e conceitos; argumentação defende ou avalia posições por razões; injunção orienta ações. Essa seleção orienta os exercícios; diferentes propostas teóricas podem distinguir outras categorias. Na escrita escolar, um texto chamado dissertativo pode explicar conceitos ou defender uma posição: a análise deve explicitar se a sequência é expositiva ou argumentativa, além da denominação da tarefa. Gênero e sequência não são equivalentes: uma reportagem pode narrar acontecimentos, descrever um lugar e explicar um processo sem deixar de constituir um gênero reconhecível. A existência de sequência descritiva não determina que o gênero inteiro seja descrição. Marcas como imperativo, adjetivos, conectores e tempos verbais são indícios a interpretar em conjunto; uma narração pode usar presente histórico e uma orientação pode ser formulada sem imperativo. A expressão tipos de discurso também pode aparecer para tratar das formas direta, indireta e indireta livre de relatar vozes. Nesta aula distinguiremos esses dois planos de análise, em vez de presumir que todos os usos do termo sejam sinônimos.",
        "steps": [
          "Identifique finalidade, participantes e circulação para propor o gênero.",
          "Examine como as informações e ações se organizam nas sequências.",
          "Use marcas linguísticas como indícios em conjunto, não como testes exclusivos.",
          "Separe organização textual e formas de relatar vozes ao interpretar o termo discurso."
        ],
        "example": "Texto autoral hipotético de um aviso: A biblioteca estará fechada amanhã para manutenção. Devolva os livros na caixa externa. O primeiro período informa uma condição; o segundo orienta uma ação. A presença de funções diferentes não impede reconhecer a finalidade prática do aviso nem obriga inventar dois gêneros independentes.",
        "pitfall": "Confundir receita com tipo injuntivo, chamar toda narração de notícia ou usar um único verbo para classificar todo o texto."
      },
      {
        "level": "intermediate",
        "title": "Discurso direto, indireto e indireto livre",
        "explanation": "Relatar uma fala envolve escolhas sobre voz, perspectiva e relação entre quem relata e quem é citado. No discurso direto, o texto representa a formulação da personagem ou fonte como fala própria, frequentemente com aspas, travessão ou outra organização gráfica. Essas marcas ajudam, mas seu uso varia entre textos; aspas também podem ter outras funções. A existência de uma fala citada não prova que o autor concorde com ela, nem garante que a citação corresponda a um registro real fora do texto. No discurso indireto, o relator incorpora o conteúdo à sua construção, muitas vezes por um verbo de dizer e uma oração com que ou se. Pronomes, tempos verbais e expressões como hoje, aqui e amanhã precisam ser avaliados segundo os pontos de referência. Em relatos situados no passado, é frequente o recuo temporal: por exemplo, um presente pode passar ao imperfeito e um pretérito perfeito ao mais-que-perfeito. A escolha ainda depende do conteúdo e das circunstâncias da nova enunciação; a manutenção de um presente pode ser pertinente para algo que continua válido. No discurso indireto livre, a voz narrativa e a perspectiva de uma personagem podem se aproximar sem uma introdução subordinada explícita, preservando expressividade e avaliações que o contexto associa à personagem. Interrogações e exclamações isoladas não bastam para identificar a técnica; examine quem percebe, avalia ou pensa no trecho. Um exemplo autoral construído para representar a expectativa de Rita seria: Rita olhou o relógio. Ainda faltava tanto para a saída! Por que o tempo não passava? A leitura acompanha a perspectiva dela, articulada à narração, sem que seja preciso reproduzir uma fala com disse que. Essas formas podem coexistir em gêneros literários e não literários, com efeitos de proximidade, distância, síntese ou destaque.",
        "steps": [
          "Identifique quem relata e de quem é a voz ou perspectiva representada.",
          "Diferencie fala apresentada como formulação própria e conteúdo incorporado ao relato.",
          "Reveja pessoas, tempos e referências espaciais e temporais segundo o contexto.",
          "No indireto livre, justifique a aproximação de vozes pelo trecho, além da pontuação."
        ],
        "example": "Exemplo original: Bia disse na reunião: Vou entregar os mapas amanhã. Em um relato posterior situado no passado, pode-se escrever: Bia disse que entregaria os mapas no dia seguinte. Também é possível preservar a construção com ir: Bia disse que ia entregar os mapas no dia seguinte. A reformulação preserva o compromisso anunciado e ajusta referências, sem transformar promessa em entrega já realizada.",
        "pitfall": "Atribuir ao autor toda opinião citada, transformar automaticamente cada tempo verbal ou identificar indireto livre por qualquer exclamação fora de contexto."
      },
      {
        "level": "advanced",
        "title": "Circulação, multimodalidade e leitura crítica dos gêneros",
        "explanation": "Gêneros se transformam e podem combinar convenções, mas mistura de sequências não comprova automaticamente hibridização entre gêneros. Um editorial apresenta uma posição institucional, enquanto uma notícia tem outra função na atividade jornalística; compartilhar tema ou sequências não elimina essa diferença. Pessoa gramatical, isoladamente, não determina o gênero. Analise o papel do texto na situação comunicativa. No meio digital, palavras, imagens, posição, tamanho de letras, som e gestos podem atuar juntos. Um anúncio pode informar características e ao mesmo tempo incentivar compra; a finalidade comercial não torna cada informação automaticamente falsa. Elementos visuais podem reforçar uma tese ou produzir contraste, sem que todo gráfico prove uma conclusão. Para interpretar, descreva o recurso e examine sua relação com os dados e as palavras efetivamente fornecidos. Intertextualidade envolve relações com outros textos, por citação, alusão, reformulação ou transformação; nomear um autor ou uma obra não é por si validação da informação. Um selo visual, muitos seguidores ou linguagem técnica tampouco substituem origem rastreável. Quando um recorte de tela circula fora da publicação original, podem desaparecer data, autoria, legenda e contexto. A recontextualização pode alterar a leitura, mas mudar o suporte não muda obrigatoriamente o gênero nem revela sozinho o algoritmo, a intenção de enganar ou o modelo de remuneração do produtor. Distinga pistas de finalidade, confirmação de fatos e inferências sobre intenção. Se faltam informações, indique o limite e o que permitiria conferir, em vez de completar lacunas com pesquisa, estatística ou citação inventada. A análise ganha força quando conecta organização, vozes, recursos e situação concreta de circulação.",
        "steps": [
          "Identifique função e convenções do gênero sem exigir fórmula única.",
          "Descreva como modos verbais e não verbais se articulam nos dados fornecidos.",
          "Rastreie autoria, data e contexto quando a verificação da informação exigir.",
          "Separe finalidade comercial, veracidade e intenção, sem conclusões automáticas por formato."
        ],
        "example": "Descrição hipotética autossuficiente: um anúncio digital de caderno mostra a foto do produto, destaca o preço em letras grandes e traz o comando Conheça a coleção. Imagem, organização visual e texto contribuem para a divulgação comercial. O formato não permite concluir sozinho qualidade do produto, falsidade de todas as informações ou intenção de fraudar.",
        "pitfall": "Chamar toda mistura de sequências de gênero híbrido, tomar gráfico ou selo como prova e deduzir algoritmo ou fraude apenas pelo formato de um post."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Texto autoral hipotético de uma receita: Separe a farinha e o leite. Misture os ingredientes e distribua a massa nas formas. Considerando finalidade e organização, qual análise é adequada?",
        "hint": "Diferencie a prática comunicativa reconhecível e a sequência que orienta ações, sem tratar os dois conceitos como sinônimos.",
        "solution": "B identifica receita como gênero e orientação de ações como sequência predominantemente injuntiva. A opção A troca instrução por relato já ocorrido. C exige defesa de uma tese ausente. D chama injunção de gênero e receita de tipo, invertendo os planos. Não é necessário conhecer uma receita real externa ao fragmento para analisar esses indícios.",
        "options": [
          "O gênero é relato autobiográfico e a sequência informa apenas acontecimentos já concluídos.",
          "O gênero é receita e a sequência predominante é injuntiva, com orientação de ações.",
          "O gênero é editorial e a sequência apresenta tese e refutação sobre política pública.",
          "O gênero é injunção e o tipo textual é receita, pois os dois conceitos são sempre intercambiáveis."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Situação autoral hipotética: na terça-feira, Camila declarou: Entreguei o relatório hoje. Na quarta-feira, um relator reconta a declaração preservando a entrega já concluída e o dia a que ela se referia. Qual reformulação em discurso indireto atende a essa tarefa?",
        "hint": "Preserve quem realizou a ação, o fato afirmado como concluído e a referência ao dia da declaração, sem introduzir negação ou futuro.",
        "solution": "D conserva Camila como autora da entrega, situa a entrega antes da declaração e usa naquele dia para retomar a terça-feira. A transforma a entrega concluída em previsão futura. B introduz negação que não consta da fala. C troca entregar por receber, alterando o conteúdo. A questão pede relato da declaração, não prova externa de que a entrega realmente ocorreu.",
        "options": [
          "Camila declarou, na terça-feira, que entregaria o relatório apenas na semana seguinte.",
          "Camila declarou, na terça-feira, que não havia entregado o relatório naquele dia.",
          "Camila declarou, na terça-feira, que havia recebido o relatório naquele dia.",
          "Camila declarou, na terça-feira, que havia entregado o relatório naquele dia."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Descrição autoral hipotética: um anúncio digital de mochila reúne foto do produto, preço em destaque e o comando Compre agora. Não são fornecidos testes de qualidade nem informações sobre a distribuição da postagem. Qual conclusão é sustentada pelos dados?",
        "hint": "Observe o propósito explícito e a articulação dos recursos, sem confundi-los com comprovação de qualidade, fraude ou funcionamento do algoritmo.",
        "solution": "A relaciona foto, destaque de preço e comando à finalidade comercial persuasiva. B afirma qualidade comprovada sem testes. C transforma publicidade em prova de fraude, inferência não sustentada. D inventa informação sobre algoritmo e alcance ausente. Reconhecer propósito comercial não decide automaticamente a veracidade de cada informação sobre o produto.",
        "options": [
          "Recursos visuais e verbais se articulam para incentivar compra, sem provar sozinhos qualidade ou fraude.",
          "O destaque do preço comprova que a mochila passou em todos os testes de qualidade.",
          "A existência de publicidade demonstra que todas as informações são falsas e há fraude comprovada.",
          "O comando permite identificar exatamente o algoritmo e quantas pessoas receberam a postagem."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Romantismo e nacionalismo",
    "objective": "Analisar o nacionalismo no Romantismo brasileiro em poesia e prosa, relacionar idealização e escolhas de representação e reconhecer diversidade de projetos e vozes sem confundir ficção com retrato transparente da sociedade.",
    "prerequisites": [
      "Noções do Brasil oitocentista, Independência e escravidão",
      "Distinção entre autor, narrador, personagem e voz lírica",
      "Leitura de imagens, contrastes e argumentos em textos literários"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Romantismo e construção literária de pertencimento",
        "explanation": "O Romantismo brasileiro se desenvolveu no século XIX em um país independente desde 1822 e atravessado pela escravidão, por disputas políticas e desigualdades. A circulação de ideias e formas europeias foi reelaborada em projetos que buscavam diferenciar uma literatura nacional. Isso não significa que antes não existissem culturas, memórias ou produções simbólicas no território. Suspiros poéticos e saudades, de Gonçalves de Magalhães, publicado em 1836, é um marco convencional desse movimento na história literária, não o nascimento de toda cultura brasileira. Natureza, paisagem, passado e figuras indígenas podem participar da construção de pertencimento, articulados a subjetividade, saudade e idealização. Na Canção do exílio, de Gonçalves Dias, a comparação entre lugares organiza a valorização afetiva da terra lembrada; o poema não funciona como medição neutra de qual lugar tem mais beleza. Para estudar a poesia, costuma-se distinguir tendências indianista e nacionalista, ultrarromântica e social ou condoreira, associadas respectivamente a nomes como Gonçalves Dias, Álvares de Azevedo e Castro Alves. São agrupamentos didáticos, não etapas fechadas que classificam todo romance ou todos os poemas de um autor. Há convivência, diferenças internas e temas que atravessam essas divisões. Nacionalismo literário também não implica uma única posição partidária ou concordância automática com todas as instituições do Império. Analise quem fala, o que seleciona e como imagens, repetições, contrastes e ritmo tornam essa representação significativa.",
        "steps": [
          "Situe o texto no contexto oitocentista sem apagar produções culturais anteriores.",
          "Identifique a voz que constrói pertencimento e as imagens selecionadas.",
          "Distinga valorização afetiva e idealização de descrição neutra.",
          "Use tendências poéticas como orientação, sem transformar agrupamentos em regras exclusivas."
        ],
        "example": "Texto autoral hipotético, sem atribuição a poeta real: Longe do vale onde cresci, a lembrança faz das margens um abrigo sem inverno. A distância e a memória transformam a paisagem em referência afetiva. A expressão abrigo sem inverno é imagem de idealização, não um boletim meteorológico sobre um lugar identificado.",
        "pitfall": "Afirmar que a cultura começou em 1836, classificar toda prosa pelas gerações da poesia ou tomar a voz lírica como descrição objetiva e integral da pátria."
      },
      {
        "level": "intermediate",
        "title": "Indianismo, romance e mediação das imagens nacionais",
        "explanation": "No indianismo romântico, personagens, paisagens e referências indígenas podem ser reelaborados como matéria de uma origem nacional imaginada. O Guarani, de 1857, e Iracema, de 1865, são romances de José de Alencar associados a esse projeto. Heroísmo, sacrifício, relações afetivas e encontros entre personagens organizam narrativas que selecionam e transformam elementos históricos e culturais. A presença de personagens indígenas não faz desses romances um registro neutro de todos os povos e experiências; também não permite afirmar que todo texto indianista tenha a mesma avaliação da colonização. É necessário ler conflitos e vozes concretos, em vez de concluir lealdade, resistência ou conciliação apenas pelo rótulo. O nacionalismo literário não se limita ao indianismo. A prosa romântica também representa ambientes urbanos, regiões e costumes; Senhora, de 1875, pertence à vertente urbana da obra alencarina, enquanto O gaúcho, de 1870, participa de seu repertório regional. Essas vertentes ampliam o que pode entrar na imagem literária do país, mas continuam mediadas por narradores, linguagem, composição e circulação. Não são mapas sociológicos completos nem vozes sem elaboração estética. Debates sobre língua e literatura nacional precisam ser localizados em textos reais: não se deve inventar título, data ou tese de um ensaio para explicar a posição de um autor. Literatura pode ser fonte histórica para investigar representações, desde que sua condição ficcional e seu contexto sejam analisados. Chamar uma obra de ficção não a torna inútil como fonte, assim como situá-la no passado não a transforma em testemunho transparente.",
        "steps": [
          "Identifique como a narrativa constrói personagens, conflitos e imagens de origem.",
          "Analise o trecho antes de atribuir posição sobre colonização a todo o indianismo.",
          "Compare vertentes indianista, urbana e regional sem confundir agrupamentos poéticos.",
          "Trate a ficção como construção estética e possível fonte de representações, com crítica e contexto."
        ],
        "example": "Situação de análise hipotética: uma narrativa associa a coragem de um herói à paisagem que pretende apresentar como símbolo coletivo. O leitor pode investigar a idealização e perguntar quais grupos aparecem ou ficam de fora. Isso não prova, sem outras evidências, que todos os habitantes reais possuíam as virtudes atribuídas à personagem.",
        "pitfall": "Equiparar personagem e povo real, dizer que toda obra indianista repete uma única política ou rejeitar a ficção como fonte para estudar representações."
      },
      {
        "level": "advanced",
        "title": "Nação, escravidão e diversidade de vozes",
        "explanation": "Ler o nacionalismo romântico exige examinar tensões entre celebração de símbolos e crítica das condições sociais. Em O navio negreiro, poema datado de 1868, Castro Alves organiza contraste entre grandeza marítima e violência da escravização, mobilizando imagens, interpelações e a bandeira nacional para denunciar a associação entre o país e o horror representado. Uma forma de identificação nacional pode, portanto, participar de crítica, em vez de simples elogio. Também é incorreto afirmar que toda produção oitocentista foi exclusivamente de homens brancos. Maria Firmina dos Reis, escritora negra maranhense, é autora de Úrsula, cuja edição original traz a data de 1859. O romance articula convenções românticas e crítica à escravidão, incluindo vozes e memórias de personagens negros. No capítulo dedicado a Susana, a personagem recorda liberdade, família e vida em África anteriores à captura; sua memória impede reduzi-la a alguém sem história antes do cativeiro. Isso não transforma a personagem em depoimento documental sem mediação nem permite declarar que todas as experiências africanas foram iguais. Considerar autoras e autores menos reconhecidos ajuda a interrogar como o cânone foi selecionado e a evitar uma história literária uniforme. A diversidade não apaga as desigualdades de acesso à escrita e à circulação, mas mostra que elas não eliminaram toda autoria e intervenção de sujeitos subalternizados. Para comparar projetos de nação, observe quais personagens ganham fala, que passado é lembrado, que liberdade é defendida e quais exclusões persistem. Uma interpretação deve demonstrar seus indícios na obra, sem converter identidade nacional em essência fixa nem usar uma única obra como prova sobre todos os escritores do período.",
        "steps": [
          "Compare celebração de símbolos e denúncia social nos procedimentos do texto.",
          "Reconheça a diversidade de autoria e interrogue generalizações sobre o período.",
          "Analise quem tem memória e voz, sem apagar a mediação literária.",
          "Relacione projeto nacional e exclusões com evidências específicas, não com um esquema único."
        ],
        "example": "Comparação autoral de procedimentos, sem transcrição: uma narrativa constrói um herói como símbolo de origem; outra recupera a lembrança de uma personagem sobre vida e liberdade anteriores à escravização. A comparação pode examinar o lugar de cada voz na imagem do país. Não exige que uma das obras seja tomada como reprodução imediata de toda a realidade.",
        "pitfall": "Afirmar exclusividade de autoria masculina branca, reduzir literatura antiescravista a elogio nacional ou confundir memória de personagem com documento etnográfico sem mediação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Texto autoral hipotético para análise, sem atribuição histórica: Distante da cidade natal, o eu que fala recorda o rio e transforma suas margens em lugar perfeito de acolhimento. Qual leitura relaciona a construção da paisagem a um procedimento presente em parte da poesia romântica nacionalista?",
        "hint": "Examine a ligação entre memória, afeto e pertencimento, sem tratar perfeição lembrada como medida científica.",
        "solution": "C reconhece que a paisagem idealizada participa de pertencimento afetivo. A transforma seleção da memória em levantamento neutro. B nega a dimensão subjetiva explicitada. D deduz autoria real e data de um texto declarado hipotético. O procedimento permite comparação literária, sem provar que qualquer menção a um rio seja exclusivamente romântica.",
        "options": [
          "A lembrança comprova cientificamente que a cidade era perfeita em todos os aspectos.",
          "A descrição elimina qualquer relação entre subjetividade e lugar.",
          "A memória e a idealização da paisagem contribuem para construir pertencimento afetivo.",
          "O fragmento comprova que Gonçalves Dias o escreveu em uma data identificável."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Uma análise hipotética de romance indianista observa que coragem, sacrifício e paisagem são organizados para construir uma narrativa de origem nacional. Qual conclusão é metodologicamente adequada?",
        "hint": "Separe construção literária e descrição transparente de todos os povos, sem excluir o uso histórico da obra para estudar representações.",
        "solution": "A permite investigar a imagem nacional e as escolhas de representação, mantendo a mediação literária. B presume fidelidade integral e generaliza a todos os povos. C transforma um procedimento em posição política idêntica de toda obra. D descarta a ficção como fonte sobre representações, embora ela possa ser estudada criticamente nesse sentido.",
        "options": [
          "A obra pode ser analisada como construção estética de uma imagem nacional, sem ser registro neutro de todos os povos representados.",
          "A narrativa garante descrição etnográfica integral e idêntica de todos os povos indígenas reais.",
          "Esses recursos demonstram que todo texto indianista tem exatamente a mesma posição sobre a colonização.",
          "Por ser ficção, o romance não pode contribuir para nenhuma investigação histórica de representações."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Considere a informação bibliográfica: Maria Firmina dos Reis, escritora negra maranhense, é autora de Úrsula, romance oitocentista que inclui crítica à escravidão e vozes de personagens negros. Qual avaliação da frase toda literatura brasileira do período foi escrita apenas por homens brancos é sustentada por essa informação?",
        "hint": "Uma afirmação universal pode ser refutada por um contraexemplo, sem que isso prove ausência de desigualdades ou uniformidade do restante das obras.",
        "solution": "D usa a autoria informada como contraexemplo que refuta a exclusividade. A ignora a evidência. B extrapola um caso para afirmar igualdade completa de oportunidades. C converte a autora e sua obra em descrição de todas as posições do período. Reconhecer diversidade não exige negar desigualdades de acesso e reconhecimento.",
        "options": [
          "A frase permanece comprovada, pois uma autora negra não pode integrar a história literária.",
          "A informação prova que todas as pessoas tiveram as mesmas condições de publicação e reconhecimento.",
          "A obra demonstra que todos os autores do período defenderam posições idênticas sobre escravidão.",
          "A autoria informada refuta a exclusividade da frase, sem demonstrar igualdade de oportunidades no período."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Paragrafação e conectivos",
    "objective": "Planejar parágrafos com foco e desenvolvimento, escolher conectivos segundo a relação pretendida e revisar transições, referências e pontuação sem impor fórmulas fixas ou conclusões sem apoio.",
    "prerequisites": [
      "Distinção entre oração, período e parágrafo",
      "Noções de tema, argumento e exemplo",
      "Leitura de referências pronominais e de relações entre ideias"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Foco, desenvolvimento e divisão em parágrafos",
        "explanation": "Paragrafar é organizar o percurso de leitura em unidades que agrupam ideias relacionadas. Em uma redação argumentativa, cada parágrafo deve cumprir uma função reconhecível no projeto do texto: apresentar um problema, desenvolver uma razão, explicar evidência, examinar uma ressalva ou encaminhar uma conclusão. Isso não equivale a uma fórmula universal de três frases ou número fixo de linhas. Uma ideia central pode aparecer em uma frase-tópico explícita no início, em outro ponto ou ser compreendida pelo conjunto; para quem está aprendendo, explicitá-la ajuda a verificar o foco. Desenvolvimento significa explicar a relação entre afirmação, razões e exemplos, e não apenas acrescentar assuntos ou repetir a mesma frase com sinônimos. Um exemplo deve contribuir para o ponto em discussão e ser identificado como hipotético quando inventado; não pode ser apresentado como pesquisa de uma instituição real. A divisão em parágrafos pode acompanhar mudança de aspecto, etapa do argumento ou perspectiva, mantendo relação com o texto inteiro. Nem toda frase nova exige outro parágrafo, e juntar assuntos apenas por serem da mesma área não garante unidade. Antes de escolher conectivos, formule em poucas palavras a função de cada parágrafo. Se não conseguir explicar por que uma sentença está ali, talvez seja necessário desenvolvê-la, deslocá-la ou retirá-la. A organização deve atender gênero, propósito e tarefa, sem transformar uma estratégia didática em obrigação de toda escrita.",
        "steps": [
          "Defina a função do parágrafo dentro do projeto do texto.",
          "Formule seu foco e relacione cada sentença a esse ponto.",
          "Desenvolva razões e exemplos, identificando hipóteses e evidências reais.",
          "Separe aspectos quando isso ajudar a progressão, sem impor quantidade fixa de frases."
        ],
        "example": "Planejamento autoral hipotético: um parágrafo discute ampliar o acesso à biblioteca por horários; outro examina condições de transporte. O segundo pode aprofundar um limite da primeira medida. Uma frase sobre a cor das capas só contribuiria se houvesse uma relação pertinente explicada com o foco, e não por mencionar livros.",
        "pitfall": "Confundir desenvolvimento com acúmulo de temas, atribuir estatística inventada a uma pesquisa ou exigir frase-tópico inicial e fechamento idêntico em todo parágrafo."
      },
      {
        "level": "intermediate",
        "title": "Relações de sentido antes da escolha do conectivo",
        "explanation": "Conectivos e expressões de transição ajudam a sinalizar relações, mas não criam por si uma conexão lógica que falta no conteúdo. Além disso pode acrescentar um ponto; porém e no entanto podem marcar contraste ou restrição; porque pode apresentar causa ou explicação; portanto pode encaminhar uma conclusão; por exemplo introduz uma ilustração pertinente. Essas funções devem ser lidas no enunciado, e certas palavras assumem valores diferentes conforme a construção. Usamos conectivo aqui em sentido textual amplo, sem supor que todas essas unidades pertençam à mesma classe gramatical ou possam trocar de posição do mesmo modo. Uma relação concessiva admite um aspecto e indica um limite à expectativa associada: Embora o horário tenha aumentado, parte do público ainda encontra dificuldade de transporte. O segundo fato não precisa negar que o horário aumentou; ele restringe a suficiência da medida. Não é obrigatório acrescentar um adversativo depois de embora para que exista contraste. Tampouco há escala universal em que mas seja sempre fraco e oral e todavia sempre forte. Escolha precisão e adequação ao registro, em vez de palavras raras como sinal automático de qualidade. Trocar porque por portanto pode inverter causa e conclusão; trocar um conector exige rever estrutura, sentido e pontuação. Usar portanto não prova causalidade ou conclusão só porque duas frases vieram em sequência. O e pode ser adequado, inclusive em repetições com efeito expressivo; variedade só ajuda quando preserva a relação e não produz acúmulo artificial de marcadores.",
        "steps": [
          "Explique a relação pretendida entre as ideias antes de escolher a expressão.",
          "Verifique se há acréscimo, contraste, explicação, exemplo ou conclusão sustentada.",
          "Reveja construção e pontuação ao substituir conectivos.",
          "Prefira precisão contextual a hierarquias fixas de força ou quantidade de palavras raras."
        ],
        "example": "Exemplo original hipotético: A oficina ganhou novas vagas. No entanto, o espaço continua sem acesso compatível com parte do público. A expressão marca um limite da ampliação. Substituir por portanto sugeriria uma conclusão que os dois fatos, apresentados assim, não estabelecem. Isso não refuta que novas vagas tenham sido criadas.",
        "pitfall": "Adicionar portanto para fabricar conclusão, tratar concessão como negação obrigatória do fato admitido ou substituir conectivos como se fossem sinônimos em qualquer construção."
      },
      {
        "level": "advanced",
        "title": "Revisão de transições, referências e progressão",
        "explanation": "As relações do texto atravessam orações, períodos e parágrafos. Uma conjunção pode ligar constituintes ou orações; uma expressão de transição pode articular períodos e também parágrafos, conforme o contexto. Não existe regra que reserve além disso a frases e proíba seu uso entre parágrafos. Uma transição também pode ser feita por retomada de palavra-chave, expressão nominal, paralelismo ou organização de informações, sem começar obrigatoriamente com um conector explícito. Em Essa dificuldade de transporte, o demonstrativo e o nome retomam uma situação anterior; isso é referência anafórica, não elipse. Elipse é omissão de um termo recuperável: em A turma da manhã participou; a da tarde também, o contexto permite recuperar o nome turma e o verbo participar. A referência precisa ser clara: esta medida pode se tornar ambígua se há várias propostas próximas e o leitor não sabe qual foi retomada. Desenvolva progressão, articulando informação conhecida e nova, em vez de apenas repetir o ponto anterior com outra palavra. Na revisão, resuma a função de cada parágrafo e leia a última ideia de um junto à primeira do seguinte. Pergunte qual relação o leitor pode reconstruir e se os referentes são identificáveis. Se o vínculo não estiver claro, pode ser preciso mudar a ordem, explicitar uma premissa ou desenvolver a explicação; inserir um marcador vistoso não basta. Verifique também pontuação e continuidade de pessoa e tempo, sem separar sujeito e verbo por uma vírgula apenas para criar pausa. A revisão considera o objetivo da tarefa e a relação efetiva entre ideias, sem exigir todos os recursos ao mesmo tempo.",
        "steps": [
          "Leia a passagem entre parágrafos e explicite o vínculo temático ou argumentativo.",
          "Identifique referentes de demonstrativos, pronomes e expressões nominais.",
          "Distinga retomada presente no texto e elemento realmente omitido por elipse.",
          "Revise ordem, premissas, desenvolvimento e pontuação, além dos marcadores."
        ],
        "example": "Parágrafos autorais hipotéticos: A escola propôs ampliar as vagas da oficina, mas o trajeto de ônibus ainda não atende quem sai mais tarde.\n\nEssa dificuldade de deslocamento será discutida antes da escolha dos horários.\n\nA expressão inicial do segundo parágrafo seleciona o obstáculo de transporte, não a ampliação das vagas; a retomada nominal torna o foco explícito sem inventar um resultado já alcançado.",
        "pitfall": "Chamar demonstrativo expresso de elipse, exigir um conectivo no início de cada parágrafo ou presumir que uma transição formal resolva falta de premissas e de desenvolvimento."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Planejamento autoral hipotético: um parágrafo pretende propor horários de biblioteca compatíveis com pessoas que trabalham durante o dia. Qual continuação desenvolve diretamente esse foco?",
        "hint": "Procure uma proposta relacionada ao horário de acesso, sem se deixar guiar apenas pela presença de palavras da área de livros.",
        "solution": "B propõe abertura em algumas noites, medida diretamente relacionada à compatibilidade de horários; o planejamento de equipe não é apresentado como resultado já comprovado. A, C e D mencionam biblioteca ou livros, mas não desenvolvem a questão do horário. Compartilhar o tema geral não torna qualquer sentença pertinente ao foco específico.",
        "options": [
          "A biblioteca possui um mural pintado com figuras geométricas.",
          "Uma possibilidade é abrir em algumas noites, com planejamento da equipe responsável.",
          "Muitos livros têm lombadas de cores diferentes nas estantes.",
          "O prédio abriga uma coleção de dicionários sobre variedades regionais."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Texto autoral hipotético: A biblioteca ampliou o horário de atendimento. ______, parte dos moradores continua sem transporte disponível no novo período. Para marcar explicitamente uma restrição à expectativa de que a ampliação resolveria o acesso, qual expressão é adequada?",
        "hint": "A segunda informação limita a suficiência da medida, sem negar que o horário tenha aumentado nem demonstrar que isso causou falta de transporte.",
        "solution": "D, No entanto, marca o contraste ou a restrição solicitada. B, Além disso, sinaliza acréscimo e não explicita a restrição pedida. A, Por exemplo, apresenta ilustração, não a relação solicitada. C, Portanto, encaminha uma conclusão que não se segue dos fatos como foram apresentados; o texto não informa que a ampliação causou ausência de transporte.",
        "options": [
          "Por exemplo",
          "Além disso",
          "Portanto",
          "No entanto"
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Passagem autoral hipotética: o primeiro parágrafo informa que novas vagas foram abertas na oficina, mas que o transporte ainda impede parte do público de comparecer. O segundo deve retomar nominalmente esse obstáculo de deslocamento como aspecto a examinar no planejamento. Qual abertura atende especificamente a esse objetivo?",
        "hint": "Identifique o referente exigido: dificuldade de transporte, que é diferente de ampliação de vagas, facilidade de trajeto ou extinção de rotas.",
        "solution": "C retoma nominalmente a dificuldade de transporte informada e a coloca como objeto de exame. A inverte a dificuldade em facilidade. B inventa extinção de todas as rotas, informação ausente. D retoma a ampliação de vagas, que existe no cenário, mas não é o obstáculo de deslocamento explicitamente solicitado. A seleção depende do objetivo indicado, não de uma proibição geral de outras formas de transição.",
        "options": [
          "Essa facilidade de transporte deve orientar o planejamento.",
          "Essa extinção de todas as rotas deve orientar o planejamento.",
          "Essa dificuldade de transporte deve ser examinada no planejamento.",
          "Essa ampliação de vagas deve ser examinada no planejamento."
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Tempos e aspectos verbais",
    "objective": "Interpretar referências temporais e perspectivas simples, progressivas e perfeitas no inglês, formar estruturas frequentes e escolher formas pelo sentido pretendido, sem transformar marcadores em regras automáticas.",
    "prerequisites": [
      "Reconhecimento de sujeito e verbo em inglês",
      "Formas básicas de be, have e verbos irregulares frequentes",
      "Noções de presente, passado e referência futura"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Referência temporal e perspectiva simples ou progressiva",
        "explanation": "Tempo e aspecto ajudam a organizar o que se diz sobre uma situação. Aqui usamos os nomes didáticos simple, continuous e perfect, mas o nome da forma não determina sozinho a data do acontecimento. O simple present pode apresentar hábitos, estados e generalizações: Elisa repairs bicycles on Saturdays descreve uma rotina. Com he, she ou it, o verbo lexical recebe normalmente -s; nas negativas e perguntas, does acompanha a forma base: Elisa does not repair scooters; Does she repair bicycles? Be tem formas próprias, como is e are, sem esse auxiliar do. O present continuous combina am/is/are com a forma em -ing e pode mostrar um processo em curso ou uma situação temporária no período atual, não somente algo acontecendo no exato segundo da fala. Elisa is repairing bicycles at another workshop this month apresenta uma circunstância temporária. Uma rotina não precisa durar para sempre, e uma situação temporária pode incluir ações repetidas. Palavras como usually e now são pistas, não comandos que tornam um aspecto obrigatório. O significado do verbo também importa: know, em seu sentido comum de saber, normalmente aparece na forma simples; think pode exprimir opinião em I think it is useful ou atividade de considerar em I am thinking about the problem. No passado, o simple past usa forma regular em -ed ou irregular e pode narrar um evento ou um período concluído, não apenas um instante. Was/were + -ing apresenta uma atividade em desenvolvimento em um ponto passado. Em Nora was drawing when the bell rang, a campainha ocorre durante o desenho; isso não prova que Nora parou de desenhar. Compare sempre referência, sentido e construção, sem trocar a leitura por uma lista de palavras-gatilho.",
        "steps": [
          "Localize o momento ou período a que a situação se refere.",
          "Decida se o texto apresenta hábito, estado, evento concluído ou processo em curso.",
          "Confira sujeito, auxiliar e forma principal, incluindo does + forma base.",
          "Use marcadores como pistas e releia o sentido inteiro antes de descartar uma forma."
        ],
        "example": "Exemplos autorais: Leo checks the equipment every Friday apresenta hábito; Leo is checking the equipment this afternoon apresenta a atividade em desenvolvimento ou planejada no período indicado. Leo checked the equipment yesterday apresenta evento passado concluído. Leo was checking the equipment at nine apresenta o processo naquele ponto passado, sem informar sozinho quando terminou.",
        "pitfall": "Tratar simple como permanente, continuous como exclusivamente agora ou a ocorrência simultânea de outro evento como prova de interrupção definitiva."
      },
      {
        "level": "intermediate",
        "title": "Aspecto perfeito: anterioridade, ligação e duração",
        "explanation": "O aspecto perfeito relaciona uma situação anterior a um ponto de referência. No present perfect, have/has + particípio relaciona o anterior ao presente: The team has repaired three lamps apresenta três reparos como resultado relevante agora. Não é mera tradução automática do pretérito português. Em inglês padrão, uma localização em um período passado encerrado, como yesterday, normalmente pede simple past: The team repaired three lamps yesterday. O present perfect também pode apresentar um estado que continua, como Ada has known Rui for years; portanto perfect não significa sempre ação encerrada. For indica duração, enquanto since aponta o início de um intervalo; nenhuma dessas palavras exige por si uma única forma verbal. Have/has been + -ing forma o present perfect continuous e frequentemente põe em foco uma atividade ou sua duração: The team has been repairing lamps all morning. Isso pode descrever atividade ainda em curso ou recentemente terminada com efeitos presentes; não garante que cada tarefa esteja incompleta. Há contextos em que as formas simples e progressiva são possíveis com diferenças de foco. Para um ponto de referência passado, had + particípio forma o past perfect: By the time Ada opened the room, Rui had checked the wiring situa a verificação antes da abertura. Had been + -ing pode salientar duração anterior ou até uma referência passada: Rui had been checking the wiring for an hour when Ada arrived. A forma perfeita não precisa aparecer em toda menção a um acontecimento mais antigo. Em Rui checked the wiring before Ada opened the room, before já ordena os fatos, e ambos os verbos no simple past são possíveis. Already, before e after não obrigam automaticamente had. Desenhe uma linha temporal e pergunte se o texto precisa marcar anterioridade, resultado, continuidade ou duração; depois confira o auxiliar e o particípio, inclusive formas irregulares como written.",
        "steps": [
          "Defina o ponto de referência: agora ou outro momento passado.",
          "Separe localização passada encerrada de ligação com o presente.",
          "Reconheça have/has/had + particípio e a combinação been + -ing.",
          "Compare resultado e atividade sem presumir exclusão absoluta entre as leituras.",
          "Confira se a ordem já está clara por before ou after antes de declarar past perfect obrigatório."
        ],
        "example": "Cenário autoral: às 16h, Bia entrou no laboratório; às 15h, Caio havia concluído a conferência. Caio had checked the list before Bia entered explicita a anterioridade. Caio checked the list before Bia entered também pode ordenar esses fatos. Já Caio was checking the list when Bia entered apresenta a conferência em curso na entrada e muda o cenário, se nada mais esclarecer sua conclusão.",
        "pitfall": "Chamar todo perfect de concluído, exigir had por causa de already/before ou considerar uma alternativa incorreta apenas porque outra perspectiva também é possível."
      },
      {
        "level": "advanced",
        "title": "Referência futura e combinações de tempo e aspecto",
        "explanation": "O inglês usa várias construções para referência futura. Will + forma base pode apresentar previsão, promessa ou decisão tomada no momento; uma previsão com will não é, por definição, desprovida de evidência. Be going to + forma base frequentemente apresenta intenção anterior ou previsão ligada a sinais presentes. O present continuous pode apresentar um arranjo futuro: We are recording the interview tomorrow indica uma atividade combinada, sem exigir verbo de movimento. Esses usos são tendências de sentido e contexto, não categorias sempre exclusivas. Em certos enunciados, mais de uma forma é possível com diferente perspectiva; não se deve inventar uma oposição gramatical absoluta para produzir um gabarito. Com um ponto futuro explícito, will be + -ing pode apresentar atividade em desenvolvimento: At ten tomorrow, I will be revising the script. Will have + particípio pode situar conclusão anterior ao ponto projetado: By Friday, I will have revised all four pages. Will have been + -ing pode salientar duração de uma atividade até uma referência futura: By noon, I will have been practising for two hours. Essas construções combinam referência e aspecto; não significam que todo evento futuro precise delas. Também é necessário identificar a função da oração. Quando when introduz uma oração temporal com sentido de quando algo acontecer, usamos normalmente uma forma presente para essa referência futura: I will send a message when the session ends. O present perfect também é possível nesse tipo de oração para salientar conclusão. Isso não proíbe will depois de toda ocorrência de when. Em Do you know when the session will end?, when introduz uma pergunta indireta sobre o horário, e will é adequado. A pergunta indireta mantém sujeito antes do auxiliar: when the session will end, não a inversão da pergunta direta When will the session end? Antes de selecionar uma forma, identifique a intenção comunicativa e o papel de cada oração.",
        "steps": [
          "Diferencie previsão, intenção e arranjo, admitindo sobreposição contextual.",
          "Localize o ponto futuro e decida se interessa processo, conclusão anterior ou duração.",
          "Monte will be + -ing, will have + particípio ou will have been + -ing conforme o foco.",
          "Verifique se when introduz oração temporal ou pergunta indireta.",
          "Confira ordem de sujeito e auxiliar sem aplicar a proibição indiscriminada de will."
        ],
        "example": "Exemplo autoral: At eight tomorrow, Lara will be editing the recording apresenta processo no horário futuro. By noon, Lara will have edited both recordings apresenta conclusão projetada. Para combinar pergunta e aviso: Do you know when the workshop will begin? I will call you when it begins. A primeira oração pergunta um horário; a última situa temporalmente a ligação.",
        "pitfall": "Exigir verbo de movimento no arranjo futuro, opor will e going to sem contexto ou proibir will depois de when também nas perguntas indiretas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Complete no inglês padrão, com simple present no primeiro espaço e present continuous no segundo: Nara usually ____ the studio on Fridays, but this week she ____ at a temporary location. Qual par respeita as formas solicitadas e a concordância?",
        "hint": "Com she, o verbo lexical no simple present afirmativo recebe normalmente -s; o continuous precisa de is seguido de forma em -ing.",
        "options": [
          "manage / is working",
          "manages / are working",
          "manages / is working",
          "does manages / working"
        ],
        "correctIndex": 2,
        "solution": "C atende às duas estruturas: manages concorda com Nara, e is working combina o auxiliar singular com -ing. A usa manage sem -s com sujeito singular no afirmativo simples. B usa are com she, em vez de is. D emprega does manages, quando does pede forma base, e deixa working sem o auxiliar necessário. A resposta se apoia nas formas explicitamente pedidas; usually não constitui proibição universal de aspecto progressivo."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: o grupo concluiu a revisão às 14h; Lia abriu o arquivo às 15h. Qual forma marca explicitamente a revisão como anterior à referência passada por meio de past perfect simples? By the time Lia opened the file, the group ____ the review.",
        "hint": "O enunciado pede uma construção específica de anterioridade: had seguido do particípio. Não basta dizer que qualquer simple past seria impossível em toda narrativa.",
        "options": [
          "had completed",
          "was completing",
          "has completed",
          "had completing"
        ],
        "correctIndex": 0,
        "solution": "A usa had + completed e marca explicitamente a conclusão anterior à abertura passada. B apresenta processo em curso, sem marcar a conclusão anterior pedida. C é present perfect e vincula a situação ao presente, não fornece a construção passada solicitada. D troca o particípio por completing depois de had, sem a estrutura necessária. A escolha não significa que toda narrativa de fatos ordenados exija past perfect; aqui essa forma foi explicitamente solicitada."
      },
      {
        "level": "advanced",
        "prompt": "Duas frases autorais: Do you know when the train ____? I will send a message when it ____. A primeira pergunta indiretamente o horário de chegada futuro; a segunda situa a mensagem na chegada. Qual par respeita essas funções e a concordância no inglês padrão?",
        "hint": "Na pergunta indireta, will é possível e vem depois do sujeito. Na oração temporal com referência futura, procure a forma presente com it.",
        "options": [
          "will arrive / will arrives",
          "will arrives / arrives",
          "arrive will / arrive",
          "will arrive / arrives"
        ],
        "correctIndex": 3,
        "solution": "D completa Do you know when the train will arrive? e I will send a message when it arrives. A primeira oração é pergunta indireta e permite will; a segunda é temporal e usa presente para referência futura. A contém will arrives, com -s indevido depois do modal. B repete esse erro no primeiro espaço. C inverte a ordem esperada na pergunta indireta e usa arrive sem -s com it. Não há proibição geral de will depois de when: a função da oração importa."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Leitura global e localização de informações em espanhol",
    "objective": "Construir uma compreensão global de textos em espanhol, localizar dados com suas condições e distinguir informação explícita, inferência sustentada e conclusão não autorizada.",
    "prerequisites": [
      "Vocabulário de avisos, horários e atividades cotidianas em espanhol",
      "Reconhecimento de negação e de expressões temporais",
      "Noções de autor, leitor e finalidade comunicativa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Visão global: assunto, finalidade e síntese",
        "explanation": "A leitura global busca compreender de que trata o texto e o que ele procura comunicar como conjunto. Antes de traduzir palavra por palavra, observe título, formato e situação: um aviso pode comunicar mudança de atendimento; uma opinião pode defender uma escolha; uma narrativa pode construir uma experiência. Essas pistas orientam uma hipótese, mas não substituem a leitura. Tema é o assunto tratado; finalidade é o que o texto faz nessa situação, como informar uma alteração ou convidar para uma atividade. Uma síntese precisa relacionar os pontos centrais sem transformar um detalhe em assunto único. O título pode ser figurado, interrogativo ou insuficiente; a ideia central não precisa estar na primeira ou na última frase. Termos recorrentes, pronomes e relações entre frases ajudam a acompanhar o conjunto. Nem toda palavra do mesmo campo tem o mesmo significado: préstamo pode indicar empréstimo de livros em um aviso de biblioteca, e devolución indica devolução. Use o contexto para decidir o que precisa consultar. Uma palavra desconhecida que determina condição, prazo ou ação pode exigir atenção imediata; não é preciso ignorá-la em nome de uma suposta leitura rápida obrigatória. Após a primeira passagem, formule uma frase que resuma o texto e confira se ela preserva a informação central. Não há modelo único de organização para todos os textos de uma prova, nem garantia de compreensão apenas por ler começo e fim.",
        "steps": [
          "Observe gênero, título e situação para formular uma hipótese inicial.",
          "Leia o conjunto e identifique assunto e finalidade sem confundi-los.",
          "Relacione informações centrais e detalhes que as especificam.",
          "Confira a síntese contra todo o texto e consulte palavras decisivas."
        ],
        "example": "Aviso autoral hipotético: La biblioteca abrirá también los sábados durante mayo. El préstamo seguirá disponible de lunes a viernes. Consulte el horario de las actividades en recepción. Síntese: o aviso comunica ampliação temporária da abertura e delimita serviços. Abrir aos sábados não informa que todos os serviços funcionarão nesses dias.",
        "pitfall": "Resumir só a primeira frase, presumir que um serviço acompanha todo horário de abertura ou tratar cognatos e palavras do mesmo campo como sinônimos perfeitos."
      },
      {
        "level": "intermediate",
        "title": "Localizar dados sem perder prazo, condição e referente",
        "explanation": "A localização de uma informação começa pelo que a pergunta exige: quem, onde, quando, por qual canal ou sob qual condição. Procure nomes, datas, horários e expressões equivalentes, mas leia a oração completa e o contexto. Uma palavra repetida numa alternativa pode aparecer no texto com outra função. No se admitirán solicitudes fuera de plazo informa uma restrição; retirar no inverte a afirmação. Hasta el viernes pode delimitar um prazo; antes de las ocho exige atenção à anterioridade, não autoriza incluir automaticamente as oito. Diferencie inscrição, participação, divulgação do resultado e atendimento, pois cada ação pode ter datas próprias. Pronomes e expressões como esta actividad ou dicha solicitud precisam ser ligados ao antecedente adequado; proximidade ajuda, mas sentido e concordância também importam. Marcadores como además, sin embargo e por tanto sinalizam relações de acréscimo, contraste e conclusão em contexto; não dispensam verificar o conteúdo relacionado. Uma inferência pode combinar pistas sem estar escrita literalmente, enquanto localizar um horário explicitado exige recuperar o dado informado. Identifique essa diferença no comando da questão. Para conferir uma opção, separe todas as suas partes: sujeito, ação, lugar e condição. Uma alternativa pode acertar o local e errar o dia. A presença de um dado verdadeiro não valida a frase inteira, e ausência de informação não equivale por si à prova do contrário.",
        "steps": [
          "Transforme a pergunta em um alvo preciso de busca.",
          "Localize o trecho e leia negações, limites e condições junto do dado.",
          "Reconstrua referentes e separe datas de ações diferentes.",
          "Confira todas as partes da alternativa e não somente uma palavra coincidente."
        ],
        "example": "Aviso autoral hipotético: La inscripción se realiza por correo hasta el jueves. La entrega de materiales será el sábado en la sala dos. Este servicio no requiere reserva. O canal de inscrição é correo; sábado e sala dos pertencem à entrega. Para interpretar este servicio, examine a ligação com a entrega, sem deslocar automaticamente sua condição para a inscrição.",
        "pitfall": "Transferir horário ou condição de uma ação para outra, omitir a negação ou aceitar uma alternativa parcialmente correta por repetir um nome do aviso."
      },
      {
        "level": "advanced",
        "title": "Integrar informações, vozes e graus de certeza",
        "explanation": "Em textos mais densos, a compreensão global exige integrar informações distribuídas e reconhecer quem sustenta cada posição. Expresões como algunas personas proponen ou según la organización introduzem uma voz que não se confunde automaticamente com a posição do autor. Entretanto, citar alguém também não prova rejeição: é necessário ler o comentário e o desenvolvimento. Uma concessão com aunque pode admitir um ponto e apresentar uma ressalva, sem negar o fato admitido. Es posible que e podría indicam possibilidade; não autorizam converter uma hipótese em resultado garantido. Se o texto diz que uma proposta ainda está em estudo, não se conclui que foi aprovada nem que será rejeitada. Diferencie a evidência interna de uma interpretação e a verificação externa de uma afirmação factual: compreender o que um autor declara não transforma a declaração em verdade comprovada. Na resposta, preserve alcance e modalidade. Algunos participantes não significa todos; por ahora delimita o momento; solo restringe o alcance conforme sua posição. Para avaliar uma síntese, confronte-a com passagens que poderiam desmenti-la. Uma inferência sustentada precisa de pistas e não pode depender de uma pesquisa, decisão ou intenção que o texto não apresenta. Uma alternativa pode combinar uma informação correta com uma consequência inventada. Explique separadamente o que está escrito, o que pode ser inferido e o que continua indeterminado. Essa prática permite ler avisos e argumentações sem transformar conectivos ou conhecimento prévio em autorização para acrescentar dados.",
        "steps": [
          "Marque quem afirma cada informação e qual é o comentário do autor.",
          "Preserve possibilidade, quantidade, condição e recorte temporal.",
          "Integre partes distantes sem inventar decisão, intenção ou causalidade.",
          "Teste cada síntese contra ressalvas e contraexemplos presentes no texto."
        ],
        "example": "Fragmento autoral hipotético: Algunos vecinos proponen abrir el centro los domingos. La dirección estudiará la propuesta, aunque todavía no ha decidido si habrá personal disponible. Es posible que anuncie una respuesta la próxima semana. A proposta existe, mas a decisão e a disponibilidade continuam abertas; a semana seguinte é possibilidade de anúncio, não data garantida de abertura.",
        "pitfall": "Transformar possibilidade em certeza, confundir voz citada com adesão ou rejeição automática e converter concessão em negação do fato concedido."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Aviso autoral hipotético: El taller de reparación comenzará el lunes. Las sesiones combinarán demostraciones y práctica con herramientas. Quienes asistan deberán traer un objeto sencillo para examinarlo en grupo. Qual síntese abrange a informação central?",
        "hint": "Busque uma síntese da atividade anunciada e de seu funcionamento, sem reduzir o aviso a um objeto ou inventar serviço de venda.",
        "options": [
          "Um anúncio de venda de ferramentas sem atividade prática.",
          "O anúncio de uma oficina de reparação com demonstrações, prática e orientação aos participantes.",
          "Uma proibição de examinar objetos durante as sessões.",
          "A suspensão definitiva de todas as oficinas de segunda-feira."
        ],
        "correctIndex": 1,
        "solution": "B sintetiza a oficina anunciada, a combinação de demonstração e prática e a orientação para trazer um objeto. A inventa venda e elimina a prática explicitada. C contradiz a instrução de examinar um objeto em grupo. D inventa suspensão, quando o texto anuncia o início. A síntese precisa integrar as frases, sem transformar um detalhe em tema exclusivo nem extrapolar para outras oficinas."
      },
      {
        "level": "intermediate",
        "prompt": "Aviso autoral hipotético: Las solicitudes se enviarán por correo hasta el miércoles. La lista de participantes se publicará el viernes en la recepción. No se recibirán solicitudes en persona. Segundo o aviso, por qual canal devem ser enviadas as solicitações?",
        "hint": "Separe o envio de solicitações da publicação da lista e leia a proibição de entrega presencial.",
        "options": [
          "Presencialmente, na recepção, na sexta-feira.",
          "Pela publicação da lista na quarta-feira.",
          "Por qualquer canal, pois não há restrição.",
          "Por correio, respeitando o prazo de quarta-feira."
        ],
        "correctIndex": 3,
        "solution": "D recupera o canal por correo e o prazo hasta el miércoles. A transfere recepção e sexta-feira da publicação da lista para o envio, além de contrariar a proibição presencial. B troca ações e datas: a lista será publicada na sexta-feira. C ignora tanto o canal indicado quanto No se recibirán solicitudes en persona. O local da lista não se torna automaticamente local de inscrição."
      },
      {
        "level": "advanced",
        "prompt": "Fragmento autoral hipotético: Algunos lectores piden ampliar el horario del archivo. La coordinación considera útil la propuesta, pero todavía no ha decidido si podrá aplicarla. Podría anunciar una respuesta el próximo mes. Qual conclusão é sustentada?",
        "hint": "Diferencie avaliação favorável, decisão ainda ausente e anúncio apenas possível.",
        "options": [
          "A coordenação avalia favoravelmente a proposta, mas sua aplicação ainda não foi decidida e o anúncio no mês seguinte é possível.",
          "A ampliação já foi aprovada e começará obrigatoriamente no mês seguinte.",
          "Todos os leitores rejeitam a proposta e a coordenação a cancelou.",
          "A proposta foi aplicada, mas uma pesquisa comprovou sua inutilidade."
        ],
        "correctIndex": 0,
        "solution": "A preserva considera útil, todavía no ha decidido e podría: há avaliação favorável, decisão pendente e possibilidade de anúncio. B converte possibilidade em certeza e confunde anúncio de resposta com início da ampliação. C troca algunos por todos, inverte o pedido e inventa cancelamento. D inventa aplicação e pesquisa. O texto não permite concluir que a proposta será necessariamente aprovada ou rejeitada."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Cinemática escalar e vetorial",
    "objective": "Distinguir distância, deslocamento e velocidades, aplicar equações com suas hipóteses e analisar componentes, lançamentos, movimento circular e referenciais em translação, sem confundir módulo com vetor.",
    "prerequisites": [
      "Aritmética básica e álgebra elementar",
      "Noções de vetores: soma, subtração, multiplicação por escalar",
      "Sistema Internacional de Unidades (SI)",
      "Funções do 1º e 2º grau e interpretação gráfica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos da cinemática escalar: posição, deslocamento, velocidade e aceleração",
        "explanation": "A cinemática escalar estuda o movimento de partículas sem investigar suas causas. Na descrição unidimensional, usamos coordenadas e componentes com sinal em um eixo orientado. A posição escalar s é a coordenada do móvel em uma reta orientada, medida a partir de uma origem arbitrária. O deslocamento escalar Δs = s_final - s_inicial indica a variação de posição com sinal: positivo se no sentido da orientação da reta, negativo se contrário. A velocidade média escalar v_m = Δs/Δt fornece a taxa média de variação da posição num intervalo Δt; sua unidade no SI é m/s. A velocidade instantânea é o limite de v_m quando Δt tende a zero, correspondendo à derivada ds/dt. A aceleração média escalar a_m = Δv/Δt mede a taxa média de variação da velocidade; a aceleração instantânea é dv/dt. Em movimento retilíneo uniforme (MRU), a aceleração é nula e a velocidade constante; a posição varia linearmente com o tempo: s = s0 + v·t. Em movimento retilíneo uniformemente variado (MRUV), a aceleração é constante e não nula; as equações horárias são v = v0 + a·t, s = s0 + v0·t + ½·a·t² e v² = v0² + 2·a·Δs. A análise de gráficos s×t, v×t e a×t permite extrair informações: a inclinação da reta tangente ao gráfico s×t dá a velocidade instantânea; a área sob o gráfico v×t corresponde ao deslocamento; a inclinação do gráfico v×t dá a aceleração. É fundamental distinguir distância percorrida (soma dos módulos dos deslocamentos parciais, não negativa) do deslocamento escalar (diferença entre posições final e inicial, com sinal). A rapidez média é a distância percorrida dividida pelo tempo, enquanto a velocidade média com sinal usa deslocamento. As áreas nos gráficos são algébricas: trechos abaixo do eixo contribuem negativamente para o deslocamento. Para distância, somam-se áreas em módulo. As equações com t pressupõem tempo inicial zero; de modo geral, use o intervalo Δt. Modelos por trechos idealizam mudanças instantâneas de velocidade; a transição real exige aceleração durante algum intervalo.",
        "steps": [
          "Identificar a origem e a orientação do eixo de posições para definir s com sinal correto.",
          "Calcular deslocamento como diferença de posições finais e iniciais, mantendo o sinal.",
          "Aplicar equações do MRU (a=0) ou MRUV (a=constante≠0) conforme a aceleração do problema.",
          "Interpretar gráficos: inclinação de s×t = velocidade; área de v×t = deslocamento; inclinação de v×t = aceleração.",
          "Distinguir distância percorrida (sempre ≥0) de deslocamento escalar (pode ser negativo)."
        ],
        "example": "Um carro parte do km 20 de uma estrada orientada no sentido crescente dos quilômetros. Avança até o km 80, retorna até o km 50 e para. Seu deslocamento escalar total é Δs = 50 - 20 = +30 km. A distância total percorrida é (80-20) + |50-80| = 60 + 30 = 90 km.",
        "pitfall": "Confundir distância percorrida com deslocamento escalar; esquecer o sinal do deslocamento ao escolher a orientação do eixo; usar equação do MRU quando há aceleração não nula."
      },
      {
        "level": "intermediate",
        "title": "Cinemática vetorial: vetores posição, deslocamento, velocidade e aceleração; movimento bidimensional",
        "explanation": "Na cinemática vetorial, as grandezas são representadas por vetores em dois ou três dimensões. O vetor posição r(t) = x(t)i + y(t)j + z(t)k localiza a partícula em relação à origem de um sistema de coordenadas cartesianas. O vetor deslocamento Δr = r_final - r_inicial é a diferença vetorial entre as posições final e inicial; sua magnitude é a distância em linha reta entre os dois pontos, e sua direção é a do segmento orientado que liga a posição inicial à final. A velocidade média vetorial v_m = Δr/Δt tem a mesma direção de Δr; a velocidade instantânea v = dr/dt = (dx/dt)i + (dy/dt)j + (dz/dt)k é tangente à trajetória no ponto considerado. A aceleração média a_m = Δv/Δt e a instantânea a = dv/dt = d²r/dt² apontam na direção da variação da velocidade, não necessariamente tangentes à trajetória. No movimento de projéteis (lançamento oblíquo) desprezando a resistência do ar, a aceleração é constante e vertical: a = -g j, com g ≈ 9,8 m/s². As componentes do movimento se desacoplam: no eixo x (horizontal), MRU com v_x = v0_x = v0·cosθ; no eixo y (vertical), MRUV com a_y = -g, v_y = v0·senθ - g·t, y = y0 + v0·senθ·t - ½·g·t². Para mesma altura de lançamento e queda, campo gravitacional uniforme e ausência de resistência do ar, o alcance é R = v0²·sen(2θ)/g. Mantido v0 e para ângulos entre 0° e 90°, seu máximo é v0²/g a 45°. Com alturas diferentes, resolva a equação vertical até o nível de chegada. Para lançamento com componente vertical positiva, a elevação máxima sobre o ponto inicial é H = (v0²·sen²θ)/(2g). O tempo T = 2·v0·senθ/g vale para retorno ao mesmo nível. Com origem horizontal no lançamento, a trajetória é y(x) = y0 + x·tanθ - (g·x²)/(2·v0²·cos²θ), para cosθ diferente de zero. A velocidade em qualquer instante tem componentes v_x constante e v_y variável; seu módulo é v = √(v_x² + v_y²) e para determinar sua direção por componentes, respeite os sinais e o quadrante, não apenas o valor de uma tangente.",
        "steps": [
          "Decompor vetores iniciais (posição, velocidade) em componentes cartesianas x, y (e z se 3D).",
          "Tratar cada componente independentemente: MRU no eixo sem aceleração, MRUV no eixo com aceleração constante.",
          "Recompor vetores resultantes (velocidade, posição) a partir das componentes calculadas.",
          "Calcular parâmetros do lançamento oblíquo: alcance R, altura máxima H, tempo de voo T, equação da trajetória y(x).",
          "Determinar velocidade e aceleração em instantes específicos via derivação ou equações horárias vetoriais."
        ],
        "example": "Uma bola é lançada do solo com velocidade inicial de 20 m/s a 30° acima da horizontal. Componentes: v0_x = 20·cos30° ≈ 17,32 m/s; v0_y = 20·sen30° = 10 m/s. Alcance R = (20²·sen60°)/9,8 ≈ 35,3 m. Altura máxima H = (10²)/(2·9,8) ≈ 5,1 m. Tempo de voo T = 2·10/9,8 ≈ 2,04 s.",
        "pitfall": "Esquecer que a aceleração horizontal é nula (sem resistência do ar); trocar sen por cos nas componentes; usar g = 10 m/s² sem avisar que é aproximação; assumir que velocidade e aceleração têm mesma direção no movimento curvilíneo."
      },
      {
        "level": "advanced",
        "title": "Movimento relativo, movimento circular uniforme e uniformemente variado, aceleração tangencial e normal",
        "explanation": "O movimento relativo exige declarar como os referenciais se relacionam. Para sistemas cartesianos com eixos paralelos, mesma orientação e sem rotação relativa, r = r' + R, onde R localiza a origem móvel no sistema fixo. Derivando no tempo comum da mecânica clássica, v = v' + V e a = a' + A, em que V e A são velocidade e aceleração da origem móvel. Se V é constante, A = 0 e as acelerações coincidem. Essas expressões simples não abrangem eixos em rotação: nesse caso aparecem termos adicionais, que não serão calculados aqui. Não se somam velocidades a acelerações, pois suas unidades diferem. Outro exemplo da importância vetorial é o movimento circular. Em uma circunferência de raio fixo R, a rapidez é u = |ω|R, sendo ω a velocidade angular em radianos por segundo. A velocidade vetorial é tangente à trajetória; u e |ω|R são módulos, não vetores. Mesmo no movimento circular uniforme, com rapidez constante, há mudança de direção da velocidade e aceleração normal para o centro, com módulo a_n = u²/R = ω²R. Se a rapidez varia, também há componente tangencial; com orientação angular escolhida, a componente tangencial com sinal é αR. Para aceleração angular constante, ω = ω0 + αt e θ = θ0 + ω0t + αt²/2, tomando t inicial zero. Componentes tangencial e normal são perpendiculares, de modo que o módulo resultante é a = √(a_t² + a_n²). Em trajetória curva regular mais geral, a componente normal tem módulo u²/ρ, onde ρ é o raio local de curvatura, e a tangencial depende da variação da rapidez. Uma aceleração não precisa apontar no sentido do movimento, e velocidade de módulo constante não significa velocidade vetorial constante.",
        "steps": [
          "Declare eixos paralelos, orientação e ausência de rotação antes de usar a soma simples entre referenciais.",
          "Some componentes de velocidade com velocidade e aceleração com aceleração, mantendo unidades.",
          "No movimento circular, diferencie vetor tangente, rapidez e aceleração normal.",
          "Use equações angulares de aceleração constante somente quando essa hipótese for dada.",
          "Combine componentes perpendiculares pelo teorema de Pitágoras."
        ],
        "example": "Um carro move-se em uma pista circular de raio 50 m. Sua velocidade aumenta uniformemente de 10 m/s para 20 m/s em 5 s. Aceleração tangencial a_t = (20-10)/5 = 2 m/s². No instante em que v = 15 m/s, a_n = 15²/50 = 4,5 m/s². Aceleração resultante a = √(2² + 4,5²) ≈ 4,92 m/s².",
        "pitfall": "Escrever v = ωR como igualdade vetorial, considerar aceleração nula no movimento circular uniforme ou aplicar a soma simples a referenciais com rotação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um móvel move-se ao longo de uma reta orientada. No instante t = 0 s, sua posição é s = +10 m. Move-se com velocidade constante de -4 m/s durante 3 s, depois inverte o sentido e move-se com velocidade constante de +6 m/s durante 2 s. Qual é o deslocamento escalar total Δs e a distância total percorrida d? Considere a inversão instantânea como idealização e despreze a duração da transição.",
        "hint": "Calcule o deslocamento em cada trecho com sinal e some algebricamente; a distância é a soma dos módulos.",
        "solution": "No primeiro trecho, Δs1 = -4·3 = -12 m; no segundo, Δs2 = 6·2 = +12 m. O deslocamento total é 0 m e a distância é |-12| + |12| = 24 m, portanto A. B troca deslocamento por distância, tornando esta nula apesar do percurso. C registra somente o primeiro trecho. D fornece +12 m e 12 m, que correspondem ao segundo trecho, não ao movimento inteiro. A troca instantânea de velocidade é uma idealização por trechos.",
        "options": [
          "Δs = 0 m; d = 24 m",
          "Δs = 24 m; d = 0 m",
          "Δs = -12 m; d = 12 m",
          "Δs = 12 m; d = 12 m"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Um projétil é lançado do topo de um edifício de altura 45 m com velocidade inicial de 30 m/s formando ângulo de 37° acima da horizontal (sen 37° = 0,6; cos 37° = 0,8). Adotando g = 10 m/s² e desprezando a resistência do ar, qual é o alcance horizontal do projétil até atingir o solo? Considere solo horizontal, gravidade uniforme e a aproximação numérica final ao metro mais próximo.",
        "hint": "Ache o tempo de voo resolvendo a equação horária vertical y(t) = 0 com y0 = 45 m; depois use x = v0_x·t.",
        "solution": "As componentes são v0x = 30·0,8 = 24 m/s e v0y = 30·0,6 = 18 m/s. Com origem vertical no solo, 45 + 18t - 5t² = 0; a raiz positiva é t = (18 + √1224)/10 ≈ 5,299 s. Logo o deslocamento horizontal é 24t ≈ 127,2 m, arredondado a 127 m: A. B, 86 m, aproxima o resultado de usar indevidamente o tempo simétrico 3,6 s do retorno à altura inicial. C, 72 m, e D, 144 m, não satisfazem o impacto: com vx = 24 m/s corresponderiam a 3 s e 6 s, quando y seria 54 m e -27 m, respectivamente. Não se atribui a esses distratores uma origem de cálculo que não produza seus valores.",
        "options": [
          "127 m",
          "86 m",
          "72 m",
          "144 m"
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Considere eixos paralelos e sem rotação relativa, com mesma orientação e o tempo comum da mecânica clássica. Um referencial S' move-se com velocidade vetorial constante v_S'S = (4 i + 3 j) m/s em relação a um referencial inercial S. No referencial S', uma partícula tem velocidade vetorial v' = (2 i - 5 j) m/s e aceleração vetorial a' = (1 i + 2 j) m/s². Qual é a aceleração vetorial a da partícula medida no referencial S?",
        "hint": "Referencial S' move-se com velocidade constante em relação a S inercial → sua aceleração é nula. Use a transformação de Galileu para aceleração.",
        "solution": "A origem de S' tem velocidade constante, portanto aceleração A = 0. Para os eixos paralelos sem rotação indicados, a = a' + A = (1 i + 2 j) m/s²: A. B e C apresentam componentes diferentes de (1,2), sem aceleração da origem ou rotação que sustente a diferença. D repete os números (4,3) da velocidade da origem, mas com unidade de aceleração: esses números não definem sua derivada, que é zero. A velocidade da partícula, fornecida no enunciado, não precisa ser somada à aceleração.",
        "options": [
          "(1 i + 2 j) m/s²",
          "(5 i - 2 j) m/s²",
          "(3 i - 3 j) m/s²",
          "(4 i + 3 j) m/s²"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Matéria, transformações e separação de misturas",
    "objective": "Compreender a classificação da matéria, diferenciar transformações físicas e químicas, e aplicar métodos de separação de misturas homogêneas e heterogêneas com base nas propriedades físicas dos componentes.",
    "prerequisites": [
      "Conceito de átomo, molécula e íon",
      "Noções de propriedades físicas e químicas",
      "Unidades de medida do SI (massa, volume, temperatura)",
      "Razão, porcentagem em massa e balanço de massas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Composição, fases e transformações da matéria",
        "explanation": "Uma substância pura tem composição química definida; uma mistura reúne componentes em proporções que podem variar. Uniformidade visual não prova pureza: uma solução de sal em água pode parecer uniforme e conter mais de uma substância. Homogênea descreve uma única fase no nível de observação considerado; heterogênea apresenta mais de uma. Fase não equivale a substância: água líquida e gelo podem formar duas fases de uma mesma substância. Alguns sistemas exigem instrumentos para reconhecer sua heterogeneidade. Substância simples contém um elemento químico, como O₂; composta contém mais de um, como H₂O. Essa classificação não é a mesma que mistura homogênea ou heterogênea. Uma transformação física conserva a identidade química dos componentes considerados, como na fusão do gelo. Uma transformação química envolve formação de novas espécies. Bolhas, cor ou temperatura podem ser indícios, mas isoladamente não demonstram reação: água em ebulição forma vapor sem criar uma nova substância, e dissolver um material pode alterar a temperatura. A conservação da massa, no tratamento químico usual, exige contabilizar todos os materiais. Em recipiente aberto, gases podem sair ou entrar, modificando a massa medida sem violar a conservação. A diferença entre massa inicial e frações recuperadas é um déficit de recuperação; sem outros dados, não revela se houve erro de medida, material retido, volatilização ou outra causa. Não se deve diagnosticar impureza ou reação apenas por esse valor.",
        "steps": [
          "Diferencie composição química de aparência e número de fases.",
          "Verifique se a transformação preserva ou altera a identidade das substâncias.",
          "Trate sinais observáveis como pistas a investigar, não provas isoladas.",
          "Defina o sistema e contabilize entradas, saídas e frações recuperadas."
        ],
        "example": "Exemplo autoral: 40 g de gelo puro em um recipiente fechado fundem completamente, sem perda de material. A massa de água permanece 40 g e a mudança é física. Se uma solução transparente também estivesse presente, transparência não permitiria concluir que todo o conteúdo fosse uma substância pura.",
        "pitfall": "Contar fases como se fossem substâncias, usar bolhas como prova suficiente de reação ou atribuir causa específica a uma diferença de massa não investigada."
      },
      {
        "level": "intermediate",
        "title": "Escolher uma sequência pelo componente que se deseja recuperar",
        "explanation": "Métodos de separação exploram diferenças entre propriedades dos componentes e precisam de um objetivo: recuperar um sólido, um líquido ou ambos. Peneiração seleciona tamanhos em relação à malha; separação magnética pode retirar limalha de ferro de componentes que não respondem da mesma forma ao ímã. Adicionar água pode dissolver seletivamente um sal enquanto areia permanece insolúvel nas condições dadas. Uma filtração comum retém a areia suspensa e deixa passar a solução salina; não retém o sal dissolvido apenas por ser sal. Sedimentação e decantação podem separar fases quando há separação suficiente, e centrifugação pode acelerar a separação de partículas suspensas. Densidade, tamanho, meio e tempo influenciam o resultado; não basta comparar apenas o peso de duas amostras. Líquidos imiscíveis, já em fases separadas, podem ser separados por decantação com equipamento apropriado. Para recuperar um soluto não volátil, evaporação pode remover o solvente, mas não o recolhe necessariamente. Se também se deseja recuperar a água, a destilação com condensação permite coletá-la, sob hipóteses adequadas. A ordem pode admitir mais de uma sequência válida; chamar uma de mais eficiente exige critério e dados. Cada etapa deve indicar qual fração é retida, qual segue adiante e quais perdas são possíveis. A aparência da fração recuperada não certifica sua pureza. Os exemplos são modelos de raciocínio, não instruções para aquecer recipientes fechados ou manipular solventes perigosos.",
        "steps": [
          "Liste propriedades relevantes e o que deve ser recuperado ao final.",
          "Escolha uma operação seletiva e acompanhe o destino de cada componente.",
          "Diferencie sólido suspenso de soluto dissolvido antes de propor filtração.",
          "Inclua condensação se a recuperação do solvente também fizer parte do objetivo."
        ],
        "example": "Mistura autoral idealizada de ferro, areia e sal: o ímã retira ferro; água dissolve sal; filtração retém areia; destilação da solução permite recolher água e deixar sal no resíduo. Secagem e verificação de pureza são etapas distintas. O modelo não garante recuperação quantitativa em um procedimento real.",
        "pitfall": "Filtrar sal dissolvido como se fosse sólido suspenso, evaporar solvente quando se pretende recolhê-lo ou declarar ótima uma ordem sem critério de comparação."
      },
      {
        "level": "advanced",
        "title": "Volatilidade, limites de separação e balanço quantitativo",
        "explanation": "Na destilação, uma fração vaporiza e depois condensa; o vapor pode ter composição diferente da fase líquida. Para uma solução de água e sal não volátil, o modelo ideal recolhe água e mantém sal no resíduo, desprezando arraste e perdas. Com dois líquidos voláteis miscíveis, não se deve supor que o primeiro destilado seja automaticamente um componente puro. A coluna de fracionamento promove etapas de contato entre vapor e líquido e pode melhorar a separação. Não existe um limite universal de 80 °C de diferença entre pontos de ebulição que decida sozinho o método: composição, pressão, equilíbrio líquido-vapor e pureza desejada importam. Misturas azeotrópicas impõem limites à destilação convencional em dada pressão; uma coluna não garante pureza total em qualquer mistura. Reduzir pressão pode diminuir temperaturas de ebulição, mas não prova que uma separação seja possível ou que todo componente seja estável nas condições adotadas. A extração depende da distribuição em fases apropriadas e das propriedades dos componentes, não somente do rótulo polar. Cromatografia depende de interações distintas com fases móvel e estacionária e pode servir a análise ou separação preparativa conforme a técnica. Membranas também diferem: ultrafiltração não deve ser equiparada à remoção de sais dissolvidos por osmose reversa. Para um balanço ideal, massa inicial é igual à soma das frações finais. A porcentagem em massa do soluto usa a massa da solução remanescente, não a massa inicial depois que parte do solvente saiu. Esse cálculo exige explicitar ausência de arraste, reação, perda de soluto e precipitação quando se fala em solução final.",
        "steps": [
          "Identifique quais componentes são voláteis e quais hipóteses o modelo usa.",
          "Considere equilíbrio, pressão e objetivo sem aplicar um corte universal de temperatura.",
          "Declare limites de pureza e não confunda técnicas de membrana.",
          "Faça o balanço de soluto e solvente e use a massa final no denominador."
        ],
        "example": "Exemplo autoral idealizado: uma solução de 100 g contém 10 g de sal não volátil. Recolhem-se 50 g de água pura por destilação, sem outras perdas. Restam 50 g, contendo os mesmos 10 g de sal: 20% m/m. Isso descreve solução somente se a quantidade de sal puder permanecer dissolvida na temperatura final indicada pelo modelo.",
        "pitfall": "Garantir pureza pelo ponto de ebulição, tratar ultrafiltração como dessalinização universal ou manter o denominador inicial após retirar solvente."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma amostra de 150 g de uma mistura de areia e cloreto de sódio é processada. Recuperam-se 90 g de areia seca e 55 g de cloreto de sódio seco. Considerando apenas esses dados, qual é o déficit de recuperação e o que se pode concluir sobre sua causa?",
        "hint": "Subtraia as massas recuperadas da inicial e separe o cálculo da investigação da causa.",
        "options": [
          "0 g; não houve diferença de massa.",
          "10 g; houve necessariamente reação química.",
          "5 g; os dados não identificam a causa da diferença.",
          "15 g; a diferença prova evaporação do sal."
        ],
        "correctIndex": 2,
        "solution": "C: 150 - (90 + 55) = 5 g não foram contabilizados nas frações recuperadas. O enunciado não distingue material retido, perda na manipulação, erro de medida ou outra causa. A erra a diferença. B e D erram o valor e acrescentam causas não demonstradas. O déficit de recuperação não indica desaparecimento de matéria nem permite afirmar, sozinho, presença de impurezas voláteis."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo idealizado: uma mistura contém limalha de ferro atraída por ímã, areia insolúvel em água e sal solúvel não volátil. Deseja-se separar o ferro, reter a areia e também recolher a água usada para dissolver o sal. Qual sequência atende a esses objetivos?",
        "hint": "Acompanhe ferro, areia, sal dissolvido e água; recuperar água requer recolher vapor condensado, não somente deixá-lo escapar.",
        "options": [
          "Filtração seca, seguida de peneiração do sal dissolvido.",
          "Ímã; adição de água; filtração; destilação da solução com coleta do condensado.",
          "Adição de água e filtração comum, que retém todo o sal dissolvido.",
          "Evaporação com liberação do vapor, sem condensação, para recolher a água."
        ],
        "correctIndex": 1,
        "solution": "B retira ferro por magnetismo, dissolve sal, retém areia por filtração e recolhe água por destilação com condensação. A não oferece uma sequência capaz de separar o sal dissolvido por peneiração. C atribui à filtração comum retenção de soluto dissolvido. D libera o vapor e, sem coleta por condensação, não atende ao objetivo de recolher a água. A resposta vale para as propriedades e idealizações informadas, sem garantir rendimento de um experimento real."
      },
      {
        "level": "advanced",
        "prompt": "Uma solução idealizada de 200 g contém 20 g de sal não volátil. São recolhidos 80 g de água pura por destilação. Não há arraste, reação nem outras perdas, e todo o sal permanece dissolvido na temperatura final. Qual é a massa do resíduo e sua porcentagem em massa de sal, com uma casa decimal?",
        "hint": "O sal permanece no resíduo; subtraia a água recolhida da massa inicial antes de calcular a porcentagem.",
        "options": [
          "120 g de resíduo com 10,0% m/m de sal.",
          "200 g de resíduo com 16,7% m/m de sal.",
          "80 g de resíduo com 25,0% m/m de sal.",
          "120 g de resíduo com 16,7% m/m de sal."
        ],
        "correctIndex": 3,
        "solution": "D: a massa do resíduo é 200 - 80 = 120 g. Permanecem 20 g de sal e 100 g de água; a porcentagem é 100·20/120 ≈ 16,7% m/m. A mantém a porcentagem inicial de 10%, ignorando a retirada de solvente. B não subtrai a água recolhida da massa total. C usa os 80 g do destilado como se fossem o resíduo e calcula 20/80. O resultado depende das hipóteses de sal não volátil, ausência de arraste e permanência em solução explicitadas."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Células, organelas e membranas",
    "objective": "Relacionar organização celular, funções de organelas e permeabilidade de membranas, interpretando transporte e tráfego secretor com hipóteses explícitas e sem extrapolações clínicas.",
    "prerequisites": [
      "Noções de moléculas, íons e polaridade",
      "Diferença entre concentração e quantidade de soluto",
      "Razão, porcentagem e proporcionalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Organização celular e divisão de funções",
        "explanation": "A célula integra estruturas que mantêm trocas, transformação de energia e produção de moléculas. O modelo celular geral inclui membrana plasmática, citoplasma, material genético e ribossomos; células especializadas podem perder componentes durante sua diferenciação, como hemácias maduras de mamíferos. Procariontes, como bactérias e arqueas, não apresentam núcleo envolvido por membrana nuclear; seu DNA cromossômico ocupa a região do nucleoide. Isso não significa ausência de organização interna ou de membrana plasmática. Eucariontes apresentam compartimentalização membranosa e, no modelo geral, núcleo delimitado por envoltório. Tamanho isolado não define o grupo. Ribossomos sintetizam proteínas e não são compartimentos delimitados por membrana. Mitocôndrias participam da respiração celular aeróbia e da produção de ATP, mas nem todo ATP celular é produzido nelas; a glicólise ocorre no citosol. Células vegetais também têm mitocôndrias. Cloroplastos realizam fotossíntese em células que os possuem, mas não estão em todas as células de uma planta, como muitas células de raízes. Retículo rugoso, Golgi e vesículas participam de uma rota de proteínas secretadas; retículo liso participa, entre outras funções, da síntese de lipídios. Lisossomos e vacúolos líticos atuam na degradação em compartimentos apropriados. Peroxissomos realizam reações oxidativas e contêm enzimas que lidam com peróxido de hidrogênio. Uma organela pode ter várias funções, e uma função pode envolver várias estruturas. Desenhos são modelos: não se deve supor que toda célula possua exatamente todas as estruturas desenhadas.",
        "steps": [
          "Identifique núcleo delimitado e organização, sem classificar só pelo tamanho.",
          "Diferencie ribossomos de compartimentos membranosos.",
          "Relacione funções a estruturas sem impor exclusividade indevida.",
          "Considere tipo celular e diferenciação ao interpretar um modelo geral."
        ],
        "example": "Situação autoral: uma célula de folha pode conter cloroplastos e mitocôndrias, realizando fotossíntese e respiração. Uma célula de raiz sem cloroplastos pode respirar usando mitocôndrias e matéria orgânica recebida de outros tecidos. Não se infere ausência de respiração pela presença de fotossíntese.",
        "pitfall": "Afirmar que vegetais não respiram, que todo ATP nasce na mitocôndria ou que qualquer célula deve manter todos os componentes do modelo geral."
      },
      {
        "level": "intermediate",
        "title": "Membrana seletiva, transporte e osmose",
        "explanation": "A membrana plasmática tem uma estrutura lipídica com proteínas associadas e seleciona trocas conforme propriedades da substância e das vias disponíveis. Uma molécula atravessar por difusão simples não significa que todas atravessem com igual facilidade. Difusão facilitada usa canais ou transportadores e é passiva quando o fluxo líquido ocorre a favor do gradiente pertinente. Para íons, concentração e diferença de potencial elétrico compõem o gradiente eletroquímico; observar apenas concentração pode levar a uma conclusão errada. Transporte ativo move um componente contra seu gradiente com acoplamento energético. No transporte ativo primário, pode haver hidrólise direta de ATP; no secundário, um gradiente previamente estabelecido sustenta o movimento acoplado de outro soluto. Não se deve dizer que transporte secundário é sem custo energético apenas porque o cotransportador não hidrolisa ATP diretamente. Osmose é movimento líquido de água através de membrana seletivamente permeável. No modelo de mesma temperatura, sem diferença inicial relevante de pressão e com solutos impermeantes, água tende a entrar no lado mais concentrado em partículas osmoticamente ativas. Em células, tonicidade depende de permeabilidade e duração da observação, não somente da concentração total de qualquer soluto. Meio hipertônico pode causar perda de água; hipotônico pode aumentar volume, mas isso não garante lise de toda célula em qualquer condição. Parede celular e pressão de turgor alteram a resposta vegetal. Se um modelo conserva a quantidade de soluto impermeante e despreza pressão, a concentração muda inversamente com o volume aquoso; essa simplificação não é previsão universal para uma célula viva regulada.",
        "steps": [
          "Identifique permeabilidade e o gradiente pertinente a cada substância.",
          "Separe fluxo passivo de transporte acoplado a energia.",
          "Na osmose, explicite solutos impermeantes, pressão e condições de observação.",
          "Use conservação de soluto somente quando o modelo a permite."
        ],
        "example": "Modelo autoral: uma bolsa flexível contém soluto impermeante a 200 mOsm/L e está em grande reservatório a 250 mOsm/L, com mesma temperatura, sem pressão oposta relevante e permeabilidade apenas à água. A bolsa perde água; ao equilibrar concentrações no modelo, Vfinal/Vinicial = 200/250 = 0,8. Isso não demonstra crenação específica ou doença.",
        "pitfall": "Chamar transporte secundário de energeticamente gratuito, reduzir gradiente iônico à concentração ou prever lise obrigatória apenas pelo rótulo hipotônico."
      },
      {
        "level": "advanced",
        "title": "Rota secretora, compartimentos e limites de inferência",
        "explanation": "Uma proteína destinada à secreção pela rota convencional começa a ser traduzida em ribossomo que pode ser direcionado ao retículo endoplasmático por sinais da cadeia nascente e maquinaria de reconhecimento. A proteína entra no lúmen do retículo ou é inserida em sua membrana, conforme suas características. O retículo participa de dobramento e controle de qualidade; não basta produzir uma cadeia para garantir função ou destino correto. Cargas seguem para o Golgi, onde podem ser modificadas e encaminhadas, e vesículas secretoras podem fundir-se com a membrana plasmática. O conteúdo luminal de uma vesícula secretora é liberado ao exterior na exocitose, enquanto sua membrana se incorpora à membrana plasmática. Uma proteína transmembrana mantém relações topológicas ao longo dessa rota: um domínio voltado ao lúmen do retículo pode terminar voltado ao meio extracelular. Nem toda proteína celular passa pelo retículo e Golgi: muitas proteínas citosólicas permanecem fora dessa rota e muitas proteínas mitocondriais são importadas por outras vias. Mitocôndrias e cloroplastos não são simplesmente etapas do tráfego vesicular secretor. Alterar o transporte pode provocar acúmulo em um compartimento ou redução de secreção, mas um resultado isolado não identifica automaticamente o mecanismo molecular, a mutação ou uma doença. Em experimento, é preciso controlar síntese, viabilidade celular, tempo e especificidade do tratamento. Marcadores e imagens indicam localização dentro dos limites de resolução e método; colocalização aparente não prova ligação molecular direta. A leitura de um resultado deve separar observação, hipótese e teste necessário para distinguir explicações alternativas.",
        "steps": [
          "Identifique se a proteína pertence à rota secretora convencional.",
          "Acompanhe retículo, Golgi, vesícula e membrana mantendo a orientação dos domínios.",
          "Distinga conteúdo luminal de proteína inserida na membrana.",
          "Separe acúmulo observado de causa molecular e proponha controles adequados."
        ],
        "example": "Modelo autoral: uma proteína secretada marcada aparece primeiro no retículo, depois no Golgi e mais tarde no meio externo. O padrão temporal é compatível com a rota convencional. Se um tratamento aumenta a marca no Golgi, isso pode motivar investigar a saída desse compartimento, sem provar sozinho que uma única proteína de revestimento foi inibida.",
        "pitfall": "Enviar toda proteína pelo Golgi, confundir lúmen com citosol ou transformar acúmulo observado em diagnóstico molecular sem controles."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Situação autoral: uma célula vegetal de raiz não apresenta cloroplastos observáveis, mas contém mitocôndrias e ribossomos. Qual conclusão é compatível com essa descrição?",
        "hint": "Ausência de cloroplasto não equivale a ausência de respiração; ribossomos e mitocôndrias têm funções diferentes.",
        "options": [
          "Ela pode realizar respiração mitocondrial e síntese de proteínas, embora não realize fotossíntese por cloroplastos nessa condição.",
          "Ela não pode sintetizar proteínas porque somente cloroplastos fazem essa síntese.",
          "A presença de mitocôndrias prova que a célula é animal.",
          "A ausência de cloroplastos prova que a célula não possui membrana plasmática."
        ],
        "correctIndex": 0,
        "solution": "A distingue funções: mitocôndrias são compatíveis com respiração e ribossomos com síntese proteica, sem exigir cloroplastos na célula de raiz. B atribui exclusividade falsa aos cloroplastos e ignora ribossomos. C erra porque vegetais também possuem mitocôndrias. D não relaciona a ausência de cloroplasto à organização da membrana plasmática. A descrição não determina todas as taxas metabólicas nem a viabilidade em qualquer meio."
      },
      {
        "level": "intermediate",
        "prompt": "Uma bolsa idealizada tem volume aquoso inicial de 12 mL e concentração de soluto impermeante de 300 mOsm/L. Está em grande reservatório a 400 mOsm/L. Apenas água atravessa; despreze pressão oposta, mudança de temperatura e regulação. Qual é seu volume final quando as concentrações se igualam nesse modelo?",
        "hint": "Conserve a quantidade de soluto: concentração inicial vezes volume inicial é igual à concentração final vezes volume final.",
        "options": [
          "16 mL, pois a bolsa necessariamente recebe água.",
          "12 mL, pois água não pode atravessar uma membrana seletiva.",
          "9 mL, com perda líquida de água.",
          "3 mL, pois a diferença de volumes é o volume final."
        ],
        "correctIndex": 2,
        "solution": "C: 300·12 = 400·Vfinal, portanto Vfinal = 9 mL. A bolsa perde 3 mL de água no modelo e conserva a quantidade de soluto. A inverte a direção e a razão. B contraria a permeabilidade à água explicitada. D confunde os 3 mL perdidos com o volume remanescente. Esse cálculo usa as hipóteses do modelo; não descreve automaticamente toda célula viva nem prova lise ou crenação de um tipo celular."
      },
      {
        "level": "advanced",
        "prompt": "Proteína transmembrana autoral hipotética segue a rota convencional do retículo ao Golgi e depois à membrana plasmática. Um domínio está voltado ao lúmen do retículo, e sua orientação é preservada no transporte e na fusão. Onde esse domínio ficará após a exocitose?",
        "hint": "O lúmen da vesícula se comunica com o exterior na fusão; não se transforma em citosol.",
        "options": [
          "Obrigatoriamente dentro da matriz mitocondrial.",
          "Voltado ao meio extracelular.",
          "Voltado ao citosol porque toda membrana se inverte na fusão.",
          "Dentro do núcleo porque toda proteína transmembrana passa por ele."
        ],
        "correctIndex": 1,
        "solution": "B: o domínio luminal permanece voltado ao interior dos compartimentos da rota e torna-se extracelular quando a vesícula funde com a membrana plasmática. A introduz um destino mitocondrial que não pertence à rota informada. C exige inversão que contradiz a preservação de orientação indicada e o modelo de fusão. D inventa passagem nuclear obrigatória. A resposta trata da topologia do domínio, não afirma uma função clínica ou estabilidade específica da proteína."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Antiguidade oriental e clássica",
    "objective": "Comparar formas de poder, trabalho, participação e legitimação na Mesopotâmia, no Egito, nas poleis gregas e em Roma, situando diferenças no tempo e interpretando fontes sem modelos universais ou anacronismos.",
    "prerequisites": [
      "Localização do Nilo, Tigre, Eufrates e Mediterrâneo",
      "Leitura de datas a.C. e d.C.",
      "Noções de fonte histórica, cidadania e hierarquia social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Mesopotâmia e Egito: diversidade, trabalho e poder",
        "explanation": "Antiguidade oriental é um recorte didático convencional, não uma civilização única nem uma etapa inferior que levaria inevitavelmente à Grécia. Mesopotâmia designa uma região associada ao Tigre e Eufrates, na qual se sucederam e interagiram diferentes povos e formas políticas. Cidades como Uruk e reinos e impérios de maior extensão não podem ser reduzidos a um único modelo permanente de cidade-Estado. Agricultura, redes de troca, templos, palácios e formas de trabalho sustentaram sociedades desiguais. Rios ofereciam recursos e exigiam decisões sobre uso e organização, mas a geografia não determina sozinha um regime político. A escrita cuneiforme registrou atividades administrativas, tradições religiosas e outros gêneros; não se limitava a leis. A coleção de decisões associada a Hamurabi, rei da Babilônia no século XVIII a.C., permite estudar direito, hierarquia e representação régia. Não deve ser tratada como o primeiro texto legal da humanidade nem como código moderno de igualdade jurídica. No Egito, o Nilo, a produção agrícola e a administração se articularam à formação e manutenção do poder régio, com períodos de centralização e fragmentação. A realeza era ligada à ordem religiosa e à maat, mas reconhecer a sacralidade do cargo não exige afirmar que egípcios desconhecessem a mortalidade do governante. Também existiram mudanças dinásticas, conflitos e contatos externos. A oposição simples entre Egito sempre unido e Mesopotâmia sempre fragmentada apaga transformações de ambos. Compare lugar, período, trabalho, autoridade e fonte disponível, sem supor que todo habitante compartilhava a posição oficial dos governantes.",
        "steps": [
          "Localize sociedades e períodos sem fundir milênios em um único regime.",
          "Relacione recursos, trabalho e administração sem determinismo geográfico.",
          "Interprete escrita e monumentos como fontes situadas, inclusive de legitimação.",
          "Compare centralização e fragmentação reconhecendo mudanças em ambos os espaços."
        ],
        "example": "Comparação autoral de fontes: um registro administrativo pode ajudar a investigar distribuição de produtos; uma inscrição régia pode apresentar o governante como guardião da ordem. O segundo documento não prova que toda a população aprovasse o rei. Ambos exigem perguntas sobre produção, finalidade e contexto.",
        "pitfall": "Tratar Hamurabi como código moderno igualitário, deduzir poder absoluto apenas da irrigação ou opor rei egípcio imortal a todo governante mesopotâmico apenas humano."
      },
      {
        "level": "intermediate",
        "title": "Grécia: polis e participação política com exclusões",
        "explanation": "As poleis gregas eram comunidades políticas distintas, com território, instituições e relações de conflito e cooperação. Compartilhar práticas culturais e religiosas não significava formar um Estado nacional grego unificado. Atenas e Esparta são casos importantes, mas não resumem todas as experiências do mundo grego. A democracia ateniense foi construída por transformações históricas; no período clássico, cidadãos homens adultos podiam participar diretamente da assembleia, enquanto muitas funções eram preenchidas por sorteio e outras por eleição. Não se deve dizer que todo cargo era sorteado ou que todas as regras ficaram iguais por séculos. A lei de cidadania de Péricles, de 451/450 a.C., exigia ascendência ateniense de pai e mãe para o pertencimento cívico correspondente; direitos políticos não eram estendidos a toda a população residente. Mulheres, pessoas escravizadas e estrangeiros residentes estavam excluídos dessa participação na assembleia, embora isso não significasse ausência de atuação social, econômica ou religiosa. A democracia direta entre cidadãos coexistia com escravidão e dominação externa. Em Esparta, instituições como dupla realeza, conselho de anciãos, éforos e assembleia organizavam o poder dos espartíatas. A exploração dos hilotas sustentava essa organização; eles não eram cidadãos plenos. Uma imagem de igualdade perfeita entre todos os moradores confunde o grupo dominante com a sociedade inteira. A comparação deve perguntar quem decide, como se ocupa um cargo e quem trabalha sem os mesmos direitos. Não transforme Atenas em sociedade inteiramente aberta nem Esparta em comunidade sem conflitos e mudanças. Guerras, alianças, intercâmbios e a expansão macedônica modificaram o mundo das poleis, sem apagar imediatamente suas instituições ou diferenças locais.",
        "steps": [
          "Defina polis sem confundi-la com país moderno ou simples área urbana.",
          "Separe participação direta, sorteio e eleição em instituições concretas.",
          "Identifique grupos excluídos e diferenças entre direitos políticos e vida social.",
          "Compare Atenas e Esparta sem converter o grupo cidadão em toda a população."
        ],
        "example": "Comparação autoral: dizer que uma decisão era submetida à assembleia de cidadãos não informa que mulheres, estrangeiros residentes ou escravizados votassem. Uma pesquisa sobre trabalho em Atenas precisa incluir esses grupos, mesmo quando a fonte institucional se concentra nos cidadãos. O recorte da fonte não define toda a sociedade.",
        "pitfall": "Equiparar democracia ateniense a sufrágio universal, entender exclusão política como inexistência de agência social ou tomar espartíatas e hilotas como o mesmo grupo jurídico."
      },
      {
        "level": "advanced",
        "title": "Roma: república, expansão e concentração imperial",
        "explanation": "A história romana abrange mudanças longas e disputadas. Datas tradicionais para a fundação e a passagem da monarquia à república devem ser reconhecidas como marcos transmitidos por tradições posteriores, não como acontecimentos documentados com a mesma segurança em todos os detalhes. Na república, magistraturas, Senado e assembleias compunham uma organização desigual de poder. Colegialidade e duração limitada de muitas magistraturas não eliminavam a influência das elites; tampouco transformavam o Senado em parlamento moderno. Conflitos entre grupos patrícios e plebeus produziram mudanças institucionais e jurídicas, mas plebeus não formavam uma classe de renda única. A expansão romana sobre o Mediterrâneo articulou conquista, tributos, escravização, circulação e disputas por recursos. Seus efeitos variaram entre regiões e grupos; não há uma causa isolada que explique a crise republicana. Competição aristocrática, violência política, comandos militares e guerras civis contribuíram para transformações no poder. Após essas disputas, Augusto concentrou autoridade e comando militar mantendo instituições e linguagem republicanas. O Principado não equivale nem a continuidade sem mudança nem a abolição instantânea de toda magistratura. A permanência do nome de uma instituição não garante manutenção de sua força política anterior. Cidadania também mudou de alcance ao longo da história romana e não deve ser projetada como direito igual de todos desde a fundação. Mesmo sua ampliação não eliminou escravidão, diferenças sociais ou desigualdades de gênero. Para estudar legados jurídicos e políticos, compare contextos: influências posteriores não tornam o direito antigo idêntico ao atual, nem autorizam narrar Grécia e Roma como únicos produtores de cultura ou como destinos inevitáveis da história de outras sociedades.",
        "steps": [
          "Diferencie marcos tradicionais, evidências e interpretações sobre os primeiros períodos.",
          "Relacione instituições republicanas a disputas sociais sem analogia direta com parlamentos atuais.",
          "Analise expansão e crise com múltiplos processos e grupos envolvidos.",
          "Compare permanência institucional e mudança efetiva de poder no Principado.",
          "Discuta legados sem supor identidade entre cidadania antiga e direitos atuais."
        ],
        "example": "Análise autoral: um texto de legitimação pode afirmar restauração de instituições enquanto práticas de comando revelam concentração de autoridade. Para estudar Augusto, confronte a linguagem republicana com a posição militar e política do governante, sem concluir apenas pelo nome Senado que a distribuição de poder permaneceu igual.",
        "pitfall": "Chamar o Senado de parlamento moderno, reduzir plebeus a uma classe homogênea ou deduzir continuidade de poder pela permanência dos nomes das instituições."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma comparação entre Mesopotâmia e Egito considera diferentes períodos, registros administrativos e inscrições régias. Qual procedimento evita uma generalização indevida?",
        "hint": "Os dois espaços passaram por mudanças políticas; fontes de governantes apresentam perspectivas situadas.",
        "options": [
          "Presumir que o Egito sempre foi unido e toda a Mesopotâmia permaneceu dividida.",
          "Concluir que a irrigação determina automaticamente o mesmo regime em qualquer sociedade.",
          "Usar a inscrição régia como prova de aprovação unânime do governante.",
          "Comparar períodos e tipos de fonte, reconhecendo mudanças políticas e finalidades dos registros."
        ],
        "correctIndex": 3,
        "solution": "D permite comparar sem transformar uma fase em regra de toda a história e sem confundir representação régia com opinião universal. A apaga fragmentações egípcias e unificações mesopotâmicas. B impõe determinismo geográfico sem considerar decisões e conflitos sociais. C toma legitimação por consenso comprovado. A escolha exige contextualização histórica, não nega que rios, escrita e poder estejam relacionados."
      },
      {
        "level": "intermediate",
        "prompt": "Ao estudar Atenas clássica, uma turma observa participação direta de cidadãos homens na assembleia e exclusão de mulheres, escravizados e estrangeiros residentes desse direito. Qual interpretação é adequada?",
        "hint": "Diferencie a forma de decisão dentro do corpo cidadão do alcance da cidadania sobre os moradores.",
        "options": [
          "A participação direta comprova sufrágio universal de todos os residentes.",
          "A democracia direta de cidadãos coexistia com exclusões; ausência de voto não implica inexistência de atuação social dos excluídos.",
          "Os grupos sem participação na assembleia não realizavam qualquer atividade econômica ou religiosa.",
          "Toda instituição ateniense era preenchida por eleição, sem sorteio."
        ],
        "correctIndex": 1,
        "solution": "B preserva participação direta e restrição de direitos, sem apagar a agência dos grupos excluídos. A confunde corpo cidadão com todos os residentes. C transforma exclusão política em ausência de vida social, econômica e religiosa, o que não decorre da informação. D generaliza um método único de escolha e contraria a coexistência de eleição e sorteio em funções diferentes. O conceito de democracia precisa ser situado no contexto."
      },
      {
        "level": "advanced",
        "prompt": "Uma análise do Principado de Augusto identifica manutenção do Senado e de magistraturas, junto à concentração de autoridade e comando militar no governante. Qual conclusão decorre dessa combinação?",
        "hint": "A continuidade do nome de uma instituição não prova continuidade da distribuição efetiva do poder.",
        "options": [
          "Instituições republicanas podiam continuar existindo enquanto sua posição no conjunto de poder era transformada.",
          "A presença do Senado prova que não ocorreu concentração de autoridade.",
          "Augusto aboliu simultaneamente todas as instituições e palavras republicanas.",
          "A concentração de poder eliminou imediatamente a escravidão e universalizou direitos iguais."
        ],
        "correctIndex": 0,
        "solution": "A distingue permanência institucional e mudança na distribuição efetiva de autoridade, compatíveis no Principado. B nega a concentração explicitada apenas porque o Senado existe. C contradiz a manutenção de Senado e magistraturas. D inventa eliminação da escravidão e igualdade universal, que não decorrem do arranjo político. A análise não identifica o Senado antigo com um parlamento moderno nem reduz toda a transição a uma troca de título."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Geologia e estrutura terrestre",
    "objective": "Distinguir camadas composicionais e mecânicas da Terra, relacionar tectônica e formação de rochas e interpretar evidências geológicas e modelos com hipóteses, unidades e limites explícitos.",
    "prerequisites": [
      "Noções de ondas e de estados físicos",
      "Leitura de direções cardeais e de milhões de anos",
      "Conversão entre centímetros e quilômetros"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Camadas terrestres: composição, comportamento e evidências",
        "explanation": "A estrutura interna da Terra é investigada combinando evidências, não por observação direta de todo o interior. Terremotos geram ondas cujos tempos e trajetos dependem das propriedades dos materiais. Ondas P são compressivas e podem atravessar sólidos e líquidos; ondas S de cisalhamento não se propagam no interior de líquidos como ondas S. Reflexões, refrações e conversões de fases tornam os registros mais complexos do que simplesmente ouvir ou não uma onda em uma estação. A ausência de um registro isolado também pode depender de trajetória, fonte e detecção. No modelo global, o comportamento das ondas, junto a outras evidências, sustenta um núcleo externo líquido e um núcleo interno sólido. Não se deve afirmar que toda onda P direta chega a qualquer distância; existem zonas de sombra e fases diferentes. Pela composição, distinguimos crosta, manto e núcleo; pela resposta mecânica, distinguimos, entre outras regiões, litosfera rígida e astenosfera mais deformável. Litosfera inclui crosta e parte superior do manto: não é sinônimo de crosta. O manto é predominantemente sólido e pode deformar-se lentamente em tempos geológicos, sem ser um oceano global de magma. Crosta continental e oceânica diferem em espessura média e composição, mas uma única rocha não representa toda a variabilidade de cada uma. Dados sísmicos, gravidade, campo magnético, amostras acessíveis e experimentos ajudam a restringir modelos; cada método tem alcance e limitações. O modelo pode ser robusto em aspectos gerais sem fornecer composição detalhada e única de todo ponto profundo.",
        "steps": [
          "Separe classificação por composição da classificação por comportamento mecânico.",
          "Relacione ondas e materiais sem deduzir toda a estrutura de uma estação isolada.",
          "Diferencie sólido deformável ao longo do tempo de material inteiramente fundido.",
          "Combine evidências e explicite o que o modelo permite concluir."
        ],
        "example": "Comparação autoral: crosta e manto são categorias composicionais; litosfera e astenosfera dizem respeito ao comportamento mecânico. Assim, parte do manto integra a litosfera. Dizer que a placa inclui manto não significa que ela seja inteiramente líquida nem que crosta e litosfera sejam equivalentes.",
        "pitfall": "Chamar litosfera de crosta, tratar manto inteiro como magma ou deduzir travessia pelo núcleo apenas porque uma estação não registrou ondas S."
      },
      {
        "level": "intermediate",
        "title": "Placas, vulcanismo e transformações das rochas",
        "explanation": "Placas litosféricas movem-se relativamente e interagem em limites divergentes, convergentes e transformantes, com zonas de deformação que podem ser extensas. Divergência pode acompanhar formação de crosta oceânica em dorsais; convergência pode envolver subducção ou colisão continental; movimento transformante envolve deslizamento lateral. Nem toda convergência tem o mesmo vulcanismo, e nem todo vulcão está em limite de placa. O movimento resulta de processos acoplados, incluindo a tração de placas frias em subducção e diferenças de energia gravitacional; não se reduz a placas passivamente levadas por esteiras uniformes de magma. No modelo simplificado de ponto quente relativamente fixo, uma placa em movimento carrega centros vulcânicos antigos para longe da fonte. A direção do centro mais jovem para os mais antigos indica o sentido do movimento da placa relativamente à fonte, dentro das hipóteses. Pontos quentes reais podem mover-se, e trajetórias podem mudar; a hipótese de fonte fixa não é certeza universal. Processos internos e externos também se articulam no ciclo das rochas. Ígneas formam-se pela solidificação de material fundido. Sedimentares podem resultar da acumulação e litificação de sedimentos ou de precipitação, conforme o caso. Metamórficas resultam de transformações de rochas preexistentes em estado predominantemente sólido sob novas condições; fusão seguida de solidificação corresponde a outra etapa. Intemperismo altera materiais, erosão remove e transporte e deposição os redistribuem. O ciclo não obriga toda rocha a passar por todas as etapas em uma ordem única nem estabelece duração fixa para cada passagem.",
        "steps": [
          "Identifique o movimento relativo e as condições do limite de placas.",
          "No modelo de ponto quente, declare a referência e acompanhe idades e posições.",
          "Relacione tipo de rocha ao processo de formação, não somente à aparência.",
          "Evite impor ordem única ao ciclo das rochas ou motor único à tectônica."
        ],
        "example": "Modelo autoral: uma fonte fixa forma vulcões enquanto uma placa segue para leste. O centro mais jovem fica junto da fonte, a oeste dos mais antigos; estes foram transportados para leste. Se a placa percorre 5 cm/ano por 2 milhões de anos, o deslocamento idealizado é 100 km. Isso é movimento relativo no modelo, sem provar que toda fonte real permaneceu imóvel.",
        "pitfall": "Inverter o sentido do movimento no modelo de ponto quente, chamar metamorfismo de fusão ou exigir uma sequência circular única para todas as rochas."
      },
      {
        "level": "advanced",
        "title": "Modelos, história geológica e risco: o alcance das inferências",
        "explanation": "Um resultado geofísico precisa ser distinguido da interpretação que se faz dele. Modelos de tomografia estimam variações de velocidade de ondas a partir de dados e hipóteses; não são fotografias diretas da composição química. Uma região com velocidade menor pode motivar investigar temperatura, composição, estado dos materiais e resolução do método. O dado isolado não escolhe automaticamente uma única explicação nem prova um conduto contínuo de material até o núcleo. Para reconstruir história geológica, compare evidências independentes, como posições de rochas, estruturas, idades e registros paleomagnéticos, respeitando o que cada uma mede. Datação relativa ordena acontecimentos segundo relações observadas; uma idade numérica exige método e material adequados e não pode ser inventada a partir de uma simples posição no mapa. A escala do tempo é decisiva: eventos separados por dezenas de milhões de anos não são simultâneos apenas por pertencerem a um longo intervalo geológico. Também é diferente explicar processos e prever precisamente um evento futuro. A distribuição de falhas e terremotos contribui para avaliar perigo sísmico, mas não fornece método confiável para marcar dia, local e magnitude de um terremoto específico. Alerta precoce detecta um terremoto já iniciado e tenta avisar antes da chegada de ondas mais danosas em alguns locais; isso não é previsão anterior à ruptura. Risco envolve, além do perigo físico, exposição e vulnerabilidade. Dois lugares sujeitos a perigos semelhantes podem ter consequências diferentes conforme edificações, população e preparação. Uma análise responsável mantém hipóteses, incertezas e escalas visíveis, em vez de substituir ausência de dados por uma certeza técnica.",
        "steps": [
          "Separe observação, modelo e explicação possível.",
          "Compare evidências independentes e avalie resolução e alternativas.",
          "Distinga ordem relativa de idade numérica e confira a escala temporal.",
          "Diferencie perigo, exposição e vulnerabilidade ao discutir risco.",
          "Separe previsão específica, avaliação probabilística e alerta após o início."
        ],
        "example": "Cenário autoral: um modelo mostra região de menor velocidade sísmica, mas não fornece composição medida diretamente. Uma interpretação térmica pode ser testada com outros dados, sem excluir de saída efeitos composicionais ou limitações de resolução. Da mesma forma, um mapa de perigo não determina sozinho o dano de um evento numa cidade.",
        "pitfall": "Tratar tomografia como análise química única, confundir eventos distantes no tempo ou chamar alerta de terremoto já iniciado de previsão exata antes da ruptura."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação distingue corretamente classificações da estrutura terrestre e estado físico no modelo geral?",
        "hint": "Litosfera é uma categoria mecânica que inclui crosta e parte do manto; sólido pode deformar-se lentamente.",
        "options": [
          "Litosfera e crosta são sinônimos em qualquer continente ou oceano.",
          "Todo o manto é um oceano líquido de magma que suporta as placas.",
          "O núcleo externo é sólido porque ondas P não se propagam em líquidos.",
          "A litosfera inclui crosta e parte do manto; o manto é predominantemente sólido e pode deformar-se em tempos geológicos."
        ],
        "correctIndex": 3,
        "solution": "D separa classificação mecânica e composicional e reconhece deformação lenta de material sólido. A exclui indevidamente a parte mantélica da litosfera. B transforma todo o manto em líquido, o que não corresponde ao modelo sustentado pelas evidências. C erra o estado do núcleo externo e a propriedade das ondas P, que podem atravessar líquidos. Não se deve confundir deformação em longos tempos com fusão completa."
      },
      {
        "level": "intermediate",
        "prompt": "Cadeia autoral idealizada: A tem 2 Ma e C tem 8 Ma; A fica a noroeste de C. A fonte de vulcanismo permanece fixa e a placa mantém movimento retilíneo de 8 cm/ano entre a formação dos dois centros. Qual separação esperada e qual sentido de movimento da placa são compatíveis com o modelo?",
        "hint": "Use a diferença de idades, converta centímetros em quilômetros e acompanhe o centro jovem sendo levado na direção dos mais antigos.",
        "options": [
          "480 km; movimento da placa para sudeste, de A para C.",
          "480 km; movimento da placa para noroeste, de C para A.",
          "48 km; movimento da placa para sudeste, de A para C.",
          "960 km; movimento da placa para noroeste, de C para A."
        ],
        "correctIndex": 0,
        "solution": "A: a diferença é 8 - 2 = 6 milhões de anos. A 8 cm/ano, o deslocamento é 48 milhões de centímetros; dividindo por 100.000 cm/km, resulta 480 km. A placa carrega os centros antigos para longe da fonte, portanto o sentido de jovem A para antigo C é sudeste. B acerta distância mas inverte sentido. C erra a conversão por fator 10. D dobra a distância e inverte sentido. A conclusão depende da fonte fixa e do movimento constante dados; não é uma regra para todo ponto quente real."
      },
      {
        "level": "advanced",
        "prompt": "Um modelo tomográfico identifica uma região profunda com velocidade sísmica menor que a vizinhança, sem outras informações independentes no enunciado. Qual interpretação respeita o alcance desse dado?",
        "hint": "Velocidade inferida não é composição química diretamente medida; avalie explicações e limitações antes de concluir.",
        "options": [
          "O resultado prova composição química única e dispensa outros métodos.",
          "O resultado determina o dia e a magnitude do próximo terremoto na superfície.",
          "O resultado permite investigar hipóteses térmicas, composicionais e limitações do modelo, mas não decide sozinho entre elas.",
          "O resultado prova que todo o manto é líquido e que não existem placas sólidas."
        ],
        "correctIndex": 2,
        "solution": "C distingue a variação de velocidade estimada de suas explicações possíveis e pede comparação com outras evidências. A converte uma propriedade inferida em composição única sem dados suficientes. B transforma uma imagem do interior em previsão específica de terremoto, algo não autorizado. D generaliza uma anomalia regional para estado líquido de todo o manto. Reconhecer alternativas e resolução não significa descartar o método, mas usar seus resultados dentro do alcance observado."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Iluminismo e Kant",
    "objective": "Situar a pluralidade do Iluminismo e interpretar esclarecimento, limites do conhecimento e autonomia moral em Kant, distinguindo crítica racional de opinião arbitrária ou obediência cega.",
    "prerequisites": [
      "Diferença entre argumento e apelo à autoridade",
      "Noções de experiência, razão e conhecimento",
      "Distinção entre princípio de ação e resultado desejado"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Iluminismo, crítica e uso público da razão",
        "explanation": "Iluminismo designa debates e projetos diversos, especialmente associados ao século XVIII, e não uma doutrina única aceita por todos os pensadores. Crítica de autoridades, investigação da natureza, educação, tolerância e organização política aparecem em combinações diferentes. Não se deve concluir que todos os iluministas fossem ateus, defensores do mesmo regime ou contrários a qualquer tradição. A valorização da razão exige examinar argumentos; não transforma toda opinião individual em verdade. Tampouco os ideais de universalidade eliminaram automaticamente exclusões históricas: é necessário distinguir princípios formulados, posições concretas dos autores e práticas das sociedades. Em seu ensaio sobre esclarecimento, de 1784, Kant discute a saída de uma condição de tutela na qual alguém deixa outro pensar em seu lugar. Isso não equivale a rejeitar todo estudo ou orientação de especialistas, mas a não substituir julgamento por submissão irrefletida. Kant distingue uso público da razão, como a intervenção de alguém enquanto estudioso diante de um público leitor, do uso privado vinculado ao desempenho de uma função institucional. Os termos não correspondem simplesmente a falar numa praça ou dentro de casa. A distinção permite compreender como o ensaio articula crítica pública e deveres de função em seu contexto, sem transformá-la em defesa de silêncio absoluto ou em autorização para qualquer conduta. Para analisar um texto, identifique quem fala, em que papel, qual afirmação está sendo defendida e quais razões podem ser examinadas. Esclarecimento não é possuir respostas prontas sobre tudo, mas participar criticamente de um processo de formação do juízo.",
        "steps": [
          "Situe autor, período e questão sem impor unanimidade ao Iluminismo.",
          "Distinga argumento de obediência automática e de opinião sem justificação.",
          "No ensaio kantiano, identifique o papel em que a razão é exercida.",
          "Compare princípios universais e exclusões concretas sem presumir sua coincidência."
        ],
        "example": "Cenário autoral: no exercício de uma função institucional, uma pessoa segue e explica um procedimento atribuído ao cargo. Para a distinção do ensaio, a razão vinculada a esse encargo corresponde ao uso privado, ainda que a explicação seja ouvida por muitas pessoas. Privado não significa necessariamente segredo ou ambiente doméstico. Essa análise do papel é diferente de sua intervenção como estudiosa diante de leitores.",
        "pitfall": "Tratar todos os iluministas como iguais, confundir uso público com cargo público ou entender pensar por si como ignorar argumentos e conhecimento alheios."
      },
      {
        "level": "intermediate",
        "title": "Conhecimento: experiência e condições de possibilidade",
        "explanation": "Na filosofia crítica de Kant, investigar conhecimento inclui perguntar como a experiência objetiva é possível e quais são seus limites. O conhecimento humano começa com a experiência, mas disso não se segue que todos os seus elementos sejam extraídos dela. A sensibilidade fornece intuições sob formas de espaço e tempo; o entendimento pensa o que é dado por meio de conceitos e categorias. Não se trata de escolher entre sentidos que copiam tudo sem atividade do sujeito e uma mente que inventa qualquer realidade sem dados. Conhecer objetos da experiência envolve a articulação entre receptividade e atividade conceitual. A distinção entre a priori e a posteriori diz respeito à relação de justificação com a experiência, não a adivinhar algo antes de observá-lo nem a uma memória cronologicamente anterior ao nascimento. A priori também não significa que qualquer opinião pessoal seja necessária ou universal. Na distinção didática entre fenômeno e coisa em si, fenômeno é o objeto como aparece sob as condições do conhecimento humano; isso não é sinônimo de ilusão ou imagem falsa. A coisa em si não é conhecida teoricamente como seria independentemente dessas condições. Reconhecer limite não significa provar que nada existe fora da mente, nem autorizar afirmações científicas arbitrárias sobre o que está além da experiência possível. A crítica examina pretensões da razão para evitar tanto dogmatismo quanto conclusões céticas apressadas. Ao interpretar uma alternativa, confira se ela mantém a contribuição de experiência e conceitos e se respeita o limite de aplicação proposto; não reduza a posição a uma mistura vaga de empirismo e racionalismo.",
        "steps": [
          "Identifique a pergunta sobre condições e limites do conhecimento.",
          "Separe sensibilidade e entendimento sem torná-los fontes isoladas suficientes.",
          "Diferencie justificação a priori de antecipação temporal ou opinião subjetiva.",
          "Leia fenômeno sem equipará-lo a ilusão e respeite o limite sobre a coisa em si."
        ],
        "example": "Exemplo autoral didático: perceber posições e mudanças de um objeto envolve dados sensíveis e organização da experiência. Dizer que o sujeito contribui com condições de conhecimento não autoriza concluir que escolhe livremente qualquer resultado da observação. A investigação crítica pergunta por essas condições, não oferece uma licença para fabricar evidências.",
        "pitfall": "Chamar fenômeno de falsidade, confundir a priori com palpite antecipado ou concluir que a mente cria arbitrariamente toda a existência por conhecer sob condições."
      },
      {
        "level": "advanced",
        "title": "Autonomia, dever e universalização da máxima",
        "explanation": "Na ética kantiana, uma máxima é um princípio subjetivo de ação: o que alguém propõe fazer em certas circunstâncias e com qual finalidade. O exame moral não se limita ao sucesso da ação nem à preferência de quem decide. Um imperativo hipotético vincula uma ação a um fim desejado; o categórico pretende validade moral que não dependa de uma vantagem particular. Na formulação da lei universal, examine se a máxima pode valer universalmente sem contradição pertinente, em vez de perguntar apenas se a maioria gosta do resultado. No exemplo clássico da promessa enganosa para obter vantagem, a máxima depende de confiança na promessa enquanto permite ao agente prometer sem intenção de cumprir. Universalizar essa permissão compromete a prática de confiança que o próprio meio pressupõe. A análise não afirma que toda promessa seja inválida nem se reduz ao medo de ser descoberto. Outra formulação exige tratar a humanidade em si e nos outros sempre também como fim, nunca apenas como meio. A palavra apenas importa: colaborar com alguém para obter um serviço não é automaticamente imoral; instrumentalização meramente como recurso, sem consideração pela condição de agente, é o problema. Autonomia moral não é fazer qualquer coisa que se deseja nem aceitar uma regra só porque uma autoridade a impôs; é a vontade racional legislando segundo princípio moral universal. Agir em conformidade com o dever e agir por dever são distinções de motivação, não de aparência externa apenas. A mesma conduta observada pode ser praticada por medo de punição ou por respeito ao dever; não se identifica a motivação com certeza só pelo efeito visível. Ao resolver um caso, explicite máxima, motivo e formulação usada, sem substituir o argumento por rótulo.",
        "steps": [
          "Formule circunstância, ação e finalidade na máxima.",
          "Diferencie conselho condicionado a um fim de exigência moral categórica.",
          "Examine universalização sem trocar o teste por gosto da maioria.",
          "Verifique respeito às pessoas como fins, distinguindo meio de mero meio.",
          "Separe resultado observado e motivação para não inventar certeza sobre o agente."
        ],
        "example": "Cenário autoral: uma pessoa cumpre um acordo apenas para evitar prejuízo à reputação; outra afirma cumpri-lo por respeito ao dever. Os resultados podem coincidir, mas a distinção kantiana pergunta pelo princípio da vontade. A descrição de uma ação externa, sozinha, não prova que alguém agiu por dever.",
        "pitfall": "Definir autonomia como vontade pessoal sem limites, tratar todo uso de serviço como mero meio ou confundir agir por dever com agir só por receio de punição."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma estudiosa escreve de casa um texto dirigido a leitores, apresentando razões para criticar a organização de uma instituição. Considerando a distinção do ensaio de Kant sobre esclarecimento, qual leitura é adequada?",
        "hint": "Público e privado, nesse argumento, dizem respeito ao papel e à destinação do uso da razão, não apenas ao local físico.",
        "options": [
          "É uso privado necessariamente, porque o texto foi escrito em casa.",
          "É uso público da razão no papel de estudiosa diante de leitores; a localização doméstica não decide a classificação.",
          "É impossível criticar qualquer instituição no uso público da razão.",
          "A presença de uma opinião elimina a necessidade de apresentar razões examináveis."
        ],
        "correctIndex": 1,
        "solution": "B acompanha o sentido específico do uso público como intervenção de estudiosa diante de um público leitor. A substitui o papel pelo endereço. C transforma a distinção em proibição absoluta de crítica, o que não corresponde à defesa do uso público. D dispensa a justificação, quando o cenário apresenta razões a examinar. A resposta interpreta o ensaio, sem definir regras jurídicas de uma instituição atual."
      },
      {
        "level": "intermediate",
        "prompt": "Qual formulação é compatível com a articulação kantiana de sensibilidade, entendimento e limites do conhecimento teórico?",
        "hint": "Não basta escolher sentidos sem conceitos ou conceitos sem dados; fenômeno também não significa automaticamente ilusão.",
        "options": [
          "Conhecer é copiar sensações sem qualquer contribuição conceitual.",
          "A mente pode fabricar qualquer fato como verdadeiro sem dados sensíveis.",
          "Fenômeno significa necessariamente imagem falsa e inútil para conhecer.",
          "O conhecimento de objetos da experiência articula dados sensíveis e organização conceitual, sem conhecer teoricamente a coisa em si independentemente dessas condições."
        ],
        "correctIndex": 3,
        "solution": "D reúne contribuição sensível, conceitual e limite do conhecimento teórico. A elimina a atividade do entendimento. B converte condições de conhecimento em criação arbitrária de fatos. C confunde fenômeno com falsidade, quando o termo designa o objeto sob as condições de sua aparição e conhecimento. O limite sobre coisa em si não prova ausência de realidade nem autoriza afirmação empírica sem evidências."
      },
      {
        "level": "advanced",
        "prompt": "Cenário autoral: para receber um recurso, alguém promete cumprir um acordo já com a intenção de não o cumprir. Justifica a ação apenas pela vantagem que obterá. Pelo teste kantiano da máxima de promessa enganosa, qual análise é adequada?",
        "hint": "A máxima usa a confiança na promessa enquanto permite enganar; o teste não é apenas calcular a chance de punição.",
        "options": [
          "Universalizar a permissão de prometer enganosamente compromete a confiança pressuposta pela própria prática usada para obter a vantagem.",
          "A ação se torna moralmente válida sempre que o agente consegue evitar descoberta.",
          "A vantagem pessoal prova que a máxima é universalizável.",
          "O caso demonstra que qualquer promessa sincera é necessariamente imoral."
        ],
        "correctIndex": 0,
        "solution": "A identifica a tensão na máxima: obter algo por uma promessa pressupõe confiança, mas a permissão universal de promessa enganosa destrói a base que o meio utiliza. B reduz moralidade a prudência para evitar punição. C toma interesse particular como critério suficiente de validade universal. D estende a crítica da promessa enganosa a toda promessa, algo que não decorre do argumento. A análise considera a máxima informada, sem inventar uma intenção além do cenário."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Estratificação e desigualdade social",
    "objective": "Distinguir dimensões da estratificação, interpretar indicadores e mobilidade e analisar mecanismos de reprodução da desigualdade sem estatísticas fabricadas ou inferências causais baseadas apenas em associação.",
    "prerequisites": [
      "Noções de renda, patrimônio e instituições",
      "Média, razão e diferença absoluta",
      "Distinção entre hipótese, associação e causa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estratificação: recursos, reconhecimento e poder",
        "explanation": "Estratificação social designa uma organização duradoura de posições e oportunidades desiguais. Não é qualquer diferença individual: envolve padrões de acesso a recursos, prestígio e capacidade de decisão que atravessam instituições e grupos. Renda é um fluxo em um período; patrimônio é um estoque de bens e direitos, considerando dívidas quando se fala em patrimônio líquido. Duas pessoas com renda semelhante podem ter patrimônios e condições de segurança muito diferentes. Classe, prestígio e poder são dimensões relacionadas, mas não idênticas. Em Marx, relações com os meios de produção e conflitos de classe são centrais; isso não se reduz a dividir faixas de salário em uma tabela. Em Weber, posição de classe no mercado, honra ou status e organização do poder permitem investigar dimensões distintas que podem interagir. Distinção analítica não significa independência causal absoluta. Uma ocupação pode receber reconhecimento sem salário elevado, e possuir renda elevada não garante sozinho o mesmo acesso a decisões em qualquer contexto. Sistemas de estratificação podem impor barreiras de diferentes formas, como herança, normas, discriminação e desigual acesso à educação. Dizer que uma sociedade admite mobilidade não prova igualdade de oportunidades. Tampouco uma trajetória individual de ascensão demonstra ausência de barreiras coletivas. A análise precisa definir o recorte, os recursos observados e os grupos comparados. Identificar desigualdade não equivale a explicar integralmente sua origem, e renda não resume todas as formas de hierarquia social.",
        "steps": [
          "Separe renda recebida no período de patrimônio acumulado.",
          "Identifique recursos, prestígio e decisões em situações concretas.",
          "Compare perspectivas teóricas sem reduzi-las a faixas de renda.",
          "Distinga possibilidade individual de mobilidade de igualdade de oportunidades."
        ],
        "example": "Cenário autoral: uma ocupação recebe grande reconhecimento público, enquanto outra é melhor remunerada mas pouco reconhecida naquele grupo. A comparação mostra que prestígio e renda não são a mesma medida. Para investigar poder, seria preciso observar também como cada grupo participa das decisões, sem presumir que a hierarquia de renda reproduz exatamente a de reconhecimento.",
        "pitfall": "Confundir renda e patrimônio, chamar dimensões distintas de totalmente independentes ou usar um caso de ascensão para negar padrões de barreiras."
      },
      {
        "level": "intermediate",
        "title": "Medidas de desigualdade: denominadores, população e limites",
        "explanation": "Um indicador resume uma dimensão definida e precisa de população, período, conceito de renda e método comparáveis. Média de renda não mostra como o total está distribuído. O coeficiente de Gini é uma medida de concentração: em sua escala usual de zero a um, zero expressa igualdade e valores maiores expressam maior concentração. Para uma pequena população de n pessoas com rendas não negativas e soma positiva, uma fórmula não corrigida é G = ΣiΣj|xi - xj| / (2nΣixi). A soma considera pares ordenados, inclusive os de diferença zero. Não confunda essa convenção com versões corrigidas para amostras. O Gini não informa sozinho quem recebe renda, quais grupos sofrem uma barreira ou qual política causou mudança. Distribuições diferentes podem apresentar o mesmo índice. Multiplicar todas as rendas pelo mesmo número positivo mantém esse Gini relativo, embora os valores monetários mudem. Pobreza e desigualdade também são distintas: pobreza exige um critério de privação ou uma linha definida; uma sociedade pode ter baixo Gini e renda insuficiente para muitas pessoas. Uma linha monetária requer moeda, período e critério explícitos, não um valor universal inventado. O IDH resume realizações médias em saúde, educação e renda e não é medida direta da distribuição. Seu ajuste à desigualdade incorpora perdas associadas à desigual distribuição dessas dimensões; não é simplesmente o Gini renomeado. Para ler uma série histórica, confira mudança de pesquisa, deflator, renda incluída e população antes de ligar pontos ou atribuir causas. Uma diferença entre dois anos não identifica sozinha o efeito isolado de uma lei.",
        "steps": [
          "Defina unidade de análise, renda, período e convenção do indicador.",
          "Calcule média e distribuição separadamente.",
          "Na fórmula apresentada, some diferenças de todos os pares e confira o denominador.",
          "Diferencie pobreza, desenvolvimento médio e desigualdade.",
          "Investigue comparabilidade e causas sem inventar séries ou mecanismos."
        ],
        "example": "População autoral hipotética com rendas 0, 0, 10 e 10: soma 20 e média 5. Há oito pares ordenados entre renda zero e renda dez, cada um com diferença 10: soma 80. Assim, G = 80/(2·4·20) = 0,5. Se as quatro rendas fossem 5, a média continuaria 5, mas G seria zero.",
        "pitfall": "Usar média como descrição completa, misturar versões do Gini ou concluir que queda de um índice prova causalidade de uma política específica."
      },
      {
        "level": "advanced",
        "title": "Mobilidade e reprodução: mecanismos e evidência",
        "explanation": "Mobilidade intrageracional acompanha mudanças de posição ao longo da trajetória de uma pessoa; intergeracional compara gerações, segundo uma medida definida. Mobilidade absoluta descreve o volume de mudanças observadas e pode refletir transformação da estrutura de ocupações ou de escolaridade. Mobilidade relativa investiga chances comparadas entre origens e destinos, levando em conta essa estrutura; não é apenas uma troca literal de lugares entre duas pessoas. Uma geração estudar mais anos que a anterior não prova, sozinha, que as diferenças de oportunidade entre origens desapareceram. A explicação sociológica examina mecanismos. Recursos econômicos podem financiar estudo e deslocamento; redes de relações podem facilitar informação; familiaridade com práticas valorizadas pela escola pode produzir vantagens. A análise de capital cultural e reprodução não afirma que cada trajetória esteja determinada ou que todo resultado seja apenas herança. Instituições e ações coletivas também podem transformar condições. Raça, gênero, classe e território podem articular barreiras específicas; uma comparação precisa identificar contexto e mecanismos, sem deduzir que seus efeitos são sempre independentes ou que uma fórmula única descreve todas as experiências. Duas pessoas com o mesmo diploma e rendas diferentes não constituem, sozinhas, um estudo controlado capaz de medir discriminação: ocupação, jornada, experiência e seleção podem exigir análise. Isso não nega discriminação; diferencia uma hipótese relevante da estimativa que requer dados e método. Uma investigação pode combinar evidência quantitativa, experiências e análise institucional. Para avaliar uma política, declare objetivo, público, comparação e limites, evitando atribuir toda a desigualdade a esforço individual ou a um único mecanismo sem demonstração.",
        "steps": [
          "Defina o tipo de mobilidade e a medida usada entre origem e destino.",
          "Separe expansão geral de posições de mudança nas chances relativas.",
          "Formule mecanismos de reprodução e condições de transformação.",
          "Leia desigualdades entre grupos sem chamar comparação simples de experimento controlado.",
          "Compare explicações e evidências antes de concluir efeito causal."
        ],
        "example": "Cenário autoral: uma seleção divulga instruções somente em uma rede de ex-participantes. Pessoas fora dessa rede não recebem a mesma informação, segundo as condições do cenário. Isso ilustra um mecanismo possível de vantagem pelo acesso a relações e informação; não determina qual pessoa será aprovada nem quantifica o efeito. Investigar sua importância exige comparar acesso, critérios de seleção e resultados, distinguindo mecanismo proposto e estimativa causal.",
        "pitfall": "Equiparar mobilidade absoluta a igualdade de oportunidades, tratar herança social como destino inevitável ou chamar duas observações de controle estatístico completo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário autoral: dois trabalhadores recebem o mesmo salário mensal. Um tem imóvel quitado e reservas; outro não possui bens e tem dívidas superiores às reservas. Qual conclusão é sustentada?",
        "hint": "Separe o fluxo observado no mês do estoque líquido de bens, direitos e dívidas.",
        "options": [
          "Salários iguais provam patrimônios líquidos iguais.",
          "Salários iguais provam poder político idêntico.",
          "A igualdade do salário não implica igualdade de patrimônio líquido nem informa sozinha o poder político.",
          "A existência de dívidas prova que o segundo nunca terá mobilidade."
        ],
        "correctIndex": 2,
        "solution": "C distingue renda mensal, patrimônio e poder, sem afirmar o que os dados não medem. A ignora bens e dívidas diferentes. B atribui igualdade política apenas ao salário. D transforma uma condição atual em destino inevitável. O cenário permite comparar estoques e fluxos, mas não quantifica toda a desigualdade entre os dois nem identifica sua causa histórica completa."
      },
      {
        "level": "intermediate",
        "prompt": "População autoral hipotética com quatro pessoas e rendas de 10, 20, 30 e 40 unidades no mesmo período. Usando a fórmula não corrigida G = ΣiΣj|xi - xj|/(2nΣixi), qual é a média e o Gini?",
        "hint": "A soma das rendas é 100; conte todos os pares ordenados, não somente os pares distintos sem repetição.",
        "options": [
          "25 unidades; Gini 0,50.",
          "25 unidades; Gini 0,25.",
          "100 unidades; Gini 0,25.",
          "25 unidades; Gini 0,00."
        ],
        "correctIndex": 1,
        "solution": "B: a média é 100/4 = 25. As diferenças dos pares não ordenados somam 10+20+30+10+20+10 = 100; na soma ordenada, o valor dobra para 200. O denominador é 2·4·100 = 800, logo G = 0,25. A dobra o índice; C confunde soma com média; D atribui igualdade a rendas diferentes. A fórmula e a pequena população são fornecidas para cálculo, não representam dados do Brasil."
      },
      {
        "level": "advanced",
        "prompt": "Cenário autoral: em duas origens sociais, a geração de filhos estuda mais anos que a de pais, mas a diferença de acesso ao ensino superior entre as origens continua presente. Sem outros dados, qual interpretação é adequada?",
        "hint": "Melhoria absoluta e igualdade de chances são afirmações diferentes; preserve os limites da comparação.",
        "options": [
          "O cenário comprova que a origem social deixou de influenciar qualquer oportunidade.",
          "A melhoria prova que todas as barreiras institucionais foram eliminadas.",
          "A diferença de acesso prova destino individual inevitável para cada filho.",
          "Há melhoria absoluta de escolaridade, mas os dados não demonstram igualdade de chances entre origens nem determinam cada trajetória."
        ],
        "correctIndex": 3,
        "solution": "D reconhece o aumento de escolaridade sem inferir igualdade de oportunidades ou destino individual fixo. A e B apagam a diferença de acesso que o próprio cenário preserva e extrapolam para todas as oportunidades e instituições. C converte padrão entre grupos em determinação de cada pessoa. Para avaliar mobilidade relativa ou causas de barreiras, seriam necessários recortes, medidas e dados adicionais."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Indústria cultural e arte digital",
    "objective": "Analisar padronização e circulação cultural, reconhecer práticas de arte digital e avaliar mediações, participação e preservação por meio de descrições autorais autossuficientes e evidências delimitadas.",
    "prerequisites": [
      "Noções de produção, circulação e recepção artística",
      "Distinção entre suporte, procedimento e finalidade",
      "Leitura crítica de descrições e de dados de circulação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Indústria cultural como perspectiva crítica",
        "explanation": "Indústria cultural é um conceito associado a Adorno e Horkheimer para analisar a organização da produção e do consumo cultural sob relações econômicas e administrativas. Nessa perspectiva, produtos podem ser planejados em série, com fórmulas reconhecíveis e variações que apresentam aparência de escolha individual. A crítica não equivale simplesmente a dizer que toda obra popular é ruim ou que um público numeroso demonstra ausência de pensamento. Trata-se de investigar como produção, distribuição e consumo são organizados e como interesses econômicos podem condicionar o que circula. Padronização diz respeito à repetição de estruturas; diferenças superficiais podem coexistir com uma fórmula repetida, sem que isso esgote todas as diferenças entre obras. Uma análise concreta precisa examinar forma e condições de circulação, não apenas condenar gosto alheio. A cultura popular também não deve ser imaginada como esfera sempre pura, imóvel e sem contato com mercados. Criadores e públicos podem negociar, reinterpretar e contestar formas existentes; reconhecer essas possibilidades não elimina assimetrias institucionais. A circulação digital pode ampliar acesso e permitir distribuição direta em certos contextos, mas ferramenta disponível não garante renda, visibilidade ou autonomia. Compare quem produz, quem escolhe o que é mostrado, quais critérios são empregados e quem recebe recursos. O conceito é uma lente crítica situada, não uma prova automática de que todo usuário reage passivamente ou de que toda produção comercial tem a mesma estrutura.",
        "steps": [
          "Identifique como produção, distribuição e consumo estão organizados.",
          "Examine estruturas repetidas e o papel de variações superficiais.",
          "Separe crítica institucional de julgamento automático sobre gosto ou tamanho de público.",
          "Observe possibilidades de apropriação e resistência sem ignorar assimetrias."
        ],
        "example": "Cenário autoral hipotético: uma empresa oferece séries musicais com a mesma estrutura e campanha, alterando pequenas partes da apresentação e anunciando cada versão como inteiramente singular. A crítica pode investigar a relação entre fórmula e diferenciação aparente. Só o fato de haver muitas ouvintes não provaria, por si, esse mecanismo.",
        "pitfall": "Usar popularidade como prova de passividade, chamar toda variação de falsa ou tratar cultura popular como domínio sem relações históricas com mercados."
      },
      {
        "level": "intermediate",
        "title": "Arte digital: regras, rede e experiência",
        "explanation": "Arte digital reúne práticas diversas, não um estilo visual único. Uma obra pode usar programação, imagens, som, interfaces, rede ou ambientes virtuais em sua produção e experiência. Nem toda obra digital exige interação, inteligência artificial ou conexão permanente. Arte generativa pode empregar um conjunto de regras para produzir resultados; isso não implica necessariamente aprendizado de máquina, aleatoriedade ou variação infinita. Net art explora possibilidades e condições da rede como parte da obra, não apenas a divulgação de uma imagem em um site. Uma instalação interativa pode mudar conforme ações do público, mas interação técnica não garante que todas as decisões artísticas sejam compartilhadas. Para analisar autoria, descreva contribuições e escolhas, sem declarar automaticamente coautoria jurídica a toda pessoa que toca numa interface. Essa aula não decide direitos legais de uma obra concreta. Uma reprodução digital pode manter os mesmos dados de um arquivo, mas diferentes telas, programas, versões e contextos de apresentação podem alterar a experiência. A existência de cópias não elimina necessariamente a relevância de origem, documentação ou versão autorizada. Também é possível registrar uma execução em vídeo sem que o vídeo reproduza a interação que a constitui. Na análise, separe suporte, procedimento, resultado e relação com o público. Uma descrição autossuficiente pode informar o que o sistema faz e como o público participa, permitindo discutir a proposta sem exigir imagem ou som que não foi fornecido.",
        "steps": [
          "Identifique o papel do digital na obra, além de sua divulgação.",
          "Descreva regras, entradas e resultados sem supor IA ou aleatoriedade.",
          "Diferencie participação técnica de poder de decisão e de reconhecimento jurídico.",
          "Compare registro de uma execução com experiência da obra em funcionamento."
        ],
        "example": "Obra autoral hipotética: em uma tela, cada clique acrescenta um quadrado; o sistema alterna azul e amarelo por regra fixa. Há interação e geração por regras, mas não foi informado uso de IA ou sorteio. Um vídeo documenta uma sequência possível, porém não oferece ao espectador a possibilidade de clicar e construir outra sequência.",
        "pitfall": "Equiparar arte generativa a IA, presumir resultados infinitos ou confundir vídeo de uma interação com preservação integral da experiência interativa."
      },
      {
        "level": "advanced",
        "title": "Mediação, acesso e preservação",
        "explanation": "Plataformas, instituições e dispositivos mediam a circulação da arte digital. Uma contagem de visualizações informa uma ocorrência definida pelo sistema de medição; não prova sozinha qualidade artística, remuneração justa, acesso de todos os grupos ou apoio consciente de cada visitante. Para investigar recomendação ou moderação, é preciso saber quais dados e critérios são observáveis. A redução de alcance de uma obra isolada não demonstra automaticamente censura, nem um aumento prova a causa de uma alteração de formato. Modelos de financiamento e governança podem ser comparados por critérios explícitos: custos, regras de decisão, remuneração, acessibilidade, público e continuidade. Usar um protocolo aberto ou declarar gestão cooperativa não resolve por si todas essas dimensões; da mesma forma, não condena um projeto ao fracasso antes de observar suas condições. A preservação demanda mais do que guardar uma cópia de arquivo. Obras dependem de programas, versões, equipamentos, conexões, entradas e modos de apresentação. Documentar comportamentos e aspectos considerados essenciais ajuda a avaliar estratégias como manutenção de equipamento, migração ou emulação. Essas estratégias podem alterar experiência e precisam de critérios e testes; não existe solução universal que preserve tudo sem mudança. É necessário registrar decisões e distinguir a obra, seu registro e uma reconstrução. Descrições, alternativas de acesso e instruções podem ampliar fruição, mas sua adequação depende da obra e do público. A análise crítica combina forma, infraestrutura e condições sociais, sem reduzir arte a métricas ou apresentar promessas técnicas como resultados já demonstrados.",
        "steps": [
          "Defina o que cada métrica mede e quais conclusões ela não autoriza.",
          "Compare modelos de circulação por critérios explícitos e dados disponíveis.",
          "Registre dependências e comportamentos relevantes para preservar a obra.",
          "Teste estratégias de preservação e documente alterações de experiência.",
          "Considere acesso e continuidade junto das decisões estéticas e institucionais."
        ],
        "example": "Cenário autoral: uma obra exige um navegador antigo e muda cores conforme teclas pressionadas. O museu guarda arquivos, descrição das respostas e vídeos de execução e testa uma versão emulada. O vídeo ajuda a comparar comportamento, mas não substitui a interação; a emulação precisa ser avaliada, não declarada idêntica apenas por iniciar sem erro.",
        "pitfall": "Tomar alcance por qualidade, inferir censura de uma queda isolada ou prometer preservação integral apenas porque o arquivo original foi copiado."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário autoral: uma empresa comercializa dez versões de um programa com a mesma estrutura narrativa, mudando pequenos detalhes e promovendo cada uma como escolha inteiramente singular. Qual análise se aproxima da crítica da indústria cultural sem extrapolar o cenário?",
        "hint": "Relacione repetição estrutural e diferenciação aparente, sem deduzir reação idêntica de todos os espectadores.",
        "options": [
          "As variações superficiais podem apresentar singularidade enquanto a estrutura permanece padronizada; a recepção concreta ainda exige investigação.",
          "O número dez prova que todos os públicos são incapazes de interpretar criticamente.",
          "Qualquer obra comercial é necessariamente idêntica em todos os aspectos.",
          "A existência de pequenas mudanças demonstra autonomia total frente à organização econômica."
        ],
        "correctIndex": 0,
        "solution": "A relaciona a fórmula repetida à diferenciação aparente e limita a conclusão sobre públicos. B transforma quantidade de versões em incapacidade universal. C generaliza identidade total a qualquer obra comercial, além do cenário. D toma pequenas mudanças como prova de autonomia plena, ignorando a estrutura informada. A crítica examina organização e forma, sem exigir uma reação única de todos os espectadores."
      },
      {
        "level": "intermediate",
        "prompt": "Descrição autoral: uma obra online permite ao visitante escolher uma entre quatro palavras. Uma regra fixa reorganiza o texto conforme a escolha. Não usa sorteio ou modelo de IA. Qual afirmação é sustentada?",
        "hint": "Separe regras computacionais, interação do visitante e tecnologias que o enunciado expressamente não informa ou exclui.",
        "options": [
          "Toda arte por regras usa obrigatoriamente IA generativa.",
          "A escolha de palavras prova coautoria jurídica automática de todos os visitantes.",
          "Há interação e transformação por regras, sem necessidade de IA ou aleatoriedade nesse caso.",
          "O sistema produz necessariamente quantidade infinita de textos diferentes."
        ],
        "correctIndex": 2,
        "solution": "C identifica interação e transformação por uma regra fixa, compatíveis com a descrição. A contradiz a ausência de IA e impõe equivalência falsa entre regra e aprendizado de máquina. B converte participação técnica em conclusão jurídica que não foi demonstrada. D afirma infinitude sem dados e apesar do conjunto limitado de escolhas informado. Uma análise adequada descreve procedimento e experiência antes de atribuir outras propriedades."
      },
      {
        "level": "advanced",
        "prompt": "Um acervo preserva arquivos de uma obra interativa e um vídeo de uma execução. A obra dependia de um programa que não funciona no sistema atual. Qual medida responde ao problema sem confundir documentação e experiência?",
        "hint": "O registro visual ajuda a avaliar comportamentos, mas não permite por si toda a interação original.",
        "options": [
          "Declarar a preservação integral concluída porque o vídeo pode ser reproduzido.",
          "Descartar arquivos e instruções, pois qualquer emulação será necessariamente idêntica.",
          "Contar visualizações do vídeo para comprovar que a interação foi preservada.",
          "Documentar dependências e comportamentos essenciais e testar uma estratégia de execução, comparando alterações com arquivos e registros."
        ],
        "correctIndex": 3,
        "solution": "D combina documentação, execução e comparação segundo critérios, sem prometer identidade automática. A confunde um registro com a experiência interativa. B descarta evidências e trata emulação como garantia universal. C usa alcance do vídeo para provar uma propriedade que a métrica não mede. O vídeo pode apoiar o teste, mas não substitui sozinho todas as possibilidades de ação na obra."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Jogos e brincadeiras tradicionais",
    "objective": "Reconhecer jogos e brincadeiras como práticas culturais vivas, comparar variantes registradas e planejar adaptações e avaliação com participação, segurança e respeito aos contextos de transmissão.",
    "prerequisites": [
      "Noções de regra, objetivo e participação em jogos",
      "Reconhecimento da diversidade cultural e regional",
      "Distinção entre relato de prática, adaptação didática e regra esportiva oficial"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tradição, variantes e registro de brincadeiras",
        "explanation": "Jogos e brincadeiras tradicionais circulam por observação, convivência, relatos e experiências entre pessoas e gerações. Tradição não significa imobilidade: nomes, materiais, gestos e regras podem variar conforme lugar, grupo e momento. Um nome igual não garante regras idênticas, e nomes diferentes podem designar práticas próximas. O estudo da diversidade brasileira reconhece contribuições e trocas entre povos indígenas, populações africanas e afro-brasileiras, diferentes migrações e comunidades locais, sem reduzir cada prática a uma origem única presumida. Atribuir um nome indígena, uma data ou uma comunidade exige fonte específica; sem ela, não se preenche a lacuna com uma história provável. Para conhecer uma variante, registre quem a relata, em que contexto, como começa, qual é o objetivo, quais ações são permitidas e como termina. Esse registro descreve aquela experiência e não se torna automaticamente regulamento universal. Participantes também criam e negociam regras, em vez de apenas repetir um modelo pronto. Amarelinha, pião e brincadeiras de perseguição podem ser investigados por suas versões concretas, sem que a aula precise reproduzir todos os modos existentes. Conhecer a tradição envolve ouvir seus praticantes e distinguir descrição de julgamento. Uma prática não é inferior por usar material simples, e um jogo novo não se torna tradicional apenas porque o professor o chama assim. Nesta aula, variante é um modo concreto de praticar registrado em determinado contexto; adaptação didática é uma mudança criada explicitamente para um objetivo de aprendizagem. Continuidade de transmissão e reconhecimento pelos praticantes ajudam a estudar uma tradição, sem instituir teste universal de autenticidade. Jogos e brincadeiras podem ter regras e graus diferentes de formalização; a distinção entre os termos varia conforme uso e abordagem, não exige uma oposição rígida. Todos os cenários chamados autorais hipotéticos são simulações didáticas, não relatos de pesquisa de campo. O Território do Brincar apresenta sua atuação como escuta, intercâmbio, registro e difusão da cultura infantil; consultar seus registros identificados é diferente de atribuir realidade a uma simulação desta aula.",
        "steps": [
          "Identifique a variante, o contexto e a pessoa ou fonte do registro.",
          "Descreva início, objetivo, materiais, ações e término.",
          "Compare diferenças sem chamar toda variante de erro.",
          "Separe informação documentada, hipótese de origem e adaptação criada na aula."
        ],
        "example": "Registro autoral hipotético: uma pessoa explica que aprendeu um jogo com irmãos, descreve material, início, ações e término e informa quando e onde costumava brincar. O registro documenta uma experiência de transmissão; não prova quem inventou a prática nem permite atribuir-lhe uma origem continental sem pesquisa adicional.",
        "pitfall": "Inventar etimologia ou comunidade de origem, tratar transmissão como cópia sem mudança ou elevar um relato local a regra universal."
      },
      {
        "level": "intermediate",
        "title": "Experimentar, adaptar e observar participação",
        "explanation": "Uma adaptação didática deve explicitar seu objetivo e as mudanças em relação à versão estudada. Pode alterar espaço, material, tempo, deslocamento, número de participantes ou critério de pontuação. Isso não a transforma em regra oficial de um esporte nem garante automaticamente inclusão. Antes de experimentar, combine regras compreensíveis, limites de espaço, possibilidade de pausa e materiais adequados ao grupo. A observação e a escuta indicam se a proposta favorece participação. Em um jogo de manter um objeto leve em circulação, por exemplo, permitir diferentes modos de envio pode ampliar possibilidades; a mudança precisa ser testada, porque algumas pessoas ainda podem ficar sem oportunidades. A duração da troca e o placar não medem sozinhos aprendizagem ou participação de cada pessoa. Compare quem recebe o objeto, quem decide, quanto tempo se espera e como participantes avaliam a experiência. A competição não é sempre excludente, e a cooperação não garante ausência de desigualdade. Não se deve atribuir automaticamente a um povo um sentido exclusivamente cooperativo nem copiar práticas rituais como exercícios genéricos. Para escolher uma proposta escolar, respeite as condições de espaço, conforto e participação; não imponha cargas pesadas ou esforços como prova de pertencimento cultural. Ajustes podem ser discutidos por necessidades funcionais e preferências, sem exigir exposição de diagnóstico de saúde. A versão adaptada deve ser identificada como tal e pode continuar sendo revista com os participantes. Uma variante escolar autoral inspirada na amarelinha pode ser descrita por inteiro: seis casas numeradas em sequência no chão, marcador macio, uma pessoa por vez no percurso e as demais fora da área de passagem. Na primeira rodada, lança-se o marcador à casa 1; se ele ficar dentro, percorrem-se as demais casas na ordem, sem pisar na casa marcada, volta-se pelo mesmo trajeto e recolhe-se o marcador. Nas rodadas seguintes, tenta-se a próxima casa. O grupo combina previamente se o percurso será feito por passos, saltos ou outra forma funcional de deslocamento. Se o marcador sair ou houver dificuldade, a tentativa termina e a pessoa retoma essa casa em sua próxima vez, sem eliminação. O objetivo é completar as seis casas respeitando a ordem e os acordos, não terminar antes de todos. Distâncias e trajetos devem permitir realização confortável e ser revistos. Esta é uma adaptação criada para estudo, não a regra de toda amarelinha; comparar com relatos locais permite identificar mudanças de objetivo, apoio, percurso e retorno. As seis casas da proposta foram escolhidas para esta sequência didática curta, que preserva casas, marcador e percurso como referências da amarelinha; não se afirma que esse número venha de registro de uma comunidade. Outro número pode ser testado conforme o objetivo. Para observar participação, registre ações como receber ou enviar o objeto, propor uma regra, decidir um percurso e tempo de espera, interpretando esses dados com a escuta do grupo.",
        "steps": [
          "Declare o objetivo da adaptação e quais regras foram alteradas.",
          "Combine limites, materiais e formas de pausa antes de começar.",
          "Observe oportunidades reais de ação e ouça participantes.",
          "Reveja a regra com base no resultado, sem prometer inclusão automática."
        ],
        "example": "Adaptação autoral hipotética de um percurso de casas: a turma reduz distâncias e oferece modos combinados de deslocamento, mantendo ordem e turnos. Depois verifica conforto, compreensão das regras e possibilidades de completar o trajeto. A mudança é identificada como escolar e permanece aberta à revisão, sem receber o rótulo de regra oficial de toda amarelinha.",
        "pitfall": "Afirmar que dois toques obrigatórios garantem participação, chamar uma adaptação de regra oficial ou exigir diagnóstico para negociar uma forma de jogar."
      },
      {
        "level": "advanced",
        "title": "Contextualização, mediação cultural e avaliação",
        "explanation": "Estudar uma prática cultural requer atenção a quem a realiza e ao sentido que assume naquele contexto. Um vídeo ou relato pode documentar determinada experiência, mas não representa automaticamente todas as pessoas de um povo ou todas as épocas. Registre autoria, local e data quando disponíveis e diferencie uma fonte consultada de uma demonstração autorizada para reprodução. Convites a praticantes e diálogo com comunidades podem aprofundar a aprendizagem; não basta substituir essa escuta por personagens genéricos ou inventar cantos e rituais. Uma adaptação escolar precisa ser apresentada como criação didática e não como reprodução fiel de uma cerimônia que não se conhece. A aprendizagem pode ser avaliada por capacidade de explicar regras, comparar variantes, justificar mudanças, respeitar acordos e refletir sobre participação. Ganhar partidas não é medida suficiente, e presença física não demonstra sozinha compreensão. Uma exposição, descrição oral ou registro escrito pode contribuir para aprender; não é obrigatório que toda avaliação seja apenas competição ou apenas vivência corporal. Compare evidências em relação ao objetivo e ofereça modos de expressão pertinentes. A salvaguarda de uma prática viva não exige congelar cada detalhe, mas tampouco autoriza apagar seus praticantes ou transformar todas as diferenças em versões intercambiáveis. O estudo pode produzir um repertório de registros com fontes e comentários, preservando distinções entre o que foi documentado, o que foi adaptado e o que permanece desconhecido. O objetivo é compreender e dialogar, sem proclamar domínio de uma tradição inteira após uma única aula. Como descritores formativos possíveis, uma pessoa pode ainda precisar de apoio para explicar a regra, depois descrevê-la com clareza e, em outra etapa, comparar variantes e justificar a adaptação. Esses descritores não são escala universal nem hierarquia de valor cultural. A UNESCO trata a salvaguarda do patrimônio imaterial em relação às comunidades e à transmissão e recriação das práticas; isso não torna toda criação escolar uma tradição documentada. Eventuais protocolos para visita, registro, imagem ou apresentação devem ser definidos no contexto e com seus detentores, sem supor autorização pelo simples acesso a um material público. As referências consultadas estão disponíveis na aba Materiais, em Autoria e referências.",
        "steps": [
          "Examine contexto, autoria e alcance da fonte consultada.",
          "Diferencie registro, autorização de uso e adaptação escolar.",
          "Defina evidências de aprendizagem além do placar ou da presença.",
          "Registre mudanças e incertezas sem inventar práticas rituais."
        ],
        "example": "Projeto autoral: a turma reúne relatos de brincadeiras de familiares e registros públicos identificados. Organiza versões, fontes e mudanças propostas para a escola. Ao apresentar o repertório, informa quais regras pertencem aos relatos e quais foram criadas para a atividade. Uma dúvida de origem fica marcada como dúvida, sem nome de povo inventado.",
        "pitfall": "Declarar uma cerimônia fiel com base em um resumo, inventar autorização ou avaliar compreensão exclusivamente por vitória ou desempenho físico."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dois relatos identificados usam o mesmo nome de brincadeira, mas descrevem regras diferentes de retorno ao jogo. Nenhum deles é um regulamento nacional. Qual registro é adequado?",
        "hint": "A tradição admite variantes; preserve contexto e não transforme uma descrição local em norma universal.",
        "options": [
          "Apagar o relato menos parecido com a experiência pessoal do pesquisador.",
          "Registrar as duas variantes, seus contextos e regras, sem declarar uma universal apenas pelo nome.",
          "Concluir que uma comunidade inventou a brincadeira e todas as outras copiaram, sem fonte.",
          "Misturar regras e atribuir a combinação como tradição idêntica de todos os lugares."
        ],
        "correctIndex": 1,
        "solution": "B preserva a diversidade documentada e o alcance de cada relato. A substitui investigação por preferência pessoal. C inventa origem e difusão sem evidência. D apaga diferenças e atribui a todos uma combinação que não foi registrada como tal. Reconhecer variantes não impede compará-las; exige identificar o que se sabe e em qual contexto."
      },
      {
        "level": "intermediate",
        "prompt": "Em uma adaptação escolar autoral com objeto leve, poucas pessoas concentram as ações, embora a troca dure bastante. O objetivo é ampliar oportunidades de participação. Qual ação atende ao problema sem garantir resultado antes do teste?",
        "hint": "Duração da troca não informa quantas oportunidades cada pessoa teve. Procure observação, escuta e revisão da regra.",
        "options": [
          "Declarar inclusão comprovada somente porque a troca foi longa.",
          "Manter tudo e avaliar apenas quem executou mais ações.",
          "Exigir diagnóstico médico dos participantes para qualquer mudança de regra.",
          "Testar mudanças de distância, organização e formas de envio, ouvindo participantes e comparando oportunidades de ação."
        ],
        "correctIndex": 3,
        "solution": "D relaciona mudanças ao objetivo, testa resultados e inclui a escuta do grupo. A confunde duração coletiva com participação distribuída. B reforça o problema e usa volume de ações como único critério. C exige informação sensível que não é necessária para negociar ajustes funcionais no cenário. A estratégia não promete inclusão automática: sua adequação precisa ser observada e revista."
      },
      {
        "level": "advanced",
        "prompt": "Uma turma pretende apresentar uma prática de comunidade que conhece apenas por um breve registro. Quer distinguir estudo, adaptação e reprodução cultural. Qual proposta é adequada?",
        "hint": "Informação incompleta não autoriza inventar canto, ritual, origem ou consentimento.",
        "options": [
          "Identificar a fonte e seu alcance, buscar contexto e diálogo quando possível e nomear como adaptação escolar as mudanças criadas pela turma.",
          "Criar cantos e atribuí-los à comunidade para a apresentação parecer autêntica.",
          "Afirmar que o registro representa todas as pessoas da comunidade em todas as épocas.",
          "Tratar o uso de um nome cultural como prova de autorização de reprodução integral."
        ],
        "correctIndex": 0,
        "solution": "A preserva contexto e diferencia criação escolar de reprodução fiel, sem fingir um conhecimento que a turma não tem. B inventa material e atribuição. C universaliza o alcance de um registro breve. D confunde o uso de um nome com autorização. O estudo pode avançar com fontes e diálogo, mantendo explícito o que é conhecido, o que foi adaptado e o que exige mais investigação."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Eletricidade e ondas",
    "objective": "Relacionar corrente, tensão, resistência, potência e energia em circuitos ideais, reconhecer ondas mecânicas e eletromagnéticas e calcular comprimento de onda e energia por fóton com unidades e hipóteses explícitas.",
    "prerequisites": [
      "Aritmética básica e álgebra elementar",
      "Conceitos de carga elétrica, corrente, tensão e resistência",
      "Unidades do SI: ampere, volt, ohm, watt, joule, hertz, metro"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Lei de Ohm e associação de resistores em série e paralelo",
        "explanation": "Corrente elétrica mede a taxa de passagem de carga; tensão é diferença de potencial, relacionada à energia transferida por unidade de carga. Resistência relaciona tensão e corrente nas condições consideradas. A lei de Ohm estabelece a relação linear entre tensão (U), corrente (i) e resistência (R) em condutores ôhmicos: U = R · i. A tensão é medida em volts (V), a corrente em amperes (A) e a resistência em ohms (Ω). Em circuitos reais, resistores podem ser associados de duas formas principais. Em série, a mesma corrente atravessa todos os elementos e a resistência equivalente é a soma das resistências individuais: R_eq = R₁ + R₂ + ... + Rₙ. A tensão total divide-se proporcionalmente às resistências. Em paralelo, a tensão é a mesma em todos os ramos e a corrente total divide-se; a resistência equivalente satisfaz 1/R_eq = 1/R₁ + 1/R₂ + ... + 1/Rₙ, para pelo menos dois resistores de resistência positiva e finita, resultando em R_eq menor que a menor resistência individual. Para circuitos mistos, simplifica-se passo a passo: identifica-se grupos em série ou paralelo, calcula-se a equivalente e repete-se até obter um único resistor. A potência dissipada por um resistor é P = U · i = R · i² = U²/R, medida em watts (W). A energia consumida em um intervalo de tempo é E = P · t, em joules (J) se t estiver em segundos. Em aplicações práticas, deve-se respeitar a potência nominal dos resistores para evitar superaquecimento. Nos cálculos seguintes, os resistores são ôhmicos com resistência constante, a fonte é ideal e os fios têm resistência desprezada. A relação linear não deve ser generalizada a todo componente ou a qualquer temperatura. Os valores descrevem modelos de cálculo, não instruções de intervenção em instalações elétricas.",
        "steps": [
          "Identifique a configuração do circuito: resistores em série, paralelo ou misto.",
          "Calcule a resistência equivalente usando as fórmulas de série (soma) ou paralelo (inverso da soma dos inversos).",
          "Aplique a lei de Ohm (U = R · i) para encontrar a grandeza desconhecida (tensão, corrente ou resistência).",
          "Se necessário, calcule potência (P = U · i) e energia (E = P · t)."
        ],
        "example": "Um circuito tem uma bateria de 12 V ligada a dois resistores em série: R₁ = 4 Ω e R₂ = 8 Ω. A corrente no circuito é i = U / (R₁ + R₂) = 12 V / 12 Ω = 1 A. A tensão em R₁ é U₁ = 4 Ω × 1 A = 4 V e em R₂ é U₂ = 8 Ω × 1 A = 8 V. A potência total dissipada é P = 12 V × 1 A = 12 W.",
        "pitfall": "Confundir a fórmula do paralelo (soma dos inversos) com a soma direta das resistências, o que leva a valores de R_eq maiores que o correto."
      },
      {
        "level": "intermediate",
        "title": "Energia em circuitos e características das ondas",
        "explanation": "Circuitos mistos combinam associações em série e paralelo. A estratégia de resolução consiste em identificar subconjuntos que estão exclusivamente em série ou exclusivamente em paralelo, substituí-los por sua resistência equivalente e iterar até obter um único resistor equivalente visto pela fonte. Após encontrar a corrente total fornecida pela fonte, usa-se a divisão de tensão (em série) e divisão de corrente (em paralelo) para determinar as grandezas em cada resistor individual. A potência dissipada em cada resistor pode ser calculada por P = R · i² (usando a corrente naquele resistor) ou P = U²/R (usando a tensão nele). A potência total fornecida pela fonte é igual à soma das potências dissipadas em todos os resistores (conservação de energia). A simplificação só é válida se as conexões realmente definem série ou paralelo; aparência do desenho não basta. Nem toda rede pode ser reduzida por essas duas operações. A energia elétrica consumida em um período é E = P · t; em quilowatt-hora (kWh), usa-se potência em kW e tempo em horas. Fatores práticos: resistores têm tolerância (ex.: ±5%), a resistência varia com temperatura (coeficiente de temperatura), e fios reais têm resistência não nula, embora muitas vezes desprezada em problemas didáticos. Onda é uma perturbação que se propaga. Ondas mecânicas, como som no ar e perturbações em uma corda, exigem meio material; ondas eletromagnéticas, como luz e rádio, também podem propagar-se no vácuo. Em um modelo periódico, período T é o tempo de um ciclo e frequência f = 1/T conta ciclos por segundo. Comprimento de onda λ é a distância de repetição espacial e v = λf relaciona essas grandezas. Amplitude descreve a dimensão da oscilação e não é a mesma coisa que frequência. Em uma corda idealizada, a perturbação pode levar energia sem que um ponto material viaje junto com a onda por todo o percurso. A velocidade de propagação depende da onda e do meio: não se aplica a velocidade da luz no vácuo ao som no ar.",
        "steps": [
          "Simplifique o circuito passo a passo: combine resistores em série (soma) e em paralelo (inverso da soma dos inversos) até obter R_eq total.",
          "Calcule a corrente total da fonte: i_total = U_fonte / R_eq.",
          "Retroceda a simplificação: use divisão de tensão (série) e divisão de corrente (paralelo) para achar U e i em cada resistor original.",
          "Calcule potência individual (P = R · i² ou U²/R) e potência total; verifique se a soma coincide com P_fonte = U_fonte · i_total.",
          "Diferencie meio de propagação, amplitude, período e comprimento de onda antes de aplicar v = λf."
        ],
        "example": "Considere uma bateria de 24 V ligada a R₁ = 6 Ω em série com a associação paralela de R₂ = 12 Ω e R₃ = 12 Ω. O paralelo equivale a 6 Ω (12||12 = 6). R_eq total = 6 + 6 = 12 Ω. i_total = 24 V / 12 Ω = 2 A. Tensão em R₁: U₁ = 6 Ω × 2 A = 12 V. Tensão no paralelo: U_par = 24 V - 12 V = 12 V. Corrente em cada R₂ e R₃: i = 12 V / 12 Ω = 1 A. Potência em R₁: 6 Ω × (2 A)² = 24 W. Em cada R₂/R₃: 12 Ω × (1 A)² = 12 W. Total: 24 + 12 + 12 = 48 W = 24 V × 2 A.",
        "pitfall": "Esquecer que a divisão de corrente no paralelo usa as condutâncias (inverso das resistências) e não as resistências diretamente, invertendo a proporção."
      },
      {
        "level": "advanced",
        "title": "Ondas eletromagnéticas: frequência, comprimento de onda e energia do fóton",
        "explanation": "Ondas eletromagnéticas propagam-se no vácuo à velocidade da luz c ≈ 3,00 × 10⁸ m/s. A relação fundamental entre frequência f (Hz), comprimento de onda λ (m) e velocidade é c = λ · f. A energia de um fóton é dada por E = h · f, onde h = 6,626 × 10⁻³⁴ J·s é a constante de Planck. Alternativamente, E = h · c / λ. O espectro eletromagnético vai de ondas de rádio (f ~ 10³–10⁹ Hz, λ ~ 10⁵–10⁻¹ m) a raios gama (f > 10¹⁹ Hz, λ < 10⁻¹¹ m). A luz visível ocupa aproximadamente 4,3 × 10¹⁴ Hz (vermelho) a 7,5 × 10¹⁴ Hz (violeta), correspondendo a λ ≈ 700 nm a 400 nm. A energia de fótons de luz visível está na faixa de 1,8 a 3,1 eV (1 eV = 1,602 × 10⁻¹⁹ J). Na refração em uma interface estacionária entre meios usuais transparentes, a frequência da onda transmitida permanece a da incidente; se sua velocidade muda, seu comprimento de onda também muda, pois v = λf. O índice n relaciona a velocidade de fase a c por v = c/n no modelo adotado. Para uma onda eletromagnética plana harmônica no vácuo, a intensidade média é proporcional ao quadrado da amplitude do campo elétrico; mantendo essa amplitude, não se acrescenta um fator de frequência à relação. Energia por fóton, E = hf, não é a mesma grandeza que intensidade ou potência total: esta também depende do fluxo de fótons. Aplicações: comunicações (rádio, micro-ondas), aquecimento (micro-ondas, infravermelho), imagem (raios X, UV), medicina (raios X, gama). Cálculos exigem atenção às potências de dez e unidades consistentes: f em Hz, λ em m, c em m/s, h em J·s, E em J.",
        "steps": [
          "Identifique a grandeza conhecida (f, λ ou E) e a incógnita.",
          "Use c = λ · f para converter entre frequência e comprimento de onda no vácuo.",
          "Use E = h · f ou E = h · c / λ para calcular a energia do fóton.",
          "Verifique a ordem de grandeza: f em GHz (10⁹ Hz) → λ em cm; f em THz (10¹² Hz) → λ em µm; E em eV para fótons ópticos."
        ],
        "example": "Uma onda de rádio FM transmite a f = 100 MHz = 1,00 × 10⁸ Hz. No vácuo, λ = c / f = (3,00 × 10⁸ m/s) / (1,00 × 10⁸ Hz) = 3,00 m. A energia de um fóton é E = h · f = (6,626 × 10⁻³⁴ J·s) × (1,00 × 10⁸ Hz) = 6,63 × 10⁻²⁶ J ≈ 4,14 × 10⁻⁷ eV.",
        "pitfall": "Usar f em MHz ou GHz diretamente na fórmula E = h · f sem converter para Hz, o que produz energias erradas por fatores de 10⁶ ou 10⁹."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um resistor ôhmico de 15 Ω é percorrido por uma corrente constante de 0,8 A. Qual é a tensão nos terminais desse resistor?",
        "hint": "Aplique diretamente a lei de Ohm: U = R · i, com R em ohms e i em amperes.",
        "solution": "Pela lei de Ohm nas condições dadas, U = R·i = 15·0,8 = 12 V: A. B, 18,75 V, corresponde numericamente a dividir 15 por 0,8, operação que não calcula tensão pela relação U = R·i. C, 1,875 V, não é o produto dos dados; não há necessidade de inventar uma troca específica de corrente para justificá-lo. D, 120 V, corresponde a multiplicar 15 por 8, ignorando a vírgula. Unidades e ordem de grandeza ajudam a conferir o resultado.",
        "options": [
          "12 V",
          "18,75 V",
          "1,875 V",
          "120 V"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Uma bateria ideal de 18 V alimenta um circuito com três resistores: R₁ = 6 Ω em série com a associação paralela de R₂ = 12 Ω e R₃ = 12 Ω. Qual é a potência total dissipada no circuito? Considere fios ideais e resistores ôhmicos de resistência constante.",
        "hint": "Primeiro calcule a resistência equivalente do paralelo (R₂||R₃), some com R₁ para obter R_eq total, ache a corrente total e depois P_total = U · i_total.",
        "solution": "O paralelo de 12 Ω com 12 Ω equivale a 6 Ω (produto/soma = 144/24 = 6, ou inverso da soma dos inversos). R_eq total = 6 Ω + 6 Ω = 12 Ω. i_total = 18 V / 12 Ω = 1,5 A. P_total = U · i_total = 18 V × 1,5 A = 27 W. A alternativa B (27 W) está correta. A alternativa A (13,5 W) seria a potência apenas em R₁ (6 Ω × 1,5² A = 13,5 W) ou no conjunto paralelo (6 Ω × 1,5² A = 13,5 W), ignorando a outra parte. A alternativa C (54 W) resultaria de usar i = 3 A (dobro da corrente real, como se R_eq = 6 Ω). A alternativa D (108 W) corresponderia a P = U²/R com R = 3 Ω (valor incorreto de R_eq).",
        "options": [
          "13,5 W",
          "27 W",
          "54 W",
          "108 W"
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Uma onda eletromagnética no vácuo tem frequência f = 2,5 GHz. Qual é a energia de um único fóton dessa onda? (Use h = 6,63 × 10⁻³⁴ J·s e c = 3,00 × 10⁸ m/s)",
        "hint": "Converta GHz para Hz (1 GHz = 10⁹ Hz) e use E = h · f.",
        "solution": "Converta f = 2,5 GHz = 2,5·10⁹ Hz. A energia de um fóton é E = hf = 6,63·10⁻³⁴·2,5·10⁹ = 1,6575·10⁻²⁴ J, aproximadamente 1,66·10⁻²⁴ J: C. A, 1,66·10⁻³³ J, aproxima o resultado de usar somente 2,5, omitindo o fator 10⁹; não corresponde a usar MHz. B é dez vezes menor que o valor correto. D é um bilhão de vezes maior. O cálculo pede energia individual, não potência total de uma fonte, que exigiria informação adicional.",
        "options": [
          "1,66 × 10⁻³³ J",
          "1,66 × 10⁻²⁵ J",
          "1,66 × 10⁻²⁴ J",
          "1,66 × 10⁻¹⁵ J"
        ],
        "correctIndex": 2
      }
    ]
  }
];

export const authoredCurriculumBatch07ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Operações, divisibilidade e conjuntos numéricos",
    "contentSha256": "9be2a939dec2e73c45249889498753f5afc137eeda9b458e853725844ef564a6",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/elementary-algebra-2e/pages/1-8-the-real-numbers",
      "https://openstax.org/books/elementary-algebra-2e/pages/1-9-properties-of-real-numbers",
      "https://openstax.org/books/prealgebra-2e/pages/2-4-find-multiples-and-factors",
      "https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple",
      "https://openstax.org/books/prealgebra-2e/pages/10-6-introduction-to-factoring-polynomials",
      "https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Lista: √16=4, −7/3, 0, √2, 4,5=9/2, −√9=−3, 2/5. Seis são racionais (inteiros, frações, decimal finito); apenas √2 é irracional. Gabarito 6 (índice 1) correto. Distratores: 4 exclui dois racionais, 5 exclui um, 7 inclui √2 indevidamente."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "MDC×MMC = a×b → 12×720 = 60×b → b=144. Verificação: 60=2²·3·5, 144=2⁴·3² → MDC=2²·3=12, MMC=2⁴·3²·5=720. Alternativas 120,180,240 dão MDC=60 e MMC igual a si mesmas, falhando nas duas condições."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Sistema: x≡2(mod3), x≡3(mod5), x≡2(mod7). 23 satisfaz: 23=3·7+2=5·4+3=7·3+2. Menores positivos com resto 3 por 5: 3,8,13,18. Só 8 dá resto 2 por 3, mas 8≡1(mod7). 53≡4(mod7), 38≡3(mod7), 68≡5(mod7) — todos falham na 3ª condição. 23 é o menor."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Gêneros textuais e tipos de discurso",
    "contentSha256": "fe193f98f7368f910fdc452e028075d00f760795ff79e9c7948e1c25c55d3757",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://dt.dge.mec.pt/index.php?id=n641",
      "https://estudoautonomo.dge.mec.pt/recurso/discurso-direto-e-discurso-indireto",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/discurso-direto-livre-vs-discurso-indireto-livre/34345",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/rhetorical_situation/index.html",
      "https://openstax.org/books/writing-guide/pages/18-1-mixing-genres-and-modes",
      "https://openstax.org/books/writing-guide/pages/18-3-glance-at-genre-genre-audience-purpose-organization"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "O fragmento usa verbos no imperativo ('Separe', 'Misture', 'distribua') orientando ações futuras, o que caracteriza a sequência injuntiva; a finalidade comunicativa de instruir preparo identifica o gênero como 'receita'. A opção B mapeia corretamente os dois planos. A opção A lê imperativos como narrativa passada. A opção C impõe estrutura editorial inexistente. A opção D inverte a hierarquia conceitual chamando 'injunção' de gênero."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "O enunciado original 'Entreguei o relatório hoje' (terça-feira) exige no discurso indireto: sujeito em terceira pessoa 'Camila', mais-que-perfeito 'havia entregado' para ação concluída antes do passado de referência, e 'naquele dia' ancorando à terça-feira. A opção D satisfaz todos os requisitos. A opção A usa condicional 'entregaria' projetando futuro. A opção B insere negação 'não' ausente. A opção C substitui 'entregado' por 'recebido'. A pede reformulação fiel, não verificação fática da entrega."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A descrição fornece apenas recursos multimodais (foto do produto, preço em destaque, imperativo 'Compre agora') a serviço da persuasão comercial. Não há dados de testes de qualidade, métricas de distribuição ou detalhes algorítmicos. A opção A infere corretamente a articulação persuasiva sem sobreclaim. A opção B converte ilicitamente destaque de preço em certificação de qualidade. A opção C iguala publicidade a fraude comprovada. A opção D alucina transparência algorítmica a partir de um botão de chamada para ação."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Romantismo e nacionalismo",
    "contentSha256": "07204e9e7299973a918990256e0b5d87e73a781dedfbbe82188f702c18c71372",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.academia.org.br/academicos/goncalves-de-magalhaes/bibliografia",
      "https://academia.org.br/academicos/jose-de-alencar/bibliografia",
      "https://www.academia.org.br/academicos/goncalves-dias/textos-escolhidos",
      "https://www.academia.org.br/academicos/alvares-de-azevedo/biografia",
      "https://www.academia.org.br/academicos/castro-alves/textos-escolhidos",
      "https://bndigital.bn.gov.br/dossies/literatura-matriz-afro-brasileira/obras-no-catalogo-da-biblioteca-nacional/maria-firmina-dos-reis-1822/",
      "https://pt.wikisource.org/wiki/%C3%9Arsula/IX",
      "https://revistaseletronicas.pucrs.br/letronica/article/view/35105",
      "https://seer.ufu.br/index.php/historiaperspectivas/article/view/19408"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa C identifica corretamente que memória e idealização constroem pertencimento afetivo, procedimento central da poesia romântica nacionalista (ex.: Canção do exílio). A transforma a lembrança em comprovação científica de perfeição integral. B nega a relação entre subjetividade e lugar, contrariando a idealização informada. D comete erro de atribuição: o texto é declarado hipotético, sem autoria real nem data identificável. O gabarito mantém a distinção entre procedimento literário e comprovação científica."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A alternativa A é metodologicamente adequada: permite analisar a obra como construção estética de imagem nacional sem tomá-la por registro neutro de todos os povos, mantendo a mediação literária. B confunde ficção com descrição etnográfica integral. C generaliza indevidamente a partir de um procedimento narrativo. D descarta a ficção como fonte para história das representações, contrariando a orientação da aula de que a ficção pode ser estudada criticamente nesse sentido."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa D usa a autoria de Maria Firmina dos Reis como contraexemplo que refuta a universalidade da frase 'toda literatura foi escrita apenas por homens brancos', sem concluir igualdade de oportunidades — inferência lógica correta (um contraexemplo basta para refutar 'todos'). A ignora a evidência. B comete falácia de generalização a partir de um caso. C atribui à autora e sua obra a representação de todas as posições do período, o que a aula explicitamente evita ao alertar contra 'converter identidade nacional em essência fixa'."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Paragrafação e conectivos",
    "contentSha256": "8b69be3ebabaae06bd569edd5d8034cc55ab7fe51aca9d615c3f96c049172b1b",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/",
      "https://owl.purdue.edu/owl/general_writing/mechanics/transitions_and_transitional_devices/transitional_devices.html",
      "https://writing.wisc.edu/handbook/grammarandstyle/transitions/",
      "https://www.umass.edu/writing-center/resources/flow-cohesion",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/conjuncao-vs-conetor/31187",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/contudo-portanto-entretanto-conjuncoes-ou-adverbios/35095"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "O enunciado pede continuação que desenvolva diretamente o foco 'horários compatíveis com quem trabalha de dia'. Opção B propõe abertura noturna com planejamento de equipe, medida pertinente ao foco. A, C e D mencionam biblioteca/livros mas não tratam de horário; compartilhar tema geral não garante pertinência ao foco específico. O gabarito 1 está correto e a resolução explica cada distrator."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "O texto base afirma ampliação de horário; a segunda frase diz que moradores seguem sem transporte no novo período. A relação é restrição/contraste à expectativa de que a ampliação resolveria o acesso. 'No entanto' marca esse contraste sem negar o fato anterior. 'Além disso' sinaliza acréscimo, 'Por exemplo' introduz ilustração, 'Portanto' encaminha conclusão não sustentada (o texto não diz que ampliação causou falta de transporte). Gabarito 3 correto."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "O primeiro parágrafo apresenta duas informações: (1) novas vagas abertas, (2) transporte ainda impede parte do público. O objetivo explícito é retomar nominalmente o obstáculo de deslocamento (informação 2) como objeto de exame. Opção C retoma 'essa dificuldade de transporte' e a coloca como foco. A inverte para 'facilidade', B inventa 'extinção de todas as rotas' (ausente no texto), D retoma 'ampliação de vagas' (informação 1, não o obstáculo pedido). Gabarito 2 correto."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Tempos e aspectos verbais",
    "contentSha256": "404a4317d4e767d762982c6a3ad6db16c33faf1c33ecfb3064e611955840e0d6",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-simple",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-continuous",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-perfect",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-continuous-future-perfect",
      "https://dictionary.cambridge.org/uk/grammar/british-grammar/future-perfect-continuous",
      "https://dictionary.cambridge.org/grammar/british-grammar/when"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Sujeito Nara (3ª pessoa singular) exige -s no simple present afirmativo (manages) e is + -ing no present continuous (is working). Opção A falha no -s, B usa are com she, D usa does manages (does pede forma base) e omite auxiliar em working. O raciocínio independe de 'usually' como gatilho rígido."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Cenário pede marcação explícita de anterioridade a ponto passado (opened) via past perfect simples: had + particípio (had completed). B é past continuous (processo, não conclusão anterior), C é present perfect (ligação ao presente), D usa completing após had (forma inválida). A solução nota que nem toda narrativa ordenada exige past perfect, mas aqui a forma foi solicitada."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Primeira oração é pergunta indireta (Do you know when the train will arrive?) — will permitido, sujeito antes do auxiliar. Segunda é oração temporal com referência futura (when it arrives) — presente simples com -s em it. A e B inserem -s indevido após modal will; C inverte ordem na indireta e omite -s em arrive com it. A função da oração, não a presença de when, dita a forma."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Leitura global e localização de informações em espanhol",
    "contentSha256": "ff7a63fd09172fa89cdd0df48cbeb2021ae292faa2a827b22ff217e161b7ff46",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/asele/pdf/09/09_0794.pdf",
      "https://www.euskadi.eus/contenidos/documentacion/inn_doc_lenguas/es_def/adjuntos/500011c_Pub_BGN_orienta_lectura_ESO.pdf",
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/diccio_ele/diccionario/comprensionlectora.htm",
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/diccio_ele/diccionario/inferencia.htm",
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/diccio_ele/diccionario/marcadoresdiscurso.htm"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B sintetiza corretamente os três elementos do aviso: oficina de reparação, combinação de demonstração e prática, e orientação de trazer objeto para exame em grupo. A inventa venda de ferramentas e elimina a prática. C contradiz 'deberán traer un objeto sencillo para examinarlo en grupo'. D inventa suspensão definitiva quando o texto anuncia início ('comenzará')."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "D recupera exatamente 'por correo' (canal) e 'hasta el miércoles' (prazo). A transfere 'recepción' e 'viernes' da publicação da lista para o envio e ignora 'No se recibirán solicitudes en persona'. B troca ações e datas: a lista será publicada na sexta-feira, não na quarta. C ignora canal indicado e a proibição explícita. O local da lista não se torna automaticamente local de inscrição."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A preserva 'considera útil' (avaliação favorável), 'todavía no ha decidido' (decisão pendente) e 'podría' (possibilidade de anúncio). B converte 'podría' em certeza e confunde anúncio de resposta com início da ampliação. C troca 'algunos' por 'todos', inverte o pedido (pedem ampliação, não rejeitam) e inventa cancelamento. D inventa aplicação e pesquisa inexistentes. O texto não permite concluir aprovação ou rejeição necessária."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Cinemática escalar e vetorial",
    "contentSha256": "b52b378235f06ae0e2dc73c3281357c4eeac1a720c523ba431abac161df189ba",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/university-physics-volume-1/pages/3-1-position-displacement-and-average-velocity",
      "https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration",
      "https://openstax.org/books/university-physics-volume-1/pages/4-1-displacement-and-velocity-vectors",
      "https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion",
      "https://openstax.org/books/university-physics-volume-1/pages/4-4-uniform-and-nonuniform-circular-motion",
      "https://openstax.org/books/university-physics-volume-1/pages/4-5-relative-motion-in-one-and-two-dimensions"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "Trecho 1: Δs1 = v1·Δt1 = (-4 m/s)·3 s = -12 m. Trecho 2: Δs2 = v2·Δt2 = (+6 m/s)·2 s = +12 m. Deslocamento total Δs = -12 + 12 = 0 m. Distância d = |Δs1| + |Δs2| = 12 + 12 = 24 m. Opção A corresponde exatamente. B inverte os valores, C considera só o primeiro trecho, D só o segundo."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "v0x = 30·cos37° = 30·0,8 = 24 m/s; v0y = 30·sen37° = 30·0,6 = 18 m/s. Equação vertical com origem no solo: y(t) = 45 + 18t - 5t² = 0 → 5t² - 18t - 45 = 0. Raiz positiva t = (18 + √1224)/10 ≈ 5,299 s. Alcance x = v0x·t ≈ 24·5,299 ≈ 127,2 m → 127 m. B (86 m) usa t=3,6 s (retorno à altura inicial). C (72 m) corresponde a t=3 s (y=54 m). D (144 m) corresponde a t=6 s (y=-27 m)."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Referencial S' move-se com velocidade constante (4i+3j) m/s em relação a S inercial → aceleração da origem A = 0. Para eixos paralelos, mesma orientação, sem rotação e tempo comum, a transformação de Galileu para aceleração é a = a' + A. Logo a = a' = (1i+2j) m/s². B e C têm componentes arbitrárias. D confunde a velocidade da origem (4,3) com aceleração, mas sua derivada é nula. A velocidade da partícula v' não entra no cálculo da aceleração."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Matéria, transformações e separação de misturas",
    "contentSha256": "2068093a7810106ff858011f110273ec3af8f49370e0b1ca724ce0242937dc6c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter",
      "https://openstax.org/books/chemistry-2e/pages/1-3-physical-and-chemical-properties",
      "https://ocw.mit.edu/courses/res-5-0001-digital-lab-techniques-manual-spring-2007/resources/distillation-i-simple-fractional-distillations/index.html",
      "https://chemlab.truman.edu/files/2015/07/Fractional-Distillation-2017.pdf",
      "https://www.epa.gov/system/files/documents/2024-03/ws-commercial-bmp-watersenseatwork_section7.1_waterpurification.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Déficit = 150 - (90 + 55) = 5 g. Opção C acerta o valor e a interpretação: os dados não permitem concluir causa (erro de medida, material retido, volatilização, etc.). A erra o valor (0 g). B erra o valor (10 g) e infere reação química sem base. D erra o valor (15 g) e atribui a evaporação do sal, que é não volátil."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Objetivo: separar ferro (magnético), reter areia (insolúvel), recuperar água (solvente). B: ímã remove ferro; água dissolve sal; filtração retém areia e passa solução; destilação com condensação recolhe água e deixa sal no resíduo. A propõe peneiração de sal dissolvido (impossível). C diz que filtração comum retém sal dissolvido (falso). D evapora sem condensação, não recupera água."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Massa inicial 200 g (20 g sal + 180 g água). Destilados 80 g de água pura. Resíduo = 200 - 80 = 120 g. Sal permanece 20 g (não volátil, sem perdas). % m/m = (20/120)×100 = 16,666...% ≈ 16,7%. D está correto. A usa 10% (porcentagem inicial, ignora remoção de solvente). B mantém massa total 200 g (não subtrai destilado). C confunde destilado (80 g) com resíduo e calcula 20/80 = 25%."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Células, organelas e membranas",
    "contentSha256": "1536a3f5b28a94ca341c75c7b0da21dc7645a12f7f11de8b74e34d21cbadad93",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells",
      "https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells",
      "https://openstax.org/books/biology-2e/pages/4-4-the-endomembrane-system-and-proteins",
      "https://openstax.org/books/biology-2e/pages/5-1-components-and-structure",
      "https://openstax.org/books/biology-2e/pages/5-2-passive-transport",
      "https://openstax.org/books/biology-2e/pages/5-3-active-transport"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A célula de raiz sem cloroplastos mantém mitocôndrias (respiração aeróbia) e ribossomos (síntese proteica). Opção A captura essa compatibilidade funcional sem exclusividade indevida. B atribui síntese proteica só a cloroplastos (falso). C confunde mitocôndrias com célula animal (vegetais também as têm). D faz nexo inexistente entre ausência de cloroplasto e membrana plasmática. O gabarito A está correto e os distractores são bem fundamentados."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Quantidade de partículas osmoticamente ativas conservada: 300 mOsm/L × 0,012 L = 3,6 mOsm. No equilíbrio idealizado, Vfinal = 3,6 mOsm / (400 mOsm/L) = 0,009 L = 9 mL. A bolsa perde 3 mL de água: C. A inverte a direção e a razão; B nega a permeabilidade à água dada; D confunde volume perdido com restante. O número 3600 obtido com mL sem conversão não tem unidade mOsm: seria necessário dividir por 1000."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "Proteína transmembrana na rota convencional: domínio luminal do RE → lúmen do Golgi → lúmen da vesícula secretora → meio extracelular na fusão (exocitose). A orientação é preservada; o lúmen vesicular se torna contínuo com o exterior. Opção B descreve corretamente essa topologia. A introduz destino mitocondrial não informado. C exige inversão de topologia que contradiz o enunciado. D inventa passagem nuclear obrigatória. Gabarito B correto."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Antiguidade oriental e clássica",
    "contentSha256": "3bfb0f9d7419a928dec2ed0cb99b1095ad72afdf0ba8563a591b64b527f7396c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/world-history-volume-1/pages/3-2-ancient-mesopotamia",
      "https://openstax.org/books/world-history-volume-1/pages/3-3-ancient-egypt",
      "https://openstax.org/books/world-history-volume-1/pages/6-2-ancient-greece",
      "https://openstax.org/books/world-history-volume-1/pages/6-4-the-roman-republic",
      "https://www.louvre.fr/en/the-code-of-hammurabi",
      "https://www.metmuseum.org/essays/kings-and-queens-of-egypt",
      "https://www.athenian-democracy.gr/en/",
      "https://resources.metmuseum.org/resources/metpublications/pdf/Roman_Art_A_Resource_for_Educators.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A questão básica testa a capacidade de comparar Mesopotâmia e Egito sem generalizações indevidas. A opção D é a única que espelha o procedimento ensinado: comparar períodos e tipos de fonte, reconhecendo mudanças políticas e finalidades dos registros. A opção A reproduz a oposição binária rejeitada no texto ('Egito sempre unido, Mesopotâmia sempre fragmentada'). A opção B impõe determinismo geográfico (irrigação → regime único), refutado na seção. A opção C confunde legitimação régia com consenso universal, erro explicitamente alertado no pitfall. O gabarito 3 está correto e a resolução independente confirma a coerência com a explicação e o example da seção básica."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A questão intermediária avalia a compreensão da democracia ateniense como participação direta de cidadãos homens coexistindo com exclusões formais, sem apagar a atuação social dos grupos excluídos. A opção B captura essa nuance: 'democracia direta de cidadãos coexistia com exclusões; ausência de voto não implica inexistência de atuação social dos excluídos'. A opção A comete anacronismo de sufrágio universal. A opção C infere inexistência de atividade econômica/religiosa a partir da exclusão política — falácia de escopo que o texto adverte (pitfall e example). A opção D generaliza eleição única, ignorando o sorteio para muitas funções. O gabarito 1 está correto e a resolução valida a distinção entre corpo cidadão e totalidade dos residentes."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A questão avançada exige distinguir permanência institucional de mudança efetiva de poder no Principado. A opção A expressa corretamente: 'Instituições republicanas podiam continuar existindo enquanto sua posição no conjunto de poder era transformada'. A opção B nega a concentração de autoridade apenas pela existência do Senado, contradizendo o enunciado. A opção C afirma abolição simultânea de todas as instituições e vocabulário republicano, o que o texto nega explicitamente ('O Principado não equivale nem a continuidade sem mudança nem a abolição instantânea'). A opção D inventa consequências (fim da escravidão, igualdade universal) sem base no arranjo político descrito. O gabarito 0 está correto e a resolução confirma a compatibilidade entre forma e substância alterada."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Geologia e estrutura terrestre",
    "contentSha256": "eb07f3ce3fc3bc16bf826b9d339344c0396d9c08d89352f456296e6206147e95",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://pubs.usgs.gov/gip/interior/index.html",
      "https://pubs.usgs.gov/gip/dynamic/understanding.html",
      "https://pubs.usgs.gov/gip/dynamic/hotspots.html",
      "https://www.lpi.usra.edu/education/step2012/participant/rockCycle.shtml",
      "https://www.usgs.gov/faqs/can-you-predict-earthquakes",
      "https://www.nps.gov/subjects/geology/plate-tectonics-inner-earth-model.htm"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Opção D é a única que separa classificação mecânica (litosfera = crosta + parte do manto) da composicional e reconhece manto sólido com deformação lenta. A confunde litosfera com crosta; B transforma manto inteiro em líquido; C erra estado do núcleo externo (líquido) e propriedade de ondas P (atravessam líquidos). Gabarito e explicação de distractores estão corretos."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Diferença de idades: 8-2=6 Ma. Deslocamento: 8 cm/ano × 6.000.000 anos = 48.000.000 cm = 480 km (÷100.000 cm/km). Centro jovem A (2 Ma) a NW do antigo C (8 Ma): placa carrega centros antigos na direção do movimento, logo move-se de A para C (SE). Opção A acerta distância e sentido; B inverte sentido; C erra conversão (fator 10); D dobra distância e inverte sentido. Cálculo e gabarito conferem."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Tomografia infere variação de velocidade, não composição direta. Opção C respeita alcance: permite investigar hipóteses térmicas/composicionais e limitações do modelo sem decidir sozinha. A salta para composição única; B confere poder de previsão específica de terremoto não autorizado; D generaliza anomalia regional para manto inteiro líquido. Gabarito e explicação de distractores estão corretos."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Iluminismo e Kant",
    "contentSha256": "d902f31322c3700e941ef68479b95ca0f7e5d3abf930a135b752805f7006b087",
    "draftMethod": "Autoria pelo Codex após tentativas de geração sem JSON válido no Claude Code; crítica em sessão independente do Claude Code",
    "verifiedSourceUrls": [
      "https://de.wikisource.org/wiki/Beantwortung_der_Frage%3A_Was_ist_Aufkl%C3%A4rung%3F",
      "https://www.gutenberg.org/files/4280/4280-h/4280-h.htm",
      "https://www.gutenberg.org/cache/epub/5682/pg5682.html",
      "https://plato.stanford.edu/entries/enlightenment/",
      "https://plato.stanford.edu/entries/kant/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B identifica corretamente o uso público da razão como intervenção de estudiosa diante de público leitor, independentemente do local físico (casa). A opção A confunde classificação pelo endereço doméstico, ignorando o critério do papel. A opção C cria proibição absoluta de crítica institucional no uso público, o que contradiz a defesa kantiana da crítica pública. A opção D dispensa a apresentação de razões examináveis, quando o cenário explicitamente as inclui. A resolução independe de regras jurídicas atuais e fideliza a distinção do ensaio de 1784."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A opção D articula corretamente a contribuição sensível (dados), a organização conceitual (entendimento) e o limite teórico (coisa em si não conhecida independentemente das condições). A opção A elimina a atividade do entendimento reduzindo conhecimento a cópia passiva. A opção B converte as condições de possibilidade do conhecimento em criação arbitrária de fatos sem dados, o que Kant rejeita. A opção C equipara fenômeno a falsidade, confundindo o objeto sob condições de aparição com ilusão. A análise respeita a arquitetura crítica sem reduções empiristas ou racionalistas dogmáticos."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opção A capta a contradição performativa da máxima de promessa enganosa: universalizar a permissão de prometer sem intenção de cumprir destrói a confiança que a própria prática de prometer pressupõe como meio para obter a vantagem. A opção B reduz moralidade a prudência (evitar descoberta), confundindo imperativo hipotético com categórico. A opção C toma interesse particular como critério suficiente de universalidade, invertendo o teste kantiano. A opção D generaliza indevidamente a crítica da promessa enganosa para toda promessa sincera, o que não decorre do argumento. A resolução explicitou máxima, motivo e formulação sem substituir por rótulos."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Estratificação e desigualdade social",
    "contentSha256": "e2b13348f539d000ca1954a54135d9417d0a768dbf35e9b2b44da39bfc2cfd82",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-sociology-3e/pages/9-1-what-is-social-stratification",
      "https://openstax.org/books/introduction-sociology-3e/pages/4-2-theoretical-perspectives-on-society",
      "https://openstax.org/books/introduction-sociology-3e/pages/16-2-theoretical-perspectives-on-education",
      "https://www.ibge.gov.br/estatisticas/multidominio/condicoes-de-vida-desigualdade-e-pobreza/17374-indicadores-sociais-minimos.html",
      "https://hdr.undp.org/data-center/human-development-index",
      "https://hdr.undp.org/data-center/inequality-adjusted-human-development-index"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A questão 1 testa a distinção entre renda mensal (fluxo), patrimônio líquido (estoque de bens e direitos menos dívidas) e poder político. A opção C é a única que não extrapola: salários iguais não implicam patrimônios iguais (um tem imóvel quitado e reservas, o outro dívidas) nem informam sobre poder político. A confunde fluxo com estoque; B atribui igualdade política ao salário; D transforma condição atual em destino inevitável."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A questão 2 exige cálculo da média (100/4=25) e do Gini pela fórmula não corrigida. Soma das diferenças absolutas dos 16 pares ordenados: 200. Denominador: 2·4·100=800. G=200/800=0,25. Opção B correta. A dobra o índice (0,50); C confunde soma total (100) com média; D atribui Gini zero a rendas desiguais. O enunciado especifica população autoral e fórmula, sem alegar dados reais."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A questão 3 apresenta melhoria absoluta de escolaridade (filhos estudam mais que pais) mantendo diferença de acesso ao superior entre origens. Opção D reconhece a melhoria sem inferir igualdade de chances nem destino individual fixo. A e B apagam a diferença que o cenário preserva e extrapolam para 'todas oportunidades' e 'todas barreiras'. C converte padrão grupal em determinação individual. A resposta preserva os limites da comparação sem dados adicionais."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Indústria cultural e arte digital",
    "contentSha256": "157b9a7b24d59ccb8b7f4a98c4c063df739ce66adddf8377b7ec8e003cf3c97a",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.sfu.ca/~andrewf/Culture_industry_reconsidered.shtml",
      "https://plato.stanford.edu/entries/adorno/",
      "https://www.vam.ac.uk/articles/digital-art",
      "https://www.vam.ac.uk/articles/digital-design-dictionary",
      "https://whitney.org/artport/",
      "https://www.variablemedia.net/e/welcome.html",
      "https://www.guggenheim.org/conservation/the-variable-media-initiative"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A opção correta identifica repetição estrutural e diferenciação aparente sem extrapolar sobre recepção; B universaliza incapacidade crítica a partir de quantidade; C generaliza identidade total a toda obra comercial; D trata variações superficiais como autonomia plena, ignorando a estrutura padronizada informada."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A descrição exclui IA e sorteio e limita a escolha a quatro palavras; C é a única compatível: há interação e transformação por regra fixa finita. A contradiz a premissa; B salta de participação técnica para coautoria jurídica; D afirma infinitude sem base diante de conjunto finito de entradas."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O problema exige preservar obra interativa cujo programa original não roda; D propõe documentar dependências/comportamentos essenciais e testar execução comparando com registros, sem prometer identidade automática. A confunde vídeo com experiência; B descarta evidências e assume emulação perfeita; C usa métrica de alcance (visualizações) para provar preservação de interatividade."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Jogos e brincadeiras tradicionais",
    "contentSha256": "114b584cd7a013dd3c129b556cc2b4224234d508fa45e8f37ca0631f93a49792",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://territoriodobrincar.com.br/o-projeto/",
      "https://territoriodobrincar.com.br/brincadeiras-pelo-brasil/",
      "https://www.unesco.org/en/sport-and-anti-doping/traditional-sports-and-games",
      "https://ich.unesco.org/en/convention"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B é a única que preserva ambas as variantes com seus contextos e regras, sem elevar uma a norma universal pelo nome compartilhado. A substitui investigação por preferência pessoal do pesquisador. C inventa origem e difusão sem evidência. D apaga diferenças e atribui a todos uma combinação não registrada. O gabarito e a resolução estão corretos e completos."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A opção D propõe testar mudanças funcionais (distância, organização, formas de envio) com escuta do grupo e comparação de oportunidades de ação, alinhada ao objetivo de ampliar participação sem prometer inclusão automática. A confunde duração coletiva com participação distribuída. B reforça o problema usando volume de ações como critério único. C exige diagnóstico médico desnecessário para ajustes funcionais. A resolução explica cada distrator corretamente."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opção A identifica a fonte e seu alcance, busca contexto e diálogo quando possível e nomeia explicitamente as criações da turma como adaptação escolar. B inventa cantos e atribuição falsa. C universaliza o alcance de um registro breve. D confunde uso de nome cultural com autorização de reprodução integral. A resolução discrimina corretamente cada erro."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Eletricidade e ondas",
    "contentSha256": "2f3ba6e9b23108c2311c22e2b3137b623b454ffad466c0dec940bcd289cd56b2",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits",
      "https://openstax.org/books/college-physics-2e/pages/20-4-electric-power-and-energy",
      "https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel",
      "https://openstax.org/books/college-physics-2e/pages/16-9-waves",
      "https://openstax.org/books/college-physics-2e/pages/24-4-energy-in-electromagnetic-waves",
      "https://openstax.org/books/college-physics-2e/pages/29-3-photon-energies-and-the-electromagnetic-spectrum"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "U = R·i = 15 Ω × 0,8 A = 12 V. Distratores: 18,75 V = 15/0,8 (divisão inversa), 1,875 V = erro de casa decimal/operação espúria, 120 V = 15×8 (ignora vírgula). Todos plausíveis e explicados."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Paralelo 12||12 = 6 Ω; R_eq = 6+6 = 12 Ω; i = 18/12 = 1,5 A; P = 18×1,5 = 27 W. Distratores: 13,5 W = potência só em R₁ ou só no paralelo (6×1,5²), 54 W = usa i=3 A (R_eq=6 Ω incorreto), 108 W = U²/R com R=3 Ω (R_eq errado). Todos derivados de erros conceituais identificáveis."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "f = 2,5 GHz = 2,5×10⁹ Hz; E = hf = 6,63×10⁻³⁴ × 2,5×10⁹ = 1,6575×10⁻²⁴ J ≈ 1,66×10⁻²⁴ J. Distratores: 10⁻³³ J = omite fator 10⁹ (usa 2,5 puro), 10⁻²⁵ J = dez vezes menor, 10⁻¹⁵ J = bilhão de vezes maior (erro de potência de dez). Todos correspondem a falhas de conversão de unidade."
      }
    ]
  }
] as const;
