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
  }
] as const;
