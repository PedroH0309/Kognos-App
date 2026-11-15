import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch13:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Funções afim, quadrática e modular",
    "objective": "Analisar leis, gráficos e imagens de funções afins, quadráticas e modulares, calculando taxas, extremos e soluções com domínio e condições de validade explícitos.",
    "prerequisites": [
      "Equações e inequações reais",
      "Plano cartesiano e intervalos",
      "Produtos notáveis e sinais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Função, domínio e variação afim",
        "explanation": "Uma função associa a cada elemento de seu domínio um único valor no contradomínio. Imagem é o conjunto dos valores efetivamente obtidos; não precisa coincidir com o contradomínio escolhido. Uma expressão algébrica não dispensa indicar o domínio. Nesta aula, chamamos afim a função de lei f(x)=ax+b, com a e b reais, incluindo o caso constante a=0; quando a≠0, a lei tem primeiro grau. O gráfico no domínio real completo é uma reta não vertical. O coeficiente a é a taxa de variação: entre entradas distintas, a=[f(x2)−f(x1)]/(x2−x1). Não é a razão a/b. O termo b é f(0), se zero pertencer ao domínio. Para a>0 a função é crescente, para a<0 decrescente e para a=0 constante. Se o domínio é ℝ e a≠0, a imagem é ℝ; se a=0, a imagem é {b}. Um contexto pode restringir entradas a um intervalo ou a quantidades inteiras, mudando o gráfico admissível e a imagem. Variação afim não é sempre proporcionalidade direta: esta corresponde à lei f(x)=ax, com termo independente zero. Para determinar uma lei não conhecida, use a taxa calculada de dois pontos e substitua um deles para obter b; depois confira ambos. Uma reta vertical não define y como função de x nesse sentido, pois um mesmo x teria mais de uma saída. Previsões com uma lei ajustada a dados exigem limites de contexto, não uma extrapolação obrigatória para qualquer entrada.",
        "steps": [
          "Identifique domínio, saídas possíveis e convenção da lei.",
          "Calcule a taxa pela diferença de saídas dividida pela de entradas.",
          "Substitua um ponto para determinar o termo independente.",
          "Confira os dados e as restrições antes de interpretar gráfico e imagem."
        ],
        "example": "Exemplo autoral: g(x)=−2x+9 em [1,4]. Como a<0, os valores decrescem de g(1)=7 a g(4)=1; a imagem é [1,7]. A lei tem domínio real possível, mas a função descrita foi restringida ao intervalo. Não é correto declarar automaticamente imagem ℝ nessa situação nem usar g(0) como valor permitido do contexto.",
        "pitfall": "Confundir imagem e domínio, calcular taxa como a/b ou tratar toda função afim como proporcionalidade direta."
      },
      {
        "level": "intermediate",
        "title": "Quadrática: raízes, vértice e imagem",
        "explanation": "Uma função quadrática tem lei f(x)=ax²+bx+c com coeficientes reais e a≠0. No domínio real completo, seu gráfico é uma parábola: a>0 indica concavidade para cima e mínimo; a<0 indica concavidade para baixo e máximo. O vértice tem coordenadas h=−b/(2a) e k=f(h), e o eixo de simetria é x=h. A forma f(x)=a(x−h)²+k mostra o extremo porque (x−h)²≥0. O valor extremo é k, enquanto h é a entrada em que ele ocorre: não confunda essas duas grandezas. No domínio ℝ, a imagem é [k,+∞) para a>0 e (−∞,k] para a<0. Se o domínio for restrito, é preciso verificar se h é admissível e comparar os valores nas fronteiras; não basta citar o vértice da parábola inteira. Raízes são entradas que zeram f, encontradas por fatoração ou pela fórmula x=[−b±√Δ]/(2a), onde Δ=b²−4ac. Para coeficientes reais, Δ>0 dá duas raízes reais distintas, Δ=0 uma raiz real dupla e Δ<0 nenhuma raiz real. Isso não elimina a função: uma parábola pode não cortar o eixo horizontal. O ponto (0,c) pertence ao gráfico quando zero está no domínio. Para estudar sinais, combine raízes e concavidade, verificando intervalos; não suponha que o sinal de a seja o sinal de todos os valores. Modelos de área ou lucro podem usar leis quadráticas, mas seus domínios e unidades precisam ser definidos antes de interpretar o extremo.",
        "steps": [
          "Identifique a, b e c, com a diferente de zero.",
          "Calcule vértice e reescreva por quadrado completo quando útil.",
          "Determine raízes, sinais e imagem no domínio efetivo.",
          "Em restrições, compare vértice admissível e fronteiras."
        ],
        "example": "Exemplo autoral: p(x)=2(x−1)²+3 tem mínimo 3 em x=1 no domínio ℝ e não possui zeros reais, pois todos os valores são pelo menos 3. Se o domínio mudar para [2,4], x=1 deixa de ser admissível: p cresce nesse intervalo, com mínimo p(2)=5 e máximo p(4)=21. A imagem passa a [5,21].",
        "pitfall": "Apresentar a entrada do vértice como valor máximo, ou usar o extremo da parábola inteira sem conferir o domínio restringido."
      },
      {
        "level": "advanced",
        "title": "Módulo, definição por partes e condições",
        "explanation": "O módulo |u| representa a distância real entre u e zero: |u|=u quando u≥0 e |u|=−u quando u<0. Seu valor nunca é negativo. A função básica f(x)=|x| tem domínio ℝ, imagem [0,+∞) e gráfico em V; em escalas iguais nos eixos, os ramos têm inclinações 1 e −1. Para g(x)=a|x−h|+k com a≠0 e domínio ℝ, o vértice é (h,k); a>0 dá imagem [k,+∞) e a<0 dá (−∞,k]. Logo nem toda função que contém módulo tem somente valores não negativos: uma translação vertical ou multiplicação negativa pode mudar isso. Para retirar módulo de uma expressão, localize seus zeros e resolva por partes conforme seu sinal. Em |u|=c, se c<0 não há solução; se c=0, exige-se u=0; se c>0, resolvem-se u=c ou u=−c. Para |u|≤c com c≥0, vale −c≤u≤c; para |u|≥c com c>0, vale u≤−c ou u≥c. A troca entre interseção e união muda a resposta. Se o lado direito depender de x, sua não negatividade deve ser conferida antes de aceitar candidatos; elevar ao quadrado pode criar soluções que falham na igualdade original. Em |x²−d|, o sinal da expressão interna decide quais trechos são preservados ou refletidos, em vez de simplesmente apagar um sinal negativo. Ao final, confira fronteiras, igualdade e o domínio inicial.",
        "steps": [
          "Determine onde a expressão interna muda de sinal.",
          "Escolha a definição por partes ou a equivalência adequada.",
          "Distinga união e interseção e confira o lado direito.",
          "Verifique candidatos e fronteiras na expressão original."
        ],
        "example": "Exemplo autoral: q(x)=|x+4|−2 tem vértice (−4,−2) e imagem [−2,+∞), mostrando que uma função com módulo pode ter valores negativos. Para q(x)=0, |x+4|=2 fornece x=−2 ou x=−6; a substituição em ambos retorna zero. Trata-se de uma lei diferente da inequação proposta nas atividades.",
        "pitfall": "Apagar o módulo sem casos, aceitar lado direito negativo ou trocar a interseção de condições de ≤ pela união correspondente a ≥."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Exercício autoral: uma função afim real satisfaz f(2) = 7 e f(5) = 16. Qual lei atende simultaneamente aos dois dados?",
        "hint": "Calcule a diferença entre saídas e entre entradas; obtenha a taxa e depois o termo independente, conferindo os dois pontos.",
        "options": [
          "f(x) = 3x - 1.",
          "f(x) = 1x + 5.",
          "f(x) = 2x + 3.",
          "f(x) = 3x + 1."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a=(16−7)/(5−2)=9/3=3 e 7=3·2+b implica b=1. Assim, f(2)=7 e f(5)=16. A dá f(2)=5; B dá f(5)=10; C dá f(5)=13. Conferir apenas um ponto não determina se uma alternativa satisfaz todos os dados; a solução usa a mesma lei nas duas entradas."
      },
      {
        "level": "intermediate",
        "prompt": "Exercício autoral: para f(x) = -x^2 + 6x - 5 com domínio ℝ, qual alternativa informa corretamente o valor máximo, a entrada em que é atingido e a imagem?",
        "hint": "Complete o quadrado ou calcule as duas coordenadas do vértice; o valor de f no vértice não é a mesma grandeza que sua entrada.",
        "options": [
          "Máximo 4, atingido em x = 3; imagem (-∞, 4].",
          "Máximo 3, atingido em x = 4; imagem (-∞, 3].",
          "Mínimo 4, atingido em x = 3; imagem [4, +∞).",
          "Máximo 4, atingido em x = 3; imagem [0, 4]."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: f(x)=−(x−3)²+4. Como o quadrado é não negativo, f(x)≤4 e a igualdade ocorre em x=3. Valores arbitrariamente negativos são possíveis no domínio ℝ, logo a imagem é (−∞,4]. B troca entrada e valor; C inverte a concavidade e o extremo; D impõe uma restrição de saída inexistente. As raízes 1 e 5 não limitam o domínio aos valores entre elas."
      },
      {
        "level": "advanced",
        "prompt": "Exercício autoral em ℝ: qual conjunto resolve |2x - 3| ≤ 5, incluindo as fronteiras quando cabíveis?",
        "hint": "Escreva a desigualdade dupla correspondente a uma distância de no máximo 5 e mantenha a interseção das condições.",
        "options": [
          "(-∞, -1] ∪ [4, +∞).",
          "(-1, 4).",
          "[-1, 4].",
          "[0, 4]."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: |2x−3|≤5 equivale a −5≤2x−3≤5; somar 3 e dividir por 2 dá −1≤x≤4. Nos extremos, o módulo vale exatamente 5, portanto eles pertencem ao conjunto. A corresponde à região externa; B exclui indevidamente as fronteiras; D impõe x≥0 sem hipótese que o autorize. Por exemplo, x=−1 é válido e x=5 não satisfaz a desigualdade."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Concordância, regência e crase",
    "objective": "Revisar concordância nominal e verbal, relações de regência e emprego do acento grave na escrita formal brasileira, considerando sentido, estrutura e casos de variação.",
    "prerequisites": [
      "Núcleo do sujeito e complemento",
      "Classes de palavras e preposições",
      "Artigos e pronomes demonstrativos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Concordância: identificar o termo de referência",
        "explanation": "Concordância relaciona flexões de palavras que desempenham funções ligadas na oração. Na verbal, o verbo geralmente se ajusta ao sujeito em número e pessoa; na nominal, artigos, adjetivos e outros elementos variáveis se relacionam ao substantivo em gênero e número. A análise não consiste em copiar o plural da palavra mais próxima: em uma expressão com núcleo singular e complemento plural, é preciso identificar o núcleo e a construção. Com sujeito composto anteposto ligado por e, emprega-se normalmente o plural. Há casos particulares e possibilidades de concordância que dependem de estrutura e sentido, como expressões partitivas acompanhadas de plural; não se pode converter toda variação admitida em erro. Haver com sentido de existir é impessoal na norma-padrão e fica no singular, inclusive transmitindo a impessoalidade ao auxiliar de uma locução: deve haver, e não devem haver nesse uso. Existir tem sujeito e concorda com ele. Fazer indicando tempo decorrido também é impessoal. Isso não torna todo uso de haver impessoal: como auxiliar em um tempo composto, pode flexionar com o sujeito. Na concordância nominal, anexo como adjetivo varia, enquanto a locução em anexo é invariável. Para revisar, localize cada relação separadamente antes de corrigir uma frase inteira. O foco é a escrita formal solicitada no contexto; diferenças em usos cotidianos não justificam julgar a capacidade intelectual de quem fala.",
        "steps": [
          "Localize sujeito e núcleo, sem decidir apenas por proximidade.",
          "Diferencie verbo pessoal, uso impessoal e auxiliar de tempo composto.",
          "Reconheça adjetivos variáveis e locuções invariáveis.",
          "Verifique casos particulares antes de rejeitar uma construção admitida."
        ],
        "example": "Exemplos autorais: A lista de oficinas mudou mantém mudou no singular por se referir a lista; As listas mudaram exige plural. Em Os mapas estão anexos, o adjetivo varia; em Os mapas estão em anexo, a locução fica invariável. São relações diferentes, que não se resolvem contando quantas palavras plurais aparecem na frase.",
        "pitfall": "Concordar por proximidade com um complemento plural, pluralizar haver existencial ou flexionar a locução em anexo."
      },
      {
        "level": "intermediate",
        "title": "Regência e sentido dos complementos",
        "explanation": "Regência é a relação entre um termo regente e o complemento que se liga a ele, com ou sem preposição segundo a construção e o sentido. Quando o regente é verbo, falamos em regência verbal; quando é um nome, como substantivo ou adjetivo, em regência nominal. Não se deve afirmar que todo complemento começa por preposição, nem importar uma regra geral de a pessoal de outra língua para o português. Na escrita formal, gostar se constrói com de, confiar pode selecionar em, e acesso costuma ligar-se ao complemento por a. Essas relações não são apenas associações visuais: ajudam a definir papéis e sentidos. Preferir pode aparecer com um complemento direto ou, numa comparação explícita entre duas opções, com o segundo introduzido por a. Nesta construção formal comparativa, use preferir X a Y, sem substituir a relação por mais X do que Y. A ausência da segunda opção não torna toda frase com preferir incompleta: a preferência pode ser expressa sem comparação explicitada. Regências variam com sentido, registro e história da língua; dicionários e gramáticas registram construções que não cabem numa regra única para qualquer uso. Se um complemento estiver representado por pronome relativo, conserve a preposição exigida pelo regente quando cabível: um termo ligado por de pode exigir de que. Em uma revisão, preserve o sentido pretendido e confira o verbete na acepção correta, em vez de supor que inserir qualquer preposição resolve a frase. A regência também prepara a análise da crase: primeiro é preciso saber se existe preposição a.",
        "steps": [
          "Identifique o regente e o sentido usado.",
          "Determine se o complemento exige preposição e qual.",
          "Em comparação com preferir, relacione claramente as duas opções.",
          "Preserve a preposição em construções com relativos quando necessária."
        ],
        "example": "Frase autoral: Este é o assunto de que a equipe gosta. O de liga o complemento ao verbo gostar, mesmo com a reorganização por meio do relativo. Em A equipe tem acesso ao arquivo, acesso seleciona a e arquivo admite o artigo o, resultando em ao. A relação regencial existe também com nomes, não apenas com verbos.",
        "pitfall": "Tratar qualquer preposição como equivalente, apagar a exigida diante de relativo ou supor que preferir sempre precisa de dois complementos explícitos."
      },
      {
        "level": "advanced",
        "title": "Crase: regência, artigo e demonstrativos",
        "explanation": "Crase é uma fusão de vogais; no uso estudado aqui, envolve a preposição a e outro a, como o artigo a/as ou a vogal inicial de aquele, aquela e aquilo. O acento grave indica essa ocorrência na escrita: à, às, àquele, àquela, àquilo. Não é o nome de qualquer acento e não aparece automaticamente diante de toda palavra feminina. Em uma construção com complemento feminino determinado, confirme tanto a preposição selecionada quanto o artigo admitido; a troca por termo masculino comparável pode revelar ao, mas funciona como apoio à análise, não como teste mecânico que preserve sempre o sentido. Diante de infinitivo, normalmente não há artigo feminino: a estudar não recebe acento grave. Em referência a aquele documento, a fusão pode ser marcada mesmo com substantivo masculino depois do demonstrativo. Locuções consagradas como à noite e às vezes exigem atenção própria; a explicação não deve reduzi-las a uma regra de direção para lugares. Há casos facultativos relacionados à presença opcional de artigo, como diante de certos possessivos femininos acompanhados de substantivo e nomes próprios femininos, conforme o contexto. Não se transforma uma possibilidade em erro obrigatório. Em sequências com a seguido de plural sem artigo, a marca não surge apenas porque o nome é feminino: a propostas difere de às propostas. Compare ainda A direção comprou a mesa, com artigo sem preposição, e A direção se referiu à mesa, com a preposição e o artigo. Analise regência, determinação e sentido juntos para justificar a grafia, em vez de memorizar uma lista de palavras que sempre receberiam crase.",
        "steps": [
          "Identifique se o regente pede preposição a.",
          "Confira artigo, demonstrativo ou locução e sua forma.",
          "Diferencie ausência, exigência e possibilidade de artigo no contexto.",
          "Justifique a grafia mantendo o sentido e a estrutura da frase."
        ],
        "example": "Par autoral: A comissão analisou a proposta contém a como artigo do objeto de analisou; A comissão se referiu à proposta reúne a exigido por referir-se e o artigo de proposta. A palavra proposta aparece nas duas frases, mas isso não obriga a mesma grafia, pois a relação sintática mudou.",
        "pitfall": "Acentuar todo a antes de feminino, proibir àquele só porque vem um nome masculino depois ou ignorar casos em que o artigo é facultativo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Revisão autoral de um aviso, segundo a norma-padrão escrita: qual alternativa combina corretamente o uso existencial de haver ou existir e a concordância de anexo com tabelas?",
        "hint": "Diferencie haver impessoal de existir pessoal e confira o gênero e o número do adjetivo, sem alterar o sentido de existência.",
        "options": [
          "Devem haver revisões; as tabelas seguem anexas.",
          "Deve existir revisões; as tabelas seguem anexas.",
          "Deve haver revisões; as tabelas seguem anexas.",
          "Deve haver revisões; as tabelas segue anexo."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: haver existencial é impessoal e mantém deve no singular; seguem concorda com tabelas e anexas é adjetivo feminino plural. A pluraliza o auxiliar indevidamente; B usa existir, que precisa concordar com revisões, exigindo devem existir; D quebra a concordância verbal e nominal. A locução em anexo seria invariável, mas não é a forma empregada nas alternativas."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: uma leitora compara a edição impressa e a versão digital de uma publicação. Qual frase exprime sua preferência conforme a construção comparativa formal preferir X a Y?",
        "hint": "Conserve o primeiro complemento direto e introduza o segundo por a; na segunda opção determinada, confira também a presença de artigo feminino.",
        "options": [
          "Prefiro a edição impressa à versão digital.",
          "Prefiro mais a edição impressa do que a versão digital.",
          "Prefiro a edição impressa de versão digital.",
          "Prefiro a edição impressa a versão digital."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a edição impressa é o primeiro complemento direto; à versão digital reúne a preposição a e o artigo a. B emprega uma construção diferente da formal solicitada; C troca a preposição e a relação; D omite o acento grave na fusão exigida com o segundo termo feminino determinado. O exercício delimita a escrita formal e o sentido pretendido, sem afirmar que toda frase com preferir precise exibir duas opções."
      },
      {
        "level": "advanced",
        "prompt": "Frase autoral com lacunas: O comunicado se refere ___quele relatório e convida a equipe ___ participar da revisão. Qual preenchimento e justificativa são adequados à escrita formal?",
        "hint": "A primeira lacuna está antes de demonstrativo iniciado por a; a segunda precede infinitivo. Não decida apenas pelo gênero da palavra relatório.",
        "options": [
          "a; à — toda ocorrência antes de infinitivo deve receber acento grave.",
          "a; a — um demonstrativo nunca pode participar de crase.",
          "à; à — a preposição a sempre recebe acento, independentemente do termo seguinte.",
          "à; a — escreve-se àquele pela fusão com o demonstrativo e a participar sem artigo feminino."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: referir-se exige a e aquele inicia-se por a, formando àquele; antes de participar, o a não se une a artigo feminino, ficando sem acento. A acentua indevidamente o infinitivo e omite a primeira fusão; B nega a possibilidade com demonstrativo; C acentua toda preposição a. O nome masculino relatório não impede àquele, pois a fusão envolve o demonstrativo."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura africana de língua portuguesa",
    "objective": "Reconhecer a pluralidade de literaturas africanas de língua portuguesa e interpretar relações entre linguagem, memória, contexto e vozes literárias, distinguindo autor, narrador e representação.",
    "prerequisites": [
      "Narrador e eu lírico",
      "Contexto de produção e interpretação textual",
      "Diferença entre ficção e documento histórico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Literaturas no plural: línguas, histórias e formas",
        "explanation": "A expressão literaturas africanas de língua portuguesa reúne produções diversas; não designa um único estilo nem representa toda a literatura do continente africano. Neste percurso, estudamos especialmente Angola, Moçambique, Cabo Verde, Guiné-Bissau e São Tomé e Príncipe. Compartilhar o português como língua de escrita não apaga diferenças históricas, sociais ou linguísticas entre esses espaços, nem a diversidade interna de cada um. A formação dessas literaturas se relaciona à colonização e às disputas pela representação de experiências locais, mas não se reduz a um tema único de resistência ou a um calendário idêntico de escolas europeias. Escritores podem explorar memória, vida urbana, relações familiares, gênero, pertencimento e invenção da linguagem. O português convive com outras línguas e práticas culturais; marcas dessa convivência podem participar da elaboração literária sem constituir defeito de escrita. A presença de fala, canto, repetição ou narrativa transmitida entre gerações pode estabelecer relações entre oralidade e escrita. Isso precisa ser demonstrado no texto: não se deve atribuir oralidade a qualquer obra apenas pela origem africana de quem a escreveu. Também é inadequado presumir que toda pessoa de um país compartilhe a experiência de uma personagem. Identificar autoria e contexto abre caminhos de leitura; não substitui observar gênero, forma, enunciação e escolhas de palavras. O recorte desta aula é introdutório e não esgota autores, períodos ou línguas desses países.",
        "steps": [
          "Reconheça o recorte geográfico e linguístico sem confundi-lo com todo o continente.",
          "Diferencie características compartilhadas e histórias específicas.",
          "Observe a elaboração textual de vozes e referências culturais.",
          "Evite deduzir estilo ou visão de mundo apenas da nacionalidade."
        ],
        "example": "Situação autoral de estudo: uma biblioteca organiza prateleiras para romance angolano, poesia guineense e narrativas cabo-verdianas. A língua de escrita permite aproximá-las, enquanto gêneros, situações históricas e escolhas formais exigem leituras particulares. A organização pode favorecer comparação sem transformar os três conjuntos em um estilo uniforme.",
        "pitfall": "Tratar África como um país, confundir língua portuguesa com exclusividade linguística ou usar nacionalidade como explicação suficiente de uma obra."
      },
      {
        "level": "intermediate",
        "title": "Um percurso de obras e questões de leitura",
        "explanation": "Um repertório inicial pode associar obras a perguntas, sem converter títulos em resumos definitivos. Em Angola, Mayombe, de Pepetela, é um romance relacionado à luta pela independência contra o colonialismo português. Situar esse contexto evita confundi-lo automaticamente com a guerra civil posterior à independência. A representação literária de conflitos envolve composição de personagens e perspectivas, não uma transcrição neutra de acontecimentos. Em Moçambique, Niketche: uma história de poligamia, de Paulina Chiziane, permite investigar relações de gênero, desigualdade e construção de experiências femininas. Uma personagem não fala obrigatoriamente por todas as mulheres, e a obra não deve ser tomada como manual de costumes de uma população inteira. Em Cabo Verde, Chiquinho, de Baltasar Lopes, acompanha o percurso do protagonista em uma realidade marcada por dificuldades socioeconômicas e secas; o contexto ilumina a leitura sem dispensar o exame de como a narrativa foi organizada. Na Guiné-Bissau, No fundo do canto, de Odete Semedo, oferece um caminho para estudar memória poética e conflitos da história recente do país. Em São Tomé e Príncipe, Conceição Lima integra o repertório de autoria poética a pesquisar, ampliando o percurso para além dos romances e dos dois países continentais mais lembrados. Esses cinco pontos de entrada não representam todos os autores nem autorizam atribuir o mesmo tema a cada literatura nacional. Para aprofundar, consulte uma edição identificada da obra e estudos críticos, separando informação bibliográfica, contexto e interpretação sustentada por passagens. Esta apresentação não reproduz os livros nem substitui sua leitura.",
        "steps": [
          "Associe corretamente autoria, obra e espaço literário.",
          "Delimite o contexto histórico sem trocar conflitos distintos.",
          "Formule uma pergunta sobre vozes, relações sociais ou memória.",
          "Confira a hipótese na obra, sem transformar sinopse em análise integral."
        ],
        "example": "Ficha autoral de comparação: o eixo de leitura de Mayombe pode envolver libertação colonial e conflitos representados pela ficção; o de No fundo do canto pode relacionar memória e história recente na poesia. A comparação aproxima problemas, mas conserva a diferença entre romance e poesia e entre os contextos angolano e guineense.",
        "pitfall": "Inventar títulos ou dados biográficos, trocar guerra de libertação por guerra civil ou transformar uma personagem em retrato de todas as pessoas do país."
      },
      {
        "level": "advanced",
        "title": "Interpretar vozes e memória com evidências",
        "explanation": "Na análise de um texto, comece por identificar quem enuncia e em qual situação: autor empírico, narrador de ficção, personagem e eu lírico não são categorias equivalentes. Uma voz em primeira pessoa pode ser construída, e uma lembrança narrada não se torna automaticamente registro autobiográfico de quem publicou a obra. Examine a organização temporal, as mudanças de perspectiva, a presença de fala citada e os efeitos da escolha lexical. Quando uma narrativa incorpora lembranças contadas por outra pessoa, pode criar uma relação entre transmissão oral e escrita; explique o efeito observado em vez de apenas nomear oralidade. Repetições podem marcar insistência, ritmo ou disputa de sentidos, mas seu valor depende da passagem. Contextos de colonização e de formação nacional ajudam a formular perguntas sobre poder e pertencimento; não permitem decidir de antemão o sentido de qualquer palavra de toda obra africana. Uma leitura responsável distingue hipótese e evidência: a passagem sustenta certa relação, mas não necessariamente uma generalização sobre um país ou sobre o continente. Compare interpretações perguntando qual delas explica mais detalhes sem contradizer o texto. Se a questão trouxer apenas um fragmento, respeite esse limite e não invente eventos do restante do livro. A linguagem literária pode recriar e questionar memórias coletivas sem funcionar como prova documental de cada fato mencionado. Ao estudar obras protegidas por direitos autorais, identifique edição e autoria e use meios autorizados de acesso; um exemplo didático inventado deve ser apresentado como tal, sem atribuição falsa a escritores reais.",
        "steps": [
          "Identifique as instâncias de voz sem igualá-las ao autor.",
          "Localize palavras e recursos formais que sustentem a interpretação.",
          "Relacione contexto e texto sem impor uma conclusão pronta.",
          "Delimite o alcance da evidência e reconheça o que o fragmento não demonstra."
        ],
        "example": "Microtexto autoral do Kognos, sem atribuição a escritor existente: Guardei no caderno a história que meu tio contava. Ao relê-la, percebi que minhas palavras haviam mudado o caminho da lembrança. O contraste entre contar, guardar por escrito e reler permite discutir recriação da memória; não prova que a história seja um documento fiel ou autobiografia de um autor real.",
        "pitfall": "Confundir eu lírico com autor, usar contexto como substituto da evidência textual ou atribuir um microtexto didático a uma obra real."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso autoral: um clube aproxima obras de Angola, Moçambique, Cabo Verde, Guiné-Bissau e São Tomé e Príncipe escritas em português. Qual princípio orienta melhor essa leitura comparativa?",
        "hint": "Uma língua compartilhada pode aproximar obras sem apagar diferenças de contexto, gênero e composição.",
        "options": [
          "Todas as obras pertencem necessariamente ao mesmo gênero e seguem um único estilo africano.",
          "A língua de escrita permite aproximações, mas cada obra e contexto precisam ser examinados em sua particularidade.",
          "A nacionalidade basta para determinar o sentido de qualquer passagem, dispensando a leitura.",
          "O conjunto corresponde a toda a literatura produzida no continente africano, em qualquer língua."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o recorte linguístico aproxima produções sem apagar suas diferenças. A impõe uniformidade de gênero e estilo; C substitui a análise por nacionalidade; D confunde um recorte com todas as literaturas do continente. A comparação deve observar forma, vozes e contextos específicos, sem negar a diversidade interna de cada país."
      },
      {
        "level": "intermediate",
        "prompt": "Atividade autoral de repertório: uma ficha situa Mayombe, de Pepetela, na luta pela independência de Angola contra o colonialismo português. Qual conclusão respeita essa informação e a natureza literária do romance?",
        "hint": "Diferencie contexto de libertação, guerra civil posterior e composição ficcional de uma reprodução documental automática.",
        "options": [
          "O romance se situa obrigatoriamente na guerra civil posterior à independência, pois qualquer conflito angolano é o mesmo.",
          "A informação prova que todas as personagens correspondem literalmente a pessoas reais e concordam entre si.",
          "O livro representa todas as literaturas africanas e permite dispensar as demais obras do repertório.",
          "A luta anticolonial contextualiza a leitura, mas ainda é necessário analisar como personagens e perspectivas são construídas."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a ficha delimita a luta pela independência, e a análise literária precisa investigar a representação desse contexto. A troca conflitos históricos distintos; B inventa correspondência literal e concordância entre personagens; C generaliza indevidamente a partir de um romance. Contextualizar não converte ficção em relato documental neutro."
      },
      {
        "level": "advanced",
        "prompt": "Microtexto autoral do Kognos, não retirado de obra africana: Minha avó repetia o relato à janela. Quando o escrevi, conservei sua pausa, mas troquei o começo; agora duas vozes habitavam a página. Qual interpretação é sustentada pelo fragmento?",
        "hint": "Observe repetia, escrevi, pausa, troquei e duas vozes; limite a conclusão às relações efetivamente representadas.",
        "options": [
          "A passagem relaciona transmissão oral e recriação escrita da lembrança, sem demonstrar que a voz narrativa seja o autor real.",
          "O fragmento comprova que todos os escritores de um continente usam exatamente a mesma técnica narrativa.",
          "O relato foi copiado sem alteração, pois escrever impede qualquer mudança na história recebida.",
          "A voz narrativa é necessariamente uma escritora real identificável, e cada fato corresponde à sua biografia."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a fala recebida é registrada e modificada; pausa e duas vozes tornam visível a relação entre transmissão e elaboração escrita. B extrapola para todos os escritores sem evidência; C contradiz troquei o começo; D confunde narrador e autor e inventa uma identificação biográfica. O microtexto foi criado para a atividade, sem imitar nem citar obra existente."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Planejamento e projeto de texto",
    "objective": "Construir, testar e revisar um projeto de texto adequado ao comando de escrita, articulando recorte, tese ou finalidade, argumentos, progressão e fechamento.",
    "prerequisites": [
      "Leitura de comando e coletânea",
      "Diferença entre assunto e tema",
      "Parágrafo, coerência e coesão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Do comando ao recorte e à direção do texto",
        "explanation": "Planejar é decidir o que o texto precisa realizar antes de investir na versão final. O projeto registra uma direção e as relações entre as partes; pode ser revisto quando o desenvolvimento revela um problema. Comece pela situação de escrita: qual gênero foi solicitado, para quem se escreve, com que finalidade e dentro de quais limites? Depois identifique o assunto amplo e o recorte efetivo. Um comando sobre obstáculos ao acesso de trabalhadores noturnos a bibliotecas não se resolve apenas elogiando a importância da leitura: ele exige tratar de acesso e de um grupo delimitado. Na dissertação argumentativa, formule uma tese, uma resposta defensável ao problema, que será sustentada no desenvolvimento. Tese não é uma palavra-chave isolada nem a repetição do título; também não precisa ser uma frase grandiosa. Em outros gêneros, o projeto pode exigir voz de uma personagem, interlocutor específico ou sequência narrativa; não imponha a eles automaticamente a mesma organização da dissertação. A proposta concreta e o regulamento vigente orientam essas escolhas. No Enem 2026, o Inep pede texto dissertativo-argumentativo formal e intervenção social respeitosa dos direitos humanos; essas exigências não são uma regra de toda banca e todo gênero. A Fuvest admite múltiplos gêneros nas suas propostas, tornando indispensável conferir a opção solicitada. No rascunho de planejamento, escreva o recorte em palavras próprias, liste ideias possíveis e selecione as que realmente ajudam a cumprir a tarefa. Se uma ideia não responde ao comando, sua aparência sofisticada não justifica incluí-la.",
        "steps": [
          "Identifique gênero, finalidade, destinatário e limites do comando.",
          "Diferencie assunto amplo e recorte solicitado.",
          "Formule uma direção de escrita, como tese no texto argumentativo.",
          "Selecione ideias pertinentes e confira as regras da edição da prova."
        ],
        "example": "Comando didático autoral: discuta obstáculos ao acesso de trabalhadores noturnos a bibliotecas municipais. Projeto possível: defender que o funcionamento deve considerar horários e comunicação dos serviços. Planejar somente uma história geral dos livros deixaria de explicar os obstáculos pedidos, ainda que o texto contivesse informações verdadeiras.",
        "pitfall": "Usar tese pronta sem recorte, confundir assunto com problema ou transferir regras de uma prova para todos os gêneros e exames."
      },
      {
        "level": "intermediate",
        "title": "Mapa de argumentos: função, sustentação e ordem",
        "explanation": "Para planejar a argumentação, dê uma função a cada parte: que ponto ela precisa estabelecer e como contribui para a posição defendida? Uma afirmação deve ser acompanhada de sustentação e de explicação da relação com a tese. A sustentação pode envolver raciocínio, informação verificável ou exemplo identificado como hipotético; nenhum deles dispensa examinar limites. Não invente percentuais nem os atribua a instituições reais para tornar um argumento convincente. Um dado sobre um grupo não prova automaticamente o mesmo comportamento em todos os grupos, e correlação não estabelece sozinha uma causa. Teste o encadeamento perguntando por que uma ideia prepara a próxima. A ordem pode partir de uma definição necessária, apresentar um problema e examinar suas consequências, ou confrontar uma objeção; não existe obrigação universal de começar pelo argumento mais fraco. Um roteiro com duas partes que repetem o mesmo motivo não cria progressão apenas por receber conectivos diferentes. Anote a contribuição específica de cada bloco e reorganize os que se sobrepõem. Em vez de tratar o parágrafo como recipiente obrigatório de uma única frase ou de um número fixo de linhas, construa unidade de foco: explicações e exemplos devem trabalhar juntos. O projeto precisa caber no espaço disponível e dar condições de desenvolver o que promete. Uma lista extensa de nomes e assuntos, sem ligação entre eles, costuma deixar menos espaço para demonstrar o raciocínio. A escolha de repertório deve responder ao problema, sem funcionar como decoração ou citação de autoridade que encerra a discussão.",
        "steps": [
          "Atribua uma contribuição específica a cada bloco do desenvolvimento.",
          "Relacione afirmação, sustentação e explicação sem inventar evidências.",
          "Defina uma ordem que torne as dependências do raciocínio compreensíveis.",
          "Elimine repetições e ajuste o projeto ao espaço e à tarefa."
        ],
        "example": "Planejamento autoral sobre acesso ao acervo digital de uma escola: primeiro bloco examina barreiras de conexão e disponibilização; segundo analisa orientação para localizar e avaliar materiais. Os pontos contribuem de modos diferentes para a tese de que oferecer arquivos não garante seu aproveitamento. Não se apresentou uma estatística real nem se provou que todas as escolas tenham as mesmas barreiras.",
        "pitfall": "Confundir lista de opiniões com argumento desenvolvido, repetir a mesma razão com outro conectivo ou fabricar uma estatística para preencher uma lacuna."
      },
      {
        "level": "advanced",
        "title": "Testar o projeto e revisar a versão escrita",
        "explanation": "Antes de redigir, submeta o projeto a uma leitura crítica: cada parte responde ao recorte? A tese prometeu mais do que os argumentos podem demonstrar? Há uma objeção relevante ou uma condição que precisa ser reconhecida? Considerar limites não obriga adotar uma posição intermediária entre quaisquer opiniões; uma tese firme também pode ser fundamentada, e uma frase aparentemente equilibrada pode permanecer vaga. Escolha relações e qualificações conforme a evidência, não para agradar por neutralidade. Planeje o fechamento como consequência do percurso: o leitor deve perceber como o desenvolvimento sustenta a resposta ao problema. Quando a proposta exigir intervenção, como no Enem, relacione-a aos obstáculos discutidos e respeite os direitos humanos. Não acrescente uma solução decorada que não enfrente nenhum problema analisado, nem trate intervenção como exigência de todo gênero. Durante a escrita, o plano pode ser alterado: se faltar sustentação para uma alegação, reduza seu alcance, busque informação quando houver possibilidade ou reorganize o argumento. Na revisão, faça um roteiro inverso, anotando a função de cada parágrafo que de fato foi escrito. Compare esse mapa com a intenção inicial e procure saltos, promessas não cumpridas e repetições. Depois confira relações de coesão, referências de pronomes, grafia e adequação ao comando. Acrescentar portanto não transforma oposição em consequência, e aumentar a variedade de palavras não corrige contradições. O objetivo é produzir um texto que realize sua finalidade de maneira compreensível e sustentada, sem depender de uma fórmula de quantidade fixa de parágrafos ou palavras.",
        "steps": [
          "Teste pertinência, limites e possíveis objeções à direção escolhida.",
          "Planeje um fechamento decorrente do desenvolvimento e adequado ao gênero.",
          "Ajuste o plano quando a escrita revelar falta de sustentação.",
          "Compare o roteiro inverso com o comando e revise lógica e expressão."
        ],
        "example": "Revisão autoral de um projeto sobre devolução de livros: a tese promete combater atrasos, mas os dois parágrafos apenas celebram a leitura. O roteiro inverso revela a distância entre promessa e execução. Uma correção é desenvolver causas pertinentes e ações relacionadas, se exigidas; outra é reformular a tese dentro do comando. Trocar apenas o último conectivo não resolve a falta de relação.",
        "pitfall": "Achar que qualquer posição moderada é bem argumentada, manter uma tese sem sustentação ou usar conectivos para esconder saltos lógicos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Proposta didática autoral: discuta como ampliar o acesso de estudantes de cursos noturnos aos serviços de uma biblioteca escolar. Qual direção argumentativa atende mais diretamente ao recorte?",
        "hint": "Procure a relação entre acesso, serviços da biblioteca e estudantes do período noturno, sem substituir o problema por elogio genérico.",
        "options": [
          "Narrar a origem da escrita, sem estabelecer relação com o funcionamento da biblioteca ou o público indicado.",
          "Enumerar livros famosos, sem discutir condições de acesso ou serviços para estudantes noturnos.",
          "Defender horários e canais de atendimento compatíveis com o período noturno, explicando como enfrentam barreiras de acesso.",
          "Defender exclusivamente a criação de áreas esportivas, sem relação com biblioteca, seus serviços ou o grupo solicitado."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a direção articula os elementos do recorte e permite desenvolver por que horários e atendimento importam para o acesso. A e B mantêm proximidade com livros ou escrita, mas omitem o problema delimitado; D muda o objeto. A alternativa não prova que uma política específica funcione em qualquer escola: oferece um projeto pertinente a ser argumentado."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: um projeto defende reduzir o desperdício de papel na secretaria escolar. Os dois blocos previstos repetem que imprimir consome folhas. Qual revisão melhora a progressão sem inventar evidências?",
        "hint": "Busque contribuições distintas à tese, com relações explícitas e sem estatísticas atribuídas a fontes inexistentes.",
        "options": [
          "Manter a repetição, trocando apenas o conectivo inicial do segundo bloco por ademais.",
          "Distinguir a análise de impressões desnecessárias da discussão de procedimentos para evitá-las, explicando a contribuição de cada parte.",
          "Inserir um percentual inventado e atribuí-lo a uma universidade para dar aparência de sustentação.",
          "Acrescentar a biografia de um escritor sem relacioná-la ao desperdício ou à tese."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o primeiro bloco pode caracterizar o problema e o segundo examinar procedimentos relacionados, criando contribuições distintas. A muda a superfície sem acrescentar raciocínio; C fabrica evidência e autoria institucional; D dispersa o foco. A sugestão é uma possibilidade de organização, sem impor a todo texto uma ordem fixa nem apresentar dados reais não verificados."
      },
      {
        "level": "advanced",
        "prompt": "Situação autoral de revisão: a tese afirma que todo projeto escolar digital melhora a participação. O desenvolvimento só mostra que um projeto hipotético pode ampliar canais de comunicação, se houver acesso e orientação. Qual ajuste resolve melhor a diferença entre tese e sustentação?",
        "hint": "Compare os quantificadores todo e pode, as condições apresentadas e aquilo que um caso hipotético realmente demonstra.",
        "options": [
          "Conservar todo e acrescentar portanto, pois o conectivo torna o caso hipotético prova universal.",
          "Apagar as condições de acesso e orientação para que a promessa pareça mais abrangente.",
          "Inventar uma pesquisa nacional de resultado unânime, sem fonte verificável, para confirmar a tese.",
          "Restringir a tese à possibilidade condicionada discutida e explicar os limites do exemplo, mantendo a pertinência ao comando."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: o material sustenta uma possibilidade sob condições, sem demonstrar a generalização todo. Restringir a tese e explicitar limites alinha a promessa à argumentação. A confia ao conectivo uma prova inexistente; B retira condições relevantes sem fundamento; C inventa evidência. O exemplo é hipotético e não deve ser apresentado como levantamento de escolas reais."
      }
    ]
  }
];

export const authoredCurriculumBatch13ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Funções afim, quadrática e modular",
    "contentSha256": "c295b3665f22d85ac3524acd4ed87b06e0d87fc8af0b380a3bc81eed7c1c15c7",
    "draftMethod": "Autoria, álgebra e teste RED Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-algebra-2e/pages/3-2-domain-and-range",
      "https://openstax.org/books/college-algebra-2e/pages/4-1-linear-functions",
      "https://openstax.org/books/college-algebra-2e/pages/5-1-quadratic-functions",
      "https://openstax.org/books/college-algebra-2e/pages/3-6-absolute-value-functions"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "D, índice 3: a=(16−7)/(5−2)=3 e b=7−3·2=1. Para A, 3x−1 dá f(2)=5 e f(5)=14, falhando em ambos. B, x+5, dá 7 e 10; C, 2x+3, dá 7 e 13, atendendo somente ao primeiro dado. Apenas 3x+1 fornece simultaneamente 7 e 16. Correção desta descrição dos distratores pelo principal, com a crítica original preservada."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Funcao quadratica f(x)=-x^2+6x-5 no dominio R: reescrita por quadrado completo como -(x-3)^2+4, vértice (3,4), maximo 4 atingido em x=3, imagem (-inf,4]. A alternativa B troca entrada e valor, C inverte concavidade e extremo (minimo instead of maximo), e D impõe restrição de imagem [0,4] inexistente. O gabarito A esta matematicamente verificado."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Inequacao |2x-3|<=5 em R: equivalente a desigualdade composta -5<=2x-3<=5, resultando em -1<=x<=4. O conjunto solucao e [-1,4] com inclusao das fronteiras (nos extremos o modulo vale exatamente 5). A alternativa A representa |2x-3|>=5, B exclui indevidamente as fronteiras e D impõe restrição arbitria x>=0. O gabarito C esta matematicamente verificado."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Concordância, regência e crase",
    "contentSha256": "924f5085d7b90368ad8bd50baefd81eeaec829a86171ac18db2eaeea9b766a17",
    "draftMethod": "Autoria e análise gramatical Codex após rejeição factual de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://funag.gov.br/manual/index.php?title=Concord%C3%A2ncia_verbal",
      "https://ead.stf.jus.br/cursos/concordancia-verbal/Aula%205/aula5.html",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/anexo",
      "https://bd.tjmg.jus.br/bitstreams/d82f53d5-0c46-4469-bc60-164b747bbb15/download",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/crase"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Opcao C 'Deve haver revisoes; as tabelas seguem anexas' e correta: haver existencial e impessoal, mantem 'deve' no singular; 'seguem' concorda com 'tabelas' (plural) e 'anexas' concorda feminino plural com 'tabelas'. Opcao A 'devem haver' pluraliza indevidamente o auxiliar impersonal. Opcao B usa 'existir' que exige concordancia com o sujeito 'revisoes'. Opcao D quebra concordancia verbal e nominal."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Opcao A 'Prefiro a edição impressa à versão digital' segue a construcao formal preferir X a Y: 'a edição impressa' como complemento direto, 'à versão digital' com crase (fusao preposicao 'a' + artigo 'a' antes de 'versão' feminino). Opcao B usa 'do que' construcao diferente. Opcao C troca preposicao por 'de'. Opcao D omite acento grave exigido na fusao."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Opcao D 'à; a': primeira lacuna 'àquele' por fusao da preposicao 'a' com demonstrativo 'aquele' (que inicia em 'a'), independencia do genero do nome 'relatório'. Segunda lacuna 'a' sem crase antes do infinitivo 'participar' sem artigo feminino. Opcao A acentua indevidamente infinitivo e omite primeira fusao. Opcao B nega crase com demonstrativo. Opcao C acentua toda preposicao 'a' independentemente do contexto."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura africana de língua portuguesa",
    "contentSha256": "daedaff8cb6c8170958d2a08ce7666146d33b1a5b8ff0e63359f956c8e0ba473",
    "draftMethod": "Autoria e conferência bibliográfica Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.instituto-camoes.pt/sobre/comunicacao/noticias/literaturas-africanas-de-lingua-portuguesa",
      "https://repositorio.unilab.edu.br/jspui/handle/123456789/6146",
      "https://periodicos.ufmg.br/index.php/cesp/article/view/65964",
      "https://pnlcv.cv/chiquinho/",
      "https://periodicos.unb.br/index.php/cerrados/article/view/45818",
      "https://www.uccla.pt/noticias/uccla-apoia-projeto-cancoes-para-abreviar-distancias-uma-viagem-pela-lingua-portuguesa"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Basic task: compared Lusophone African literatures in club scenario; verified option B (index 1) as correct since linguistic shared language enables approximation without erasing contextual particularities, directly contradicting A's genre uniformity mandate, C's national determination claim dispensing reading, and D's continental literature scope confusion; resolution independently confirmed and exceeds 80 characters in independent analysis"
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Intermediate task situating Pepetela's Mayombe in Angola's anti-colonial struggle; verified correct option D (index 3) that anti-colonial context contextualizes reading but doesn't convert fiction to neutral documentary, while requiring analysis of character and perspective construction; option A incorrectly obligatorily situates post-independence civil war, option B falsely proves literal real-person character concordance, and option C inappropriately dispenses other African literatures from single novel representation; resolution independently confirmed and exceeds 80 characters"
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Advanced microtext interpretation task with original Kognos text not from African work; verified correct option A (index 0) that oral transmission and written re-creation of memory are related but don't demonstrate narrative voice as real author, while respecting the created microtext's explicit modification of 'the beginning'; option B extrapolates to all continent writers without evidence, C contradicts 'troquei o começo,' and D confuses narrator and author with biographical identification - resolution independently confirmed and exceeds 80 characters"
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Planejamento e projeto de texto",
    "contentSha256": "1153f0a051dd009e39ba45318022deec477f5ded05a485f1d68d80fe4f503cc0",
    "draftMethod": "Autoria e verificação de comandos Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-cartilha-da-redacao-esta-disponivel",
      "https://www.fuvest.br/fuvest-2027-fuvest-anuncia-mudancas-para-as-proximas-edicoes-do-seu-vestibular/",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/developing_an_outline/how_to_outline.html",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa 2 defende horários e canais de atendimento compatíveis com o período noturno e explica como enfrentam barreiras de acesso, impactando diretamente o recorte de ampliar acesso de estudantes noturnos a serviços bibliotecários, enquanto as outras opções omitem o problema delimitado ou mudam de objeto."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A alternativa 1 distingue a análise de impressões desnecessárias da discussão de procedimentos para evitá-las, atribuindo contribuições específicas a cada bloco e evitando a repetição presente no enunciado, ao contrário de manter a repetição (opção 0), inventar percentual (opção 2) ou inserir biografia unrelated (opção 3)."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa 3 restringe a tese à possibilidade condicionada discutida e explica os limites do exemplo hipotético, alinhando a promessa universal 'todo projeto escolar digital melhora a participação' à sustentação condicionada, ao contrário de conservar 'todo' com conectivo ilógico (opção 0), retirar condições (opção 1) ou inventar pesquisa (opção 2)."
      }
    ]
  }
] as const;
