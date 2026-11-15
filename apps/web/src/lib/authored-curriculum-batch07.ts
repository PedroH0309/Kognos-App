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
  }
] as const;
